TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "buttonPlay": {
   "click": "this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, true, 0, this.effect_98AADBB0_96C5_F0C5_41B2_1C4D08E503DB, 'showEffect', false); this.playList_78EF2D2F_77AF_E833_41CE_D6E683F5C2B7.set('selectedIndex', 0)",
   "toolTipPaddingBottom": 4,
   "mode": "push",
   "toolTipPaddingRight": 6,
   "paddingRight": 0,
   "paddingLeft": 0,
   "maxWidth": 70,
   "width": "100%",
   "toolTip": "See Photos",
   "iconURL": "skin/IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED.png",
   "transparencyActive": true,
   "toolTipPaddingTop": 4,
   "borderRadius": 0,
   "toolTipBorderSize": 1,
   "toolTipTextShadowOpacity": 0,
   "toolTipFontSize": 12,
   "toolTipOpacity": 0.7,
   "borderSize": 0,
   "toolTipShadowOpacity": 1,
   "rollOverIconURL": "skin/IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED_rollover.png",
   "toolTipShadowVerticalLength": 0,
   "toolTipPaddingLeft": 6,
   "toolTipBorderColor": "#767676",
   "shadow": false,
   "horizontalAlign": "center",
   "toolTipTextShadowColor": "#000000",
   "toolTipFontStyle": "normal",
   "class": "IconButton",
   "minWidth": 25,
   "toolTipBorderRadius": 3,
   "visible": false,
   "paddingBottom": 0,
   "toolTipTextShadowBlurRadius": 3,
   "cursor": "hand",
   "id": "IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED",
   "toolTipBackgroundColor": "#000000",
   "height": "100%",
   "toolTipFontWeight": "normal",
   "toolTipShadowHorizontalLength": 0,
   "paddingTop": 0,
   "maxHeight": 70,
   "toolTipShadowSpread": 0,
   "minHeight": 25,
   "toolTipShadowColor": "#333333",
   "toolTipShadowBlurRadius": 3,
   "backgroundOpacity": 0,
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
    "click": "this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, false, 0, this.effect_9B0AF4E2_96C4_F045_41D3_0E00FEE03A15, 'hideEffect', false)",
    "mode": "push",
    "paddingRight": 0,
    "paddingLeft": 0,
    "maxWidth": 50,
    "width": "3.03%",
    "iconURL": "skin/IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4.png",
    "transparencyActive": true,
    "borderRadius": 0,
    "borderSize": 0,
    "rollOverIconURL": "skin/IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4_rollover.png",
    "shadow": false,
    "horizontalAlign": "center",
    "top": "2%",
    "minWidth": 50,
    "cursor": "hand",
    "paddingBottom": 0,
    "class": "IconButton",
    "id": "IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4",
    "height": "5.48%",
    "paddingTop": 0,
    "maxHeight": 50,
    "minHeight": 50,
    "backgroundOpacity": 0,
    "right": "2%",
    "verticalAlign": "middle"
   },
   "this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB"
  ]
 },
 {
  "buttonPlay": "this.IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED",
  "buttonPrevious": {
   "mode": "push",
   "paddingRight": 0,
   "paddingLeft": 0,
   "maxWidth": 70,
   "width": "4.24%",
   "iconURL": "skin/IconButton_9FEA51EA_96CC_905A_41D3_F42DB0CD0A74.png",
   "transparencyActive": true,
   "borderRadius": 0,
   "borderSize": 0,
   "rollOverIconURL": "skin/IconButton_9FEA51EA_96CC_905A_41D3_F42DB0CD0A74_rollover.png",
   "shadow": false,
   "horizontalAlign": "center",
   "top": "40%",
   "minWidth": 70,
   "paddingBottom": 0,
   "class": "IconButton",
   "cursor": "hand",
   "bottom": "40%",
   "id": "IconButton_9FEA51EA_96CC_905A_41D3_F42DB0CD0A74",
   "paddingTop": 0,
   "maxHeight": 70,
   "minHeight": 70,
   "left": "1%",
   "backgroundOpacity": 0,
   "verticalAlign": "middle"
  },
  "id": "ViewerAreaLabeled_9FD7235A_96CD_9045_41D9_23A3BCBDB1C6PhotoAlbumPlayer",
  "viewerArea": {
   "paddingRight": 0,
   "progressBorderRadius": 0,
   "progressBarBackgroundColorDirection": "vertical",
   "progressBackgroundColor": [
    "#FFFFFF"
   ],
   "toolTipPaddingBottom": 4,
   "progressBarOpacity": 1,
   "playbackBarProgressBackgroundColorDirection": "vertical",
   "progressRight": 0,
   "toolTipBorderSize": 1,
   "playbackBarBackgroundColor": [
    "#FFFFFF"
   ],
   "toolTipOpacity": 0.7,
   "playbackBarBorderColor": "#FFFFFF",
   "toolTipShadowOpacity": 1,
   "playbackBarHeight": 10,
   "toolTipShadowVerticalLength": 0,
   "shadow": false,
   "playbackBarHeadWidth": 6,
   "toolTipTextShadowColor": "#000000",
   "toolTipFontStyle": "normal",
   "playbackBarBackgroundColorDirection": "vertical",
   "class": "ViewerArea",
   "playbackBarProgressBorderSize": 0,
   "playbackBarHeadBackgroundColorDirection": "vertical",
   "progressBottom": 2,
   "playbackBarHeadShadowVerticalLength": 0,
   "paddingBottom": 0,
   "progressBorderSize": 0,
   "toolTipBackgroundColor": "#000000",
   "progressBarBorderSize": 0,
   "playbackBarRight": 0,
   "progressBarBorderRadius": 0,
   "playbackBarProgressBorderRadius": 0,
   "paddingTop": 0,
   "transitionMode": "blending",
   "toolTipShadowSpread": 0,
   "playbackBarOpacity": 1,
   "toolTipShadowColor": "#333333",
   "toolTipShadowBlurRadius": 3,
   "toolTipFontColor": "#606060",
   "playbackBarBorderRadius": 0,
   "playbackBarHeadShadowHorizontalLength": 0,
   "playbackBarProgressBorderColor": "#000000",
   "playbackBarHeadBackgroundColor": [
    "#111111",
    "#666666"
   ],
   "toolTipPaddingRight": 6,
   "width": "100%",
   "paddingLeft": 0,
   "playbackBarHeadBorderRadius": 0,
   "toolTipTextShadowOpacity": 0,
   "height": "100%",
   "toolTipPaddingTop": 4,
   "borderRadius": 0,
   "progressBackgroundOpacity": 1,
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
   "playbackBarHeadHeight": 15,
   "playbackBarBackgroundOpacity": 1,
   "minWidth": 1,
   "playbackBarBorderSize": 0,
   "toolTipBorderRadius": 3,
   "playbackBarHeadShadowOpacity": 0.7,
   "top": "0%",
   "playbackBarHeadBorderSize": 0,
   "playbackBarHeadBackgroundColorRatios": [
    0,
    1
   ],
   "playbackBarHeadShadowColor": "#000000",
   "id": "ViewerAreaLabeled_9FD7235A_96CD_9045_41D9_23A3BCBDB1C6",
   "toolTipTextShadowBlurRadius": 3,
   "toolTipFontWeight": "normal",
   "toolTipShadowHorizontalLength": 0,
   "playbackBarHeadOpacity": 1,
   "progressBarBackgroundColorRatios": [
    0
   ],
   "playbackBarHeadShadow": true,
   "progressBarBorderColor": "#000000",
   "minHeight": 1,
   "playbackBarBottom": 0,
   "progressBorderColor": "#000000",
   "progressBackgroundColorDirection": "vertical",
   "left": "0%",
   "playbackBarProgressBackgroundColor": [
    "#3399FF"
   ],
   "progressBarBackgroundColor": [
    "#3399FF"
   ],
   "toolTipFontFamily": "Arial",
   "progressOpacity": 1,
   "progressHeight": 10
  },
  "buttonNext": {
   "mode": "push",
   "paddingRight": 0,
   "paddingLeft": 0,
   "maxWidth": 70,
   "width": "4.24%",
   "iconURL": "skin/IconButton_9FB9BD3F_96C5_703B_41D7_65AEE6E85A96.png",
   "transparencyActive": true,
   "borderRadius": 0,
   "borderSize": 0,
   "rollOverIconURL": "skin/IconButton_9FB9BD3F_96C5_703B_41D7_65AEE6E85A96_rollover.png",
   "shadow": false,
   "horizontalAlign": "center",
   "top": "40%",
   "minWidth": 70,
   "cursor": "hand",
   "paddingBottom": 0,
   "class": "IconButton",
   "bottom": "40%",
   "id": "IconButton_9FB9BD3F_96C5_703B_41D7_65AEE6E85A96",
   "paddingTop": 0,
   "maxHeight": 70,
   "minHeight": 70,
   "backgroundOpacity": 0,
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
  "frames": [
   {
    "thumbnailUrl": "media/panorama_6BE40682_606A_FF06_41C3_B3B6845ECE6A_t.jpg",
    "overlays": [
     {
      "useHandCursor": true,
      "maps": [
       {
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
        "hfov": 5.02,
        "yaw": 140.51,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 5.38
       }
      ],
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E, this.camera_552A6ED5_5BF2_F2BA_41D6_D4FD03CB3A2E); this.mainPlayList.set('selectedIndex', 1)",
        "displayTooltipInTouchScreens": true,
        "mapColor": "#FF0000",
        "toolTip": "ENTRANCE",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_6BE4C682_606A_FF06_41C7_F300FD6427E2",
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
      "useHandCursor": true,
      "maps": [
       {
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
        "hfov": 7.16,
        "yaw": 140.49,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 5.92
       }
      ],
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_6CEBB7E8_606A_7D03_41CE_69723C00AA9F, this.camera_7881E0D3_77AF_F812_41DA_737D34EA1B26); this.mainPlayList.set('selectedIndex', 1)",
        "displayTooltipInTouchScreens": true,
        "mapColor": "#FF0000",
        "toolTip": "ENTRANCE",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_6BE4B682_606A_FF06_41BB_7B860FB876D9",
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
      "useHandCursor": true,
      "maps": [
       {
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
        "hfov": 0,
        "yaw": -171.35,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 85.73
       }
      ],
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_6CD96857_606E_330E_41D4_28DA4961B1BD, this.camera_78CD310D_77AF_F9F6_41BE_CE7DC5BF452E); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 5); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 8)"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": true,
      "id": "overlay_6BE48682_606A_FF06_41D0_A48635ED687C",
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
  "pitch": 0,
  "thumbnailUrl": "media/panorama_6BE40682_606A_FF06_41C3_B3B6845ECE6A_t.jpg",
  "id": "panorama_6BE40682_606A_FF06_41C3_B3B6845ECE6A",
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
  "hfovMin": 100,
  "label": "STREET VIEW",
  "hfov": 360,
  "adjacentPanoramas": [
   {
    "panorama": {
     "hfovMax": 120,
     "frames": [
      {
       "thumbnailUrl": "media/panorama_6D430522_6193_00C9_41B5_ED6C4ECBB6B9_t.jpg",
       "overlays": [
        {
         "useHandCursor": true,
         "maps": [
          {
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
           "hfov": 6.58,
           "yaw": 161.77,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -21.08
          }
         ],
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF, this.camera_57262CFF_5BF2_F667_41D4_80634CF1C7DB); this.mainPlayList.set('selectedIndex', 5)",
           "displayTooltipInTouchScreens": true,
           "mapColor": "#FF0000",
           "toolTip": "MASTER BEDROOM",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "id": "overlay_6D431522_6193_00C9_41CD_94205EC4ED0C",
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
         "useHandCursor": true,
         "maps": [
          {
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
           "hfov": 0,
           "yaw": -162.92,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": 80.2
          }
         ],
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_6CD96857_606E_330E_41D4_28DA4961B1BD, this.camera_78469DB8_77AF_E81E_41C2_90256E64705D); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 8)"
          }
         ],
         "enabledInCardboard": true,
         "rollOverDisplay": true,
         "id": "overlay_6D434522_6193_00C9_41D7_CBEE82CF6646",
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
         "useHandCursor": true,
         "maps": [
          {
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
           "hfov": 9.65,
           "yaw": 161.78,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -20.35
          }
         ],
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_6A977261_617E_B0AF_41D7_BFCC461810A7, this.camera_78062D88_77AF_E8FE_41CC_54E4C99019ED); this.mainPlayList.set('selectedIndex', 5)",
           "displayTooltipInTouchScreens": true,
           "mapColor": "#FF0000",
           "toolTip": "MASTER BEDROOM",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "id": "overlay_6D435522_6193_00C9_41A6_BACDEE68C1B5",
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
     "pitch": 0,
     "thumbnailUrl": "media/panorama_6D430522_6193_00C9_41B5_ED6C4ECBB6B9_t.jpg",
     "id": "panorama_6D430522_6193_00C9_41B5_ED6C4ECBB6B9",
     "hfovMin": 100,
     "label": "WC",
     "hfov": 360,
     "adjacentPanoramas": [
      {
       "panorama": {
        "hfovMax": 120,
        "frames": [
         {
          "thumbnailUrl": "media/panorama_6C191CE9_606E_7302_41D6_3E33CDB64ACF_t.jpg",
          "overlays": [
           {
            "useHandCursor": true,
            "maps": [
             {
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
              "hfov": 6.53,
              "yaw": 110.14,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": 9.88
             }
            ],
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF, this.camera_55D7BBEA_5BF2_F263_41D2_B1CC2C57A60F); this.mainPlayList.set('selectedIndex', 5)",
              "displayTooltipInTouchScreens": true,
              "mapColor": "#FF0000",
              "toolTip": "MASTER BEDROOM\u000a",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "id": "overlay_6C196CE9_606E_7302_41D5_0F8D5B1FFA85",
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
            "useHandCursor": true,
            "maps": [
             {
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
              "hfov": 5.79,
              "yaw": 110.2,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -29.15
             }
            ],
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_47B53902_572E_CEDF_41CC_C256D31A5443, this.camera_55FFAC21_5BF2_F59B_41D2_A4CCD4BC65CD); this.mainPlayList.set('selectedIndex', 3)",
              "displayTooltipInTouchScreens": true,
              "mapColor": "#FF0000",
              "toolTip": "LIVING ROOM",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "id": "overlay_6C194CE9_606E_7302_41CE_C32477405DB2",
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
            "useHandCursor": true,
            "maps": [
             {
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
              "hfov": 0,
              "yaw": -170.2,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": 81.21
             }
            ],
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_6CD96857_606E_330E_41D4_28DA4961B1BD, this.camera_67F1FE0F_77AF_EBF2_4194_D00587F62065); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 8); this.mainPlayList.set('selectedIndex', 9)"
             }
            ],
            "enabledInCardboard": true,
            "rollOverDisplay": true,
            "id": "overlay_6C195CE9_606E_7302_41AF_079BD7893DEA",
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
            "useHandCursor": true,
            "maps": [
             {
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
              "hfov": 9.27,
              "yaw": 110.14,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": 10.58
             }
            ],
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_6A977261_617E_B0AF_41D7_BFCC461810A7, this.camera_67B32DDF_77AF_E812_41AA_0234B52A5027); this.mainPlayList.set('selectedIndex', 5)",
              "displayTooltipInTouchScreens": true,
              "mapColor": "#FF0000",
              "toolTip": "MASTER BEDROOM",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "id": "overlay_6C19BCE9_606E_7302_41CF_9F4CE5A90301",
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
            "useHandCursor": true,
            "maps": [
             {
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
              "hfov": 8.18,
              "yaw": 110.2,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -29.85
             }
            ],
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_6C19C4DF_606E_333E_4190_E16296FAA0F2, this.camera_679B0DFB_77AF_E812_41CC_6905073E6F97); this.mainPlayList.set('selectedIndex', 3)",
              "displayTooltipInTouchScreens": true,
              "mapColor": "#FF0000",
              "toolTip": "LIVING ROOM",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "id": "overlay_6C199CE9_606E_7302_41CC_B6B5585FFD41",
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
        "pitch": 0,
        "thumbnailUrl": "media/panorama_6C191CE9_606E_7302_41D6_3E33CDB64ACF_t.jpg",
        "id": "panorama_6C191CE9_606E_7302_41D6_3E33CDB64ACF",
        "hfovMin": 100,
        "label": "1 BEDROOM",
        "hfov": 360,
        "adjacentPanoramas": [
         {
          "panorama": "this.panorama_6D430522_6193_00C9_41B5_ED6C4ECBB6B9",
          "yaw": -170.2,
          "class": "AdjacentPanorama",
          "backwardYaw": -162.92,
          "distance": 1
         },
         {
          "panorama": {
           "hfovMax": 120,
           "frames": [
            {
             "thumbnailUrl": "media/panorama_6CEBB7E8_606A_7D03_41CE_69723C00AA9F_t.jpg",
             "overlays": [
              {
               "useHandCursor": true,
               "maps": [
                {
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
                 "hfov": 4.97,
                 "yaw": -16.79,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -9.28
                }
               ],
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D, this.camera_55581C8B_5BF2_F6AF_41D1_02AAAFF73E03); this.mainPlayList.set('selectedIndex', 2)",
                 "displayTooltipInTouchScreens": true,
                 "mapColor": "#FF0000",
                 "toolTip": "POOL",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "id": "overlay_6CEBF7E8_606A_7D03_41C7_74D43E13E722",
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
               "useHandCursor": true,
               "maps": [
                {
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
                 "hfov": 4.56,
                 "yaw": 0.94,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -25.17
                }
               ],
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E, this.camera_55602CAB_5BF2_F6EF_41A1_3BA349C88636); this.mainPlayList.set('selectedIndex', 0)",
                 "displayTooltipInTouchScreens": true,
                 "mapColor": "#FF0000",
                 "toolTip": "STREET VIEW",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "id": "overlay_6CEBD7E9_606A_7D05_41C3_F00134E174E2",
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
               "useHandCursor": true,
               "maps": [
                {
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
                 "hfov": 0,
                 "yaw": -170.68,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": 83.2
                }
               ],
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_6CD96857_606E_330E_41D4_28DA4961B1BD, this.camera_6769EE69_77AF_E83E_41C2_0C60E2D300E2); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 5); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 8)"
                }
               ],
               "enabledInCardboard": true,
               "rollOverDisplay": true,
               "id": "overlay_6CEB27E9_606A_7D05_41D7_A41537CB50F2",
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
               "useHandCursor": true,
               "maps": [
                {
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
                 "hfov": 7.12,
                 "yaw": -16.8,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -8.74
                }
               ],
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_6A58246F_6179_90B3_41BF_E08163C94BD1, this.camera_673CDE3F_77AF_E812_41DC_F8406DCE8661); this.mainPlayList.set('selectedIndex', 2)",
                 "displayTooltipInTouchScreens": true,
                 "mapColor": "#FF0000",
                 "toolTip": "POOL",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "id": "overlay_6CEB37E9_606A_7D05_41BD_EF0B340A722F",
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
               "useHandCursor": true,
               "maps": [
                {
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
                 "hfov": 6.54,
                 "yaw": 0.93,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -24.65
                }
               ],
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_6BE40682_606A_FF06_41C3_B3B6845ECE6A, this.camera_6764AE5E_77AF_E812_41A6_26A216F97DC4); this.mainPlayList.set('selectedIndex', 0)",
                 "displayTooltipInTouchScreens": true,
                 "mapColor": "#FF0000",
                 "toolTip": "STREET VIEW",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "id": "overlay_6CEB07E9_606A_7D05_4196_BF907A07BBE0",
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
           "pitch": 0,
           "thumbnailUrl": "media/panorama_6CEBB7E8_606A_7D03_41CE_69723C00AA9F_t.jpg",
           "id": "panorama_6CEBB7E8_606A_7D03_41CE_69723C00AA9F",
           "hfovMin": 100,
           "label": "ENTRANCE",
           "hfov": 360,
           "adjacentPanoramas": [
            {
             "panorama": "this.panorama_6D430522_6193_00C9_41B5_ED6C4ECBB6B9",
             "yaw": -170.68,
             "class": "AdjacentPanorama",
             "backwardYaw": -162.92,
             "distance": 1
            },
            {
             "panorama": "this.panorama_6C191CE9_606E_7302_41D6_3E33CDB64ACF",
             "yaw": -170.68,
             "class": "AdjacentPanorama",
             "backwardYaw": -170.2,
             "distance": 1
            },
            {
             "panorama": {
              "hfovMax": 120,
              "frames": [
               {
                "thumbnailUrl": "media/panorama_6CD1C202_606E_7706_41A2_313E1DC1AF6A_t.jpg",
                "overlays": [
                 {
                  "useHandCursor": true,
                  "maps": [
                   {
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
                    "hfov": 6.52,
                    "yaw": 112.43,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": 10.35
                   }
                  ],
                  "areas": [
                   {
                    "click": "this.startPanoramaWithCamera(this.panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116, this.camera_56043BB0_5BF2_F2FA_41B1_1DE6A0E08A4C); this.mainPlayList.set('selectedIndex', 9)",
                    "displayTooltipInTouchScreens": true,
                    "mapColor": "#FF0000",
                    "toolTip": "ROOFTOP",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "id": "overlay_6CD1D202_606E_7706_41D0_E978E2A252CB",
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
                  "useHandCursor": true,
                  "maps": [
                   {
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
                    "hfov": 5.9,
                    "yaw": 112.31,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -27.07
                   }
                  ],
                  "areas": [
                   {
                    "click": "this.startPanoramaWithCamera(this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF, this.camera_56700B7F_5BF2_F267_41C2_DC8D8F885C23); this.mainPlayList.set('selectedIndex', 5)",
                    "displayTooltipInTouchScreens": true,
                    "mapColor": "#FF0000",
                    "toolTip": "MASTER BEDROOM",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "id": "overlay_6CD12202_606E_7706_41D5_D60F47394C73",
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
                  "useHandCursor": true,
                  "maps": [
                   {
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
                    "hfov": 0,
                    "yaw": -172.21,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": 81.71
                   }
                  ],
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_6BE40682_606A_FF06_41C3_B3B6845ECE6A, this.camera_66E6CEF4_77AF_E816_41B7_7520F7357F3C); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 4)"
                   }
                  ],
                  "enabledInCardboard": true,
                  "rollOverDisplay": true,
                  "id": "overlay_6CD13202_606E_7706_41CF_4D4A88F8DD7C",
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
                  "useHandCursor": true,
                  "maps": [
                   {
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
                    "hfov": 9.33,
                    "yaw": 112.38,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": 11.07
                   }
                  ],
                  "areas": [
                   {
                    "click": "this.startPanoramaWithCamera(this.panorama_6CD96857_606E_330E_41D4_28DA4961B1BD, this.camera_66E8BF04_77AF_E9F6_419C_8B0836BD21DC); this.mainPlayList.set('selectedIndex', 9)",
                    "displayTooltipInTouchScreens": true,
                    "mapColor": "#FF0000",
                    "toolTip": "ROOFTOP",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "id": "overlay_6CD10202_606E_7706_41D6_AE1ABEA4B027",
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
                  "useHandCursor": true,
                  "maps": [
                   {
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
                    "hfov": 8.41,
                    "yaw": 112.32,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -27.76
                   }
                  ],
                  "areas": [
                   {
                    "click": "this.startPanoramaWithCamera(this.panorama_6A977261_617E_B0AF_41D7_BFCC461810A7, this.camera_66AE2EAC_77AF_E836_41DA_D5275F2E4A23); this.mainPlayList.set('selectedIndex', 5)",
                    "displayTooltipInTouchScreens": true,
                    "mapColor": "#FF0000",
                    "toolTip": "MASTER BEDROOM",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "id": "overlay_6CD14202_606E_7706_41A6_8230B16AC2AD",
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
              "pitch": 0,
              "thumbnailUrl": "media/panorama_6CD1C202_606E_7706_41A2_313E1DC1AF6A_t.jpg",
              "id": "panorama_6CD1C202_606E_7706_41A2_313E1DC1AF6A",
              "hfovMin": 100,
              "label": "2 BEDROOM",
              "hfov": 360,
              "adjacentPanoramas": [
               {
                "panorama": "this.panorama_6D430522_6193_00C9_41B5_ED6C4ECBB6B9",
                "yaw": -172.21,
                "class": "AdjacentPanorama",
                "backwardYaw": -162.92,
                "distance": 1
               },
               {
                "panorama": "this.panorama_6C191CE9_606E_7302_41D6_3E33CDB64ACF",
                "yaw": -172.21,
                "class": "AdjacentPanorama",
                "backwardYaw": -170.2,
                "distance": 1
               },
               {
                "panorama": "this.panorama_6CEBB7E8_606A_7D03_41CE_69723C00AA9F",
                "yaw": -172.21,
                "class": "AdjacentPanorama",
                "backwardYaw": -170.68,
                "distance": 1
               },
               {
                "panorama": {
                 "hfovMax": 120,
                 "frames": [
                  {
                   "thumbnailUrl": "media/panorama_6A977261_617E_B0AF_41D7_BFCC461810A7_t.jpg",
                   "overlays": [
                    {
                     "useHandCursor": true,
                     "maps": [
                      {
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
                       "hfov": 5.48,
                       "yaw": -178.25,
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -40.5
                      }
                     ],
                     "areas": [
                      {
                       "click": "this.startPanoramaWithCamera(this.panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C, this.camera_569B6D6C_5BF2_F669_41A7_8467FF9A6DAA); this.mainPlayList.set('selectedIndex', 6)",
                       "displayTooltipInTouchScreens": true,
                       "mapColor": "#FF0000",
                       "toolTip": "BALCONY",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "id": "overlay_6A97A261_617E_B0AF_41D7_24B743DC61D2",
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
                     "useHandCursor": true,
                     "maps": [
                      {
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
                       "hfov": 5.53,
                       "yaw": 83.07,
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -22.75
                      }
                     ],
                     "areas": [
                      {
                       "click": "this.startPanoramaWithCamera(this.panorama_46009756_572D_4167_41C6_2B49BD1EF7CE, this.camera_56E74D59_5BF2_F7AA_41D0_B6C262499B65); this.mainPlayList.set('selectedIndex', 7)",
                       "displayTooltipInTouchScreens": true,
                       "mapColor": "#FF0000",
                       "toolTip": "WC",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "id": "overlay_6A97B261_617E_B0AF_41D1_B251D53872F0",
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
                     "useHandCursor": true,
                     "maps": [
                      {
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
                       "hfov": 5.37,
                       "yaw": 34.84,
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": 6.1
                      }
                     ],
                     "areas": [
                      {
                       "click": "this.startPanoramaWithCamera(this.panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D, this.camera_56C57D3C_5BF2_F7EA_41BA_23AB5285E45A); this.mainPlayList.set('selectedIndex', 8)",
                       "displayTooltipInTouchScreens": true,
                       "mapColor": "#FF0000",
                       "toolTip": "2 BEDROOM",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "id": "overlay_6A978261_617E_B0AF_41D6_7BE73BA5D265",
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
                     "useHandCursor": true,
                     "maps": [
                      {
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
                       "hfov": 5.27,
                       "yaw": 34.74,
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -12.59
                      }
                     ],
                     "areas": [
                      {
                       "click": "this.startPanoramaWithCamera(this.panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC, this.camera_56F35D45_5BF2_F79A_41D0_857D96DC10DF); this.mainPlayList.set('selectedIndex', 4)",
                       "displayTooltipInTouchScreens": true,
                       "mapColor": "#FF0000",
                       "toolTip": "1 BEDROOM",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "id": "overlay_6A979261_617E_B0AF_41A6_BE54EDD373AB",
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
                     "useHandCursor": true,
                     "maps": [
                      {
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
                       "hfov": 0,
                       "yaw": -162.92,
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": 76.94
                      }
                     ],
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_6CD96857_606E_330E_41D4_28DA4961B1BD, this.camera_66683F72_77AF_E812_41C1_7A426DEA986C); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 3)"
                      }
                     ],
                     "enabledInCardboard": true,
                     "rollOverDisplay": true,
                     "id": "overlay_6A97D261_617E_B0AF_41CF_A4EC460D5CAA",
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
                     "useHandCursor": true,
                     "maps": [
                      {
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
                       "hfov": 7.74,
                       "yaw": -178.18,
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -39.8
                      }
                     ],
                     "areas": [
                      {
                       "click": "this.startPanoramaWithCamera(this.panorama_6CE9E5E7_606E_5D0E_41D0_003A6E1B2677, this.camera_66053F52_77AF_E812_41B9_6E9F5D4018F6); this.mainPlayList.set('selectedIndex', 6)",
                       "displayTooltipInTouchScreens": true,
                       "mapColor": "#FF0000",
                       "toolTip": "BALCONY",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "id": "overlay_6A903261_617E_B0AF_41C8_625EAD8D3F30",
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
                     "useHandCursor": true,
                     "maps": [
                      {
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
                       "hfov": 8,
                       "yaw": 82.9,
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -22.11
                      }
                     ],
                     "areas": [
                      {
                       "click": "this.startPanoramaWithCamera(this.panorama_6D430522_6193_00C9_41B5_ED6C4ECBB6B9, this.camera_66FACF19_77AF_E81E_41BD_F48DB0960E33); this.mainPlayList.set('selectedIndex', 7)",
                       "displayTooltipInTouchScreens": true,
                       "mapColor": "#FF0000",
                       "toolTip": "WC",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "id": "overlay_6A906261_617E_B0AF_41BC_A0855EAB9939",
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
                     "useHandCursor": true,
                     "maps": [
                      {
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
                       "hfov": 7.65,
                       "yaw": 34.82,
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": 6.66
                      }
                     ],
                     "areas": [
                      {
                       "click": "this.startPanoramaWithCamera(this.panorama_6CD1C202_606E_7706_41A2_313E1DC1AF6A, this.camera_66216F3C_77AF_E816_41C3_2C4337920A63); this.mainPlayList.set('selectedIndex', 8)",
                       "displayTooltipInTouchScreens": true,
                       "mapColor": "#FF0000",
                       "toolTip": "2 BEDROOM",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "id": "overlay_6A905261_617E_B0AF_41CC_7B64654FA5FE",
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
                     "useHandCursor": true,
                     "maps": [
                      {
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
                       "hfov": 7.5,
                       "yaw": 34.73,
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -13.17
                      }
                     ],
                     "areas": [
                      {
                       "click": "this.startPanoramaWithCamera(this.panorama_6C191CE9_606E_7302_41D6_3E33CDB64ACF, this.camera_66CD2F27_77AF_E832_41C7_B23DB0CB5F72); this.mainPlayList.set('selectedIndex', 4)",
                       "displayTooltipInTouchScreens": true,
                       "mapColor": "#FF0000",
                       "toolTip": "1 BEDROOM",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "id": "overlay_6A908261_617E_B0AF_418A_E6ADA829CA5F",
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
                 "pitch": 0,
                 "thumbnailUrl": "media/panorama_6A977261_617E_B0AF_41D7_BFCC461810A7_t.jpg",
                 "id": "panorama_6A977261_617E_B0AF_41D7_BFCC461810A7",
                 "hfovMin": 100,
                 "label": "MASTER BEDROOM",
                 "hfov": 360,
                 "adjacentPanoramas": [
                  {
                   "panorama": "this.panorama_6D430522_6193_00C9_41B5_ED6C4ECBB6B9",
                   "yaw": 82.9,
                   "class": "AdjacentPanorama",
                   "backwardYaw": 161.78,
                   "distance": 1
                  },
                  {
                   "panorama": "this.panorama_6C191CE9_606E_7302_41D6_3E33CDB64ACF",
                   "yaw": 34.73,
                   "class": "AdjacentPanorama",
                   "backwardYaw": 110.14,
                   "distance": 1
                  },
                  {
                   "panorama": "this.panorama_6CEBB7E8_606A_7D03_41CE_69723C00AA9F",
                   "yaw": -162.92,
                   "class": "AdjacentPanorama",
                   "backwardYaw": -170.68,
                   "distance": 1
                  },
                  {
                   "panorama": "this.panorama_6CD1C202_606E_7706_41A2_313E1DC1AF6A",
                   "yaw": 34.82,
                   "class": "AdjacentPanorama",
                   "backwardYaw": 112.32,
                   "distance": 1
                  },
                  {
                   "panorama": {
                    "hfovMax": 120,
                    "frames": [
                     {
                      "thumbnailUrl": "media/panorama_6A58246F_6179_90B3_41BF_E08163C94BD1_t.jpg",
                      "overlays": [
                       {
                        "useHandCursor": true,
                        "maps": [
                         {
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
                          "hfov": 6.33,
                          "yaw": 12.08,
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": -33.14
                         }
                        ],
                        "areas": [
                         {
                          "click": "this.startPanoramaWithCamera(this.panorama_47B53902_572E_CEDF_41CC_C256D31A5443, this.camera_566FDDCF_5BF2_F6A7_41C3_D60F04E20C30); this.mainPlayList.set('selectedIndex', 3)",
                          "displayTooltipInTouchScreens": true,
                          "mapColor": "#FF0000",
                          "toolTip": "LIVING ROOM",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "id": "overlay_6A5FC46F_6179_90B3_41A1_966751D2051C",
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
                        "useHandCursor": true,
                        "maps": [
                         {
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
                          "hfov": 5.99,
                          "yaw": -97.88,
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": -16.95
                         }
                        ],
                        "areas": [
                         {
                          "click": "this.startPanoramaWithCamera(this.panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E, this.camera_565ACDA7_5BF2_F6E7_41BA_8BE7CEB9351B); this.mainPlayList.set('selectedIndex', 1)",
                          "displayTooltipInTouchScreens": true,
                          "mapColor": "#FF0000",
                          "toolTip": "ENTRANCE",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "id": "overlay_6A5FE46F_6179_90B3_41C4_4A33968EF991",
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
                        "useHandCursor": true,
                        "maps": [
                         {
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
                          "hfov": 0,
                          "yaw": -172.22,
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": 82.35
                         }
                        ],
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_6CD96857_606E_330E_41D4_28DA4961B1BD, this.camera_65EB9FCE_77AF_E872_41D1_A54CF08DAAF9); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 5); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 8); this.mainPlayList.set('selectedIndex', 6)"
                         }
                        ],
                        "enabledInCardboard": true,
                        "rollOverDisplay": true,
                        "id": "overlay_6A5F8470_6179_90AD_41C3_7E7F70A3F932",
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
                        "useHandCursor": true,
                        "maps": [
                         {
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
                          "hfov": 9.13,
                          "yaw": 12.06,
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": -32.33
                         }
                        ],
                        "areas": [
                         {
                          "click": "this.startPanoramaWithCamera(this.panorama_6C19C4DF_606E_333E_4190_E16296FAA0F2, this.camera_65971FBA_77AF_E812_41A0_B64A5EE1BEA1); this.mainPlayList.set('selectedIndex', 3)",
                          "displayTooltipInTouchScreens": true,
                          "mapColor": "#FF0000",
                          "toolTip": "LIVING ROOM",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "id": "overlay_6A5FA470_6179_90AD_41C2_B45238960A98",
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
                        "useHandCursor": true,
                        "maps": [
                         {
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
                          "hfov": 8.61,
                          "yaw": -97.22,
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": -16.94
                         }
                        ],
                        "areas": [
                         {
                          "click": "this.startPanoramaWithCamera(this.panorama_6CEBB7E8_606A_7D03_41CE_69723C00AA9F, this.camera_6651EF92_77AF_E812_41CF_20EB5211A157); this.mainPlayList.set('selectedIndex', 1)",
                          "displayTooltipInTouchScreens": true,
                          "mapColor": "#FF0000",
                          "toolTip": "ENTRANCE",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "id": "overlay_6A5F7470_6179_90AD_41D6_DA66F87CC0A2",
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
                    "pitch": 0,
                    "thumbnailUrl": "media/panorama_6A58246F_6179_90B3_41BF_E08163C94BD1_t.jpg",
                    "id": "panorama_6A58246F_6179_90B3_41BF_E08163C94BD1",
                    "hfovMin": 100,
                    "label": "POOL",
                    "hfov": 360,
                    "adjacentPanoramas": [
                     {
                      "panorama": "this.panorama_6D430522_6193_00C9_41B5_ED6C4ECBB6B9",
                      "yaw": -172.22,
                      "class": "AdjacentPanorama",
                      "backwardYaw": -162.92,
                      "distance": 1
                     },
                     {
                      "panorama": "this.panorama_6C191CE9_606E_7302_41D6_3E33CDB64ACF",
                      "yaw": -172.22,
                      "class": "AdjacentPanorama",
                      "backwardYaw": -170.2,
                      "distance": 1
                     },
                     {
                      "panorama": "this.panorama_6CEBB7E8_606A_7D03_41CE_69723C00AA9F",
                      "yaw": -97.22,
                      "class": "AdjacentPanorama",
                      "backwardYaw": -16.8,
                      "distance": 1
                     },
                     {
                      "panorama": "this.panorama_6CD1C202_606E_7706_41A2_313E1DC1AF6A",
                      "yaw": -172.22,
                      "class": "AdjacentPanorama",
                      "backwardYaw": -172.21,
                      "distance": 1
                     },
                     {
                      "panorama": "this.panorama_6A977261_617E_B0AF_41D7_BFCC461810A7",
                      "yaw": -172.22,
                      "class": "AdjacentPanorama",
                      "backwardYaw": -162.92,
                      "distance": 1
                     },
                     {
                      "panorama": {
                       "hfovMax": 120,
                       "frames": [
                        {
                         "thumbnailUrl": "media/panorama_6CE9E5E7_606E_5D0E_41D0_003A6E1B2677_t.jpg",
                         "overlays": [
                          {
                           "useHandCursor": true,
                           "maps": [
                            {
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
                             "hfov": 6.32,
                             "yaw": -174.37,
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": -43
                            }
                           ],
                           "areas": [
                            {
                             "click": "this.startPanoramaWithCamera(this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF, this.camera_55CB7E16_5BF2_F5B9_4191_4ABD27800AF8); this.mainPlayList.set('selectedIndex', 5)",
                             "displayTooltipInTouchScreens": true,
                             "mapColor": "#FF0000",
                             "toolTip": "MASTER BEDROOM",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "id": "overlay_6CE905E7_606E_5D0E_41D6_6987D7C74D84",
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
                           "useHandCursor": true,
                           "maps": [
                            {
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
                             "hfov": 0,
                             "yaw": -170.58,
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": 85.29
                            }
                           ],
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_6CD96857_606E_330E_41D4_28DA4961B1BD, this.camera_7944805F_77AF_F812_41CC_844F5B7A7E74); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 8); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 7)"
                            }
                           ],
                           "enabledInCardboard": true,
                           "rollOverDisplay": true,
                           "id": "overlay_6CE935E7_606E_5D0E_41B5_25998E7B79AC",
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
                           "useHandCursor": true,
                           "maps": [
                            {
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
                             "hfov": 9.34,
                             "yaw": -174.34,
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": -42.17
                            }
                           ],
                           "areas": [
                            {
                             "click": "this.startPanoramaWithCamera(this.panorama_6A977261_617E_B0AF_41D7_BFCC461810A7, this.camera_65334001_77AF_F7EE_4174_F3D7965C925E); this.mainPlayList.set('selectedIndex', 5)",
                             "displayTooltipInTouchScreens": true,
                             "mapColor": "#FF0000",
                             "toolTip": "MASTER BEDROOM",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "id": "overlay_6CE925E7_606E_5D0E_4192_83F40E803C6A",
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
                       "pitch": 0,
                       "thumbnailUrl": "media/panorama_6CE9E5E7_606E_5D0E_41D0_003A6E1B2677_t.jpg",
                       "id": "panorama_6CE9E5E7_606E_5D0E_41D0_003A6E1B2677",
                       "hfovMin": 100,
                       "label": "BALCONY",
                       "hfov": 360,
                       "adjacentPanoramas": [
                        {
                         "panorama": "this.panorama_6D430522_6193_00C9_41B5_ED6C4ECBB6B9",
                         "yaw": -170.58,
                         "class": "AdjacentPanorama",
                         "backwardYaw": -162.92,
                         "distance": 1
                        },
                        {
                         "panorama": "this.panorama_6C191CE9_606E_7302_41D6_3E33CDB64ACF",
                         "yaw": -170.58,
                         "class": "AdjacentPanorama",
                         "backwardYaw": -170.2,
                         "distance": 1
                        },
                        {
                         "panorama": "this.panorama_6CEBB7E8_606A_7D03_41CE_69723C00AA9F",
                         "yaw": -170.58,
                         "class": "AdjacentPanorama",
                         "backwardYaw": -170.68,
                         "distance": 1
                        },
                        {
                         "panorama": "this.panorama_6CD1C202_606E_7706_41A2_313E1DC1AF6A",
                         "yaw": -170.58,
                         "class": "AdjacentPanorama",
                         "backwardYaw": -172.21,
                         "distance": 1
                        },
                        {
                         "panorama": "this.panorama_6A977261_617E_B0AF_41D7_BFCC461810A7",
                         "yaw": -174.34,
                         "class": "AdjacentPanorama",
                         "backwardYaw": -178.18,
                         "distance": 1
                        },
                        {
                         "panorama": "this.panorama_6A58246F_6179_90B3_41BF_E08163C94BD1",
                         "yaw": -170.58,
                         "class": "AdjacentPanorama",
                         "backwardYaw": -172.22,
                         "distance": 1
                        },
                        {
                         "panorama": {
                          "hfovMax": 120,
                          "frames": [
                           {
                            "thumbnailUrl": "media/panorama_6C19C4DF_606E_333E_4190_E16296FAA0F2_t.jpg",
                            "overlays": [
                             {
                              "useHandCursor": true,
                              "maps": [
                               {
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
                                "hfov": 5.94,
                                "yaw": 42.19,
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": -7.8
                               }
                              ],
                              "areas": [
                               {
                                "click": "this.startPanoramaWithCamera(this.panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC, this.camera_55BE4E50_5BF2_F5B9_41B2_A0DBD967D7CD); this.mainPlayList.set('selectedIndex', 4)",
                                "displayTooltipInTouchScreens": true,
                                "mapColor": "#FF0000",
                                "toolTip": "1 BEDROOM",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "id": "overlay_6C19D4DF_606E_333E_41D7_DF0866378D6D",
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
                              "useHandCursor": true,
                              "maps": [
                               {
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
                                "hfov": 5.24,
                                "yaw": -176.64,
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": -29.18
                               }
                              ],
                              "areas": [
                               {
                                "click": "this.startPanoramaWithCamera(this.panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D, this.camera_5577FE77_5BF2_F267_41AE_B186A0A61737); this.mainPlayList.set('selectedIndex', 2)",
                                "displayTooltipInTouchScreens": true,
                                "mapColor": "#FF0000",
                                "toolTip": "POOL",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "id": "overlay_6C19E4E0_606E_3302_41B7_0A4293889168",
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
                              "useHandCursor": true,
                              "maps": [
                               {
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
                                "hfov": 0,
                                "yaw": -171.96,
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": 82.97
                               }
                              ],
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_6CD96857_606E_330E_41D4_28DA4961B1BD, this.camera_78B7E0B6_77AF_F812_41DD_A4E543CF2110); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 8); this.mainPlayList.set('selectedIndex', 5)"
                               }
                              ],
                              "enabledInCardboard": true,
                              "rollOverDisplay": true,
                              "id": "overlay_6C19F4E0_606E_3302_41CA_2AF915CCFDC5",
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
                              "useHandCursor": true,
                              "maps": [
                               {
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
                                "hfov": 8.57,
                                "yaw": 42.16,
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": -7.17
                               }
                              ],
                              "areas": [
                               {
                                "click": "this.startPanoramaWithCamera(this.panorama_6C191CE9_606E_7302_41D6_3E33CDB64ACF, this.camera_794A8072_77AF_F812_41D4_9A79AF9DE687); this.mainPlayList.set('selectedIndex', 4)",
                                "displayTooltipInTouchScreens": true,
                                "mapColor": "#FF0000",
                                "toolTip": "1 BEDROOM",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "id": "overlay_6C1E24E0_606E_3302_41CB_D0F52E6D20B7",
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
                              "useHandCursor": true,
                              "maps": [
                               {
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
                                "hfov": 7.59,
                                "yaw": -176.63,
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": -28.5
                               }
                              ],
                              "areas": [
                               {
                                "click": "this.startPanoramaWithCamera(this.panorama_6A58246F_6179_90B3_41BF_E08163C94BD1, this.camera_78A76099_77AF_F81E_41C8_2CE594E174DD); this.mainPlayList.set('selectedIndex', 2)",
                                "displayTooltipInTouchScreens": true,
                                "mapColor": "#FF0000",
                                "toolTip": "POOL",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "id": "overlay_6C1E44E0_606E_3302_418A_865A93684CDA",
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
                          "pitch": 0,
                          "thumbnailUrl": "media/panorama_6C19C4DF_606E_333E_4190_E16296FAA0F2_t.jpg",
                          "id": "panorama_6C19C4DF_606E_333E_4190_E16296FAA0F2",
                          "hfovMin": 100,
                          "label": "LIVING ROOM",
                          "hfov": 360,
                          "adjacentPanoramas": [
                           {
                            "panorama": "this.panorama_6D430522_6193_00C9_41B5_ED6C4ECBB6B9",
                            "yaw": -171.96,
                            "class": "AdjacentPanorama",
                            "backwardYaw": -162.92,
                            "distance": 1
                           },
                           {
                            "panorama": "this.panorama_6C191CE9_606E_7302_41D6_3E33CDB64ACF",
                            "yaw": 42.16,
                            "class": "AdjacentPanorama",
                            "backwardYaw": 110.2,
                            "distance": 1
                           },
                           {
                            "panorama": "this.panorama_6CEBB7E8_606A_7D03_41CE_69723C00AA9F",
                            "yaw": -171.96,
                            "class": "AdjacentPanorama",
                            "backwardYaw": -170.68,
                            "distance": 1
                           },
                           {
                            "panorama": "this.panorama_6CD1C202_606E_7706_41A2_313E1DC1AF6A",
                            "yaw": -171.96,
                            "class": "AdjacentPanorama",
                            "backwardYaw": -172.21,
                            "distance": 1
                           },
                           {
                            "panorama": "this.panorama_6A977261_617E_B0AF_41D7_BFCC461810A7",
                            "yaw": -171.96,
                            "class": "AdjacentPanorama",
                            "backwardYaw": -162.92,
                            "distance": 1
                           },
                           {
                            "panorama": "this.panorama_6A58246F_6179_90B3_41BF_E08163C94BD1",
                            "yaw": -176.63,
                            "class": "AdjacentPanorama",
                            "backwardYaw": 12.06,
                            "distance": 1
                           },
                           {
                            "panorama": "this.panorama_6CE9E5E7_606E_5D0E_41D0_003A6E1B2677",
                            "yaw": -171.96,
                            "class": "AdjacentPanorama",
                            "backwardYaw": -170.58,
                            "distance": 1
                           },
                           {
                            "panorama": "this.panorama_6BE40682_606A_FF06_41C3_B3B6845ECE6A",
                            "yaw": -171.96,
                            "class": "AdjacentPanorama",
                            "backwardYaw": -171.35,
                            "distance": 1
                           },
                           {
                            "panorama": {
                             "hfovMax": 120,
                             "frames": [
                              {
                               "thumbnailUrl": "media/panorama_6CD96857_606E_330E_41D4_28DA4961B1BD_t.jpg",
                               "overlays": [
                                {
                                 "useHandCursor": true,
                                 "maps": [
                                  {
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
                                   "hfov": 5.63,
                                   "yaw": 18.78,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": -20.36
                                  }
                                 ],
                                 "areas": [
                                  {
                                   "click": "this.startPanoramaWithCamera(this.panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D, this.camera_5488DF3C_5BF2_F3E9_41D1_C652E087859B); this.mainPlayList.set('selectedIndex', 8)",
                                   "displayTooltipInTouchScreens": true,
                                   "mapColor": "#FF0000",
                                   "toolTip": "2 BEDROOM",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "id": "overlay_6CD97857_606E_330E_41A6_312860002B40",
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
                                 "useHandCursor": true,
                                 "maps": [
                                  {
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
                                   "hfov": 0,
                                   "yaw": -173.12,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": 85.84
                                  }
                                 ],
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.startPanoramaWithCamera(this.panorama_6BE40682_606A_FF06_41C3_B3B6845ECE6A, this.camera_78461163_77AF_F832_41CA_9658ABCBD678); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 5); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 4)"
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": true,
                                 "id": "overlay_6CD90857_606E_330E_41C7_82511C5367F4",
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
                                 "useHandCursor": true,
                                 "maps": [
                                  {
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
                                   "hfov": 8.07,
                                   "yaw": 18.79,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": -21.01
                                  }
                                 ],
                                 "areas": [
                                  {
                                   "click": "this.startPanoramaWithCamera(this.panorama_6CD1C202_606E_7706_41A2_313E1DC1AF6A, this.camera_78388133_77AF_F812_41D3_7F77B3050C51); this.mainPlayList.set('selectedIndex', 8)",
                                   "displayTooltipInTouchScreens": true,
                                   "mapColor": "#FF0000",
                                   "toolTip": "2 BEDROOM",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "id": "overlay_6CD91857_606E_330E_41C0_9563969F6B1D",
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
                             "pitch": 0,
                             "thumbnailUrl": "media/panorama_6CD96857_606E_330E_41D4_28DA4961B1BD_t.jpg",
                             "id": "panorama_6CD96857_606E_330E_41D4_28DA4961B1BD",
                             "hfovMin": 100,
                             "label": "ROOFTOP",
                             "hfov": 360,
                             "adjacentPanoramas": [
                              {
                               "panorama": "this.panorama_6D430522_6193_00C9_41B5_ED6C4ECBB6B9",
                               "yaw": -173.12,
                               "class": "AdjacentPanorama",
                               "backwardYaw": -162.92,
                               "distance": 1
                              },
                              {
                               "panorama": "this.panorama_6C191CE9_606E_7302_41D6_3E33CDB64ACF",
                               "yaw": -173.12,
                               "class": "AdjacentPanorama",
                               "backwardYaw": -170.2,
                               "distance": 1
                              },
                              {
                               "panorama": "this.panorama_6CEBB7E8_606A_7D03_41CE_69723C00AA9F",
                               "yaw": -173.12,
                               "class": "AdjacentPanorama",
                               "backwardYaw": -170.68,
                               "distance": 1
                              },
                              {
                               "panorama": "this.panorama_6CD1C202_606E_7706_41A2_313E1DC1AF6A",
                               "yaw": 18.79,
                               "class": "AdjacentPanorama",
                               "backwardYaw": 112.38,
                               "distance": 1
                              },
                              {
                               "panorama": "this.panorama_6A977261_617E_B0AF_41D7_BFCC461810A7",
                               "yaw": -173.12,
                               "class": "AdjacentPanorama",
                               "backwardYaw": -162.92,
                               "distance": 1
                              },
                              {
                               "panorama": "this.panorama_6A58246F_6179_90B3_41BF_E08163C94BD1",
                               "yaw": -173.12,
                               "class": "AdjacentPanorama",
                               "backwardYaw": -172.22,
                               "distance": 1
                              },
                              {
                               "panorama": "this.panorama_6CE9E5E7_606E_5D0E_41D0_003A6E1B2677",
                               "yaw": -173.12,
                               "class": "AdjacentPanorama",
                               "backwardYaw": -170.58,
                               "distance": 1
                              },
                              {
                               "panorama": "this.panorama_6C19C4DF_606E_333E_4190_E16296FAA0F2",
                               "yaw": -173.12,
                               "class": "AdjacentPanorama",
                               "backwardYaw": -171.96,
                               "distance": 1
                              },
                              {
                               "panorama": "this.panorama_6BE40682_606A_FF06_41C3_B3B6845ECE6A",
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
                         "panorama": "this.panorama_6BE40682_606A_FF06_41C3_B3B6845ECE6A",
                         "yaw": -170.58,
                         "class": "AdjacentPanorama",
                         "backwardYaw": -171.35,
                         "distance": 1
                        },
                        {
                         "panorama": "this.panorama_6CD96857_606E_330E_41D4_28DA4961B1BD",
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
                      "panorama": "this.panorama_6C19C4DF_606E_333E_4190_E16296FAA0F2",
                      "yaw": 12.06,
                      "class": "AdjacentPanorama",
                      "backwardYaw": -176.63,
                      "distance": 1
                     },
                     {
                      "panorama": "this.panorama_6BE40682_606A_FF06_41C3_B3B6845ECE6A",
                      "yaw": -172.22,
                      "class": "AdjacentPanorama",
                      "backwardYaw": -171.35,
                      "distance": 1
                     },
                     {
                      "panorama": "this.panorama_6CD96857_606E_330E_41D4_28DA4961B1BD",
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
                   "panorama": "this.panorama_6CE9E5E7_606E_5D0E_41D0_003A6E1B2677",
                   "yaw": -178.18,
                   "class": "AdjacentPanorama",
                   "backwardYaw": -174.34,
                   "distance": 1
                  },
                  {
                   "panorama": "this.panorama_6C19C4DF_606E_333E_4190_E16296FAA0F2",
                   "yaw": -162.92,
                   "class": "AdjacentPanorama",
                   "backwardYaw": -171.96,
                   "distance": 1
                  },
                  {
                   "panorama": "this.panorama_6BE40682_606A_FF06_41C3_B3B6845ECE6A",
                   "yaw": -162.92,
                   "class": "AdjacentPanorama",
                   "backwardYaw": -171.35,
                   "distance": 1
                  },
                  {
                   "panorama": "this.panorama_6CD96857_606E_330E_41D4_28DA4961B1BD",
                   "yaw": -162.92,
                   "class": "AdjacentPanorama",
                   "backwardYaw": -173.12,
                   "distance": 1
                  }
                 ],
                 "class": "Panorama",
                 "vfov": 180
                },
                "yaw": 112.32,
                "class": "AdjacentPanorama",
                "backwardYaw": 34.82,
                "distance": 1
               },
               {
                "panorama": "this.panorama_6A58246F_6179_90B3_41BF_E08163C94BD1",
                "yaw": -172.21,
                "class": "AdjacentPanorama",
                "backwardYaw": -172.22,
                "distance": 1
               },
               {
                "panorama": "this.panorama_6CE9E5E7_606E_5D0E_41D0_003A6E1B2677",
                "yaw": -172.21,
                "class": "AdjacentPanorama",
                "backwardYaw": -170.58,
                "distance": 1
               },
               {
                "panorama": "this.panorama_6C19C4DF_606E_333E_4190_E16296FAA0F2",
                "yaw": -172.21,
                "class": "AdjacentPanorama",
                "backwardYaw": -171.96,
                "distance": 1
               },
               {
                "panorama": "this.panorama_6BE40682_606A_FF06_41C3_B3B6845ECE6A",
                "yaw": -172.21,
                "class": "AdjacentPanorama",
                "backwardYaw": -171.35,
                "distance": 1
               },
               {
                "panorama": "this.panorama_6CD96857_606E_330E_41D4_28DA4961B1BD",
                "yaw": 112.38,
                "class": "AdjacentPanorama",
                "backwardYaw": 18.79,
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
             "panorama": "this.panorama_6A977261_617E_B0AF_41D7_BFCC461810A7",
             "yaw": -170.68,
             "class": "AdjacentPanorama",
             "backwardYaw": -162.92,
             "distance": 1
            },
            {
             "panorama": "this.panorama_6A58246F_6179_90B3_41BF_E08163C94BD1",
             "yaw": -16.8,
             "class": "AdjacentPanorama",
             "backwardYaw": -97.22,
             "distance": 1
            },
            {
             "panorama": "this.panorama_6CE9E5E7_606E_5D0E_41D0_003A6E1B2677",
             "yaw": -170.68,
             "class": "AdjacentPanorama",
             "backwardYaw": -170.58,
             "distance": 1
            },
            {
             "panorama": "this.panorama_6C19C4DF_606E_333E_4190_E16296FAA0F2",
             "yaw": -170.68,
             "class": "AdjacentPanorama",
             "backwardYaw": -171.96,
             "distance": 1
            },
            {
             "panorama": "this.panorama_6BE40682_606A_FF06_41C3_B3B6845ECE6A",
             "yaw": 0.93,
             "class": "AdjacentPanorama",
             "backwardYaw": 140.49,
             "distance": 1
            },
            {
             "panorama": "this.panorama_6CD96857_606E_330E_41D4_28DA4961B1BD",
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
          "panorama": "this.panorama_6CD1C202_606E_7706_41A2_313E1DC1AF6A",
          "yaw": -170.2,
          "class": "AdjacentPanorama",
          "backwardYaw": -172.21,
          "distance": 1
         },
         {
          "panorama": "this.panorama_6A977261_617E_B0AF_41D7_BFCC461810A7",
          "yaw": 110.14,
          "class": "AdjacentPanorama",
          "backwardYaw": 34.73,
          "distance": 1
         },
         {
          "panorama": "this.panorama_6A58246F_6179_90B3_41BF_E08163C94BD1",
          "yaw": -170.2,
          "class": "AdjacentPanorama",
          "backwardYaw": -172.22,
          "distance": 1
         },
         {
          "panorama": "this.panorama_6CE9E5E7_606E_5D0E_41D0_003A6E1B2677",
          "yaw": -170.2,
          "class": "AdjacentPanorama",
          "backwardYaw": -170.58,
          "distance": 1
         },
         {
          "panorama": "this.panorama_6C19C4DF_606E_333E_4190_E16296FAA0F2",
          "yaw": 110.2,
          "class": "AdjacentPanorama",
          "backwardYaw": 42.16,
          "distance": 1
         },
         {
          "panorama": "this.panorama_6BE40682_606A_FF06_41C3_B3B6845ECE6A",
          "yaw": -170.2,
          "class": "AdjacentPanorama",
          "backwardYaw": -171.35,
          "distance": 1
         },
         {
          "panorama": "this.panorama_6CD96857_606E_330E_41D4_28DA4961B1BD",
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
       "panorama": "this.panorama_6CEBB7E8_606A_7D03_41CE_69723C00AA9F",
       "yaw": -162.92,
       "class": "AdjacentPanorama",
       "backwardYaw": -170.68,
       "distance": 1
      },
      {
       "panorama": "this.panorama_6CD1C202_606E_7706_41A2_313E1DC1AF6A",
       "yaw": -162.92,
       "class": "AdjacentPanorama",
       "backwardYaw": -172.21,
       "distance": 1
      },
      {
       "panorama": "this.panorama_6A977261_617E_B0AF_41D7_BFCC461810A7",
       "yaw": 161.78,
       "class": "AdjacentPanorama",
       "backwardYaw": 82.9,
       "distance": 1
      },
      {
       "panorama": "this.panorama_6A58246F_6179_90B3_41BF_E08163C94BD1",
       "yaw": -162.92,
       "class": "AdjacentPanorama",
       "backwardYaw": -172.22,
       "distance": 1
      },
      {
       "panorama": "this.panorama_6CE9E5E7_606E_5D0E_41D0_003A6E1B2677",
       "yaw": -162.92,
       "class": "AdjacentPanorama",
       "backwardYaw": -170.58,
       "distance": 1
      },
      {
       "panorama": "this.panorama_6C19C4DF_606E_333E_4190_E16296FAA0F2",
       "yaw": -162.92,
       "class": "AdjacentPanorama",
       "backwardYaw": -171.96,
       "distance": 1
      },
      {
       "panorama": "this.panorama_6BE40682_606A_FF06_41C3_B3B6845ECE6A",
       "yaw": -162.92,
       "class": "AdjacentPanorama",
       "backwardYaw": -171.35,
       "distance": 1
      },
      {
       "panorama": "this.panorama_6CD96857_606E_330E_41D4_28DA4961B1BD",
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
    "panorama": "this.panorama_6C191CE9_606E_7302_41D6_3E33CDB64ACF",
    "yaw": -171.35,
    "class": "AdjacentPanorama",
    "backwardYaw": -170.2,
    "distance": 1
   },
   {
    "panorama": "this.panorama_6CEBB7E8_606A_7D03_41CE_69723C00AA9F",
    "yaw": 140.49,
    "class": "AdjacentPanorama",
    "backwardYaw": 0.93,
    "distance": 1
   },
   {
    "panorama": "this.panorama_6CD1C202_606E_7706_41A2_313E1DC1AF6A",
    "yaw": -171.35,
    "class": "AdjacentPanorama",
    "backwardYaw": -172.21,
    "distance": 1
   },
   {
    "panorama": "this.panorama_6A977261_617E_B0AF_41D7_BFCC461810A7",
    "yaw": -171.35,
    "class": "AdjacentPanorama",
    "backwardYaw": -162.92,
    "distance": 1
   },
   {
    "panorama": "this.panorama_6A58246F_6179_90B3_41BF_E08163C94BD1",
    "yaw": -171.35,
    "class": "AdjacentPanorama",
    "backwardYaw": -172.22,
    "distance": 1
   },
   {
    "panorama": "this.panorama_6CE9E5E7_606E_5D0E_41D0_003A6E1B2677",
    "yaw": -171.35,
    "class": "AdjacentPanorama",
    "backwardYaw": -170.58,
    "distance": 1
   },
   {
    "panorama": "this.panorama_6C19C4DF_606E_333E_4190_E16296FAA0F2",
    "yaw": -171.35,
    "class": "AdjacentPanorama",
    "backwardYaw": -171.96,
    "distance": 1
   },
   {
    "panorama": "this.panorama_6CD96857_606E_330E_41D4_28DA4961B1BD",
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
  "buttonCardboardView": {
   "mode": "push",
   "paddingRight": 0,
   "paddingLeft": 0,
   "maxWidth": 60,
   "width": "100%",
   "transparencyActive": false,
   "borderRadius": 0,
   "iconURL": "skin/IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37.png",
   "borderSize": 0,
   "height": "100%",
   "shadow": false,
   "horizontalAlign": "center",
   "class": "IconButton",
   "minWidth": 1,
   "paddingBottom": 0,
   "cursor": "hand",
   "id": "IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37",
   "paddingTop": 0,
   "maxHeight": 60,
   "minHeight": 1,
   "backgroundOpacity": 0,
   "verticalAlign": "middle"
  },
  "touchControlMode": "drag_rotation",
  "displayPlaybackBar": true,
  "buttonToggleHotspots": {
   "click": "if(!this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, true, 0, this.effect_CDD059FA_EED0_D223_41DB_70ACFBE986FE, 'showEffect', false) } else if(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, false, 0, this.effect_CDD049FB_EED0_D221_41EB_CA2134B978E0, 'hideEffect', false) }",
   "toolTipPaddingBottom": 4,
   "mode": "toggle",
   "toolTipPaddingRight": 6,
   "paddingRight": 0,
   "paddingLeft": 0,
   "maxWidth": 60,
   "width": "100%",
   "toolTip": "Hotspots Visibility",
   "iconURL": "skin/IconButton_80E5955A_8E23_BB05_41CA_43DD61DBAEE9.png",
   "transparencyActive": true,
   "toolTipPaddingTop": 4,
   "borderRadius": 0,
   "toolTipBorderSize": 1,
   "toolTipTextShadowOpacity": 0,
   "toolTipFontSize": 12,
   "toolTipOpacity": 0.7,
   "borderSize": 0,
   "toolTipShadowOpacity": 1,
   "height": "100%",
   "toolTipShadowVerticalLength": 0,
   "toolTipPaddingLeft": 6,
   "toolTipBorderColor": "#767676",
   "shadow": false,
   "horizontalAlign": "center",
   "toolTipTextShadowColor": "#000000",
   "toolTipFontStyle": "normal",
   "class": "IconButton",
   "minWidth": 1,
   "toolTipBorderRadius": 3,
   "paddingBottom": 0,
   "toolTipTextShadowBlurRadius": 3,
   "cursor": "hand",
   "id": "IconButton_80E5955A_8E23_BB05_41CA_43DD61DBAEE9",
   "toolTipBackgroundColor": "#000000",
   "toolTipFontWeight": "normal",
   "toolTipShadowHorizontalLength": 0,
   "paddingTop": 0,
   "maxHeight": 60,
   "toolTipShadowSpread": 0,
   "minHeight": 1,
   "toolTipShadowColor": "#333333",
   "toolTipShadowBlurRadius": 3,
   "pressedIconURL": "skin/IconButton_80E5955A_8E23_BB05_41CA_43DD61DBAEE9_pressed.png",
   "backgroundOpacity": 0,
   "toolTipFontColor": "#606060",
   "toolTipFontFamily": "Arial",
   "verticalAlign": "middle"
  },
  "mouseControlMode": "drag_acceleration",
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
  "id": "MapViewerMapPlayer",
  "class": "MapPlayer",
  "viewerArea": {
   "paddingRight": 0,
   "progressBorderRadius": 0,
   "progressBarBackgroundColorDirection": "vertical",
   "progressBackgroundColor": [
    "#FFFFFF"
   ],
   "progressBarOpacity": 1,
   "toolTipPaddingBottom": 4,
   "playbackBarProgressBackgroundColorDirection": "vertical",
   "progressRight": 0,
   "playbackBarBorderColor": "#FFFFFF",
   "playbackBarBackgroundColor": [
    "#FFFFFF"
   ],
   "toolTipOpacity": 0.7,
   "toolTipBorderSize": 1,
   "toolTipShadowOpacity": 1,
   "playbackBarHeight": 10,
   "toolTipShadowVerticalLength": 0,
   "shadow": false,
   "playbackBarHeadWidth": 6,
   "toolTipTextShadowColor": "#000000",
   "toolTipFontStyle": "normal",
   "playbackBarBackgroundColorDirection": "vertical",
   "class": "ViewerArea",
   "playbackBarProgressBorderSize": 0,
   "playbackBarHeadBackgroundColorDirection": "vertical",
   "progressBottom": 2,
   "playbackBarHeadShadowVerticalLength": 0,
   "paddingBottom": 0,
   "progressBorderSize": 0,
   "toolTipBackgroundColor": "#000000",
   "progressBarBorderSize": 0,
   "playbackBarRight": 0,
   "progressBarBorderRadius": 0,
   "playbackBarProgressBorderRadius": 0,
   "paddingTop": 0,
   "transitionMode": "blending",
   "toolTipShadowSpread": 0,
   "playbackBarOpacity": 1,
   "toolTipShadowColor": "#333333",
   "toolTipShadowBlurRadius": 3,
   "toolTipFontColor": "#606060",
   "playbackBarBorderRadius": 0,
   "playbackBarHeadShadowHorizontalLength": 0,
   "playbackBarProgressBorderColor": "#000000",
   "playbackBarHeadBackgroundColor": [
    "#111111",
    "#666666"
   ],
   "toolTipPaddingRight": 6,
   "paddingLeft": 0,
   "playbackBarHeadBorderRadius": 0,
   "toolTipTextShadowOpacity": 0,
   "toolTipPaddingTop": 4,
   "borderRadius": 0,
   "progressBackgroundOpacity": 1,
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
   "playbackBarHeadHeight": 15,
   "playbackBarBackgroundOpacity": 1,
   "minWidth": 1,
   "playbackBarBorderSize": 0,
   "toolTipBorderRadius": 3,
   "playbackBarHeadShadowOpacity": 0.7,
   "top": "10%",
   "playbackBarHeadBorderSize": 0,
   "playbackBarHeadBackgroundColorRatios": [
    0,
    1
   ],
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
   "playbackBarHeadShadow": true,
   "playbackBarHeadShadowColor": "#000000",
   "minHeight": 1,
   "progressBackgroundColorDirection": "vertical",
   "left": "10%",
   "progressBorderColor": "#000000",
   "progressHeight": 10,
   "playbackBarBottom": 0,
   "playbackBarProgressBackgroundColor": [
    "#3399FF"
   ],
   "right": "10%",
   "toolTipFontFamily": "Arial",
   "progressOpacity": 1,
   "progressBarBackgroundColor": [
    "#3399FF"
   ]
  }
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
  "class": "PanoramaCamera"
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
  "class": "PanoramaCamera"
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
  "class": "PanoramaCamera"
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
  "class": "PanoramaCamera"
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
  "class": "PanoramaCamera"
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
  "class": "PanoramaCamera"
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
  "class": "PanoramaCamera"
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
  "class": "PanoramaCamera"
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
  "class": "PanoramaCamera"
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
  "class": "PanoramaCamera"
 },
 {
  "id": "mainPlayList",
  "class": "PlayList",
  "items": [
   {
    "id": "PanoramaPlayListItem_78F7FD3B_77AF_E813_4171_7D93541BB925",
    "media": "this.panorama_6BE40682_606A_FF06_41C3_B3B6845ECE6A",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_78F7FD3B_77AF_E813_4171_7D93541BB925, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6BE40682_606A_FF06_41C3_B3B6845ECE6A_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "media": "this.panorama_6CEBB7E8_606A_7D03_41CE_69723C00AA9F",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6CEBB7E8_606A_7D03_41CE_69723C00AA9F_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "media": "this.panorama_6A58246F_6179_90B3_41BF_E08163C94BD1",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6A58246F_6179_90B3_41BF_E08163C94BD1_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "media": "this.panorama_6C19C4DF_606E_333E_4190_E16296FAA0F2",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6C19C4DF_606E_333E_4190_E16296FAA0F2_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "media": "this.panorama_6C191CE9_606E_7302_41D6_3E33CDB64ACF",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6C191CE9_606E_7302_41D6_3E33CDB64ACF_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "media": "this.panorama_6A977261_617E_B0AF_41D7_BFCC461810A7",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6A977261_617E_B0AF_41D7_BFCC461810A7_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "media": "this.panorama_6CE9E5E7_606E_5D0E_41D0_003A6E1B2677",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6CE9E5E7_606E_5D0E_41D0_003A6E1B2677_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "media": "this.panorama_6D430522_6193_00C9_41B5_ED6C4ECBB6B9",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6D430522_6193_00C9_41B5_ED6C4ECBB6B9_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "media": "this.panorama_6CD1C202_606E_7706_41A2_313E1DC1AF6A",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6CD1C202_606E_7706_41A2_313E1DC1AF6A_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 0)",
    "media": "this.panorama_6CD96857_606E_330E_41D4_28DA4961B1BD",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6CD96857_606E_330E_41D4_28DA4961B1BD_camera"
   }
  ]
 },
 {
  "id": "ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 0, 1)",
    "media": "this.panorama_6BE40682_606A_FF06_41C3_B3B6845ECE6A",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6BE40682_606A_FF06_41C3_B3B6845ECE6A_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 1, 2)",
    "media": "this.panorama_6CEBB7E8_606A_7D03_41CE_69723C00AA9F",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6CEBB7E8_606A_7D03_41CE_69723C00AA9F_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 2, 3)",
    "media": "this.panorama_6A58246F_6179_90B3_41BF_E08163C94BD1",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6A58246F_6179_90B3_41BF_E08163C94BD1_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 3, 4)",
    "media": "this.panorama_6C19C4DF_606E_333E_4190_E16296FAA0F2",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6C19C4DF_606E_333E_4190_E16296FAA0F2_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 4, 5)",
    "media": "this.panorama_6C191CE9_606E_7302_41D6_3E33CDB64ACF",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6C191CE9_606E_7302_41D6_3E33CDB64ACF_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 5, 6)",
    "media": "this.panorama_6A977261_617E_B0AF_41D7_BFCC461810A7",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6A977261_617E_B0AF_41D7_BFCC461810A7_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 6, 7)",
    "media": "this.panorama_6CE9E5E7_606E_5D0E_41D0_003A6E1B2677",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6CE9E5E7_606E_5D0E_41D0_003A6E1B2677_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 7, 8)",
    "media": "this.panorama_6D430522_6193_00C9_41B5_ED6C4ECBB6B9",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6D430522_6193_00C9_41B5_ED6C4ECBB6B9_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 8, 9)",
    "media": "this.panorama_6CD1C202_606E_7706_41A2_313E1DC1AF6A",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6CD1C202_606E_7706_41A2_313E1DC1AF6A_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 9, 0)",
    "media": "this.panorama_6CD96857_606E_330E_41D4_28DA4961B1BD",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6CD96857_606E_330E_41D4_28DA4961B1BD_camera"
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
  "id": "playList_78EF4D2E_77AF_E835_41C7_5332DD2D3D99",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.registerKey('visibility_ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472', this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472.get('visible')); this.registerKey('visibility_Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB', this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB.get('visible')); this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setComponentVisibility(this.Container_807F782A_8E23_A905_41DE_623121285A09, false, -1, this.effect_22974FB2_2DD9_0421_41BA_84205292D043, 'hideEffect', false); this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, false, -1, this.effect_22899FB3_2DD9_0427_41BB_298AEB3D2851, 'hideEffect', false); this.setComponentVisibility(this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB, true, -1, this.effect_2289DFB3_2DD9_0427_41AE_A35795880BA7, 'showEffect', false); this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, false, -1, this.effect_3876CD6E_2DF9_0421_41C1_F0AB7F279824, 'hideEffect', false); this.setComponentVisibility(this.Container_86F3A56C_8E22_5B1D_41CA_9CE53436FE56, false, -1, this.effect_22973FB1_2DD9_0423_41C1_E1E03953DCCE, 'hideEffect', false)",
    "media": "this.video_210B394E_3D54_1A60_41A3_CB42BEC0D3EC",
    "player": "this.MainViewerVideoPlayer",
    "class": "VideoPlayListItem",
    "end": "this.setComponentVisibility(this.Container_807F782A_8E23_A905_41DE_623121285A09, true, -1, this.effect_22977FB2_2DD9_0421_41C1_F53B037346DF, 'showEffect', false); this.setComponentVisibility(this.Container_807F782A_8E23_A905_41DE_623121285A09, true, -1, this.effect_22977FB2_2DD9_0421_41C1_F53B037346DF, 'showEffect', false); if(this.existsKey('visibility_Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB')){ if(this.getKey('visibility_Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB')) { this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, true, -1, this.effect_785F316A_77AF_F832_41D5_E2DDC2404C14, 'showEffect', false); } else { this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, false, -1, this.effect_22899FB3_2DD9_0427_41BB_298AEB3D2851, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB'); this.setComponentVisibility(this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB, false, -1, this.effect_2289EFB3_2DD9_0427_41C0_ACB5A72AE218, 'hideEffect', false); this.setComponentVisibility(this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB, false, -1, this.effect_2289EFB3_2DD9_0427_41C0_ACB5A72AE218, 'hideEffect', false); if(this.existsKey('visibility_ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472')){ if(this.getKey('visibility_ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472')) { this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, true, -1, this.effect_785B916B_77AF_F832_41DB_CA507C9BACE2, 'showEffect', false); } else { this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, false, -1, this.effect_3876CD6E_2DF9_0421_41C1_F0AB7F279824, 'hideEffect', false); } }; this.unregisterKey('visibility_ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472'); this.setComponentVisibility(this.Container_86F3A56C_8E22_5B1D_41CA_9CE53436FE56, true, -1, this.effect_22975FB2_2DD9_0421_41B4_7A2443082F44, 'showEffect', false); this.setComponentVisibility(this.Container_86F3A56C_8E22_5B1D_41CA_9CE53436FE56, true, -1, this.effect_22975FB2_2DD9_0421_41B4_7A2443082F44, 'showEffect', false)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_78EF4D2E_77AF_E835_41C7_5332DD2D3D99, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_78EF4D2E_77AF_E835_41C7_5332DD2D3D99, 0, this.video_210B394E_3D54_1A60_41A3_CB42BEC0D3EC)"
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
  "id": "playList_78EF2D2F_77AF_E833_41CE_D6E683F5C2B7",
  "class": "PlayList",
  "items": [
   {
    "player": "this.ViewerAreaLabeled_9FD7235A_96CD_9045_41D9_23A3BCBDB1C6PhotoAlbumPlayer",
    "class": "PhotoAlbumPlayListItem",
    "media": "this.album_1AE8DEB7_0EE7_8CC7_4198_F5B75788CCF6",
    "begin": "this.loopAlbum(this.playList_78EF2D2F_77AF_E833_41CE_D6E683F5C2B7, 0)"
   }
  ]
 },
 "this.map_4E02A832_427B_EE04_41CC_8E1CEC03E8D3",
 {
  "id": "playList_78E8BD38_77AF_E81D_4187_BB1743000488",
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
  "id": "effect_518C2CD2_77ED_D97B_41C3_3AC87D499717",
  "class": "FadeOutEffect",
  "duration": 300
 },
 {
  "easing": "linear",
  "from": "bottom",
  "id": "effect_508929C3_77ED_DB59_41D8_05A6C8F0681B",
  "class": "SlideInEffect",
  "duration": 400
 },
 {
  "easing": "linear",
  "id": "effect_5032FA51_77E2_5979_41D1_45E5EF039077",
  "class": "SlideOutEffect",
  "to": "bottom",
  "duration": 400
 },
 {
  "easing": "linear",
  "id": "effect_640860A9_76E7_E929_4192_305B50E5610A",
  "class": "FadeInEffect",
  "duration": 300
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
  "id": "camera_7827ED6A_77AF_E83D_41A6_056781EA65D2",
  "initialPosition": {
   "yaw": 9.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_782A5D74_77AF_E816_41D7_E3455B286C65",
  "initialPosition": {
   "yaw": 9.32,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_7830AD7D_77AF_E816_41D1_299A3C6B3FBD",
  "initialPosition": {
   "yaw": 7.79,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_78062D88_77AF_E8FE_41CC_54E4C99019ED",
  "initialPosition": {
   "yaw": -97.1,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_780A8D91_77AF_E8EE_41C5_20EE694FD750",
  "initialPosition": {
   "yaw": 7.78,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_781F6D9B_77AF_E812_41CA_1F33BE992BFD",
  "initialPosition": {
   "yaw": 9.42,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_78609DA4_77AF_E836_41D1_A31E08B9EBF4",
  "initialPosition": {
   "yaw": 8.04,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_78755DAE_77AF_E832_4193_F5EA8354ECE4",
  "initialPosition": {
   "hfov": 120,
   "yaw": 8.65,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_78469DB8_77AF_E81E_41C2_90256E64705D",
  "initialPosition": {
   "yaw": 6.88,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_7848DDC1_77AF_E86E_41D5_3409C7B5CE0C",
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_785D6DCB_77AF_E872_41D0_0478A6A1B87C",
  "initialPosition": {
   "yaw": 9.32,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_67AF6DD5_77AF_E816_41B9_AA76200D895C",
  "initialPosition": {
   "yaw": 7.79,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_67B32DDF_77AF_E812_41AA_0234B52A5027",
  "initialPosition": {
   "yaw": -145.27,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_67854DE8_77AF_E83E_41CA_F999A8F6CEE4",
  "initialPosition": {
   "yaw": 7.78,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_6789DDF2_77AF_E812_41DC_933D9C9DF06C",
  "initialPosition": {
   "yaw": 9.42,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_679B0DFB_77AF_E812_41CC_6905073E6F97",
  "initialPosition": {
   "yaw": -137.84,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_67ECBE05_77AF_EBF6_41C3_D6593BDB02C3",
  "initialPosition": {
   "hfov": 120,
   "yaw": 8.65,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_67F1FE0F_77AF_EBF2_4194_D00587F62065",
  "initialPosition": {
   "yaw": 6.88,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_67C3EE18_77AF_E81E_41A9_60781EC72D0C",
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_67D4CE22_77AF_E832_41D6_BD7F835A4A2E",
  "initialPosition": {
   "yaw": 9.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_67260E2C_77AF_E836_41C6_F62DCF077D32",
  "initialPosition": {
   "yaw": 7.79,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_67282E35_77AF_E816_41DA_AC9BE5C8C638",
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_673CDE3F_77AF_E812_41DC_F8406DCE8661",
  "initialPosition": {
   "yaw": 82.78,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_670E3E49_77AF_E87E_41D1_A48FBD3D4517",
  "initialPosition": {
   "yaw": 9.42,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_6712BE53_77AF_E812_41D5_A38A83DC9BEB",
  "initialPosition": {
   "yaw": 8.04,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_6764AE5E_77AF_E812_41A6_26A216F97DC4",
  "initialPosition": {
   "hfov": 120,
   "yaw": -39.51,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_6769EE69_77AF_E83E_41C2_0C60E2D300E2",
  "initialPosition": {
   "yaw": 6.88,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_677BEE74_77AF_E816_41DD_73460B5E9A89",
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_674ACE88_77AF_E8FD_41B8_3980566D44B1",
  "initialPosition": {
   "yaw": 9.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_675FDE9D_77AF_E817_41C7_B56BBD0E4305",
  "initialPosition": {
   "yaw": 9.32,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_66AE2EAC_77AF_E836_41DA_D5275F2E4A23",
  "initialPosition": {
   "yaw": -145.18,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_66B3FEC1_77AF_E86F_41DA_46DF28347A2C",
  "initialPosition": {
   "yaw": 7.78,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_66821ED1_77AF_E86F_419D_D299902366E6",
  "initialPosition": {
   "yaw": 9.42,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_6697FEE0_77AF_E82E_41CD_8CFFB072BF91",
  "initialPosition": {
   "yaw": 8.04,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_66E6CEF4_77AF_E816_41B7_7520F7357F3C",
  "initialPosition": {
   "hfov": 120,
   "yaw": 8.65,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_66E8BF04_77AF_E9F6_419C_8B0836BD21DC",
  "initialPosition": {
   "yaw": -161.21,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_66FACF19_77AF_E81E_41BD_F48DB0960E33",
  "initialPosition": {
   "yaw": -18.22,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_66CD2F27_77AF_E832_41C7_B23DB0CB5F72",
  "initialPosition": {
   "yaw": -69.86,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_66DE3F32_77AF_E812_41D8_FD4F72EDD29E",
  "initialPosition": {
   "yaw": 9.32,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_66216F3C_77AF_E816_41C3_2C4337920A63",
  "initialPosition": {
   "yaw": -67.68,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_6632EF48_77AF_E87E_41C7_E7FDB652CFF3",
  "initialPosition": {
   "yaw": 7.78,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_66053F52_77AF_E812_41B9_6E9F5D4018F6",
  "initialPosition": {
   "yaw": 5.66,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_6617BF5D_77AF_E816_41C2_34B5506E6649",
  "initialPosition": {
   "yaw": 8.04,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_66197F67_77AF_E832_418B_EF0716728D01",
  "initialPosition": {
   "hfov": 120,
   "yaw": 8.65,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_66683F72_77AF_E812_41C1_7A426DEA986C",
  "initialPosition": {
   "yaw": 6.88,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_667DFF7C_77AF_E816_41DC_1CEF339773B7",
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_664C0F88_77AF_E8FE_41D2_10339939BCBA",
  "initialPosition": {
   "yaw": 9.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_6651EF92_77AF_E812_41CF_20EB5211A157",
  "initialPosition": {
   "yaw": 163.2,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_65A0AF9D_77AF_E816_41D9_471EF229ED2A",
  "initialPosition": {
   "yaw": 7.79,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_65B31FA6_77AF_E832_41D3_110C4A044D6C",
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_65848FB0_77AF_E82E_4187_0D383D6E977E",
  "initialPosition": {
   "yaw": 9.42,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_65971FBA_77AF_E812_41A0_B64A5EE1BEA1",
  "initialPosition": {
   "yaw": 3.37,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_6598AFC5_77AF_E876_41C4_1C34F3AC55EF",
  "initialPosition": {
   "hfov": 120,
   "yaw": 8.65,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_65EB9FCE_77AF_E872_41D1_A54CF08DAAF9",
  "initialPosition": {
   "yaw": 6.88,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_65FACFD8_77AF_E81E_41D9_CE094473339E",
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_65CC5FE3_77AF_E832_41CE_20DC6CCDC62F",
  "initialPosition": {
   "yaw": 9.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_65DE9FEE_77AF_E832_41DB_F3C84E8D644F",
  "initialPosition": {
   "yaw": 9.32,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_65205FF7_77AF_E812_41B9_042132BF174D",
  "initialPosition": {
   "yaw": 7.79,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_65334001_77AF_F7EE_4174_F3D7965C925E",
  "initialPosition": {
   "yaw": 1.82,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_6504D00C_77AF_F7F5_41DD_50A35A54150D",
  "initialPosition": {
   "yaw": 7.78,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_65176016_77AF_F815_41CD_0A5E26BC45D1",
  "initialPosition": {
   "yaw": 8.04,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_797B0056_77AF_F815_41D6_BB8201F52F61",
  "initialPosition": {
   "hfov": 120,
   "yaw": 8.65,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_7944805F_77AF_F812_41CC_844F5B7A7E74",
  "initialPosition": {
   "yaw": 6.88,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_79414069_77AF_F83E_41D5_DF9DC9A18336",
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_794A8072_77AF_F812_41D4_9A79AF9DE687",
  "initialPosition": {
   "yaw": -69.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_7954F07C_77AF_F816_41C1_703BA7FB8C8C",
  "initialPosition": {
   "yaw": 9.32,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_7950B086_77AF_F8F2_41CC_DA03C9B1BE56",
  "initialPosition": {
   "yaw": 7.79,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_795AB08F_77AF_F8F2_41C4_9F454047F0D3",
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_78A76099_77AF_F81E_41C8_2CE594E174DD",
  "initialPosition": {
   "yaw": -167.94,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_78A100A2_77AF_F832_41CA_009755F586E8",
  "initialPosition": {
   "yaw": 9.42,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_78ADE0AC_77AF_F836_4199_EAFCB67F5167",
  "initialPosition": {
   "hfov": 120,
   "yaw": 8.65,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_78B7E0B6_77AF_F812_41DD_A4E543CF2110",
  "initialPosition": {
   "yaw": 6.88,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_78BEB0C0_77AF_F86E_41B0_5CEF0C11212C",
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_78B830CA_77AF_F872_41A0_4BA21901E162",
  "initialPosition": {
   "yaw": 9.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_7881E0D3_77AF_F812_41DA_737D34EA1B26",
  "initialPosition": {
   "yaw": -179.07,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_789680DD_77AF_F816_41D5_E1C533E135E1",
  "initialPosition": {
   "yaw": 7.79,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_789A70E7_77AF_F832_41CE_20A5EAB25824",
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_78E160F0_77AF_F82E_41C7_69312EF1420E",
  "initialPosition": {
   "yaw": 7.78,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_78F240FA_77AF_F812_41DB_C126A0993572",
  "initialPosition": {
   "yaw": 9.42,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_78C6E103_77AF_F9F1_41D6_8AE0D34C9FCA",
  "initialPosition": {
   "yaw": 8.04,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_78CD310D_77AF_F9F6_41BE_CE7DC5BF452E",
  "initialPosition": {
   "yaw": 6.88,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_78DF4117_77AF_F812_41DA_D9E997066216",
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_78234120_77AF_F82E_41CE_81E8814B26D7",
  "initialPosition": {
   "yaw": 9.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_7834E12A_77AF_F832_41DC_BF466CFD5759",
  "initialPosition": {
   "yaw": 9.32,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_78388133_77AF_F812_41D3_7F77B3050C51",
  "initialPosition": {
   "yaw": -67.62,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_780A213D_77AF_F816_41D9_7CC21A5C7EFD",
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_781C5146_77AF_F872_41D0_BE1F76B3D782",
  "initialPosition": {
   "yaw": 7.78,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_78603150_77AF_F86E_4198_89C6B4279DD5",
  "initialPosition": {
   "yaw": 9.42,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_7872515A_77AF_F812_41C1_247844856AB5",
  "initialPosition": {
   "yaw": 8.04,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_78461163_77AF_F832_41CA_9658ABCBD678",
  "initialPosition": {
   "hfov": 120,
   "yaw": 8.65,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
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
  "id": "effect_22899FB3_2DD9_0427_41BB_298AEB3D2851",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_785F316A_77AF_F832_41D5_E2DDC2404C14",
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
  "easing": "cubic_in_out",
  "id": "effect_3876CD6E_2DF9_0421_41C1_F0AB7F279824",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_785B916B_77AF_F832_41DB_CA507C9BACE2",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_3876CD6E_2DF9_0421_41C1_F0AB7F279824",
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
  "autoplay": true,
  "maximumAngle": 231.16,
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
  "autoplay": true,
  "maximumAngle": 97.14,
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
  "autoplay": true,
  "maximumAngle": 61.89,
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
  "autoplay": true,
  "maximumAngle": 222.06,
  "id": "audio_A8213A22_B270_E07A_41D5_F14349BD0E04",
  "loop": true,
  "audio": "this.audioresource_A83107F8_B270_2FD6_41E2_DAE1F661A577",
  "yaw": 0,
  "class": "DirectionalPanoramaAudio",
  "pitch": 0
 },
 {
  "autoplay": true,
  "maximumAngle": 265.52,
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
  "autoplay": true,
  "maximumAngle": 360,
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
  "progressBorderRadius": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "progressBarOpacity": 1,
  "toolTipPaddingBottom": 4,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "progressRight": 0,
  "playbackBarBorderColor": "#FFFFFF",
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "toolTipOpacity": 0.7,
  "toolTipBorderSize": 1,
  "toolTipShadowOpacity": 1,
  "playbackBarHeight": 10,
  "toolTipShadowVerticalLength": 0,
  "shadow": false,
  "playbackBarHeadWidth": 6,
  "toolTipTextShadowColor": "#000000",
  "toolTipFontStyle": "normal",
  "playbackBarBackgroundColorDirection": "vertical",
  "class": "ViewerArea",
  "playbackBarProgressBorderSize": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "progressBottom": 0,
  "playbackBarHeadShadowVerticalLength": 0,
  "paddingBottom": 0,
  "progressBorderSize": 0,
  "toolTipBackgroundColor": "#000000",
  "progressBarBorderSize": 0,
  "playbackBarRight": 0,
  "progressBarBorderRadius": 0,
  "playbackBarProgressBorderRadius": 0,
  "paddingTop": 0,
  "transitionMode": "blending",
  "toolTipShadowSpread": 0,
  "playbackBarOpacity": 1,
  "toolTipShadowColor": "#333333",
  "toolTipShadowBlurRadius": 3,
  "toolTipFontColor": "#606060",
  "playbackBarBorderRadius": 0,
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "toolTipPaddingRight": 6,
  "paddingLeft": 0,
  "playbackBarHeadBorderRadius": 0,
  "toolTipTextShadowOpacity": 0,
  "toolTipPaddingTop": 4,
  "borderRadius": 0,
  "progressBackgroundOpacity": 1,
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
  "playbackBarHeadHeight": 15,
  "playbackBarBackgroundOpacity": 1,
  "minWidth": 100,
  "playbackBarBorderSize": 0,
  "toolTipBorderRadius": 3,
  "playbackBarHeadShadowOpacity": 0.7,
  "top": "0%",
  "playbackBarHeadBorderSize": 0,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
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
  "playbackBarHeadShadow": true,
  "playbackBarHeadShadowColor": "#000000",
  "minHeight": 50,
  "progressBackgroundColorDirection": "vertical",
  "left": "0%",
  "progressBorderColor": "#000000",
  "progressHeight": 10,
  "playbackBarBottom": 5,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
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
  "paddingLeft": 0,
  "height": 50,
  "width": 500,
  "maxWidth": 500,
  "borderRadius": 5,
  "borderSize": 0,
  "gap": 5,
  "contentOpaque": false,
  "layout": "horizontal",
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "shadow": false,
  "horizontalAlign": "right",
  "top": "3%",
  "minWidth": 500,
  "paddingBottom": 0,
  "class": "Container",
  "id": "Container_807F782A_8E23_A905_41DE_623121285A09",
  "paddingTop": 0,
  "maxHeight": 55,
  "minHeight": 55,
  "backgroundOpacity": 0,
  "right": "1.5%",
  "children": [
   {
    "scrollBarColor": "#000000",
    "overflow": "visible",
    "scrollBarOpacity": 0.5,
    "paddingRight": 0,
    "paddingLeft": 0,
    "height": 55,
    "width": 400,
    "borderRadius": 0,
    "borderSize": 0,
    "gap": 0,
    "contentOpaque": false,
    "layout": "horizontal",
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "shadow": false,
    "horizontalAlign": "right",
    "class": "Container",
    "minWidth": 100,
    "visible": false,
    "paddingBottom": 0,
    "id": "Container_80D3CF90_8E26_E705_41E0_E47025A2C106",
    "paddingTop": 0,
    "maxHeight": 55,
    "minHeight": 55,
    "backgroundOpacity": 0,
    "children": [
     "this.IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37",
     {
      "click": "if(!this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, true, 0, null, null, false) } else if(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, false, 0, null, null, false) }",
      "toolTipPaddingBottom": 4,
      "mode": "toggle",
      "toolTipPaddingRight": 6,
      "paddingRight": 0,
      "paddingLeft": 0,
      "maxWidth": 60,
      "width": "100%",
      "toolTip": "Full Screen",
      "iconURL": "skin/IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA.png",
      "transparencyActive": true,
      "toolTipPaddingTop": 4,
      "borderRadius": 0,
      "toolTipBorderSize": 1,
      "toolTipTextShadowOpacity": 0,
      "toolTipFontSize": 12,
      "toolTipOpacity": 0.7,
      "borderSize": 0,
      "toolTipShadowOpacity": 1,
      "height": "100%",
      "toolTipShadowVerticalLength": 0,
      "toolTipPaddingLeft": 6,
      "toolTipBorderColor": "#767676",
      "shadow": false,
      "horizontalAlign": "center",
      "toolTipTextShadowColor": "#000000",
      "toolTipFontStyle": "normal",
      "class": "IconButton",
      "minWidth": 1,
      "toolTipBorderRadius": 3,
      "paddingBottom": 0,
      "toolTipTextShadowBlurRadius": 3,
      "cursor": "hand",
      "id": "IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA",
      "toolTipBackgroundColor": "#000000",
      "toolTipFontWeight": "normal",
      "toolTipShadowHorizontalLength": 0,
      "paddingTop": 0,
      "maxHeight": 60,
      "toolTipShadowSpread": 0,
      "minHeight": 1,
      "toolTipShadowColor": "#333333",
      "toolTipShadowBlurRadius": 3,
      "pressedIconURL": "skin/IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA_pressed.png",
      "backgroundOpacity": 0,
      "toolTipFontColor": "#606060",
      "toolTipFontFamily": "Arial",
      "verticalAlign": "middle"
     },
     {
      "click": "if(!this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, true, 0, this.effect_CACBF85D_EED0_7261_41DB_A3B65ECE0D5D, 'showEffect', false) } else if(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, false, 0, this.effect_CACBC85D_EED0_7261_41BE_8CF4C3A8170C, 'hideEffect', false) }",
      "toolTipPaddingBottom": 4,
      "mode": "toggle",
      "toolTipPaddingRight": 6,
      "paddingRight": 0,
      "paddingLeft": 0,
      "maxWidth": 60,
      "width": "100%",
      "toolTip": "Audio On/Off",
      "iconURL": "skin/IconButton_8105A313_8E22_BF0B_41E1_331C6035A930.png",
      "transparencyActive": true,
      "toolTipPaddingTop": 4,
      "borderRadius": 0,
      "toolTipBorderSize": 1,
      "toolTipTextShadowOpacity": 0,
      "toolTipFontSize": 12,
      "toolTipOpacity": 0.7,
      "borderSize": 0,
      "toolTipShadowOpacity": 1,
      "height": "100%",
      "toolTipShadowVerticalLength": 0,
      "toolTipPaddingLeft": 6,
      "toolTipBorderColor": "#767676",
      "shadow": false,
      "horizontalAlign": "center",
      "toolTipTextShadowColor": "#000000",
      "toolTipFontStyle": "normal",
      "class": "IconButton",
      "minWidth": 1,
      "toolTipBorderRadius": 3,
      "paddingBottom": 0,
      "toolTipTextShadowBlurRadius": 3,
      "cursor": "hand",
      "id": "IconButton_8105A313_8E22_BF0B_41E1_331C6035A930",
      "toolTipBackgroundColor": "#000000",
      "toolTipFontWeight": "normal",
      "toolTipShadowHorizontalLength": 0,
      "paddingTop": 0,
      "maxHeight": 60,
      "toolTipShadowSpread": 0,
      "minHeight": 1,
      "toolTipShadowColor": "#333333",
      "toolTipShadowBlurRadius": 3,
      "pressedIconURL": "skin/IconButton_8105A313_8E22_BF0B_41E1_331C6035A930_pressed.png",
      "backgroundOpacity": 0,
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
    "click": "if(!this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, true, 0, this.effect_32C91197_3F22_3110_4181_9E76B593FBFE, 'showEffect', false) } else if(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, false, 0, this.effect_32C92197_3F22_3110_419D_E2E21968F16F, 'hideEffect', false) }",
    "toolTipPaddingBottom": 4,
    "mode": "toggle",
    "toolTipPaddingRight": 6,
    "paddingRight": 0,
    "paddingLeft": 0,
    "maxWidth": 55,
    "width": "100%",
    "toolTip": "Settings",
    "iconURL": "skin/IconButton_811D89E1_8E3D_AB07_4191_94003C90B2FF.png",
    "transparencyActive": true,
    "toolTipPaddingTop": 4,
    "borderRadius": 0,
    "toolTipBorderSize": 1,
    "toolTipTextShadowOpacity": 0,
    "toolTipFontSize": 12,
    "toolTipOpacity": 0.7,
    "borderSize": 0,
    "toolTipShadowOpacity": 1,
    "height": "100%",
    "toolTipShadowVerticalLength": 0,
    "toolTipPaddingLeft": 6,
    "toolTipBorderColor": "#767676",
    "shadow": false,
    "horizontalAlign": "center",
    "toolTipTextShadowColor": "#000000",
    "toolTipFontStyle": "normal",
    "class": "IconButton",
    "minWidth": 55,
    "toolTipBorderRadius": 3,
    "paddingBottom": 0,
    "toolTipTextShadowBlurRadius": 3,
    "cursor": "hand",
    "id": "IconButton_811D89E1_8E3D_AB07_4191_94003C90B2FF",
    "toolTipBackgroundColor": "#000000",
    "toolTipFontWeight": "normal",
    "toolTipShadowHorizontalLength": 0,
    "paddingTop": 0,
    "maxHeight": 55,
    "toolTipShadowSpread": 0,
    "minHeight": 55,
    "toolTipShadowColor": "#333333",
    "toolTipShadowBlurRadius": 3,
    "backgroundOpacity": 0,
    "toolTipFontColor": "#606060",
    "toolTipFontFamily": "Arial",
    "verticalAlign": "middle"
   }
  ],
  "verticalAlign": "middle",
  "scrollBarVisible": "rollOver"
 },
 {
  "backgroundColorDirection": "vertical",
  "overflow": "scroll",
  "scrollBarOpacity": 0.5,
  "paddingRight": 0,
  "scrollBarColor": "#000000",
  "paddingLeft": 0,
  "height": "100%",
  "width": "100%",
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "borderRadius": 0,
  "borderSize": 0,
  "gap": 10,
  "layout": "absolute",
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "contentOpaque": false,
  "shadow": false,
  "horizontalAlign": "left",
  "top": "0%",
  "minWidth": 1,
  "visible": false,
  "paddingBottom": 0,
  "class": "Container",
  "backgroundColorRatios": [
   0,
   1
  ],
  "id": "Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB",
  "paddingTop": 0,
  "minHeight": 1,
  "left": "0%",
  "backgroundOpacity": 0.7,
  "children": [
   "this.ViewerAreaLabeled_9FD7235A_96CD_9045_41D9_23A3BCBDB1C6",
   "this.IconButton_9FEA51EA_96CC_905A_41D3_F42DB0CD0A74",
   "this.IconButton_9FB9BD3F_96C5_703B_41D7_65AEE6E85A96",
   "this.IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4"
  ],
  "verticalAlign": "top",
  "scrollBarVisible": "rollOver"
 },
 {
  "mode": "push",
  "paddingRight": 0,
  "paddingLeft": 0,
  "maxWidth": 50,
  "width": "3.03%",
  "iconURL": "skin/IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB.png",
  "transparencyActive": true,
  "borderRadius": 0,
  "borderSize": 0,
  "rollOverIconURL": "skin/IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB_rollover.png",
  "shadow": false,
  "horizontalAlign": "center",
  "top": "2%",
  "minWidth": 50,
  "cursor": "hand",
  "visible": false,
  "paddingBottom": 0,
  "class": "IconButton",
  "id": "IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB",
  "height": "5.482%",
  "paddingTop": 0,
  "maxHeight": 50,
  "minHeight": 50,
  "backgroundOpacity": 0,
  "right": "2%",
  "verticalAlign": "middle"
 },
 {
  "backgroundColorDirection": "vertical",
  "overflow": "scroll",
  "scrollBarOpacity": 0.5,
  "paddingRight": 0,
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "scrollBarColor": "#000000",
  "paddingLeft": 0,
  "layout": "absolute",
  "borderRadius": 0,
  "borderSize": 0,
  "contentOpaque": false,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "shadow": false,
  "horizontalAlign": "left",
  "top": "0%",
  "minWidth": 1,
  "visible": false,
  "paddingBottom": 0,
  "class": "Container",
  "bottom": "0%",
  "id": "Container_53347472_4288_F6E6_4196_D7457B47D2CF",
  "backgroundColorRatios": [
   0,
   1
  ],
  "paddingTop": 0,
  "gap": 10,
  "minHeight": 1,
  "left": "0%",
  "backgroundOpacity": 0.3,
  "right": "0%",
  "children": [
   "this.MapViewer",
   {
    "click": "this.setComponentVisibility(this.Container_53347472_4288_F6E6_4196_D7457B47D2CF, false, 0, this.effect_500E3733_4297_3267_41C9_4935C0BEBF39, 'hideEffect', false)",
    "mode": "push",
    "paddingRight": 0,
    "paddingLeft": 0,
    "maxWidth": 50,
    "width": "5.07%",
    "iconURL": "skin/IconButton_50D1A26C_4289_72E1_41CD_2B557DFCC24F.png",
    "transparencyActive": true,
    "borderRadius": 0,
    "borderSize": 0,
    "rollOverIconURL": "skin/IconButton_50D1A26C_4289_72E1_41CD_2B557DFCC24F_rollover.png",
    "shadow": false,
    "horizontalAlign": "center",
    "top": "5%",
    "minWidth": 50,
    "cursor": "hand",
    "paddingBottom": 0,
    "class": "IconButton",
    "id": "IconButton_50D1A26C_4289_72E1_41CD_2B557DFCC24F",
    "height": "5.91%",
    "paddingTop": 0,
    "maxHeight": 50,
    "minHeight": 50,
    "backgroundOpacity": 0,
    "right": "5%",
    "verticalAlign": "middle"
   }
  ],
  "verticalAlign": "top",
  "scrollBarVisible": "rollOver"
 },
 {
  "scrollBarColor": "#000000",
  "overflow": "visible",
  "scrollBarOpacity": 0.5,
  "paddingRight": 0,
  "paddingLeft": 0,
  "height": 160,
  "layout": "vertical",
  "borderRadius": 0,
  "borderSize": 0,
  "gap": 3,
  "contentOpaque": false,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "shadow": false,
  "horizontalAlign": "center",
  "class": "Container",
  "minWidth": 1,
  "paddingBottom": 0,
  "bottom": "0%",
  "id": "Container_6EC9FEC0_76A2_F957_41C5_79AD4AF65B38",
  "paddingTop": 0,
  "maxHeight": 160,
  "minHeight": 130,
  "left": "0%",
  "backgroundOpacity": 0,
  "right": "0%",
  "children": [
   {
    "itemBackgroundColorRatios": [],
    "paddingRight": 5,
    "itemLabelFontFamily": "Arial",
    "backgroundColor": [
     "#000000"
    ],
    "rollOverItemBackgroundColorDirection": "vertical",
    "itemThumbnailHeight": 60,
    "gap": 5,
    "selectedItemBackgroundColor": [],
    "scrollBarWidth": 5,
    "scrollBarMargin": 2,
    "shadow": false,
    "horizontalAlign": "left",
    "itemHorizontalAlign": "center",
    "playList": "this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist",
    "rollOverItemThumbnailShadowBlurRadius": 15,
    "class": "ThumbnailList",
    "selectedItemLabelFontStyle": "italic",
    "rollOverItemThumbnailShadowVerticalLength": 0,
    "paddingBottom": 5,
    "itemMode": "normal",
    "rollOverItemBackgroundColor": [
     "#000000"
    ],
    "backgroundColorRatios": [
     0
    ],
    "itemLabelFontColor": "#FFFFFF",
    "rollOverItemLabelFontColor": "#FFFFFF",
    "rollOverItemLabelFontWeight": "bold",
    "itemPaddingBottom": 3,
    "paddingTop": 5,
    "selectedItemThumbnailShadowVerticalLength": 0,
    "selectedItemLabelFontColor": "#FFFFFF",
    "itemThumbnailOpacity": 1,
    "itemThumbnailScaleMode": "fit_outside",
    "selectedItemLabelTextDecoration": "underline",
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
    "rollOverItemThumbnailShadowHorizontalLength": 0,
    "itemPaddingRight": 3,
    "paddingLeft": 5,
    "height": 100,
    "selectedItemThumbnailShadowBlurRadius": 15,
    "itemLabelFontStyle": "normal",
    "maxWidth": 740,
    "borderRadius": 3,
    "selectedItemThumbnailShadow": true,
    "itemLabelHorizontalAlign": "center",
    "itemPaddingLeft": 3,
    "itemThumbnailWidth": 60,
    "selectedItemThumbnailShadowHorizontalLength": 0,
    "borderSize": 0,
    "itemBorderRadius": 0,
    "rollOverItemThumbnailShadowColor": "#FFFFFF",
    "selectedItemLabelFontSize": 11,
    "selectedItemThumbnailShadowOpacity": 1,
    "minWidth": 100,
    "selectedItemBorderSize": 0,
    "itemPaddingTop": 3,
    "selectedItemBorderRadius": 0,
    "layout": "horizontal",
    "itemVerticalAlign": "middle",
    "id": "ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472",
    "itemBackgroundOpacity": 0,
    "selectedItemBackgroundColorRatios": [],
    "rollOverItemBackgroundOpacity": 0,
    "itemLabelGap": 5,
    "selectedItemLabelFontWeight": "bold",
    "itemBackgroundColorDirection": "vertical",
    "itemOpacity": 1,
    "selectedItemThumbnailShadowColor": "#FFFFFF",
    "itemBackgroundColor": [],
    "minHeight": 70,
    "selectedItemBackgroundOpacity": 0,
    "maxHeight": 100,
    "itemLabelPosition": "bottom",
    "rollOverItemThumbnailShadowOpacity": 1,
    "itemLabelFontSize": 11,
    "rollOverItemThumbnailShadow": true,
    "backgroundOpacity": 0.25,
    "verticalAlign": "top"
   },
   {
    "scrollBarColor": "#000000",
    "overflow": "visible",
    "scrollBarOpacity": 0.5,
    "paddingRight": 0,
    "paddingLeft": 0,
    "height": 55,
    "width": 70,
    "maxWidth": 70,
    "borderRadius": 5,
    "borderSize": 0,
    "gap": 0,
    "contentOpaque": false,
    "layout": "absolute",
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "shadow": false,
    "horizontalAlign": "center",
    "class": "Container",
    "minWidth": 70,
    "paddingBottom": 0,
    "id": "Container_86F3A56C_8E22_5B1D_41CA_9CE53436FE56",
    "paddingTop": 0,
    "maxHeight": 55,
    "minHeight": 55,
    "backgroundOpacity": 0,
    "children": [
     {
      "click": "this.showPopupImage(this.ImageResource_6ECEF4DB_6091_DDD1_41D4_2B884570086A, null, '85%', '85%', this.FadeInEffect_8ED05F70_96C4_F045_41DC_2AB82A556F92, this.FadeOutEffect_8ED06F70_96C4_F045_41DA_C74400CF7B15, {'rollOverIconWidth':25,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorDirection':'vertical','rollOverBackgroundColor':['#000000','#000000','#000000'],'pressedBackgroundColor':['#000000','#000000','#000000'],'iconHeight':25,'rollOverIconColor':'#52B7EF','backgroundColor':['#000000','#000000','#000000'],'rollOverBackgroundColorDirection':'vertical','pressedBorderSize':0,'iconColor':'#FFFFFF','backgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':10,'paddingBottom':10,'pressedIconLineWidth':3,'borderColor':'#000000','paddingLeft':10,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':3,'pressedBorderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundOpacity':0.3,'paddingTop':10,'pressedIconColor':'#CCCCCC','pressedBackgroundColorDirection':'vertical','borderSize':0,'pressedIconWidth':25,'pressedIconHeight':25,'backgroundOpacity':0.15,'rollOverBorderColor':'#000000','rollOverBackgroundOpacity':0.5,'iconWidth':25,'rollOverIconHeight':25,'rollOverIconLineWidth':3}, null, null, false)",
      "toolTipPaddingBottom": 4,
      "mode": "push",
      "toolTipPaddingRight": 6,
      "paddingRight": 0,
      "paddingLeft": 0,
      "maxWidth": 70,
      "width": "100%",
      "toolTip": "Info",
      "iconURL": "skin/IconButton_87577B8F_8E22_AF1B_41CC_79EB87AE6DED.png",
      "transparencyActive": true,
      "toolTipPaddingTop": 4,
      "borderRadius": 0,
      "toolTipBorderSize": 1,
      "toolTipTextShadowOpacity": 0,
      "toolTipFontSize": 12,
      "toolTipOpacity": 0.7,
      "borderSize": 0,
      "toolTipShadowOpacity": 1,
      "rollOverIconURL": "skin/IconButton_87577B8F_8E22_AF1B_41CC_79EB87AE6DED_rollover.png",
      "toolTipShadowVerticalLength": 0,
      "toolTipPaddingLeft": 6,
      "toolTipBorderColor": "#767676",
      "shadow": false,
      "horizontalAlign": "center",
      "toolTipTextShadowColor": "#000000",
      "toolTipFontStyle": "normal",
      "class": "IconButton",
      "minWidth": 25,
      "toolTipBorderRadius": 3,
      "visible": false,
      "paddingBottom": 0,
      "toolTipTextShadowBlurRadius": 3,
      "cursor": "hand",
      "id": "IconButton_87577B8F_8E22_AF1B_41CC_79EB87AE6DED",
      "toolTipBackgroundColor": "#000000",
      "height": "100%",
      "toolTipFontWeight": "normal",
      "toolTipShadowHorizontalLength": 0,
      "paddingTop": 0,
      "maxHeight": 70,
      "toolTipShadowSpread": 0,
      "minHeight": 25,
      "toolTipShadowColor": "#333333",
      "toolTipShadowBlurRadius": 3,
      "backgroundOpacity": 0,
      "toolTipFontColor": "#606060",
      "toolTipFontFamily": "Arial",
      "verticalAlign": "middle"
     },
     {
      "click": "this.setMediaBehaviour(this.playList_78EF4D2E_77AF_E835_41C7_5332DD2D3D99, 0); this.MainViewerVideoPlayer.play()",
      "toolTipPaddingBottom": 4,
      "mode": "push",
      "toolTipPaddingRight": 6,
      "paddingRight": 0,
      "paddingLeft": 0,
      "maxWidth": 70,
      "width": "100%",
      "toolTip": "Play Video",
      "iconURL": "skin/IconButton_213ED70C_2DB2_E6C5_41B6_0CCE6C77E889.png",
      "transparencyActive": true,
      "toolTipPaddingTop": 4,
      "borderRadius": 0,
      "toolTipBorderSize": 1,
      "toolTipTextShadowOpacity": 0,
      "toolTipFontSize": 12,
      "toolTipOpacity": 0.7,
      "borderSize": 0,
      "toolTipShadowOpacity": 1,
      "rollOverIconURL": "skin/IconButton_213ED70C_2DB2_E6C5_41B6_0CCE6C77E889_rollover.png",
      "toolTipShadowVerticalLength": 0,
      "toolTipPaddingLeft": 6,
      "toolTipBorderColor": "#767676",
      "shadow": false,
      "horizontalAlign": "center",
      "toolTipTextShadowColor": "#000000",
      "toolTipFontStyle": "normal",
      "class": "IconButton",
      "minWidth": 25,
      "toolTipBorderRadius": 3,
      "visible": false,
      "paddingBottom": 0,
      "toolTipTextShadowBlurRadius": 3,
      "cursor": "hand",
      "id": "IconButton_213ED70C_2DB2_E6C5_41B6_0CCE6C77E889",
      "toolTipBackgroundColor": "#000000",
      "height": "100%",
      "toolTipFontWeight": "normal",
      "toolTipShadowHorizontalLength": 0,
      "paddingTop": 0,
      "maxHeight": 70,
      "toolTipShadowSpread": 0,
      "minHeight": 25,
      "toolTipShadowColor": "#333333",
      "toolTipShadowBlurRadius": 3,
      "backgroundOpacity": 0,
      "toolTipFontColor": "#606060",
      "toolTipFontFamily": "Arial",
      "verticalAlign": "middle"
     },
     {
      "click": "this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, true, 0, this.effect_508929C3_77ED_DB59_41D8_05A6C8F0681B, 'showEffect', false); this.setComponentVisibility(this.IconButton_843BBEF5_8E22_690F_419D_28CBDD771ACC, true, 0, this.effect_508929C3_77ED_DB59_41D8_05A6C8F0681B, 'showEffect', false); this.setComponentVisibility(this.IconButton_67A0F254_76E6_A97F_419D_52AF6E3FE7C0, false, 0, this.effect_518C2CD2_77ED_D97B_41C3_3AC87D499717, 'hideEffect', false)",
      "toolTipPaddingBottom": 4,
      "mode": "push",
      "toolTipPaddingRight": 6,
      "paddingRight": 0,
      "paddingLeft": 0,
      "maxWidth": 70,
      "width": "100%",
      "toolTip": "Show Panorama List",
      "iconURL": "skin/IconButton_67A0F254_76E6_A97F_419D_52AF6E3FE7C0.png",
      "transparencyActive": true,
      "toolTipPaddingTop": 4,
      "borderRadius": 0,
      "toolTipBorderSize": 1,
      "toolTipTextShadowOpacity": 0,
      "toolTipFontSize": 12,
      "toolTipOpacity": 0.7,
      "borderSize": 0,
      "toolTipShadowOpacity": 1,
      "height": "100%",
      "toolTipShadowVerticalLength": 0,
      "toolTipPaddingLeft": 6,
      "toolTipBorderColor": "#767676",
      "shadow": false,
      "horizontalAlign": "center",
      "toolTipTextShadowColor": "#000000",
      "toolTipFontStyle": "normal",
      "class": "IconButton",
      "minWidth": 70,
      "toolTipBorderRadius": 3,
      "visible": false,
      "paddingBottom": 0,
      "toolTipTextShadowBlurRadius": 3,
      "cursor": "hand",
      "id": "IconButton_67A0F254_76E6_A97F_419D_52AF6E3FE7C0",
      "toolTipBackgroundColor": "#000000",
      "toolTipFontWeight": "normal",
      "toolTipShadowHorizontalLength": 0,
      "paddingTop": 0,
      "maxHeight": 55,
      "toolTipShadowSpread": 0,
      "minHeight": 55,
      "toolTipShadowColor": "#333333",
      "toolTipShadowBlurRadius": 3,
      "backgroundOpacity": 0,
      "toolTipFontColor": "#606060",
      "toolTipFontFamily": "Arial",
      "verticalAlign": "top"
     },
     {
      "click": "this.setComponentVisibility(this.IconButton_67A0F254_76E6_A97F_419D_52AF6E3FE7C0, true, 0, this.effect_640860A9_76E7_E929_4192_305B50E5610A, 'showEffect', false); this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, false, 0, this.effect_5032FA51_77E2_5979_41D1_45E5EF039077, 'hideEffect', false); this.setComponentVisibility(this.IconButton_843BBEF5_8E22_690F_419D_28CBDD771ACC, false, 0, this.effect_5032FA51_77E2_5979_41D1_45E5EF039077, 'hideEffect', false)",
      "toolTipPaddingBottom": 4,
      "mode": "push",
      "toolTipPaddingRight": 6,
      "paddingRight": 0,
      "paddingLeft": 0,
      "maxWidth": 70,
      "width": "100%",
      "toolTip": "Hide Panorama List",
      "iconURL": "skin/IconButton_843BBEF5_8E22_690F_419D_28CBDD771ACC.png",
      "transparencyActive": true,
      "toolTipPaddingTop": 4,
      "borderRadius": 0,
      "toolTipBorderSize": 1,
      "toolTipTextShadowOpacity": 0,
      "toolTipFontSize": 12,
      "toolTipOpacity": 0.7,
      "borderSize": 0,
      "toolTipShadowOpacity": 1,
      "height": "100%",
      "toolTipShadowVerticalLength": 0,
      "toolTipPaddingLeft": 6,
      "toolTipBorderColor": "#767676",
      "shadow": false,
      "horizontalAlign": "center",
      "toolTipTextShadowColor": "#000000",
      "toolTipFontStyle": "normal",
      "class": "IconButton",
      "minWidth": 70,
      "toolTipBorderRadius": 3,
      "paddingBottom": 0,
      "toolTipTextShadowBlurRadius": 3,
      "cursor": "hand",
      "id": "IconButton_843BBEF5_8E22_690F_419D_28CBDD771ACC",
      "toolTipBackgroundColor": "#000000",
      "toolTipFontWeight": "normal",
      "toolTipShadowHorizontalLength": 0,
      "paddingTop": 0,
      "maxHeight": 55,
      "toolTipShadowSpread": 0,
      "minHeight": 55,
      "toolTipShadowColor": "#333333",
      "toolTipShadowBlurRadius": 3,
      "backgroundOpacity": 0,
      "toolTipFontColor": "#606060",
      "toolTipFontFamily": "Arial",
      "verticalAlign": "top"
     },
     "this.IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED",
     {
      "click": "this.setComponentVisibility(this.Container_53347472_4288_F6E6_4196_D7457B47D2CF, true, 0, this.effect_51CB7B74_4299_12E2_41B4_829087983DE5, 'showEffect', false)",
      "toolTipPaddingBottom": 4,
      "mode": "push",
      "toolTipPaddingRight": 6,
      "paddingRight": 0,
      "paddingLeft": 0,
      "maxWidth": 70,
      "width": "85%",
      "toolTip": "FLoor Plan",
      "iconURL": "skin/IconButton_2FC9210C_3E8F_C4D4_41A7_10D1404CA49B.png",
      "transparencyActive": true,
      "toolTipPaddingTop": 4,
      "borderRadius": 0,
      "toolTipBorderSize": 1,
      "toolTipTextShadowOpacity": 0,
      "toolTipFontSize": 12,
      "toolTipOpacity": 0.7,
      "borderSize": 0,
      "toolTipShadowOpacity": 1,
      "height": "85%",
      "toolTipShadowVerticalLength": 0,
      "toolTipPaddingLeft": 6,
      "toolTipBorderColor": "#767676",
      "shadow": false,
      "horizontalAlign": "center",
      "toolTipTextShadowColor": "#000000",
      "toolTipFontStyle": "normal",
      "class": "IconButton",
      "minWidth": 25,
      "toolTipBorderRadius": 3,
      "visible": false,
      "paddingBottom": 0,
      "toolTipTextShadowBlurRadius": 3,
      "cursor": "hand",
      "id": "IconButton_2FC9210C_3E8F_C4D4_41A7_10D1404CA49B",
      "toolTipBackgroundColor": "#000000",
      "toolTipFontWeight": "normal",
      "toolTipShadowHorizontalLength": 0,
      "paddingTop": 0,
      "maxHeight": 70,
      "toolTipShadowSpread": 0,
      "minHeight": 25,
      "toolTipShadowColor": "#333333",
      "toolTipShadowBlurRadius": 3,
      "pressedIconURL": "skin/IconButton_2FC9210C_3E8F_C4D4_41A7_10D1404CA49B_pressed.png",
      "backgroundOpacity": 0,
      "toolTipFontColor": "#606060",
      "toolTipFontFamily": "Arial",
      "verticalAlign": "middle"
     }
    ],
    "verticalAlign": "middle",
    "scrollBarVisible": "rollOver"
   }
  ],
  "verticalAlign": "middle",
  "scrollBarVisible": "rollOver"
 },
 {
  "backgroundColorDirection": "vertical",
  "paddingRight": 0,
  "backgroundColor": [
   "#000000"
  ],
  "paddingLeft": 0,
  "borderRadius": 0,
  "borderSize": 0,
  "shadow": false,
  "top": 0,
  "minWidth": 0,
  "visible": false,
  "paddingBottom": 0,
  "class": "UIComponent",
  "bottom": 0,
  "id": "veilPopupPanorama",
  "backgroundColorRatios": [
   0
  ],
  "showEffect": {
   "easing": "cubic_in_out",
   "duration": 350,
   "class": "FadeInEffect"
  },
  "paddingTop": 0,
  "minHeight": 0,
  "left": 0,
  "backgroundOpacity": 0.55,
  "right": 0
 },
 {
  "backgroundColorDirection": "vertical",
  "paddingRight": 0,
  "backgroundColor": [],
  "paddingLeft": 0,
  "borderRadius": 0,
  "borderSize": 0,
  "scaleMode": "custom",
  "shadow": false,
  "top": 0,
  "minWidth": 0,
  "visible": false,
  "paddingBottom": 0,
  "class": "ZoomImage",
  "bottom": 0,
  "id": "zoomImagePopupPanorama",
  "backgroundColorRatios": [],
  "paddingTop": 0,
  "minHeight": 0,
  "left": 0,
  "backgroundOpacity": 1,
  "right": 0
 },
 {
  "fontFamily": "Arial",
  "backgroundColorDirection": "vertical",
  "gap": 5,
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
  "borderRadius": 0,
  "iconBeforeLabel": true,
  "iconWidth": 20,
  "borderSize": 0,
  "layout": "horizontal",
  "fontStyle": "normal",
  "shadow": false,
  "horizontalAlign": "center",
  "fontColor": "#FFFFFF",
  "top": 10,
  "minWidth": 0,
  "visible": false,
  "paddingBottom": 5,
  "borderColor": "#000000",
  "showEffect": {
   "easing": "cubic_in_out",
   "duration": 350,
   "class": "FadeInEffect"
  },
  "backgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "id": "closeButtonPopupPanorama",
  "cursor": "hand",
  "iconLineWidth": 5,
  "shadowColor": "#000000",
  "paddingTop": 5,
  "pressedIconColor": "#888888",
  "class": "CloseButton",
  "fontWeight": "normal",
  "rollOverIconColor": "#666666",
  "minHeight": 0,
  "shadowSpread": 1,
  "shadowBlurRadius": 6,
  "backgroundOpacity": 0.3,
  "label": "",
  "right": 10,
  "verticalAlign": "middle"
 }
], 
 "overflow": "visible",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "mouseWheelEnabled": true,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "height": "100%",
 "width": "100%",
 "borderRadius": 0,
 "borderSize": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "shadow": false,
 "layout": "absolute",
 "horizontalAlign": "left",
 "buttonToggleMute": "this.IconButton_8105A313_8E22_BF0B_41E1_331C6035A930",
 "vrPolyfillScale": 0.5,
 "class": "Player",
 "minWidth": 20,
 "paddingBottom": 0,
 "id": "rootPlayer",
 "scripts": {
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "unregisterKey": function(key){  delete window[key]; },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "registerKey": function(key, value){  window[key] = value; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "existsKey": function(key){  return key in window; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getKey": function(key){  return window[key]; },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio) delete audios[audio.get('id')]; } if(audio) audio.stop(); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } }
 },
 "backgroundPreloadEnabled": true,
 "paddingTop": 0,
 "minHeight": 20,
 "start": "this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37], 'cardboardAvailable'); this.syncPlaylists([this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); this.playList_78E8BD38_77AF_E81D_4187_BB1743000488.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA].forEach(function(component) { component.set('visible', false); }) }",
 "buttonToggleFullscreen": "this.IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA",
 "verticalAlign": "top",
 "scrollBarVisible": "rollOver"
})