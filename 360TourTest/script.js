TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "buttonPlay": {
   "verticalAlign": "middle",
   "paddingRight": 0,
   "mode": "push",
   "toolTipPaddingRight": 6,
   "paddingLeft": 0,
   "iconURL": "skin/IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED.png",
   "height": "100%",
   "maxWidth": 70,
   "width": "100%",
   "toolTipPaddingBottom": 4,
   "toolTipTextShadowOpacity": 0,
   "transparencyActive": true,
   "toolTipPaddingTop": 4,
   "toolTip": "See Photos",
   "class": "IconButton",
   "toolTipFontSize": 11,
   "toolTipShadowOpacity": 1,
   "toolTipOpacity": 0.7,
   "borderSize": 0,
   "toolTipBorderSize": 1,
   "borderRadius": 0,
   "toolTipShadowVerticalLength": 0,
   "toolTipPaddingLeft": 6,
   "toolTipBorderColor": "#767676",
   "toolTipTextShadowColor": "#000000",
   "rollOverIconURL": "skin/IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED_rollover.png",
   "click": "this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, true, 0, this.effect_98AADBB0_96C5_F0C5_41B2_1C4D08E503DB, 'showEffect', false); this.playList_70DB7861_7A37_201C_41C7_289F1C9EBDDB.set('selectedIndex', 0)",
   "toolTipFontStyle": "normal",
   "toolTipBorderRadius": 3,
   "minHeight": 25,
   "horizontalAlign": "center",
   "cursor": "hand",
   "visible": false,
   "paddingBottom": 0,
   "toolTipTextShadowBlurRadius": 3,
   "toolTipBackgroundColor": "#000000",
   "toolTipFontWeight": "normal",
   "id": "IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED",
   "maxHeight": 70,
   "paddingTop": 0,
   "toolTipShadowHorizontalLength": 0,
   "toolTipShadowSpread": 0,
   "toolTipShadowColor": "#333333",
   "toolTipShadowBlurRadius": 3,
   "backgroundOpacity": 0,
   "toolTipFontColor": "#606060",
   "minWidth": 25,
   "toolTipFontFamily": "Arial",
   "shadow": false
  },
  "id": "MainViewerVideoPlayer",
  "viewerArea": "this.MainViewer",
  "displayPlaybackBar": true,
  "class": "VideoPlayer",
  "buttonStop": [
   {
    "verticalAlign": "middle",
    "paddingRight": 0,
    "mode": "push",
    "paddingLeft": 0,
    "iconURL": "skin/IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4.png",
    "height": "5.48%",
    "maxWidth": 50,
    "width": "3.03%",
    "transparencyActive": true,
    "borderRadius": 0,
    "class": "IconButton",
    "borderSize": 0,
    "rollOverIconURL": "skin/IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4_rollover.png",
    "click": "this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, false, 0, this.effect_9B0AF4E2_96C4_F045_41D3_0E00FEE03A15, 'hideEffect', false)",
    "minHeight": 50,
    "horizontalAlign": "center",
    "top": "2%",
    "cursor": "hand",
    "paddingBottom": 0,
    "id": "IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4",
    "maxHeight": 50,
    "paddingTop": 0,
    "backgroundOpacity": 0,
    "minWidth": 50,
    "right": "2%",
    "shadow": false
   },
   "this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB"
  ]
 },
 {
  "buttonPlay": "this.IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED",
  "buttonPrevious": {
   "verticalAlign": "middle",
   "paddingRight": 0,
   "mode": "push",
   "paddingLeft": 0,
   "iconURL": "skin/IconButton_9FEA51EA_96CC_905A_41D3_F42DB0CD0A74.png",
   "maxWidth": 70,
   "width": "4.24%",
   "transparencyActive": true,
   "borderRadius": 0,
   "borderSize": 0,
   "class": "IconButton",
   "rollOverIconURL": "skin/IconButton_9FEA51EA_96CC_905A_41D3_F42DB0CD0A74_rollover.png",
   "minHeight": 70,
   "horizontalAlign": "center",
   "top": "40%",
   "cursor": "hand",
   "paddingBottom": 0,
   "bottom": "40%",
   "id": "IconButton_9FEA51EA_96CC_905A_41D3_F42DB0CD0A74",
   "maxHeight": 70,
   "paddingTop": 0,
   "left": "1%",
   "backgroundOpacity": 0,
   "minWidth": 70,
   "shadow": false
  },
  "id": "ViewerAreaLabeled_9FD7235A_96CD_9045_41D9_23A3BCBDB1C6PhotoAlbumPlayer",
  "viewerArea": {
   "shadow": false,
   "progressBorderRadius": 0,
   "progressBarBackgroundColorDirection": "vertical",
   "progressBackgroundColor": [
    "#FFFFFF"
   ],
   "paddingRight": 0,
   "playbackBarHeadShadowVerticalLength": 0,
   "progressBarOpacity": 1,
   "toolTipPaddingBottom": 4,
   "playbackBarProgressBackgroundColorDirection": "vertical",
   "progressRight": 0,
   "playbackBarHeadShadowHorizontalLength": 0,
   "toolTipBorderSize": 1,
   "playbackBarBackgroundColor": [
    "#FFFFFF"
   ],
   "paddingLeft": 0,
   "toolTipShadowOpacity": 1,
   "toolTipOpacity": 0.7,
   "playbackBarBorderColor": "#FFFFFF",
   "playbackBarHeight": 10,
   "toolTipShadowVerticalLength": 0,
   "toolTipTextShadowColor": "#000000",
   "playbackBarHeadWidth": 6,
   "toolTipFontStyle": "normal",
   "minHeight": 1,
   "playbackBarProgressBorderSize": 0,
   "playbackBarHeadBackgroundColorDirection": "vertical",
   "progressBottom": 2,
   "paddingBottom": 0,
   "playbackBarRight": 0,
   "toolTipBackgroundColor": "#000000",
   "progressBorderSize": 0,
   "progressBarBorderSize": 0,
   "progressBarBorderRadius": 0,
   "playbackBarOpacity": 1,
   "playbackBarBackgroundColorDirection": "vertical",
   "paddingTop": 0,
   "transitionMode": "blending",
   "playbackBarProgressBorderRadius": 0,
   "toolTipShadowSpread": 0,
   "toolTipShadowColor": "#333333",
   "toolTipShadowBlurRadius": 3,
   "toolTipFontColor": "#606060",
   "minWidth": 1,
   "playbackBarBorderRadius": 0,
   "playbackBarProgressBorderColor": "#000000",
   "playbackBarHeadBackgroundColor": [
    "#111111",
    "#666666"
   ],
   "toolTipPaddingRight": 6,
   "width": "100%",
   "playbackBarHeadBorderRadius": 0,
   "class": "ViewerArea",
   "toolTipTextShadowOpacity": 0,
   "playbackBarHeadShadow": true,
   "toolTipPaddingTop": 4,
   "borderRadius": 0,
   "toolTipFontSize": 11,
   "playbackBarProgressOpacity": 1,
   "height": "100%",
   "progressLeft": 0,
   "borderSize": 0,
   "playbackBarHeadBorderColor": "#000000",
   "progressBackgroundColorRatios": [
    0
   ],
   "playbackBarLeft": 0,
   "playbackBarHeadShadowBlurRadius": 3,
   "toolTipPaddingLeft": 6,
   "toolTipBorderColor": "#767676",
   "playbackBarProgressBackgroundColorRatios": [
    0
   ],
   "playbackBarBackgroundOpacity": 1,
   "playbackBarBorderSize": 0,
   "toolTipBorderRadius": 3,
   "playbackBarHeadShadowOpacity": 0.7,
   "playbackBarHeadHeight": 15,
   "top": "0%",
   "playbackBarHeadBackgroundColorRatios": [
    0,
    1
   ],
   "playbackBarProgressBackgroundColor": [
    "#3399FF"
   ],
   "playbackBarHeadShadowColor": "#000000",
   "toolTipFontWeight": "normal",
   "id": "ViewerAreaLabeled_9FD7235A_96CD_9045_41D9_23A3BCBDB1C6",
   "playbackBarHeadBorderSize": 0,
   "progressBarBorderColor": "#000000",
   "toolTipShadowHorizontalLength": 0,
   "playbackBarHeadOpacity": 1,
   "toolTipTextShadowBlurRadius": 3,
   "progressBackgroundColorDirection": "vertical",
   "progressBackgroundOpacity": 1,
   "progressBarBackgroundColorRatios": [
    0
   ],
   "progressHeight": 10,
   "left": "0%",
   "progressBorderColor": "#000000",
   "playbackBarBottom": 0,
   "progressBarBackgroundColor": [
    "#3399FF"
   ],
   "toolTipFontFamily": "Arial",
   "progressOpacity": 1
  },
  "buttonNext": {
   "verticalAlign": "middle",
   "paddingRight": 0,
   "mode": "push",
   "paddingLeft": 0,
   "iconURL": "skin/IconButton_9FB9BD3F_96C5_703B_41D7_65AEE6E85A96.png",
   "maxWidth": 70,
   "width": "4.24%",
   "transparencyActive": true,
   "borderRadius": 0,
   "class": "IconButton",
   "borderSize": 0,
   "rollOverIconURL": "skin/IconButton_9FB9BD3F_96C5_703B_41D7_65AEE6E85A96_rollover.png",
   "minHeight": 70,
   "horizontalAlign": "center",
   "top": "40%",
   "cursor": "hand",
   "paddingBottom": 0,
   "bottom": "40%",
   "id": "IconButton_9FB9BD3F_96C5_703B_41D7_65AEE6E85A96",
   "maxHeight": 70,
   "paddingTop": 0,
   "backgroundOpacity": 0,
   "minWidth": 70,
   "right": "1%",
   "shadow": false
  },
  "class": "PhotoAlbumPlayer",
  "buttonStop": [
   "this.IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4",
   "this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB"
  ]
 },
 {
  "mapLocations": [
   {
    "x": 303.34,
    "y": 415.62,
    "class": "PanoramaMapLocation",
    "angle": 71.83,
    "map": {
     "fieldOfViewOverlayInsideColor": "#999999",
     "fieldOfViewOverlayInsideOpacity": 0.3,
     "width": 1468,
     "id": "map_4E02A832_427B_EE04_41CC_8E1CEC03E8D3",
     "height": 864,
     "minimumZoomFactor": 0.5,
     "fieldOfViewOverlayRadiusScale": 0.09,
     "fieldOfViewOverlayOutsideColor": "#000000",
     "thumbnailUrl": "media/map_4E02A832_427B_EE04_41CC_8E1CEC03E8D3_t.jpg",
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 864,
        "width": 1468,
        "class": "ImageResourceLevel",
        "url": "media/map_4E02A832_427B_EE04_41CC_8E1CEC03E8D3.jpeg"
       },
       {
        "height": 432,
        "width": 734,
        "class": "ImageResourceLevel",
        "url": "media/map_4E02A832_427B_EE04_41CC_8E1CEC03E8D3_lq.jpeg",
        "grayscale": true
       }
      ]
     },
     "fieldOfViewOverlayOutsideOpacity": 0,
     "label": "first floor",
     "overlays": [
      {
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_4E318587_4299_762E_41B8_79C61CBB293C",
       "map": {
        "offsetY": 0,
        "x": 253.34,
        "width": 100,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 50,
           "width": 50,
           "class": "ImageResourceLevel",
           "url": "media/map_4E02A832_427B_EE04_41CC_8E1CEC03E8D3_HS_0_map.gif"
          }
         ]
        },
        "y": 365.62,
        "height": 100,
        "offsetX": 0,
        "class": "HotspotMapOverlayMap"
       },
       "rollOverDisplay": false,
       "image": {
        "x": 253.34,
        "y": 365.62,
        "class": "HotspotMapOverlayImage",
        "width": 100,
        "height": 100,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 100,
           "width": 100,
           "class": "ImageResourceLevel",
           "url": "media/map_4E02A832_427B_EE04_41CC_8E1CEC03E8D3_HS_0.png"
          }
         ]
        }
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 0)"
        }
       ],
       "useHandCursor": true
      }
     ],
     "scaleMode": "fit_inside",
     "maximumZoomFactor": 1.2,
     "class": "Map",
     "initialZoomFactor": 1
    }
   }
  ],
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_6D549EA0_79BD_70D4_4193_31B8574E4194_t.jpg",
  "class": "Panorama",
  "id": "panorama_6D549EA0_79BD_70D4_4193_31B8574E4194",
  "hfovMin": 100,
  "label": "STREETVIEW",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_6D549EA0_79BD_70D4_4193_31B8574E4194_t.jpg",
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 34,
           "width": 34,
           "class": "ImageResourceLevel",
           "url": "media/panorama_6D549EA0_79BD_70D4_4193_31B8574E4194_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "hfov": 5.02,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 140.51,
        "pitch": 5.38
       }
      ],
      "id": "overlay_6D546EA0_79BD_70D4_41DD_54C379F40853",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "displayTooltipInTouchScreens": true,
        "toolTip": "ENTRANCE",
        "click": "this.startPanoramaWithCamera(this.panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E, this.camera_552A6ED5_5BF2_F2BA_41D6_D4FD03CB3A2E); this.mainPlayList.set('selectedIndex', 1)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "yaw": 140.51,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 69,
           "width": 69,
           "class": "ImageResourceLevel",
           "url": "media/panorama_6D549EA0_79BD_70D4_4193_31B8574E4194_0_HS_0_0.png"
          }
         ]
        },
        "hfov": 5.02,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 5.38
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 50,
           "width": 50,
           "class": "ImageResourceLevel",
           "url": "media/panorama_6D549EA0_79BD_70D4_4193_31B8574E4194_0_HS_5_0_0_map.gif"
          }
         ]
        },
        "hfov": 7.16,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 140.49,
        "pitch": 5.92
       }
      ],
      "id": "overlay_6D547EA0_79BD_70D4_41C8_02EFA8F42792",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "displayTooltipInTouchScreens": true,
        "toolTip": "ENTRANCE",
        "click": "this.startPanoramaWithCamera(this.panorama_6DB5C970_79BA_B033_41B3_DB68D7553251, this.camera_71DA5AF7_7A37_21E4_41D3_C0D921D4C0D4); this.mainPlayList.set('selectedIndex', 1)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "yaw": 140.49,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 100,
           "width": 100,
           "class": "ImageResourceLevel",
           "url": "media/panorama_6D549EA0_79BD_70D4_4193_31B8574E4194_0_HS_5_0.png"
          }
         ]
        },
        "hfov": 7.16,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 5.92
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 1,
           "width": 1,
           "class": "ImageResourceLevel",
           "url": "media/panorama_6D549EA0_79BD_70D4_4193_31B8574E4194_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "hfov": 0,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -171.35,
        "pitch": 85.73
       }
      ],
      "id": "overlay_6D544EA0_79BD_70D4_41D2_0FD12A7CC333",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_6B22585C_79DD_D0E6_41DA_F2E1140696C1, this.camera_71CBCB01_7A37_201C_41D5_C40119E4E8BB); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 5); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 8)"
       }
      ],
      "items": [
       {
        "yaw": -171.35,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 1,
           "width": 1,
           "class": "ImageResourceLevel",
           "url": "media/panorama_6D549EA0_79BD_70D4_4193_31B8574E4194_0_HS_1_0.png"
          }
         ]
        },
        "hfov": 0,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 85.73
       }
      ]
     }
    ],
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2500,
       "width": 5000,
       "class": "ImageResourceLevel",
       "url": "media/panorama_6D549EA0_79BD_70D4_4193_31B8574E4194_hq.jpeg"
      },
      {
       "height": 1608,
       "width": 3217,
       "class": "ImageResourceLevel",
       "url": "media/panorama_6D549EA0_79BD_70D4_4193_31B8574E4194.jpeg"
      }
     ]
    }
   }
  ],
  "hfovMax": 120,
  "hfov": 360,
  "adjacentPanoramas": [
   {
    "panorama": {
     "hfovMax": 120,
     "partial": false,
     "pitch": 0,
     "thumbnailUrl": "media/panorama_71FF85F2_7A29_3A8D_41D1_1989B1CBF663_t.jpg",
     "class": "Panorama",
     "id": "panorama_71FF85F2_7A29_3A8D_41D1_1989B1CBF663",
     "hfovMin": 100,
     "label": "MASTER BR",
     "frames": [
      {
       "thumbnailUrl": "media/panorama_71FF85F2_7A29_3A8D_41D1_1989B1CBF663_t.jpg",
       "class": "SphericPanoramaFrame",
       "overlays": [
        {
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 49,
              "width": 49,
              "class": "ImageResourceLevel",
              "url": "media/panorama_71FF85F2_7A29_3A8D_41D1_1989B1CBF663_0_HS_0_0_0_map.gif"
             }
            ]
           },
           "hfov": 5.48,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -178.25,
           "pitch": -40.5
          }
         ],
         "id": "overlay_71FF95F2_7A29_3A8D_41D5_664FA1D471F6",
         "useHandCursor": true,
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "displayTooltipInTouchScreens": true,
           "toolTip": "BALCONY",
           "click": "this.startPanoramaWithCamera(this.panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C, this.camera_569B6D6C_5BF2_F669_41A7_8467FF9A6DAA); this.mainPlayList.set('selectedIndex', 6)",
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "items": [
          {
           "yaw": -178.25,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 99,
              "width": 99,
              "class": "ImageResourceLevel",
              "url": "media/panorama_71FF85F2_7A29_3A8D_41D1_1989B1CBF663_0_HS_0_0.png"
             }
            ]
           },
           "hfov": 5.48,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -40.5
          }
         ]
        },
        {
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 41,
              "width": 41,
              "class": "ImageResourceLevel",
              "url": "media/panorama_71FF85F2_7A29_3A8D_41D1_1989B1CBF663_0_HS_2_0_0_map.gif"
             }
            ]
           },
           "hfov": 5.53,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 83.07,
           "pitch": -22.75
          }
         ],
         "id": "overlay_71F045F2_7A29_3A8D_41A6_B3185F87931B",
         "useHandCursor": true,
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "displayTooltipInTouchScreens": true,
           "toolTip": "TOILET",
           "click": "this.startPanoramaWithCamera(this.panorama_46009756_572D_4167_41C6_2B49BD1EF7CE, this.camera_56E74D59_5BF2_F7AA_41D0_B6C262499B65); this.mainPlayList.set('selectedIndex', 7)",
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "items": [
          {
           "yaw": 83.07,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 83,
              "width": 83,
              "class": "ImageResourceLevel",
              "url": "media/panorama_71FF85F2_7A29_3A8D_41D1_1989B1CBF663_0_HS_2_0.png"
             }
            ]
           },
           "hfov": 5.53,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -22.75
          }
         ]
        },
        {
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 37,
              "width": 37,
              "class": "ImageResourceLevel",
              "url": "media/panorama_71FF85F2_7A29_3A8D_41D1_1989B1CBF663_0_HS_3_0_0_map.gif"
             }
            ]
           },
           "hfov": 5.37,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 34.7,
           "pitch": 6.11
          }
         ],
         "id": "overlay_71F055F2_7A29_3A8D_41CD_10015064CCC1",
         "useHandCursor": true,
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "displayTooltipInTouchScreens": true,
           "toolTip": "TWIN BEDROOM",
           "click": "this.startPanoramaWithCamera(this.panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D, this.camera_56C57D3C_5BF2_F7EA_41BA_23AB5285E45A); this.mainPlayList.set('selectedIndex', 8)",
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "items": [
          {
           "yaw": 34.7,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 74,
              "width": 74,
              "class": "ImageResourceLevel",
              "url": "media/panorama_71FF85F2_7A29_3A8D_41D1_1989B1CBF663_0_HS_3_0.png"
             }
            ]
           },
           "hfov": 5.37,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": 6.11
          }
         ]
        },
        {
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 37,
              "width": 37,
              "class": "ImageResourceLevel",
              "url": "media/panorama_71FF85F2_7A29_3A8D_41D1_1989B1CBF663_0_HS_4_0_0_map.gif"
             }
            ]
           },
           "hfov": 5.27,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 34.74,
           "pitch": -12.59
          }
         ],
         "id": "overlay_71F005F2_7A29_3A8D_41DA_37F34B390B04",
         "useHandCursor": true,
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "displayTooltipInTouchScreens": true,
           "toolTip": "SINGLE BEDROOM",
           "click": "this.startPanoramaWithCamera(this.panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC, this.camera_56F35D45_5BF2_F79A_41D0_857D96DC10DF); this.mainPlayList.set('selectedIndex', 4)",
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "items": [
          {
           "yaw": 34.74,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 74,
              "width": 74,
              "class": "ImageResourceLevel",
              "url": "media/panorama_71FF85F2_7A29_3A8D_41D1_1989B1CBF663_0_HS_4_0.png"
             }
            ]
           },
           "hfov": 5.27,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -12.59
          }
         ]
        },
        {
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 1,
              "width": 1,
              "class": "ImageResourceLevel",
              "url": "media/panorama_71FF85F2_7A29_3A8D_41D1_1989B1CBF663_0_HS_1_0_0_map.gif"
             }
            ]
           },
           "hfov": 0,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -162.92,
           "pitch": 76.94
          }
         ],
         "id": "overlay_71FE85F3_7A29_3A73_41C4_FFE50777692A",
         "useHandCursor": true,
         "enabledInCardboard": true,
         "rollOverDisplay": true,
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_6B22585C_79DD_D0E6_41DA_F2E1140696C1, this.camera_71BE992D_7A37_2067_41DD_7F939AC2EB55); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 3)"
          }
         ],
         "items": [
          {
           "yaw": -162.92,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 1,
              "width": 1,
              "class": "ImageResourceLevel",
              "url": "media/panorama_71FF85F2_7A29_3A8D_41D1_1989B1CBF663_0_HS_1_0.png"
             }
            ]
           },
           "hfov": 0,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": 76.94
          }
         ]
        },
        {
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 70,
              "width": 70,
              "class": "ImageResourceLevel",
              "url": "media/panorama_71FF85F2_7A29_3A8D_41D1_1989B1CBF663_0_HS_5_0_0_map.gif"
             }
            ]
           },
           "hfov": 7.8,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -178.2,
           "pitch": -39.78
          }
         ],
         "id": "overlay_71FF65F3_7A29_3A73_41DC_9C2CF1A01EFF",
         "useHandCursor": true,
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "displayTooltipInTouchScreens": true,
           "toolTip": "BALCONY",
           "click": "this.startPanoramaWithCamera(this.panorama_6DAC16C5_79BB_B05D_41D7_EDBC71F4C6C8, this.camera_710BF8D1_7A37_203C_41CE_00CE05E15D98); this.mainPlayList.set('selectedIndex', 6)",
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "items": [
          {
           "yaw": -178.2,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 140,
              "width": 140,
              "class": "ImageResourceLevel",
              "url": "media/panorama_71FF85F2_7A29_3A8D_41D1_1989B1CBF663_0_HS_5_0.png"
             }
            ]
           },
           "hfov": 7.8,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -39.78
          }
         ]
        },
        {
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 59,
              "width": 59,
              "class": "ImageResourceLevel",
              "url": "media/panorama_71FF85F2_7A29_3A8D_41D1_1989B1CBF663_0_HS_6_0_0_map.gif"
             }
            ]
           },
           "hfov": 8,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 82.9,
           "pitch": -22.11
          }
         ],
         "id": "overlay_71FF55F3_7A29_3A73_41B9_9BFF44150922",
         "useHandCursor": true,
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "displayTooltipInTouchScreens": true,
           "toolTip": "TOILET",
           "click": "this.startPanoramaWithCamera(this.panorama_6DAC5AE5_79BB_D05D_41CB_9B546369B6F6, this.camera_7105B8C2_7A37_201C_4178_4AB3C557FD2E); this.mainPlayList.set('selectedIndex', 7)",
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "items": [
          {
           "yaw": 82.9,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 119,
              "width": 119,
              "class": "ImageResourceLevel",
              "url": "media/panorama_71FF85F2_7A29_3A8D_41D1_1989B1CBF663_0_HS_6_0.png"
             }
            ]
           },
           "hfov": 8,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -22.11
          }
         ]
        },
        {
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 53,
              "width": 53,
              "class": "ImageResourceLevel",
              "url": "media/panorama_71FF85F2_7A29_3A8D_41D1_1989B1CBF663_0_HS_7_0_0_map.gif"
             }
            ]
           },
           "hfov": 7.65,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 34.69,
           "pitch": 6.66
          }
         ],
         "id": "overlay_71FF35F3_7A29_3A73_41B7_A144C00F29C3",
         "useHandCursor": true,
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "displayTooltipInTouchScreens": true,
           "toolTip": "TWIN BEDROOM",
           "click": "this.startPanoramaWithCamera(this.panorama_6DD8F83F_79BB_D02D_41C1_7381B98F4EC9, this.camera_71573905_7A37_2024_41BF_340C13D71294); this.mainPlayList.set('selectedIndex', 8)",
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "items": [
          {
           "yaw": 34.69,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 106,
              "width": 106,
              "class": "ImageResourceLevel",
              "url": "media/panorama_71FF85F2_7A29_3A8D_41D1_1989B1CBF663_0_HS_7_0.png"
             }
            ]
           },
           "hfov": 7.65,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": 6.66
          }
         ]
        },
        {
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 53,
              "width": 53,
              "class": "ImageResourceLevel",
              "url": "media/panorama_71FF85F2_7A29_3A8D_41D1_1989B1CBF663_0_HS_8_0_0_map.gif"
             }
            ]
           },
           "hfov": 7.5,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 34.72,
           "pitch": -13.15
          }
         ],
         "id": "overlay_71FF15F3_7A29_3A73_4166_7084440B458D",
         "useHandCursor": true,
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "displayTooltipInTouchScreens": true,
           "toolTip": "SINGLE BEDROOM",
           "click": "this.startPanoramaWithCamera(this.panorama_6DB4B6E3_79BB_5055_41CF_3466DC5DDA74, this.camera_71597915_7A37_2024_41C6_09515112629A); this.mainPlayList.set('selectedIndex', 4)",
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "items": [
          {
           "yaw": 34.72,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 106,
              "width": 106,
              "class": "ImageResourceLevel",
              "url": "media/panorama_71FF85F2_7A29_3A8D_41D1_1989B1CBF663_0_HS_8_0.png"
             }
            ]
           },
           "hfov": 7.5,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -13.15
          }
         ]
        }
       ],
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "height": 2500,
          "width": 5000,
          "class": "ImageResourceLevel",
          "url": "media/panorama_71FF85F2_7A29_3A8D_41D1_1989B1CBF663_hq.jpeg"
         },
         {
          "height": 1608,
          "width": 3217,
          "class": "ImageResourceLevel",
          "url": "media/panorama_71FF85F2_7A29_3A8D_41D1_1989B1CBF663.jpeg"
         }
        ]
       }
      }
     ],
     "hfov": 360,
     "adjacentPanoramas": [
      {
       "panorama": {
        "hfovMax": 120,
        "partial": false,
        "pitch": 0,
        "thumbnailUrl": "media/panorama_70DC40A9_7A29_7A9F_41D4_27043CED2E2C_t.jpg",
        "class": "Panorama",
        "id": "panorama_70DC40A9_7A29_7A9F_41D4_27043CED2E2C",
        "hfovMin": 100,
        "label": "POOL",
        "frames": [
         {
          "thumbnailUrl": "media/panorama_70DC40A9_7A29_7A9F_41D4_27043CED2E2C_t.jpg",
          "class": "SphericPanoramaFrame",
          "overlays": [
           {
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 52,
                 "width": 52,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_70DC40A9_7A29_7A9F_41D4_27043CED2E2C_0_HS_0_0_0_map.gif"
                }
               ]
              },
              "hfov": 6.33,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 12.08,
              "pitch": -33.14
             }
            ],
            "id": "overlay_70DC10A9_7A29_7A9F_41C4_5B87FFCC2C3E",
            "useHandCursor": true,
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "displayTooltipInTouchScreens": true,
              "toolTip": "LIVING ROOM",
              "click": "this.startPanoramaWithCamera(this.panorama_47B53902_572E_CEDF_41CC_C256D31A5443, this.camera_566FDDCF_5BF2_F6A7_41C3_D60F04E20C30); this.mainPlayList.set('selectedIndex', 3)",
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "yaw": 12.08,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 105,
                 "width": 105,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_70DC40A9_7A29_7A9F_41D4_27043CED2E2C_0_HS_0_0.png"
                }
               ]
              },
              "hfov": 6.33,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -33.14
             }
            ]
           },
           {
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 43,
                 "width": 43,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_70DC40A9_7A29_7A9F_41D4_27043CED2E2C_0_HS_6_0_0_map.gif"
                }
               ]
              },
              "hfov": 5.99,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -97.88,
              "pitch": -16.95
             }
            ],
            "id": "overlay_70DCD0A9_7A29_7A9F_41C5_B4B613D13E2E",
            "useHandCursor": true,
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "displayTooltipInTouchScreens": true,
              "toolTip": "ENTRANCE",
              "click": "this.startPanoramaWithCamera(this.panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E, this.camera_565ACDA7_5BF2_F6E7_41BA_8BE7CEB9351B); this.mainPlayList.set('selectedIndex', 1)",
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "yaw": -97.88,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 86,
                 "width": 86,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_70DC40A9_7A29_7A9F_41D4_27043CED2E2C_0_HS_6_0.png"
                }
               ]
              },
              "hfov": 5.99,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -16.95
             }
            ]
           },
           {
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 1,
                 "width": 1,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_70DC40A9_7A29_7A9F_41D4_27043CED2E2C_0_HS_1_0_0_map.gif"
                }
               ]
              },
              "hfov": 0,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -172.22,
              "pitch": 82.35
             }
            ],
            "id": "overlay_70DCF0A9_7A29_7A9F_41DB_8398FBE207E1",
            "useHandCursor": true,
            "enabledInCardboard": true,
            "rollOverDisplay": true,
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_6B22585C_79DD_D0E6_41DA_F2E1140696C1, this.camera_706949A3_7A37_201C_41BB_3079899B0E35); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 5); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 8); this.mainPlayList.set('selectedIndex', 6)"
             }
            ],
            "items": [
             {
              "yaw": -172.22,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 1,
                 "width": 1,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_70DC40A9_7A29_7A9F_41D4_27043CED2E2C_0_HS_1_0.png"
                }
               ]
              },
              "hfov": 0,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": 82.35
             }
            ]
           },
           {
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 75,
                 "width": 75,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_70DC40A9_7A29_7A9F_41D4_27043CED2E2C_0_HS_7_0_0_map.gif"
                }
               ]
              },
              "hfov": 9.13,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 12.06,
              "pitch": -32.33
             }
            ],
            "id": "overlay_70DC80A9_7A29_7A9F_41CD_93595AC1D622",
            "useHandCursor": true,
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "displayTooltipInTouchScreens": true,
              "toolTip": "LIVING ROOM",
              "click": "this.startPanoramaWithCamera(this.panorama_6DB90FEC_79BA_D053_41D5_C81A38608579, this.camera_7189C958_7A37_202C_41B4_BD9FCAC95BF8); this.mainPlayList.set('selectedIndex', 3)",
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "yaw": 12.06,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 150,
                 "width": 150,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_70DC40A9_7A29_7A9F_41D4_27043CED2E2C_0_HS_7_0.png"
                }
               ]
              },
              "hfov": 9.13,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -32.33
             }
            ]
           },
           {
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 62,
                 "width": 62,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_70DC40A9_7A29_7A9F_41D4_27043CED2E2C_0_HS_8_0_0_map.gif"
                }
               ]
              },
              "hfov": 8.61,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -97.22,
              "pitch": -16.94
             }
            ],
            "id": "overlay_70DC90A9_7A29_7A9F_41B1_C06AD5320157",
            "useHandCursor": true,
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "displayTooltipInTouchScreens": true,
              "toolTip": "ENTRANCE",
              "click": "this.startPanoramaWithCamera(this.panorama_6DB5C970_79BA_B033_41B3_DB68D7553251, this.camera_706E0999_7A37_202C_41CD_7B3AFAF8B92B); this.mainPlayList.set('selectedIndex', 1)",
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "yaw": -97.22,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 125,
                 "width": 125,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_70DC40A9_7A29_7A9F_41D4_27043CED2E2C_0_HS_8_0.png"
                }
               ]
              },
              "hfov": 8.61,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -16.94
             }
            ]
           }
          ],
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 2500,
             "width": 5000,
             "class": "ImageResourceLevel",
             "url": "media/panorama_70DC40A9_7A29_7A9F_41D4_27043CED2E2C_hq.jpeg"
            },
            {
             "height": 1608,
             "width": 3217,
             "class": "ImageResourceLevel",
             "url": "media/panorama_70DC40A9_7A29_7A9F_41D4_27043CED2E2C.jpeg"
            }
           ]
          }
         }
        ],
        "hfov": 360,
        "adjacentPanoramas": [
         {
          "panorama": "this.panorama_71FF85F2_7A29_3A8D_41D1_1989B1CBF663",
          "class": "AdjacentPanorama",
          "yaw": -172.22,
          "backwardYaw": -162.92,
          "distance": 1
         },
         {
          "panorama": {
           "hfovMax": 120,
           "partial": false,
           "pitch": 0,
           "thumbnailUrl": "media/panorama_6DAC5AE5_79BB_D05D_41CB_9B546369B6F6_t.jpg",
           "class": "Panorama",
           "id": "panorama_6DAC5AE5_79BB_D05D_41CB_9B546369B6F6",
           "hfovMin": 100,
           "label": "TOILET",
           "frames": [
            {
             "thumbnailUrl": "media/panorama_6DAC5AE5_79BB_D05D_41CB_9B546369B6F6_t.jpg",
             "class": "SphericPanoramaFrame",
             "overlays": [
              {
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 48,
                    "width": 48,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_6DAC5AE5_79BB_D05D_41CB_9B546369B6F6_0_HS_2_0_0_map.gif"
                   }
                  ]
                 },
                 "hfov": 6.58,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 161.77,
                 "pitch": -21.08
                }
               ],
               "id": "overlay_6DAC7AE5_79BB_D05D_41D5_49A833031E2A",
               "useHandCursor": true,
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "displayTooltipInTouchScreens": true,
                 "toolTip": "MASTER BEDROOM",
                 "click": "this.startPanoramaWithCamera(this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF, this.camera_57262CFF_5BF2_F667_41D4_80634CF1C7DB); this.mainPlayList.set('selectedIndex', 5)",
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "items": [
                {
                 "yaw": 161.77,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 97,
                    "width": 97,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_6DAC5AE5_79BB_D05D_41CB_9B546369B6F6_0_HS_2_0.png"
                   }
                  ]
                 },
                 "hfov": 6.58,
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -21.08
                }
               ]
              },
              {
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 1,
                    "width": 1,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_6DAC5AE5_79BB_D05D_41CB_9B546369B6F6_0_HS_1_0_0_map.gif"
                   }
                  ]
                 },
                 "hfov": 0,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -162.92,
                 "pitch": 80.2
                }
               ],
               "id": "overlay_6DAC6AE5_79BB_D05D_41BD_FDCC73A863D5",
               "useHandCursor": true,
               "enabledInCardboard": true,
               "rollOverDisplay": true,
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_6B22585C_79DD_D0E6_41DA_F2E1140696C1, this.camera_709139FC_7A37_23E4_41CB_D548CEBB3775); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 8)"
                }
               ],
               "items": [
                {
                 "yaw": -162.92,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 1,
                    "width": 1,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_6DAC5AE5_79BB_D05D_41CB_9B546369B6F6_0_HS_1_0.png"
                   }
                  ]
                 },
                 "hfov": 0,
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": 80.2
                }
               ]
              },
              {
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 71,
                    "width": 71,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_6DAC5AE5_79BB_D05D_41CB_9B546369B6F6_0_HS_3_0_0_map.gif"
                   }
                  ]
                 },
                 "hfov": 9.65,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 161.78,
                 "pitch": -20.35
                }
               ],
               "id": "overlay_6DAD8AE5_79BB_D05D_41C2_23DD5EDFB7F6",
               "useHandCursor": true,
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "displayTooltipInTouchScreens": true,
                 "toolTip": "MASTER BEDROOM",
                 "click": "this.startPanoramaWithCamera(this.panorama_71FF85F2_7A29_3A8D_41D1_1989B1CBF663, this.camera_7053F9AD_7A37_2064_41DB_77D96A34C263); this.mainPlayList.set('selectedIndex', 5)",
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "items": [
                {
                 "yaw": 161.78,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 143,
                    "width": 143,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_6DAC5AE5_79BB_D05D_41CB_9B546369B6F6_0_HS_3_0.png"
                   }
                  ]
                 },
                 "hfov": 9.65,
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -20.35
                }
               ]
              }
             ],
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "height": 2500,
                "width": 5000,
                "class": "ImageResourceLevel",
                "url": "media/panorama_6DAC5AE5_79BB_D05D_41CB_9B546369B6F6_hq.jpeg"
               },
               {
                "height": 1608,
                "width": 3217,
                "class": "ImageResourceLevel",
                "url": "media/panorama_6DAC5AE5_79BB_D05D_41CB_9B546369B6F6.jpeg"
               }
              ]
             }
            }
           ],
           "hfov": 360,
           "adjacentPanoramas": [
            {
             "panorama": "this.panorama_71FF85F2_7A29_3A8D_41D1_1989B1CBF663",
             "class": "AdjacentPanorama",
             "yaw": 161.78,
             "backwardYaw": 82.9,
             "distance": 1
            },
            {
             "panorama": "this.panorama_70DC40A9_7A29_7A9F_41D4_27043CED2E2C",
             "class": "AdjacentPanorama",
             "yaw": -162.92,
             "backwardYaw": -172.22,
             "distance": 1
            },
            {
             "panorama": {
              "hfovMax": 120,
              "partial": false,
              "pitch": 0,
              "thumbnailUrl": "media/panorama_6DAC16C5_79BB_B05D_41D7_EDBC71F4C6C8_t.jpg",
              "class": "Panorama",
              "id": "panorama_6DAC16C5_79BB_B05D_41D7_EDBC71F4C6C8",
              "hfovMin": 100,
              "label": "BALCONY",
              "frames": [
               {
                "thumbnailUrl": "media/panorama_6DAC16C5_79BB_B05D_41D7_EDBC71F4C6C8_t.jpg",
                "class": "SphericPanoramaFrame",
                "overlays": [
                 {
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 59,
                       "width": 59,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_6DAC16C5_79BB_B05D_41D7_EDBC71F4C6C8_0_HS_0_0_0_map.gif"
                      }
                     ]
                    },
                    "hfov": 6.32,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -174.37,
                    "pitch": -43
                   }
                  ],
                  "id": "overlay_6DAC36C5_79BB_B05D_41DC_BB1AE3F45FA4",
                  "useHandCursor": true,
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "displayTooltipInTouchScreens": true,
                    "toolTip": "MASTER BEDROOM",
                    "click": "this.startPanoramaWithCamera(this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF, this.camera_55CB7E16_5BF2_F5B9_4191_4ABD27800AF8); this.mainPlayList.set('selectedIndex', 5)",
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "items": [
                   {
                    "yaw": -174.37,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 119,
                       "width": 119,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_6DAC16C5_79BB_B05D_41D7_EDBC71F4C6C8_0_HS_0_0.png"
                      }
                     ]
                    },
                    "hfov": 6.32,
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -43
                   }
                  ]
                 },
                 {
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 1,
                       "width": 1,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_6DAC16C5_79BB_B05D_41D7_EDBC71F4C6C8_0_HS_1_0_0_map.gif"
                      }
                     ]
                    },
                    "hfov": 0,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -170.58,
                    "pitch": 85.29
                   }
                  ],
                  "id": "overlay_6DAC46C5_79BB_B05C_41D7_C04431E8B56A",
                  "useHandCursor": true,
                  "enabledInCardboard": true,
                  "rollOverDisplay": true,
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_6B22585C_79DD_D0E6_41DA_F2E1140696C1, this.camera_713D2A52_7A37_203C_41C3_11CF75F66184); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 8); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 7)"
                   }
                  ],
                  "items": [
                   {
                    "yaw": -170.58,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 1,
                       "width": 1,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_6DAC16C5_79BB_B05D_41D7_EDBC71F4C6C8_0_HS_1_0.png"
                      }
                     ]
                    },
                    "hfov": 0,
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": 85.29
                   }
                  ]
                 },
                 {
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 87,
                       "width": 87,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_6DAC16C5_79BB_B05D_41D7_EDBC71F4C6C8_0_HS_6_0_0_map.gif"
                      }
                     ]
                    },
                    "hfov": 9.35,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -174.39,
                    "pitch": -42.06
                   }
                  ],
                  "id": "overlay_6DAC56C6_79BB_B05F_41DC_3EA3E13D2EFA",
                  "useHandCursor": true,
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "displayTooltipInTouchScreens": true,
                    "toolTip": "MASTER BEDROOM",
                    "click": "this.startPanoramaWithCamera(this.panorama_71FF85F2_7A29_3A8D_41D1_1989B1CBF663, this.camera_7086FA05_7A37_2024_41C2_5DE8604F8FBC); this.mainPlayList.set('selectedIndex', 5)",
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "items": [
                   {
                    "yaw": -174.39,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 175,
                       "width": 175,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_6DAC16C5_79BB_B05D_41D7_EDBC71F4C6C8_0_HS_6_0.png"
                      }
                     ]
                    },
                    "hfov": 9.35,
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -42.06
                   }
                  ]
                 }
                ],
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "height": 2500,
                   "width": 5000,
                   "class": "ImageResourceLevel",
                   "url": "media/panorama_6DAC16C5_79BB_B05D_41D7_EDBC71F4C6C8_hq.jpeg"
                  },
                  {
                   "height": 1608,
                   "width": 3217,
                   "class": "ImageResourceLevel",
                   "url": "media/panorama_6DAC16C5_79BB_B05D_41D7_EDBC71F4C6C8.jpeg"
                  }
                 ]
                }
               }
              ],
              "hfov": 360,
              "adjacentPanoramas": [
               {
                "panorama": "this.panorama_71FF85F2_7A29_3A8D_41D1_1989B1CBF663",
                "class": "AdjacentPanorama",
                "yaw": -174.39,
                "backwardYaw": -178.2,
                "distance": 1
               },
               {
                "panorama": "this.panorama_70DC40A9_7A29_7A9F_41D4_27043CED2E2C",
                "class": "AdjacentPanorama",
                "yaw": -170.58,
                "backwardYaw": -172.22,
                "distance": 1
               },
               {
                "panorama": "this.panorama_6DAC5AE5_79BB_D05D_41CB_9B546369B6F6",
                "class": "AdjacentPanorama",
                "yaw": -170.58,
                "backwardYaw": -162.92,
                "distance": 1
               },
               {
                "panorama": {
                 "hfovMax": 120,
                 "partial": false,
                 "pitch": 0,
                 "thumbnailUrl": "media/panorama_6DB90FEC_79BA_D053_41D5_C81A38608579_t.jpg",
                 "class": "Panorama",
                 "id": "panorama_6DB90FEC_79BA_D053_41D5_C81A38608579",
                 "hfovMin": 100,
                 "label": "LIVINGROOM",
                 "frames": [
                  {
                   "thumbnailUrl": "media/panorama_6DB90FEC_79BA_D053_41D5_C81A38608579_t.jpg",
                   "class": "SphericPanoramaFrame",
                   "overlays": [
                    {
                     "maps": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 41,
                          "width": 41,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_6DB90FEC_79BA_D053_41D5_C81A38608579_0_HS_0_0_0_map.gif"
                         }
                        ]
                       },
                       "hfov": 5.96,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": 42.05,
                       "pitch": -6.87
                      }
                     ],
                     "id": "overlay_6DB97FEC_79BA_D053_41AA_936C03081D83",
                     "useHandCursor": true,
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "class": "HotspotPanoramaOverlay",
                     "areas": [
                      {
                       "displayTooltipInTouchScreens": true,
                       "toolTip": "SINGLE BEDROOM",
                       "click": "this.startPanoramaWithCamera(this.panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC, this.camera_55BE4E50_5BF2_F5B9_41B2_A0DBD967D7CD); this.mainPlayList.set('selectedIndex', 4)",
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "items": [
                      {
                       "yaw": 42.05,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 83,
                          "width": 83,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_6DB90FEC_79BA_D053_41D5_C81A38608579_0_HS_0_0.png"
                         }
                        ]
                       },
                       "hfov": 5.96,
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": -6.87
                      }
                     ]
                    },
                    {
                     "maps": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 41,
                          "width": 41,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_6DB90FEC_79BA_D053_41D5_C81A38608579_0_HS_5_0_0_map.gif"
                         }
                        ]
                       },
                       "hfov": 5.41,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": -176.79,
                       "pitch": -25.6
                      }
                     ],
                     "id": "overlay_6DB96FEC_79BA_D053_41D7_6C636F0F96BA",
                     "useHandCursor": true,
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "class": "HotspotPanoramaOverlay",
                     "areas": [
                      {
                       "displayTooltipInTouchScreens": true,
                       "toolTip": "POOL",
                       "click": "this.startPanoramaWithCamera(this.panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D, this.camera_5577FE77_5BF2_F267_41AE_B186A0A61737); this.mainPlayList.set('selectedIndex', 2)",
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "items": [
                      {
                       "yaw": -176.79,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 83,
                          "width": 83,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_6DB90FEC_79BA_D053_41D5_C81A38608579_0_HS_5_0.png"
                         }
                        ]
                       },
                       "hfov": 5.41,
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": -25.6
                      }
                     ]
                    },
                    {
                     "maps": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 1,
                          "width": 1,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_6DB90FEC_79BA_D053_41D5_C81A38608579_0_HS_1_0_0_map.gif"
                         }
                        ]
                       },
                       "hfov": 0,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": -171.96,
                       "pitch": 82.97
                      }
                     ],
                     "id": "overlay_6DB95FEC_79BA_D053_41D7_54797D893A6A",
                     "useHandCursor": true,
                     "enabledInCardboard": true,
                     "rollOverDisplay": true,
                     "class": "HotspotPanoramaOverlay",
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_6B22585C_79DD_D0E6_41DA_F2E1140696C1, this.camera_71B44AA8_7A37_206D_41D2_F745CB68ECC8); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 8); this.mainPlayList.set('selectedIndex', 5)"
                      }
                     ],
                     "items": [
                      {
                       "yaw": -171.96,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 1,
                          "width": 1,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_6DB90FEC_79BA_D053_41D5_C81A38608579_0_HS_1_0.png"
                         }
                        ]
                       },
                       "hfov": 0,
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": 82.97
                      }
                     ]
                    },
                    {
                     "maps": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 59,
                          "width": 59,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_6DB90FEC_79BA_D053_41D5_C81A38608579_0_HS_6_0_0_map.gif"
                         }
                        ]
                       },
                       "hfov": 8.59,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": 42.02,
                       "pitch": -6.28
                      }
                     ],
                     "id": "overlay_6DB9BFED_79BA_D02D_41B0_DDF3C13E099D",
                     "useHandCursor": true,
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "class": "HotspotPanoramaOverlay",
                     "areas": [
                      {
                       "displayTooltipInTouchScreens": true,
                       "toolTip": "SINGLE BEDROOM",
                       "click": "this.startPanoramaWithCamera(this.panorama_6DB4B6E3_79BB_5055_41CF_3466DC5DDA74, this.camera_71507A95_7A37_2024_41D8_5D69673D5269); this.mainPlayList.set('selectedIndex', 4)",
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "items": [
                      {
                       "yaw": 42.02,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 119,
                          "width": 119,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_6DB90FEC_79BA_D053_41D5_C81A38608579_0_HS_6_0.png"
                         }
                        ]
                       },
                       "hfov": 8.59,
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": -6.28
                      }
                     ]
                    },
                    {
                     "maps": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 59,
                          "width": 59,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_6DB90FEC_79BA_D053_41D5_C81A38608579_0_HS_7_0_0_map.gif"
                         }
                        ]
                       },
                       "hfov": 7.83,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": -176.8,
                       "pitch": -24.98
                      }
                     ],
                     "id": "overlay_6DB99FED_79BA_D02D_41C2_E053BE47AC1E",
                     "useHandCursor": true,
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "class": "HotspotPanoramaOverlay",
                     "areas": [
                      {
                       "displayTooltipInTouchScreens": true,
                       "toolTip": "POOL",
                       "click": "this.startPanoramaWithCamera(this.panorama_70DC40A9_7A29_7A9F_41D4_27043CED2E2C, this.camera_7111EA65_7A37_20E4_41C7_707BE123D288); this.mainPlayList.set('selectedIndex', 2)",
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "items": [
                      {
                       "yaw": -176.8,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 119,
                          "width": 119,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_6DB90FEC_79BA_D053_41D5_C81A38608579_0_HS_7_0.png"
                         }
                        ]
                       },
                       "hfov": 7.83,
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": -24.98
                      }
                     ]
                    }
                   ],
                   "sphere": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "height": 2500,
                      "width": 5000,
                      "class": "ImageResourceLevel",
                      "url": "media/panorama_6DB90FEC_79BA_D053_41D5_C81A38608579_hq.jpeg"
                     },
                     {
                      "height": 1608,
                      "width": 3217,
                      "class": "ImageResourceLevel",
                      "url": "media/panorama_6DB90FEC_79BA_D053_41D5_C81A38608579.jpeg"
                     }
                    ]
                   }
                  }
                 ],
                 "hfov": 360,
                 "adjacentPanoramas": [
                  {
                   "panorama": "this.panorama_71FF85F2_7A29_3A8D_41D1_1989B1CBF663",
                   "class": "AdjacentPanorama",
                   "yaw": -171.96,
                   "backwardYaw": -162.92,
                   "distance": 1
                  },
                  {
                   "panorama": "this.panorama_70DC40A9_7A29_7A9F_41D4_27043CED2E2C",
                   "class": "AdjacentPanorama",
                   "yaw": -176.8,
                   "backwardYaw": 12.06,
                   "distance": 1
                  },
                  {
                   "panorama": "this.panorama_6DAC5AE5_79BB_D05D_41CB_9B546369B6F6",
                   "class": "AdjacentPanorama",
                   "yaw": -171.96,
                   "backwardYaw": -162.92,
                   "distance": 1
                  },
                  {
                   "panorama": "this.panorama_6DAC16C5_79BB_B05D_41D7_EDBC71F4C6C8",
                   "class": "AdjacentPanorama",
                   "yaw": -171.96,
                   "backwardYaw": -170.58,
                   "distance": 1
                  },
                  {
                   "panorama": "this.panorama_6D549EA0_79BD_70D4_4193_31B8574E4194",
                   "class": "AdjacentPanorama",
                   "yaw": -171.96,
                   "backwardYaw": -171.35,
                   "distance": 1
                  },
                  {
                   "panorama": {
                    "hfovMax": 120,
                    "partial": false,
                    "pitch": 0,
                    "thumbnailUrl": "media/panorama_6DD8F83F_79BB_D02D_41C1_7381B98F4EC9_t.jpg",
                    "class": "Panorama",
                    "id": "panorama_6DD8F83F_79BB_D02D_41C1_7381B98F4EC9",
                    "hfovMin": 100,
                    "label": "TWIN BR",
                    "frames": [
                     {
                      "thumbnailUrl": "media/panorama_6DD8F83F_79BB_D02D_41C1_7381B98F4EC9_t.jpg",
                      "class": "SphericPanoramaFrame",
                      "overlays": [
                       {
                        "maps": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 45,
                             "width": 45,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_6DD8F83F_79BB_D02D_41C1_7381B98F4EC9_0_HS_2_0_0_map.gif"
                            }
                           ]
                          },
                          "hfov": 6.55,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": -142.88,
                          "pitch": 8.82
                         }
                        ],
                        "id": "overlay_6DD8D83F_79BB_D02D_41CC_D8202BD2E2E3",
                        "useHandCursor": true,
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "class": "HotspotPanoramaOverlay",
                        "areas": [
                         {
                          "displayTooltipInTouchScreens": true,
                          "toolTip": "TERRACE",
                          "click": "this.startPanoramaWithCamera(this.panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116, this.camera_56043BB0_5BF2_F2FA_41B1_1DE6A0E08A4C); this.mainPlayList.set('selectedIndex', 9)",
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "items": [
                         {
                          "yaw": -142.88,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 91,
                             "width": 91,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_6DD8F83F_79BB_D02D_41C1_7381B98F4EC9_0_HS_2_0.png"
                            }
                           ]
                          },
                          "hfov": 6.55,
                          "class": "HotspotPanoramaOverlayImage",
                          "pitch": 8.82
                         }
                        ]
                       },
                       {
                        "maps": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 45,
                             "width": 45,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_6DD8F83F_79BB_D02D_41C1_7381B98F4EC9_0_HS_0_0_0_map.gif"
                            }
                           ]
                          },
                          "hfov": 5.66,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": -142.87,
                          "pitch": -31.29
                         }
                        ],
                        "id": "overlay_6DD8C83F_79BB_D02D_41C8_64BAB0F4B09E",
                        "useHandCursor": true,
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "class": "HotspotPanoramaOverlay",
                        "areas": [
                         {
                          "displayTooltipInTouchScreens": true,
                          "toolTip": "MASTER BEDROOM",
                          "click": "this.startPanoramaWithCamera(this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF, this.camera_56700B7F_5BF2_F267_41C2_DC8D8F885C23); this.mainPlayList.set('selectedIndex', 5)",
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "items": [
                         {
                          "yaw": -142.87,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 91,
                             "width": 91,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_6DD8F83F_79BB_D02D_41C1_7381B98F4EC9_0_HS_0_0.png"
                            }
                           ]
                          },
                          "hfov": 5.66,
                          "class": "HotspotPanoramaOverlayImage",
                          "pitch": -31.29
                         }
                        ]
                       },
                       {
                        "maps": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 1,
                             "width": 1,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_6DD8F83F_79BB_D02D_41C1_7381B98F4EC9_0_HS_1_0_0_map.gif"
                            }
                           ]
                          },
                          "hfov": 0,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": -172.21,
                          "pitch": 81.71
                         }
                        ],
                        "id": "overlay_6DD8383F_79BB_D02D_41D2_D50464D14E5B",
                        "useHandCursor": true,
                        "enabledInCardboard": true,
                        "rollOverDisplay": true,
                        "class": "HotspotPanoramaOverlay",
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_6DB5C970_79BA_B033_41B3_DB68D7553251, this.camera_765BAB6E_7A37_20E4_41AB_05DA4842F21C); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 4)"
                         }
                        ],
                        "items": [
                         {
                          "yaw": -172.21,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 1,
                             "width": 1,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_6DD8F83F_79BB_D02D_41C1_7381B98F4EC9_0_HS_1_0.png"
                            }
                           ]
                          },
                          "hfov": 0,
                          "class": "HotspotPanoramaOverlayImage",
                          "pitch": 81.71
                         }
                        ]
                       },
                       {
                        "maps": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 66,
                             "width": 66,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_6DD8F83F_79BB_D02D_41C1_7381B98F4EC9_0_HS_3_0_0_map.gif"
                            }
                           ]
                          },
                          "hfov": 9.37,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": -142.9,
                          "pitch": 9.48
                         }
                        ],
                        "id": "overlay_6DD8283F_79BB_D02D_41C5_848CE614765E",
                        "useHandCursor": true,
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "class": "HotspotPanoramaOverlay",
                        "areas": [
                         {
                          "displayTooltipInTouchScreens": true,
                          "toolTip": "TERRACE",
                          "click": "this.startPanoramaWithCamera(this.panorama_6B22585C_79DD_D0E6_41DA_F2E1140696C1, this.camera_764D3B7D_7A37_20E4_41BE_0940140A8CF6); this.mainPlayList.set('selectedIndex', 9)",
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "items": [
                         {
                          "yaw": -142.9,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 132,
                             "width": 132,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_6DD8F83F_79BB_D02D_41C1_7381B98F4EC9_0_HS_3_0.png"
                            }
                           ]
                          },
                          "hfov": 9.37,
                          "class": "HotspotPanoramaOverlayImage",
                          "pitch": 9.48
                         }
                        ]
                       },
                       {
                        "maps": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 66,
                             "width": 66,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_6DD8F83F_79BB_D02D_41C1_7381B98F4EC9_0_HS_4_0_0_map.gif"
                            }
                           ]
                          },
                          "hfov": 8.06,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": -142.86,
                          "pitch": -31.97
                         }
                        ],
                        "id": "overlay_6DD8183F_79BB_D02D_41DB_AEB93B902256",
                        "useHandCursor": true,
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "class": "HotspotPanoramaOverlay",
                        "areas": [
                         {
                          "displayTooltipInTouchScreens": true,
                          "toolTip": "MASTER BEDROOM",
                          "click": "this.startPanoramaWithCamera(this.panorama_71FF85F2_7A29_3A8D_41D1_1989B1CBF663, this.camera_763EEB0B_7A37_202C_41B0_31C1812E863D); this.mainPlayList.set('selectedIndex', 5)",
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "items": [
                         {
                          "yaw": -142.86,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 132,
                             "width": 132,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_6DD8F83F_79BB_D02D_41C1_7381B98F4EC9_0_HS_4_0.png"
                            }
                           ]
                          },
                          "hfov": 8.06,
                          "class": "HotspotPanoramaOverlayImage",
                          "pitch": -31.97
                         }
                        ]
                       }
                      ],
                      "sphere": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "height": 2500,
                         "width": 5000,
                         "class": "ImageResourceLevel",
                         "url": "media/panorama_6DD8F83F_79BB_D02D_41C1_7381B98F4EC9_hq.jpeg"
                        },
                        {
                         "height": 1608,
                         "width": 3217,
                         "class": "ImageResourceLevel",
                         "url": "media/panorama_6DD8F83F_79BB_D02D_41C1_7381B98F4EC9.jpeg"
                        }
                       ]
                      }
                     }
                    ],
                    "hfov": 360,
                    "adjacentPanoramas": [
                     {
                      "panorama": "this.panorama_71FF85F2_7A29_3A8D_41D1_1989B1CBF663",
                      "class": "AdjacentPanorama",
                      "yaw": -142.86,
                      "backwardYaw": 34.69,
                      "distance": 1
                     },
                     {
                      "panorama": "this.panorama_70DC40A9_7A29_7A9F_41D4_27043CED2E2C",
                      "class": "AdjacentPanorama",
                      "yaw": -172.21,
                      "backwardYaw": -172.22,
                      "distance": 1
                     },
                     {
                      "panorama": "this.panorama_6DAC5AE5_79BB_D05D_41CB_9B546369B6F6",
                      "class": "AdjacentPanorama",
                      "yaw": -172.21,
                      "backwardYaw": -162.92,
                      "distance": 1
                     },
                     {
                      "panorama": "this.panorama_6DAC16C5_79BB_B05D_41D7_EDBC71F4C6C8",
                      "class": "AdjacentPanorama",
                      "yaw": -172.21,
                      "backwardYaw": -170.58,
                      "distance": 1
                     },
                     {
                      "panorama": "this.panorama_6DB90FEC_79BA_D053_41D5_C81A38608579",
                      "class": "AdjacentPanorama",
                      "yaw": -172.21,
                      "backwardYaw": -171.96,
                      "distance": 1
                     },
                     {
                      "panorama": "this.panorama_6D549EA0_79BD_70D4_4193_31B8574E4194",
                      "class": "AdjacentPanorama",
                      "yaw": -172.21,
                      "backwardYaw": -171.35,
                      "distance": 1
                     },
                     {
                      "panorama": {
                       "hfovMax": 120,
                       "partial": false,
                       "pitch": 0,
                       "thumbnailUrl": "media/panorama_6DB4B6E3_79BB_5055_41CF_3466DC5DDA74_t.jpg",
                       "class": "Panorama",
                       "id": "panorama_6DB4B6E3_79BB_5055_41CF_3466DC5DDA74",
                       "hfovMin": 100,
                       "label": "SINGLE BR",
                       "frames": [
                        {
                         "thumbnailUrl": "media/panorama_6DB4B6E3_79BB_5055_41CF_3466DC5DDA74_t.jpg",
                         "class": "SphericPanoramaFrame",
                         "overlays": [
                          {
                           "maps": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 46,
                                "width": 45,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_6DB4B6E3_79BB_5055_41CF_3466DC5DDA74_0_HS_0_0_0_map.gif"
                               }
                              ]
                             },
                             "hfov": 6.59,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": -157.01,
                             "pitch": 5.5
                            }
                           ],
                           "id": "overlay_6DB4A6E3_79BB_5055_41DB_F1F07CEFBEDD",
                           "useHandCursor": true,
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "displayTooltipInTouchScreens": true,
                             "toolTip": "MASTER BEDROOM\u000a",
                             "click": "this.startPanoramaWithCamera(this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF, this.camera_55D7BBEA_5BF2_F263_41D2_B1CC2C57A60F); this.mainPlayList.set('selectedIndex', 5)",
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "items": [
                            {
                             "yaw": -157.01,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 92,
                                "width": 91,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_6DB4B6E3_79BB_5055_41CF_3466DC5DDA74_0_HS_0_0.png"
                               }
                              ]
                             },
                             "hfov": 6.59,
                             "class": "HotspotPanoramaOverlayImage",
                             "pitch": 5.5
                            }
                           ]
                          },
                          {
                           "maps": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 46,
                                "width": 45,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_6DB4B6E3_79BB_5055_41CF_3466DC5DDA74_0_HS_2_0_0_map.gif"
                               }
                              ]
                             },
                             "hfov": 5.88,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": -157.03,
                             "pitch": -27.49
                            }
                           ],
                           "id": "overlay_6DB556E3_79BB_5055_41D7_0D967E0277DC",
                           "useHandCursor": true,
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "displayTooltipInTouchScreens": true,
                             "toolTip": "LIVING ROOM",
                             "click": "this.startPanoramaWithCamera(this.panorama_47B53902_572E_CEDF_41CC_C256D31A5443, this.camera_55FFAC21_5BF2_F59B_41D2_A4CCD4BC65CD); this.mainPlayList.set('selectedIndex', 3)",
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "items": [
                            {
                             "yaw": -157.03,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 92,
                                "width": 91,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_6DB4B6E3_79BB_5055_41CF_3466DC5DDA74_0_HS_2_0.png"
                               }
                              ]
                             },
                             "hfov": 5.88,
                             "class": "HotspotPanoramaOverlayImage",
                             "pitch": -27.49
                            }
                           ]
                          },
                          {
                           "maps": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 1,
                                "width": 1,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_6DB4B6E3_79BB_5055_41CF_3466DC5DDA74_0_HS_1_0_0_map.gif"
                               }
                              ]
                             },
                             "hfov": 0,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": -170.2,
                             "pitch": 81.21
                            }
                           ],
                           "id": "overlay_6DB576E3_79BB_5055_41C1_92F6BB5D017F",
                           "useHandCursor": true,
                           "enabledInCardboard": true,
                           "rollOverDisplay": true,
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_6B22585C_79DD_D0E6_41DA_F2E1140696C1, this.camera_76CF6BEE_7A37_27E4_41D1_D3AF9B146A7E); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 8); this.mainPlayList.set('selectedIndex', 9)"
                            }
                           ],
                           "items": [
                            {
                             "yaw": -170.2,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 1,
                                "width": 1,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_6DB4B6E3_79BB_5055_41CF_3466DC5DDA74_0_HS_1_0.png"
                               }
                              ]
                             },
                             "hfov": 0,
                             "class": "HotspotPanoramaOverlayImage",
                             "pitch": 81.21
                            }
                           ]
                          },
                          {
                           "maps": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 66,
                                "width": 66,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_6DB4B6E3_79BB_5055_41CF_3466DC5DDA74_0_HS_3_0_0_map.gif"
                               }
                              ]
                             },
                             "hfov": 9.45,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": -157,
                             "pitch": 6.18
                            }
                           ],
                           "id": "overlay_6DB566E3_79BB_5055_41D2_B766BE362F1D",
                           "useHandCursor": true,
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "displayTooltipInTouchScreens": true,
                             "toolTip": "MASTER BEDROOM",
                             "click": "this.startPanoramaWithCamera(this.panorama_71FF85F2_7A29_3A8D_41D1_1989B1CBF663, this.camera_76BEFB8C_7A37_2024_41D8_34C65F31E4DD); this.mainPlayList.set('selectedIndex', 5)",
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "items": [
                            {
                             "yaw": -157,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 132,
                                "width": 132,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_6DB4B6E3_79BB_5055_41CF_3466DC5DDA74_0_HS_3_0.png"
                               }
                              ]
                             },
                             "hfov": 9.45,
                             "class": "HotspotPanoramaOverlayImage",
                             "pitch": 6.18
                            }
                           ]
                          },
                          {
                           "maps": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 66,
                                "width": 66,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_6DB4B6E3_79BB_5055_41CF_3466DC5DDA74_0_HS_4_0_0_map.gif"
                               }
                              ]
                             },
                             "hfov": 8.38,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": -157.02,
                             "pitch": -28.2
                            }
                           ],
                           "id": "overlay_6DB506E3_79BB_5055_41A1_DFA126915A80",
                           "useHandCursor": true,
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "displayTooltipInTouchScreens": true,
                             "toolTip": "LIVING ROOM",
                             "click": "this.startPanoramaWithCamera(this.panorama_6DB90FEC_79BA_D053_41D5_C81A38608579, this.camera_76F69BC4_7A37_2024_41D2_DEFC5D8F875C); this.mainPlayList.set('selectedIndex', 3)",
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "items": [
                            {
                             "yaw": -157.02,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 132,
                                "width": 132,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_6DB4B6E3_79BB_5055_41CF_3466DC5DDA74_0_HS_4_0.png"
                               }
                              ]
                             },
                             "hfov": 8.38,
                             "class": "HotspotPanoramaOverlayImage",
                             "pitch": -28.2
                            }
                           ]
                          }
                         ],
                         "sphere": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "height": 2500,
                            "width": 5000,
                            "class": "ImageResourceLevel",
                            "url": "media/panorama_6DB4B6E3_79BB_5055_41CF_3466DC5DDA74_hq.jpeg"
                           },
                           {
                            "height": 1608,
                            "width": 3217,
                            "class": "ImageResourceLevel",
                            "url": "media/panorama_6DB4B6E3_79BB_5055_41CF_3466DC5DDA74.jpeg"
                           }
                          ]
                         }
                        }
                       ],
                       "hfov": 360,
                       "adjacentPanoramas": [
                        {
                         "panorama": "this.panorama_71FF85F2_7A29_3A8D_41D1_1989B1CBF663",
                         "class": "AdjacentPanorama",
                         "yaw": -157,
                         "backwardYaw": 34.72,
                         "distance": 1
                        },
                        {
                         "panorama": "this.panorama_70DC40A9_7A29_7A9F_41D4_27043CED2E2C",
                         "class": "AdjacentPanorama",
                         "yaw": -170.2,
                         "backwardYaw": -172.22,
                         "distance": 1
                        },
                        {
                         "panorama": "this.panorama_6DAC5AE5_79BB_D05D_41CB_9B546369B6F6",
                         "class": "AdjacentPanorama",
                         "yaw": -170.2,
                         "backwardYaw": -162.92,
                         "distance": 1
                        },
                        {
                         "panorama": "this.panorama_6DAC16C5_79BB_B05D_41D7_EDBC71F4C6C8",
                         "class": "AdjacentPanorama",
                         "yaw": -170.2,
                         "backwardYaw": -170.58,
                         "distance": 1
                        },
                        {
                         "panorama": "this.panorama_6DB90FEC_79BA_D053_41D5_C81A38608579",
                         "class": "AdjacentPanorama",
                         "yaw": -157.02,
                         "backwardYaw": 42.02,
                         "distance": 1
                        },
                        {
                         "panorama": "this.panorama_6D549EA0_79BD_70D4_4193_31B8574E4194",
                         "class": "AdjacentPanorama",
                         "yaw": -170.2,
                         "backwardYaw": -171.35,
                         "distance": 1
                        },
                        {
                         "panorama": "this.panorama_6DD8F83F_79BB_D02D_41C1_7381B98F4EC9",
                         "class": "AdjacentPanorama",
                         "yaw": -170.2,
                         "backwardYaw": -172.21,
                         "distance": 1
                        },
                        {
                         "panorama": {
                          "hfovMax": 120,
                          "partial": false,
                          "pitch": 0,
                          "thumbnailUrl": "media/panorama_6DB5C970_79BA_B033_41B3_DB68D7553251_t.jpg",
                          "class": "Panorama",
                          "id": "panorama_6DB5C970_79BA_B033_41B3_DB68D7553251",
                          "hfovMin": 100,
                          "label": "ENTRANCE",
                          "frames": [
                           {
                            "thumbnailUrl": "media/panorama_6DB5C970_79BA_B033_41B3_DB68D7553251_t.jpg",
                            "class": "SphericPanoramaFrame",
                            "overlays": [
                             {
                              "maps": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 34,
                                   "width": 34,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_6DB5C970_79BA_B033_41B3_DB68D7553251_0_HS_0_0_0_map.gif"
                                  }
                                 ]
                                },
                                "hfov": 4.97,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": -16.79,
                                "pitch": -9.28
                               }
                              ],
                              "id": "overlay_6DB5D970_79BA_B033_41DD_B25DF9C8DD09",
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "displayTooltipInTouchScreens": true,
                                "toolTip": "POOL",
                                "click": "this.startPanoramaWithCamera(this.panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D, this.camera_55581C8B_5BF2_F6AF_41D1_02AAAFF73E03); this.mainPlayList.set('selectedIndex', 2)",
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "items": [
                               {
                                "yaw": -16.79,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 69,
                                   "width": 69,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_6DB5C970_79BA_B033_41B3_DB68D7553251_0_HS_0_0.png"
                                  }
                                 ]
                                },
                                "hfov": 4.97,
                                "class": "HotspotPanoramaOverlayImage",
                                "pitch": -9.28
                               }
                              ]
                             },
                             {
                              "maps": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 34,
                                   "width": 34,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_6DB5C970_79BA_B033_41B3_DB68D7553251_0_HS_6_0_0_map.gif"
                                  }
                                 ]
                                },
                                "hfov": 4.56,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": 0.94,
                                "pitch": -25.17
                               }
                              ],
                              "id": "overlay_6DB5E970_79BA_B033_41CD_FA483B9F5B25",
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "displayTooltipInTouchScreens": true,
                                "toolTip": "STREET VIEW",
                                "click": "this.startPanoramaWithCamera(this.panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E, this.camera_55602CAB_5BF2_F6EF_41A1_3BA349C88636); this.mainPlayList.set('selectedIndex', 0)",
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "items": [
                               {
                                "yaw": 0.94,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 69,
                                   "width": 69,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_6DB5C970_79BA_B033_41B3_DB68D7553251_0_HS_6_0.png"
                                  }
                                 ]
                                },
                                "hfov": 4.56,
                                "class": "HotspotPanoramaOverlayImage",
                                "pitch": -25.17
                               }
                              ]
                             },
                             {
                              "maps": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 1,
                                   "width": 1,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_6DB5C970_79BA_B033_41B3_DB68D7553251_0_HS_1_0_0_map.gif"
                                  }
                                 ]
                                },
                                "hfov": 0,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": -170.68,
                                "pitch": 83.2
                               }
                              ],
                              "id": "overlay_6DB5F970_79BA_B033_41AC_EAA588CCE326",
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "rollOverDisplay": true,
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_6B22585C_79DD_D0E6_41DA_F2E1140696C1, this.camera_77417C45_7A37_2024_4197_015EFEB8F42E); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 5); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 8)"
                               }
                              ],
                              "items": [
                               {
                                "yaw": -170.68,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 1,
                                   "width": 1,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_6DB5C970_79BA_B033_41B3_DB68D7553251_0_HS_1_0.png"
                                  }
                                 ]
                                },
                                "hfov": 0,
                                "class": "HotspotPanoramaOverlayImage",
                                "pitch": 83.2
                               }
                              ]
                             },
                             {
                              "maps": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 50,
                                   "width": 50,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_6DB5C970_79BA_B033_41B3_DB68D7553251_0_HS_7_0_0_map.gif"
                                  }
                                 ]
                                },
                                "hfov": 7.12,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": -16.8,
                                "pitch": -8.74
                               }
                              ],
                              "id": "overlay_6DB61970_79BA_B033_41D6_1B900A781FAA",
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "displayTooltipInTouchScreens": true,
                                "toolTip": "POOL",
                                "click": "this.startPanoramaWithCamera(this.panorama_70DC40A9_7A29_7A9F_41D4_27043CED2E2C, this.camera_77233C02_7A37_201C_419F_BCC827E0B229); this.mainPlayList.set('selectedIndex', 2)",
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "items": [
                               {
                                "yaw": -16.8,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 100,
                                   "width": 100,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_6DB5C970_79BA_B033_41B3_DB68D7553251_0_HS_7_0.png"
                                  }
                                 ]
                                },
                                "hfov": 7.12,
                                "class": "HotspotPanoramaOverlayImage",
                                "pitch": -8.74
                               }
                              ]
                             },
                             {
                              "maps": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 50,
                                   "width": 50,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_6DB5C970_79BA_B033_41B3_DB68D7553251_0_HS_8_0_0_map.gif"
                                  }
                                 ]
                                },
                                "hfov": 6.54,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": 0.93,
                                "pitch": -24.65
                               }
                              ],
                              "id": "overlay_6DB63970_79BA_B033_41CF_FDADB212E27C",
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "displayTooltipInTouchScreens": true,
                                "toolTip": "STREET VIEW",
                                "click": "this.startPanoramaWithCamera(this.panorama_6D549EA0_79BD_70D4_4193_31B8574E4194, this.camera_777A4C28_7A37_206C_41C1_326DD8134F94); this.mainPlayList.set('selectedIndex', 0)",
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "items": [
                               {
                                "yaw": 0.93,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 100,
                                   "width": 100,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_6DB5C970_79BA_B033_41B3_DB68D7553251_0_HS_8_0.png"
                                  }
                                 ]
                                },
                                "hfov": 6.54,
                                "class": "HotspotPanoramaOverlayImage",
                                "pitch": -24.65
                               }
                              ]
                             }
                            ],
                            "sphere": {
                             "class": "ImageResource",
                             "levels": [
                              {
                               "height": 2500,
                               "width": 5000,
                               "class": "ImageResourceLevel",
                               "url": "media/panorama_6DB5C970_79BA_B033_41B3_DB68D7553251_hq.jpeg"
                              },
                              {
                               "height": 1608,
                               "width": 3217,
                               "class": "ImageResourceLevel",
                               "url": "media/panorama_6DB5C970_79BA_B033_41B3_DB68D7553251.jpeg"
                              }
                             ]
                            }
                           }
                          ],
                          "hfov": 360,
                          "adjacentPanoramas": [
                           {
                            "panorama": "this.panorama_71FF85F2_7A29_3A8D_41D1_1989B1CBF663",
                            "class": "AdjacentPanorama",
                            "yaw": -170.68,
                            "backwardYaw": -162.92,
                            "distance": 1
                           },
                           {
                            "panorama": "this.panorama_70DC40A9_7A29_7A9F_41D4_27043CED2E2C",
                            "class": "AdjacentPanorama",
                            "yaw": -16.8,
                            "backwardYaw": -97.22,
                            "distance": 1
                           },
                           {
                            "panorama": "this.panorama_6DAC5AE5_79BB_D05D_41CB_9B546369B6F6",
                            "class": "AdjacentPanorama",
                            "yaw": -170.68,
                            "backwardYaw": -162.92,
                            "distance": 1
                           },
                           {
                            "panorama": "this.panorama_6DAC16C5_79BB_B05D_41D7_EDBC71F4C6C8",
                            "class": "AdjacentPanorama",
                            "yaw": -170.68,
                            "backwardYaw": -170.58,
                            "distance": 1
                           },
                           {
                            "panorama": "this.panorama_6DB90FEC_79BA_D053_41D5_C81A38608579",
                            "class": "AdjacentPanorama",
                            "yaw": -170.68,
                            "backwardYaw": -171.96,
                            "distance": 1
                           },
                           {
                            "panorama": "this.panorama_6D549EA0_79BD_70D4_4193_31B8574E4194",
                            "class": "AdjacentPanorama",
                            "yaw": 0.93,
                            "backwardYaw": 140.49,
                            "distance": 1
                           },
                           {
                            "panorama": "this.panorama_6DD8F83F_79BB_D02D_41C1_7381B98F4EC9",
                            "class": "AdjacentPanorama",
                            "yaw": -170.68,
                            "backwardYaw": -172.21,
                            "distance": 1
                           },
                           {
                            "panorama": "this.panorama_6DB4B6E3_79BB_5055_41CF_3466DC5DDA74",
                            "class": "AdjacentPanorama",
                            "yaw": -170.68,
                            "backwardYaw": -170.2,
                            "distance": 1
                           },
                           {
                            "panorama": {
                             "hfovMax": 120,
                             "partial": false,
                             "pitch": 0,
                             "thumbnailUrl": "media/panorama_6B22585C_79DD_D0E6_41DA_F2E1140696C1_t.jpg",
                             "class": "Panorama",
                             "id": "panorama_6B22585C_79DD_D0E6_41DA_F2E1140696C1",
                             "hfovMin": 100,
                             "label": "TERRACE",
                             "frames": [
                              {
                               "thumbnailUrl": "media/panorama_6B22585C_79DD_D0E6_41DA_F2E1140696C1_t.jpg",
                               "class": "SphericPanoramaFrame",
                               "overlays": [
                                {
                                 "maps": [
                                  {
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 41,
                                      "width": 41,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_6B22585C_79DD_D0E6_41DA_F2E1140696C1_0_HS_6_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "hfov": 5.63,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": 18.93,
                                   "pitch": -20.35
                                  }
                                 ],
                                 "id": "overlay_6B22685C_79DD_D0E6_41D0_FFB330D6FF73",
                                 "useHandCursor": true,
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "displayTooltipInTouchScreens": true,
                                   "toolTip": "TWIN BEDROOM",
                                   "click": "this.startPanoramaWithCamera(this.panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D, this.camera_5488DF3C_5BF2_F3E9_41D1_C652E087859B); this.mainPlayList.set('selectedIndex', 8)",
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "yaw": 18.93,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 83,
                                      "width": 83,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_6B22585C_79DD_D0E6_41DA_F2E1140696C1_0_HS_6_0.png"
                                     }
                                    ]
                                   },
                                   "hfov": 5.63,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "pitch": -20.35
                                  }
                                 ]
                                },
                                {
                                 "maps": [
                                  {
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 1,
                                      "width": 1,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_6B22585C_79DD_D0E6_41DA_F2E1140696C1_0_HS_5_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "hfov": 0,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": -173.12,
                                   "pitch": 85.84
                                  }
                                 ],
                                 "id": "overlay_6B22985C_79DD_D0E6_41BF_F9A75DF9D7CE",
                                 "useHandCursor": true,
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": true,
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.startPanoramaWithCamera(this.panorama_6DB5C970_79BA_B033_41B3_DB68D7553251, this.camera_7080ECCB_7A37_202C_41C7_E473E9AC03ED); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 5); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 4)"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "yaw": -173.12,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 1,
                                      "width": 1,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_6B22585C_79DD_D0E6_41DA_F2E1140696C1_0_HS_5_0.png"
                                     }
                                    ]
                                   },
                                   "hfov": 0,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "pitch": 85.84
                                  }
                                 ]
                                },
                                {
                                 "maps": [
                                  {
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 60,
                                      "width": 60,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_6B22585C_79DD_D0E6_41DA_F2E1140696C1_0_HS_7_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "hfov": 8.07,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": 18.94,
                                   "pitch": -21.01
                                  }
                                 ],
                                 "id": "overlay_6B22B85C_79DD_D0E6_41CF_CDD28D9B94F9",
                                 "useHandCursor": true,
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "displayTooltipInTouchScreens": true,
                                   "toolTip": "TWIN BEDROOM",
                                   "click": "this.startPanoramaWithCamera(this.panorama_6DD8F83F_79BB_D02D_41C1_7381B98F4EC9, this.camera_709B5CB8_7A37_206C_41C3_07E9319E5E16); this.mainPlayList.set('selectedIndex', 8)",
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "yaw": 18.94,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 120,
                                      "width": 120,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_6B22585C_79DD_D0E6_41DA_F2E1140696C1_0_HS_7_0.png"
                                     }
                                    ]
                                   },
                                   "hfov": 8.07,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "pitch": -21.01
                                  }
                                 ]
                                }
                               ],
                               "sphere": {
                                "class": "ImageResource",
                                "levels": [
                                 {
                                  "height": 2500,
                                  "width": 5000,
                                  "class": "ImageResourceLevel",
                                  "url": "media/panorama_6B22585C_79DD_D0E6_41DA_F2E1140696C1_hq.jpeg"
                                 },
                                 {
                                  "height": 1608,
                                  "width": 3217,
                                  "class": "ImageResourceLevel",
                                  "url": "media/panorama_6B22585C_79DD_D0E6_41DA_F2E1140696C1.jpeg"
                                 }
                                ]
                               }
                              }
                             ],
                             "hfov": 360,
                             "adjacentPanoramas": [
                              {
                               "panorama": "this.panorama_71FF85F2_7A29_3A8D_41D1_1989B1CBF663",
                               "class": "AdjacentPanorama",
                               "yaw": -173.12,
                               "backwardYaw": -162.92,
                               "distance": 1
                              },
                              {
                               "panorama": "this.panorama_70DC40A9_7A29_7A9F_41D4_27043CED2E2C",
                               "class": "AdjacentPanorama",
                               "yaw": -173.12,
                               "backwardYaw": -172.22,
                               "distance": 1
                              },
                              {
                               "panorama": "this.panorama_6DAC5AE5_79BB_D05D_41CB_9B546369B6F6",
                               "class": "AdjacentPanorama",
                               "yaw": -173.12,
                               "backwardYaw": -162.92,
                               "distance": 1
                              },
                              {
                               "panorama": "this.panorama_6DAC16C5_79BB_B05D_41D7_EDBC71F4C6C8",
                               "class": "AdjacentPanorama",
                               "yaw": -173.12,
                               "backwardYaw": -170.58,
                               "distance": 1
                              },
                              {
                               "panorama": "this.panorama_6DB90FEC_79BA_D053_41D5_C81A38608579",
                               "class": "AdjacentPanorama",
                               "yaw": -173.12,
                               "backwardYaw": -171.96,
                               "distance": 1
                              },
                              {
                               "panorama": "this.panorama_6D549EA0_79BD_70D4_4193_31B8574E4194",
                               "class": "AdjacentPanorama",
                               "yaw": -173.12,
                               "backwardYaw": -171.35,
                               "distance": 1
                              },
                              {
                               "panorama": "this.panorama_6DD8F83F_79BB_D02D_41C1_7381B98F4EC9",
                               "class": "AdjacentPanorama",
                               "yaw": 18.94,
                               "backwardYaw": -142.9,
                               "distance": 1
                              },
                              {
                               "panorama": "this.panorama_6DB4B6E3_79BB_5055_41CF_3466DC5DDA74",
                               "class": "AdjacentPanorama",
                               "yaw": -173.12,
                               "backwardYaw": -170.2,
                               "distance": 1
                              },
                              {
                               "panorama": "this.panorama_6DB5C970_79BA_B033_41B3_DB68D7553251",
                               "class": "AdjacentPanorama",
                               "yaw": -173.12,
                               "backwardYaw": -170.68,
                               "distance": 1
                              }
                             ],
                             "vfov": 180
                            },
                            "class": "AdjacentPanorama",
                            "yaw": -170.68,
                            "backwardYaw": -173.12,
                            "distance": 1
                           }
                          ],
                          "vfov": 180
                         },
                         "class": "AdjacentPanorama",
                         "yaw": -170.2,
                         "backwardYaw": -170.68,
                         "distance": 1
                        },
                        {
                         "panorama": "this.panorama_6B22585C_79DD_D0E6_41DA_F2E1140696C1",
                         "class": "AdjacentPanorama",
                         "yaw": -170.2,
                         "backwardYaw": -173.12,
                         "distance": 1
                        }
                       ],
                       "vfov": 180
                      },
                      "class": "AdjacentPanorama",
                      "yaw": -172.21,
                      "backwardYaw": -170.2,
                      "distance": 1
                     },
                     {
                      "panorama": "this.panorama_6DB5C970_79BA_B033_41B3_DB68D7553251",
                      "class": "AdjacentPanorama",
                      "yaw": -172.21,
                      "backwardYaw": -170.68,
                      "distance": 1
                     },
                     {
                      "panorama": "this.panorama_6B22585C_79DD_D0E6_41DA_F2E1140696C1",
                      "class": "AdjacentPanorama",
                      "yaw": -142.9,
                      "backwardYaw": 18.94,
                      "distance": 1
                     }
                    ],
                    "vfov": 180
                   },
                   "class": "AdjacentPanorama",
                   "yaw": -171.96,
                   "backwardYaw": -172.21,
                   "distance": 1
                  },
                  {
                   "panorama": "this.panorama_6DB4B6E3_79BB_5055_41CF_3466DC5DDA74",
                   "class": "AdjacentPanorama",
                   "yaw": 42.02,
                   "backwardYaw": -157.02,
                   "distance": 1
                  },
                  {
                   "panorama": "this.panorama_6DB5C970_79BA_B033_41B3_DB68D7553251",
                   "class": "AdjacentPanorama",
                   "yaw": -171.96,
                   "backwardYaw": -170.68,
                   "distance": 1
                  },
                  {
                   "panorama": "this.panorama_6B22585C_79DD_D0E6_41DA_F2E1140696C1",
                   "class": "AdjacentPanorama",
                   "yaw": -171.96,
                   "backwardYaw": -173.12,
                   "distance": 1
                  }
                 ],
                 "vfov": 180
                },
                "class": "AdjacentPanorama",
                "yaw": -170.58,
                "backwardYaw": -171.96,
                "distance": 1
               },
               {
                "panorama": "this.panorama_6D549EA0_79BD_70D4_4193_31B8574E4194",
                "class": "AdjacentPanorama",
                "yaw": -170.58,
                "backwardYaw": -171.35,
                "distance": 1
               },
               {
                "panorama": "this.panorama_6DD8F83F_79BB_D02D_41C1_7381B98F4EC9",
                "class": "AdjacentPanorama",
                "yaw": -170.58,
                "backwardYaw": -172.21,
                "distance": 1
               },
               {
                "panorama": "this.panorama_6DB4B6E3_79BB_5055_41CF_3466DC5DDA74",
                "class": "AdjacentPanorama",
                "yaw": -170.58,
                "backwardYaw": -170.2,
                "distance": 1
               },
               {
                "panorama": "this.panorama_6DB5C970_79BA_B033_41B3_DB68D7553251",
                "class": "AdjacentPanorama",
                "yaw": -170.58,
                "backwardYaw": -170.68,
                "distance": 1
               },
               {
                "panorama": "this.panorama_6B22585C_79DD_D0E6_41DA_F2E1140696C1",
                "class": "AdjacentPanorama",
                "yaw": -170.58,
                "backwardYaw": -173.12,
                "distance": 1
               }
              ],
              "vfov": 180
             },
             "class": "AdjacentPanorama",
             "yaw": -162.92,
             "backwardYaw": -170.58,
             "distance": 1
            },
            {
             "panorama": "this.panorama_6DB90FEC_79BA_D053_41D5_C81A38608579",
             "class": "AdjacentPanorama",
             "yaw": -162.92,
             "backwardYaw": -171.96,
             "distance": 1
            },
            {
             "panorama": "this.panorama_6D549EA0_79BD_70D4_4193_31B8574E4194",
             "class": "AdjacentPanorama",
             "yaw": -162.92,
             "backwardYaw": -171.35,
             "distance": 1
            },
            {
             "panorama": "this.panorama_6DD8F83F_79BB_D02D_41C1_7381B98F4EC9",
             "class": "AdjacentPanorama",
             "yaw": -162.92,
             "backwardYaw": -172.21,
             "distance": 1
            },
            {
             "panorama": "this.panorama_6DB4B6E3_79BB_5055_41CF_3466DC5DDA74",
             "class": "AdjacentPanorama",
             "yaw": -162.92,
             "backwardYaw": -170.2,
             "distance": 1
            },
            {
             "panorama": "this.panorama_6DB5C970_79BA_B033_41B3_DB68D7553251",
             "class": "AdjacentPanorama",
             "yaw": -162.92,
             "backwardYaw": -170.68,
             "distance": 1
            },
            {
             "panorama": "this.panorama_6B22585C_79DD_D0E6_41DA_F2E1140696C1",
             "class": "AdjacentPanorama",
             "yaw": -162.92,
             "backwardYaw": -173.12,
             "distance": 1
            }
           ],
           "vfov": 180
          },
          "class": "AdjacentPanorama",
          "yaw": -172.22,
          "backwardYaw": -162.92,
          "distance": 1
         },
         {
          "panorama": "this.panorama_6DAC16C5_79BB_B05D_41D7_EDBC71F4C6C8",
          "class": "AdjacentPanorama",
          "yaw": -172.22,
          "backwardYaw": -170.58,
          "distance": 1
         },
         {
          "panorama": "this.panorama_6DB90FEC_79BA_D053_41D5_C81A38608579",
          "class": "AdjacentPanorama",
          "yaw": 12.06,
          "backwardYaw": -176.8,
          "distance": 1
         },
         {
          "panorama": "this.panorama_6D549EA0_79BD_70D4_4193_31B8574E4194",
          "class": "AdjacentPanorama",
          "yaw": -172.22,
          "backwardYaw": -171.35,
          "distance": 1
         },
         {
          "panorama": "this.panorama_6DD8F83F_79BB_D02D_41C1_7381B98F4EC9",
          "class": "AdjacentPanorama",
          "yaw": -172.22,
          "backwardYaw": -172.21,
          "distance": 1
         },
         {
          "panorama": "this.panorama_6DB4B6E3_79BB_5055_41CF_3466DC5DDA74",
          "class": "AdjacentPanorama",
          "yaw": -172.22,
          "backwardYaw": -170.2,
          "distance": 1
         },
         {
          "panorama": "this.panorama_6DB5C970_79BA_B033_41B3_DB68D7553251",
          "class": "AdjacentPanorama",
          "yaw": -97.22,
          "backwardYaw": -16.8,
          "distance": 1
         },
         {
          "panorama": "this.panorama_6B22585C_79DD_D0E6_41DA_F2E1140696C1",
          "class": "AdjacentPanorama",
          "yaw": -172.22,
          "backwardYaw": -173.12,
          "distance": 1
         }
        ],
        "vfov": 180
       },
       "class": "AdjacentPanorama",
       "yaw": -162.92,
       "backwardYaw": -172.22,
       "distance": 1
      },
      {
       "panorama": "this.panorama_6DAC5AE5_79BB_D05D_41CB_9B546369B6F6",
       "class": "AdjacentPanorama",
       "yaw": 82.9,
       "backwardYaw": 161.78,
       "distance": 1
      },
      {
       "panorama": "this.panorama_6DAC16C5_79BB_B05D_41D7_EDBC71F4C6C8",
       "class": "AdjacentPanorama",
       "yaw": -178.2,
       "backwardYaw": -174.39,
       "distance": 1
      },
      {
       "panorama": "this.panorama_6DB90FEC_79BA_D053_41D5_C81A38608579",
       "class": "AdjacentPanorama",
       "yaw": -162.92,
       "backwardYaw": -171.96,
       "distance": 1
      },
      {
       "panorama": "this.panorama_6D549EA0_79BD_70D4_4193_31B8574E4194",
       "class": "AdjacentPanorama",
       "yaw": -162.92,
       "backwardYaw": -171.35,
       "distance": 1
      },
      {
       "panorama": "this.panorama_6DD8F83F_79BB_D02D_41C1_7381B98F4EC9",
       "class": "AdjacentPanorama",
       "yaw": 34.69,
       "backwardYaw": -142.86,
       "distance": 1
      },
      {
       "panorama": "this.panorama_6DB4B6E3_79BB_5055_41CF_3466DC5DDA74",
       "class": "AdjacentPanorama",
       "yaw": 34.72,
       "backwardYaw": -157,
       "distance": 1
      },
      {
       "panorama": "this.panorama_6DB5C970_79BA_B033_41B3_DB68D7553251",
       "class": "AdjacentPanorama",
       "yaw": -162.92,
       "backwardYaw": -170.68,
       "distance": 1
      },
      {
       "panorama": "this.panorama_6B22585C_79DD_D0E6_41DA_F2E1140696C1",
       "class": "AdjacentPanorama",
       "yaw": -162.92,
       "backwardYaw": -173.12,
       "distance": 1
      }
     ],
     "vfov": 180
    },
    "class": "AdjacentPanorama",
    "yaw": -171.35,
    "backwardYaw": -162.92,
    "distance": 1
   },
   {
    "panorama": "this.panorama_70DC40A9_7A29_7A9F_41D4_27043CED2E2C",
    "class": "AdjacentPanorama",
    "yaw": -171.35,
    "backwardYaw": -172.22,
    "distance": 1
   },
   {
    "panorama": "this.panorama_6DAC5AE5_79BB_D05D_41CB_9B546369B6F6",
    "class": "AdjacentPanorama",
    "yaw": -171.35,
    "backwardYaw": -162.92,
    "distance": 1
   },
   {
    "panorama": "this.panorama_6DAC16C5_79BB_B05D_41D7_EDBC71F4C6C8",
    "class": "AdjacentPanorama",
    "yaw": -171.35,
    "backwardYaw": -170.58,
    "distance": 1
   },
   {
    "panorama": "this.panorama_6DB90FEC_79BA_D053_41D5_C81A38608579",
    "class": "AdjacentPanorama",
    "yaw": -171.35,
    "backwardYaw": -171.96,
    "distance": 1
   },
   {
    "panorama": "this.panorama_6DD8F83F_79BB_D02D_41C1_7381B98F4EC9",
    "class": "AdjacentPanorama",
    "yaw": -171.35,
    "backwardYaw": -172.21,
    "distance": 1
   },
   {
    "panorama": "this.panorama_6DB4B6E3_79BB_5055_41CF_3466DC5DDA74",
    "class": "AdjacentPanorama",
    "yaw": -171.35,
    "backwardYaw": -170.2,
    "distance": 1
   },
   {
    "panorama": "this.panorama_6DB5C970_79BA_B033_41B3_DB68D7553251",
    "class": "AdjacentPanorama",
    "yaw": 140.49,
    "backwardYaw": 0.93,
    "distance": 1
   },
   {
    "panorama": "this.panorama_6B22585C_79DD_D0E6_41DA_F2E1140696C1",
    "class": "AdjacentPanorama",
    "yaw": -171.35,
    "backwardYaw": -173.12,
    "distance": 1
   }
  ],
  "vfov": 180
 },
 {
  "touchControlMode": "drag_rotation",
  "mouseControlMode": "drag_acceleration",
  "displayPlaybackBar": true,
  "buttonToggleHotspots": {
   "verticalAlign": "middle",
   "paddingRight": 0,
   "mode": "toggle",
   "toolTipPaddingRight": 6,
   "paddingLeft": 0,
   "iconURL": "skin/IconButton_80E5955A_8E23_BB05_41CA_43DD61DBAEE9.png",
   "height": "100%",
   "maxWidth": 60,
   "width": "100%",
   "toolTipPaddingBottom": 4,
   "toolTipTextShadowOpacity": 0,
   "transparencyActive": true,
   "toolTipPaddingTop": 4,
   "toolTip": "Hotspots Visibility",
   "class": "IconButton",
   "toolTipFontSize": 11,
   "toolTipShadowOpacity": 1,
   "toolTipOpacity": 0.7,
   "borderSize": 0,
   "toolTipBorderSize": 1,
   "borderRadius": 0,
   "toolTipShadowVerticalLength": 0,
   "toolTipPaddingLeft": 6,
   "toolTipBorderColor": "#767676",
   "toolTipTextShadowColor": "#000000",
   "click": "if(!this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, true, 0, this.effect_CDD059FA_EED0_D223_41DB_70ACFBE986FE, 'showEffect', false) } else if(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, false, 0, this.effect_CDD049FB_EED0_D221_41EB_CA2134B978E0, 'hideEffect', false) }",
   "toolTipFontStyle": "normal",
   "toolTipBorderRadius": 3,
   "minHeight": 1,
   "horizontalAlign": "center",
   "cursor": "hand",
   "paddingBottom": 0,
   "toolTipTextShadowBlurRadius": 3,
   "toolTipBackgroundColor": "#000000",
   "toolTipFontWeight": "normal",
   "id": "IconButton_80E5955A_8E23_BB05_41CA_43DD61DBAEE9",
   "maxHeight": 60,
   "paddingTop": 0,
   "toolTipShadowHorizontalLength": 0,
   "toolTipShadowSpread": 0,
   "toolTipShadowColor": "#333333",
   "toolTipShadowBlurRadius": 3,
   "pressedIconURL": "skin/IconButton_80E5955A_8E23_BB05_41CA_43DD61DBAEE9_pressed.png",
   "backgroundOpacity": 0,
   "toolTipFontColor": "#606060",
   "minWidth": 1,
   "toolTipFontFamily": "Arial",
   "shadow": false
  },
  "buttonCardboardView": {
   "verticalAlign": "middle",
   "paddingRight": 0,
   "mode": "push",
   "paddingLeft": 0,
   "height": "100%",
   "maxWidth": 60,
   "width": "100%",
   "iconURL": "skin/IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37.png",
   "transparencyActive": false,
   "borderRadius": 0,
   "class": "IconButton",
   "borderSize": 0,
   "rollOverIconURL": "skin/IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37_rollover.png",
   "minHeight": 1,
   "horizontalAlign": "center",
   "cursor": "hand",
   "paddingBottom": 0,
   "id": "IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37",
   "maxHeight": 60,
   "paddingTop": 0,
   "pressedIconURL": "skin/IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37_pressed.png",
   "backgroundOpacity": 0,
   "minWidth": 1,
   "shadow": false
  },
  "buttonStop": [
   "this.IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4",
   "this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB"
  ],
  "buttonPlay": "this.IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED",
  "id": "MainViewerPanoramaPlayer",
  "viewerArea": "this.MainViewer",
  "class": "PanoramaPlayer",
  "gyroscopeVerticalDraggingEnabled": true,
  "preloadEnabled": false
 },
 {
  "movementMode": "constrained",
  "class": "MapPlayer",
  "id": "MapViewerMapPlayer",
  "viewerArea": {
   "shadow": false,
   "progressBorderRadius": 0,
   "progressBarBackgroundColorDirection": "vertical",
   "progressBackgroundColor": [
    "#FFFFFF"
   ],
   "paddingRight": 0,
   "playbackBarHeadShadowVerticalLength": 0,
   "progressBarOpacity": 1,
   "toolTipPaddingBottom": 4,
   "playbackBarProgressBackgroundColorDirection": "vertical",
   "progressRight": 0,
   "playbackBarHeadShadowHorizontalLength": 0,
   "toolTipBorderSize": 1,
   "playbackBarBackgroundColor": [
    "#FFFFFF"
   ],
   "paddingLeft": 0,
   "toolTipShadowOpacity": 1,
   "toolTipOpacity": 0.7,
   "playbackBarBorderColor": "#FFFFFF",
   "playbackBarHeight": 10,
   "toolTipShadowVerticalLength": 0,
   "toolTipTextShadowColor": "#000000",
   "playbackBarHeadWidth": 6,
   "toolTipFontStyle": "normal",
   "minHeight": 1,
   "playbackBarProgressBorderSize": 0,
   "playbackBarHeadBackgroundColorDirection": "vertical",
   "progressBottom": 2,
   "paddingBottom": 0,
   "playbackBarRight": 0,
   "toolTipBackgroundColor": "#000000",
   "progressBorderSize": 0,
   "progressBarBorderSize": 0,
   "progressBarBorderRadius": 0,
   "playbackBarOpacity": 1,
   "playbackBarProgressBorderRadius": 0,
   "playbackBarBackgroundColorDirection": "vertical",
   "paddingTop": 0,
   "transitionMode": "blending",
   "toolTipShadowSpread": 0,
   "toolTipShadowColor": "#333333",
   "toolTipShadowBlurRadius": 3,
   "toolTipFontColor": "#606060",
   "minWidth": 1,
   "playbackBarBorderRadius": 0,
   "playbackBarProgressBorderColor": "#000000",
   "playbackBarHeadBackgroundColor": [
    "#111111",
    "#666666"
   ],
   "toolTipPaddingRight": 6,
   "playbackBarHeadBorderRadius": 0,
   "class": "ViewerArea",
   "toolTipTextShadowOpacity": 0,
   "playbackBarHeadShadow": true,
   "toolTipPaddingTop": 4,
   "borderRadius": 0,
   "toolTipFontSize": 11,
   "playbackBarProgressOpacity": 1,
   "progressLeft": 0,
   "borderSize": 0,
   "playbackBarHeadBorderColor": "#000000",
   "progressBackgroundColorRatios": [
    0
   ],
   "playbackBarLeft": 0,
   "playbackBarHeadShadowBlurRadius": 3,
   "toolTipPaddingLeft": 6,
   "toolTipBorderColor": "#767676",
   "playbackBarProgressBackgroundColorRatios": [
    0
   ],
   "playbackBarBackgroundOpacity": 1,
   "playbackBarBorderSize": 0,
   "playbackBarHeadBackgroundColorRatios": [
    0,
    1
   ],
   "playbackBarHeadShadowOpacity": 0.7,
   "playbackBarHeadHeight": 15,
   "top": "10%",
   "toolTipBorderRadius": 3,
   "playbackBarProgressBackgroundColor": [
    "#3399FF"
   ],
   "bottom": "10%",
   "toolTipFontWeight": "normal",
   "id": "MapViewer",
   "playbackBarHeadBorderSize": 0,
   "progressBarBorderColor": "#000000",
   "toolTipShadowHorizontalLength": 0,
   "playbackBarHeadOpacity": 1,
   "toolTipTextShadowBlurRadius": 3,
   "progressBackgroundColorDirection": "vertical",
   "playbackBarHeadShadowColor": "#000000",
   "progressBackgroundOpacity": 1,
   "progressBarBackgroundColorRatios": [
    0
   ],
   "progressHeight": 10,
   "left": "10%",
   "progressBorderColor": "#000000",
   "playbackBarBottom": 0,
   "right": "10%",
   "toolTipFontFamily": "Arial",
   "progressOpacity": 1,
   "progressBarBackgroundColor": [
    "#3399FF"
   ]
  }
 },
 {
  "id": "panorama_6D549EA0_79BD_70D4_4193_31B8574E4194_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "hfov": 120,
   "class": "PanoramaCameraPosition",
   "yaw": 178.1,
   "pitch": 2.83
  }
 },
 "this.panorama_6DB5C970_79BA_B033_41B3_DB68D7553251",
 {
  "id": "panorama_6DB5C970_79BA_B033_41B3_DB68D7553251_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 16.81,
   "pitch": 2.87
  }
 },
 "this.panorama_70DC40A9_7A29_7A9F_41D4_27043CED2E2C",
 {
  "id": "panorama_70DC40A9_7A29_7A9F_41D4_27043CED2E2C_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_6DB90FEC_79BA_D053_41D5_C81A38608579",
 {
  "id": "panorama_6DB90FEC_79BA_D053_41D5_C81A38608579_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_6DB4B6E3_79BB_5055_41CF_3466DC5DDA74",
 {
  "id": "panorama_6DB4B6E3_79BB_5055_41CF_3466DC5DDA74_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_71FF85F2_7A29_3A8D_41D1_1989B1CBF663",
 {
  "id": "panorama_71FF85F2_7A29_3A8D_41D1_1989B1CBF663_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_6DAC16C5_79BB_B05D_41D7_EDBC71F4C6C8",
 {
  "id": "panorama_6DAC16C5_79BB_B05D_41D7_EDBC71F4C6C8_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_6DAC5AE5_79BB_D05D_41CB_9B546369B6F6",
 {
  "id": "panorama_6DAC5AE5_79BB_D05D_41CB_9B546369B6F6_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_6DD8F83F_79BB_D02D_41C1_7381B98F4EC9",
 {
  "id": "panorama_6DD8F83F_79BB_D02D_41C1_7381B98F4EC9_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_6B22585C_79DD_D0E6_41DA_F2E1140696C1",
 {
  "id": "panorama_6B22585C_79DD_D0E6_41DA_F2E1140696C1_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "id": "PanoramaPlayListItem_70C2D86F_7A37_20E4_41D1_9D001AB03BFF",
    "media": "this.panorama_6D549EA0_79BD_70D4_4193_31B8574E4194",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_70C2D86F_7A37_20E4_41D1_9D001AB03BFF, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6D549EA0_79BD_70D4_4193_31B8574E4194_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "media": "this.panorama_6DB5C970_79BA_B033_41B3_DB68D7553251",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6DB5C970_79BA_B033_41B3_DB68D7553251_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "media": "this.panorama_70DC40A9_7A29_7A9F_41D4_27043CED2E2C",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_70DC40A9_7A29_7A9F_41D4_27043CED2E2C_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "media": "this.panorama_6DB90FEC_79BA_D053_41D5_C81A38608579",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6DB90FEC_79BA_D053_41D5_C81A38608579_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "media": "this.panorama_6DB4B6E3_79BB_5055_41CF_3466DC5DDA74",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6DB4B6E3_79BB_5055_41CF_3466DC5DDA74_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "media": "this.panorama_71FF85F2_7A29_3A8D_41D1_1989B1CBF663",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_71FF85F2_7A29_3A8D_41D1_1989B1CBF663_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "media": "this.panorama_6DAC16C5_79BB_B05D_41D7_EDBC71F4C6C8",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6DAC16C5_79BB_B05D_41D7_EDBC71F4C6C8_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "media": "this.panorama_6DAC5AE5_79BB_D05D_41CB_9B546369B6F6",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6DAC5AE5_79BB_D05D_41CB_9B546369B6F6_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "media": "this.panorama_6DD8F83F_79BB_D02D_41C1_7381B98F4EC9",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6DD8F83F_79BB_D02D_41C1_7381B98F4EC9_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 0)",
    "media": "this.panorama_6B22585C_79DD_D0E6_41DA_F2E1140696C1",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6B22585C_79DD_D0E6_41DA_F2E1140696C1_camera"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist",
  "items": [
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 0, 1)",
    "media": "this.panorama_6D549EA0_79BD_70D4_4193_31B8574E4194",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6D549EA0_79BD_70D4_4193_31B8574E4194_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 1, 2)",
    "media": "this.panorama_6DB5C970_79BA_B033_41B3_DB68D7553251",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6DB5C970_79BA_B033_41B3_DB68D7553251_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 2, 3)",
    "media": "this.panorama_70DC40A9_7A29_7A9F_41D4_27043CED2E2C",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_70DC40A9_7A29_7A9F_41D4_27043CED2E2C_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 3, 4)",
    "media": "this.panorama_6DB90FEC_79BA_D053_41D5_C81A38608579",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6DB90FEC_79BA_D053_41D5_C81A38608579_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 4, 5)",
    "media": "this.panorama_6DB4B6E3_79BB_5055_41CF_3466DC5DDA74",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6DB4B6E3_79BB_5055_41CF_3466DC5DDA74_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 5, 6)",
    "media": "this.panorama_71FF85F2_7A29_3A8D_41D1_1989B1CBF663",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_71FF85F2_7A29_3A8D_41D1_1989B1CBF663_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 6, 7)",
    "media": "this.panorama_6DAC16C5_79BB_B05D_41D7_EDBC71F4C6C8",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6DAC16C5_79BB_B05D_41D7_EDBC71F4C6C8_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 7, 8)",
    "media": "this.panorama_6DAC5AE5_79BB_D05D_41CB_9B546369B6F6",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6DAC5AE5_79BB_D05D_41CB_9B546369B6F6_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 8, 9)",
    "media": "this.panorama_6DD8F83F_79BB_D02D_41C1_7381B98F4EC9",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6DD8F83F_79BB_D02D_41C1_7381B98F4EC9_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 9, 0)",
    "media": "this.panorama_6B22585C_79DD_D0E6_41DA_F2E1140696C1",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6B22585C_79DD_D0E6_41DA_F2E1140696C1_camera"
   }
  ]
 },
 {
  "thumbnailUrl": "media/video_210B394E_3D54_1A60_41A3_CB42BEC0D3EC_t.jpg",
  "class": "Video",
  "label": "DJI_0384",
  "video": {
   "mp4Url": "media/video_210B394E_3D54_1A60_41A3_CB42BEC0D3EC.mp4",
   "width": 1920,
   "height": 1080,
   "webmUrl": "media/video_210B394E_3D54_1A60_41A3_CB42BEC0D3EC.webm",
   "class": "VideoResource"
  },
  "width": 1920,
  "id": "video_210B394E_3D54_1A60_41A3_CB42BEC0D3EC",
  "loop": false,
  "height": 1080,
  "scaleMode": "fit_outside"
 },
 {
  "class": "PlayList",
  "id": "playList_70DB1861_7A37_201C_41D7_FF7F21945D31",
  "items": [
   {
    "begin": "this.registerKey('visibility_ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472', this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472.get('visible')); this.registerKey('visibility_Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB', this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB.get('visible')); this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setComponentVisibility(this.Container_807F782A_8E23_A905_41DE_623121285A09, false, -1, this.effect_22974FB2_2DD9_0421_41BA_84205292D043, 'hideEffect', false); this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, false, -1, this.effect_22899FB3_2DD9_0427_41BB_298AEB3D2851, 'hideEffect', false); this.setComponentVisibility(this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB, true, -1, this.effect_2289DFB3_2DD9_0427_41AE_A35795880BA7, 'showEffect', false); this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, false, -1, this.effect_3876CD6E_2DF9_0421_41C1_F0AB7F279824, 'hideEffect', false); this.setComponentVisibility(this.Container_86F3A56C_8E22_5B1D_41CA_9CE53436FE56, false, -1, this.effect_22973FB1_2DD9_0423_41C1_E1E03953DCCE, 'hideEffect', false)",
    "media": "this.video_210B394E_3D54_1A60_41A3_CB42BEC0D3EC",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_70DB1861_7A37_201C_41D7_FF7F21945D31, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_70DB1861_7A37_201C_41D7_FF7F21945D31, 0, this.video_210B394E_3D54_1A60_41A3_CB42BEC0D3EC)",
    "class": "VideoPlayListItem",
    "end": "this.setComponentVisibility(this.Container_807F782A_8E23_A905_41DE_623121285A09, true, -1, this.effect_22977FB2_2DD9_0421_41C1_F53B037346DF, 'showEffect', false); this.setComponentVisibility(this.Container_807F782A_8E23_A905_41DE_623121285A09, true, -1, this.effect_22977FB2_2DD9_0421_41C1_F53B037346DF, 'showEffect', false); if(this.existsKey('visibility_Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB')){ if(this.getKey('visibility_Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB')) { this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, true, -1, this.effect_70FCCCD2_7A37_203C_41DA_BE3E18C917AD, 'showEffect', false); } else { this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, false, -1, this.effect_22899FB3_2DD9_0427_41BB_298AEB3D2851, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB'); this.setComponentVisibility(this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB, false, -1, this.effect_2289EFB3_2DD9_0427_41C0_ACB5A72AE218, 'hideEffect', false); this.setComponentVisibility(this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB, false, -1, this.effect_2289EFB3_2DD9_0427_41C0_ACB5A72AE218, 'hideEffect', false); if(this.existsKey('visibility_ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472')){ if(this.getKey('visibility_ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472')) { this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, true, -1, this.effect_70F80CD3_7A37_203C_419F_D89F1DC7025B, 'showEffect', false); } else { this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, false, -1, this.effect_3876CD6E_2DF9_0421_41C1_F0AB7F279824, 'hideEffect', false); } }; this.unregisterKey('visibility_ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472'); this.setComponentVisibility(this.Container_86F3A56C_8E22_5B1D_41CA_9CE53436FE56, true, -1, this.effect_22975FB2_2DD9_0421_41B4_7A2443082F44, 'showEffect', false); this.setComponentVisibility(this.Container_86F3A56C_8E22_5B1D_41CA_9CE53436FE56, true, -1, this.effect_22975FB2_2DD9_0421_41B4_7A2443082F44, 'showEffect', false)",
    "player": "this.MainViewerVideoPlayer"
   }
  ]
 },
 {
  "thumbnailUrl": "media/album_1AE8DEB7_0EE7_8CC7_4198_F5B75788CCF6_t.png",
  "label": "Photo Album",
  "id": "album_1AE8DEB7_0EE7_8CC7_4198_F5B75788CCF6",
  "playList": {
   "class": "PhotoPlayList",
   "id": "album_1AE8DEB7_0EE7_8CC7_4198_F5B75788CCF6_AlbumPlayList",
   "items": [
    {
     "class": "PhotoPlayListItem",
     "media": {
      "thumbnailUrl": "media/photo_25EB8F3B_3D54_3627_41C1_FA6C2C76D85C_t.jpg",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/photo_25EB8F3B_3D54_3627_41C1_FA6C2C76D85C.JPG"
        }
       ]
      },
      "duration": 5000,
      "label": "DJI_0355",
      "width": 5472,
      "id": "photo_25EB8F3B_3D54_3627_41C1_FA6C2C76D85C",
      "height": 3648,
      "class": "Photo"
     },
     "camera": {
      "scaleMode": "fit_outside",
      "easing": "linear",
      "targetPosition": {
       "x": "0.33",
       "class": "PhotoCameraPosition",
       "zoomFactor": 1.1,
       "y": "0.55"
      },
      "class": "MovementPhotoCamera",
      "duration": 5000,
      "initialPosition": {
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "zoomFactor": 1,
       "y": "0.50"
      }
     }
    },
    {
     "class": "PhotoPlayListItem",
     "media": {
      "thumbnailUrl": "media/photo_2537233E_3D54_0E20_41B8_95E46BC1EC07_t.jpg",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/photo_2537233E_3D54_0E20_41B8_95E46BC1EC07.jpg"
        }
       ]
      },
      "duration": 5000,
      "label": "DJI_0364",
      "width": 4900,
      "id": "photo_2537233E_3D54_0E20_41B8_95E46BC1EC07",
      "height": 3264,
      "class": "Photo"
     },
     "camera": {
      "scaleMode": "fit_outside",
      "easing": "linear",
      "targetPosition": {
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "zoomFactor": 1.1,
       "y": "0.71"
      },
      "class": "MovementPhotoCamera",
      "duration": 5000,
      "initialPosition": {
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "zoomFactor": 1,
       "y": "0.50"
      }
     }
    },
    {
     "class": "PhotoPlayListItem",
     "media": {
      "thumbnailUrl": "media/photo_25363697_3D54_16EF_41C7_78CA5BF042D8_t.jpg",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/photo_25363697_3D54_16EF_41C7_78CA5BF042D8.jpg"
        }
       ]
      },
      "duration": 5000,
      "label": "DJI_0369",
      "width": 4900,
      "id": "photo_25363697_3D54_16EF_41C7_78CA5BF042D8",
      "height": 3264,
      "class": "Photo"
     },
     "camera": {
      "scaleMode": "fit_outside",
      "easing": "linear",
      "targetPosition": {
       "x": "0.52",
       "class": "PhotoCameraPosition",
       "zoomFactor": 1.1,
       "y": "0.66"
      },
      "class": "MovementPhotoCamera",
      "duration": 5000,
      "initialPosition": {
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "zoomFactor": 1,
       "y": "0.50"
      }
     }
    },
    {
     "class": "PhotoPlayListItem",
     "media": {
      "thumbnailUrl": "media/photo_2536FA03_3D54_19E7_41C9_9A86E77D5C4C_t.jpg",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/photo_2536FA03_3D54_19E7_41C9_9A86E77D5C4C.JPG"
        }
       ]
      },
      "duration": 5000,
      "label": "DJI_0388",
      "width": 5472,
      "id": "photo_2536FA03_3D54_19E7_41C9_9A86E77D5C4C",
      "height": 3648,
      "class": "Photo"
     },
     "camera": {
      "scaleMode": "fit_outside",
      "easing": "linear",
      "targetPosition": {
       "x": "0.70",
       "class": "PhotoCameraPosition",
       "zoomFactor": 1.1,
       "y": "0.71"
      },
      "class": "MovementPhotoCamera",
      "duration": 5000,
      "initialPosition": {
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "zoomFactor": 1,
       "y": "0.50"
      }
     }
    },
    {
     "class": "PhotoPlayListItem",
     "media": {
      "thumbnailUrl": "media/photo_25365DAF_3D54_1A3F_41C9_6122F3F568B7_t.jpg",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/photo_25365DAF_3D54_1A3F_41C9_6122F3F568B7.jpg"
        }
       ]
      },
      "duration": 5000,
      "label": "DJI_0402",
      "width": 4900,
      "id": "photo_25365DAF_3D54_1A3F_41C9_6122F3F568B7",
      "height": 3264,
      "class": "Photo"
     },
     "camera": {
      "scaleMode": "fit_outside",
      "easing": "linear",
      "targetPosition": {
       "x": "0.49",
       "class": "PhotoCameraPosition",
       "zoomFactor": 1.1,
       "y": "0.74"
      },
      "class": "MovementPhotoCamera",
      "duration": 5000,
      "initialPosition": {
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "zoomFactor": 1,
       "y": "0.50"
      }
     }
    },
    {
     "class": "PhotoPlayListItem",
     "media": {
      "thumbnailUrl": "media/photo_2536E107_3D54_0BE0_41C7_237D79278EAE_t.jpg",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/photo_2536E107_3D54_0BE0_41C7_237D79278EAE.jpg"
        }
       ]
      },
      "duration": 5000,
      "label": "DJI_0405",
      "width": 4900,
      "id": "photo_2536E107_3D54_0BE0_41C7_237D79278EAE",
      "height": 3264,
      "class": "Photo"
     },
     "camera": {
      "scaleMode": "fit_outside",
      "easing": "linear",
      "targetPosition": {
       "x": "0.32",
       "class": "PhotoCameraPosition",
       "zoomFactor": 1.1,
       "y": "0.47"
      },
      "class": "MovementPhotoCamera",
      "duration": 5000,
      "initialPosition": {
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "zoomFactor": 1,
       "y": "0.50"
      }
     }
    },
    {
     "class": "PhotoPlayListItem",
     "media": {
      "thumbnailUrl": "media/photo_25361460_3D54_0A21_41C5_9CEF516D0083_t.jpg",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/photo_25361460_3D54_0A21_41C5_9CEF516D0083.jpg"
        }
       ]
      },
      "duration": 5000,
      "label": "DJI_0415",
      "width": 4900,
      "id": "photo_25361460_3D54_0A21_41C5_9CEF516D0083",
      "height": 3264,
      "class": "Photo"
     },
     "camera": {
      "scaleMode": "fit_outside",
      "easing": "linear",
      "targetPosition": {
       "x": "0.64",
       "class": "PhotoCameraPosition",
       "zoomFactor": 1.1,
       "y": "0.53"
      },
      "class": "MovementPhotoCamera",
      "duration": 5000,
      "initialPosition": {
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "zoomFactor": 1,
       "y": "0.50"
      }
     }
    },
    {
     "class": "PhotoPlayListItem",
     "media": {
      "thumbnailUrl": "media/photo_2536E7CB_3D54_F667_41C8_0C74E4EA5879_t.jpg",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/photo_2536E7CB_3D54_F667_41C8_0C74E4EA5879.jpg"
        }
       ]
      },
      "duration": 5000,
      "label": "DJI_0441",
      "width": 4900,
      "id": "photo_2536E7CB_3D54_F667_41C8_0C74E4EA5879",
      "height": 3264,
      "class": "Photo"
     },
     "camera": {
      "scaleMode": "fit_outside",
      "easing": "linear",
      "targetPosition": {
       "x": "0.31",
       "class": "PhotoCameraPosition",
       "zoomFactor": 1.1,
       "y": "0.32"
      },
      "class": "MovementPhotoCamera",
      "duration": 5000,
      "initialPosition": {
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "zoomFactor": 1,
       "y": "0.50"
      }
     }
    }
   ]
  },
  "class": "PhotoAlbum"
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
  "class": "PlayList",
  "id": "playList_70DB7861_7A37_201C_41C7_289F1C9EBDDB",
  "items": [
   {
    "begin": "this.loopAlbum(this.playList_70DB7861_7A37_201C_41C7_289F1C9EBDDB, 0)",
    "class": "PhotoAlbumPlayListItem",
    "media": "this.album_1AE8DEB7_0EE7_8CC7_4198_F5B75788CCF6",
    "player": "this.ViewerAreaLabeled_9FD7235A_96CD_9045_41D9_23A3BCBDB1C6PhotoAlbumPlayer"
   }
  ]
 },
 "this.map_4E02A832_427B_EE04_41CC_8E1CEC03E8D3",
 {
  "class": "PlayList",
  "id": "playList_70C5F86B_7A37_20EC_41DA_C3517ED373D2",
  "items": [
   {
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
    "class": "MapPlayListItem",
    "media": "this.map_4E02A832_427B_EE04_41CC_8E1CEC03E8D3",
    "player": "this.MapViewerMapPlayer"
   }
  ]
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_CACBF85D_EED0_7261_41DB_A3B65ECE0D5D",
  "duration": 200
 },
 {
  "easing": "linear",
  "class": "FadeOutEffect",
  "id": "effect_CACBC85D_EED0_7261_41BE_8CF4C3A8170C",
  "duration": 200
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_CDD059FA_EED0_D223_41DB_70ACFBE986FE",
  "duration": 200
 },
 {
  "easing": "linear",
  "class": "FadeOutEffect",
  "id": "effect_CDD049FB_EED0_D221_41EB_CA2134B978E0",
  "duration": 200
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_32C91197_3F22_3110_4181_9E76B593FBFE",
  "duration": 400
 },
 {
  "easing": "linear",
  "class": "FadeOutEffect",
  "id": "effect_32C92197_3F22_3110_419D_E2E21968F16F",
  "duration": 400
 },
 {
  "easing": "linear",
  "class": "FadeOutEffect",
  "id": "effect_9B0AF4E2_96C4_F045_41D3_0E00FEE03A15",
  "duration": 200
 },
 {
  "easing": "linear",
  "class": "FadeOutEffect",
  "id": "effect_500E3733_4297_3267_41C9_4935C0BEBF39",
  "duration": 300
 },
 {
  "levels": [
   {
    "height": 624,
    "width": 959,
    "class": "ImageResourceLevel",
    "url": "media/zoomImage_8E47938C_96CD_F0DD_41E1_7A3E325FC5AB_0_0.png"
   },
   {
    "height": 333,
    "width": 512,
    "class": "ImageResourceLevel",
    "url": "media/zoomImage_8E47938C_96CD_F0DD_41E1_7A3E325FC5AB_0_1.png"
   }
  ],
  "class": "ImageResource",
  "id": "ImageResource_6ECEF4DB_6091_DDD1_41D4_2B884570086A"
 },
 {
  "easing": "cubic_in",
  "class": "FadeInEffect",
  "id": "FadeInEffect_8ED05F70_96C4_F045_41DC_2AB82A556F92",
  "duration": 500
 },
 {
  "easing": "cubic_out",
  "class": "FadeOutEffect",
  "id": "FadeOutEffect_8ED06F70_96C4_F045_41DA_C74400CF7B15",
  "duration": 500
 },
 {
  "easing": "linear",
  "class": "FadeOutEffect",
  "id": "effect_518C2CD2_77ED_D97B_41C3_3AC87D499717",
  "duration": 300
 },
 {
  "easing": "linear",
  "from": "bottom",
  "class": "SlideInEffect",
  "id": "effect_508929C3_77ED_DB59_41D8_05A6C8F0681B",
  "duration": 400
 },
 {
  "easing": "linear",
  "class": "SlideOutEffect",
  "id": "effect_5032FA51_77E2_5979_41D1_45E5EF039077",
  "to": "bottom",
  "duration": 400
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_640860A9_76E7_E929_4192_305B50E5610A",
  "duration": 300
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_98AADBB0_96C5_F0C5_41B2_1C4D08E503DB",
  "duration": 200
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_51CB7B74_4299_12E2_41B4_829087983DE5",
  "duration": 300
 },
 {
  "id": "camera_7110E8B2_7A37_207C_41CE_BBD9E6025EA4",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 7.78,
   "pitch": 0
  }
 },
 {
  "id": "camera_7105B8C2_7A37_201C_4178_4AB3C557FD2E",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -18.22,
   "pitch": 0
  }
 },
 {
  "id": "camera_710BF8D1_7A37_203C_41CE_00CE05E15D98",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 5.61,
   "pitch": 0
  }
 },
 {
  "id": "camera_717F98E1_7A37_201C_41C4_52489DFCEE3E",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 8.04,
   "pitch": 0
  }
 },
 {
  "id": "camera_716348F1_7A37_21FC_41C4_626285E563F4",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "hfov": 120,
   "class": "PanoramaCameraPosition",
   "yaw": 8.65,
   "pitch": 0
  }
 },
 {
  "id": "camera_71573905_7A37_2024_41BF_340C13D71294",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 37.14,
   "pitch": 0
  }
 },
 {
  "id": "camera_71597915_7A37_2024_41C6_09515112629A",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 23,
   "pitch": 0
  }
 },
 {
  "id": "camera_714CB924_7A37_2064_41D5_85966BC9316B",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.32,
   "pitch": 0
  }
 },
 {
  "id": "camera_71BE992D_7A37_2067_41DD_7F939AC2EB55",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 6.88,
   "pitch": 0
  }
 },
 {
  "id": "camera_71A2E937_7A37_2064_41CD_C66CE49BB2BD",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 17.08,
   "pitch": 0
  }
 },
 {
  "id": "camera_71944942_7A37_201C_41CF_FEF9BA424D8E",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 17.08,
   "pitch": 0
  }
 },
 {
  "id": "camera_7186E94C_7A37_2024_41DD_849A37D29B29",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.42,
   "pitch": 0
  }
 },
 {
  "id": "camera_7189C958_7A37_202C_41B4_BD9FCAC95BF8",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 3.2,
   "pitch": 0
  }
 },
 {
  "id": "camera_71FB9962_7A37_201C_41C1_C56411ADE5FD",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "hfov": 120,
   "class": "PanoramaCameraPosition",
   "yaw": 8.65,
   "pitch": 0
  }
 },
 {
  "id": "camera_71EFA96D_7A37_20E4_41AD_809195267950",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 7.79,
   "pitch": 0
  }
 },
 {
  "id": "camera_71D1C978_7A37_20EC_41D0_91AA8B28E7CC",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.8,
   "pitch": 0
  }
 },
 {
  "id": "camera_706E0999_7A37_202C_41CD_7B3AFAF8B92B",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 163.2,
   "pitch": 0
  }
 },
 {
  "id": "camera_706949A3_7A37_201C_41BB_3079899B0E35",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 6.88,
   "pitch": 0
  }
 },
 {
  "id": "camera_7053F9AD_7A37_2064_41DB_77D96A34C263",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -97.1,
   "pitch": 0
  }
 },
 {
  "id": "camera_705F29B8_7A37_206C_41DE_4698EF53309B",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 7.78,
   "pitch": 0
  }
 },
 {
  "id": "camera_7058A9C2_7A37_201C_41BB_BC26A3FD71DB",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.42,
   "pitch": 0
  }
 },
 {
  "id": "camera_704179CC_7A37_2024_41DC_F7992AAB46E4",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 8.04,
   "pitch": 0
  }
 },
 {
  "id": "camera_70B699D6_7A37_2024_41B9_51C735F8D8DC",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "hfov": 120,
   "class": "PanoramaCameraPosition",
   "yaw": 8.65,
   "pitch": 0
  }
 },
 {
  "id": "camera_70BE29DF_7A37_2024_41C8_B43D6CD00E41",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 7.79,
   "pitch": 0
  }
 },
 {
  "id": "camera_70A4F9E9_7A37_23EC_41CE_17F670A7B0A2",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.8,
   "pitch": 0
  }
 },
 {
  "id": "camera_70AAE9F2_7A37_23FC_41CF_4DF35728E820",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.32,
   "pitch": 0
  }
 },
 {
  "id": "camera_709139FC_7A37_23E4_41CB_D548CEBB3775",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 6.88,
   "pitch": 0
  }
 },
 {
  "id": "camera_7086FA05_7A37_2024_41C2_5DE8604F8FBC",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 1.8,
   "pitch": 0
  }
 },
 {
  "id": "camera_708D5A0F_7A37_2024_4180_B53559871428",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 7.78,
   "pitch": 0
  }
 },
 {
  "id": "camera_70F22A18_7A37_202C_41C3_916214A83A81",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 17.08,
   "pitch": 0
  }
 },
 {
  "id": "camera_70F96A22_7A37_201C_41C0_212405E34910",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 8.04,
   "pitch": 0
  }
 },
 {
  "id": "camera_70EE2A2C_7A37_2064_41C1_37FB7064E59E",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "hfov": 120,
   "class": "PanoramaCameraPosition",
   "yaw": 8.65,
   "pitch": 0
  }
 },
 {
  "id": "camera_70D3EA35_7A37_2064_41D3_728F614ECA40",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 7.79,
   "pitch": 0
  }
 },
 {
  "id": "camera_70C79A3F_7A37_2064_41D6_DE86FA60CE9C",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.8,
   "pitch": 0
  }
 },
 {
  "id": "camera_70C99A48_7A37_202C_41DE_02EF1C703FC6",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.32,
   "pitch": 0
  }
 },
 {
  "id": "camera_713D2A52_7A37_203C_41C3_11CF75F66184",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 6.88,
   "pitch": 0
  }
 },
 {
  "id": "camera_712FDA5C_7A37_2024_41A2_72A0E2838603",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 17.08,
   "pitch": 0
  }
 },
 {
  "id": "camera_7111EA65_7A37_20E4_41C7_707BE123D288",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -167.94,
   "pitch": 0
  }
 },
 {
  "id": "camera_71048A6F_7A37_20E4_41C4_D78A9D5070D1",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 17.08,
   "pitch": 0
  }
 },
 {
  "id": "camera_71776A78_7A37_20EC_41D8_63C818BE6C4F",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.42,
   "pitch": 0
  }
 },
 {
  "id": "camera_717ADA82_7A37_201C_41DB_05F3F4DC3BE6",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "hfov": 120,
   "class": "PanoramaCameraPosition",
   "yaw": 8.65,
   "pitch": 0
  }
 },
 {
  "id": "camera_716C3A8C_7A37_2024_419B_28F19D858B38",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 7.79,
   "pitch": 0
  }
 },
 {
  "id": "camera_71507A95_7A37_2024_41D8_5D69673D5269",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 22.98,
   "pitch": 0
  }
 },
 {
  "id": "camera_7141AA9E_7A37_2025_41D6_52D751C32CBA",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.32,
   "pitch": 0
  }
 },
 {
  "id": "camera_71B44AA8_7A37_206D_41D2_F745CB68ECC8",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 6.88,
   "pitch": 0
  }
 },
 {
  "id": "camera_71A7DAB1_7A37_207C_41D7_6F4D9BEA80F4",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 17.08,
   "pitch": 0
  }
 },
 {
  "id": "camera_71A9FABB_7A37_206C_41AF_D05FA2A222EB",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 7.78,
   "pitch": 0
  }
 },
 {
  "id": "camera_719D7AC4_7A37_2024_41B5_3BE6340D68C8",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 17.08,
   "pitch": 0
  }
 },
 {
  "id": "camera_718F6AD1_7A37_203C_41D0_5DE9D13419DE",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.42,
   "pitch": 0
  }
 },
 {
  "id": "camera_71F2DADA_7A37_202C_41CC_5103D54F2074",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 8.04,
   "pitch": 0
  }
 },
 {
  "id": "camera_71E40AE4_7A37_21E4_41D9_E6162CBE0328",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 7.79,
   "pitch": 0
  }
 },
 {
  "id": "camera_71D6EAED_7A37_21E4_41A7_9A223D07D108",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.8,
   "pitch": 0
  }
 },
 {
  "id": "camera_71DA5AF7_7A37_21E4_41D3_C0D921D4C0D4",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -179.07,
   "pitch": 0
  }
 },
 {
  "id": "camera_71CBCB01_7A37_201C_41D5_C40119E4E8BB",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 6.88,
   "pitch": 0
  }
 },
 {
  "id": "camera_763EEB0B_7A37_202C_41B0_31C1812E863D",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -145.31,
   "pitch": 0
  }
 },
 {
  "id": "camera_762FBB15_7A37_2024_41CE_0BAE0C9EF929",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 7.78,
   "pitch": 0
  }
 },
 {
  "id": "camera_76124B28_7A37_206C_41DD_71DC3B646A47",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 17.08,
   "pitch": 0
  }
 },
 {
  "id": "camera_7603BB37_7A37_2064_41D9_AEE1E420C841",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.42,
   "pitch": 0
  }
 },
 {
  "id": "camera_76755B46_7A37_2024_41DE_7739A3E7C5BA",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 8.04,
   "pitch": 0
  }
 },
 {
  "id": "camera_7667CB55_7A37_2024_41C6_3E44641D4F63",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "hfov": 120,
   "class": "PanoramaCameraPosition",
   "yaw": 8.65,
   "pitch": 0
  }
 },
 {
  "id": "camera_76695B5F_7A37_2024_4188_405628B4A7BE",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.8,
   "pitch": 0
  }
 },
 {
  "id": "camera_765BAB6E_7A37_20E4_41AB_05DA4842F21C",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.32,
   "pitch": 0
  }
 },
 {
  "id": "camera_764D3B7D_7A37_20E4_41BE_0940140A8CF6",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -161.06,
   "pitch": 0
  }
 },
 {
  "id": "camera_76BEFB8C_7A37_2024_41D8_34C65F31E4DD",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -145.28,
   "pitch": 0
  }
 },
 {
  "id": "camera_76A1DB9B_7A37_202C_41CE_D0EF8585E320",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 7.78,
   "pitch": 0
  }
 },
 {
  "id": "camera_76928BAB_7A37_206C_41D8_24EE263B9AE4",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 17.08,
   "pitch": 0
  }
 },
 {
  "id": "camera_7685CBB5_7A37_2063_41DB_AA48502A1F82",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.42,
   "pitch": 0
  }
 },
 {
  "id": "camera_76F69BC4_7A37_2024_41D2_DEFC5D8F875C",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -137.98,
   "pitch": 0
  }
 },
 {
  "id": "camera_76FA6BD1_7A37_203C_41DA_7E0311231189",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "hfov": 120,
   "class": "PanoramaCameraPosition",
   "yaw": 8.65,
   "pitch": 0
  }
 },
 {
  "id": "camera_76EA8BDB_7A37_202C_41D4_4DA3256188D1",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 7.79,
   "pitch": 0
  }
 },
 {
  "id": "camera_76DC4BE5_7A37_27E4_41B0_96DD35CA971B",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.32,
   "pitch": 0
  }
 },
 {
  "id": "camera_76CF6BEE_7A37_27E4_41D1_D3AF9B146A7E",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 6.88,
   "pitch": 0
  }
 },
 {
  "id": "camera_7730DBF8_7A37_27EC_41CB_E0D993A73F98",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 17.08,
   "pitch": 0
  }
 },
 {
  "id": "camera_77233C02_7A37_201C_419F_BCC827E0B229",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 82.78,
   "pitch": 0
  }
 },
 {
  "id": "camera_7714AC0A_7A37_202D_41DB_CE941B9D6922",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 17.08,
   "pitch": 0
  }
 },
 {
  "id": "camera_7707FC14_7A37_2025_41D8_4A4B9A1D29C7",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.42,
   "pitch": 0
  }
 },
 {
  "id": "camera_7708BC1E_7A37_2025_41B6_2B1F7946F6D9",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 8.04,
   "pitch": 0
  }
 },
 {
  "id": "camera_777A4C28_7A37_206C_41C1_326DD8134F94",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "hfov": 120,
   "class": "PanoramaCameraPosition",
   "yaw": -39.51,
   "pitch": 0
  }
 },
 {
  "id": "camera_776CAC32_7A37_207C_41D8_322297CC681C",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 7.79,
   "pitch": 0
  }
 },
 {
  "id": "camera_775E6C3B_7A37_206C_41CD_08500CDF3093",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.8,
   "pitch": 0
  }
 },
 {
  "id": "camera_77417C45_7A37_2024_4197_015EFEB8F42E",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 6.88,
   "pitch": 0
  }
 },
 {
  "id": "camera_77B24C4F_7A37_2024_41C8_2EBFD153AF7A",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 17.08,
   "pitch": 0
  }
 },
 {
  "id": "camera_77A57C59_7A37_202C_4194_F1E07D6D67CD",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 7.78,
   "pitch": 0
  }
 },
 {
  "id": "camera_70AF4C92_7A37_203C_41B0_2999E268EED6",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 17.08,
   "pitch": 0
  }
 },
 {
  "id": "camera_70A9DC9C_7A37_2024_41AE_5400A7DB9146",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.42,
   "pitch": 0
  }
 },
 {
  "id": "camera_70952CA5_7A37_2064_41DD_D8F094672EF6",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 8.04,
   "pitch": 0
  }
 },
 {
  "id": "camera_709FFCAF_7A37_2064_41D0_ECF6A2F52CB3",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "hfov": 120,
   "class": "PanoramaCameraPosition",
   "yaw": 8.65,
   "pitch": 0
  }
 },
 {
  "id": "camera_709B5CB8_7A37_206C_41C3_07E9319E5E16",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 37.1,
   "pitch": 0
  }
 },
 {
  "id": "camera_70854CC2_7A37_201C_41D9_F8A5B01BD57C",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.8,
   "pitch": 0
  }
 },
 {
  "id": "camera_7080ECCB_7A37_202C_41C7_E473E9AC03ED",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.32,
   "pitch": 0
  }
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "id": "effect_22974FB2_2DD9_0421_41BA_84205292D043",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "id": "effect_22977FB2_2DD9_0421_41C1_F53B037346DF",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "id": "effect_22899FB3_2DD9_0427_41BB_298AEB3D2851",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "id": "effect_70FCCCD2_7A37_203C_41DA_BE3E18C917AD",
  "duration": 1000
 },
 "this.effect_22899FB3_2DD9_0427_41BB_298AEB3D2851",
 {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "id": "effect_2289DFB3_2DD9_0427_41AE_A35795880BA7",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "id": "effect_2289EFB3_2DD9_0427_41C0_ACB5A72AE218",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "id": "effect_3876CD6E_2DF9_0421_41C1_F0AB7F279824",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "id": "effect_70F80CD3_7A37_203C_419F_D89F1DC7025B",
  "duration": 1000
 },
 "this.effect_3876CD6E_2DF9_0421_41C1_F0AB7F279824",
 {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "id": "effect_22973FB1_2DD9_0423_41C1_E1E03953DCCE",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "id": "effect_22975FB2_2DD9_0421_41B4_7A2443082F44",
  "duration": 1000
 },
 {
  "maximumAngle": 231.16,
  "autoplay": true,
  "id": "audio_A83B2F1A_B250_204B_41B2_61A870B2B428",
  "yaw": -17.74,
  "loop": true,
  "audio": {
   "id": "audioresource_1D15163A_0EEB_BFC9_419F_EF5F7074EFB1",
   "oggUrl": "media/audio_A83B2F1A_B250_204B_41B2_61A870B2B428.ogg",
   "class": "AudioResource",
   "mp3Url": "media/audio_A83B2F1A_B250_204B_41B2_61A870B2B428.mp3"
  },
  "class": "DirectionalPanoramaAudio",
  "pitch": -7.7
 },
 {
  "maximumAngle": 97.14,
  "autoplay": true,
  "id": "audio_A875C8FE_B250_61CA_41D2_1BDD70C9887A",
  "yaw": 4.55,
  "loop": true,
  "audio": {
   "id": "audioresource_A84F2D34_B270_605F_41E2_4CF67AB762D2",
   "oggUrl": "media/audio_A875C8FE_B250_61CA_41D2_1BDD70C9887A.ogg",
   "class": "AudioResource",
   "mp3Url": "media/audio_A875C8FE_B250_61CA_41D2_1BDD70C9887A.mp3"
  },
  "class": "DirectionalPanoramaAudio",
  "pitch": -18.69
 },
 {
  "maximumAngle": 61.89,
  "autoplay": true,
  "id": "audio_A87513BA_B273_E04A_41AA_0102CD2EF1BE",
  "yaw": -10.86,
  "loop": true,
  "audio": {
   "id": "audioresource_A83107F8_B270_2FD6_41E2_DAE1F661A577",
   "oggUrl": "media/audio_A87513BA_B273_E04A_41AA_0102CD2EF1BE.ogg",
   "class": "AudioResource",
   "mp3Url": "media/audio_A87513BA_B273_E04A_41AA_0102CD2EF1BE.mp3"
  },
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
  "yaw": 0,
  "loop": true,
  "audio": "this.audioresource_A83107F8_B270_2FD6_41E2_DAE1F661A577",
  "class": "DirectionalPanoramaAudio",
  "pitch": 0
 },
 {
  "maximumAngle": 265.52,
  "autoplay": true,
  "id": "audio_A8284F56_B270_60DB_41E0_27608EB2E0B9",
  "yaw": -40.93,
  "loop": true,
  "audio": "this.audioresource_A83107F8_B270_2FD6_41E2_DAE1F661A577",
  "class": "DirectionalPanoramaAudio",
  "pitch": 0.51
 },
 {
  "thumbnailUrl": "media/photo_1D911E4D_0EFC_8C4B_4180_DC7B2E0CE38C_t.jpg",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/photo_1D911E4D_0EFC_8C4B_4180_DC7B2E0CE38C.jpg"
    }
   ]
  },
  "duration": 5000,
  "label": "7. Ben xe mien Dong moi",
  "width": 8192,
  "id": "photo_1D911E4D_0EFC_8C4B_4180_DC7B2E0CE38C",
  "height": 4096,
  "class": "Photo"
 },
 {
  "maximumAngle": 360,
  "autoplay": true,
  "id": "audio_1D15363A_0EEB_BFC9_4193_928F3B1A384C",
  "yaw": 0,
  "loop": true,
  "audio": "this.audioresource_1D15163A_0EEB_BFC9_419F_EF5F7074EFB1",
  "class": "DirectionalPanoramaAudio",
  "pitch": 0
 }
], "children": [
 {
  "shadow": false,
  "progressBorderRadius": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "paddingRight": 0,
  "playbackBarHeadShadowVerticalLength": 0,
  "progressBarOpacity": 1,
  "toolTipPaddingBottom": 4,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "progressRight": 0,
  "playbackBarHeadShadowHorizontalLength": 0,
  "toolTipBorderSize": 1,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "paddingLeft": 0,
  "toolTipShadowOpacity": 1,
  "toolTipOpacity": 0.7,
  "playbackBarBorderColor": "#FFFFFF",
  "playbackBarHeight": 10,
  "toolTipShadowVerticalLength": 0,
  "toolTipTextShadowColor": "#000000",
  "playbackBarHeadWidth": 6,
  "toolTipFontStyle": "normal",
  "minHeight": 50,
  "playbackBarProgressBorderSize": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "progressBottom": 0,
  "paddingBottom": 0,
  "playbackBarRight": 0,
  "toolTipBackgroundColor": "#000000",
  "progressBorderSize": 0,
  "progressBarBorderSize": 0,
  "progressBarBorderRadius": 0,
  "playbackBarOpacity": 1,
  "playbackBarProgressBorderRadius": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "paddingTop": 0,
  "transitionMode": "blending",
  "toolTipShadowSpread": 0,
  "toolTipShadowColor": "#333333",
  "toolTipShadowBlurRadius": 3,
  "toolTipFontColor": "#606060",
  "minWidth": 100,
  "playbackBarBorderRadius": 0,
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "toolTipPaddingRight": 6,
  "playbackBarHeadBorderRadius": 0,
  "class": "ViewerArea",
  "toolTipTextShadowOpacity": 0,
  "playbackBarHeadShadow": true,
  "toolTipPaddingTop": 4,
  "borderRadius": 0,
  "toolTipFontSize": 11,
  "playbackBarProgressOpacity": 1,
  "progressLeft": 0,
  "borderSize": 0,
  "playbackBarHeadBorderColor": "#000000",
  "progressBackgroundColorRatios": [
   0
  ],
  "playbackBarLeft": 0,
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipPaddingLeft": 6,
  "toolTipBorderColor": "#767676",
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "playbackBarBackgroundOpacity": 1,
  "playbackBarBorderSize": 0,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarHeadHeight": 15,
  "top": "0%",
  "toolTipBorderRadius": 3,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "bottom": "0%",
  "toolTipFontWeight": "normal",
  "id": "MainViewer",
  "playbackBarHeadBorderSize": 0,
  "progressBarBorderColor": "#000000",
  "toolTipShadowHorizontalLength": 0,
  "playbackBarHeadOpacity": 1,
  "toolTipTextShadowBlurRadius": 3,
  "progressBackgroundColorDirection": "vertical",
  "playbackBarHeadShadowColor": "#000000",
  "progressBackgroundOpacity": 1,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "progressHeight": 10,
  "left": "0%",
  "progressBorderColor": "#000000",
  "playbackBarBottom": 5,
  "right": "0%",
  "toolTipFontFamily": "Arial",
  "progressOpacity": 1,
  "progressBarBackgroundColor": [
   "#3399FF"
  ]
 },
 {
  "scrollBarColor": "#000000",
  "overflow": "visible",
  "scrollBarOpacity": 0.5,
  "paddingRight": 0,
  "verticalAlign": "middle",
  "paddingLeft": 0,
  "height": 50,
  "maxWidth": 500,
  "width": 500,
  "class": "Container",
  "borderRadius": 5,
  "borderSize": 0,
  "contentOpaque": false,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "minHeight": 55,
  "horizontalAlign": "right",
  "top": "3%",
  "layout": "horizontal",
  "paddingBottom": 0,
  "id": "Container_807F782A_8E23_A905_41DE_623121285A09",
  "gap": 5,
  "maxHeight": 55,
  "paddingTop": 0,
  "backgroundOpacity": 0,
  "minWidth": 500,
  "right": "1.5%",
  "children": [
   {
    "scrollBarColor": "#000000",
    "overflow": "visible",
    "scrollBarOpacity": 0.5,
    "paddingRight": 0,
    "verticalAlign": "middle",
    "paddingLeft": 0,
    "height": 55,
    "width": 400,
    "class": "Container",
    "borderRadius": 0,
    "borderSize": 0,
    "contentOpaque": false,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "minHeight": 55,
    "horizontalAlign": "right",
    "layout": "horizontal",
    "visible": false,
    "paddingBottom": 0,
    "id": "Container_80D3CF90_8E26_E705_41E0_E47025A2C106",
    "gap": 0,
    "maxHeight": 55,
    "paddingTop": 0,
    "backgroundOpacity": 0,
    "minWidth": 100,
    "children": [
     "this.IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37",
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "mode": "toggle",
      "toolTipPaddingRight": 6,
      "paddingLeft": 0,
      "iconURL": "skin/IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA.png",
      "height": "100%",
      "maxWidth": 60,
      "width": "100%",
      "toolTipPaddingBottom": 4,
      "toolTipTextShadowOpacity": 0,
      "transparencyActive": true,
      "toolTipPaddingTop": 4,
      "toolTip": "Full Screen",
      "class": "IconButton",
      "toolTipFontSize": 11,
      "toolTipShadowOpacity": 1,
      "toolTipOpacity": 0.7,
      "borderSize": 0,
      "toolTipBorderSize": 1,
      "borderRadius": 0,
      "toolTipShadowVerticalLength": 0,
      "toolTipPaddingLeft": 6,
      "toolTipBorderColor": "#767676",
      "toolTipTextShadowColor": "#000000",
      "click": "if(!this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, true, 0, null, null, false) } else if(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, false, 0, null, null, false) }",
      "toolTipFontStyle": "normal",
      "toolTipBorderRadius": 3,
      "minHeight": 1,
      "horizontalAlign": "center",
      "cursor": "hand",
      "paddingBottom": 0,
      "toolTipTextShadowBlurRadius": 3,
      "toolTipBackgroundColor": "#000000",
      "toolTipFontWeight": "normal",
      "id": "IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA",
      "maxHeight": 60,
      "paddingTop": 0,
      "toolTipShadowHorizontalLength": 0,
      "toolTipShadowSpread": 0,
      "toolTipShadowColor": "#333333",
      "toolTipShadowBlurRadius": 3,
      "pressedIconURL": "skin/IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA_pressed.png",
      "backgroundOpacity": 0,
      "toolTipFontColor": "#606060",
      "minWidth": 1,
      "toolTipFontFamily": "Arial",
      "shadow": false
     },
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "mode": "toggle",
      "toolTipPaddingRight": 6,
      "paddingLeft": 0,
      "iconURL": "skin/IconButton_8105A313_8E22_BF0B_41E1_331C6035A930.png",
      "height": "100%",
      "maxWidth": 60,
      "width": "100%",
      "toolTipPaddingBottom": 4,
      "toolTipTextShadowOpacity": 0,
      "transparencyActive": true,
      "toolTipPaddingTop": 4,
      "toolTip": "Audio On/Off",
      "class": "IconButton",
      "toolTipFontSize": 11,
      "toolTipShadowOpacity": 1,
      "toolTipOpacity": 0.7,
      "borderSize": 0,
      "toolTipBorderSize": 1,
      "borderRadius": 0,
      "toolTipShadowVerticalLength": 0,
      "toolTipPaddingLeft": 6,
      "toolTipBorderColor": "#767676",
      "toolTipTextShadowColor": "#000000",
      "click": "if(!this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, true, 0, this.effect_CACBF85D_EED0_7261_41DB_A3B65ECE0D5D, 'showEffect', false) } else if(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, false, 0, this.effect_CACBC85D_EED0_7261_41BE_8CF4C3A8170C, 'hideEffect', false) }",
      "toolTipFontStyle": "normal",
      "toolTipBorderRadius": 3,
      "minHeight": 1,
      "horizontalAlign": "center",
      "cursor": "hand",
      "visible": false,
      "paddingBottom": 0,
      "toolTipTextShadowBlurRadius": 3,
      "toolTipBackgroundColor": "#000000",
      "toolTipFontWeight": "normal",
      "id": "IconButton_8105A313_8E22_BF0B_41E1_331C6035A930",
      "maxHeight": 60,
      "paddingTop": 0,
      "toolTipShadowHorizontalLength": 0,
      "toolTipShadowSpread": 0,
      "toolTipShadowColor": "#333333",
      "toolTipShadowBlurRadius": 3,
      "pressedIconURL": "skin/IconButton_8105A313_8E22_BF0B_41E1_331C6035A930_pressed.png",
      "backgroundOpacity": 0,
      "toolTipFontColor": "#606060",
      "minWidth": 1,
      "toolTipFontFamily": "Arial",
      "shadow": false
     },
     "this.IconButton_80E5955A_8E23_BB05_41CA_43DD61DBAEE9"
    ],
    "shadow": false,
    "scrollBarVisible": "rollOver"
   },
   {
    "verticalAlign": "middle",
    "paddingRight": 0,
    "mode": "toggle",
    "toolTipPaddingRight": 6,
    "paddingLeft": 0,
    "iconURL": "skin/IconButton_811D89E1_8E3D_AB07_4191_94003C90B2FF.png",
    "height": "100%",
    "maxWidth": 55,
    "width": "100%",
    "toolTipPaddingBottom": 4,
    "toolTipTextShadowOpacity": 0,
    "transparencyActive": true,
    "toolTipPaddingTop": 4,
    "toolTip": "Settings",
    "class": "IconButton",
    "toolTipFontSize": 11,
    "toolTipShadowOpacity": 1,
    "toolTipOpacity": 0.7,
    "borderSize": 0,
    "toolTipBorderSize": 1,
    "borderRadius": 0,
    "toolTipShadowVerticalLength": 0,
    "toolTipPaddingLeft": 6,
    "toolTipBorderColor": "#767676",
    "toolTipTextShadowColor": "#000000",
    "click": "if(!this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, true, 0, this.effect_32C91197_3F22_3110_4181_9E76B593FBFE, 'showEffect', false) } else if(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, false, 0, this.effect_32C92197_3F22_3110_419D_E2E21968F16F, 'hideEffect', false) }",
    "toolTipFontStyle": "normal",
    "toolTipBorderRadius": 3,
    "minHeight": 55,
    "horizontalAlign": "center",
    "cursor": "hand",
    "paddingBottom": 0,
    "toolTipTextShadowBlurRadius": 3,
    "toolTipBackgroundColor": "#000000",
    "toolTipFontWeight": "normal",
    "id": "IconButton_811D89E1_8E3D_AB07_4191_94003C90B2FF",
    "maxHeight": 55,
    "paddingTop": 0,
    "toolTipShadowHorizontalLength": 0,
    "toolTipShadowSpread": 0,
    "toolTipShadowColor": "#333333",
    "toolTipShadowBlurRadius": 3,
    "pressedIconURL": "skin/IconButton_811D89E1_8E3D_AB07_4191_94003C90B2FF_pressed.png",
    "backgroundOpacity": 0,
    "toolTipFontColor": "#606060",
    "minWidth": 55,
    "toolTipFontFamily": "Arial",
    "shadow": false
   }
  ],
  "shadow": false,
  "scrollBarVisible": "rollOver"
 },
 {
  "backgroundColorDirection": "vertical",
  "overflow": "scroll",
  "scrollBarOpacity": 0.5,
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "verticalAlign": "top",
  "paddingRight": 0,
  "scrollBarColor": "#000000",
  "height": "100%",
  "width": "100%",
  "borderRadius": 0,
  "paddingLeft": 0,
  "borderSize": 0,
  "gap": 10,
  "class": "Container",
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "minHeight": 1,
  "horizontalAlign": "left",
  "top": "0%",
  "layout": "absolute",
  "visible": false,
  "paddingBottom": 0,
  "contentOpaque": false,
  "backgroundColorRatios": [
   0,
   1
  ],
  "id": "Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB",
  "paddingTop": 0,
  "left": "0%",
  "backgroundOpacity": 0.7,
  "minWidth": 1,
  "children": [
   "this.ViewerAreaLabeled_9FD7235A_96CD_9045_41D9_23A3BCBDB1C6",
   "this.IconButton_9FEA51EA_96CC_905A_41D3_F42DB0CD0A74",
   "this.IconButton_9FB9BD3F_96C5_703B_41D7_65AEE6E85A96",
   "this.IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4"
  ],
  "shadow": false,
  "scrollBarVisible": "rollOver"
 },
 {
  "verticalAlign": "middle",
  "paddingRight": 0,
  "mode": "push",
  "paddingLeft": 0,
  "iconURL": "skin/IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB.png",
  "height": "5.482%",
  "maxWidth": 50,
  "width": "3.03%",
  "transparencyActive": true,
  "borderRadius": 0,
  "class": "IconButton",
  "borderSize": 0,
  "rollOverIconURL": "skin/IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB_rollover.png",
  "minHeight": 50,
  "horizontalAlign": "center",
  "top": "2%",
  "cursor": "hand",
  "visible": false,
  "paddingBottom": 0,
  "id": "IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB",
  "maxHeight": 50,
  "paddingTop": 0,
  "backgroundOpacity": 0,
  "minWidth": 50,
  "right": "2%",
  "shadow": false
 },
 {
  "backgroundColorDirection": "vertical",
  "overflow": "scroll",
  "scrollBarOpacity": 0.5,
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "verticalAlign": "top",
  "paddingRight": 0,
  "scrollBarColor": "#000000",
  "borderRadius": 0,
  "paddingLeft": 0,
  "borderSize": 0,
  "gap": 10,
  "class": "Container",
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "minHeight": 1,
  "horizontalAlign": "left",
  "top": "0%",
  "layout": "absolute",
  "visible": false,
  "paddingBottom": 0,
  "contentOpaque": false,
  "bottom": "0%",
  "id": "Container_53347472_4288_F6E6_4196_D7457B47D2CF",
  "backgroundColorRatios": [
   0,
   1
  ],
  "paddingTop": 0,
  "left": "0%",
  "backgroundOpacity": 0.3,
  "minWidth": 1,
  "right": "0%",
  "children": [
   "this.MapViewer",
   {
    "verticalAlign": "middle",
    "paddingRight": 0,
    "mode": "push",
    "paddingLeft": 0,
    "iconURL": "skin/IconButton_50D1A26C_4289_72E1_41CD_2B557DFCC24F.png",
    "height": "5.91%",
    "maxWidth": 50,
    "width": "5.07%",
    "transparencyActive": true,
    "borderRadius": 0,
    "class": "IconButton",
    "borderSize": 0,
    "rollOverIconURL": "skin/IconButton_50D1A26C_4289_72E1_41CD_2B557DFCC24F_rollover.png",
    "click": "this.setComponentVisibility(this.Container_53347472_4288_F6E6_4196_D7457B47D2CF, false, 0, this.effect_500E3733_4297_3267_41C9_4935C0BEBF39, 'hideEffect', false)",
    "minHeight": 50,
    "horizontalAlign": "center",
    "top": "5%",
    "cursor": "hand",
    "paddingBottom": 0,
    "id": "IconButton_50D1A26C_4289_72E1_41CD_2B557DFCC24F",
    "maxHeight": 50,
    "paddingTop": 0,
    "backgroundOpacity": 0,
    "minWidth": 50,
    "right": "5%",
    "shadow": false
   }
  ],
  "shadow": false,
  "scrollBarVisible": "rollOver"
 },
 {
  "scrollBarColor": "#000000",
  "overflow": "visible",
  "scrollBarOpacity": 0.5,
  "paddingRight": 0,
  "verticalAlign": "bottom",
  "paddingLeft": 0,
  "height": 160,
  "class": "Container",
  "borderRadius": 0,
  "borderSize": 0,
  "gap": 3,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "contentOpaque": false,
  "minHeight": 130,
  "horizontalAlign": "center",
  "layout": "vertical",
  "paddingBottom": 0,
  "bottom": "0.7%",
  "id": "Container_6EC9FEC0_76A2_F957_41C5_79AD4AF65B38",
  "maxHeight": 160,
  "paddingTop": 0,
  "left": "15%",
  "backgroundOpacity": 0,
  "minWidth": 1,
  "right": "15%",
  "children": [
   {
    "rollOverItemThumbnailShadow": true,
    "shadow": false,
    "backgroundColor": [
     "#000000"
    ],
    "itemBackgroundColorRatios": [],
    "itemLabelFontFamily": "Arial",
    "paddingRight": 5,
    "maxWidth": 770,
    "rollOverItemBackgroundColorDirection": "vertical",
    "itemThumbnailHeight": 60,
    "paddingLeft": 5,
    "gap": 7,
    "selectedItemBackgroundColor": [],
    "scrollBarWidth": 5,
    "scrollBarMargin": 2,
    "horizontalAlign": "left",
    "itemHorizontalAlign": "center",
    "itemMode": "normal",
    "playList": "this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist",
    "minHeight": 70,
    "rollOverItemThumbnailShadowBlurRadius": 15,
    "layout": "horizontal",
    "selectedItemLabelFontStyle": "italic",
    "paddingBottom": 5,
    "rollOverItemBackgroundColor": [
     "#000000"
    ],
    "rollOverItemLabelFontColor": "#FFFFFF",
    "backgroundColorRatios": [
     0
    ],
    "itemLabelFontColor": "#FFFFFF",
    "selectedItemThumbnailShadowVerticalLength": 0,
    "rollOverItemThumbnailShadowVerticalLength": 0,
    "rollOverItemLabelFontWeight": "bold",
    "itemPaddingBottom": 3,
    "selectedItemThumbnailShadowHorizontalLength": 0,
    "paddingTop": 5,
    "selectedItemLabelFontColor": "#FFFFFF",
    "itemThumbnailOpacity": 1,
    "itemThumbnailScaleMode": "fit_outside",
    "selectedItemLabelTextDecoration": "underline",
    "minWidth": 50,
    "itemLabelFontWeight": "normal",
    "itemThumbnailShadow": false,
    "rollOverItemLabelTextDecoration": "underline",
    "rollOverItemLabelFontStyle": "normal",
    "backgroundColorDirection": "vertical",
    "itemThumbnailBorderRadius": 30,
    "scrollBarOpacity": 1,
    "rollOverItemBackgroundColorRatios": [
     0
    ],
    "scrollBarColor": "#52B7EF",
    "itemLabelTextDecoration": "none",
    "scrollBarVisible": "rollOver",
    "itemPaddingRight": 3,
    "itemLabelFontStyle": "normal",
    "height": "100%",
    "selectedItemThumbnailShadowBlurRadius": 15,
    "class": "ThumbnailList",
    "itemThumbnailWidth": 60,
    "borderRadius": 3,
    "itemLabelHorizontalAlign": "center",
    "itemPaddingLeft": 3,
    "selectedItemLabelFontSize": 11,
    "borderSize": 0,
    "itemBorderRadius": 0,
    "selectedItemThumbnailShadow": true,
    "rollOverItemThumbnailShadowColor": "#FFFFFF",
    "selectedItemThumbnailShadowOpacity": 1,
    "rollOverItemThumbnailShadowHorizontalLength": 0,
    "width": "100%",
    "selectedItemBorderSize": 0,
    "itemPaddingTop": 3,
    "selectedItemBorderRadius": 0,
    "itemVerticalAlign": "middle",
    "itemBackgroundOpacity": 0,
    "id": "ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472",
    "maxHeight": 100,
    "rollOverItemThumbnailShadowOpacity": 1,
    "itemLabelGap": 5,
    "selectedItemLabelFontWeight": "bold",
    "itemBackgroundColorDirection": "vertical",
    "selectedItemBackgroundColorRatios": [],
    "itemOpacity": 1,
    "rollOverItemBackgroundOpacity": 0,
    "itemBackgroundColor": [],
    "itemLabelFontSize": 11,
    "selectedItemBackgroundOpacity": 0,
    "itemLabelPosition": "bottom",
    "selectedItemThumbnailShadowColor": "#FFFFFF",
    "backgroundOpacity": 0.25,
    "verticalAlign": "top"
   },
   {
    "scrollBarColor": "#000000",
    "overflow": "visible",
    "scrollBarOpacity": 0.5,
    "paddingRight": 0,
    "verticalAlign": "middle",
    "paddingLeft": 0,
    "height": 55,
    "maxWidth": 70,
    "width": 70,
    "class": "Container",
    "borderRadius": 5,
    "borderSize": 0,
    "contentOpaque": false,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "minHeight": 55,
    "horizontalAlign": "center",
    "layout": "absolute",
    "paddingBottom": 0,
    "id": "Container_86F3A56C_8E22_5B1D_41CA_9CE53436FE56",
    "gap": 0,
    "maxHeight": 55,
    "paddingTop": 0,
    "backgroundOpacity": 0,
    "minWidth": 70,
    "children": [
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "mode": "push",
      "toolTipPaddingRight": 6,
      "paddingLeft": 0,
      "iconURL": "skin/IconButton_87577B8F_8E22_AF1B_41CC_79EB87AE6DED.png",
      "height": "100%",
      "maxWidth": 70,
      "width": "100%",
      "toolTipPaddingBottom": 4,
      "toolTipTextShadowOpacity": 0,
      "transparencyActive": true,
      "toolTipPaddingTop": 4,
      "toolTip": "Info",
      "class": "IconButton",
      "toolTipFontSize": 11,
      "toolTipShadowOpacity": 1,
      "toolTipOpacity": 0.7,
      "borderSize": 0,
      "toolTipBorderSize": 1,
      "borderRadius": 0,
      "toolTipShadowVerticalLength": 0,
      "toolTipPaddingLeft": 6,
      "toolTipBorderColor": "#767676",
      "toolTipTextShadowColor": "#000000",
      "rollOverIconURL": "skin/IconButton_87577B8F_8E22_AF1B_41CC_79EB87AE6DED_rollover.png",
      "click": "this.showPopupImage(this.ImageResource_6ECEF4DB_6091_DDD1_41D4_2B884570086A, null, '85%', '85%', this.FadeInEffect_8ED05F70_96C4_F045_41DC_2AB82A556F92, this.FadeOutEffect_8ED06F70_96C4_F045_41DA_C74400CF7B15, {'rollOverIconWidth':25,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorDirection':'vertical','rollOverBackgroundColor':['#000000','#000000','#000000'],'pressedBackgroundColor':['#000000','#000000','#000000'],'iconHeight':25,'rollOverIconColor':'#52B7EF','backgroundColor':['#000000','#000000','#000000'],'rollOverBackgroundColorDirection':'vertical','pressedBorderSize':0,'iconColor':'#FFFFFF','backgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':10,'paddingBottom':10,'pressedIconLineWidth':3,'borderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':3,'pressedBorderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundOpacity':0.3,'paddingTop':10,'pressedIconColor':'#CCCCCC','paddingLeft':10,'pressedBackgroundColorDirection':'vertical','borderSize':0,'pressedIconWidth':25,'pressedIconHeight':25,'backgroundOpacity':0.15,'rollOverBorderColor':'#000000','rollOverBackgroundOpacity':0.5,'iconWidth':25,'rollOverIconHeight':25,'rollOverIconLineWidth':3}, null, null, false)",
      "toolTipFontStyle": "normal",
      "toolTipBorderRadius": 3,
      "minHeight": 25,
      "horizontalAlign": "center",
      "cursor": "hand",
      "visible": false,
      "paddingBottom": 0,
      "toolTipTextShadowBlurRadius": 3,
      "toolTipBackgroundColor": "#000000",
      "toolTipFontWeight": "normal",
      "id": "IconButton_87577B8F_8E22_AF1B_41CC_79EB87AE6DED",
      "maxHeight": 70,
      "paddingTop": 0,
      "toolTipShadowHorizontalLength": 0,
      "toolTipShadowSpread": 0,
      "toolTipShadowColor": "#333333",
      "toolTipShadowBlurRadius": 3,
      "backgroundOpacity": 0,
      "toolTipFontColor": "#606060",
      "minWidth": 25,
      "toolTipFontFamily": "Arial",
      "shadow": false
     },
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "mode": "push",
      "toolTipPaddingRight": 6,
      "paddingLeft": 0,
      "iconURL": "skin/IconButton_213ED70C_2DB2_E6C5_41B6_0CCE6C77E889.png",
      "height": "100%",
      "maxWidth": 70,
      "width": "100%",
      "toolTipPaddingBottom": 4,
      "toolTipTextShadowOpacity": 0,
      "transparencyActive": true,
      "toolTipPaddingTop": 4,
      "toolTip": "Play Video",
      "class": "IconButton",
      "toolTipFontSize": 11,
      "toolTipShadowOpacity": 1,
      "toolTipOpacity": 0.7,
      "borderSize": 0,
      "toolTipBorderSize": 1,
      "borderRadius": 0,
      "toolTipShadowVerticalLength": 0,
      "toolTipPaddingLeft": 6,
      "toolTipBorderColor": "#767676",
      "toolTipTextShadowColor": "#000000",
      "rollOverIconURL": "skin/IconButton_213ED70C_2DB2_E6C5_41B6_0CCE6C77E889_rollover.png",
      "click": "this.setMediaBehaviour(this.playList_70DB1861_7A37_201C_41D7_FF7F21945D31, 0); this.MainViewerVideoPlayer.play()",
      "toolTipFontStyle": "normal",
      "toolTipBorderRadius": 3,
      "minHeight": 25,
      "horizontalAlign": "center",
      "cursor": "hand",
      "visible": false,
      "paddingBottom": 0,
      "toolTipTextShadowBlurRadius": 3,
      "toolTipBackgroundColor": "#000000",
      "toolTipFontWeight": "normal",
      "id": "IconButton_213ED70C_2DB2_E6C5_41B6_0CCE6C77E889",
      "maxHeight": 70,
      "paddingTop": 0,
      "toolTipShadowHorizontalLength": 0,
      "toolTipShadowSpread": 0,
      "toolTipShadowColor": "#333333",
      "toolTipShadowBlurRadius": 3,
      "backgroundOpacity": 0,
      "toolTipFontColor": "#606060",
      "minWidth": 25,
      "toolTipFontFamily": "Arial",
      "shadow": false
     },
     {
      "verticalAlign": "top",
      "paddingRight": 0,
      "mode": "push",
      "toolTipPaddingRight": 6,
      "paddingLeft": 0,
      "iconURL": "skin/IconButton_67A0F254_76E6_A97F_419D_52AF6E3FE7C0.png",
      "height": "100%",
      "maxWidth": 70,
      "width": "100%",
      "toolTipPaddingBottom": 4,
      "toolTipTextShadowOpacity": 0,
      "transparencyActive": true,
      "toolTipPaddingTop": 4,
      "toolTip": "Show Panorama List",
      "class": "IconButton",
      "toolTipFontSize": 11,
      "toolTipShadowOpacity": 1,
      "toolTipOpacity": 0.7,
      "borderSize": 0,
      "toolTipBorderSize": 1,
      "borderRadius": 0,
      "toolTipShadowVerticalLength": 0,
      "toolTipPaddingLeft": 6,
      "toolTipBorderColor": "#767676",
      "toolTipTextShadowColor": "#000000",
      "click": "this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, true, 0, this.effect_508929C3_77ED_DB59_41D8_05A6C8F0681B, 'showEffect', false); this.setComponentVisibility(this.IconButton_843BBEF5_8E22_690F_419D_28CBDD771ACC, true, 0, this.effect_508929C3_77ED_DB59_41D8_05A6C8F0681B, 'showEffect', false); this.setComponentVisibility(this.IconButton_67A0F254_76E6_A97F_419D_52AF6E3FE7C0, false, 0, this.effect_518C2CD2_77ED_D97B_41C3_3AC87D499717, 'hideEffect', false)",
      "toolTipFontStyle": "normal",
      "toolTipBorderRadius": 3,
      "minHeight": 55,
      "horizontalAlign": "center",
      "cursor": "hand",
      "visible": false,
      "paddingBottom": 0,
      "toolTipTextShadowBlurRadius": 3,
      "toolTipBackgroundColor": "#000000",
      "toolTipFontWeight": "normal",
      "id": "IconButton_67A0F254_76E6_A97F_419D_52AF6E3FE7C0",
      "maxHeight": 55,
      "paddingTop": 0,
      "toolTipShadowHorizontalLength": 0,
      "toolTipShadowSpread": 0,
      "toolTipShadowColor": "#333333",
      "toolTipShadowBlurRadius": 3,
      "backgroundOpacity": 0,
      "toolTipFontColor": "#606060",
      "minWidth": 70,
      "toolTipFontFamily": "Arial",
      "shadow": false
     },
     {
      "verticalAlign": "top",
      "paddingRight": 0,
      "mode": "push",
      "toolTipPaddingRight": 6,
      "paddingLeft": 0,
      "iconURL": "skin/IconButton_843BBEF5_8E22_690F_419D_28CBDD771ACC.png",
      "height": "100%",
      "maxWidth": 70,
      "width": "100%",
      "toolTipPaddingBottom": 4,
      "toolTipTextShadowOpacity": 0,
      "transparencyActive": true,
      "toolTipPaddingTop": 4,
      "toolTip": "Hide Panorama List",
      "class": "IconButton",
      "toolTipFontSize": 11,
      "toolTipShadowOpacity": 1,
      "toolTipOpacity": 0.7,
      "borderSize": 0,
      "toolTipBorderSize": 1,
      "borderRadius": 0,
      "toolTipShadowVerticalLength": 0,
      "toolTipPaddingLeft": 6,
      "toolTipBorderColor": "#767676",
      "toolTipTextShadowColor": "#000000",
      "click": "this.setComponentVisibility(this.IconButton_67A0F254_76E6_A97F_419D_52AF6E3FE7C0, true, 0, this.effect_640860A9_76E7_E929_4192_305B50E5610A, 'showEffect', false); this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, false, 0, this.effect_5032FA51_77E2_5979_41D1_45E5EF039077, 'hideEffect', false); this.setComponentVisibility(this.IconButton_843BBEF5_8E22_690F_419D_28CBDD771ACC, false, 0, this.effect_5032FA51_77E2_5979_41D1_45E5EF039077, 'hideEffect', false)",
      "toolTipFontStyle": "normal",
      "toolTipBorderRadius": 3,
      "minHeight": 55,
      "horizontalAlign": "center",
      "cursor": "hand",
      "paddingBottom": 0,
      "toolTipTextShadowBlurRadius": 3,
      "toolTipBackgroundColor": "#000000",
      "toolTipFontWeight": "normal",
      "id": "IconButton_843BBEF5_8E22_690F_419D_28CBDD771ACC",
      "maxHeight": 55,
      "paddingTop": 0,
      "toolTipShadowHorizontalLength": 0,
      "toolTipShadowSpread": 0,
      "toolTipShadowColor": "#333333",
      "toolTipShadowBlurRadius": 3,
      "backgroundOpacity": 0,
      "toolTipFontColor": "#606060",
      "minWidth": 70,
      "toolTipFontFamily": "Arial",
      "shadow": false
     },
     "this.IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED",
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "mode": "push",
      "toolTipPaddingRight": 6,
      "paddingLeft": 0,
      "iconURL": "skin/IconButton_2FC9210C_3E8F_C4D4_41A7_10D1404CA49B.png",
      "height": "85%",
      "maxWidth": 70,
      "width": "85%",
      "toolTipPaddingBottom": 4,
      "toolTipTextShadowOpacity": 0,
      "transparencyActive": true,
      "toolTipPaddingTop": 4,
      "toolTip": "FLoor Plan",
      "class": "IconButton",
      "toolTipFontSize": 11,
      "toolTipShadowOpacity": 1,
      "toolTipOpacity": 0.7,
      "borderSize": 0,
      "toolTipBorderSize": 1,
      "borderRadius": 0,
      "toolTipShadowVerticalLength": 0,
      "toolTipPaddingLeft": 6,
      "toolTipBorderColor": "#767676",
      "toolTipTextShadowColor": "#000000",
      "click": "this.setComponentVisibility(this.Container_53347472_4288_F6E6_4196_D7457B47D2CF, true, 0, this.effect_51CB7B74_4299_12E2_41B4_829087983DE5, 'showEffect', false)",
      "toolTipFontStyle": "normal",
      "toolTipBorderRadius": 3,
      "minHeight": 25,
      "horizontalAlign": "center",
      "cursor": "hand",
      "visible": false,
      "paddingBottom": 0,
      "toolTipTextShadowBlurRadius": 3,
      "toolTipBackgroundColor": "#000000",
      "toolTipFontWeight": "normal",
      "id": "IconButton_2FC9210C_3E8F_C4D4_41A7_10D1404CA49B",
      "maxHeight": 70,
      "paddingTop": 0,
      "toolTipShadowHorizontalLength": 0,
      "toolTipShadowSpread": 0,
      "toolTipShadowColor": "#333333",
      "toolTipShadowBlurRadius": 3,
      "pressedIconURL": "skin/IconButton_2FC9210C_3E8F_C4D4_41A7_10D1404CA49B_pressed.png",
      "backgroundOpacity": 0,
      "toolTipFontColor": "#606060",
      "minWidth": 25,
      "toolTipFontFamily": "Arial",
      "shadow": false
     }
    ],
    "shadow": false,
    "scrollBarVisible": "rollOver"
   }
  ],
  "shadow": false,
  "scrollBarVisible": "rollOver"
 },
 {
  "backgroundColorDirection": "vertical",
  "backgroundColor": [
   "#000000"
  ],
  "paddingRight": 0,
  "borderRadius": 0,
  "paddingLeft": 0,
  "borderSize": 0,
  "class": "UIComponent",
  "minHeight": 0,
  "top": 0,
  "visible": false,
  "paddingBottom": 0,
  "bottom": 0,
  "id": "veilPopupPanorama",
  "backgroundColorRatios": [
   0
  ],
  "paddingTop": 0,
  "showEffect": {
   "easing": "cubic_in_out",
   "class": "FadeInEffect",
   "duration": 350
  },
  "left": 0,
  "backgroundOpacity": 0.55,
  "minWidth": 0,
  "right": 0,
  "shadow": false
 },
 {
  "backgroundColorDirection": "vertical",
  "backgroundColor": [],
  "paddingRight": 0,
  "borderRadius": 0,
  "paddingLeft": 0,
  "borderSize": 0,
  "class": "ZoomImage",
  "scaleMode": "custom",
  "minHeight": 0,
  "top": 0,
  "visible": false,
  "paddingBottom": 0,
  "bottom": 0,
  "id": "zoomImagePopupPanorama",
  "backgroundColorRatios": [],
  "paddingTop": 0,
  "left": 0,
  "backgroundOpacity": 1,
  "minWidth": 0,
  "right": 0,
  "shadow": false
 },
 {
  "gap": 5,
  "backgroundColorDirection": "vertical",
  "iconHeight": 20,
  "backgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "verticalAlign": "middle",
  "fontSize": 12,
  "mode": "push",
  "paddingRight": 5,
  "textDecoration": "none",
  "iconColor": "#000000",
  "borderRadius": 0,
  "iconBeforeLabel": true,
  "class": "CloseButton",
  "paddingLeft": 5,
  "iconWidth": 20,
  "borderSize": 0,
  "fontColor": "#FFFFFF",
  "minHeight": 0,
  "horizontalAlign": "center",
  "top": 10,
  "fontWeight": "normal",
  "visible": false,
  "paddingBottom": 5,
  "borderColor": "#000000",
  "cursor": "hand",
  "backgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "id": "closeButtonPopupPanorama",
  "fontFamily": "Arial",
  "layout": "horizontal",
  "iconLineWidth": 5,
  "shadowColor": "#000000",
  "paddingTop": 5,
  "showEffect": {
   "easing": "cubic_in_out",
   "class": "FadeInEffect",
   "duration": 350
  },
  "fontStyle": "normal",
  "rollOverIconColor": "#666666",
  "shadowBlurRadius": 6,
  "shadowSpread": 1,
  "pressedIconColor": "#888888",
  "backgroundOpacity": 0.3,
  "label": "",
  "minWidth": 0,
  "right": 10,
  "shadow": false
 }
], 
 "overflow": "visible",
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "mouseWheelEnabled": true,
 "height": "100%",
 "width": "100%",
 "borderRadius": 0,
 "class": "Player",
 "paddingLeft": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "buttonToggleMute": "this.IconButton_8105A313_8E22_BF0B_41E1_331C6035A930",
 "vrPolyfillScale": 0.5,
 "minHeight": 20,
 "horizontalAlign": "left",
 "layout": "absolute",
 "backgroundPreloadEnabled": true,
 "paddingBottom": 0,
 "scripts": {
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "unregisterKey": function(key){  delete window[key]; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "existsKey": function(key){  return key in window; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio) delete audios[audio.get('id')]; } if(audio) audio.stop(); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "getKey": function(key){  return window[key]; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "registerKey": function(key, value){  window[key] = value; },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } }
 },
 "id": "rootPlayer",
 "gap": 10,
 "paddingTop": 0,
 "start": "this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37], 'cardboardAvailable'); this.syncPlaylists([this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); this.playList_70C5F86B_7A37_20EC_41DA_C3517ED373D2.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA].forEach(function(component) { component.set('visible', false); }) }",
 "minWidth": 20,
 "shadow": false,
 "buttonToggleFullscreen": "this.IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA",
 "scrollBarVisible": "rollOver"
})