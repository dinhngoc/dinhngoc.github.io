TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "viewerArea": "this.MainViewer",
  "id": "MainViewerVideoPlayer",
  "buttonStop": [
   {
    "paddingRight": 0,
    "verticalAlign": "middle",
    "mode": "push",
    "paddingLeft": 0,
    "width": "3.03%",
    "transparencyActive": true,
    "borderSize": 0,
    "borderRadius": 0,
    "horizontalAlign": "center",
    "height": "5.48%",
    "click": "this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, false, 0, this.effect_9B0AF4E2_96C4_F045_41D3_0E00FEE03A15, 'hideEffect', false)",
    "shadow": false,
    "top": "2%",
    "maxHeight": 50,
    "paddingBottom": 0,
    "cursor": "hand",
    "minWidth": 50,
    "id": "IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4",
    "backgroundOpacity": 0,
    "class": "IconButton",
    "paddingTop": 0,
    "iconURL": "skin/IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4.png",
    "maxWidth": 50,
    "minHeight": 50,
    "right": "2%",
    "rollOverIconURL": "skin/IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4_rollover.png"
   },
   "this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB"
  ],
  "displayPlaybackBar": true,
  "buttonPlay": {
   "toolTipBorderRadius": 3,
   "paddingRight": 0,
   "toolTipShadowOpacity": 1,
   "verticalAlign": "middle",
   "mode": "push",
   "paddingLeft": 0,
   "width": "100%",
   "toolTipBorderSize": 1,
   "toolTip": "See Photos",
   "transparencyActive": true,
   "toolTipTextShadowColor": "#000000",
   "toolTipPaddingLeft": 6,
   "toolTipBorderColor": "#767676",
   "borderSize": 0,
   "toolTipBackgroundColor": "#000000",
   "borderRadius": 0,
   "horizontalAlign": "center",
   "height": "100%",
   "toolTipShadowVerticalLength": 0,
   "click": "this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, true, 0, this.effect_98AADBB0_96C5_F0C5_41B2_1C4D08E503DB, 'showEffect', false); this.playList_64A49B5F_77B3_9FA8_41B1_2DC162E8619A.set('selectedIndex', 0)",
   "toolTipTextShadowBlurRadius": 3,
   "toolTipOpacity": 0.7,
   "toolTipPaddingBottom": 4,
   "shadow": false,
   "maxHeight": 70,
   "visible": false,
   "paddingBottom": 0,
   "toolTipFontSize": 12,
   "toolTipShadowHorizontalLength": 0,
   "cursor": "hand",
   "toolTipShadowColor": "#333333",
   "minWidth": 25,
   "toolTipFontWeight": "normal",
   "id": "IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED",
   "toolTipShadowSpread": 0,
   "toolTipTextShadowOpacity": 0,
   "backgroundOpacity": 0,
   "toolTipShadowBlurRadius": 3,
   "toolTipFontColor": "#606060",
   "class": "IconButton",
   "paddingTop": 0,
   "iconURL": "skin/IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED.png",
   "toolTipFontFamily": "Arial",
   "maxWidth": 70,
   "toolTipPaddingTop": 4,
   "minHeight": 25,
   "toolTipPaddingRight": 6,
   "toolTipFontStyle": "normal",
   "rollOverIconURL": "skin/IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED_rollover.png"
  },
  "class": "VideoPlayer"
 },
 {
  "viewerArea": {
   "paddingRight": 0,
   "toolTipShadowOpacity": 1,
   "playbackBarHeadShadowOpacity": 0.7,
   "playbackBarBackgroundColor": [
    "#FFFFFF"
   ],
   "progressBarOpacity": 1,
   "playbackBarHeadShadowHorizontalLength": 0,
   "playbackBarHeight": 10,
   "playbackBarHeadWidth": 6,
   "playbackBarProgressBorderSize": 0,
   "playbackBarBackgroundColorDirection": "vertical",
   "playbackBarRight": 0,
   "playbackBarHeadShadow": true,
   "shadow": false,
   "toolTipShadowVerticalLength": 0,
   "toolTipPaddingBottom": 4,
   "progressBackgroundOpacity": 1,
   "progressBarBorderSize": 0,
   "progressBarBorderRadius": 0,
   "progressBorderRadius": 0,
   "toolTipFontWeight": "normal",
   "paddingBottom": 0,
   "toolTipFontSize": 12,
   "playbackBarProgressBorderRadius": 0,
   "toolTipShadowColor": "#333333",
   "toolTipShadowBlurRadius": 3,
   "toolTipShadowSpread": 0,
   "toolTipTextShadowOpacity": 0,
   "progressBottom": 2,
   "playbackBarProgressBackgroundColorRatios": [
    0
   ],
   "toolTipFontColor": "#606060",
   "transitionMode": "blending",
   "paddingTop": 0,
   "progressHeight": 10,
   "playbackBarBorderRadius": 0,
   "playbackBarProgressBorderColor": "#000000",
   "minHeight": 1,
   "toolTipPaddingRight": 6,
   "toolTipBorderRadius": 3,
   "playbackBarHeadBackgroundColor": [
    "#111111",
    "#666666"
   ],
   "progressLeft": 0,
   "progressBackgroundColorRatios": [
    0
   ],
   "playbackBarHeadBorderRadius": 0,
   "playbackBarBorderColor": "#FFFFFF",
   "paddingLeft": 0,
   "playbackBarProgressOpacity": 1,
   "toolTipBorderSize": 1,
   "toolTipBorderColor": "#767676",
   "playbackBarHeadShadowBlurRadius": 3,
   "playbackBarHeadBorderColor": "#000000",
   "toolTipTextShadowColor": "#000000",
   "toolTipPaddingLeft": 6,
   "playbackBarHeadBackgroundColorDirection": "vertical",
   "playbackBarBackgroundOpacity": 1,
   "height": "100%",
   "playbackBarBorderSize": 0,
   "borderSize": 0,
   "toolTipBackgroundColor": "#000000",
   "playbackBarLeft": 0,
   "playbackBarHeadHeight": 15,
   "borderRadius": 0,
   "playbackBarHeadBackgroundColorRatios": [
    0,
    1
   ],
   "toolTipTextShadowBlurRadius": 3,
   "toolTipOpacity": 0.7,
   "width": "100%",
   "playbackBarOpacity": 1,
   "playbackBarHeadShadowColor": "#000000",
   "progressRight": 0,
   "playbackBarHeadBorderSize": 0,
   "progressBarBackgroundColorRatios": [
    0
   ],
   "top": "0%",
   "progressBarBorderColor": "#000000",
   "playbackBarHeadOpacity": 1,
   "progressOpacity": 1,
   "progressBackgroundColorDirection": "vertical",
   "playbackBarProgressBackgroundColor": [
    "#3399FF"
   ],
   "minWidth": 1,
   "id": "ViewerAreaLabeled_9FD7235A_96CD_9045_41D9_23A3BCBDB1C6",
   "toolTipShadowHorizontalLength": 0,
   "progressBarBackgroundColorDirection": "vertical",
   "progressBorderColor": "#000000",
   "class": "ViewerArea",
   "playbackBarBottom": 0,
   "progressBarBackgroundColor": [
    "#3399FF"
   ],
   "toolTipFontFamily": "Arial",
   "left": "0%",
   "progressBackgroundColor": [
    "#FFFFFF"
   ],
   "progressBorderSize": 0,
   "playbackBarProgressBackgroundColorDirection": "vertical",
   "playbackBarHeadShadowVerticalLength": 0,
   "toolTipPaddingTop": 4,
   "toolTipFontStyle": "normal"
  },
  "id": "ViewerAreaLabeled_9FD7235A_96CD_9045_41D9_23A3BCBDB1C6PhotoAlbumPlayer",
  "buttonPrevious": {
   "paddingRight": 0,
   "verticalAlign": "middle",
   "mode": "push",
   "paddingLeft": 0,
   "width": "4.24%",
   "transparencyActive": true,
   "borderSize": 0,
   "borderRadius": 0,
   "horizontalAlign": "center",
   "shadow": false,
   "top": "40%",
   "maxHeight": 70,
   "paddingBottom": 0,
   "cursor": "hand",
   "minWidth": 70,
   "id": "IconButton_9FEA51EA_96CC_905A_41D3_F42DB0CD0A74",
   "backgroundOpacity": 0,
   "bottom": "40%",
   "class": "IconButton",
   "paddingTop": 0,
   "left": "1%",
   "maxWidth": 70,
   "minHeight": 70,
   "iconURL": "skin/IconButton_9FEA51EA_96CC_905A_41D3_F42DB0CD0A74.png",
   "rollOverIconURL": "skin/IconButton_9FEA51EA_96CC_905A_41D3_F42DB0CD0A74_rollover.png"
  },
  "buttonNext": {
   "paddingRight": 0,
   "verticalAlign": "middle",
   "mode": "push",
   "paddingLeft": 0,
   "width": "4.24%",
   "transparencyActive": true,
   "borderSize": 0,
   "borderRadius": 0,
   "horizontalAlign": "center",
   "shadow": false,
   "top": "40%",
   "maxHeight": 70,
   "paddingBottom": 0,
   "cursor": "hand",
   "minWidth": 70,
   "id": "IconButton_9FB9BD3F_96C5_703B_41D7_65AEE6E85A96",
   "backgroundOpacity": 0,
   "bottom": "40%",
   "class": "IconButton",
   "paddingTop": 0,
   "maxWidth": 70,
   "minHeight": 70,
   "right": "1%",
   "iconURL": "skin/IconButton_9FB9BD3F_96C5_703B_41D7_65AEE6E85A96.png",
   "rollOverIconURL": "skin/IconButton_9FB9BD3F_96C5_703B_41D7_65AEE6E85A96_rollover.png"
  },
  "buttonPlay": "this.IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED",
  "buttonStop": [
   "this.IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4",
   "this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB"
  ],
  "class": "PhotoAlbumPlayer"
 },
 {
  "frames": [
   {
    "thumbnailUrl": "media/panorama_6BE40682_606A_FF06_41C3_B3B6845ECE6A_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "maps": [
       {
        "hfov": 5.02,
        "yaw": 140.51,
        "image": {
         "levels": [
          {
           "height": 34,
           "width": 34,
           "url": "media/panorama_6BE40682_606A_FF06_41C3_B3B6845ECE6A_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 5.38
       }
      ],
      "enabledInCardboard": true,
      "useHandCursor": true,
      "id": "overlay_6BE4C682_606A_FF06_41C7_F300FD6427E2",
      "areas": [
       {
        "displayTooltipInTouchScreens": true,
        "click": "this.startPanoramaWithCamera(this.panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E, this.camera_552A6ED5_5BF2_F2BA_41D6_D4FD03CB3A2E); this.mainPlayList.set('selectedIndex', 1)",
        "mapColor": "#FF0000",
        "toolTip": "ENTRANCE",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "yaw": 140.51,
        "hfov": 5.02,
        "image": {
         "levels": [
          {
           "height": 69,
           "width": 69,
           "url": "media/panorama_6BE40682_606A_FF06_41C3_B3B6845ECE6A_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 5.38
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "maps": [
       {
        "hfov": 7.16,
        "yaw": 140.49,
        "image": {
         "levels": [
          {
           "height": 50,
           "width": 50,
           "url": "media/panorama_6BE40682_606A_FF06_41C3_B3B6845ECE6A_0_HS_5_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 5.92
       }
      ],
      "enabledInCardboard": true,
      "useHandCursor": true,
      "id": "overlay_6BE4B682_606A_FF06_41BB_7B860FB876D9",
      "areas": [
       {
        "displayTooltipInTouchScreens": true,
        "click": "this.startPanoramaWithCamera(this.panorama_6CEBB7E8_606A_7D03_41CE_69723C00AA9F, this.camera_6531BDD7_77B3_9AB9_41DD_ABA69A69B329); this.mainPlayList.set('selectedIndex', 1)",
        "mapColor": "#FF0000",
        "toolTip": "ENTRANCE",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "yaw": 140.49,
        "hfov": 7.16,
        "image": {
         "levels": [
          {
           "height": 100,
           "width": 100,
           "url": "media/panorama_6BE40682_606A_FF06_41C3_B3B6845ECE6A_0_HS_5_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 5.92
       }
      ]
     },
     {
      "rollOverDisplay": true,
      "maps": [
       {
        "hfov": 0,
        "yaw": -171.35,
        "image": {
         "levels": [
          {
           "height": 1,
           "width": 1,
           "url": "media/panorama_6BE40682_606A_FF06_41C3_B3B6845ECE6A_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 85.73
       }
      ],
      "enabledInCardboard": true,
      "useHandCursor": true,
      "id": "overlay_6BE48682_606A_FF06_41D0_A48635ED687C",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_6CD96857_606E_330E_41D4_28DA4961B1BD, this.camera_65270DE1_77B3_9A99_419F_ADDA28637C41); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 5); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 8)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "yaw": -171.35,
        "hfov": 0,
        "image": {
         "levels": [
          {
           "height": 1,
           "width": 1,
           "url": "media/panorama_6BE40682_606A_FF06_41C3_B3B6845ECE6A_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 85.73
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 2500,
       "width": 5000,
       "url": "media/panorama_6BE40682_606A_FF06_41C3_B3B6845ECE6A_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_6BE40682_606A_FF06_41C3_B3B6845ECE6A.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "partial": false,
  "hfovMin": 100,
  "class": "Panorama",
  "pitch": 0,
  "hfovMax": 120,
  "thumbnailUrl": "media/panorama_6BE40682_606A_FF06_41C3_B3B6845ECE6A_t.jpg",
  "id": "panorama_6BE40682_606A_FF06_41C3_B3B6845ECE6A",
  "mapLocations": [
   {
    "x": 303.34,
    "map": {
     "fieldOfViewOverlayInsideColor": "#999999",
     "minimumZoomFactor": 0.5,
     "width": 1468,
     "id": "map_4E02A832_427B_EE04_41CC_8E1CEC03E8D3",
     "initialZoomFactor": 1,
     "class": "Map",
     "fieldOfViewOverlayInsideOpacity": 0.3,
     "thumbnailUrl": "media/map_4E02A832_427B_EE04_41CC_8E1CEC03E8D3_t.jpg",
     "image": {
      "levels": [
       {
        "height": 864,
        "width": 1468,
        "url": "media/map_4E02A832_427B_EE04_41CC_8E1CEC03E8D3.jpeg",
        "class": "ImageResourceLevel"
       },
       {
        "height": 432,
        "width": 734,
        "url": "media/map_4E02A832_427B_EE04_41CC_8E1CEC03E8D3_lq.jpeg",
        "class": "ImageResourceLevel",
        "grayscale": true
       }
      ],
      "class": "ImageResource"
     },
     "fieldOfViewOverlayRadiusScale": 0.09,
     "height": 864,
     "label": "first floor",
     "fieldOfViewOverlayOutsideOpacity": 0,
     "overlays": [
      {
       "rollOverDisplay": false,
       "id": "overlay_4E318587_4299_762E_41B8_79C61CBB293C",
       "map": {
        "offsetY": 0,
        "x": 253.34,
        "width": 100,
        "y": 365.62,
        "height": 100,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 50,
           "width": 50,
           "url": "media/map_4E02A832_427B_EE04_41CC_8E1CEC03E8D3_HS_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "image": {
        "x": 253.34,
        "y": 365.62,
        "width": 100,
        "height": 100,
        "image": {
         "levels": [
          {
           "height": 100,
           "width": 100,
           "url": "media/map_4E02A832_427B_EE04_41CC_8E1CEC03E8D3_HS_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayImage"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 0)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      }
     ],
     "fieldOfViewOverlayOutsideColor": "#000000",
     "scaleMode": "fit_inside",
     "maximumZoomFactor": 1.2
    },
    "y": 415.62,
    "angle": 71.83,
    "class": "PanoramaMapLocation"
   }
  ],
  "label": "STREET VIEW",
  "hfov": 360,
  "adjacentPanoramas": [
   {
    "distance": 1,
    "panorama": {
     "frames": [
      {
       "thumbnailUrl": "media/panorama_6A977261_617E_B0AF_41D7_BFCC461810A7_t.jpg",
       "overlays": [
        {
         "rollOverDisplay": false,
         "maps": [
          {
           "hfov": 5.48,
           "yaw": -178.25,
           "image": {
            "levels": [
             {
              "height": 49,
              "width": 49,
              "url": "media/panorama_6A977261_617E_B0AF_41D7_BFCC461810A7_0_HS_0_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -40.5
          }
         ],
         "enabledInCardboard": true,
         "useHandCursor": true,
         "id": "overlay_6A97A261_617E_B0AF_41D7_24B743DC61D2",
         "areas": [
          {
           "displayTooltipInTouchScreens": true,
           "click": "this.startPanoramaWithCamera(this.panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C, this.camera_569B6D6C_5BF2_F669_41A7_8467FF9A6DAA); this.mainPlayList.set('selectedIndex', 6)",
           "mapColor": "#FF0000",
           "toolTip": "BALCONY",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "items": [
          {
           "yaw": -178.25,
           "hfov": 5.48,
           "image": {
            "levels": [
             {
              "height": 99,
              "width": 99,
              "url": "media/panorama_6A977261_617E_B0AF_41D7_BFCC461810A7_0_HS_0_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -40.5
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "maps": [
          {
           "hfov": 5.53,
           "yaw": 83.07,
           "image": {
            "levels": [
             {
              "height": 41,
              "width": 41,
              "url": "media/panorama_6A977261_617E_B0AF_41D7_BFCC461810A7_0_HS_2_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -22.75
          }
         ],
         "enabledInCardboard": true,
         "useHandCursor": true,
         "id": "overlay_6A97B261_617E_B0AF_41D1_B251D53872F0",
         "areas": [
          {
           "displayTooltipInTouchScreens": true,
           "click": "this.startPanoramaWithCamera(this.panorama_46009756_572D_4167_41C6_2B49BD1EF7CE, this.camera_56E74D59_5BF2_F7AA_41D0_B6C262499B65); this.mainPlayList.set('selectedIndex', 7)",
           "mapColor": "#FF0000",
           "toolTip": "WC",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "items": [
          {
           "yaw": 83.07,
           "hfov": 5.53,
           "image": {
            "levels": [
             {
              "height": 83,
              "width": 83,
              "url": "media/panorama_6A977261_617E_B0AF_41D7_BFCC461810A7_0_HS_2_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -22.75
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "maps": [
          {
           "hfov": 5.37,
           "yaw": 34.84,
           "image": {
            "levels": [
             {
              "height": 37,
              "width": 37,
              "url": "media/panorama_6A977261_617E_B0AF_41D7_BFCC461810A7_0_HS_3_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayMap",
           "pitch": 6.1
          }
         ],
         "enabledInCardboard": true,
         "useHandCursor": true,
         "id": "overlay_6A978261_617E_B0AF_41D6_7BE73BA5D265",
         "areas": [
          {
           "displayTooltipInTouchScreens": true,
           "click": "this.startPanoramaWithCamera(this.panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D, this.camera_56C57D3C_5BF2_F7EA_41BA_23AB5285E45A); this.mainPlayList.set('selectedIndex', 8)",
           "mapColor": "#FF0000",
           "toolTip": "2 BEDROOM",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "items": [
          {
           "yaw": 34.84,
           "hfov": 5.37,
           "image": {
            "levels": [
             {
              "height": 74,
              "width": 74,
              "url": "media/panorama_6A977261_617E_B0AF_41D7_BFCC461810A7_0_HS_3_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayImage",
           "pitch": 6.1
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "maps": [
          {
           "hfov": 5.27,
           "yaw": 34.74,
           "image": {
            "levels": [
             {
              "height": 37,
              "width": 37,
              "url": "media/panorama_6A977261_617E_B0AF_41D7_BFCC461810A7_0_HS_4_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -12.59
          }
         ],
         "enabledInCardboard": true,
         "useHandCursor": true,
         "id": "overlay_6A979261_617E_B0AF_41A6_BE54EDD373AB",
         "areas": [
          {
           "displayTooltipInTouchScreens": true,
           "click": "this.startPanoramaWithCamera(this.panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC, this.camera_56F35D45_5BF2_F79A_41D0_857D96DC10DF); this.mainPlayList.set('selectedIndex', 4)",
           "mapColor": "#FF0000",
           "toolTip": "1 BEDROOM",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "items": [
          {
           "yaw": 34.74,
           "hfov": 5.27,
           "image": {
            "levels": [
             {
              "height": 74,
              "width": 74,
              "url": "media/panorama_6A977261_617E_B0AF_41D7_BFCC461810A7_0_HS_4_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -12.59
          }
         ]
        },
        {
         "rollOverDisplay": true,
         "maps": [
          {
           "hfov": 0,
           "yaw": -162.92,
           "image": {
            "levels": [
             {
              "height": 1,
              "width": 1,
              "url": "media/panorama_6A977261_617E_B0AF_41D7_BFCC461810A7_0_HS_1_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayMap",
           "pitch": 76.94
          }
         ],
         "enabledInCardboard": true,
         "useHandCursor": true,
         "id": "overlay_6A97D261_617E_B0AF_41CF_A4EC460D5CAA",
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_6CD96857_606E_330E_41D4_28DA4961B1BD, this.camera_641F6BDC_77B3_9EAF_41C3_E233763BBD68); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 3)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "items": [
          {
           "yaw": -162.92,
           "hfov": 0,
           "image": {
            "levels": [
             {
              "height": 1,
              "width": 1,
              "url": "media/panorama_6A977261_617E_B0AF_41D7_BFCC461810A7_0_HS_1_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayImage",
           "pitch": 76.94
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "maps": [
          {
           "hfov": 7.74,
           "yaw": -178.18,
           "image": {
            "levels": [
             {
              "height": 69,
              "width": 69,
              "url": "media/panorama_6A977261_617E_B0AF_41D7_BFCC461810A7_0_HS_5_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -39.8
          }
         ],
         "enabledInCardboard": true,
         "useHandCursor": true,
         "id": "overlay_6A903261_617E_B0AF_41C8_625EAD8D3F30",
         "areas": [
          {
           "displayTooltipInTouchScreens": true,
           "click": "this.startPanoramaWithCamera(this.panorama_6CE9E5E7_606E_5D0E_41D0_003A6E1B2677, this.camera_64D4DB9E_77B3_9EAB_41B5_2F1302ECA847); this.mainPlayList.set('selectedIndex', 6)",
           "mapColor": "#FF0000",
           "toolTip": "BALCONY",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "items": [
          {
           "yaw": -178.18,
           "hfov": 7.74,
           "image": {
            "levels": [
             {
              "height": 139,
              "width": 139,
              "url": "media/panorama_6A977261_617E_B0AF_41D7_BFCC461810A7_0_HS_5_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -39.8
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "maps": [
          {
           "hfov": 8,
           "yaw": 82.9,
           "image": {
            "levels": [
             {
              "height": 59,
              "width": 59,
              "url": "media/panorama_6A977261_617E_B0AF_41D7_BFCC461810A7_0_HS_6_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -22.11
          }
         ],
         "enabledInCardboard": true,
         "useHandCursor": true,
         "id": "overlay_6A906261_617E_B0AF_41BC_A0855EAB9939",
         "areas": [
          {
           "displayTooltipInTouchScreens": true,
           "click": "this.startPanoramaWithCamera(this.panorama_6D430522_6193_00C9_41B5_ED6C4ECBB6B9, this.camera_643B9BBE_77B3_9EEB_41CC_A609B43AB62C); this.mainPlayList.set('selectedIndex', 7)",
           "mapColor": "#FF0000",
           "toolTip": "WC",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "items": [
          {
           "yaw": 82.9,
           "hfov": 8,
           "image": {
            "levels": [
             {
              "height": 119,
              "width": 119,
              "url": "media/panorama_6A977261_617E_B0AF_41D7_BFCC461810A7_0_HS_6_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -22.11
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "maps": [
          {
           "hfov": 7.65,
           "yaw": 34.82,
           "image": {
            "levels": [
             {
              "height": 53,
              "width": 53,
              "url": "media/panorama_6A977261_617E_B0AF_41D7_BFCC461810A7_0_HS_7_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayMap",
           "pitch": 6.66
          }
         ],
         "enabledInCardboard": true,
         "useHandCursor": true,
         "id": "overlay_6A905261_617E_B0AF_41CC_7B64654FA5FE",
         "areas": [
          {
           "displayTooltipInTouchScreens": true,
           "click": "this.startPanoramaWithCamera(this.panorama_6CD1C202_606E_7706_41A2_313E1DC1AF6A, this.camera_64E34B94_77B3_9EBF_41D6_E1DB3166F720); this.mainPlayList.set('selectedIndex', 8)",
           "mapColor": "#FF0000",
           "toolTip": "2 BEDROOM",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "items": [
          {
           "yaw": 34.82,
           "hfov": 7.65,
           "image": {
            "levels": [
             {
              "height": 106,
              "width": 106,
              "url": "media/panorama_6A977261_617E_B0AF_41D7_BFCC461810A7_0_HS_7_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayImage",
           "pitch": 6.66
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "maps": [
          {
           "hfov": 7.5,
           "yaw": 34.73,
           "image": {
            "levels": [
             {
              "height": 53,
              "width": 53,
              "url": "media/panorama_6A977261_617E_B0AF_41D7_BFCC461810A7_0_HS_8_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -13.17
          }
         ],
         "enabledInCardboard": true,
         "useHandCursor": true,
         "id": "overlay_6A908261_617E_B0AF_418A_E6ADA829CA5F",
         "areas": [
          {
           "displayTooltipInTouchScreens": true,
           "click": "this.startPanoramaWithCamera(this.panorama_6C191CE9_606E_7302_41D6_3E33CDB64ACF, this.camera_64329BC8_77B3_9E97_41CA_1DFA3FEE5ACE); this.mainPlayList.set('selectedIndex', 4)",
           "mapColor": "#FF0000",
           "toolTip": "1 BEDROOM",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "items": [
          {
           "yaw": 34.73,
           "hfov": 7.5,
           "image": {
            "levels": [
             {
              "height": 106,
              "width": 106,
              "url": "media/panorama_6A977261_617E_B0AF_41D7_BFCC461810A7_0_HS_8_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -13.17
          }
         ]
        }
       ],
       "class": "SphericPanoramaFrame",
       "sphere": {
        "levels": [
         {
          "height": 2500,
          "width": 5000,
          "url": "media/panorama_6A977261_617E_B0AF_41D7_BFCC461810A7_hq.jpeg",
          "class": "ImageResourceLevel"
         },
         {
          "height": 1608,
          "width": 3217,
          "url": "media/panorama_6A977261_617E_B0AF_41D7_BFCC461810A7.jpeg",
          "class": "ImageResourceLevel"
         }
        ],
        "class": "ImageResource"
       }
      }
     ],
     "partial": false,
     "hfovMin": 100,
     "class": "Panorama",
     "pitch": 0,
     "hfovMax": 120,
     "thumbnailUrl": "media/panorama_6A977261_617E_B0AF_41D7_BFCC461810A7_t.jpg",
     "id": "panorama_6A977261_617E_B0AF_41D7_BFCC461810A7",
     "label": "MASTER BEDROOM",
     "hfov": 360,
     "adjacentPanoramas": [
      {
       "distance": 1,
       "panorama": {
        "frames": [
         {
          "thumbnailUrl": "media/panorama_6A58246F_6179_90B3_41BF_E08163C94BD1_t.jpg",
          "overlays": [
           {
            "rollOverDisplay": false,
            "maps": [
             {
              "hfov": 6.33,
              "yaw": 12.08,
              "image": {
               "levels": [
                {
                 "height": 52,
                 "width": 52,
                 "url": "media/panorama_6A58246F_6179_90B3_41BF_E08163C94BD1_0_HS_0_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -33.14
             }
            ],
            "enabledInCardboard": true,
            "useHandCursor": true,
            "id": "overlay_6A5FC46F_6179_90B3_41A1_966751D2051C",
            "areas": [
             {
              "displayTooltipInTouchScreens": true,
              "click": "this.startPanoramaWithCamera(this.panorama_47B53902_572E_CEDF_41CC_C256D31A5443, this.camera_566FDDCF_5BF2_F6A7_41C3_D60F04E20C30); this.mainPlayList.set('selectedIndex', 3)",
              "mapColor": "#FF0000",
              "toolTip": "LIVING ROOM",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "items": [
             {
              "yaw": 12.08,
              "hfov": 6.33,
              "image": {
               "levels": [
                {
                 "height": 105,
                 "width": 105,
                 "url": "media/panorama_6A58246F_6179_90B3_41BF_E08163C94BD1_0_HS_0_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -33.14
             }
            ]
           },
           {
            "rollOverDisplay": false,
            "maps": [
             {
              "hfov": 5.99,
              "yaw": -97.88,
              "image": {
               "levels": [
                {
                 "height": 43,
                 "width": 43,
                 "url": "media/panorama_6A58246F_6179_90B3_41BF_E08163C94BD1_0_HS_6_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -16.95
             }
            ],
            "enabledInCardboard": true,
            "useHandCursor": true,
            "id": "overlay_6A5FE46F_6179_90B3_41C4_4A33968EF991",
            "areas": [
             {
              "displayTooltipInTouchScreens": true,
              "click": "this.startPanoramaWithCamera(this.panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E, this.camera_565ACDA7_5BF2_F6E7_41BA_8BE7CEB9351B); this.mainPlayList.set('selectedIndex', 1)",
              "mapColor": "#FF0000",
              "toolTip": "ENTRANCE",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "items": [
             {
              "yaw": -97.88,
              "hfov": 5.99,
              "image": {
               "levels": [
                {
                 "height": 87,
                 "width": 87,
                 "url": "media/panorama_6A58246F_6179_90B3_41BF_E08163C94BD1_0_HS_6_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -16.95
             }
            ]
           },
           {
            "rollOverDisplay": true,
            "maps": [
             {
              "hfov": 0,
              "yaw": -172.22,
              "image": {
               "levels": [
                {
                 "height": 1,
                 "width": 1,
                 "url": "media/panorama_6A58246F_6179_90B3_41BF_E08163C94BD1_0_HS_1_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "class": "HotspotPanoramaOverlayMap",
              "pitch": 82.35
             }
            ],
            "enabledInCardboard": true,
            "useHandCursor": true,
            "id": "overlay_6A5F8470_6179_90AD_41C3_7E7F70A3F932",
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_6CD96857_606E_330E_41D4_28DA4961B1BD, this.camera_66802C61_77B3_9999_41B0_1B2885C802EC); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 5); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 8); this.mainPlayList.set('selectedIndex', 6)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "items": [
             {
              "yaw": -172.22,
              "hfov": 0,
              "image": {
               "levels": [
                {
                 "height": 1,
                 "width": 1,
                 "url": "media/panorama_6A58246F_6179_90B3_41BF_E08163C94BD1_0_HS_1_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "class": "HotspotPanoramaOverlayImage",
              "pitch": 82.35
             }
            ]
           },
           {
            "rollOverDisplay": false,
            "maps": [
             {
              "hfov": 9.13,
              "yaw": 12.06,
              "image": {
               "levels": [
                {
                 "height": 74,
                 "width": 74,
                 "url": "media/panorama_6A58246F_6179_90B3_41BF_E08163C94BD1_0_HS_7_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -32.33
             }
            ],
            "enabledInCardboard": true,
            "useHandCursor": true,
            "id": "overlay_6A5FA470_6179_90AD_41C2_B45238960A98",
            "areas": [
             {
              "displayTooltipInTouchScreens": true,
              "click": "this.startPanoramaWithCamera(this.panorama_6C19C4DF_606E_333E_4190_E16296FAA0F2, this.camera_6476AC03_77B3_9999_41A0_255733AB6643); this.mainPlayList.set('selectedIndex', 3)",
              "mapColor": "#FF0000",
              "toolTip": "LIVING ROOM",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "items": [
             {
              "yaw": 12.06,
              "hfov": 9.13,
              "image": {
               "levels": [
                {
                 "height": 149,
                 "width": 149,
                 "url": "media/panorama_6A58246F_6179_90B3_41BF_E08163C94BD1_0_HS_7_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -32.33
             }
            ]
           },
           {
            "rollOverDisplay": false,
            "maps": [
             {
              "hfov": 8.61,
              "yaw": -97.22,
              "image": {
               "levels": [
                {
                 "height": 62,
                 "width": 62,
                 "url": "media/panorama_6A58246F_6179_90B3_41BF_E08163C94BD1_0_HS_8_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -16.94
             }
            ],
            "enabledInCardboard": true,
            "useHandCursor": true,
            "id": "overlay_6A5F7470_6179_90AD_41D6_DA66F87CC0A2",
            "areas": [
             {
              "displayTooltipInTouchScreens": true,
              "click": "this.startPanoramaWithCamera(this.panorama_6CEBB7E8_606A_7D03_41CE_69723C00AA9F, this.camera_66857C57_77B3_99B9_41D0_32FBB175B28F); this.mainPlayList.set('selectedIndex', 1)",
              "mapColor": "#FF0000",
              "toolTip": "ENTRANCE",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "items": [
             {
              "yaw": -97.22,
              "hfov": 8.61,
              "image": {
               "levels": [
                {
                 "height": 124,
                 "width": 124,
                 "url": "media/panorama_6A58246F_6179_90B3_41BF_E08163C94BD1_0_HS_8_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -16.94
             }
            ]
           }
          ],
          "class": "SphericPanoramaFrame",
          "sphere": {
           "levels": [
            {
             "height": 2500,
             "width": 5000,
             "url": "media/panorama_6A58246F_6179_90B3_41BF_E08163C94BD1_hq.jpeg",
             "class": "ImageResourceLevel"
            },
            {
             "height": 1608,
             "width": 3217,
             "url": "media/panorama_6A58246F_6179_90B3_41BF_E08163C94BD1.jpeg",
             "class": "ImageResourceLevel"
            }
           ],
           "class": "ImageResource"
          }
         }
        ],
        "partial": false,
        "hfovMin": 100,
        "class": "Panorama",
        "pitch": 0,
        "hfovMax": 120,
        "thumbnailUrl": "media/panorama_6A58246F_6179_90B3_41BF_E08163C94BD1_t.jpg",
        "id": "panorama_6A58246F_6179_90B3_41BF_E08163C94BD1",
        "label": "POOL",
        "hfov": 360,
        "adjacentPanoramas": [
         {
          "distance": 1,
          "panorama": "this.panorama_6A977261_617E_B0AF_41D7_BFCC461810A7",
          "yaw": -172.22,
          "class": "AdjacentPanorama",
          "backwardYaw": -162.92
         },
         {
          "distance": 1,
          "panorama": {
           "frames": [
            {
             "thumbnailUrl": "media/panorama_6CD1C202_606E_7706_41A2_313E1DC1AF6A_t.jpg",
             "overlays": [
              {
               "rollOverDisplay": false,
               "maps": [
                {
                 "hfov": 6.52,
                 "yaw": 112.43,
                 "image": {
                  "levels": [
                   {
                    "height": 46,
                    "width": 46,
                    "url": "media/panorama_6CD1C202_606E_7706_41A2_313E1DC1AF6A_0_HS_2_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": 10.35
                }
               ],
               "enabledInCardboard": true,
               "useHandCursor": true,
               "id": "overlay_6CD1D202_606E_7706_41D0_E978E2A252CB",
               "areas": [
                {
                 "displayTooltipInTouchScreens": true,
                 "click": "this.startPanoramaWithCamera(this.panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116, this.camera_56043BB0_5BF2_F2FA_41B1_1DE6A0E08A4C); this.mainPlayList.set('selectedIndex', 9)",
                 "mapColor": "#FF0000",
                 "toolTip": "ROOFTOP",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "items": [
                {
                 "yaw": 112.43,
                 "hfov": 6.52,
                 "image": {
                  "levels": [
                   {
                    "height": 92,
                    "width": 92,
                    "url": "media/panorama_6CD1C202_606E_7706_41A2_313E1DC1AF6A_0_HS_2_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": 10.35
                }
               ]
              },
              {
               "rollOverDisplay": false,
               "maps": [
                {
                 "hfov": 5.9,
                 "yaw": 112.31,
                 "image": {
                  "levels": [
                   {
                    "height": 46,
                    "width": 46,
                    "url": "media/panorama_6CD1C202_606E_7706_41A2_313E1DC1AF6A_0_HS_0_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -27.07
                }
               ],
               "enabledInCardboard": true,
               "useHandCursor": true,
               "id": "overlay_6CD12202_606E_7706_41D5_D60F47394C73",
               "areas": [
                {
                 "displayTooltipInTouchScreens": true,
                 "click": "this.startPanoramaWithCamera(this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF, this.camera_56700B7F_5BF2_F267_41C2_DC8D8F885C23); this.mainPlayList.set('selectedIndex', 5)",
                 "mapColor": "#FF0000",
                 "toolTip": "MASTER BEDROOM",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "items": [
                {
                 "yaw": 112.31,
                 "hfov": 5.9,
                 "image": {
                  "levels": [
                   {
                    "height": 92,
                    "width": 92,
                    "url": "media/panorama_6CD1C202_606E_7706_41A2_313E1DC1AF6A_0_HS_0_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -27.07
                }
               ]
              },
              {
               "rollOverDisplay": true,
               "maps": [
                {
                 "hfov": 0,
                 "yaw": -172.21,
                 "image": {
                  "levels": [
                   {
                    "height": 1,
                    "width": 1,
                    "url": "media/panorama_6CD1C202_606E_7706_41A2_313E1DC1AF6A_0_HS_1_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": 81.71
                }
               ],
               "enabledInCardboard": true,
               "useHandCursor": true,
               "id": "overlay_6CD13202_606E_7706_41CF_4D4A88F8DD7C",
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_6CEBB7E8_606A_7D03_41CE_69723C00AA9F, this.camera_66D52CB7_77B3_9AF9_41DC_E2A92403F2FD); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 4)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "items": [
                {
                 "yaw": -172.21,
                 "hfov": 0,
                 "image": {
                  "levels": [
                   {
                    "height": 1,
                    "width": 1,
                    "url": "media/panorama_6CD1C202_606E_7706_41A2_313E1DC1AF6A_0_HS_1_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": 81.71
                }
               ]
              },
              {
               "rollOverDisplay": false,
               "maps": [
                {
                 "hfov": 9.33,
                 "yaw": 112.38,
                 "image": {
                  "levels": [
                   {
                    "height": 65,
                    "width": 65,
                    "url": "media/panorama_6CD1C202_606E_7706_41A2_313E1DC1AF6A_0_HS_3_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": 11.07
                }
               ],
               "enabledInCardboard": true,
               "useHandCursor": true,
               "id": "overlay_6CD10202_606E_7706_41D6_AE1ABEA4B027",
               "areas": [
                {
                 "displayTooltipInTouchScreens": true,
                 "click": "this.startPanoramaWithCamera(this.panorama_6CD96857_606E_330E_41D4_28DA4961B1BD, this.camera_66D0FCC1_77B3_9A98_41D4_54BF4D686702); this.mainPlayList.set('selectedIndex', 9)",
                 "mapColor": "#FF0000",
                 "toolTip": "ROOFTOP",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "items": [
                {
                 "yaw": 112.38,
                 "hfov": 9.33,
                 "image": {
                  "levels": [
                   {
                    "height": 131,
                    "width": 131,
                    "url": "media/panorama_6CD1C202_606E_7706_41A2_313E1DC1AF6A_0_HS_3_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": 11.07
                }
               ]
              },
              {
               "rollOverDisplay": false,
               "maps": [
                {
                 "hfov": 8.41,
                 "yaw": 112.32,
                 "image": {
                  "levels": [
                   {
                    "height": 65,
                    "width": 65,
                    "url": "media/panorama_6CD1C202_606E_7706_41A2_313E1DC1AF6A_0_HS_4_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -27.76
                }
               ],
               "enabledInCardboard": true,
               "useHandCursor": true,
               "id": "overlay_6CD14202_606E_7706_41A6_8230B16AC2AD",
               "areas": [
                {
                 "displayTooltipInTouchScreens": true,
                 "click": "this.startPanoramaWithCamera(this.panorama_6A977261_617E_B0AF_41D7_BFCC461810A7, this.camera_66FFFC6C_77B3_9A6F_41AB_7C3EDE96FD8A); this.mainPlayList.set('selectedIndex', 5)",
                 "mapColor": "#FF0000",
                 "toolTip": "MASTER BEDROOM",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "items": [
                {
                 "yaw": 112.32,
                 "hfov": 8.41,
                 "image": {
                  "levels": [
                   {
                    "height": 131,
                    "width": 131,
                    "url": "media/panorama_6CD1C202_606E_7706_41A2_313E1DC1AF6A_0_HS_4_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -27.76
                }
               ]
              }
             ],
             "class": "SphericPanoramaFrame",
             "sphere": {
              "levels": [
               {
                "height": 2500,
                "width": 5000,
                "url": "media/panorama_6CD1C202_606E_7706_41A2_313E1DC1AF6A_hq.jpeg",
                "class": "ImageResourceLevel"
               },
               {
                "height": 1608,
                "width": 3217,
                "url": "media/panorama_6CD1C202_606E_7706_41A2_313E1DC1AF6A.jpeg",
                "class": "ImageResourceLevel"
               }
              ],
              "class": "ImageResource"
             }
            }
           ],
           "partial": false,
           "hfovMin": 100,
           "class": "Panorama",
           "pitch": 0,
           "hfovMax": 120,
           "thumbnailUrl": "media/panorama_6CD1C202_606E_7706_41A2_313E1DC1AF6A_t.jpg",
           "id": "panorama_6CD1C202_606E_7706_41A2_313E1DC1AF6A",
           "label": "2 BEDROOM",
           "hfov": 360,
           "adjacentPanoramas": [
            {
             "distance": 1,
             "panorama": "this.panorama_6A977261_617E_B0AF_41D7_BFCC461810A7",
             "yaw": 112.32,
             "class": "AdjacentPanorama",
             "backwardYaw": 34.82
            },
            {
             "distance": 1,
             "panorama": "this.panorama_6A58246F_6179_90B3_41BF_E08163C94BD1",
             "yaw": -172.21,
             "class": "AdjacentPanorama",
             "backwardYaw": -172.22
            },
            {
             "distance": 1,
             "panorama": {
              "frames": [
               {
                "thumbnailUrl": "media/panorama_6CE9E5E7_606E_5D0E_41D0_003A6E1B2677_t.jpg",
                "overlays": [
                 {
                  "rollOverDisplay": false,
                  "maps": [
                   {
                    "hfov": 6.32,
                    "yaw": -174.37,
                    "image": {
                     "levels": [
                      {
                       "height": 59,
                       "width": 59,
                       "url": "media/panorama_6CE9E5E7_606E_5D0E_41D0_003A6E1B2677_0_HS_0_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -43
                   }
                  ],
                  "enabledInCardboard": true,
                  "useHandCursor": true,
                  "id": "overlay_6CE905E7_606E_5D0E_41D6_6987D7C74D84",
                  "areas": [
                   {
                    "displayTooltipInTouchScreens": true,
                    "click": "this.startPanoramaWithCamera(this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF, this.camera_55CB7E16_5BF2_F5B9_4191_4ABD27800AF8); this.mainPlayList.set('selectedIndex', 5)",
                    "mapColor": "#FF0000",
                    "toolTip": "MASTER BEDROOM",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "items": [
                   {
                    "yaw": -174.37,
                    "hfov": 6.32,
                    "image": {
                     "levels": [
                      {
                       "height": 119,
                       "width": 119,
                       "url": "media/panorama_6CE9E5E7_606E_5D0E_41D0_003A6E1B2677_0_HS_0_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -43
                   }
                  ]
                 },
                 {
                  "rollOverDisplay": true,
                  "maps": [
                   {
                    "hfov": 0,
                    "yaw": -170.58,
                    "image": {
                     "levels": [
                      {
                       "height": 1,
                       "width": 1,
                       "url": "media/panorama_6CE9E5E7_606E_5D0E_41D0_003A6E1B2677_0_HS_1_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": 85.29
                   }
                  ],
                  "enabledInCardboard": true,
                  "useHandCursor": true,
                  "id": "overlay_6CE935E7_606E_5D0E_41B5_25998E7B79AC",
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_6CD96857_606E_330E_41D4_28DA4961B1BD, this.camera_6608CD2D_77B3_9BE9_41C2_389318EF1A6D); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 8); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 7)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "items": [
                   {
                    "yaw": -170.58,
                    "hfov": 0,
                    "image": {
                     "levels": [
                      {
                       "height": 1,
                       "width": 1,
                       "url": "media/panorama_6CE9E5E7_606E_5D0E_41D0_003A6E1B2677_0_HS_1_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": 85.29
                   }
                  ]
                 },
                 {
                  "rollOverDisplay": false,
                  "maps": [
                   {
                    "hfov": 9.34,
                    "yaw": -174.34,
                    "image": {
                     "levels": [
                      {
                       "height": 87,
                       "width": 87,
                       "url": "media/panorama_6CE9E5E7_606E_5D0E_41D0_003A6E1B2677_0_HS_6_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -42.17
                   }
                  ],
                  "enabledInCardboard": true,
                  "useHandCursor": true,
                  "id": "overlay_6CE925E7_606E_5D0E_4192_83F40E803C6A",
                  "areas": [
                   {
                    "displayTooltipInTouchScreens": true,
                    "click": "this.startPanoramaWithCamera(this.panorama_6A977261_617E_B0AF_41D7_BFCC461810A7, this.camera_66CE9CCB_77B3_9AA9_41DC_BE4CA14B3B36); this.mainPlayList.set('selectedIndex', 5)",
                    "mapColor": "#FF0000",
                    "toolTip": "MASTER BEDROOM",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "items": [
                   {
                    "yaw": -174.34,
                    "hfov": 9.34,
                    "image": {
                     "levels": [
                      {
                       "height": 175,
                       "width": 175,
                       "url": "media/panorama_6CE9E5E7_606E_5D0E_41D0_003A6E1B2677_0_HS_6_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -42.17
                   }
                  ]
                 }
                ],
                "class": "SphericPanoramaFrame",
                "sphere": {
                 "levels": [
                  {
                   "height": 2500,
                   "width": 5000,
                   "url": "media/panorama_6CE9E5E7_606E_5D0E_41D0_003A6E1B2677_hq.jpeg",
                   "class": "ImageResourceLevel"
                  },
                  {
                   "height": 1608,
                   "width": 3217,
                   "url": "media/panorama_6CE9E5E7_606E_5D0E_41D0_003A6E1B2677.jpeg",
                   "class": "ImageResourceLevel"
                  }
                 ],
                 "class": "ImageResource"
                }
               }
              ],
              "partial": false,
              "hfovMin": 100,
              "class": "Panorama",
              "pitch": 0,
              "hfovMax": 120,
              "thumbnailUrl": "media/panorama_6CE9E5E7_606E_5D0E_41D0_003A6E1B2677_t.jpg",
              "id": "panorama_6CE9E5E7_606E_5D0E_41D0_003A6E1B2677",
              "label": "BALCONY",
              "hfov": 360,
              "adjacentPanoramas": [
               {
                "distance": 1,
                "panorama": "this.panorama_6A977261_617E_B0AF_41D7_BFCC461810A7",
                "yaw": -174.34,
                "class": "AdjacentPanorama",
                "backwardYaw": -178.18
               },
               {
                "distance": 1,
                "panorama": "this.panorama_6A58246F_6179_90B3_41BF_E08163C94BD1",
                "yaw": -170.58,
                "class": "AdjacentPanorama",
                "backwardYaw": -172.22
               },
               {
                "distance": 1,
                "panorama": "this.panorama_6CD1C202_606E_7706_41A2_313E1DC1AF6A",
                "yaw": -170.58,
                "class": "AdjacentPanorama",
                "backwardYaw": -172.21
               },
               {
                "distance": 1,
                "panorama": {
                 "frames": [
                  {
                   "thumbnailUrl": "media/panorama_6C19C4DF_606E_333E_4190_E16296FAA0F2_t.jpg",
                   "overlays": [
                    {
                     "rollOverDisplay": false,
                     "maps": [
                      {
                       "hfov": 5.94,
                       "yaw": 42.19,
                       "image": {
                        "levels": [
                         {
                          "height": 41,
                          "width": 41,
                          "url": "media/panorama_6C19C4DF_606E_333E_4190_E16296FAA0F2_0_HS_0_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -7.8
                      }
                     ],
                     "enabledInCardboard": true,
                     "useHandCursor": true,
                     "id": "overlay_6C19D4DF_606E_333E_41D7_DF0866378D6D",
                     "areas": [
                      {
                       "displayTooltipInTouchScreens": true,
                       "click": "this.startPanoramaWithCamera(this.panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC, this.camera_55BE4E50_5BF2_F5B9_41B2_A0DBD967D7CD); this.mainPlayList.set('selectedIndex', 4)",
                       "mapColor": "#FF0000",
                       "toolTip": "1 BEDROOM",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "items": [
                      {
                       "yaw": 42.19,
                       "hfov": 5.94,
                       "image": {
                        "levels": [
                         {
                          "height": 83,
                          "width": 83,
                          "url": "media/panorama_6C19C4DF_606E_333E_4190_E16296FAA0F2_0_HS_0_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": -7.8
                      }
                     ]
                    },
                    {
                     "rollOverDisplay": false,
                     "maps": [
                      {
                       "hfov": 5.24,
                       "yaw": -176.64,
                       "image": {
                        "levels": [
                         {
                          "height": 41,
                          "width": 41,
                          "url": "media/panorama_6C19C4DF_606E_333E_4190_E16296FAA0F2_0_HS_5_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -29.18
                      }
                     ],
                     "enabledInCardboard": true,
                     "useHandCursor": true,
                     "id": "overlay_6C19E4E0_606E_3302_41B7_0A4293889168",
                     "areas": [
                      {
                       "displayTooltipInTouchScreens": true,
                       "click": "this.startPanoramaWithCamera(this.panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D, this.camera_5577FE77_5BF2_F267_41AE_B186A0A61737); this.mainPlayList.set('selectedIndex', 2)",
                       "mapColor": "#FF0000",
                       "toolTip": "POOL",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "items": [
                      {
                       "yaw": -176.64,
                       "hfov": 5.24,
                       "image": {
                        "levels": [
                         {
                          "height": 83,
                          "width": 83,
                          "url": "media/panorama_6C19C4DF_606E_333E_4190_E16296FAA0F2_0_HS_5_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": -29.18
                      }
                     ]
                    },
                    {
                     "rollOverDisplay": true,
                     "maps": [
                      {
                       "hfov": 0,
                       "yaw": -171.96,
                       "image": {
                        "levels": [
                         {
                          "height": 1,
                          "width": 1,
                          "url": "media/panorama_6C19C4DF_606E_333E_4190_E16296FAA0F2_0_HS_1_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": 82.97
                      }
                     ],
                     "enabledInCardboard": true,
                     "useHandCursor": true,
                     "id": "overlay_6C19F4E0_606E_3302_41CA_2AF915CCFDC5",
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_6CD96857_606E_330E_41D4_28DA4961B1BD, this.camera_659CDD89_77B3_9AA9_41BA_C46A67D659A3); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 8); this.mainPlayList.set('selectedIndex', 5)",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "items": [
                      {
                       "yaw": -171.96,
                       "hfov": 0,
                       "image": {
                        "levels": [
                         {
                          "height": 1,
                          "width": 1,
                          "url": "media/panorama_6C19C4DF_606E_333E_4190_E16296FAA0F2_0_HS_1_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": 82.97
                      }
                     ]
                    },
                    {
                     "rollOverDisplay": false,
                     "maps": [
                      {
                       "hfov": 8.57,
                       "yaw": 42.16,
                       "image": {
                        "levels": [
                         {
                          "height": 59,
                          "width": 59,
                          "url": "media/panorama_6C19C4DF_606E_333E_4190_E16296FAA0F2_0_HS_6_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -7.17
                      }
                     ],
                     "enabledInCardboard": true,
                     "useHandCursor": true,
                     "id": "overlay_6C1E24E0_606E_3302_41CB_D0F52E6D20B7",
                     "areas": [
                      {
                       "displayTooltipInTouchScreens": true,
                       "click": "this.startPanoramaWithCamera(this.panorama_6C191CE9_606E_7302_41D6_3E33CDB64ACF, this.camera_65BAFD74_77B3_9A7F_41B4_16EC63908A02); this.mainPlayList.set('selectedIndex', 4)",
                       "mapColor": "#FF0000",
                       "toolTip": "1 BEDROOM",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "items": [
                      {
                       "yaw": 42.16,
                       "hfov": 8.57,
                       "image": {
                        "levels": [
                         {
                          "height": 119,
                          "width": 119,
                          "url": "media/panorama_6C19C4DF_606E_333E_4190_E16296FAA0F2_0_HS_6_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": -7.17
                      }
                     ]
                    },
                    {
                     "rollOverDisplay": false,
                     "maps": [
                      {
                       "hfov": 7.59,
                       "yaw": -176.63,
                       "image": {
                        "levels": [
                         {
                          "height": 60,
                          "width": 60,
                          "url": "media/panorama_6C19C4DF_606E_333E_4190_E16296FAA0F2_0_HS_7_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -28.5
                      }
                     ],
                     "enabledInCardboard": true,
                     "useHandCursor": true,
                     "id": "overlay_6C1E44E0_606E_3302_418A_865A93684CDA",
                     "areas": [
                      {
                       "displayTooltipInTouchScreens": true,
                       "click": "this.startPanoramaWithCamera(this.panorama_6A58246F_6179_90B3_41BF_E08163C94BD1, this.camera_6674BD41_77B3_9B99_41C5_167FE7452A15); this.mainPlayList.set('selectedIndex', 2)",
                       "mapColor": "#FF0000",
                       "toolTip": "POOL",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "items": [
                      {
                       "yaw": -176.63,
                       "hfov": 7.59,
                       "image": {
                        "levels": [
                         {
                          "height": 120,
                          "width": 120,
                          "url": "media/panorama_6C19C4DF_606E_333E_4190_E16296FAA0F2_0_HS_7_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": -28.5
                      }
                     ]
                    }
                   ],
                   "class": "SphericPanoramaFrame",
                   "sphere": {
                    "levels": [
                     {
                      "height": 2500,
                      "width": 5000,
                      "url": "media/panorama_6C19C4DF_606E_333E_4190_E16296FAA0F2_hq.jpeg",
                      "class": "ImageResourceLevel"
                     },
                     {
                      "height": 1608,
                      "width": 3217,
                      "url": "media/panorama_6C19C4DF_606E_333E_4190_E16296FAA0F2.jpeg",
                      "class": "ImageResourceLevel"
                     }
                    ],
                    "class": "ImageResource"
                   }
                  }
                 ],
                 "partial": false,
                 "hfovMin": 100,
                 "class": "Panorama",
                 "pitch": 0,
                 "hfovMax": 120,
                 "thumbnailUrl": "media/panorama_6C19C4DF_606E_333E_4190_E16296FAA0F2_t.jpg",
                 "id": "panorama_6C19C4DF_606E_333E_4190_E16296FAA0F2",
                 "label": "LIVING ROOM",
                 "hfov": 360,
                 "adjacentPanoramas": [
                  {
                   "distance": 1,
                   "panorama": "this.panorama_6A977261_617E_B0AF_41D7_BFCC461810A7",
                   "yaw": -171.96,
                   "class": "AdjacentPanorama",
                   "backwardYaw": -162.92
                  },
                  {
                   "distance": 1,
                   "panorama": "this.panorama_6A58246F_6179_90B3_41BF_E08163C94BD1",
                   "yaw": -176.63,
                   "class": "AdjacentPanorama",
                   "backwardYaw": 12.06
                  },
                  {
                   "distance": 1,
                   "panorama": "this.panorama_6CD1C202_606E_7706_41A2_313E1DC1AF6A",
                   "yaw": -171.96,
                   "class": "AdjacentPanorama",
                   "backwardYaw": -172.21
                  },
                  {
                   "distance": 1,
                   "panorama": "this.panorama_6CE9E5E7_606E_5D0E_41D0_003A6E1B2677",
                   "yaw": -171.96,
                   "class": "AdjacentPanorama",
                   "backwardYaw": -170.58
                  },
                  {
                   "distance": 1,
                   "panorama": "this.panorama_6BE40682_606A_FF06_41C3_B3B6845ECE6A",
                   "yaw": -171.96,
                   "class": "AdjacentPanorama",
                   "backwardYaw": -171.35
                  },
                  {
                   "distance": 1,
                   "panorama": {
                    "frames": [
                     {
                      "thumbnailUrl": "media/panorama_6D430522_6193_00C9_41B5_ED6C4ECBB6B9_t.jpg",
                      "overlays": [
                       {
                        "rollOverDisplay": false,
                        "maps": [
                         {
                          "hfov": 6.58,
                          "yaw": 161.77,
                          "image": {
                           "levels": [
                            {
                             "height": 48,
                             "width": 48,
                             "url": "media/panorama_6D430522_6193_00C9_41B5_ED6C4ECBB6B9_0_HS_2_0_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": -21.08
                         }
                        ],
                        "enabledInCardboard": true,
                        "useHandCursor": true,
                        "id": "overlay_6D431522_6193_00C9_41CD_94205EC4ED0C",
                        "areas": [
                         {
                          "displayTooltipInTouchScreens": true,
                          "click": "this.startPanoramaWithCamera(this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF, this.camera_57262CFF_5BF2_F667_41D4_80634CF1C7DB); this.mainPlayList.set('selectedIndex', 5)",
                          "mapColor": "#FF0000",
                          "toolTip": "MASTER BEDROOM",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "items": [
                         {
                          "yaw": 161.77,
                          "hfov": 6.58,
                          "image": {
                           "levels": [
                            {
                             "height": 97,
                             "width": 97,
                             "url": "media/panorama_6D430522_6193_00C9_41B5_ED6C4ECBB6B9_0_HS_2_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "class": "HotspotPanoramaOverlayImage",
                          "pitch": -21.08
                         }
                        ]
                       },
                       {
                        "rollOverDisplay": true,
                        "maps": [
                         {
                          "hfov": 0,
                          "yaw": -162.92,
                          "image": {
                           "levels": [
                            {
                             "height": 1,
                             "width": 1,
                             "url": "media/panorama_6D430522_6193_00C9_41B5_ED6C4ECBB6B9_0_HS_1_0_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": 80.2
                         }
                        ],
                        "enabledInCardboard": true,
                        "useHandCursor": true,
                        "id": "overlay_6D434522_6193_00C9_41D7_CBEE82CF6646",
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_6CD96857_606E_330E_41D4_28DA4961B1BD, this.camera_64A83E5F_77B3_99A9_41D8_3BC19DF4C8D2); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 8)",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "items": [
                         {
                          "yaw": -162.92,
                          "hfov": 0,
                          "image": {
                           "levels": [
                            {
                             "height": 1,
                             "width": 1,
                             "url": "media/panorama_6D430522_6193_00C9_41B5_ED6C4ECBB6B9_0_HS_1_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "class": "HotspotPanoramaOverlayImage",
                          "pitch": 80.2
                         }
                        ]
                       },
                       {
                        "rollOverDisplay": false,
                        "maps": [
                         {
                          "hfov": 9.65,
                          "yaw": 161.78,
                          "image": {
                           "levels": [
                            {
                             "height": 71,
                             "width": 71,
                             "url": "media/panorama_6D430522_6193_00C9_41B5_ED6C4ECBB6B9_0_HS_3_0_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": -20.35
                         }
                        ],
                        "enabledInCardboard": true,
                        "useHandCursor": true,
                        "id": "overlay_6D435522_6193_00C9_41A6_BACDEE68C1B5",
                        "areas": [
                         {
                          "displayTooltipInTouchScreens": true,
                          "click": "this.startPanoramaWithCamera(this.panorama_6A977261_617E_B0AF_41D7_BFCC461810A7, this.camera_651A5DEB_77B3_9A69_41D2_EEA37E4513FC); this.mainPlayList.set('selectedIndex', 5)",
                          "mapColor": "#FF0000",
                          "toolTip": "MASTER BEDROOM",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "items": [
                         {
                          "yaw": 161.78,
                          "hfov": 9.65,
                          "image": {
                           "levels": [
                            {
                             "height": 143,
                             "width": 143,
                             "url": "media/panorama_6D430522_6193_00C9_41B5_ED6C4ECBB6B9_0_HS_3_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "class": "HotspotPanoramaOverlayImage",
                          "pitch": -20.35
                         }
                        ]
                       }
                      ],
                      "class": "SphericPanoramaFrame",
                      "sphere": {
                       "levels": [
                        {
                         "height": 2500,
                         "width": 5000,
                         "url": "media/panorama_6D430522_6193_00C9_41B5_ED6C4ECBB6B9_hq.jpeg",
                         "class": "ImageResourceLevel"
                        },
                        {
                         "height": 1608,
                         "width": 3217,
                         "url": "media/panorama_6D430522_6193_00C9_41B5_ED6C4ECBB6B9.jpeg",
                         "class": "ImageResourceLevel"
                        }
                       ],
                       "class": "ImageResource"
                      }
                     }
                    ],
                    "partial": false,
                    "hfovMin": 100,
                    "class": "Panorama",
                    "pitch": 0,
                    "hfovMax": 120,
                    "thumbnailUrl": "media/panorama_6D430522_6193_00C9_41B5_ED6C4ECBB6B9_t.jpg",
                    "id": "panorama_6D430522_6193_00C9_41B5_ED6C4ECBB6B9",
                    "label": "WC",
                    "hfov": 360,
                    "adjacentPanoramas": [
                     {
                      "distance": 1,
                      "panorama": "this.panorama_6A977261_617E_B0AF_41D7_BFCC461810A7",
                      "yaw": 161.78,
                      "class": "AdjacentPanorama",
                      "backwardYaw": 82.9
                     },
                     {
                      "distance": 1,
                      "panorama": "this.panorama_6A58246F_6179_90B3_41BF_E08163C94BD1",
                      "yaw": -162.92,
                      "class": "AdjacentPanorama",
                      "backwardYaw": -172.22
                     },
                     {
                      "distance": 1,
                      "panorama": "this.panorama_6CD1C202_606E_7706_41A2_313E1DC1AF6A",
                      "yaw": -162.92,
                      "class": "AdjacentPanorama",
                      "backwardYaw": -172.21
                     },
                     {
                      "distance": 1,
                      "panorama": "this.panorama_6CE9E5E7_606E_5D0E_41D0_003A6E1B2677",
                      "yaw": -162.92,
                      "class": "AdjacentPanorama",
                      "backwardYaw": -170.58
                     },
                     {
                      "distance": 1,
                      "panorama": "this.panorama_6C19C4DF_606E_333E_4190_E16296FAA0F2",
                      "yaw": -162.92,
                      "class": "AdjacentPanorama",
                      "backwardYaw": -171.96
                     },
                     {
                      "distance": 1,
                      "panorama": "this.panorama_6BE40682_606A_FF06_41C3_B3B6845ECE6A",
                      "yaw": -162.92,
                      "class": "AdjacentPanorama",
                      "backwardYaw": -171.35
                     },
                     {
                      "distance": 1,
                      "panorama": {
                       "frames": [
                        {
                         "thumbnailUrl": "media/panorama_6C191CE9_606E_7302_41D6_3E33CDB64ACF_t.jpg",
                         "overlays": [
                          {
                           "rollOverDisplay": false,
                           "maps": [
                            {
                             "hfov": 6.53,
                             "yaw": 110.14,
                             "image": {
                              "levels": [
                               {
                                "height": 45,
                                "width": 46,
                                "url": "media/panorama_6C191CE9_606E_7302_41D6_3E33CDB64ACF_0_HS_0_0_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": 9.88
                            }
                           ],
                           "enabledInCardboard": true,
                           "useHandCursor": true,
                           "id": "overlay_6C196CE9_606E_7302_41D5_0F8D5B1FFA85",
                           "areas": [
                            {
                             "displayTooltipInTouchScreens": true,
                             "click": "this.startPanoramaWithCamera(this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF, this.camera_55D7BBEA_5BF2_F263_41D2_B1CC2C57A60F); this.mainPlayList.set('selectedIndex', 5)",
                             "mapColor": "#FF0000",
                             "toolTip": "MASTER BEDROOM\u000a",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "items": [
                            {
                             "yaw": 110.14,
                             "hfov": 6.53,
                             "image": {
                              "levels": [
                               {
                                "height": 91,
                                "width": 92,
                                "url": "media/panorama_6C191CE9_606E_7302_41D6_3E33CDB64ACF_0_HS_0_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "class": "HotspotPanoramaOverlayImage",
                             "pitch": 9.88
                            }
                           ]
                          },
                          {
                           "rollOverDisplay": false,
                           "maps": [
                            {
                             "hfov": 5.79,
                             "yaw": 110.2,
                             "image": {
                              "levels": [
                               {
                                "height": 46,
                                "width": 46,
                                "url": "media/panorama_6C191CE9_606E_7302_41D6_3E33CDB64ACF_0_HS_2_0_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": -29.15
                            }
                           ],
                           "enabledInCardboard": true,
                           "useHandCursor": true,
                           "id": "overlay_6C194CE9_606E_7302_41CE_C32477405DB2",
                           "areas": [
                            {
                             "displayTooltipInTouchScreens": true,
                             "click": "this.startPanoramaWithCamera(this.panorama_47B53902_572E_CEDF_41CC_C256D31A5443, this.camera_55FFAC21_5BF2_F59B_41D2_A4CCD4BC65CD); this.mainPlayList.set('selectedIndex', 3)",
                             "mapColor": "#FF0000",
                             "toolTip": "LIVING ROOM",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "items": [
                            {
                             "yaw": 110.2,
                             "hfov": 5.79,
                             "image": {
                              "levels": [
                               {
                                "height": 92,
                                "width": 92,
                                "url": "media/panorama_6C191CE9_606E_7302_41D6_3E33CDB64ACF_0_HS_2_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "class": "HotspotPanoramaOverlayImage",
                             "pitch": -29.15
                            }
                           ]
                          },
                          {
                           "rollOverDisplay": true,
                           "maps": [
                            {
                             "hfov": 0,
                             "yaw": -170.2,
                             "image": {
                              "levels": [
                               {
                                "height": 1,
                                "width": 1,
                                "url": "media/panorama_6C191CE9_606E_7302_41D6_3E33CDB64ACF_0_HS_1_0_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": 81.21
                            }
                           ],
                           "enabledInCardboard": true,
                           "useHandCursor": true,
                           "id": "overlay_6C195CE9_606E_7302_41AF_079BD7893DEA",
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_6CD96857_606E_330E_41D4_28DA4961B1BD, this.camera_642C8EE5_77B3_9699_41C5_01E9355B6B68); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 8); this.mainPlayList.set('selectedIndex', 9)",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "items": [
                            {
                             "yaw": -170.2,
                             "hfov": 0,
                             "image": {
                              "levels": [
                               {
                                "height": 1,
                                "width": 1,
                                "url": "media/panorama_6C191CE9_606E_7302_41D6_3E33CDB64ACF_0_HS_1_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "class": "HotspotPanoramaOverlayImage",
                             "pitch": 81.21
                            }
                           ]
                          },
                          {
                           "rollOverDisplay": false,
                           "maps": [
                            {
                             "hfov": 9.27,
                             "yaw": 110.14,
                             "image": {
                              "levels": [
                               {
                                "height": 65,
                                "width": 65,
                                "url": "media/panorama_6C191CE9_606E_7302_41D6_3E33CDB64ACF_0_HS_3_0_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": 10.58
                            }
                           ],
                           "enabledInCardboard": true,
                           "useHandCursor": true,
                           "id": "overlay_6C19BCE9_606E_7302_41CF_9F4CE5A90301",
                           "areas": [
                            {
                             "displayTooltipInTouchScreens": true,
                             "click": "this.startPanoramaWithCamera(this.panorama_6A977261_617E_B0AF_41D7_BFCC461810A7, this.camera_649EDE6F_77B3_9664_41D2_E537990A04E5); this.mainPlayList.set('selectedIndex', 5)",
                             "mapColor": "#FF0000",
                             "toolTip": "MASTER BEDROOM",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "items": [
                            {
                             "yaw": 110.14,
                             "hfov": 9.27,
                             "image": {
                              "levels": [
                               {
                                "height": 131,
                                "width": 131,
                                "url": "media/panorama_6C191CE9_606E_7302_41D6_3E33CDB64ACF_0_HS_3_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "class": "HotspotPanoramaOverlayImage",
                             "pitch": 10.58
                            }
                           ]
                          },
                          {
                           "rollOverDisplay": false,
                           "maps": [
                            {
                             "hfov": 8.18,
                             "yaw": 110.2,
                             "image": {
                              "levels": [
                               {
                                "height": 65,
                                "width": 65,
                                "url": "media/panorama_6C191CE9_606E_7302_41D6_3E33CDB64ACF_0_HS_4_0_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": -29.85
                            }
                           ],
                           "enabledInCardboard": true,
                           "useHandCursor": true,
                           "id": "overlay_6C199CE9_606E_7302_41CC_B6B5585FFD41",
                           "areas": [
                            {
                             "displayTooltipInTouchScreens": true,
                             "click": "this.startPanoramaWithCamera(this.panorama_6C19C4DF_606E_333E_4190_E16296FAA0F2, this.camera_64E71EBC_77B3_96EF_41D3_AE8E19A5D7CC); this.mainPlayList.set('selectedIndex', 3)",
                             "mapColor": "#FF0000",
                             "toolTip": "LIVING ROOM",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "items": [
                            {
                             "yaw": 110.2,
                             "hfov": 8.18,
                             "image": {
                              "levels": [
                               {
                                "height": 131,
                                "width": 131,
                                "url": "media/panorama_6C191CE9_606E_7302_41D6_3E33CDB64ACF_0_HS_4_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "class": "HotspotPanoramaOverlayImage",
                             "pitch": -29.85
                            }
                           ]
                          }
                         ],
                         "class": "SphericPanoramaFrame",
                         "sphere": {
                          "levels": [
                           {
                            "height": 2498,
                            "width": 5000,
                            "url": "media/panorama_6C191CE9_606E_7302_41D6_3E33CDB64ACF_hq.jpeg",
                            "class": "ImageResourceLevel"
                           },
                           {
                            "height": 1607,
                            "width": 3217,
                            "url": "media/panorama_6C191CE9_606E_7302_41D6_3E33CDB64ACF.jpeg",
                            "class": "ImageResourceLevel"
                           }
                          ],
                          "class": "ImageResource"
                         }
                        }
                       ],
                       "partial": false,
                       "hfovMin": 100,
                       "class": "Panorama",
                       "pitch": 0,
                       "hfovMax": 120,
                       "thumbnailUrl": "media/panorama_6C191CE9_606E_7302_41D6_3E33CDB64ACF_t.jpg",
                       "id": "panorama_6C191CE9_606E_7302_41D6_3E33CDB64ACF",
                       "label": "1 BEDROOM",
                       "hfov": 360,
                       "adjacentPanoramas": [
                        {
                         "distance": 1,
                         "panorama": "this.panorama_6A977261_617E_B0AF_41D7_BFCC461810A7",
                         "yaw": 110.14,
                         "class": "AdjacentPanorama",
                         "backwardYaw": 34.73
                        },
                        {
                         "distance": 1,
                         "panorama": "this.panorama_6A58246F_6179_90B3_41BF_E08163C94BD1",
                         "yaw": -170.2,
                         "class": "AdjacentPanorama",
                         "backwardYaw": -172.22
                        },
                        {
                         "distance": 1,
                         "panorama": "this.panorama_6CD1C202_606E_7706_41A2_313E1DC1AF6A",
                         "yaw": -170.2,
                         "class": "AdjacentPanorama",
                         "backwardYaw": -172.21
                        },
                        {
                         "distance": 1,
                         "panorama": "this.panorama_6CE9E5E7_606E_5D0E_41D0_003A6E1B2677",
                         "yaw": -170.2,
                         "class": "AdjacentPanorama",
                         "backwardYaw": -170.58
                        },
                        {
                         "distance": 1,
                         "panorama": "this.panorama_6C19C4DF_606E_333E_4190_E16296FAA0F2",
                         "yaw": 110.2,
                         "class": "AdjacentPanorama",
                         "backwardYaw": 42.16
                        },
                        {
                         "distance": 1,
                         "panorama": "this.panorama_6BE40682_606A_FF06_41C3_B3B6845ECE6A",
                         "yaw": -170.2,
                         "class": "AdjacentPanorama",
                         "backwardYaw": -171.35
                        },
                        {
                         "distance": 1,
                         "panorama": "this.panorama_6D430522_6193_00C9_41B5_ED6C4ECBB6B9",
                         "yaw": -170.2,
                         "class": "AdjacentPanorama",
                         "backwardYaw": -162.92
                        },
                        {
                         "distance": 1,
                         "panorama": {
                          "frames": [
                           {
                            "thumbnailUrl": "media/panorama_6CEBB7E8_606A_7D03_41CE_69723C00AA9F_t.jpg",
                            "overlays": [
                             {
                              "rollOverDisplay": false,
                              "maps": [
                               {
                                "hfov": 4.97,
                                "yaw": -16.79,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 34,
                                   "width": 34,
                                   "url": "media/panorama_6CEBB7E8_606A_7D03_41CE_69723C00AA9F_0_HS_0_0_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": -9.28
                               }
                              ],
                              "enabledInCardboard": true,
                              "useHandCursor": true,
                              "id": "overlay_6CEBF7E8_606A_7D03_41C7_74D43E13E722",
                              "areas": [
                               {
                                "displayTooltipInTouchScreens": true,
                                "click": "this.startPanoramaWithCamera(this.panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D, this.camera_55581C8B_5BF2_F6AF_41D1_02AAAFF73E03); this.mainPlayList.set('selectedIndex', 2)",
                                "mapColor": "#FF0000",
                                "toolTip": "POOL",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "items": [
                               {
                                "yaw": -16.79,
                                "hfov": 4.97,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 69,
                                   "width": 69,
                                   "url": "media/panorama_6CEBB7E8_606A_7D03_41CE_69723C00AA9F_0_HS_0_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "class": "HotspotPanoramaOverlayImage",
                                "pitch": -9.28
                               }
                              ]
                             },
                             {
                              "rollOverDisplay": false,
                              "maps": [
                               {
                                "hfov": 4.56,
                                "yaw": 0.94,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 34,
                                   "width": 34,
                                   "url": "media/panorama_6CEBB7E8_606A_7D03_41CE_69723C00AA9F_0_HS_6_0_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": -25.17
                               }
                              ],
                              "enabledInCardboard": true,
                              "useHandCursor": true,
                              "id": "overlay_6CEBD7E9_606A_7D05_41C3_F00134E174E2",
                              "areas": [
                               {
                                "displayTooltipInTouchScreens": true,
                                "click": "this.startPanoramaWithCamera(this.panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E, this.camera_55602CAB_5BF2_F6EF_41A1_3BA349C88636); this.mainPlayList.set('selectedIndex', 0)",
                                "mapColor": "#FF0000",
                                "toolTip": "STREET VIEW",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "items": [
                               {
                                "yaw": 0.94,
                                "hfov": 4.56,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 69,
                                   "width": 69,
                                   "url": "media/panorama_6CEBB7E8_606A_7D03_41CE_69723C00AA9F_0_HS_6_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "class": "HotspotPanoramaOverlayImage",
                                "pitch": -25.17
                               }
                              ]
                             },
                             {
                              "rollOverDisplay": true,
                              "maps": [
                               {
                                "hfov": 0,
                                "yaw": -170.68,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 1,
                                   "width": 1,
                                   "url": "media/panorama_6CEBB7E8_606A_7D03_41CE_69723C00AA9F_0_HS_1_0_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": 83.2
                               }
                              ],
                              "enabledInCardboard": true,
                              "useHandCursor": true,
                              "id": "overlay_6CEB27E9_606A_7D05_41D7_A41537CB50F2",
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_6CD96857_606E_330E_41D4_28DA4961B1BD, this.camera_63B0EF3D_77B3_97E9_41AB_120527CA7061); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 5); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 8)",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "items": [
                               {
                                "yaw": -170.68,
                                "hfov": 0,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 1,
                                   "width": 1,
                                   "url": "media/panorama_6CEBB7E8_606A_7D03_41CE_69723C00AA9F_0_HS_1_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "class": "HotspotPanoramaOverlayImage",
                                "pitch": 83.2
                               }
                              ]
                             },
                             {
                              "rollOverDisplay": false,
                              "maps": [
                               {
                                "hfov": 7.12,
                                "yaw": -16.8,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 49,
                                   "width": 49,
                                   "url": "media/panorama_6CEBB7E8_606A_7D03_41CE_69723C00AA9F_0_HS_7_0_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": -8.74
                               }
                              ],
                              "enabledInCardboard": true,
                              "useHandCursor": true,
                              "id": "overlay_6CEB37E9_606A_7D05_41BD_EF0B340A722F",
                              "areas": [
                               {
                                "displayTooltipInTouchScreens": true,
                                "click": "this.startPanoramaWithCamera(this.panorama_6A58246F_6179_90B3_41BF_E08163C94BD1, this.camera_64117EF9_77B3_9669_41D7_CAAD24A3DD8E); this.mainPlayList.set('selectedIndex', 2)",
                                "mapColor": "#FF0000",
                                "toolTip": "POOL",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "items": [
                               {
                                "yaw": -16.8,
                                "hfov": 7.12,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 99,
                                   "width": 99,
                                   "url": "media/panorama_6CEBB7E8_606A_7D03_41CE_69723C00AA9F_0_HS_7_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "class": "HotspotPanoramaOverlayImage",
                                "pitch": -8.74
                               }
                              ]
                             },
                             {
                              "rollOverDisplay": false,
                              "maps": [
                               {
                                "hfov": 6.54,
                                "yaw": 0.93,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 49,
                                   "width": 49,
                                   "url": "media/panorama_6CEBB7E8_606A_7D03_41CE_69723C00AA9F_0_HS_8_0_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": -24.65
                               }
                              ],
                              "enabledInCardboard": true,
                              "useHandCursor": true,
                              "id": "overlay_6CEB07E9_606A_7D05_4196_BF907A07BBE0",
                              "areas": [
                               {
                                "displayTooltipInTouchScreens": true,
                                "click": "this.startPanoramaWithCamera(this.panorama_6BE40682_606A_FF06_41C3_B3B6845ECE6A, this.camera_645E8F1F_77B3_97A8_41CD_8CB1EE330B64); this.mainPlayList.set('selectedIndex', 0)",
                                "mapColor": "#FF0000",
                                "toolTip": "STREET VIEW",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "items": [
                               {
                                "yaw": 0.93,
                                "hfov": 6.54,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 99,
                                   "width": 99,
                                   "url": "media/panorama_6CEBB7E8_606A_7D03_41CE_69723C00AA9F_0_HS_8_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "class": "HotspotPanoramaOverlayImage",
                                "pitch": -24.65
                               }
                              ]
                             }
                            ],
                            "class": "SphericPanoramaFrame",
                            "sphere": {
                             "levels": [
                              {
                               "height": 2500,
                               "width": 5000,
                               "url": "media/panorama_6CEBB7E8_606A_7D03_41CE_69723C00AA9F_hq.jpeg",
                               "class": "ImageResourceLevel"
                              },
                              {
                               "height": 1608,
                               "width": 3217,
                               "url": "media/panorama_6CEBB7E8_606A_7D03_41CE_69723C00AA9F.jpeg",
                               "class": "ImageResourceLevel"
                              }
                             ],
                             "class": "ImageResource"
                            }
                           }
                          ],
                          "partial": false,
                          "hfovMin": 100,
                          "class": "Panorama",
                          "pitch": 0,
                          "hfovMax": 120,
                          "thumbnailUrl": "media/panorama_6CEBB7E8_606A_7D03_41CE_69723C00AA9F_t.jpg",
                          "id": "panorama_6CEBB7E8_606A_7D03_41CE_69723C00AA9F",
                          "label": "ENTRANCE",
                          "hfov": 360,
                          "adjacentPanoramas": [
                           {
                            "distance": 1,
                            "panorama": "this.panorama_6A977261_617E_B0AF_41D7_BFCC461810A7",
                            "yaw": -170.68,
                            "class": "AdjacentPanorama",
                            "backwardYaw": -162.92
                           },
                           {
                            "distance": 1,
                            "panorama": "this.panorama_6A58246F_6179_90B3_41BF_E08163C94BD1",
                            "yaw": -16.8,
                            "class": "AdjacentPanorama",
                            "backwardYaw": -97.22
                           },
                           {
                            "distance": 1,
                            "panorama": "this.panorama_6CD1C202_606E_7706_41A2_313E1DC1AF6A",
                            "yaw": -170.68,
                            "class": "AdjacentPanorama",
                            "backwardYaw": -172.21
                           },
                           {
                            "distance": 1,
                            "panorama": "this.panorama_6CE9E5E7_606E_5D0E_41D0_003A6E1B2677",
                            "yaw": -170.68,
                            "class": "AdjacentPanorama",
                            "backwardYaw": -170.58
                           },
                           {
                            "distance": 1,
                            "panorama": "this.panorama_6C19C4DF_606E_333E_4190_E16296FAA0F2",
                            "yaw": -170.68,
                            "class": "AdjacentPanorama",
                            "backwardYaw": -171.96
                           },
                           {
                            "distance": 1,
                            "panorama": "this.panorama_6BE40682_606A_FF06_41C3_B3B6845ECE6A",
                            "yaw": 0.93,
                            "class": "AdjacentPanorama",
                            "backwardYaw": 140.49
                           },
                           {
                            "distance": 1,
                            "panorama": "this.panorama_6D430522_6193_00C9_41B5_ED6C4ECBB6B9",
                            "yaw": -170.68,
                            "class": "AdjacentPanorama",
                            "backwardYaw": -162.92
                           },
                           {
                            "distance": 1,
                            "panorama": "this.panorama_6C191CE9_606E_7302_41D6_3E33CDB64ACF",
                            "yaw": -170.68,
                            "class": "AdjacentPanorama",
                            "backwardYaw": -170.2
                           },
                           {
                            "distance": 1,
                            "panorama": {
                             "frames": [
                              {
                               "thumbnailUrl": "media/panorama_6CD96857_606E_330E_41D4_28DA4961B1BD_t.jpg",
                               "overlays": [
                                {
                                 "rollOverDisplay": false,
                                 "maps": [
                                  {
                                   "hfov": 5.63,
                                   "yaw": 18.78,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 41,
                                      "width": 41,
                                      "url": "media/panorama_6CD96857_606E_330E_41D4_28DA4961B1BD_0_HS_6_0_0_map.gif",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": -20.36
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "useHandCursor": true,
                                 "id": "overlay_6CD97857_606E_330E_41A6_312860002B40",
                                 "areas": [
                                  {
                                   "displayTooltipInTouchScreens": true,
                                   "click": "this.startPanoramaWithCamera(this.panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D, this.camera_5488DF3C_5BF2_F3E9_41D1_C652E087859B); this.mainPlayList.set('selectedIndex', 8)",
                                   "mapColor": "#FF0000",
                                   "toolTip": "2 BEDROOM",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "class": "HotspotPanoramaOverlay",
                                 "items": [
                                  {
                                   "yaw": 18.78,
                                   "hfov": 5.63,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 83,
                                      "width": 83,
                                      "url": "media/panorama_6CD96857_606E_330E_41D4_28DA4961B1BD_0_HS_6_0.png",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "class": "HotspotPanoramaOverlayImage",
                                   "pitch": -20.36
                                  }
                                 ]
                                },
                                {
                                 "rollOverDisplay": true,
                                 "maps": [
                                  {
                                   "hfov": 0,
                                   "yaw": -173.12,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 1,
                                      "width": 1,
                                      "url": "media/panorama_6CD96857_606E_330E_41D4_28DA4961B1BD_0_HS_5_0_0_map.gif",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": 85.84
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "useHandCursor": true,
                                 "id": "overlay_6CD90857_606E_330E_41C7_82511C5367F4",
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_6CEBB7E8_606A_7D03_41CE_69723C00AA9F, this.camera_66DD1FD1_77B3_96B9_41A4_69AE4905514F); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 5); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 4)",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "class": "HotspotPanoramaOverlay",
                                 "items": [
                                  {
                                   "yaw": -173.12,
                                   "hfov": 0,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 1,
                                      "width": 1,
                                      "url": "media/panorama_6CD96857_606E_330E_41D4_28DA4961B1BD_0_HS_5_0.png",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "class": "HotspotPanoramaOverlayImage",
                                   "pitch": 85.84
                                  }
                                 ]
                                },
                                {
                                 "rollOverDisplay": false,
                                 "maps": [
                                  {
                                   "hfov": 8.07,
                                   "yaw": 18.79,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 60,
                                      "width": 60,
                                      "url": "media/panorama_6CD96857_606E_330E_41D4_28DA4961B1BD_0_HS_7_0_0_map.gif",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": -21.01
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "useHandCursor": true,
                                 "id": "overlay_6CD91857_606E_330E_41C0_9563969F6B1D",
                                 "areas": [
                                  {
                                   "displayTooltipInTouchScreens": true,
                                   "click": "this.startPanoramaWithCamera(this.panorama_6CD1C202_606E_7706_41A2_313E1DC1AF6A, this.camera_638A6F5B_77B3_97A9_41CC_1FFBE1D0AE35); this.mainPlayList.set('selectedIndex', 8)",
                                   "mapColor": "#FF0000",
                                   "toolTip": "2 BEDROOM",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "class": "HotspotPanoramaOverlay",
                                 "items": [
                                  {
                                   "yaw": 18.79,
                                   "hfov": 8.07,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 120,
                                      "width": 120,
                                      "url": "media/panorama_6CD96857_606E_330E_41D4_28DA4961B1BD_0_HS_7_0.png",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "class": "HotspotPanoramaOverlayImage",
                                   "pitch": -21.01
                                  }
                                 ]
                                }
                               ],
                               "class": "SphericPanoramaFrame",
                               "sphere": {
                                "levels": [
                                 {
                                  "height": 2500,
                                  "width": 5000,
                                  "url": "media/panorama_6CD96857_606E_330E_41D4_28DA4961B1BD_hq.jpeg",
                                  "class": "ImageResourceLevel"
                                 },
                                 {
                                  "height": 1608,
                                  "width": 3217,
                                  "url": "media/panorama_6CD96857_606E_330E_41D4_28DA4961B1BD.jpeg",
                                  "class": "ImageResourceLevel"
                                 }
                                ],
                                "class": "ImageResource"
                               }
                              }
                             ],
                             "partial": false,
                             "hfovMin": 100,
                             "class": "Panorama",
                             "pitch": 0,
                             "hfovMax": 120,
                             "thumbnailUrl": "media/panorama_6CD96857_606E_330E_41D4_28DA4961B1BD_t.jpg",
                             "id": "panorama_6CD96857_606E_330E_41D4_28DA4961B1BD",
                             "label": "ROOFTOP",
                             "hfov": 360,
                             "adjacentPanoramas": [
                              {
                               "distance": 1,
                               "panorama": "this.panorama_6A977261_617E_B0AF_41D7_BFCC461810A7",
                               "yaw": -173.12,
                               "class": "AdjacentPanorama",
                               "backwardYaw": -162.92
                              },
                              {
                               "distance": 1,
                               "panorama": "this.panorama_6A58246F_6179_90B3_41BF_E08163C94BD1",
                               "yaw": -173.12,
                               "class": "AdjacentPanorama",
                               "backwardYaw": -172.22
                              },
                              {
                               "distance": 1,
                               "panorama": "this.panorama_6CD1C202_606E_7706_41A2_313E1DC1AF6A",
                               "yaw": 18.79,
                               "class": "AdjacentPanorama",
                               "backwardYaw": 112.38
                              },
                              {
                               "distance": 1,
                               "panorama": "this.panorama_6CE9E5E7_606E_5D0E_41D0_003A6E1B2677",
                               "yaw": -173.12,
                               "class": "AdjacentPanorama",
                               "backwardYaw": -170.58
                              },
                              {
                               "distance": 1,
                               "panorama": "this.panorama_6C19C4DF_606E_333E_4190_E16296FAA0F2",
                               "yaw": -173.12,
                               "class": "AdjacentPanorama",
                               "backwardYaw": -171.96
                              },
                              {
                               "distance": 1,
                               "panorama": "this.panorama_6BE40682_606A_FF06_41C3_B3B6845ECE6A",
                               "yaw": -173.12,
                               "class": "AdjacentPanorama",
                               "backwardYaw": -171.35
                              },
                              {
                               "distance": 1,
                               "panorama": "this.panorama_6D430522_6193_00C9_41B5_ED6C4ECBB6B9",
                               "yaw": -173.12,
                               "class": "AdjacentPanorama",
                               "backwardYaw": -162.92
                              },
                              {
                               "distance": 1,
                               "panorama": "this.panorama_6C191CE9_606E_7302_41D6_3E33CDB64ACF",
                               "yaw": -173.12,
                               "class": "AdjacentPanorama",
                               "backwardYaw": -170.2
                              },
                              {
                               "distance": 1,
                               "panorama": "this.panorama_6CEBB7E8_606A_7D03_41CE_69723C00AA9F",
                               "yaw": -173.12,
                               "class": "AdjacentPanorama",
                               "backwardYaw": -170.68
                              }
                             ],
                             "vfov": 180
                            },
                            "yaw": -170.68,
                            "class": "AdjacentPanorama",
                            "backwardYaw": -173.12
                           }
                          ],
                          "vfov": 180
                         },
                         "yaw": -170.2,
                         "class": "AdjacentPanorama",
                         "backwardYaw": -170.68
                        },
                        {
                         "distance": 1,
                         "panorama": "this.panorama_6CD96857_606E_330E_41D4_28DA4961B1BD",
                         "yaw": -170.2,
                         "class": "AdjacentPanorama",
                         "backwardYaw": -173.12
                        }
                       ],
                       "vfov": 180
                      },
                      "yaw": -162.92,
                      "class": "AdjacentPanorama",
                      "backwardYaw": -170.2
                     },
                     {
                      "distance": 1,
                      "panorama": "this.panorama_6CEBB7E8_606A_7D03_41CE_69723C00AA9F",
                      "yaw": -162.92,
                      "class": "AdjacentPanorama",
                      "backwardYaw": -170.68
                     },
                     {
                      "distance": 1,
                      "panorama": "this.panorama_6CD96857_606E_330E_41D4_28DA4961B1BD",
                      "yaw": -162.92,
                      "class": "AdjacentPanorama",
                      "backwardYaw": -173.12
                     }
                    ],
                    "vfov": 180
                   },
                   "yaw": -171.96,
                   "class": "AdjacentPanorama",
                   "backwardYaw": -162.92
                  },
                  {
                   "distance": 1,
                   "panorama": "this.panorama_6C191CE9_606E_7302_41D6_3E33CDB64ACF",
                   "yaw": 42.16,
                   "class": "AdjacentPanorama",
                   "backwardYaw": 110.2
                  },
                  {
                   "distance": 1,
                   "panorama": "this.panorama_6CEBB7E8_606A_7D03_41CE_69723C00AA9F",
                   "yaw": -171.96,
                   "class": "AdjacentPanorama",
                   "backwardYaw": -170.68
                  },
                  {
                   "distance": 1,
                   "panorama": "this.panorama_6CD96857_606E_330E_41D4_28DA4961B1BD",
                   "yaw": -171.96,
                   "class": "AdjacentPanorama",
                   "backwardYaw": -173.12
                  }
                 ],
                 "vfov": 180
                },
                "yaw": -170.58,
                "class": "AdjacentPanorama",
                "backwardYaw": -171.96
               },
               {
                "distance": 1,
                "panorama": "this.panorama_6BE40682_606A_FF06_41C3_B3B6845ECE6A",
                "yaw": -170.58,
                "class": "AdjacentPanorama",
                "backwardYaw": -171.35
               },
               {
                "distance": 1,
                "panorama": "this.panorama_6D430522_6193_00C9_41B5_ED6C4ECBB6B9",
                "yaw": -170.58,
                "class": "AdjacentPanorama",
                "backwardYaw": -162.92
               },
               {
                "distance": 1,
                "panorama": "this.panorama_6C191CE9_606E_7302_41D6_3E33CDB64ACF",
                "yaw": -170.58,
                "class": "AdjacentPanorama",
                "backwardYaw": -170.2
               },
               {
                "distance": 1,
                "panorama": "this.panorama_6CEBB7E8_606A_7D03_41CE_69723C00AA9F",
                "yaw": -170.58,
                "class": "AdjacentPanorama",
                "backwardYaw": -170.68
               },
               {
                "distance": 1,
                "panorama": "this.panorama_6CD96857_606E_330E_41D4_28DA4961B1BD",
                "yaw": -170.58,
                "class": "AdjacentPanorama",
                "backwardYaw": -173.12
               }
              ],
              "vfov": 180
             },
             "yaw": -172.21,
             "class": "AdjacentPanorama",
             "backwardYaw": -170.58
            },
            {
             "distance": 1,
             "panorama": "this.panorama_6C19C4DF_606E_333E_4190_E16296FAA0F2",
             "yaw": -172.21,
             "class": "AdjacentPanorama",
             "backwardYaw": -171.96
            },
            {
             "distance": 1,
             "panorama": "this.panorama_6BE40682_606A_FF06_41C3_B3B6845ECE6A",
             "yaw": -172.21,
             "class": "AdjacentPanorama",
             "backwardYaw": -171.35
            },
            {
             "distance": 1,
             "panorama": "this.panorama_6D430522_6193_00C9_41B5_ED6C4ECBB6B9",
             "yaw": -172.21,
             "class": "AdjacentPanorama",
             "backwardYaw": -162.92
            },
            {
             "distance": 1,
             "panorama": "this.panorama_6C191CE9_606E_7302_41D6_3E33CDB64ACF",
             "yaw": -172.21,
             "class": "AdjacentPanorama",
             "backwardYaw": -170.2
            },
            {
             "distance": 1,
             "panorama": "this.panorama_6CEBB7E8_606A_7D03_41CE_69723C00AA9F",
             "yaw": -172.21,
             "class": "AdjacentPanorama",
             "backwardYaw": -170.68
            },
            {
             "distance": 1,
             "panorama": "this.panorama_6CD96857_606E_330E_41D4_28DA4961B1BD",
             "yaw": 112.38,
             "class": "AdjacentPanorama",
             "backwardYaw": 18.79
            }
           ],
           "vfov": 180
          },
          "yaw": -172.22,
          "class": "AdjacentPanorama",
          "backwardYaw": -172.21
         },
         {
          "distance": 1,
          "panorama": "this.panorama_6CE9E5E7_606E_5D0E_41D0_003A6E1B2677",
          "yaw": -172.22,
          "class": "AdjacentPanorama",
          "backwardYaw": -170.58
         },
         {
          "distance": 1,
          "panorama": "this.panorama_6C19C4DF_606E_333E_4190_E16296FAA0F2",
          "yaw": 12.06,
          "class": "AdjacentPanorama",
          "backwardYaw": -176.63
         },
         {
          "distance": 1,
          "panorama": "this.panorama_6BE40682_606A_FF06_41C3_B3B6845ECE6A",
          "yaw": -172.22,
          "class": "AdjacentPanorama",
          "backwardYaw": -171.35
         },
         {
          "distance": 1,
          "panorama": "this.panorama_6D430522_6193_00C9_41B5_ED6C4ECBB6B9",
          "yaw": -172.22,
          "class": "AdjacentPanorama",
          "backwardYaw": -162.92
         },
         {
          "distance": 1,
          "panorama": "this.panorama_6C191CE9_606E_7302_41D6_3E33CDB64ACF",
          "yaw": -172.22,
          "class": "AdjacentPanorama",
          "backwardYaw": -170.2
         },
         {
          "distance": 1,
          "panorama": "this.panorama_6CEBB7E8_606A_7D03_41CE_69723C00AA9F",
          "yaw": -97.22,
          "class": "AdjacentPanorama",
          "backwardYaw": -16.8
         },
         {
          "distance": 1,
          "panorama": "this.panorama_6CD96857_606E_330E_41D4_28DA4961B1BD",
          "yaw": -172.22,
          "class": "AdjacentPanorama",
          "backwardYaw": -173.12
         }
        ],
        "vfov": 180
       },
       "yaw": -162.92,
       "class": "AdjacentPanorama",
       "backwardYaw": -172.22
      },
      {
       "distance": 1,
       "panorama": "this.panorama_6CD1C202_606E_7706_41A2_313E1DC1AF6A",
       "yaw": 34.82,
       "class": "AdjacentPanorama",
       "backwardYaw": 112.32
      },
      {
       "distance": 1,
       "panorama": "this.panorama_6CE9E5E7_606E_5D0E_41D0_003A6E1B2677",
       "yaw": -178.18,
       "class": "AdjacentPanorama",
       "backwardYaw": -174.34
      },
      {
       "distance": 1,
       "panorama": "this.panorama_6C19C4DF_606E_333E_4190_E16296FAA0F2",
       "yaw": -162.92,
       "class": "AdjacentPanorama",
       "backwardYaw": -171.96
      },
      {
       "distance": 1,
       "panorama": "this.panorama_6BE40682_606A_FF06_41C3_B3B6845ECE6A",
       "yaw": -162.92,
       "class": "AdjacentPanorama",
       "backwardYaw": -171.35
      },
      {
       "distance": 1,
       "panorama": "this.panorama_6D430522_6193_00C9_41B5_ED6C4ECBB6B9",
       "yaw": 82.9,
       "class": "AdjacentPanorama",
       "backwardYaw": 161.78
      },
      {
       "distance": 1,
       "panorama": "this.panorama_6C191CE9_606E_7302_41D6_3E33CDB64ACF",
       "yaw": 34.73,
       "class": "AdjacentPanorama",
       "backwardYaw": 110.14
      },
      {
       "distance": 1,
       "panorama": "this.panorama_6CEBB7E8_606A_7D03_41CE_69723C00AA9F",
       "yaw": -162.92,
       "class": "AdjacentPanorama",
       "backwardYaw": -170.68
      },
      {
       "distance": 1,
       "panorama": "this.panorama_6CD96857_606E_330E_41D4_28DA4961B1BD",
       "yaw": -162.92,
       "class": "AdjacentPanorama",
       "backwardYaw": -173.12
      }
     ],
     "vfov": 180
    },
    "yaw": -171.35,
    "class": "AdjacentPanorama",
    "backwardYaw": -162.92
   },
   {
    "distance": 1,
    "panorama": "this.panorama_6A58246F_6179_90B3_41BF_E08163C94BD1",
    "yaw": -171.35,
    "class": "AdjacentPanorama",
    "backwardYaw": -172.22
   },
   {
    "distance": 1,
    "panorama": "this.panorama_6CD1C202_606E_7706_41A2_313E1DC1AF6A",
    "yaw": -171.35,
    "class": "AdjacentPanorama",
    "backwardYaw": -172.21
   },
   {
    "distance": 1,
    "panorama": "this.panorama_6CE9E5E7_606E_5D0E_41D0_003A6E1B2677",
    "yaw": -171.35,
    "class": "AdjacentPanorama",
    "backwardYaw": -170.58
   },
   {
    "distance": 1,
    "panorama": "this.panorama_6C19C4DF_606E_333E_4190_E16296FAA0F2",
    "yaw": -171.35,
    "class": "AdjacentPanorama",
    "backwardYaw": -171.96
   },
   {
    "distance": 1,
    "panorama": "this.panorama_6D430522_6193_00C9_41B5_ED6C4ECBB6B9",
    "yaw": -171.35,
    "class": "AdjacentPanorama",
    "backwardYaw": -162.92
   },
   {
    "distance": 1,
    "panorama": "this.panorama_6C191CE9_606E_7302_41D6_3E33CDB64ACF",
    "yaw": -171.35,
    "class": "AdjacentPanorama",
    "backwardYaw": -170.2
   },
   {
    "distance": 1,
    "panorama": "this.panorama_6CEBB7E8_606A_7D03_41CE_69723C00AA9F",
    "yaw": 140.49,
    "class": "AdjacentPanorama",
    "backwardYaw": 0.93
   },
   {
    "distance": 1,
    "panorama": "this.panorama_6CD96857_606E_330E_41D4_28DA4961B1BD",
    "yaw": -171.35,
    "class": "AdjacentPanorama",
    "backwardYaw": -173.12
   }
  ],
  "vfov": 180
 },
 {
  "gyroscopeVerticalDraggingEnabled": true,
  "touchControlMode": "drag_rotation",
  "buttonPlay": "this.IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED",
  "class": "PanoramaPlayer",
  "displayPlaybackBar": true,
  "viewerArea": "this.MainViewer",
  "id": "MainViewerPanoramaPlayer",
  "preloadEnabled": false,
  "buttonToggleHotspots": {
   "toolTipBorderRadius": 3,
   "paddingRight": 0,
   "toolTipShadowOpacity": 1,
   "verticalAlign": "middle",
   "mode": "toggle",
   "paddingLeft": 0,
   "width": "100%",
   "toolTipBorderSize": 1,
   "toolTip": "Hotspots Visibility",
   "transparencyActive": true,
   "toolTipTextShadowColor": "#000000",
   "toolTipPaddingLeft": 6,
   "toolTipBorderColor": "#767676",
   "pressedIconURL": "skin/IconButton_80E5955A_8E23_BB05_41CA_43DD61DBAEE9_pressed.png",
   "borderSize": 0,
   "toolTipBackgroundColor": "#000000",
   "borderRadius": 0,
   "horizontalAlign": "center",
   "height": "100%",
   "toolTipShadowVerticalLength": 0,
   "click": "if(!this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, true, 0, this.effect_CDD059FA_EED0_D223_41DB_70ACFBE986FE, 'showEffect', false) } else if(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, false, 0, this.effect_CDD049FB_EED0_D221_41EB_CA2134B978E0, 'hideEffect', false) }",
   "toolTipTextShadowBlurRadius": 3,
   "toolTipOpacity": 0.7,
   "toolTipPaddingBottom": 4,
   "shadow": false,
   "maxHeight": 60,
   "paddingBottom": 0,
   "toolTipFontSize": 12,
   "toolTipShadowHorizontalLength": 0,
   "cursor": "hand",
   "toolTipShadowColor": "#333333",
   "minWidth": 1,
   "toolTipFontWeight": "normal",
   "id": "IconButton_80E5955A_8E23_BB05_41CA_43DD61DBAEE9",
   "toolTipShadowSpread": 0,
   "toolTipTextShadowOpacity": 0,
   "backgroundOpacity": 0,
   "toolTipShadowBlurRadius": 3,
   "toolTipFontColor": "#606060",
   "class": "IconButton",
   "paddingTop": 0,
   "iconURL": "skin/IconButton_80E5955A_8E23_BB05_41CA_43DD61DBAEE9.png",
   "toolTipFontFamily": "Arial",
   "maxWidth": 60,
   "toolTipPaddingTop": 4,
   "minHeight": 1,
   "toolTipPaddingRight": 6,
   "toolTipFontStyle": "normal"
  },
  "mouseControlMode": "drag_acceleration",
  "buttonStop": [
   "this.IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4",
   "this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB"
  ],
  "buttonCardboardView": {
   "paddingRight": 0,
   "verticalAlign": "middle",
   "mode": "push",
   "paddingLeft": 0,
   "width": "100%",
   "transparencyActive": false,
   "borderSize": 0,
   "borderRadius": 0,
   "horizontalAlign": "center",
   "height": "100%",
   "shadow": false,
   "maxHeight": 60,
   "paddingBottom": 0,
   "cursor": "hand",
   "minWidth": 1,
   "id": "IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37",
   "backgroundOpacity": 0,
   "class": "IconButton",
   "paddingTop": 0,
   "iconURL": "skin/IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37.png",
   "maxWidth": 60,
   "minHeight": 1
  }
 },
 {
  "viewerArea": {
   "paddingRight": 0,
   "toolTipShadowOpacity": 1,
   "playbackBarHeadShadowOpacity": 0.7,
   "playbackBarBackgroundColor": [
    "#FFFFFF"
   ],
   "progressBarOpacity": 1,
   "playbackBarHeadShadowHorizontalLength": 0,
   "playbackBarHeight": 10,
   "playbackBarHeadWidth": 6,
   "playbackBarProgressBorderSize": 0,
   "playbackBarBackgroundColorDirection": "vertical",
   "playbackBarRight": 0,
   "playbackBarHeadShadow": true,
   "shadow": false,
   "toolTipShadowVerticalLength": 0,
   "toolTipPaddingBottom": 4,
   "progressBackgroundOpacity": 1,
   "progressBarBorderSize": 0,
   "progressBarBorderRadius": 0,
   "progressBorderRadius": 0,
   "toolTipFontWeight": "normal",
   "paddingBottom": 0,
   "toolTipFontSize": 12,
   "playbackBarProgressBorderRadius": 0,
   "toolTipShadowColor": "#333333",
   "toolTipShadowBlurRadius": 3,
   "toolTipShadowSpread": 0,
   "toolTipTextShadowOpacity": 0,
   "progressBottom": 2,
   "playbackBarProgressBackgroundColorRatios": [
    0
   ],
   "progressHeight": 10,
   "transitionMode": "blending",
   "paddingTop": 0,
   "toolTipFontColor": "#606060",
   "playbackBarBorderRadius": 0,
   "playbackBarProgressBorderColor": "#000000",
   "minHeight": 1,
   "toolTipPaddingRight": 6,
   "playbackBarProgressBackgroundColor": [
    "#3399FF"
   ],
   "toolTipBorderRadius": 3,
   "playbackBarHeadBackgroundColor": [
    "#111111",
    "#666666"
   ],
   "progressLeft": 0,
   "progressBackgroundColorRatios": [
    0
   ],
   "playbackBarHeadBorderRadius": 0,
   "playbackBarBorderColor": "#FFFFFF",
   "paddingLeft": 0,
   "playbackBarHeadBorderColor": "#000000",
   "playbackBarProgressOpacity": 1,
   "toolTipBorderSize": 1,
   "toolTipBorderColor": "#767676",
   "playbackBarHeadShadowBlurRadius": 3,
   "toolTipTextShadowColor": "#000000",
   "toolTipPaddingLeft": 6,
   "playbackBarHeadBackgroundColorDirection": "vertical",
   "playbackBarBackgroundOpacity": 1,
   "playbackBarBorderSize": 0,
   "borderSize": 0,
   "toolTipBackgroundColor": "#000000",
   "playbackBarLeft": 0,
   "playbackBarHeadHeight": 15,
   "borderRadius": 0,
   "playbackBarHeadBackgroundColorRatios": [
    0,
    1
   ],
   "toolTipTextShadowBlurRadius": 3,
   "toolTipOpacity": 0.7,
   "playbackBarOpacity": 1,
   "playbackBarHeadShadowColor": "#000000",
   "progressRight": 0,
   "playbackBarHeadBorderSize": 0,
   "progressBarBackgroundColorRatios": [
    0
   ],
   "top": "10%",
   "progressBarBorderColor": "#000000",
   "playbackBarHeadOpacity": 1,
   "progressOpacity": 1,
   "progressBackgroundColorDirection": "vertical",
   "minWidth": 1,
   "id": "MapViewer",
   "toolTipShadowHorizontalLength": 0,
   "bottom": "10%",
   "progressBorderColor": "#000000",
   "class": "ViewerArea",
   "playbackBarBottom": 0,
   "progressBarBackgroundColor": [
    "#3399FF"
   ],
   "progressBarBackgroundColorDirection": "vertical",
   "toolTipFontFamily": "Arial",
   "left": "10%",
   "progressBackgroundColor": [
    "#FFFFFF"
   ],
   "progressBorderSize": 0,
   "playbackBarProgressBackgroundColorDirection": "vertical",
   "playbackBarHeadShadowVerticalLength": 0,
   "toolTipPaddingTop": 4,
   "toolTipFontStyle": "normal",
   "right": "10%"
  },
  "movementMode": "constrained",
  "id": "MapViewerMapPlayer",
  "class": "MapPlayer"
 },
 {
  "id": "panorama_6BE40682_606A_FF06_41C3_B3B6845ECE6A_camera",
  "initialPosition": {
   "hfov": 120,
   "yaw": 178.1,
   "class": "PanoramaCameraPosition",
   "pitch": 2.83
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 "this.panorama_6CEBB7E8_606A_7D03_41CE_69723C00AA9F",
 {
  "id": "panorama_6CEBB7E8_606A_7D03_41CE_69723C00AA9F_camera",
  "initialPosition": {
   "yaw": 16.81,
   "class": "PanoramaCameraPosition",
   "pitch": 2.87
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": -323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 "this.panorama_6A58246F_6179_90B3_41BF_E08163C94BD1",
 {
  "id": "panorama_6A58246F_6179_90B3_41BF_E08163C94BD1_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 "this.panorama_6C19C4DF_606E_333E_4190_E16296FAA0F2",
 {
  "id": "panorama_6C19C4DF_606E_333E_4190_E16296FAA0F2_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": -323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 "this.panorama_6C191CE9_606E_7302_41D6_3E33CDB64ACF",
 {
  "id": "panorama_6C191CE9_606E_7302_41D6_3E33CDB64ACF_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 "this.panorama_6A977261_617E_B0AF_41D7_BFCC461810A7",
 {
  "id": "panorama_6A977261_617E_B0AF_41D7_BFCC461810A7_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": -323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 "this.panorama_6CE9E5E7_606E_5D0E_41D0_003A6E1B2677",
 {
  "id": "panorama_6CE9E5E7_606E_5D0E_41D0_003A6E1B2677_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": -323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 "this.panorama_6D430522_6193_00C9_41B5_ED6C4ECBB6B9",
 {
  "id": "panorama_6D430522_6193_00C9_41B5_ED6C4ECBB6B9_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": -323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 "this.panorama_6CD1C202_606E_7706_41A2_313E1DC1AF6A",
 {
  "id": "panorama_6CD1C202_606E_7706_41A2_313E1DC1AF6A_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 "this.panorama_6CD96857_606E_330E_41D4_28DA4961B1BD",
 {
  "id": "panorama_6CD96857_606E_330E_41D4_28DA4961B1BD_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "mainPlayList",
  "class": "PlayList",
  "items": [
   {
    "camera": "this.panorama_6BE40682_606A_FF06_41C3_B3B6845ECE6A_camera",
    "id": "PanoramaPlayListItem_649BBB66_77B3_9F98_41D9_5837298025A4",
    "media": "this.panorama_6BE40682_606A_FF06_41C3_B3B6845ECE6A",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_649BBB66_77B3_9F98_41D9_5837298025A4, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "camera": "this.panorama_6CEBB7E8_606A_7D03_41CE_69723C00AA9F_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_6CEBB7E8_606A_7D03_41CE_69723C00AA9F",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_6A58246F_6179_90B3_41BF_E08163C94BD1_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_6A58246F_6179_90B3_41BF_E08163C94BD1",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_6C19C4DF_606E_333E_4190_E16296FAA0F2_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_6C19C4DF_606E_333E_4190_E16296FAA0F2",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_6C191CE9_606E_7302_41D6_3E33CDB64ACF_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_6C191CE9_606E_7302_41D6_3E33CDB64ACF",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_6A977261_617E_B0AF_41D7_BFCC461810A7_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_6A977261_617E_B0AF_41D7_BFCC461810A7",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_6CE9E5E7_606E_5D0E_41D0_003A6E1B2677_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_6CE9E5E7_606E_5D0E_41D0_003A6E1B2677",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_6D430522_6193_00C9_41B5_ED6C4ECBB6B9_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_6D430522_6193_00C9_41B5_ED6C4ECBB6B9",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_6CD1C202_606E_7706_41A2_313E1DC1AF6A_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_6CD1C202_606E_7706_41A2_313E1DC1AF6A",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_6CD96857_606E_330E_41D4_28DA4961B1BD_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_6CD96857_606E_330E_41D4_28DA4961B1BD",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 0)",
    "class": "PanoramaPlayListItem"
   }
  ]
 },
 {
  "id": "ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist",
  "class": "PlayList",
  "items": [
   {
    "camera": "this.panorama_6BE40682_606A_FF06_41C3_B3B6845ECE6A_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_6BE40682_606A_FF06_41C3_B3B6845ECE6A",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 0, 1)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_6CEBB7E8_606A_7D03_41CE_69723C00AA9F_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_6CEBB7E8_606A_7D03_41CE_69723C00AA9F",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 1, 2)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_6A58246F_6179_90B3_41BF_E08163C94BD1_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_6A58246F_6179_90B3_41BF_E08163C94BD1",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 2, 3)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_6C19C4DF_606E_333E_4190_E16296FAA0F2_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_6C19C4DF_606E_333E_4190_E16296FAA0F2",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 3, 4)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_6C191CE9_606E_7302_41D6_3E33CDB64ACF_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_6C191CE9_606E_7302_41D6_3E33CDB64ACF",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 4, 5)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_6A977261_617E_B0AF_41D7_BFCC461810A7_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_6A977261_617E_B0AF_41D7_BFCC461810A7",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 5, 6)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_6CE9E5E7_606E_5D0E_41D0_003A6E1B2677_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_6CE9E5E7_606E_5D0E_41D0_003A6E1B2677",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 6, 7)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_6D430522_6193_00C9_41B5_ED6C4ECBB6B9_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_6D430522_6193_00C9_41B5_ED6C4ECBB6B9",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 7, 8)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_6CD1C202_606E_7706_41A2_313E1DC1AF6A_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_6CD1C202_606E_7706_41A2_313E1DC1AF6A",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 8, 9)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_6CD96857_606E_330E_41D4_28DA4961B1BD_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_6CD96857_606E_330E_41D4_28DA4961B1BD",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 9, 0)",
    "class": "PanoramaPlayListItem"
   }
  ]
 },
 {
  "thumbnailUrl": "media/video_210B394E_3D54_1A60_41A3_CB42BEC0D3EC_t.jpg",
  "label": "DJI_0384",
  "video": {
   "webmUrl": "media/video_210B394E_3D54_1A60_41A3_CB42BEC0D3EC.webm",
   "width": 1920,
   "height": 1080,
   "mp4Url": "media/video_210B394E_3D54_1A60_41A3_CB42BEC0D3EC.mp4",
   "class": "VideoResource"
  },
  "width": 1920,
  "id": "video_210B394E_3D54_1A60_41A3_CB42BEC0D3EC",
  "loop": false,
  "height": 1080,
  "scaleMode": "fit_outside",
  "class": "Video"
 },
 {
  "id": "playList_64A54B5F_77B3_9FA8_41D9_FDF178AEAB38",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.registerKey('visibility_ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472', this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472.get('visible')); this.registerKey('visibility_Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB', this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB.get('visible')); this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setComponentVisibility(this.Container_807F782A_8E23_A905_41DE_623121285A09, false, -1, this.effect_22974FB2_2DD9_0421_41BA_84205292D043, 'hideEffect', false); this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, false, -1, this.effect_22899FB3_2DD9_0427_41BB_298AEB3D2851, 'hideEffect', false); this.setComponentVisibility(this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB, true, -1, this.effect_2289DFB3_2DD9_0427_41AE_A35795880BA7, 'showEffect', false); this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, false, -1, this.effect_3876CD6E_2DF9_0421_41C1_F0AB7F279824, 'hideEffect', false); this.setComponentVisibility(this.Container_86F3A56C_8E22_5B1D_41CA_9CE53436FE56, false, -1, this.effect_22973FB1_2DD9_0423_41C1_E1E03953DCCE, 'hideEffect', false)",
    "media": "this.video_210B394E_3D54_1A60_41A3_CB42BEC0D3EC",
    "end": "this.setComponentVisibility(this.Container_807F782A_8E23_A905_41DE_623121285A09, true, -1, this.effect_22977FB2_2DD9_0421_41C1_F53B037346DF, 'showEffect', false); this.setComponentVisibility(this.Container_807F782A_8E23_A905_41DE_623121285A09, true, -1, this.effect_22977FB2_2DD9_0421_41C1_F53B037346DF, 'showEffect', false); if(this.existsKey('visibility_Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB')){ if(this.getKey('visibility_Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB')) { this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, true, -1, this.effect_66DFCFD4_77B3_96BF_41D4_7ABEB5013E9B, 'showEffect', false); } else { this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, false, -1, this.effect_22899FB3_2DD9_0427_41BB_298AEB3D2851, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB'); this.setComponentVisibility(this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB, false, -1, this.effect_2289EFB3_2DD9_0427_41C0_ACB5A72AE218, 'hideEffect', false); this.setComponentVisibility(this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB, false, -1, this.effect_2289EFB3_2DD9_0427_41C0_ACB5A72AE218, 'hideEffect', false); if(this.existsKey('visibility_ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472')){ if(this.getKey('visibility_ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472')) { this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, true, -1, this.effect_66DFDFD4_77B3_96BF_41D8_927CAFA0FAB1, 'showEffect', false); } else { this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, false, -1, this.effect_3876CD6E_2DF9_0421_41C1_F0AB7F279824, 'hideEffect', false); } }; this.unregisterKey('visibility_ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472'); this.setComponentVisibility(this.Container_86F3A56C_8E22_5B1D_41CA_9CE53436FE56, true, -1, this.effect_22975FB2_2DD9_0421_41B4_7A2443082F44, 'showEffect', false); this.setComponentVisibility(this.Container_86F3A56C_8E22_5B1D_41CA_9CE53436FE56, true, -1, this.effect_22975FB2_2DD9_0421_41B4_7A2443082F44, 'showEffect', false)",
    "player": "this.MainViewerVideoPlayer",
    "class": "VideoPlayListItem",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_64A54B5F_77B3_9FA8_41D9_FDF178AEAB38, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_64A54B5F_77B3_9FA8_41D9_FDF178AEAB38, 0, this.video_210B394E_3D54_1A60_41A3_CB42BEC0D3EC)"
   }
  ]
 },
 {
  "thumbnailUrl": "media/album_1AE8DEB7_0EE7_8CC7_4198_F5B75788CCF6_t.png",
  "class": "PhotoAlbum",
  "playList": {
   "id": "album_1AE8DEB7_0EE7_8CC7_4198_F5B75788CCF6_AlbumPlayList",
   "class": "PhotoPlayList",
   "items": [
    {
     "camera": {
      "easing": "linear",
      "scaleMode": "fit_outside",
      "initialPosition": {
       "zoomFactor": 1,
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "y": "0.50"
      },
      "targetPosition": {
       "zoomFactor": 1.1,
       "x": "0.33",
       "class": "PhotoCameraPosition",
       "y": "0.55"
      },
      "duration": 5000,
      "class": "MovementPhotoCamera"
     },
     "media": {
      "thumbnailUrl": "media/photo_25EB8F3B_3D54_3627_41C1_FA6C2C76D85C_t.jpg",
      "duration": 5000,
      "label": "DJI_0355",
      "width": 5472,
      "id": "photo_25EB8F3B_3D54_3627_41C1_FA6C2C76D85C",
      "height": 3648,
      "image": {
       "levels": [
        {
         "url": "media/photo_25EB8F3B_3D54_3627_41C1_FA6C2C76D85C.JPG",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "class": "Photo"
     },
     "class": "PhotoPlayListItem"
    },
    {
     "camera": {
      "easing": "linear",
      "scaleMode": "fit_outside",
      "initialPosition": {
       "zoomFactor": 1,
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "y": "0.50"
      },
      "targetPosition": {
       "zoomFactor": 1.1,
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "y": "0.71"
      },
      "duration": 5000,
      "class": "MovementPhotoCamera"
     },
     "media": {
      "thumbnailUrl": "media/photo_2537233E_3D54_0E20_41B8_95E46BC1EC07_t.jpg",
      "duration": 5000,
      "label": "DJI_0364",
      "width": 4900,
      "id": "photo_2537233E_3D54_0E20_41B8_95E46BC1EC07",
      "height": 3264,
      "image": {
       "levels": [
        {
         "url": "media/photo_2537233E_3D54_0E20_41B8_95E46BC1EC07.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "class": "Photo"
     },
     "class": "PhotoPlayListItem"
    },
    {
     "camera": {
      "easing": "linear",
      "scaleMode": "fit_outside",
      "initialPosition": {
       "zoomFactor": 1,
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "y": "0.50"
      },
      "targetPosition": {
       "zoomFactor": 1.1,
       "x": "0.52",
       "class": "PhotoCameraPosition",
       "y": "0.66"
      },
      "duration": 5000,
      "class": "MovementPhotoCamera"
     },
     "media": {
      "thumbnailUrl": "media/photo_25363697_3D54_16EF_41C7_78CA5BF042D8_t.jpg",
      "duration": 5000,
      "label": "DJI_0369",
      "width": 4900,
      "id": "photo_25363697_3D54_16EF_41C7_78CA5BF042D8",
      "height": 3264,
      "image": {
       "levels": [
        {
         "url": "media/photo_25363697_3D54_16EF_41C7_78CA5BF042D8.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "class": "Photo"
     },
     "class": "PhotoPlayListItem"
    },
    {
     "camera": {
      "easing": "linear",
      "scaleMode": "fit_outside",
      "initialPosition": {
       "zoomFactor": 1,
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "y": "0.50"
      },
      "targetPosition": {
       "zoomFactor": 1.1,
       "x": "0.70",
       "class": "PhotoCameraPosition",
       "y": "0.71"
      },
      "duration": 5000,
      "class": "MovementPhotoCamera"
     },
     "media": {
      "thumbnailUrl": "media/photo_2536FA03_3D54_19E7_41C9_9A86E77D5C4C_t.jpg",
      "duration": 5000,
      "label": "DJI_0388",
      "width": 5472,
      "id": "photo_2536FA03_3D54_19E7_41C9_9A86E77D5C4C",
      "height": 3648,
      "image": {
       "levels": [
        {
         "url": "media/photo_2536FA03_3D54_19E7_41C9_9A86E77D5C4C.JPG",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "class": "Photo"
     },
     "class": "PhotoPlayListItem"
    },
    {
     "camera": {
      "easing": "linear",
      "scaleMode": "fit_outside",
      "initialPosition": {
       "zoomFactor": 1,
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "y": "0.50"
      },
      "targetPosition": {
       "zoomFactor": 1.1,
       "x": "0.49",
       "class": "PhotoCameraPosition",
       "y": "0.74"
      },
      "duration": 5000,
      "class": "MovementPhotoCamera"
     },
     "media": {
      "thumbnailUrl": "media/photo_25365DAF_3D54_1A3F_41C9_6122F3F568B7_t.jpg",
      "duration": 5000,
      "label": "DJI_0402",
      "width": 4900,
      "id": "photo_25365DAF_3D54_1A3F_41C9_6122F3F568B7",
      "height": 3264,
      "image": {
       "levels": [
        {
         "url": "media/photo_25365DAF_3D54_1A3F_41C9_6122F3F568B7.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "class": "Photo"
     },
     "class": "PhotoPlayListItem"
    },
    {
     "camera": {
      "easing": "linear",
      "scaleMode": "fit_outside",
      "initialPosition": {
       "zoomFactor": 1,
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "y": "0.50"
      },
      "targetPosition": {
       "zoomFactor": 1.1,
       "x": "0.32",
       "class": "PhotoCameraPosition",
       "y": "0.47"
      },
      "duration": 5000,
      "class": "MovementPhotoCamera"
     },
     "media": {
      "thumbnailUrl": "media/photo_2536E107_3D54_0BE0_41C7_237D79278EAE_t.jpg",
      "duration": 5000,
      "label": "DJI_0405",
      "width": 4900,
      "id": "photo_2536E107_3D54_0BE0_41C7_237D79278EAE",
      "height": 3264,
      "image": {
       "levels": [
        {
         "url": "media/photo_2536E107_3D54_0BE0_41C7_237D79278EAE.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "class": "Photo"
     },
     "class": "PhotoPlayListItem"
    },
    {
     "camera": {
      "easing": "linear",
      "scaleMode": "fit_outside",
      "initialPosition": {
       "zoomFactor": 1,
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "y": "0.50"
      },
      "targetPosition": {
       "zoomFactor": 1.1,
       "x": "0.64",
       "class": "PhotoCameraPosition",
       "y": "0.53"
      },
      "duration": 5000,
      "class": "MovementPhotoCamera"
     },
     "media": {
      "thumbnailUrl": "media/photo_25361460_3D54_0A21_41C5_9CEF516D0083_t.jpg",
      "duration": 5000,
      "label": "DJI_0415",
      "width": 4900,
      "id": "photo_25361460_3D54_0A21_41C5_9CEF516D0083",
      "height": 3264,
      "image": {
       "levels": [
        {
         "url": "media/photo_25361460_3D54_0A21_41C5_9CEF516D0083.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "class": "Photo"
     },
     "class": "PhotoPlayListItem"
    },
    {
     "camera": {
      "easing": "linear",
      "scaleMode": "fit_outside",
      "initialPosition": {
       "zoomFactor": 1,
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "y": "0.50"
      },
      "targetPosition": {
       "zoomFactor": 1.1,
       "x": "0.31",
       "class": "PhotoCameraPosition",
       "y": "0.32"
      },
      "duration": 5000,
      "class": "MovementPhotoCamera"
     },
     "media": {
      "thumbnailUrl": "media/photo_2536E7CB_3D54_F667_41C8_0C74E4EA5879_t.jpg",
      "duration": 5000,
      "label": "DJI_0441",
      "width": 4900,
      "id": "photo_2536E7CB_3D54_F667_41C8_0C74E4EA5879",
      "height": 3264,
      "image": {
       "levels": [
        {
         "url": "media/photo_2536E7CB_3D54_F667_41C8_0C74E4EA5879.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "class": "Photo"
     },
     "class": "PhotoPlayListItem"
    }
   ]
  },
  "label": "Photo Album",
  "id": "album_1AE8DEB7_0EE7_8CC7_4198_F5B75788CCF6"
 },
 "this.photo_25EB8F3B_3D54_3627_41C1_FA6C2C76D85C",
 "this.photo_2537233E_3D54_0E20_41B8_95E46BC1EC07",
 "this.photo_25363697_3D54_16EF_41C7_78CA5BF042D8",
 "this.photo_2536FA03_3D54_19E7_41C9_9A86E77D5C4C",
 "this.photo_25365DAF_3D54_1A3F_41C9_6122F3F568B7",
 "this.photo_2536E107_3D54_0BE0_41C7_237D79278EAE",
 "this.photo_25361460_3D54_0A21_41C5_9CEF516D0083",
 "this.photo_2536E7CB_3D54_F667_41C8_0C74E4EA5879",
 {
  "id": "playList_64A49B5F_77B3_9FA8_41B1_2DC162E8619A",
  "class": "PlayList",
  "items": [
   {
    "player": "this.ViewerAreaLabeled_9FD7235A_96CD_9045_41D9_23A3BCBDB1C6PhotoAlbumPlayer",
    "media": "this.album_1AE8DEB7_0EE7_8CC7_4198_F5B75788CCF6",
    "class": "PhotoAlbumPlayListItem",
    "begin": "this.loopAlbum(this.playList_64A49B5F_77B3_9FA8_41B1_2DC162E8619A, 0)"
   }
  ]
 },
 "this.map_4E02A832_427B_EE04_41CC_8E1CEC03E8D3",
 {
  "id": "playList_6498BB66_77B3_9F98_41D1_CE1FDCB85580",
  "class": "PlayList",
  "items": [
   {
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_4E02A832_427B_EE04_41CC_8E1CEC03E8D3",
    "class": "MapPlayListItem",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')"
   }
  ]
 },
 {
  "easing": "linear",
  "id": "effect_CACBF85D_EED0_7261_41DB_A3B65ECE0D5D",
  "duration": 200,
  "class": "FadeInEffect"
 },
 {
  "easing": "linear",
  "id": "effect_CACBC85D_EED0_7261_41BE_8CF4C3A8170C",
  "duration": 200,
  "class": "FadeOutEffect"
 },
 {
  "easing": "linear",
  "id": "effect_CDD059FA_EED0_D223_41DB_70ACFBE986FE",
  "duration": 200,
  "class": "FadeInEffect"
 },
 {
  "easing": "linear",
  "id": "effect_CDD049FB_EED0_D221_41EB_CA2134B978E0",
  "duration": 200,
  "class": "FadeOutEffect"
 },
 {
  "easing": "linear",
  "id": "effect_32C91197_3F22_3110_4181_9E76B593FBFE",
  "duration": 400,
  "class": "FadeInEffect"
 },
 {
  "easing": "linear",
  "id": "effect_32C92197_3F22_3110_419D_E2E21968F16F",
  "duration": 400,
  "class": "FadeOutEffect"
 },
 {
  "easing": "linear",
  "id": "effect_9B0AF4E2_96C4_F045_41D3_0E00FEE03A15",
  "duration": 200,
  "class": "FadeOutEffect"
 },
 {
  "easing": "linear",
  "id": "effect_500E3733_4297_3267_41C9_4935C0BEBF39",
  "duration": 300,
  "class": "FadeOutEffect"
 },
 {
  "levels": [
   {
    "height": 624,
    "width": 959,
    "url": "media/zoomImage_8E47938C_96CD_F0DD_41E1_7A3E325FC5AB_0_0.png",
    "class": "ImageResourceLevel"
   },
   {
    "height": 333,
    "width": 512,
    "url": "media/zoomImage_8E47938C_96CD_F0DD_41E1_7A3E325FC5AB_0_1.png",
    "class": "ImageResourceLevel"
   }
  ],
  "id": "ImageResource_6ECEF4DB_6091_DDD1_41D4_2B884570086A",
  "class": "ImageResource"
 },
 {
  "easing": "cubic_in",
  "id": "FadeInEffect_8ED05F70_96C4_F045_41DC_2AB82A556F92",
  "duration": 500,
  "class": "FadeInEffect"
 },
 {
  "easing": "cubic_out",
  "id": "FadeOutEffect_8ED06F70_96C4_F045_41DA_C74400CF7B15",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 {
  "easing": "linear",
  "id": "effect_518C2CD2_77ED_D97B_41C3_3AC87D499717",
  "duration": 300,
  "class": "FadeOutEffect"
 },
 {
  "easing": "linear",
  "id": "effect_508929C3_77ED_DB59_41D8_05A6C8F0681B",
  "duration": 400,
  "class": "SlideInEffect",
  "from": "bottom"
 },
 {
  "easing": "linear",
  "to": "bottom",
  "id": "effect_5032FA51_77E2_5979_41D1_45E5EF039077",
  "duration": 400,
  "class": "SlideOutEffect"
 },
 {
  "easing": "linear",
  "id": "effect_640860A9_76E7_E929_4192_305B50E5610A",
  "duration": 300,
  "class": "FadeInEffect"
 },
 {
  "easing": "linear",
  "id": "effect_98AADBB0_96C5_F0C5_41B2_1C4D08E503DB",
  "duration": 200,
  "class": "FadeInEffect"
 },
 {
  "easing": "linear",
  "id": "effect_51CB7B74_4299_12E2_41B4_829087983DE5",
  "duration": 300,
  "class": "FadeInEffect"
 },
 {
  "id": "camera_64E82B8A_77B3_9EAB_41DA_975D0465A26B",
  "initialPosition": {
   "yaw": 7.78,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_64E34B94_77B3_9EBF_41D6_E1DB3166F720",
  "initialPosition": {
   "yaw": -67.68,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_64D4DB9E_77B3_9EAB_41B5_2F1302ECA847",
  "initialPosition": {
   "yaw": 5.66,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": -323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_64CEDBA9_77B3_9EE9_41C8_BC133339DC18",
  "initialPosition": {
   "yaw": 8.04,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": -323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_64C1CBB4_77B3_9EFF_41CE_3434C56C0387",
  "initialPosition": {
   "hfov": 120,
   "yaw": 8.65,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_643B9BBE_77B3_9EEB_41CC_A609B43AB62C",
  "initialPosition": {
   "yaw": -18.22,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": -323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_64329BC8_77B3_9E97_41CA_1DFA3FEE5ACE",
  "initialPosition": {
   "yaw": -69.86,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_64245BD2_77B3_9EBB_41DB_1B26BB5C51B9",
  "initialPosition": {
   "yaw": 9.32,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": -323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_641F6BDC_77B3_9EAF_41C3_E233763BBD68",
  "initialPosition": {
   "yaw": 6.88,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_64111BE5_77B3_9E99_41CB_6C916B9588C4",
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": -323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_640A8BEF_77B3_9E69_41D8_809C4BCCCD5F",
  "initialPosition": {
   "yaw": 7.79,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_647DFBF9_77B3_9E69_41B7_5B2254C2AB5B",
  "initialPosition": {
   "yaw": 9.42,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": -323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_6476AC03_77B3_9999_41A0_255733AB6643",
  "initialPosition": {
   "yaw": 3.37,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": -323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_646B9C0C_77B3_99AF_41D4_DB4E21C5DEAE",
  "initialPosition": {
   "hfov": 120,
   "yaw": 8.65,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_6459FC17_77B3_99B9_41AD_3E28FFD4F2BA",
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": -323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_644CFC22_77B3_999B_4145_8FA8AAB2B7E8",
  "initialPosition": {
   "yaw": 9.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_66857C57_77B3_99B9_41D0_32FBB175B28F",
  "initialPosition": {
   "yaw": 163.2,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": -323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_66802C61_77B3_9999_41B0_1B2885C802EC",
  "initialPosition": {
   "yaw": 6.88,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_66FFFC6C_77B3_9A6F_41AB_7C3EDE96FD8A",
  "initialPosition": {
   "yaw": -145.18,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": -323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_66F5DC76_77B3_9A7B_41DC_E400750611AC",
  "initialPosition": {
   "yaw": 7.78,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_66F02C81_77B3_9A99_419D_93248ED41547",
  "initialPosition": {
   "yaw": 9.42,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": -323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_66EF8C8D_77B3_9AA9_41DC_8BBB2A8CFE57",
  "initialPosition": {
   "yaw": 8.04,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": -323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_66E59C99_77B3_9AA9_41C8_16B3ABCA2B3B",
  "initialPosition": {
   "hfov": 120,
   "yaw": 8.65,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_66E10CA3_77B3_9A99_41CE_BE09D1671D3B",
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": -323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_66DF1CAD_77B3_9AE9_41C7_6C565E66CFC2",
  "initialPosition": {
   "yaw": 9.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_66D52CB7_77B3_9AF9_41DC_E2A92403F2FD",
  "initialPosition": {
   "yaw": 9.32,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": -323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_66D0FCC1_77B3_9A98_41D4_54BF4D686702",
  "initialPosition": {
   "yaw": -161.21,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_66CE9CCB_77B3_9AA9_41DC_BE4CA14B3B36",
  "initialPosition": {
   "yaw": 1.82,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": -323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_66CA1CD5_77B3_9AB9_41CB_3BF061CD173E",
  "initialPosition": {
   "yaw": 7.78,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_66C36CDF_77B3_9AA8_41D5_93E464A4D399",
  "initialPosition": {
   "yaw": 7.79,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_6639FCF2_77B3_9A7B_41DB_AFFC696E9DD7",
  "initialPosition": {
   "yaw": 8.04,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": -323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_66311D05_77B3_9B99_41BF_CEE7B3F6252F",
  "initialPosition": {
   "hfov": 120,
   "yaw": 8.65,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_662A7D0F_77B3_9BA9_41D6_AC69DF526F8F",
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": -323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_661D1D19_77B3_9BA9_41CE_1C2497201153",
  "initialPosition": {
   "yaw": 9.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_66167D23_77B3_9B99_41AA_B5DA873EC59A",
  "initialPosition": {
   "yaw": 9.32,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": -323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_6608CD2D_77B3_9BE9_41C2_389318EF1A6D",
  "initialPosition": {
   "yaw": 6.88,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_667DCD37_77B3_9BF9_41A5_2508900F2BAE",
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": -323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_6674BD41_77B3_9B99_41C5_167FE7452A15",
  "initialPosition": {
   "yaw": -167.94,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_66684D4B_77B3_9BA9_41B8_C0D3F39E1DBB",
  "initialPosition": {
   "yaw": 7.79,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_665FED54_77B3_9BBF_41D1_7944C1C8DFB3",
  "initialPosition": {
   "yaw": 9.42,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": -323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_66509D5F_77B3_9BA9_41B0_F2B6F3603349",
  "initialPosition": {
   "hfov": 120,
   "yaw": 8.65,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_66472D6A_77B3_9A6B_41D5_C8C7C50E2310",
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": -323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_65BAFD74_77B3_9A7F_41B4_16EC63908A02",
  "initialPosition": {
   "yaw": -69.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_65A95D7E_77B3_9A6B_41BE_6C2916A57372",
  "initialPosition": {
   "yaw": 9.32,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": -323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_659CDD89_77B3_9AA9_41BA_C46A67D659A3",
  "initialPosition": {
   "yaw": 6.88,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_65937D93_77B3_9AB9_41C3_8E0744B5DF7B",
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": -323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_6581AD9B_77B3_9AA8_41BE_2937B7FC9756",
  "initialPosition": {
   "yaw": 7.78,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_65F55DA6_77B3_9A98_41C7_ED9030ACD2C3",
  "initialPosition": {
   "yaw": 7.79,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_65EBFDB0_77B3_9AF8_41D3_72B46F0780CB",
  "initialPosition": {
   "yaw": 9.42,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": -323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_65DECDBA_77B3_9AE8_41C5_37164F1E5BFA",
  "initialPosition": {
   "yaw": 8.04,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": -323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_65CC8DC4_77B3_9A98_419C_A3CF4F4A700C",
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": -323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_65C27DCD_77B3_9AAB_41D5_890B0CF68C38",
  "initialPosition": {
   "yaw": 9.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_6531BDD7_77B3_9AB9_41DD_ABA69A69B329",
  "initialPosition": {
   "yaw": -179.07,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": -323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_65270DE1_77B3_9A99_419F_ADDA28637C41",
  "initialPosition": {
   "yaw": 6.88,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_651A5DEB_77B3_9A69_41D2_EEA37E4513FC",
  "initialPosition": {
   "yaw": -97.1,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": -323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_65083DF5_77B3_9A79_41DB_7E8BE1406A29",
  "initialPosition": {
   "yaw": 7.78,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_657F2E00_77B3_9997_41CD_8D31A66D814A",
  "initialPosition": {
   "yaw": 7.79,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_656CAE09_77B3_99A9_41DB_AD5E1443CDF9",
  "initialPosition": {
   "yaw": 9.42,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": -323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_65620E13_77B3_99B9_41DB_A1A521B9DEF9",
  "initialPosition": {
   "yaw": 8.04,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": -323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_65514E27_77B3_9999_41C4_EFB336030D14",
  "initialPosition": {
   "hfov": 120,
   "yaw": 8.65,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_65473E3B_77B3_99E9_41D0_2479C0103AFF",
  "initialPosition": {
   "yaw": 9.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_64BA0E4B_77B3_99A9_41D2_91345552B11E",
  "initialPosition": {
   "yaw": 9.32,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": -323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_64A83E5F_77B3_99A9_41D8_3BC19DF4C8D2",
  "initialPosition": {
   "yaw": 6.88,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_649EDE6F_77B3_9664_41D2_E537990A04E5",
  "initialPosition": {
   "yaw": -145.27,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": -323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_648C6E83_77B3_9699_41AE_C0ADADE94783",
  "initialPosition": {
   "yaw": 7.78,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_64827E98_77B3_96B7_41B3_60BC41FC181A",
  "initialPosition": {
   "yaw": 7.79,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_64F10EA7_77B3_9699_41A4_D1CD313818F5",
  "initialPosition": {
   "yaw": 9.42,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": -323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_64E71EBC_77B3_96EF_41D3_AE8E19A5D7CC",
  "initialPosition": {
   "yaw": -137.84,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": -323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_64DA7EC8_77B3_9697_41D2_46983EE9BC26",
  "initialPosition": {
   "hfov": 120,
   "yaw": 8.65,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_64C83ED2_77B3_96BB_41D6_6C046CCDA7C1",
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": -323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_643EDEDB_77B3_96A9_41B1_C7548CF79416",
  "initialPosition": {
   "yaw": 9.32,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": -323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_642C8EE5_77B3_9699_41C5_01E9355B6B68",
  "initialPosition": {
   "yaw": 6.88,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_64221EEF_77B3_9669_41D1_08B217D6C8AB",
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": -323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_64117EF9_77B3_9669_41D7_CAAD24A3DD8E",
  "initialPosition": {
   "yaw": 82.78,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_6406CF02_77B3_979B_41D7_3DC596E6FB24",
  "initialPosition": {
   "yaw": 7.79,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_6475CF0C_77B3_97AF_41BC_0AE465E898E8",
  "initialPosition": {
   "yaw": 9.42,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": -323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_646BBF16_77B3_97BB_41D6_935A16A4DCDE",
  "initialPosition": {
   "yaw": 8.04,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": -323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_645E8F1F_77B3_97A8_41CD_8CB1EE330B64",
  "initialPosition": {
   "hfov": 120,
   "yaw": -39.51,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_644CBF29_77B3_97E8_41D5_00B0327AE517",
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": -323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_63BDEF33_77B3_97F9_41D1_82A58CE1CF5C",
  "initialPosition": {
   "yaw": 9.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_63B0EF3D_77B3_97E9_41AB_120527CA7061",
  "initialPosition": {
   "yaw": 6.88,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_63A60F47_77B3_9799_4180_5ACFFEC9ABAE",
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": -323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_63950F51_77B3_97B9_41B7_61942959BDE5",
  "initialPosition": {
   "yaw": 7.78,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_638A6F5B_77B3_97A9_41CC_1FFBE1D0AE35",
  "initialPosition": {
   "yaw": -67.62,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_63F83F64_77B3_979F_41DB_88DBDAE8DD89",
  "initialPosition": {
   "yaw": 9.42,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": -323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_63EEFF6E_77B3_966B_41C5_D59C160F7F5A",
  "initialPosition": {
   "yaw": 8.04,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": -323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_63DC6F79_77B3_9669_41D4_94ACEAB7F08E",
  "initialPosition": {
   "hfov": 120,
   "yaw": 8.65,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_63D36F83_77B3_9699_41D1_ABBE807237BB",
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": -323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_63C0DF8D_77B3_96A9_41D9_8E9F32A21240",
  "initialPosition": {
   "yaw": 9.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_66DD1FD1_77B3_96B9_41A4_69AE4905514F",
  "initialPosition": {
   "yaw": 9.32,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": -323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_22974FB2_2DD9_0421_41BA_84205292D043",
  "duration": 1000,
  "class": "FadeOutEffect"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_22977FB2_2DD9_0421_41C1_F53B037346DF",
  "duration": 1000,
  "class": "FadeInEffect"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_22899FB3_2DD9_0427_41BB_298AEB3D2851",
  "duration": 1000,
  "class": "FadeOutEffect"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_66DFCFD4_77B3_96BF_41D4_7ABEB5013E9B",
  "duration": 1000,
  "class": "FadeInEffect"
 },
 "this.effect_22899FB3_2DD9_0427_41BB_298AEB3D2851",
 {
  "easing": "cubic_in_out",
  "id": "effect_2289DFB3_2DD9_0427_41AE_A35795880BA7",
  "duration": 1000,
  "class": "FadeInEffect"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_2289EFB3_2DD9_0427_41C0_ACB5A72AE218",
  "duration": 1000,
  "class": "FadeOutEffect"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_3876CD6E_2DF9_0421_41C1_F0AB7F279824",
  "duration": 1000,
  "class": "FadeOutEffect"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_66DFDFD4_77B3_96BF_41D8_927CAFA0FAB1",
  "duration": 1000,
  "class": "FadeInEffect"
 },
 "this.effect_3876CD6E_2DF9_0421_41C1_F0AB7F279824",
 {
  "easing": "cubic_in_out",
  "id": "effect_22973FB1_2DD9_0423_41C1_E1E03953DCCE",
  "duration": 1000,
  "class": "FadeOutEffect"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_22975FB2_2DD9_0421_41B4_7A2443082F44",
  "duration": 1000,
  "class": "FadeInEffect"
 },
 {
  "maximumAngle": 231.16,
  "autoplay": true,
  "id": "audio_A83B2F1A_B250_204B_41B2_61A870B2B428",
  "loop": true,
  "audio": {
   "id": "audioresource_1D15163A_0EEB_BFC9_419F_EF5F7074EFB1",
   "mp3Url": "media/audio_A83B2F1A_B250_204B_41B2_61A870B2B428.mp3",
   "oggUrl": "media/audio_A83B2F1A_B250_204B_41B2_61A870B2B428.ogg",
   "class": "AudioResource"
  },
  "yaw": -17.74,
  "class": "DirectionalPanoramaAudio",
  "pitch": -7.7
 },
 {
  "maximumAngle": 97.14,
  "autoplay": true,
  "id": "audio_A875C8FE_B250_61CA_41D2_1BDD70C9887A",
  "loop": true,
  "audio": {
   "id": "audioresource_A84F2D34_B270_605F_41E2_4CF67AB762D2",
   "mp3Url": "media/audio_A875C8FE_B250_61CA_41D2_1BDD70C9887A.mp3",
   "oggUrl": "media/audio_A875C8FE_B250_61CA_41D2_1BDD70C9887A.ogg",
   "class": "AudioResource"
  },
  "yaw": 4.55,
  "class": "DirectionalPanoramaAudio",
  "pitch": -18.69
 },
 {
  "maximumAngle": 61.89,
  "autoplay": true,
  "id": "audio_A87513BA_B273_E04A_41AA_0102CD2EF1BE",
  "loop": true,
  "audio": {
   "id": "audioresource_A83107F8_B270_2FD6_41E2_DAE1F661A577",
   "mp3Url": "media/audio_A87513BA_B273_E04A_41AA_0102CD2EF1BE.mp3",
   "oggUrl": "media/audio_A87513BA_B273_E04A_41AA_0102CD2EF1BE.ogg",
   "class": "AudioResource"
  },
  "yaw": -10.86,
  "class": "DirectionalPanoramaAudio",
  "pitch": -0.76
 },
 {
  "autoplay": true,
  "id": "audio_A83165F4_B270_23DF_41DC_E385B4E6556E",
  "audio": "this.audioresource_A83107F8_B270_2FD6_41E2_DAE1F661A577",
  "class": "PanoramaAudio"
 },
 {
  "maximumAngle": 222.06,
  "autoplay": true,
  "id": "audio_A8213A22_B270_E07A_41D5_F14349BD0E04",
  "loop": true,
  "audio": "this.audioresource_A83107F8_B270_2FD6_41E2_DAE1F661A577",
  "yaw": 0,
  "class": "DirectionalPanoramaAudio",
  "pitch": 0
 },
 {
  "maximumAngle": 265.52,
  "autoplay": true,
  "id": "audio_A8284F56_B270_60DB_41E0_27608EB2E0B9",
  "loop": true,
  "audio": "this.audioresource_A83107F8_B270_2FD6_41E2_DAE1F661A577",
  "yaw": -40.93,
  "class": "DirectionalPanoramaAudio",
  "pitch": 0.51
 },
 {
  "thumbnailUrl": "media/photo_1D911E4D_0EFC_8C4B_4180_DC7B2E0CE38C_t.jpg",
  "duration": 5000,
  "label": "7. Ben xe mien Dong moi",
  "width": 8192,
  "id": "photo_1D911E4D_0EFC_8C4B_4180_DC7B2E0CE38C",
  "height": 4096,
  "image": {
   "levels": [
    {
     "url": "media/photo_1D911E4D_0EFC_8C4B_4180_DC7B2E0CE38C.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "class": "Photo"
 },
 {
  "maximumAngle": 360,
  "autoplay": true,
  "id": "audio_1D15363A_0EEB_BFC9_4193_928F3B1A384C",
  "loop": true,
  "audio": "this.audioresource_1D15163A_0EEB_BFC9_419F_EF5F7074EFB1",
  "yaw": 0,
  "class": "DirectionalPanoramaAudio",
  "pitch": 0
 }
], "children": [
 {
  "paddingRight": 0,
  "toolTipShadowOpacity": 1,
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "progressBarOpacity": 1,
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarHeight": 10,
  "playbackBarHeadWidth": 6,
  "playbackBarProgressBorderSize": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarRight": 0,
  "playbackBarHeadShadow": true,
  "shadow": false,
  "toolTipShadowVerticalLength": 0,
  "toolTipPaddingBottom": 4,
  "progressBackgroundOpacity": 1,
  "progressBarBorderSize": 0,
  "progressBarBorderRadius": 0,
  "progressBorderRadius": 0,
  "toolTipFontWeight": "normal",
  "paddingBottom": 0,
  "toolTipFontSize": 12,
  "playbackBarProgressBorderRadius": 0,
  "toolTipShadowColor": "#333333",
  "toolTipShadowBlurRadius": 3,
  "toolTipShadowSpread": 0,
  "toolTipTextShadowOpacity": 0,
  "progressBottom": 0,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "progressHeight": 10,
  "transitionMode": "blending",
  "paddingTop": 0,
  "toolTipFontColor": "#606060",
  "playbackBarBorderRadius": 0,
  "playbackBarProgressBorderColor": "#000000",
  "minHeight": 50,
  "toolTipPaddingRight": 6,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "toolTipBorderRadius": 3,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "progressLeft": 0,
  "progressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadBorderRadius": 0,
  "playbackBarBorderColor": "#FFFFFF",
  "paddingLeft": 0,
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarProgressOpacity": 1,
  "toolTipBorderSize": 1,
  "toolTipBorderColor": "#767676",
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipTextShadowColor": "#000000",
  "toolTipPaddingLeft": 6,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarBackgroundOpacity": 1,
  "playbackBarBorderSize": 0,
  "borderSize": 0,
  "toolTipBackgroundColor": "#000000",
  "playbackBarLeft": 0,
  "playbackBarHeadHeight": 15,
  "borderRadius": 0,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipTextShadowBlurRadius": 3,
  "toolTipOpacity": 0.7,
  "playbackBarOpacity": 1,
  "playbackBarHeadShadowColor": "#000000",
  "progressRight": 0,
  "playbackBarHeadBorderSize": 0,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "top": "0%",
  "progressBarBorderColor": "#000000",
  "playbackBarHeadOpacity": 1,
  "progressOpacity": 1,
  "progressBackgroundColorDirection": "vertical",
  "minWidth": 100,
  "id": "MainViewer",
  "toolTipShadowHorizontalLength": 0,
  "bottom": "0%",
  "progressBorderColor": "#000000",
  "class": "ViewerArea",
  "playbackBarBottom": 5,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "progressBarBackgroundColorDirection": "vertical",
  "toolTipFontFamily": "Arial",
  "left": "0%",
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "progressBorderSize": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipPaddingTop": 4,
  "toolTipFontStyle": "normal",
  "right": "0%"
 },
 {
  "verticalAlign": "middle",
  "paddingRight": 0,
  "width": 500,
  "paddingLeft": 0,
  "height": 50,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "borderSize": 0,
  "layout": "horizontal",
  "borderRadius": 5,
  "horizontalAlign": "right",
  "overflow": "visible",
  "gap": 5,
  "shadow": false,
  "top": "3%",
  "maxHeight": 55,
  "contentOpaque": false,
  "paddingBottom": 0,
  "minWidth": 500,
  "id": "Container_807F782A_8E23_A905_41DE_623121285A09",
  "scrollBarColor": "#000000",
  "backgroundOpacity": 0,
  "class": "Container",
  "paddingTop": 0,
  "scrollBarVisible": "rollOver",
  "maxWidth": 500,
  "scrollBarOpacity": 0.5,
  "minHeight": 55,
  "right": "1.5%",
  "children": [
   {
    "verticalAlign": "middle",
    "paddingRight": 0,
    "width": 400,
    "paddingLeft": 0,
    "height": 55,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "borderSize": 0,
    "layout": "horizontal",
    "borderRadius": 0,
    "horizontalAlign": "right",
    "overflow": "visible",
    "gap": 0,
    "shadow": false,
    "maxHeight": 55,
    "contentOpaque": false,
    "visible": false,
    "paddingBottom": 0,
    "minWidth": 100,
    "id": "Container_80D3CF90_8E26_E705_41E0_E47025A2C106",
    "scrollBarColor": "#000000",
    "backgroundOpacity": 0,
    "paddingTop": 0,
    "class": "Container",
    "scrollBarVisible": "rollOver",
    "scrollBarOpacity": 0.5,
    "minHeight": 55,
    "children": [
     "this.IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37",
     {
      "toolTipBorderRadius": 3,
      "paddingRight": 0,
      "toolTipShadowOpacity": 1,
      "verticalAlign": "middle",
      "mode": "toggle",
      "paddingLeft": 0,
      "width": "100%",
      "toolTipBorderSize": 1,
      "toolTip": "Full Screen",
      "transparencyActive": true,
      "toolTipTextShadowColor": "#000000",
      "toolTipPaddingLeft": 6,
      "toolTipBorderColor": "#767676",
      "pressedIconURL": "skin/IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA_pressed.png",
      "borderSize": 0,
      "toolTipBackgroundColor": "#000000",
      "borderRadius": 0,
      "horizontalAlign": "center",
      "height": "100%",
      "toolTipShadowVerticalLength": 0,
      "click": "if(!this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, true, 0, null, null, false) } else if(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, false, 0, null, null, false) }",
      "toolTipTextShadowBlurRadius": 3,
      "toolTipOpacity": 0.7,
      "toolTipPaddingBottom": 4,
      "shadow": false,
      "maxHeight": 60,
      "paddingBottom": 0,
      "toolTipFontSize": 12,
      "toolTipShadowHorizontalLength": 0,
      "cursor": "hand",
      "toolTipShadowColor": "#333333",
      "minWidth": 1,
      "toolTipFontWeight": "normal",
      "id": "IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA",
      "toolTipShadowSpread": 0,
      "toolTipTextShadowOpacity": 0,
      "backgroundOpacity": 0,
      "toolTipShadowBlurRadius": 3,
      "toolTipFontColor": "#606060",
      "class": "IconButton",
      "paddingTop": 0,
      "iconURL": "skin/IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA.png",
      "toolTipFontFamily": "Arial",
      "maxWidth": 60,
      "toolTipPaddingTop": 4,
      "minHeight": 1,
      "toolTipPaddingRight": 6,
      "toolTipFontStyle": "normal"
     },
     {
      "toolTipBorderRadius": 3,
      "paddingRight": 0,
      "toolTipShadowOpacity": 1,
      "verticalAlign": "middle",
      "mode": "toggle",
      "paddingLeft": 0,
      "width": "100%",
      "toolTipBorderSize": 1,
      "toolTip": "Audio On/Off",
      "transparencyActive": true,
      "toolTipTextShadowColor": "#000000",
      "toolTipPaddingLeft": 6,
      "toolTipBorderColor": "#767676",
      "pressedIconURL": "skin/IconButton_8105A313_8E22_BF0B_41E1_331C6035A930_pressed.png",
      "borderSize": 0,
      "toolTipBackgroundColor": "#000000",
      "borderRadius": 0,
      "horizontalAlign": "center",
      "height": "100%",
      "toolTipShadowVerticalLength": 0,
      "click": "if(!this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, true, 0, this.effect_CACBF85D_EED0_7261_41DB_A3B65ECE0D5D, 'showEffect', false) } else if(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, false, 0, this.effect_CACBC85D_EED0_7261_41BE_8CF4C3A8170C, 'hideEffect', false) }",
      "toolTipTextShadowBlurRadius": 3,
      "toolTipOpacity": 0.7,
      "toolTipPaddingBottom": 4,
      "shadow": false,
      "maxHeight": 60,
      "paddingBottom": 0,
      "toolTipFontSize": 12,
      "toolTipShadowHorizontalLength": 0,
      "cursor": "hand",
      "toolTipShadowColor": "#333333",
      "minWidth": 1,
      "toolTipFontWeight": "normal",
      "id": "IconButton_8105A313_8E22_BF0B_41E1_331C6035A930",
      "toolTipShadowSpread": 0,
      "toolTipTextShadowOpacity": 0,
      "backgroundOpacity": 0,
      "toolTipShadowBlurRadius": 3,
      "toolTipFontColor": "#606060",
      "class": "IconButton",
      "paddingTop": 0,
      "iconURL": "skin/IconButton_8105A313_8E22_BF0B_41E1_331C6035A930.png",
      "toolTipFontFamily": "Arial",
      "maxWidth": 60,
      "toolTipPaddingTop": 4,
      "minHeight": 1,
      "toolTipPaddingRight": 6,
      "toolTipFontStyle": "normal"
     },
     "this.IconButton_80E5955A_8E23_BB05_41CA_43DD61DBAEE9"
    ]
   },
   {
    "toolTipBorderRadius": 3,
    "paddingRight": 0,
    "toolTipShadowOpacity": 1,
    "verticalAlign": "middle",
    "mode": "toggle",
    "paddingLeft": 0,
    "width": "100%",
    "toolTipBorderSize": 1,
    "toolTip": "Settings",
    "transparencyActive": true,
    "toolTipTextShadowColor": "#000000",
    "toolTipPaddingLeft": 6,
    "toolTipBorderColor": "#767676",
    "borderSize": 0,
    "toolTipBackgroundColor": "#000000",
    "borderRadius": 0,
    "horizontalAlign": "center",
    "height": "100%",
    "toolTipShadowVerticalLength": 0,
    "click": "if(!this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, true, 0, this.effect_32C91197_3F22_3110_4181_9E76B593FBFE, 'showEffect', false) } else if(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, false, 0, this.effect_32C92197_3F22_3110_419D_E2E21968F16F, 'hideEffect', false) }",
    "toolTipTextShadowBlurRadius": 3,
    "toolTipOpacity": 0.7,
    "toolTipPaddingBottom": 4,
    "shadow": false,
    "maxHeight": 55,
    "paddingBottom": 0,
    "toolTipFontSize": 12,
    "toolTipShadowHorizontalLength": 0,
    "cursor": "hand",
    "toolTipShadowColor": "#333333",
    "minWidth": 55,
    "toolTipFontWeight": "normal",
    "id": "IconButton_811D89E1_8E3D_AB07_4191_94003C90B2FF",
    "toolTipShadowSpread": 0,
    "toolTipTextShadowOpacity": 0,
    "backgroundOpacity": 0,
    "toolTipShadowBlurRadius": 3,
    "toolTipFontColor": "#606060",
    "class": "IconButton",
    "paddingTop": 0,
    "iconURL": "skin/IconButton_811D89E1_8E3D_AB07_4191_94003C90B2FF.png",
    "toolTipFontFamily": "Arial",
    "maxWidth": 55,
    "toolTipPaddingTop": 4,
    "minHeight": 55,
    "toolTipPaddingRight": 6,
    "toolTipFontStyle": "normal"
   }
  ]
 },
 {
  "paddingRight": 0,
  "verticalAlign": "top",
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "paddingLeft": 0,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "borderSize": 0,
  "width": "100%",
  "borderRadius": 0,
  "horizontalAlign": "left",
  "height": "100%",
  "overflow": "scroll",
  "gap": 10,
  "shadow": false,
  "top": "0%",
  "backgroundColorDirection": "vertical",
  "contentOpaque": false,
  "visible": false,
  "paddingBottom": 0,
  "backgroundColorRatios": [
   0,
   1
  ],
  "minWidth": 1,
  "id": "Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB",
  "scrollBarColor": "#000000",
  "backgroundOpacity": 0.7,
  "class": "Container",
  "paddingTop": 0,
  "scrollBarVisible": "rollOver",
  "left": "0%",
  "layout": "absolute",
  "scrollBarOpacity": 0.5,
  "minHeight": 1,
  "children": [
   "this.ViewerAreaLabeled_9FD7235A_96CD_9045_41D9_23A3BCBDB1C6",
   "this.IconButton_9FEA51EA_96CC_905A_41D3_F42DB0CD0A74",
   "this.IconButton_9FB9BD3F_96C5_703B_41D7_65AEE6E85A96",
   "this.IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4"
  ]
 },
 {
  "paddingRight": 0,
  "verticalAlign": "middle",
  "mode": "push",
  "paddingLeft": 0,
  "width": "3.03%",
  "transparencyActive": true,
  "borderSize": 0,
  "borderRadius": 0,
  "horizontalAlign": "center",
  "height": "5.482%",
  "shadow": false,
  "top": "2%",
  "maxHeight": 50,
  "visible": false,
  "paddingBottom": 0,
  "cursor": "hand",
  "minWidth": 50,
  "id": "IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB",
  "backgroundOpacity": 0,
  "class": "IconButton",
  "paddingTop": 0,
  "iconURL": "skin/IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB.png",
  "maxWidth": 50,
  "minHeight": 50,
  "right": "2%",
  "rollOverIconURL": "skin/IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB_rollover.png"
 },
 {
  "verticalAlign": "top",
  "paddingRight": 0,
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "paddingLeft": 0,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "borderSize": 0,
  "layout": "absolute",
  "borderRadius": 0,
  "horizontalAlign": "left",
  "overflow": "scroll",
  "gap": 10,
  "shadow": false,
  "top": "0%",
  "backgroundColorDirection": "vertical",
  "contentOpaque": false,
  "visible": false,
  "paddingBottom": 0,
  "backgroundColorRatios": [
   0,
   1
  ],
  "minWidth": 1,
  "id": "Container_53347472_4288_F6E6_4196_D7457B47D2CF",
  "scrollBarColor": "#000000",
  "backgroundOpacity": 0.3,
  "bottom": "0%",
  "class": "Container",
  "paddingTop": 0,
  "scrollBarVisible": "rollOver",
  "left": "0%",
  "scrollBarOpacity": 0.5,
  "minHeight": 1,
  "right": "0%",
  "children": [
   "this.MapViewer",
   {
    "paddingRight": 0,
    "verticalAlign": "middle",
    "mode": "push",
    "paddingLeft": 0,
    "width": "5.07%",
    "transparencyActive": true,
    "borderSize": 0,
    "borderRadius": 0,
    "horizontalAlign": "center",
    "height": "5.91%",
    "click": "this.setComponentVisibility(this.Container_53347472_4288_F6E6_4196_D7457B47D2CF, false, 0, this.effect_500E3733_4297_3267_41C9_4935C0BEBF39, 'hideEffect', false)",
    "shadow": false,
    "top": "5%",
    "maxHeight": 50,
    "paddingBottom": 0,
    "cursor": "hand",
    "minWidth": 50,
    "id": "IconButton_50D1A26C_4289_72E1_41CD_2B557DFCC24F",
    "backgroundOpacity": 0,
    "class": "IconButton",
    "paddingTop": 0,
    "iconURL": "skin/IconButton_50D1A26C_4289_72E1_41CD_2B557DFCC24F.png",
    "maxWidth": 50,
    "minHeight": 50,
    "right": "5%",
    "rollOverIconURL": "skin/IconButton_50D1A26C_4289_72E1_41CD_2B557DFCC24F_rollover.png"
   }
  ]
 },
 {
  "verticalAlign": "bottom",
  "paddingRight": 0,
  "paddingLeft": 0,
  "height": 160,
  "layout": "vertical",
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "borderSize": 0,
  "borderRadius": 0,
  "horizontalAlign": "center",
  "overflow": "visible",
  "gap": 3,
  "shadow": false,
  "maxHeight": 160,
  "contentOpaque": false,
  "paddingBottom": 0,
  "minWidth": 1,
  "id": "Container_6EC9FEC0_76A2_F957_41C5_79AD4AF65B38",
  "scrollBarColor": "#000000",
  "backgroundOpacity": 0,
  "bottom": "0%",
  "class": "Container",
  "paddingTop": 0,
  "scrollBarVisible": "rollOver",
  "left": "20%",
  "scrollBarOpacity": 0.5,
  "minHeight": 130,
  "right": "20%",
  "children": [
   {
    "rollOverItemBackgroundColorDirection": "vertical",
    "paddingRight": 5,
    "rollOverItemThumbnailShadowBlurRadius": 15,
    "selectedItemBackgroundColor": [],
    "backgroundColor": [
     "#000000"
    ],
    "selectedItemThumbnailShadowHorizontalLength": 0,
    "scrollBarWidth": 5,
    "scrollBarMargin": 2,
    "gap": 5,
    "itemHorizontalAlign": "center",
    "selectedItemLabelFontStyle": "italic",
    "horizontalAlign": "left",
    "rollOverItemBackgroundColor": [
     "#000000"
    ],
    "shadow": false,
    "itemMode": "normal",
    "rollOverItemLabelFontColor": "#FFFFFF",
    "itemThumbnailScaleMode": "fit_outside",
    "rollOverItemLabelFontWeight": "bold",
    "itemLabelFontColor": "#FFFFFF",
    "backgroundColorDirection": "vertical",
    "maxHeight": 100,
    "paddingBottom": 5,
    "playList": "this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist",
    "scrollBarColor": "#52B7EF",
    "itemPaddingBottom": 3,
    "itemLabelFontWeight": "normal",
    "selectedItemThumbnailShadowVerticalLength": 0,
    "rollOverItemLabelTextDecoration": "underline",
    "paddingTop": 5,
    "itemThumbnailOpacity": 1,
    "itemThumbnailBorderRadius": 30,
    "selectedItemLabelTextDecoration": "underline",
    "selectedItemLabelFontColor": "#FFFFFF",
    "scrollBarVisible": "rollOver",
    "rollOverItemLabelFontStyle": "normal",
    "itemThumbnailShadow": false,
    "rollOverItemBackgroundColorRatios": [
     0
    ],
    "itemLabelTextDecoration": "none",
    "scrollBarOpacity": 1,
    "minHeight": 70,
    "itemLabelFontStyle": "normal",
    "itemPaddingRight": 3,
    "rollOverItemThumbnailShadowHorizontalLength": 0,
    "selectedItemThumbnailShadowBlurRadius": 15,
    "selectedItemThumbnailShadow": true,
    "selectedItemLabelFontSize": 11,
    "itemLabelHorizontalAlign": "center",
    "rollOverItemThumbnailShadowColor": "#FFFFFF",
    "width": 805,
    "itemThumbnailWidth": 60,
    "paddingLeft": 5,
    "height": 100,
    "selectedItemThumbnailShadowOpacity": 1,
    "itemBorderRadius": 0,
    "selectedItemBorderSize": 0,
    "borderSize": 0,
    "itemPaddingLeft": 3,
    "borderRadius": 3,
    "itemPaddingTop": 3,
    "itemVerticalAlign": "middle",
    "itemBackgroundOpacity": 0,
    "itemLabelGap": 5,
    "itemBackgroundColorDirection": "vertical",
    "selectedItemBorderRadius": 0,
    "rollOverItemBackgroundOpacity": 0,
    "selectedItemLabelFontWeight": "bold",
    "layout": "horizontal",
    "itemBackgroundColor": [],
    "selectedItemThumbnailShadowColor": "#FFFFFF",
    "rollOverItemThumbnailShadowOpacity": 1,
    "backgroundColorRatios": [
     0
    ],
    "minWidth": 50,
    "itemLabelFontSize": 11,
    "id": "ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472",
    "backgroundOpacity": 0.25,
    "selectedItemBackgroundColorRatios": [],
    "itemOpacity": 1,
    "class": "ThumbnailList",
    "rollOverItemThumbnailShadow": true,
    "itemLabelPosition": "bottom",
    "rollOverItemThumbnailShadowVerticalLength": 0,
    "maxWidth": 740,
    "itemBackgroundColorRatios": [],
    "selectedItemBackgroundOpacity": 0,
    "itemLabelFontFamily": "Arial",
    "itemThumbnailHeight": 60,
    "verticalAlign": "top"
   },
   {
    "verticalAlign": "middle",
    "paddingRight": 0,
    "width": 70,
    "paddingLeft": 0,
    "height": 55,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "borderSize": 0,
    "layout": "absolute",
    "borderRadius": 5,
    "horizontalAlign": "center",
    "overflow": "visible",
    "gap": 0,
    "shadow": false,
    "maxHeight": 55,
    "contentOpaque": false,
    "paddingBottom": 0,
    "minWidth": 70,
    "id": "Container_86F3A56C_8E22_5B1D_41CA_9CE53436FE56",
    "scrollBarColor": "#000000",
    "backgroundOpacity": 0,
    "class": "Container",
    "paddingTop": 0,
    "scrollBarVisible": "rollOver",
    "maxWidth": 70,
    "scrollBarOpacity": 0.5,
    "minHeight": 55,
    "children": [
     {
      "toolTipBorderRadius": 3,
      "paddingRight": 0,
      "toolTipShadowOpacity": 1,
      "verticalAlign": "middle",
      "mode": "push",
      "paddingLeft": 0,
      "width": "100%",
      "toolTipBorderSize": 1,
      "toolTip": "Info",
      "transparencyActive": true,
      "toolTipTextShadowColor": "#000000",
      "toolTipPaddingLeft": 6,
      "toolTipBorderColor": "#767676",
      "borderSize": 0,
      "toolTipBackgroundColor": "#000000",
      "borderRadius": 0,
      "horizontalAlign": "center",
      "height": "100%",
      "toolTipShadowVerticalLength": 0,
      "click": "this.showPopupImage(this.ImageResource_6ECEF4DB_6091_DDD1_41D4_2B884570086A, null, '85%', '85%', this.FadeInEffect_8ED05F70_96C4_F045_41DC_2AB82A556F92, this.FadeOutEffect_8ED06F70_96C4_F045_41DA_C74400CF7B15, {'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'rollOverBorderSize':0,'pressedBackgroundColorDirection':'vertical','borderColor':'#000000','backgroundColorDirection':'vertical','pressedIconColor':'#CCCCCC','backgroundColor':['#000000','#000000','#000000'],'paddingBottom':10,'backgroundColorRatios':[0,0.09803921568627451,1],'iconHeight':25,'iconColor':'#FFFFFF','pressedIconWidth':25,'pressedIconHeight':25,'paddingLeft':10,'backgroundOpacity':0.15,'rollOverBorderColor':'#000000','rollOverBackgroundOpacity':0.5,'rollOverIconHeight':25,'rollOverIconLineWidth':3,'iconWidth':25,'pressedBackgroundColor':['#000000','#000000','#000000'],'rollOverIconWidth':25,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':3,'pressedBorderSize':0,'rollOverIconColor':'#52B7EF','rollOverBackgroundColorDirection':'vertical','rollOverBackgroundColor':['#000000','#000000','#000000'],'iconLineWidth':3,'paddingTop':10,'borderSize':0,'paddingRight':10,'pressedBorderColor':'#000000'}, null, null, false)",
      "toolTipTextShadowBlurRadius": 3,
      "toolTipOpacity": 0.7,
      "toolTipPaddingBottom": 4,
      "shadow": false,
      "maxHeight": 70,
      "visible": false,
      "paddingBottom": 0,
      "toolTipFontSize": 12,
      "toolTipShadowHorizontalLength": 0,
      "cursor": "hand",
      "toolTipShadowColor": "#333333",
      "minWidth": 25,
      "toolTipFontWeight": "normal",
      "id": "IconButton_87577B8F_8E22_AF1B_41CC_79EB87AE6DED",
      "toolTipShadowSpread": 0,
      "toolTipTextShadowOpacity": 0,
      "backgroundOpacity": 0,
      "toolTipShadowBlurRadius": 3,
      "toolTipFontColor": "#606060",
      "class": "IconButton",
      "paddingTop": 0,
      "iconURL": "skin/IconButton_87577B8F_8E22_AF1B_41CC_79EB87AE6DED.png",
      "toolTipFontFamily": "Arial",
      "maxWidth": 70,
      "toolTipPaddingTop": 4,
      "minHeight": 25,
      "toolTipPaddingRight": 6,
      "toolTipFontStyle": "normal",
      "rollOverIconURL": "skin/IconButton_87577B8F_8E22_AF1B_41CC_79EB87AE6DED_rollover.png"
     },
     {
      "toolTipBorderRadius": 3,
      "paddingRight": 0,
      "toolTipShadowOpacity": 1,
      "verticalAlign": "middle",
      "mode": "push",
      "paddingLeft": 0,
      "width": "100%",
      "toolTipBorderSize": 1,
      "toolTip": "Play Video",
      "transparencyActive": true,
      "toolTipTextShadowColor": "#000000",
      "toolTipPaddingLeft": 6,
      "toolTipBorderColor": "#767676",
      "borderSize": 0,
      "toolTipBackgroundColor": "#000000",
      "borderRadius": 0,
      "horizontalAlign": "center",
      "height": "100%",
      "toolTipShadowVerticalLength": 0,
      "click": "this.setMediaBehaviour(this.playList_64A54B5F_77B3_9FA8_41D9_FDF178AEAB38, 0); this.MainViewerVideoPlayer.play()",
      "toolTipTextShadowBlurRadius": 3,
      "toolTipOpacity": 0.7,
      "toolTipPaddingBottom": 4,
      "shadow": false,
      "maxHeight": 70,
      "visible": false,
      "paddingBottom": 0,
      "toolTipFontSize": 12,
      "toolTipShadowHorizontalLength": 0,
      "cursor": "hand",
      "toolTipShadowColor": "#333333",
      "minWidth": 25,
      "toolTipFontWeight": "normal",
      "id": "IconButton_213ED70C_2DB2_E6C5_41B6_0CCE6C77E889",
      "toolTipShadowSpread": 0,
      "toolTipTextShadowOpacity": 0,
      "backgroundOpacity": 0,
      "toolTipShadowBlurRadius": 3,
      "toolTipFontColor": "#606060",
      "class": "IconButton",
      "paddingTop": 0,
      "iconURL": "skin/IconButton_213ED70C_2DB2_E6C5_41B6_0CCE6C77E889.png",
      "toolTipFontFamily": "Arial",
      "maxWidth": 70,
      "toolTipPaddingTop": 4,
      "minHeight": 25,
      "toolTipPaddingRight": 6,
      "toolTipFontStyle": "normal",
      "rollOverIconURL": "skin/IconButton_213ED70C_2DB2_E6C5_41B6_0CCE6C77E889_rollover.png"
     },
     {
      "toolTipBorderRadius": 3,
      "paddingRight": 0,
      "toolTipShadowOpacity": 1,
      "verticalAlign": "top",
      "mode": "push",
      "paddingLeft": 0,
      "width": "100%",
      "toolTipBorderSize": 1,
      "toolTip": "Show Panorama List",
      "transparencyActive": true,
      "toolTipTextShadowColor": "#000000",
      "toolTipPaddingLeft": 6,
      "toolTipBorderColor": "#767676",
      "borderSize": 0,
      "toolTipBackgroundColor": "#000000",
      "borderRadius": 0,
      "horizontalAlign": "center",
      "height": "100%",
      "toolTipShadowVerticalLength": 0,
      "click": "this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, true, 0, this.effect_508929C3_77ED_DB59_41D8_05A6C8F0681B, 'showEffect', false); this.setComponentVisibility(this.IconButton_843BBEF5_8E22_690F_419D_28CBDD771ACC, true, 0, this.effect_508929C3_77ED_DB59_41D8_05A6C8F0681B, 'showEffect', false); this.setComponentVisibility(this.IconButton_67A0F254_76E6_A97F_419D_52AF6E3FE7C0, false, 0, this.effect_518C2CD2_77ED_D97B_41C3_3AC87D499717, 'hideEffect', false)",
      "toolTipTextShadowBlurRadius": 3,
      "toolTipOpacity": 0.7,
      "toolTipPaddingBottom": 4,
      "shadow": false,
      "maxHeight": 55,
      "visible": false,
      "paddingBottom": 0,
      "toolTipFontSize": 12,
      "toolTipShadowHorizontalLength": 0,
      "cursor": "hand",
      "toolTipShadowColor": "#333333",
      "minWidth": 70,
      "toolTipFontWeight": "normal",
      "id": "IconButton_67A0F254_76E6_A97F_419D_52AF6E3FE7C0",
      "toolTipShadowSpread": 0,
      "toolTipTextShadowOpacity": 0,
      "backgroundOpacity": 0,
      "toolTipShadowBlurRadius": 3,
      "toolTipFontColor": "#606060",
      "class": "IconButton",
      "paddingTop": 0,
      "iconURL": "skin/IconButton_67A0F254_76E6_A97F_419D_52AF6E3FE7C0.png",
      "toolTipFontFamily": "Arial",
      "maxWidth": 70,
      "toolTipPaddingTop": 4,
      "minHeight": 55,
      "toolTipPaddingRight": 6,
      "toolTipFontStyle": "normal"
     },
     {
      "toolTipBorderRadius": 3,
      "paddingRight": 0,
      "toolTipShadowOpacity": 1,
      "verticalAlign": "top",
      "mode": "push",
      "paddingLeft": 0,
      "width": "100%",
      "toolTipBorderSize": 1,
      "toolTip": "Hide Panorama List",
      "transparencyActive": true,
      "toolTipTextShadowColor": "#000000",
      "toolTipPaddingLeft": 6,
      "toolTipBorderColor": "#767676",
      "borderSize": 0,
      "toolTipBackgroundColor": "#000000",
      "borderRadius": 0,
      "horizontalAlign": "center",
      "height": "100%",
      "toolTipShadowVerticalLength": 0,
      "click": "this.setComponentVisibility(this.IconButton_67A0F254_76E6_A97F_419D_52AF6E3FE7C0, true, 0, this.effect_640860A9_76E7_E929_4192_305B50E5610A, 'showEffect', false); this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, false, 0, this.effect_5032FA51_77E2_5979_41D1_45E5EF039077, 'hideEffect', false); this.setComponentVisibility(this.IconButton_843BBEF5_8E22_690F_419D_28CBDD771ACC, false, 0, this.effect_5032FA51_77E2_5979_41D1_45E5EF039077, 'hideEffect', false)",
      "toolTipTextShadowBlurRadius": 3,
      "toolTipOpacity": 0.7,
      "toolTipPaddingBottom": 4,
      "shadow": false,
      "maxHeight": 55,
      "paddingBottom": 0,
      "toolTipFontSize": 12,
      "toolTipShadowHorizontalLength": 0,
      "cursor": "hand",
      "toolTipShadowColor": "#333333",
      "minWidth": 70,
      "toolTipFontWeight": "normal",
      "id": "IconButton_843BBEF5_8E22_690F_419D_28CBDD771ACC",
      "toolTipShadowSpread": 0,
      "toolTipTextShadowOpacity": 0,
      "backgroundOpacity": 0,
      "toolTipShadowBlurRadius": 3,
      "toolTipFontColor": "#606060",
      "class": "IconButton",
      "paddingTop": 0,
      "iconURL": "skin/IconButton_843BBEF5_8E22_690F_419D_28CBDD771ACC.png",
      "toolTipFontFamily": "Arial",
      "maxWidth": 70,
      "toolTipPaddingTop": 4,
      "minHeight": 55,
      "toolTipPaddingRight": 6,
      "toolTipFontStyle": "normal"
     },
     "this.IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED",
     {
      "toolTipBorderRadius": 3,
      "paddingRight": 0,
      "toolTipShadowOpacity": 1,
      "verticalAlign": "middle",
      "mode": "push",
      "paddingLeft": 0,
      "width": "85%",
      "toolTipBorderSize": 1,
      "toolTip": "FLoor Plan",
      "transparencyActive": true,
      "toolTipTextShadowColor": "#000000",
      "toolTipPaddingLeft": 6,
      "toolTipBorderColor": "#767676",
      "pressedIconURL": "skin/IconButton_2FC9210C_3E8F_C4D4_41A7_10D1404CA49B_pressed.png",
      "borderSize": 0,
      "toolTipBackgroundColor": "#000000",
      "borderRadius": 0,
      "horizontalAlign": "center",
      "height": "85%",
      "toolTipShadowVerticalLength": 0,
      "click": "this.setComponentVisibility(this.Container_53347472_4288_F6E6_4196_D7457B47D2CF, true, 0, this.effect_51CB7B74_4299_12E2_41B4_829087983DE5, 'showEffect', false)",
      "toolTipTextShadowBlurRadius": 3,
      "toolTipOpacity": 0.7,
      "toolTipPaddingBottom": 4,
      "shadow": false,
      "maxHeight": 70,
      "visible": false,
      "paddingBottom": 0,
      "toolTipFontSize": 12,
      "toolTipShadowHorizontalLength": 0,
      "cursor": "hand",
      "toolTipShadowColor": "#333333",
      "minWidth": 25,
      "toolTipFontWeight": "normal",
      "id": "IconButton_2FC9210C_3E8F_C4D4_41A7_10D1404CA49B",
      "toolTipShadowSpread": 0,
      "toolTipTextShadowOpacity": 0,
      "backgroundOpacity": 0,
      "toolTipShadowBlurRadius": 3,
      "toolTipFontColor": "#606060",
      "class": "IconButton",
      "paddingTop": 0,
      "iconURL": "skin/IconButton_2FC9210C_3E8F_C4D4_41A7_10D1404CA49B.png",
      "toolTipFontFamily": "Arial",
      "maxWidth": 70,
      "toolTipPaddingTop": 4,
      "minHeight": 25,
      "toolTipPaddingRight": 6,
      "toolTipFontStyle": "normal"
     }
    ]
   }
  ]
 },
 {
  "paddingRight": 0,
  "backgroundColor": [
   "#000000"
  ],
  "paddingLeft": 0,
  "borderSize": 0,
  "borderRadius": 0,
  "shadow": false,
  "showEffect": {
   "easing": "cubic_in_out",
   "duration": 350,
   "class": "FadeInEffect"
  },
  "top": 0,
  "backgroundColorDirection": "vertical",
  "visible": false,
  "paddingBottom": 0,
  "backgroundColorRatios": [
   0
  ],
  "minWidth": 0,
  "id": "veilPopupPanorama",
  "backgroundOpacity": 0.55,
  "bottom": 0,
  "class": "UIComponent",
  "paddingTop": 0,
  "left": 0,
  "minHeight": 0,
  "right": 0
 },
 {
  "paddingRight": 0,
  "backgroundColor": [],
  "paddingLeft": 0,
  "borderSize": 0,
  "borderRadius": 0,
  "scaleMode": "custom",
  "shadow": false,
  "top": 0,
  "backgroundColorDirection": "vertical",
  "visible": false,
  "paddingBottom": 0,
  "backgroundColorRatios": [],
  "minWidth": 0,
  "id": "zoomImagePopupPanorama",
  "backgroundOpacity": 1,
  "bottom": 0,
  "class": "ZoomImage",
  "paddingTop": 0,
  "left": 0,
  "minHeight": 0,
  "right": 0
 },
 {
  "gap": 5,
  "verticalAlign": "middle",
  "iconHeight": 20,
  "paddingRight": 5,
  "fontSize": 12,
  "mode": "push",
  "backgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "paddingLeft": 5,
  "textDecoration": "none",
  "iconColor": "#000000",
  "iconWidth": 20,
  "borderSize": 0,
  "borderRadius": 0,
  "horizontalAlign": "center",
  "fontColor": "#FFFFFF",
  "fontFamily": "Arial",
  "fontWeight": "normal",
  "shadow": false,
  "iconLineWidth": 5,
  "showEffect": {
   "easing": "cubic_in_out",
   "duration": 350,
   "class": "FadeInEffect"
  },
  "top": 10,
  "backgroundColorDirection": "vertical",
  "cursor": "hand",
  "visible": false,
  "paddingBottom": 5,
  "backgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "pressedIconColor": "#888888",
  "minWidth": 0,
  "id": "closeButtonPopupPanorama",
  "rollOverIconColor": "#666666",
  "backgroundOpacity": 0.3,
  "shadowColor": "#000000",
  "class": "CloseButton",
  "paddingTop": 5,
  "shadowSpread": 1,
  "fontStyle": "normal",
  "shadowBlurRadius": 6,
  "label": "",
  "borderColor": "#000000",
  "iconBeforeLabel": true,
  "minHeight": 0,
  "right": 10,
  "layout": "horizontal"
 }
], 
 "start": "this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37], 'cardboardAvailable'); this.syncPlaylists([this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); this.playList_6498BB66_77B3_9F98_41D1_CE1FDCB85580.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA].forEach(function(component) { component.set('visible', false); }) }",
 "buttonToggleFullscreen": "this.IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA",
 "paddingRight": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "backgroundPreloadEnabled": true,
 "borderSize": 0,
 "mouseWheelEnabled": true,
 "borderRadius": 0,
 "horizontalAlign": "left",
 "height": "100%",
 "overflow": "visible",
 "gap": 10,
 "shadow": false,
 "scripts": {
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getKey": function(key){  return window[key]; },
  "unregisterKey": function(key){  delete window[key]; },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "registerKey": function(key, value){  window[key] = value; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "existsKey": function(key){  return key in window; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio) delete audios[audio.get('id')]; } if(audio) audio.stop(); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); }
 },
 "vrPolyfillScale": 0.5,
 "paddingBottom": 0,
 "minWidth": 20,
 "id": "rootPlayer",
 "scrollBarColor": "#000000",
 "class": "Player",
 "paddingTop": 0,
 "buttonToggleMute": "this.IconButton_8105A313_8E22_BF0B_41E1_331C6035A930",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "minHeight": 20,
 "contentOpaque": false,
 "layout": "absolute"
})