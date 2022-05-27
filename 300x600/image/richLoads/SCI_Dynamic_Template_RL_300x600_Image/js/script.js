var imageArray = new Array(),
    loadedImgs = 0,
    storeFailed = false,
    storeItem,
    locationText,
    starRating,
    useRating = false,
    toAnimateElements = document.querySelectorAll(".to-animate"),
    tl = new TimelineMax({}),
    adWidth, adHeight,
    checkTimer;

window.onload = function () {
    initializeAPI();
}

function initializeAPI() {
    main.classList.add(checkPlatform()[0] + "-" + checkPlatform()[1]);

    myFT.on("richload", function () {
        myFT.on("instantads", function () {
            checkTimer = setInterval(checkAPI, 100);
        });
    });
}

var checkAPI = function () {
    if (myFT.richloadsLoaded == true && myFT.instantAdsLoaded == true) {
        clearInterval(checkTimer);
        setInstantAds();
    }
}

function setInstantAds() {
    try {
        adWidth = myFT.getManifest('width');
        adHeight = myFT.getManifest('height');
        //SET IF RATING WILL BE USED
        switch(myFT.instantAds.useRatingStars.toLowerCase()) {
            case "yes":
                useRating = true;
                break;
            case "no":
                useRating = false;
                break;
        }
        
        //THEME COLOR
        main.style.backgroundColor = myFT.instantAds.backgroundColor;
        
        //RECTANGLE 
        rectangle.style.backgroundColor = myFT.instantAds.rectangleColor;
        getProperties(rectangle, myFT.instantAds.colorBarRect);
        
        //HEADLINE
        headline.innerHTML = myFT.instantAds.headlineTxt;
        getProperties(headline, myFT.instantAds.headline_xy_width_hex_size);
        
        //SUBHEADLINE
        subHeadline.innerHTML = myFT.instantAds.subheadlineText;
        getProperties(subHeadline, myFT.instantAds.subheadline_xy_width_hex_size);
        
        //LEGAL
        legal.innerHTML = myFT.instantAds.legalText;
        getProperties(legal, myFT.instantAds.legal_xy_width_hex_size);
        
        //CLICK TEXT
        clickText.innerHTML = myFT.instantAds.clickText;
        getProperties(clickText, myFT.instantAds.clickText_xy_width_hex_size);
        
        //CTA TEXT
        ctaText.innerHTML = myFT.instantAds.ctaTxt;
        if(ctaText.innerHTML !== ""){
            getProperties(ctaTextWrapper, myFT.instantAds.cta_xy_width_hex_size);  
            imageArray.push([ctaArrow,myFT.instantAds.ctaArrow]);
            if (myFT.instantAds.ctaArrow.indexOf("blank") < 0) {
                tl.set(ctaArrow,{x:-12,display:'inline-block'})
                var ctaMove = (ctaArrow.offsetWidth)/2;
                tl.set(ctaText,{x:ctaMove});
            }
        }
        
        //SET UP IMAGES
        imageArray.push([bg, myFT.instantAds.backgroundImage],
                        [logo, myFT.instantAds.logoImage],
                        [cta, myFT.instantAds.ctaImage]
                         ); 
        //CHANGE BG IMAGE IF ALT IS PRESENT
//        if(myFT.instantAds.backgroundImageALT) {
//            imageArray.push([bg, myFT.instantAds.backgroundImageALT]);
//        }   
        getProperties(bg, myFT.instantAds.backgroundImage_xy);
        getProperties(logo, myFT.instantAds.logoImage_xy);
        
        getProperties(document.querySelector("#locationWrapper"), myFT.instantAds.location_xy_width_hex_size);
        
        locatorInit();
        
        //INSERT CSS
        insertCss.innerHTML = myFT.instantAds.insertCSS;
        

    } catch (error) {
        console.error("Error on setInstantAds(): " + error.message);
    }
}

