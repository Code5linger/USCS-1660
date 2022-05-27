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
      default: "No interest when paid<br/>in full within 12 months.",
    },
    {
      name: "headline_xy_width_hex_size",
      type: "text",
      default:
        "5,47, 290, #4a3c31, 21" /*4,50, 295, #3e2715, #008da0 #008da0  #47d5cd  #4a3c31 20 */,
    },
    {
      name: "subheadlineText",
      type: "text",
      default: "SAVE ON CEMETERY PROPERTY",
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
      default: "-6,473, 300, #008da0, 14.7",
    },
    {
      name: "backgroundColor",
      type: "text",
      default: "#fff",
    },
    {
      name: "backgroundImage",
      type: "image",
      default: "images/SCI_APR22_DCO_OFFER_V2_300x600.jpg",
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
      default: "images/CTA_default_300x600.png",
    },
    {
      name: "ctaTxt",
      type: "text",
      default: "ACT NOW",
    },
    {
      name: "ctaArrow",
      type: "image",
      default: "images/button-arrow.svg",
    },
    {
      name: "cta_xy_width_hex_size",
      type: "text",
      default: "82,439, 150, #4a3c31, 14",
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
