TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "buttonPlay": {
   "verticalAlign": "middle",
   "minWidth": 25,
   "maxHeight": 70,
   "mode": "push",
   "minHeight": 25,
   "paddingRight": 0,
   "toolTipBackgroundColor": "#000000",
   "iconURL": "skin/IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED.png",
   "height": "100%",
   "class": "IconButton",
   "toolTip": "See Photos",
   "toolTipTextShadowOpacity": 0,
   "toolTipPaddingBottom": 4,
   "transparencyActive": true,
   "toolTipTextShadowColor": "#000000",
   "toolTipPaddingRight": 6,
   "width": "100%",
   "toolTipFontSize": 11,
   "borderRadius": 0,
   "toolTipShadowOpacity": 1,
   "toolTipOpacity": 0.7,
   "borderSize": 0,
   "rollOverIconURL": "skin/IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED_rollover.png",
   "toolTipPaddingLeft": 6,
   "toolTipBorderColor": "#767676",
   "shadow": false,
   "click": "this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, true, 0, this.effect_98AADBB0_96C5_F0C5_41B2_1C4D08E503DB, 'showEffect', false); this.playList_51EB770B_5E62_0A7C_41D3_A7A1B7A9C09E.set('selectedIndex', 0)",
   "toolTipFontStyle": "normal",
   "toolTipBorderRadius": 3,
   "toolTipBorderSize": 1,
   "cursor": "hand",
   "visible": false,
   "paddingBottom": 0,
   "toolTipTextShadowBlurRadius": 3,
   "id": "IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED",
   "paddingLeft": 0,
   "horizontalAlign": "center",
   "toolTipShadowHorizontalLength": 0,
   "toolTipFontWeight": "normal",
   "toolTipShadowSpread": 0,
   "paddingTop": 0,
   "toolTipShadowColor": "#333333",
   "toolTipShadowBlurRadius": 3,
   "toolTipPaddingTop": 4,
   "toolTipShadowVerticalLength": 0,
   "maxWidth": 70,
   "toolTipFontFamily": "Arial",
   "backgroundOpacity": 0,
   "toolTipFontColor": "#606060"
  },
  "id": "MainViewerVideoPlayer",
  "viewerArea": "this.MainViewer",
  "displayPlaybackBar": true,
  "class": "VideoPlayer",
  "buttonStop": [
   {
    "verticalAlign": "middle",
    "minWidth": 50,
    "maxHeight": 50,
    "mode": "push",
    "minHeight": 50,
    "paddingRight": 0,
    "iconURL": "skin/IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4.png",
    "height": "5.48%",
    "class": "IconButton",
    "width": "3.03%",
    "transparencyActive": true,
    "borderRadius": 0,
    "borderSize": 0,
    "rollOverIconURL": "skin/IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4_rollover.png",
    "shadow": false,
    "click": "this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, false, 0, this.effect_9B0AF4E2_96C4_F045_41D3_0E00FEE03A15, 'hideEffect', false)",
    "top": "2%",
    "cursor": "hand",
    "paddingBottom": 0,
    "id": "IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4",
    "paddingLeft": 0,
    "horizontalAlign": "center",
    "paddingTop": 0,
    "maxWidth": 50,
    "right": "2%",
    "backgroundOpacity": 0
   },
   "this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB"
  ]
 },
 {
  "buttonPlay": "this.IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED",
  "buttonPrevious": {
   "verticalAlign": "middle",
   "minWidth": 70,
   "maxHeight": 70,
   "mode": "push",
   "minHeight": 70,
   "paddingRight": 0,
   "iconURL": "skin/IconButton_9FEA51EA_96CC_905A_41D3_F42DB0CD0A74.png",
   "class": "IconButton",
   "width": "4.24%",
   "transparencyActive": true,
   "borderRadius": 0,
   "borderSize": 0,
   "rollOverIconURL": "skin/IconButton_9FEA51EA_96CC_905A_41D3_F42DB0CD0A74_rollover.png",
   "shadow": false,
   "top": "40%",
   "cursor": "hand",
   "paddingBottom": 0,
   "bottom": "40%",
   "id": "IconButton_9FEA51EA_96CC_905A_41D3_F42DB0CD0A74",
   "paddingLeft": 0,
   "horizontalAlign": "center",
   "paddingTop": 0,
   "left": "1%",
   "backgroundOpacity": 0,
   "maxWidth": 70
  },
  "id": "ViewerAreaLabeled_9FD7235A_96CD_9045_41D9_23A3BCBDB1C6PhotoAlbumPlayer",
  "viewerArea": {
   "minWidth": 1,
   "progressBarBackgroundColorDirection": "vertical",
   "progressBackgroundColor": [
    "#FFFFFF"
   ],
   "paddingRight": 0,
   "toolTipBackgroundColor": "#000000",
   "progressBorderRadius": 0,
   "class": "ViewerArea",
   "toolTipPaddingBottom": 4,
   "progressBackgroundOpacity": 1,
   "progressBarOpacity": 1,
   "playbackBarBorderColor": "#FFFFFF",
   "playbackBarBackgroundColor": [
    "#FFFFFF"
   ],
   "progressRight": 0,
   "toolTipShadowOpacity": 1,
   "toolTipOpacity": 0.7,
   "playbackBarHeight": 10,
   "shadow": false,
   "playbackBarHeadWidth": 6,
   "toolTipBorderSize": 1,
   "playbackBarProgressBackgroundColorDirection": "vertical",
   "toolTipFontStyle": "normal",
   "playbackBarBackgroundColorDirection": "vertical",
   "playbackBarProgressBorderSize": 0,
   "progressBottom": 2,
   "paddingBottom": 0,
   "playbackBarHeadBackgroundColorDirection": "vertical",
   "playbackBarRight": 0,
   "progressBarBorderRadius": 0,
   "progressBorderSize": 0,
   "progressBarBorderSize": 0,
   "playbackBarProgressBorderRadius": 0,
   "playbackBarHeadShadowHorizontalLength": 0,
   "paddingTop": 0,
   "transitionMode": "blending",
   "playbackBarHeadShadowVerticalLength": 0,
   "toolTipShadowSpread": 0,
   "toolTipShadowColor": "#333333",
   "toolTipShadowBlurRadius": 3,
   "toolTipPaddingTop": 4,
   "toolTipShadowVerticalLength": 0,
   "playbackBarBorderRadius": 0,
   "toolTipFontColor": "#606060",
   "playbackBarProgressBorderColor": "#000000",
   "minHeight": 1,
   "width": "100%",
   "playbackBarHeadBorderRadius": 0,
   "toolTipPaddingRight": 6,
   "toolTipTextShadowOpacity": 0,
   "height": "100%",
   "toolTipTextShadowColor": "#000000",
   "toolTipFontSize": 11,
   "borderRadius": 0,
   "progressLeft": 0,
   "playbackBarHeadShadowBlurRadius": 3,
   "playbackBarHeadBorderColor": "#000000",
   "progressBackgroundColorRatios": [
    0
   ],
   "playbackBarProgressOpacity": 1,
   "playbackBarLeft": 0,
   "borderSize": 0,
   "toolTipPaddingLeft": 6,
   "toolTipBorderColor": "#767676",
   "playbackBarProgressBackgroundColorRatios": [
    0
   ],
   "playbackBarHeadHeight": 15,
   "playbackBarBackgroundOpacity": 1,
   "playbackBarHeadBackgroundColor": [
    "#111111",
    "#666666"
   ],
   "playbackBarBorderSize": 0,
   "toolTipBorderRadius": 3,
   "playbackBarHeadShadowOpacity": 0.7,
   "top": "0%",
   "playbackBarHeadBackgroundColorRatios": [
    0,
    1
   ],
   "toolTipTextShadowBlurRadius": 3,
   "playbackBarHeadShadowColor": "#000000",
   "progressBarBorderColor": "#000000",
   "id": "ViewerAreaLabeled_9FD7235A_96CD_9045_41D9_23A3BCBDB1C6",
   "playbackBarHeadBorderSize": 0,
   "paddingLeft": 0,
   "toolTipShadowHorizontalLength": 0,
   "playbackBarOpacity": 1,
   "toolTipFontWeight": "normal",
   "progressBackgroundColorDirection": "vertical",
   "playbackBarHeadOpacity": 1,
   "progressBarBackgroundColorRatios": [
    0
   ],
   "progressHeight": 10,
   "left": "0%",
   "playbackBarHeadShadow": true,
   "progressBorderColor": "#000000",
   "playbackBarBottom": 0,
   "playbackBarProgressBackgroundColor": [
    "#3399FF"
   ],
   "progressBarBackgroundColor": [
    "#3399FF"
   ],
   "toolTipFontFamily": "Arial",
   "progressOpacity": 1
  },
  "buttonNext": {
   "verticalAlign": "middle",
   "minWidth": 70,
   "maxHeight": 70,
   "mode": "push",
   "minHeight": 70,
   "paddingRight": 0,
   "iconURL": "skin/IconButton_9FB9BD3F_96C5_703B_41D7_65AEE6E85A96.png",
   "class": "IconButton",
   "width": "4.24%",
   "transparencyActive": true,
   "borderRadius": 0,
   "borderSize": 0,
   "rollOverIconURL": "skin/IconButton_9FB9BD3F_96C5_703B_41D7_65AEE6E85A96_rollover.png",
   "shadow": false,
   "top": "40%",
   "cursor": "hand",
   "paddingBottom": 0,
   "bottom": "40%",
   "id": "IconButton_9FB9BD3F_96C5_703B_41D7_65AEE6E85A96",
   "paddingLeft": 0,
   "horizontalAlign": "center",
   "paddingTop": 0,
   "backgroundOpacity": 0,
   "maxWidth": 70,
   "right": "1%"
  },
  "class": "PhotoAlbumPlayer",
  "buttonStop": [
   "this.IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4",
   "this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB"
  ]
 },
 {
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_9145F5B4_9D6A_310F_41B6_278704EC634D_t.jpg",
    "overlays": [
     {
      "enabledInCardboard": true,
      "id": "overlay_9145D5B5_9D6A_3109_41DC_A9B09A3D3544",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 5.02,
        "yaw": 140.51,
        "image": {
         "levels": [
          {
           "height": 35,
           "class": "ImageResourceLevel",
           "width": 35,
           "url": "media/panorama_9145F5B4_9D6A_310F_41B6_278704EC634D_0_HS_0_0_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 5.38
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true,
        "toolTip": "ENTRANCE",
        "click": "this.startPanoramaWithCamera(this.panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E, this.camera_552A6ED5_5BF2_F2BA_41D6_D4FD03CB3A2E); this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "items": [
       {
        "yaw": 140.51,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 5.02,
        "image": {
         "levels": [
          {
           "height": 70,
           "class": "ImageResourceLevel",
           "width": 70,
           "url": "media/panorama_9145F5B4_9D6A_310F_41B6_278704EC634D_0_HS_0_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 5.38
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "id": "overlay_914595B5_9D6A_3109_41E0_AB5366CDC9BD",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 7.16,
        "yaw": 140.49,
        "image": {
         "levels": [
          {
           "height": 50,
           "class": "ImageResourceLevel",
           "width": 50,
           "url": "media/panorama_9145F5B4_9D6A_310F_41B6_278704EC634D_0_HS_5_0_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 5.92
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true,
        "toolTip": "ENTRANCE",
        "click": "this.startPanoramaWithCamera(this.panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2, this.camera_53078797_5E62_0993_41D2_D7ABB48FFFB8); this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "items": [
       {
        "yaw": 140.49,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 7.16,
        "image": {
         "levels": [
          {
           "height": 100,
           "class": "ImageResourceLevel",
           "width": 100,
           "url": "media/panorama_9145F5B4_9D6A_310F_41B6_278704EC634D_0_HS_5_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 5.92
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "id": "overlay_914545B5_9D6A_3109_41DB_2D094D583EE1",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 0,
        "yaw": -171.36,
        "image": {
         "levels": [
          {
           "height": 1,
           "class": "ImageResourceLevel",
           "width": 1,
           "url": "media/panorama_9145F5B4_9D6A_310F_41B6_278704EC634D_0_HS_1_0_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 85.74
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA, this.camera_53E487B3_5E62_0993_41C2_5A9A5F640A4A); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 5); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 8)"
       }
      ],
      "items": [
       {
        "yaw": -171.36,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 0,
        "image": {
         "levels": [
          {
           "height": 1,
           "class": "ImageResourceLevel",
           "width": 1,
           "url": "media/panorama_9145F5B4_9D6A_310F_41B6_278704EC634D_0_HS_1_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 85.74
       }
      ]
     }
    ],
    "sphere": {
     "levels": [
      {
       "height": 2500,
       "class": "ImageResourceLevel",
       "width": 5000,
       "url": "media/panorama_9145F5B4_9D6A_310F_41B6_278704EC634D_hq.jpeg"
      },
      {
       "height": 1608,
       "class": "ImageResourceLevel",
       "width": 3217,
       "url": "media/panorama_9145F5B4_9D6A_310F_41B6_278704EC634D.jpeg"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "audios": [
   {
    "autoplay": true,
    "maximumAngle": 144.95,
    "id": "audio_58C48535_534B_1088_419D_65D26EA3E6EE",
    "audio": {
     "mp3Url": "media/audio_58C48535_534B_1088_419D_65D26EA3E6EE.mp3",
     "oggUrl": "media/audio_58C48535_534B_1088_419D_65D26EA3E6EE.ogg",
     "class": "AudioResource"
    },
    "class": "DirectionalPanoramaAudio",
    "yaw": -90.69,
    "pitch": -2.01
   },
   {
    "autoplay": true,
    "maximumAngle": 137.04,
    "id": "audio_51D70E9C_5DEA_B3F4_41C9_7C42C4A1D34D",
    "loop": true,
    "audio": {
     "mp3Url": "media/audio_51D70E9C_5DEA_B3F4_41C9_7C42C4A1D34D.mp3",
     "oggUrl": "media/audio_51D70E9C_5DEA_B3F4_41C9_7C42C4A1D34D.ogg",
     "class": "AudioResource"
    },
    "class": "DirectionalPanoramaAudio",
    "yaw": 98.23,
    "pitch": -0.75
   }
  ],
  "partial": false,
  "pitch": 0,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_9145F5B4_9D6A_310F_41B6_278704EC634D_t.jpg",
  "id": "panorama_9145F5B4_9D6A_310F_41B6_278704EC634D",
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
     "class": "Map",
     "image": {
      "levels": [
       {
        "height": 864,
        "class": "ImageResourceLevel",
        "width": 1468,
        "url": "media/map_4E02A832_427B_EE04_41CC_8E1CEC03E8D3.jpeg"
       },
       {
        "height": 432,
        "class": "ImageResourceLevel",
        "width": 734,
        "url": "media/map_4E02A832_427B_EE04_41CC_8E1CEC03E8D3_lq.jpeg",
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
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 50,
           "class": "ImageResourceLevel",
           "width": 50,
           "url": "media/map_4E02A832_427B_EE04_41CC_8E1CEC03E8D3_HS_0_map.gif"
          }
         ],
         "class": "ImageResource"
        }
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": false,
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 0)"
        }
       ],
       "image": {
        "x": 253.34,
        "y": 365.62,
        "width": 100,
        "height": 100,
        "class": "HotspotMapOverlayImage",
        "image": {
         "levels": [
          {
           "height": 100,
           "class": "ImageResourceLevel",
           "width": 100,
           "url": "media/map_4E02A832_427B_EE04_41CC_8E1CEC03E8D3_HS_0.png"
          }
         ],
         "class": "ImageResource"
        }
       },
       "useHandCursor": true
      }
     ],
     "fieldOfViewOverlayRadiusScale": 0.09,
     "scaleMode": "fit_inside",
     "maximumZoomFactor": 1.2,
     "initialZoomFactor": 1
    }
   }
  ],
  "hfovMin": 100,
  "label": "STREETVIEW",
  "hfovMax": 120,
  "hfov": 360,
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "panorama": {
     "hfovMax": 120,
     "frames": [
      {
       "class": "SphericPanoramaFrame",
       "thumbnailUrl": "media/panorama_916902A1_9D6A_7309_41D0_0B14DE574844_t.jpg",
       "overlays": [
        {
         "enabledInCardboard": true,
         "id": "overlay_916912A2_9D6A_730B_41B8_3A8427B71ECF",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 5.96,
           "yaw": 42.05,
           "image": {
            "levels": [
             {
              "height": 41,
              "class": "ImageResourceLevel",
              "width": 41,
              "url": "media/panorama_916902A1_9D6A_7309_41D0_0B14DE574844_0_HS_0_0_0_map.gif"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -6.87
          }
         ],
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "displayTooltipInTouchScreens": true,
           "toolTip": "SINGLE BEDROOM",
           "click": "this.startPanoramaWithCamera(this.panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC, this.camera_55BE4E50_5BF2_F5B9_41B2_A0DBD967D7CD); this.mainPlayList.set('selectedIndex', 4)"
          }
         ],
         "items": [
          {
           "yaw": 42.05,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 5.96,
           "image": {
            "levels": [
             {
              "height": 83,
              "class": "ImageResourceLevel",
              "width": 83,
              "url": "media/panorama_916902A1_9D6A_7309_41D0_0B14DE574844_0_HS_0_0.png"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -6.87
          }
         ]
        },
        {
         "enabledInCardboard": true,
         "id": "overlay_916922A2_9D6A_730B_41DE_1F49C2124306",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 5.41,
           "yaw": -176.79,
           "image": {
            "levels": [
             {
              "height": 41,
              "class": "ImageResourceLevel",
              "width": 41,
              "url": "media/panorama_916902A1_9D6A_7309_41D0_0B14DE574844_0_HS_5_0_0_map.gif"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -25.6
          }
         ],
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "displayTooltipInTouchScreens": true,
           "toolTip": "POOL",
           "click": "this.startPanoramaWithCamera(this.panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D, this.camera_5577FE77_5BF2_F267_41AE_B186A0A61737); this.mainPlayList.set('selectedIndex', 2)"
          }
         ],
         "items": [
          {
           "yaw": -176.79,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 5.41,
           "image": {
            "levels": [
             {
              "height": 83,
              "class": "ImageResourceLevel",
              "width": 83,
              "url": "media/panorama_916902A1_9D6A_7309_41D0_0B14DE574844_0_HS_5_0.png"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -25.6
          }
         ]
        },
        {
         "enabledInCardboard": true,
         "id": "overlay_9169D2A2_9D6A_730B_41B9_993A35E3613B",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 0,
           "yaw": -171.96,
           "image": {
            "levels": [
             {
              "height": 1,
              "class": "ImageResourceLevel",
              "width": 1,
              "url": "media/panorama_916902A1_9D6A_7309_41D0_0B14DE574844_0_HS_1_0_0_map.gif"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": 82.97
          }
         ],
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA, this.camera_538E680A_5E62_067C_41CB_C901C2ED0180); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 8); this.mainPlayList.set('selectedIndex', 5)"
          }
         ],
         "items": [
          {
           "yaw": -171.96,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 0,
           "image": {
            "levels": [
             {
              "height": 1,
              "class": "ImageResourceLevel",
              "width": 1,
              "url": "media/panorama_916902A1_9D6A_7309_41D0_0B14DE574844_0_HS_1_0.png"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": 82.97
          }
         ]
        },
        {
         "enabledInCardboard": true,
         "id": "overlay_916992A2_9D6A_730B_41D1_B90F49E44C03",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 8.59,
           "yaw": 42.02,
           "image": {
            "levels": [
             {
              "height": 59,
              "class": "ImageResourceLevel",
              "width": 59,
              "url": "media/panorama_916902A1_9D6A_7309_41D0_0B14DE574844_0_HS_6_0_0_map.gif"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -6.28
          }
         ],
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "displayTooltipInTouchScreens": true,
           "toolTip": "SINGLE BEDROOM",
           "click": "this.startPanoramaWithCamera(this.panorama_916227CC_9D6A_311F_41E3_34FF7141124F, this.camera_539AF7F4_5E62_0995_41C0_B8CBBA512BFC); this.mainPlayList.set('selectedIndex', 4)"
          }
         ],
         "items": [
          {
           "yaw": 42.02,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 8.59,
           "image": {
            "levels": [
             {
              "height": 119,
              "class": "ImageResourceLevel",
              "width": 119,
              "url": "media/panorama_916902A1_9D6A_7309_41D0_0B14DE574844_0_HS_6_0.png"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -6.28
          }
         ]
        },
        {
         "enabledInCardboard": true,
         "id": "overlay_9169B2A2_9D6A_730B_41D4_EE8149DC4E93",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 7.83,
           "yaw": -176.8,
           "image": {
            "levels": [
             {
              "height": 59,
              "class": "ImageResourceLevel",
              "width": 59,
              "url": "media/panorama_916902A1_9D6A_7309_41D0_0B14DE574844_0_HS_7_0_0_map.gif"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -24.98
          }
         ],
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "displayTooltipInTouchScreens": true,
           "toolTip": "POOL",
           "click": "this.startPanoramaWithCamera(this.panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA, this.camera_53BA67D7_5E62_0993_41CB_0A39425A12C7); this.mainPlayList.set('selectedIndex', 2)"
          }
         ],
         "items": [
          {
           "yaw": -176.8,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 7.83,
           "image": {
            "levels": [
             {
              "height": 119,
              "class": "ImageResourceLevel",
              "width": 119,
              "url": "media/panorama_916902A1_9D6A_7309_41D0_0B14DE574844_0_HS_7_0.png"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -24.98
          }
         ]
        }
       ],
       "sphere": {
        "levels": [
         {
          "height": 2500,
          "class": "ImageResourceLevel",
          "width": 5000,
          "url": "media/panorama_916902A1_9D6A_7309_41D0_0B14DE574844_hq.jpeg"
         },
         {
          "height": 1608,
          "class": "ImageResourceLevel",
          "width": 3217,
          "url": "media/panorama_916902A1_9D6A_7309_41D0_0B14DE574844.jpeg"
         }
        ],
        "class": "ImageResource"
       }
      }
     ],
     "audios": [
      {
       "autoplay": true,
       "maximumAngle": 360,
       "id": "audio_5F3A7686_5349_3189_41B9_03AD1E92C6EA",
       "loop": true,
       "audio": {
        "mp3Url": "media/audio_5F3A7686_5349_3189_41B9_03AD1E92C6EA.mp3",
        "oggUrl": "media/audio_5F3A7686_5349_3189_41B9_03AD1E92C6EA.ogg",
        "class": "AudioResource"
       },
       "class": "DirectionalPanoramaAudio",
       "yaw": 0,
       "pitch": 0
      },
      {
       "autoplay": true,
       "maximumAngle": 360,
       "id": "audio_508C163F_5DEF_5335_41CB_6F4DF04ED378",
       "loop": true,
       "audio": {
        "mp3Url": "media/audio_508C163F_5DEF_5335_41CB_6F4DF04ED378.mp3",
        "oggUrl": "media/audio_508C163F_5DEF_5335_41CB_6F4DF04ED378.ogg",
        "class": "AudioResource"
       },
       "class": "DirectionalPanoramaAudio",
       "yaw": 0,
       "pitch": 0
      }
     ],
     "partial": false,
     "pitch": 0,
     "class": "Panorama",
     "thumbnailUrl": "media/panorama_916902A1_9D6A_7309_41D0_0B14DE574844_t.jpg",
     "id": "panorama_916902A1_9D6A_7309_41D0_0B14DE574844",
     "hfovMin": 100,
     "label": "LIVINGROOM",
     "hfov": 360,
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_9145F5B4_9D6A_310F_41B6_278704EC634D",
       "yaw": -171.96,
       "backwardYaw": -171.36,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "hfovMax": 120,
        "frames": [
         {
          "class": "SphericPanoramaFrame",
          "thumbnailUrl": "media/panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069_t.jpg",
          "overlays": [
           {
            "enabledInCardboard": true,
            "id": "overlay_9167A333_9D6A_1109_41CA_E1D737A39B12",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 6.32,
              "yaw": -174.37,
              "image": {
               "levels": [
                {
                 "height": 60,
                 "class": "ImageResourceLevel",
                 "width": 60,
                 "url": "media/panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069_0_HS_0_0_0_map.gif"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -43
             }
            ],
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "displayTooltipInTouchScreens": true,
              "toolTip": "MASTER BEDROOM",
              "click": "this.startPanoramaWithCamera(this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF, this.camera_55CB7E16_5BF2_F5B9_4191_4ABD27800AF8); this.mainPlayList.set('selectedIndex', 5)"
             }
            ],
            "items": [
             {
              "yaw": -174.37,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 6.32,
              "image": {
               "levels": [
                {
                 "height": 120,
                 "class": "ImageResourceLevel",
                 "width": 120,
                 "url": "media/panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069_0_HS_0_0.png"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -43
             }
            ]
           },
           {
            "enabledInCardboard": true,
            "id": "overlay_9167D333_9D6A_1109_41C2_C53B15CF6B9A",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 0,
              "yaw": -170.58,
              "image": {
               "levels": [
                {
                 "height": 1,
                 "class": "ImageResourceLevel",
                 "width": 1,
                 "url": "media/panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069_0_HS_1_0_0_map.gif"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": 85.29
             }
            ],
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA, this.camera_501BF85E_5E62_0695_41D4_BAC59CD76C8E); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 8); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 7)"
             }
            ],
            "items": [
             {
              "yaw": -170.58,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 0,
              "image": {
               "levels": [
                {
                 "height": 1,
                 "class": "ImageResourceLevel",
                 "width": 1,
                 "url": "media/panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069_0_HS_1_0.png"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": 85.29
             }
            ]
           },
           {
            "enabledInCardboard": true,
            "id": "overlay_9167F339_9D6A_1179_41DF_24F351FACEF4",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 9.35,
              "yaw": -174.39,
              "image": {
               "levels": [
                {
                 "height": 87,
                 "class": "ImageResourceLevel",
                 "width": 87,
                 "url": "media/panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069_0_HS_6_0_0_map.gif"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -42.06
             }
            ],
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "displayTooltipInTouchScreens": true,
              "toolTip": "MASTER BEDROOM",
              "click": "this.startPanoramaWithCamera(this.panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044, this.camera_50575837_5E62_0693_41D4_1725EA3163D9); this.mainPlayList.set('selectedIndex', 5)"
             }
            ],
            "items": [
             {
              "yaw": -174.39,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 9.35,
              "image": {
               "levels": [
                {
                 "height": 174,
                 "class": "ImageResourceLevel",
                 "width": 174,
                 "url": "media/panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069_0_HS_6_0.png"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -42.06
             }
            ]
           }
          ],
          "sphere": {
           "levels": [
            {
             "height": 2500,
             "class": "ImageResourceLevel",
             "width": 5000,
             "url": "media/panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069_hq.jpeg"
            },
            {
             "height": 1608,
             "class": "ImageResourceLevel",
             "width": 3217,
             "url": "media/panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069.jpeg"
            }
           ],
           "class": "ImageResource"
          }
         }
        ],
        "audios": [
         {
          "autoplay": true,
          "maximumAngle": 360,
          "id": "audio_5FA8081E_5349_30B9_41D0_06F2A3501C10",
          "loop": true,
          "audio": {
           "mp3Url": "media/audio_5FA8081E_5349_30B9_41D0_06F2A3501C10.mp3",
           "oggUrl": "media/audio_5FA8081E_5349_30B9_41D0_06F2A3501C10.ogg",
           "class": "AudioResource"
          },
          "class": "DirectionalPanoramaAudio",
          "yaw": 0,
          "pitch": 0
         },
         {
          "autoplay": true,
          "maximumAngle": 360,
          "id": "audio_502EF191_5DEE_F1CC_41D5_35D2DA805B06",
          "loop": true,
          "audio": {
           "mp3Url": "media/audio_502EF191_5DEE_F1CC_41D5_35D2DA805B06.mp3",
           "oggUrl": "media/audio_502EF191_5DEE_F1CC_41D5_35D2DA805B06.ogg",
           "class": "AudioResource"
          },
          "class": "DirectionalPanoramaAudio",
          "yaw": 0,
          "pitch": 0
         }
        ],
        "partial": false,
        "pitch": 0,
        "class": "Panorama",
        "thumbnailUrl": "media/panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069_t.jpg",
        "id": "panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069",
        "hfovMin": 100,
        "label": "BALCONY",
        "hfov": 360,
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_9145F5B4_9D6A_310F_41B6_278704EC634D",
          "yaw": -170.58,
          "backwardYaw": -171.36,
          "distance": 1
         },
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_916902A1_9D6A_7309_41D0_0B14DE574844",
          "yaw": -170.58,
          "backwardYaw": -171.96,
          "distance": 1
         },
         {
          "class": "AdjacentPanorama",
          "panorama": {
           "hfovMax": 120,
           "frames": [
            {
             "class": "SphericPanoramaFrame",
             "thumbnailUrl": "media/panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28_t.jpg",
             "overlays": [
              {
               "enabledInCardboard": true,
               "id": "overlay_9164399E_9D6A_313B_41D8_325A071444CD",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 6.58,
                 "yaw": 161.77,
                 "image": {
                  "levels": [
                   {
                    "height": 49,
                    "class": "ImageResourceLevel",
                    "width": 49,
                    "url": "media/panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28_0_HS_2_0_0_map.gif"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -21.08
                }
               ],
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "rollOverDisplay": false,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "displayTooltipInTouchScreens": true,
                 "toolTip": "MASTER BEDROOM",
                 "click": "this.startPanoramaWithCamera(this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF, this.camera_57262CFF_5BF2_F667_41D4_80634CF1C7DB); this.mainPlayList.set('selectedIndex', 5)"
                }
               ],
               "items": [
                {
                 "yaw": 161.77,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 6.58,
                 "image": {
                  "levels": [
                   {
                    "height": 98,
                    "class": "ImageResourceLevel",
                    "width": 98,
                    "url": "media/panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28_0_HS_2_0.png"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -21.08
                }
               ]
              },
              {
               "enabledInCardboard": true,
               "id": "overlay_9164699E_9D6A_313B_41E1_AD85006D71DF",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 0,
                 "yaw": -162.92,
                 "image": {
                  "levels": [
                   {
                    "height": 1,
                    "class": "ImageResourceLevel",
                    "width": 1,
                    "url": "media/panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28_0_HS_1_0_0_map.gif"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": 80.2
                }
               ],
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "rollOverDisplay": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA, this.camera_50A258E8_5E62_07BC_41CA_E3BDA1415730); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 8)"
                }
               ],
               "items": [
                {
                 "yaw": -162.92,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 0,
                 "image": {
                  "levels": [
                   {
                    "height": 1,
                    "class": "ImageResourceLevel",
                    "width": 1,
                    "url": "media/panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28_0_HS_1_0.png"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": 80.2
                }
               ]
              },
              {
               "enabledInCardboard": true,
               "id": "overlay_9164499E_9D6A_313B_41DE_815940631FC8",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 9.65,
                 "yaw": 161.78,
                 "image": {
                  "levels": [
                   {
                    "height": 71,
                    "class": "ImageResourceLevel",
                    "width": 71,
                    "url": "media/panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28_0_HS_3_0_0_map.gif"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -20.35
                }
               ],
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "rollOverDisplay": false,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "displayTooltipInTouchScreens": true,
                 "toolTip": "MASTER BEDROOM",
                 "click": "this.startPanoramaWithCamera(this.panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044, this.camera_50DD1897_5E62_0794_41D2_838FA788B603); this.mainPlayList.set('selectedIndex', 5)"
                }
               ],
               "items": [
                {
                 "yaw": 161.78,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 9.65,
                 "image": {
                  "levels": [
                   {
                    "height": 143,
                    "class": "ImageResourceLevel",
                    "width": 143,
                    "url": "media/panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28_0_HS_3_0.png"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -20.35
                }
               ]
              }
             ],
             "sphere": {
              "levels": [
               {
                "height": 2500,
                "class": "ImageResourceLevel",
                "width": 5000,
                "url": "media/panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28_hq.jpeg"
               },
               {
                "height": 1608,
                "class": "ImageResourceLevel",
                "width": 3217,
                "url": "media/panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28.jpeg"
               }
              ],
              "class": "ImageResource"
             }
            }
           ],
           "audios": [
            {
             "autoplay": true,
             "maximumAngle": 67.83,
             "id": "audio_5E6F6697_534F_3188_41D2_212D7D5C7CD4",
             "loop": true,
             "audio": {
              "mp3Url": "media/audio_5E6F6697_534F_3188_41D2_212D7D5C7CD4.mp3",
              "oggUrl": "media/audio_5E6F6697_534F_3188_41D2_212D7D5C7CD4.ogg",
              "class": "AudioResource"
             },
             "class": "DirectionalPanoramaAudio",
             "yaw": 41.83,
             "pitch": 9.55
            },
            {
             "autoplay": true,
             "maximumAngle": 67.2,
             "id": "audio_53E0760B_5DE9_52DC_41AD_96CE4D26DD8B",
             "loop": true,
             "audio": {
              "mp3Url": "media/audio_53E0760B_5DE9_52DC_41AD_96CE4D26DD8B.mp3",
              "oggUrl": "media/audio_53E0760B_5DE9_52DC_41AD_96CE4D26DD8B.ogg",
              "class": "AudioResource"
             },
             "class": "DirectionalPanoramaAudio",
             "yaw": -88.43,
             "pitch": 5.78
            }
           ],
           "partial": false,
           "pitch": 0,
           "class": "Panorama",
           "thumbnailUrl": "media/panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28_t.jpg",
           "id": "panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28",
           "hfovMin": 100,
           "label": "TOILET",
           "hfov": 360,
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_9145F5B4_9D6A_310F_41B6_278704EC634D",
             "yaw": -162.92,
             "backwardYaw": -171.36,
             "distance": 1
            },
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_916902A1_9D6A_7309_41D0_0B14DE574844",
             "yaw": -162.92,
             "backwardYaw": -171.96,
             "distance": 1
            },
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069",
             "yaw": -162.92,
             "backwardYaw": -170.58,
             "distance": 1
            },
            {
             "class": "AdjacentPanorama",
             "panorama": {
              "hfovMax": 120,
              "frames": [
               {
                "class": "SphericPanoramaFrame",
                "thumbnailUrl": "media/panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA_t.jpg",
                "overlays": [
                 {
                  "enabledInCardboard": true,
                  "id": "overlay_96931415_9D6A_370E_41C9_9E915A7267A4",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 6.33,
                    "yaw": 12.08,
                    "image": {
                     "levels": [
                      {
                       "height": 52,
                       "class": "ImageResourceLevel",
                       "width": 52,
                       "url": "media/panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA_0_HS_0_0_0_map.gif"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -33.14
                   }
                  ],
                  "useHandCursor": true,
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "displayTooltipInTouchScreens": true,
                    "toolTip": "LIVING ROOM",
                    "click": "this.startPanoramaWithCamera(this.panorama_47B53902_572E_CEDF_41CC_C256D31A5443, this.camera_566FDDCF_5BF2_F6A7_41C3_D60F04E20C30); this.mainPlayList.set('selectedIndex', 3)"
                   }
                  ],
                  "items": [
                   {
                    "yaw": 12.08,
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 6.33,
                    "image": {
                     "levels": [
                      {
                       "height": 105,
                       "class": "ImageResourceLevel",
                       "width": 105,
                       "url": "media/panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA_0_HS_0_0.png"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -33.14
                   }
                  ]
                 },
                 {
                  "enabledInCardboard": true,
                  "id": "overlay_96936415_9D6A_370E_41DA_61A322290279",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 5.99,
                    "yaw": -97.88,
                    "image": {
                     "levels": [
                      {
                       "height": 43,
                       "class": "ImageResourceLevel",
                       "width": 43,
                       "url": "media/panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA_0_HS_6_0_0_map.gif"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -16.95
                   }
                  ],
                  "useHandCursor": true,
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "displayTooltipInTouchScreens": true,
                    "toolTip": "ENTRANCE",
                    "click": "this.startPanoramaWithCamera(this.panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E, this.camera_565ACDA7_5BF2_F6E7_41BA_8BE7CEB9351B); this.mainPlayList.set('selectedIndex', 1)"
                   }
                  ],
                  "items": [
                   {
                    "yaw": -97.88,
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 5.99,
                    "image": {
                     "levels": [
                      {
                       "height": 86,
                       "class": "ImageResourceLevel",
                       "width": 86,
                       "url": "media/panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA_0_HS_6_0.png"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -16.95
                   }
                  ]
                 },
                 {
                  "enabledInCardboard": true,
                  "id": "overlay_96934415_9D6A_370E_41E0_14989CE3B134",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 0,
                    "yaw": -172.22,
                    "image": {
                     "levels": [
                      {
                       "height": 1,
                       "class": "ImageResourceLevel",
                       "width": 1,
                       "url": "media/panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA_0_HS_1_0_0_map.gif"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": 82.35
                   }
                  ],
                  "useHandCursor": true,
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": true,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA, this.camera_512E0957_5E62_0693_41D0_86FB21C7DC11); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 5); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 8); this.mainPlayList.set('selectedIndex', 6)"
                   }
                  ],
                  "items": [
                   {
                    "yaw": -172.22,
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 0,
                    "image": {
                     "levels": [
                      {
                       "height": 1,
                       "class": "ImageResourceLevel",
                       "width": 1,
                       "url": "media/panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA_0_HS_1_0.png"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": 82.35
                   }
                  ]
                 },
                 {
                  "enabledInCardboard": true,
                  "id": "overlay_96938415_9D6A_370E_41E2_76474A8FC68D",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 9.13,
                    "yaw": 12.06,
                    "image": {
                     "levels": [
                      {
                       "height": 75,
                       "class": "ImageResourceLevel",
                       "width": 75,
                       "url": "media/panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA_0_HS_7_0_0_map.gif"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -32.33
                   }
                  ],
                  "useHandCursor": true,
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "displayTooltipInTouchScreens": true,
                    "toolTip": "LIVING ROOM",
                    "click": "this.startPanoramaWithCamera(this.panorama_916902A1_9D6A_7309_41D0_0B14DE574844, this.camera_508EA910_5E62_066D_41D7_14DD39B915B4); this.mainPlayList.set('selectedIndex', 3)"
                   }
                  ],
                  "items": [
                   {
                    "yaw": 12.06,
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 9.13,
                    "image": {
                     "levels": [
                      {
                       "height": 150,
                       "class": "ImageResourceLevel",
                       "width": 150,
                       "url": "media/panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA_0_HS_7_0.png"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -32.33
                   }
                  ]
                 },
                 {
                  "enabledInCardboard": true,
                  "id": "overlay_9693C415_9D6A_3735_41D5_482009BAE28B",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 8.61,
                    "yaw": -97.22,
                    "image": {
                     "levels": [
                      {
                       "height": 62,
                       "class": "ImageResourceLevel",
                       "width": 62,
                       "url": "media/panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA_0_HS_8_0_0_map.gif"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -16.94
                   }
                  ],
                  "useHandCursor": true,
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "displayTooltipInTouchScreens": true,
                    "toolTip": "ENTRANCE",
                    "click": "this.startPanoramaWithCamera(this.panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2, this.camera_5154593A_5E62_069D_4192_27CD38497051); this.mainPlayList.set('selectedIndex', 1)"
                   }
                  ],
                  "items": [
                   {
                    "yaw": -97.22,
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 8.61,
                    "image": {
                     "levels": [
                      {
                       "height": 125,
                       "class": "ImageResourceLevel",
                       "width": 125,
                       "url": "media/panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA_0_HS_8_0.png"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -16.94
                   }
                  ]
                 }
                ],
                "sphere": {
                 "levels": [
                  {
                   "height": 2500,
                   "class": "ImageResourceLevel",
                   "width": 5000,
                   "url": "media/panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA_hq.jpeg"
                  },
                  {
                   "height": 1608,
                   "class": "ImageResourceLevel",
                   "width": 3217,
                   "url": "media/panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA.jpeg"
                  }
                 ],
                 "class": "ImageResource"
                }
               }
              ],
              "audios": [
               {
                "autoplay": true,
                "maximumAngle": 360,
                "id": "audio_5F11A888_534B_3198_41C1_CA34B7B483B7",
                "loop": true,
                "audio": {
                 "mp3Url": "media/audio_5F11A888_534B_3198_41C1_CA34B7B483B7.mp3",
                 "oggUrl": "media/audio_5F11A888_534B_3198_41C1_CA34B7B483B7.ogg",
                 "class": "AudioResource"
                },
                "class": "DirectionalPanoramaAudio",
                "yaw": 0,
                "pitch": 0
               },
               {
                "autoplay": true,
                "maximumAngle": 360,
                "id": "audio_5116AAD0_5DE9_534C_41D3_54A18E2E7244",
                "loop": true,
                "audio": {
                 "mp3Url": "media/audio_5116AAD0_5DE9_534C_41D3_54A18E2E7244.mp3",
                 "oggUrl": "media/audio_5116AAD0_5DE9_534C_41D3_54A18E2E7244.ogg",
                 "class": "AudioResource"
                },
                "class": "DirectionalPanoramaAudio",
                "yaw": 0,
                "pitch": 0
               }
              ],
              "partial": false,
              "pitch": 0,
              "class": "Panorama",
              "thumbnailUrl": "media/panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA_t.jpg",
              "id": "panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA",
              "hfovMin": 100,
              "label": "POOL",
              "hfov": 360,
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_9145F5B4_9D6A_310F_41B6_278704EC634D",
                "yaw": -172.22,
                "backwardYaw": -171.36,
                "distance": 1
               },
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_916902A1_9D6A_7309_41D0_0B14DE574844",
                "yaw": 12.06,
                "backwardYaw": -176.8,
                "distance": 1
               },
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069",
                "yaw": -172.22,
                "backwardYaw": -170.58,
                "distance": 1
               },
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28",
                "yaw": -172.22,
                "backwardYaw": -162.92,
                "distance": 1
               },
               {
                "class": "AdjacentPanorama",
                "panorama": {
                 "hfovMax": 120,
                 "frames": [
                  {
                   "class": "SphericPanoramaFrame",
                   "thumbnailUrl": "media/panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044_t.jpg",
                   "overlays": [
                    {
                     "enabledInCardboard": true,
                     "id": "overlay_916EDC9F_9D6A_1739_41B6_EC73A228B461",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 5.48,
                       "yaw": -178.25,
                       "image": {
                        "levels": [
                         {
                          "height": 49,
                          "class": "ImageResourceLevel",
                          "width": 49,
                          "url": "media/panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044_0_HS_0_0_0_map.gif"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -40.5
                      }
                     ],
                     "useHandCursor": true,
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "displayTooltipInTouchScreens": true,
                       "toolTip": "BALCONY",
                       "click": "this.startPanoramaWithCamera(this.panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C, this.camera_569B6D6C_5BF2_F669_41A7_8467FF9A6DAA); this.mainPlayList.set('selectedIndex', 6)"
                      }
                     ],
                     "items": [
                      {
                       "yaw": -178.25,
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 5.48,
                       "image": {
                        "levels": [
                         {
                          "height": 99,
                          "class": "ImageResourceLevel",
                          "width": 99,
                          "url": "media/panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044_0_HS_0_0.png"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -40.5
                      }
                     ]
                    },
                    {
                     "enabledInCardboard": true,
                     "id": "overlay_916ECC9F_9D6A_1739_41B3_0FCA7885269D",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 5.53,
                       "yaw": 83.07,
                       "image": {
                        "levels": [
                         {
                          "height": 41,
                          "class": "ImageResourceLevel",
                          "width": 41,
                          "url": "media/panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044_0_HS_2_0_0_map.gif"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -22.75
                      }
                     ],
                     "useHandCursor": true,
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "displayTooltipInTouchScreens": true,
                       "toolTip": "TOILET",
                       "click": "this.startPanoramaWithCamera(this.panorama_46009756_572D_4167_41C6_2B49BD1EF7CE, this.camera_56E74D59_5BF2_F7AA_41D0_B6C262499B65); this.mainPlayList.set('selectedIndex', 7)"
                      }
                     ],
                     "items": [
                      {
                       "yaw": 83.07,
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 5.53,
                       "image": {
                        "levels": [
                         {
                          "height": 83,
                          "class": "ImageResourceLevel",
                          "width": 83,
                          "url": "media/panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044_0_HS_2_0.png"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -22.75
                      }
                     ]
                    },
                    {
                     "enabledInCardboard": true,
                     "id": "overlay_916EAC9F_9D6A_1739_41DF_9C1F85F25C04",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 5.37,
                       "yaw": 34.7,
                       "image": {
                        "levels": [
                         {
                          "height": 37,
                          "class": "ImageResourceLevel",
                          "width": 37,
                          "url": "media/panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044_0_HS_3_0_0_map.gif"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": 6.11
                      }
                     ],
                     "useHandCursor": true,
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "displayTooltipInTouchScreens": true,
                       "toolTip": "TWIN BEDROOM",
                       "click": "this.startPanoramaWithCamera(this.panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D, this.camera_56C57D3C_5BF2_F7EA_41BA_23AB5285E45A); this.mainPlayList.set('selectedIndex', 8)"
                      }
                     ],
                     "items": [
                      {
                       "yaw": 34.7,
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 5.37,
                       "image": {
                        "levels": [
                         {
                          "height": 74,
                          "class": "ImageResourceLevel",
                          "width": 74,
                          "url": "media/panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044_0_HS_3_0.png"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": 6.11
                      }
                     ]
                    },
                    {
                     "enabledInCardboard": true,
                     "id": "overlay_916E9C9F_9D6A_1739_41D0_4A4CF03BE08B",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 5.27,
                       "yaw": 34.74,
                       "image": {
                        "levels": [
                         {
                          "height": 37,
                          "class": "ImageResourceLevel",
                          "width": 37,
                          "url": "media/panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044_0_HS_4_0_0_map.gif"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -12.59
                      }
                     ],
                     "useHandCursor": true,
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "displayTooltipInTouchScreens": true,
                       "toolTip": "SINGLE BEDROOM",
                       "click": "this.startPanoramaWithCamera(this.panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC, this.camera_56F35D45_5BF2_F79A_41D0_857D96DC10DF); this.mainPlayList.set('selectedIndex', 4)"
                      }
                     ],
                     "items": [
                      {
                       "yaw": 34.74,
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 5.27,
                       "image": {
                        "levels": [
                         {
                          "height": 74,
                          "class": "ImageResourceLevel",
                          "width": 74,
                          "url": "media/panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044_0_HS_4_0.png"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -12.59
                      }
                     ]
                    },
                    {
                     "enabledInCardboard": true,
                     "id": "overlay_916E8C9F_9D6A_1733_41A6_3007A8C07742",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 0,
                       "yaw": -162.92,
                       "image": {
                        "levels": [
                         {
                          "height": 1,
                          "class": "ImageResourceLevel",
                          "width": 1,
                          "url": "media/panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044_0_HS_1_0_0_map.gif"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": 76.94
                      }
                     ],
                     "useHandCursor": true,
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": true,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA, this.camera_53FC49DA_5E63_F99D_41CA_D9FF0AE6A550); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 3)"
                      }
                     ],
                     "items": [
                      {
                       "yaw": -162.92,
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 0,
                       "image": {
                        "levels": [
                         {
                          "height": 1,
                          "class": "ImageResourceLevel",
                          "width": 1,
                          "url": "media/panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044_0_HS_1_0.png"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": 76.94
                      }
                     ]
                    },
                    {
                     "enabledInCardboard": true,
                     "id": "overlay_916D7CA5_9D6A_1709_41E2_1043CC0BE577",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 7.8,
                       "yaw": -178.2,
                       "image": {
                        "levels": [
                         {
                          "height": 70,
                          "class": "ImageResourceLevel",
                          "width": 70,
                          "url": "media/panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044_0_HS_5_0_0_map.gif"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -39.78
                      }
                     ],
                     "useHandCursor": true,
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "displayTooltipInTouchScreens": true,
                       "toolTip": "BALCONY",
                       "click": "this.startPanoramaWithCamera(this.panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069, this.camera_51F8E974_5E62_0695_41CF_B989D695C65F); this.mainPlayList.set('selectedIndex', 6)"
                      }
                     ],
                     "items": [
                      {
                       "yaw": -178.2,
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 7.8,
                       "image": {
                        "levels": [
                         {
                          "height": 140,
                          "class": "ImageResourceLevel",
                          "width": 140,
                          "url": "media/panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044_0_HS_5_0.png"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -39.78
                      }
                     ]
                    },
                    {
                     "enabledInCardboard": true,
                     "id": "overlay_916D5CA5_9D6A_1709_41C1_ED02D5F1677F",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 8,
                       "yaw": 82.9,
                       "image": {
                        "levels": [
                         {
                          "height": 59,
                          "class": "ImageResourceLevel",
                          "width": 59,
                          "url": "media/panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044_0_HS_6_0_0_map.gif"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -22.11
                      }
                     ],
                     "useHandCursor": true,
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "displayTooltipInTouchScreens": true,
                       "toolTip": "TOILET",
                       "click": "this.startPanoramaWithCamera(this.panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28, this.camera_51F6897E_5E62_0695_41BD_D1C670AB7503); this.mainPlayList.set('selectedIndex', 7)"
                      }
                     ],
                     "items": [
                      {
                       "yaw": 82.9,
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 8,
                       "image": {
                        "levels": [
                         {
                          "height": 119,
                          "class": "ImageResourceLevel",
                          "width": 119,
                          "url": "media/panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044_0_HS_6_0.png"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -22.11
                      }
                     ]
                    },
                    {
                     "enabledInCardboard": true,
                     "id": "overlay_916D4CA5_9D6A_1709_41DE_4E5FACFD7857",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 7.65,
                       "yaw": 34.69,
                       "image": {
                        "levels": [
                         {
                          "height": 53,
                          "class": "ImageResourceLevel",
                          "width": 53,
                          "url": "media/panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044_0_HS_7_0_0_map.gif"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": 6.66
                      }
                     ],
                     "useHandCursor": true,
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "displayTooltipInTouchScreens": true,
                       "toolTip": "TWIN BEDROOM",
                       "click": "this.startPanoramaWithCamera(this.panorama_91758D80_9D6A_1106_41DC_64D8466F87FC, this.camera_51BEE9A5_5E63_F9B7_41D5_D139842C4F56); this.mainPlayList.set('selectedIndex', 8)"
                      }
                     ],
                     "items": [
                      {
                       "yaw": 34.69,
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 7.65,
                       "image": {
                        "levels": [
                         {
                          "height": 106,
                          "class": "ImageResourceLevel",
                          "width": 106,
                          "url": "media/panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044_0_HS_7_0.png"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": 6.66
                      }
                     ]
                    },
                    {
                     "enabledInCardboard": true,
                     "id": "overlay_916D2CA5_9D6A_1709_41D6_9840F4E40A44",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 7.5,
                       "yaw": 34.72,
                       "image": {
                        "levels": [
                         {
                          "height": 53,
                          "class": "ImageResourceLevel",
                          "width": 53,
                          "url": "media/panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044_0_HS_8_0_0_map.gif"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -13.15
                      }
                     ],
                     "useHandCursor": true,
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "displayTooltipInTouchScreens": true,
                       "toolTip": "SINGLE BEDROOM",
                       "click": "this.startPanoramaWithCamera(this.panorama_916227CC_9D6A_311F_41E3_34FF7141124F, this.camera_51C0099B_5E63_F993_41D5_DEA643553C17); this.mainPlayList.set('selectedIndex', 4)"
                      }
                     ],
                     "items": [
                      {
                       "yaw": 34.72,
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 7.5,
                       "image": {
                        "levels": [
                         {
                          "height": 106,
                          "class": "ImageResourceLevel",
                          "width": 106,
                          "url": "media/panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044_0_HS_8_0.png"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -13.15
                      }
                     ]
                    }
                   ],
                   "sphere": {
                    "levels": [
                     {
                      "height": 2500,
                      "class": "ImageResourceLevel",
                      "width": 5000,
                      "url": "media/panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044_hq.jpeg"
                     },
                     {
                      "height": 1608,
                      "class": "ImageResourceLevel",
                      "width": 3217,
                      "url": "media/panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044.jpeg"
                     }
                    ],
                    "class": "ImageResource"
                   }
                  }
                 ],
                 "audios": [
                  {
                   "autoplay": true,
                   "maximumAngle": 360,
                   "id": "audio_5F999E34_5349_3089_41A5_30E8148F4541",
                   "loop": true,
                   "audio": {
                    "mp3Url": "media/audio_5F999E34_5349_3089_41A5_30E8148F4541.mp3",
                    "oggUrl": "media/audio_5F999E34_5349_3089_41A5_30E8148F4541.ogg",
                    "class": "AudioResource"
                   },
                   "class": "DirectionalPanoramaAudio",
                   "yaw": 0,
                   "pitch": 0
                  }
                 ],
                 "partial": false,
                 "pitch": 0,
                 "class": "Panorama",
                 "thumbnailUrl": "media/panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044_t.jpg",
                 "id": "panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044",
                 "hfovMin": 100,
                 "label": "MASTER BR",
                 "hfov": 360,
                 "adjacentPanoramas": [
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_9145F5B4_9D6A_310F_41B6_278704EC634D",
                   "yaw": -162.92,
                   "backwardYaw": -171.36,
                   "distance": 1
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_916902A1_9D6A_7309_41D0_0B14DE574844",
                   "yaw": -162.92,
                   "backwardYaw": -171.96,
                   "distance": 1
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069",
                   "yaw": -178.2,
                   "backwardYaw": -174.39,
                   "distance": 1
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28",
                   "yaw": 82.9,
                   "backwardYaw": 161.78,
                   "distance": 1
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA",
                   "yaw": -162.92,
                   "backwardYaw": -172.22,
                   "distance": 1
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": {
                    "hfovMax": 120,
                    "frames": [
                     {
                      "class": "SphericPanoramaFrame",
                      "thumbnailUrl": "media/panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2_t.jpg",
                      "overlays": [
                       {
                        "enabledInCardboard": true,
                        "id": "overlay_916947EC_9D6B_F11F_41D6_5EEC27EF8F9A",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 4.97,
                          "yaw": -16.79,
                          "image": {
                           "levels": [
                            {
                             "height": 34,
                             "class": "ImageResourceLevel",
                             "width": 34,
                             "url": "media/panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2_0_HS_0_0_0_map.gif"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -9.28
                         }
                        ],
                        "useHandCursor": true,
                        "class": "HotspotPanoramaOverlay",
                        "rollOverDisplay": false,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "displayTooltipInTouchScreens": true,
                          "toolTip": "POOL",
                          "click": "this.startPanoramaWithCamera(this.panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D, this.camera_55581C8B_5BF2_F6AF_41D1_02AAAFF73E03); this.mainPlayList.set('selectedIndex', 2)"
                         }
                        ],
                        "items": [
                         {
                          "yaw": -16.79,
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 4.97,
                          "image": {
                           "levels": [
                            {
                             "height": 69,
                             "class": "ImageResourceLevel",
                             "width": 69,
                             "url": "media/panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2_0_HS_0_0.png"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -9.28
                         }
                        ]
                       },
                       {
                        "enabledInCardboard": true,
                        "id": "overlay_916987EC_9D6B_F11F_41BB_7D24AFE8F505",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 4.56,
                          "yaw": 0.94,
                          "image": {
                           "levels": [
                            {
                             "height": 34,
                             "class": "ImageResourceLevel",
                             "width": 34,
                             "url": "media/panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2_0_HS_6_0_0_map.gif"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -25.17
                         }
                        ],
                        "useHandCursor": true,
                        "class": "HotspotPanoramaOverlay",
                        "rollOverDisplay": false,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "displayTooltipInTouchScreens": true,
                          "toolTip": "STREET VIEW",
                          "click": "this.startPanoramaWithCamera(this.panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E, this.camera_55602CAB_5BF2_F6EF_41A1_3BA349C88636); this.mainPlayList.set('selectedIndex', 0)"
                         }
                        ],
                        "items": [
                         {
                          "yaw": 0.94,
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 4.56,
                          "image": {
                           "levels": [
                            {
                             "height": 69,
                             "class": "ImageResourceLevel",
                             "width": 69,
                             "url": "media/panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2_0_HS_6_0.png"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -25.17
                         }
                        ]
                       },
                       {
                        "enabledInCardboard": true,
                        "id": "overlay_9169A7EC_9D6B_F11F_41CA_A9E6728D96FC",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 0,
                          "yaw": -170.68,
                          "image": {
                           "levels": [
                            {
                             "height": 1,
                             "class": "ImageResourceLevel",
                             "width": 1,
                             "url": "media/panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2_0_HS_1_0_0_map.gif"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": 83.2
                         }
                        ],
                        "useHandCursor": true,
                        "class": "HotspotPanoramaOverlay",
                        "rollOverDisplay": true,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA, this.camera_53CB1A31_5E63_FAAC_41D6_22FD30F9774F); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 5); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 8)"
                         }
                        ],
                        "items": [
                         {
                          "yaw": -170.68,
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 0,
                          "image": {
                           "levels": [
                            {
                             "height": 1,
                             "class": "ImageResourceLevel",
                             "width": 1,
                             "url": "media/panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2_0_HS_1_0.png"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": 83.2
                         }
                        ]
                       },
                       {
                        "enabledInCardboard": true,
                        "id": "overlay_9169C7EC_9D6B_F11F_41C7_A3B2A477B925",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 7.12,
                          "yaw": -16.8,
                          "image": {
                           "levels": [
                            {
                             "height": 50,
                             "class": "ImageResourceLevel",
                             "width": 50,
                             "url": "media/panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2_0_HS_7_0_0_map.gif"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -8.74
                         }
                        ],
                        "useHandCursor": true,
                        "class": "HotspotPanoramaOverlay",
                        "rollOverDisplay": false,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "displayTooltipInTouchScreens": true,
                          "toolTip": "POOL",
                          "click": "this.startPanoramaWithCamera(this.panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA, this.camera_53E64A0A_5E63_FA7D_41C4_82D22AF6E487); this.mainPlayList.set('selectedIndex', 2)"
                         }
                        ],
                        "items": [
                         {
                          "yaw": -16.8,
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 7.12,
                          "image": {
                           "levels": [
                            {
                             "height": 100,
                             "class": "ImageResourceLevel",
                             "width": 100,
                             "url": "media/panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2_0_HS_7_0.png"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -8.74
                         }
                        ]
                       },
                       {
                        "enabledInCardboard": true,
                        "id": "overlay_9169D7ED_9D6B_F119_41C3_694AFA3B7253",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 6.54,
                          "yaw": 0.93,
                          "image": {
                           "levels": [
                            {
                             "height": 50,
                             "class": "ImageResourceLevel",
                             "width": 50,
                             "url": "media/panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2_0_HS_8_0_0_map.gif"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -24.65
                         }
                        ],
                        "useHandCursor": true,
                        "class": "HotspotPanoramaOverlay",
                        "rollOverDisplay": false,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "displayTooltipInTouchScreens": true,
                          "toolTip": "STREET VIEW",
                          "click": "this.startPanoramaWithCamera(this.panorama_9145F5B4_9D6A_310F_41B6_278704EC634D, this.camera_53F029E4_5E63_F9B5_41CD_652EB7E05491); this.mainPlayList.set('selectedIndex', 0)"
                         }
                        ],
                        "items": [
                         {
                          "yaw": 0.93,
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 6.54,
                          "image": {
                           "levels": [
                            {
                             "height": 100,
                             "class": "ImageResourceLevel",
                             "width": 100,
                             "url": "media/panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2_0_HS_8_0.png"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -24.65
                         }
                        ]
                       }
                      ],
                      "sphere": {
                       "levels": [
                        {
                         "height": 2500,
                         "class": "ImageResourceLevel",
                         "width": 5000,
                         "url": "media/panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2_hq.jpeg"
                        },
                        {
                         "height": 1608,
                         "class": "ImageResourceLevel",
                         "width": 3217,
                         "url": "media/panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2.jpeg"
                        }
                       ],
                       "class": "ImageResource"
                      }
                     }
                    ],
                    "audios": [
                     {
                      "autoplay": true,
                      "maximumAngle": 360,
                      "id": "audio_5F019C46_534B_1089_41CA_DD158DC6F095",
                      "loop": true,
                      "audio": {
                       "mp3Url": "media/audio_5F019C46_534B_1089_41CA_DD158DC6F095.mp3",
                       "oggUrl": "media/audio_5F019C46_534B_1089_41CA_DD158DC6F095.ogg",
                       "class": "AudioResource"
                      },
                      "class": "DirectionalPanoramaAudio",
                      "yaw": 0,
                      "pitch": 0
                     }
                    ],
                    "partial": false,
                    "pitch": 0,
                    "class": "Panorama",
                    "thumbnailUrl": "media/panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2_t.jpg",
                    "id": "panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2",
                    "hfovMin": 100,
                    "label": "ENTRANCE",
                    "hfov": 360,
                    "adjacentPanoramas": [
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_9145F5B4_9D6A_310F_41B6_278704EC634D",
                      "yaw": 0.93,
                      "backwardYaw": 140.49,
                      "distance": 1
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_916902A1_9D6A_7309_41D0_0B14DE574844",
                      "yaw": -170.68,
                      "backwardYaw": -171.96,
                      "distance": 1
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069",
                      "yaw": -170.68,
                      "backwardYaw": -170.58,
                      "distance": 1
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28",
                      "yaw": -170.68,
                      "backwardYaw": -162.92,
                      "distance": 1
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA",
                      "yaw": -16.8,
                      "backwardYaw": -97.22,
                      "distance": 1
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044",
                      "yaw": -170.68,
                      "backwardYaw": -162.92,
                      "distance": 1
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": {
                       "hfovMax": 120,
                       "frames": [
                        {
                         "class": "SphericPanoramaFrame",
                         "thumbnailUrl": "media/panorama_916227CC_9D6A_311F_41E3_34FF7141124F_t.jpg",
                         "overlays": [
                          {
                           "enabledInCardboard": true,
                           "id": "overlay_916217CC_9D6A_311F_41E1_8BEF8FED51E3",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "hfov": 6.59,
                             "yaw": -157.01,
                             "image": {
                              "levels": [
                               {
                                "height": 46,
                                "class": "ImageResourceLevel",
                                "width": 45,
                                "url": "media/panorama_916227CC_9D6A_311F_41E3_34FF7141124F_0_HS_0_0_0_map.gif"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": 5.5
                            }
                           ],
                           "useHandCursor": true,
                           "class": "HotspotPanoramaOverlay",
                           "rollOverDisplay": false,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000",
                             "displayTooltipInTouchScreens": true,
                             "toolTip": "MASTER BEDROOM\u000a",
                             "click": "this.startPanoramaWithCamera(this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF, this.camera_55D7BBEA_5BF2_F263_41D2_B1CC2C57A60F); this.mainPlayList.set('selectedIndex', 5)"
                            }
                           ],
                           "items": [
                            {
                             "yaw": -157.01,
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 6.59,
                             "image": {
                              "levels": [
                               {
                                "height": 92,
                                "class": "ImageResourceLevel",
                                "width": 91,
                                "url": "media/panorama_916227CC_9D6A_311F_41E3_34FF7141124F_0_HS_0_0.png"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": 5.5
                            }
                           ]
                          },
                          {
                           "enabledInCardboard": true,
                           "id": "overlay_9162E7CC_9D6A_311F_4199_A2B1F88DE39F",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "hfov": 5.88,
                             "yaw": -157.03,
                             "image": {
                              "levels": [
                               {
                                "height": 46,
                                "class": "ImageResourceLevel",
                                "width": 45,
                                "url": "media/panorama_916227CC_9D6A_311F_41E3_34FF7141124F_0_HS_2_0_0_map.gif"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -27.49
                            }
                           ],
                           "useHandCursor": true,
                           "class": "HotspotPanoramaOverlay",
                           "rollOverDisplay": false,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000",
                             "displayTooltipInTouchScreens": true,
                             "toolTip": "LIVING ROOM",
                             "click": "this.startPanoramaWithCamera(this.panorama_47B53902_572E_CEDF_41CC_C256D31A5443, this.camera_55FFAC21_5BF2_F59B_41D2_A4CCD4BC65CD); this.mainPlayList.set('selectedIndex', 3)"
                            }
                           ],
                           "items": [
                            {
                             "yaw": -157.03,
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 5.88,
                             "image": {
                              "levels": [
                               {
                                "height": 92,
                                "class": "ImageResourceLevel",
                                "width": 91,
                                "url": "media/panorama_916227CC_9D6A_311F_41E3_34FF7141124F_0_HS_2_0.png"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -27.49
                            }
                           ]
                          },
                          {
                           "enabledInCardboard": true,
                           "id": "overlay_9162F7CC_9D6A_311F_41D2_EC7CA4A52EE1",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "hfov": 0,
                             "yaw": -170.2,
                             "image": {
                              "levels": [
                               {
                                "height": 1,
                                "class": "ImageResourceLevel",
                                "width": 1,
                                "url": "media/panorama_916227CC_9D6A_311F_41E3_34FF7141124F_0_HS_1_0_0_map.gif"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": 81.21
                            }
                           ],
                           "useHandCursor": true,
                           "class": "HotspotPanoramaOverlay",
                           "rollOverDisplay": true,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA, this.camera_507FCA86_5E63_FA75_41D0_D0473BA5BC13); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 8); this.mainPlayList.set('selectedIndex', 9)"
                            }
                           ],
                           "items": [
                            {
                             "yaw": -170.2,
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 0,
                             "image": {
                              "levels": [
                               {
                                "height": 1,
                                "class": "ImageResourceLevel",
                                "width": 1,
                                "url": "media/panorama_916227CC_9D6A_311F_41E3_34FF7141124F_0_HS_1_0.png"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": 81.21
                            }
                           ]
                          },
                          {
                           "enabledInCardboard": true,
                           "id": "overlay_9162D7CC_9D6A_311F_41CF_9DE4ED272EB1",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "hfov": 9.45,
                             "yaw": -157,
                             "image": {
                              "levels": [
                               {
                                "height": 66,
                                "class": "ImageResourceLevel",
                                "width": 66,
                                "url": "media/panorama_916227CC_9D6A_311F_41E3_34FF7141124F_0_HS_3_0_0_map.gif"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": 6.18
                            }
                           ],
                           "useHandCursor": true,
                           "class": "HotspotPanoramaOverlay",
                           "rollOverDisplay": false,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000",
                             "displayTooltipInTouchScreens": true,
                             "toolTip": "MASTER BEDROOM",
                             "click": "this.startPanoramaWithCamera(this.panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044, this.camera_5390CA6B_5E63_FAB3_4182_8C0F269B15D4); this.mainPlayList.set('selectedIndex', 5)"
                            }
                           ],
                           "items": [
                            {
                             "yaw": -157,
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 9.45,
                             "image": {
                              "levels": [
                               {
                                "height": 132,
                                "class": "ImageResourceLevel",
                                "width": 132,
                                "url": "media/panorama_916227CC_9D6A_311F_41E3_34FF7141124F_0_HS_3_0.png"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": 6.18
                            }
                           ]
                          },
                          {
                           "enabledInCardboard": true,
                           "id": "overlay_916287CC_9D6A_311F_41DA_BF79E8211F43",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "hfov": 8.38,
                             "yaw": -157.02,
                             "image": {
                              "levels": [
                               {
                                "height": 66,
                                "class": "ImageResourceLevel",
                                "width": 66,
                                "url": "media/panorama_916227CC_9D6A_311F_41E3_34FF7141124F_0_HS_4_0_0_map.gif"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -28.2
                            }
                           ],
                           "useHandCursor": true,
                           "class": "HotspotPanoramaOverlay",
                           "rollOverDisplay": false,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000",
                             "displayTooltipInTouchScreens": true,
                             "toolTip": "LIVING ROOM",
                             "click": "this.startPanoramaWithCamera(this.panorama_916902A1_9D6A_7309_41D0_0B14DE574844, this.camera_53B83A45_5E63_FAF4_41B1_076A9E8EAD49); this.mainPlayList.set('selectedIndex', 3)"
                            }
                           ],
                           "items": [
                            {
                             "yaw": -157.02,
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 8.38,
                             "image": {
                              "levels": [
                               {
                                "height": 132,
                                "class": "ImageResourceLevel",
                                "width": 132,
                                "url": "media/panorama_916227CC_9D6A_311F_41E3_34FF7141124F_0_HS_4_0.png"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -28.2
                            }
                           ]
                          }
                         ],
                         "sphere": {
                          "levels": [
                           {
                            "height": 2500,
                            "class": "ImageResourceLevel",
                            "width": 5000,
                            "url": "media/panorama_916227CC_9D6A_311F_41E3_34FF7141124F_hq.jpeg"
                           },
                           {
                            "height": 1608,
                            "class": "ImageResourceLevel",
                            "width": 3217,
                            "url": "media/panorama_916227CC_9D6A_311F_41E3_34FF7141124F.jpeg"
                           }
                          ],
                          "class": "ImageResource"
                         }
                        }
                       ],
                       "audios": [
                        {
                         "autoplay": true,
                         "maximumAngle": 360,
                         "id": "audio_5FD12071_5349_1088_41CE_1A9919606FBF",
                         "loop": true,
                         "audio": {
                          "mp3Url": "media/audio_5FD12071_5349_1088_41CE_1A9919606FBF.mp3",
                          "oggUrl": "media/audio_5FD12071_5349_1088_41CE_1A9919606FBF.ogg",
                          "class": "AudioResource"
                         },
                         "class": "DirectionalPanoramaAudio",
                         "yaw": 0,
                         "pitch": 0
                        },
                        {
                         "autoplay": true,
                         "maximumAngle": 360,
                         "id": "audio_5049FC7B_5DEF_D73D_41B8_AB9CCE43637C",
                         "loop": true,
                         "audio": {
                          "mp3Url": "media/audio_5049FC7B_5DEF_D73D_41B8_AB9CCE43637C.mp3",
                          "oggUrl": "media/audio_5049FC7B_5DEF_D73D_41B8_AB9CCE43637C.ogg",
                          "class": "AudioResource"
                         },
                         "class": "DirectionalPanoramaAudio",
                         "yaw": 0,
                         "pitch": 0
                        }
                       ],
                       "partial": false,
                       "pitch": 0,
                       "class": "Panorama",
                       "thumbnailUrl": "media/panorama_916227CC_9D6A_311F_41E3_34FF7141124F_t.jpg",
                       "id": "panorama_916227CC_9D6A_311F_41E3_34FF7141124F",
                       "hfovMin": 100,
                       "label": "SINGLE BR",
                       "hfov": 360,
                       "adjacentPanoramas": [
                        {
                         "class": "AdjacentPanorama",
                         "panorama": "this.panorama_9145F5B4_9D6A_310F_41B6_278704EC634D",
                         "yaw": -170.2,
                         "backwardYaw": -171.36,
                         "distance": 1
                        },
                        {
                         "class": "AdjacentPanorama",
                         "panorama": "this.panorama_916902A1_9D6A_7309_41D0_0B14DE574844",
                         "yaw": -157.02,
                         "backwardYaw": 42.02,
                         "distance": 1
                        },
                        {
                         "class": "AdjacentPanorama",
                         "panorama": "this.panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069",
                         "yaw": -170.2,
                         "backwardYaw": -170.58,
                         "distance": 1
                        },
                        {
                         "class": "AdjacentPanorama",
                         "panorama": "this.panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28",
                         "yaw": -170.2,
                         "backwardYaw": -162.92,
                         "distance": 1
                        },
                        {
                         "class": "AdjacentPanorama",
                         "panorama": "this.panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA",
                         "yaw": -170.2,
                         "backwardYaw": -172.22,
                         "distance": 1
                        },
                        {
                         "class": "AdjacentPanorama",
                         "panorama": "this.panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044",
                         "yaw": -157,
                         "backwardYaw": 34.72,
                         "distance": 1
                        },
                        {
                         "class": "AdjacentPanorama",
                         "panorama": "this.panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2",
                         "yaw": -170.2,
                         "backwardYaw": -170.68,
                         "distance": 1
                        },
                        {
                         "class": "AdjacentPanorama",
                         "panorama": {
                          "hfovMax": 120,
                          "frames": [
                           {
                            "class": "SphericPanoramaFrame",
                            "thumbnailUrl": "media/panorama_91758D80_9D6A_1106_41DC_64D8466F87FC_t.jpg",
                            "overlays": [
                             {
                              "enabledInCardboard": true,
                              "id": "overlay_9175FD80_9D6A_1106_41AA_58E5D2CD1C04",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 6.55,
                                "yaw": -142.88,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 45,
                                   "class": "ImageResourceLevel",
                                   "width": 45,
                                   "url": "media/panorama_91758D80_9D6A_1106_41DC_64D8466F87FC_0_HS_2_0_0_map.gif"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": 8.82
                               }
                              ],
                              "useHandCursor": true,
                              "class": "HotspotPanoramaOverlay",
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000",
                                "displayTooltipInTouchScreens": true,
                                "toolTip": "TERRACE",
                                "click": "this.startPanoramaWithCamera(this.panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116, this.camera_56043BB0_5BF2_F2FA_41B1_1DE6A0E08A4C); this.mainPlayList.set('selectedIndex', 9)"
                               }
                              ],
                              "items": [
                               {
                                "yaw": -142.88,
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 6.55,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 91,
                                   "class": "ImageResourceLevel",
                                   "width": 91,
                                   "url": "media/panorama_91758D80_9D6A_1106_41DC_64D8466F87FC_0_HS_2_0.png"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": 8.82
                               }
                              ]
                             },
                             {
                              "enabledInCardboard": true,
                              "id": "overlay_9175ED80_9D6A_1106_41D5_F6221252AEF2",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 5.66,
                                "yaw": -142.87,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 45,
                                   "class": "ImageResourceLevel",
                                   "width": 45,
                                   "url": "media/panorama_91758D80_9D6A_1106_41DC_64D8466F87FC_0_HS_0_0_0_map.gif"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": -31.29
                               }
                              ],
                              "useHandCursor": true,
                              "class": "HotspotPanoramaOverlay",
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000",
                                "displayTooltipInTouchScreens": true,
                                "toolTip": "MASTER BEDROOM",
                                "click": "this.startPanoramaWithCamera(this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF, this.camera_56700B7F_5BF2_F267_41C2_DC8D8F885C23); this.mainPlayList.set('selectedIndex', 5)"
                               }
                              ],
                              "items": [
                               {
                                "yaw": -142.87,
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 5.66,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 91,
                                   "class": "ImageResourceLevel",
                                   "width": 91,
                                   "url": "media/panorama_91758D80_9D6A_1106_41DC_64D8466F87FC_0_HS_0_0.png"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": -31.29
                               }
                              ]
                             },
                             {
                              "enabledInCardboard": true,
                              "id": "overlay_9175DD80_9D6A_1106_41D0_4ED70EEFA362",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 0,
                                "yaw": -172.21,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 1,
                                   "class": "ImageResourceLevel",
                                   "width": 1,
                                   "url": "media/panorama_91758D80_9D6A_1106_41DC_64D8466F87FC_0_HS_1_0_0_map.gif"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": 81.71
                               }
                              ],
                              "useHandCursor": true,
                              "class": "HotspotPanoramaOverlay",
                              "rollOverDisplay": true,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_916227CC_9D6A_311F_41E3_34FF7141124F, this.camera_501E9AD1_5E63_FBEF_41D3_1C1EFE96C94E); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 4)"
                               }
                              ],
                              "items": [
                               {
                                "yaw": -172.21,
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 0,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 1,
                                   "class": "ImageResourceLevel",
                                   "width": 1,
                                   "url": "media/panorama_91758D80_9D6A_1106_41DC_64D8466F87FC_0_HS_1_0.png"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": 81.71
                               }
                              ]
                             },
                             {
                              "enabledInCardboard": true,
                              "id": "overlay_91750D80_9D6A_1106_41D4_EA14D9776F6B",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 9.37,
                                "yaw": -142.9,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 66,
                                   "class": "ImageResourceLevel",
                                   "width": 66,
                                   "url": "media/panorama_91758D80_9D6A_1106_41DC_64D8466F87FC_0_HS_3_0_0_map.gif"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": 9.48
                               }
                              ],
                              "useHandCursor": true,
                              "class": "HotspotPanoramaOverlay",
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000",
                                "displayTooltipInTouchScreens": true,
                                "toolTip": "TERRACE",
                                "click": "this.startPanoramaWithCamera(this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA, this.camera_500A6ADA_5E63_FB9D_41C0_3CC3C01399BF); this.mainPlayList.set('selectedIndex', 9)"
                               }
                              ],
                              "items": [
                               {
                                "yaw": -142.9,
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 9.37,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 132,
                                   "class": "ImageResourceLevel",
                                   "width": 132,
                                   "url": "media/panorama_91758D80_9D6A_1106_41DC_64D8466F87FC_0_HS_3_0.png"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": 9.48
                               }
                              ]
                             },
                             {
                              "enabledInCardboard": true,
                              "id": "overlay_91756D80_9D6A_1106_41D1_5718020AD198",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 8.06,
                                "yaw": -142.86,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 66,
                                   "class": "ImageResourceLevel",
                                   "width": 66,
                                   "url": "media/panorama_91758D80_9D6A_1106_41DC_64D8466F87FC_0_HS_4_0_0_map.gif"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": -31.97
                               }
                              ],
                              "useHandCursor": true,
                              "class": "HotspotPanoramaOverlay",
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000",
                                "displayTooltipInTouchScreens": true,
                                "toolTip": "MASTER BEDROOM",
                                "click": "this.startPanoramaWithCamera(this.panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044, this.camera_50354ABF_5E63_FB93_41C5_D4ADDCFD5F6F); this.mainPlayList.set('selectedIndex', 5)"
                               }
                              ],
                              "items": [
                               {
                                "yaw": -142.86,
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 8.06,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 132,
                                   "class": "ImageResourceLevel",
                                   "width": 132,
                                   "url": "media/panorama_91758D80_9D6A_1106_41DC_64D8466F87FC_0_HS_4_0.png"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": -31.97
                               }
                              ]
                             }
                            ],
                            "sphere": {
                             "levels": [
                              {
                               "height": 2500,
                               "class": "ImageResourceLevel",
                               "width": 5000,
                               "url": "media/panorama_91758D80_9D6A_1106_41DC_64D8466F87FC_hq.jpeg"
                              },
                              {
                               "height": 1608,
                               "class": "ImageResourceLevel",
                               "width": 3217,
                               "url": "media/panorama_91758D80_9D6A_1106_41DC_64D8466F87FC.jpeg"
                              }
                             ],
                             "class": "ImageResource"
                            }
                           }
                          ],
                          "audios": [
                           {
                            "autoplay": true,
                            "maximumAngle": 360,
                            "id": "audio_5E08B9DF_534F_73B7_41C9_0C77F337DE42",
                            "loop": true,
                            "audio": {
                             "mp3Url": "media/audio_5E08B9DF_534F_73B7_41C9_0C77F337DE42.mp3",
                             "oggUrl": "media/audio_5E08B9DF_534F_73B7_41C9_0C77F337DE42.ogg",
                             "class": "AudioResource"
                            },
                            "class": "DirectionalPanoramaAudio",
                            "yaw": 0,
                            "pitch": 0
                           }
                          ],
                          "partial": false,
                          "pitch": 0,
                          "class": "Panorama",
                          "thumbnailUrl": "media/panorama_91758D80_9D6A_1106_41DC_64D8466F87FC_t.jpg",
                          "id": "panorama_91758D80_9D6A_1106_41DC_64D8466F87FC",
                          "hfovMin": 100,
                          "label": "TWIN BR",
                          "hfov": 360,
                          "adjacentPanoramas": [
                           {
                            "class": "AdjacentPanorama",
                            "panorama": "this.panorama_9145F5B4_9D6A_310F_41B6_278704EC634D",
                            "yaw": -172.21,
                            "backwardYaw": -171.36,
                            "distance": 1
                           },
                           {
                            "class": "AdjacentPanorama",
                            "panorama": "this.panorama_916902A1_9D6A_7309_41D0_0B14DE574844",
                            "yaw": -172.21,
                            "backwardYaw": -171.96,
                            "distance": 1
                           },
                           {
                            "class": "AdjacentPanorama",
                            "panorama": "this.panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069",
                            "yaw": -172.21,
                            "backwardYaw": -170.58,
                            "distance": 1
                           },
                           {
                            "class": "AdjacentPanorama",
                            "panorama": "this.panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28",
                            "yaw": -172.21,
                            "backwardYaw": -162.92,
                            "distance": 1
                           },
                           {
                            "class": "AdjacentPanorama",
                            "panorama": "this.panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA",
                            "yaw": -172.21,
                            "backwardYaw": -172.22,
                            "distance": 1
                           },
                           {
                            "class": "AdjacentPanorama",
                            "panorama": "this.panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044",
                            "yaw": -142.86,
                            "backwardYaw": 34.69,
                            "distance": 1
                           },
                           {
                            "class": "AdjacentPanorama",
                            "panorama": "this.panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2",
                            "yaw": -172.21,
                            "backwardYaw": -170.68,
                            "distance": 1
                           },
                           {
                            "class": "AdjacentPanorama",
                            "panorama": "this.panorama_916227CC_9D6A_311F_41E3_34FF7141124F",
                            "yaw": -172.21,
                            "backwardYaw": -170.2,
                            "distance": 1
                           },
                           {
                            "class": "AdjacentPanorama",
                            "panorama": {
                             "hfovMax": 120,
                             "frames": [
                              {
                               "class": "SphericPanoramaFrame",
                               "thumbnailUrl": "media/panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA_t.jpg",
                               "overlays": [
                                {
                                 "enabledInCardboard": true,
                                 "id": "overlay_914DB476_9D6A_170A_41D3_A4182884D4B3",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 5.63,
                                   "yaw": 18.93,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 41,
                                      "class": "ImageResourceLevel",
                                      "width": 41,
                                      "url": "media/panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA_0_HS_6_0_0_map.gif"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": -20.35
                                  }
                                 ],
                                 "useHandCursor": true,
                                 "class": "HotspotPanoramaOverlay",
                                 "rollOverDisplay": false,
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000",
                                   "displayTooltipInTouchScreens": true,
                                   "toolTip": "TWIN BEDROOM",
                                   "click": "this.startPanoramaWithCamera(this.panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D, this.camera_5488DF3C_5BF2_F3E9_41D1_C652E087859B); this.mainPlayList.set('selectedIndex', 8)"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "yaw": 18.93,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 5.63,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 83,
                                      "class": "ImageResourceLevel",
                                      "width": 83,
                                      "url": "media/panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA_0_HS_6_0.png"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": -20.35
                                  }
                                 ]
                                },
                                {
                                 "enabledInCardboard": true,
                                 "id": "overlay_914DA476_9D6A_170A_41D4_F5A9A50D4F34",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 0,
                                   "yaw": -173.12,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 1,
                                      "class": "ImageResourceLevel",
                                      "width": 1,
                                      "url": "media/panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA_0_HS_5_0_0_map.gif"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": 85.84
                                  }
                                 ],
                                 "useHandCursor": true,
                                 "class": "HotspotPanoramaOverlay",
                                 "rollOverDisplay": true,
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_916227CC_9D6A_311F_41E3_34FF7141124F, this.camera_50A34B24_5E63_FAB5_419B_43ADF4ABAF7C); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 5); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 4)"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "yaw": -173.12,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 0,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 1,
                                      "class": "ImageResourceLevel",
                                      "width": 1,
                                      "url": "media/panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA_0_HS_5_0.png"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": 85.84
                                  }
                                 ]
                                },
                                {
                                 "enabledInCardboard": true,
                                 "id": "overlay_914D4476_9D6A_170A_41A7_1A222953F06E",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 8.07,
                                   "yaw": 18.94,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 60,
                                      "class": "ImageResourceLevel",
                                      "width": 60,
                                      "url": "media/panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA_0_HS_7_0_0_map.gif"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": -21.01
                                  }
                                 ],
                                 "useHandCursor": true,
                                 "class": "HotspotPanoramaOverlay",
                                 "rollOverDisplay": false,
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000",
                                   "displayTooltipInTouchScreens": true,
                                   "toolTip": "TWIN BEDROOM",
                                   "click": "this.startPanoramaWithCamera(this.panorama_91758D80_9D6A_1106_41DC_64D8466F87FC, this.camera_509F3B2D_5E63_FAB7_4195_C71F3307E3ED); this.mainPlayList.set('selectedIndex', 8)"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "yaw": 18.94,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 8.07,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 120,
                                      "class": "ImageResourceLevel",
                                      "width": 120,
                                      "url": "media/panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA_0_HS_7_0.png"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": -21.01
                                  }
                                 ]
                                }
                               ],
                               "sphere": {
                                "levels": [
                                 {
                                  "height": 2500,
                                  "class": "ImageResourceLevel",
                                  "width": 5000,
                                  "url": "media/panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA_hq.jpeg"
                                 },
                                 {
                                  "height": 1608,
                                  "class": "ImageResourceLevel",
                                  "width": 3217,
                                  "url": "media/panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA.jpeg"
                                 }
                                ],
                                "class": "ImageResource"
                               }
                              }
                             ],
                             "audios": [
                              {
                               "autoplay": true,
                               "maximumAngle": 360,
                               "id": "audio_5E20D107_534F_3088_4192_A9F38893E7D5",
                               "loop": true,
                               "audio": {
                                "mp3Url": "media/audio_5E20D107_534F_3088_4192_A9F38893E7D5.mp3",
                                "oggUrl": "media/audio_5E20D107_534F_3088_4192_A9F38893E7D5.ogg",
                                "class": "AudioResource"
                               },
                               "class": "DirectionalPanoramaAudio",
                               "yaw": 0,
                               "pitch": 0
                              },
                              {
                               "autoplay": true,
                               "maximumAngle": 360,
                               "id": "audio_53AB1146_5DE9_5154_41CA_FED3E44D14A9",
                               "loop": true,
                               "audio": {
                                "mp3Url": "media/audio_53AB1146_5DE9_5154_41CA_FED3E44D14A9.mp3",
                                "oggUrl": "media/audio_53AB1146_5DE9_5154_41CA_FED3E44D14A9.ogg",
                                "class": "AudioResource"
                               },
                               "class": "DirectionalPanoramaAudio",
                               "yaw": 0,
                               "pitch": 0
                              }
                             ],
                             "partial": false,
                             "pitch": 0,
                             "class": "Panorama",
                             "thumbnailUrl": "media/panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA_t.jpg",
                             "id": "panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA",
                             "hfovMin": 100,
                             "label": "TERRACE",
                             "hfov": 360,
                             "adjacentPanoramas": [
                              {
                               "class": "AdjacentPanorama",
                               "panorama": "this.panorama_9145F5B4_9D6A_310F_41B6_278704EC634D",
                               "yaw": -173.12,
                               "backwardYaw": -171.36,
                               "distance": 1
                              },
                              {
                               "class": "AdjacentPanorama",
                               "panorama": "this.panorama_916902A1_9D6A_7309_41D0_0B14DE574844",
                               "yaw": -173.12,
                               "backwardYaw": -171.96,
                               "distance": 1
                              },
                              {
                               "class": "AdjacentPanorama",
                               "panorama": "this.panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069",
                               "yaw": -173.12,
                               "backwardYaw": -170.58,
                               "distance": 1
                              },
                              {
                               "class": "AdjacentPanorama",
                               "panorama": "this.panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28",
                               "yaw": -173.12,
                               "backwardYaw": -162.92,
                               "distance": 1
                              },
                              {
                               "class": "AdjacentPanorama",
                               "panorama": "this.panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA",
                               "yaw": -173.12,
                               "backwardYaw": -172.22,
                               "distance": 1
                              },
                              {
                               "class": "AdjacentPanorama",
                               "panorama": "this.panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044",
                               "yaw": -173.12,
                               "backwardYaw": -162.92,
                               "distance": 1
                              },
                              {
                               "class": "AdjacentPanorama",
                               "panorama": "this.panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2",
                               "yaw": -173.12,
                               "backwardYaw": -170.68,
                               "distance": 1
                              },
                              {
                               "class": "AdjacentPanorama",
                               "panorama": "this.panorama_916227CC_9D6A_311F_41E3_34FF7141124F",
                               "yaw": -173.12,
                               "backwardYaw": -170.2,
                               "distance": 1
                              },
                              {
                               "class": "AdjacentPanorama",
                               "panorama": "this.panorama_91758D80_9D6A_1106_41DC_64D8466F87FC",
                               "yaw": 18.94,
                               "backwardYaw": -142.9,
                               "distance": 1
                              }
                             ],
                             "vfov": 180
                            },
                            "yaw": -142.9,
                            "backwardYaw": 18.94,
                            "distance": 1
                           }
                          ],
                          "vfov": 180
                         },
                         "yaw": -170.2,
                         "backwardYaw": -172.21,
                         "distance": 1
                        },
                        {
                         "class": "AdjacentPanorama",
                         "panorama": "this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA",
                         "yaw": -170.2,
                         "backwardYaw": -173.12,
                         "distance": 1
                        }
                       ],
                       "vfov": 180
                      },
                      "yaw": -170.68,
                      "backwardYaw": -170.2,
                      "distance": 1
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_91758D80_9D6A_1106_41DC_64D8466F87FC",
                      "yaw": -170.68,
                      "backwardYaw": -172.21,
                      "distance": 1
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA",
                      "yaw": -170.68,
                      "backwardYaw": -173.12,
                      "distance": 1
                     }
                    ],
                    "vfov": 180
                   },
                   "yaw": -162.92,
                   "backwardYaw": -170.68,
                   "distance": 1
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_916227CC_9D6A_311F_41E3_34FF7141124F",
                   "yaw": 34.72,
                   "backwardYaw": -157,
                   "distance": 1
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_91758D80_9D6A_1106_41DC_64D8466F87FC",
                   "yaw": 34.69,
                   "backwardYaw": -142.86,
                   "distance": 1
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA",
                   "yaw": -162.92,
                   "backwardYaw": -173.12,
                   "distance": 1
                  }
                 ],
                 "vfov": 180
                },
                "yaw": -172.22,
                "backwardYaw": -162.92,
                "distance": 1
               },
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2",
                "yaw": -97.22,
                "backwardYaw": -16.8,
                "distance": 1
               },
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_916227CC_9D6A_311F_41E3_34FF7141124F",
                "yaw": -172.22,
                "backwardYaw": -170.2,
                "distance": 1
               },
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_91758D80_9D6A_1106_41DC_64D8466F87FC",
                "yaw": -172.22,
                "backwardYaw": -172.21,
                "distance": 1
               },
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA",
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
             "panorama": "this.panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044",
             "yaw": 161.78,
             "backwardYaw": 82.9,
             "distance": 1
            },
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2",
             "yaw": -162.92,
             "backwardYaw": -170.68,
             "distance": 1
            },
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_916227CC_9D6A_311F_41E3_34FF7141124F",
             "yaw": -162.92,
             "backwardYaw": -170.2,
             "distance": 1
            },
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_91758D80_9D6A_1106_41DC_64D8466F87FC",
             "yaw": -162.92,
             "backwardYaw": -172.21,
             "distance": 1
            },
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA",
             "yaw": -162.92,
             "backwardYaw": -173.12,
             "distance": 1
            }
           ],
           "vfov": 180
          },
          "yaw": -170.58,
          "backwardYaw": -162.92,
          "distance": 1
         },
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA",
          "yaw": -170.58,
          "backwardYaw": -172.22,
          "distance": 1
         },
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044",
          "yaw": -174.39,
          "backwardYaw": -178.2,
          "distance": 1
         },
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2",
          "yaw": -170.58,
          "backwardYaw": -170.68,
          "distance": 1
         },
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_916227CC_9D6A_311F_41E3_34FF7141124F",
          "yaw": -170.58,
          "backwardYaw": -170.2,
          "distance": 1
         },
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_91758D80_9D6A_1106_41DC_64D8466F87FC",
          "yaw": -170.58,
          "backwardYaw": -172.21,
          "distance": 1
         },
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA",
          "yaw": -170.58,
          "backwardYaw": -173.12,
          "distance": 1
         }
        ],
        "vfov": 180
       },
       "yaw": -171.96,
       "backwardYaw": -170.58,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28",
       "yaw": -171.96,
       "backwardYaw": -162.92,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA",
       "yaw": -176.8,
       "backwardYaw": 12.06,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044",
       "yaw": -171.96,
       "backwardYaw": -162.92,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2",
       "yaw": -171.96,
       "backwardYaw": -170.68,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_916227CC_9D6A_311F_41E3_34FF7141124F",
       "yaw": 42.02,
       "backwardYaw": -157.02,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_91758D80_9D6A_1106_41DC_64D8466F87FC",
       "yaw": -171.96,
       "backwardYaw": -172.21,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA",
       "yaw": -171.96,
       "backwardYaw": -173.12,
       "distance": 1
      }
     ],
     "vfov": 180
    },
    "yaw": -171.36,
    "backwardYaw": -171.96,
    "distance": 1
   },
   {
    "class": "AdjacentPanorama",
    "panorama": "this.panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069",
    "yaw": -171.36,
    "backwardYaw": -170.58,
    "distance": 1
   },
   {
    "class": "AdjacentPanorama",
    "panorama": "this.panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28",
    "yaw": -171.36,
    "backwardYaw": -162.92,
    "distance": 1
   },
   {
    "class": "AdjacentPanorama",
    "panorama": "this.panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA",
    "yaw": -171.36,
    "backwardYaw": -172.22,
    "distance": 1
   },
   {
    "class": "AdjacentPanorama",
    "panorama": "this.panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044",
    "yaw": -171.36,
    "backwardYaw": -162.92,
    "distance": 1
   },
   {
    "class": "AdjacentPanorama",
    "panorama": "this.panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2",
    "yaw": 140.49,
    "backwardYaw": 0.93,
    "distance": 1
   },
   {
    "class": "AdjacentPanorama",
    "panorama": "this.panorama_916227CC_9D6A_311F_41E3_34FF7141124F",
    "yaw": -171.36,
    "backwardYaw": -170.2,
    "distance": 1
   },
   {
    "class": "AdjacentPanorama",
    "panorama": "this.panorama_91758D80_9D6A_1106_41DC_64D8466F87FC",
    "yaw": -171.36,
    "backwardYaw": -172.21,
    "distance": 1
   },
   {
    "class": "AdjacentPanorama",
    "panorama": "this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA",
    "yaw": -171.36,
    "backwardYaw": -173.12,
    "distance": 1
   }
  ],
  "vfov": 180
 },
 {
  "buttonCardboardView": {
   "backgroundOpacity": 0,
   "verticalAlign": "middle",
   "minWidth": 1,
   "maxHeight": 60,
   "mode": "push",
   "minHeight": 1,
   "paddingRight": 0,
   "iconURL": "skin/IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37.png",
   "height": "100%",
   "class": "IconButton",
   "width": "100%",
   "transparencyActive": false,
   "borderRadius": 0,
   "borderSize": 0,
   "rollOverIconURL": "skin/IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37_rollover.png",
   "shadow": false,
   "cursor": "hand",
   "visible": false,
   "paddingBottom": 0,
   "id": "IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37",
   "paddingLeft": 0,
   "horizontalAlign": "center",
   "paddingTop": 0,
   "pressedIconURL": "skin/IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37_pressed.png",
   "maxWidth": 60
  },
  "touchControlMode": "drag_rotation",
  "displayPlaybackBar": true,
  "buttonToggleHotspots": {
   "verticalAlign": "middle",
   "minWidth": 1,
   "maxHeight": 60,
   "mode": "toggle",
   "minHeight": 1,
   "paddingRight": 0,
   "toolTipBackgroundColor": "#000000",
   "iconURL": "skin/IconButton_80E5955A_8E23_BB05_41CA_43DD61DBAEE9.png",
   "height": "100%",
   "class": "IconButton",
   "toolTip": "Hotspots Visibility",
   "toolTipTextShadowOpacity": 0,
   "toolTipPaddingBottom": 4,
   "transparencyActive": true,
   "toolTipTextShadowColor": "#000000",
   "toolTipPaddingRight": 6,
   "width": "100%",
   "toolTipFontSize": 11,
   "borderRadius": 0,
   "toolTipShadowOpacity": 1,
   "toolTipOpacity": 0.7,
   "borderSize": 0,
   "toolTipPaddingLeft": 6,
   "toolTipBorderColor": "#767676",
   "shadow": false,
   "click": "if(!this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, true, 0, this.effect_CDD059FA_EED0_D223_41DB_70ACFBE986FE, 'showEffect', false) } else if(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, false, 0, this.effect_CDD049FB_EED0_D221_41EB_CA2134B978E0, 'hideEffect', false) }",
   "toolTipFontStyle": "normal",
   "toolTipBorderRadius": 3,
   "toolTipBorderSize": 1,
   "cursor": "hand",
   "paddingBottom": 0,
   "toolTipTextShadowBlurRadius": 3,
   "id": "IconButton_80E5955A_8E23_BB05_41CA_43DD61DBAEE9",
   "paddingLeft": 0,
   "horizontalAlign": "center",
   "toolTipShadowHorizontalLength": 0,
   "toolTipFontWeight": "normal",
   "toolTipShadowSpread": 0,
   "paddingTop": 0,
   "toolTipShadowColor": "#333333",
   "toolTipShadowBlurRadius": 3,
   "pressedIconURL": "skin/IconButton_80E5955A_8E23_BB05_41CA_43DD61DBAEE9_pressed.png",
   "toolTipPaddingTop": 4,
   "toolTipShadowVerticalLength": 0,
   "maxWidth": 60,
   "toolTipFontFamily": "Arial",
   "backgroundOpacity": 0,
   "toolTipFontColor": "#606060"
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
  "class": "MapPlayer",
  "id": "MapViewerMapPlayer",
  "viewerArea": {
   "minWidth": 1,
   "progressBarBackgroundColorDirection": "vertical",
   "progressBackgroundColor": [
    "#FFFFFF"
   ],
   "paddingRight": 0,
   "toolTipBackgroundColor": "#000000",
   "progressBorderRadius": 0,
   "class": "ViewerArea",
   "toolTipPaddingBottom": 4,
   "progressBackgroundOpacity": 1,
   "progressBarOpacity": 1,
   "playbackBarBorderColor": "#FFFFFF",
   "playbackBarBackgroundColor": [
    "#FFFFFF"
   ],
   "progressRight": 0,
   "toolTipShadowOpacity": 1,
   "toolTipOpacity": 0.7,
   "playbackBarHeight": 10,
   "shadow": false,
   "playbackBarHeadWidth": 6,
   "toolTipBorderSize": 1,
   "playbackBarProgressBackgroundColorDirection": "vertical",
   "toolTipFontStyle": "normal",
   "playbackBarBackgroundColorDirection": "vertical",
   "playbackBarProgressBorderSize": 0,
   "progressBottom": 2,
   "paddingBottom": 0,
   "playbackBarHeadBackgroundColorDirection": "vertical",
   "playbackBarRight": 0,
   "progressBarBorderRadius": 0,
   "progressBorderSize": 0,
   "progressBarBorderSize": 0,
   "playbackBarProgressBorderRadius": 0,
   "playbackBarHeadShadowHorizontalLength": 0,
   "paddingTop": 0,
   "transitionMode": "blending",
   "playbackBarHeadShadowVerticalLength": 0,
   "toolTipShadowSpread": 0,
   "toolTipShadowColor": "#333333",
   "toolTipShadowBlurRadius": 3,
   "toolTipPaddingTop": 4,
   "toolTipShadowVerticalLength": 0,
   "toolTipFontColor": "#606060",
   "playbackBarBorderRadius": 0,
   "playbackBarProgressBorderColor": "#000000",
   "minHeight": 1,
   "playbackBarHeadBorderRadius": 0,
   "toolTipPaddingRight": 6,
   "toolTipTextShadowOpacity": 0,
   "toolTipTextShadowColor": "#000000",
   "toolTipFontSize": 11,
   "borderRadius": 0,
   "progressLeft": 0,
   "playbackBarHeadShadowBlurRadius": 3,
   "playbackBarHeadBorderColor": "#000000",
   "progressBackgroundColorRatios": [
    0
   ],
   "playbackBarProgressOpacity": 1,
   "playbackBarLeft": 0,
   "borderSize": 0,
   "toolTipPaddingLeft": 6,
   "toolTipBorderColor": "#767676",
   "playbackBarProgressBackgroundColorRatios": [
    0
   ],
   "playbackBarHeadHeight": 15,
   "playbackBarBackgroundOpacity": 1,
   "playbackBarHeadBackgroundColor": [
    "#111111",
    "#666666"
   ],
   "playbackBarBorderSize": 0,
   "playbackBarHeadBackgroundColorRatios": [
    0,
    1
   ],
   "playbackBarHeadShadowOpacity": 0.7,
   "top": "10%",
   "toolTipBorderRadius": 3,
   "playbackBarHeadBorderSize": 0,
   "bottom": "10%",
   "progressBarBorderColor": "#000000",
   "id": "MapViewer",
   "toolTipTextShadowBlurRadius": 3,
   "paddingLeft": 0,
   "playbackBarHeadShadowColor": "#000000",
   "toolTipShadowHorizontalLength": 0,
   "playbackBarOpacity": 1,
   "toolTipFontWeight": "normal",
   "progressBackgroundColorDirection": "vertical",
   "playbackBarHeadOpacity": 1,
   "progressBarBackgroundColorRatios": [
    0
   ],
   "progressHeight": 10,
   "left": "10%",
   "playbackBarHeadShadow": true,
   "progressBorderColor": "#000000",
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
  "automaticZoomSpeed": 10,
  "id": "panorama_9145F5B4_9D6A_310F_41B6_278704EC634D_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 178.1,
   "pitch": 2.83
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2",
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 16.81,
   "pitch": 2.87
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA",
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_916902A1_9D6A_7309_41D0_0B14DE574844",
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_916902A1_9D6A_7309_41D0_0B14DE574844_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_916227CC_9D6A_311F_41E3_34FF7141124F",
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_916227CC_9D6A_311F_41E3_34FF7141124F_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044",
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069",
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28",
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_91758D80_9D6A_1106_41DC_64D8466F87FC",
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_91758D80_9D6A_1106_41DC_64D8466F87FC_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA",
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "id": "PanoramaPlayListItem_51DCA714_5E62_0A94_41A8_A35E538F7665",
    "media": "this.panorama_9145F5B4_9D6A_310F_41B6_278704EC634D",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_51DCA714_5E62_0A94_41A8_A35E538F7665, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_9145F5B4_9D6A_310F_41B6_278704EC634D_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "camera": "this.panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "camera": "this.panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_916902A1_9D6A_7309_41D0_0B14DE574844",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "camera": "this.panorama_916902A1_9D6A_7309_41D0_0B14DE574844_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_916227CC_9D6A_311F_41E3_34FF7141124F",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "camera": "this.panorama_916227CC_9D6A_311F_41E3_34FF7141124F_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "camera": "this.panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "camera": "this.panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "camera": "this.panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_91758D80_9D6A_1106_41DC_64D8466F87FC",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "camera": "this.panorama_91758D80_9D6A_1106_41DC_64D8466F87FC_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 0)",
    "camera": "this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA_camera"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist",
  "items": [
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_9145F5B4_9D6A_310F_41B6_278704EC634D",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 0, 1)",
    "camera": "this.panorama_9145F5B4_9D6A_310F_41B6_278704EC634D_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 1, 2)",
    "camera": "this.panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 2, 3)",
    "camera": "this.panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_916902A1_9D6A_7309_41D0_0B14DE574844",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 3, 4)",
    "camera": "this.panorama_916902A1_9D6A_7309_41D0_0B14DE574844_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_916227CC_9D6A_311F_41E3_34FF7141124F",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 4, 5)",
    "camera": "this.panorama_916227CC_9D6A_311F_41E3_34FF7141124F_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 5, 6)",
    "camera": "this.panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 6, 7)",
    "camera": "this.panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 7, 8)",
    "camera": "this.panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_91758D80_9D6A_1106_41DC_64D8466F87FC",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 8, 9)",
    "camera": "this.panorama_91758D80_9D6A_1106_41DC_64D8466F87FC_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 9, 0)",
    "camera": "this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA_camera"
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
  "class": "Video",
  "scaleMode": "fit_outside"
 },
 {
  "class": "PlayList",
  "id": "playList_51EA670A_5E62_0A7C_41D7_799217FDB020",
  "items": [
   {
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_210B394E_3D54_1A60_41A3_CB42BEC0D3EC",
    "class": "VideoPlayListItem",
    "begin": "this.registerKey('visibility_ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472', this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472.get('visible')); this.registerKey('visibility_Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB', this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB.get('visible')); this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setComponentVisibility(this.Container_807F782A_8E23_A905_41DE_623121285A09, false, -1, this.effect_22974FB2_2DD9_0421_41BA_84205292D043, 'hideEffect', false); this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, false, -1, this.effect_22899FB3_2DD9_0427_41BB_298AEB3D2851, 'hideEffect', false); this.setComponentVisibility(this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB, true, -1, this.effect_2289DFB3_2DD9_0427_41AE_A35795880BA7, 'showEffect', false); this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, false, -1, this.effect_3876CD6E_2DF9_0421_41C1_F0AB7F279824, 'hideEffect', false); this.setComponentVisibility(this.Container_86F3A56C_8E22_5B1D_41CA_9CE53436FE56, false, -1, this.effect_22973FB1_2DD9_0423_41C1_E1E03953DCCE, 'hideEffect', false)",
    "end": "this.setComponentVisibility(this.Container_807F782A_8E23_A905_41DE_623121285A09, true, -1, this.effect_22977FB2_2DD9_0421_41C1_F53B037346DF, 'showEffect', false); this.setComponentVisibility(this.Container_807F782A_8E23_A905_41DE_623121285A09, true, -1, this.effect_22977FB2_2DD9_0421_41C1_F53B037346DF, 'showEffect', false); if(this.existsKey('visibility_Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB')){ if(this.getKey('visibility_Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB')) { this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, true, -1, this.effect_50863B34_5E63_FA95_41D6_C3150D8D84F4, 'showEffect', false); } else { this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, false, -1, this.effect_22899FB3_2DD9_0427_41BB_298AEB3D2851, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB'); this.setComponentVisibility(this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB, false, -1, this.effect_2289EFB3_2DD9_0427_41C0_ACB5A72AE218, 'hideEffect', false); this.setComponentVisibility(this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB, false, -1, this.effect_2289EFB3_2DD9_0427_41C0_ACB5A72AE218, 'hideEffect', false); if(this.existsKey('visibility_ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472')){ if(this.getKey('visibility_ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472')) { this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, true, -1, this.effect_517BEB34_5E63_FA95_4166_88132397CB60, 'showEffect', false); } else { this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, false, -1, this.effect_3876CD6E_2DF9_0421_41C1_F0AB7F279824, 'hideEffect', false); } }; this.unregisterKey('visibility_ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472'); this.setComponentVisibility(this.Container_86F3A56C_8E22_5B1D_41CA_9CE53436FE56, true, -1, this.effect_22975FB2_2DD9_0421_41B4_7A2443082F44, 'showEffect', false); this.setComponentVisibility(this.Container_86F3A56C_8E22_5B1D_41CA_9CE53436FE56, true, -1, this.effect_22975FB2_2DD9_0421_41B4_7A2443082F44, 'showEffect', false)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_51EA670A_5E62_0A7C_41D7_799217FDB020, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_51EA670A_5E62_0A7C_41D7_799217FDB020, 0, this.video_210B394E_3D54_1A60_41A3_CB42BEC0D3EC)"
   }
  ]
 },
 {
  "class": "PhotoAlbum",
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
      "duration": 5000,
      "label": "DJI_0355",
      "width": 5472,
      "id": "photo_25EB8F3B_3D54_3627_41C1_FA6C2C76D85C",
      "height": 3648,
      "class": "Photo",
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
      "targetPosition": {
       "x": "0.33",
       "class": "PhotoCameraPosition",
       "zoomFactor": 1.1,
       "y": "0.55"
      },
      "scaleMode": "fit_outside",
      "initialPosition": {
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "zoomFactor": 1,
       "y": "0.50"
      },
      "easing": "linear",
      "class": "MovementPhotoCamera",
      "duration": 5000
     }
    },
    {
     "class": "PhotoPlayListItem",
     "media": {
      "thumbnailUrl": "media/photo_2537233E_3D54_0E20_41B8_95E46BC1EC07_t.jpg",
      "duration": 5000,
      "label": "DJI_0364",
      "width": 4900,
      "id": "photo_2537233E_3D54_0E20_41B8_95E46BC1EC07",
      "height": 3264,
      "class": "Photo",
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
      "targetPosition": {
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "zoomFactor": 1.1,
       "y": "0.71"
      },
      "scaleMode": "fit_outside",
      "initialPosition": {
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "zoomFactor": 1,
       "y": "0.50"
      },
      "easing": "linear",
      "class": "MovementPhotoCamera",
      "duration": 5000
     }
    },
    {
     "class": "PhotoPlayListItem",
     "media": {
      "thumbnailUrl": "media/photo_25363697_3D54_16EF_41C7_78CA5BF042D8_t.jpg",
      "duration": 5000,
      "label": "DJI_0369",
      "width": 4900,
      "id": "photo_25363697_3D54_16EF_41C7_78CA5BF042D8",
      "height": 3264,
      "class": "Photo",
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
      "targetPosition": {
       "x": "0.52",
       "class": "PhotoCameraPosition",
       "zoomFactor": 1.1,
       "y": "0.66"
      },
      "scaleMode": "fit_outside",
      "initialPosition": {
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "zoomFactor": 1,
       "y": "0.50"
      },
      "easing": "linear",
      "class": "MovementPhotoCamera",
      "duration": 5000
     }
    },
    {
     "class": "PhotoPlayListItem",
     "media": {
      "thumbnailUrl": "media/photo_2536FA03_3D54_19E7_41C9_9A86E77D5C4C_t.jpg",
      "duration": 5000,
      "label": "DJI_0388",
      "width": 5472,
      "id": "photo_2536FA03_3D54_19E7_41C9_9A86E77D5C4C",
      "height": 3648,
      "class": "Photo",
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
      "targetPosition": {
       "x": "0.70",
       "class": "PhotoCameraPosition",
       "zoomFactor": 1.1,
       "y": "0.71"
      },
      "scaleMode": "fit_outside",
      "initialPosition": {
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "zoomFactor": 1,
       "y": "0.50"
      },
      "easing": "linear",
      "class": "MovementPhotoCamera",
      "duration": 5000
     }
    },
    {
     "class": "PhotoPlayListItem",
     "media": {
      "thumbnailUrl": "media/photo_25365DAF_3D54_1A3F_41C9_6122F3F568B7_t.jpg",
      "duration": 5000,
      "label": "DJI_0402",
      "width": 4900,
      "id": "photo_25365DAF_3D54_1A3F_41C9_6122F3F568B7",
      "height": 3264,
      "class": "Photo",
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
      "targetPosition": {
       "x": "0.49",
       "class": "PhotoCameraPosition",
       "zoomFactor": 1.1,
       "y": "0.74"
      },
      "scaleMode": "fit_outside",
      "initialPosition": {
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "zoomFactor": 1,
       "y": "0.50"
      },
      "easing": "linear",
      "class": "MovementPhotoCamera",
      "duration": 5000
     }
    },
    {
     "class": "PhotoPlayListItem",
     "media": {
      "thumbnailUrl": "media/photo_2536E107_3D54_0BE0_41C7_237D79278EAE_t.jpg",
      "duration": 5000,
      "label": "DJI_0405",
      "width": 4900,
      "id": "photo_2536E107_3D54_0BE0_41C7_237D79278EAE",
      "height": 3264,
      "class": "Photo",
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
      "targetPosition": {
       "x": "0.32",
       "class": "PhotoCameraPosition",
       "zoomFactor": 1.1,
       "y": "0.47"
      },
      "scaleMode": "fit_outside",
      "initialPosition": {
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "zoomFactor": 1,
       "y": "0.50"
      },
      "easing": "linear",
      "class": "MovementPhotoCamera",
      "duration": 5000
     }
    },
    {
     "class": "PhotoPlayListItem",
     "media": {
      "thumbnailUrl": "media/photo_25361460_3D54_0A21_41C5_9CEF516D0083_t.jpg",
      "duration": 5000,
      "label": "DJI_0415",
      "width": 4900,
      "id": "photo_25361460_3D54_0A21_41C5_9CEF516D0083",
      "height": 3264,
      "class": "Photo",
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
      "targetPosition": {
       "x": "0.64",
       "class": "PhotoCameraPosition",
       "zoomFactor": 1.1,
       "y": "0.53"
      },
      "scaleMode": "fit_outside",
      "initialPosition": {
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "zoomFactor": 1,
       "y": "0.50"
      },
      "easing": "linear",
      "class": "MovementPhotoCamera",
      "duration": 5000
     }
    },
    {
     "class": "PhotoPlayListItem",
     "media": {
      "thumbnailUrl": "media/photo_2536E7CB_3D54_F667_41C8_0C74E4EA5879_t.jpg",
      "duration": 5000,
      "label": "DJI_0441",
      "width": 4900,
      "id": "photo_2536E7CB_3D54_F667_41C8_0C74E4EA5879",
      "height": 3264,
      "class": "Photo",
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
      "targetPosition": {
       "x": "0.31",
       "class": "PhotoCameraPosition",
       "zoomFactor": 1.1,
       "y": "0.32"
      },
      "scaleMode": "fit_outside",
      "initialPosition": {
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "zoomFactor": 1,
       "y": "0.50"
      },
      "easing": "linear",
      "class": "MovementPhotoCamera",
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
  "id": "playList_51EB770B_5E62_0A7C_41D3_A7A1B7A9C09E",
  "items": [
   {
    "class": "PhotoAlbumPlayListItem",
    "player": "this.ViewerAreaLabeled_9FD7235A_96CD_9045_41D9_23A3BCBDB1C6PhotoAlbumPlayer",
    "media": "this.album_1AE8DEB7_0EE7_8CC7_4198_F5B75788CCF6",
    "begin": "this.loopAlbum(this.playList_51EB770B_5E62_0A7C_41D3_A7A1B7A9C09E, 0)"
   }
  ]
 },
 "this.map_4E02A832_427B_EE04_41CC_8E1CEC03E8D3",
 {
  "class": "PlayList",
  "id": "playList_51D9F712_5E62_0A6C_41C0_534CF1076968",
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
    "class": "ImageResourceLevel",
    "width": 959,
    "url": "media/zoomImage_8E47938C_96CD_F0DD_41E1_7A3E325FC5AB_0_0.png"
   },
   {
    "height": 333,
    "class": "ImageResourceLevel",
    "width": 512,
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
  "duration": 400,
  "to": "bottom"
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
  "automaticZoomSpeed": 10,
  "id": "camera_5336C768_5E62_0ABC_41D6_3BF25B2767BA",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 8.04,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_53210772_5E62_0AAD_41C5_D753F7AFF95A",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.42,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_531A777C_5E62_0A95_41CF_19A8491DDB5D",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 17.08,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_53142785_5E62_0A77_41AF_D5B47D8AC818",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 7.78,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_530E078E_5E62_0A75_41D4_A3AD3E460B9A",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 17.08,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_53078797_5E62_0993_41D2_D7ABB48FFFB8",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -179.07,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_53F127A0_5E62_09AD_41B3_B9F50883D64C",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.8,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_53EA87AA_5E62_09BD_41C7_D128BD419AE4",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 7.79,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_53E487B3_5E62_0993_41C2_5A9A5F640A4A",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 6.88,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_53DD97BC_5E62_0995_41D2_21FC24D39D0F",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 8.64,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_53D787C5_5E62_09F7_4190_11599DC4B485",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.42,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_53C147CE_5E62_09F5_41D5_B098CAB8B320",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 17.08,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_53BA67D7_5E62_0993_41CB_0A39425A12C7",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -167.94,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_53B587E0_5E62_09AD_41C2_E8B3995CA0F4",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 17.08,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_53AE07E9_5E62_09BF_41D4_FCBB1D2A264D",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.32,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_539AF7F4_5E62_0995_41C0_B8CBBA512BFC",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 22.98,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_53934800_5E62_066C_41C1_5C59A7E9C758",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 7.79,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_538E680A_5E62_067C_41CB_C901C2ED0180",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 6.88,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_50794813_5E62_066C_41CB_CB24A67D4C69",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 8.64,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_5073881C_5E62_0694_416B_572B84D29E58",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 8.04,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_506F5826_5E62_06B4_41C7_C2CC8D1BF906",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 17.08,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_505A082F_5E62_06B4_41BA_9E3BB0A10950",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 7.78,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_50575837_5E62_0693_41D4_1725EA3163D9",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 1.8,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_50420840_5E62_06ED_41BA_D16CDBC87305",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.32,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_50307849_5E62_06FF_41A5_D8B546B24E23",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.8,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_502E8853_5E62_0693_41A9_66EE6B803B02",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 7.79,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_501BF85E_5E62_0695_41D4_BAC59CD76C8E",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 6.88,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_50080867_5E62_06B3_41D0_732851126596",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 8.64,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_5005A870_5E62_06AD_41B5_FB0F5D6955CE",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 8.04,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_50F3D879_5E62_069F_41C2_BCB33E4CAC89",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.42,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_50EF0885_5E62_0677_41CE_F7789736745C",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 7.78,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_50DD1897_5E62_0794_41D2_838FA788B603",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -97.1,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_50CB58AC_5E62_07B4_41D5_1C58858D8AEF",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.32,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_50B8D8C0_5E62_07EC_41A1_ED53E67F8822",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.8,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_50B6C8D4_5E62_0794_41D6_EFA265BB4950",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 7.79,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_50A258E8_5E62_07BC_41CA_E3BDA1415730",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 6.88,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_509078FB_5E62_0793_41C2_C1E9A4B6F6E1",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 8.64,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_508EA910_5E62_066D_41D7_14DD39B915B4",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 3.2,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_517A191E_5E62_0695_41B1_2FD1A2FA3A60",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.42,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_51682927_5E62_06B3_41B8_DAED22989B66",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 17.08,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_51650931_5E62_06AF_41C9_41224225B2A1",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 17.08,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_5154593A_5E62_069D_4192_27CD38497051",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 163.2,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_51414943_5E62_06F3_41D1_6897F867A3D4",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.8,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_5130794D_5E62_06F7_41D6_5A82B3155915",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 7.79,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_512E0957_5E62_0693_41D0_86FB21C7DC11",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 6.88,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_511CD961_5E62_06AF_41B7_408C6169236C",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 8.64,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_510A496A_5E62_06BD_41D4_D509F123CB2F",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 8.04,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_51F8E974_5E62_0695_41CF_B989D695C65F",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 5.61,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_51F6897E_5E62_0695_41BD_D1C670AB7503",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -18.22,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_51E35989_5E62_067F_41D4_7F31F9B3598C",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 7.78,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_51D2C992_5E62_066D_41C2_BAD6690F69A2",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.32,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_51C0099B_5E63_F993_41D5_DEA643553C17",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 23,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_51BEE9A5_5E63_F9B7_41D5_D139842C4F56",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 37.14,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_53FC49DA_5E63_F99D_41CA_D9FF0AE6A550",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 6.88,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_53F029E4_5E63_F9B5_41CD_652EB7E05491",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": -39.51,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_53F689ED_5E63_F9B7_41D6_BA3EA4F4E63C",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 8.04,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_53EA09F6_5E63_F995_41B1_B82BB455C3C8",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.42,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_53E00A00_5E63_FA6D_41B6_BF60A745B0B8",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 17.08,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_53E64A0A_5E63_FA7D_41C4_82D22AF6E487",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 82.78,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_53DBAA14_5E63_FA95_41AB_5306C57C7779",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 17.08,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_53D1AA1E_5E63_FA95_41BF_58C6A2FE394E",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.8,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_53D55A27_5E63_FAB3_41D4_FCF7F9C582D8",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 7.79,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_53CB1A31_5E63_FAAC_41D6_22FD30F9774F",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 6.88,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_53C03A3B_5E63_FA9C_41D2_5B28EB5129B5",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 8.64,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_53B83A45_5E63_FAF4_41B1_076A9E8EAD49",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -137.98,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_53B24A4F_5E63_FAF4_41CA_6F968569D095",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.42,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_53ACEA58_5E63_FA9D_41D1_6C451F77665A",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 17.08,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_53A7EA61_5E63_FAAF_41BD_00CB3C6D7EB6",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 7.78,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_5390CA6B_5E63_FAB3_4182_8C0F269B15D4",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -145.28,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_538BAA74_5E63_FA95_4164_389BB11B18AB",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.32,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_53848A7D_5E63_FA97_41B9_7C8143D7430B",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 7.79,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_507FCA86_5E63_FA75_41D0_D0473BA5BC13",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 6.88,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_506ADA90_5E63_FA6D_4198_438AF02D1542",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 8.64,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_50646A99_5E63_FB9F_41CC_DA4D1C8713A9",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 8.04,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_5051BAA2_5E63_FBAD_417B_575A25CD7929",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.42,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_504CAAAC_5E63_FBB5_41C2_2FCC756BCE93",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 17.08,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_50380AB5_5E63_FB97_41D3_35B455171613",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 7.78,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_50354ABF_5E63_FB93_41C5_D4ADDCFD5F6F",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -145.31,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_5021EAC8_5E63_FBFD_41B8_1052951BC444",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.32,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_501E9AD1_5E63_FBEF_41D3_1C1EFE96C94E",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.8,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_500A6ADA_5E63_FB9D_41C0_3CC3C01399BF",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -161.06,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_50F8EAE4_5E63_FBB5_41D5_A05AB63B7EB5",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 8.64,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_50F4CAED_5E63_FBB7_41CD_D0C5BB255AFB",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 8.04,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_50E2EAF6_5E63_FB95_41BE_2FE4FF7CA2CE",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.42,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_50DF0AFF_5E63_FB93_41CB_22313A5DE2D9",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 17.08,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_50CB1B09_5E63_FA7F_41C5_E57BA89AB2B6",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 7.78,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_50B95B12_5E63_FA6D_41CE_680D17B79448",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 17.08,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_50B6FB1C_5E63_FA94_41A8_726CECDC1B88",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.32,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_50A34B24_5E63_FAB5_419B_43ADF4ABAF7C",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.8,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_509F3B2D_5E63_FAB7_4195_C71F3307E3ED",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 37.1,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
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
  "id": "effect_50863B34_5E63_FA95_41D6_C3150D8D84F4",
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
  "id": "effect_517BEB34_5E63_FA95_4166_88132397CB60",
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
  "autoplay": true,
  "maximumAngle": 231.16,
  "id": "audio_A83B2F1A_B250_204B_41B2_61A870B2B428",
  "loop": true,
  "audio": {
   "id": "audioresource_1D15163A_0EEB_BFC9_419F_EF5F7074EFB1",
   "mp3Url": "media/audio_A83B2F1A_B250_204B_41B2_61A870B2B428.mp3",
   "oggUrl": "media/audio_A83B2F1A_B250_204B_41B2_61A870B2B428.ogg",
   "class": "AudioResource"
  },
  "class": "DirectionalPanoramaAudio",
  "yaw": -17.74,
  "pitch": -7.7
 },
 {
  "autoplay": true,
  "maximumAngle": 97.14,
  "id": "audio_A875C8FE_B250_61CA_41D2_1BDD70C9887A",
  "loop": true,
  "audio": {
   "id": "audioresource_A84F2D34_B270_605F_41E2_4CF67AB762D2",
   "mp3Url": "media/audio_A875C8FE_B250_61CA_41D2_1BDD70C9887A.mp3",
   "oggUrl": "media/audio_A875C8FE_B250_61CA_41D2_1BDD70C9887A.ogg",
   "class": "AudioResource"
  },
  "class": "DirectionalPanoramaAudio",
  "yaw": 4.55,
  "pitch": -18.69
 },
 {
  "autoplay": true,
  "maximumAngle": 61.89,
  "id": "audio_A87513BA_B273_E04A_41AA_0102CD2EF1BE",
  "loop": true,
  "audio": {
   "id": "audioresource_A83107F8_B270_2FD6_41E2_DAE1F661A577",
   "mp3Url": "media/audio_A87513BA_B273_E04A_41AA_0102CD2EF1BE.mp3",
   "oggUrl": "media/audio_A87513BA_B273_E04A_41AA_0102CD2EF1BE.ogg",
   "class": "AudioResource"
  },
  "class": "DirectionalPanoramaAudio",
  "yaw": -10.86,
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
  "class": "DirectionalPanoramaAudio",
  "yaw": 0,
  "pitch": 0
 },
 {
  "autoplay": true,
  "maximumAngle": 265.52,
  "id": "audio_A8284F56_B270_60DB_41E0_27608EB2E0B9",
  "loop": true,
  "audio": "this.audioresource_A83107F8_B270_2FD6_41E2_DAE1F661A577",
  "class": "DirectionalPanoramaAudio",
  "yaw": -40.93,
  "pitch": 0.51
 },
 {
  "thumbnailUrl": "media/photo_1D911E4D_0EFC_8C4B_4180_DC7B2E0CE38C_t.jpg",
  "duration": 5000,
  "label": "7. Ben xe mien Dong moi",
  "width": 8192,
  "id": "photo_1D911E4D_0EFC_8C4B_4180_DC7B2E0CE38C",
  "height": 4096,
  "class": "Photo",
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
  "class": "DirectionalPanoramaAudio",
  "yaw": 0,
  "pitch": 0
 },
 "this.audio_58C48535_534B_1088_419D_65D26EA3E6EE",
 "this.audio_5F019C46_534B_1089_41CA_DD158DC6F095",
 "this.audio_5F11A888_534B_3198_41C1_CA34B7B483B7",
 "this.audio_5F3A7686_5349_3189_41B9_03AD1E92C6EA",
 "this.audio_5FD12071_5349_1088_41CE_1A9919606FBF",
 "this.audio_5F999E34_5349_3089_41A5_30E8148F4541",
 "this.audio_5FA8081E_5349_30B9_41D0_06F2A3501C10",
 "this.audio_5E6F6697_534F_3188_41D2_212D7D5C7CD4",
 "this.audio_5E08B9DF_534F_73B7_41C9_0C77F337DE42",
 "this.audio_5E20D107_534F_3088_4192_A9F38893E7D5",
 "this.audio_51D70E9C_5DEA_B3F4_41C9_7C42C4A1D34D",
 "this.audio_5116AAD0_5DE9_534C_41D3_54A18E2E7244",
 "this.audio_508C163F_5DEF_5335_41CB_6F4DF04ED378",
 "this.audio_5049FC7B_5DEF_D73D_41B8_AB9CCE43637C",
 "this.audio_502EF191_5DEE_F1CC_41D5_35D2DA805B06",
 "this.audio_53E0760B_5DE9_52DC_41AD_96CE4D26DD8B",
 "this.audio_53AB1146_5DE9_5154_41CA_FED3E44D14A9",
 "this.audio_51D70E9C_5DEA_B3F4_41C9_7C42C4A1D34D",
 {
  "autoplay": true,
  "id": "audio_539FD6DF_5E62_0B93_41D5_2F330E37207F",
  "audio": {
   "mp3Url": "media/audio_539FD6DF_5E62_0B93_41D5_2F330E37207F.mp3",
   "oggUrl": "media/audio_539FD6DF_5E62_0B93_41D5_2F330E37207F.ogg",
   "class": "AudioResource"
  },
  "class": "MediaAudio"
 },
 "this.audio_51D70E9C_5DEA_B3F4_41C9_7C42C4A1D34D"
], "children": [
 {
  "minWidth": 100,
  "progressBarBackgroundColorDirection": "vertical",
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "paddingRight": 0,
  "toolTipBackgroundColor": "#000000",
  "progressBorderRadius": 0,
  "class": "ViewerArea",
  "toolTipPaddingBottom": 4,
  "progressBackgroundOpacity": 1,
  "progressBarOpacity": 1,
  "playbackBarBorderColor": "#FFFFFF",
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "progressRight": 0,
  "toolTipShadowOpacity": 1,
  "toolTipOpacity": 0.7,
  "playbackBarHeight": 10,
  "shadow": false,
  "playbackBarHeadWidth": 6,
  "toolTipBorderSize": 1,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "toolTipFontStyle": "normal",
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarProgressBorderSize": 0,
  "progressBottom": 0,
  "paddingBottom": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarRight": 0,
  "progressBarBorderRadius": 0,
  "progressBorderSize": 0,
  "progressBarBorderSize": 0,
  "playbackBarProgressBorderRadius": 0,
  "playbackBarHeadShadowHorizontalLength": 0,
  "paddingTop": 0,
  "transitionMode": "blending",
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipShadowSpread": 0,
  "toolTipShadowColor": "#333333",
  "toolTipShadowBlurRadius": 3,
  "toolTipPaddingTop": 4,
  "toolTipShadowVerticalLength": 0,
  "toolTipFontColor": "#606060",
  "playbackBarBorderRadius": 0,
  "playbackBarProgressBorderColor": "#000000",
  "minHeight": 50,
  "playbackBarHeadBorderRadius": 0,
  "toolTipPaddingRight": 6,
  "toolTipTextShadowOpacity": 0,
  "toolTipTextShadowColor": "#000000",
  "toolTipFontSize": 11,
  "borderRadius": 0,
  "progressLeft": 0,
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarHeadBorderColor": "#000000",
  "progressBackgroundColorRatios": [
   0
  ],
  "playbackBarProgressOpacity": 1,
  "playbackBarLeft": 0,
  "borderSize": 0,
  "toolTipPaddingLeft": 6,
  "toolTipBorderColor": "#767676",
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadHeight": 15,
  "playbackBarBackgroundOpacity": 1,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "playbackBarBorderSize": 0,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadShadowOpacity": 0.7,
  "top": "0%",
  "toolTipBorderRadius": 3,
  "playbackBarHeadBorderSize": 0,
  "bottom": "0%",
  "progressBarBorderColor": "#000000",
  "id": "MainViewer",
  "toolTipTextShadowBlurRadius": 3,
  "paddingLeft": 0,
  "playbackBarHeadShadowColor": "#000000",
  "toolTipShadowHorizontalLength": 0,
  "playbackBarOpacity": 1,
  "toolTipFontWeight": "normal",
  "progressBackgroundColorDirection": "vertical",
  "playbackBarHeadOpacity": 1,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "progressHeight": 10,
  "left": "0%",
  "playbackBarHeadShadow": true,
  "progressBorderColor": "#000000",
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
  "minWidth": 500,
  "scrollBarOpacity": 0.5,
  "maxHeight": 55,
  "minHeight": 55,
  "paddingRight": 0,
  "height": 50,
  "class": "Container",
  "width": 500,
  "contentOpaque": false,
  "borderRadius": 5,
  "borderSize": 0,
  "gap": 5,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "shadow": false,
  "layout": "horizontal",
  "top": "3%",
  "paddingBottom": 0,
  "id": "Container_807F782A_8E23_A905_41DE_623121285A09",
  "paddingLeft": 0,
  "horizontalAlign": "right",
  "paddingTop": 0,
  "backgroundOpacity": 0,
  "maxWidth": 500,
  "right": "1.5%",
  "children": [
   {
    "scrollBarColor": "#000000",
    "overflow": "visible",
    "minWidth": 100,
    "scrollBarOpacity": 0.5,
    "maxHeight": 55,
    "minHeight": 55,
    "paddingRight": 0,
    "height": 55,
    "class": "Container",
    "width": 400,
    "contentOpaque": false,
    "borderRadius": 0,
    "borderSize": 0,
    "gap": 0,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "shadow": false,
    "layout": "horizontal",
    "horizontalAlign": "right",
    "visible": false,
    "paddingBottom": 0,
    "id": "Container_80D3CF90_8E26_E705_41E0_E47025A2C106",
    "paddingLeft": 0,
    "paddingTop": 0,
    "backgroundOpacity": 0,
    "children": [
     "this.IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37",
     {
      "verticalAlign": "middle",
      "minWidth": 1,
      "maxHeight": 60,
      "mode": "toggle",
      "minHeight": 1,
      "paddingRight": 0,
      "toolTipBackgroundColor": "#000000",
      "iconURL": "skin/IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA.png",
      "height": "100%",
      "class": "IconButton",
      "toolTip": "Full Screen",
      "toolTipTextShadowOpacity": 0,
      "toolTipPaddingBottom": 4,
      "transparencyActive": true,
      "toolTipTextShadowColor": "#000000",
      "toolTipPaddingRight": 6,
      "width": "100%",
      "toolTipFontSize": 11,
      "borderRadius": 0,
      "toolTipShadowOpacity": 1,
      "toolTipOpacity": 0.7,
      "borderSize": 0,
      "toolTipPaddingLeft": 6,
      "toolTipBorderColor": "#767676",
      "shadow": false,
      "click": "if(!this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, true, 0, null, null, false) } else if(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, false, 0, null, null, false) }",
      "toolTipFontStyle": "normal",
      "toolTipBorderRadius": 3,
      "toolTipBorderSize": 1,
      "cursor": "hand",
      "paddingBottom": 0,
      "toolTipTextShadowBlurRadius": 3,
      "id": "IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA",
      "paddingLeft": 0,
      "horizontalAlign": "center",
      "toolTipShadowHorizontalLength": 0,
      "toolTipFontWeight": "normal",
      "toolTipShadowSpread": 0,
      "paddingTop": 0,
      "toolTipShadowColor": "#333333",
      "toolTipShadowBlurRadius": 3,
      "pressedIconURL": "skin/IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA_pressed.png",
      "toolTipPaddingTop": 4,
      "toolTipShadowVerticalLength": 0,
      "maxWidth": 60,
      "toolTipFontFamily": "Arial",
      "backgroundOpacity": 0,
      "toolTipFontColor": "#606060"
     },
     {
      "verticalAlign": "middle",
      "minWidth": 1,
      "maxHeight": 60,
      "mode": "toggle",
      "minHeight": 1,
      "paddingRight": 0,
      "toolTipBackgroundColor": "#000000",
      "iconURL": "skin/IconButton_8105A313_8E22_BF0B_41E1_331C6035A930.png",
      "height": "100%",
      "class": "IconButton",
      "toolTip": "Audio On/Off",
      "toolTipTextShadowOpacity": 0,
      "toolTipPaddingBottom": 4,
      "transparencyActive": true,
      "toolTipTextShadowColor": "#000000",
      "toolTipPaddingRight": 6,
      "width": "100%",
      "toolTipFontSize": 11,
      "borderRadius": 0,
      "toolTipShadowOpacity": 1,
      "toolTipOpacity": 0.7,
      "borderSize": 0,
      "toolTipPaddingLeft": 6,
      "toolTipBorderColor": "#767676",
      "shadow": false,
      "click": "if(!this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, true, 0, this.effect_CACBF85D_EED0_7261_41DB_A3B65ECE0D5D, 'showEffect', false) } else if(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, false, 0, this.effect_CACBC85D_EED0_7261_41BE_8CF4C3A8170C, 'hideEffect', false) }",
      "toolTipFontStyle": "normal",
      "toolTipBorderRadius": 3,
      "toolTipBorderSize": 1,
      "cursor": "hand",
      "paddingBottom": 0,
      "toolTipTextShadowBlurRadius": 3,
      "id": "IconButton_8105A313_8E22_BF0B_41E1_331C6035A930",
      "paddingLeft": 0,
      "horizontalAlign": "center",
      "toolTipShadowHorizontalLength": 0,
      "toolTipFontWeight": "normal",
      "toolTipShadowSpread": 0,
      "paddingTop": 0,
      "toolTipShadowColor": "#333333",
      "toolTipShadowBlurRadius": 3,
      "pressedIconURL": "skin/IconButton_8105A313_8E22_BF0B_41E1_331C6035A930_pressed.png",
      "toolTipPaddingTop": 4,
      "toolTipShadowVerticalLength": 0,
      "maxWidth": 60,
      "toolTipFontFamily": "Arial",
      "backgroundOpacity": 0,
      "toolTipFontColor": "#606060"
     },
     "this.IconButton_80E5955A_8E23_BB05_41CA_43DD61DBAEE9"
    ],
    "verticalAlign": "middle",
    "scrollBarVisible": "rollOver"
   },
   {
    "verticalAlign": "middle",
    "minWidth": 55,
    "maxHeight": 55,
    "mode": "toggle",
    "minHeight": 55,
    "paddingRight": 0,
    "toolTipBackgroundColor": "#000000",
    "iconURL": "skin/IconButton_811D89E1_8E3D_AB07_4191_94003C90B2FF.png",
    "height": "100%",
    "class": "IconButton",
    "toolTip": "Settings",
    "toolTipTextShadowOpacity": 0,
    "toolTipPaddingBottom": 4,
    "transparencyActive": true,
    "toolTipTextShadowColor": "#000000",
    "toolTipPaddingRight": 6,
    "width": "100%",
    "toolTipFontSize": 11,
    "borderRadius": 0,
    "toolTipShadowOpacity": 1,
    "toolTipOpacity": 0.7,
    "borderSize": 0,
    "toolTipPaddingLeft": 6,
    "toolTipBorderColor": "#767676",
    "shadow": false,
    "click": "if(!this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, true, 0, this.effect_32C91197_3F22_3110_4181_9E76B593FBFE, 'showEffect', false) } else if(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, false, 0, this.effect_32C92197_3F22_3110_419D_E2E21968F16F, 'hideEffect', false) }",
    "toolTipFontStyle": "normal",
    "toolTipBorderRadius": 3,
    "toolTipBorderSize": 1,
    "cursor": "hand",
    "paddingBottom": 0,
    "toolTipTextShadowBlurRadius": 3,
    "id": "IconButton_811D89E1_8E3D_AB07_4191_94003C90B2FF",
    "paddingLeft": 0,
    "horizontalAlign": "center",
    "toolTipShadowHorizontalLength": 0,
    "toolTipFontWeight": "normal",
    "toolTipShadowSpread": 0,
    "paddingTop": 0,
    "toolTipShadowColor": "#333333",
    "toolTipShadowBlurRadius": 3,
    "pressedIconURL": "skin/IconButton_811D89E1_8E3D_AB07_4191_94003C90B2FF_pressed.png",
    "toolTipPaddingTop": 4,
    "toolTipShadowVerticalLength": 0,
    "maxWidth": 55,
    "toolTipFontFamily": "Arial",
    "backgroundOpacity": 0,
    "toolTipFontColor": "#606060"
   }
  ],
  "verticalAlign": "middle",
  "scrollBarVisible": "rollOver"
 },
 {
  "backgroundColorRatios": [
   0,
   1
  ],
  "backgroundColorDirection": "vertical",
  "overflow": "scroll",
  "minWidth": 1,
  "scrollBarOpacity": 0.5,
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "verticalAlign": "top",
  "minHeight": 1,
  "paddingRight": 0,
  "scrollBarColor": "#000000",
  "height": "100%",
  "class": "Container",
  "width": "100%",
  "contentOpaque": false,
  "borderRadius": 0,
  "borderSize": 0,
  "gap": 10,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "shadow": false,
  "layout": "absolute",
  "horizontalAlign": "left",
  "top": "0%",
  "visible": false,
  "paddingBottom": 0,
  "id": "Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB",
  "paddingLeft": 0,
  "paddingTop": 0,
  "left": "0%",
  "backgroundOpacity": 0.7,
  "children": [
   "this.ViewerAreaLabeled_9FD7235A_96CD_9045_41D9_23A3BCBDB1C6",
   "this.IconButton_9FEA51EA_96CC_905A_41D3_F42DB0CD0A74",
   "this.IconButton_9FB9BD3F_96C5_703B_41D7_65AEE6E85A96",
   "this.IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4"
  ],
  "scrollBarVisible": "rollOver"
 },
 {
  "verticalAlign": "middle",
  "minWidth": 50,
  "maxHeight": 50,
  "mode": "push",
  "minHeight": 50,
  "paddingRight": 0,
  "iconURL": "skin/IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB.png",
  "height": "5.482%",
  "class": "IconButton",
  "width": "3.03%",
  "transparencyActive": true,
  "borderRadius": 0,
  "borderSize": 0,
  "rollOverIconURL": "skin/IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB_rollover.png",
  "shadow": false,
  "top": "2%",
  "cursor": "hand",
  "visible": false,
  "paddingBottom": 0,
  "id": "IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB",
  "paddingLeft": 0,
  "horizontalAlign": "center",
  "paddingTop": 0,
  "maxWidth": 50,
  "right": "2%",
  "backgroundOpacity": 0
 },
 {
  "backgroundColorRatios": [
   0,
   1
  ],
  "backgroundColorDirection": "vertical",
  "overflow": "scroll",
  "minWidth": 1,
  "scrollBarOpacity": 0.5,
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "minHeight": 1,
  "paddingRight": 0,
  "scrollBarColor": "#000000",
  "class": "Container",
  "contentOpaque": false,
  "borderRadius": 0,
  "borderSize": 0,
  "gap": 10,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "shadow": false,
  "layout": "absolute",
  "horizontalAlign": "left",
  "top": "0%",
  "visible": false,
  "paddingBottom": 0,
  "bottom": "0%",
  "id": "Container_53347472_4288_F6E6_4196_D7457B47D2CF",
  "paddingLeft": 0,
  "paddingTop": 0,
  "left": "0%",
  "backgroundOpacity": 0.3,
  "right": "0%",
  "children": [
   "this.MapViewer",
   {
    "verticalAlign": "middle",
    "minWidth": 50,
    "maxHeight": 50,
    "mode": "push",
    "minHeight": 50,
    "paddingRight": 0,
    "iconURL": "skin/IconButton_50D1A26C_4289_72E1_41CD_2B557DFCC24F.png",
    "height": "5.91%",
    "class": "IconButton",
    "width": "5.07%",
    "transparencyActive": true,
    "borderRadius": 0,
    "borderSize": 0,
    "rollOverIconURL": "skin/IconButton_50D1A26C_4289_72E1_41CD_2B557DFCC24F_rollover.png",
    "shadow": false,
    "click": "this.setComponentVisibility(this.Container_53347472_4288_F6E6_4196_D7457B47D2CF, false, 0, this.effect_500E3733_4297_3267_41C9_4935C0BEBF39, 'hideEffect', false)",
    "top": "5%",
    "cursor": "hand",
    "paddingBottom": 0,
    "id": "IconButton_50D1A26C_4289_72E1_41CD_2B557DFCC24F",
    "paddingLeft": 0,
    "horizontalAlign": "center",
    "paddingTop": 0,
    "maxWidth": 50,
    "right": "5%",
    "backgroundOpacity": 0
   }
  ],
  "verticalAlign": "top",
  "scrollBarVisible": "rollOver"
 },
 {
  "scrollBarColor": "#000000",
  "overflow": "visible",
  "minWidth": 1,
  "scrollBarOpacity": 0.5,
  "maxHeight": 160,
  "minHeight": 130,
  "paddingRight": 0,
  "height": 160,
  "class": "Container",
  "contentOpaque": false,
  "borderRadius": 0,
  "borderSize": 0,
  "gap": 3,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "shadow": false,
  "layout": "vertical",
  "horizontalAlign": "center",
  "paddingBottom": 0,
  "bottom": "0.7%",
  "id": "Container_6EC9FEC0_76A2_F957_41C5_79AD4AF65B38",
  "paddingLeft": 0,
  "paddingTop": 0,
  "left": "15%",
  "backgroundOpacity": 0,
  "right": "15%",
  "children": [
   {
    "rollOverItemThumbnailShadow": true,
    "minWidth": 50,
    "maxHeight": 100,
    "itemLabelFontFamily": "Arial",
    "paddingRight": 5,
    "itemBackgroundColorRatios": [],
    "class": "ThumbnailList",
    "backgroundColor": [
     "#000000"
    ],
    "rollOverItemBackgroundColorDirection": "vertical",
    "gap": 7,
    "itemThumbnailHeight": 60,
    "selectedItemThumbnailShadowHorizontalLength": 0,
    "selectedItemBackgroundColor": [],
    "scrollBarWidth": 5,
    "scrollBarMargin": 2,
    "shadow": false,
    "itemHorizontalAlign": "center",
    "itemMode": "normal",
    "playList": "this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist",
    "horizontalAlign": "left",
    "rollOverItemBackgroundColor": [
     "#000000"
    ],
    "layout": "horizontal",
    "paddingBottom": 5,
    "rollOverItemThumbnailShadowBlurRadius": 15,
    "rollOverItemLabelFontColor": "#FFFFFF",
    "itemLabelFontColor": "#FFFFFF",
    "selectedItemLabelFontStyle": "italic",
    "rollOverItemLabelFontWeight": "bold",
    "itemPaddingBottom": 3,
    "paddingTop": 5,
    "selectedItemLabelFontColor": "#FFFFFF",
    "itemThumbnailScaleMode": "fit_outside",
    "selectedItemLabelTextDecoration": "underline",
    "maxWidth": 770,
    "itemLabelFontWeight": "normal",
    "itemThumbnailShadow": false,
    "itemThumbnailOpacity": 1,
    "rollOverItemLabelFontStyle": "normal",
    "backgroundColorRatios": [
     0
    ],
    "backgroundColorDirection": "vertical",
    "itemThumbnailBorderRadius": 30,
    "scrollBarOpacity": 1,
    "rollOverItemThumbnailShadowHorizontalLength": 0,
    "rollOverItemLabelTextDecoration": "underline",
    "scrollBarColor": "#52B7EF",
    "itemLabelTextDecoration": "none",
    "scrollBarVisible": "rollOver",
    "minHeight": 70,
    "itemPaddingRight": 3,
    "rollOverItemBackgroundColorRatios": [
     0
    ],
    "itemLabelFontStyle": "normal",
    "height": "100%",
    "selectedItemThumbnailShadowBlurRadius": 15,
    "itemThumbnailWidth": 60,
    "selectedItemThumbnailShadow": true,
    "itemLabelHorizontalAlign": "center",
    "borderRadius": 3,
    "selectedItemLabelFontSize": 11,
    "borderSize": 0,
    "itemBorderRadius": 0,
    "rollOverItemThumbnailShadowColor": "#FFFFFF",
    "itemPaddingLeft": 3,
    "selectedItemThumbnailShadowVerticalLength": 0,
    "selectedItemThumbnailShadowOpacity": 1,
    "width": "100%",
    "selectedItemBorderSize": 0,
    "itemPaddingTop": 3,
    "selectedItemBorderRadius": 0,
    "itemVerticalAlign": "middle",
    "itemBackgroundOpacity": 0,
    "selectedItemThumbnailShadowColor": "#FFFFFF",
    "id": "ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472",
    "paddingLeft": 5,
    "rollOverItemBackgroundOpacity": 0,
    "itemLabelGap": 5,
    "selectedItemLabelFontWeight": "bold",
    "selectedItemBackgroundColorRatios": [],
    "itemOpacity": 1,
    "rollOverItemThumbnailShadowOpacity": 1,
    "itemBackgroundColor": [],
    "itemLabelFontSize": 11,
    "selectedItemBackgroundOpacity": 0,
    "itemBackgroundColorDirection": "vertical",
    "itemLabelPosition": "bottom",
    "backgroundOpacity": 0.25,
    "rollOverItemThumbnailShadowVerticalLength": 0,
    "verticalAlign": "top"
   },
   {
    "scrollBarColor": "#000000",
    "overflow": "visible",
    "minWidth": 70,
    "scrollBarOpacity": 0.5,
    "maxHeight": 55,
    "minHeight": 55,
    "paddingRight": 0,
    "height": 55,
    "class": "Container",
    "width": 70,
    "contentOpaque": false,
    "borderRadius": 5,
    "borderSize": 0,
    "gap": 0,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "shadow": false,
    "layout": "absolute",
    "paddingBottom": 0,
    "id": "Container_86F3A56C_8E22_5B1D_41CA_9CE53436FE56",
    "paddingLeft": 0,
    "horizontalAlign": "center",
    "paddingTop": 0,
    "backgroundOpacity": 0,
    "maxWidth": 70,
    "children": [
     {
      "verticalAlign": "middle",
      "minWidth": 25,
      "maxHeight": 70,
      "mode": "push",
      "minHeight": 25,
      "paddingRight": 0,
      "toolTipBackgroundColor": "#000000",
      "iconURL": "skin/IconButton_87577B8F_8E22_AF1B_41CC_79EB87AE6DED.png",
      "height": "100%",
      "class": "IconButton",
      "toolTip": "Info",
      "toolTipTextShadowOpacity": 0,
      "toolTipPaddingBottom": 4,
      "transparencyActive": true,
      "toolTipTextShadowColor": "#000000",
      "toolTipPaddingRight": 6,
      "width": "100%",
      "toolTipFontSize": 11,
      "borderRadius": 0,
      "toolTipShadowOpacity": 1,
      "toolTipOpacity": 0.7,
      "borderSize": 0,
      "rollOverIconURL": "skin/IconButton_87577B8F_8E22_AF1B_41CC_79EB87AE6DED_rollover.png",
      "toolTipPaddingLeft": 6,
      "toolTipBorderColor": "#767676",
      "shadow": false,
      "click": "this.showPopupImage(this.ImageResource_6ECEF4DB_6091_DDD1_41D4_2B884570086A, null, '85%', '85%', this.FadeInEffect_8ED05F70_96C4_F045_41DC_2AB82A556F92, this.FadeOutEffect_8ED06F70_96C4_F045_41DA_C74400CF7B15, {'rollOverIconWidth':25,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorDirection':'vertical','rollOverBackgroundColor':['#000000','#000000','#000000'],'pressedBackgroundColor':['#000000','#000000','#000000'],'iconHeight':25,'rollOverIconColor':'#52B7EF','backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorDirection':'vertical','pressedBorderSize':0,'iconColor':'#FFFFFF','iconLineWidth':3,'backgroundColor':['#000000','#000000','#000000'],'paddingBottom':10,'pressedIconLineWidth':3,'borderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundOpacity':0.3,'paddingTop':10,'pressedIconColor':'#CCCCCC','paddingRight':10,'pressedBackgroundColorDirection':'vertical','paddingLeft':10,'borderSize':0,'pressedIconWidth':25,'pressedIconHeight':25,'backgroundOpacity':0.15,'rollOverBorderColor':'#000000','rollOverBackgroundOpacity':0.5,'iconWidth':25,'rollOverIconHeight':25,'rollOverIconLineWidth':3}, null, null, false)",
      "toolTipFontStyle": "normal",
      "toolTipBorderRadius": 3,
      "toolTipBorderSize": 1,
      "cursor": "hand",
      "visible": false,
      "paddingBottom": 0,
      "toolTipTextShadowBlurRadius": 3,
      "id": "IconButton_87577B8F_8E22_AF1B_41CC_79EB87AE6DED",
      "paddingLeft": 0,
      "horizontalAlign": "center",
      "toolTipShadowHorizontalLength": 0,
      "toolTipFontWeight": "normal",
      "toolTipShadowSpread": 0,
      "paddingTop": 0,
      "toolTipShadowColor": "#333333",
      "toolTipShadowBlurRadius": 3,
      "toolTipPaddingTop": 4,
      "toolTipShadowVerticalLength": 0,
      "maxWidth": 70,
      "toolTipFontFamily": "Arial",
      "backgroundOpacity": 0,
      "toolTipFontColor": "#606060"
     },
     {
      "verticalAlign": "middle",
      "minWidth": 25,
      "maxHeight": 70,
      "mode": "push",
      "minHeight": 25,
      "paddingRight": 0,
      "toolTipBackgroundColor": "#000000",
      "iconURL": "skin/IconButton_213ED70C_2DB2_E6C5_41B6_0CCE6C77E889.png",
      "height": "100%",
      "class": "IconButton",
      "toolTip": "Play Video",
      "toolTipTextShadowOpacity": 0,
      "toolTipPaddingBottom": 4,
      "transparencyActive": true,
      "toolTipTextShadowColor": "#000000",
      "toolTipPaddingRight": 6,
      "width": "100%",
      "toolTipFontSize": 11,
      "borderRadius": 0,
      "toolTipShadowOpacity": 1,
      "toolTipOpacity": 0.7,
      "borderSize": 0,
      "rollOverIconURL": "skin/IconButton_213ED70C_2DB2_E6C5_41B6_0CCE6C77E889_rollover.png",
      "toolTipPaddingLeft": 6,
      "toolTipBorderColor": "#767676",
      "shadow": false,
      "click": "this.setMediaBehaviour(this.playList_51EA670A_5E62_0A7C_41D7_799217FDB020, 0); this.MainViewerVideoPlayer.play()",
      "toolTipFontStyle": "normal",
      "toolTipBorderRadius": 3,
      "toolTipBorderSize": 1,
      "cursor": "hand",
      "visible": false,
      "paddingBottom": 0,
      "toolTipTextShadowBlurRadius": 3,
      "id": "IconButton_213ED70C_2DB2_E6C5_41B6_0CCE6C77E889",
      "paddingLeft": 0,
      "horizontalAlign": "center",
      "toolTipShadowHorizontalLength": 0,
      "toolTipFontWeight": "normal",
      "toolTipShadowSpread": 0,
      "paddingTop": 0,
      "toolTipShadowColor": "#333333",
      "toolTipShadowBlurRadius": 3,
      "toolTipPaddingTop": 4,
      "toolTipShadowVerticalLength": 0,
      "maxWidth": 70,
      "toolTipFontFamily": "Arial",
      "backgroundOpacity": 0,
      "toolTipFontColor": "#606060"
     },
     {
      "verticalAlign": "top",
      "minWidth": 70,
      "maxHeight": 55,
      "mode": "push",
      "minHeight": 55,
      "paddingRight": 0,
      "toolTipBackgroundColor": "#000000",
      "iconURL": "skin/IconButton_67A0F254_76E6_A97F_419D_52AF6E3FE7C0.png",
      "height": "100%",
      "class": "IconButton",
      "toolTip": "Show Panorama List",
      "toolTipTextShadowOpacity": 0,
      "toolTipPaddingBottom": 4,
      "transparencyActive": true,
      "toolTipTextShadowColor": "#000000",
      "toolTipPaddingRight": 6,
      "width": "100%",
      "toolTipFontSize": 11,
      "borderRadius": 0,
      "toolTipShadowOpacity": 1,
      "toolTipOpacity": 0.7,
      "borderSize": 0,
      "toolTipPaddingLeft": 6,
      "toolTipBorderColor": "#767676",
      "shadow": false,
      "click": "this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, true, 0, this.effect_508929C3_77ED_DB59_41D8_05A6C8F0681B, 'showEffect', false); this.setComponentVisibility(this.IconButton_843BBEF5_8E22_690F_419D_28CBDD771ACC, true, 0, this.effect_508929C3_77ED_DB59_41D8_05A6C8F0681B, 'showEffect', false); this.setComponentVisibility(this.IconButton_67A0F254_76E6_A97F_419D_52AF6E3FE7C0, false, 0, this.effect_518C2CD2_77ED_D97B_41C3_3AC87D499717, 'hideEffect', false)",
      "toolTipFontStyle": "normal",
      "toolTipBorderRadius": 3,
      "toolTipBorderSize": 1,
      "cursor": "hand",
      "visible": false,
      "paddingBottom": 0,
      "toolTipTextShadowBlurRadius": 3,
      "id": "IconButton_67A0F254_76E6_A97F_419D_52AF6E3FE7C0",
      "paddingLeft": 0,
      "horizontalAlign": "center",
      "toolTipShadowHorizontalLength": 0,
      "toolTipFontWeight": "normal",
      "toolTipShadowSpread": 0,
      "paddingTop": 0,
      "toolTipShadowColor": "#333333",
      "toolTipShadowBlurRadius": 3,
      "toolTipPaddingTop": 4,
      "toolTipShadowVerticalLength": 0,
      "maxWidth": 70,
      "toolTipFontFamily": "Arial",
      "backgroundOpacity": 0,
      "toolTipFontColor": "#606060"
     },
     {
      "verticalAlign": "top",
      "minWidth": 70,
      "maxHeight": 55,
      "mode": "push",
      "minHeight": 55,
      "paddingRight": 0,
      "toolTipBackgroundColor": "#000000",
      "iconURL": "skin/IconButton_843BBEF5_8E22_690F_419D_28CBDD771ACC.png",
      "height": "100%",
      "class": "IconButton",
      "toolTip": "Hide Panorama List",
      "toolTipTextShadowOpacity": 0,
      "toolTipPaddingBottom": 4,
      "transparencyActive": true,
      "toolTipTextShadowColor": "#000000",
      "toolTipPaddingRight": 6,
      "width": "100%",
      "toolTipFontSize": 11,
      "borderRadius": 0,
      "toolTipShadowOpacity": 1,
      "toolTipOpacity": 0.7,
      "borderSize": 0,
      "toolTipPaddingLeft": 6,
      "toolTipBorderColor": "#767676",
      "shadow": false,
      "click": "this.setComponentVisibility(this.IconButton_67A0F254_76E6_A97F_419D_52AF6E3FE7C0, true, 0, this.effect_640860A9_76E7_E929_4192_305B50E5610A, 'showEffect', false); this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, false, 0, this.effect_5032FA51_77E2_5979_41D1_45E5EF039077, 'hideEffect', false); this.setComponentVisibility(this.IconButton_843BBEF5_8E22_690F_419D_28CBDD771ACC, false, 0, this.effect_5032FA51_77E2_5979_41D1_45E5EF039077, 'hideEffect', false)",
      "toolTipFontStyle": "normal",
      "toolTipBorderRadius": 3,
      "toolTipBorderSize": 1,
      "cursor": "hand",
      "paddingBottom": 0,
      "toolTipTextShadowBlurRadius": 3,
      "id": "IconButton_843BBEF5_8E22_690F_419D_28CBDD771ACC",
      "paddingLeft": 0,
      "horizontalAlign": "center",
      "toolTipShadowHorizontalLength": 0,
      "toolTipFontWeight": "normal",
      "toolTipShadowSpread": 0,
      "paddingTop": 0,
      "toolTipShadowColor": "#333333",
      "toolTipShadowBlurRadius": 3,
      "toolTipPaddingTop": 4,
      "toolTipShadowVerticalLength": 0,
      "maxWidth": 70,
      "toolTipFontFamily": "Arial",
      "backgroundOpacity": 0,
      "toolTipFontColor": "#606060"
     },
     "this.IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED",
     {
      "verticalAlign": "middle",
      "minWidth": 25,
      "maxHeight": 70,
      "mode": "push",
      "minHeight": 25,
      "paddingRight": 0,
      "toolTipBackgroundColor": "#000000",
      "iconURL": "skin/IconButton_2FC9210C_3E8F_C4D4_41A7_10D1404CA49B.png",
      "height": "85%",
      "class": "IconButton",
      "toolTip": "FLoor Plan",
      "toolTipTextShadowOpacity": 0,
      "toolTipPaddingBottom": 4,
      "transparencyActive": true,
      "toolTipTextShadowColor": "#000000",
      "toolTipPaddingRight": 6,
      "width": "85%",
      "toolTipFontSize": 11,
      "borderRadius": 0,
      "toolTipShadowOpacity": 1,
      "toolTipOpacity": 0.7,
      "borderSize": 0,
      "toolTipPaddingLeft": 6,
      "toolTipBorderColor": "#767676",
      "shadow": false,
      "click": "this.setComponentVisibility(this.Container_53347472_4288_F6E6_4196_D7457B47D2CF, true, 0, this.effect_51CB7B74_4299_12E2_41B4_829087983DE5, 'showEffect', false)",
      "toolTipFontStyle": "normal",
      "toolTipBorderRadius": 3,
      "toolTipBorderSize": 1,
      "cursor": "hand",
      "visible": false,
      "paddingBottom": 0,
      "toolTipTextShadowBlurRadius": 3,
      "id": "IconButton_2FC9210C_3E8F_C4D4_41A7_10D1404CA49B",
      "paddingLeft": 0,
      "horizontalAlign": "center",
      "toolTipShadowHorizontalLength": 0,
      "toolTipFontWeight": "normal",
      "toolTipShadowSpread": 0,
      "paddingTop": 0,
      "toolTipShadowColor": "#333333",
      "toolTipShadowBlurRadius": 3,
      "pressedIconURL": "skin/IconButton_2FC9210C_3E8F_C4D4_41A7_10D1404CA49B_pressed.png",
      "toolTipPaddingTop": 4,
      "toolTipShadowVerticalLength": 0,
      "maxWidth": 70,
      "toolTipFontFamily": "Arial",
      "backgroundOpacity": 0,
      "toolTipFontColor": "#606060"
     }
    ],
    "verticalAlign": "middle",
    "scrollBarVisible": "rollOver"
   }
  ],
  "verticalAlign": "bottom",
  "scrollBarVisible": "rollOver"
 },
 {
  "backgroundColorRatios": [
   0
  ],
  "backgroundColorDirection": "vertical",
  "minWidth": 0,
  "backgroundColor": [
   "#000000"
  ],
  "minHeight": 0,
  "paddingRight": 0,
  "class": "UIComponent",
  "borderRadius": 0,
  "borderSize": 0,
  "shadow": false,
  "showEffect": {
   "easing": "cubic_in_out",
   "class": "FadeInEffect",
   "duration": 350
  },
  "top": 0,
  "visible": false,
  "paddingBottom": 0,
  "bottom": 0,
  "id": "veilPopupPanorama",
  "paddingLeft": 0,
  "paddingTop": 0,
  "left": 0,
  "backgroundOpacity": 0.55,
  "right": 0
 },
 {
  "backgroundColorRatios": [],
  "backgroundColorDirection": "vertical",
  "minWidth": 0,
  "backgroundColor": [],
  "minHeight": 0,
  "paddingRight": 0,
  "class": "ZoomImage",
  "borderRadius": 0,
  "borderSize": 0,
  "scaleMode": "custom",
  "shadow": false,
  "top": 0,
  "visible": false,
  "paddingBottom": 0,
  "bottom": 0,
  "id": "zoomImagePopupPanorama",
  "paddingLeft": 0,
  "paddingTop": 0,
  "left": 0,
  "backgroundOpacity": 1,
  "right": 0
 },
 {
  "backgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "backgroundColorDirection": "vertical",
  "minWidth": 0,
  "iconHeight": 20,
  "paddingRight": 5,
  "fontSize": 12,
  "mode": "push",
  "minHeight": 0,
  "backgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "textDecoration": "none",
  "iconColor": "#000000",
  "class": "CloseButton",
  "fontFamily": "Arial",
  "borderRadius": 0,
  "borderSize": 0,
  "fontStyle": "normal",
  "iconBeforeLabel": true,
  "iconWidth": 20,
  "shadow": false,
  "fontColor": "#FFFFFF",
  "layout": "horizontal",
  "horizontalAlign": "center",
  "top": 10,
  "fontWeight": "normal",
  "visible": false,
  "paddingBottom": 5,
  "borderColor": "#000000",
  "cursor": "hand",
  "id": "closeButtonPopupPanorama",
  "gap": 5,
  "paddingLeft": 5,
  "iconLineWidth": 5,
  "rollOverIconColor": "#666666",
  "shadowColor": "#000000",
  "pressedIconColor": "#888888",
  "shadowBlurRadius": 6,
  "paddingTop": 5,
  "showEffect": {
   "easing": "cubic_in_out",
   "class": "FadeInEffect",
   "duration": 350
  },
  "backgroundOpacity": 0.3,
  "label": "",
  "right": 10,
  "shadowSpread": 1,
  "verticalAlign": "middle"
 }
], 
 "overflow": "visible",
 "minWidth": 20,
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "verticalAlign": "top",
 "minHeight": 20,
 "scrollBarColor": "#000000",
 "mouseWheelEnabled": true,
 "height": "100%",
 "class": "Player",
 "width": "100%",
 "contentOpaque": false,
 "borderRadius": 0,
 "borderSize": 0,
 "gap": 10,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "shadow": false,
 "buttonToggleMute": "this.IconButton_8105A313_8E22_BF0B_41E1_331C6035A930",
 "vrPolyfillScale": 0.5,
 "horizontalAlign": "left",
 "backgroundPreloadEnabled": true,
 "paddingBottom": 0,
 "scripts": {
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio) delete audios[audio.get('id')]; } if(audio) audio.stop(); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "unregisterKey": function(key){  delete window[key]; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "existsKey": function(key){  return key in window; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getKey": function(key){  return window[key]; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "registerKey": function(key, value){  window[key] = value; }
 },
 "layout": "absolute",
 "id": "rootPlayer",
 "paddingLeft": 0,
 "paddingTop": 0,
 "start": "this.playAudioList([this.audio_539FD6DF_5E62_0B93_41D5_2F330E37207F]); this.syncPlaylists([this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); this.playList_51D9F712_5E62_0A6C_41C0_534CF1076968.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA].forEach(function(component) { component.set('visible', false); }) }",
 "buttonToggleFullscreen": "this.IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA",
 "scrollBarVisible": "rollOver"
})