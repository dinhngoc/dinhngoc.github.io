TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "buttonStop": [
   {
    "shadow": false,
    "paddingRight": 0,
    "verticalAlign": "middle",
    "paddingLeft": 0,
    "iconURL": "skin/IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4.png",
    "mode": "push",
    "maxWidth": 50,
    "borderRadius": 0,
    "width": "3.03%",
    "transparencyActive": true,
    "borderSize": 0,
    "horizontalAlign": "center",
    "click": "this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, false, 0, this.effect_9B0AF4E2_96C4_F045_41D3_0E00FEE03A15, 'hideEffect', false)",
    "class": "IconButton",
    "height": "5.48%",
    "minHeight": 50,
    "cursor": "hand",
    "paddingBottom": 0,
    "top": "2%",
    "id": "IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4",
    "maxHeight": 50,
    "paddingTop": 0,
    "backgroundOpacity": 0,
    "minWidth": 50,
    "right": "2%",
    "rollOverIconURL": "skin/IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4_rollover.png"
   },
   "this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB"
  ],
  "id": "MainViewerVideoPlayer",
  "viewerArea": "this.MainViewer",
  "displayPlaybackBar": true,
  "class": "VideoPlayer",
  "buttonPlay": {
   "shadow": false,
   "toolTipPaddingRight": 6,
   "paddingRight": 0,
   "verticalAlign": "middle",
   "toolTipBackgroundColor": "#000000",
   "paddingLeft": 0,
   "toolTipBorderRadius": 3,
   "iconURL": "skin/IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED.png",
   "toolTipPaddingTop": 4,
   "mode": "push",
   "maxWidth": 70,
   "toolTipShadowOpacity": 1,
   "toolTipBorderSize": 1,
   "toolTip": "See Photos",
   "borderRadius": 0,
   "width": "100%",
   "toolTipFontWeight": "normal",
   "transparencyActive": true,
   "borderSize": 0,
   "toolTipBorderColor": "#767676",
   "horizontalAlign": "center",
   "toolTipPaddingLeft": 6,
   "toolTipShadowVerticalLength": 0,
   "click": "this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, true, 0, this.effect_98AADBB0_96C5_F0C5_41B2_1C4D08E503DB, 'showEffect', false); this.playList_430C6685_5752_7982_41CA_9326B50EEAFA.set('selectedIndex', 0)",
   "class": "IconButton",
   "height": "100%",
   "minHeight": 25,
   "toolTipTextShadowBlurRadius": 3,
   "cursor": "hand",
   "visible": false,
   "paddingBottom": 0,
   "toolTipShadowHorizontalLength": 0,
   "id": "IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED",
   "maxHeight": 70,
   "toolTipPaddingBottom": 4,
   "toolTipFontStyle": "normal",
   "paddingTop": 0,
   "toolTipShadowBlurRadius": 3,
   "toolTipOpacity": 0.7,
   "toolTipShadowSpread": 0,
   "backgroundOpacity": 0,
   "toolTipFontColor": "#606060",
   "toolTipFontFamily": "Arial",
   "toolTipShadowColor": "#333333",
   "toolTipTextShadowColor": "#000000",
   "toolTipFontSize": 14,
   "toolTipTextShadowOpacity": 0,
   "minWidth": 25,
   "rollOverIconURL": "skin/IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED_rollover.png"
  }
 },
 {
  "buttonStop": [
   "this.IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4",
   "this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB"
  ],
  "buttonPrevious": {
   "shadow": false,
   "paddingRight": 0,
   "verticalAlign": "middle",
   "paddingLeft": 0,
   "iconURL": "skin/IconButton_9FEA51EA_96CC_905A_41D3_F42DB0CD0A74.png",
   "mode": "push",
   "maxWidth": 70,
   "borderRadius": 0,
   "width": "4.24%",
   "transparencyActive": true,
   "horizontalAlign": "center",
   "borderSize": 0,
   "class": "IconButton",
   "minHeight": 70,
   "cursor": "hand",
   "paddingBottom": 0,
   "top": "40%",
   "bottom": "40%",
   "id": "IconButton_9FEA51EA_96CC_905A_41D3_F42DB0CD0A74",
   "maxHeight": 70,
   "paddingTop": 0,
   "backgroundOpacity": 0,
   "left": "1%",
   "minWidth": 70,
   "rollOverIconURL": "skin/IconButton_9FEA51EA_96CC_905A_41D3_F42DB0CD0A74_rollover.png"
  },
  "id": "ViewerAreaLabeled_9FD7235A_96CD_9045_41D9_23A3BCBDB1C6PhotoAlbumPlayer",
  "viewerArea": {
   "toolTipTextShadowOpacity": 0,
   "playbackBarProgressBackgroundColorDirection": "vertical",
   "toolTipBackgroundColor": "#000000",
   "paddingRight": 0,
   "toolTipBorderRadius": 3,
   "borderRadius": 0,
   "paddingLeft": 0,
   "toolTipBorderSize": 1,
   "playbackBarBackgroundColor": [
    "#FFFFFF"
   ],
   "playbackBarHeadShadowVerticalLength": 0,
   "progressBarBackgroundColorDirection": "vertical",
   "playbackBarHeadWidth": 6,
   "playbackBarHeight": 10,
   "playbackBarHeadBackgroundColorDirection": "vertical",
   "playbackBarBackgroundColorDirection": "vertical",
   "playbackBarProgressBorderSize": 0,
   "class": "ViewerArea",
   "playbackBarRight": 0,
   "minHeight": 1,
   "playbackBarHeadBackgroundColor": [
    "#111111",
    "#666666"
   ],
   "progressBarBorderRadius": 0,
   "paddingBottom": 0,
   "playbackBarHeadShadowOpacity": 0.7,
   "playbackBarProgressBorderRadius": 0,
   "progressBarBorderSize": 0,
   "playbackBarOpacity": 1,
   "transitionMode": "blending",
   "toolTipShadowVerticalLength": 0,
   "playbackBarHeadShadow": true,
   "paddingTop": 0,
   "toolTipShadowBlurRadius": 3,
   "progressBorderRadius": 0,
   "toolTipShadowColor": "#333333",
   "toolTipFontColor": "#606060",
   "toolTipShadowSpread": 0,
   "playbackBarBorderRadius": 0,
   "toolTipTextShadowColor": "#000000",
   "minWidth": 1,
   "playbackBarProgressBorderColor": "#000000",
   "toolTipPaddingRight": 6,
   "progressBarOpacity": 1,
   "toolTipShadowOpacity": 1,
   "playbackBarHeadBorderRadius": 0,
   "toolTipPaddingTop": 4,
   "progressHeight": 10,
   "width": "100%",
   "progressBackgroundColorRatios": [
    0
   ],
   "playbackBarProgressOpacity": 1,
   "progressLeft": 0,
   "playbackBarHeadShadowBlurRadius": 3,
   "playbackBarHeadBorderColor": "#000000",
   "toolTipFontWeight": "normal",
   "playbackBarBorderColor": "#FFFFFF",
   "borderSize": 0,
   "toolTipBorderColor": "#767676",
   "playbackBarLeft": 0,
   "playbackBarHeadHeight": 15,
   "playbackBarBackgroundOpacity": 1,
   "toolTipPaddingLeft": 6,
   "playbackBarBorderSize": 0,
   "playbackBarHeadBackgroundColorRatios": [
    0,
    1
   ],
   "playbackBarHeadShadowHorizontalLength": 0,
   "progressBackgroundOpacity": 1,
   "progressBottom": 2,
   "height": "100%",
   "playbackBarHeadShadowColor": "#000000",
   "top": "0%",
   "progressBarBorderColor": "#000000",
   "toolTipTextShadowBlurRadius": 3,
   "playbackBarProgressBackgroundColor": [
    "#3399FF"
   ],
   "progressRight": 0,
   "playbackBarHeadOpacity": 1,
   "id": "ViewerAreaLabeled_9FD7235A_96CD_9045_41D9_23A3BCBDB1C6",
   "progressBarBackgroundColorRatios": [
    0
   ],
   "progressOpacity": 1,
   "toolTipPaddingBottom": 4,
   "toolTipFontStyle": "normal",
   "progressBackgroundColorDirection": "vertical",
   "playbackBarBottom": 0,
   "progressBorderSize": 0,
   "toolTipOpacity": 0.7,
   "playbackBarHeadBorderSize": 0,
   "left": "0%",
   "toolTipFontFamily": "Arial",
   "progressBorderColor": "#000000",
   "progressBarBackgroundColor": [
    "#3399FF"
   ],
   "toolTipShadowHorizontalLength": 0,
   "playbackBarProgressBackgroundColorRatios": [
    0
   ],
   "toolTipFontSize": 14,
   "progressBackgroundColor": [
    "#FFFFFF"
   ],
   "shadow": false
  },
  "buttonPlay": "this.IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED",
  "buttonNext": {
   "shadow": false,
   "paddingRight": 0,
   "verticalAlign": "middle",
   "paddingLeft": 0,
   "iconURL": "skin/IconButton_9FB9BD3F_96C5_703B_41D7_65AEE6E85A96.png",
   "mode": "push",
   "maxWidth": 70,
   "borderRadius": 0,
   "width": "4.24%",
   "transparencyActive": true,
   "horizontalAlign": "center",
   "borderSize": 0,
   "class": "IconButton",
   "minHeight": 70,
   "cursor": "hand",
   "paddingBottom": 0,
   "top": "40%",
   "bottom": "40%",
   "id": "IconButton_9FB9BD3F_96C5_703B_41D7_65AEE6E85A96",
   "maxHeight": 70,
   "paddingTop": 0,
   "backgroundOpacity": 0,
   "minWidth": 70,
   "right": "1%",
   "rollOverIconURL": "skin/IconButton_9FB9BD3F_96C5_703B_41D7_65AEE6E85A96_rollover.png"
  },
  "class": "PhotoAlbumPlayer"
 },
 {
  "hfovMin": 60,
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E_t.jpg",
  "id": "panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E",
  "mapLocations": [
   {
    "x": 303.34,
    "class": "PanoramaMapLocation",
    "y": 415.62,
    "angle": 71.83,
    "map": {
     "fieldOfViewOverlayInsideColor": "#999999",
     "minimumZoomFactor": 0.5,
     "width": 1468,
     "id": "map_4E02A832_427B_EE04_41CC_8E1CEC03E8D3",
     "maximumZoomFactor": 1.2,
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
     "fieldOfViewOverlayOutsideColor": "#000000",
     "scaleMode": "fit_inside",
     "initialZoomFactor": 1,
     "class": "Map"
    }
   }
  ],
  "label": "01_Street View",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E_t.jpg",
    "overlays": [
     {
      "enabledInCardboard": true,
      "id": "overlay_475F4865_559D_57C8_41D3_E745D8290F70",
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 64,
           "width": 64,
           "url": "media/panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 15.5,
        "yaw": -172.64,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -6.56
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "toolTip": "02_Entrance",
        "click": "this.startPanoramaWithCamera(this.panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E, this.camera_462817F4_5752_6782_41D0_B7346C04630E); this.mainPlayList.set('selectedIndex', 1)",
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true,
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "yaw": -172.64,
        "hfov": 15.5,
        "image": {
         "levels": [
          {
           "height": 129,
           "width": 129,
           "url": "media/panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -6.56
       }
      ]
     },
     {
      "enabledInCardboard": true,
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
      "useHandCursor": true,
      "rollOverDisplay": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D, this.camera_46D137FE_5752_677E_41D1_DC48F8714477); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 5); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 8)"
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
  "hfovMax": 120,
  "hfov": 360,
  "adjacentPanoramas": [
   {
    "panorama": {
     "hfovMin": 60,
     "partial": false,
     "pitch": 0,
     "thumbnailUrl": "media/panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C_t.jpg",
     "id": "panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C",
     "label": "06a_Balcony",
     "frames": [
      {
       "thumbnailUrl": "media/panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C_t.jpg",
       "overlays": [
        {
         "enabledInCardboard": true,
         "id": "overlay_442A1C56_55AD_AFC8_41D5_0D9EEC86CEFD",
         "maps": [
          {
           "image": {
            "levels": [
             {
              "height": 89,
              "width": 89,
              "url": "media/panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C_0_HS_0_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 18.22,
           "yaw": 167.85,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -32.47
          }
         ],
         "useHandCursor": true,
         "rollOverDisplay": false,
         "areas": [
          {
           "toolTip": "06_Master",
           "click": "this.startPanoramaWithCamera(this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF, this.camera_4382B6D8_5752_7983_41D4_41D52B3C1F47); this.mainPlayList.set('selectedIndex', 5)",
           "mapColor": "#FF0000",
           "displayTooltipInTouchScreens": true,
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "items": [
          {
           "yaw": 167.85,
           "hfov": 18.22,
           "image": {
            "levels": [
             {
              "height": 179,
              "width": 179,
              "url": "media/panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C_0_HS_0_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -32.47
          }
         ]
        },
        {
         "enabledInCardboard": true,
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
         "useHandCursor": true,
         "rollOverDisplay": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D, this.camera_424C470A_5752_7887_41C2_0C0703517F55); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 8); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 7)"
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
     "hfovMax": 120,
     "hfov": 360,
     "adjacentPanoramas": [
      {
       "panorama": {
        "hfovMin": 60,
        "partial": false,
        "pitch": 0,
        "thumbnailUrl": "media/panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116_t.jpg",
        "id": "panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116",
        "label": "08_Rooftop",
        "frames": [
         {
          "thumbnailUrl": "media/panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116_t.jpg",
          "overlays": [
           {
            "enabledInCardboard": true,
            "id": "overlay_47EE6DFC_55B3_68B8_41D1_9C870BBC84DA",
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "height": 64,
                 "width": 64,
                 "url": "media/panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116_0_HS_6_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "hfov": 15.27,
              "yaw": 35.94,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -11.73
             }
            ],
            "useHandCursor": true,
            "rollOverDisplay": false,
            "areas": [
             {
              "toolTip": "07_2Beds Room",
              "click": "this.startPanoramaWithCamera(this.panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D, this.camera_466727A6_5752_678E_41C9_A2FB04EE7EA6); this.mainPlayList.set('selectedIndex', 8)",
              "mapColor": "#FF0000",
              "displayTooltipInTouchScreens": true,
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "items": [
             {
              "yaw": 35.94,
              "hfov": 15.27,
              "image": {
               "levels": [
                {
                 "height": 129,
                 "width": 129,
                 "url": "media/panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116_0_HS_6_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -11.73
             }
            ]
           },
           {
            "enabledInCardboard": true,
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
            "useHandCursor": true,
            "rollOverDisplay": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E, this.camera_467F679D_5752_6782_41D2_5FF933BB5135); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 5); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 4)"
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
        "hfovMax": 120,
        "hfov": 360,
        "adjacentPanoramas": [
         {
          "panorama": "this.panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C",
          "backwardYaw": -170.58,
          "yaw": -173.12,
          "class": "AdjacentPanorama",
          "distance": 1
         },
         {
          "panorama": "this.panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E",
          "backwardYaw": -171.35,
          "yaw": -173.12,
          "class": "AdjacentPanorama",
          "distance": 1
         },
         {
          "panorama": {
           "hfovMin": 60,
           "partial": false,
           "pitch": 0,
           "thumbnailUrl": "media/panorama_47B53902_572E_CEDF_41CC_C256D31A5443_t.jpg",
           "id": "panorama_47B53902_572E_CEDF_41CC_C256D31A5443",
           "label": "04_Living Room",
           "frames": [
            {
             "thumbnailUrl": "media/panorama_47B53902_572E_CEDF_41CC_C256D31A5443_t.jpg",
             "overlays": [
              {
               "enabledInCardboard": true,
               "id": "overlay_47B55902_572E_CEDF_41AF_5DD57D9CB811",
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "height": 74,
                    "width": 74,
                    "url": "media/panorama_47B53902_572E_CEDF_41CC_C256D31A5443_0_HS_0_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "hfov": 17.93,
                 "yaw": 41.78,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -4.92
                }
               ],
               "useHandCursor": true,
               "rollOverDisplay": false,
               "areas": [
                {
                 "toolTip": "05_1Bedroom",
                 "click": "this.startPanoramaWithCamera(this.panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC, this.camera_46957839_5752_6885_41BC_E8FCA96C925F); this.mainPlayList.set('selectedIndex', 4)",
                 "mapColor": "#FF0000",
                 "displayTooltipInTouchScreens": true,
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "items": [
                {
                 "yaw": 41.78,
                 "hfov": 17.93,
                 "image": {
                  "levels": [
                   {
                    "height": 149,
                    "width": 149,
                    "url": "media/panorama_47B53902_572E_CEDF_41CC_C256D31A5443_0_HS_0_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -4.92
                }
               ]
              },
              {
               "enabledInCardboard": true,
               "id": "overlay_47B54902_572E_CEDF_41B1_68F40224ADD4",
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "height": 79,
                    "width": 79,
                    "url": "media/panorama_47B53902_572E_CEDF_41CC_C256D31A5443_0_HS_5_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "hfov": 18.09,
                 "yaw": -164.38,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -19.59
                }
               ],
               "useHandCursor": true,
               "rollOverDisplay": false,
               "areas": [
                {
                 "toolTip": "03_Pool",
                 "click": "this.startPanoramaWithCamera(this.panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D, this.camera_469A4842_5752_6887_41CC_31C35DE30DA2); this.mainPlayList.set('selectedIndex', 2)",
                 "mapColor": "#FF0000",
                 "displayTooltipInTouchScreens": true,
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "items": [
                {
                 "yaw": -164.38,
                 "hfov": 18.09,
                 "image": {
                  "levels": [
                   {
                    "height": 159,
                    "width": 159,
                    "url": "media/panorama_47B53902_572E_CEDF_41CC_C256D31A5443_0_HS_5_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -19.59
                }
               ]
              },
              {
               "enabledInCardboard": true,
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
               "useHandCursor": true,
               "rollOverDisplay": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D, this.camera_46B57855_5752_688D_41CA_D5D6E0ABF110); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 8); this.mainPlayList.set('selectedIndex', 5)"
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
           "hfovMax": 120,
           "hfov": 360,
           "adjacentPanoramas": [
            {
             "panorama": "this.panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C",
             "backwardYaw": -170.58,
             "yaw": -171.96,
             "class": "AdjacentPanorama",
             "distance": 1
            },
            {
             "panorama": "this.panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116",
             "backwardYaw": -173.12,
             "yaw": -171.96,
             "class": "AdjacentPanorama",
             "distance": 1
            },
            {
             "panorama": "this.panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E",
             "backwardYaw": -171.35,
             "yaw": -171.96,
             "class": "AdjacentPanorama",
             "distance": 1
            },
            {
             "panorama": {
              "hfovMin": 60,
              "partial": false,
              "pitch": 0,
              "thumbnailUrl": "media/panorama_45750F9A_5593_A978_41D1_DB2A12878BDF_t.jpg",
              "id": "panorama_45750F9A_5593_A978_41D1_DB2A12878BDF",
              "label": "06_Master",
              "frames": [
               {
                "thumbnailUrl": "media/panorama_45750F9A_5593_A978_41D1_DB2A12878BDF_t.jpg",
                "overlays": [
                 {
                  "enabledInCardboard": true,
                  "id": "overlay_45751F9A_5593_A978_419E_9D0477D55A63",
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "height": 74,
                       "width": 74,
                       "url": "media/panorama_45750F9A_5593_A978_41D1_DB2A12878BDF_0_HS_0_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "hfov": 15.62,
                    "yaw": 164.88,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -29.79
                   }
                  ],
                  "useHandCursor": true,
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "toolTip": "06a_Balcony",
                    "click": "this.startPanoramaWithCamera(this.panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C, this.camera_46BAE85F_5752_68BD_41D3_CD82240737E2); this.mainPlayList.set('selectedIndex', 6)",
                    "mapColor": "#FF0000",
                    "displayTooltipInTouchScreens": true,
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "items": [
                   {
                    "yaw": 164.88,
                    "hfov": 15.62,
                    "image": {
                     "levels": [
                      {
                       "height": 149,
                       "width": 149,
                       "url": "media/panorama_45750F9A_5593_A978_41D1_DB2A12878BDF_0_HS_0_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -29.79
                   }
                  ]
                 },
                 {
                  "enabledInCardboard": true,
                  "id": "overlay_45756F9A_5593_A978_41C5_5DEA8239FD11",
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "height": 69,
                       "width": 69,
                       "url": "media/panorama_45750F9A_5593_A978_41D1_DB2A12878BDF_0_HS_2_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "hfov": 15.99,
                    "yaw": 82.89,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -17.88
                   }
                  ],
                  "useHandCursor": true,
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "toolTip": "06b_WC",
                    "click": "this.startPanoramaWithCamera(this.panorama_46009756_572D_4167_41C6_2B49BD1EF7CE, this.camera_45403887_5752_698D_41B1_42739F148F7B); this.mainPlayList.set('selectedIndex', 7)",
                    "mapColor": "#FF0000",
                    "displayTooltipInTouchScreens": true,
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "items": [
                   {
                    "yaw": 82.89,
                    "hfov": 15.99,
                    "image": {
                     "levels": [
                      {
                       "height": 139,
                       "width": 139,
                       "url": "media/panorama_45750F9A_5593_A978_41D1_DB2A12878BDF_0_HS_2_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -17.88
                   }
                  ]
                 },
                 {
                  "enabledInCardboard": true,
                  "id": "overlay_45757F9A_5593_A978_41CE_912DDA5CD743",
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "height": 49,
                       "width": 49,
                       "url": "media/panorama_45750F9A_5593_A978_41D1_DB2A12878BDF_0_HS_3_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "hfov": 11.87,
                    "yaw": 34.76,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": 8.38
                   }
                  ],
                  "useHandCursor": true,
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "toolTip": "07_2Beds Room",
                    "click": "this.startPanoramaWithCamera(this.panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D, this.camera_451418B0_5752_6982_41D1_3CA56D1CCAF8); this.mainPlayList.set('selectedIndex', 8)",
                    "mapColor": "#FF0000",
                    "displayTooltipInTouchScreens": true,
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "items": [
                   {
                    "yaw": 34.76,
                    "hfov": 11.87,
                    "image": {
                     "levels": [
                      {
                       "height": 99,
                       "width": 99,
                       "url": "media/panorama_45750F9A_5593_A978_41D1_DB2A12878BDF_0_HS_3_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": 8.38
                   }
                  ]
                 },
                 {
                  "enabledInCardboard": true,
                  "id": "overlay_58837D58_56A1_81B9_41CB_BA3BEC867C09",
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "height": 49,
                       "width": 49,
                       "url": "media/panorama_45750F9A_5593_A978_41D1_DB2A12878BDF_0_HS_4_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "hfov": 11.54,
                    "yaw": 35.02,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -15.99
                   }
                  ],
                  "useHandCursor": true,
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "toolTip": "05_1Bedroom",
                    "click": "this.startPanoramaWithCamera(this.panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC, this.camera_4577A892_5752_6987_41AD_E66A7D0E9DE1); this.mainPlayList.set('selectedIndex', 4)",
                    "mapColor": "#FF0000",
                    "displayTooltipInTouchScreens": true,
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "items": [
                   {
                    "yaw": 35.02,
                    "hfov": 11.54,
                    "image": {
                     "levels": [
                      {
                       "height": 99,
                       "width": 99,
                       "url": "media/panorama_45750F9A_5593_A978_41D1_DB2A12878BDF_0_HS_4_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -15.99
                   }
                  ]
                 },
                 {
                  "enabledInCardboard": true,
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
                  "useHandCursor": true,
                  "rollOverDisplay": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E, this.camera_456088A6_5752_698F_4174_832EA8D0A930); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 3)"
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
              "hfovMax": 120,
              "hfov": 360,
              "adjacentPanoramas": [
               {
                "panorama": "this.panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C",
                "backwardYaw": 167.85,
                "yaw": 164.88,
                "class": "AdjacentPanorama",
                "distance": 1
               },
               {
                "panorama": "this.panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116",
                "backwardYaw": -173.12,
                "yaw": -162.92,
                "class": "AdjacentPanorama",
                "distance": 1
               },
               {
                "panorama": "this.panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E",
                "backwardYaw": -171.35,
                "yaw": -162.92,
                "class": "AdjacentPanorama",
                "distance": 1
               },
               {
                "panorama": "this.panorama_47B53902_572E_CEDF_41CC_C256D31A5443",
                "backwardYaw": -171.96,
                "yaw": -162.92,
                "class": "AdjacentPanorama",
                "distance": 1
               },
               {
                "panorama": {
                 "hfovMin": 60,
                 "partial": false,
                 "pitch": 0,
                 "thumbnailUrl": "media/panorama_46009756_572D_4167_41C6_2B49BD1EF7CE_t.jpg",
                 "id": "panorama_46009756_572D_4167_41C6_2B49BD1EF7CE",
                 "label": "06b_WC",
                 "frames": [
                  {
                   "thumbnailUrl": "media/panorama_46009756_572D_4167_41C6_2B49BD1EF7CE_t.jpg",
                   "overlays": [
                    {
                     "enabledInCardboard": true,
                     "id": "overlay_46008756_572D_4167_41D0_C46707775FAB",
                     "maps": [
                      {
                       "image": {
                        "levels": [
                         {
                          "height": 84,
                          "width": 84,
                          "url": "media/panorama_46009756_572D_4167_41C6_2B49BD1EF7CE_0_HS_2_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "hfov": 17.89,
                       "yaw": -163.02,
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -28.73
                      }
                     ],
                     "useHandCursor": true,
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "toolTip": "06_Master",
                       "click": "this.startPanoramaWithCamera(this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF, this.camera_4521E8E2_5752_6986_41C4_A005FA0ED6BA); this.mainPlayList.set('selectedIndex', 5)",
                       "mapColor": "#FF0000",
                       "displayTooltipInTouchScreens": true,
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "items": [
                      {
                       "yaw": -163.02,
                       "hfov": 17.89,
                       "image": {
                        "levels": [
                         {
                          "height": 169,
                          "width": 169,
                          "url": "media/panorama_46009756_572D_4167_41C6_2B49BD1EF7CE_0_HS_2_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": -28.73
                      }
                     ]
                    },
                    {
                     "enabledInCardboard": true,
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
                     "useHandCursor": true,
                     "rollOverDisplay": true,
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D, this.camera_45F7A90B_5752_6886_41B5_4DF46BAC6E0B); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 8)"
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
                 "hfovMax": 120,
                 "hfov": 360,
                 "adjacentPanoramas": [
                  {
                   "panorama": "this.panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C",
                   "backwardYaw": -170.58,
                   "yaw": -162.92,
                   "class": "AdjacentPanorama",
                   "distance": 1
                  },
                  {
                   "panorama": "this.panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116",
                   "backwardYaw": -173.12,
                   "yaw": -162.92,
                   "class": "AdjacentPanorama",
                   "distance": 1
                  },
                  {
                   "panorama": "this.panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E",
                   "backwardYaw": -171.35,
                   "yaw": -162.92,
                   "class": "AdjacentPanorama",
                   "distance": 1
                  },
                  {
                   "panorama": "this.panorama_47B53902_572E_CEDF_41CC_C256D31A5443",
                   "backwardYaw": -171.96,
                   "yaw": -162.92,
                   "class": "AdjacentPanorama",
                   "distance": 1
                  },
                  {
                   "panorama": "this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF",
                   "backwardYaw": 82.89,
                   "yaw": -163.02,
                   "class": "AdjacentPanorama",
                   "distance": 1
                  },
                  {
                   "panorama": {
                    "hfovMin": 60,
                    "partial": false,
                    "pitch": 0,
                    "thumbnailUrl": "media/panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC_t.jpg",
                    "id": "panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC",
                    "label": "05_1Bedroom",
                    "frames": [
                     {
                      "thumbnailUrl": "media/panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC_t.jpg",
                      "overlays": [
                       {
                        "enabledInCardboard": true,
                        "id": "overlay_46165BEA_572E_C12E_41C3_9D907FE87C25",
                        "maps": [
                         {
                          "image": {
                           "levels": [
                            {
                             "height": 54,
                             "width": 54,
                             "url": "media/panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC_0_HS_0_0_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "hfov": 12.78,
                          "yaw": 111.23,
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": 14.57
                         }
                        ],
                        "useHandCursor": true,
                        "rollOverDisplay": false,
                        "areas": [
                         {
                          "toolTip": "06_Master\u000a",
                          "click": "this.startPanoramaWithCamera(this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF, this.camera_4581093D_5752_6882_41B4_05A74E47EF0C); this.mainPlayList.set('selectedIndex', 5)",
                          "mapColor": "#FF0000",
                          "displayTooltipInTouchScreens": true,
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "items": [
                         {
                          "yaw": 111.23,
                          "hfov": 12.78,
                          "image": {
                           "levels": [
                            {
                             "height": 109,
                             "width": 109,
                             "url": "media/panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC_0_HS_0_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "class": "HotspotPanoramaOverlayImage",
                          "pitch": 14.57
                         }
                        ]
                       },
                       {
                        "enabledInCardboard": true,
                        "id": "overlay_4616BBEA_572E_C12E_41AF_EC82A979FD75",
                        "maps": [
                         {
                          "image": {
                           "levels": [
                            {
                             "height": 54,
                             "width": 54,
                             "url": "media/panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC_0_HS_2_0_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "hfov": 10.99,
                          "yaw": 110.98,
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": -33.67
                         }
                        ],
                        "useHandCursor": true,
                        "rollOverDisplay": false,
                        "areas": [
                         {
                          "toolTip": "04_Living Room",
                          "click": "this.startPanoramaWithCamera(this.panorama_47B53902_572E_CEDF_41CC_C256D31A5443, this.camera_459A5933_5752_6886_4197_20444F0BD22A); this.mainPlayList.set('selectedIndex', 3)",
                          "mapColor": "#FF0000",
                          "displayTooltipInTouchScreens": true,
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "items": [
                         {
                          "yaw": 110.98,
                          "hfov": 10.99,
                          "image": {
                           "levels": [
                            {
                             "height": 109,
                             "width": 109,
                             "url": "media/panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC_0_HS_2_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "class": "HotspotPanoramaOverlayImage",
                          "pitch": -33.67
                         }
                        ]
                       },
                       {
                        "enabledInCardboard": true,
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
                        "useHandCursor": true,
                        "rollOverDisplay": true,
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D, this.camera_445EA963_5752_6886_41D1_7B21CEC5E962); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 8); this.mainPlayList.set('selectedIndex', 9)"
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
                    "hfovMax": 120,
                    "hfov": 360,
                    "adjacentPanoramas": [
                     {
                      "panorama": "this.panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C",
                      "backwardYaw": -170.58,
                      "yaw": -170.2,
                      "class": "AdjacentPanorama",
                      "distance": 1
                     },
                     {
                      "panorama": "this.panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116",
                      "backwardYaw": -173.12,
                      "yaw": -170.2,
                      "class": "AdjacentPanorama",
                      "distance": 1
                     },
                     {
                      "panorama": "this.panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E",
                      "backwardYaw": -171.35,
                      "yaw": -170.2,
                      "class": "AdjacentPanorama",
                      "distance": 1
                     },
                     {
                      "panorama": "this.panorama_47B53902_572E_CEDF_41CC_C256D31A5443",
                      "backwardYaw": 41.78,
                      "yaw": 110.98,
                      "class": "AdjacentPanorama",
                      "distance": 1
                     },
                     {
                      "panorama": "this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF",
                      "backwardYaw": 35.02,
                      "yaw": 111.23,
                      "class": "AdjacentPanorama",
                      "distance": 1
                     },
                     {
                      "panorama": "this.panorama_46009756_572D_4167_41C6_2B49BD1EF7CE",
                      "backwardYaw": -162.92,
                      "yaw": -170.2,
                      "class": "AdjacentPanorama",
                      "distance": 1
                     },
                     {
                      "panorama": {
                       "hfovMin": 60,
                       "partial": false,
                       "pitch": 0,
                       "thumbnailUrl": "media/panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D_t.jpg",
                       "id": "panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D",
                       "label": "03_Pool",
                       "frames": [
                        {
                         "thumbnailUrl": "media/panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D_t.jpg",
                         "overlays": [
                          {
                           "enabledInCardboard": true,
                           "id": "overlay_58A2E0B8_5610_6BC8_41AC_72ACAF049ECD",
                           "maps": [
                            {
                             "image": {
                              "levels": [
                               {
                                "height": 79,
                                "width": 79,
                                "url": "media/panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D_0_HS_0_0_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "hfov": 16.74,
                             "yaw": -20.13,
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": -29.3
                            }
                           ],
                           "useHandCursor": true,
                           "rollOverDisplay": false,
                           "areas": [
                            {
                             "toolTip": "04_Living Room",
                             "click": "this.startPanoramaWithCamera(this.panorama_47B53902_572E_CEDF_41CC_C256D31A5443, this.camera_44696997_5752_6B8D_41C9_E889E6705519); this.mainPlayList.set('selectedIndex', 3)",
                             "mapColor": "#FF0000",
                             "displayTooltipInTouchScreens": true,
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "items": [
                            {
                             "yaw": -20.13,
                             "hfov": 16.74,
                             "image": {
                              "levels": [
                               {
                                "height": 159,
                                "width": 159,
                                "url": "media/panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D_0_HS_0_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "class": "HotspotPanoramaOverlayImage",
                             "pitch": -29.3
                            }
                           ]
                          },
                          {
                           "enabledInCardboard": true,
                           "id": "overlay_58A2C0B8_5610_6BC8_41D0_139AB1287679",
                           "maps": [
                            {
                             "image": {
                              "levels": [
                               {
                                "height": 74,
                                "width": 74,
                                "url": "media/panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D_0_HS_6_0_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "hfov": 17.45,
                             "yaw": -95.85,
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": -14.14
                            }
                           ],
                           "useHandCursor": true,
                           "rollOverDisplay": false,
                           "areas": [
                            {
                             "toolTip": "02_Entrance",
                             "click": "this.startPanoramaWithCamera(this.panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E, this.camera_4421F9DB_5752_6B85_41D2_2FF10CAA6353); this.mainPlayList.set('selectedIndex', 1)",
                             "mapColor": "#FF0000",
                             "displayTooltipInTouchScreens": true,
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "items": [
                            {
                             "yaw": -95.85,
                             "hfov": 17.45,
                             "image": {
                              "levels": [
                               {
                                "height": 149,
                                "width": 149,
                                "url": "media/panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D_0_HS_6_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "class": "HotspotPanoramaOverlayImage",
                             "pitch": -14.14
                            }
                           ]
                          },
                          {
                           "enabledInCardboard": true,
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
                           "useHandCursor": true,
                           "rollOverDisplay": true,
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D, this.camera_44D219EA_5752_6B87_41AE_768B2B8A9970); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 5); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 8); this.mainPlayList.set('selectedIndex', 6)"
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
                       "hfovMax": 120,
                       "hfov": 360,
                       "adjacentPanoramas": [
                        {
                         "panorama": "this.panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C",
                         "backwardYaw": -170.58,
                         "yaw": -172.22,
                         "class": "AdjacentPanorama",
                         "distance": 1
                        },
                        {
                         "panorama": "this.panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116",
                         "backwardYaw": -173.12,
                         "yaw": -172.22,
                         "class": "AdjacentPanorama",
                         "distance": 1
                        },
                        {
                         "panorama": "this.panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E",
                         "backwardYaw": -171.35,
                         "yaw": -172.22,
                         "class": "AdjacentPanorama",
                         "distance": 1
                        },
                        {
                         "panorama": "this.panorama_47B53902_572E_CEDF_41CC_C256D31A5443",
                         "backwardYaw": -164.38,
                         "yaw": -20.13,
                         "class": "AdjacentPanorama",
                         "distance": 1
                        },
                        {
                         "panorama": "this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF",
                         "backwardYaw": -162.92,
                         "yaw": -172.22,
                         "class": "AdjacentPanorama",
                         "distance": 1
                        },
                        {
                         "panorama": "this.panorama_46009756_572D_4167_41C6_2B49BD1EF7CE",
                         "backwardYaw": -162.92,
                         "yaw": -172.22,
                         "class": "AdjacentPanorama",
                         "distance": 1
                        },
                        {
                         "panorama": "this.panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC",
                         "backwardYaw": -170.2,
                         "yaw": -172.22,
                         "class": "AdjacentPanorama",
                         "distance": 1
                        },
                        {
                         "panorama": {
                          "hfovMin": 60,
                          "partial": false,
                          "pitch": 0,
                          "thumbnailUrl": "media/panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E_t.jpg",
                          "id": "panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E",
                          "label": "02_Entrance",
                          "frames": [
                           {
                            "thumbnailUrl": "media/panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E_t.jpg",
                            "overlays": [
                             {
                              "enabledInCardboard": true,
                              "id": "overlay_447F356F_5593_B9D8_41C7_F6DF7CCD3B4C",
                              "maps": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "height": 64,
                                   "width": 64,
                                   "url": "media/panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E_0_HS_0_0_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "hfov": 15.51,
                                "yaw": -11.64,
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": -6.08
                               }
                              ],
                              "useHandCursor": true,
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "toolTip": "03_Pool",
                                "click": "this.startPanoramaWithCamera(this.panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D, this.camera_44A16A6B_5752_6886_4151_F315A4A9D735); this.mainPlayList.set('selectedIndex', 2)",
                                "mapColor": "#FF0000",
                                "displayTooltipInTouchScreens": true,
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "items": [
                               {
                                "yaw": -11.64,
                                "hfov": 15.51,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 129,
                                   "width": 129,
                                   "url": "media/panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E_0_HS_0_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "class": "HotspotPanoramaOverlayImage",
                                "pitch": -6.08
                               }
                              ]
                             },
                             {
                              "enabledInCardboard": true,
                              "id": "overlay_447F256F_5593_B9D8_41CF_5C6A714CBEB7",
                              "maps": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "height": 64,
                                   "width": 64,
                                   "url": "media/panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E_0_HS_6_0_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "hfov": 14.32,
                                "yaw": 2.3,
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": -23.35
                               }
                              ],
                              "useHandCursor": true,
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "toolTip": "01_Street View",
                                "click": "this.startPanoramaWithCamera(this.panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E, this.camera_44F9EA19_5752_6885_41CA_EF4A166DEA72); this.mainPlayList.set('selectedIndex', 0)",
                                "mapColor": "#FF0000",
                                "displayTooltipInTouchScreens": true,
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "items": [
                               {
                                "yaw": 2.3,
                                "hfov": 14.32,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 129,
                                   "width": 129,
                                   "url": "media/panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E_0_HS_6_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "class": "HotspotPanoramaOverlayImage",
                                "pitch": -23.35
                               }
                              ]
                             },
                             {
                              "enabledInCardboard": true,
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
                              "useHandCursor": true,
                              "rollOverDisplay": true,
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D, this.camera_4352EA7B_5752_6886_41C4_7CDAF24CA3FC); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 5); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 8)"
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
                          "hfovMax": 120,
                          "hfov": 360,
                          "adjacentPanoramas": [
                           {
                            "panorama": "this.panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C",
                            "backwardYaw": -170.58,
                            "yaw": -170.68,
                            "class": "AdjacentPanorama",
                            "distance": 1
                           },
                           {
                            "panorama": "this.panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116",
                            "backwardYaw": -173.12,
                            "yaw": -170.68,
                            "class": "AdjacentPanorama",
                            "distance": 1
                           },
                           {
                            "panorama": "this.panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E",
                            "backwardYaw": -172.64,
                            "yaw": 2.3,
                            "class": "AdjacentPanorama",
                            "distance": 1
                           },
                           {
                            "panorama": "this.panorama_47B53902_572E_CEDF_41CC_C256D31A5443",
                            "backwardYaw": -171.96,
                            "yaw": -170.68,
                            "class": "AdjacentPanorama",
                            "distance": 1
                           },
                           {
                            "panorama": "this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF",
                            "backwardYaw": -162.92,
                            "yaw": -170.68,
                            "class": "AdjacentPanorama",
                            "distance": 1
                           },
                           {
                            "panorama": "this.panorama_46009756_572D_4167_41C6_2B49BD1EF7CE",
                            "backwardYaw": -162.92,
                            "yaw": -170.68,
                            "class": "AdjacentPanorama",
                            "distance": 1
                           },
                           {
                            "panorama": "this.panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC",
                            "backwardYaw": -170.2,
                            "yaw": -170.68,
                            "class": "AdjacentPanorama",
                            "distance": 1
                           },
                           {
                            "panorama": "this.panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D",
                            "backwardYaw": -95.85,
                            "yaw": -11.64,
                            "class": "AdjacentPanorama",
                            "distance": 1
                           },
                           {
                            "panorama": {
                             "hfovMin": 60,
                             "partial": false,
                             "pitch": 0,
                             "thumbnailUrl": "media/panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D_t.jpg",
                             "id": "panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D",
                             "label": "07_2Beds Room",
                             "frames": [
                              {
                               "thumbnailUrl": "media/panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D_t.jpg",
                               "overlays": [
                                {
                                 "enabledInCardboard": true,
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
                                   "hfov": 13.75,
                                   "yaw": 109.07,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": 17.23
                                  }
                                 ],
                                 "useHandCursor": true,
                                 "rollOverDisplay": false,
                                 "areas": [
                                  {
                                   "toolTip": "08_Rooftop",
                                   "click": "this.startPanoramaWithCamera(this.panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116, this.camera_4374FA90_5752_6982_41CE_5C1DA224E515); this.mainPlayList.set('selectedIndex', 9)",
                                   "mapColor": "#FF0000",
                                   "displayTooltipInTouchScreens": true,
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "class": "HotspotPanoramaOverlay",
                                 "items": [
                                  {
                                   "yaw": 109.07,
                                   "hfov": 13.75,
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
                                   "pitch": 17.23
                                  }
                                 ]
                                },
                                {
                                 "enabledInCardboard": true,
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
                                   "hfov": 11.94,
                                   "yaw": 108.57,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": -34.02
                                  }
                                 ],
                                 "useHandCursor": true,
                                 "rollOverDisplay": false,
                                 "areas": [
                                  {
                                   "toolTip": "06_Master",
                                   "click": "this.startPanoramaWithCamera(this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF, this.camera_431AEAAF_5752_699E_41C0_D6FE9F8A74DD); this.mainPlayList.set('selectedIndex', 5)",
                                   "mapColor": "#FF0000",
                                   "displayTooltipInTouchScreens": true,
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "class": "HotspotPanoramaOverlay",
                                 "items": [
                                  {
                                   "yaw": 108.57,
                                   "hfov": 11.94,
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
                                   "pitch": -34.02
                                  }
                                 ]
                                },
                                {
                                 "enabledInCardboard": true,
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
                                 "useHandCursor": true,
                                 "rollOverDisplay": true,
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.startPanoramaWithCamera(this.panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E, this.camera_43D15AD8_5752_6982_41D4_61A04960BC4D); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 4)"
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
                             "hfovMax": 120,
                             "hfov": 360,
                             "adjacentPanoramas": [
                              {
                               "panorama": "this.panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C",
                               "backwardYaw": -170.58,
                               "yaw": -172.21,
                               "class": "AdjacentPanorama",
                               "distance": 1
                              },
                              {
                               "panorama": "this.panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116",
                               "backwardYaw": 35.94,
                               "yaw": 109.07,
                               "class": "AdjacentPanorama",
                               "distance": 1
                              },
                              {
                               "panorama": "this.panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E",
                               "backwardYaw": -171.35,
                               "yaw": -172.21,
                               "class": "AdjacentPanorama",
                               "distance": 1
                              },
                              {
                               "panorama": "this.panorama_47B53902_572E_CEDF_41CC_C256D31A5443",
                               "backwardYaw": -171.96,
                               "yaw": -172.21,
                               "class": "AdjacentPanorama",
                               "distance": 1
                              },
                              {
                               "panorama": "this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF",
                               "backwardYaw": 34.76,
                               "yaw": 108.57,
                               "class": "AdjacentPanorama",
                               "distance": 1
                              },
                              {
                               "panorama": "this.panorama_46009756_572D_4167_41C6_2B49BD1EF7CE",
                               "backwardYaw": -162.92,
                               "yaw": -172.21,
                               "class": "AdjacentPanorama",
                               "distance": 1
                              },
                              {
                               "panorama": "this.panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC",
                               "backwardYaw": -170.2,
                               "yaw": -172.21,
                               "class": "AdjacentPanorama",
                               "distance": 1
                              },
                              {
                               "panorama": "this.panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D",
                               "backwardYaw": -172.22,
                               "yaw": -172.21,
                               "class": "AdjacentPanorama",
                               "distance": 1
                              },
                              {
                               "panorama": "this.panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E",
                               "backwardYaw": -170.68,
                               "yaw": -172.21,
                               "class": "AdjacentPanorama",
                               "distance": 1
                              }
                             ],
                             "class": "Panorama",
                             "vfov": 180
                            },
                            "backwardYaw": -172.21,
                            "yaw": -170.68,
                            "class": "AdjacentPanorama",
                            "distance": 1
                           }
                          ],
                          "class": "Panorama",
                          "vfov": 180
                         },
                         "backwardYaw": -11.64,
                         "yaw": -95.85,
                         "class": "AdjacentPanorama",
                         "distance": 1
                        },
                        {
                         "panorama": "this.panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D",
                         "backwardYaw": -172.21,
                         "yaw": -172.22,
                         "class": "AdjacentPanorama",
                         "distance": 1
                        }
                       ],
                       "class": "Panorama",
                       "vfov": 180
                      },
                      "backwardYaw": -172.22,
                      "yaw": -170.2,
                      "class": "AdjacentPanorama",
                      "distance": 1
                     },
                     {
                      "panorama": "this.panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E",
                      "backwardYaw": -170.68,
                      "yaw": -170.2,
                      "class": "AdjacentPanorama",
                      "distance": 1
                     },
                     {
                      "panorama": "this.panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D",
                      "backwardYaw": -172.21,
                      "yaw": -170.2,
                      "class": "AdjacentPanorama",
                      "distance": 1
                     }
                    ],
                    "class": "Panorama",
                    "vfov": 180
                   },
                   "backwardYaw": -170.2,
                   "yaw": -162.92,
                   "class": "AdjacentPanorama",
                   "distance": 1
                  },
                  {
                   "panorama": "this.panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D",
                   "backwardYaw": -172.22,
                   "yaw": -162.92,
                   "class": "AdjacentPanorama",
                   "distance": 1
                  },
                  {
                   "panorama": "this.panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E",
                   "backwardYaw": -170.68,
                   "yaw": -162.92,
                   "class": "AdjacentPanorama",
                   "distance": 1
                  },
                  {
                   "panorama": "this.panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D",
                   "backwardYaw": -172.21,
                   "yaw": -162.92,
                   "class": "AdjacentPanorama",
                   "distance": 1
                  }
                 ],
                 "class": "Panorama",
                 "vfov": 180
                },
                "backwardYaw": -163.02,
                "yaw": 82.89,
                "class": "AdjacentPanorama",
                "distance": 1
               },
               {
                "panorama": "this.panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC",
                "backwardYaw": 111.23,
                "yaw": 35.02,
                "class": "AdjacentPanorama",
                "distance": 1
               },
               {
                "panorama": "this.panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D",
                "backwardYaw": -172.22,
                "yaw": -162.92,
                "class": "AdjacentPanorama",
                "distance": 1
               },
               {
                "panorama": "this.panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E",
                "backwardYaw": -170.68,
                "yaw": -162.92,
                "class": "AdjacentPanorama",
                "distance": 1
               },
               {
                "panorama": "this.panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D",
                "backwardYaw": 108.57,
                "yaw": 34.76,
                "class": "AdjacentPanorama",
                "distance": 1
               }
              ],
              "class": "Panorama",
              "vfov": 180
             },
             "backwardYaw": -162.92,
             "yaw": -171.96,
             "class": "AdjacentPanorama",
             "distance": 1
            },
            {
             "panorama": "this.panorama_46009756_572D_4167_41C6_2B49BD1EF7CE",
             "backwardYaw": -162.92,
             "yaw": -171.96,
             "class": "AdjacentPanorama",
             "distance": 1
            },
            {
             "panorama": "this.panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC",
             "backwardYaw": 110.98,
             "yaw": 41.78,
             "class": "AdjacentPanorama",
             "distance": 1
            },
            {
             "panorama": "this.panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D",
             "backwardYaw": -20.13,
             "yaw": -164.38,
             "class": "AdjacentPanorama",
             "distance": 1
            },
            {
             "panorama": "this.panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E",
             "backwardYaw": -170.68,
             "yaw": -171.96,
             "class": "AdjacentPanorama",
             "distance": 1
            },
            {
             "panorama": "this.panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D",
             "backwardYaw": -172.21,
             "yaw": -171.96,
             "class": "AdjacentPanorama",
             "distance": 1
            }
           ],
           "class": "Panorama",
           "vfov": 180
          },
          "backwardYaw": -171.96,
          "yaw": -173.12,
          "class": "AdjacentPanorama",
          "distance": 1
         },
         {
          "panorama": "this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF",
          "backwardYaw": -162.92,
          "yaw": -173.12,
          "class": "AdjacentPanorama",
          "distance": 1
         },
         {
          "panorama": "this.panorama_46009756_572D_4167_41C6_2B49BD1EF7CE",
          "backwardYaw": -162.92,
          "yaw": -173.12,
          "class": "AdjacentPanorama",
          "distance": 1
         },
         {
          "panorama": "this.panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC",
          "backwardYaw": -170.2,
          "yaw": -173.12,
          "class": "AdjacentPanorama",
          "distance": 1
         },
         {
          "panorama": "this.panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D",
          "backwardYaw": -172.22,
          "yaw": -173.12,
          "class": "AdjacentPanorama",
          "distance": 1
         },
         {
          "panorama": "this.panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E",
          "backwardYaw": -170.68,
          "yaw": -173.12,
          "class": "AdjacentPanorama",
          "distance": 1
         },
         {
          "panorama": "this.panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D",
          "backwardYaw": 109.07,
          "yaw": 35.94,
          "class": "AdjacentPanorama",
          "distance": 1
         }
        ],
        "class": "Panorama",
        "vfov": 180
       },
       "backwardYaw": -173.12,
       "yaw": -170.58,
       "class": "AdjacentPanorama",
       "distance": 1
      },
      {
       "panorama": "this.panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E",
       "backwardYaw": -171.35,
       "yaw": -170.58,
       "class": "AdjacentPanorama",
       "distance": 1
      },
      {
       "panorama": "this.panorama_47B53902_572E_CEDF_41CC_C256D31A5443",
       "backwardYaw": -171.96,
       "yaw": -170.58,
       "class": "AdjacentPanorama",
       "distance": 1
      },
      {
       "panorama": "this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF",
       "backwardYaw": 164.88,
       "yaw": 167.85,
       "class": "AdjacentPanorama",
       "distance": 1
      },
      {
       "panorama": "this.panorama_46009756_572D_4167_41C6_2B49BD1EF7CE",
       "backwardYaw": -162.92,
       "yaw": -170.58,
       "class": "AdjacentPanorama",
       "distance": 1
      },
      {
       "panorama": "this.panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC",
       "backwardYaw": -170.2,
       "yaw": -170.58,
       "class": "AdjacentPanorama",
       "distance": 1
      },
      {
       "panorama": "this.panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D",
       "backwardYaw": -172.22,
       "yaw": -170.58,
       "class": "AdjacentPanorama",
       "distance": 1
      },
      {
       "panorama": "this.panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E",
       "backwardYaw": -170.68,
       "yaw": -170.58,
       "class": "AdjacentPanorama",
       "distance": 1
      },
      {
       "panorama": "this.panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D",
       "backwardYaw": -172.21,
       "yaw": -170.58,
       "class": "AdjacentPanorama",
       "distance": 1
      }
     ],
     "class": "Panorama",
     "vfov": 180
    },
    "backwardYaw": -170.58,
    "yaw": -171.35,
    "class": "AdjacentPanorama",
    "distance": 1
   },
   {
    "panorama": "this.panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116",
    "backwardYaw": -173.12,
    "yaw": -171.35,
    "class": "AdjacentPanorama",
    "distance": 1
   },
   {
    "panorama": "this.panorama_47B53902_572E_CEDF_41CC_C256D31A5443",
    "backwardYaw": -171.96,
    "yaw": -171.35,
    "class": "AdjacentPanorama",
    "distance": 1
   },
   {
    "panorama": "this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF",
    "backwardYaw": -162.92,
    "yaw": -171.35,
    "class": "AdjacentPanorama",
    "distance": 1
   },
   {
    "panorama": "this.panorama_46009756_572D_4167_41C6_2B49BD1EF7CE",
    "backwardYaw": -162.92,
    "yaw": -171.35,
    "class": "AdjacentPanorama",
    "distance": 1
   },
   {
    "panorama": "this.panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC",
    "backwardYaw": -170.2,
    "yaw": -171.35,
    "class": "AdjacentPanorama",
    "distance": 1
   },
   {
    "panorama": "this.panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D",
    "backwardYaw": -172.22,
    "yaw": -171.35,
    "class": "AdjacentPanorama",
    "distance": 1
   },
   {
    "panorama": "this.panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E",
    "backwardYaw": 2.3,
    "yaw": -172.64,
    "class": "AdjacentPanorama",
    "distance": 1
   },
   {
    "panorama": "this.panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D",
    "backwardYaw": -172.21,
    "yaw": -171.35,
    "class": "AdjacentPanorama",
    "distance": 1
   }
  ],
  "class": "Panorama",
  "vfov": 180
 },
 {
  "gyroscopeVerticalDraggingEnabled": true,
  "touchControlMode": "drag_rotation",
  "mouseControlMode": "drag_acceleration",
  "buttonToggleHotspots": {
   "shadow": false,
   "toolTipPaddingRight": 6,
   "paddingRight": 0,
   "verticalAlign": "middle",
   "toolTipBackgroundColor": "#000000",
   "paddingLeft": 0,
   "toolTipBorderRadius": 3,
   "iconURL": "skin/IconButton_80E5955A_8E23_BB05_41CA_43DD61DBAEE9.png",
   "toolTipPaddingTop": 4,
   "mode": "toggle",
   "maxWidth": 60,
   "toolTipShadowOpacity": 1,
   "toolTipBorderSize": 1,
   "toolTip": "Hotspots Visibility",
   "borderRadius": 0,
   "width": "100%",
   "toolTipFontWeight": "normal",
   "transparencyActive": true,
   "pressedIconURL": "skin/IconButton_80E5955A_8E23_BB05_41CA_43DD61DBAEE9_pressed.png",
   "borderSize": 0,
   "toolTipBorderColor": "#767676",
   "horizontalAlign": "center",
   "toolTipPaddingLeft": 6,
   "toolTipShadowVerticalLength": 0,
   "click": "if(!this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, true, 0, this.effect_CDD059FA_EED0_D223_41DB_70ACFBE986FE, 'showEffect', false) } else if(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, false, 0, this.effect_CDD049FB_EED0_D221_41EB_CA2134B978E0, 'hideEffect', false) }",
   "class": "IconButton",
   "height": "100%",
   "minHeight": 1,
   "toolTipTextShadowBlurRadius": 3,
   "cursor": "hand",
   "paddingBottom": 0,
   "toolTipShadowHorizontalLength": 0,
   "id": "IconButton_80E5955A_8E23_BB05_41CA_43DD61DBAEE9",
   "maxHeight": 60,
   "toolTipPaddingBottom": 4,
   "toolTipFontStyle": "normal",
   "paddingTop": 0,
   "toolTipShadowBlurRadius": 3,
   "toolTipOpacity": 0.7,
   "toolTipShadowSpread": 0,
   "backgroundOpacity": 0,
   "toolTipFontColor": "#606060",
   "toolTipFontFamily": "Arial",
   "toolTipShadowColor": "#333333",
   "toolTipTextShadowColor": "#000000",
   "toolTipFontSize": 14,
   "toolTipTextShadowOpacity": 0,
   "minWidth": 1
  },
  "buttonPlay": "this.IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED",
  "preloadEnabled": false,
  "buttonCardboardView": {
   "shadow": false,
   "paddingRight": 0,
   "paddingLeft": 0,
   "verticalAlign": "middle",
   "mode": "push",
   "maxWidth": 60,
   "iconURL": "skin/IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37.png",
   "borderRadius": 0,
   "width": "100%",
   "transparencyActive": false,
   "borderSize": 0,
   "horizontalAlign": "center",
   "class": "IconButton",
   "height": "100%",
   "minHeight": 1,
   "cursor": "hand",
   "paddingBottom": 0,
   "id": "IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37",
   "maxHeight": 60,
   "paddingTop": 0,
   "backgroundOpacity": 0,
   "minWidth": 1
  },
  "displayPlaybackBar": true,
  "buttonStop": [
   "this.IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4",
   "this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB"
  ],
  "id": "MainViewerPanoramaPlayer",
  "viewerArea": "this.MainViewer",
  "class": "PanoramaPlayer"
 },
 {
  "movementMode": "constrained",
  "id": "MapViewerMapPlayer",
  "class": "MapPlayer",
  "viewerArea": {
   "toolTipTextShadowOpacity": 0,
   "playbackBarProgressBackgroundColorDirection": "vertical",
   "toolTipBackgroundColor": "#F6F6F6",
   "paddingRight": 0,
   "toolTipBorderRadius": 3,
   "borderRadius": 0,
   "paddingLeft": 0,
   "toolTipBorderSize": 1,
   "playbackBarBackgroundColor": [
    "#FFFFFF"
   ],
   "progressBarBackgroundColorDirection": "vertical",
   "playbackBarHeadWidth": 6,
   "playbackBarHeight": 10,
   "playbackBarHeadBackgroundColorDirection": "vertical",
   "playbackBarBackgroundColorDirection": "vertical",
   "playbackBarProgressBorderSize": 0,
   "class": "ViewerArea",
   "playbackBarRight": 0,
   "minHeight": 1,
   "playbackBarHeadBackgroundColor": [
    "#111111",
    "#666666"
   ],
   "progressBarBorderRadius": 0,
   "paddingBottom": 0,
   "progressBarBorderSize": 0,
   "playbackBarHeadShadowOpacity": 0.7,
   "playbackBarProgressBorderRadius": 0,
   "playbackBarOpacity": 1,
   "transitionMode": "blending",
   "toolTipShadowVerticalLength": 0,
   "toolTipShadowSpread": 0,
   "paddingTop": 0,
   "toolTipShadowBlurRadius": 3,
   "playbackBarHeadShadow": true,
   "progressBorderRadius": 0,
   "toolTipShadowColor": "#333333",
   "toolTipFontColor": "#606060",
   "playbackBarBorderRadius": 0,
   "toolTipTextShadowColor": "#000000",
   "minWidth": 1,
   "playbackBarProgressBorderColor": "#000000",
   "toolTipPaddingRight": 6,
   "progressBarOpacity": 1,
   "toolTipShadowOpacity": 1,
   "playbackBarHeadBorderRadius": 0,
   "toolTipPaddingTop": 4,
   "progressHeight": 10,
   "progressBackgroundColorRatios": [
    0
   ],
   "playbackBarProgressOpacity": 1,
   "progressLeft": 0,
   "playbackBarBorderColor": "#FFFFFF",
   "playbackBarHeadBorderColor": "#000000",
   "toolTipFontWeight": "normal",
   "playbackBarHeadShadowBlurRadius": 3,
   "borderSize": 0,
   "toolTipBorderColor": "#767676",
   "playbackBarLeft": 0,
   "playbackBarHeadHeight": 15,
   "playbackBarBackgroundOpacity": 1,
   "toolTipPaddingLeft": 6,
   "playbackBarBorderSize": 0,
   "playbackBarHeadBackgroundColorRatios": [
    0,
    1
   ],
   "playbackBarHeadShadowHorizontalLength": 0,
   "progressBackgroundOpacity": 1,
   "progressBottom": 2,
   "playbackBarHeadShadowVerticalLength": 0,
   "playbackBarHeadShadowColor": "#000000",
   "top": "10%",
   "progressBarBorderColor": "#000000",
   "toolTipTextShadowBlurRadius": 3,
   "playbackBarProgressBackgroundColor": [
    "#3399FF"
   ],
   "bottom": "10%",
   "playbackBarHeadOpacity": 1,
   "id": "MapViewer",
   "progressBarBackgroundColorRatios": [
    0
   ],
   "progressOpacity": 1,
   "progressRight": 0,
   "toolTipPaddingBottom": 4,
   "toolTipFontStyle": "normal",
   "progressBackgroundColorDirection": "vertical",
   "playbackBarBottom": 0,
   "progressBorderSize": 0,
   "toolTipOpacity": 1,
   "playbackBarHeadBorderSize": 0,
   "left": "10%",
   "toolTipFontFamily": "Arial",
   "progressBorderColor": "#000000",
   "progressBarBackgroundColor": [
    "#3399FF"
   ],
   "toolTipShadowHorizontalLength": 0,
   "right": "10%",
   "toolTipFontSize": 12,
   "progressBackgroundColor": [
    "#FFFFFF"
   ],
   "shadow": false,
   "playbackBarProgressBackgroundColorRatios": [
    0
   ]
  }
 },
 {
  "initialPosition": {
   "yaw": 178.1,
   "class": "PanoramaCameraPosition",
   "pitch": 2.83
  },
  "id": "panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E_camera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E",
 {
  "initialPosition": {
   "yaw": 16.81,
   "class": "PanoramaCameraPosition",
   "pitch": 2.87
  },
  "id": "panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E_camera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D",
 {
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D_camera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_47B53902_572E_CEDF_41CC_C256D31A5443",
 {
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "panorama_47B53902_572E_CEDF_41CC_C256D31A5443_camera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC",
 {
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC_camera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF",
 {
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "panorama_45750F9A_5593_A978_41D1_DB2A12878BDF_camera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C",
 {
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C_camera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_46009756_572D_4167_41C6_2B49BD1EF7CE",
 {
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "panorama_46009756_572D_4167_41C6_2B49BD1EF7CE_camera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D",
 {
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D_camera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116",
 {
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116_camera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "mainPlayList",
  "class": "PlayList",
  "items": [
   {
    "camera": "this.panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E_camera",
    "id": "PanoramaPlayListItem_433F468E_5752_799E_4192_55133B1F6191",
    "media": "this.panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_433F468E_5752_799E_4192_55133B1F6191, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "camera": "this.panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_47B53902_572E_CEDF_41CC_C256D31A5443_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_47B53902_572E_CEDF_41CC_C256D31A5443",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_46009756_572D_4167_41C6_2B49BD1EF7CE_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_46009756_572D_4167_41C6_2B49BD1EF7CE",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116",
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
    "camera": "this.panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 0, 1)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 1, 2)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 2, 3)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_47B53902_572E_CEDF_41CC_C256D31A5443_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_47B53902_572E_CEDF_41CC_C256D31A5443",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 3, 4)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 4, 5)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 5, 6)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 6, 7)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_46009756_572D_4167_41C6_2B49BD1EF7CE_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_46009756_572D_4167_41C6_2B49BD1EF7CE",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 7, 8)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 8, 9)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116",
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
  "id": "playList_430FF684_5752_7982_41BD_14853FCE6EC6",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.registerKey('visibility_Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB', this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB.get('visible')); this.registerKey('visibility_ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472', this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472.get('visible')); this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setComponentVisibility(this.Container_86F3A56C_8E22_5B1D_41CA_9CE53436FE56, false, -1, this.effect_22973FB1_2DD9_0423_41C1_E1E03953DCCE, 'hideEffect', false); this.setComponentVisibility(this.Container_807F782A_8E23_A905_41DE_623121285A09, false, -1, this.effect_22974FB2_2DD9_0421_41BA_84205292D043, 'hideEffect', false); this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, false, -1, this.effect_3876CD6E_2DF9_0421_41C1_F0AB7F279824, 'hideEffect', false); this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, false, -1, this.effect_22899FB3_2DD9_0427_41BB_298AEB3D2851, 'hideEffect', false); this.setComponentVisibility(this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB, true, -1, this.effect_2289DFB3_2DD9_0427_41AE_A35795880BA7, 'showEffect', false)",
    "media": "this.video_210B394E_3D54_1A60_41A3_CB42BEC0D3EC",
    "player": "this.MainViewerVideoPlayer",
    "class": "VideoPlayListItem",
    "end": "this.setComponentVisibility(this.Container_86F3A56C_8E22_5B1D_41CA_9CE53436FE56, true, -1, this.effect_22975FB2_2DD9_0421_41B4_7A2443082F44, 'showEffect', false); this.setComponentVisibility(this.Container_86F3A56C_8E22_5B1D_41CA_9CE53436FE56, true, -1, this.effect_22975FB2_2DD9_0421_41B4_7A2443082F44, 'showEffect', false); this.setComponentVisibility(this.Container_807F782A_8E23_A905_41DE_623121285A09, true, -1, this.effect_22977FB2_2DD9_0421_41C1_F53B037346DF, 'showEffect', false); this.setComponentVisibility(this.Container_807F782A_8E23_A905_41DE_623121285A09, true, -1, this.effect_22977FB2_2DD9_0421_41C1_F53B037346DF, 'showEffect', false); if(this.existsKey('visibility_ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472')){ if(this.getKey('visibility_ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472')) { this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, true, -1, this.effect_43CC0ADF_5752_69BE_41D4_C5AD930D7827, 'showEffect', false); } else { this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, false, -1, this.effect_3876CD6E_2DF9_0421_41C1_F0AB7F279824, 'hideEffect', false); } }; this.unregisterKey('visibility_ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472'); if(this.existsKey('visibility_Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB')){ if(this.getKey('visibility_Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB')) { this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, true, -1, this.effect_43CC8ADF_5752_69BE_41AA_03F5E548F123, 'showEffect', false); } else { this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, false, -1, this.effect_22899FB3_2DD9_0427_41BB_298AEB3D2851, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB'); this.setComponentVisibility(this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB, false, -1, this.effect_2289EFB3_2DD9_0427_41C0_ACB5A72AE218, 'hideEffect', false); this.setComponentVisibility(this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB, false, -1, this.effect_2289EFB3_2DD9_0427_41C0_ACB5A72AE218, 'hideEffect', false)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_430FF684_5752_7982_41BD_14853FCE6EC6, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_430FF684_5752_7982_41BD_14853FCE6EC6, 0, this.video_210B394E_3D54_1A60_41A3_CB42BEC0D3EC)"
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
     "camera": {
      "initialPosition": {
       "x": "0.50",
       "zoomFactor": 1,
       "class": "PhotoCameraPosition",
       "y": "0.50"
      },
      "easing": "linear",
      "scaleMode": "fit_outside",
      "targetPosition": {
       "x": "0.33",
       "zoomFactor": 1.1,
       "class": "PhotoCameraPosition",
       "y": "0.55"
      },
      "duration": 5000,
      "class": "MovementPhotoCamera"
     },
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
     }
    },
    {
     "camera": {
      "initialPosition": {
       "x": "0.50",
       "zoomFactor": 1,
       "class": "PhotoCameraPosition",
       "y": "0.50"
      },
      "easing": "linear",
      "scaleMode": "fit_outside",
      "targetPosition": {
       "x": "0.50",
       "zoomFactor": 1.1,
       "class": "PhotoCameraPosition",
       "y": "0.71"
      },
      "duration": 5000,
      "class": "MovementPhotoCamera"
     },
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
     }
    },
    {
     "camera": {
      "initialPosition": {
       "x": "0.50",
       "zoomFactor": 1,
       "class": "PhotoCameraPosition",
       "y": "0.50"
      },
      "easing": "linear",
      "scaleMode": "fit_outside",
      "targetPosition": {
       "x": "0.52",
       "zoomFactor": 1.1,
       "class": "PhotoCameraPosition",
       "y": "0.66"
      },
      "duration": 5000,
      "class": "MovementPhotoCamera"
     },
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
     }
    },
    {
     "camera": {
      "initialPosition": {
       "x": "0.50",
       "zoomFactor": 1,
       "class": "PhotoCameraPosition",
       "y": "0.50"
      },
      "easing": "linear",
      "scaleMode": "fit_outside",
      "targetPosition": {
       "x": "0.70",
       "zoomFactor": 1.1,
       "class": "PhotoCameraPosition",
       "y": "0.71"
      },
      "duration": 5000,
      "class": "MovementPhotoCamera"
     },
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
     }
    },
    {
     "camera": {
      "initialPosition": {
       "x": "0.50",
       "zoomFactor": 1,
       "class": "PhotoCameraPosition",
       "y": "0.50"
      },
      "easing": "linear",
      "scaleMode": "fit_outside",
      "targetPosition": {
       "x": "0.49",
       "zoomFactor": 1.1,
       "class": "PhotoCameraPosition",
       "y": "0.74"
      },
      "duration": 5000,
      "class": "MovementPhotoCamera"
     },
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
     }
    },
    {
     "camera": {
      "initialPosition": {
       "x": "0.50",
       "zoomFactor": 1,
       "class": "PhotoCameraPosition",
       "y": "0.50"
      },
      "easing": "linear",
      "scaleMode": "fit_outside",
      "targetPosition": {
       "x": "0.32",
       "zoomFactor": 1.1,
       "class": "PhotoCameraPosition",
       "y": "0.47"
      },
      "duration": 5000,
      "class": "MovementPhotoCamera"
     },
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
     }
    },
    {
     "camera": {
      "initialPosition": {
       "x": "0.50",
       "zoomFactor": 1,
       "class": "PhotoCameraPosition",
       "y": "0.50"
      },
      "easing": "linear",
      "scaleMode": "fit_outside",
      "targetPosition": {
       "x": "0.64",
       "zoomFactor": 1.1,
       "class": "PhotoCameraPosition",
       "y": "0.53"
      },
      "duration": 5000,
      "class": "MovementPhotoCamera"
     },
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
     }
    },
    {
     "camera": {
      "initialPosition": {
       "x": "0.50",
       "zoomFactor": 1,
       "class": "PhotoCameraPosition",
       "y": "0.50"
      },
      "easing": "linear",
      "scaleMode": "fit_outside",
      "targetPosition": {
       "x": "0.31",
       "zoomFactor": 1.1,
       "class": "PhotoCameraPosition",
       "y": "0.32"
      },
      "duration": 5000,
      "class": "MovementPhotoCamera"
     },
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
  "id": "playList_430C6685_5752_7982_41CA_9326B50EEAFA",
  "class": "PlayList",
  "items": [
   {
    "player": "this.ViewerAreaLabeled_9FD7235A_96CD_9045_41D9_23A3BCBDB1C6PhotoAlbumPlayer",
    "class": "PhotoAlbumPlayListItem",
    "media": "this.album_1AE8DEB7_0EE7_8CC7_4198_F5B75788CCF6",
    "begin": "this.loopAlbum(this.playList_430C6685_5752_7982_41CA_9326B50EEAFA, 0)"
   }
  ]
 },
 "this.map_4E02A832_427B_EE04_41CC_8E1CEC03E8D3",
 {
  "id": "playList_4333A68C_5752_7982_4157_66046C3CF724",
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
  "initialPosition": {
   "yaw": 6.88,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_43FD06B8_5752_7983_41D1_E0C2D2F92352",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 8.65,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_43EF26C3_5752_7985_417E_0666435C177D",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 8.04,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4391A6CD_5752_799D_41CC_7750A7AE09CC",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": -15.12,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4382B6D8_5752_7983_41D4_41D52B3C1F47",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_43B566E2_5752_7987_41C0_4F1587D1461F",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 9.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_43A626ED_5752_799D_41B8_2E4B61605A45",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 7.78,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_43A816F7_5752_798D_41B1_B0312B34948C",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 9.32,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_425DC700_5752_7883_41CD_2C6719EA23EE",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 7.79,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_424C470A_5752_7887_41C2_0C0703517F55",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 9.42,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_427EA714_5752_7883_41B6_C26B30CE2421",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 8.65,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4260771E_5752_78BF_41B2_807F8929AC3C",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 8.04,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_46520769_5752_7882_41D1_2BD26AE003D2",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_465E3774_5752_7882_41CB_8462106D4A97",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4658777E_5752_677E_41CC_ACA934087E12",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 9.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_46437788_5752_6782_41D1_128C05A0A27C",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 7.78,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_46488793_5752_6786_41BD_CF94CC06170E",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 9.32,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_467F679D_5752_6782_41D2_5FF933BB5135",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": -70.93,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_466727A6_5752_678E_41C9_A2FB04EE7EA6",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 9.42,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_466D07B0_5752_6782_41D2_ABD5BF5D263A",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 6.88,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4615A7BA_5752_6786_4165_F4408131744A",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 8.04,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_461877C3_5752_6786_41D0_44FC7F8F7931",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_460E57CC_5752_6782_41C1_78D13F0B2CB0",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_463687D6_5752_678E_41CE_E04B12E19EFF",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 9.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_463D17E0_5752_6782_41CD_1C82CCE5573D",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 7.78,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_462237EB_5752_6786_41CE_A14210CB63ED",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": -177.7,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_462817F4_5752_6782_41D0_B7346C04630E",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 7.79,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_46D137FE_5752_677E_41D1_DC48F8714477",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 9.42,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_46C79807_5752_688E_41CC_1A52F9831FEA",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 6.88,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_46CA4810_5752_6883_41D4_3C4FE60D3FD4",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 8.65,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_46F3681A_5752_6887_41CC_08258D8F20B3",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_46F91824_5752_6883_41D5_CA47B2B876E1",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_46EE482E_5752_689F_41D0_A1528F351171",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": -69.02,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_46957839_5752_6885_41BC_E8FCA96C925F",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 159.87,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_469A4842_5752_6887_41CC_31C35DE30DA2",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 9.32,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4681B84C_5752_6883_41B8_76CD95B750AD",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 7.79,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_46B57855_5752_688D_41CA_D5D6E0ABF110",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": -12.15,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_46BAE85F_5752_68BD_41D3_CD82240737E2",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 6.88,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_46A1986A_5752_6887_41A7_764A285E5360",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 8.65,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_45570873_5752_6885_41B2_E6951A140D0C",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 8.04,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_455AE87D_5752_697D_41C5_AB3AA50577F0",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 16.98,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_45403887_5752_698D_41B1_42739F148F7B",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": -68.77,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4577A892_5752_6987_41AD_E66A7D0E9DE1",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 7.78,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_457B689B_5752_6985_41BE_46BA822F5C10",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 9.32,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_456088A6_5752_698F_4174_832EA8D0A930",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": -71.43,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_451418B0_5752_6982_41D1_3CA56D1CCAF8",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 9.42,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_451A68BA_5752_6986_41CD_F9E05A89903C",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 6.88,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4501F8C4_5752_6982_41C6_99851B3FA1FC",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 8.65,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_453758CF_5752_699E_41C7_2499195AA63D",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 8.04,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_453A58D8_5752_6982_41D1_D7F62014AD91",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": -97.11,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4521E8E2_5752_6986_41C4_A005FA0ED6BA",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 9.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_45D728ED_5752_6982_41BC_2B43F6C48B66",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 7.78,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_45DAD8F7_5752_698E_41B0_30DD9B8CECB4",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 9.32,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_45C0F900_5752_6882_41C5_77C13E608B93",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 7.79,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_45F7A90B_5752_6886_41B5_4DF46BAC6E0B",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 9.42,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_45FB2915_5752_6882_4176_9EF43AB8B52C",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 6.88,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_45E1691F_5752_68BE_4188_60A6669F4FA3",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 8.65,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4594C928_5752_6882_41C8_FC420E187037",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": -138.22,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_459A5933_5752_6886_4197_20444F0BD22A",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": -144.98,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4581093D_5752_6882_41B4_05A74E47EF0C",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_45B41946_5752_688E_41C4_3153C41F2F8A",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 7.78,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_45B9294F_5752_689E_4182_EAAADEDBAB70",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 9.32,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_45AAE959_5752_6882_41C4_0C36641C77F4",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 7.79,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_445EA963_5752_6886_41D1_7B21CEC5E962",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 9.42,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4441296D_5752_6882_417F_B7DCA7FA4018",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 6.88,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_44759976_5752_688E_41BA_5D637AFB6603",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 8.65,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_44644987_5752_6B8D_41C1_02607185DA5E",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 15.62,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_44696997_5752_6B8D_41C9_E889E6705519",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_441B59A6_5752_6B8F_41B1_C1121F024190",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_440D09B6_5752_6B8F_41B7_B05499BB7A88",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 9.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_443ED9C6_5752_6B8F_41D0_1CFDE5D69E5A",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 168.36,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4421F9DB_5752_6B85_41D2_2FF10CAA6353",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 7.79,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_44D219EA_5752_6B87_41AE_768B2B8A9970",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 9.42,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_44C529F9_5752_6B85_41C7_431265756A07",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 6.88,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_44F69A09_5752_6885_41D0_C71E8599C84B",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 7.36,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_44F9EA19_5752_6885_41CA_EF4A166DEA72",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 8.04,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_44E80A28_5752_6883_41CE_FEE56DF823B0",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_449DEA38_5752_6882_41C2_9AB2E3DC9DF6",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_448CEA4C_5752_6882_41C2_B5CF5DC0CF58",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 9.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_44BE6A5B_5752_6886_41C7_60F1E5C3815D",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 84.15,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_44A16A6B_5752_6886_4151_F315A4A9D735",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 7.79,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4352EA7B_5752_6886_41C4_7CDAF24CA3FC",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 9.42,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_43451A86_5752_698E_41CF_1CFB6AE331F2",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": -144.06,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4374FA90_5752_6982_41CE_5C1DA224E515",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 8.65,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4379AA9A_5752_6986_41C2_8B473DDD7BD9",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 8.04,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_43695AA5_5752_6982_41C7_85B5E687071B",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": -145.24,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_431AEAAF_5752_699E_41C0_D6FE9F8A74DD",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_430DDAB9_5752_6982_41B5_7AFB9FF4867A",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 9.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_433CCAC2_5752_6986_41B7_DF6BB4E17841",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 7.78,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_432E7ACD_5752_6982_41D0_7F6E04E2DFD6",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 9.32,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_43D15AD8_5752_6982_41D4_61A04960BC4D",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
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
  "id": "effect_43CC0ADF_5752_69BE_41D4_C5AD930D7827",
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
  "id": "effect_43CC8ADF_5752_69BE_41AA_03F5E548F123",
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
  "id": "audio_A83B2F1A_B250_204B_41B2_61A870B2B428",
  "maximumAngle": 231.16,
  "loop": true,
  "autoplay": true,
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
  "id": "audio_A875C8FE_B250_61CA_41D2_1BDD70C9887A",
  "maximumAngle": 97.14,
  "loop": true,
  "autoplay": true,
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
  "id": "audio_A87513BA_B273_E04A_41AA_0102CD2EF1BE",
  "maximumAngle": 61.89,
  "loop": true,
  "autoplay": true,
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
  "id": "audio_A83165F4_B270_23DF_41DC_E385B4E6556E",
  "autoplay": true,
  "audio": "this.audioresource_A83107F8_B270_2FD6_41E2_DAE1F661A577",
  "class": "PanoramaAudio"
 },
 {
  "id": "audio_A8213A22_B270_E07A_41D5_F14349BD0E04",
  "maximumAngle": 222.06,
  "loop": true,
  "autoplay": true,
  "audio": "this.audioresource_A83107F8_B270_2FD6_41E2_DAE1F661A577",
  "yaw": 0,
  "class": "DirectionalPanoramaAudio",
  "pitch": 0
 },
 {
  "id": "audio_A8284F56_B270_60DB_41E0_27608EB2E0B9",
  "maximumAngle": 265.52,
  "loop": true,
  "autoplay": true,
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
  "id": "audio_1D15363A_0EEB_BFC9_4193_928F3B1A384C",
  "maximumAngle": 360,
  "loop": true,
  "autoplay": true,
  "audio": "this.audioresource_1D15163A_0EEB_BFC9_419F_EF5F7074EFB1",
  "yaw": 0,
  "class": "DirectionalPanoramaAudio",
  "pitch": 0
 }
], "children": [
 {
  "toolTipTextShadowOpacity": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "toolTipBackgroundColor": "#000000",
  "paddingRight": 0,
  "toolTipBorderRadius": 3,
  "borderRadius": 0,
  "paddingLeft": 0,
  "toolTipBorderSize": 1,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarHeadWidth": 6,
  "playbackBarHeight": 10,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarProgressBorderSize": 0,
  "class": "ViewerArea",
  "playbackBarRight": 0,
  "minHeight": 50,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "progressBarBorderRadius": 0,
  "paddingBottom": 0,
  "progressBarBorderSize": 0,
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarProgressBorderRadius": 0,
  "playbackBarOpacity": 1,
  "transitionMode": "blending",
  "toolTipShadowVerticalLength": 0,
  "toolTipShadowSpread": 0,
  "paddingTop": 0,
  "toolTipShadowBlurRadius": 3,
  "playbackBarHeadShadow": true,
  "progressBorderRadius": 0,
  "toolTipShadowColor": "#333333",
  "toolTipFontColor": "#606060",
  "playbackBarBorderRadius": 0,
  "toolTipTextShadowColor": "#000000",
  "minWidth": 100,
  "playbackBarProgressBorderColor": "#000000",
  "toolTipPaddingRight": 6,
  "progressBarOpacity": 1,
  "toolTipShadowOpacity": 1,
  "playbackBarHeadBorderRadius": 0,
  "toolTipPaddingTop": 4,
  "progressHeight": 10,
  "progressBackgroundColorRatios": [
   0
  ],
  "playbackBarProgressOpacity": 1,
  "progressLeft": 0,
  "playbackBarBorderColor": "#FFFFFF",
  "playbackBarHeadBorderColor": "#000000",
  "toolTipFontWeight": "normal",
  "playbackBarHeadShadowBlurRadius": 3,
  "borderSize": 0,
  "toolTipBorderColor": "#767676",
  "playbackBarLeft": 0,
  "playbackBarHeadHeight": 15,
  "playbackBarBackgroundOpacity": 1,
  "toolTipPaddingLeft": 6,
  "playbackBarBorderSize": 0,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadShadowHorizontalLength": 0,
  "progressBackgroundOpacity": 1,
  "progressBottom": 0,
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarHeadShadowColor": "#000000",
  "top": "0%",
  "progressBarBorderColor": "#000000",
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "bottom": "0%",
  "playbackBarHeadOpacity": 1,
  "id": "MainViewer",
  "progressBarBackgroundColorRatios": [
   0
  ],
  "progressOpacity": 1,
  "progressRight": 0,
  "toolTipPaddingBottom": 4,
  "toolTipFontStyle": "normal",
  "progressBackgroundColorDirection": "vertical",
  "playbackBarBottom": 5,
  "progressBorderSize": 0,
  "toolTipOpacity": 0.7,
  "playbackBarHeadBorderSize": 0,
  "left": "0%",
  "toolTipFontFamily": "Arial",
  "progressBorderColor": "#000000",
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "toolTipShadowHorizontalLength": 0,
  "right": "0%",
  "toolTipFontSize": 14,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "shadow": false,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ]
 },
 {
  "shadow": false,
  "scrollBarVisible": "rollOver",
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "verticalAlign": "middle",
  "paddingRight": 10,
  "height": 70,
  "paddingLeft": 10,
  "scrollBarWidth": 10,
  "borderRadius": 5,
  "gap": 35,
  "scrollBarMargin": 2,
  "borderSize": 0,
  "horizontalAlign": "center",
  "overflow": "visible",
  "contentOpaque": false,
  "class": "Container",
  "minHeight": 25,
  "layout": "horizontal",
  "backgroundColorRatios": [
   0,
   1
  ],
  "paddingBottom": 0,
  "id": "Container_86F3A56C_8E22_5B1D_41CA_9CE53436FE56",
  "backgroundColorDirection": "vertical",
  "scrollBarColor": "#000000",
  "maxHeight": 70,
  "bottom": "3%",
  "paddingTop": 0,
  "backgroundOpacity": 0.25,
  "left": "0%",
  "scrollBarOpacity": 0.5,
  "minWidth": 100,
  "right": "0%",
  "children": [
   {
    "shadow": false,
    "toolTipPaddingRight": 6,
    "paddingRight": 0,
    "verticalAlign": "middle",
    "toolTipBackgroundColor": "#000000",
    "paddingLeft": 0,
    "toolTipBorderRadius": 3,
    "iconURL": "skin/IconButton_87577B8F_8E22_AF1B_41CC_79EB87AE6DED.png",
    "toolTipPaddingTop": 4,
    "mode": "push",
    "maxWidth": 70,
    "toolTipShadowOpacity": 1,
    "toolTipBorderSize": 1,
    "toolTip": "Info",
    "borderRadius": 0,
    "width": "100%",
    "toolTipFontWeight": "normal",
    "transparencyActive": true,
    "borderSize": 0,
    "toolTipBorderColor": "#767676",
    "horizontalAlign": "center",
    "toolTipPaddingLeft": 6,
    "toolTipShadowVerticalLength": 0,
    "click": "this.showPopupImage(this.ImageResource_536A2F3F_412A_B1B6_41B9_51CAE5D86C15, null, '85%', '85%', this.FadeInEffect_8ED05F70_96C4_F045_41DC_2AB82A556F92, this.FadeOutEffect_8ED06F70_96C4_F045_41DA_C74400CF7B15, {'rollOverIconColor':'#52B7EF','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','rollOverBackgroundColor':['#000000','#000000','#000000'],'iconLineWidth':3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#000000','#000000','#000000'],'paddingBottom':10,'borderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundColorDirection':'vertical','pressedIconColor':'#CCCCCC','iconColor':'#FFFFFF','paddingRight':10,'paddingTop':10,'pressedIconWidth':25,'iconHeight':25,'pressedIconHeight':25,'paddingLeft':10,'backgroundOpacity':0.15,'rollOverBorderColor':'#000000','rollOverBackgroundOpacity':0.5,'rollOverIconHeight':25,'borderSize':0,'iconWidth':25,'rollOverIconLineWidth':3,'pressedBackgroundColor':['#000000','#000000','#000000'],'rollOverIconWidth':25,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':3,'pressedBorderSize':0}, null, null, false)",
    "class": "IconButton",
    "height": "100%",
    "minHeight": 25,
    "toolTipTextShadowBlurRadius": 3,
    "cursor": "hand",
    "visible": false,
    "paddingBottom": 0,
    "toolTipShadowHorizontalLength": 0,
    "id": "IconButton_87577B8F_8E22_AF1B_41CC_79EB87AE6DED",
    "maxHeight": 70,
    "toolTipPaddingBottom": 4,
    "toolTipFontStyle": "normal",
    "paddingTop": 0,
    "toolTipShadowBlurRadius": 3,
    "toolTipOpacity": 0.7,
    "toolTipShadowSpread": 0,
    "backgroundOpacity": 0,
    "toolTipFontColor": "#606060",
    "toolTipFontFamily": "Arial",
    "toolTipShadowColor": "#333333",
    "toolTipTextShadowColor": "#000000",
    "toolTipFontSize": 14,
    "toolTipTextShadowOpacity": 0,
    "minWidth": 25,
    "rollOverIconURL": "skin/IconButton_87577B8F_8E22_AF1B_41CC_79EB87AE6DED_rollover.png"
   },
   {
    "shadow": false,
    "toolTipPaddingRight": 6,
    "paddingRight": 0,
    "verticalAlign": "middle",
    "toolTipBackgroundColor": "#000000",
    "paddingLeft": 0,
    "toolTipBorderRadius": 3,
    "iconURL": "skin/IconButton_213ED70C_2DB2_E6C5_41B6_0CCE6C77E889.png",
    "toolTipPaddingTop": 4,
    "mode": "push",
    "maxWidth": 70,
    "toolTipShadowOpacity": 1,
    "toolTipBorderSize": 1,
    "toolTip": "Play Video",
    "borderRadius": 0,
    "width": "100%",
    "toolTipFontWeight": "normal",
    "transparencyActive": true,
    "borderSize": 0,
    "toolTipBorderColor": "#767676",
    "horizontalAlign": "center",
    "toolTipPaddingLeft": 6,
    "toolTipShadowVerticalLength": 0,
    "click": "this.setMediaBehaviour(this.playList_430FF684_5752_7982_41BD_14853FCE6EC6, 0); this.MainViewerVideoPlayer.play()",
    "class": "IconButton",
    "height": "100%",
    "minHeight": 25,
    "toolTipTextShadowBlurRadius": 3,
    "cursor": "hand",
    "visible": false,
    "paddingBottom": 0,
    "toolTipShadowHorizontalLength": 0,
    "id": "IconButton_213ED70C_2DB2_E6C5_41B6_0CCE6C77E889",
    "maxHeight": 70,
    "toolTipPaddingBottom": 4,
    "toolTipFontStyle": "normal",
    "paddingTop": 0,
    "toolTipShadowBlurRadius": 3,
    "toolTipOpacity": 0.7,
    "toolTipShadowSpread": 0,
    "backgroundOpacity": 0,
    "toolTipFontColor": "#606060",
    "toolTipFontFamily": "Arial",
    "toolTipShadowColor": "#333333",
    "toolTipTextShadowColor": "#000000",
    "toolTipFontSize": 14,
    "toolTipTextShadowOpacity": 0,
    "minWidth": 25,
    "rollOverIconURL": "skin/IconButton_213ED70C_2DB2_E6C5_41B6_0CCE6C77E889_rollover.png"
   },
   "this.IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED",
   {
    "shadow": false,
    "toolTipPaddingRight": 6,
    "paddingRight": 0,
    "verticalAlign": "middle",
    "toolTipBackgroundColor": "#000000",
    "paddingLeft": 0,
    "toolTipBorderRadius": 3,
    "iconURL": "skin/IconButton_2FC9210C_3E8F_C4D4_41A7_10D1404CA49B.png",
    "toolTipPaddingTop": 4,
    "mode": "push",
    "maxWidth": 70,
    "toolTipShadowOpacity": 1,
    "toolTipBorderSize": 1,
    "toolTip": "FLoor Plan",
    "borderRadius": 0,
    "width": "85%",
    "toolTipFontWeight": "normal",
    "transparencyActive": true,
    "pressedIconURL": "skin/IconButton_2FC9210C_3E8F_C4D4_41A7_10D1404CA49B_pressed.png",
    "borderSize": 0,
    "toolTipBorderColor": "#767676",
    "horizontalAlign": "center",
    "toolTipPaddingLeft": 6,
    "toolTipShadowVerticalLength": 0,
    "click": "this.setComponentVisibility(this.Container_53347472_4288_F6E6_4196_D7457B47D2CF, true, 0, this.effect_51CB7B74_4299_12E2_41B4_829087983DE5, 'showEffect', false)",
    "class": "IconButton",
    "height": "85%",
    "minHeight": 25,
    "toolTipTextShadowBlurRadius": 3,
    "cursor": "hand",
    "visible": false,
    "paddingBottom": 0,
    "toolTipShadowHorizontalLength": 0,
    "id": "IconButton_2FC9210C_3E8F_C4D4_41A7_10D1404CA49B",
    "maxHeight": 70,
    "toolTipPaddingBottom": 4,
    "toolTipFontStyle": "normal",
    "paddingTop": 0,
    "toolTipShadowBlurRadius": 3,
    "toolTipOpacity": 0.7,
    "toolTipShadowSpread": 0,
    "backgroundOpacity": 0,
    "toolTipFontColor": "#606060",
    "toolTipFontFamily": "Arial",
    "toolTipShadowColor": "#333333",
    "toolTipTextShadowColor": "#000000",
    "toolTipFontSize": 14,
    "toolTipTextShadowOpacity": 0,
    "minWidth": 25
   },
   {
    "shadow": false,
    "toolTipPaddingRight": 6,
    "paddingRight": 0,
    "verticalAlign": "middle",
    "toolTipBackgroundColor": "#000000",
    "paddingLeft": 0,
    "toolTipBorderRadius": 3,
    "iconURL": "skin/IconButton_843BBEF5_8E22_690F_419D_28CBDD771ACC.png",
    "toolTipPaddingTop": 4,
    "mode": "toggle",
    "maxWidth": 70,
    "toolTipShadowOpacity": 1,
    "toolTipBorderSize": 1,
    "toolTip": "Panorama List",
    "borderRadius": 0,
    "width": "100%",
    "toolTipFontWeight": "normal",
    "transparencyActive": true,
    "pressedIconURL": "skin/IconButton_843BBEF5_8E22_690F_419D_28CBDD771ACC_pressed.png",
    "borderSize": 0,
    "toolTipBorderColor": "#767676",
    "horizontalAlign": "center",
    "toolTipPaddingLeft": 6,
    "toolTipShadowVerticalLength": 0,
    "click": "if(!this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472.get('visible')){ this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, true, 0, this.effect_15DDF232_3E91_44CF_41AB_F8C3E6067377, 'showEffect', false) } else if(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472.get('visible')){ this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, false, 0, this.effect_15DDE232_3E91_44CF_41B1_14501B4EC17A, 'hideEffect', false) }",
    "class": "IconButton",
    "height": "100%",
    "minHeight": 25,
    "toolTipTextShadowBlurRadius": 3,
    "cursor": "hand",
    "paddingBottom": 0,
    "toolTipShadowHorizontalLength": 0,
    "id": "IconButton_843BBEF5_8E22_690F_419D_28CBDD771ACC",
    "maxHeight": 70,
    "toolTipPaddingBottom": 4,
    "toolTipFontStyle": "normal",
    "paddingTop": 0,
    "toolTipShadowBlurRadius": 3,
    "toolTipOpacity": 0.7,
    "toolTipShadowSpread": 0,
    "backgroundOpacity": 0,
    "toolTipFontColor": "#606060",
    "toolTipFontFamily": "Arial",
    "toolTipShadowColor": "#333333",
    "toolTipTextShadowColor": "#000000",
    "toolTipFontSize": 14,
    "toolTipTextShadowOpacity": 0,
    "minWidth": 25
   }
  ]
 },
 {
  "shadow": false,
  "scrollBarVisible": "rollOver",
  "paddingRight": 0,
  "verticalAlign": "middle",
  "paddingLeft": 0,
  "height": 50,
  "maxWidth": 500,
  "width": 500,
  "scrollBarWidth": 10,
  "borderRadius": 5,
  "scrollBarMargin": 2,
  "borderSize": 0,
  "horizontalAlign": "right",
  "overflow": "visible",
  "gap": 5,
  "contentOpaque": false,
  "class": "Container",
  "minHeight": 55,
  "top": "3%",
  "layout": "horizontal",
  "paddingBottom": 0,
  "id": "Container_807F782A_8E23_A905_41DE_623121285A09",
  "scrollBarColor": "#000000",
  "maxHeight": 55,
  "paddingTop": 0,
  "backgroundOpacity": 0,
  "scrollBarOpacity": 0.5,
  "right": "1.5%",
  "children": [
   {
    "shadow": false,
    "scrollBarVisible": "rollOver",
    "paddingRight": 0,
    "verticalAlign": "middle",
    "paddingLeft": 0,
    "height": 55,
    "width": 400,
    "scrollBarWidth": 10,
    "borderRadius": 0,
    "scrollBarMargin": 2,
    "borderSize": 0,
    "horizontalAlign": "right",
    "overflow": "visible",
    "gap": 0,
    "contentOpaque": false,
    "class": "Container",
    "minHeight": 55,
    "layout": "horizontal",
    "visible": false,
    "paddingBottom": 0,
    "id": "Container_80D3CF90_8E26_E705_41E0_E47025A2C106",
    "scrollBarColor": "#000000",
    "maxHeight": 55,
    "paddingTop": 0,
    "backgroundOpacity": 0,
    "scrollBarOpacity": 0.5,
    "children": [
     "this.IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37",
     {
      "shadow": false,
      "toolTipPaddingRight": 6,
      "paddingRight": 0,
      "verticalAlign": "middle",
      "toolTipBackgroundColor": "#000000",
      "paddingLeft": 0,
      "toolTipBorderRadius": 3,
      "iconURL": "skin/IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA.png",
      "toolTipPaddingTop": 4,
      "mode": "toggle",
      "maxWidth": 60,
      "toolTipShadowOpacity": 1,
      "toolTipBorderSize": 1,
      "toolTip": "Full Screen",
      "borderRadius": 0,
      "width": "100%",
      "toolTipFontWeight": "normal",
      "transparencyActive": true,
      "pressedIconURL": "skin/IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA_pressed.png",
      "borderSize": 0,
      "toolTipBorderColor": "#767676",
      "horizontalAlign": "center",
      "toolTipPaddingLeft": 6,
      "toolTipShadowVerticalLength": 0,
      "click": "if(!this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, true, 0, null, null, false) } else if(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, false, 0, null, null, false) }",
      "class": "IconButton",
      "height": "100%",
      "minHeight": 1,
      "toolTipTextShadowBlurRadius": 3,
      "cursor": "hand",
      "paddingBottom": 0,
      "toolTipShadowHorizontalLength": 0,
      "id": "IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA",
      "maxHeight": 60,
      "toolTipPaddingBottom": 4,
      "toolTipFontStyle": "normal",
      "paddingTop": 0,
      "toolTipShadowBlurRadius": 3,
      "toolTipOpacity": 0.7,
      "toolTipShadowSpread": 0,
      "backgroundOpacity": 0,
      "toolTipFontColor": "#606060",
      "toolTipFontFamily": "Arial",
      "toolTipShadowColor": "#333333",
      "toolTipTextShadowColor": "#000000",
      "toolTipFontSize": 14,
      "toolTipTextShadowOpacity": 0,
      "minWidth": 1
     },
     {
      "shadow": false,
      "toolTipPaddingRight": 6,
      "paddingRight": 0,
      "verticalAlign": "middle",
      "toolTipBackgroundColor": "#000000",
      "paddingLeft": 0,
      "toolTipBorderRadius": 3,
      "iconURL": "skin/IconButton_8105A313_8E22_BF0B_41E1_331C6035A930.png",
      "toolTipPaddingTop": 4,
      "mode": "toggle",
      "maxWidth": 60,
      "toolTipShadowOpacity": 1,
      "toolTipBorderSize": 1,
      "toolTip": "Audio On/Off",
      "borderRadius": 0,
      "width": "100%",
      "toolTipFontWeight": "normal",
      "transparencyActive": true,
      "pressedIconURL": "skin/IconButton_8105A313_8E22_BF0B_41E1_331C6035A930_pressed.png",
      "borderSize": 0,
      "toolTipBorderColor": "#767676",
      "horizontalAlign": "center",
      "toolTipPaddingLeft": 6,
      "toolTipShadowVerticalLength": 0,
      "click": "if(!this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, true, 0, this.effect_CACBF85D_EED0_7261_41DB_A3B65ECE0D5D, 'showEffect', false) } else if(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, false, 0, this.effect_CACBC85D_EED0_7261_41BE_8CF4C3A8170C, 'hideEffect', false) }",
      "class": "IconButton",
      "height": "100%",
      "minHeight": 1,
      "toolTipTextShadowBlurRadius": 3,
      "cursor": "hand",
      "paddingBottom": 0,
      "toolTipShadowHorizontalLength": 0,
      "id": "IconButton_8105A313_8E22_BF0B_41E1_331C6035A930",
      "maxHeight": 60,
      "toolTipPaddingBottom": 4,
      "toolTipFontStyle": "normal",
      "paddingTop": 0,
      "toolTipShadowBlurRadius": 3,
      "toolTipOpacity": 0.7,
      "toolTipShadowSpread": 0,
      "backgroundOpacity": 0,
      "toolTipFontColor": "#606060",
      "toolTipFontFamily": "Arial",
      "toolTipShadowColor": "#333333",
      "toolTipTextShadowColor": "#000000",
      "toolTipFontSize": 14,
      "toolTipTextShadowOpacity": 0,
      "minWidth": 1
     },
     "this.IconButton_80E5955A_8E23_BB05_41CA_43DD61DBAEE9"
    ],
    "minWidth": 100
   },
   {
    "shadow": false,
    "toolTipPaddingRight": 6,
    "paddingRight": 0,
    "verticalAlign": "middle",
    "toolTipBackgroundColor": "#000000",
    "paddingLeft": 0,
    "toolTipBorderRadius": 3,
    "iconURL": "skin/IconButton_811D89E1_8E3D_AB07_4191_94003C90B2FF.png",
    "toolTipPaddingTop": 4,
    "mode": "toggle",
    "maxWidth": 55,
    "toolTipShadowOpacity": 1,
    "toolTipBorderSize": 1,
    "toolTip": "Settings",
    "borderRadius": 0,
    "width": "100%",
    "toolTipFontWeight": "normal",
    "transparencyActive": true,
    "borderSize": 0,
    "toolTipBorderColor": "#767676",
    "horizontalAlign": "center",
    "toolTipPaddingLeft": 6,
    "toolTipShadowVerticalLength": 0,
    "click": "if(!this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, true, 0, this.effect_32C91197_3F22_3110_4181_9E76B593FBFE, 'showEffect', false) } else if(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, false, 0, this.effect_32C92197_3F22_3110_419D_E2E21968F16F, 'hideEffect', false) }",
    "class": "IconButton",
    "height": "100%",
    "minHeight": 55,
    "toolTipTextShadowBlurRadius": 3,
    "cursor": "hand",
    "paddingBottom": 0,
    "toolTipShadowHorizontalLength": 0,
    "id": "IconButton_811D89E1_8E3D_AB07_4191_94003C90B2FF",
    "maxHeight": 55,
    "toolTipPaddingBottom": 4,
    "toolTipFontStyle": "normal",
    "paddingTop": 0,
    "toolTipShadowBlurRadius": 3,
    "toolTipOpacity": 0.7,
    "toolTipShadowSpread": 0,
    "backgroundOpacity": 0,
    "toolTipFontColor": "#606060",
    "toolTipFontFamily": "Arial",
    "toolTipShadowColor": "#333333",
    "toolTipTextShadowColor": "#000000",
    "toolTipFontSize": 14,
    "toolTipTextShadowOpacity": 0,
    "minWidth": 55
   }
  ],
  "minWidth": 500
 },
 {
  "itemThumbnailHeight": 75,
  "paddingRight": 5,
  "shadow": false,
  "backgroundColor": [
   "#000000"
  ],
  "selectedItemBackgroundColor": [],
  "maxWidth": 105,
  "borderRadius": 3,
  "paddingLeft": 5,
  "scrollBarWidth": 7,
  "selectedItemThumbnailShadowHorizontalLength": 0,
  "gap": 5,
  "scrollBarMargin": 4,
  "selectedItemLabelFontStyle": "italic",
  "horizontalAlign": "left",
  "playList": "this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist",
  "rollOverItemLabelFontColor": "#FFFFFF",
  "itemMode": "normal",
  "itemHorizontalAlign": "center",
  "itemLabelFontColor": "#FFFFFF",
  "itemThumbnailScaleMode": "fit_outside",
  "minHeight": 100,
  "rollOverItemLabelFontWeight": "bold",
  "class": "ThumbnailList",
  "layout": "vertical",
  "paddingBottom": 5,
  "itemPaddingBottom": 3,
  "backgroundColorRatios": [
   0
  ],
  "selectedItemLabelTextDecoration": "underline",
  "scrollBarColor": "#52B7EF",
  "itemLabelFontWeight": "normal",
  "rollOverItemLabelTextDecoration": "underline",
  "paddingTop": 5,
  "itemThumbnailOpacity": 1,
  "itemThumbnailBorderRadius": 25,
  "itemThumbnailShadow": false,
  "itemLabelTextDecoration": "none",
  "selectedItemLabelFontColor": "#FFFFFF",
  "scrollBarOpacity": 1,
  "itemLabelFontStyle": "normal",
  "scrollBarVisible": "rollOver",
  "itemPaddingRight": 3,
  "selectedItemThumbnailShadow": true,
  "selectedItemThumbnailShadowVerticalLength": 0,
  "itemThumbnailWidth": 75,
  "selectedItemThumbnailShadowBlurRadius": 10,
  "minWidth": 90,
  "itemLabelHorizontalAlign": "center",
  "selectedItemLabelFontSize": 12,
  "width": 105,
  "selectedItemThumbnailShadowOpacity": 0.73,
  "itemBorderRadius": 0,
  "itemPaddingLeft": 3,
  "selectedItemBorderSize": 0,
  "borderSize": 0,
  "itemLabelGap": 9,
  "itemVerticalAlign": "middle",
  "itemBackgroundOpacity": 0,
  "itemPaddingTop": 3,
  "itemBackgroundColorDirection": "vertical",
  "selectedItemBorderRadius": 0,
  "itemBackgroundColor": [],
  "selectedItemLabelFontWeight": "bold",
  "top": "15%",
  "bottom": "15%",
  "itemLabelFontSize": 12,
  "itemLabelPosition": "bottom",
  "backgroundColorDirection": "vertical",
  "selectedItemBackgroundColorRatios": [],
  "id": "ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472",
  "itemOpacity": 1,
  "backgroundOpacity": 0.25,
  "itemBackgroundColorRatios": [],
  "selectedItemBackgroundOpacity": 0,
  "right": "1.5%",
  "verticalAlign": "top",
  "itemLabelFontFamily": "Arial"
 },
 {
  "shadow": false,
  "scrollBarVisible": "rollOver",
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "verticalAlign": "top",
  "paddingRight": 0,
  "paddingLeft": 0,
  "scrollBarWidth": 10,
  "borderRadius": 0,
  "gap": 10,
  "scrollBarMargin": 2,
  "borderSize": 0,
  "width": "100%",
  "horizontalAlign": "left",
  "overflow": "scroll",
  "contentOpaque": false,
  "class": "Container",
  "height": "100%",
  "minHeight": 1,
  "top": "0%",
  "layout": "absolute",
  "backgroundColorRatios": [
   0,
   1
  ],
  "paddingBottom": 0,
  "visible": false,
  "id": "Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB",
  "backgroundColorDirection": "vertical",
  "scrollBarColor": "#000000",
  "paddingTop": 0,
  "backgroundOpacity": 0.7,
  "left": "0%",
  "scrollBarOpacity": 0.5,
  "minWidth": 1,
  "children": [
   "this.ViewerAreaLabeled_9FD7235A_96CD_9045_41D9_23A3BCBDB1C6",
   "this.IconButton_9FEA51EA_96CC_905A_41D3_F42DB0CD0A74",
   "this.IconButton_9FB9BD3F_96C5_703B_41D7_65AEE6E85A96",
   "this.IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4"
  ]
 },
 {
  "shadow": false,
  "paddingRight": 0,
  "verticalAlign": "middle",
  "paddingLeft": 0,
  "iconURL": "skin/IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB.png",
  "mode": "push",
  "maxWidth": 50,
  "borderRadius": 0,
  "width": "3.03%",
  "transparencyActive": true,
  "borderSize": 0,
  "horizontalAlign": "center",
  "class": "IconButton",
  "height": "5.482%",
  "minHeight": 50,
  "cursor": "hand",
  "visible": false,
  "paddingBottom": 0,
  "top": "2%",
  "id": "IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB",
  "maxHeight": 50,
  "paddingTop": 0,
  "backgroundOpacity": 0,
  "minWidth": 50,
  "right": "2%",
  "rollOverIconURL": "skin/IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB_rollover.png"
 },
 {
  "shadow": false,
  "scrollBarVisible": "rollOver",
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "verticalAlign": "top",
  "paddingRight": 0,
  "borderRadius": 0,
  "paddingLeft": 0,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "borderSize": 0,
  "horizontalAlign": "left",
  "overflow": "scroll",
  "gap": 10,
  "contentOpaque": false,
  "class": "Container",
  "layout": "absolute",
  "minHeight": 1,
  "top": "0%",
  "backgroundColorRatios": [
   0,
   1
  ],
  "paddingBottom": 0,
  "visible": false,
  "id": "Container_53347472_4288_F6E6_4196_D7457B47D2CF",
  "backgroundColorDirection": "vertical",
  "scrollBarColor": "#000000",
  "bottom": "0%",
  "paddingTop": 0,
  "backgroundOpacity": 0.3,
  "left": "0%",
  "scrollBarOpacity": 0.5,
  "minWidth": 1,
  "right": "0%",
  "children": [
   "this.MapViewer",
   {
    "shadow": false,
    "paddingRight": 0,
    "verticalAlign": "middle",
    "paddingLeft": 0,
    "iconURL": "skin/IconButton_50D1A26C_4289_72E1_41CD_2B557DFCC24F.png",
    "mode": "push",
    "maxWidth": 50,
    "borderRadius": 0,
    "width": "5.07%",
    "transparencyActive": true,
    "borderSize": 0,
    "horizontalAlign": "center",
    "click": "this.setComponentVisibility(this.Container_53347472_4288_F6E6_4196_D7457B47D2CF, false, 0, this.effect_500E3733_4297_3267_41C9_4935C0BEBF39, 'hideEffect', false)",
    "class": "IconButton",
    "height": "5.91%",
    "minHeight": 50,
    "cursor": "hand",
    "paddingBottom": 0,
    "top": "5%",
    "id": "IconButton_50D1A26C_4289_72E1_41CD_2B557DFCC24F",
    "maxHeight": 50,
    "paddingTop": 0,
    "backgroundOpacity": 0,
    "minWidth": 50,
    "right": "5%",
    "rollOverIconURL": "skin/IconButton_50D1A26C_4289_72E1_41CD_2B557DFCC24F_rollover.png"
   }
  ]
 },
 {
  "shadow": false,
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
  "backgroundColorRatios": [
   0
  ],
  "paddingBottom": 0,
  "visible": false,
  "id": "veilPopupPanorama",
  "backgroundColorDirection": "vertical",
  "bottom": 0,
  "paddingTop": 0,
  "backgroundOpacity": 0.55,
  "showEffect": {
   "easing": "cubic_in_out",
   "duration": 350,
   "class": "FadeInEffect"
  },
  "left": 0,
  "minWidth": 0,
  "right": 0
 },
 {
  "shadow": false,
  "backgroundColor": [],
  "paddingRight": 0,
  "borderRadius": 0,
  "paddingLeft": 0,
  "borderSize": 0,
  "scaleMode": "custom",
  "class": "ZoomImage",
  "minHeight": 0,
  "top": 0,
  "backgroundColorRatios": [],
  "paddingBottom": 0,
  "visible": false,
  "id": "zoomImagePopupPanorama",
  "backgroundColorDirection": "vertical",
  "bottom": 0,
  "paddingTop": 0,
  "backgroundOpacity": 1,
  "left": 0,
  "minWidth": 0,
  "right": 0
 },
 {
  "shadow": false,
  "label": "",
  "backgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "verticalAlign": "middle",
  "iconHeight": 20,
  "paddingRight": 5,
  "mode": "push",
  "shadowBlurRadius": 6,
  "paddingLeft": 5,
  "fontSize": 12,
  "iconColor": "#000000",
  "borderRadius": 0,
  "fontFamily": "Arial",
  "iconWidth": 20,
  "borderSize": 0,
  "horizontalAlign": "center",
  "shadowSpread": 1,
  "fontStyle": "normal",
  "textDecoration": "none",
  "fontColor": "#FFFFFF",
  "class": "CloseButton",
  "fontWeight": "normal",
  "gap": 5,
  "rollOverIconColor": "#666666",
  "minHeight": 0,
  "top": 10,
  "layout": "horizontal",
  "cursor": "hand",
  "backgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "paddingBottom": 5,
  "iconLineWidth": 5,
  "visible": false,
  "id": "closeButtonPopupPanorama",
  "backgroundColorDirection": "vertical",
  "pressedIconColor": "#888888",
  "paddingTop": 5,
  "shadowColor": "#000000",
  "backgroundOpacity": 0.3,
  "showEffect": {
   "easing": "cubic_in_out",
   "duration": 350,
   "class": "FadeInEffect"
  },
  "borderColor": "#000000",
  "iconBeforeLabel": true,
  "minWidth": 0,
  "right": 10
 }
], 
 "start": "this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37], 'cardboardAvailable'); this.syncPlaylists([this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); this.playList_4333A68C_5752_7982_4157_66046C3CF724.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA].forEach(function(component) { component.set('visible', false); }) }",
 "shadow": false,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "paddingRight": 0,
 "mouseWheelEnabled": true,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "gap": 10,
 "scrollBarMargin": 2,
 "borderSize": 0,
 "vrPolyfillScale": 0.5,
 "horizontalAlign": "left",
 "backgroundPreloadEnabled": true,
 "overflow": "visible",
 "buttonToggleMute": "this.IconButton_8105A313_8E22_BF0B_41E1_331C6035A930",
 "contentOpaque": false,
 "scripts": {
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "getKey": function(key){  return window[key]; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio) delete audios[audio.get('id')]; } if(audio) audio.stop(); },
  "existsKey": function(key){  return key in window; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "unregisterKey": function(key){  delete window[key]; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "registerKey": function(key, value){  window[key] = value; },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; }
 },
 "class": "Player",
 "height": "100%",
 "minHeight": 20,
 "layout": "absolute",
 "paddingBottom": 0,
 "id": "rootPlayer",
 "scrollBarColor": "#000000",
 "paddingTop": 0,
 "buttonToggleFullscreen": "this.IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA",
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "minWidth": 20
})