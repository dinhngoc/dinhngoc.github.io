TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "class": "VideoPlayer",
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
   "toolTipFontSize": 14,
   "toolTipShadowOpacity": 1,
   "toolTipOpacity": 0.7,
   "borderSize": 0,
   "toolTipBorderSize": 1,
   "toolTipShadowHorizontalLength": 0,
   "class": "IconButton",
   "borderRadius": 0,
   "toolTipShadowVerticalLength": 0,
   "toolTipPaddingLeft": 6,
   "toolTipBorderColor": "#767676",
   "toolTipTextShadowColor": "#000000",
   "rollOverIconURL": "skin/IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED_rollover.png",
   "click": "this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, true, 0, this.effect_98AADBB0_96C5_F0C5_41B2_1C4D08E503DB, 'showEffect', false); this.playList_74ECF189_64EC_4124_41D8_46AE23F474F0.set('selectedIndex', 0)",
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
    "borderSize": 0,
    "class": "IconButton",
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
  "class": "PhotoAlbumPlayer",
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
   "progressBarOpacity": 1,
   "toolTipPaddingBottom": 4,
   "playbackBarProgressBackgroundColorDirection": "vertical",
   "progressRight": 0,
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
   "playbackBarHeadShadow": true,
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
   "progressBackgroundOpacity": 1,
   "minWidth": 1,
   "playbackBarBorderRadius": 0,
   "toolTipFontColor": "#606060",
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
   "class": "ViewerArea",
   "playbackBarHeadShadowBlurRadius": 3,
   "toolTipPaddingLeft": 6,
   "toolTipBorderColor": "#767676",
   "playbackBarProgressBackgroundColorRatios": [
    0
   ],
   "playbackBarLeft": 0,
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
   "playbackBarHeadShadowVerticalLength": 0,
   "toolTipShadowHorizontalLength": 0,
   "playbackBarProgressBackgroundColor": [
    "#3399FF"
   ],
   "playbackBarHeadShadowColor": "#000000",
   "toolTipFontWeight": "normal",
   "id": "ViewerAreaLabeled_9FD7235A_96CD_9045_41D9_23A3BCBDB1C6",
   "playbackBarHeadBorderSize": 0,
   "progressBarBorderColor": "#000000",
   "playbackBarHeadOpacity": 1,
   "toolTipTextShadowBlurRadius": 3,
   "progressBackgroundColorDirection": "vertical",
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
   "progressOpacity": 1,
   "playbackBarHeadShadowHorizontalLength": 0
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
   "borderSize": 0,
   "class": "IconButton",
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
  "buttonStop": [
   "this.IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4",
   "this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB"
  ]
 },
 {
  "hfovMax": 120,
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_6FF6EAC5_64DC_C32F_41CD_F8E48CAF0E47_t.jpg",
  "id": "panorama_6FF6EAC5_64DC_C32F_41CD_F8E48CAF0E47",
  "hfovMin": 60,
  "label": "Start",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_6FF6EAC5_64DC_C32F_41CD_F8E48CAF0E47_t.jpg",
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_6A82FDC0_64E4_C124_41C7_7ABE7D4F9894",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 0,
        "yaw": -176.73,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 1,
           "width": 1,
           "url": "media/panorama_6FF6EAC5_64DC_C32F_41CD_F8E48CAF0E47_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": 96.26
       }
      ],
      "enabledInCardboard": true,
      "useHandCursor": true,
      "rollOverDisplay": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_6BE40682_606A_FF06_41C3_B3B6845ECE6A, this.camera_75C3830C_64EC_413C_41C2_92DBCB1701C8); this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "items": [
       {
        "yaw": -176.73,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 1,
           "width": 1,
           "url": "media/panorama_6FF6EAC5_64DC_C32F_41CD_F8E48CAF0E47_0_HS_0_0.png"
          }
         ]
        },
        "pitch": 96.26
       }
      ]
     }
    ],
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 1688,
       "width": 3000,
       "url": "media/panorama_6FF6EAC5_64DC_C32F_41CD_F8E48CAF0E47_hq.jpeg"
      }
     ]
    }
   }
  ],
  "class": "Panorama",
  "hfov": 360,
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "panorama": {
     "mapLocations": [
      {
       "class": "PanoramaMapLocation",
       "x": 303.34,
       "y": 415.62,
       "angle": 71.83,
       "map": {
        "fieldOfViewOverlayInsideColor": "#999999",
        "fieldOfViewOverlayInsideOpacity": 0.3,
        "width": 1468,
        "id": "map_4E02A832_427B_EE04_41CC_8E1CEC03E8D3",
        "height": 864,
        "minimumZoomFactor": 0.5,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 864,
           "width": 1468,
           "url": "media/map_4E02A832_427B_EE04_41CC_8E1CEC03E8D3.jpeg"
          },
          {
           "class": "ImageResourceLevel",
           "height": 432,
           "width": 734,
           "url": "media/map_4E02A832_427B_EE04_41CC_8E1CEC03E8D3_lq.jpeg",
           "grayscale": true
          }
         ]
        },
        "fieldOfViewOverlayOutsideColor": "#000000",
        "thumbnailUrl": "media/map_4E02A832_427B_EE04_41CC_8E1CEC03E8D3_t.jpg",
        "fieldOfViewOverlayOutsideOpacity": 0,
        "label": "first floor",
        "overlays": [
         {
          "class": "AreaHotspotMapOverlay",
          "id": "overlay_4E318587_4299_762E_41B8_79C61CBB293C",
          "map": {
           "class": "HotspotMapOverlayMap",
           "x": 253.34,
           "offsetY": 0,
           "width": 100,
           "y": 365.62,
           "height": 100,
           "offsetX": 0,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 50,
              "width": 50,
              "url": "media/map_4E02A832_427B_EE04_41CC_8E1CEC03E8D3_HS_0_map.gif"
             }
            ]
           }
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
              "class": "ImageResourceLevel",
              "height": 100,
              "width": 100,
              "url": "media/map_4E02A832_427B_EE04_41CC_8E1CEC03E8D3_HS_0.png"
             }
            ]
           }
          },
          "areas": [
           {
            "class": "HotspotMapOverlayArea",
            "mapColor": "#FF0000",
            "click": "this.mainPlayList.set('selectedIndex', 1)"
           }
          ],
          "useHandCursor": true
         }
        ],
        "fieldOfViewOverlayRadiusScale": 0.09,
        "class": "Map",
        "scaleMode": "fit_inside",
        "maximumZoomFactor": 1.2,
        "initialZoomFactor": 1
       }
      }
     ],
     "partial": false,
     "pitch": 0,
     "thumbnailUrl": "media/panorama_6BE40682_606A_FF06_41C3_B3B6845ECE6A_t.jpg",
     "id": "panorama_6BE40682_606A_FF06_41C3_B3B6845ECE6A",
     "hfovMin": 100,
     "label": "01_Street View",
     "frames": [
      {
       "class": "SphericPanoramaFrame",
       "thumbnailUrl": "media/panorama_6BE40682_606A_FF06_41C3_B3B6845ECE6A_t.jpg",
       "overlays": [
        {
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_6BE4C682_606A_FF06_41C7_F300FD6427E2",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 5.02,
           "yaw": 140.51,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 34,
              "width": 34,
              "url": "media/panorama_6BE40682_606A_FF06_41C3_B3B6845ECE6A_0_HS_0_0_0_map.gif"
             }
            ]
           },
           "pitch": 5.38
          }
         ],
         "enabledInCardboard": true,
         "useHandCursor": true,
         "rollOverDisplay": false,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "toolTip": "02_Entrance",
           "displayTooltipInTouchScreens": true,
           "click": "this.startPanoramaWithCamera(this.panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E, this.camera_552A6ED5_5BF2_F2BA_41D6_D4FD03CB3A2E); this.mainPlayList.set('selectedIndex', 2)",
           "mapColor": "#FF0000"
          }
         ],
         "items": [
          {
           "yaw": 140.51,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 5.02,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 69,
              "width": 69,
              "url": "media/panorama_6BE40682_606A_FF06_41C3_B3B6845ECE6A_0_HS_0_0.png"
             }
            ]
           },
           "pitch": 5.38
          }
         ]
        },
        {
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_6BE4B682_606A_FF06_41BB_7B860FB876D9",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 2.5,
           "yaw": 140.55,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 17,
              "width": 17,
              "url": "media/panorama_6BE40682_606A_FF06_41C3_B3B6845ECE6A_0_HS_5_0_0_map.gif"
             }
            ]
           },
           "pitch": 8.06
          }
         ],
         "enabledInCardboard": true,
         "useHandCursor": true,
         "rollOverDisplay": false,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "toolTip": "02_Entrance",
           "displayTooltipInTouchScreens": true,
           "click": "this.startPanoramaWithCamera(this.panorama_6CEBB7E8_606A_7D03_41CE_69723C00AA9F, this.camera_74CDD473_64EC_47E4_41C0_000DDE5FC344); this.mainPlayList.set('selectedIndex', 2)",
           "mapColor": "#FF0000"
          }
         ],
         "items": [
          {
           "yaw": 140.55,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 2.5,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 34,
              "width": 34,
              "url": "media/panorama_6BE40682_606A_FF06_41C3_B3B6845ECE6A_0_HS_5_0.png"
             }
            ]
           },
           "pitch": 8.06
          }
         ]
        },
        {
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_6BE48682_606A_FF06_41D0_A48635ED687C",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 0,
           "yaw": -171.35,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 1,
              "width": 1,
              "url": "media/panorama_6BE40682_606A_FF06_41C3_B3B6845ECE6A_0_HS_1_0_0_map.gif"
             }
            ]
           },
           "pitch": 85.73
          }
         ],
         "enabledInCardboard": true,
         "useHandCursor": true,
         "rollOverDisplay": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_6CD96857_606E_330E_41D4_28DA4961B1BD, this.camera_74CA347D_64EC_47DC_41A9_04F5AFFB7F36); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 10); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 8); this.mainPlayList.set('selectedIndex', 5); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 0)"
          }
         ],
         "items": [
          {
           "yaw": -171.35,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 0,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 1,
              "width": 1,
              "url": "media/panorama_6BE40682_606A_FF06_41C3_B3B6845ECE6A_0_HS_1_0.png"
             }
            ]
           },
           "pitch": 85.73
          }
         ]
        }
       ],
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "class": "ImageResourceLevel",
          "height": 2500,
          "width": 5000,
          "url": "media/panorama_6BE40682_606A_FF06_41C3_B3B6845ECE6A_hq.jpeg"
         },
         {
          "class": "ImageResourceLevel",
          "height": 1608,
          "width": 3217,
          "url": "media/panorama_6BE40682_606A_FF06_41C3_B3B6845ECE6A.jpeg"
         }
        ]
       }
      }
     ],
     "class": "Panorama",
     "hfovMax": 120,
     "hfov": 360,
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "hfovMax": 120,
        "partial": false,
        "pitch": 0,
        "thumbnailUrl": "media/panorama_6A977261_617E_B0AF_41D7_BFCC461810A7_t.jpg",
        "id": "panorama_6A977261_617E_B0AF_41D7_BFCC461810A7",
        "hfovMin": 100,
        "label": "06_Master",
        "frames": [
         {
          "class": "SphericPanoramaFrame",
          "thumbnailUrl": "media/panorama_6A977261_617E_B0AF_41D7_BFCC461810A7_t.jpg",
          "overlays": [
           {
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_6A97A261_617E_B0AF_41D7_24B743DC61D2",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 5.48,
              "yaw": -178.25,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 49,
                 "width": 49,
                 "url": "media/panorama_6A977261_617E_B0AF_41D7_BFCC461810A7_0_HS_0_0_0_map.gif"
                }
               ]
              },
              "pitch": -40.5
             }
            ],
            "enabledInCardboard": true,
            "useHandCursor": true,
            "rollOverDisplay": false,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "toolTip": "06a_Balcony",
              "displayTooltipInTouchScreens": true,
              "click": "this.startPanoramaWithCamera(this.panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C, this.camera_569B6D6C_5BF2_F669_41A7_8467FF9A6DAA); this.mainPlayList.set('selectedIndex', 7)",
              "mapColor": "#FF0000"
             }
            ],
            "items": [
             {
              "yaw": -178.25,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 5.48,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 99,
                 "width": 99,
                 "url": "media/panorama_6A977261_617E_B0AF_41D7_BFCC461810A7_0_HS_0_0.png"
                }
               ]
              },
              "pitch": -40.5
             }
            ]
           },
           {
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_6A97B261_617E_B0AF_41D1_B251D53872F0",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 5.53,
              "yaw": 83.07,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 41,
                 "width": 41,
                 "url": "media/panorama_6A977261_617E_B0AF_41D7_BFCC461810A7_0_HS_2_0_0_map.gif"
                }
               ]
              },
              "pitch": -22.75
             }
            ],
            "enabledInCardboard": true,
            "useHandCursor": true,
            "rollOverDisplay": false,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "toolTip": "06b_WC",
              "displayTooltipInTouchScreens": true,
              "click": "this.startPanoramaWithCamera(this.panorama_46009756_572D_4167_41C6_2B49BD1EF7CE, this.camera_56E74D59_5BF2_F7AA_41D0_B6C262499B65); this.mainPlayList.set('selectedIndex', 8)",
              "mapColor": "#FF0000"
             }
            ],
            "items": [
             {
              "yaw": 83.07,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 5.53,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 83,
                 "width": 83,
                 "url": "media/panorama_6A977261_617E_B0AF_41D7_BFCC461810A7_0_HS_2_0.png"
                }
               ]
              },
              "pitch": -22.75
             }
            ]
           },
           {
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_6A978261_617E_B0AF_41D6_7BE73BA5D265",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 5.37,
              "yaw": 34.84,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 37,
                 "width": 37,
                 "url": "media/panorama_6A977261_617E_B0AF_41D7_BFCC461810A7_0_HS_3_0_0_map.gif"
                }
               ]
              },
              "pitch": 6.1
             }
            ],
            "enabledInCardboard": true,
            "useHandCursor": true,
            "rollOverDisplay": false,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "toolTip": "07_2Beds Room",
              "displayTooltipInTouchScreens": true,
              "click": "this.startPanoramaWithCamera(this.panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D, this.camera_56C57D3C_5BF2_F7EA_41BA_23AB5285E45A); this.mainPlayList.set('selectedIndex', 9)",
              "mapColor": "#FF0000"
             }
            ],
            "items": [
             {
              "yaw": 34.84,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 5.37,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 74,
                 "width": 74,
                 "url": "media/panorama_6A977261_617E_B0AF_41D7_BFCC461810A7_0_HS_3_0.png"
                }
               ]
              },
              "pitch": 6.1
             }
            ]
           },
           {
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_6A979261_617E_B0AF_41A6_BE54EDD373AB",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 5.27,
              "yaw": 34.74,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 37,
                 "width": 37,
                 "url": "media/panorama_6A977261_617E_B0AF_41D7_BFCC461810A7_0_HS_4_0_0_map.gif"
                }
               ]
              },
              "pitch": -12.59
             }
            ],
            "enabledInCardboard": true,
            "useHandCursor": true,
            "rollOverDisplay": false,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "toolTip": "05_1Bedroom",
              "displayTooltipInTouchScreens": true,
              "click": "this.startPanoramaWithCamera(this.panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC, this.camera_56F35D45_5BF2_F79A_41D0_857D96DC10DF); this.mainPlayList.set('selectedIndex', 5)",
              "mapColor": "#FF0000"
             }
            ],
            "items": [
             {
              "yaw": 34.74,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 5.27,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 74,
                 "width": 74,
                 "url": "media/panorama_6A977261_617E_B0AF_41D7_BFCC461810A7_0_HS_4_0.png"
                }
               ]
              },
              "pitch": -12.59
             }
            ]
           },
           {
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_6A97D261_617E_B0AF_41CF_A4EC460D5CAA",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 0,
              "yaw": -162.92,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 1,
                 "width": 1,
                 "url": "media/panorama_6A977261_617E_B0AF_41D7_BFCC461810A7_0_HS_1_0_0_map.gif"
                }
               ]
              },
              "pitch": 76.94
             }
            ],
            "enabledInCardboard": true,
            "useHandCursor": true,
            "rollOverDisplay": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_6CD96857_606E_330E_41D4_28DA4961B1BD, this.camera_74BF220D_64EC_433C_41D8_F35546E85444); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 10); this.mainPlayList.set('selectedIndex', 4)"
             }
            ],
            "items": [
             {
              "yaw": -162.92,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 0,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 1,
                 "width": 1,
                 "url": "media/panorama_6A977261_617E_B0AF_41D7_BFCC461810A7_0_HS_1_0.png"
                }
               ]
              },
              "pitch": 76.94
             }
            ]
           },
           {
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_6A903261_617E_B0AF_41C8_625EAD8D3F30",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 2.88,
              "yaw": -178.15,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 25,
                 "width": 24,
                 "url": "media/panorama_6A977261_617E_B0AF_41D7_BFCC461810A7_0_HS_5_0_0_map.gif"
                }
               ]
              },
              "pitch": -36.89
             }
            ],
            "enabledInCardboard": true,
            "useHandCursor": true,
            "rollOverDisplay": false,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "toolTip": "06a_Balcony",
              "displayTooltipInTouchScreens": true,
              "click": "this.startPanoramaWithCamera(this.panorama_6CE9E5E7_606E_5D0E_41D0_003A6E1B2677, this.camera_74DCC1CD_64EC_413C_41D1_3824FE2B24FC); this.mainPlayList.set('selectedIndex', 7)",
              "mapColor": "#FF0000"
             }
            ],
            "items": [
             {
              "yaw": -178.15,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 2.88,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 50,
                 "width": 49,
                 "url": "media/panorama_6A977261_617E_B0AF_41D7_BFCC461810A7_0_HS_5_0.png"
                }
               ]
              },
              "pitch": -36.89
             }
            ]
           },
           {
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_6A906261_617E_B0AF_41BC_A0855EAB9939",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 3.39,
              "yaw": 83.08,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 25,
                 "width": 24,
                 "url": "media/panorama_6A977261_617E_B0AF_41D7_BFCC461810A7_0_HS_6_0_0_map.gif"
                }
               ]
              },
              "pitch": -19.63
             }
            ],
            "enabledInCardboard": true,
            "useHandCursor": true,
            "rollOverDisplay": false,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "toolTip": "06b_WC",
              "displayTooltipInTouchScreens": true,
              "click": "this.startPanoramaWithCamera(this.panorama_6D430522_6193_00C9_41B5_ED6C4ECBB6B9, this.camera_74AF01ED_64EC_40FC_41B7_1DAF2976E4D7); this.mainPlayList.set('selectedIndex', 8)",
              "mapColor": "#FF0000"
             }
            ],
            "items": [
             {
              "yaw": 83.08,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 3.39,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 50,
                 "width": 49,
                 "url": "media/panorama_6A977261_617E_B0AF_41D7_BFCC461810A7_0_HS_6_0.png"
                }
               ]
              },
              "pitch": -19.63
             }
            ]
           },
           {
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_6A905261_617E_B0AF_41CC_7B64654FA5FE",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 2.63,
              "yaw": 34.86,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 18,
                 "width": 18,
                 "url": "media/panorama_6A977261_617E_B0AF_41D7_BFCC461810A7_0_HS_7_0_0_map.gif"
                }
               ]
              },
              "pitch": 9.33
             }
            ],
            "enabledInCardboard": true,
            "useHandCursor": true,
            "rollOverDisplay": false,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "toolTip": "07_2Beds Room",
              "displayTooltipInTouchScreens": true,
              "click": "this.startPanoramaWithCamera(this.panorama_6CD1C202_606E_7706_41A2_313E1DC1AF6A, this.camera_74D101C3_64EC_4124_41D1_4EEAEC7CFC7D); this.mainPlayList.set('selectedIndex', 9)",
              "mapColor": "#FF0000"
             }
            ],
            "items": [
             {
              "yaw": 34.86,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 2.63,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 37,
                 "width": 37,
                 "url": "media/panorama_6A977261_617E_B0AF_41D7_BFCC461810A7_0_HS_7_0.png"
                }
               ]
              },
              "pitch": 9.33
             }
            ]
           },
           {
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_6A908261_617E_B0AF_418A_E6ADA829CA5F",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 2.56,
              "yaw": 34.76,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 18,
                 "width": 18,
                 "url": "media/panorama_6A977261_617E_B0AF_41D7_BFCC461810A7_0_HS_8_0_0_map.gif"
                }
               ]
              },
              "pitch": -15.94
             }
            ],
            "enabledInCardboard": true,
            "useHandCursor": true,
            "rollOverDisplay": false,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "toolTip": "05_1Bedroom",
              "displayTooltipInTouchScreens": true,
              "click": "this.startPanoramaWithCamera(this.panorama_6C191CE9_606E_7302_41D6_3E33CDB64ACF, this.camera_74AB81F7_64EC_40EC_41D0_7336E9B3AFDF); this.mainPlayList.set('selectedIndex', 5)",
              "mapColor": "#FF0000"
             }
            ],
            "items": [
             {
              "yaw": 34.76,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 2.56,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 37,
                 "width": 37,
                 "url": "media/panorama_6A977261_617E_B0AF_41D7_BFCC461810A7_0_HS_8_0.png"
                }
               ]
              },
              "pitch": -15.94
             }
            ]
           }
          ],
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "class": "ImageResourceLevel",
             "height": 2500,
             "width": 5000,
             "url": "media/panorama_6A977261_617E_B0AF_41D7_BFCC461810A7_hq.jpeg"
            },
            {
             "class": "ImageResourceLevel",
             "height": 1608,
             "width": 3217,
             "url": "media/panorama_6A977261_617E_B0AF_41D7_BFCC461810A7.jpeg"
            }
           ]
          }
         }
        ],
        "class": "Panorama",
        "hfov": 360,
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": {
           "hfovMax": 120,
           "partial": false,
           "pitch": 0,
           "thumbnailUrl": "media/panorama_6A58246F_6179_90B3_41BF_E08163C94BD1_t.jpg",
           "id": "panorama_6A58246F_6179_90B3_41BF_E08163C94BD1",
           "hfovMin": 100,
           "label": "03_Pool",
           "frames": [
            {
             "class": "SphericPanoramaFrame",
             "thumbnailUrl": "media/panorama_6A58246F_6179_90B3_41BF_E08163C94BD1_t.jpg",
             "overlays": [
              {
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_6A5FC46F_6179_90B3_41A1_966751D2051C",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 6.33,
                 "yaw": 12.08,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 52,
                    "width": 52,
                    "url": "media/panorama_6A58246F_6179_90B3_41BF_E08163C94BD1_0_HS_0_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -33.14
                }
               ],
               "enabledInCardboard": true,
               "useHandCursor": true,
               "rollOverDisplay": false,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "toolTip": "04_Living Room",
                 "displayTooltipInTouchScreens": true,
                 "click": "this.startPanoramaWithCamera(this.panorama_47B53902_572E_CEDF_41CC_C256D31A5443, this.camera_566FDDCF_5BF2_F6A7_41C3_D60F04E20C30); this.mainPlayList.set('selectedIndex', 4)",
                 "mapColor": "#FF0000"
                }
               ],
               "items": [
                {
                 "yaw": 12.08,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 6.33,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 105,
                    "width": 105,
                    "url": "media/panorama_6A58246F_6179_90B3_41BF_E08163C94BD1_0_HS_0_0.png"
                   }
                  ]
                 },
                 "pitch": -33.14
                }
               ]
              },
              {
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_6A5FE46F_6179_90B3_41C4_4A33968EF991",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 5.99,
                 "yaw": -97.88,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 43,
                    "width": 43,
                    "url": "media/panorama_6A58246F_6179_90B3_41BF_E08163C94BD1_0_HS_6_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -16.95
                }
               ],
               "enabledInCardboard": true,
               "useHandCursor": true,
               "rollOverDisplay": false,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "toolTip": "02_Entrance",
                 "displayTooltipInTouchScreens": true,
                 "click": "this.startPanoramaWithCamera(this.panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E, this.camera_565ACDA7_5BF2_F6E7_41BA_8BE7CEB9351B); this.mainPlayList.set('selectedIndex', 2)",
                 "mapColor": "#FF0000"
                }
               ],
               "items": [
                {
                 "yaw": -97.88,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 5.99,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 87,
                    "width": 87,
                    "url": "media/panorama_6A58246F_6179_90B3_41BF_E08163C94BD1_0_HS_6_0.png"
                   }
                  ]
                 },
                 "pitch": -16.95
                }
               ]
              },
              {
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_6A5F8470_6179_90AD_41C3_7E7F70A3F932",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 0,
                 "yaw": -172.22,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 1,
                    "width": 1,
                    "url": "media/panorama_6A58246F_6179_90B3_41BF_E08163C94BD1_0_HS_1_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": 82.35
                }
               ],
               "enabledInCardboard": true,
               "useHandCursor": true,
               "rollOverDisplay": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_6CD96857_606E_330E_41D4_28DA4961B1BD, this.camera_7445C26B_64EC_43FB_41BD_31ECDA03759C); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 10); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 8); this.mainPlayList.set('selectedIndex', 5); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 7)"
                }
               ],
               "items": [
                {
                 "yaw": -172.22,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 0,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 1,
                    "width": 1,
                    "url": "media/panorama_6A58246F_6179_90B3_41BF_E08163C94BD1_0_HS_1_0.png"
                   }
                  ]
                 },
                 "pitch": 82.35
                }
               ]
              },
              {
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_6A5FA470_6179_90AD_41C2_B45238960A98",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 3.14,
                 "yaw": 12.1,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 25,
                    "width": 25,
                    "url": "media/panorama_6A58246F_6179_90B3_41BF_E08163C94BD1_0_HS_7_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -29.22
                }
               ],
               "enabledInCardboard": true,
               "useHandCursor": true,
               "rollOverDisplay": false,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "toolTip": "04_Living Room",
                 "displayTooltipInTouchScreens": true,
                 "click": "this.startPanoramaWithCamera(this.panorama_6C19C4DF_606E_333E_4190_E16296FAA0F2, this.camera_7496E235_64EC_436F_41C5_0D55CF83B314); this.mainPlayList.set('selectedIndex', 4)",
                 "mapColor": "#FF0000"
                }
               ],
               "items": [
                {
                 "yaw": 12.1,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 3.14,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 50,
                    "width": 50,
                    "url": "media/panorama_6A58246F_6179_90B3_41BF_E08163C94BD1_0_HS_7_0.png"
                   }
                  ]
                 },
                 "pitch": -29.22
                }
               ]
              },
              {
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_6A5F7470_6179_90AD_41D6_DA66F87CC0A2",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 2.87,
                 "yaw": -94.33,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 20,
                    "width": 20,
                    "url": "media/panorama_6A58246F_6179_90B3_41BF_E08163C94BD1_0_HS_8_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -16.98
                }
               ],
               "enabledInCardboard": true,
               "useHandCursor": true,
               "rollOverDisplay": false,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "toolTip": "02_Entrance",
                 "displayTooltipInTouchScreens": true,
                 "click": "this.startPanoramaWithCamera(this.panorama_6CEBB7E8_606A_7D03_41CE_69723C00AA9F, this.camera_74716261_64EC_43E7_41D2_D4B29EEC7B92); this.mainPlayList.set('selectedIndex', 2)",
                 "mapColor": "#FF0000"
                }
               ],
               "items": [
                {
                 "yaw": -94.33,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 2.87,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 41,
                    "width": 41,
                    "url": "media/panorama_6A58246F_6179_90B3_41BF_E08163C94BD1_0_HS_8_0.png"
                   }
                  ]
                 },
                 "pitch": -16.98
                }
               ]
              }
             ],
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "class": "ImageResourceLevel",
                "height": 2500,
                "width": 5000,
                "url": "media/panorama_6A58246F_6179_90B3_41BF_E08163C94BD1_hq.jpeg"
               },
               {
                "class": "ImageResourceLevel",
                "height": 1608,
                "width": 3217,
                "url": "media/panorama_6A58246F_6179_90B3_41BF_E08163C94BD1.jpeg"
               }
              ]
             }
            }
           ],
           "class": "Panorama",
           "hfov": 360,
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_6A977261_617E_B0AF_41D7_BFCC461810A7",
             "yaw": -172.22,
             "backwardYaw": -162.92,
             "distance": 1
            },
            {
             "class": "AdjacentPanorama",
             "panorama": {
              "hfovMax": 120,
              "partial": false,
              "pitch": 0,
              "thumbnailUrl": "media/panorama_6CD1C202_606E_7706_41A2_313E1DC1AF6A_t.jpg",
              "id": "panorama_6CD1C202_606E_7706_41A2_313E1DC1AF6A",
              "hfovMin": 100,
              "label": "07_2Beds Room",
              "frames": [
               {
                "class": "SphericPanoramaFrame",
                "thumbnailUrl": "media/panorama_6CD1C202_606E_7706_41A2_313E1DC1AF6A_t.jpg",
                "overlays": [
                 {
                  "class": "HotspotPanoramaOverlay",
                  "id": "overlay_6CD1D202_606E_7706_41D0_E978E2A252CB",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 6.52,
                    "yaw": 112.43,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 46,
                       "width": 46,
                       "url": "media/panorama_6CD1C202_606E_7706_41A2_313E1DC1AF6A_0_HS_2_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": 10.35
                   }
                  ],
                  "enabledInCardboard": true,
                  "useHandCursor": true,
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "toolTip": "08_Rooftop",
                    "displayTooltipInTouchScreens": true,
                    "click": "this.startPanoramaWithCamera(this.panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116, this.camera_56043BB0_5BF2_F2FA_41B1_1DE6A0E08A4C); this.mainPlayList.set('selectedIndex', 10)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "items": [
                   {
                    "yaw": 112.43,
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 6.52,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 92,
                       "width": 92,
                       "url": "media/panorama_6CD1C202_606E_7706_41A2_313E1DC1AF6A_0_HS_2_0.png"
                      }
                     ]
                    },
                    "pitch": 10.35
                   }
                  ]
                 },
                 {
                  "class": "HotspotPanoramaOverlay",
                  "id": "overlay_6CD12202_606E_7706_41D5_D60F47394C73",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 5.9,
                    "yaw": 112.31,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 46,
                       "width": 46,
                       "url": "media/panorama_6CD1C202_606E_7706_41A2_313E1DC1AF6A_0_HS_0_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -27.07
                   }
                  ],
                  "enabledInCardboard": true,
                  "useHandCursor": true,
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "toolTip": "06_Master",
                    "displayTooltipInTouchScreens": true,
                    "click": "this.startPanoramaWithCamera(this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF, this.camera_56700B7F_5BF2_F267_41C2_DC8D8F885C23); this.mainPlayList.set('selectedIndex', 6)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "items": [
                   {
                    "yaw": 112.31,
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 5.9,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 92,
                       "width": 92,
                       "url": "media/panorama_6CD1C202_606E_7706_41A2_313E1DC1AF6A_0_HS_0_0.png"
                      }
                     ]
                    },
                    "pitch": -27.07
                   }
                  ]
                 },
                 {
                  "class": "HotspotPanoramaOverlay",
                  "id": "overlay_6CD13202_606E_7706_41CF_4D4A88F8DD7C",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 0,
                    "yaw": -172.21,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 1,
                       "width": 1,
                       "url": "media/panorama_6CD1C202_606E_7706_41A2_313E1DC1AF6A_0_HS_1_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": 81.71
                   }
                  ],
                  "enabledInCardboard": true,
                  "useHandCursor": true,
                  "rollOverDisplay": true,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_6CEBB7E8_606A_7D03_41CE_69723C00AA9F, this.camera_75EEA2E8_64EC_40E4_41C0_4B5473640E58); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 8); this.mainPlayList.set('selectedIndex', 5)"
                   }
                  ],
                  "items": [
                   {
                    "yaw": -172.21,
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 0,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 1,
                       "width": 1,
                       "url": "media/panorama_6CD1C202_606E_7706_41A2_313E1DC1AF6A_0_HS_1_0.png"
                      }
                     ]
                    },
                    "pitch": 81.71
                   }
                  ]
                 },
                 {
                  "class": "HotspotPanoramaOverlay",
                  "id": "overlay_6CD10202_606E_7706_41D6_AE1ABEA4B027",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 2.86,
                    "yaw": 112.47,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 20,
                       "width": 20,
                       "url": "media/panorama_6CD1C202_606E_7706_41A2_313E1DC1AF6A_0_HS_3_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": 14.35
                   }
                  ],
                  "enabledInCardboard": true,
                  "useHandCursor": true,
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "toolTip": "08_Rooftop",
                    "displayTooltipInTouchScreens": true,
                    "click": "this.startPanoramaWithCamera(this.panorama_6CD96857_606E_330E_41D4_28DA4961B1BD, this.camera_75FCC2F8_64EC_40E4_41D2_1E6A8E4908F8); this.mainPlayList.set('selectedIndex', 10)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "items": [
                   {
                    "yaw": 112.47,
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 2.86,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 41,
                       "width": 41,
                       "url": "media/panorama_6CD1C202_606E_7706_41A2_313E1DC1AF6A_0_HS_3_0.png"
                      }
                     ]
                    },
                    "pitch": 14.35
                   }
                  ]
                 },
                 {
                  "class": "HotspotPanoramaOverlay",
                  "id": "overlay_6CD14202_606E_7706_41A6_8230B16AC2AD",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 2.53,
                    "yaw": 112.29,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 20,
                       "width": 20,
                       "url": "media/panorama_6CD1C202_606E_7706_41A2_313E1DC1AF6A_0_HS_4_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -31.04
                   }
                  ],
                  "enabledInCardboard": true,
                  "useHandCursor": true,
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "toolTip": "06_Master",
                    "displayTooltipInTouchScreens": true,
                    "click": "this.startPanoramaWithCamera(this.panorama_6A977261_617E_B0AF_41D7_BFCC461810A7, this.camera_74481276_64EC_43ED_41C2_17BAA791DB96); this.mainPlayList.set('selectedIndex', 6)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "items": [
                   {
                    "yaw": 112.29,
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 2.53,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 41,
                       "width": 41,
                       "url": "media/panorama_6CD1C202_606E_7706_41A2_313E1DC1AF6A_0_HS_4_0.png"
                      }
                     ]
                    },
                    "pitch": -31.04
                   }
                  ]
                 }
                ],
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "class": "ImageResourceLevel",
                   "height": 2500,
                   "width": 5000,
                   "url": "media/panorama_6CD1C202_606E_7706_41A2_313E1DC1AF6A_hq.jpeg"
                  },
                  {
                   "class": "ImageResourceLevel",
                   "height": 1608,
                   "width": 3217,
                   "url": "media/panorama_6CD1C202_606E_7706_41A2_313E1DC1AF6A.jpeg"
                  }
                 ]
                }
               }
              ],
              "class": "Panorama",
              "hfov": 360,
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_6A977261_617E_B0AF_41D7_BFCC461810A7",
                "yaw": 112.29,
                "backwardYaw": 34.86,
                "distance": 1
               },
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_6A58246F_6179_90B3_41BF_E08163C94BD1",
                "yaw": -172.21,
                "backwardYaw": -172.22,
                "distance": 1
               },
               {
                "class": "AdjacentPanorama",
                "panorama": {
                 "hfovMax": 120,
                 "partial": false,
                 "pitch": 0,
                 "thumbnailUrl": "media/panorama_6CE9E5E7_606E_5D0E_41D0_003A6E1B2677_t.jpg",
                 "id": "panorama_6CE9E5E7_606E_5D0E_41D0_003A6E1B2677",
                 "hfovMin": 100,
                 "label": "06a_Balcony",
                 "frames": [
                  {
                   "class": "SphericPanoramaFrame",
                   "thumbnailUrl": "media/panorama_6CE9E5E7_606E_5D0E_41D0_003A6E1B2677_t.jpg",
                   "overlays": [
                    {
                     "class": "HotspotPanoramaOverlay",
                     "id": "overlay_6CE905E7_606E_5D0E_41D6_6987D7C74D84",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 6.32,
                       "yaw": -174.37,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 59,
                          "width": 59,
                          "url": "media/panorama_6CE9E5E7_606E_5D0E_41D0_003A6E1B2677_0_HS_0_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -43
                      }
                     ],
                     "enabledInCardboard": true,
                     "useHandCursor": true,
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "toolTip": "06_Master",
                       "displayTooltipInTouchScreens": true,
                       "click": "this.startPanoramaWithCamera(this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF, this.camera_55CB7E16_5BF2_F5B9_4191_4ABD27800AF8); this.mainPlayList.set('selectedIndex', 6)",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "items": [
                      {
                       "yaw": -174.37,
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 6.32,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 119,
                          "width": 119,
                          "url": "media/panorama_6CE9E5E7_606E_5D0E_41D0_003A6E1B2677_0_HS_0_0.png"
                         }
                        ]
                       },
                       "pitch": -43
                      }
                     ]
                    },
                    {
                     "class": "HotspotPanoramaOverlay",
                     "id": "overlay_6CE935E7_606E_5D0E_41B5_25998E7B79AC",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 0,
                       "yaw": -170.58,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 1,
                          "width": 1,
                          "url": "media/panorama_6CE9E5E7_606E_5D0E_41D0_003A6E1B2677_0_HS_1_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": 85.29
                      }
                     ],
                     "enabledInCardboard": true,
                     "useHandCursor": true,
                     "rollOverDisplay": true,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_6CD96857_606E_330E_41D4_28DA4961B1BD, this.camera_75465392_64EC_4124_41D3_2C2D0185E22D); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 5); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 10); this.mainPlayList.set('selectedIndex', 8)"
                      }
                     ],
                     "items": [
                      {
                       "yaw": -170.58,
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 0,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 1,
                          "width": 1,
                          "url": "media/panorama_6CE9E5E7_606E_5D0E_41D0_003A6E1B2677_0_HS_1_0.png"
                         }
                        ]
                       },
                       "pitch": 85.29
                      }
                     ]
                    },
                    {
                     "class": "HotspotPanoramaOverlay",
                     "id": "overlay_6CE925E7_606E_5D0E_4192_83F40E803C6A",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 3.35,
                       "yaw": -174.38,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 29,
                          "width": 29,
                          "url": "media/panorama_6CE9E5E7_606E_5D0E_41D0_003A6E1B2677_0_HS_6_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -39.09
                      }
                     ],
                     "enabledInCardboard": true,
                     "useHandCursor": true,
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "toolTip": "06_Master",
                       "displayTooltipInTouchScreens": true,
                       "click": "this.startPanoramaWithCamera(this.panorama_6A977261_617E_B0AF_41D7_BFCC461810A7, this.camera_75D1D31D_64EC_415C_41D5_2A264F161323); this.mainPlayList.set('selectedIndex', 6)",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "items": [
                      {
                       "yaw": -174.38,
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 3.35,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 59,
                          "width": 59,
                          "url": "media/panorama_6CE9E5E7_606E_5D0E_41D0_003A6E1B2677_0_HS_6_0.png"
                         }
                        ]
                       },
                       "pitch": -39.09
                      }
                     ]
                    }
                   ],
                   "sphere": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "class": "ImageResourceLevel",
                      "height": 2500,
                      "width": 5000,
                      "url": "media/panorama_6CE9E5E7_606E_5D0E_41D0_003A6E1B2677_hq.jpeg"
                     },
                     {
                      "class": "ImageResourceLevel",
                      "height": 1608,
                      "width": 3217,
                      "url": "media/panorama_6CE9E5E7_606E_5D0E_41D0_003A6E1B2677.jpeg"
                     }
                    ]
                   }
                  }
                 ],
                 "class": "Panorama",
                 "hfov": 360,
                 "adjacentPanoramas": [
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_6A977261_617E_B0AF_41D7_BFCC461810A7",
                   "yaw": -174.38,
                   "backwardYaw": -178.15,
                   "distance": 1
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_6A58246F_6179_90B3_41BF_E08163C94BD1",
                   "yaw": -170.58,
                   "backwardYaw": -172.22,
                   "distance": 1
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_6CD1C202_606E_7706_41A2_313E1DC1AF6A",
                   "yaw": -170.58,
                   "backwardYaw": -172.21,
                   "distance": 1
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": {
                    "hfovMax": 120,
                    "partial": false,
                    "pitch": 0,
                    "thumbnailUrl": "media/panorama_6C19C4DF_606E_333E_4190_E16296FAA0F2_t.jpg",
                    "id": "panorama_6C19C4DF_606E_333E_4190_E16296FAA0F2",
                    "hfovMin": 100,
                    "label": "04_Living Room",
                    "frames": [
                     {
                      "class": "SphericPanoramaFrame",
                      "thumbnailUrl": "media/panorama_6C19C4DF_606E_333E_4190_E16296FAA0F2_t.jpg",
                      "overlays": [
                       {
                        "class": "HotspotPanoramaOverlay",
                        "id": "overlay_6C19D4DF_606E_333E_41D7_DF0866378D6D",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 5.94,
                          "yaw": 42.19,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 41,
                             "width": 41,
                             "url": "media/panorama_6C19C4DF_606E_333E_4190_E16296FAA0F2_0_HS_0_0_0_map.gif"
                            }
                           ]
                          },
                          "pitch": -7.8
                         }
                        ],
                        "enabledInCardboard": true,
                        "useHandCursor": true,
                        "rollOverDisplay": false,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "toolTip": "05_1Bedroom",
                          "displayTooltipInTouchScreens": true,
                          "click": "this.startPanoramaWithCamera(this.panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC, this.camera_55BE4E50_5BF2_F5B9_41B2_A0DBD967D7CD); this.mainPlayList.set('selectedIndex', 5)",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "items": [
                         {
                          "yaw": 42.19,
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 5.94,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 83,
                             "width": 83,
                             "url": "media/panorama_6C19C4DF_606E_333E_4190_E16296FAA0F2_0_HS_0_0.png"
                            }
                           ]
                          },
                          "pitch": -7.8
                         }
                        ]
                       },
                       {
                        "class": "HotspotPanoramaOverlay",
                        "id": "overlay_6C19E4E0_606E_3302_41B7_0A4293889168",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 5.24,
                          "yaw": -176.64,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 41,
                             "width": 41,
                             "url": "media/panorama_6C19C4DF_606E_333E_4190_E16296FAA0F2_0_HS_5_0_0_map.gif"
                            }
                           ]
                          },
                          "pitch": -29.18
                         }
                        ],
                        "enabledInCardboard": true,
                        "useHandCursor": true,
                        "rollOverDisplay": false,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "toolTip": "03_Pool",
                          "displayTooltipInTouchScreens": true,
                          "click": "this.startPanoramaWithCamera(this.panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D, this.camera_5577FE77_5BF2_F267_41AE_B186A0A61737); this.mainPlayList.set('selectedIndex', 3)",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "items": [
                         {
                          "yaw": -176.64,
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 5.24,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 83,
                             "width": 83,
                             "url": "media/panorama_6C19C4DF_606E_333E_4190_E16296FAA0F2_0_HS_5_0.png"
                            }
                           ]
                          },
                          "pitch": -29.18
                         }
                        ]
                       },
                       {
                        "class": "HotspotPanoramaOverlay",
                        "id": "overlay_6C19F4E0_606E_3302_41CA_2AF915CCFDC5",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 0,
                          "yaw": -171.96,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 1,
                             "width": 1,
                             "url": "media/panorama_6C19C4DF_606E_333E_4190_E16296FAA0F2_0_HS_1_0_0_map.gif"
                            }
                           ]
                          },
                          "pitch": 82.97
                         }
                        ],
                        "enabledInCardboard": true,
                        "useHandCursor": true,
                        "rollOverDisplay": true,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_6CD96857_606E_330E_41D4_28DA4961B1BD, this.camera_6B1CF416_64EC_472C_41AB_90316196A24A); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 10); this.mainPlayList.set('selectedIndex', 8); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 6)"
                         }
                        ],
                        "items": [
                         {
                          "yaw": -171.96,
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 0,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 1,
                             "width": 1,
                             "url": "media/panorama_6C19C4DF_606E_333E_4190_E16296FAA0F2_0_HS_1_0.png"
                            }
                           ]
                          },
                          "pitch": 82.97
                         }
                        ]
                       },
                       {
                        "class": "HotspotPanoramaOverlay",
                        "id": "overlay_6C1E24E0_606E_3302_41CB_D0F52E6D20B7",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 3.59,
                          "yaw": 42.24,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 24,
                             "width": 24,
                             "url": "media/panorama_6C19C4DF_606E_333E_4190_E16296FAA0F2_0_HS_6_0_0_map.gif"
                            }
                           ]
                          },
                          "pitch": -4.57
                         }
                        ],
                        "enabledInCardboard": true,
                        "useHandCursor": true,
                        "rollOverDisplay": false,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "toolTip": "05_1Bedroom",
                          "displayTooltipInTouchScreens": true,
                          "click": "this.startPanoramaWithCamera(this.panorama_6C191CE9_606E_7302_41D6_3E33CDB64ACF, this.camera_6B141402_64EC_4724_41C1_555A3018748B); this.mainPlayList.set('selectedIndex', 5)",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "items": [
                         {
                          "yaw": 42.24,
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 3.59,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 49,
                             "width": 49,
                             "url": "media/panorama_6C19C4DF_606E_333E_4190_E16296FAA0F2_0_HS_6_0.png"
                            }
                           ]
                          },
                          "pitch": -4.57
                         }
                        ]
                       },
                       {
                        "class": "HotspotPanoramaOverlay",
                        "id": "overlay_6C1E44E0_606E_3302_418A_865A93684CDA",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 3.24,
                          "yaw": -176.64,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 24,
                             "width": 24,
                             "url": "media/panorama_6C19C4DF_606E_333E_4190_E16296FAA0F2_0_HS_7_0_0_map.gif"
                            }
                           ]
                          },
                          "pitch": -25.93
                         }
                        ],
                        "enabledInCardboard": true,
                        "useHandCursor": true,
                        "rollOverDisplay": false,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "toolTip": "03_Pool",
                          "displayTooltipInTouchScreens": true,
                          "click": "this.startPanoramaWithCamera(this.panorama_6A58246F_6179_90B3_41BF_E08163C94BD1, this.camera_755B43A6_64EC_416D_41B4_99CACECD1931); this.mainPlayList.set('selectedIndex', 3)",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "items": [
                         {
                          "yaw": -176.64,
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 3.24,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 49,
                             "width": 49,
                             "url": "media/panorama_6C19C4DF_606E_333E_4190_E16296FAA0F2_0_HS_7_0.png"
                            }
                           ]
                          },
                          "pitch": -25.93
                         }
                        ]
                       }
                      ],
                      "sphere": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "class": "ImageResourceLevel",
                         "height": 2500,
                         "width": 5000,
                         "url": "media/panorama_6C19C4DF_606E_333E_4190_E16296FAA0F2_hq.jpeg"
                        },
                        {
                         "class": "ImageResourceLevel",
                         "height": 1608,
                         "width": 3217,
                         "url": "media/panorama_6C19C4DF_606E_333E_4190_E16296FAA0F2.jpeg"
                        }
                       ]
                      }
                     }
                    ],
                    "class": "Panorama",
                    "hfov": 360,
                    "adjacentPanoramas": [
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_6A977261_617E_B0AF_41D7_BFCC461810A7",
                      "yaw": -171.96,
                      "backwardYaw": -162.92,
                      "distance": 1
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_6A58246F_6179_90B3_41BF_E08163C94BD1",
                      "yaw": -176.64,
                      "backwardYaw": 12.1,
                      "distance": 1
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_6CD1C202_606E_7706_41A2_313E1DC1AF6A",
                      "yaw": -171.96,
                      "backwardYaw": -172.21,
                      "distance": 1
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_6CE9E5E7_606E_5D0E_41D0_003A6E1B2677",
                      "yaw": -171.96,
                      "backwardYaw": -170.58,
                      "distance": 1
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_6BE40682_606A_FF06_41C3_B3B6845ECE6A",
                      "yaw": -171.96,
                      "backwardYaw": -171.35,
                      "distance": 1
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": {
                       "hfovMax": 120,
                       "partial": false,
                       "pitch": 0,
                       "thumbnailUrl": "media/panorama_6D430522_6193_00C9_41B5_ED6C4ECBB6B9_t.jpg",
                       "id": "panorama_6D430522_6193_00C9_41B5_ED6C4ECBB6B9",
                       "hfovMin": 100,
                       "label": "06b_WC",
                       "frames": [
                        {
                         "class": "SphericPanoramaFrame",
                         "thumbnailUrl": "media/panorama_6D430522_6193_00C9_41B5_ED6C4ECBB6B9_t.jpg",
                         "overlays": [
                          {
                           "class": "HotspotPanoramaOverlay",
                           "id": "overlay_6D431522_6193_00C9_41CD_94205EC4ED0C",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "hfov": 6.58,
                             "yaw": 163.72,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 48,
                                "width": 48,
                                "url": "media/panorama_6D430522_6193_00C9_41B5_ED6C4ECBB6B9_0_HS_2_0_0_map.gif"
                               }
                              ]
                             },
                             "pitch": -21.08
                            }
                           ],
                           "enabledInCardboard": true,
                           "useHandCursor": true,
                           "rollOverDisplay": false,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "toolTip": "06_Master",
                             "displayTooltipInTouchScreens": true,
                             "click": "this.startPanoramaWithCamera(this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF, this.camera_57262CFF_5BF2_F667_41D4_80634CF1C7DB); this.mainPlayList.set('selectedIndex', 6)",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "items": [
                            {
                             "yaw": 163.72,
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 6.58,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 97,
                                "width": 97,
                                "url": "media/panorama_6D430522_6193_00C9_41B5_ED6C4ECBB6B9_0_HS_2_0.png"
                               }
                              ]
                             },
                             "pitch": -21.08
                            }
                           ]
                          },
                          {
                           "class": "HotspotPanoramaOverlay",
                           "id": "overlay_6D434522_6193_00C9_41D7_CBEE82CF6646",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "hfov": 0,
                             "yaw": -162.92,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 1,
                                "width": 1,
                                "url": "media/panorama_6D430522_6193_00C9_41B5_ED6C4ECBB6B9_0_HS_1_0_0_map.gif"
                               }
                              ]
                             },
                             "pitch": 80.2
                            }
                           ],
                           "enabledInCardboard": true,
                           "useHandCursor": true,
                           "rollOverDisplay": true,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_6CD96857_606E_330E_41D4_28DA4961B1BD, this.camera_7482D4D8_64EC_4724_41D6_87D9C442A17D); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 10); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 5); this.mainPlayList.set('selectedIndex', 9)"
                            }
                           ],
                           "items": [
                            {
                             "yaw": -162.92,
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 0,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 1,
                                "width": 1,
                                "url": "media/panorama_6D430522_6193_00C9_41B5_ED6C4ECBB6B9_0_HS_1_0.png"
                               }
                              ]
                             },
                             "pitch": 80.2
                            }
                           ]
                          },
                          {
                           "class": "HotspotPanoramaOverlay",
                           "id": "overlay_6D435522_6193_00C9_41A6_BACDEE68C1B5",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "hfov": 3.43,
                             "yaw": 163.7,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 25,
                                "width": 25,
                                "url": "media/panorama_6D430522_6193_00C9_41B5_ED6C4ECBB6B9_0_HS_3_0_0_map.gif"
                               }
                              ]
                             },
                             "pitch": -17.54
                            }
                           ],
                           "enabledInCardboard": true,
                           "useHandCursor": true,
                           "rollOverDisplay": false,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "toolTip": "06_Master",
                             "displayTooltipInTouchScreens": true,
                             "click": "this.startPanoramaWithCamera(this.panorama_6A977261_617E_B0AF_41D7_BFCC461810A7, this.camera_74D68487_64EC_472C_41B3_BF12854D16DC); this.mainPlayList.set('selectedIndex', 6)",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "items": [
                            {
                             "yaw": 163.7,
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 3.43,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 50,
                                "width": 50,
                                "url": "media/panorama_6D430522_6193_00C9_41B5_ED6C4ECBB6B9_0_HS_3_0.png"
                               }
                              ]
                             },
                             "pitch": -17.54
                            }
                           ]
                          }
                         ],
                         "sphere": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "class": "ImageResourceLevel",
                            "height": 2500,
                            "width": 5000,
                            "url": "media/panorama_6D430522_6193_00C9_41B5_ED6C4ECBB6B9_hq.jpeg"
                           },
                           {
                            "class": "ImageResourceLevel",
                            "height": 1608,
                            "width": 3217,
                            "url": "media/panorama_6D430522_6193_00C9_41B5_ED6C4ECBB6B9.jpeg"
                           }
                          ]
                         }
                        }
                       ],
                       "class": "Panorama",
                       "hfov": 360,
                       "adjacentPanoramas": [
                        {
                         "class": "AdjacentPanorama",
                         "panorama": "this.panorama_6A977261_617E_B0AF_41D7_BFCC461810A7",
                         "yaw": 163.7,
                         "backwardYaw": 83.08,
                         "distance": 1
                        },
                        {
                         "class": "AdjacentPanorama",
                         "panorama": "this.panorama_6A58246F_6179_90B3_41BF_E08163C94BD1",
                         "yaw": -162.92,
                         "backwardYaw": -172.22,
                         "distance": 1
                        },
                        {
                         "class": "AdjacentPanorama",
                         "panorama": "this.panorama_6CD1C202_606E_7706_41A2_313E1DC1AF6A",
                         "yaw": -162.92,
                         "backwardYaw": -172.21,
                         "distance": 1
                        },
                        {
                         "class": "AdjacentPanorama",
                         "panorama": "this.panorama_6CE9E5E7_606E_5D0E_41D0_003A6E1B2677",
                         "yaw": -162.92,
                         "backwardYaw": -170.58,
                         "distance": 1
                        },
                        {
                         "class": "AdjacentPanorama",
                         "panorama": "this.panorama_6C19C4DF_606E_333E_4190_E16296FAA0F2",
                         "yaw": -162.92,
                         "backwardYaw": -171.96,
                         "distance": 1
                        },
                        {
                         "class": "AdjacentPanorama",
                         "panorama": "this.panorama_6BE40682_606A_FF06_41C3_B3B6845ECE6A",
                         "yaw": -162.92,
                         "backwardYaw": -171.35,
                         "distance": 1
                        },
                        {
                         "class": "AdjacentPanorama",
                         "panorama": {
                          "hfovMax": 120,
                          "partial": false,
                          "pitch": 0,
                          "thumbnailUrl": "media/panorama_6C191CE9_606E_7302_41D6_3E33CDB64ACF_t.jpg",
                          "id": "panorama_6C191CE9_606E_7302_41D6_3E33CDB64ACF",
                          "hfovMin": 100,
                          "label": "05_1Bedroom",
                          "frames": [
                           {
                            "class": "SphericPanoramaFrame",
                            "thumbnailUrl": "media/panorama_6C191CE9_606E_7302_41D6_3E33CDB64ACF_t.jpg",
                            "overlays": [
                             {
                              "class": "HotspotPanoramaOverlay",
                              "id": "overlay_6C196CE9_606E_7302_41D5_0F8D5B1FFA85",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 6.53,
                                "yaw": 110.14,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 45,
                                   "width": 46,
                                   "url": "media/panorama_6C191CE9_606E_7302_41D6_3E33CDB64ACF_0_HS_0_0_0_map.gif"
                                  }
                                 ]
                                },
                                "pitch": 9.88
                               }
                              ],
                              "enabledInCardboard": true,
                              "useHandCursor": true,
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "toolTip": "06_Master\u000a",
                                "displayTooltipInTouchScreens": true,
                                "click": "this.startPanoramaWithCamera(this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF, this.camera_55D7BBEA_5BF2_F263_41D2_B1CC2C57A60F); this.mainPlayList.set('selectedIndex', 6)",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "items": [
                               {
                                "yaw": 110.14,
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 6.53,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 91,
                                   "width": 92,
                                   "url": "media/panorama_6C191CE9_606E_7302_41D6_3E33CDB64ACF_0_HS_0_0.png"
                                  }
                                 ]
                                },
                                "pitch": 9.88
                               }
                              ]
                             },
                             {
                              "class": "HotspotPanoramaOverlay",
                              "id": "overlay_6C194CE9_606E_7302_41CE_C32477405DB2",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 5.79,
                                "yaw": 110.2,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 46,
                                   "width": 46,
                                   "url": "media/panorama_6C191CE9_606E_7302_41D6_3E33CDB64ACF_0_HS_2_0_0_map.gif"
                                  }
                                 ]
                                },
                                "pitch": -29.15
                               }
                              ],
                              "enabledInCardboard": true,
                              "useHandCursor": true,
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "toolTip": "04_Living Room",
                                "displayTooltipInTouchScreens": true,
                                "click": "this.startPanoramaWithCamera(this.panorama_47B53902_572E_CEDF_41CC_C256D31A5443, this.camera_55FFAC21_5BF2_F59B_41D2_A4CCD4BC65CD); this.mainPlayList.set('selectedIndex', 4)",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "items": [
                               {
                                "yaw": 110.2,
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 5.79,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 92,
                                   "width": 92,
                                   "url": "media/panorama_6C191CE9_606E_7302_41D6_3E33CDB64ACF_0_HS_2_0.png"
                                  }
                                 ]
                                },
                                "pitch": -29.15
                               }
                              ]
                             },
                             {
                              "class": "HotspotPanoramaOverlay",
                              "id": "overlay_6C195CE9_606E_7302_41AF_079BD7893DEA",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 0,
                                "yaw": -170.2,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 1,
                                   "width": 1,
                                   "url": "media/panorama_6C191CE9_606E_7302_41D6_3E33CDB64ACF_0_HS_1_0_0_map.gif"
                                  }
                                 ]
                                },
                                "pitch": 81.21
                               }
                              ],
                              "enabledInCardboard": true,
                              "useHandCursor": true,
                              "rollOverDisplay": true,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_6CD96857_606E_330E_41D4_28DA4961B1BD, this.camera_743D9532_64EC_4165_41CA_4D45954E25DF); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 8); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 10)"
                               }
                              ],
                              "items": [
                               {
                                "yaw": -170.2,
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 0,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 1,
                                   "width": 1,
                                   "url": "media/panorama_6C191CE9_606E_7302_41D6_3E33CDB64ACF_0_HS_1_0.png"
                                  }
                                 ]
                                },
                                "pitch": 81.21
                               }
                              ]
                             },
                             {
                              "class": "HotspotPanoramaOverlay",
                              "id": "overlay_6C19BCE9_606E_7302_41CF_9F4CE5A90301",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 2.91,
                                "yaw": 110.1,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 20,
                                   "width": 20,
                                   "url": "media/panorama_6C191CE9_606E_7302_41D6_3E33CDB64ACF_0_HS_3_0_0_map.gif"
                                  }
                                 ]
                                },
                                "pitch": 13.84
                               }
                              ],
                              "enabledInCardboard": true,
                              "useHandCursor": true,
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "toolTip": "06_Master",
                                "displayTooltipInTouchScreens": true,
                                "click": "this.startPanoramaWithCamera(this.panorama_6A977261_617E_B0AF_41D7_BFCC461810A7, this.camera_7495C4E2_64EC_40E4_41D0_59DF93F2E701); this.mainPlayList.set('selectedIndex', 6)",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "items": [
                               {
                                "yaw": 110.1,
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 2.91,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 41,
                                   "width": 41,
                                   "url": "media/panorama_6C191CE9_606E_7302_41D6_3E33CDB64ACF_0_HS_3_0.png"
                                  }
                                 ]
                                },
                                "pitch": 13.84
                               }
                              ]
                             },
                             {
                              "class": "HotspotPanoramaOverlay",
                              "id": "overlay_6C199CE9_606E_7302_41CC_B6B5585FFD41",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 2.51,
                                "yaw": 110.23,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 20,
                                   "width": 20,
                                   "url": "media/panorama_6C191CE9_606E_7302_41D6_3E33CDB64ACF_0_HS_4_0_0_map.gif"
                                  }
                                 ]
                                },
                                "pitch": -33.09
                               }
                              ],
                              "enabledInCardboard": true,
                              "useHandCursor": true,
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "toolTip": "04_Living Room",
                                "displayTooltipInTouchScreens": true,
                                "click": "this.startPanoramaWithCamera(this.panorama_6C19C4DF_606E_333E_4190_E16296FAA0F2, this.camera_7441350B_64EC_4124_41AC_AB68188E2D3C); this.mainPlayList.set('selectedIndex', 4)",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "items": [
                               {
                                "yaw": 110.23,
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 2.51,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 41,
                                   "width": 41,
                                   "url": "media/panorama_6C191CE9_606E_7302_41D6_3E33CDB64ACF_0_HS_4_0.png"
                                  }
                                 ]
                                },
                                "pitch": -33.09
                               }
                              ]
                             }
                            ],
                            "sphere": {
                             "class": "ImageResource",
                             "levels": [
                              {
                               "class": "ImageResourceLevel",
                               "height": 2498,
                               "width": 5000,
                               "url": "media/panorama_6C191CE9_606E_7302_41D6_3E33CDB64ACF_hq.jpeg"
                              },
                              {
                               "class": "ImageResourceLevel",
                               "height": 1607,
                               "width": 3217,
                               "url": "media/panorama_6C191CE9_606E_7302_41D6_3E33CDB64ACF.jpeg"
                              }
                             ]
                            }
                           }
                          ],
                          "class": "Panorama",
                          "hfov": 360,
                          "adjacentPanoramas": [
                           {
                            "class": "AdjacentPanorama",
                            "panorama": "this.panorama_6A977261_617E_B0AF_41D7_BFCC461810A7",
                            "yaw": 110.1,
                            "backwardYaw": 34.76,
                            "distance": 1
                           },
                           {
                            "class": "AdjacentPanorama",
                            "panorama": "this.panorama_6A58246F_6179_90B3_41BF_E08163C94BD1",
                            "yaw": -170.2,
                            "backwardYaw": -172.22,
                            "distance": 1
                           },
                           {
                            "class": "AdjacentPanorama",
                            "panorama": "this.panorama_6CD1C202_606E_7706_41A2_313E1DC1AF6A",
                            "yaw": -170.2,
                            "backwardYaw": -172.21,
                            "distance": 1
                           },
                           {
                            "class": "AdjacentPanorama",
                            "panorama": "this.panorama_6CE9E5E7_606E_5D0E_41D0_003A6E1B2677",
                            "yaw": -170.2,
                            "backwardYaw": -170.58,
                            "distance": 1
                           },
                           {
                            "class": "AdjacentPanorama",
                            "panorama": "this.panorama_6C19C4DF_606E_333E_4190_E16296FAA0F2",
                            "yaw": 110.23,
                            "backwardYaw": 42.24,
                            "distance": 1
                           },
                           {
                            "class": "AdjacentPanorama",
                            "panorama": "this.panorama_6BE40682_606A_FF06_41C3_B3B6845ECE6A",
                            "yaw": -170.2,
                            "backwardYaw": -171.35,
                            "distance": 1
                           },
                           {
                            "class": "AdjacentPanorama",
                            "panorama": "this.panorama_6D430522_6193_00C9_41B5_ED6C4ECBB6B9",
                            "yaw": -170.2,
                            "backwardYaw": -162.92,
                            "distance": 1
                           },
                           {
                            "class": "AdjacentPanorama",
                            "panorama": {
                             "hfovMax": 120,
                             "partial": false,
                             "pitch": 0,
                             "thumbnailUrl": "media/panorama_6CEBB7E8_606A_7D03_41CE_69723C00AA9F_t.jpg",
                             "id": "panorama_6CEBB7E8_606A_7D03_41CE_69723C00AA9F",
                             "hfovMin": 100,
                             "label": "02_Entrance",
                             "frames": [
                              {
                               "class": "SphericPanoramaFrame",
                               "thumbnailUrl": "media/panorama_6CEBB7E8_606A_7D03_41CE_69723C00AA9F_t.jpg",
                               "overlays": [
                                {
                                 "class": "HotspotPanoramaOverlay",
                                 "id": "overlay_6CEBF7E8_606A_7D03_41C7_74D43E13E722",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 4.97,
                                   "yaw": -16.79,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 34,
                                      "width": 34,
                                      "url": "media/panorama_6CEBB7E8_606A_7D03_41CE_69723C00AA9F_0_HS_0_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "pitch": -9.28
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "useHandCursor": true,
                                 "rollOverDisplay": false,
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "toolTip": "03_Pool",
                                   "displayTooltipInTouchScreens": true,
                                   "click": "this.startPanoramaWithCamera(this.panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D, this.camera_55581C8B_5BF2_F6AF_41D1_02AAAFF73E03); this.mainPlayList.set('selectedIndex', 3)",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "yaw": -16.79,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 4.97,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 69,
                                      "width": 69,
                                      "url": "media/panorama_6CEBB7E8_606A_7D03_41CE_69723C00AA9F_0_HS_0_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": -9.28
                                  }
                                 ]
                                },
                                {
                                 "class": "HotspotPanoramaOverlay",
                                 "id": "overlay_6CEBD7E9_606A_7D05_41C3_F00134E174E2",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 4.56,
                                   "yaw": 0.94,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 34,
                                      "width": 34,
                                      "url": "media/panorama_6CEBB7E8_606A_7D03_41CE_69723C00AA9F_0_HS_6_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "pitch": -25.17
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "useHandCursor": true,
                                 "rollOverDisplay": false,
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "toolTip": "01_Street View",
                                   "displayTooltipInTouchScreens": true,
                                   "click": "this.startPanoramaWithCamera(this.panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E, this.camera_55602CAB_5BF2_F6EF_41A1_3BA349C88636); this.mainPlayList.set('selectedIndex', 1)",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "yaw": 0.94,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 4.56,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 69,
                                      "width": 69,
                                      "url": "media/panorama_6CEBB7E8_606A_7D03_41CE_69723C00AA9F_0_HS_6_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": -25.17
                                  }
                                 ]
                                },
                                {
                                 "class": "HotspotPanoramaOverlay",
                                 "id": "overlay_6CEB27E9_606A_7D05_41D7_A41537CB50F2",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 0,
                                   "yaw": -170.68,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 1,
                                      "width": 1,
                                      "url": "media/panorama_6CEBB7E8_606A_7D03_41CE_69723C00AA9F_0_HS_1_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "pitch": 83.2
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "useHandCursor": true,
                                 "rollOverDisplay": true,
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_6CD96857_606E_330E_41D4_28DA4961B1BD, this.camera_75B1358F_64EC_413C_41D3_02D41EAE86ED); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 10); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 8); this.mainPlayList.set('selectedIndex', 5); this.mainPlayList.set('selectedIndex', 9)"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "yaw": -170.68,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 0,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 1,
                                      "width": 1,
                                      "url": "media/panorama_6CEBB7E8_606A_7D03_41CE_69723C00AA9F_0_HS_1_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": 83.2
                                  }
                                 ]
                                },
                                {
                                 "class": "HotspotPanoramaOverlay",
                                 "id": "overlay_6CEB37E9_606A_7D05_41BD_EF0B340A722F",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 2.5,
                                   "yaw": -16.78,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 17,
                                      "width": 17,
                                      "url": "media/panorama_6CEBB7E8_606A_7D03_41CE_69723C00AA9F_0_HS_7_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "pitch": -6.47
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "useHandCursor": true,
                                 "rollOverDisplay": false,
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "toolTip": "03_Pool",
                                   "displayTooltipInTouchScreens": true,
                                   "click": "this.startPanoramaWithCamera(this.panorama_6A58246F_6179_90B3_41BF_E08163C94BD1, this.camera_74116546_64EC_412D_41D8_B1E7A150563C); this.mainPlayList.set('selectedIndex', 3)",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "yaw": -16.78,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 2.5,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 34,
                                      "width": 34,
                                      "url": "media/panorama_6CEBB7E8_606A_7D03_41CE_69723C00AA9F_0_HS_7_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": -6.47
                                  }
                                 ]
                                },
                                {
                                 "class": "HotspotPanoramaOverlay",
                                 "id": "overlay_6CEB07E9_606A_7D05_4196_BF907A07BBE0",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 2.33,
                                   "yaw": 0.99,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 17,
                                      "width": 17,
                                      "url": "media/panorama_6CEBB7E8_606A_7D03_41CE_69723C00AA9F_0_HS_8_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "pitch": -22.53
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "useHandCursor": true,
                                 "rollOverDisplay": false,
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "toolTip": "01_Street View",
                                   "displayTooltipInTouchScreens": true,
                                   "click": "this.startPanoramaWithCamera(this.panorama_6BE40682_606A_FF06_41C3_B3B6845ECE6A, this.camera_75CF0571_64EC_41E4_41D8_254534284CD3); this.mainPlayList.set('selectedIndex', 1)",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "yaw": 0.99,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 2.33,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 34,
                                      "width": 34,
                                      "url": "media/panorama_6CEBB7E8_606A_7D03_41CE_69723C00AA9F_0_HS_8_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": -22.53
                                  }
                                 ]
                                }
                               ],
                               "sphere": {
                                "class": "ImageResource",
                                "levels": [
                                 {
                                  "class": "ImageResourceLevel",
                                  "height": 2500,
                                  "width": 5000,
                                  "url": "media/panorama_6CEBB7E8_606A_7D03_41CE_69723C00AA9F_hq.jpeg"
                                 },
                                 {
                                  "class": "ImageResourceLevel",
                                  "height": 1608,
                                  "width": 3217,
                                  "url": "media/panorama_6CEBB7E8_606A_7D03_41CE_69723C00AA9F.jpeg"
                                 }
                                ]
                               }
                              }
                             ],
                             "class": "Panorama",
                             "hfov": 360,
                             "adjacentPanoramas": [
                              {
                               "class": "AdjacentPanorama",
                               "panorama": "this.panorama_6A977261_617E_B0AF_41D7_BFCC461810A7",
                               "yaw": -170.68,
                               "backwardYaw": -162.92,
                               "distance": 1
                              },
                              {
                               "class": "AdjacentPanorama",
                               "panorama": "this.panorama_6A58246F_6179_90B3_41BF_E08163C94BD1",
                               "yaw": -16.78,
                               "backwardYaw": -94.33,
                               "distance": 1
                              },
                              {
                               "class": "AdjacentPanorama",
                               "panorama": "this.panorama_6CD1C202_606E_7706_41A2_313E1DC1AF6A",
                               "yaw": -170.68,
                               "backwardYaw": -172.21,
                               "distance": 1
                              },
                              {
                               "class": "AdjacentPanorama",
                               "panorama": "this.panorama_6CE9E5E7_606E_5D0E_41D0_003A6E1B2677",
                               "yaw": -170.68,
                               "backwardYaw": -170.58,
                               "distance": 1
                              },
                              {
                               "class": "AdjacentPanorama",
                               "panorama": "this.panorama_6C19C4DF_606E_333E_4190_E16296FAA0F2",
                               "yaw": -170.68,
                               "backwardYaw": -171.96,
                               "distance": 1
                              },
                              {
                               "class": "AdjacentPanorama",
                               "panorama": "this.panorama_6BE40682_606A_FF06_41C3_B3B6845ECE6A",
                               "yaw": 0.99,
                               "backwardYaw": 140.55,
                               "distance": 1
                              },
                              {
                               "class": "AdjacentPanorama",
                               "panorama": "this.panorama_6D430522_6193_00C9_41B5_ED6C4ECBB6B9",
                               "yaw": -170.68,
                               "backwardYaw": -162.92,
                               "distance": 1
                              },
                              {
                               "class": "AdjacentPanorama",
                               "panorama": "this.panorama_6C191CE9_606E_7302_41D6_3E33CDB64ACF",
                               "yaw": -170.68,
                               "backwardYaw": -170.2,
                               "distance": 1
                              },
                              {
                               "class": "AdjacentPanorama",
                               "panorama": {
                                "hfovMax": 120,
                                "partial": false,
                                "pitch": 0,
                                "thumbnailUrl": "media/panorama_6CD96857_606E_330E_41D4_28DA4961B1BD_t.jpg",
                                "id": "panorama_6CD96857_606E_330E_41D4_28DA4961B1BD",
                                "hfovMin": 100,
                                "label": "08_Rooftop",
                                "frames": [
                                 {
                                  "class": "SphericPanoramaFrame",
                                  "thumbnailUrl": "media/panorama_6CD96857_606E_330E_41D4_28DA4961B1BD_t.jpg",
                                  "overlays": [
                                   {
                                    "class": "HotspotPanoramaOverlay",
                                    "id": "overlay_6CD97857_606E_330E_41A6_312860002B40",
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 5.63,
                                      "yaw": 18.78,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "height": 41,
                                         "width": 41,
                                         "url": "media/panorama_6CD96857_606E_330E_41D4_28DA4961B1BD_0_HS_6_0_0_map.gif"
                                        }
                                       ]
                                      },
                                      "pitch": -20.36
                                     }
                                    ],
                                    "enabledInCardboard": true,
                                    "useHandCursor": true,
                                    "rollOverDisplay": false,
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "toolTip": "07_2Beds Room",
                                      "displayTooltipInTouchScreens": true,
                                      "click": "this.startPanoramaWithCamera(this.panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D, this.camera_5488DF3C_5BF2_F3E9_41D1_C652E087859B); this.mainPlayList.set('selectedIndex', 9)",
                                      "mapColor": "#FF0000"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "yaw": 18.78,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "hfov": 5.63,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "height": 83,
                                         "width": 83,
                                         "url": "media/panorama_6CD96857_606E_330E_41D4_28DA4961B1BD_0_HS_6_0.png"
                                        }
                                       ]
                                      },
                                      "pitch": -20.36
                                     }
                                    ]
                                   },
                                   {
                                    "class": "HotspotPanoramaOverlay",
                                    "id": "overlay_6CD90857_606E_330E_41C7_82511C5367F4",
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 0,
                                      "yaw": -173.12,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "height": 1,
                                         "width": 1,
                                         "url": "media/panorama_6CD96857_606E_330E_41D4_28DA4961B1BD_0_HS_5_0_0_map.gif"
                                        }
                                       ]
                                      },
                                      "pitch": 85.84
                                     }
                                    ],
                                    "enabledInCardboard": true,
                                    "useHandCursor": true,
                                    "rollOverDisplay": true,
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_6CEBB7E8_606A_7D03_41CE_69723C00AA9F, this.camera_752A05E8_64EC_40E4_41AA_B5A42283F557); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 8); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 5)"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "yaw": -173.12,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "hfov": 0,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "height": 1,
                                         "width": 1,
                                         "url": "media/panorama_6CD96857_606E_330E_41D4_28DA4961B1BD_0_HS_5_0.png"
                                        }
                                       ]
                                      },
                                      "pitch": 85.84
                                     }
                                    ]
                                   },
                                   {
                                    "class": "HotspotPanoramaOverlay",
                                    "id": "overlay_6CD91857_606E_330E_41C0_9563969F6B1D",
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 2.74,
                                      "yaw": 18.78,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "height": 20,
                                         "width": 20,
                                         "url": "media/panorama_6CD96857_606E_330E_41D4_28DA4961B1BD_0_HS_7_0_0_map.gif"
                                        }
                                       ]
                                      },
                                      "pitch": -23.82
                                     }
                                    ],
                                    "enabledInCardboard": true,
                                    "useHandCursor": true,
                                    "rollOverDisplay": false,
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "toolTip": "07_2Beds Room",
                                      "displayTooltipInTouchScreens": true,
                                      "click": "this.startPanoramaWithCamera(this.panorama_6CD1C202_606E_7706_41A2_313E1DC1AF6A, this.camera_7598A5AD_64EC_417C_41B2_4F064BDB656C); this.mainPlayList.set('selectedIndex', 9)",
                                      "mapColor": "#FF0000"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "yaw": 18.78,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "hfov": 2.74,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "height": 41,
                                         "width": 41,
                                         "url": "media/panorama_6CD96857_606E_330E_41D4_28DA4961B1BD_0_HS_7_0.png"
                                        }
                                       ]
                                      },
                                      "pitch": -23.82
                                     }
                                    ]
                                   }
                                  ],
                                  "sphere": {
                                   "class": "ImageResource",
                                   "levels": [
                                    {
                                     "class": "ImageResourceLevel",
                                     "height": 2500,
                                     "width": 5000,
                                     "url": "media/panorama_6CD96857_606E_330E_41D4_28DA4961B1BD_hq.jpeg"
                                    },
                                    {
                                     "class": "ImageResourceLevel",
                                     "height": 1608,
                                     "width": 3217,
                                     "url": "media/panorama_6CD96857_606E_330E_41D4_28DA4961B1BD.jpeg"
                                    }
                                   ]
                                  }
                                 }
                                ],
                                "class": "Panorama",
                                "hfov": 360,
                                "adjacentPanoramas": [
                                 {
                                  "class": "AdjacentPanorama",
                                  "panorama": "this.panorama_6A977261_617E_B0AF_41D7_BFCC461810A7",
                                  "yaw": -173.12,
                                  "backwardYaw": -162.92,
                                  "distance": 1
                                 },
                                 {
                                  "class": "AdjacentPanorama",
                                  "panorama": "this.panorama_6A58246F_6179_90B3_41BF_E08163C94BD1",
                                  "yaw": -173.12,
                                  "backwardYaw": -172.22,
                                  "distance": 1
                                 },
                                 {
                                  "class": "AdjacentPanorama",
                                  "panorama": "this.panorama_6CD1C202_606E_7706_41A2_313E1DC1AF6A",
                                  "yaw": 18.78,
                                  "backwardYaw": 112.47,
                                  "distance": 1
                                 },
                                 {
                                  "class": "AdjacentPanorama",
                                  "panorama": "this.panorama_6CE9E5E7_606E_5D0E_41D0_003A6E1B2677",
                                  "yaw": -173.12,
                                  "backwardYaw": -170.58,
                                  "distance": 1
                                 },
                                 {
                                  "class": "AdjacentPanorama",
                                  "panorama": "this.panorama_6C19C4DF_606E_333E_4190_E16296FAA0F2",
                                  "yaw": -173.12,
                                  "backwardYaw": -171.96,
                                  "distance": 1
                                 },
                                 {
                                  "class": "AdjacentPanorama",
                                  "panorama": "this.panorama_6BE40682_606A_FF06_41C3_B3B6845ECE6A",
                                  "yaw": -173.12,
                                  "backwardYaw": -171.35,
                                  "distance": 1
                                 },
                                 {
                                  "class": "AdjacentPanorama",
                                  "panorama": "this.panorama_6D430522_6193_00C9_41B5_ED6C4ECBB6B9",
                                  "yaw": -173.12,
                                  "backwardYaw": -162.92,
                                  "distance": 1
                                 },
                                 {
                                  "class": "AdjacentPanorama",
                                  "panorama": "this.panorama_6C191CE9_606E_7302_41D6_3E33CDB64ACF",
                                  "yaw": -173.12,
                                  "backwardYaw": -170.2,
                                  "distance": 1
                                 },
                                 {
                                  "class": "AdjacentPanorama",
                                  "panorama": "this.panorama_6CEBB7E8_606A_7D03_41CE_69723C00AA9F",
                                  "yaw": -173.12,
                                  "backwardYaw": -170.68,
                                  "distance": 1
                                 }
                                ],
                                "vfov": 180
                               },
                               "yaw": -170.68,
                               "backwardYaw": -173.12,
                               "distance": 1
                              }
                             ],
                             "vfov": 180
                            },
                            "yaw": -170.2,
                            "backwardYaw": -170.68,
                            "distance": 1
                           },
                           {
                            "class": "AdjacentPanorama",
                            "panorama": "this.panorama_6CD96857_606E_330E_41D4_28DA4961B1BD",
                            "yaw": -170.2,
                            "backwardYaw": -173.12,
                            "distance": 1
                           }
                          ],
                          "vfov": 180
                         },
                         "yaw": -162.92,
                         "backwardYaw": -170.2,
                         "distance": 1
                        },
                        {
                         "class": "AdjacentPanorama",
                         "panorama": "this.panorama_6CEBB7E8_606A_7D03_41CE_69723C00AA9F",
                         "yaw": -162.92,
                         "backwardYaw": -170.68,
                         "distance": 1
                        },
                        {
                         "class": "AdjacentPanorama",
                         "panorama": "this.panorama_6CD96857_606E_330E_41D4_28DA4961B1BD",
                         "yaw": -162.92,
                         "backwardYaw": -173.12,
                         "distance": 1
                        }
                       ],
                       "vfov": 180
                      },
                      "yaw": -171.96,
                      "backwardYaw": -162.92,
                      "distance": 1
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_6C191CE9_606E_7302_41D6_3E33CDB64ACF",
                      "yaw": 42.24,
                      "backwardYaw": 110.23,
                      "distance": 1
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_6CEBB7E8_606A_7D03_41CE_69723C00AA9F",
                      "yaw": -171.96,
                      "backwardYaw": -170.68,
                      "distance": 1
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_6CD96857_606E_330E_41D4_28DA4961B1BD",
                      "yaw": -171.96,
                      "backwardYaw": -173.12,
                      "distance": 1
                     }
                    ],
                    "vfov": 180
                   },
                   "yaw": -170.58,
                   "backwardYaw": -171.96,
                   "distance": 1
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_6BE40682_606A_FF06_41C3_B3B6845ECE6A",
                   "yaw": -170.58,
                   "backwardYaw": -171.35,
                   "distance": 1
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_6D430522_6193_00C9_41B5_ED6C4ECBB6B9",
                   "yaw": -170.58,
                   "backwardYaw": -162.92,
                   "distance": 1
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_6C191CE9_606E_7302_41D6_3E33CDB64ACF",
                   "yaw": -170.58,
                   "backwardYaw": -170.2,
                   "distance": 1
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_6CEBB7E8_606A_7D03_41CE_69723C00AA9F",
                   "yaw": -170.58,
                   "backwardYaw": -170.68,
                   "distance": 1
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_6CD96857_606E_330E_41D4_28DA4961B1BD",
                   "yaw": -170.58,
                   "backwardYaw": -173.12,
                   "distance": 1
                  }
                 ],
                 "vfov": 180
                },
                "yaw": -172.21,
                "backwardYaw": -170.58,
                "distance": 1
               },
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_6C19C4DF_606E_333E_4190_E16296FAA0F2",
                "yaw": -172.21,
                "backwardYaw": -171.96,
                "distance": 1
               },
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_6BE40682_606A_FF06_41C3_B3B6845ECE6A",
                "yaw": -172.21,
                "backwardYaw": -171.35,
                "distance": 1
               },
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_6D430522_6193_00C9_41B5_ED6C4ECBB6B9",
                "yaw": -172.21,
                "backwardYaw": -162.92,
                "distance": 1
               },
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_6C191CE9_606E_7302_41D6_3E33CDB64ACF",
                "yaw": -172.21,
                "backwardYaw": -170.2,
                "distance": 1
               },
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_6CEBB7E8_606A_7D03_41CE_69723C00AA9F",
                "yaw": -172.21,
                "backwardYaw": -170.68,
                "distance": 1
               },
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_6CD96857_606E_330E_41D4_28DA4961B1BD",
                "yaw": 112.47,
                "backwardYaw": 18.78,
                "distance": 1
               }
              ],
              "vfov": 180
             },
             "yaw": -172.22,
             "backwardYaw": -172.21,
             "distance": 1
            },
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_6CE9E5E7_606E_5D0E_41D0_003A6E1B2677",
             "yaw": -172.22,
             "backwardYaw": -170.58,
             "distance": 1
            },
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_6C19C4DF_606E_333E_4190_E16296FAA0F2",
             "yaw": 12.1,
             "backwardYaw": -176.64,
             "distance": 1
            },
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_6BE40682_606A_FF06_41C3_B3B6845ECE6A",
             "yaw": -172.22,
             "backwardYaw": -171.35,
             "distance": 1
            },
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_6D430522_6193_00C9_41B5_ED6C4ECBB6B9",
             "yaw": -172.22,
             "backwardYaw": -162.92,
             "distance": 1
            },
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_6C191CE9_606E_7302_41D6_3E33CDB64ACF",
             "yaw": -172.22,
             "backwardYaw": -170.2,
             "distance": 1
            },
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_6CEBB7E8_606A_7D03_41CE_69723C00AA9F",
             "yaw": -94.33,
             "backwardYaw": -16.78,
             "distance": 1
            },
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_6CD96857_606E_330E_41D4_28DA4961B1BD",
             "yaw": -172.22,
             "backwardYaw": -173.12,
             "distance": 1
            }
           ],
           "vfov": 180
          },
          "yaw": -162.92,
          "backwardYaw": -172.22,
          "distance": 1
         },
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_6CD1C202_606E_7706_41A2_313E1DC1AF6A",
          "yaw": 34.86,
          "backwardYaw": 112.29,
          "distance": 1
         },
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_6CE9E5E7_606E_5D0E_41D0_003A6E1B2677",
          "yaw": -178.15,
          "backwardYaw": -174.38,
          "distance": 1
         },
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_6C19C4DF_606E_333E_4190_E16296FAA0F2",
          "yaw": -162.92,
          "backwardYaw": -171.96,
          "distance": 1
         },
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_6BE40682_606A_FF06_41C3_B3B6845ECE6A",
          "yaw": -162.92,
          "backwardYaw": -171.35,
          "distance": 1
         },
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_6D430522_6193_00C9_41B5_ED6C4ECBB6B9",
          "yaw": 83.08,
          "backwardYaw": 163.7,
          "distance": 1
         },
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_6C191CE9_606E_7302_41D6_3E33CDB64ACF",
          "yaw": 34.76,
          "backwardYaw": 110.1,
          "distance": 1
         },
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_6CEBB7E8_606A_7D03_41CE_69723C00AA9F",
          "yaw": -162.92,
          "backwardYaw": -170.68,
          "distance": 1
         },
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_6CD96857_606E_330E_41D4_28DA4961B1BD",
          "yaw": -162.92,
          "backwardYaw": -173.12,
          "distance": 1
         }
        ],
        "vfov": 180
       },
       "yaw": -171.35,
       "backwardYaw": -162.92,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_6A58246F_6179_90B3_41BF_E08163C94BD1",
       "yaw": -171.35,
       "backwardYaw": -172.22,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_6CD1C202_606E_7706_41A2_313E1DC1AF6A",
       "yaw": -171.35,
       "backwardYaw": -172.21,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_6FF6EAC5_64DC_C32F_41CD_F8E48CAF0E47",
       "yaw": -171.35,
       "backwardYaw": -176.73,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_6CE9E5E7_606E_5D0E_41D0_003A6E1B2677",
       "yaw": -171.35,
       "backwardYaw": -170.58,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_6C19C4DF_606E_333E_4190_E16296FAA0F2",
       "yaw": -171.35,
       "backwardYaw": -171.96,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_6D430522_6193_00C9_41B5_ED6C4ECBB6B9",
       "yaw": -171.35,
       "backwardYaw": -162.92,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_6C191CE9_606E_7302_41D6_3E33CDB64ACF",
       "yaw": -171.35,
       "backwardYaw": -170.2,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_6CEBB7E8_606A_7D03_41CE_69723C00AA9F",
       "yaw": 140.55,
       "backwardYaw": 0.99,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_6CD96857_606E_330E_41D4_28DA4961B1BD",
       "yaw": -171.35,
       "backwardYaw": -173.12,
       "distance": 1
      }
     ],
     "vfov": 180
    },
    "yaw": -176.73,
    "backwardYaw": -171.35,
    "distance": 1
   }
  ],
  "vfov": 180
 },
 {
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
   "borderSize": 0,
   "class": "IconButton",
   "minHeight": 1,
   "horizontalAlign": "center",
   "cursor": "hand",
   "paddingBottom": 0,
   "id": "IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37",
   "maxHeight": 60,
   "paddingTop": 0,
   "backgroundOpacity": 0,
   "minWidth": 1,
   "shadow": false
  },
  "touchControlMode": "drag_rotation",
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
   "toolTipFontSize": 14,
   "toolTipShadowOpacity": 1,
   "toolTipOpacity": 0.7,
   "borderSize": 0,
   "toolTipBorderSize": 1,
   "toolTipShadowHorizontalLength": 0,
   "class": "IconButton",
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
  "mouseControlMode": "drag_acceleration",
  "buttonStop": [
   "this.IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4",
   "this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB"
  ],
  "class": "PanoramaPlayer",
  "buttonPlay": "this.IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED",
  "id": "MainViewerPanoramaPlayer",
  "viewerArea": "this.MainViewer",
  "gyroscopeVerticalDraggingEnabled": true,
  "preloadEnabled": false
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_6FF6EAC5_64DC_C32F_41CD_F8E48CAF0E47_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_6BE40682_606A_FF06_41C3_B3B6845ECE6A",
 {
  "class": "MapPlayer",
  "movementMode": "constrained",
  "id": "MapViewerMapPlayer",
  "viewerArea": {
   "shadow": false,
   "progressBorderRadius": 0,
   "progressBarBackgroundColorDirection": "vertical",
   "progressBackgroundColor": [
    "#FFFFFF"
   ],
   "paddingRight": 0,
   "progressBarOpacity": 1,
   "toolTipPaddingBottom": 4,
   "playbackBarProgressBackgroundColorDirection": "vertical",
   "progressRight": 0,
   "toolTipBorderSize": 1,
   "playbackBarBackgroundColor": [
    "#FFFFFF"
   ],
   "paddingLeft": 0,
   "toolTipShadowOpacity": 1,
   "toolTipOpacity": 1,
   "playbackBarBorderColor": "#FFFFFF",
   "playbackBarHeight": 10,
   "toolTipShadowVerticalLength": 0,
   "toolTipTextShadowColor": "#000000",
   "playbackBarHeadWidth": 6,
   "playbackBarHeadShadow": true,
   "toolTipFontStyle": "normal",
   "minHeight": 1,
   "playbackBarProgressBorderSize": 0,
   "playbackBarHeadBackgroundColorDirection": "vertical",
   "progressBottom": 2,
   "paddingBottom": 0,
   "playbackBarRight": 0,
   "toolTipBackgroundColor": "#F6F6F6",
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
   "progressBackgroundOpacity": 1,
   "minWidth": 1,
   "playbackBarBorderRadius": 0,
   "toolTipFontColor": "#606060",
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
   "class": "ViewerArea",
   "playbackBarHeadShadowBlurRadius": 3,
   "toolTipPaddingLeft": 6,
   "toolTipBorderColor": "#767676",
   "playbackBarProgressBackgroundColorRatios": [
    0
   ],
   "playbackBarLeft": 0,
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
   "playbackBarHeadShadowVerticalLength": 0,
   "toolTipShadowHorizontalLength": 0,
   "playbackBarProgressBackgroundColor": [
    "#3399FF"
   ],
   "bottom": "10%",
   "toolTipFontWeight": "normal",
   "id": "MapViewer",
   "playbackBarHeadBorderSize": 0,
   "progressBarBorderColor": "#000000",
   "playbackBarHeadOpacity": 1,
   "toolTipTextShadowBlurRadius": 3,
   "progressBackgroundColorDirection": "vertical",
   "playbackBarHeadShadowColor": "#000000",
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
   "playbackBarHeadShadowHorizontalLength": 0,
   "progressBarBackgroundColor": [
    "#3399FF"
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_6BE40682_606A_FF06_41C3_B3B6845ECE6A_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 178.1,
   "pitch": 2.83
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_6CEBB7E8_606A_7D03_41CE_69723C00AA9F",
 {
  "class": "PanoramaCamera",
  "id": "panorama_6CEBB7E8_606A_7D03_41CE_69723C00AA9F_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 16.81,
   "pitch": 2.87
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_6A58246F_6179_90B3_41BF_E08163C94BD1",
 {
  "class": "PanoramaCamera",
  "id": "panorama_6A58246F_6179_90B3_41BF_E08163C94BD1_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_6C19C4DF_606E_333E_4190_E16296FAA0F2",
 {
  "class": "PanoramaCamera",
  "id": "panorama_6C19C4DF_606E_333E_4190_E16296FAA0F2_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_6C191CE9_606E_7302_41D6_3E33CDB64ACF",
 {
  "class": "PanoramaCamera",
  "id": "panorama_6C191CE9_606E_7302_41D6_3E33CDB64ACF_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_6A977261_617E_B0AF_41D7_BFCC461810A7",
 {
  "class": "PanoramaCamera",
  "id": "panorama_6A977261_617E_B0AF_41D7_BFCC461810A7_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_6CE9E5E7_606E_5D0E_41D0_003A6E1B2677",
 {
  "class": "PanoramaCamera",
  "id": "panorama_6CE9E5E7_606E_5D0E_41D0_003A6E1B2677_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_6D430522_6193_00C9_41B5_ED6C4ECBB6B9",
 {
  "class": "PanoramaCamera",
  "id": "panorama_6D430522_6193_00C9_41B5_ED6C4ECBB6B9_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_6CD1C202_606E_7706_41A2_313E1DC1AF6A",
 {
  "class": "PanoramaCamera",
  "id": "panorama_6CD1C202_606E_7706_41A2_313E1DC1AF6A_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_6CD96857_606E_330E_41D4_28DA4961B1BD",
 {
  "class": "PanoramaCamera",
  "id": "panorama_6CD96857_606E_330E_41D4_28DA4961B1BD_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "media": "this.panorama_6FF6EAC5_64DC_C32F_41CD_F8E48CAF0E47",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_6FF6EAC5_64DC_C32F_41CD_F8E48CAF0E47_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_74FD1196_64EC_412C_41C6_325C2722BBEE",
    "media": "this.panorama_6BE40682_606A_FF06_41C3_B3B6845ECE6A",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_74FD1196_64EC_412C_41C6_325C2722BBEE, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_6BE40682_606A_FF06_41C3_B3B6845ECE6A_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "media": "this.panorama_6CEBB7E8_606A_7D03_41CE_69723C00AA9F",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_6CEBB7E8_606A_7D03_41CE_69723C00AA9F_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "media": "this.panorama_6A58246F_6179_90B3_41BF_E08163C94BD1",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_6A58246F_6179_90B3_41BF_E08163C94BD1_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "media": "this.panorama_6C19C4DF_606E_333E_4190_E16296FAA0F2",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_6C19C4DF_606E_333E_4190_E16296FAA0F2_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "media": "this.panorama_6C191CE9_606E_7302_41D6_3E33CDB64ACF",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_6C191CE9_606E_7302_41D6_3E33CDB64ACF_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "media": "this.panorama_6A977261_617E_B0AF_41D7_BFCC461810A7",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_6A977261_617E_B0AF_41D7_BFCC461810A7_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "media": "this.panorama_6CE9E5E7_606E_5D0E_41D0_003A6E1B2677",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_6CE9E5E7_606E_5D0E_41D0_003A6E1B2677_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "media": "this.panorama_6D430522_6193_00C9_41B5_ED6C4ECBB6B9",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_6D430522_6193_00C9_41B5_ED6C4ECBB6B9_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
    "media": "this.panorama_6CD1C202_606E_7706_41A2_313E1DC1AF6A",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_6CD1C202_606E_7706_41A2_313E1DC1AF6A_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 0)",
    "media": "this.panorama_6CD96857_606E_330E_41D4_28DA4961B1BD",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_6CD96857_606E_330E_41D4_28DA4961B1BD_camera"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist",
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 0, 1)",
    "media": "this.panorama_6FF6EAC5_64DC_C32F_41CD_F8E48CAF0E47",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_6FF6EAC5_64DC_C32F_41CD_F8E48CAF0E47_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 1, 2)",
    "media": "this.panorama_6BE40682_606A_FF06_41C3_B3B6845ECE6A",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_6BE40682_606A_FF06_41C3_B3B6845ECE6A_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 2, 3)",
    "media": "this.panorama_6CEBB7E8_606A_7D03_41CE_69723C00AA9F",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_6CEBB7E8_606A_7D03_41CE_69723C00AA9F_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 3, 4)",
    "media": "this.panorama_6A58246F_6179_90B3_41BF_E08163C94BD1",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_6A58246F_6179_90B3_41BF_E08163C94BD1_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 4, 5)",
    "media": "this.panorama_6C19C4DF_606E_333E_4190_E16296FAA0F2",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_6C19C4DF_606E_333E_4190_E16296FAA0F2_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 5, 6)",
    "media": "this.panorama_6C191CE9_606E_7302_41D6_3E33CDB64ACF",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_6C191CE9_606E_7302_41D6_3E33CDB64ACF_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 6, 7)",
    "media": "this.panorama_6A977261_617E_B0AF_41D7_BFCC461810A7",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_6A977261_617E_B0AF_41D7_BFCC461810A7_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 7, 8)",
    "media": "this.panorama_6CE9E5E7_606E_5D0E_41D0_003A6E1B2677",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_6CE9E5E7_606E_5D0E_41D0_003A6E1B2677_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 8, 9)",
    "media": "this.panorama_6D430522_6193_00C9_41B5_ED6C4ECBB6B9",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_6D430522_6193_00C9_41B5_ED6C4ECBB6B9_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 9, 10)",
    "media": "this.panorama_6CD1C202_606E_7706_41A2_313E1DC1AF6A",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_6CD1C202_606E_7706_41A2_313E1DC1AF6A_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 10, 0)",
    "media": "this.panorama_6CD96857_606E_330E_41D4_28DA4961B1BD",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_6CD96857_606E_330E_41D4_28DA4961B1BD_camera"
   }
  ]
 },
 {
  "thumbnailUrl": "media/video_210B394E_3D54_1A60_41A3_CB42BEC0D3EC_t.jpg",
  "label": "DJI_0384",
  "video": {
   "class": "VideoResource",
   "mp4Url": "media/video_210B394E_3D54_1A60_41A3_CB42BEC0D3EC.mp4",
   "width": 1920,
   "height": 1080,
   "webmUrl": "media/video_210B394E_3D54_1A60_41A3_CB42BEC0D3EC.webm"
  },
  "class": "Video",
  "width": 1920,
  "id": "video_210B394E_3D54_1A60_41A3_CB42BEC0D3EC",
  "loop": false,
  "height": 1080,
  "scaleMode": "fit_outside"
 },
 {
  "class": "PlayList",
  "id": "playList_74ECA188_64EC_4124_41D3_C61818D05DC6",
  "items": [
   {
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_210B394E_3D54_1A60_41A3_CB42BEC0D3EC",
    "begin": "this.registerKey('visibility_Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB', this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB.get('visible')); this.registerKey('visibility_ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472', this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472.get('visible')); this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setComponentVisibility(this.Container_86F3A56C_8E22_5B1D_41CA_9CE53436FE56, false, -1, this.effect_22973FB1_2DD9_0423_41C1_E1E03953DCCE, 'hideEffect', false); this.setComponentVisibility(this.Container_807F782A_8E23_A905_41DE_623121285A09, false, -1, this.effect_22974FB2_2DD9_0421_41BA_84205292D043, 'hideEffect', false); this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, false, -1, this.effect_3876CD6E_2DF9_0421_41C1_F0AB7F279824, 'hideEffect', false); this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, false, -1, this.effect_22899FB3_2DD9_0427_41BB_298AEB3D2851, 'hideEffect', false); this.setComponentVisibility(this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB, true, -1, this.effect_2289DFB3_2DD9_0427_41AE_A35795880BA7, 'showEffect', false)",
    "end": "this.setComponentVisibility(this.Container_86F3A56C_8E22_5B1D_41CA_9CE53436FE56, true, -1, this.effect_22975FB2_2DD9_0421_41B4_7A2443082F44, 'showEffect', false); this.setComponentVisibility(this.Container_86F3A56C_8E22_5B1D_41CA_9CE53436FE56, true, -1, this.effect_22975FB2_2DD9_0421_41B4_7A2443082F44, 'showEffect', false); this.setComponentVisibility(this.Container_807F782A_8E23_A905_41DE_623121285A09, true, -1, this.effect_22977FB2_2DD9_0421_41C1_F53B037346DF, 'showEffect', false); this.setComponentVisibility(this.Container_807F782A_8E23_A905_41DE_623121285A09, true, -1, this.effect_22977FB2_2DD9_0421_41C1_F53B037346DF, 'showEffect', false); if(this.existsKey('visibility_ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472')){ if(this.getKey('visibility_ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472')) { this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, true, -1, this.effect_753235EC_64EC_40FC_41D8_5F7E01659A3F, 'showEffect', false); } else { this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, false, -1, this.effect_3876CD6E_2DF9_0421_41C1_F0AB7F279824, 'hideEffect', false); } }; this.unregisterKey('visibility_ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472'); if(this.existsKey('visibility_Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB')){ if(this.getKey('visibility_Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB')) { this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, true, -1, this.effect_753275EC_64EC_40FC_41CF_9ABBA3BA5D66, 'showEffect', false); } else { this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, false, -1, this.effect_22899FB3_2DD9_0427_41BB_298AEB3D2851, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB'); this.setComponentVisibility(this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB, false, -1, this.effect_2289EFB3_2DD9_0427_41C0_ACB5A72AE218, 'hideEffect', false); this.setComponentVisibility(this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB, false, -1, this.effect_2289EFB3_2DD9_0427_41C0_ACB5A72AE218, 'hideEffect', false)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_74ECA188_64EC_4124_41D3_C61818D05DC6, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_74ECA188_64EC_4124_41D3_C61818D05DC6, 0, this.video_210B394E_3D54_1A60_41A3_CB42BEC0D3EC)"
   }
  ]
 },
 {
  "thumbnailUrl": "media/album_1AE8DEB7_0EE7_8CC7_4198_F5B75788CCF6_t.png",
  "class": "PhotoAlbum",
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
      "duration": 5000,
      "label": "DJI_0355",
      "class": "Photo",
      "width": 5472,
      "id": "photo_25EB8F3B_3D54_3627_41C1_FA6C2C76D85C",
      "height": 3648,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/photo_25EB8F3B_3D54_3627_41C1_FA6C2C76D85C.JPG"
        }
       ]
      }
     },
     "camera": {
      "class": "MovementPhotoCamera",
      "scaleMode": "fit_outside",
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.50",
       "zoomFactor": 1,
       "y": "0.50"
      },
      "easing": "linear",
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.33",
       "zoomFactor": 1.1,
       "y": "0.55"
      },
      "duration": 5000
     }
    },
    {
     "class": "PhotoPlayListItem",
     "media": {
      "thumbnailUrl": "media/photo_2537233E_3D54_0E20_41B8_95E46BC1EC07_t.jpg",
      "duration": 5000,
      "label": "DJI_0364",
      "class": "Photo",
      "width": 4900,
      "id": "photo_2537233E_3D54_0E20_41B8_95E46BC1EC07",
      "height": 3264,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/photo_2537233E_3D54_0E20_41B8_95E46BC1EC07.jpg"
        }
       ]
      }
     },
     "camera": {
      "class": "MovementPhotoCamera",
      "scaleMode": "fit_outside",
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.50",
       "zoomFactor": 1,
       "y": "0.50"
      },
      "easing": "linear",
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.50",
       "zoomFactor": 1.1,
       "y": "0.71"
      },
      "duration": 5000
     }
    },
    {
     "class": "PhotoPlayListItem",
     "media": {
      "thumbnailUrl": "media/photo_25363697_3D54_16EF_41C7_78CA5BF042D8_t.jpg",
      "duration": 5000,
      "label": "DJI_0369",
      "class": "Photo",
      "width": 4900,
      "id": "photo_25363697_3D54_16EF_41C7_78CA5BF042D8",
      "height": 3264,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/photo_25363697_3D54_16EF_41C7_78CA5BF042D8.jpg"
        }
       ]
      }
     },
     "camera": {
      "class": "MovementPhotoCamera",
      "scaleMode": "fit_outside",
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.50",
       "zoomFactor": 1,
       "y": "0.50"
      },
      "easing": "linear",
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.52",
       "zoomFactor": 1.1,
       "y": "0.66"
      },
      "duration": 5000
     }
    },
    {
     "class": "PhotoPlayListItem",
     "media": {
      "thumbnailUrl": "media/photo_2536FA03_3D54_19E7_41C9_9A86E77D5C4C_t.jpg",
      "duration": 5000,
      "label": "DJI_0388",
      "class": "Photo",
      "width": 5472,
      "id": "photo_2536FA03_3D54_19E7_41C9_9A86E77D5C4C",
      "height": 3648,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/photo_2536FA03_3D54_19E7_41C9_9A86E77D5C4C.JPG"
        }
       ]
      }
     },
     "camera": {
      "class": "MovementPhotoCamera",
      "scaleMode": "fit_outside",
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.50",
       "zoomFactor": 1,
       "y": "0.50"
      },
      "easing": "linear",
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.70",
       "zoomFactor": 1.1,
       "y": "0.71"
      },
      "duration": 5000
     }
    },
    {
     "class": "PhotoPlayListItem",
     "media": {
      "thumbnailUrl": "media/photo_25365DAF_3D54_1A3F_41C9_6122F3F568B7_t.jpg",
      "duration": 5000,
      "label": "DJI_0402",
      "class": "Photo",
      "width": 4900,
      "id": "photo_25365DAF_3D54_1A3F_41C9_6122F3F568B7",
      "height": 3264,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/photo_25365DAF_3D54_1A3F_41C9_6122F3F568B7.jpg"
        }
       ]
      }
     },
     "camera": {
      "class": "MovementPhotoCamera",
      "scaleMode": "fit_outside",
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.50",
       "zoomFactor": 1,
       "y": "0.50"
      },
      "easing": "linear",
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.49",
       "zoomFactor": 1.1,
       "y": "0.74"
      },
      "duration": 5000
     }
    },
    {
     "class": "PhotoPlayListItem",
     "media": {
      "thumbnailUrl": "media/photo_2536E107_3D54_0BE0_41C7_237D79278EAE_t.jpg",
      "duration": 5000,
      "label": "DJI_0405",
      "class": "Photo",
      "width": 4900,
      "id": "photo_2536E107_3D54_0BE0_41C7_237D79278EAE",
      "height": 3264,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/photo_2536E107_3D54_0BE0_41C7_237D79278EAE.jpg"
        }
       ]
      }
     },
     "camera": {
      "class": "MovementPhotoCamera",
      "scaleMode": "fit_outside",
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.50",
       "zoomFactor": 1,
       "y": "0.50"
      },
      "easing": "linear",
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.32",
       "zoomFactor": 1.1,
       "y": "0.47"
      },
      "duration": 5000
     }
    },
    {
     "class": "PhotoPlayListItem",
     "media": {
      "thumbnailUrl": "media/photo_25361460_3D54_0A21_41C5_9CEF516D0083_t.jpg",
      "duration": 5000,
      "label": "DJI_0415",
      "class": "Photo",
      "width": 4900,
      "id": "photo_25361460_3D54_0A21_41C5_9CEF516D0083",
      "height": 3264,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/photo_25361460_3D54_0A21_41C5_9CEF516D0083.jpg"
        }
       ]
      }
     },
     "camera": {
      "class": "MovementPhotoCamera",
      "scaleMode": "fit_outside",
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.50",
       "zoomFactor": 1,
       "y": "0.50"
      },
      "easing": "linear",
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.64",
       "zoomFactor": 1.1,
       "y": "0.53"
      },
      "duration": 5000
     }
    },
    {
     "class": "PhotoPlayListItem",
     "media": {
      "thumbnailUrl": "media/photo_2536E7CB_3D54_F667_41C8_0C74E4EA5879_t.jpg",
      "duration": 5000,
      "label": "DJI_0441",
      "class": "Photo",
      "width": 4900,
      "id": "photo_2536E7CB_3D54_F667_41C8_0C74E4EA5879",
      "height": 3264,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/photo_2536E7CB_3D54_F667_41C8_0C74E4EA5879.jpg"
        }
       ]
      }
     },
     "camera": {
      "class": "MovementPhotoCamera",
      "scaleMode": "fit_outside",
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.50",
       "zoomFactor": 1,
       "y": "0.50"
      },
      "easing": "linear",
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.31",
       "zoomFactor": 1.1,
       "y": "0.32"
      },
      "duration": 5000
     }
    }
   ]
  }
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
  "id": "playList_74ECF189_64EC_4124_41D8_46AE23F474F0",
  "items": [
   {
    "class": "PhotoAlbumPlayListItem",
    "player": "this.ViewerAreaLabeled_9FD7235A_96CD_9045_41D9_23A3BCBDB1C6PhotoAlbumPlayer",
    "media": "this.album_1AE8DEB7_0EE7_8CC7_4198_F5B75788CCF6",
    "begin": "this.loopAlbum(this.playList_74ECF189_64EC_4124_41D8_46AE23F474F0, 0)"
   }
  ]
 },
 "this.map_4E02A832_427B_EE04_41CC_8E1CEC03E8D3",
 {
  "class": "PlayList",
  "id": "playList_74F20195_64EC_412C_41D5_47B9E5999F56",
  "items": [
   {
    "class": "MapPlayListItem",
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_4E02A832_427B_EE04_41CC_8E1CEC03E8D3",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')"
   }
  ]
 },
 {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "height": 624,
    "width": 959,
    "url": "media/zoomImage_8E47938C_96CD_F0DD_41E1_7A3E325FC5AB_0_0.png"
   },
   {
    "class": "ImageResourceLevel",
    "height": 333,
    "width": 512,
    "url": "media/zoomImage_8E47938C_96CD_F0DD_41E1_7A3E325FC5AB_0_1.png"
   }
  ],
  "id": "ImageResource_6ECEF4DB_6091_DDD1_41D4_2B884570086A"
 },
 {
  "class": "FadeInEffect",
  "easing": "cubic_in",
  "id": "FadeInEffect_8ED05F70_96C4_F045_41DC_2AB82A556F92",
  "duration": 500
 },
 {
  "class": "FadeOutEffect",
  "easing": "cubic_out",
  "id": "FadeOutEffect_8ED06F70_96C4_F045_41DA_C74400CF7B15",
  "duration": 500
 },
 {
  "class": "FadeInEffect",
  "easing": "linear",
  "id": "effect_98AADBB0_96C5_F0C5_41B2_1C4D08E503DB",
  "duration": 200
 },
 {
  "class": "FadeInEffect",
  "easing": "linear",
  "id": "effect_51CB7B74_4299_12E2_41B4_829087983DE5",
  "duration": 300
 },
 {
  "class": "FadeInEffect",
  "easing": "linear",
  "id": "effect_15DDF232_3E91_44CF_41AB_F8C3E6067377",
  "duration": 400
 },
 {
  "class": "FadeOutEffect",
  "easing": "linear",
  "id": "effect_15DDE232_3E91_44CF_41B1_14501B4EC17A",
  "duration": 400
 },
 {
  "class": "FadeInEffect",
  "easing": "linear",
  "id": "effect_CACBF85D_EED0_7261_41DB_A3B65ECE0D5D",
  "duration": 200
 },
 {
  "class": "FadeOutEffect",
  "easing": "linear",
  "id": "effect_CACBC85D_EED0_7261_41BE_8CF4C3A8170C",
  "duration": 200
 },
 {
  "class": "FadeInEffect",
  "easing": "linear",
  "id": "effect_CDD059FA_EED0_D223_41DB_70ACFBE986FE",
  "duration": 200
 },
 {
  "class": "FadeOutEffect",
  "easing": "linear",
  "id": "effect_CDD049FB_EED0_D221_41EB_CA2134B978E0",
  "duration": 200
 },
 {
  "class": "FadeInEffect",
  "easing": "linear",
  "id": "effect_32C91197_3F22_3110_4181_9E76B593FBFE",
  "duration": 400
 },
 {
  "class": "FadeOutEffect",
  "easing": "linear",
  "id": "effect_32C92197_3F22_3110_419D_E2E21968F16F",
  "duration": 400
 },
 {
  "class": "FadeOutEffect",
  "easing": "linear",
  "id": "effect_9B0AF4E2_96C4_F045_41D3_0E00FEE03A15",
  "duration": 200
 },
 {
  "class": "FadeOutEffect",
  "easing": "linear",
  "id": "effect_500E3733_4297_3267_41C9_4935C0BEBF39",
  "duration": 300
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_74CAC1B9_64EC_4164_41CA_52A5C8575B3F",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 7.78,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_74D101C3_64EC_4124_41D1_4EEAEC7CFC7D",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -67.71,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_74DCC1CD_64EC_413C_41D1_3824FE2B24FC",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 5.62,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_74A521D8_64EC_4124_41D2_F6B573CE3E18",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 8.04,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_74A111E3_64EC_40E4_41CB_0F78EC19F71B",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 8.65,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_74AF01ED_64EC_40FC_41B7_1DAF2976E4D7",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -16.3,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_74AB81F7_64EC_40EC_41D0_7336E9B3AFDF",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -69.9,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_74B1D202_64EC_4324_41BA_676FF3F0BB19",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.32,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_74BF220D_64EC_433C_41D8_F35546E85444",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 6.88,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_7485E216_64EC_432C_41C7_672C7FDD5CDB",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 17.08,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_74825220_64EC_4365_41BF_7386863A3C2E",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 7.79,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_7489D22B_64EC_437B_41D4_51EBD7211924",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.42,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_7496E235_64EC_436F_41C5_0D55CF83B314",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 3.36,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_749C8240_64EC_4325_41B6_3A5DD4EA22AD",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 8.65,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_7464E24B_64EC_433B_41B4_9A57D156C730",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 17.08,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_746EF256_64EC_432D_41C5_DD6BF68416F6",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.8,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_74716261_64EC_43E7_41D2_D4B29EEC7B92",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 163.22,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_7445C26B_64EC_43FB_41BD_31ECDA03759C",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 6.88,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_74481276_64EC_43ED_41C2_17BAA791DB96",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -145.14,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_745FD280_64EC_4325_41C2_8F79882F84D2",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 7.78,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_7423D28A_64EC_4324_41A0_E82C5523D6F0",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.42,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_7430229F_64EC_435C_41D3_31505D3ABB04",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 8.04,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_740662AF_64EC_437C_41C0_75B071D3A3B3",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 8.65,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_741592C4_64EC_432C_41B7_74CDC883B2A1",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 17.08,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_741BF2D4_64EC_432C_41C6_A602EA0FB57A",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.8,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_75EEA2E8_64EC_40E4_41C0_4B5473640E58",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.32,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_75FCC2F8_64EC_40E4_41D2_1E6A8E4908F8",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -161.22,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_75C3830C_64EC_413C_41C2_92DBCB1701C8",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 8.65,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_75D1D31D_64EC_415C_41D5_2A264F161323",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 1.85,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_75A6A32C_64EC_417C_41CE_2E06626DB2C6",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 7.78,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_75B50341_64EC_4124_41D9_0D2E637DC0CD",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 7.79,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_75BBA350_64EC_4124_41BE_FB410BB63B5C",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 8.04,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_758EB365_64EC_41EC_41CE_CE78BBA2A3CC",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 8.65,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_759CA371_64EC_41E7_418A_7F71820F2AFC",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 17.08,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_7563937D_64EC_41DC_41D0_56A635EC8692",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.8,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_75706387_64EC_412B_41CF_2AF7736D27AF",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.32,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_75465392_64EC_4124_41D3_2C2D0185E22D",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 6.88,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_7555039C_64EC_415C_41D6_09621B83F915",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 17.08,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_755B43A6_64EC_416D_41B4_99CACECD1931",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -167.9,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_752E43AF_64EC_417B_41C7_5438CFB8A0D5",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 7.79,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_753CF3B9_64EC_4167_41BE_69CE3E9621CD",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.42,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_750D53C3_64EC_412B_41CB_E97E5D96D23B",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 8.65,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_751073CE_64EC_413D_41C2_8DE36FBBAC14",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 17.08,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6B141402_64EC_4724_41C1_555A3018748B",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -69.77,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6B11B40D_64EC_473C_41D8_56FD040A17F0",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.32,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6B1CF416_64EC_472C_41AB_90316196A24A",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 6.88,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6B1B3421_64EC_4764_41CB_9D57261243C7",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 17.08,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_74E6942B_64EC_4764_41D2_98DC8AF06CD0",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 7.78,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_74EC9435_64EC_476C_41D2_F1516B791F2D",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 7.79,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_74EB343F_64EC_475B_419D_53D4994F4726",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 3.27,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_74F6C44A_64EC_4724_41CB_20E7E2E8F082",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.42,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_74FD4453_64EC_4724_41B2_FA9F4F77ED88",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 8.04,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_74FBA45E_64EC_47DC_41B2_D0BB9584C1A6",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 17.08,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_74C7E468_64EC_47E4_41D7_0517E75F8778",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.8,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_74CDD473_64EC_47E4_41C0_000DDE5FC344",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -179.01,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_74CA347D_64EC_47DC_41A9_04F5AFFB7F36",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 6.88,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_74D68487_64EC_472C_41B3_BF12854D16DC",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -96.92,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_74DC9492_64EC_4724_41D6_E159784D702A",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 7.78,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_74DBE49B_64EC_4724_41D6_7C18BD634A20",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 7.79,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_74A0B4A6_64EC_476C_4174_FBF75CF1BD54",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.42,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_74AFC4AF_64EC_477C_41CE_4BEF04B89857",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 8.04,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_74B724BA_64EC_4764_41D6_0848DA14240B",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 8.65,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_74BC74C4_64EC_472C_41AE_290C12E5E067",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.8,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_74BBC4CE_64EC_473C_41C5_ABFCE9042C11",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.32,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_7482D4D8_64EC_4724_41D6_87D9C442A17D",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 6.88,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_7495C4E2_64EC_40E4_41D0_59DF93F2E701",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -145.24,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_749814EC_64EC_40FC_41C2_C0245D38D459",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 7.78,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_746DE4F6_64EC_40EC_41B9_32D167EE64AB",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 7.79,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_74739500_64EC_4124_41C4_AE6415A8DB4E",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.42,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_7441350B_64EC_4124_41AC_AB68188E2D3C",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -137.76,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_74555514_64EC_412E_41AF_87DAEAC2AF90",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 8.65,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_745B351E_64EC_415D_41D0_B1FFFE255001",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 17.08,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_742F9528_64EC_4165_41D1_A46D61470E32",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.32,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_743D9532_64EC_4165_41CA_4D45954E25DF",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 6.88,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_7402653C_64EC_415D_41C4_2416887BECD4",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 17.08,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_74116546_64EC_412D_41D8_B1E7A150563C",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 85.67,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_75E77550_64EC_4125_41C6_A807DC31B025",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 7.79,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_75EA755B_64EC_41DB_41BE_55A889392F36",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.42,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_75F85566_64EC_41ED_41B0_AD2E2FF9CE9E",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 8.04,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_75CF0571_64EC_41E4_41D8_254534284CD3",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -39.45,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_75DDE57B_64EC_41E4_41D3_B9AA4C5A62A3",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 17.08,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_75A23585_64EC_412C_41C5_726BACDB4A9E",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.8,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_75B1358F_64EC_413C_41D3_02D41EAE86ED",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 6.88,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_75874599_64EC_4124_41D4_4EDEFC481140",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 17.08,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_758A65A3_64EC_4164_41C5_901ACBFD0F91",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 7.78,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_7598A5AD_64EC_417C_41B2_4F064BDB656C",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -67.53,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_756FB5B6_64EC_416C_41B9_D8B35E3F7C1E",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.42,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_757DF5C1_64EC_4124_41C4_B2BF63E33D35",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 8.04,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_754255CB_64EC_4124_41C5_6C4DC8E270DC",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 8.65,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_7556C5D4_64EC_412C_41B4_7EB32E482E81",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 17.08,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_752785DF_64EC_40DC_41D4_5B27EC4F5807",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.8,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_752A05E8_64EC_40E4_41AA_B5A42283F557",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.32,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_22973FB1_2DD9_0423_41C1_E1E03953DCCE",
  "duration": 1000
 },
 {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "id": "effect_22975FB2_2DD9_0421_41B4_7A2443082F44",
  "duration": 1000
 },
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_22974FB2_2DD9_0421_41BA_84205292D043",
  "duration": 1000
 },
 {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "id": "effect_22977FB2_2DD9_0421_41C1_F53B037346DF",
  "duration": 1000
 },
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_3876CD6E_2DF9_0421_41C1_F0AB7F279824",
  "duration": 1000
 },
 {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "id": "effect_753235EC_64EC_40FC_41D8_5F7E01659A3F",
  "duration": 1000
 },
 "this.effect_3876CD6E_2DF9_0421_41C1_F0AB7F279824",
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_22899FB3_2DD9_0427_41BB_298AEB3D2851",
  "duration": 1000
 },
 {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "id": "effect_753275EC_64EC_40FC_41CF_9ABBA3BA5D66",
  "duration": 1000
 },
 "this.effect_22899FB3_2DD9_0427_41BB_298AEB3D2851",
 {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "id": "effect_2289DFB3_2DD9_0427_41AE_A35795880BA7",
  "duration": 1000
 },
 {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "id": "effect_2289EFB3_2DD9_0427_41C0_ACB5A72AE218",
  "duration": 1000
 },
 {
  "class": "DirectionalPanoramaAudio",
  "autoplay": true,
  "id": "audio_A83B2F1A_B250_204B_41B2_61A870B2B428",
  "loop": true,
  "audio": {
   "class": "AudioResource",
   "id": "audioresource_1D15163A_0EEB_BFC9_419F_EF5F7074EFB1",
   "mp3Url": "media/audio_A83B2F1A_B250_204B_41B2_61A870B2B428.mp3",
   "oggUrl": "media/audio_A83B2F1A_B250_204B_41B2_61A870B2B428.ogg"
  },
  "maximumAngle": 231.16,
  "yaw": -17.74,
  "pitch": -7.7
 },
 {
  "class": "DirectionalPanoramaAudio",
  "autoplay": true,
  "id": "audio_A875C8FE_B250_61CA_41D2_1BDD70C9887A",
  "loop": true,
  "audio": {
   "class": "AudioResource",
   "id": "audioresource_A84F2D34_B270_605F_41E2_4CF67AB762D2",
   "mp3Url": "media/audio_A875C8FE_B250_61CA_41D2_1BDD70C9887A.mp3",
   "oggUrl": "media/audio_A875C8FE_B250_61CA_41D2_1BDD70C9887A.ogg"
  },
  "maximumAngle": 97.14,
  "yaw": 4.55,
  "pitch": -18.69
 },
 {
  "class": "DirectionalPanoramaAudio",
  "autoplay": true,
  "id": "audio_A87513BA_B273_E04A_41AA_0102CD2EF1BE",
  "loop": true,
  "audio": {
   "class": "AudioResource",
   "id": "audioresource_A83107F8_B270_2FD6_41E2_DAE1F661A577",
   "mp3Url": "media/audio_A87513BA_B273_E04A_41AA_0102CD2EF1BE.mp3",
   "oggUrl": "media/audio_A87513BA_B273_E04A_41AA_0102CD2EF1BE.ogg"
  },
  "maximumAngle": 61.89,
  "yaw": -10.86,
  "pitch": -0.76
 },
 {
  "class": "PanoramaAudio",
  "autoplay": true,
  "id": "audio_A83165F4_B270_23DF_41DC_E385B4E6556E",
  "audio": "this.audioresource_A83107F8_B270_2FD6_41E2_DAE1F661A577"
 },
 {
  "class": "DirectionalPanoramaAudio",
  "autoplay": true,
  "id": "audio_A8213A22_B270_E07A_41D5_F14349BD0E04",
  "loop": true,
  "audio": "this.audioresource_A83107F8_B270_2FD6_41E2_DAE1F661A577",
  "maximumAngle": 222.06,
  "yaw": 0,
  "pitch": 0
 },
 {
  "class": "DirectionalPanoramaAudio",
  "autoplay": true,
  "id": "audio_A8284F56_B270_60DB_41E0_27608EB2E0B9",
  "loop": true,
  "audio": "this.audioresource_A83107F8_B270_2FD6_41E2_DAE1F661A577",
  "maximumAngle": 265.52,
  "yaw": -40.93,
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
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/photo_1D911E4D_0EFC_8C4B_4180_DC7B2E0CE38C.jpg"
    }
   ]
  }
 },
 {
  "class": "DirectionalPanoramaAudio",
  "autoplay": true,
  "id": "audio_1D15363A_0EEB_BFC9_4193_928F3B1A384C",
  "loop": true,
  "audio": "this.audioresource_1D15163A_0EEB_BFC9_419F_EF5F7074EFB1",
  "maximumAngle": 360,
  "yaw": 0,
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
  "progressBarOpacity": 1,
  "toolTipPaddingBottom": 4,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "progressRight": 0,
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
  "playbackBarHeadShadow": true,
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
  "progressBackgroundOpacity": 1,
  "minWidth": 100,
  "playbackBarBorderRadius": 0,
  "toolTipFontColor": "#606060",
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
  "class": "ViewerArea",
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipPaddingLeft": 6,
  "toolTipBorderColor": "#767676",
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "playbackBarLeft": 0,
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
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipShadowHorizontalLength": 0,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "bottom": "0%",
  "toolTipFontWeight": "normal",
  "id": "MainViewer",
  "playbackBarHeadBorderSize": 0,
  "progressBarBorderColor": "#000000",
  "playbackBarHeadOpacity": 1,
  "toolTipTextShadowBlurRadius": 3,
  "progressBackgroundColorDirection": "vertical",
  "playbackBarHeadShadowColor": "#000000",
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
  "playbackBarHeadShadowHorizontalLength": 0,
  "progressBarBackgroundColor": [
   "#3399FF"
  ]
 },
 {
  "backgroundColorDirection": "vertical",
  "overflow": "visible",
  "scrollBarOpacity": 0.5,
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "verticalAlign": "middle",
  "paddingRight": 10,
  "scrollBarColor": "#000000",
  "height": 70,
  "paddingLeft": 10,
  "borderRadius": 5,
  "borderSize": 0,
  "gap": 35,
  "class": "Container",
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "contentOpaque": false,
  "minHeight": 25,
  "horizontalAlign": "center",
  "layout": "horizontal",
  "paddingBottom": 0,
  "backgroundColorRatios": [
   0,
   1
  ],
  "id": "Container_86F3A56C_8E22_5B1D_41CA_9CE53436FE56",
  "maxHeight": 70,
  "bottom": "3%",
  "paddingTop": 0,
  "left": "0%",
  "backgroundOpacity": 0.25,
  "minWidth": 100,
  "right": "0%",
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
    "toolTipFontSize": 14,
    "toolTipShadowOpacity": 1,
    "toolTipOpacity": 0.7,
    "borderSize": 0,
    "toolTipBorderSize": 1,
    "toolTipShadowHorizontalLength": 0,
    "class": "IconButton",
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
    "toolTipFontSize": 14,
    "toolTipShadowOpacity": 1,
    "toolTipOpacity": 0.7,
    "borderSize": 0,
    "toolTipBorderSize": 1,
    "toolTipShadowHorizontalLength": 0,
    "class": "IconButton",
    "borderRadius": 0,
    "toolTipShadowVerticalLength": 0,
    "toolTipPaddingLeft": 6,
    "toolTipBorderColor": "#767676",
    "toolTipTextShadowColor": "#000000",
    "rollOverIconURL": "skin/IconButton_213ED70C_2DB2_E6C5_41B6_0CCE6C77E889_rollover.png",
    "click": "this.setMediaBehaviour(this.playList_74ECA188_64EC_4124_41D3_C61818D05DC6, 0); this.MainViewerVideoPlayer.play()",
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
    "toolTipShadowSpread": 0,
    "toolTipShadowColor": "#333333",
    "toolTipShadowBlurRadius": 3,
    "backgroundOpacity": 0,
    "toolTipFontColor": "#606060",
    "minWidth": 25,
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
    "toolTipFontSize": 14,
    "toolTipShadowOpacity": 1,
    "toolTipOpacity": 0.7,
    "borderSize": 0,
    "toolTipBorderSize": 1,
    "toolTipShadowHorizontalLength": 0,
    "class": "IconButton",
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
    "toolTipShadowSpread": 0,
    "toolTipShadowColor": "#333333",
    "toolTipShadowBlurRadius": 3,
    "pressedIconURL": "skin/IconButton_2FC9210C_3E8F_C4D4_41A7_10D1404CA49B_pressed.png",
    "backgroundOpacity": 0,
    "toolTipFontColor": "#606060",
    "minWidth": 25,
    "toolTipFontFamily": "Arial",
    "shadow": false
   },
   {
    "verticalAlign": "middle",
    "paddingRight": 0,
    "mode": "toggle",
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
    "toolTip": "Panorama List",
    "toolTipFontSize": 14,
    "toolTipShadowOpacity": 1,
    "toolTipOpacity": 0.7,
    "borderSize": 0,
    "toolTipBorderSize": 1,
    "toolTipShadowHorizontalLength": 0,
    "class": "IconButton",
    "borderRadius": 0,
    "toolTipShadowVerticalLength": 0,
    "toolTipPaddingLeft": 6,
    "toolTipBorderColor": "#767676",
    "toolTipTextShadowColor": "#000000",
    "click": "if(!this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472.get('visible')){ this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, true, 0, this.effect_15DDF232_3E91_44CF_41AB_F8C3E6067377, 'showEffect', false) } else if(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472.get('visible')){ this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, false, 0, this.effect_15DDE232_3E91_44CF_41B1_14501B4EC17A, 'hideEffect', false) }",
    "toolTipFontStyle": "normal",
    "toolTipBorderRadius": 3,
    "minHeight": 25,
    "horizontalAlign": "center",
    "cursor": "hand",
    "paddingBottom": 0,
    "toolTipTextShadowBlurRadius": 3,
    "toolTipBackgroundColor": "#000000",
    "toolTipFontWeight": "normal",
    "id": "IconButton_843BBEF5_8E22_690F_419D_28CBDD771ACC",
    "maxHeight": 70,
    "paddingTop": 0,
    "toolTipShadowSpread": 0,
    "toolTipShadowColor": "#333333",
    "toolTipShadowBlurRadius": 3,
    "pressedIconURL": "skin/IconButton_843BBEF5_8E22_690F_419D_28CBDD771ACC_pressed.png",
    "backgroundOpacity": 0,
    "toolTipFontColor": "#606060",
    "minWidth": 25,
    "toolTipFontFamily": "Arial",
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
  "verticalAlign": "middle",
  "paddingLeft": 0,
  "height": 50,
  "maxWidth": 500,
  "width": 500,
  "borderRadius": 5,
  "borderSize": 0,
  "gap": 5,
  "contentOpaque": false,
  "class": "Container",
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "minHeight": 55,
  "horizontalAlign": "right",
  "top": "3%",
  "layout": "horizontal",
  "paddingBottom": 0,
  "id": "Container_807F782A_8E23_A905_41DE_623121285A09",
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
    "borderRadius": 0,
    "borderSize": 0,
    "gap": 0,
    "contentOpaque": false,
    "class": "Container",
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "minHeight": 55,
    "horizontalAlign": "right",
    "layout": "horizontal",
    "visible": false,
    "paddingBottom": 0,
    "id": "Container_80D3CF90_8E26_E705_41E0_E47025A2C106",
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
      "toolTipFontSize": 14,
      "toolTipShadowOpacity": 1,
      "toolTipOpacity": 0.7,
      "borderSize": 0,
      "toolTipBorderSize": 1,
      "toolTipShadowHorizontalLength": 0,
      "class": "IconButton",
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
      "toolTipFontSize": 14,
      "toolTipShadowOpacity": 1,
      "toolTipOpacity": 0.7,
      "borderSize": 0,
      "toolTipBorderSize": 1,
      "toolTipShadowHorizontalLength": 0,
      "class": "IconButton",
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
      "paddingBottom": 0,
      "toolTipTextShadowBlurRadius": 3,
      "toolTipBackgroundColor": "#000000",
      "toolTipFontWeight": "normal",
      "id": "IconButton_8105A313_8E22_BF0B_41E1_331C6035A930",
      "maxHeight": 60,
      "paddingTop": 0,
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
    "toolTipFontSize": 14,
    "toolTipShadowOpacity": 1,
    "toolTipOpacity": 0.7,
    "borderSize": 0,
    "toolTipBorderSize": 1,
    "toolTipShadowHorizontalLength": 0,
    "class": "IconButton",
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
    "toolTipShadowSpread": 0,
    "toolTipShadowColor": "#333333",
    "toolTipShadowBlurRadius": 3,
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
  "verticalAlign": "top",
  "itemBackgroundColorRatios": [],
  "paddingRight": 5,
  "itemLabelFontFamily": "Arial",
  "paddingLeft": 5,
  "maxWidth": 105,
  "itemThumbnailHeight": 75,
  "backgroundColor": [
   "#000000"
  ],
  "gap": 5,
  "selectedItemBackgroundColor": [],
  "scrollBarWidth": 7,
  "scrollBarMargin": 4,
  "horizontalAlign": "left",
  "selectedItemThumbnailShadowVerticalLength": 0,
  "itemHorizontalAlign": "center",
  "itemMode": "normal",
  "playList": "this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist",
  "minHeight": 100,
  "layout": "vertical",
  "selectedItemLabelFontStyle": "italic",
  "itemLabelFontColor": "#FFFFFF",
  "rollOverItemLabelFontColor": "#FFFFFF",
  "backgroundColorRatios": [
   0
  ],
  "paddingBottom": 5,
  "rollOverItemLabelFontWeight": "bold",
  "paddingTop": 5,
  "itemThumbnailScaleMode": "fit_outside",
  "selectedItemLabelFontColor": "#FFFFFF",
  "itemThumbnailOpacity": 1,
  "itemPaddingBottom": 3,
  "selectedItemLabelTextDecoration": "underline",
  "minWidth": 90,
  "itemLabelFontWeight": "normal",
  "itemThumbnailBorderRadius": 25,
  "rollOverItemLabelTextDecoration": "underline",
  "backgroundColorDirection": "vertical",
  "scrollBarVisible": "rollOver",
  "scrollBarOpacity": 1,
  "scrollBarColor": "#52B7EF",
  "itemLabelTextDecoration": "none",
  "itemThumbnailShadow": false,
  "width": 105,
  "itemLabelFontStyle": "normal",
  "itemPaddingRight": 3,
  "itemThumbnailWidth": 75,
  "borderRadius": 3,
  "selectedItemThumbnailShadowBlurRadius": 10,
  "itemLabelHorizontalAlign": "center",
  "itemPaddingLeft": 3,
  "selectedItemLabelFontSize": 12,
  "borderSize": 0,
  "itemBorderRadius": 0,
  "selectedItemThumbnailShadow": true,
  "selectedItemThumbnailShadowOpacity": 0.73,
  "class": "ThumbnailList",
  "selectedItemBorderSize": 0,
  "itemPaddingTop": 3,
  "selectedItemBorderRadius": 0,
  "top": "15%",
  "itemVerticalAlign": "middle",
  "itemBackgroundOpacity": 0,
  "bottom": "15%",
  "id": "ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472",
  "selectedItemBackgroundColorRatios": [],
  "itemLabelGap": 9,
  "selectedItemLabelFontWeight": "bold",
  "itemBackgroundColorDirection": "vertical",
  "itemOpacity": 1,
  "itemBackgroundColor": [],
  "itemLabelFontSize": 12,
  "selectedItemBackgroundOpacity": 0,
  "itemLabelPosition": "bottom",
  "selectedItemThumbnailShadowHorizontalLength": 0,
  "backgroundOpacity": 0.25,
  "right": "1.5%",
  "shadow": false
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
  "contentOpaque": false,
  "minHeight": 1,
  "horizontalAlign": "left",
  "top": "0%",
  "layout": "absolute",
  "visible": false,
  "paddingBottom": 0,
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
  "borderSize": 0,
  "class": "IconButton",
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
  "contentOpaque": false,
  "minHeight": 1,
  "horizontalAlign": "left",
  "top": "0%",
  "layout": "absolute",
  "visible": false,
  "paddingBottom": 0,
  "backgroundColorRatios": [
   0,
   1
  ],
  "id": "Container_53347472_4288_F6E6_4196_D7457B47D2CF",
  "bottom": "0%",
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
    "borderSize": 0,
    "class": "IconButton",
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
  "verticalAlign": "middle",
  "paddingRight": 0,
  "mode": "push",
  "paddingLeft": 0,
  "iconURL": "skin/IconButton_69647BCC_64DC_413C_41D3_1B8669580D95.png",
  "height": 0,
  "maxWidth": 1,
  "width": 0,
  "transparencyActive": true,
  "borderRadius": 0,
  "borderSize": 0,
  "class": "IconButton",
  "click": "this.setComponentVisibility(this.IconButton_69647BCC_64DC_413C_41D3_1B8669580D95, false, 0, null, null, false); this.mainPlayList.set('selectedIndex', 1)",
  "minHeight": 1,
  "horizontalAlign": "center",
  "top": "2.04%",
  "cursor": "hand",
  "paddingBottom": 0,
  "id": "IconButton_69647BCC_64DC_413C_41D3_1B8669580D95",
  "maxHeight": 1,
  "paddingTop": 0,
  "left": "0.48%",
  "backgroundOpacity": 0,
  "minWidth": 1,
  "shadow": false
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
  "backgroundColorRatios": [
   0
  ],
  "id": "veilPopupPanorama",
  "bottom": 0,
  "paddingTop": 0,
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
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
  "backgroundColorRatios": [],
  "id": "zoomImagePopupPanorama",
  "bottom": 0,
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
  "paddingLeft": 5,
  "iconWidth": 20,
  "borderSize": 0,
  "class": "CloseButton",
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
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
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
 "paddingLeft": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "class": "Player",
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "buttonToggleMute": "this.IconButton_8105A313_8E22_BF0B_41E1_331C6035A930",
 "vrPolyfillScale": 0.5,
 "minHeight": 20,
 "horizontalAlign": "left",
 "layout": "absolute",
 "backgroundPreloadEnabled": true,
 "paddingBottom": 0,
 "scripts": {
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "unregisterKey": function(key){  delete window[key]; },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "existsKey": function(key){  return key in window; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio) delete audios[audio.get('id')]; } if(audio) audio.stop(); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "registerKey": function(key, value){  window[key] = value; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getKey": function(key){  return window[key]; },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); }
 },
 "id": "rootPlayer",
 "gap": 10,
 "paddingTop": 0,
 "start": "this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37], 'cardboardAvailable'); this.syncPlaylists([this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); this.playList_74F20195_64EC_412C_41D5_47B9E5999F56.set('selectedIndex', 0); var self = this; var autotriggerFunc = function(){ self.IconButton_69647BCC_64DC_413C_41D3_1B8669580D95.trigger('click') }; this.autotriggerAtStart(this.MainViewerPanoramaPlayer, autotriggerFunc); if(!this.get('fullscreenAvailable')) { [this.IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA].forEach(function(component) { component.set('visible', false); }) }",
 "minWidth": 20,
 "shadow": false,
 "buttonToggleFullscreen": "this.IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA",
 "scrollBarVisible": "rollOver"
})