//FUNCTION TO GET ELEMENT'S PROPERTIES
function getProperties(elem, properties) {    
    if(properties !== "") {
        if(properties.split(',').length >= 5) {
            elem.style.fontSize = properties.split(',')[4] + "px";
        }
        if(properties.split(',').length >= 4) {
            if(elem.id == "rectangle") {
                elem.style.height = properties.split(',')[3] + "px";
            }  
            else {
                elem.style.color = properties.split(',')[3];
            }
        }
        if(properties.split(',').length >= 3) {
            elem.style.width = properties.split(',')[2] + "px";
        }
        if(properties.split(',').length >= 2) {
            elem.style.top = properties.split(',')[1] + "px";
        }
        if(properties.split(',').length >= 1) {
            elem.style.left = properties.split(',')[0] + "px";
        }      
    }

}

function locatorInit() {
    var feedURL = myFT.instantAds.feedEndpoint;
    if(myFT.instantAds.feedEndpoint == "" || myFT.instantAds.feedEndpoint.toLowerCase() == "none"){	
        feedURL = myFT.instantAds.defaultFeedEndpoint;
        locationText = myFT.instantAds.defaultLocationText;
        ratingArea.classList.remove("to-animate");
        //ASSIGN CLICKTAG IF STORE LOCATOR FAILS/EMPTY
        myFT.applyClickTag(main, 1, myFT.instantAds.defaultURL);
    }
    if(feedURL == "" || feedURL.toLowerCase() == "none"){	
        locatorSuccess([{name:"EXPRESS",address:"",store_name:"",yext_display_lat_long_latitude:"",yext_display_lat_long_longitude:"",pagesurl:"",store_number:"NONE",default:true}]);	
        return;	
    }	
    try {	
        myFT.require(["storelocator"], function (StoreLocator) {	
            var locator = new StoreLocator({	
                locatorPath: feedURL,	
                locationOrder: ["impression"],	
                maxDistanceMiles: null,	
                maxDistanceKm: null,	
                numberToReturn: 1,	
                extension: ".js",	
                baseURL: " "	
            });	
            locator.on("storesfound", locatorSuccess);	
            locator.on("error", locatorFail);	
            	
            // FOR TESTING LOCALLY	
//            locator.getNearbyStores({	
//                "lat": 33.985829, 	
//                "lng": -118.3941317	
//            });	
            locator.init();	
        });	
    } catch (error) {	
        console.error("Error on locatorInit(): " + error.message);	
        locatorFail();	
    }	
}

function locatorSuccess(stores) {	
    try {	
        if (storeFailed != true) {	
            storeItem = stores;	
            if(storeItem[0].brand_name_for_display_ads !== undefined){
                locationText = storeItem[0].brand_name_for_display_ads;
                
                //ASSIGN CLICKTAG
                myFT.applyClickTag(main, 1, storeItem[0].landing_page_url_lp_y);
            }
            
            var locationCode = ("0"+storeItem[0].location_code);
            locationCode = locationCode.substr(locationCode.length-4,4);
            if (myFT.instantAds.backgroundImageALT.indexOf('[%LOCATIONCODE%]') > 0) {
                if (imageList.indexOf(locationCode) > 0) {
                    imageArray.push([bg, myFT.instantAds.backgroundImageALT.replace("[%LOCATIONCODE%]",locationCode)]);
                }
            } else if(myFT.instantAds.backgroundImageALT) {
                imageArray.push([bg, myFT.instantAds.backgroundImageALT]);
            }

            starRating = storeItem[0].star_rating;
            //TO LOCALLY TEST DIFFERENT STAR RATING JUST UNCOMMENT THE LINE BELOW AND CHANGE THE VALUE TO THE DESIREDSTAR RATING 
//            starRating = 5.0;
            
            document.querySelector("#location").innerHTML = locationText;
            //LOCATION
            // getProperties(document.querySelector("#locationWrapper"), myFT.instantAds.location_xy_width_hex_size);
            
            //IF RATING IS MORE THAN 4.5
            if(parseFloat(starRating) >= 4.5 && useRating == true) {
                imageArray.push([star1, "images/stars-1_0.svg"]);
                imageArray.push([star2, "images/stars-1_0.svg"]);
                imageArray.push([star3, "images/stars-1_0.svg"]);
                imageArray.push([star4, "images/stars-1_0.svg"]);
                document.querySelector("#ratingText").innerHTML = starRating + " RATING"; 
                //ASSIGN APPRORIATE STAR RATING IMAGE
                switch(parseFloat(starRating)) {
                    case 4.5: 
                        imageArray.push([star5, "images/stars-0_5.svg"]);
                        break;
                    case 4.6: 
                        imageArray.push([star5, "images/stars-0_6.svg"]);
                        break;
                    case 4.7: 
                        imageArray.push([star5, "images/stars-0_7.svg"]);
                        break;
                    case 4.8: 
                        imageArray.push([star5, "images/stars-0_8.svg"]);
                        break;
                    case 4.9: 
                        imageArray.push([star5, "images/stars-0_9.svg"]);
                        break;
                    case 5.0: 
                        imageArray.push([star5, "images/stars-1_0.svg"]);
                        break;
                }
                stars.style.height = myFT.instantAds.ratingStar_height + "px";
                star1.style.width = (myFT.instantAds.ratingStar_height)*1.04 + "px";
                star2.style.width = (myFT.instantAds.ratingStar_height)*1.04 + "px";
                star3.style.width = (myFT.instantAds.ratingStar_height)*1.04 + "px";
                star4.style.width = (myFT.instantAds.ratingStar_height)*1.04 + "px";
                star5.style.width = (myFT.instantAds.ratingStar_height)*1.04 + "px";
                getProperties(ratingArea, myFT.instantAds.rating_xy_width);
            }
        }
        
      
    preloadImage(initializeUnit);
    } catch (error) {	
        console.error("Error on locatorSuccess(): " + error.message);	
        locatorFail();	
    }
}

