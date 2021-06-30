TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "buttonPlay": {
   "paddingLeft": 0,
   "minWidth": 25,
   "paddingRight": 0,
   "mode": "push",
   "toolTipPaddingRight": 6,
   "toolTipPaddingBottom": 4,
   "iconURL": "skin/IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED.png",
   "height": "100%",
   "width": "100%",
   "toolTip": "See Photos",
   "transparencyActive": true,
   "toolTipPaddingTop": 4,
   "borderRadius": 0,
   "toolTipBorderSize": 1,
   "toolTipTextShadowOpacity": 0,
   "toolTipFontSize": 14,
   "toolTipShadowOpacity": 1,
   "toolTipOpacity": 0.7,
   "borderSize": 0,
   "rollOverIconURL": "skin/IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED_rollover.png",
   "toolTipShadowVerticalLength": 0,
   "toolTipPaddingLeft": 6,
   "toolTipBorderColor": "#767676",
   "toolTipTextShadowColor": "#000000",
   "class": "IconButton",
   "toolTipFontStyle": "normal",
   "toolTipBorderRadius": 3,
   "horizontalAlign": "center",
   "click": "this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, true, 0, this.effect_98AADBB0_96C5_F0C5_41B2_1C4D08E503DB, 'showEffect', false); this.playList_52C963FB_5CA9_8904_41A5_58E33C074836.set('selectedIndex', 0)",
   "maxWidth": 70,
   "visible": false,
   "paddingBottom": 0,
   "maxHeight": 70,
   "cursor": "hand",
   "toolTipBackgroundColor": "#000000",
   "toolTipFontWeight": "normal",
   "id": "IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED",
   "toolTipTextShadowBlurRadius": 3,
   "toolTipShadowHorizontalLength": 0,
   "paddingTop": 0,
   "toolTipShadowSpread": 0,
   "toolTipShadowColor": "#333333",
   "toolTipShadowBlurRadius": 3,
   "minHeight": 25,
   "backgroundOpacity": 0,
   "shadow": false,
   "toolTipFontColor": "#606060",
   "toolTipFontFamily": "Arial",
   "verticalAlign": "middle"
  },
  "id": "MainViewerVideoPlayer",
  "viewerArea": "this.MainViewer",
  "displayPlaybackBar": true,
  "class": "VideoPlayer",
  "buttonStop": [
   {
    "paddingLeft": 0,
    "minWidth": 50,
    "paddingRight": 0,
    "mode": "push",
    "iconURL": "skin/IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4.png",
    "height": "5.48%",
    "width": "3.03%",
    "transparencyActive": true,
    "borderRadius": 0,
    "borderSize": 0,
    "rollOverIconURL": "skin/IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4_rollover.png",
    "class": "IconButton",
    "horizontalAlign": "center",
    "top": "2%",
    "click": "this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, false, 0, this.effect_9B0AF4E2_96C4_F045_41D3_0E00FEE03A15, 'hideEffect', false)",
    "maxWidth": 50,
    "paddingBottom": 0,
    "maxHeight": 50,
    "cursor": "hand",
    "id": "IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4",
    "paddingTop": 0,
    "minHeight": 50,
    "backgroundOpacity": 0,
    "shadow": false,
    "right": "2%",
    "verticalAlign": "middle"
   },
   "this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB"
  ]
 },
 {
  "buttonPlay": "this.IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED",
  "buttonPrevious": {
   "paddingLeft": 0,
   "minWidth": 70,
   "paddingRight": 0,
   "mode": "push",
   "iconURL": "skin/IconButton_9FEA51EA_96CC_905A_41D3_F42DB0CD0A74.png",
   "width": "4.24%",
   "transparencyActive": true,
   "borderRadius": 0,
   "borderSize": 0,
   "rollOverIconURL": "skin/IconButton_9FEA51EA_96CC_905A_41D3_F42DB0CD0A74_rollover.png",
   "class": "IconButton",
   "horizontalAlign": "center",
   "top": "40%",
   "maxWidth": 70,
   "paddingBottom": 0,
   "maxHeight": 70,
   "cursor": "hand",
   "bottom": "40%",
   "id": "IconButton_9FEA51EA_96CC_905A_41D3_F42DB0CD0A74",
   "paddingTop": 0,
   "left": "1%",
   "minHeight": 70,
   "backgroundOpacity": 0,
   "shadow": false,
   "verticalAlign": "middle"
  },
  "id": "ViewerAreaLabeled_9FD7235A_96CD_9045_41D9_23A3BCBDB1C6PhotoAlbumPlayer",
  "viewerArea": {
   "paddingLeft": 0,
   "paddingRight": 0,
   "progressBarBackgroundColorDirection": "vertical",
   "progressBackgroundColor": [
    "#FFFFFF"
   ],
   "progressBorderRadius": 0,
   "progressBarOpacity": 1,
   "toolTipPaddingBottom": 4,
   "playbackBarProgressBackgroundColorDirection": "vertical",
   "progressRight": 0,
   "toolTipBorderSize": 1,
   "playbackBarBackgroundColor": [
    "#FFFFFF"
   ],
   "toolTipShadowOpacity": 1,
   "toolTipOpacity": 0.7,
   "playbackBarBorderColor": "#FFFFFF",
   "playbackBarHeight": 10,
   "toolTipShadowVerticalLength": 0,
   "toolTipTextShadowColor": "#000000",
   "playbackBarHeadWidth": 6,
   "class": "ViewerArea",
   "toolTipFontStyle": "normal",
   "progressBackgroundOpacity": 1,
   "playbackBarHeadBackgroundColorDirection": "vertical",
   "progressBottom": 2,
   "playbackBarBackgroundColorDirection": "vertical",
   "paddingBottom": 0,
   "playbackBarHeadShadowVerticalLength": 0,
   "playbackBarProgressBorderSize": 0,
   "playbackBarRight": 0,
   "toolTipBackgroundColor": "#000000",
   "progressBorderSize": 0,
   "progressBarBorderSize": 0,
   "progressBarBorderRadius": 0,
   "playbackBarOpacity": 1,
   "playbackBarProgressBorderRadius": 0,
   "paddingTop": 0,
   "playbackBarHeadShadow": true,
   "toolTipShadowSpread": 0,
   "transitionMode": "blending",
   "toolTipShadowColor": "#333333",
   "toolTipShadowBlurRadius": 3,
   "minHeight": 1,
   "toolTipFontColor": "#606060",
   "playbackBarBorderRadius": 0,
   "minWidth": 1,
   "playbackBarProgressBorderColor": "#000000",
   "playbackBarHeadBackgroundColor": [
    "#111111",
    "#666666"
   ],
   "toolTipPaddingRight": 6,
   "width": "100%",
   "playbackBarHeadBorderRadius": 0,
   "toolTipTextShadowOpacity": 0,
   "height": "100%",
   "toolTipPaddingTop": 4,
   "borderRadius": 0,
   "toolTipFontSize": 14,
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
   "progressBarBackgroundColorRatios": [
    0
   ],
   "progressHeight": 10,
   "left": "0%",
   "progressBorderColor": "#000000",
   "shadow": false,
   "playbackBarBottom": 0,
   "progressBarBackgroundColor": [
    "#3399FF"
   ],
   "toolTipFontFamily": "Arial",
   "playbackBarHeadShadowHorizontalLength": 0,
   "progressOpacity": 1
  },
  "buttonNext": {
   "paddingLeft": 0,
   "minWidth": 70,
   "paddingRight": 0,
   "mode": "push",
   "iconURL": "skin/IconButton_9FB9BD3F_96C5_703B_41D7_65AEE6E85A96.png",
   "width": "4.24%",
   "transparencyActive": true,
   "borderRadius": 0,
   "borderSize": 0,
   "rollOverIconURL": "skin/IconButton_9FB9BD3F_96C5_703B_41D7_65AEE6E85A96_rollover.png",
   "class": "IconButton",
   "horizontalAlign": "center",
   "top": "40%",
   "maxWidth": 70,
   "paddingBottom": 0,
   "maxHeight": 70,
   "cursor": "hand",
   "bottom": "40%",
   "id": "IconButton_9FB9BD3F_96C5_703B_41D7_65AEE6E85A96",
   "paddingTop": 0,
   "minHeight": 70,
   "backgroundOpacity": 0,
   "shadow": false,
   "right": "1%",
   "verticalAlign": "middle"
  },
  "class": "PhotoAlbumPlayer",
  "buttonStop": [
   "this.IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4",
   "this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB"
  ]
 },
 {
  "hfovMax": 120,
  "mapLocations": [
   {
    "x": 303.34,
    "class": "PanoramaMapLocation",
    "y": 415.62,
    "angle": 71.83,
    "map": {
     "initialZoomFactor": 1,
     "fieldOfViewOverlayInsideColor": "#999999",
     "fieldOfViewOverlayInsideOpacity": 0.3,
     "width": 1468,
     "id": "map_4E02A832_427B_EE04_41CC_8E1CEC03E8D3",
     "height": 864,
     "minimumZoomFactor": 0.5,
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
     "fieldOfViewOverlayOutsideColor": "#000000",
     "thumbnailUrl": "media/map_4E02A832_427B_EE04_41CC_8E1CEC03E8D3_t.jpg",
     "fieldOfViewOverlayOutsideOpacity": 0,
     "label": "first floor",
     "overlays": [
      {
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
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 0)"
        }
       ],
       "rollOverDisplay": false,
       "image": {
        "x": 253.34,
        "class": "HotspotMapOverlayImage",
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
        }
       },
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      }
     ],
     "fieldOfViewOverlayRadiusScale": 0.09,
     "scaleMode": "fit_inside",
     "maximumZoomFactor": 1.2,
     "class": "Map"
    }
   }
  ],
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E_t.jpg",
  "id": "panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E",
  "hfovMin": 60,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E_t.jpg",
    "overlays": [
     {
      "useHandCursor": true,
      "id": "overlay_475F4865_559D_57C8_41D3_E745D8290F70",
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 24,
           "width": 24,
           "url": "media/panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 5.94,
        "yaw": -172.81,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -7.97
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E, this.camera_552A6ED5_5BF2_F2BA_41D6_D4FD03CB3A2E); this.mainPlayList.set('selectedIndex', 1)",
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true,
        "toolTip": "02_Entrance",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "yaw": -172.81,
        "hfov": 5.94,
        "image": {
         "levels": [
          {
           "height": 49,
           "width": 49,
           "url": "media/panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -7.97
       }
      ]
     },
     {
      "useHandCursor": true,
      "id": "overlay_57DB1062_5BD6_CD9E_41D5_EB829B3E698C",
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 24,
           "width": 24,
           "url": "media/panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E_0_HS_5_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 5.99,
        "yaw": -172.86,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -4.03
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E, this.camera_51A7C7A9_5CA9_8904_41C4_205F04384C91); this.mainPlayList.set('selectedIndex', 1)",
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true,
        "toolTip": "02_Entrance",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "yaw": -172.86,
        "hfov": 5.99,
        "image": {
         "levels": [
          {
           "height": 49,
           "width": 49,
           "url": "media/panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E_0_HS_5_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -4.03
       }
      ]
     },
     {
      "useHandCursor": true,
      "id": "overlay_4750A865_559D_57C8_41B4_524DB443B897",
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 1,
           "width": 1,
           "url": "media/panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 0,
        "yaw": -171.35,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 85.73
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116, this.camera_51FFD7E3_5CA9_8904_41C7_2DB000434EA0); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 5); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 8)"
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
           "url": "media/panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E_0_HS_1_0.png",
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
       "height": 1500,
       "width": 3000,
       "url": "media/panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E_hq.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "label": "01_Street View",
  "hfov": 360,
  "adjacentPanoramas": [
   {
    "panorama": {
     "hfovMax": 120,
     "partial": false,
     "pitch": 0,
     "thumbnailUrl": "media/panorama_46009756_572D_4167_41C6_2B49BD1EF7CE_t.jpg",
     "id": "panorama_46009756_572D_4167_41C6_2B49BD1EF7CE",
     "hfovMin": 60,
     "frames": [
      {
       "thumbnailUrl": "media/panorama_46009756_572D_4167_41C6_2B49BD1EF7CE_t.jpg",
       "overlays": [
        {
         "useHandCursor": true,
         "id": "overlay_46008756_572D_4167_41D0_C46707775FAB",
         "maps": [
          {
           "image": {
            "levels": [
             {
              "height": 69,
              "width": 69,
              "url": "media/panorama_46009756_572D_4167_41C6_2B49BD1EF7CE_0_HS_2_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 14.59,
           "yaw": -160.04,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -29.69
          }
         ],
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF, this.camera_57262CFF_5BF2_F667_41D4_80634CF1C7DB); this.mainPlayList.set('selectedIndex', 5)",
           "mapColor": "#FF0000",
           "displayTooltipInTouchScreens": true,
           "toolTip": "06_Master",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "items": [
          {
           "yaw": -160.04,
           "hfov": 14.59,
           "image": {
            "levels": [
             {
              "height": 139,
              "width": 139,
              "url": "media/panorama_46009756_572D_4167_41C6_2B49BD1EF7CE_0_HS_2_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -29.69
          }
         ]
        },
        {
         "useHandCursor": true,
         "id": "overlay_4600A756_572D_4167_41C9_64294F212518",
         "maps": [
          {
           "image": {
            "levels": [
             {
              "height": 1,
              "width": 1,
              "url": "media/panorama_46009756_572D_4167_41C6_2B49BD1EF7CE_0_HS_1_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 0,
           "yaw": -162.92,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": 80.2
          }
         ],
         "enabledInCardboard": true,
         "rollOverDisplay": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116, this.camera_502034BE_5CA9_8F7C_41D3_9A17689A679D); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 8)"
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
              "url": "media/panorama_46009756_572D_4167_41C6_2B49BD1EF7CE_0_HS_1_0.png",
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
         "useHandCursor": true,
         "id": "overlay_506D085B_5C1B_43E9_41C4_750FC45D63B1",
         "maps": [
          {
           "image": {
            "levels": [
             {
              "height": 64,
              "width": 64,
              "url": "media/panorama_46009756_572D_4167_41C6_2B49BD1EF7CE_0_HS_3_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 14.81,
           "yaw": -159.89,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -18.29
          }
         ],
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF, this.camera_52499467_5CA9_8F0C_418F_395C51FD7782); this.mainPlayList.set('selectedIndex', 5)",
           "mapColor": "#FF0000",
           "displayTooltipInTouchScreens": true,
           "toolTip": "06_Master",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "items": [
          {
           "yaw": -159.89,
           "hfov": 14.81,
           "image": {
            "levels": [
             {
              "height": 129,
              "width": 129,
              "url": "media/panorama_46009756_572D_4167_41C6_2B49BD1EF7CE_0_HS_3_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -18.29
          }
         ]
        }
       ],
       "class": "SphericPanoramaFrame",
       "sphere": {
        "levels": [
         {
          "height": 1500,
          "width": 3000,
          "url": "media/panorama_46009756_572D_4167_41C6_2B49BD1EF7CE_hq.jpeg",
          "class": "ImageResourceLevel"
         }
        ],
        "class": "ImageResource"
       }
      }
     ],
     "label": "06b_WC",
     "hfov": 360,
     "adjacentPanoramas": [
      {
       "panorama": {
        "hfovMax": 120,
        "partial": false,
        "pitch": 0,
        "thumbnailUrl": "media/panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC_t.jpg",
        "id": "panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC",
        "hfovMin": 60,
        "frames": [
         {
          "thumbnailUrl": "media/panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC_t.jpg",
          "overlays": [
           {
            "useHandCursor": true,
            "id": "overlay_46165BEA_572E_C12E_41C3_9D907FE87C25",
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "height": 49,
                 "width": 49,
                 "url": "media/panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC_0_HS_0_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "hfov": 11.72,
              "yaw": 112.14,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": 12.4
             }
            ],
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF, this.camera_55D7BBEA_5BF2_F263_41D2_B1CC2C57A60F); this.mainPlayList.set('selectedIndex', 5)",
              "mapColor": "#FF0000",
              "displayTooltipInTouchScreens": true,
              "toolTip": "06_Master\u000a",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "items": [
             {
              "yaw": 112.14,
              "hfov": 11.72,
              "image": {
               "levels": [
                {
                 "height": 99,
                 "width": 99,
                 "url": "media/panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC_0_HS_0_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "class": "HotspotPanoramaOverlayImage",
              "pitch": 12.4
             }
            ]
           },
           {
            "useHandCursor": true,
            "id": "overlay_4616BBEA_572E_C12E_41AF_EC82A979FD75",
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "height": 49,
                 "width": 49,
                 "url": "media/panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC_0_HS_2_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "hfov": 10.41,
              "yaw": 112.39,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -29.8
             }
            ],
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_47B53902_572E_CEDF_41CC_C256D31A5443, this.camera_55FFAC21_5BF2_F59B_41D2_A4CCD4BC65CD); this.mainPlayList.set('selectedIndex', 3)",
              "mapColor": "#FF0000",
              "displayTooltipInTouchScreens": true,
              "toolTip": "04_Living Room",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "items": [
             {
              "yaw": 112.39,
              "hfov": 10.41,
              "image": {
               "levels": [
                {
                 "height": 99,
                 "width": 99,
                 "url": "media/panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC_0_HS_2_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -29.8
             }
            ]
           },
           {
            "useHandCursor": true,
            "id": "overlay_4616ABEA_572E_C12E_41A1_596C274FCBFE",
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "height": 1,
                 "width": 1,
                 "url": "media/panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC_0_HS_1_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "hfov": 0,
              "yaw": -170.2,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": 81.21
             }
            ],
            "enabledInCardboard": true,
            "rollOverDisplay": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116, this.camera_50671517_5CA9_890C_41D6_0D1D2DADEC38); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 8); this.mainPlayList.set('selectedIndex', 9)"
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
                 "url": "media/panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC_0_HS_1_0.png",
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
            "useHandCursor": true,
            "id": "overlay_57769E2A_5BEB_BFA8_41B2_5C99266FE40B",
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "height": 44,
                 "width": 44,
                 "url": "media/panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC_0_HS_3_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "hfov": 10.06,
              "yaw": 112.04,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": 21.29
             }
            ],
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF, this.camera_500894E5_5CA9_8F0C_41C6_DB23D17ED07A); this.mainPlayList.set('selectedIndex', 5)",
              "mapColor": "#FF0000",
              "displayTooltipInTouchScreens": true,
              "toolTip": "06_Master",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "items": [
             {
              "yaw": 112.04,
              "hfov": 10.06,
              "image": {
               "levels": [
                {
                 "height": 89,
                 "width": 89,
                 "url": "media/panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC_0_HS_3_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "class": "HotspotPanoramaOverlayImage",
              "pitch": 21.29
             }
            ]
           },
           {
            "useHandCursor": true,
            "id": "overlay_57A6CB58_5BED_C5E8_41BA_36A078F34542",
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "height": 44,
                 "width": 44,
                 "url": "media/panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC_0_HS_4_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "hfov": 8.45,
              "yaw": 112.55,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -38.5
             }
            ],
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_47B53902_572E_CEDF_41CC_C256D31A5443, this.camera_50145502_5CA9_8904_419E_539B6FF0E4E4); this.mainPlayList.set('selectedIndex', 3)",
              "mapColor": "#FF0000",
              "displayTooltipInTouchScreens": true,
              "toolTip": "04_Living Room",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "items": [
             {
              "yaw": 112.55,
              "hfov": 8.45,
              "image": {
               "levels": [
                {
                 "height": 89,
                 "width": 89,
                 "url": "media/panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC_0_HS_4_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -38.5
             }
            ]
           }
          ],
          "class": "SphericPanoramaFrame",
          "sphere": {
           "levels": [
            {
             "height": 1500,
             "width": 3000,
             "url": "media/panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC_hq.jpeg",
             "class": "ImageResourceLevel"
            }
           ],
           "class": "ImageResource"
          }
         }
        ],
        "label": "05_1Bedroom",
        "hfov": 360,
        "adjacentPanoramas": [
         {
          "panorama": "this.panorama_46009756_572D_4167_41C6_2B49BD1EF7CE",
          "yaw": -170.2,
          "class": "AdjacentPanorama",
          "backwardYaw": -162.92,
          "distance": 1
         },
         {
          "panorama": {
           "hfovMax": 120,
           "partial": false,
           "pitch": 0,
           "thumbnailUrl": "media/panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E_t.jpg",
           "id": "panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E",
           "hfovMin": 60,
           "frames": [
            {
             "thumbnailUrl": "media/panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E_t.jpg",
             "overlays": [
              {
               "useHandCursor": true,
               "id": "overlay_447F356F_5593_B9D8_41C7_F6DF7CCD3B4C",
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "height": 25,
                    "width": 25,
                    "url": "media/panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E_0_HS_0_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "hfov": 5.95,
                 "yaw": -14.93,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -7.21
                }
               ],
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D, this.camera_55581C8B_5BF2_F6AF_41D1_02AAAFF73E03); this.mainPlayList.set('selectedIndex', 2)",
                 "mapColor": "#FF0000",
                 "displayTooltipInTouchScreens": true,
                 "toolTip": "03_Pool",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "items": [
                {
                 "yaw": -14.93,
                 "hfov": 5.95,
                 "image": {
                  "levels": [
                   {
                    "height": 50,
                    "width": 50,
                    "url": "media/panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E_0_HS_0_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -7.21
                }
               ]
              },
              {
               "useHandCursor": true,
               "id": "overlay_447F256F_5593_B9D8_41CF_5C6A714CBEB7",
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "height": 25,
                    "width": 25,
                    "url": "media/panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E_0_HS_6_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "hfov": 5.45,
                 "yaw": 1.8,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -24.79
                }
               ],
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E, this.camera_55602CAB_5BF2_F6EF_41A1_3BA349C88636); this.mainPlayList.set('selectedIndex', 0)",
                 "mapColor": "#FF0000",
                 "displayTooltipInTouchScreens": true,
                 "toolTip": "01_Street View",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "items": [
                {
                 "yaw": 1.8,
                 "hfov": 5.45,
                 "image": {
                  "levels": [
                   {
                    "height": 50,
                    "width": 50,
                    "url": "media/panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E_0_HS_6_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -24.79
                }
               ]
              },
              {
               "useHandCursor": true,
               "id": "overlay_447F056F_5593_B9D8_41CE_B187244AECBF",
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "height": 1,
                    "width": 1,
                    "url": "media/panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E_0_HS_1_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "hfov": 0,
                 "yaw": -170.68,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": 83.2
                }
               ],
               "enabledInCardboard": true,
               "rollOverDisplay": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116, this.camera_519E856C_5CA9_891C_41BD_33E065ABDE60); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 5); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 8)"
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
                    "url": "media/panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E_0_HS_1_0.png",
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
               "useHandCursor": true,
               "id": "overlay_5793A8C2_5BD2_3E99_41CF_E849618F9B2B",
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "height": 15,
                    "width": 15,
                    "url": "media/panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E_0_HS_7_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "hfov": 3.59,
                 "yaw": -14.85,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -4.02
                }
               ],
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D, this.camera_51ACD547_5CA9_890C_418C_C822F8529B23); this.mainPlayList.set('selectedIndex', 2)",
                 "mapColor": "#FF0000",
                 "displayTooltipInTouchScreens": true,
                 "toolTip": "03_Pool",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "items": [
                {
                 "yaw": -14.85,
                 "hfov": 3.59,
                 "image": {
                  "levels": [
                   {
                    "height": 30,
                    "width": 30,
                    "url": "media/panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E_0_HS_7_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -4.02
                }
               ]
              },
              {
               "useHandCursor": true,
               "id": "overlay_572B55CD_5BCE_76AB_41A0_59FCFB6B5DB1",
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "height": 15,
                    "width": 15,
                    "url": "media/panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E_0_HS_8_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "hfov": 3.35,
                 "yaw": 1.87,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -21.38
                }
               ],
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E, this.camera_51811563_5CA9_8904_41D6_CCB911867926); this.mainPlayList.set('selectedIndex', 0)",
                 "mapColor": "#FF0000",
                 "displayTooltipInTouchScreens": true,
                 "toolTip": "01_Street View",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "items": [
                {
                 "yaw": 1.87,
                 "hfov": 3.35,
                 "image": {
                  "levels": [
                   {
                    "height": 30,
                    "width": 30,
                    "url": "media/panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E_0_HS_8_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -21.38
                }
               ]
              }
             ],
             "class": "SphericPanoramaFrame",
             "sphere": {
              "levels": [
               {
                "height": 1500,
                "width": 3000,
                "url": "media/panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E_hq.jpeg",
                "class": "ImageResourceLevel"
               }
              ],
              "class": "ImageResource"
             }
            }
           ],
           "label": "02_Entrance",
           "hfov": 360,
           "adjacentPanoramas": [
            {
             "panorama": "this.panorama_46009756_572D_4167_41C6_2B49BD1EF7CE",
             "yaw": -170.68,
             "class": "AdjacentPanorama",
             "backwardYaw": -162.92,
             "distance": 1
            },
            {
             "panorama": "this.panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC",
             "yaw": -170.68,
             "class": "AdjacentPanorama",
             "backwardYaw": -170.2,
             "distance": 1
            },
            {
             "panorama": {
              "hfovMax": 120,
              "partial": false,
              "pitch": 0,
              "thumbnailUrl": "media/panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D_t.jpg",
              "id": "panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D",
              "hfovMin": 60,
              "frames": [
               {
                "thumbnailUrl": "media/panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D_t.jpg",
                "overlays": [
                 {
                  "useHandCursor": true,
                  "id": "overlay_4404034D_55AE_B9D8_41D4_07F6934855E0",
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "height": 39,
                       "width": 39,
                       "url": "media/panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D_0_HS_2_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "hfov": 13.86,
                    "yaw": 109.07,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": 15.72
                   }
                  ],
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "click": "this.startPanoramaWithCamera(this.panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116, this.camera_56043BB0_5BF2_F2FA_41B1_1DE6A0E08A4C); this.mainPlayList.set('selectedIndex', 9)",
                    "mapColor": "#FF0000",
                    "displayTooltipInTouchScreens": true,
                    "toolTip": "08_Rooftop",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "items": [
                   {
                    "yaw": 109.07,
                    "hfov": 13.86,
                    "image": {
                     "levels": [
                      {
                       "height": 79,
                       "width": 79,
                       "url": "media/panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D_0_HS_2_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": 15.72
                   }
                  ]
                 },
                 {
                  "useHandCursor": true,
                  "id": "overlay_4404134D_55AE_B9D8_41B9_1813EAE5CA83",
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "height": 39,
                       "width": 39,
                       "url": "media/panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D_0_HS_0_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "hfov": 12.5,
                    "yaw": 108.57,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -29.75
                   }
                  ],
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "click": "this.startPanoramaWithCamera(this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF, this.camera_56700B7F_5BF2_F267_41C2_DC8D8F885C23); this.mainPlayList.set('selectedIndex', 5)",
                    "mapColor": "#FF0000",
                    "displayTooltipInTouchScreens": true,
                    "toolTip": "06_Master",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "items": [
                   {
                    "yaw": 108.57,
                    "hfov": 12.5,
                    "image": {
                     "levels": [
                      {
                       "height": 79,
                       "width": 79,
                       "url": "media/panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D_0_HS_0_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -29.75
                   }
                  ]
                 },
                 {
                  "useHandCursor": true,
                  "id": "overlay_4404534D_55AE_B9D8_41B2_377AB17E4600",
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "height": 1,
                       "width": 1,
                       "url": "media/panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D_0_HS_1_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "hfov": 0,
                    "yaw": -172.21,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": 81.71
                   }
                  ],
                  "enabledInCardboard": true,
                  "rollOverDisplay": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E, this.camera_510855B7_5CA9_890C_41CC_4625FFF4192A); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 4)"
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
                       "url": "media/panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D_0_HS_1_0.png",
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
                  "useHandCursor": true,
                  "id": "overlay_5080A170_5C1D_C5B7_41C0_472F46DC3820",
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "height": 34,
                       "width": 34,
                       "url": "media/panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D_0_HS_3_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "hfov": 11.26,
                    "yaw": 108.92,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": 26.67
                   }
                  ],
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "click": "this.startPanoramaWithCamera(this.panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116, this.camera_510525C1_5CA9_8904_41CD_B10584F13413); this.mainPlayList.set('selectedIndex', 9)",
                    "mapColor": "#FF0000",
                    "displayTooltipInTouchScreens": true,
                    "toolTip": "08_Rooftop",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "items": [
                   {
                    "yaw": 108.92,
                    "hfov": 11.26,
                    "image": {
                     "levels": [
                      {
                       "height": 69,
                       "width": 69,
                       "url": "media/panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D_0_HS_3_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": 26.67
                   }
                  ]
                 },
                 {
                  "useHandCursor": true,
                  "id": "overlay_508B4A17_5C1F_4779_4187_6F9E39735C4A",
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "height": 34,
                       "width": 34,
                       "url": "media/panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D_0_HS_4_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "hfov": 9.63,
                    "yaw": 108.92,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -40.15
                   }
                  ],
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "click": "this.startPanoramaWithCamera(this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF, this.camera_51C4A591_5CA9_8904_4169_9B54E7DE2660); this.mainPlayList.set('selectedIndex', 5)",
                    "mapColor": "#FF0000",
                    "displayTooltipInTouchScreens": true,
                    "toolTip": "06_Master",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "items": [
                   {
                    "yaw": 108.92,
                    "hfov": 9.63,
                    "image": {
                     "levels": [
                      {
                       "height": 69,
                       "width": 69,
                       "url": "media/panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D_0_HS_4_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -40.15
                   }
                  ]
                 }
                ],
                "class": "SphericPanoramaFrame",
                "sphere": {
                 "levels": [
                  {
                   "height": 1000,
                   "width": 2000,
                   "url": "media/panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D_hq.jpeg",
                   "class": "ImageResourceLevel"
                  }
                 ],
                 "class": "ImageResource"
                }
               }
              ],
              "label": "07_2Beds Room",
              "hfov": 360,
              "adjacentPanoramas": [
               {
                "panorama": "this.panorama_46009756_572D_4167_41C6_2B49BD1EF7CE",
                "yaw": -172.21,
                "class": "AdjacentPanorama",
                "backwardYaw": -162.92,
                "distance": 1
               },
               {
                "panorama": "this.panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC",
                "yaw": -172.21,
                "class": "AdjacentPanorama",
                "backwardYaw": -170.2,
                "distance": 1
               },
               {
                "panorama": "this.panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E",
                "yaw": -172.21,
                "class": "AdjacentPanorama",
                "backwardYaw": -170.68,
                "distance": 1
               },
               {
                "panorama": {
                 "hfovMax": 120,
                 "partial": false,
                 "pitch": 0,
                 "thumbnailUrl": "media/panorama_45750F9A_5593_A978_41D1_DB2A12878BDF_t.jpg",
                 "id": "panorama_45750F9A_5593_A978_41D1_DB2A12878BDF",
                 "hfovMin": 60,
                 "frames": [
                  {
                   "thumbnailUrl": "media/panorama_45750F9A_5593_A978_41D1_DB2A12878BDF_t.jpg",
                   "overlays": [
                    {
                     "useHandCursor": true,
                     "id": "overlay_45751F9A_5593_A978_419E_9D0477D55A63",
                     "maps": [
                      {
                       "image": {
                        "levels": [
                         {
                          "height": 69,
                          "width": 69,
                          "url": "media/panorama_45750F9A_5593_A978_41D1_DB2A12878BDF_0_HS_0_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "hfov": 14.56,
                       "yaw": 164.53,
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -29.94
                      }
                     ],
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "click": "this.startPanoramaWithCamera(this.panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C, this.camera_569B6D6C_5BF2_F669_41A7_8467FF9A6DAA); this.mainPlayList.set('selectedIndex', 6)",
                       "mapColor": "#FF0000",
                       "displayTooltipInTouchScreens": true,
                       "toolTip": "06a_Balcony",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "items": [
                      {
                       "yaw": 164.53,
                       "hfov": 14.56,
                       "image": {
                        "levels": [
                         {
                          "height": 139,
                          "width": 139,
                          "url": "media/panorama_45750F9A_5593_A978_41D1_DB2A12878BDF_0_HS_0_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": -29.94
                      }
                     ]
                    },
                    {
                     "useHandCursor": true,
                     "id": "overlay_45756F9A_5593_A978_41C5_5DEA8239FD11",
                     "maps": [
                      {
                       "image": {
                        "levels": [
                         {
                          "height": 59,
                          "width": 59,
                          "url": "media/panorama_45750F9A_5593_A978_41D1_DB2A12878BDF_0_HS_2_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "hfov": 13.85,
                       "yaw": 83.7,
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -15.93
                      }
                     ],
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "click": "this.startPanoramaWithCamera(this.panorama_46009756_572D_4167_41C6_2B49BD1EF7CE, this.camera_56E74D59_5BF2_F7AA_41D0_B6C262499B65); this.mainPlayList.set('selectedIndex', 7)",
                       "mapColor": "#FF0000",
                       "displayTooltipInTouchScreens": true,
                       "toolTip": "06b_WC",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "items": [
                      {
                       "yaw": 83.7,
                       "hfov": 13.85,
                       "image": {
                        "levels": [
                         {
                          "height": 119,
                          "width": 119,
                          "url": "media/panorama_45750F9A_5593_A978_41D1_DB2A12878BDF_0_HS_2_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": -15.93
                      }
                     ]
                    },
                    {
                     "useHandCursor": true,
                     "id": "overlay_45757F9A_5593_A978_41CE_912DDA5CD743",
                     "maps": [
                      {
                       "image": {
                        "levels": [
                         {
                          "height": 39,
                          "width": 39,
                          "url": "media/panorama_45750F9A_5593_A978_41D1_DB2A12878BDF_0_HS_3_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "hfov": 9.55,
                       "yaw": 35.32,
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": 6.07
                      }
                     ],
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "click": "this.startPanoramaWithCamera(this.panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D, this.camera_56C57D3C_5BF2_F7EA_41BA_23AB5285E45A); this.mainPlayList.set('selectedIndex', 8)",
                       "mapColor": "#FF0000",
                       "displayTooltipInTouchScreens": true,
                       "toolTip": "07_2Beds Room",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "items": [
                      {
                       "yaw": 35.32,
                       "hfov": 9.55,
                       "image": {
                        "levels": [
                         {
                          "height": 79,
                          "width": 79,
                          "url": "media/panorama_45750F9A_5593_A978_41D1_DB2A12878BDF_0_HS_3_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": 6.07
                      }
                     ]
                    },
                    {
                     "useHandCursor": true,
                     "id": "overlay_58837D58_56A1_81B9_41CB_BA3BEC867C09",
                     "maps": [
                      {
                       "image": {
                        "levels": [
                         {
                          "height": 39,
                          "width": 39,
                          "url": "media/panorama_45750F9A_5593_A978_41D1_DB2A12878BDF_0_HS_4_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "hfov": 9.37,
                       "yaw": 35.07,
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -12.53
                      }
                     ],
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "click": "this.startPanoramaWithCamera(this.panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC, this.camera_56F35D45_5BF2_F79A_41D0_857D96DC10DF); this.mainPlayList.set('selectedIndex', 4)",
                       "mapColor": "#FF0000",
                       "displayTooltipInTouchScreens": true,
                       "toolTip": "05_1Bedroom",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "items": [
                      {
                       "yaw": 35.07,
                       "hfov": 9.37,
                       "image": {
                        "levels": [
                         {
                          "height": 79,
                          "width": 79,
                          "url": "media/panorama_45750F9A_5593_A978_41D1_DB2A12878BDF_0_HS_4_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": -12.53
                      }
                     ]
                    },
                    {
                     "useHandCursor": true,
                     "id": "overlay_45754F9A_5593_A978_41C5_5FC9223E8F5C",
                     "maps": [
                      {
                       "image": {
                        "levels": [
                         {
                          "height": 1,
                          "width": 1,
                          "url": "media/panorama_45750F9A_5593_A978_41D1_DB2A12878BDF_0_HS_1_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "hfov": 0,
                       "yaw": -162.92,
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": 76.94
                      }
                     ],
                     "enabledInCardboard": true,
                     "rollOverDisplay": true,
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116, this.camera_52824640_5CA9_8B04_41B7_229C001304EA); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 3)"
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
                          "url": "media/panorama_45750F9A_5593_A978_41D1_DB2A12878BDF_0_HS_1_0.png",
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
                     "useHandCursor": true,
                     "id": "overlay_57A78873_5BEF_C3BF_41BD_8AE3C45B5803",
                     "maps": [
                      {
                       "image": {
                        "levels": [
                         {
                          "height": 64,
                          "width": 64,
                          "url": "media/panorama_45750F9A_5593_A978_41D1_DB2A12878BDF_0_HS_5_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "hfov": 14.75,
                       "yaw": 164.69,
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -19.04
                      }
                     ],
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "click": "this.startPanoramaWithCamera(this.panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C, this.camera_52A8160F_5CA9_8B1D_41D4_816730F28328); this.mainPlayList.set('selectedIndex', 6)",
                       "mapColor": "#FF0000",
                       "displayTooltipInTouchScreens": true,
                       "toolTip": "06a_Balcony",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "items": [
                      {
                       "yaw": 164.69,
                       "hfov": 14.75,
                       "image": {
                        "levels": [
                         {
                          "height": 129,
                          "width": 129,
                          "url": "media/panorama_45750F9A_5593_A978_41D1_DB2A12878BDF_0_HS_5_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": -19.04
                      }
                     ]
                    },
                    {
                     "useHandCursor": true,
                     "id": "overlay_56F9D46A_5BED_43A8_41D0_1E74CFFA5811",
                     "maps": [
                      {
                       "image": {
                        "levels": [
                         {
                          "height": 59,
                          "width": 59,
                          "url": "media/panorama_45750F9A_5593_A978_41D1_DB2A12878BDF_0_HS_6_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "hfov": 14.32,
                       "yaw": 83.45,
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -6.13
                      }
                     ],
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "click": "this.startPanoramaWithCamera(this.panorama_46009756_572D_4167_41C6_2B49BD1EF7CE, this.camera_5113C5CA_5CA9_8904_41D3_4936E8FB578D); this.mainPlayList.set('selectedIndex', 7)",
                       "mapColor": "#FF0000",
                       "displayTooltipInTouchScreens": true,
                       "toolTip": "06b_WC",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "items": [
                      {
                       "yaw": 83.45,
                       "hfov": 14.32,
                       "image": {
                        "levels": [
                         {
                          "height": 119,
                          "width": 119,
                          "url": "media/panorama_45750F9A_5593_A978_41D1_DB2A12878BDF_0_HS_6_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": -6.13
                      }
                     ]
                    },
                    {
                     "useHandCursor": true,
                     "id": "overlay_579E1042_5BE4_C3D8_41AA_C542414FE913",
                     "maps": [
                      {
                       "image": {
                        "levels": [
                         {
                          "height": 34,
                          "width": 34,
                          "url": "media/panorama_45750F9A_5593_A978_41D1_DB2A12878BDF_0_HS_7_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "hfov": 8.16,
                       "yaw": 35.48,
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": 13.7
                      }
                     ],
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "click": "this.startPanoramaWithCamera(this.panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D, this.camera_514C65F0_5CA9_8904_41D4_105889E59C26); this.mainPlayList.set('selectedIndex', 8)",
                       "mapColor": "#FF0000",
                       "displayTooltipInTouchScreens": true,
                       "toolTip": "07_2Beds Room",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "items": [
                      {
                       "yaw": 35.48,
                       "hfov": 8.16,
                       "image": {
                        "levels": [
                         {
                          "height": 69,
                          "width": 69,
                          "url": "media/panorama_45750F9A_5593_A978_41D1_DB2A12878BDF_0_HS_7_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": 13.7
                      }
                     ]
                    },
                    {
                     "useHandCursor": true,
                     "id": "overlay_579A3B76_5BE4_C5B8_418F_FC076DEAF78B",
                     "maps": [
                      {
                       "image": {
                        "levels": [
                         {
                          "height": 34,
                          "width": 34,
                          "url": "media/panorama_45750F9A_5593_A978_41D1_DB2A12878BDF_0_HS_8_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "hfov": 7.9,
                       "yaw": 35.23,
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -19.96
                      }
                     ],
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "click": "this.startPanoramaWithCamera(this.panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC, this.camera_5161F5D4_5CA9_890C_41C3_9C93B48FBB3C); this.mainPlayList.set('selectedIndex', 4)",
                       "mapColor": "#FF0000",
                       "displayTooltipInTouchScreens": true,
                       "toolTip": "05_1Bedroom",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "items": [
                      {
                       "yaw": 35.23,
                       "hfov": 7.9,
                       "image": {
                        "levels": [
                         {
                          "height": 69,
                          "width": 69,
                          "url": "media/panorama_45750F9A_5593_A978_41D1_DB2A12878BDF_0_HS_8_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": -19.96
                      }
                     ]
                    }
                   ],
                   "class": "SphericPanoramaFrame",
                   "sphere": {
                    "levels": [
                     {
                      "height": 1500,
                      "width": 3000,
                      "url": "media/panorama_45750F9A_5593_A978_41D1_DB2A12878BDF_hq.jpeg",
                      "class": "ImageResourceLevel"
                     }
                    ],
                    "class": "ImageResource"
                   }
                  }
                 ],
                 "label": "06_Master",
                 "hfov": 360,
                 "adjacentPanoramas": [
                  {
                   "panorama": "this.panorama_46009756_572D_4167_41C6_2B49BD1EF7CE",
                   "yaw": 83.45,
                   "class": "AdjacentPanorama",
                   "backwardYaw": -159.89,
                   "distance": 1
                  },
                  {
                   "panorama": "this.panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC",
                   "yaw": 35.23,
                   "class": "AdjacentPanorama",
                   "backwardYaw": 112.04,
                   "distance": 1
                  },
                  {
                   "panorama": "this.panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E",
                   "yaw": -162.92,
                   "class": "AdjacentPanorama",
                   "backwardYaw": -170.68,
                   "distance": 1
                  },
                  {
                   "panorama": "this.panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D",
                   "yaw": 35.48,
                   "class": "AdjacentPanorama",
                   "backwardYaw": 108.92,
                   "distance": 1
                  },
                  {
                   "panorama": {
                    "hfovMax": 120,
                    "partial": false,
                    "pitch": 0,
                    "thumbnailUrl": "media/panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D_t.jpg",
                    "id": "panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D",
                    "hfovMin": 60,
                    "frames": [
                     {
                      "thumbnailUrl": "media/panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D_t.jpg",
                      "overlays": [
                       {
                        "useHandCursor": true,
                        "id": "overlay_58A2E0B8_5610_6BC8_41AC_72ACAF049ECD",
                        "maps": [
                         {
                          "image": {
                           "levels": [
                            {
                             "height": 69,
                             "width": 69,
                             "url": "media/panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D_0_HS_0_0_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "hfov": 15.34,
                          "yaw": -20.58,
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": -24.08
                         }
                        ],
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "areas": [
                         {
                          "click": "this.startPanoramaWithCamera(this.panorama_47B53902_572E_CEDF_41CC_C256D31A5443, this.camera_566FDDCF_5BF2_F6A7_41C3_D60F04E20C30); this.mainPlayList.set('selectedIndex', 3)",
                          "mapColor": "#FF0000",
                          "displayTooltipInTouchScreens": true,
                          "toolTip": "04_Living Room",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "items": [
                         {
                          "yaw": -20.58,
                          "hfov": 15.34,
                          "image": {
                           "levels": [
                            {
                             "height": 139,
                             "width": 139,
                             "url": "media/panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D_0_HS_0_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "class": "HotspotPanoramaOverlayImage",
                          "pitch": -24.08
                         }
                        ]
                       },
                       {
                        "useHandCursor": true,
                        "id": "overlay_58A2C0B8_5610_6BC8_41D0_139AB1287679",
                        "maps": [
                         {
                          "image": {
                           "levels": [
                            {
                             "height": 69,
                             "width": 69,
                             "url": "media/panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D_0_HS_6_0_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "hfov": 16.48,
                          "yaw": -104.49,
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": -11.28
                         }
                        ],
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "areas": [
                         {
                          "click": "this.startPanoramaWithCamera(this.panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E, this.camera_565ACDA7_5BF2_F6E7_41BA_8BE7CEB9351B); this.mainPlayList.set('selectedIndex', 1)",
                          "mapColor": "#FF0000",
                          "displayTooltipInTouchScreens": true,
                          "toolTip": "02_Entrance",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "items": [
                         {
                          "yaw": -104.49,
                          "hfov": 16.48,
                          "image": {
                           "levels": [
                            {
                             "height": 139,
                             "width": 139,
                             "url": "media/panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D_0_HS_6_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "class": "HotspotPanoramaOverlayImage",
                          "pitch": -11.28
                         }
                        ]
                       },
                       {
                        "useHandCursor": true,
                        "id": "overlay_58A2A0B8_5610_6BC8_41D1_5ADBE82A62BD",
                        "maps": [
                         {
                          "image": {
                           "levels": [
                            {
                             "height": 1,
                             "width": 1,
                             "url": "media/panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D_0_HS_1_0_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "hfov": 0,
                          "yaw": -172.22,
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": 82.35
                         }
                        ],
                        "enabledInCardboard": true,
                        "rollOverDisplay": true,
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116, this.camera_520016B6_5CA9_8B0C_4181_6D961648CD6A); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 5); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 8); this.mainPlayList.set('selectedIndex', 6)"
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
                             "url": "media/panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D_0_HS_1_0.png",
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
                        "useHandCursor": true,
                        "id": "overlay_57B43222_5BFC_C75B_4182_7A9FA3CAC323",
                        "maps": [
                         {
                          "image": {
                           "levels": [
                            {
                             "height": 64,
                             "width": 64,
                             "url": "media/panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D_0_HS_7_0_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "hfov": 15.2,
                          "yaw": -20.21,
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": -13.01
                         }
                        ],
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "areas": [
                         {
                          "click": "this.startPanoramaWithCamera(this.panorama_47B53902_572E_CEDF_41CC_C256D31A5443, this.camera_522456A2_5CA9_8B04_41C1_4D912F626D66); this.mainPlayList.set('selectedIndex', 3)",
                          "mapColor": "#FF0000",
                          "displayTooltipInTouchScreens": true,
                          "toolTip": "04_Living Room",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "items": [
                         {
                          "yaw": -20.21,
                          "hfov": 15.2,
                          "image": {
                           "levels": [
                            {
                             "height": 129,
                             "width": 129,
                             "url": "media/panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D_0_HS_7_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "class": "HotspotPanoramaOverlayImage",
                          "pitch": -13.01
                         }
                        ]
                       },
                       {
                        "useHandCursor": true,
                        "id": "overlay_5767B04D_5BFF_43E8_41A5_8076DCF11CBB",
                        "maps": [
                         {
                          "image": {
                           "levels": [
                            {
                             "height": 54,
                             "width": 54,
                             "url": "media/panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D_0_HS_8_0_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "hfov": 12.97,
                          "yaw": -92.51,
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": -10.81
                         }
                        ],
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "areas": [
                         {
                          "click": "this.startPanoramaWithCamera(this.panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E, this.camera_52FB666E_5CA9_8B1C_41A5_A0C7818F94C0); this.mainPlayList.set('selectedIndex', 1)",
                          "mapColor": "#FF0000",
                          "displayTooltipInTouchScreens": true,
                          "toolTip": "02_Entrance",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "items": [
                         {
                          "yaw": -92.51,
                          "hfov": 12.97,
                          "image": {
                           "levels": [
                            {
                             "height": 109,
                             "width": 109,
                             "url": "media/panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D_0_HS_8_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "class": "HotspotPanoramaOverlayImage",
                          "pitch": -10.81
                         }
                        ]
                       }
                      ],
                      "class": "SphericPanoramaFrame",
                      "sphere": {
                       "levels": [
                        {
                         "height": 1500,
                         "width": 3000,
                         "url": "media/panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D_hq.jpeg",
                         "class": "ImageResourceLevel"
                        }
                       ],
                       "class": "ImageResource"
                      }
                     }
                    ],
                    "label": "03_Pool",
                    "hfov": 360,
                    "adjacentPanoramas": [
                     {
                      "panorama": "this.panorama_46009756_572D_4167_41C6_2B49BD1EF7CE",
                      "yaw": -172.22,
                      "class": "AdjacentPanorama",
                      "backwardYaw": -162.92,
                      "distance": 1
                     },
                     {
                      "panorama": "this.panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC",
                      "yaw": -172.22,
                      "class": "AdjacentPanorama",
                      "backwardYaw": -170.2,
                      "distance": 1
                     },
                     {
                      "panorama": "this.panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E",
                      "yaw": -92.51,
                      "class": "AdjacentPanorama",
                      "backwardYaw": -14.85,
                      "distance": 1
                     },
                     {
                      "panorama": "this.panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D",
                      "yaw": -172.22,
                      "class": "AdjacentPanorama",
                      "backwardYaw": -172.21,
                      "distance": 1
                     },
                     {
                      "panorama": "this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF",
                      "yaw": -172.22,
                      "class": "AdjacentPanorama",
                      "backwardYaw": -162.92,
                      "distance": 1
                     },
                     {
                      "panorama": {
                       "hfovMax": 120,
                       "partial": false,
                       "pitch": 0,
                       "thumbnailUrl": "media/panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C_t.jpg",
                       "id": "panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C",
                       "hfovMin": 60,
                       "frames": [
                        {
                         "thumbnailUrl": "media/panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C_t.jpg",
                         "overlays": [
                          {
                           "useHandCursor": true,
                           "id": "overlay_442A1C56_55AD_AFC8_41D5_0D9EEC86CEFD",
                           "maps": [
                            {
                             "image": {
                              "levels": [
                               {
                                "height": 74,
                                "width": 74,
                                "url": "media/panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C_0_HS_0_0_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "hfov": 15.07,
                             "yaw": 165.8,
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": -33.18
                            }
                           ],
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "areas": [
                            {
                             "click": "this.startPanoramaWithCamera(this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF, this.camera_55CB7E16_5BF2_F5B9_4191_4ABD27800AF8); this.mainPlayList.set('selectedIndex', 5)",
                             "mapColor": "#FF0000",
                             "displayTooltipInTouchScreens": true,
                             "toolTip": "06_Master",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "items": [
                            {
                             "yaw": 165.8,
                             "hfov": 15.07,
                             "image": {
                              "levels": [
                               {
                                "height": 149,
                                "width": 149,
                                "url": "media/panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C_0_HS_0_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "class": "HotspotPanoramaOverlayImage",
                             "pitch": -33.18
                            }
                           ]
                          },
                          {
                           "useHandCursor": true,
                           "id": "overlay_442A7C56_55AD_AFC8_41D5_4AD267333E92",
                           "maps": [
                            {
                             "image": {
                              "levels": [
                               {
                                "height": 1,
                                "width": 1,
                                "url": "media/panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C_0_HS_1_0_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "hfov": 0,
                             "yaw": -170.58,
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": 85.29
                            }
                           ],
                           "enabledInCardboard": true,
                           "rollOverDisplay": true,
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116, this.camera_506BB738_5CA9_8904_41D0_24E7DD26FA4E); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 8); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 7)"
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
                                "url": "media/panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C_0_HS_1_0.png",
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
                           "useHandCursor": true,
                           "id": "overlay_5794707F_5BE4_C3A8_41CD_E10EA0877B80",
                           "maps": [
                            {
                             "image": {
                              "levels": [
                               {
                                "height": 69,
                                "width": 69,
                                "url": "media/panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C_0_HS_6_0_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "hfov": 15.64,
                             "yaw": 166.04,
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": -21.4
                            }
                           ],
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "areas": [
                            {
                             "click": "this.startPanoramaWithCamera(this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF, this.camera_524656E8_5CA9_8B04_418B_2F3D46E14068); this.mainPlayList.set('selectedIndex', 5)",
                             "mapColor": "#FF0000",
                             "displayTooltipInTouchScreens": true,
                             "toolTip": "06_Master",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "items": [
                            {
                             "yaw": 166.04,
                             "hfov": 15.64,
                             "image": {
                              "levels": [
                               {
                                "height": 139,
                                "width": 139,
                                "url": "media/panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C_0_HS_6_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "class": "HotspotPanoramaOverlayImage",
                             "pitch": -21.4
                            }
                           ]
                          }
                         ],
                         "class": "SphericPanoramaFrame",
                         "sphere": {
                          "levels": [
                           {
                            "height": 1500,
                            "width": 3000,
                            "url": "media/panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C_hq.jpeg",
                            "class": "ImageResourceLevel"
                           }
                          ],
                          "class": "ImageResource"
                         }
                        }
                       ],
                       "label": "06a_Balcony",
                       "hfov": 360,
                       "adjacentPanoramas": [
                        {
                         "panorama": "this.panorama_46009756_572D_4167_41C6_2B49BD1EF7CE",
                         "yaw": -170.58,
                         "class": "AdjacentPanorama",
                         "backwardYaw": -162.92,
                         "distance": 1
                        },
                        {
                         "panorama": "this.panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC",
                         "yaw": -170.58,
                         "class": "AdjacentPanorama",
                         "backwardYaw": -170.2,
                         "distance": 1
                        },
                        {
                         "panorama": "this.panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E",
                         "yaw": -170.58,
                         "class": "AdjacentPanorama",
                         "backwardYaw": -170.68,
                         "distance": 1
                        },
                        {
                         "panorama": "this.panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D",
                         "yaw": -170.58,
                         "class": "AdjacentPanorama",
                         "backwardYaw": -172.21,
                         "distance": 1
                        },
                        {
                         "panorama": "this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF",
                         "yaw": 166.04,
                         "class": "AdjacentPanorama",
                         "backwardYaw": 164.69,
                         "distance": 1
                        },
                        {
                         "panorama": "this.panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D",
                         "yaw": -170.58,
                         "class": "AdjacentPanorama",
                         "backwardYaw": -172.22,
                         "distance": 1
                        },
                        {
                         "panorama": {
                          "hfovMax": 120,
                          "partial": false,
                          "pitch": 0,
                          "thumbnailUrl": "media/panorama_47B53902_572E_CEDF_41CC_C256D31A5443_t.jpg",
                          "id": "panorama_47B53902_572E_CEDF_41CC_C256D31A5443",
                          "hfovMin": 60,
                          "frames": [
                           {
                            "thumbnailUrl": "media/panorama_47B53902_572E_CEDF_41CC_C256D31A5443_t.jpg",
                            "overlays": [
                             {
                              "useHandCursor": true,
                              "id": "overlay_47B55902_572E_CEDF_41AF_5DD57D9CB811",
                              "maps": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "height": 59,
                                   "width": 59,
                                   "url": "media/panorama_47B53902_572E_CEDF_41CC_C256D31A5443_0_HS_0_0_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "hfov": 14.28,
                                "yaw": 40.49,
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": -7.39
                               }
                              ],
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "click": "this.startPanoramaWithCamera(this.panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC, this.camera_55BE4E50_5BF2_F5B9_41B2_A0DBD967D7CD); this.mainPlayList.set('selectedIndex', 4)",
                                "mapColor": "#FF0000",
                                "displayTooltipInTouchScreens": true,
                                "toolTip": "05_1Bedroom",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "items": [
                               {
                                "yaw": 40.49,
                                "hfov": 14.28,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 119,
                                   "width": 119,
                                   "url": "media/panorama_47B53902_572E_CEDF_41CC_C256D31A5443_0_HS_0_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "class": "HotspotPanoramaOverlayImage",
                                "pitch": -7.39
                               }
                              ]
                             },
                             {
                              "useHandCursor": true,
                              "id": "overlay_47B54902_572E_CEDF_41B1_68F40224ADD4",
                              "maps": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "height": 64,
                                   "width": 64,
                                   "url": "media/panorama_47B53902_572E_CEDF_41CC_C256D31A5443_0_HS_5_0_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "hfov": 14.43,
                                "yaw": -166.43,
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": -22.31
                               }
                              ],
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "click": "this.startPanoramaWithCamera(this.panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D, this.camera_5577FE77_5BF2_F267_41AE_B186A0A61737); this.mainPlayList.set('selectedIndex', 2)",
                                "mapColor": "#FF0000",
                                "displayTooltipInTouchScreens": true,
                                "toolTip": "03_Pool",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "items": [
                               {
                                "yaw": -166.43,
                                "hfov": 14.43,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 129,
                                   "width": 129,
                                   "url": "media/panorama_47B53902_572E_CEDF_41CC_C256D31A5443_0_HS_5_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "class": "HotspotPanoramaOverlayImage",
                                "pitch": -22.31
                               }
                              ]
                             },
                             {
                              "useHandCursor": true,
                              "id": "overlay_47B57902_572E_CEDF_41D0_F28E9EC04E5B",
                              "maps": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "height": 1,
                                   "width": 1,
                                   "url": "media/panorama_47B53902_572E_CEDF_41CC_C256D31A5443_0_HS_1_0_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "hfov": 0,
                                "yaw": -171.96,
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": 82.97
                               }
                              ],
                              "enabledInCardboard": true,
                              "rollOverDisplay": true,
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116, this.camera_505B378E_5CA9_891F_41AF_6860DD55427D); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 8); this.mainPlayList.set('selectedIndex', 5)"
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
                                   "url": "media/panorama_47B53902_572E_CEDF_41CC_C256D31A5443_0_HS_1_0.png",
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
                              "useHandCursor": true,
                              "id": "overlay_5791E8EE_5BFB_44A8_41C2_CE4E8FCB8536",
                              "maps": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "height": 59,
                                   "width": 59,
                                   "url": "media/panorama_47B53902_572E_CEDF_41CC_C256D31A5443_0_HS_6_0_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "hfov": 14.39,
                                "yaw": 40.49,
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": 1.91
                               }
                              ],
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "click": "this.startPanoramaWithCamera(this.panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC, this.camera_5065974B_5CA9_8904_41C9_6FBCE6824133); this.mainPlayList.set('selectedIndex', 4)",
                                "mapColor": "#FF0000",
                                "displayTooltipInTouchScreens": true,
                                "toolTip": "05_1Bedroom",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "items": [
                               {
                                "yaw": 40.49,
                                "hfov": 14.39,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 119,
                                   "width": 119,
                                   "url": "media/panorama_47B53902_572E_CEDF_41CC_C256D31A5443_0_HS_6_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "class": "HotspotPanoramaOverlayImage",
                                "pitch": 1.91
                               }
                              ]
                             },
                             {
                              "useHandCursor": true,
                              "id": "overlay_57A7B7AB_5BE5_4CA9_41D1_7CA9E6A13255",
                              "maps": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "height": 64,
                                   "width": 64,
                                   "url": "media/panorama_47B53902_572E_CEDF_41CC_C256D31A5443_0_HS_7_0_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "hfov": 15.24,
                                "yaw": -166.42,
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": -12.26
                               }
                              ],
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "click": "this.startPanoramaWithCamera(this.panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D, this.camera_504B1771_5CA9_8904_41D5_E2DD2C6CAFE7); this.mainPlayList.set('selectedIndex', 2)",
                                "mapColor": "#FF0000",
                                "displayTooltipInTouchScreens": true,
                                "toolTip": "03_Pool",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "items": [
                               {
                                "yaw": -166.42,
                                "hfov": 15.24,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 129,
                                   "width": 129,
                                   "url": "media/panorama_47B53902_572E_CEDF_41CC_C256D31A5443_0_HS_7_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "class": "HotspotPanoramaOverlayImage",
                                "pitch": -12.26
                               }
                              ]
                             }
                            ],
                            "class": "SphericPanoramaFrame",
                            "sphere": {
                             "levels": [
                              {
                               "height": 1500,
                               "width": 3000,
                               "url": "media/panorama_47B53902_572E_CEDF_41CC_C256D31A5443_hq.jpeg",
                               "class": "ImageResourceLevel"
                              }
                             ],
                             "class": "ImageResource"
                            }
                           }
                          ],
                          "label": "04_Living Room",
                          "hfov": 360,
                          "adjacentPanoramas": [
                           {
                            "panorama": "this.panorama_46009756_572D_4167_41C6_2B49BD1EF7CE",
                            "yaw": -171.96,
                            "class": "AdjacentPanorama",
                            "backwardYaw": -162.92,
                            "distance": 1
                           },
                           {
                            "panorama": "this.panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC",
                            "yaw": 40.49,
                            "class": "AdjacentPanorama",
                            "backwardYaw": 112.55,
                            "distance": 1
                           },
                           {
                            "panorama": "this.panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E",
                            "yaw": -171.96,
                            "class": "AdjacentPanorama",
                            "backwardYaw": -170.68,
                            "distance": 1
                           },
                           {
                            "panorama": "this.panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D",
                            "yaw": -171.96,
                            "class": "AdjacentPanorama",
                            "backwardYaw": -172.21,
                            "distance": 1
                           },
                           {
                            "panorama": "this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF",
                            "yaw": -171.96,
                            "class": "AdjacentPanorama",
                            "backwardYaw": -162.92,
                            "distance": 1
                           },
                           {
                            "panorama": "this.panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D",
                            "yaw": -166.42,
                            "class": "AdjacentPanorama",
                            "backwardYaw": -20.21,
                            "distance": 1
                           },
                           {
                            "panorama": "this.panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C",
                            "yaw": -171.96,
                            "class": "AdjacentPanorama",
                            "backwardYaw": -170.58,
                            "distance": 1
                           },
                           {
                            "panorama": "this.panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E",
                            "yaw": -171.96,
                            "class": "AdjacentPanorama",
                            "backwardYaw": -171.35,
                            "distance": 1
                           },
                           {
                            "panorama": {
                             "hfovMax": 120,
                             "partial": false,
                             "pitch": 0,
                             "thumbnailUrl": "media/panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116_t.jpg",
                             "id": "panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116",
                             "hfovMin": 60,
                             "frames": [
                              {
                               "thumbnailUrl": "media/panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116_t.jpg",
                               "overlays": [
                                {
                                 "useHandCursor": true,
                                 "id": "overlay_47EE6DFC_55B3_68B8_41D1_9C870BBC84DA",
                                 "maps": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 60,
                                      "width": 60,
                                      "url": "media/panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116_0_HS_6_0_0_map.gif",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "hfov": 14.39,
                                   "yaw": 39.36,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": -2.34
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "areas": [
                                  {
                                   "click": "this.startPanoramaWithCamera(this.panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D, this.camera_5488DF3C_5BF2_F3E9_41D1_C652E087859B); this.mainPlayList.set('selectedIndex', 8)",
                                   "mapColor": "#FF0000",
                                   "displayTooltipInTouchScreens": true,
                                   "toolTip": "07_2Beds Room",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "class": "HotspotPanoramaOverlay",
                                 "items": [
                                  {
                                   "yaw": 39.36,
                                   "hfov": 14.39,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 120,
                                      "width": 120,
                                      "url": "media/panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116_0_HS_6_0.png",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "class": "HotspotPanoramaOverlayImage",
                                   "pitch": -2.34
                                  }
                                 ]
                                },
                                {
                                 "useHandCursor": true,
                                 "id": "overlay_47EE9DFC_55B3_68B8_41BE_F533FF904D14",
                                 "maps": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 1,
                                      "width": 1,
                                      "url": "media/panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116_0_HS_5_0_0_map.gif",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "hfov": 0,
                                   "yaw": -173.12,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": 85.84
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": true,
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.startPanoramaWithCamera(this.panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E, this.camera_5166A840_5CA9_8704_41CD_6B1CF99E721C); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 5); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 4)"
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
                                      "url": "media/panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116_0_HS_5_0.png",
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
                                 "useHandCursor": true,
                                 "id": "overlay_5077CCBC_5C1C_FCAF_41CB_A5DE047647F6",
                                 "maps": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 55,
                                      "width": 55,
                                      "url": "media/panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116_0_HS_7_0_0_map.gif",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "hfov": 12.84,
                                   "yaw": 39.38,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": -13.32
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "areas": [
                                  {
                                   "click": "this.startPanoramaWithCamera(this.panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D, this.camera_5124D80B_5CA9_8704_41CC_1086312306A7); this.mainPlayList.set('selectedIndex', 8)",
                                   "mapColor": "#FF0000",
                                   "displayTooltipInTouchScreens": true,
                                   "toolTip": "07_2Beds Room",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "class": "HotspotPanoramaOverlay",
                                 "items": [
                                  {
                                   "yaw": 39.38,
                                   "hfov": 12.84,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 110,
                                      "width": 110,
                                      "url": "media/panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116_0_HS_7_0.png",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "class": "HotspotPanoramaOverlayImage",
                                   "pitch": -13.32
                                  }
                                 ]
                                }
                               ],
                               "class": "SphericPanoramaFrame",
                               "sphere": {
                                "levels": [
                                 {
                                  "height": 1500,
                                  "width": 3000,
                                  "url": "media/panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116_hq.jpeg",
                                  "class": "ImageResourceLevel"
                                 }
                                ],
                                "class": "ImageResource"
                               }
                              }
                             ],
                             "label": "08_Rooftop",
                             "hfov": 360,
                             "adjacentPanoramas": [
                              {
                               "panorama": "this.panorama_46009756_572D_4167_41C6_2B49BD1EF7CE",
                               "yaw": -173.12,
                               "class": "AdjacentPanorama",
                               "backwardYaw": -162.92,
                               "distance": 1
                              },
                              {
                               "panorama": "this.panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC",
                               "yaw": -173.12,
                               "class": "AdjacentPanorama",
                               "backwardYaw": -170.2,
                               "distance": 1
                              },
                              {
                               "panorama": "this.panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E",
                               "yaw": -173.12,
                               "class": "AdjacentPanorama",
                               "backwardYaw": -170.68,
                               "distance": 1
                              },
                              {
                               "panorama": "this.panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D",
                               "yaw": 39.38,
                               "class": "AdjacentPanorama",
                               "backwardYaw": 108.92,
                               "distance": 1
                              },
                              {
                               "panorama": "this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF",
                               "yaw": -173.12,
                               "class": "AdjacentPanorama",
                               "backwardYaw": -162.92,
                               "distance": 1
                              },
                              {
                               "panorama": "this.panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D",
                               "yaw": -173.12,
                               "class": "AdjacentPanorama",
                               "backwardYaw": -172.22,
                               "distance": 1
                              },
                              {
                               "panorama": "this.panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C",
                               "yaw": -173.12,
                               "class": "AdjacentPanorama",
                               "backwardYaw": -170.58,
                               "distance": 1
                              },
                              {
                               "panorama": "this.panorama_47B53902_572E_CEDF_41CC_C256D31A5443",
                               "yaw": -173.12,
                               "class": "AdjacentPanorama",
                               "backwardYaw": -171.96,
                               "distance": 1
                              },
                              {
                               "panorama": "this.panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E",
                               "yaw": -173.12,
                               "class": "AdjacentPanorama",
                               "backwardYaw": -171.35,
                               "distance": 1
                              }
                             ],
                             "class": "Panorama",
                             "vfov": 180
                            },
                            "yaw": -171.96,
                            "class": "AdjacentPanorama",
                            "backwardYaw": -173.12,
                            "distance": 1
                           }
                          ],
                          "class": "Panorama",
                          "vfov": 180
                         },
                         "yaw": -170.58,
                         "class": "AdjacentPanorama",
                         "backwardYaw": -171.96,
                         "distance": 1
                        },
                        {
                         "panorama": "this.panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E",
                         "yaw": -170.58,
                         "class": "AdjacentPanorama",
                         "backwardYaw": -171.35,
                         "distance": 1
                        },
                        {
                         "panorama": "this.panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116",
                         "yaw": -170.58,
                         "class": "AdjacentPanorama",
                         "backwardYaw": -173.12,
                         "distance": 1
                        }
                       ],
                       "class": "Panorama",
                       "vfov": 180
                      },
                      "yaw": -172.22,
                      "class": "AdjacentPanorama",
                      "backwardYaw": -170.58,
                      "distance": 1
                     },
                     {
                      "panorama": "this.panorama_47B53902_572E_CEDF_41CC_C256D31A5443",
                      "yaw": -20.21,
                      "class": "AdjacentPanorama",
                      "backwardYaw": -166.42,
                      "distance": 1
                     },
                     {
                      "panorama": "this.panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E",
                      "yaw": -172.22,
                      "class": "AdjacentPanorama",
                      "backwardYaw": -171.35,
                      "distance": 1
                     },
                     {
                      "panorama": "this.panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116",
                      "yaw": -172.22,
                      "class": "AdjacentPanorama",
                      "backwardYaw": -173.12,
                      "distance": 1
                     }
                    ],
                    "class": "Panorama",
                    "vfov": 180
                   },
                   "yaw": -162.92,
                   "class": "AdjacentPanorama",
                   "backwardYaw": -172.22,
                   "distance": 1
                  },
                  {
                   "panorama": "this.panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C",
                   "yaw": 164.69,
                   "class": "AdjacentPanorama",
                   "backwardYaw": 166.04,
                   "distance": 1
                  },
                  {
                   "panorama": "this.panorama_47B53902_572E_CEDF_41CC_C256D31A5443",
                   "yaw": -162.92,
                   "class": "AdjacentPanorama",
                   "backwardYaw": -171.96,
                   "distance": 1
                  },
                  {
                   "panorama": "this.panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E",
                   "yaw": -162.92,
                   "class": "AdjacentPanorama",
                   "backwardYaw": -171.35,
                   "distance": 1
                  },
                  {
                   "panorama": "this.panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116",
                   "yaw": -162.92,
                   "class": "AdjacentPanorama",
                   "backwardYaw": -173.12,
                   "distance": 1
                  }
                 ],
                 "class": "Panorama",
                 "vfov": 180
                },
                "yaw": 108.92,
                "class": "AdjacentPanorama",
                "backwardYaw": 35.48,
                "distance": 1
               },
               {
                "panorama": "this.panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D",
                "yaw": -172.21,
                "class": "AdjacentPanorama",
                "backwardYaw": -172.22,
                "distance": 1
               },
               {
                "panorama": "this.panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C",
                "yaw": -172.21,
                "class": "AdjacentPanorama",
                "backwardYaw": -170.58,
                "distance": 1
               },
               {
                "panorama": "this.panorama_47B53902_572E_CEDF_41CC_C256D31A5443",
                "yaw": -172.21,
                "class": "AdjacentPanorama",
                "backwardYaw": -171.96,
                "distance": 1
               },
               {
                "panorama": "this.panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E",
                "yaw": -172.21,
                "class": "AdjacentPanorama",
                "backwardYaw": -171.35,
                "distance": 1
               },
               {
                "panorama": "this.panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116",
                "yaw": 108.92,
                "class": "AdjacentPanorama",
                "backwardYaw": 39.38,
                "distance": 1
               }
              ],
              "class": "Panorama",
              "vfov": 180
             },
             "yaw": -170.68,
             "class": "AdjacentPanorama",
             "backwardYaw": -172.21,
             "distance": 1
            },
            {
             "panorama": "this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF",
             "yaw": -170.68,
             "class": "AdjacentPanorama",
             "backwardYaw": -162.92,
             "distance": 1
            },
            {
             "panorama": "this.panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D",
             "yaw": -14.85,
             "class": "AdjacentPanorama",
             "backwardYaw": -92.51,
             "distance": 1
            },
            {
             "panorama": "this.panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C",
             "yaw": -170.68,
             "class": "AdjacentPanorama",
             "backwardYaw": -170.58,
             "distance": 1
            },
            {
             "panorama": "this.panorama_47B53902_572E_CEDF_41CC_C256D31A5443",
             "yaw": -170.68,
             "class": "AdjacentPanorama",
             "backwardYaw": -171.96,
             "distance": 1
            },
            {
             "panorama": "this.panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E",
             "yaw": 1.87,
             "class": "AdjacentPanorama",
             "backwardYaw": -172.86,
             "distance": 1
            },
            {
             "panorama": "this.panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116",
             "yaw": -170.68,
             "class": "AdjacentPanorama",
             "backwardYaw": -173.12,
             "distance": 1
            }
           ],
           "class": "Panorama",
           "vfov": 180
          },
          "yaw": -170.2,
          "class": "AdjacentPanorama",
          "backwardYaw": -170.68,
          "distance": 1
         },
         {
          "panorama": "this.panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D",
          "yaw": -170.2,
          "class": "AdjacentPanorama",
          "backwardYaw": -172.21,
          "distance": 1
         },
         {
          "panorama": "this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF",
          "yaw": 112.04,
          "class": "AdjacentPanorama",
          "backwardYaw": 35.23,
          "distance": 1
         },
         {
          "panorama": "this.panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D",
          "yaw": -170.2,
          "class": "AdjacentPanorama",
          "backwardYaw": -172.22,
          "distance": 1
         },
         {
          "panorama": "this.panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C",
          "yaw": -170.2,
          "class": "AdjacentPanorama",
          "backwardYaw": -170.58,
          "distance": 1
         },
         {
          "panorama": "this.panorama_47B53902_572E_CEDF_41CC_C256D31A5443",
          "yaw": 112.55,
          "class": "AdjacentPanorama",
          "backwardYaw": 40.49,
          "distance": 1
         },
         {
          "panorama": "this.panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E",
          "yaw": -170.2,
          "class": "AdjacentPanorama",
          "backwardYaw": -171.35,
          "distance": 1
         },
         {
          "panorama": "this.panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116",
          "yaw": -170.2,
          "class": "AdjacentPanorama",
          "backwardYaw": -173.12,
          "distance": 1
         }
        ],
        "class": "Panorama",
        "vfov": 180
       },
       "yaw": -162.92,
       "class": "AdjacentPanorama",
       "backwardYaw": -170.2,
       "distance": 1
      },
      {
       "panorama": "this.panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E",
       "yaw": -162.92,
       "class": "AdjacentPanorama",
       "backwardYaw": -170.68,
       "distance": 1
      },
      {
       "panorama": "this.panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D",
       "yaw": -162.92,
       "class": "AdjacentPanorama",
       "backwardYaw": -172.21,
       "distance": 1
      },
      {
       "panorama": "this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF",
       "yaw": -159.89,
       "class": "AdjacentPanorama",
       "backwardYaw": 83.45,
       "distance": 1
      },
      {
       "panorama": "this.panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D",
       "yaw": -162.92,
       "class": "AdjacentPanorama",
       "backwardYaw": -172.22,
       "distance": 1
      },
      {
       "panorama": "this.panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C",
       "yaw": -162.92,
       "class": "AdjacentPanorama",
       "backwardYaw": -170.58,
       "distance": 1
      },
      {
       "panorama": "this.panorama_47B53902_572E_CEDF_41CC_C256D31A5443",
       "yaw": -162.92,
       "class": "AdjacentPanorama",
       "backwardYaw": -171.96,
       "distance": 1
      },
      {
       "panorama": "this.panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E",
       "yaw": -162.92,
       "class": "AdjacentPanorama",
       "backwardYaw": -171.35,
       "distance": 1
      },
      {
       "panorama": "this.panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116",
       "yaw": -162.92,
       "class": "AdjacentPanorama",
       "backwardYaw": -173.12,
       "distance": 1
      }
     ],
     "class": "Panorama",
     "vfov": 180
    },
    "yaw": -171.35,
    "class": "AdjacentPanorama",
    "backwardYaw": -162.92,
    "distance": 1
   },
   {
    "panorama": "this.panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC",
    "yaw": -171.35,
    "class": "AdjacentPanorama",
    "backwardYaw": -170.2,
    "distance": 1
   },
   {
    "panorama": "this.panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E",
    "yaw": -172.86,
    "class": "AdjacentPanorama",
    "backwardYaw": 1.87,
    "distance": 1
   },
   {
    "panorama": "this.panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D",
    "yaw": -171.35,
    "class": "AdjacentPanorama",
    "backwardYaw": -172.21,
    "distance": 1
   },
   {
    "panorama": "this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF",
    "yaw": -171.35,
    "class": "AdjacentPanorama",
    "backwardYaw": -162.92,
    "distance": 1
   },
   {
    "panorama": "this.panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D",
    "yaw": -171.35,
    "class": "AdjacentPanorama",
    "backwardYaw": -172.22,
    "distance": 1
   },
   {
    "panorama": "this.panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C",
    "yaw": -171.35,
    "class": "AdjacentPanorama",
    "backwardYaw": -170.58,
    "distance": 1
   },
   {
    "panorama": "this.panorama_47B53902_572E_CEDF_41CC_C256D31A5443",
    "yaw": -171.35,
    "class": "AdjacentPanorama",
    "backwardYaw": -171.96,
    "distance": 1
   },
   {
    "panorama": "this.panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116",
    "yaw": -171.35,
    "class": "AdjacentPanorama",
    "backwardYaw": -173.12,
    "distance": 1
   }
  ],
  "class": "Panorama",
  "vfov": 180
 },
 {
  "buttonToggleHotspots": {
   "paddingLeft": 0,
   "minWidth": 1,
   "paddingRight": 0,
   "mode": "toggle",
   "toolTipPaddingRight": 6,
   "toolTipPaddingBottom": 4,
   "iconURL": "skin/IconButton_80E5955A_8E23_BB05_41CA_43DD61DBAEE9.png",
   "height": "100%",
   "width": "100%",
   "toolTip": "Hotspots Visibility",
   "transparencyActive": true,
   "toolTipPaddingTop": 4,
   "borderRadius": 0,
   "toolTipBorderSize": 1,
   "toolTipTextShadowOpacity": 0,
   "toolTipFontSize": 14,
   "toolTipShadowOpacity": 1,
   "toolTipOpacity": 0.7,
   "borderSize": 0,
   "toolTipShadowVerticalLength": 0,
   "toolTipPaddingLeft": 6,
   "toolTipBorderColor": "#767676",
   "toolTipTextShadowColor": "#000000",
   "class": "IconButton",
   "toolTipFontStyle": "normal",
   "toolTipBorderRadius": 3,
   "horizontalAlign": "center",
   "click": "if(!this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, true, 0, this.effect_CDD059FA_EED0_D223_41DB_70ACFBE986FE, 'showEffect', false) } else if(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, false, 0, this.effect_CDD049FB_EED0_D221_41EB_CA2134B978E0, 'hideEffect', false) }",
   "maxWidth": 60,
   "paddingBottom": 0,
   "maxHeight": 60,
   "cursor": "hand",
   "toolTipBackgroundColor": "#000000",
   "toolTipFontWeight": "normal",
   "id": "IconButton_80E5955A_8E23_BB05_41CA_43DD61DBAEE9",
   "toolTipTextShadowBlurRadius": 3,
   "toolTipShadowHorizontalLength": 0,
   "paddingTop": 0,
   "toolTipShadowSpread": 0,
   "toolTipShadowColor": "#333333",
   "toolTipShadowBlurRadius": 3,
   "pressedIconURL": "skin/IconButton_80E5955A_8E23_BB05_41CA_43DD61DBAEE9_pressed.png",
   "minHeight": 1,
   "backgroundOpacity": 0,
   "shadow": false,
   "toolTipFontColor": "#606060",
   "toolTipFontFamily": "Arial",
   "verticalAlign": "middle"
  },
  "touchControlMode": "drag_rotation",
  "displayPlaybackBar": true,
  "buttonCardboardView": {
   "paddingLeft": 0,
   "minWidth": 1,
   "paddingRight": 0,
   "mode": "push",
   "height": "100%",
   "width": "100%",
   "iconURL": "skin/IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37.png",
   "transparencyActive": false,
   "borderRadius": 0,
   "borderSize": 0,
   "class": "IconButton",
   "horizontalAlign": "center",
   "maxWidth": 60,
   "paddingBottom": 0,
   "maxHeight": 60,
   "cursor": "hand",
   "id": "IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37",
   "paddingTop": 0,
   "minHeight": 1,
   "backgroundOpacity": 0,
   "shadow": false,
   "verticalAlign": "middle"
  },
  "buttonStop": [
   "this.IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4",
   "this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB"
  ],
  "buttonPlay": "this.IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED",
  "id": "MainViewerPanoramaPlayer",
  "viewerArea": "this.MainViewer",
  "mouseControlMode": "drag_acceleration",
  "preloadEnabled": false,
  "class": "PanoramaPlayer",
  "gyroscopeVerticalDraggingEnabled": true
 },
 {
  "movementMode": "constrained",
  "id": "MapViewerMapPlayer",
  "class": "MapPlayer",
  "viewerArea": {
   "paddingLeft": 0,
   "paddingRight": 0,
   "progressBarBackgroundColorDirection": "vertical",
   "progressBackgroundColor": [
    "#FFFFFF"
   ],
   "progressBorderRadius": 0,
   "progressBarOpacity": 1,
   "toolTipPaddingBottom": 4,
   "playbackBarProgressBackgroundColorDirection": "vertical",
   "progressRight": 0,
   "toolTipBorderSize": 1,
   "playbackBarBackgroundColor": [
    "#FFFFFF"
   ],
   "toolTipShadowOpacity": 1,
   "toolTipOpacity": 1,
   "playbackBarBorderColor": "#FFFFFF",
   "playbackBarHeight": 10,
   "toolTipShadowVerticalLength": 0,
   "toolTipTextShadowColor": "#000000",
   "playbackBarHeadWidth": 6,
   "class": "ViewerArea",
   "toolTipFontStyle": "normal",
   "progressBackgroundOpacity": 1,
   "playbackBarHeadBackgroundColorDirection": "vertical",
   "progressBottom": 2,
   "playbackBarBackgroundColorDirection": "vertical",
   "paddingBottom": 0,
   "playbackBarHeadShadowVerticalLength": 0,
   "playbackBarProgressBorderSize": 0,
   "playbackBarRight": 0,
   "toolTipBackgroundColor": "#F6F6F6",
   "progressBorderSize": 0,
   "progressBarBorderSize": 0,
   "progressBarBorderRadius": 0,
   "playbackBarOpacity": 1,
   "playbackBarProgressBorderRadius": 0,
   "paddingTop": 0,
   "playbackBarHeadShadow": true,
   "toolTipShadowSpread": 0,
   "transitionMode": "blending",
   "toolTipShadowColor": "#333333",
   "toolTipShadowBlurRadius": 3,
   "minHeight": 1,
   "toolTipFontColor": "#606060",
   "playbackBarBorderRadius": 0,
   "minWidth": 1,
   "playbackBarProgressBorderColor": "#000000",
   "playbackBarHeadBackgroundColor": [
    "#111111",
    "#666666"
   ],
   "toolTipPaddingRight": 6,
   "playbackBarHeadBorderRadius": 0,
   "toolTipTextShadowOpacity": 0,
   "toolTipPaddingTop": 4,
   "borderRadius": 0,
   "toolTipFontSize": 12,
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
   "toolTipBorderRadius": 3,
   "playbackBarHeadShadowOpacity": 0.7,
   "playbackBarHeadHeight": 15,
   "top": "10%",
   "playbackBarHeadBackgroundColorRatios": [
    0,
    1
   ],
   "playbackBarHeadBorderSize": 0,
   "bottom": "10%",
   "toolTipFontWeight": "normal",
   "id": "MapViewer",
   "toolTipTextShadowBlurRadius": 3,
   "progressBarBorderColor": "#000000",
   "toolTipShadowHorizontalLength": 0,
   "playbackBarHeadOpacity": 1,
   "progressBarBackgroundColorRatios": [
    0
   ],
   "progressBackgroundColorDirection": "vertical",
   "playbackBarHeadShadowColor": "#000000",
   "progressHeight": 10,
   "left": "10%",
   "progressBorderColor": "#000000",
   "shadow": false,
   "playbackBarBottom": 0,
   "playbackBarProgressBackgroundColor": [
    "#3399FF"
   ],
   "right": "10%",
   "toolTipFontFamily": "Arial",
   "playbackBarHeadShadowHorizontalLength": 0,
   "progressOpacity": 1,
   "progressBarBackgroundColor": [
    "#3399FF"
   ]
  }
 },
 {
  "id": "panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E_camera",
  "initialPosition": {
   "yaw": 178.1,
   "class": "PanoramaCameraPosition",
   "pitch": 2.83
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E",
 {
  "id": "panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E_camera",
  "initialPosition": {
   "yaw": 16.81,
   "class": "PanoramaCameraPosition",
   "pitch": 2.87
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D",
 {
  "id": "panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_47B53902_572E_CEDF_41CC_C256D31A5443",
 {
  "id": "panorama_47B53902_572E_CEDF_41CC_C256D31A5443_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC",
 {
  "id": "panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF",
 {
  "id": "panorama_45750F9A_5593_A978_41D1_DB2A12878BDF_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C",
 {
  "id": "panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_46009756_572D_4167_41C6_2B49BD1EF7CE",
 {
  "id": "panorama_46009756_572D_4167_41C6_2B49BD1EF7CE_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D",
 {
  "id": "panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116",
 {
  "id": "panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "mainPlayList",
  "class": "PlayList",
  "items": [
   {
    "id": "PanoramaPlayListItem_52DBB40C_5CA9_8F1C_41D0_9EFD1EC9C228",
    "media": "this.panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_52DBB40C_5CA9_8F1C_41D0_9EFD1EC9C228, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "media": "this.panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "media": "this.panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "media": "this.panorama_47B53902_572E_CEDF_41CC_C256D31A5443",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_47B53902_572E_CEDF_41CC_C256D31A5443_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "media": "this.panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "media": "this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "media": "this.panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "media": "this.panorama_46009756_572D_4167_41C6_2B49BD1EF7CE",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_46009756_572D_4167_41C6_2B49BD1EF7CE_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "media": "this.panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 0)",
    "media": "this.panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116_camera"
   }
  ]
 },
 {
  "id": "ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 0, 1)",
    "media": "this.panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 1, 2)",
    "media": "this.panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 2, 3)",
    "media": "this.panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 3, 4)",
    "media": "this.panorama_47B53902_572E_CEDF_41CC_C256D31A5443",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_47B53902_572E_CEDF_41CC_C256D31A5443_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 4, 5)",
    "media": "this.panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 5, 6)",
    "media": "this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 6, 7)",
    "media": "this.panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 7, 8)",
    "media": "this.panorama_46009756_572D_4167_41C6_2B49BD1EF7CE",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_46009756_572D_4167_41C6_2B49BD1EF7CE_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 8, 9)",
    "media": "this.panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 9, 0)",
    "media": "this.panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116_camera"
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
  "id": "playList_52C983FB_5CA9_8904_41BE_CDCE3B552AF6",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.registerKey('visibility_Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB', this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB.get('visible')); this.registerKey('visibility_ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472', this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472.get('visible')); this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setComponentVisibility(this.Container_86F3A56C_8E22_5B1D_41CA_9CE53436FE56, false, -1, this.effect_22973FB1_2DD9_0423_41C1_E1E03953DCCE, 'hideEffect', false); this.setComponentVisibility(this.Container_807F782A_8E23_A905_41DE_623121285A09, false, -1, this.effect_22974FB2_2DD9_0421_41BA_84205292D043, 'hideEffect', false); this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, false, -1, this.effect_3876CD6E_2DF9_0421_41C1_F0AB7F279824, 'hideEffect', false); this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, false, -1, this.effect_22899FB3_2DD9_0427_41BB_298AEB3D2851, 'hideEffect', false); this.setComponentVisibility(this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB, true, -1, this.effect_2289DFB3_2DD9_0427_41AE_A35795880BA7, 'showEffect', false)",
    "media": "this.video_210B394E_3D54_1A60_41A3_CB42BEC0D3EC",
    "player": "this.MainViewerVideoPlayer",
    "class": "VideoPlayListItem",
    "end": "this.setComponentVisibility(this.Container_86F3A56C_8E22_5B1D_41CA_9CE53436FE56, true, -1, this.effect_22975FB2_2DD9_0421_41B4_7A2443082F44, 'showEffect', false); this.setComponentVisibility(this.Container_86F3A56C_8E22_5B1D_41CA_9CE53436FE56, true, -1, this.effect_22975FB2_2DD9_0421_41B4_7A2443082F44, 'showEffect', false); this.setComponentVisibility(this.Container_807F782A_8E23_A905_41DE_623121285A09, true, -1, this.effect_22977FB2_2DD9_0421_41C1_F53B037346DF, 'showEffect', false); this.setComponentVisibility(this.Container_807F782A_8E23_A905_41DE_623121285A09, true, -1, this.effect_22977FB2_2DD9_0421_41C1_F53B037346DF, 'showEffect', false); if(this.existsKey('visibility_ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472')){ if(this.getKey('visibility_ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472')) { this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, true, -1, this.effect_5176F847_5CA9_870C_41D4_3D949ABD189F, 'showEffect', false); } else { this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, false, -1, this.effect_3876CD6E_2DF9_0421_41C1_F0AB7F279824, 'hideEffect', false); } }; this.unregisterKey('visibility_ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472'); if(this.existsKey('visibility_Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB')){ if(this.getKey('visibility_Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB')) { this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, true, -1, this.effect_51763847_5CA9_870C_41C8_F40B8F4ED2B2, 'showEffect', false); } else { this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, false, -1, this.effect_22899FB3_2DD9_0427_41BB_298AEB3D2851, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB'); this.setComponentVisibility(this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB, false, -1, this.effect_2289EFB3_2DD9_0427_41C0_ACB5A72AE218, 'hideEffect', false); this.setComponentVisibility(this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB, false, -1, this.effect_2289EFB3_2DD9_0427_41C0_ACB5A72AE218, 'hideEffect', false)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_52C983FB_5CA9_8904_41BE_CDCE3B552AF6, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_52C983FB_5CA9_8904_41BE_CDCE3B552AF6, 0, this.video_210B394E_3D54_1A60_41A3_CB42BEC0D3EC)"
   }
  ]
 },
 {
  "thumbnailUrl": "media/album_1AE8DEB7_0EE7_8CC7_4198_F5B75788CCF6_t.png",
  "label": "Photo Album",
  "id": "album_1AE8DEB7_0EE7_8CC7_4198_F5B75788CCF6",
  "playList": {
   "id": "album_1AE8DEB7_0EE7_8CC7_4198_F5B75788CCF6_AlbumPlayList",
   "class": "PhotoPlayList",
   "items": [
    {
     "class": "PhotoPlayListItem",
     "media": {
      "thumbnailUrl": "media/photo_25EB8F3B_3D54_3627_41C1_FA6C2C76D85C_t.jpg",
      "class": "Photo",
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
      }
     },
     "camera": {
      "scaleMode": "fit_outside",
      "initialPosition": {
       "x": "0.50",
       "zoomFactor": 1,
       "class": "PhotoCameraPosition",
       "y": "0.50"
      },
      "easing": "linear",
      "targetPosition": {
       "x": "0.33",
       "zoomFactor": 1.1,
       "class": "PhotoCameraPosition",
       "y": "0.55"
      },
      "duration": 5000,
      "class": "MovementPhotoCamera"
     }
    },
    {
     "class": "PhotoPlayListItem",
     "media": {
      "thumbnailUrl": "media/photo_2537233E_3D54_0E20_41B8_95E46BC1EC07_t.jpg",
      "class": "Photo",
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
      }
     },
     "camera": {
      "scaleMode": "fit_outside",
      "initialPosition": {
       "x": "0.50",
       "zoomFactor": 1,
       "class": "PhotoCameraPosition",
       "y": "0.50"
      },
      "easing": "linear",
      "targetPosition": {
       "x": "0.50",
       "zoomFactor": 1.1,
       "class": "PhotoCameraPosition",
       "y": "0.71"
      },
      "duration": 5000,
      "class": "MovementPhotoCamera"
     }
    },
    {
     "class": "PhotoPlayListItem",
     "media": {
      "thumbnailUrl": "media/photo_25363697_3D54_16EF_41C7_78CA5BF042D8_t.jpg",
      "class": "Photo",
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
      }
     },
     "camera": {
      "scaleMode": "fit_outside",
      "initialPosition": {
       "x": "0.50",
       "zoomFactor": 1,
       "class": "PhotoCameraPosition",
       "y": "0.50"
      },
      "easing": "linear",
      "targetPosition": {
       "x": "0.52",
       "zoomFactor": 1.1,
       "class": "PhotoCameraPosition",
       "y": "0.66"
      },
      "duration": 5000,
      "class": "MovementPhotoCamera"
     }
    },
    {
     "class": "PhotoPlayListItem",
     "media": {
      "thumbnailUrl": "media/photo_2536FA03_3D54_19E7_41C9_9A86E77D5C4C_t.jpg",
      "class": "Photo",
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
      }
     },
     "camera": {
      "scaleMode": "fit_outside",
      "initialPosition": {
       "x": "0.50",
       "zoomFactor": 1,
       "class": "PhotoCameraPosition",
       "y": "0.50"
      },
      "easing": "linear",
      "targetPosition": {
       "x": "0.70",
       "zoomFactor": 1.1,
       "class": "PhotoCameraPosition",
       "y": "0.71"
      },
      "duration": 5000,
      "class": "MovementPhotoCamera"
     }
    },
    {
     "class": "PhotoPlayListItem",
     "media": {
      "thumbnailUrl": "media/photo_25365DAF_3D54_1A3F_41C9_6122F3F568B7_t.jpg",
      "class": "Photo",
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
      }
     },
     "camera": {
      "scaleMode": "fit_outside",
      "initialPosition": {
       "x": "0.50",
       "zoomFactor": 1,
       "class": "PhotoCameraPosition",
       "y": "0.50"
      },
      "easing": "linear",
      "targetPosition": {
       "x": "0.49",
       "zoomFactor": 1.1,
       "class": "PhotoCameraPosition",
       "y": "0.74"
      },
      "duration": 5000,
      "class": "MovementPhotoCamera"
     }
    },
    {
     "class": "PhotoPlayListItem",
     "media": {
      "thumbnailUrl": "media/photo_2536E107_3D54_0BE0_41C7_237D79278EAE_t.jpg",
      "class": "Photo",
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
      }
     },
     "camera": {
      "scaleMode": "fit_outside",
      "initialPosition": {
       "x": "0.50",
       "zoomFactor": 1,
       "class": "PhotoCameraPosition",
       "y": "0.50"
      },
      "easing": "linear",
      "targetPosition": {
       "x": "0.32",
       "zoomFactor": 1.1,
       "class": "PhotoCameraPosition",
       "y": "0.47"
      },
      "duration": 5000,
      "class": "MovementPhotoCamera"
     }
    },
    {
     "class": "PhotoPlayListItem",
     "media": {
      "thumbnailUrl": "media/photo_25361460_3D54_0A21_41C5_9CEF516D0083_t.jpg",
      "class": "Photo",
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
      }
     },
     "camera": {
      "scaleMode": "fit_outside",
      "initialPosition": {
       "x": "0.50",
       "zoomFactor": 1,
       "class": "PhotoCameraPosition",
       "y": "0.50"
      },
      "easing": "linear",
      "targetPosition": {
       "x": "0.64",
       "zoomFactor": 1.1,
       "class": "PhotoCameraPosition",
       "y": "0.53"
      },
      "duration": 5000,
      "class": "MovementPhotoCamera"
     }
    },
    {
     "class": "PhotoPlayListItem",
     "media": {
      "thumbnailUrl": "media/photo_2536E7CB_3D54_F667_41C8_0C74E4EA5879_t.jpg",
      "class": "Photo",
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
      }
     },
     "camera": {
      "scaleMode": "fit_outside",
      "initialPosition": {
       "x": "0.50",
       "zoomFactor": 1,
       "class": "PhotoCameraPosition",
       "y": "0.50"
      },
      "easing": "linear",
      "targetPosition": {
       "x": "0.31",
       "zoomFactor": 1.1,
       "class": "PhotoCameraPosition",
       "y": "0.32"
      },
      "duration": 5000,
      "class": "MovementPhotoCamera"
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
  "id": "playList_52C963FB_5CA9_8904_41A5_58E33C074836",
  "class": "PlayList",
  "items": [
   {
    "player": "this.ViewerAreaLabeled_9FD7235A_96CD_9045_41D9_23A3BCBDB1C6PhotoAlbumPlayer",
    "class": "PhotoAlbumPlayListItem",
    "media": "this.album_1AE8DEB7_0EE7_8CC7_4198_F5B75788CCF6",
    "begin": "this.loopAlbum(this.playList_52C963FB_5CA9_8904_41A5_58E33C074836, 0)"
   }
  ]
 },
 "this.map_4E02A832_427B_EE04_41CC_8E1CEC03E8D3",
 {
  "id": "playList_52D8C409_5CA9_8F04_41D6_6D96EBFB1016",
  "class": "PlayList",
  "items": [
   {
    "player": "this.MapViewerMapPlayer",
    "class": "MapPlayListItem",
    "media": "this.map_4E02A832_427B_EE04_41CC_8E1CEC03E8D3",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')"
   }
  ]
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
  "id": "ImageResource_536A2F3F_412A_B1B6_41B9_51CAE5D86C15",
  "class": "ImageResource"
 },
 {
  "easing": "cubic_in",
  "id": "FadeInEffect_8ED05F70_96C4_F045_41DC_2AB82A556F92",
  "class": "FadeInEffect",
  "duration": 500
 },
 {
  "easing": "cubic_out",
  "id": "FadeOutEffect_8ED06F70_96C4_F045_41DA_C74400CF7B15",
  "class": "FadeOutEffect",
  "duration": 500
 },
 {
  "easing": "linear",
  "id": "effect_98AADBB0_96C5_F0C5_41B2_1C4D08E503DB",
  "class": "FadeInEffect",
  "duration": 200
 },
 {
  "easing": "linear",
  "id": "effect_51CB7B74_4299_12E2_41B4_829087983DE5",
  "class": "FadeInEffect",
  "duration": 300
 },
 {
  "easing": "linear",
  "id": "effect_15DDF232_3E91_44CF_41AB_F8C3E6067377",
  "class": "FadeInEffect",
  "duration": 400
 },
 {
  "easing": "linear",
  "id": "effect_15DDE232_3E91_44CF_41B1_14501B4EC17A",
  "class": "FadeOutEffect",
  "duration": 400
 },
 {
  "easing": "linear",
  "id": "effect_CACBF85D_EED0_7261_41DB_A3B65ECE0D5D",
  "class": "FadeInEffect",
  "duration": 200
 },
 {
  "easing": "linear",
  "id": "effect_CACBC85D_EED0_7261_41BE_8CF4C3A8170C",
  "class": "FadeOutEffect",
  "duration": 200
 },
 {
  "easing": "linear",
  "id": "effect_CDD059FA_EED0_D223_41DB_70ACFBE986FE",
  "class": "FadeInEffect",
  "duration": 200
 },
 {
  "easing": "linear",
  "id": "effect_CDD049FB_EED0_D221_41EB_CA2134B978E0",
  "class": "FadeOutEffect",
  "duration": 200
 },
 {
  "easing": "linear",
  "id": "effect_32C91197_3F22_3110_4181_9E76B593FBFE",
  "class": "FadeInEffect",
  "duration": 400
 },
 {
  "easing": "linear",
  "id": "effect_32C92197_3F22_3110_419D_E2E21968F16F",
  "class": "FadeOutEffect",
  "duration": 400
 },
 {
  "easing": "linear",
  "id": "effect_9B0AF4E2_96C4_F045_41D3_0E00FEE03A15",
  "class": "FadeOutEffect",
  "duration": 200
 },
 {
  "easing": "linear",
  "id": "effect_500E3733_4297_3267_41C9_4935C0BEBF39",
  "class": "FadeOutEffect",
  "duration": 300
 },
 {
  "id": "camera_521E1448_5CA9_8F04_41D6_3900B13B7FC6",
  "initialPosition": {
   "yaw": 9.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_526DC452_5CA9_8F04_41B7_1F8E30277E91",
  "initialPosition": {
   "yaw": 9.32,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_527CB45D_5CA9_8F3C_417D_46E82ACF72CF",
  "initialPosition": {
   "yaw": 7.79,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_52499467_5CA9_8F0C_418F_395C51FD7782",
  "initialPosition": {
   "yaw": -96.55,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_52589474_5CA9_8F0C_41BB_32684A8D8133",
  "initialPosition": {
   "yaw": 7.78,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_5255847F_5CA9_8FFB_41D1_B42F6F546AC5",
  "initialPosition": {
   "yaw": 9.42,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_53A37489_5CA9_8F04_41C5_BF4ADF9E621A",
  "initialPosition": {
   "yaw": 8.04,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_53B13493_5CA9_8F0B_41D1_3BFDACE1DECB",
  "initialPosition": {
   "yaw": 8.65,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_502034BE_5CA9_8F7C_41D3_9A17689A679D",
  "initialPosition": {
   "yaw": 6.88,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_502514C8_5CA9_8F04_41C7_A39C968BA4D3",
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_503944D2_5CA9_8F04_41D4_A892A6D6B1A3",
  "initialPosition": {
   "yaw": 9.32,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_5030A4DC_5CA9_8F3C_41D2_37BDD85DC7D2",
  "initialPosition": {
   "yaw": 7.79,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_500894E5_5CA9_8F0C_41C6_DB23D17ED07A",
  "initialPosition": {
   "yaw": -144.77,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_5002E4EF_5CA9_8F1C_41C3_FFFC99625986",
  "initialPosition": {
   "yaw": 7.78,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_501A14F9_5CA9_8F04_41D6_3BF6C5834AA1",
  "initialPosition": {
   "yaw": 9.42,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_50145502_5CA9_8904_419E_539B6FF0E4E4",
  "initialPosition": {
   "yaw": -139.51,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_506E550B_5CA9_8904_41A9_150DDE36AC61",
  "initialPosition": {
   "yaw": 8.65,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_50671517_5CA9_890C_41D6_0D1D2DADEC38",
  "initialPosition": {
   "yaw": 6.88,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_50711520_5CA9_8904_41D5_C1CE07B4D2A0",
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_504A652A_5CA9_8904_41C7_92284567AFE8",
  "initialPosition": {
   "yaw": 9.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_50450533_5CA9_8904_41C4_FC998782FAA5",
  "initialPosition": {
   "yaw": 7.79,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_505F653D_5CA9_897C_41C2_AC88C2F130F9",
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_51ACD547_5CA9_890C_418C_C822F8529B23",
  "initialPosition": {
   "yaw": 87.49,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_51B9E550_5CA9_8904_41AF_F17BFB4DC636",
  "initialPosition": {
   "yaw": 9.42,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_51B41559_5CA9_8904_41C2_C274DBDF449C",
  "initialPosition": {
   "yaw": 8.04,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_51811563_5CA9_8904_41D6_CCB911867926",
  "initialPosition": {
   "yaw": 7.14,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_519E856C_5CA9_891C_41BD_33E065ABDE60",
  "initialPosition": {
   "yaw": 6.88,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_51EB5575_5CA9_890C_41D3_66AA830AB89D",
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_51F8D57F_5CA9_89FC_41D1_7AB0748513CE",
  "initialPosition": {
   "yaw": 9.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_51F6F588_5CA9_8904_41D2_1595F1F10B53",
  "initialPosition": {
   "yaw": 9.32,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_51C4A591_5CA9_8904_4169_9B54E7DE2660",
  "initialPosition": {
   "yaw": -144.52,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_51D0F59B_5CA9_8904_41C4_17EFBE4FCCCF",
  "initialPosition": {
   "yaw": 7.78,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_512E05A4_5CA9_890C_41A3_8A147F0353FA",
  "initialPosition": {
   "yaw": 9.42,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_513B85AE_5CA9_891C_41D4_405E5707D117",
  "initialPosition": {
   "yaw": 8.04,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_510855B7_5CA9_890C_41CC_4625FFF4192A",
  "initialPosition": {
   "yaw": 8.65,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_510525C1_5CA9_8904_41CD_B10584F13413",
  "initialPosition": {
   "yaw": -140.62,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_5113C5CA_5CA9_8904_41D3_4936E8FB578D",
  "initialPosition": {
   "yaw": 20.11,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_5161F5D4_5CA9_890C_41C3_9C93B48FBB3C",
  "initialPosition": {
   "yaw": -67.96,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_517EC5DD_5CA9_893C_4182_EA128D842668",
  "initialPosition": {
   "yaw": 9.32,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_514C65F0_5CA9_8904_41D4_105889E59C26",
  "initialPosition": {
   "yaw": -71.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_515AA5FF_5CA9_88FC_41B5_4EB3132218E7",
  "initialPosition": {
   "yaw": 7.78,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_52A8160F_5CA9_8B1D_41D4_816730F28328",
  "initialPosition": {
   "yaw": -13.96,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_52A7C61E_5CA9_8B3F_41BC_8136C374F344",
  "initialPosition": {
   "yaw": 8.04,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_52B4C62C_5CA9_8B1C_41AF_1BC3E0BA8B10",
  "initialPosition": {
   "yaw": 8.65,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_52824640_5CA9_8B04_41B7_229C001304EA",
  "initialPosition": {
   "yaw": 6.88,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_5290864F_5CA9_8B1C_41C6_385F3316B7C8",
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_52EE165F_5CA9_8B3C_41B6_60FE8D411A43",
  "initialPosition": {
   "yaw": 9.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_52FB666E_5CA9_8B1C_41A5_A0C7818F94C0",
  "initialPosition": {
   "yaw": 165.15,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_52CAE67D_5CA9_8BFC_41D7_108488031B0A",
  "initialPosition": {
   "yaw": 7.79,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_52D8568D_5CA9_8B1C_41C1_07C743DC2DDE",
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_52D55699_5CA9_8B04_41C3_D8DAABFBB5A1",
  "initialPosition": {
   "yaw": 9.42,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_522456A2_5CA9_8B04_41C1_4D912F626D66",
  "initialPosition": {
   "yaw": 13.58,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_5232B6AC_5CA9_8B1C_41C5_50DE723F2D73",
  "initialPosition": {
   "yaw": 8.65,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_520016B6_5CA9_8B0C_4181_6D961648CD6A",
  "initialPosition": {
   "yaw": 6.88,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_521D66C0_5CA9_8B04_41B7_C16527A0BED1",
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_526C36C9_5CA9_8B04_41CF_D07A05E86932",
  "initialPosition": {
   "yaw": 9.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_527BE6D4_5CA9_8B0C_41D0_1CB0907F7A3E",
  "initialPosition": {
   "yaw": 9.32,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_5248E6DE_5CA9_8B3C_41BC_67C37F9B27D9",
  "initialPosition": {
   "yaw": 7.79,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_524656E8_5CA9_8B04_418B_2F3D46E14068",
  "initialPosition": {
   "yaw": -15.31,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_5254B6F2_5CA9_8B04_41D2_B3013CEE90D7",
  "initialPosition": {
   "yaw": 7.78,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_50122724_5CA9_890C_41C0_FCC384FA85EA",
  "initialPosition": {
   "yaw": 8.04,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_5015772E_5CA9_891C_41C1_1063047B6D6C",
  "initialPosition": {
   "yaw": 8.65,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_506BB738_5CA9_8904_41D0_24E7DD26FA4E",
  "initialPosition": {
   "yaw": 6.88,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_50606741_5CA9_8904_41C0_010F0205DB66",
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_5065974B_5CA9_8904_41C9_6FBCE6824133",
  "initialPosition": {
   "yaw": -67.45,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_507B8754_5CA9_890C_41BA_6B2632EB3BB2",
  "initialPosition": {
   "yaw": 9.32,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_507FD75E_5CA9_893C_419B_821E29BD48F0",
  "initialPosition": {
   "yaw": 7.79,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_50751767_5CA9_890C_41B8_E4F9F3AA497F",
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_504B1771_5CA9_8904_41D5_E2DD2C6CAFE7",
  "initialPosition": {
   "yaw": 159.79,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_5040C77A_5CA9_8904_41C9_278BD5ED0289",
  "initialPosition": {
   "yaw": 9.42,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_5046E784_5CA9_890C_41B5_56947E03CE9B",
  "initialPosition": {
   "yaw": 8.65,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_505B378E_5CA9_891F_41AF_6860DD55427D",
  "initialPosition": {
   "yaw": 6.88,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_50523797_5CA9_890D_41C6_BFB5DC8B6F4A",
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_51ABB7A0_5CA9_8904_41B9_5BAB726B56B0",
  "initialPosition": {
   "yaw": 9.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_51A7C7A9_5CA9_8904_41C4_205F04384C91",
  "initialPosition": {
   "yaw": -178.13,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_51B4A7B3_5CA9_8904_41D5_47D82BFC3175",
  "initialPosition": {
   "yaw": 7.79,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_518F97BC_5CA9_897D_41A9_4C6DD560EE69",
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_519B47C6_5CA9_890C_41C7_78ECE1411FE6",
  "initialPosition": {
   "yaw": 7.78,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_5197B7CF_5CA9_891C_41C0_6DDE9F32F223",
  "initialPosition": {
   "yaw": 9.42,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_51E317D9_5CA9_8904_41C6_0966957D990E",
  "initialPosition": {
   "yaw": 8.04,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_51FFD7E3_5CA9_8904_41C7_2DB000434EA0",
  "initialPosition": {
   "yaw": 6.88,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_51CD97EC_5CA9_891C_41B0_8FCBB3B016FE",
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_51DAD7F5_5CA9_890C_41D0_6131C5B066B7",
  "initialPosition": {
   "yaw": 9.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_51D61800_5CA9_8704_41D1_FDC1C9881180",
  "initialPosition": {
   "yaw": 9.32,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_5124D80B_5CA9_8704_41CC_1086312306A7",
  "initialPosition": {
   "yaw": -71.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_51305815_5CA9_870C_41D6_D011851F0276",
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_510EF820_5CA9_8704_41D1_5725B67FCB76",
  "initialPosition": {
   "yaw": 7.78,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_511A782A_5CA9_8704_41C6_E91BA6A57208",
  "initialPosition": {
   "yaw": 9.42,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_5168F835_5CA9_870C_41B0_2D6B584FB76B",
  "initialPosition": {
   "yaw": 8.04,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_5166A840_5CA9_8704_41CD_6B1CF99E721C",
  "initialPosition": {
   "yaw": 8.65,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_22973FB1_2DD9_0423_41C1_E1E03953DCCE",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_22975FB2_2DD9_0421_41B4_7A2443082F44",
  "class": "FadeInEffect",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_22974FB2_2DD9_0421_41BA_84205292D043",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_22977FB2_2DD9_0421_41C1_F53B037346DF",
  "class": "FadeInEffect",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_3876CD6E_2DF9_0421_41C1_F0AB7F279824",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_5176F847_5CA9_870C_41D4_3D949ABD189F",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_3876CD6E_2DF9_0421_41C1_F0AB7F279824",
 {
  "easing": "cubic_in_out",
  "id": "effect_22899FB3_2DD9_0427_41BB_298AEB3D2851",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_51763847_5CA9_870C_41C8_F40B8F4ED2B2",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_22899FB3_2DD9_0427_41BB_298AEB3D2851",
 {
  "easing": "cubic_in_out",
  "id": "effect_2289DFB3_2DD9_0427_41AE_A35795880BA7",
  "class": "FadeInEffect",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_2289EFB3_2DD9_0427_41C0_ACB5A72AE218",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "maximumAngle": 231.16,
  "autoplay": true,
  "id": "audio_A83B2F1A_B250_204B_41B2_61A870B2B428",
  "loop": true,
  "audio": {
   "mp3Url": "media/audio_A83B2F1A_B250_204B_41B2_61A870B2B428.mp3",
   "oggUrl": "media/audio_A83B2F1A_B250_204B_41B2_61A870B2B428.ogg",
   "id": "audioresource_1D15163A_0EEB_BFC9_419F_EF5F7074EFB1",
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
   "mp3Url": "media/audio_A875C8FE_B250_61CA_41D2_1BDD70C9887A.mp3",
   "oggUrl": "media/audio_A875C8FE_B250_61CA_41D2_1BDD70C9887A.ogg",
   "id": "audioresource_A84F2D34_B270_605F_41E2_4CF67AB762D2",
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
   "mp3Url": "media/audio_A87513BA_B273_E04A_41AA_0102CD2EF1BE.mp3",
   "oggUrl": "media/audio_A87513BA_B273_E04A_41AA_0102CD2EF1BE.ogg",
   "id": "audioresource_A83107F8_B270_2FD6_41E2_DAE1F661A577",
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
  "class": "Photo",
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
  }
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
  "paddingLeft": 0,
  "paddingRight": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "progressBorderRadius": 0,
  "progressBarOpacity": 1,
  "toolTipPaddingBottom": 4,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "progressRight": 0,
  "toolTipBorderSize": 1,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "toolTipShadowOpacity": 1,
  "toolTipOpacity": 0.7,
  "playbackBarBorderColor": "#FFFFFF",
  "playbackBarHeight": 10,
  "toolTipShadowVerticalLength": 0,
  "toolTipTextShadowColor": "#000000",
  "playbackBarHeadWidth": 6,
  "class": "ViewerArea",
  "toolTipFontStyle": "normal",
  "progressBackgroundOpacity": 1,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "progressBottom": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "paddingBottom": 0,
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarProgressBorderSize": 0,
  "playbackBarRight": 0,
  "toolTipBackgroundColor": "#000000",
  "progressBorderSize": 0,
  "progressBarBorderSize": 0,
  "progressBarBorderRadius": 0,
  "playbackBarOpacity": 1,
  "playbackBarProgressBorderRadius": 0,
  "paddingTop": 0,
  "playbackBarHeadShadow": true,
  "toolTipShadowSpread": 0,
  "transitionMode": "blending",
  "toolTipShadowColor": "#333333",
  "toolTipShadowBlurRadius": 3,
  "minHeight": 50,
  "toolTipFontColor": "#606060",
  "playbackBarBorderRadius": 0,
  "minWidth": 100,
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "toolTipPaddingRight": 6,
  "playbackBarHeadBorderRadius": 0,
  "toolTipTextShadowOpacity": 0,
  "toolTipPaddingTop": 4,
  "borderRadius": 0,
  "toolTipFontSize": 14,
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
  "toolTipBorderRadius": 3,
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarHeadHeight": 15,
  "top": "0%",
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadBorderSize": 0,
  "bottom": "0%",
  "toolTipFontWeight": "normal",
  "id": "MainViewer",
  "toolTipTextShadowBlurRadius": 3,
  "progressBarBorderColor": "#000000",
  "toolTipShadowHorizontalLength": 0,
  "playbackBarHeadOpacity": 1,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "progressBackgroundColorDirection": "vertical",
  "playbackBarHeadShadowColor": "#000000",
  "progressHeight": 10,
  "left": "0%",
  "progressBorderColor": "#000000",
  "shadow": false,
  "playbackBarBottom": 5,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "right": "0%",
  "toolTipFontFamily": "Arial",
  "playbackBarHeadShadowHorizontalLength": 0,
  "progressOpacity": 1,
  "progressBarBackgroundColor": [
   "#3399FF"
  ]
 },
 {
  "backgroundColorDirection": "vertical",
  "overflow": "visible",
  "paddingLeft": 10,
  "scrollBarOpacity": 0.5,
  "minWidth": 100,
  "paddingRight": 10,
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "scrollBarColor": "#000000",
  "height": 70,
  "borderRadius": 5,
  "borderSize": 0,
  "gap": 35,
  "contentOpaque": false,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "class": "Container",
  "horizontalAlign": "center",
  "paddingBottom": 0,
  "layout": "horizontal",
  "maxHeight": 70,
  "backgroundColorRatios": [
   0,
   1
  ],
  "id": "Container_86F3A56C_8E22_5B1D_41CA_9CE53436FE56",
  "bottom": "3%",
  "paddingTop": 0,
  "left": "0%",
  "minHeight": 25,
  "backgroundOpacity": 0.25,
  "shadow": false,
  "right": "0%",
  "children": [
   {
    "paddingLeft": 0,
    "minWidth": 25,
    "paddingRight": 0,
    "mode": "push",
    "toolTipPaddingRight": 6,
    "toolTipPaddingBottom": 4,
    "iconURL": "skin/IconButton_87577B8F_8E22_AF1B_41CC_79EB87AE6DED.png",
    "height": "100%",
    "width": "100%",
    "toolTip": "Info",
    "transparencyActive": true,
    "toolTipPaddingTop": 4,
    "borderRadius": 0,
    "toolTipBorderSize": 1,
    "toolTipTextShadowOpacity": 0,
    "toolTipFontSize": 14,
    "toolTipShadowOpacity": 1,
    "toolTipOpacity": 0.7,
    "borderSize": 0,
    "rollOverIconURL": "skin/IconButton_87577B8F_8E22_AF1B_41CC_79EB87AE6DED_rollover.png",
    "toolTipShadowVerticalLength": 0,
    "toolTipPaddingLeft": 6,
    "toolTipBorderColor": "#767676",
    "toolTipTextShadowColor": "#000000",
    "class": "IconButton",
    "toolTipFontStyle": "normal",
    "toolTipBorderRadius": 3,
    "horizontalAlign": "center",
    "click": "this.showPopupImage(this.ImageResource_536A2F3F_412A_B1B6_41B9_51CAE5D86C15, null, '85%', '85%', this.FadeInEffect_8ED05F70_96C4_F045_41DC_2AB82A556F92, this.FadeOutEffect_8ED06F70_96C4_F045_41DA_C74400CF7B15, {'rollOverIconWidth':25,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorDirection':'vertical','rollOverBackgroundColor':['#000000','#000000','#000000'],'pressedBackgroundColor':['#000000','#000000','#000000'],'iconHeight':25,'rollOverIconColor':'#52B7EF','backgroundColor':['#000000','#000000','#000000'],'rollOverBackgroundColorDirection':'vertical','pressedBorderSize':0,'paddingLeft':10,'iconColor':'#FFFFFF','backgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':10,'paddingBottom':10,'pressedIconLineWidth':3,'borderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':3,'pressedBorderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundOpacity':0.3,'paddingTop':10,'pressedIconColor':'#CCCCCC','pressedBackgroundColorDirection':'vertical','borderSize':0,'pressedIconWidth':25,'pressedIconHeight':25,'backgroundOpacity':0.15,'rollOverBorderColor':'#000000','rollOverBackgroundOpacity':0.5,'iconWidth':25,'rollOverIconHeight':25,'rollOverIconLineWidth':3}, null, null, false)",
    "maxWidth": 70,
    "visible": false,
    "paddingBottom": 0,
    "maxHeight": 70,
    "cursor": "hand",
    "toolTipBackgroundColor": "#000000",
    "toolTipFontWeight": "normal",
    "id": "IconButton_87577B8F_8E22_AF1B_41CC_79EB87AE6DED",
    "toolTipTextShadowBlurRadius": 3,
    "toolTipShadowHorizontalLength": 0,
    "paddingTop": 0,
    "toolTipShadowSpread": 0,
    "toolTipShadowColor": "#333333",
    "toolTipShadowBlurRadius": 3,
    "minHeight": 25,
    "backgroundOpacity": 0,
    "shadow": false,
    "toolTipFontColor": "#606060",
    "toolTipFontFamily": "Arial",
    "verticalAlign": "middle"
   },
   {
    "paddingLeft": 0,
    "minWidth": 25,
    "paddingRight": 0,
    "mode": "push",
    "toolTipPaddingRight": 6,
    "toolTipPaddingBottom": 4,
    "iconURL": "skin/IconButton_213ED70C_2DB2_E6C5_41B6_0CCE6C77E889.png",
    "height": "100%",
    "width": "100%",
    "toolTip": "Play Video",
    "transparencyActive": true,
    "toolTipPaddingTop": 4,
    "borderRadius": 0,
    "toolTipBorderSize": 1,
    "toolTipTextShadowOpacity": 0,
    "toolTipFontSize": 14,
    "toolTipShadowOpacity": 1,
    "toolTipOpacity": 0.7,
    "borderSize": 0,
    "rollOverIconURL": "skin/IconButton_213ED70C_2DB2_E6C5_41B6_0CCE6C77E889_rollover.png",
    "toolTipShadowVerticalLength": 0,
    "toolTipPaddingLeft": 6,
    "toolTipBorderColor": "#767676",
    "toolTipTextShadowColor": "#000000",
    "class": "IconButton",
    "toolTipFontStyle": "normal",
    "toolTipBorderRadius": 3,
    "horizontalAlign": "center",
    "click": "this.setMediaBehaviour(this.playList_52C983FB_5CA9_8904_41BE_CDCE3B552AF6, 0); this.MainViewerVideoPlayer.play()",
    "maxWidth": 70,
    "visible": false,
    "paddingBottom": 0,
    "maxHeight": 70,
    "cursor": "hand",
    "toolTipBackgroundColor": "#000000",
    "toolTipFontWeight": "normal",
    "id": "IconButton_213ED70C_2DB2_E6C5_41B6_0CCE6C77E889",
    "toolTipTextShadowBlurRadius": 3,
    "toolTipShadowHorizontalLength": 0,
    "paddingTop": 0,
    "toolTipShadowSpread": 0,
    "toolTipShadowColor": "#333333",
    "toolTipShadowBlurRadius": 3,
    "minHeight": 25,
    "backgroundOpacity": 0,
    "shadow": false,
    "toolTipFontColor": "#606060",
    "toolTipFontFamily": "Arial",
    "verticalAlign": "middle"
   },
   "this.IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED",
   {
    "paddingLeft": 0,
    "minWidth": 25,
    "paddingRight": 0,
    "mode": "push",
    "toolTipPaddingRight": 6,
    "toolTipPaddingBottom": 4,
    "iconURL": "skin/IconButton_2FC9210C_3E8F_C4D4_41A7_10D1404CA49B.png",
    "height": "85%",
    "width": "85%",
    "toolTip": "FLoor Plan",
    "transparencyActive": true,
    "toolTipPaddingTop": 4,
    "borderRadius": 0,
    "toolTipBorderSize": 1,
    "toolTipTextShadowOpacity": 0,
    "toolTipFontSize": 14,
    "toolTipShadowOpacity": 1,
    "toolTipOpacity": 0.7,
    "borderSize": 0,
    "toolTipShadowVerticalLength": 0,
    "toolTipPaddingLeft": 6,
    "toolTipBorderColor": "#767676",
    "toolTipTextShadowColor": "#000000",
    "class": "IconButton",
    "toolTipFontStyle": "normal",
    "toolTipBorderRadius": 3,
    "horizontalAlign": "center",
    "click": "this.setComponentVisibility(this.Container_53347472_4288_F6E6_4196_D7457B47D2CF, true, 0, this.effect_51CB7B74_4299_12E2_41B4_829087983DE5, 'showEffect', false)",
    "maxWidth": 70,
    "visible": false,
    "paddingBottom": 0,
    "maxHeight": 70,
    "cursor": "hand",
    "toolTipBackgroundColor": "#000000",
    "toolTipFontWeight": "normal",
    "id": "IconButton_2FC9210C_3E8F_C4D4_41A7_10D1404CA49B",
    "toolTipTextShadowBlurRadius": 3,
    "toolTipShadowHorizontalLength": 0,
    "paddingTop": 0,
    "toolTipShadowSpread": 0,
    "toolTipShadowColor": "#333333",
    "toolTipShadowBlurRadius": 3,
    "pressedIconURL": "skin/IconButton_2FC9210C_3E8F_C4D4_41A7_10D1404CA49B_pressed.png",
    "minHeight": 25,
    "backgroundOpacity": 0,
    "shadow": false,
    "toolTipFontColor": "#606060",
    "toolTipFontFamily": "Arial",
    "verticalAlign": "middle"
   },
   {
    "paddingLeft": 0,
    "minWidth": 25,
    "paddingRight": 0,
    "mode": "toggle",
    "toolTipPaddingRight": 6,
    "toolTipPaddingBottom": 4,
    "iconURL": "skin/IconButton_843BBEF5_8E22_690F_419D_28CBDD771ACC.png",
    "height": "100%",
    "width": "100%",
    "toolTip": "Panorama List",
    "transparencyActive": true,
    "toolTipPaddingTop": 4,
    "borderRadius": 0,
    "toolTipBorderSize": 1,
    "toolTipTextShadowOpacity": 0,
    "toolTipFontSize": 14,
    "toolTipShadowOpacity": 1,
    "toolTipOpacity": 0.7,
    "borderSize": 0,
    "toolTipShadowVerticalLength": 0,
    "toolTipPaddingLeft": 6,
    "toolTipBorderColor": "#767676",
    "toolTipTextShadowColor": "#000000",
    "class": "IconButton",
    "toolTipFontStyle": "normal",
    "toolTipBorderRadius": 3,
    "horizontalAlign": "center",
    "click": "if(!this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472.get('visible')){ this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, true, 0, this.effect_15DDF232_3E91_44CF_41AB_F8C3E6067377, 'showEffect', false) } else if(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472.get('visible')){ this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, false, 0, this.effect_15DDE232_3E91_44CF_41B1_14501B4EC17A, 'hideEffect', false) }",
    "maxWidth": 70,
    "paddingBottom": 0,
    "maxHeight": 70,
    "cursor": "hand",
    "toolTipBackgroundColor": "#000000",
    "toolTipFontWeight": "normal",
    "id": "IconButton_843BBEF5_8E22_690F_419D_28CBDD771ACC",
    "toolTipTextShadowBlurRadius": 3,
    "toolTipShadowHorizontalLength": 0,
    "paddingTop": 0,
    "toolTipShadowSpread": 0,
    "toolTipShadowColor": "#333333",
    "toolTipShadowBlurRadius": 3,
    "pressedIconURL": "skin/IconButton_843BBEF5_8E22_690F_419D_28CBDD771ACC_pressed.png",
    "minHeight": 25,
    "backgroundOpacity": 0,
    "shadow": false,
    "toolTipFontColor": "#606060",
    "toolTipFontFamily": "Arial",
    "verticalAlign": "middle"
   }
  ],
  "verticalAlign": "middle",
  "scrollBarVisible": "rollOver"
 },
 {
  "scrollBarColor": "#000000",
  "overflow": "visible",
  "paddingLeft": 0,
  "scrollBarOpacity": 0.5,
  "minWidth": 500,
  "paddingRight": 0,
  "width": 500,
  "height": 50,
  "borderRadius": 5,
  "borderSize": 0,
  "gap": 5,
  "contentOpaque": false,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "class": "Container",
  "horizontalAlign": "right",
  "top": "3%",
  "maxWidth": 500,
  "paddingBottom": 0,
  "layout": "horizontal",
  "maxHeight": 55,
  "id": "Container_807F782A_8E23_A905_41DE_623121285A09",
  "paddingTop": 0,
  "minHeight": 55,
  "backgroundOpacity": 0,
  "shadow": false,
  "right": "1.5%",
  "children": [
   {
    "scrollBarColor": "#000000",
    "overflow": "visible",
    "paddingLeft": 0,
    "scrollBarOpacity": 0.5,
    "minWidth": 100,
    "paddingRight": 0,
    "width": 400,
    "height": 55,
    "borderRadius": 0,
    "borderSize": 0,
    "gap": 0,
    "contentOpaque": false,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "class": "Container",
    "horizontalAlign": "right",
    "visible": false,
    "paddingBottom": 0,
    "layout": "horizontal",
    "maxHeight": 55,
    "id": "Container_80D3CF90_8E26_E705_41E0_E47025A2C106",
    "paddingTop": 0,
    "minHeight": 55,
    "backgroundOpacity": 0,
    "shadow": false,
    "children": [
     "this.IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37",
     {
      "paddingLeft": 0,
      "minWidth": 1,
      "paddingRight": 0,
      "mode": "toggle",
      "toolTipPaddingRight": 6,
      "toolTipPaddingBottom": 4,
      "iconURL": "skin/IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA.png",
      "height": "100%",
      "width": "100%",
      "toolTip": "Full Screen",
      "transparencyActive": true,
      "toolTipPaddingTop": 4,
      "borderRadius": 0,
      "toolTipBorderSize": 1,
      "toolTipTextShadowOpacity": 0,
      "toolTipFontSize": 14,
      "toolTipShadowOpacity": 1,
      "toolTipOpacity": 0.7,
      "borderSize": 0,
      "toolTipShadowVerticalLength": 0,
      "toolTipPaddingLeft": 6,
      "toolTipBorderColor": "#767676",
      "toolTipTextShadowColor": "#000000",
      "class": "IconButton",
      "toolTipFontStyle": "normal",
      "toolTipBorderRadius": 3,
      "horizontalAlign": "center",
      "click": "if(!this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, true, 0, null, null, false) } else if(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, false, 0, null, null, false) }",
      "maxWidth": 60,
      "paddingBottom": 0,
      "maxHeight": 60,
      "cursor": "hand",
      "toolTipBackgroundColor": "#000000",
      "toolTipFontWeight": "normal",
      "id": "IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA",
      "toolTipTextShadowBlurRadius": 3,
      "toolTipShadowHorizontalLength": 0,
      "paddingTop": 0,
      "toolTipShadowSpread": 0,
      "toolTipShadowColor": "#333333",
      "toolTipShadowBlurRadius": 3,
      "pressedIconURL": "skin/IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA_pressed.png",
      "minHeight": 1,
      "backgroundOpacity": 0,
      "shadow": false,
      "toolTipFontColor": "#606060",
      "toolTipFontFamily": "Arial",
      "verticalAlign": "middle"
     },
     {
      "paddingLeft": 0,
      "minWidth": 1,
      "paddingRight": 0,
      "mode": "toggle",
      "toolTipPaddingRight": 6,
      "toolTipPaddingBottom": 4,
      "iconURL": "skin/IconButton_8105A313_8E22_BF0B_41E1_331C6035A930.png",
      "height": "100%",
      "width": "100%",
      "toolTip": "Audio On/Off",
      "transparencyActive": true,
      "toolTipPaddingTop": 4,
      "borderRadius": 0,
      "toolTipBorderSize": 1,
      "toolTipTextShadowOpacity": 0,
      "toolTipFontSize": 14,
      "toolTipShadowOpacity": 1,
      "toolTipOpacity": 0.7,
      "borderSize": 0,
      "toolTipShadowVerticalLength": 0,
      "toolTipPaddingLeft": 6,
      "toolTipBorderColor": "#767676",
      "toolTipTextShadowColor": "#000000",
      "class": "IconButton",
      "toolTipFontStyle": "normal",
      "toolTipBorderRadius": 3,
      "horizontalAlign": "center",
      "click": "if(!this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, true, 0, this.effect_CACBF85D_EED0_7261_41DB_A3B65ECE0D5D, 'showEffect', false) } else if(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, false, 0, this.effect_CACBC85D_EED0_7261_41BE_8CF4C3A8170C, 'hideEffect', false) }",
      "maxWidth": 60,
      "paddingBottom": 0,
      "maxHeight": 60,
      "cursor": "hand",
      "toolTipBackgroundColor": "#000000",
      "toolTipFontWeight": "normal",
      "id": "IconButton_8105A313_8E22_BF0B_41E1_331C6035A930",
      "toolTipTextShadowBlurRadius": 3,
      "toolTipShadowHorizontalLength": 0,
      "paddingTop": 0,
      "toolTipShadowSpread": 0,
      "toolTipShadowColor": "#333333",
      "toolTipShadowBlurRadius": 3,
      "pressedIconURL": "skin/IconButton_8105A313_8E22_BF0B_41E1_331C6035A930_pressed.png",
      "minHeight": 1,
      "backgroundOpacity": 0,
      "shadow": false,
      "toolTipFontColor": "#606060",
      "toolTipFontFamily": "Arial",
      "verticalAlign": "middle"
     },
     "this.IconButton_80E5955A_8E23_BB05_41CA_43DD61DBAEE9"
    ],
    "verticalAlign": "middle",
    "scrollBarVisible": "rollOver"
   },
   {
    "paddingLeft": 0,
    "minWidth": 55,
    "paddingRight": 0,
    "mode": "toggle",
    "toolTipPaddingRight": 6,
    "toolTipPaddingBottom": 4,
    "iconURL": "skin/IconButton_811D89E1_8E3D_AB07_4191_94003C90B2FF.png",
    "height": "100%",
    "width": "100%",
    "toolTip": "Settings",
    "transparencyActive": true,
    "toolTipPaddingTop": 4,
    "borderRadius": 0,
    "toolTipBorderSize": 1,
    "toolTipTextShadowOpacity": 0,
    "toolTipFontSize": 14,
    "toolTipShadowOpacity": 1,
    "toolTipOpacity": 0.7,
    "borderSize": 0,
    "toolTipShadowVerticalLength": 0,
    "toolTipPaddingLeft": 6,
    "toolTipBorderColor": "#767676",
    "toolTipTextShadowColor": "#000000",
    "class": "IconButton",
    "toolTipFontStyle": "normal",
    "toolTipBorderRadius": 3,
    "horizontalAlign": "center",
    "click": "if(!this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, true, 0, this.effect_32C91197_3F22_3110_4181_9E76B593FBFE, 'showEffect', false) } else if(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, false, 0, this.effect_32C92197_3F22_3110_419D_E2E21968F16F, 'hideEffect', false) }",
    "maxWidth": 55,
    "paddingBottom": 0,
    "maxHeight": 55,
    "cursor": "hand",
    "toolTipBackgroundColor": "#000000",
    "toolTipFontWeight": "normal",
    "id": "IconButton_811D89E1_8E3D_AB07_4191_94003C90B2FF",
    "toolTipTextShadowBlurRadius": 3,
    "toolTipShadowHorizontalLength": 0,
    "paddingTop": 0,
    "toolTipShadowSpread": 0,
    "toolTipShadowColor": "#333333",
    "toolTipShadowBlurRadius": 3,
    "minHeight": 55,
    "backgroundOpacity": 0,
    "shadow": false,
    "toolTipFontColor": "#606060",
    "toolTipFontFamily": "Arial",
    "verticalAlign": "middle"
   }
  ],
  "verticalAlign": "middle",
  "scrollBarVisible": "rollOver"
 },
 {
  "itemBackgroundColorRatios": [],
  "paddingRight": 5,
  "paddingLeft": 5,
  "itemLabelFontFamily": "Arial",
  "backgroundColor": [
   "#000000"
  ],
  "itemThumbnailHeight": 75,
  "gap": 5,
  "selectedItemBackgroundColor": [],
  "scrollBarWidth": 7,
  "scrollBarMargin": 4,
  "selectedItemThumbnailShadowVerticalLength": 0,
  "horizontalAlign": "left",
  "itemHorizontalAlign": "center",
  "class": "ThumbnailList",
  "playList": "this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist",
  "itemMode": "normal",
  "selectedItemLabelFontStyle": "italic",
  "maxWidth": 105,
  "itemLabelFontColor": "#FFFFFF",
  "layout": "vertical",
  "backgroundColorRatios": [
   0
  ],
  "paddingBottom": 5,
  "rollOverItemLabelFontColor": "#FFFFFF",
  "rollOverItemLabelFontWeight": "bold",
  "itemPaddingBottom": 3,
  "paddingTop": 5,
  "selectedItemLabelFontColor": "#FFFFFF",
  "itemThumbnailScaleMode": "fit_outside",
  "selectedItemLabelTextDecoration": "underline",
  "minHeight": 100,
  "itemLabelFontWeight": "normal",
  "itemThumbnailShadow": false,
  "itemThumbnailOpacity": 1,
  "backgroundColorDirection": "vertical",
  "itemThumbnailBorderRadius": 25,
  "scrollBarOpacity": 1,
  "minWidth": 90,
  "rollOverItemLabelTextDecoration": "underline",
  "scrollBarColor": "#52B7EF",
  "itemLabelTextDecoration": "none",
  "scrollBarVisible": "rollOver",
  "width": 105,
  "itemLabelFontStyle": "normal",
  "itemPaddingRight": 3,
  "itemThumbnailWidth": 75,
  "borderRadius": 3,
  "selectedItemThumbnailShadow": true,
  "itemLabelHorizontalAlign": "center",
  "itemPaddingLeft": 3,
  "selectedItemLabelFontSize": 12,
  "borderSize": 0,
  "itemBorderRadius": 0,
  "selectedItemThumbnailShadowBlurRadius": 10,
  "selectedItemThumbnailShadowOpacity": 0.73,
  "selectedItemBorderSize": 0,
  "itemPaddingTop": 3,
  "selectedItemThumbnailShadowHorizontalLength": 0,
  "selectedItemBorderRadius": 0,
  "top": "15%",
  "itemVerticalAlign": "middle",
  "bottom": "15%",
  "id": "ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472",
  "itemBackgroundOpacity": 0,
  "selectedItemBackgroundColorRatios": [],
  "itemLabelGap": 9,
  "selectedItemLabelFontWeight": "bold",
  "itemBackgroundColorDirection": "vertical",
  "itemOpacity": 1,
  "itemBackgroundColor": [],
  "itemLabelFontSize": 12,
  "selectedItemBackgroundOpacity": 0,
  "itemLabelPosition": "bottom",
  "backgroundOpacity": 0.25,
  "shadow": false,
  "right": "1.5%",
  "verticalAlign": "top"
 },
 {
  "children": [
   "this.ViewerAreaLabeled_9FD7235A_96CD_9045_41D9_23A3BCBDB1C6",
   "this.IconButton_9FEA51EA_96CC_905A_41D3_F42DB0CD0A74",
   "this.IconButton_9FB9BD3F_96C5_703B_41D7_65AEE6E85A96",
   "this.IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4"
  ],
  "backgroundColorDirection": "vertical",
  "overflow": "scroll",
  "paddingLeft": 0,
  "scrollBarOpacity": 0.5,
  "minWidth": 1,
  "paddingRight": 0,
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "scrollBarColor": "#000000",
  "height": "100%",
  "width": "100%",
  "borderRadius": 0,
  "borderSize": 0,
  "contentOpaque": false,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "class": "Container",
  "horizontalAlign": "left",
  "top": "0%",
  "visible": false,
  "paddingBottom": 0,
  "layout": "absolute",
  "backgroundColorRatios": [
   0,
   1
  ],
  "id": "Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB",
  "gap": 10,
  "paddingTop": 0,
  "left": "0%",
  "minHeight": 1,
  "backgroundOpacity": 0.7,
  "shadow": false,
  "verticalAlign": "top",
  "scrollBarVisible": "rollOver"
 },
 {
  "paddingLeft": 0,
  "minWidth": 50,
  "paddingRight": 0,
  "mode": "push",
  "iconURL": "skin/IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB.png",
  "height": "5.482%",
  "width": "3.03%",
  "transparencyActive": true,
  "borderRadius": 0,
  "borderSize": 0,
  "rollOverIconURL": "skin/IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB_rollover.png",
  "class": "IconButton",
  "horizontalAlign": "center",
  "top": "2%",
  "maxWidth": 50,
  "visible": false,
  "paddingBottom": 0,
  "maxHeight": 50,
  "cursor": "hand",
  "id": "IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB",
  "paddingTop": 0,
  "minHeight": 50,
  "backgroundOpacity": 0,
  "shadow": false,
  "right": "2%",
  "verticalAlign": "middle"
 },
 {
  "backgroundColorDirection": "vertical",
  "overflow": "scroll",
  "paddingLeft": 0,
  "scrollBarOpacity": 0.5,
  "minWidth": 1,
  "paddingRight": 0,
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "scrollBarColor": "#000000",
  "borderRadius": 0,
  "borderSize": 0,
  "contentOpaque": false,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "class": "Container",
  "horizontalAlign": "left",
  "top": "0%",
  "visible": false,
  "paddingBottom": 0,
  "layout": "absolute",
  "backgroundColorRatios": [
   0,
   1
  ],
  "id": "Container_53347472_4288_F6E6_4196_D7457B47D2CF",
  "gap": 10,
  "bottom": "0%",
  "paddingTop": 0,
  "left": "0%",
  "minHeight": 1,
  "backgroundOpacity": 0.3,
  "shadow": false,
  "right": "0%",
  "children": [
   "this.MapViewer",
   {
    "paddingLeft": 0,
    "minWidth": 50,
    "paddingRight": 0,
    "mode": "push",
    "iconURL": "skin/IconButton_50D1A26C_4289_72E1_41CD_2B557DFCC24F.png",
    "height": "5.91%",
    "width": "5.07%",
    "transparencyActive": true,
    "borderRadius": 0,
    "borderSize": 0,
    "rollOverIconURL": "skin/IconButton_50D1A26C_4289_72E1_41CD_2B557DFCC24F_rollover.png",
    "class": "IconButton",
    "horizontalAlign": "center",
    "top": "5%",
    "click": "this.setComponentVisibility(this.Container_53347472_4288_F6E6_4196_D7457B47D2CF, false, 0, this.effect_500E3733_4297_3267_41C9_4935C0BEBF39, 'hideEffect', false)",
    "maxWidth": 50,
    "paddingBottom": 0,
    "maxHeight": 50,
    "cursor": "hand",
    "id": "IconButton_50D1A26C_4289_72E1_41CD_2B557DFCC24F",
    "paddingTop": 0,
    "minHeight": 50,
    "backgroundOpacity": 0,
    "shadow": false,
    "right": "5%",
    "verticalAlign": "middle"
   }
  ],
  "verticalAlign": "top",
  "scrollBarVisible": "rollOver"
 },
 {
  "backgroundColorDirection": "vertical",
  "paddingLeft": 0,
  "minWidth": 0,
  "paddingRight": 0,
  "backgroundColor": [
   "#000000"
  ],
  "borderRadius": 0,
  "borderSize": 0,
  "class": "UIComponent",
  "top": 0,
  "visible": false,
  "paddingBottom": 0,
  "backgroundColorRatios": [
   0
  ],
  "id": "veilPopupPanorama",
  "bottom": 0,
  "paddingTop": 0,
  "showEffect": {
   "easing": "cubic_in_out",
   "duration": 350,
   "class": "FadeInEffect"
  },
  "left": 0,
  "minHeight": 0,
  "backgroundOpacity": 0.55,
  "shadow": false,
  "right": 0
 },
 {
  "backgroundColorDirection": "vertical",
  "paddingLeft": 0,
  "minWidth": 0,
  "paddingRight": 0,
  "backgroundColor": [],
  "borderRadius": 0,
  "borderSize": 0,
  "scaleMode": "custom",
  "class": "ZoomImage",
  "top": 0,
  "visible": false,
  "paddingBottom": 0,
  "backgroundColorRatios": [],
  "id": "zoomImagePopupPanorama",
  "bottom": 0,
  "paddingTop": 0,
  "left": 0,
  "minHeight": 0,
  "backgroundOpacity": 1,
  "shadow": false,
  "right": 0
 },
 {
  "gap": 5,
  "backgroundColorDirection": "vertical",
  "paddingLeft": 5,
  "iconHeight": 20,
  "minWidth": 0,
  "paddingRight": 5,
  "fontSize": 12,
  "mode": "push",
  "backgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "textDecoration": "none",
  "iconColor": "#000000",
  "borderRadius": 0,
  "iconBeforeLabel": true,
  "iconWidth": 20,
  "borderSize": 0,
  "fontColor": "#FFFFFF",
  "class": "CloseButton",
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
  "layout": "horizontal",
  "fontFamily": "Arial",
  "iconLineWidth": 5,
  "shadowColor": "#000000",
  "paddingTop": 5,
  "showEffect": {
   "easing": "cubic_in_out",
   "duration": 350,
   "class": "FadeInEffect"
  },
  "fontStyle": "normal",
  "rollOverIconColor": "#666666",
  "shadowBlurRadius": 6,
  "shadowSpread": 1,
  "pressedIconColor": "#888888",
  "minHeight": 0,
  "backgroundOpacity": 0.3,
  "shadow": false,
  "right": 10,
  "label": "",
  "verticalAlign": "middle"
 }
], 
 "overflow": "visible",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "minWidth": 20,
 "paddingRight": 0,
 "mouseWheelEnabled": true,
 "scrollBarColor": "#000000",
 "height": "100%",
 "width": "100%",
 "borderRadius": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "buttonToggleMute": "this.IconButton_8105A313_8E22_BF0B_41E1_331C6035A930",
 "class": "Player",
 "vrPolyfillScale": 0.5,
 "horizontalAlign": "left",
 "backgroundPreloadEnabled": true,
 "paddingBottom": 0,
 "layout": "absolute",
 "scripts": {
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getKey": function(key){  return window[key]; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "existsKey": function(key){  return key in window; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "unregisterKey": function(key){  delete window[key]; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio) delete audios[audio.get('id')]; } if(audio) audio.stop(); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "registerKey": function(key, value){  window[key] = value; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); }
 },
 "id": "rootPlayer",
 "gap": 10,
 "paddingTop": 0,
 "start": "this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37], 'cardboardAvailable'); this.syncPlaylists([this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); this.playList_52D8C409_5CA9_8F04_41D6_6D96EBFB1016.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA].forEach(function(component) { component.set('visible', false); }) }",
 "minHeight": 20,
 "shadow": false,
 "verticalAlign": "top",
 "buttonToggleFullscreen": "this.IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA",
 "scrollBarVisible": "rollOver"
})