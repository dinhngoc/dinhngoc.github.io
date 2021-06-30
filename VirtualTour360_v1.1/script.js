TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "viewerArea": "this.MainViewer",
  "id": "MainViewerVideoPlayer",
  "buttonStop": [
   {
    "verticalAlign": "middle",
    "paddingRight": 0,
    "mode": "push",
    "maxHeight": 50,
    "paddingLeft": 0,
    "height": "5.48%",
    "width": "3.03%",
    "minWidth": 50,
    "transparencyActive": true,
    "borderSize": 0,
    "class": "IconButton",
    "borderRadius": 0,
    "horizontalAlign": "center",
    "minHeight": 50,
    "shadow": false,
    "top": "2%",
    "click": "this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, false, 0, this.effect_9B0AF4E2_96C4_F045_41D3_0E00FEE03A15, 'hideEffect', false)",
    "cursor": "hand",
    "paddingBottom": 0,
    "id": "IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4",
    "backgroundOpacity": 0,
    "paddingTop": 0,
    "iconURL": "skin/IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4.png",
    "rollOverIconURL": "skin/IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4_rollover.png",
    "right": "2%",
    "maxWidth": 50
   },
   "this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB"
  ],
  "displayPlaybackBar": true,
  "buttonPlay": {
   "verticalAlign": "middle",
   "toolTipBorderRadius": 3,
   "paddingRight": 0,
   "toolTipShadowOpacity": 1,
   "mode": "push",
   "maxHeight": 70,
   "paddingLeft": 0,
   "height": "100%",
   "width": "100%",
   "toolTipBorderSize": 1,
   "toolTip": "See Photos",
   "minWidth": 25,
   "toolTipTextShadowColor": "#000000",
   "toolTipPaddingLeft": 6,
   "toolTipBorderColor": "#767676",
   "transparencyActive": true,
   "borderSize": 0,
   "toolTipBackgroundColor": "#000000",
   "class": "IconButton",
   "borderRadius": 0,
   "horizontalAlign": "center",
   "toolTipShadowVerticalLength": 0,
   "minHeight": 25,
   "maxWidth": 70,
   "toolTipOpacity": 0.7,
   "toolTipPaddingBottom": 4,
   "toolTipTextShadowBlurRadius": 3,
   "shadow": false,
   "click": "this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, true, 0, this.effect_98AADBB0_96C5_F0C5_41B2_1C4D08E503DB, 'showEffect', false); this.playList_49F14E73_5162_1A6C_41BB_47CA6665025E.set('selectedIndex', 0)",
   "cursor": "hand",
   "paddingBottom": 0,
   "toolTipFontSize": 14,
   "toolTipShadowHorizontalLength": 0,
   "toolTipShadowColor": "#333333",
   "toolTipShadowBlurRadius": 3,
   "toolTipFontWeight": "normal",
   "id": "IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED",
   "toolTipShadowSpread": 0,
   "toolTipTextShadowOpacity": 0,
   "backgroundOpacity": 0,
   "toolTipFontColor": "#606060",
   "toolTipFontFamily": "Arial",
   "paddingTop": 0,
   "iconURL": "skin/IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED.png",
   "toolTipPaddingTop": 4,
   "rollOverIconURL": "skin/IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED_rollover.png",
   "toolTipPaddingRight": 6,
   "toolTipFontStyle": "normal"
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
   "playbackBarHeight": 10,
   "minWidth": 1,
   "playbackBarHeadWidth": 6,
   "playbackBarProgressBorderSize": 0,
   "class": "ViewerArea",
   "playbackBarBackgroundColorDirection": "vertical",
   "playbackBarRight": 0,
   "playbackBarHeadShadow": true,
   "shadow": false,
   "toolTipShadowVerticalLength": 0,
   "toolTipPaddingBottom": 4,
   "progressBackgroundOpacity": 1,
   "toolTipFontWeight": "normal",
   "progressBarBorderSize": 0,
   "progressBarBorderRadius": 0,
   "progressBorderRadius": 0,
   "playbackBarHeadShadowHorizontalLength": 0,
   "paddingBottom": 0,
   "toolTipFontSize": 14,
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
   "toolTipPaddingRight": 6,
   "playbackBarHeadBackgroundColor": [
    "#111111",
    "#666666"
   ],
   "toolTipBorderRadius": 3,
   "playbackBarProgressBackgroundColor": [
    "#3399FF"
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
   "height": "100%",
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
   "minHeight": 1,
   "toolTipTextShadowBlurRadius": 3,
   "toolTipOpacity": 0.7,
   "width": "100%",
   "playbackBarOpacity": 1,
   "playbackBarHeadShadowColor": "#000000",
   "progressRight": 0,
   "playbackBarHeadBorderSize": 0,
   "top": "0%",
   "progressBarBorderColor": "#000000",
   "playbackBarHeadOpacity": 1,
   "progressBarBackgroundColorRatios": [
    0
   ],
   "progressOpacity": 1,
   "progressBackgroundColorDirection": "vertical",
   "progressBarBackgroundColorDirection": "vertical",
   "id": "ViewerAreaLabeled_9FD7235A_96CD_9045_41D9_23A3BCBDB1C6",
   "toolTipShadowHorizontalLength": 0,
   "progressBorderColor": "#000000",
   "toolTipFontFamily": "Arial",
   "playbackBarBottom": 0,
   "progressBarBackgroundColor": [
    "#3399FF"
   ],
   "left": "0%",
   "progressBackgroundColor": [
    "#FFFFFF"
   ],
   "progressBorderSize": 0,
   "playbackBarProgressBackgroundColorDirection": "vertical",
   "toolTipPaddingTop": 4,
   "playbackBarHeadShadowVerticalLength": 0,
   "toolTipFontStyle": "normal"
  },
  "id": "ViewerAreaLabeled_9FD7235A_96CD_9045_41D9_23A3BCBDB1C6PhotoAlbumPlayer",
  "buttonPrevious": {
   "verticalAlign": "middle",
   "paddingRight": 0,
   "mode": "push",
   "maxHeight": 70,
   "paddingLeft": 0,
   "width": "4.24%",
   "minWidth": 70,
   "transparencyActive": true,
   "borderSize": 0,
   "class": "IconButton",
   "borderRadius": 0,
   "horizontalAlign": "center",
   "minHeight": 70,
   "maxWidth": 70,
   "shadow": false,
   "top": "40%",
   "cursor": "hand",
   "paddingBottom": 0,
   "bottom": "40%",
   "id": "IconButton_9FEA51EA_96CC_905A_41D3_F42DB0CD0A74",
   "backgroundOpacity": 0,
   "paddingTop": 0,
   "iconURL": "skin/IconButton_9FEA51EA_96CC_905A_41D3_F42DB0CD0A74.png",
   "left": "1%",
   "rollOverIconURL": "skin/IconButton_9FEA51EA_96CC_905A_41D3_F42DB0CD0A74_rollover.png"
  },
  "buttonNext": {
   "verticalAlign": "middle",
   "paddingRight": 0,
   "mode": "push",
   "maxHeight": 70,
   "paddingLeft": 0,
   "width": "4.24%",
   "minWidth": 70,
   "transparencyActive": true,
   "borderSize": 0,
   "class": "IconButton",
   "borderRadius": 0,
   "horizontalAlign": "center",
   "minHeight": 70,
   "shadow": false,
   "top": "40%",
   "cursor": "hand",
   "paddingBottom": 0,
   "bottom": "40%",
   "id": "IconButton_9FB9BD3F_96C5_703B_41D7_65AEE6E85A96",
   "backgroundOpacity": 0,
   "paddingTop": 0,
   "iconURL": "skin/IconButton_9FB9BD3F_96C5_703B_41D7_65AEE6E85A96.png",
   "rollOverIconURL": "skin/IconButton_9FB9BD3F_96C5_703B_41D7_65AEE6E85A96_rollover.png",
   "right": "1%",
   "maxWidth": 70
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
    "thumbnailUrl": "media/panorama_4DEBC1BC_411E_B0BA_41C2_8D75AEE4E70B_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "maps": [
       {
        "hfov": 17.34,
        "yaw": -1.73,
        "image": {
         "levels": [
          {
           "height": 32,
           "width": 32,
           "url": "media/panorama_4DEBC1BC_411E_B0BA_41C2_8D75AEE4E70B_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -18.45
       }
      ],
      "enabledInCardboard": true,
      "useHandCursor": true,
      "id": "overlay_4DEBA1BC_411E_B0BA_41AA_8B5E6319F164",
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_4D1613E3_4119_90CE_41CC_DF7832021B96, this.camera_48C30240_5162_65AC_41D3_BC4755D24F45); this.mainPlayList.set('selectedIndex', 1)",
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true,
        "toolTip": "Entrance",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "yaw": -1.73,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 17.34,
        "image": {
         "levels": [
          {
           "height": 65,
           "width": 65,
           "url": "media/panorama_4DEBC1BC_411E_B0BA_41C2_8D75AEE4E70B_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -18.45
       }
      ]
     },
     {
      "rollOverDisplay": true,
      "maps": [
       {
        "hfov": 0,
        "yaw": -159.78,
        "image": {
         "levels": [
          {
           "height": 1,
           "width": 1,
           "url": "media/panorama_4DEBC1BC_411E_B0BA_41C2_8D75AEE4E70B_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 94.51
       }
      ],
      "enabledInCardboard": true,
      "useHandCursor": true,
      "id": "overlay_4DEA61BC_411E_B0BA_41C2_95BA4BBA7507",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_4C597F40_411B_91CA_41B3_3FEECDEB1412, this.camera_4B1DD2A4_5162_6AF4_41C3_119A27637009); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 5); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 8); this.mainPlayList.set('selectedIndex', 7)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "yaw": -159.78,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 0,
        "image": {
         "levels": [
          {
           "height": 1,
           "width": 1,
           "url": "media/panorama_4DEBC1BC_411E_B0BA_41C2_8D75AEE4E70B_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 94.51
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 720,
       "width": 1280,
       "url": "media/panorama_4DEBC1BC_411E_B0BA_41C2_8D75AEE4E70B_hq.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_4DEBC1BC_411E_B0BA_41C2_8D75AEE4E70B_t.jpg",
  "id": "panorama_4DEBC1BC_411E_B0BA_41C2_8D75AEE4E70B",
  "mapLocations": [
   {
    "x": 303.34,
    "map": {
     "fieldOfViewOverlayInsideColor": "#999999",
     "minimumZoomFactor": 0.5,
     "width": 1468,
     "id": "map_4E02A832_427B_EE04_41CC_8E1CEC03E8D3",
     "initialZoomFactor": 1,
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
        "class": "HotspotMapOverlayImage",
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
     "class": "Map",
     "fieldOfViewOverlayOutsideColor": "#000000",
     "scaleMode": "fit_inside",
     "maximumZoomFactor": 1.2
    },
    "y": 415.62,
    "angle": 71.83,
    "class": "PanoramaMapLocation"
   }
  ],
  "hfovMin": 60,
  "label": "Street View",
  "class": "Panorama",
  "hfovMax": 120,
  "hfov": 360,
  "adjacentPanoramas": [
   {
    "distance": 1,
    "panorama": {
     "hfovMax": 120,
     "frames": [
      {
       "thumbnailUrl": "media/panorama_4C5FDE04_4126_734A_41CC_218B1F932217_t.jpg",
       "overlays": [
        {
         "rollOverDisplay": false,
         "maps": [
          {
           "hfov": 19.68,
           "yaw": 105.99,
           "image": {
            "levels": [
             {
              "height": 55,
              "width": 55,
              "url": "media/panorama_4C5FDE04_4126_734A_41CC_218B1F932217_0_HS_0_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -6.32
          }
         ],
         "enabledInCardboard": true,
         "useHandCursor": true,
         "id": "overlay_5D00EDD9_4119_90FD_41C3_E09552F1A551",
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_4C068664_4127_93CA_41A2_D07233B3A2AF, this.camera_4823EEF5_5162_1A57_4178_7DC4A3F0A7AD); this.mainPlayList.set('selectedIndex', 8)",
           "mapColor": "#FF0000",
           "displayTooltipInTouchScreens": true,
           "toolTip": "Bedroom",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "items": [
          {
           "yaw": 105.99,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 19.68,
           "image": {
            "levels": [
             {
              "height": 110,
              "width": 110,
              "url": "media/panorama_4C5FDE04_4126_734A_41CC_218B1F932217_0_HS_0_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -6.32
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
              "url": "media/panorama_4C5FDE04_4126_734A_41CC_218B1F932217_0_HS_1_0_0_map.gif",
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
         "id": "overlay_5CF8495D_411B_91F5_41CC_9ED13A5D2046",
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_4C597F40_411B_91CA_41B3_3FEECDEB1412, this.camera_48381F2B_5162_1BF3_41C0_2A456B972F13); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 5); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 6)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "items": [
          {
           "yaw": -172.21,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 0,
           "image": {
            "levels": [
             {
              "height": 1,
              "width": 1,
              "url": "media/panorama_4C5FDE04_4126_734A_41CC_218B1F932217_0_HS_1_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
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
          "url": "media/panorama_4C5FDE04_4126_734A_41CC_218B1F932217_hq.jpeg",
          "class": "ImageResourceLevel"
         }
        ],
        "class": "ImageResource"
       }
      }
     ],
     "partial": false,
     "pitch": 0,
     "thumbnailUrl": "media/panorama_4C5FDE04_4126_734A_41CC_218B1F932217_t.jpg",
     "id": "panorama_4C5FDE04_4126_734A_41CC_218B1F932217",
     "hfovMin": 60,
     "label": "Double Bedroom",
     "class": "Panorama",
     "hfov": 360,
     "adjacentPanoramas": [
      {
       "distance": 1,
       "panorama": {
        "hfovMax": 120,
        "frames": [
         {
          "thumbnailUrl": "media/panorama_4C1BD32D_4126_915A_41CF_10469E86A717_t.jpg",
          "overlays": [
           {
            "rollOverDisplay": false,
            "maps": [
             {
              "hfov": 16.56,
              "yaw": 165.48,
              "image": {
               "levels": [
                {
                 "height": 80,
                 "width": 80,
                 "url": "media/panorama_4C1BD32D_4126_915A_41CF_10469E86A717_0_HS_0_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -30.39
             }
            ],
            "enabledInCardboard": true,
            "useHandCursor": true,
            "id": "overlay_56B4E471_4166_B7CD_41AC_8EFD6E00D471",
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_4C597F40_411B_91CA_41B3_3FEECDEB1412, this.camera_489A7FAB_5162_1AFC_41D4_302BF768E34D); this.mainPlayList.set('selectedIndex', 5)",
              "mapColor": "#FF0000",
              "displayTooltipInTouchScreens": true,
              "toolTip": "Balcony",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "items": [
             {
              "yaw": 165.48,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 16.56,
              "image": {
               "levels": [
                {
                 "height": 160,
                 "width": 160,
                 "url": "media/panorama_4C1BD32D_4126_915A_41CF_10469E86A717_0_HS_0_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -30.39
             }
            ]
           },
           {
            "rollOverDisplay": false,
            "maps": [
             {
              "hfov": 17.28,
              "yaw": 82.73,
              "image": {
               "levels": [
                {
                 "height": 75,
                 "width": 75,
                 "url": "media/panorama_4C1BD32D_4126_915A_41CF_10469E86A717_0_HS_2_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -16.22
             }
            ],
            "enabledInCardboard": true,
            "useHandCursor": true,
            "id": "overlay_45BC55BA_50A2_6EDC_41C3_9C07EBD88FFA",
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_4C63FF21_4126_914D_41B9_FA0A4C032B16, this.camera_48658F6A_5162_1A7C_41C6_D2E7C37D6B1F); this.mainPlayList.set('selectedIndex', 6)",
              "mapColor": "#FF0000",
              "displayTooltipInTouchScreens": true,
              "toolTip": "WC",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "items": [
             {
              "yaw": 82.73,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 17.28,
              "image": {
               "levels": [
                {
                 "height": 150,
                 "width": 150,
                 "url": "media/panorama_4C1BD32D_4126_915A_41CF_10469E86A717_0_HS_2_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -16.22
             }
            ]
           },
           {
            "rollOverDisplay": false,
            "maps": [
             {
              "hfov": 14.39,
              "yaw": 33.7,
              "image": {
               "levels": [
                {
                 "height": 60,
                 "width": 60,
                 "url": "media/panorama_4C1BD32D_4126_915A_41CF_10469E86A717_0_HS_3_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -1.61
             }
            ],
            "enabledInCardboard": true,
            "useHandCursor": true,
            "id": "overlay_43546D3C_50A6_1FD4_41D0_AE21C196DAAA",
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_4C5FDE04_4126_734A_41CC_218B1F932217, this.camera_4841EF3B_5162_1BDC_41D2_D8C0FAB346A1); this.mainPlayList.set('selectedIndex', 7)",
              "mapColor": "#FF0000",
              "displayTooltipInTouchScreens": true,
              "toolTip": "Double Bedroom",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "items": [
             {
              "yaw": 33.7,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 14.39,
              "image": {
               "levels": [
                {
                 "height": 120,
                 "width": 120,
                 "url": "media/panorama_4C1BD32D_4126_915A_41CF_10469E86A717_0_HS_3_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -1.61
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
                 "url": "media/panorama_4C1BD32D_4126_915A_41CF_10469E86A717_0_HS_1_0_0_map.gif",
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
            "id": "overlay_59030146_4166_91D6_41CD_C4AD0DEB2297",
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_4DEBC1BC_411E_B0BA_41C2_8D75AEE4E70B, this.camera_48945FA1_5162_1AEC_41C4_558328E20B26); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 8)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "items": [
             {
              "yaw": -162.92,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 0,
              "image": {
               "levels": [
                {
                 "height": 1,
                 "width": 1,
                 "url": "media/panorama_4C1BD32D_4126_915A_41CF_10469E86A717_0_HS_1_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
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
             "url": "media/panorama_4C1BD32D_4126_915A_41CF_10469E86A717_hq.jpeg",
             "class": "ImageResourceLevel"
            }
           ],
           "class": "ImageResource"
          }
         }
        ],
        "partial": false,
        "pitch": 0,
        "thumbnailUrl": "media/panorama_4C1BD32D_4126_915A_41CF_10469E86A717_t.jpg",
        "id": "panorama_4C1BD32D_4126_915A_41CF_10469E86A717",
        "hfovMin": 60,
        "label": "Master Bedroom",
        "class": "Panorama",
        "hfov": 360,
        "adjacentPanoramas": [
         {
          "distance": 1,
          "panorama": "this.panorama_4C5FDE04_4126_734A_41CC_218B1F932217",
          "yaw": 33.7,
          "class": "AdjacentPanorama",
          "backwardYaw": -172.21
         },
         {
          "distance": 1,
          "panorama": {
           "hfovMax": 120,
           "frames": [
            {
             "thumbnailUrl": "media/panorama_4D1613E3_4119_90CE_41CC_DF7832021B96_t.jpg",
             "overlays": [
              {
               "rollOverDisplay": false,
               "maps": [
                {
                 "hfov": 18.15,
                 "yaw": -10.55,
                 "image": {
                  "levels": [
                   {
                    "height": 32,
                    "width": 32,
                    "url": "media/panorama_4D1613E3_4119_90CE_41CC_DF7832021B96_0_HS_0_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -6.92
                }
               ],
               "enabledInCardboard": true,
               "useHandCursor": true,
               "id": "overlay_4D1603E3_4119_90CE_41C1_00D48FCCCA41",
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_4C046DCD_411A_B0DA_41CD_92ADD7E360C8, this.camera_48E47FDE_5162_1A54_41B7_8D26CB56AD79); this.mainPlayList.set('selectedIndex', 2)",
                 "mapColor": "#FF0000",
                 "displayTooltipInTouchScreens": true,
                 "toolTip": "Swimming Pool",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "items": [
                {
                 "yaw": -10.55,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 18.15,
                 "image": {
                  "levels": [
                   {
                    "height": 65,
                    "width": 65,
                    "url": "media/panorama_4D1613E3_4119_90CE_41CC_DF7832021B96_0_HS_0_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -6.92
                }
               ]
              },
              {
               "rollOverDisplay": true,
               "maps": [
                {
                 "hfov": 0,
                 "yaw": -171.93,
                 "image": {
                  "levels": [
                   {
                    "height": 1,
                    "width": 1,
                    "url": "media/panorama_4D1613E3_4119_90CE_41CC_DF7832021B96_0_HS_1_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": 97.03
                }
               ],
               "enabledInCardboard": true,
               "useHandCursor": true,
               "id": "overlay_4D11E3E3_4119_90CE_41AC_D4FCB2474918",
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_4C597F40_411B_91CA_41B3_3FEECDEB1412, this.camera_4B134006_5162_65B5_41CD_1778B5E01030); this.mainPlayList.set('selectedIndex', 5); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 8); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 0)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "items": [
                {
                 "yaw": -171.93,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 0,
                 "image": {
                  "levels": [
                   {
                    "height": 1,
                    "width": 1,
                    "url": "media/panorama_4D1613E3_4119_90CE_41CC_DF7832021B96_0_HS_1_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": 97.03
                }
               ]
              }
             ],
             "class": "SphericPanoramaFrame",
             "sphere": {
              "levels": [
               {
                "height": 720,
                "width": 1280,
                "url": "media/panorama_4D1613E3_4119_90CE_41CC_DF7832021B96_hq.jpeg",
                "class": "ImageResourceLevel"
               }
              ],
              "class": "ImageResource"
             }
            }
           ],
           "partial": false,
           "pitch": 0,
           "thumbnailUrl": "media/panorama_4D1613E3_4119_90CE_41CC_DF7832021B96_t.jpg",
           "id": "panorama_4D1613E3_4119_90CE_41CC_DF7832021B96",
           "hfovMin": 60,
           "label": "Entrance",
           "class": "Panorama",
           "hfov": 360,
           "adjacentPanoramas": [
            {
             "distance": 1,
             "panorama": "this.panorama_4C5FDE04_4126_734A_41CC_218B1F932217",
             "yaw": -171.93,
             "class": "AdjacentPanorama",
             "backwardYaw": -172.21
            },
            {
             "distance": 1,
             "panorama": "this.panorama_4C1BD32D_4126_915A_41CF_10469E86A717",
             "yaw": -171.93,
             "class": "AdjacentPanorama",
             "backwardYaw": -162.92
            },
            {
             "distance": 1,
             "panorama": {
              "hfovMax": 120,
              "frames": [
               {
                "thumbnailUrl": "media/panorama_4C09B820_411A_9F4A_418C_3401DFC19214_t.jpg",
                "overlays": [
                 {
                  "rollOverDisplay": true,
                  "maps": [
                   {
                    "hfov": 0,
                    "yaw": -169.59,
                    "image": {
                     "levels": [
                      {
                       "height": 1,
                       "width": 1,
                       "url": "media/panorama_4C09B820_411A_9F4A_418C_3401DFC19214_0_HS_5_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": 91.13
                   }
                  ],
                  "enabledInCardboard": true,
                  "useHandCursor": true,
                  "id": "overlay_54E61023_4179_AF4E_41BC_0445381678F4",
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_4C597F40_411B_91CA_41B3_3FEECDEB1412, this.camera_49216081_5162_66AC_41BF_4C915B7DCB5A); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 5); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 3)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "items": [
                   {
                    "yaw": -169.59,
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 0,
                    "image": {
                     "levels": [
                      {
                       "height": 1,
                       "width": 1,
                       "url": "media/panorama_4C09B820_411A_9F4A_418C_3401DFC19214_0_HS_5_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": 91.13
                   }
                  ]
                 },
                 {
                  "rollOverDisplay": false,
                  "maps": [
                   {
                    "hfov": 25,
                    "yaw": -141.19,
                    "image": {
                     "levels": [
                      {
                       "height": 50,
                       "width": 50,
                       "url": "media/panorama_4C09B820_411A_9F4A_418C_3401DFC19214_0_HS_6_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -27.28
                   }
                  ],
                  "enabledInCardboard": true,
                  "useHandCursor": true,
                  "id": "overlay_446BC965_509E_2677_41C0_2D09D3047D11",
                  "areas": [
                   {
                    "click": "this.startPanoramaWithCamera(this.panorama_4C068664_4127_93CA_41A2_D07233B3A2AF, this.camera_49120062_5162_666C_41C7_536950E983CA); this.mainPlayList.set('selectedIndex', 8)",
                    "mapColor": "#FF0000",
                    "displayTooltipInTouchScreens": true,
                    "toolTip": "Bedroom",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "items": [
                   {
                    "yaw": -141.19,
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 25,
                    "image": {
                     "levels": [
                      {
                       "height": 100,
                       "width": 100,
                       "url": "media/panorama_4C09B820_411A_9F4A_418C_3401DFC19214_0_HS_6_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -27.28
                   }
                  ]
                 }
                ],
                "class": "SphericPanoramaFrame",
                "sphere": {
                 "levels": [
                  {
                   "height": 720,
                   "width": 1280,
                   "url": "media/panorama_4C09B820_411A_9F4A_418C_3401DFC19214_hq.jpeg",
                   "class": "ImageResourceLevel"
                  }
                 ],
                 "class": "ImageResource"
                }
               }
              ],
              "partial": false,
              "pitch": 0,
              "thumbnailUrl": "media/panorama_4C09B820_411A_9F4A_418C_3401DFC19214_t.jpg",
              "id": "panorama_4C09B820_411A_9F4A_418C_3401DFC19214",
              "hfovMin": 60,
              "label": "Rooftop",
              "class": "Panorama",
              "hfov": 360,
              "adjacentPanoramas": [
               {
                "distance": 1,
                "panorama": "this.panorama_4C5FDE04_4126_734A_41CC_218B1F932217",
                "yaw": -169.59,
                "class": "AdjacentPanorama",
                "backwardYaw": -172.21
               },
               {
                "distance": 1,
                "panorama": "this.panorama_4C1BD32D_4126_915A_41CF_10469E86A717",
                "yaw": -169.59,
                "class": "AdjacentPanorama",
                "backwardYaw": -162.92
               },
               {
                "distance": 1,
                "panorama": "this.panorama_4D1613E3_4119_90CE_41CC_DF7832021B96",
                "yaw": -169.59,
                "class": "AdjacentPanorama",
                "backwardYaw": -171.93
               },
               {
                "distance": 1,
                "panorama": {
                 "hfovMax": 120,
                 "frames": [
                  {
                   "thumbnailUrl": "media/panorama_4C63FF21_4126_914D_41B9_FA0A4C032B16_t.jpg",
                   "overlays": [
                    {
                     "rollOverDisplay": false,
                     "maps": [
                      {
                       "hfov": 18.76,
                       "yaw": -164.12,
                       "image": {
                        "levels": [
                         {
                          "height": 80,
                          "width": 80,
                          "url": "media/panorama_4C63FF21_4126_914D_41B9_FA0A4C032B16_0_HS_2_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -12.3
                      }
                     ],
                     "enabledInCardboard": true,
                     "useHandCursor": true,
                     "id": "overlay_5E051675_50AE_2A54_41BE_6DB1C5D46F50",
                     "areas": [
                      {
                       "click": "this.startPanoramaWithCamera(this.panorama_4C1BD32D_4126_915A_41CF_10469E86A717, this.camera_492BF095_5162_66D4_41C1_9AF2D4ADA7E4); this.mainPlayList.set('selectedIndex', 4)",
                       "mapColor": "#FF0000",
                       "displayTooltipInTouchScreens": true,
                       "toolTip": "Master Bedroom",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "items": [
                      {
                       "yaw": -164.12,
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 18.76,
                       "image": {
                        "levels": [
                         {
                          "height": 160,
                          "width": 160,
                          "url": "media/panorama_4C63FF21_4126_914D_41B9_FA0A4C032B16_0_HS_2_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -12.3
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
                          "url": "media/panorama_4C63FF21_4126_914D_41B9_FA0A4C032B16_0_HS_1_0_0_map.gif",
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
                     "id": "overlay_5A57E675_416F_93CA_41CF_A4FEA76323D0",
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_4C597F40_411B_91CA_41B3_3FEECDEB1412, this.camera_4951B0DC_5162_6654_41CD_9E4EDC8B4F63); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 5); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 8); this.mainPlayList.set('selectedIndex', 7)",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "items": [
                      {
                       "yaw": -162.92,
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 0,
                       "image": {
                        "levels": [
                         {
                          "height": 1,
                          "width": 1,
                          "url": "media/panorama_4C63FF21_4126_914D_41B9_FA0A4C032B16_0_HS_1_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
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
                      "url": "media/panorama_4C63FF21_4126_914D_41B9_FA0A4C032B16_hq.jpeg",
                      "class": "ImageResourceLevel"
                     }
                    ],
                    "class": "ImageResource"
                   }
                  }
                 ],
                 "partial": false,
                 "pitch": 0,
                 "thumbnailUrl": "media/panorama_4C63FF21_4126_914D_41B9_FA0A4C032B16_t.jpg",
                 "id": "panorama_4C63FF21_4126_914D_41B9_FA0A4C032B16",
                 "hfovMin": 60,
                 "label": "WC",
                 "class": "Panorama",
                 "hfov": 360,
                 "adjacentPanoramas": [
                  {
                   "distance": 1,
                   "panorama": "this.panorama_4C5FDE04_4126_734A_41CC_218B1F932217",
                   "yaw": -162.92,
                   "class": "AdjacentPanorama",
                   "backwardYaw": -172.21
                  },
                  {
                   "distance": 1,
                   "panorama": "this.panorama_4C1BD32D_4126_915A_41CF_10469E86A717",
                   "yaw": -164.12,
                   "class": "AdjacentPanorama",
                   "backwardYaw": 82.73
                  },
                  {
                   "distance": 1,
                   "panorama": "this.panorama_4D1613E3_4119_90CE_41CC_DF7832021B96",
                   "yaw": -162.92,
                   "class": "AdjacentPanorama",
                   "backwardYaw": -171.93
                  },
                  {
                   "distance": 1,
                   "panorama": "this.panorama_4C09B820_411A_9F4A_418C_3401DFC19214",
                   "yaw": -162.92,
                   "class": "AdjacentPanorama",
                   "backwardYaw": -169.59
                  },
                  {
                   "distance": 1,
                   "panorama": {
                    "hfovMax": 120,
                    "frames": [
                     {
                      "thumbnailUrl": "media/panorama_4C046DCD_411A_B0DA_41CD_92ADD7E360C8_t.jpg",
                      "overlays": [
                       {
                        "rollOverDisplay": false,
                        "maps": [
                         {
                          "hfov": 18.1,
                          "yaw": 161.75,
                          "image": {
                           "levels": [
                            {
                             "height": 35,
                             "width": 35,
                             "url": "media/panorama_4C046DCD_411A_B0DA_41CD_92ADD7E360C8_0_HS_0_0_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": -23.17
                         }
                        ],
                        "enabledInCardboard": true,
                        "useHandCursor": true,
                        "id": "overlay_4C047DCD_411A_B0DA_41CC_338A0B5A8E7B",
                        "areas": [
                         {
                          "click": "this.startPanoramaWithCamera(this.panorama_4C0707C9_4119_90DD_41C2_22B8691226F2, this.camera_4990E121_5162_67EC_41CD_80F252D3C1BC); this.mainPlayList.set('selectedIndex', 3)",
                          "mapColor": "#FF0000",
                          "displayTooltipInTouchScreens": true,
                          "toolTip": "Living Room",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "items": [
                         {
                          "yaw": 161.75,
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 18.1,
                          "image": {
                           "levels": [
                            {
                             "height": 70,
                             "width": 70,
                             "url": "media/panorama_4C046DCD_411A_B0DA_41CD_92ADD7E360C8_0_HS_0_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -23.17
                         }
                        ]
                       },
                       {
                        "rollOverDisplay": true,
                        "maps": [
                         {
                          "hfov": 0,
                          "yaw": -162.42,
                          "image": {
                           "levels": [
                            {
                             "height": 1,
                             "width": 1,
                             "url": "media/panorama_4C046DCD_411A_B0DA_41CD_92ADD7E360C8_0_HS_1_0_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": 95.93
                         }
                        ],
                        "enabledInCardboard": true,
                        "useHandCursor": true,
                        "id": "overlay_4C044DCD_411A_B0DA_41C9_57A3E5C6891B",
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_4C597F40_411B_91CA_41B3_3FEECDEB1412, this.camera_49AEC12D_5162_67F7_41BF_C38A570A73CA); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 8); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 5)",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "items": [
                         {
                          "yaw": -162.42,
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 0,
                          "image": {
                           "levels": [
                            {
                             "height": 1,
                             "width": 1,
                             "url": "media/panorama_4C046DCD_411A_B0DA_41CD_92ADD7E360C8_0_HS_1_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": 95.93
                         }
                        ]
                       }
                      ],
                      "class": "SphericPanoramaFrame",
                      "sphere": {
                       "levels": [
                        {
                         "height": 720,
                         "width": 1280,
                         "url": "media/panorama_4C046DCD_411A_B0DA_41CD_92ADD7E360C8_hq.jpeg",
                         "class": "ImageResourceLevel"
                        }
                       ],
                       "class": "ImageResource"
                      }
                     }
                    ],
                    "partial": false,
                    "pitch": 0,
                    "thumbnailUrl": "media/panorama_4C046DCD_411A_B0DA_41CD_92ADD7E360C8_t.jpg",
                    "id": "panorama_4C046DCD_411A_B0DA_41CD_92ADD7E360C8",
                    "hfovMin": 60,
                    "label": "Swimming Pool",
                    "class": "Panorama",
                    "hfov": 360,
                    "adjacentPanoramas": [
                     {
                      "distance": 1,
                      "panorama": "this.panorama_4C5FDE04_4126_734A_41CC_218B1F932217",
                      "yaw": -162.42,
                      "class": "AdjacentPanorama",
                      "backwardYaw": -172.21
                     },
                     {
                      "distance": 1,
                      "panorama": "this.panorama_4C1BD32D_4126_915A_41CF_10469E86A717",
                      "yaw": -162.42,
                      "class": "AdjacentPanorama",
                      "backwardYaw": -162.92
                     },
                     {
                      "distance": 1,
                      "panorama": "this.panorama_4D1613E3_4119_90CE_41CC_DF7832021B96",
                      "yaw": -162.42,
                      "class": "AdjacentPanorama",
                      "backwardYaw": -10.55
                     },
                     {
                      "distance": 1,
                      "panorama": "this.panorama_4C09B820_411A_9F4A_418C_3401DFC19214",
                      "yaw": -162.42,
                      "class": "AdjacentPanorama",
                      "backwardYaw": -169.59
                     },
                     {
                      "distance": 1,
                      "panorama": "this.panorama_4C63FF21_4126_914D_41B9_FA0A4C032B16",
                      "yaw": -162.42,
                      "class": "AdjacentPanorama",
                      "backwardYaw": -162.92
                     },
                     {
                      "distance": 1,
                      "panorama": {
                       "hfovMax": 120,
                       "frames": [
                        {
                         "thumbnailUrl": "media/panorama_4C068664_4127_93CA_41A2_D07233B3A2AF_t.jpg",
                         "overlays": [
                          {
                           "rollOverDisplay": false,
                           "maps": [
                            {
                             "hfov": 18.96,
                             "yaw": 106.19,
                             "image": {
                              "levels": [
                               {
                                "height": 80,
                                "width": 80,
                                "url": "media/panorama_4C068664_4127_93CA_41A2_D07233B3A2AF_0_HS_0_0_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": -9.03
                            }
                           ],
                           "enabledInCardboard": true,
                           "useHandCursor": true,
                           "id": "overlay_5B8E9A3B_411A_73BC_41C5_0ED42A574E99",
                           "areas": [
                            {
                             "click": "this.startPanoramaWithCamera(this.panorama_4C09B820_411A_9F4A_418C_3401DFC19214, this.camera_49D96156_5162_6654_41C8_9A55796ED821); this.mainPlayList.set('selectedIndex', 9)",
                             "mapColor": "#FF0000",
                             "displayTooltipInTouchScreens": true,
                             "toolTip": "Rooftop",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "items": [
                            {
                             "yaw": 106.19,
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 18.96,
                             "image": {
                              "levels": [
                               {
                                "height": 160,
                                "width": 160,
                                "url": "media/panorama_4C068664_4127_93CA_41A2_D07233B3A2AF_0_HS_0_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -9.03
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
                                "url": "media/panorama_4C068664_4127_93CA_41A2_D07233B3A2AF_0_HS_1_0_0_map.gif",
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
                           "id": "overlay_5AB597AD_4119_915A_41D0_1E9920DC79B5",
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_4C597F40_411B_91CA_41B3_3FEECDEB1412, this.camera_4825E189_5162_66BC_41C0_98C8D7982B32); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 5); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 7)",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "items": [
                            {
                             "yaw": -170.2,
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 0,
                             "image": {
                              "levels": [
                               {
                                "height": 1,
                                "width": 1,
                                "url": "media/panorama_4C068664_4127_93CA_41A2_D07233B3A2AF_0_HS_1_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
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
                            "url": "media/panorama_4C068664_4127_93CA_41A2_D07233B3A2AF_hq.jpeg",
                            "class": "ImageResourceLevel"
                           }
                          ],
                          "class": "ImageResource"
                         }
                        }
                       ],
                       "partial": false,
                       "pitch": 0,
                       "thumbnailUrl": "media/panorama_4C068664_4127_93CA_41A2_D07233B3A2AF_t.jpg",
                       "id": "panorama_4C068664_4127_93CA_41A2_D07233B3A2AF",
                       "hfovMin": 60,
                       "label": "Bedroom",
                       "class": "Panorama",
                       "hfov": 360,
                       "adjacentPanoramas": [
                        {
                         "distance": 1,
                         "panorama": "this.panorama_4C5FDE04_4126_734A_41CC_218B1F932217",
                         "yaw": -170.2,
                         "class": "AdjacentPanorama",
                         "backwardYaw": 105.99
                        },
                        {
                         "distance": 1,
                         "panorama": "this.panorama_4C1BD32D_4126_915A_41CF_10469E86A717",
                         "yaw": -170.2,
                         "class": "AdjacentPanorama",
                         "backwardYaw": -162.92
                        },
                        {
                         "distance": 1,
                         "panorama": "this.panorama_4D1613E3_4119_90CE_41CC_DF7832021B96",
                         "yaw": -170.2,
                         "class": "AdjacentPanorama",
                         "backwardYaw": -171.93
                        },
                        {
                         "distance": 1,
                         "panorama": "this.panorama_4C09B820_411A_9F4A_418C_3401DFC19214",
                         "yaw": 106.19,
                         "class": "AdjacentPanorama",
                         "backwardYaw": -141.19
                        },
                        {
                         "distance": 1,
                         "panorama": "this.panorama_4C63FF21_4126_914D_41B9_FA0A4C032B16",
                         "yaw": -170.2,
                         "class": "AdjacentPanorama",
                         "backwardYaw": -162.92
                        },
                        {
                         "distance": 1,
                         "panorama": "this.panorama_4C046DCD_411A_B0DA_41CD_92ADD7E360C8",
                         "yaw": -170.2,
                         "class": "AdjacentPanorama",
                         "backwardYaw": -162.42
                        },
                        {
                         "distance": 1,
                         "panorama": {
                          "hfovMax": 120,
                          "frames": [
                           {
                            "thumbnailUrl": "media/panorama_4C0707C9_4119_90DD_41C2_22B8691226F2_t.jpg",
                            "overlays": [
                             {
                              "rollOverDisplay": false,
                              "maps": [
                               {
                                "hfov": 17.93,
                                "yaw": 40.78,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 75,
                                   "width": 75,
                                   "url": "media/panorama_4C0707C9_4119_90DD_41C2_22B8691226F2_0_HS_0_0_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": 4.88
                               }
                              ],
                              "enabledInCardboard": true,
                              "useHandCursor": true,
                              "id": "overlay_4C0737C9_4119_90DD_419A_AE2A022FED96",
                              "areas": [
                               {
                                "click": "this.startPanoramaWithCamera(this.panorama_4C1BD32D_4126_915A_41CF_10469E86A717, this.camera_4839719D_5162_66D4_41D4_1C6AA755F45A); this.mainPlayList.set('selectedIndex', 4)",
                                "mapColor": "#FF0000",
                                "displayTooltipInTouchScreens": true,
                                "toolTip": "Master Bedroom",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "items": [
                               {
                                "yaw": 40.78,
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 17.93,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 150,
                                   "width": 150,
                                   "url": "media/panorama_4C0707C9_4119_90DD_41C2_22B8691226F2_0_HS_0_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": 4.88
                               }
                              ]
                             },
                             {
                              "rollOverDisplay": true,
                              "maps": [
                               {
                                "hfov": 0,
                                "yaw": -167.69,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 1,
                                   "width": 1,
                                   "url": "media/panorama_4C0707C9_4119_90DD_41C2_22B8691226F2_0_HS_1_0_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": 86.48
                               }
                              ],
                              "enabledInCardboard": true,
                              "useHandCursor": true,
                              "id": "overlay_4C0727D0_4119_90CA_41CF_9F09FB3AFB60",
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_4C597F40_411B_91CA_41B3_3FEECDEB1412, this.camera_4899620D_5162_65B4_41CF_FE533A780941); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 5); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 8); this.mainPlayList.set('selectedIndex', 7)",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "items": [
                               {
                                "yaw": -167.69,
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 0,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 1,
                                   "width": 1,
                                   "url": "media/panorama_4C0707C9_4119_90DD_41C2_22B8691226F2_0_HS_1_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": 86.48
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
                               "url": "media/panorama_4C0707C9_4119_90DD_41C2_22B8691226F2_hq.jpeg",
                               "class": "ImageResourceLevel"
                              }
                             ],
                             "class": "ImageResource"
                            }
                           }
                          ],
                          "partial": false,
                          "pitch": 0,
                          "thumbnailUrl": "media/panorama_4C0707C9_4119_90DD_41C2_22B8691226F2_t.jpg",
                          "id": "panorama_4C0707C9_4119_90DD_41C2_22B8691226F2",
                          "hfovMin": 60,
                          "label": "Living Room",
                          "class": "Panorama",
                          "hfov": 360,
                          "adjacentPanoramas": [
                           {
                            "distance": 1,
                            "panorama": "this.panorama_4C5FDE04_4126_734A_41CC_218B1F932217",
                            "yaw": -167.69,
                            "class": "AdjacentPanorama",
                            "backwardYaw": -172.21
                           },
                           {
                            "distance": 1,
                            "panorama": "this.panorama_4C1BD32D_4126_915A_41CF_10469E86A717",
                            "yaw": 40.78,
                            "class": "AdjacentPanorama",
                            "backwardYaw": -162.92
                           },
                           {
                            "distance": 1,
                            "panorama": "this.panorama_4D1613E3_4119_90CE_41CC_DF7832021B96",
                            "yaw": -167.69,
                            "class": "AdjacentPanorama",
                            "backwardYaw": -171.93
                           },
                           {
                            "distance": 1,
                            "panorama": "this.panorama_4C09B820_411A_9F4A_418C_3401DFC19214",
                            "yaw": -167.69,
                            "class": "AdjacentPanorama",
                            "backwardYaw": -169.59
                           },
                           {
                            "distance": 1,
                            "panorama": "this.panorama_4C63FF21_4126_914D_41B9_FA0A4C032B16",
                            "yaw": -167.69,
                            "class": "AdjacentPanorama",
                            "backwardYaw": -162.92
                           },
                           {
                            "distance": 1,
                            "panorama": "this.panorama_4C046DCD_411A_B0DA_41CD_92ADD7E360C8",
                            "yaw": -167.69,
                            "class": "AdjacentPanorama",
                            "backwardYaw": 161.75
                           },
                           {
                            "distance": 1,
                            "panorama": "this.panorama_4C068664_4127_93CA_41A2_D07233B3A2AF",
                            "yaw": -167.69,
                            "class": "AdjacentPanorama",
                            "backwardYaw": -170.2
                           },
                           {
                            "distance": 1,
                            "panorama": "this.panorama_4DEBC1BC_411E_B0BA_41C2_8D75AEE4E70B",
                            "yaw": -167.69,
                            "class": "AdjacentPanorama",
                            "backwardYaw": -159.78
                           },
                           {
                            "distance": 1,
                            "panorama": {
                             "hfovMax": 120,
                             "frames": [
                              {
                               "thumbnailUrl": "media/panorama_4C597F40_411B_91CA_41B3_3FEECDEB1412_t.jpg",
                               "overlays": [
                                {
                                 "rollOverDisplay": false,
                                 "maps": [
                                  {
                                   "hfov": 19.1,
                                   "yaw": -157.64,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 37,
                                      "width": 37,
                                      "url": "media/panorama_4C597F40_411B_91CA_41B3_3FEECDEB1412_0_HS_0_0_0_map.gif",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": -25.13
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "useHandCursor": true,
                                 "id": "overlay_4C596F40_411B_91CA_41C6_B66A9F50A105",
                                 "areas": [
                                  {
                                   "click": "this.startPanoramaWithCamera(this.panorama_4C1BD32D_4126_915A_41CF_10469E86A717, this.camera_4B3092C4_5162_6AB5_41C2_B280B0729AF0); this.mainPlayList.set('selectedIndex', 4)",
                                   "mapColor": "#FF0000",
                                   "displayTooltipInTouchScreens": true,
                                   "toolTip": "Master Bedroom",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "class": "HotspotPanoramaOverlay",
                                 "items": [
                                  {
                                   "yaw": -157.64,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 19.1,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 75,
                                      "width": 75,
                                      "url": "media/panorama_4C597F40_411B_91CA_41B3_3FEECDEB1412_0_HS_0_0.png",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": -25.13
                                  }
                                 ]
                                },
                                {
                                 "rollOverDisplay": true,
                                 "maps": [
                                  {
                                   "hfov": 0,
                                   "yaw": -164.04,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 1,
                                      "width": 1,
                                      "url": "media/panorama_4C597F40_411B_91CA_41B3_3FEECDEB1412_0_HS_1_0_0_map.gif",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": 89.55
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "useHandCursor": true,
                                 "id": "overlay_4C593F40_411B_91CA_41C5_23B2BACF2F7B",
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_4DEBC1BC_411E_B0BA_41C2_8D75AEE4E70B, this.camera_4B92E30C_5162_6BB4_41C2_0A98E075D171); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 8); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 6)",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "class": "HotspotPanoramaOverlay",
                                 "items": [
                                  {
                                   "yaw": -164.04,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 0,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 1,
                                      "width": 1,
                                      "url": "media/panorama_4C597F40_411B_91CA_41B3_3FEECDEB1412_0_HS_1_0.png",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": 89.55
                                  }
                                 ]
                                }
                               ],
                               "class": "SphericPanoramaFrame",
                               "sphere": {
                                "levels": [
                                 {
                                  "height": 720,
                                  "width": 1280,
                                  "url": "media/panorama_4C597F40_411B_91CA_41B3_3FEECDEB1412_hq.jpeg",
                                  "class": "ImageResourceLevel"
                                 }
                                ],
                                "class": "ImageResource"
                               }
                              }
                             ],
                             "partial": false,
                             "pitch": 0,
                             "thumbnailUrl": "media/panorama_4C597F40_411B_91CA_41B3_3FEECDEB1412_t.jpg",
                             "id": "panorama_4C597F40_411B_91CA_41B3_3FEECDEB1412",
                             "hfovMin": 60,
                             "label": "Balcony",
                             "class": "Panorama",
                             "hfov": 360,
                             "adjacentPanoramas": [
                              {
                               "distance": 1,
                               "panorama": "this.panorama_4C5FDE04_4126_734A_41CC_218B1F932217",
                               "yaw": -164.04,
                               "class": "AdjacentPanorama",
                               "backwardYaw": -172.21
                              },
                              {
                               "distance": 1,
                               "panorama": "this.panorama_4C1BD32D_4126_915A_41CF_10469E86A717",
                               "yaw": -157.64,
                               "class": "AdjacentPanorama",
                               "backwardYaw": 165.48
                              },
                              {
                               "distance": 1,
                               "panorama": "this.panorama_4D1613E3_4119_90CE_41CC_DF7832021B96",
                               "yaw": -164.04,
                               "class": "AdjacentPanorama",
                               "backwardYaw": -171.93
                              },
                              {
                               "distance": 1,
                               "panorama": "this.panorama_4C09B820_411A_9F4A_418C_3401DFC19214",
                               "yaw": -164.04,
                               "class": "AdjacentPanorama",
                               "backwardYaw": -169.59
                              },
                              {
                               "distance": 1,
                               "panorama": "this.panorama_4C63FF21_4126_914D_41B9_FA0A4C032B16",
                               "yaw": -164.04,
                               "class": "AdjacentPanorama",
                               "backwardYaw": -162.92
                              },
                              {
                               "distance": 1,
                               "panorama": "this.panorama_4C046DCD_411A_B0DA_41CD_92ADD7E360C8",
                               "yaw": -164.04,
                               "class": "AdjacentPanorama",
                               "backwardYaw": -162.42
                              },
                              {
                               "distance": 1,
                               "panorama": "this.panorama_4C068664_4127_93CA_41A2_D07233B3A2AF",
                               "yaw": -164.04,
                               "class": "AdjacentPanorama",
                               "backwardYaw": -170.2
                              },
                              {
                               "distance": 1,
                               "panorama": "this.panorama_4C0707C9_4119_90DD_41C2_22B8691226F2",
                               "yaw": -164.04,
                               "class": "AdjacentPanorama",
                               "backwardYaw": -167.69
                              },
                              {
                               "distance": 1,
                               "panorama": "this.panorama_4DEBC1BC_411E_B0BA_41C2_8D75AEE4E70B",
                               "yaw": -164.04,
                               "class": "AdjacentPanorama",
                               "backwardYaw": -159.78
                              }
                             ],
                             "vfov": 180
                            },
                            "yaw": -167.69,
                            "class": "AdjacentPanorama",
                            "backwardYaw": -164.04
                           }
                          ],
                          "vfov": 180
                         },
                         "yaw": -170.2,
                         "class": "AdjacentPanorama",
                         "backwardYaw": -167.69
                        },
                        {
                         "distance": 1,
                         "panorama": "this.panorama_4DEBC1BC_411E_B0BA_41C2_8D75AEE4E70B",
                         "yaw": -170.2,
                         "class": "AdjacentPanorama",
                         "backwardYaw": -159.78
                        },
                        {
                         "distance": 1,
                         "panorama": "this.panorama_4C597F40_411B_91CA_41B3_3FEECDEB1412",
                         "yaw": -170.2,
                         "class": "AdjacentPanorama",
                         "backwardYaw": -164.04
                        }
                       ],
                       "vfov": 180
                      },
                      "yaw": -162.42,
                      "class": "AdjacentPanorama",
                      "backwardYaw": -170.2
                     },
                     {
                      "distance": 1,
                      "panorama": "this.panorama_4C0707C9_4119_90DD_41C2_22B8691226F2",
                      "yaw": 161.75,
                      "class": "AdjacentPanorama",
                      "backwardYaw": -167.69
                     },
                     {
                      "distance": 1,
                      "panorama": "this.panorama_4DEBC1BC_411E_B0BA_41C2_8D75AEE4E70B",
                      "yaw": -162.42,
                      "class": "AdjacentPanorama",
                      "backwardYaw": -159.78
                     },
                     {
                      "distance": 1,
                      "panorama": "this.panorama_4C597F40_411B_91CA_41B3_3FEECDEB1412",
                      "yaw": -162.42,
                      "class": "AdjacentPanorama",
                      "backwardYaw": -164.04
                     }
                    ],
                    "vfov": 180
                   },
                   "yaw": -162.92,
                   "class": "AdjacentPanorama",
                   "backwardYaw": -162.42
                  },
                  {
                   "distance": 1,
                   "panorama": "this.panorama_4C068664_4127_93CA_41A2_D07233B3A2AF",
                   "yaw": -162.92,
                   "class": "AdjacentPanorama",
                   "backwardYaw": -170.2
                  },
                  {
                   "distance": 1,
                   "panorama": "this.panorama_4C0707C9_4119_90DD_41C2_22B8691226F2",
                   "yaw": -162.92,
                   "class": "AdjacentPanorama",
                   "backwardYaw": -167.69
                  },
                  {
                   "distance": 1,
                   "panorama": "this.panorama_4DEBC1BC_411E_B0BA_41C2_8D75AEE4E70B",
                   "yaw": -162.92,
                   "class": "AdjacentPanorama",
                   "backwardYaw": -159.78
                  },
                  {
                   "distance": 1,
                   "panorama": "this.panorama_4C597F40_411B_91CA_41B3_3FEECDEB1412",
                   "yaw": -162.92,
                   "class": "AdjacentPanorama",
                   "backwardYaw": -164.04
                  }
                 ],
                 "vfov": 180
                },
                "yaw": -169.59,
                "class": "AdjacentPanorama",
                "backwardYaw": -162.92
               },
               {
                "distance": 1,
                "panorama": "this.panorama_4C046DCD_411A_B0DA_41CD_92ADD7E360C8",
                "yaw": -169.59,
                "class": "AdjacentPanorama",
                "backwardYaw": -162.42
               },
               {
                "distance": 1,
                "panorama": "this.panorama_4C068664_4127_93CA_41A2_D07233B3A2AF",
                "yaw": -141.19,
                "class": "AdjacentPanorama",
                "backwardYaw": 106.19
               },
               {
                "distance": 1,
                "panorama": "this.panorama_4C0707C9_4119_90DD_41C2_22B8691226F2",
                "yaw": -169.59,
                "class": "AdjacentPanorama",
                "backwardYaw": -167.69
               },
               {
                "distance": 1,
                "panorama": "this.panorama_4DEBC1BC_411E_B0BA_41C2_8D75AEE4E70B",
                "yaw": -169.59,
                "class": "AdjacentPanorama",
                "backwardYaw": -159.78
               },
               {
                "distance": 1,
                "panorama": "this.panorama_4C597F40_411B_91CA_41B3_3FEECDEB1412",
                "yaw": -169.59,
                "class": "AdjacentPanorama",
                "backwardYaw": -164.04
               }
              ],
              "vfov": 180
             },
             "yaw": -171.93,
             "class": "AdjacentPanorama",
             "backwardYaw": -169.59
            },
            {
             "distance": 1,
             "panorama": "this.panorama_4C63FF21_4126_914D_41B9_FA0A4C032B16",
             "yaw": -171.93,
             "class": "AdjacentPanorama",
             "backwardYaw": -162.92
            },
            {
             "distance": 1,
             "panorama": "this.panorama_4C046DCD_411A_B0DA_41CD_92ADD7E360C8",
             "yaw": -10.55,
             "class": "AdjacentPanorama",
             "backwardYaw": -162.42
            },
            {
             "distance": 1,
             "panorama": "this.panorama_4C068664_4127_93CA_41A2_D07233B3A2AF",
             "yaw": -171.93,
             "class": "AdjacentPanorama",
             "backwardYaw": -170.2
            },
            {
             "distance": 1,
             "panorama": "this.panorama_4C0707C9_4119_90DD_41C2_22B8691226F2",
             "yaw": -171.93,
             "class": "AdjacentPanorama",
             "backwardYaw": -167.69
            },
            {
             "distance": 1,
             "panorama": "this.panorama_4DEBC1BC_411E_B0BA_41C2_8D75AEE4E70B",
             "yaw": -171.93,
             "class": "AdjacentPanorama",
             "backwardYaw": -1.73
            },
            {
             "distance": 1,
             "panorama": "this.panorama_4C597F40_411B_91CA_41B3_3FEECDEB1412",
             "yaw": -171.93,
             "class": "AdjacentPanorama",
             "backwardYaw": -164.04
            }
           ],
           "vfov": 180
          },
          "yaw": -162.92,
          "class": "AdjacentPanorama",
          "backwardYaw": -171.93
         },
         {
          "distance": 1,
          "panorama": "this.panorama_4C09B820_411A_9F4A_418C_3401DFC19214",
          "yaw": -162.92,
          "class": "AdjacentPanorama",
          "backwardYaw": -169.59
         },
         {
          "distance": 1,
          "panorama": "this.panorama_4C63FF21_4126_914D_41B9_FA0A4C032B16",
          "yaw": 82.73,
          "class": "AdjacentPanorama",
          "backwardYaw": -164.12
         },
         {
          "distance": 1,
          "panorama": "this.panorama_4C046DCD_411A_B0DA_41CD_92ADD7E360C8",
          "yaw": -162.92,
          "class": "AdjacentPanorama",
          "backwardYaw": -162.42
         },
         {
          "distance": 1,
          "panorama": "this.panorama_4C068664_4127_93CA_41A2_D07233B3A2AF",
          "yaw": -162.92,
          "class": "AdjacentPanorama",
          "backwardYaw": -170.2
         },
         {
          "distance": 1,
          "panorama": "this.panorama_4C0707C9_4119_90DD_41C2_22B8691226F2",
          "yaw": -162.92,
          "class": "AdjacentPanorama",
          "backwardYaw": 40.78
         },
         {
          "distance": 1,
          "panorama": "this.panorama_4DEBC1BC_411E_B0BA_41C2_8D75AEE4E70B",
          "yaw": -162.92,
          "class": "AdjacentPanorama",
          "backwardYaw": -159.78
         },
         {
          "distance": 1,
          "panorama": "this.panorama_4C597F40_411B_91CA_41B3_3FEECDEB1412",
          "yaw": 165.48,
          "class": "AdjacentPanorama",
          "backwardYaw": -157.64
         }
        ],
        "vfov": 180
       },
       "yaw": -172.21,
       "class": "AdjacentPanorama",
       "backwardYaw": 33.7
      },
      {
       "distance": 1,
       "panorama": "this.panorama_4D1613E3_4119_90CE_41CC_DF7832021B96",
       "yaw": -172.21,
       "class": "AdjacentPanorama",
       "backwardYaw": -171.93
      },
      {
       "distance": 1,
       "panorama": "this.panorama_4C09B820_411A_9F4A_418C_3401DFC19214",
       "yaw": -172.21,
       "class": "AdjacentPanorama",
       "backwardYaw": -169.59
      },
      {
       "distance": 1,
       "panorama": "this.panorama_4C63FF21_4126_914D_41B9_FA0A4C032B16",
       "yaw": -172.21,
       "class": "AdjacentPanorama",
       "backwardYaw": -162.92
      },
      {
       "distance": 1,
       "panorama": "this.panorama_4C046DCD_411A_B0DA_41CD_92ADD7E360C8",
       "yaw": -172.21,
       "class": "AdjacentPanorama",
       "backwardYaw": -162.42
      },
      {
       "distance": 1,
       "panorama": "this.panorama_4C068664_4127_93CA_41A2_D07233B3A2AF",
       "yaw": 105.99,
       "class": "AdjacentPanorama",
       "backwardYaw": -170.2
      },
      {
       "distance": 1,
       "panorama": "this.panorama_4C0707C9_4119_90DD_41C2_22B8691226F2",
       "yaw": -172.21,
       "class": "AdjacentPanorama",
       "backwardYaw": -167.69
      },
      {
       "distance": 1,
       "panorama": "this.panorama_4DEBC1BC_411E_B0BA_41C2_8D75AEE4E70B",
       "yaw": -172.21,
       "class": "AdjacentPanorama",
       "backwardYaw": -159.78
      },
      {
       "distance": 1,
       "panorama": "this.panorama_4C597F40_411B_91CA_41B3_3FEECDEB1412",
       "yaw": -172.21,
       "class": "AdjacentPanorama",
       "backwardYaw": -164.04
      }
     ],
     "vfov": 180
    },
    "yaw": -159.78,
    "class": "AdjacentPanorama",
    "backwardYaw": -172.21
   },
   {
    "distance": 1,
    "panorama": "this.panorama_4C1BD32D_4126_915A_41CF_10469E86A717",
    "yaw": -159.78,
    "class": "AdjacentPanorama",
    "backwardYaw": -162.92
   },
   {
    "distance": 1,
    "panorama": "this.panorama_4D1613E3_4119_90CE_41CC_DF7832021B96",
    "yaw": -1.73,
    "class": "AdjacentPanorama",
    "backwardYaw": -171.93
   },
   {
    "distance": 1,
    "panorama": "this.panorama_4C09B820_411A_9F4A_418C_3401DFC19214",
    "yaw": -159.78,
    "class": "AdjacentPanorama",
    "backwardYaw": -169.59
   },
   {
    "distance": 1,
    "panorama": "this.panorama_4C63FF21_4126_914D_41B9_FA0A4C032B16",
    "yaw": -159.78,
    "class": "AdjacentPanorama",
    "backwardYaw": -162.92
   },
   {
    "distance": 1,
    "panorama": "this.panorama_4C046DCD_411A_B0DA_41CD_92ADD7E360C8",
    "yaw": -159.78,
    "class": "AdjacentPanorama",
    "backwardYaw": -162.42
   },
   {
    "distance": 1,
    "panorama": "this.panorama_4C068664_4127_93CA_41A2_D07233B3A2AF",
    "yaw": -159.78,
    "class": "AdjacentPanorama",
    "backwardYaw": -170.2
   },
   {
    "distance": 1,
    "panorama": "this.panorama_4C0707C9_4119_90DD_41C2_22B8691226F2",
    "yaw": -159.78,
    "class": "AdjacentPanorama",
    "backwardYaw": -167.69
   },
   {
    "distance": 1,
    "panorama": "this.panorama_4C597F40_411B_91CA_41B3_3FEECDEB1412",
    "yaw": -159.78,
    "class": "AdjacentPanorama",
    "backwardYaw": -164.04
   }
  ],
  "vfov": 180
 },
 {
  "gyroscopeVerticalDraggingEnabled": true,
  "touchControlMode": "drag_rotation",
  "buttonPlay": "this.IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED",
  "displayPlaybackBar": true,
  "class": "PanoramaPlayer",
  "viewerArea": "this.MainViewer",
  "id": "MainViewerPanoramaPlayer",
  "preloadEnabled": false,
  "buttonToggleHotspots": {
   "verticalAlign": "middle",
   "toolTipBorderRadius": 3,
   "paddingRight": 0,
   "toolTipShadowOpacity": 1,
   "mode": "toggle",
   "maxHeight": 60,
   "paddingLeft": 0,
   "height": "100%",
   "width": "100%",
   "toolTipBorderSize": 1,
   "toolTip": "Hotspots Visibility",
   "minWidth": 1,
   "toolTipTextShadowColor": "#000000",
   "toolTipPaddingLeft": 6,
   "toolTipBorderColor": "#767676",
   "transparencyActive": true,
   "pressedIconURL": "skin/IconButton_80E5955A_8E23_BB05_41CA_43DD61DBAEE9_pressed.png",
   "borderSize": 0,
   "toolTipBackgroundColor": "#000000",
   "class": "IconButton",
   "borderRadius": 0,
   "horizontalAlign": "center",
   "toolTipShadowVerticalLength": 0,
   "minHeight": 1,
   "maxWidth": 60,
   "toolTipOpacity": 0.7,
   "toolTipPaddingBottom": 4,
   "toolTipTextShadowBlurRadius": 3,
   "shadow": false,
   "click": "if(!this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, true, 0, this.effect_CDD059FA_EED0_D223_41DB_70ACFBE986FE, 'showEffect', false) } else if(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, false, 0, this.effect_CDD049FB_EED0_D221_41EB_CA2134B978E0, 'hideEffect', false) }",
   "cursor": "hand",
   "paddingBottom": 0,
   "toolTipFontSize": 14,
   "toolTipShadowHorizontalLength": 0,
   "toolTipShadowColor": "#333333",
   "toolTipShadowBlurRadius": 3,
   "toolTipFontWeight": "normal",
   "id": "IconButton_80E5955A_8E23_BB05_41CA_43DD61DBAEE9",
   "toolTipShadowSpread": 0,
   "toolTipTextShadowOpacity": 0,
   "backgroundOpacity": 0,
   "toolTipFontColor": "#606060",
   "toolTipFontFamily": "Arial",
   "paddingTop": 0,
   "iconURL": "skin/IconButton_80E5955A_8E23_BB05_41CA_43DD61DBAEE9.png",
   "toolTipPaddingTop": 4,
   "toolTipPaddingRight": 6,
   "toolTipFontStyle": "normal"
  },
  "mouseControlMode": "drag_acceleration",
  "buttonStop": [
   "this.IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4",
   "this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB"
  ],
  "buttonCardboardView": {
   "verticalAlign": "middle",
   "paddingRight": 0,
   "mode": "push",
   "maxHeight": 60,
   "paddingLeft": 0,
   "height": "100%",
   "width": "100%",
   "minWidth": 1,
   "transparencyActive": false,
   "borderSize": 0,
   "class": "IconButton",
   "borderRadius": 0,
   "horizontalAlign": "center",
   "minHeight": 1,
   "maxWidth": 60,
   "shadow": false,
   "cursor": "hand",
   "paddingBottom": 0,
   "id": "IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37",
   "backgroundOpacity": 0,
   "paddingTop": 0,
   "iconURL": "skin/IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37.png"
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
   "playbackBarHeight": 10,
   "minWidth": 1,
   "playbackBarHeadWidth": 6,
   "playbackBarProgressBorderSize": 0,
   "class": "ViewerArea",
   "playbackBarBackgroundColorDirection": "vertical",
   "playbackBarRight": 0,
   "playbackBarHeadShadow": true,
   "shadow": false,
   "toolTipShadowVerticalLength": 0,
   "toolTipPaddingBottom": 4,
   "progressBackgroundOpacity": 1,
   "toolTipFontWeight": "normal",
   "progressBarBorderSize": 0,
   "progressBarBorderRadius": 0,
   "progressBorderRadius": 0,
   "playbackBarHeadShadowHorizontalLength": 0,
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
   "toolTipPaddingRight": 6,
   "playbackBarProgressBackgroundColor": [
    "#3399FF"
   ],
   "toolTipBorderRadius": 3,
   "playbackBarHeadBorderRadius": 0,
   "progressLeft": 0,
   "progressBackgroundColorRatios": [
    0
   ],
   "playbackBarHeadBackgroundColor": [
    "#111111",
    "#666666"
   ],
   "playbackBarBorderColor": "#FFFFFF",
   "paddingLeft": 0,
   "playbackBarHeadBorderColor": "#000000",
   "playbackBarProgressOpacity": 1,
   "toolTipBorderSize": 1,
   "toolTipBorderColor": "#767676",
   "playbackBarHeadShadowBlurRadius": 3,
   "toolTipTextShadowColor": "#000000",
   "toolTipPaddingLeft": 6,
   "playbackBarBackgroundOpacity": 1,
   "playbackBarBorderSize": 0,
   "borderSize": 0,
   "toolTipBackgroundColor": "#F6F6F6",
   "playbackBarLeft": 0,
   "playbackBarHeadBackgroundColorDirection": "vertical",
   "toolTipOpacity": 1,
   "playbackBarHeadBackgroundColorRatios": [
    0,
    1
   ],
   "minHeight": 1,
   "toolTipTextShadowBlurRadius": 3,
   "playbackBarHeadHeight": 15,
   "borderRadius": 0,
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
   "bottom": "10%",
   "id": "MapViewer",
   "toolTipShadowHorizontalLength": 0,
   "progressBarBackgroundColorDirection": "vertical",
   "progressBorderColor": "#000000",
   "toolTipFontFamily": "Arial",
   "playbackBarBottom": 0,
   "progressBarBackgroundColor": [
    "#3399FF"
   ],
   "left": "10%",
   "progressBackgroundColor": [
    "#FFFFFF"
   ],
   "progressBorderSize": 0,
   "playbackBarProgressBackgroundColorDirection": "vertical",
   "toolTipPaddingTop": 4,
   "playbackBarHeadShadowVerticalLength": 0,
   "toolTipFontStyle": "normal",
   "right": "10%"
  },
  "movementMode": "constrained",
  "id": "MapViewerMapPlayer",
  "class": "MapPlayer"
 },
 {
  "id": "panorama_4DEBC1BC_411E_B0BA_41C2_8D75AEE4E70B_camera",
  "initialPosition": {
   "yaw": -17.16,
   "class": "PanoramaCameraPosition",
   "pitch": -3.97
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 "this.panorama_4D1613E3_4119_90CE_41CC_DF7832021B96",
 {
  "id": "panorama_4D1613E3_4119_90CE_41CC_DF7832021B96_camera",
  "initialPosition": {
   "yaw": 16.81,
   "class": "PanoramaCameraPosition",
   "pitch": 2.87
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 "this.panorama_4C046DCD_411A_B0DA_41CD_92ADD7E360C8",
 {
  "id": "panorama_4C046DCD_411A_B0DA_41CD_92ADD7E360C8_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 "this.panorama_4C0707C9_4119_90DD_41C2_22B8691226F2",
 {
  "id": "panorama_4C0707C9_4119_90DD_41C2_22B8691226F2_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 "this.panorama_4C1BD32D_4126_915A_41CF_10469E86A717",
 {
  "id": "panorama_4C1BD32D_4126_915A_41CF_10469E86A717_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 "this.panorama_4C597F40_411B_91CA_41B3_3FEECDEB1412",
 {
  "id": "panorama_4C597F40_411B_91CA_41B3_3FEECDEB1412_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 "this.panorama_4C63FF21_4126_914D_41B9_FA0A4C032B16",
 {
  "id": "panorama_4C63FF21_4126_914D_41B9_FA0A4C032B16_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 "this.panorama_4C5FDE04_4126_734A_41CC_218B1F932217",
 {
  "id": "panorama_4C5FDE04_4126_734A_41CC_218B1F932217_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 "this.panorama_4C068664_4127_93CA_41A2_D07233B3A2AF",
 {
  "id": "panorama_4C068664_4127_93CA_41A2_D07233B3A2AF_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 "this.panorama_4C09B820_411A_9F4A_418C_3401DFC19214",
 {
  "id": "panorama_4C09B820_411A_9F4A_418C_3401DFC19214_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "mainPlayList",
  "class": "PlayList",
  "items": [
   {
    "id": "PanoramaPlayListItem_49FEEE82_5162_1AAD_41CA_77571F527F79",
    "media": "this.panorama_4DEBC1BC_411E_B0BA_41C2_8D75AEE4E70B",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_49FEEE82_5162_1AAD_41CA_77571F527F79, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_4DEBC1BC_411E_B0BA_41C2_8D75AEE4E70B_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "media": "this.panorama_4D1613E3_4119_90CE_41CC_DF7832021B96",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_4D1613E3_4119_90CE_41CC_DF7832021B96_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "media": "this.panorama_4C046DCD_411A_B0DA_41CD_92ADD7E360C8",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_4C046DCD_411A_B0DA_41CD_92ADD7E360C8_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "media": "this.panorama_4C0707C9_4119_90DD_41C2_22B8691226F2",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_4C0707C9_4119_90DD_41C2_22B8691226F2_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "media": "this.panorama_4C1BD32D_4126_915A_41CF_10469E86A717",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_4C1BD32D_4126_915A_41CF_10469E86A717_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "media": "this.panorama_4C597F40_411B_91CA_41B3_3FEECDEB1412",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_4C597F40_411B_91CA_41B3_3FEECDEB1412_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "media": "this.panorama_4C63FF21_4126_914D_41B9_FA0A4C032B16",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_4C63FF21_4126_914D_41B9_FA0A4C032B16_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "media": "this.panorama_4C5FDE04_4126_734A_41CC_218B1F932217",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_4C5FDE04_4126_734A_41CC_218B1F932217_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "media": "this.panorama_4C068664_4127_93CA_41A2_D07233B3A2AF",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_4C068664_4127_93CA_41A2_D07233B3A2AF_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 0)",
    "media": "this.panorama_4C09B820_411A_9F4A_418C_3401DFC19214",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_4C09B820_411A_9F4A_418C_3401DFC19214_camera"
   }
  ]
 },
 {
  "id": "ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 0, 1)",
    "media": "this.panorama_4DEBC1BC_411E_B0BA_41C2_8D75AEE4E70B",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_4DEBC1BC_411E_B0BA_41C2_8D75AEE4E70B_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 1, 2)",
    "media": "this.panorama_4D1613E3_4119_90CE_41CC_DF7832021B96",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_4D1613E3_4119_90CE_41CC_DF7832021B96_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 2, 3)",
    "media": "this.panorama_4C046DCD_411A_B0DA_41CD_92ADD7E360C8",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_4C046DCD_411A_B0DA_41CD_92ADD7E360C8_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 3, 4)",
    "media": "this.panorama_4C0707C9_4119_90DD_41C2_22B8691226F2",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_4C0707C9_4119_90DD_41C2_22B8691226F2_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 4, 5)",
    "media": "this.panorama_4C1BD32D_4126_915A_41CF_10469E86A717",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_4C1BD32D_4126_915A_41CF_10469E86A717_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 5, 6)",
    "media": "this.panorama_4C597F40_411B_91CA_41B3_3FEECDEB1412",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_4C597F40_411B_91CA_41B3_3FEECDEB1412_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 6, 7)",
    "media": "this.panorama_4C63FF21_4126_914D_41B9_FA0A4C032B16",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_4C63FF21_4126_914D_41B9_FA0A4C032B16_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 7, 8)",
    "media": "this.panorama_4C5FDE04_4126_734A_41CC_218B1F932217",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_4C5FDE04_4126_734A_41CC_218B1F932217_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 8, 9)",
    "media": "this.panorama_4C068664_4127_93CA_41A2_D07233B3A2AF",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_4C068664_4127_93CA_41A2_D07233B3A2AF_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 9, 0)",
    "media": "this.panorama_4C09B820_411A_9F4A_418C_3401DFC19214",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_4C09B820_411A_9F4A_418C_3401DFC19214_camera"
   }
  ]
 },
 {
  "thumbnailUrl": "media/video_210B394E_3D54_1A60_41A3_CB42BEC0D3EC_t.jpg",
  "label": "DJI_0384",
  "class": "Video",
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
  "scaleMode": "fit_outside"
 },
 {
  "id": "playList_49F10E73_5162_1A6C_41CB_6AB8E809E304",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.registerKey('visibility_Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB', this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB.get('visible')); this.registerKey('visibility_ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472', this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472.get('visible')); this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setComponentVisibility(this.Container_86F3A56C_8E22_5B1D_41CA_9CE53436FE56, false, -1, this.effect_22973FB1_2DD9_0423_41C1_E1E03953DCCE, 'hideEffect', false); this.setComponentVisibility(this.Container_807F782A_8E23_A905_41DE_623121285A09, false, -1, this.effect_22974FB2_2DD9_0421_41BA_84205292D043, 'hideEffect', false); this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, false, -1, this.effect_3876CD6E_2DF9_0421_41C1_F0AB7F279824, 'hideEffect', false); this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, false, -1, this.effect_22899FB3_2DD9_0427_41BB_298AEB3D2851, 'hideEffect', false); this.setComponentVisibility(this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB, true, -1, this.effect_2289DFB3_2DD9_0427_41AE_A35795880BA7, 'showEffect', false)",
    "media": "this.video_210B394E_3D54_1A60_41A3_CB42BEC0D3EC",
    "end": "this.setComponentVisibility(this.Container_86F3A56C_8E22_5B1D_41CA_9CE53436FE56, true, -1, this.effect_22975FB2_2DD9_0421_41B4_7A2443082F44, 'showEffect', false); this.setComponentVisibility(this.Container_86F3A56C_8E22_5B1D_41CA_9CE53436FE56, true, -1, this.effect_22975FB2_2DD9_0421_41B4_7A2443082F44, 'showEffect', false); this.setComponentVisibility(this.Container_807F782A_8E23_A905_41DE_623121285A09, true, -1, this.effect_22977FB2_2DD9_0421_41C1_F53B037346DF, 'showEffect', false); this.setComponentVisibility(this.Container_807F782A_8E23_A905_41DE_623121285A09, true, -1, this.effect_22977FB2_2DD9_0421_41C1_F53B037346DF, 'showEffect', false); if(this.existsKey('visibility_ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472')){ if(this.getKey('visibility_ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472')) { this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, true, -1, this.effect_4B998314_5162_6BD4_41A0_1224F3547DF6, 'showEffect', false); } else { this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, false, -1, this.effect_3876CD6E_2DF9_0421_41C1_F0AB7F279824, 'hideEffect', false); } }; this.unregisterKey('visibility_ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472'); if(this.existsKey('visibility_Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB')){ if(this.getKey('visibility_Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB')) { this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, true, -1, this.effect_4B9A5314_5162_6BD4_41D2_F84561F076E4, 'showEffect', false); } else { this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, false, -1, this.effect_22899FB3_2DD9_0427_41BB_298AEB3D2851, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB'); this.setComponentVisibility(this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB, false, -1, this.effect_2289EFB3_2DD9_0427_41C0_ACB5A72AE218, 'hideEffect', false); this.setComponentVisibility(this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB, false, -1, this.effect_2289EFB3_2DD9_0427_41C0_ACB5A72AE218, 'hideEffect', false)",
    "player": "this.MainViewerVideoPlayer",
    "class": "VideoPlayListItem",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_49F10E73_5162_1A6C_41CB_6AB8E809E304, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_49F10E73_5162_1A6C_41CB_6AB8E809E304, 0, this.video_210B394E_3D54_1A60_41A3_CB42BEC0D3EC)"
   }
  ]
 },
 {
  "playList": {
   "id": "album_1AE8DEB7_0EE7_8CC7_4198_F5B75788CCF6_AlbumPlayList",
   "class": "PhotoPlayList",
   "items": [
    {
     "media": {
      "thumbnailUrl": "media/photo_25EB8F3B_3D54_3627_41C1_FA6C2C76D85C_t.jpg",
      "duration": 5000,
      "label": "DJI_0355",
      "class": "Photo",
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
     "class": "PhotoPlayListItem",
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
     }
    },
    {
     "media": {
      "thumbnailUrl": "media/photo_2537233E_3D54_0E20_41B8_95E46BC1EC07_t.jpg",
      "duration": 5000,
      "label": "DJI_0364",
      "class": "Photo",
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
     "class": "PhotoPlayListItem",
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
     }
    },
    {
     "media": {
      "thumbnailUrl": "media/photo_25363697_3D54_16EF_41C7_78CA5BF042D8_t.jpg",
      "duration": 5000,
      "label": "DJI_0369",
      "class": "Photo",
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
     "class": "PhotoPlayListItem",
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
     }
    },
    {
     "media": {
      "thumbnailUrl": "media/photo_2536FA03_3D54_19E7_41C9_9A86E77D5C4C_t.jpg",
      "duration": 5000,
      "label": "DJI_0388",
      "class": "Photo",
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
     "class": "PhotoPlayListItem",
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
     }
    },
    {
     "media": {
      "thumbnailUrl": "media/photo_25365DAF_3D54_1A3F_41C9_6122F3F568B7_t.jpg",
      "duration": 5000,
      "label": "DJI_0402",
      "class": "Photo",
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
     "class": "PhotoPlayListItem",
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
     }
    },
    {
     "media": {
      "thumbnailUrl": "media/photo_2536E107_3D54_0BE0_41C7_237D79278EAE_t.jpg",
      "duration": 5000,
      "label": "DJI_0405",
      "class": "Photo",
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
     "class": "PhotoPlayListItem",
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
     }
    },
    {
     "media": {
      "thumbnailUrl": "media/photo_25361460_3D54_0A21_41C5_9CEF516D0083_t.jpg",
      "duration": 5000,
      "label": "DJI_0415",
      "class": "Photo",
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
     "class": "PhotoPlayListItem",
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
     }
    },
    {
     "media": {
      "thumbnailUrl": "media/photo_2536E7CB_3D54_F667_41C8_0C74E4EA5879_t.jpg",
      "duration": 5000,
      "label": "DJI_0441",
      "class": "Photo",
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
     "class": "PhotoPlayListItem",
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
     }
    }
   ]
  },
  "thumbnailUrl": "media/album_1AE8DEB7_0EE7_8CC7_4198_F5B75788CCF6_t.png",
  "class": "PhotoAlbum",
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
  "id": "playList_49F14E73_5162_1A6C_41BB_47CA6665025E",
  "class": "PlayList",
  "items": [
   {
    "player": "this.ViewerAreaLabeled_9FD7235A_96CD_9045_41D9_23A3BCBDB1C6PhotoAlbumPlayer",
    "media": "this.album_1AE8DEB7_0EE7_8CC7_4198_F5B75788CCF6",
    "class": "PhotoAlbumPlayListItem",
    "begin": "this.loopAlbum(this.playList_49F14E73_5162_1A6C_41BB_47CA6665025E, 0)"
   }
  ]
 },
 "this.map_4E02A832_427B_EE04_41CC_8E1CEC03E8D3",
 {
  "id": "playList_49FE6E82_5162_1AAD_41B4_65657B3A88F9",
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
  "easing": "linear",
  "id": "effect_15DDF232_3E91_44CF_41AB_F8C3E6067377",
  "duration": 400,
  "class": "FadeInEffect"
 },
 {
  "easing": "linear",
  "id": "effect_15DDE232_3E91_44CF_41B1_14501B4EC17A",
  "duration": 400,
  "class": "FadeOutEffect"
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
  "id": "camera_480ADEAE_5162_1AF5_41AE_F5BA5240BD90",
  "initialPosition": {
   "yaw": -146.3,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_4815AEB7_5162_1AD3_41AA_7772AA85637B",
  "initialPosition": {
   "yaw": 8.07,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_48130EC7_5162_1AB4_418C_90416B2B74A6",
  "initialPosition": {
   "yaw": 10.41,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_48191EE2_5162_1A6D_41C7_9AF6DA1530CA",
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_48259EE6_5162_1A74_41B1_72697EA34AC2",
  "initialPosition": {
   "yaw": 17.58,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_4823EEF5_5162_1A57_4178_7DC4A3F0A7AD",
  "initialPosition": {
   "yaw": 9.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_48292F05_5162_1BB4_41AD_90DB5E50768C",
  "initialPosition": {
   "yaw": 12.31,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_48310F1C_5162_1BD4_4192_20D618BC2A70",
  "initialPosition": {
   "yaw": 20.22,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_48381F2B_5162_1BF3_41C0_2A456B972F13",
  "initialPosition": {
   "yaw": 15.96,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_4841EF3B_5162_1BDC_41D2_D8C0FAB346A1",
  "initialPosition": {
   "yaw": 7.79,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_484B4F4B_5162_1BBC_41B1_1CFB8F7623CA",
  "initialPosition": {
   "yaw": 8.07,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_4853BF5A_5162_1A5C_4156_657DF3AB6975",
  "initialPosition": {
   "yaw": 10.41,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_48658F6A_5162_1A7C_41C6_D2E7C37D6B1F",
  "initialPosition": {
   "yaw": 15.88,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_486E4F79_5162_1A5F_41BA_B4AC0F2BC959",
  "initialPosition": {
   "yaw": 17.58,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_4872AF82_5162_1AAC_41D2_857AC7A5A691",
  "initialPosition": {
   "yaw": 9.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_48803F96_5162_1AD5_41CD_9E7EF7322114",
  "initialPosition": {
   "yaw": -139.22,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_48945FA1_5162_1AEC_41C4_558328E20B26",
  "initialPosition": {
   "yaw": 20.22,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_489A7FAB_5162_1AFC_41D4_302BF768E34D",
  "initialPosition": {
   "yaw": 22.36,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_48AE5FB5_5162_1AD4_41CF_B263157BB1C5",
  "initialPosition": {
   "yaw": 7.79,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_48BC1FBF_5162_1AD3_41CA_AAB323DB908D",
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_48C09FC9_5162_1ABF_41A4_29357A7A5184",
  "initialPosition": {
   "yaw": 10.41,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_48D63FD4_5162_1A54_41AA_CFFA6DEE9EE3",
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_48E47FDE_5162_1A54_41B7_8D26CB56AD79",
  "initialPosition": {
   "yaw": 17.58,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_48E92FE8_5162_1A7C_41AB_B73097C975FC",
  "initialPosition": {
   "yaw": 9.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_48FFAFF2_5162_1A6C_41B4_D155056F9752",
  "initialPosition": {
   "yaw": 12.31,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_4B0CAFFC_5162_1A55_41B1_11B3BACA5AA7",
  "initialPosition": {
   "yaw": 178.27,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_4B134006_5162_65B5_41CD_1778B5E01030",
  "initialPosition": {
   "yaw": 15.96,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_4B20500F_5162_65B4_41BE_5F7F16D4F497",
  "initialPosition": {
   "yaw": 7.79,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_49073041_5162_65AF_41C1_19A9635FF966",
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_4903F04C_5162_65B4_41C2_8A43C69B1E66",
  "initialPosition": {
   "yaw": 8.07,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_490EB056_5162_6654_41D2_EB1EC90265B7",
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_4914C060_5162_666C_4183_5E00CB5F5E82",
  "initialPosition": {
   "yaw": 17.58,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_49120062_5162_666C_41C7_536950E983CA",
  "initialPosition": {
   "yaw": -73.81,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_491EB06C_5162_6675_41D1_02848DC877A1",
  "initialPosition": {
   "yaw": 12.31,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_49248076_5162_6655_41B2_53F665739F2A",
  "initialPosition": {
   "yaw": 20.22,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_49216081_5162_66AC_41BF_4C915B7DCB5A",
  "initialPosition": {
   "yaw": 15.96,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_492F608B_5162_66BC_41C6_1C0E72C5A12E",
  "initialPosition": {
   "yaw": 7.79,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_492BF095_5162_66D4_41C1_9AF2D4ADA7E4",
  "initialPosition": {
   "yaw": -97.27,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_4931C09F_5162_66D4_41B5_33BD23F61C0B",
  "initialPosition": {
   "yaw": 8.07,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_493FD0A9_5162_66FF_41C4_382E671955B3",
  "initialPosition": {
   "yaw": 10.41,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_494470B3_5162_66D3_41BE_22B78574657C",
  "initialPosition": {
   "yaw": 17.58,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_494210BE_5162_66D4_41D2_DA373B7B553E",
  "initialPosition": {
   "yaw": 9.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_494EB0C8_5162_66BC_41CE_537F6D8781CD",
  "initialPosition": {
   "yaw": 12.31,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_495560D2_5162_66AC_4190_E5BC0A6BC746",
  "initialPosition": {
   "yaw": 20.22,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_4951B0DC_5162_6654_41CD_9E4EDC8B4F63",
  "initialPosition": {
   "yaw": 15.96,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_4958E0E6_5162_6675_41CE_16480E6AAB40",
  "initialPosition": {
   "yaw": 7.79,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_4960C0F0_5162_666D_41D1_74297A785A8C",
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_496900FB_5162_665C_41A5_E78C98F1C26D",
  "initialPosition": {
   "yaw": 169.45,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_4973C103_5162_67AC_41D2_9A9A431C8A9F",
  "initialPosition": {
   "yaw": 10.41,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_497BA10F_5162_67B4_4196_F389D4A57229",
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_498DB117_5162_67D4_41D2_9BA240954692",
  "initialPosition": {
   "yaw": 9.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_4990E121_5162_67EC_41CD_80F252D3C1BC",
  "initialPosition": {
   "yaw": 12.31,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_499A6123_5162_67EC_41B3_97BC2FFD5165",
  "initialPosition": {
   "yaw": 20.22,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_49AEC12D_5162_67F7_41BF_C38A570A73CA",
  "initialPosition": {
   "yaw": 15.96,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_49B1E140_5162_67AC_41AE_92E765706220",
  "initialPosition": {
   "yaw": -74.01,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_49C6914A_5162_67BC_4163_543945601B48",
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_49CAB14C_5162_67B4_41C3_061B00747E9F",
  "initialPosition": {
   "yaw": 8.07,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_49D96156_5162_6654_41C8_9A55796ED821",
  "initialPosition": {
   "yaw": 38.81,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_49EFE160_5162_666C_41CB_A6ECBE1935D0",
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_49FC316A_5162_667D_41D1_7647E7DED3D2",
  "initialPosition": {
   "yaw": 17.58,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_4802C175_5162_6654_41B5_F438A479F7A5",
  "initialPosition": {
   "yaw": 12.31,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_4817217F_5162_6654_41C0_EE25103E5773",
  "initialPosition": {
   "yaw": 20.22,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_4825E189_5162_66BC_41C0_98C8D7982B32",
  "initialPosition": {
   "yaw": 15.96,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_482AC193_5162_66AC_41D0_2CD42A1695C4",
  "initialPosition": {
   "yaw": 7.79,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_4839719D_5162_66D4_41D4_1C6AA755F45A",
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_484F21A7_5162_66F3_4196_B1D259B33C0A",
  "initialPosition": {
   "yaw": 8.07,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_485C61B1_5162_66EF_41A6_15C8F0EDAFD7",
  "initialPosition": {
   "yaw": 10.41,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_4862A1C6_5162_66B4_41CD_09B2E2566AB4",
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_487731DA_5162_665D_41D3_88687C0717EB",
  "initialPosition": {
   "yaw": -18.25,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_4885B1E4_5162_6675_41C7_B54E4564265C",
  "initialPosition": {
   "yaw": 9.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_488AF1F9_5162_665C_416E_53E4BC446599",
  "initialPosition": {
   "yaw": 20.22,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_4899620D_5162_65B4_41CF_FE533A780941",
  "initialPosition": {
   "yaw": 15.96,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_48AFF217_5162_65D4_41D0_8BCF13C7CC66",
  "initialPosition": {
   "yaw": 7.79,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_48BCE22B_5162_65F3_41D1_E8F949DE947A",
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_48C30240_5162_65AC_41D3_BC4755D24F45",
  "initialPosition": {
   "yaw": 8.07,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_48D7B252_5162_65AC_41C7_0E6F9E423D64",
  "initialPosition": {
   "yaw": 10.41,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_48E6F25E_5162_6A55_41BA_CA4B80841B5C",
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_48EBE271_5162_6A6C_4160_E872AFE2F8C5",
  "initialPosition": {
   "yaw": 17.58,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_48F99285_5162_6AB4_41C4_8B9BFDFC6E65",
  "initialPosition": {
   "yaw": 9.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_4B085291_5162_6AAF_417D_2AA6793583FC",
  "initialPosition": {
   "yaw": 12.31,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_4B1DD2A4_5162_6AF4_41C3_119A27637009",
  "initialPosition": {
   "yaw": 15.96,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_4B23E2B8_5162_6ADC_41C2_70C7D6AD8C23",
  "initialPosition": {
   "yaw": 7.79,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_4B3092C4_5162_6AB5_41C2_B280B0729AF0",
  "initialPosition": {
   "yaw": -14.52,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_4B4712D7_5162_6A54_41A7_BAAA3276BD4B",
  "initialPosition": {
   "yaw": 8.07,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_4B5652D9_5162_6A5C_41B1_D8115B79DBDF",
  "initialPosition": {
   "yaw": 10.41,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_4B5B72E3_5162_6A6C_41CA_5CF86DE88845",
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_4B69A2ED_5162_6A74_41BE_1B2BDB74216E",
  "initialPosition": {
   "yaw": 17.58,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_4B7EA2F7_5162_6A53_419A_71B5123F1571",
  "initialPosition": {
   "yaw": 9.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_4B8D2301_5162_6BAF_41BF_017EE108F49E",
  "initialPosition": {
   "yaw": 12.31,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_4B92E30C_5162_6BB4_41C2_0A98E075D171",
  "initialPosition": {
   "yaw": 20.22,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
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
  "id": "effect_3876CD6E_2DF9_0421_41C1_F0AB7F279824",
  "duration": 1000,
  "class": "FadeOutEffect"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_4B998314_5162_6BD4_41A0_1224F3547DF6",
  "duration": 1000,
  "class": "FadeInEffect"
 },
 "this.effect_3876CD6E_2DF9_0421_41C1_F0AB7F279824",
 {
  "easing": "cubic_in_out",
  "id": "effect_22899FB3_2DD9_0427_41BB_298AEB3D2851",
  "duration": 1000,
  "class": "FadeOutEffect"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_4B9A5314_5162_6BD4_41D2_F84561F076E4",
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
  "maximumAngle": 231.16,
  "autoplay": true,
  "id": "audio_A83B2F1A_B250_204B_41B2_61A870B2B428",
  "loop": true,
  "audio": {
   "mp3Url": "media/audio_A83B2F1A_B250_204B_41B2_61A870B2B428.mp3",
   "id": "audioresource_1D15163A_0EEB_BFC9_419F_EF5F7074EFB1",
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
   "mp3Url": "media/audio_A875C8FE_B250_61CA_41D2_1BDD70C9887A.mp3",
   "id": "audioresource_A84F2D34_B270_605F_41E2_4CF67AB762D2",
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
   "mp3Url": "media/audio_A87513BA_B273_E04A_41AA_0102CD2EF1BE.mp3",
   "id": "audioresource_A83107F8_B270_2FD6_41E2_DAE1F661A577",
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
  "class": "Photo",
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
 },
 {
  "autoplay": true,
  "id": "audio_15B68E59_3D54_1663_4199_CC0245D4ECA1",
  "audio": {
   "mp3Url": "media/audio_15B68E59_3D54_1663_4199_CC0245D4ECA1.mp3",
   "oggUrl": "media/audio_15B68E59_3D54_1663_4199_CC0245D4ECA1.ogg",
   "class": "AudioResource"
  },
  "class": "MediaAudio"
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
  "playbackBarHeight": 10,
  "minWidth": 100,
  "playbackBarHeadWidth": 6,
  "playbackBarProgressBorderSize": 0,
  "class": "ViewerArea",
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarRight": 0,
  "playbackBarHeadShadow": true,
  "shadow": false,
  "toolTipShadowVerticalLength": 0,
  "toolTipPaddingBottom": 4,
  "progressBackgroundOpacity": 1,
  "toolTipFontWeight": "normal",
  "progressBarBorderSize": 0,
  "progressBarBorderRadius": 0,
  "progressBorderRadius": 0,
  "playbackBarHeadShadowHorizontalLength": 0,
  "paddingBottom": 0,
  "toolTipFontSize": 14,
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
  "minHeight": 50,
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
  "bottom": "0%",
  "id": "MainViewer",
  "toolTipShadowHorizontalLength": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "progressBorderColor": "#000000",
  "toolTipFontFamily": "Arial",
  "playbackBarBottom": 5,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "left": "0%",
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "progressBorderSize": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "toolTipPaddingTop": 4,
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipFontStyle": "normal",
  "right": "0%"
 },
 {
  "gap": 35,
  "verticalAlign": "middle",
  "paddingRight": 10,
  "maxHeight": 70,
  "paddingLeft": 10,
  "height": 70,
  "layout": "horizontal",
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "scrollBarWidth": 10,
  "minWidth": 100,
  "scrollBarMargin": 2,
  "borderSize": 0,
  "class": "Container",
  "horizontalAlign": "center",
  "overflow": "visible",
  "minHeight": 25,
  "shadow": false,
  "contentOpaque": false,
  "borderRadius": 5,
  "backgroundColorDirection": "vertical",
  "paddingBottom": 0,
  "backgroundColorRatios": [
   0,
   1
  ],
  "id": "Container_86F3A56C_8E22_5B1D_41CA_9CE53436FE56",
  "scrollBarColor": "#000000",
  "backgroundOpacity": 0.25,
  "bottom": "3%",
  "paddingTop": 0,
  "scrollBarVisible": "rollOver",
  "left": "0%",
  "scrollBarOpacity": 0.5,
  "right": "0%",
  "children": [
   {
    "verticalAlign": "middle",
    "toolTipBorderRadius": 3,
    "paddingRight": 0,
    "toolTipShadowOpacity": 1,
    "mode": "push",
    "maxHeight": 70,
    "paddingLeft": 0,
    "height": "100%",
    "width": "100%",
    "toolTipBorderSize": 1,
    "toolTip": "Info",
    "minWidth": 25,
    "toolTipTextShadowColor": "#000000",
    "toolTipPaddingLeft": 6,
    "toolTipBorderColor": "#767676",
    "transparencyActive": true,
    "borderSize": 0,
    "toolTipBackgroundColor": "#000000",
    "class": "IconButton",
    "borderRadius": 0,
    "horizontalAlign": "center",
    "toolTipShadowVerticalLength": 0,
    "minHeight": 25,
    "maxWidth": 70,
    "toolTipOpacity": 0.7,
    "toolTipPaddingBottom": 4,
    "toolTipTextShadowBlurRadius": 3,
    "shadow": false,
    "click": "this.showPopupImage(this.ImageResource_536A2F3F_412A_B1B6_41B9_51CAE5D86C15, null, '85%', '85%', this.FadeInEffect_8ED05F70_96C4_F045_41DC_2AB82A556F92, this.FadeOutEffect_8ED06F70_96C4_F045_41DA_C74400CF7B15, {'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'rollOverBorderSize':0,'pressedBackgroundColorDirection':'vertical','borderColor':'#000000','backgroundColorDirection':'vertical','pressedIconColor':'#CCCCCC','backgroundColor':['#000000','#000000','#000000'],'paddingBottom':10,'backgroundColorRatios':[0,0.09803921568627451,1],'iconHeight':25,'iconColor':'#FFFFFF','pressedIconWidth':25,'pressedIconHeight':25,'paddingLeft':10,'backgroundOpacity':0.15,'rollOverBorderColor':'#000000','rollOverBackgroundOpacity':0.5,'rollOverIconHeight':25,'rollOverIconLineWidth':3,'iconWidth':25,'pressedBackgroundColor':['#000000','#000000','#000000'],'rollOverIconWidth':25,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':3,'pressedBorderSize':0,'rollOverIconColor':'#52B7EF','rollOverBackgroundColorDirection':'vertical','rollOverBackgroundColor':['#000000','#000000','#000000'],'iconLineWidth':3,'paddingTop':10,'borderSize':0,'paddingRight':10,'pressedBorderColor':'#000000'}, null, null, false)",
    "cursor": "hand",
    "paddingBottom": 0,
    "toolTipFontSize": 14,
    "toolTipShadowHorizontalLength": 0,
    "toolTipShadowColor": "#333333",
    "toolTipShadowBlurRadius": 3,
    "toolTipFontWeight": "normal",
    "id": "IconButton_87577B8F_8E22_AF1B_41CC_79EB87AE6DED",
    "toolTipShadowSpread": 0,
    "toolTipTextShadowOpacity": 0,
    "backgroundOpacity": 0,
    "toolTipFontColor": "#606060",
    "toolTipFontFamily": "Arial",
    "paddingTop": 0,
    "iconURL": "skin/IconButton_87577B8F_8E22_AF1B_41CC_79EB87AE6DED.png",
    "toolTipPaddingTop": 4,
    "rollOverIconURL": "skin/IconButton_87577B8F_8E22_AF1B_41CC_79EB87AE6DED_rollover.png",
    "toolTipPaddingRight": 6,
    "toolTipFontStyle": "normal"
   },
   {
    "verticalAlign": "middle",
    "toolTipBorderRadius": 3,
    "paddingRight": 0,
    "toolTipShadowOpacity": 1,
    "mode": "push",
    "maxHeight": 70,
    "paddingLeft": 0,
    "height": "100%",
    "width": "100%",
    "toolTipBorderSize": 1,
    "toolTip": "Play Video",
    "minWidth": 25,
    "toolTipTextShadowColor": "#000000",
    "toolTipPaddingLeft": 6,
    "toolTipBorderColor": "#767676",
    "transparencyActive": true,
    "borderSize": 0,
    "toolTipBackgroundColor": "#000000",
    "class": "IconButton",
    "borderRadius": 0,
    "horizontalAlign": "center",
    "toolTipShadowVerticalLength": 0,
    "minHeight": 25,
    "maxWidth": 70,
    "toolTipOpacity": 0.7,
    "toolTipPaddingBottom": 4,
    "toolTipTextShadowBlurRadius": 3,
    "shadow": false,
    "click": "this.setMediaBehaviour(this.playList_49F10E73_5162_1A6C_41CB_6AB8E809E304, 0); this.MainViewerVideoPlayer.play()",
    "cursor": "hand",
    "paddingBottom": 0,
    "toolTipFontSize": 14,
    "toolTipShadowHorizontalLength": 0,
    "toolTipShadowColor": "#333333",
    "toolTipShadowBlurRadius": 3,
    "toolTipFontWeight": "normal",
    "id": "IconButton_213ED70C_2DB2_E6C5_41B6_0CCE6C77E889",
    "toolTipShadowSpread": 0,
    "toolTipTextShadowOpacity": 0,
    "backgroundOpacity": 0,
    "toolTipFontColor": "#606060",
    "toolTipFontFamily": "Arial",
    "paddingTop": 0,
    "iconURL": "skin/IconButton_213ED70C_2DB2_E6C5_41B6_0CCE6C77E889.png",
    "toolTipPaddingTop": 4,
    "rollOverIconURL": "skin/IconButton_213ED70C_2DB2_E6C5_41B6_0CCE6C77E889_rollover.png",
    "toolTipPaddingRight": 6,
    "toolTipFontStyle": "normal"
   },
   "this.IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED",
   {
    "verticalAlign": "middle",
    "toolTipBorderRadius": 3,
    "paddingRight": 0,
    "toolTipShadowOpacity": 1,
    "mode": "push",
    "maxHeight": 70,
    "paddingLeft": 0,
    "height": "85%",
    "width": "85%",
    "toolTipBorderSize": 1,
    "toolTip": "FLoor Plan",
    "minWidth": 25,
    "toolTipTextShadowColor": "#000000",
    "toolTipPaddingLeft": 6,
    "toolTipBorderColor": "#767676",
    "transparencyActive": true,
    "pressedIconURL": "skin/IconButton_2FC9210C_3E8F_C4D4_41A7_10D1404CA49B_pressed.png",
    "borderSize": 0,
    "toolTipBackgroundColor": "#000000",
    "class": "IconButton",
    "borderRadius": 0,
    "horizontalAlign": "center",
    "toolTipShadowVerticalLength": 0,
    "minHeight": 25,
    "maxWidth": 70,
    "toolTipOpacity": 0.7,
    "toolTipPaddingBottom": 4,
    "toolTipTextShadowBlurRadius": 3,
    "shadow": false,
    "click": "this.setComponentVisibility(this.Container_53347472_4288_F6E6_4196_D7457B47D2CF, true, 0, this.effect_51CB7B74_4299_12E2_41B4_829087983DE5, 'showEffect', false)",
    "cursor": "hand",
    "paddingBottom": 0,
    "toolTipFontSize": 14,
    "toolTipShadowHorizontalLength": 0,
    "toolTipShadowColor": "#333333",
    "toolTipShadowBlurRadius": 3,
    "toolTipFontWeight": "normal",
    "id": "IconButton_2FC9210C_3E8F_C4D4_41A7_10D1404CA49B",
    "toolTipShadowSpread": 0,
    "toolTipTextShadowOpacity": 0,
    "backgroundOpacity": 0,
    "toolTipFontColor": "#606060",
    "toolTipFontFamily": "Arial",
    "paddingTop": 0,
    "iconURL": "skin/IconButton_2FC9210C_3E8F_C4D4_41A7_10D1404CA49B.png",
    "toolTipPaddingTop": 4,
    "toolTipPaddingRight": 6,
    "toolTipFontStyle": "normal"
   },
   {
    "verticalAlign": "middle",
    "toolTipBorderRadius": 3,
    "paddingRight": 0,
    "toolTipShadowOpacity": 1,
    "mode": "toggle",
    "maxHeight": 70,
    "paddingLeft": 0,
    "height": "100%",
    "width": "100%",
    "toolTipBorderSize": 1,
    "toolTip": "Panorama List",
    "minWidth": 25,
    "toolTipTextShadowColor": "#000000",
    "toolTipPaddingLeft": 6,
    "toolTipBorderColor": "#767676",
    "transparencyActive": true,
    "pressedIconURL": "skin/IconButton_843BBEF5_8E22_690F_419D_28CBDD771ACC_pressed.png",
    "borderSize": 0,
    "toolTipBackgroundColor": "#000000",
    "class": "IconButton",
    "borderRadius": 0,
    "horizontalAlign": "center",
    "toolTipShadowVerticalLength": 0,
    "minHeight": 25,
    "maxWidth": 70,
    "toolTipOpacity": 0.7,
    "toolTipPaddingBottom": 4,
    "toolTipTextShadowBlurRadius": 3,
    "shadow": false,
    "click": "if(!this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472.get('visible')){ this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, true, 0, this.effect_15DDF232_3E91_44CF_41AB_F8C3E6067377, 'showEffect', false) } else if(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472.get('visible')){ this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, false, 0, this.effect_15DDE232_3E91_44CF_41B1_14501B4EC17A, 'hideEffect', false) }",
    "cursor": "hand",
    "paddingBottom": 0,
    "toolTipFontSize": 14,
    "toolTipShadowHorizontalLength": 0,
    "toolTipShadowColor": "#333333",
    "toolTipShadowBlurRadius": 3,
    "toolTipFontWeight": "normal",
    "id": "IconButton_843BBEF5_8E22_690F_419D_28CBDD771ACC",
    "toolTipShadowSpread": 0,
    "toolTipTextShadowOpacity": 0,
    "backgroundOpacity": 0,
    "toolTipFontColor": "#606060",
    "toolTipFontFamily": "Arial",
    "paddingTop": 0,
    "iconURL": "skin/IconButton_843BBEF5_8E22_690F_419D_28CBDD771ACC.png",
    "toolTipPaddingTop": 4,
    "toolTipPaddingRight": 6,
    "toolTipFontStyle": "normal"
   }
  ]
 },
 {
  "verticalAlign": "middle",
  "paddingRight": 0,
  "width": 500,
  "maxHeight": 55,
  "paddingLeft": 0,
  "height": 50,
  "scrollBarWidth": 10,
  "minWidth": 500,
  "scrollBarMargin": 2,
  "borderSize": 0,
  "class": "Container",
  "borderRadius": 5,
  "horizontalAlign": "right",
  "overflow": "visible",
  "minHeight": 55,
  "shadow": false,
  "top": "3%",
  "maxWidth": 500,
  "paddingBottom": 0,
  "id": "Container_807F782A_8E23_A905_41DE_623121285A09",
  "scrollBarColor": "#000000",
  "backgroundOpacity": 0,
  "paddingTop": 0,
  "gap": 5,
  "scrollBarVisible": "rollOver",
  "layout": "horizontal",
  "scrollBarOpacity": 0.5,
  "right": "1.5%",
  "contentOpaque": false,
  "children": [
   {
    "verticalAlign": "middle",
    "paddingRight": 0,
    "maxHeight": 55,
    "paddingLeft": 0,
    "height": 55,
    "width": 400,
    "scrollBarWidth": 10,
    "minWidth": 100,
    "scrollBarMargin": 2,
    "borderSize": 0,
    "class": "Container",
    "borderRadius": 0,
    "horizontalAlign": "right",
    "overflow": "visible",
    "minHeight": 55,
    "shadow": false,
    "layout": "horizontal",
    "contentOpaque": false,
    "visible": false,
    "paddingBottom": 0,
    "id": "Container_80D3CF90_8E26_E705_41E0_E47025A2C106",
    "scrollBarColor": "#000000",
    "backgroundOpacity": 0,
    "paddingTop": 0,
    "gap": 0,
    "scrollBarVisible": "rollOver",
    "scrollBarOpacity": 0.5,
    "children": [
     "this.IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37",
     {
      "verticalAlign": "middle",
      "toolTipBorderRadius": 3,
      "paddingRight": 0,
      "toolTipShadowOpacity": 1,
      "mode": "toggle",
      "maxHeight": 60,
      "paddingLeft": 0,
      "height": "100%",
      "width": "100%",
      "toolTipBorderSize": 1,
      "toolTip": "Full Screen",
      "minWidth": 1,
      "toolTipTextShadowColor": "#000000",
      "toolTipPaddingLeft": 6,
      "toolTipBorderColor": "#767676",
      "transparencyActive": true,
      "pressedIconURL": "skin/IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA_pressed.png",
      "borderSize": 0,
      "toolTipBackgroundColor": "#000000",
      "class": "IconButton",
      "borderRadius": 0,
      "horizontalAlign": "center",
      "toolTipShadowVerticalLength": 0,
      "minHeight": 1,
      "maxWidth": 60,
      "toolTipOpacity": 0.7,
      "toolTipPaddingBottom": 4,
      "toolTipTextShadowBlurRadius": 3,
      "shadow": false,
      "click": "if(!this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, true, 0, null, null, false) } else if(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, false, 0, null, null, false) }",
      "cursor": "hand",
      "paddingBottom": 0,
      "toolTipFontSize": 14,
      "toolTipShadowHorizontalLength": 0,
      "toolTipShadowColor": "#333333",
      "toolTipShadowBlurRadius": 3,
      "toolTipFontWeight": "normal",
      "id": "IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA",
      "toolTipShadowSpread": 0,
      "toolTipTextShadowOpacity": 0,
      "backgroundOpacity": 0,
      "toolTipFontColor": "#606060",
      "toolTipFontFamily": "Arial",
      "paddingTop": 0,
      "iconURL": "skin/IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA.png",
      "toolTipPaddingTop": 4,
      "toolTipPaddingRight": 6,
      "toolTipFontStyle": "normal"
     },
     {
      "verticalAlign": "middle",
      "toolTipBorderRadius": 3,
      "paddingRight": 0,
      "toolTipShadowOpacity": 1,
      "mode": "toggle",
      "maxHeight": 60,
      "paddingLeft": 0,
      "height": "100%",
      "width": "100%",
      "toolTipBorderSize": 1,
      "toolTip": "Audio On/Off",
      "minWidth": 1,
      "toolTipTextShadowColor": "#000000",
      "toolTipPaddingLeft": 6,
      "toolTipBorderColor": "#767676",
      "transparencyActive": true,
      "pressedIconURL": "skin/IconButton_8105A313_8E22_BF0B_41E1_331C6035A930_pressed.png",
      "borderSize": 0,
      "toolTipBackgroundColor": "#000000",
      "class": "IconButton",
      "borderRadius": 0,
      "horizontalAlign": "center",
      "toolTipShadowVerticalLength": 0,
      "minHeight": 1,
      "maxWidth": 60,
      "toolTipOpacity": 0.7,
      "toolTipPaddingBottom": 4,
      "toolTipTextShadowBlurRadius": 3,
      "shadow": false,
      "click": "if(!this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, true, 0, this.effect_CACBF85D_EED0_7261_41DB_A3B65ECE0D5D, 'showEffect', false) } else if(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, false, 0, this.effect_CACBC85D_EED0_7261_41BE_8CF4C3A8170C, 'hideEffect', false) }",
      "cursor": "hand",
      "paddingBottom": 0,
      "toolTipFontSize": 14,
      "toolTipShadowHorizontalLength": 0,
      "toolTipShadowColor": "#333333",
      "toolTipShadowBlurRadius": 3,
      "toolTipFontWeight": "normal",
      "id": "IconButton_8105A313_8E22_BF0B_41E1_331C6035A930",
      "toolTipShadowSpread": 0,
      "toolTipTextShadowOpacity": 0,
      "backgroundOpacity": 0,
      "toolTipFontColor": "#606060",
      "toolTipFontFamily": "Arial",
      "paddingTop": 0,
      "iconURL": "skin/IconButton_8105A313_8E22_BF0B_41E1_331C6035A930.png",
      "toolTipPaddingTop": 4,
      "toolTipPaddingRight": 6,
      "toolTipFontStyle": "normal"
     },
     "this.IconButton_80E5955A_8E23_BB05_41CA_43DD61DBAEE9"
    ]
   },
   {
    "verticalAlign": "middle",
    "toolTipBorderRadius": 3,
    "paddingRight": 0,
    "toolTipShadowOpacity": 1,
    "mode": "toggle",
    "maxHeight": 55,
    "paddingLeft": 0,
    "height": "100%",
    "width": "100%",
    "toolTipBorderSize": 1,
    "toolTip": "Settings",
    "minWidth": 55,
    "toolTipTextShadowColor": "#000000",
    "toolTipPaddingLeft": 6,
    "toolTipBorderColor": "#767676",
    "transparencyActive": true,
    "borderSize": 0,
    "toolTipBackgroundColor": "#000000",
    "class": "IconButton",
    "borderRadius": 0,
    "horizontalAlign": "center",
    "toolTipShadowVerticalLength": 0,
    "minHeight": 55,
    "maxWidth": 55,
    "toolTipOpacity": 0.7,
    "toolTipPaddingBottom": 4,
    "toolTipTextShadowBlurRadius": 3,
    "shadow": false,
    "click": "if(!this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, true, 0, this.effect_32C91197_3F22_3110_4181_9E76B593FBFE, 'showEffect', false) } else if(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, false, 0, this.effect_32C92197_3F22_3110_419D_E2E21968F16F, 'hideEffect', false) }",
    "cursor": "hand",
    "paddingBottom": 0,
    "toolTipFontSize": 14,
    "toolTipShadowHorizontalLength": 0,
    "toolTipShadowColor": "#333333",
    "toolTipShadowBlurRadius": 3,
    "toolTipFontWeight": "normal",
    "id": "IconButton_811D89E1_8E3D_AB07_4191_94003C90B2FF",
    "toolTipShadowSpread": 0,
    "toolTipTextShadowOpacity": 0,
    "backgroundOpacity": 0,
    "toolTipFontColor": "#606060",
    "toolTipFontFamily": "Arial",
    "paddingTop": 0,
    "iconURL": "skin/IconButton_811D89E1_8E3D_AB07_4191_94003C90B2FF.png",
    "toolTipPaddingTop": 4,
    "toolTipPaddingRight": 6,
    "toolTipFontStyle": "normal"
   }
  ]
 },
 {
  "verticalAlign": "top",
  "paddingRight": 5,
  "selectedItemBackgroundColor": [],
  "backgroundColor": [
   "#000000"
  ],
  "scrollBarWidth": 7,
  "minWidth": 90,
  "gap": 5,
  "scrollBarMargin": 4,
  "rollOverItemLabelFontWeight": "bold",
  "selectedItemLabelFontStyle": "italic",
  "class": "ThumbnailList",
  "shadow": false,
  "horizontalAlign": "left",
  "itemHorizontalAlign": "center",
  "maxWidth": 105,
  "rollOverItemLabelFontColor": "#FFFFFF",
  "itemThumbnailScaleMode": "fit_outside",
  "itemMode": "normal",
  "itemLabelFontColor": "#FFFFFF",
  "backgroundColorDirection": "vertical",
  "paddingBottom": 5,
  "selectedItemLabelTextDecoration": "underline",
  "scrollBarColor": "#52B7EF",
  "itemPaddingBottom": 3,
  "itemLabelFontWeight": "normal",
  "rollOverItemLabelTextDecoration": "underline",
  "paddingTop": 5,
  "itemThumbnailOpacity": 1,
  "itemThumbnailShadow": false,
  "selectedItemLabelFontColor": "#FFFFFF",
  "scrollBarVisible": "rollOver",
  "itemThumbnailBorderRadius": 25,
  "itemLabelTextDecoration": "none",
  "scrollBarOpacity": 1,
  "itemPaddingRight": 3,
  "selectedItemThumbnailShadowHorizontalLength": 0,
  "itemLabelFontStyle": "normal",
  "selectedItemThumbnailShadowBlurRadius": 10,
  "selectedItemThumbnailShadow": true,
  "selectedItemLabelFontSize": 12,
  "itemLabelHorizontalAlign": "center",
  "width": 105,
  "itemThumbnailWidth": 75,
  "paddingLeft": 5,
  "itemBorderRadius": 0,
  "selectedItemThumbnailShadowOpacity": 0.73,
  "selectedItemBorderSize": 0,
  "borderSize": 0,
  "itemPaddingLeft": 3,
  "itemPaddingTop": 3,
  "minHeight": 100,
  "borderRadius": 3,
  "itemLabelGap": 9,
  "itemBackgroundColorDirection": "vertical",
  "itemVerticalAlign": "middle",
  "itemBackgroundOpacity": 0,
  "itemBackgroundColor": [],
  "selectedItemLabelFontWeight": "bold",
  "top": "15%",
  "selectedItemBorderRadius": 0,
  "selectedItemThumbnailShadowVerticalLength": 0,
  "backgroundColorRatios": [
   0
  ],
  "bottom": "15%",
  "itemLabelFontSize": 12,
  "id": "ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472",
  "backgroundOpacity": 0.25,
  "selectedItemBackgroundColorRatios": [],
  "itemOpacity": 1,
  "playList": "this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist",
  "itemLabelPosition": "bottom",
  "itemBackgroundColorRatios": [],
  "selectedItemBackgroundOpacity": 0,
  "right": "1.5%",
  "itemThumbnailHeight": 75,
  "itemLabelFontFamily": "Arial",
  "layout": "vertical"
 },
 {
  "verticalAlign": "top",
  "paddingRight": 0,
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "paddingLeft": 0,
  "height": "100%",
  "scrollBarWidth": 10,
  "minWidth": 1,
  "scrollBarMargin": 2,
  "borderSize": 0,
  "class": "Container",
  "borderRadius": 0,
  "horizontalAlign": "left",
  "overflow": "scroll",
  "minHeight": 1,
  "shadow": false,
  "top": "0%",
  "backgroundColorDirection": "vertical",
  "contentOpaque": false,
  "paddingBottom": 0,
  "backgroundColorRatios": [
   0,
   1
  ],
  "visible": false,
  "id": "Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB",
  "scrollBarColor": "#000000",
  "backgroundOpacity": 0.7,
  "paddingTop": 0,
  "gap": 10,
  "scrollBarVisible": "rollOver",
  "left": "0%",
  "width": "100%",
  "scrollBarOpacity": 0.5,
  "children": [
   "this.ViewerAreaLabeled_9FD7235A_96CD_9045_41D9_23A3BCBDB1C6",
   "this.IconButton_9FEA51EA_96CC_905A_41D3_F42DB0CD0A74",
   "this.IconButton_9FB9BD3F_96C5_703B_41D7_65AEE6E85A96",
   "this.IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4"
  ],
  "layout": "absolute"
 },
 {
  "verticalAlign": "middle",
  "paddingRight": 0,
  "mode": "push",
  "maxHeight": 50,
  "paddingLeft": 0,
  "height": "5.482%",
  "width": "3.03%",
  "minWidth": 50,
  "transparencyActive": true,
  "borderSize": 0,
  "class": "IconButton",
  "borderRadius": 0,
  "horizontalAlign": "center",
  "minHeight": 50,
  "shadow": false,
  "top": "2%",
  "cursor": "hand",
  "visible": false,
  "paddingBottom": 0,
  "id": "IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB",
  "backgroundOpacity": 0,
  "paddingTop": 0,
  "iconURL": "skin/IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB.png",
  "rollOverIconURL": "skin/IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB_rollover.png",
  "right": "2%",
  "maxWidth": 50
 },
 {
  "gap": 10,
  "verticalAlign": "top",
  "paddingRight": 0,
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "paddingLeft": 0,
  "scrollBarWidth": 10,
  "minWidth": 1,
  "scrollBarMargin": 2,
  "borderSize": 0,
  "class": "Container",
  "borderRadius": 0,
  "horizontalAlign": "left",
  "overflow": "scroll",
  "minHeight": 1,
  "shadow": false,
  "top": "0%",
  "backgroundColorDirection": "vertical",
  "contentOpaque": false,
  "paddingBottom": 0,
  "backgroundColorRatios": [
   0,
   1
  ],
  "visible": false,
  "id": "Container_53347472_4288_F6E6_4196_D7457B47D2CF",
  "scrollBarColor": "#000000",
  "backgroundOpacity": 0.3,
  "bottom": "0%",
  "paddingTop": 0,
  "scrollBarVisible": "rollOver",
  "left": "0%",
  "layout": "absolute",
  "scrollBarOpacity": 0.5,
  "right": "0%",
  "children": [
   "this.MapViewer",
   {
    "verticalAlign": "middle",
    "paddingRight": 0,
    "mode": "push",
    "maxHeight": 50,
    "paddingLeft": 0,
    "height": "5.91%",
    "width": "5.07%",
    "minWidth": 50,
    "transparencyActive": true,
    "borderSize": 0,
    "class": "IconButton",
    "borderRadius": 0,
    "horizontalAlign": "center",
    "minHeight": 50,
    "shadow": false,
    "top": "5%",
    "click": "this.setComponentVisibility(this.Container_53347472_4288_F6E6_4196_D7457B47D2CF, false, 0, this.effect_500E3733_4297_3267_41C9_4935C0BEBF39, 'hideEffect', false)",
    "cursor": "hand",
    "paddingBottom": 0,
    "id": "IconButton_50D1A26C_4289_72E1_41CD_2B557DFCC24F",
    "backgroundOpacity": 0,
    "paddingTop": 0,
    "iconURL": "skin/IconButton_50D1A26C_4289_72E1_41CD_2B557DFCC24F.png",
    "rollOverIconURL": "skin/IconButton_50D1A26C_4289_72E1_41CD_2B557DFCC24F_rollover.png",
    "right": "5%",
    "maxWidth": 50
   }
  ]
 },
 {
  "paddingRight": 0,
  "showEffect": {
   "easing": "cubic_in_out",
   "duration": 350,
   "class": "FadeInEffect"
  },
  "backgroundColor": [
   "#000000"
  ],
  "paddingLeft": 0,
  "minWidth": 0,
  "borderSize": 0,
  "class": "UIComponent",
  "borderRadius": 0,
  "minHeight": 0,
  "shadow": false,
  "top": 0,
  "backgroundColorDirection": "vertical",
  "paddingBottom": 0,
  "backgroundColorRatios": [
   0
  ],
  "visible": false,
  "id": "veilPopupPanorama",
  "backgroundOpacity": 0.55,
  "bottom": 0,
  "paddingTop": 0,
  "left": 0,
  "right": 0
 },
 {
  "paddingRight": 0,
  "backgroundColor": [],
  "paddingLeft": 0,
  "minWidth": 0,
  "borderSize": 0,
  "class": "ZoomImage",
  "borderRadius": 0,
  "scaleMode": "custom",
  "minHeight": 0,
  "shadow": false,
  "top": 0,
  "backgroundColorDirection": "vertical",
  "paddingBottom": 0,
  "backgroundColorRatios": [],
  "visible": false,
  "id": "zoomImagePopupPanorama",
  "backgroundOpacity": 1,
  "bottom": 0,
  "paddingTop": 0,
  "left": 0,
  "right": 0
 },
 {
  "fontStyle": "normal",
  "verticalAlign": "middle",
  "iconHeight": 20,
  "paddingRight": 5,
  "fontSize": 12,
  "showEffect": {
   "easing": "cubic_in_out",
   "duration": 350,
   "class": "FadeInEffect"
  },
  "backgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "paddingLeft": 5,
  "textDecoration": "none",
  "mode": "push",
  "minWidth": 0,
  "gap": 5,
  "iconWidth": 20,
  "borderSize": 0,
  "class": "CloseButton",
  "borderRadius": 0,
  "horizontalAlign": "center",
  "fontColor": "#FFFFFF",
  "minHeight": 0,
  "iconColor": "#000000",
  "fontWeight": "normal",
  "shadow": false,
  "iconLineWidth": 5,
  "top": 10,
  "backgroundColorDirection": "vertical",
  "cursor": "hand",
  "layout": "horizontal",
  "visible": false,
  "paddingBottom": 5,
  "backgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "pressedIconColor": "#888888",
  "id": "closeButtonPopupPanorama",
  "rollOverIconColor": "#666666",
  "backgroundOpacity": 0.3,
  "shadowColor": "#000000",
  "paddingTop": 5,
  "shadowSpread": 1,
  "fontFamily": "Arial",
  "shadowBlurRadius": 6,
  "label": "",
  "borderColor": "#000000",
  "iconBeforeLabel": true,
  "right": 10
 }
], 
 "buttonToggleMute": "this.IconButton_8105A313_8E22_BF0B_41E1_331C6035A930",
 "verticalAlign": "top",
 "start": "this.playAudioList([this.audio_15B68E59_3D54_1663_4199_CC0245D4ECA1]); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37], 'cardboardAvailable'); this.syncPlaylists([this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); this.playList_49FE6E82_5162_1AAD_41B4_65657B3A88F9.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA].forEach(function(component) { component.set('visible', false); }) }",
 "paddingRight": 0,
 "mouseWheelEnabled": true,
 "paddingLeft": 0,
 "height": "100%",
 "vrPolyfillScale": 0.5,
 "scrollBarWidth": 10,
 "minWidth": 20,
 "scrollBarMargin": 2,
 "borderSize": 0,
 "class": "Player",
 "borderRadius": 0,
 "horizontalAlign": "left",
 "backgroundPreloadEnabled": true,
 "overflow": "visible",
 "minHeight": 20,
 "shadow": false,
 "scripts": {
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "existsKey": function(key){  return key in window; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "registerKey": function(key, value){  window[key] = value; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio) delete audios[audio.get('id')]; } if(audio) audio.stop(); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getKey": function(key){  return window[key]; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "unregisterKey": function(key){  delete window[key]; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); }
 },
 "width": "100%",
 "paddingBottom": 0,
 "id": "rootPlayer",
 "scrollBarColor": "#000000",
 "paddingTop": 0,
 "gap": 10,
 "scrollBarVisible": "rollOver",
 "buttonToggleFullscreen": "this.IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA",
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "contentOpaque": false
})