function locatorFail() {	
    try {	
        if (storeFailed != true) {	
            storeFailed = true;	
            ratingArea.classList.remove("to-animate");
            document.querySelector("#location").innerHTML = myFT.instantAds.defaultLocationText;
            console.log("Failed initializing store locator.");
            //ASSIGN CLICKTAG IF STORE LOCATOR FAILS/EMPTY
            myFT.applyClickTag(main, 1, myFT.instantAds.defaultURL);
        }
    preloadImage(initializeUnit);
    }
    catch (error) {	
        console.error("Error on locatorFail(): " + error.message);	
    }
}
   

function preloadImage(callback) {
    try {
        a = imageArray;

        if (a.length != 0) {
            for (var i = 0; i < a.length; i++) {
                if (a[i][0].tagName.toLowerCase() == "img") {
                    a[i][0].src = a[i][1];
                    a[i][0].addEventListener("load", function f(e) {
                        e.currentTarget.removeEventListener(e.type, f);
                        loadedImgs++;
                    }, false);
                } else {
                    a[i][0].style.backgroundImage = "url('" + a[i][1] + "')";

                    var o = new Image();
                        o.src = a[i][1];
                        o.addEventListener("load", function f(e) {
                            e.currentTarget.removeEventListener(e.type, f);
                            loadedImgs++;
                        }, false);
                }
            }

            var t = setInterval(function () {
                if (a.length === loadedImgs) {
                    clearInterval(t);
                    callback();
                }
            }, 100);
        } else {
            setTimeout(callback, 100);
        }
    } catch (error) {
        console.error("Error on preloadImage(): " + error.message);
    }
}

function initializeUnit() {
    try {
        WebFont.load({
            custom: { families: [ 'gothamBold','gothamBook','mrsEaveOtRoman' ] },
            active: function() {
                resizeText(document.querySelector("#locationWrapper"));
                main.style.visibility = "visible";
                animate();
            }
        });
    } catch (error) {
        console.error("Error on initializeUnit(): " + error.message);
    }
}

