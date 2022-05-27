FT.manifest({
  filename: "index.html",
  width: 300,
  height: 600,
  clickTagCount: 1,
  richLoads: [
    {
      name: "dynamicRichload",
      src: "SCI_Dynamic_Template_RL_300x600_Image",
    },
  ],
  instantAds: [
    {
      name: "dynamicRichload",
      type: "richLoad",
      default: "SCI_Dynamic_Template_RL_300x600_Image",
    },
    {
      name: "feedEndpoint",
      type: "text",
      default: "https://s3cf.flashtalking.com/feeds/sci/US-FBI4109/stores/",
    },
    {
      name: "defaultFeedEndpoint",
      type: "text",
      default: "https://s3cf.flashtalking.com/feeds/sci/US-FBI4109/stores/",
    },
    {
      name: "insertCSS",
      type: "text",
      default: "",
    },
    {
      name: "headlineTxt",
      type: "text",
      default: "Plan a beautiful,<br/>personal remembrance.",
    },
    {
      name: "headline_xy_width_hex_size",
      type: "text",
      default: "5,60, 290, #4a3c31, 21" /*5,47, 290, #4a3c31, 21 */,
    },
    {
      name: "subheadlineText",
      type: "text",
      default: "",
    },
    {
      name: "subheadline_xy_width_hex_size",
      type: "text",
      default: "0,25, 300, #008da0, 13",
    },
    {
      name: "legalText",
      type: "text",
      default: "Click for terms and conditions.",
    },
    {
      name: "legal_xy_width_hex_size",
      type: "text",
      default: "104,533, 300, #008da0, 6" /*#000 */,
    },
    {
      name: "defaultLocationText",
      type: "text",
      default:
        "Alexander-White Mullen Funeral<br/>Home & Mount Lebanon Cemetary",
    },
    {
      name: "location_xy_width_hex_size",
      type: "text",
      default: "-5,482, 300, #008da0, 14.7",
      /*    width: 300px;
    top: 482px;
    left: -5px;
    height: 57.8691px; */
    },
    {
      name: "backgroundColor",
      type: "text",
      default: "#fff",
    },
    {
      name: "backgroundImage",
      type: "image",
      default: "images/hero_300x600.jpg",
    },
    {
      name: "backgroundImageALT",
      type: "text",
      default: "",
    },
    {
      name: "backgroundImage_xy",
      type: "text",
      default: "0,0",
    },
    {
      name: "logoImage",
      type: "image",
      default: "images/Dignity_logo_300x600.png",
    },
    {
      name: "logoImage_xy",
      type: "text",
      default: "0,0",
    },
    {
      name: "ctaImage",
      type: "image",
      default: "images/Cta_Button_300x600.png",
    },
    {
      name: "ctaTxt",
      type: "text",
      default: "LEARN MORE",
    },
    {
      name: "ctaArrow",
      type: "image",
      default: "images/button-arrow.svg",
    },
    {
      name: "cta_xy_width_hex_size",
      type: "text",
      default: "74,447, 150, #4a3c31, 14",
      /*width: 150px;
    top: 447px;
    left: 83px; */
    },
    {
      name: "clickText",
      type: "text",
      default: "",
    },
    {
      name: "clickText_xy_width_hex_size",
      type: "text",
      default: "0,239, 210, #000, 8",
    },
    {
      name: "colorBarRect",
      type: "text",
      default: "0, 544, 300, 65",
    },
    {
      name: "rectangleColor",
      type: "text",
      default: "#47d5cd",
    },
    {
      name: "useRatingStars",
      type: "text",
      default: "yes",
    },
    {
      name: "ratingStar_height",
      type: "text",
      default: "41",
    },
    {
      name: "rating_xy_width",
      type: "text",
      default: "0,44, 300",
    },
    {
      name: "defaultURL",
      type: "text",
      default: "",
    },
  ],
});
