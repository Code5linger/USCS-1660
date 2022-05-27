FT.manifest({
  filename: "index.html",
  width: 300,
  height: 600,
  clickTagCount: 1,
  richLoads: [
    {
      name: "dynamicRichload",
      src: "SCI_Dynamic_Template_RL_300x600_Default",
    },
  ],
  instantAds: [
    {
      name: "dynamicRichload",
      type: "richLoad",
      default: "SCI_Dynamic_Template_RL_300x600__Default",
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
      default: "#logo{width: 98px !important;}",
    },
    {
      name: "headlineTxt",
      type: "text",
      default: "The detail we're most proud of.",
    },
    {
      name: "headline_xy_width_hex_size",
      type: "text",
      default: "0,162, 300, #000, 52",
    },
    {
      name: "subheadlineText",
      type: "text",
      default: "",
    },
    {
      name: "subheadline_xy_width_hex_size",
      type: "text",
      default: "1,14, 300, #47d5cd, 12",
    },
    {
      name: "legalText",
      type: "text",
      default: "",
    },
    {
      name: "legal_xy_width_hex_size",
      type: "text",
      default: "0,0, 300, #000, 10",
    },
    {
      name: "defaultLocationText",
      type: "text",
      default: "Cook-Walden Funeral, Cremation & Memorial Park",
    },
    {
      name: "location_xy_width_hex_size",
      type: "text",
      default: "0,428, 220, #000, 22",
    },
    {
      name: "backgroundColor",
      type: "text",
      default: "#fff",
    },
    {
      name: "backgroundImage",
      type: "image",
      default: "images/blank.png",
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
      default: "images/logo_dignity_300x600.png",
    },
    {
      name: "logoImage_xy",
      type: "text",
      default: "99,261",
    },
    {
      name: "ctaImage",
      type: "image",
      default: "images/Rating_Cta_Button_300x250.png",
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
      default: "74,349, 150, #000, 14",
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
      default: "0, 539, 300, 60",
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