function animate() {
    var ctaDelay = 3;
    if(subHeadline.innerHTML == "") {
        subHeadline.classList.remove("to-animate");
        ctaDelay -= 1;
    }
    if(headline.innerHTML == "") {
        headline.classList.remove("to-animate");
        ctaDelay -= 1;
    }
    if((myFT.instantAds.ctaImage.indexOf("blank") !== -1)&&(ctaText.innerHTML == "")) {
        tl.set(cta,{display:none});
    } else {
        tl.set(cta,{y:12,opacity:0},'start');
    }
    if(location.innerHTML == "") {
        location.classList.remove("to-animate");
    }
    if(myFT.instantAds.logoImage.indexOf("blank") !== -1) {
        logo.classList.remove("to-animate");
    }   
    if(myFT.instantAds.backgroundImage.indexOf("blank") !== -1 && myFT.instantAds.backgroundImageALT == "") {
        bg.classList.remove("to-animate");
        ctaDelay -= 1;
    }
    if(clickText.innerHTML == "") {
        clickText.classList.remove("to-animate");
    }    
    if(legal.innerHTML == "") {
        legal.classList.remove("to-animate");
    }
    
    tl.addLabel('start')
    ctaDelay = ctaDelay*0.375;
    tl.addLabel('cta','start+='+ctaDelay)
    if (useRating) {
        tl.to(".star", 0.25, {rotation:0.01});
        tl.staggerFromTo(".star", 0.25, {scale:0,opacity:0}, {scale:1,opacity:1,ease: Power1.easeOut}, 0.25,'start');
        tl.to(ratingText, 1.25, {opacity:1,ease: Power4.easeIn}, 'start');
    }
    
    tl.to(".to-animate", 0.25, {rotation:0.01});
//    tl.staggerFromTo(".to-animate", 0.75, {x:-300}, {x:0}, 0.375,'start+='+.25);
    
    tl.to(ctaText, 0.1, {rotation:0.01},'cta')
    tl.to(cta,1,{y:0,opacity:1,ease: Power1.easeOut},'cta')
    tl.to(ctaText,.5,{x:0,ease: Power1.easeOut},'cta+=1.25')
    tl.to(ctaArrow,.5,{x:0,opacity:1,ease: Power1.easeOut},'cta+=1.25')
     
}

function checkPlatform() {
    try {
        var a = new Array();

        if (navigator.platform.toLowerCase().indexOf("mac") > -1) {
            a[0] = "macOS";
        } else if (navigator.platform.toLowerCase().indexOf("win") > -1) {
            a[0] = "windows";
        } else {
            if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
                a[0] = "iOS";
            } else if (navigator.userAgent.match(/Opera Mini/i)) {
                a[0] = "opera";
            } else if (navigator.userAgent.match(/Android/i)) {
                a[0] = "android";
            } else if (navigator.userAgent.match(/BlackBerry/i)) {
                a[0] = "BlackBerry";
            } else if (navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i)) {
                a[0] = "WindowsPhone";
            }
        }

        var MSIE = window.navigator.userAgent.indexOf("MSIE ");
        var Edge = window.navigator.userAgent.indexOf("Edge/");
        var Trdt = window.navigator.userAgent.indexOf("Trident/");

        if (navigator.userAgent.toLowerCase().indexOf("chrome") > -1) {
            a[1] = "chrome";
        } else if (navigator.userAgent.toLowerCase().indexOf("firefox") > -1) {
            a[1] = "firefox";
        } else if (navigator.vendor && navigator.vendor.toLowerCase().indexOf("apple") > -1) {
            a[1] = "safari";
        } else if (MSIE > 0 || Edge > 0 || Trdt > 0) {
            a[1] = "IE";
        }

        return a;
    } catch (error) {
        console.error("Error on checkPlatform(): " + error.message);
    }
}

function resizeText(e) {
    var h = e.children[0].getBoundingClientRect().height;
    var f = parseFloat(window.getComputedStyle(e, null).getPropertyValue("font-size"));
    var l = e.getBoundingClientRect().height;
    if (l <= (f * 3.9)+1) {
       e.style.height = l +'px';
    }
    while (h > l) {
        if (f >= 12) {
            f--;
            e.style.fontSize = f + "px";
            var h = e.children[0].getBoundingClientRect().height;
            var f = parseFloat(window.getComputedStyle(e, null).getPropertyValue("font-size"));
        } else {
            break;
        }
    }
}