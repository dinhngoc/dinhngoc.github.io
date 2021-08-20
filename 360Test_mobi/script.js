TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "id": "MainViewerVideoPlayer",
  "buttonPlay": {
   "toolTipPaddingRight": 6,
   "verticalAlign": "middle",
   "toolTipBorderRadius": 3,
   "paddingRight": 0,
   "toolTipShadowOpacity": 1,
   "mode": "push",
   "iconURL": "skin/IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED.png",
   "height": "100%",
   "maxHeight": 70,
   "width": "100%",
   "paddingLeft": 0,
   "toolTipBorderColor": "#767676",
   "transparencyActive": true,
   "toolTip": "See Photos",
   "toolTipBorderSize": 1,
   "toolTipTextShadowColor": "#000000",
   "borderSize": 0,
   "toolTipBackgroundColor": "#000000",
   "toolTipPaddingLeft": 6,
   "borderRadius": 0,
   "horizontalAlign": "center",
   "minWidth": 25,
   "click": "this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, true, 0, this.effect_98AADBB0_96C5_F0C5_41B2_1C4D08E503DB, 'showEffect', false); this.playList_705CDACD_62E0_9089_41C9_3747EED92C94.set('selectedIndex', 0)",
   "toolTipTextShadowBlurRadius": 3,
   "toolTipOpacity": 0.7,
   "toolTipShadowVerticalLength": 0,
   "class": "IconButton",
   "maxWidth": 70,
   "toolTipPaddingBottom": 4,
   "minHeight": 25,
   "cursor": "hand",
   "visible": false,
   "paddingBottom": 0,
   "toolTipFontSize": 11,
   "shadow": false,
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
   "toolTipPaddingTop": 4,
   "rollOverIconURL": "skin/IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED_rollover.png",
   "toolTipFontStyle": "normal"
  },
  "viewerArea": "this.MainViewer",
  "displayPlaybackBar": true,
  "buttonStop": [
   {
    "verticalAlign": "middle",
    "paddingRight": 0,
    "mode": "push",
    "iconURL": "skin/IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4.png",
    "height": "5.48%",
    "maxHeight": 50,
    "width": "3.03%",
    "paddingLeft": 0,
    "transparencyActive": true,
    "borderSize": 0,
    "borderRadius": 0,
    "horizontalAlign": "center",
    "minWidth": 50,
    "click": "this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, false, 0, this.effect_9B0AF4E2_96C4_F045_41D3_0E00FEE03A15, 'hideEffect', false)",
    "class": "IconButton",
    "maxWidth": 50,
    "top": "2%",
    "minHeight": 50,
    "cursor": "hand",
    "paddingBottom": 0,
    "id": "IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4",
    "backgroundOpacity": 0,
    "paddingTop": 0,
    "shadow": false,
    "rollOverIconURL": "skin/IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4_rollover.png",
    "right": "2%"
   },
   "this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB"
  ],
  "class": "VideoPlayer"
 },
 {
  "buttonPrevious": {
   "verticalAlign": "middle",
   "paddingRight": 0,
   "mode": "push",
   "iconURL": "skin/IconButton_9FEA51EA_96CC_905A_41D3_F42DB0CD0A74.png",
   "maxHeight": 70,
   "width": "4.24%",
   "paddingLeft": 0,
   "transparencyActive": true,
   "borderSize": 0,
   "borderRadius": 0,
   "horizontalAlign": "center",
   "minWidth": 70,
   "class": "IconButton",
   "maxWidth": 70,
   "top": "40%",
   "minHeight": 70,
   "cursor": "hand",
   "paddingBottom": 0,
   "id": "IconButton_9FEA51EA_96CC_905A_41D3_F42DB0CD0A74",
   "backgroundOpacity": 0,
   "bottom": "40%",
   "paddingTop": 0,
   "left": "1%",
   "shadow": false,
   "rollOverIconURL": "skin/IconButton_9FEA51EA_96CC_905A_41D3_F42DB0CD0A74_rollover.png"
  },
  "id": "ViewerAreaLabeled_9FD7235A_96CD_9045_41D9_23A3BCBDB1C6PhotoAlbumPlayer",
  "class": "PhotoAlbumPlayer",
  "viewerArea": {
   "toolTipShadowOpacity": 1,
   "playbackBarHeadShadowOpacity": 0.7,
   "playbackBarBackgroundColor": [
    "#FFFFFF"
   ],
   "paddingRight": 0,
   "progressBarOpacity": 1,
   "playbackBarHeight": 10,
   "playbackBarHeadWidth": 6,
   "playbackBarProgressBorderSize": 0,
   "playbackBarBackgroundColorDirection": "vertical",
   "minWidth": 1,
   "playbackBarHeadShadow": true,
   "playbackBarRight": 0,
   "class": "ViewerArea",
   "progressBackgroundOpacity": 1,
   "progressBarBorderSize": 0,
   "toolTipPaddingBottom": 4,
   "progressBarBorderRadius": 0,
   "progressBorderRadius": 0,
   "toolTipFontWeight": "normal",
   "paddingBottom": 0,
   "toolTipFontSize": 11,
   "shadow": false,
   "toolTipShadowVerticalLength": 0,
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
   "playbackBarHeadShadowVerticalLength": 0,
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
   "playbackBarHeadShadowBlurRadius": 3,
   "playbackBarHeadBorderColor": "#000000",
   "playbackBarProgressOpacity": 1,
   "paddingLeft": 0,
   "toolTipBorderColor": "#767676",
   "height": "100%",
   "toolTipTextShadowColor": "#000000",
   "toolTipBorderSize": 1,
   "playbackBarHeadBackgroundColorDirection": "vertical",
   "playbackBarBackgroundOpacity": 1,
   "playbackBarBorderSize": 0,
   "borderSize": 0,
   "toolTipBackgroundColor": "#000000",
   "toolTipPaddingLeft": 6,
   "playbackBarHeadHeight": 15,
   "toolTipOpacity": 0.7,
   "playbackBarHeadBackgroundColorRatios": [
    0,
    1
   ],
   "toolTipTextShadowBlurRadius": 3,
   "playbackBarLeft": 0,
   "borderRadius": 0,
   "width": "100%",
   "playbackBarOpacity": 1,
   "playbackBarHeadShadowColor": "#000000",
   "progressRight": 0,
   "playbackBarHeadBorderSize": 0,
   "progressBarBackgroundColorRatios": [
    0
   ],
   "top": "0%",
   "minHeight": 1,
   "playbackBarHeadOpacity": 1,
   "progressOpacity": 1,
   "progressBackgroundColorDirection": "vertical",
   "progressBarBorderColor": "#000000",
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
   "playbackBarHeadShadowHorizontalLength": 0,
   "playbackBarProgressBackgroundColorDirection": "vertical",
   "toolTipPaddingTop": 4,
   "toolTipFontStyle": "normal"
  },
  "buttonNext": {
   "verticalAlign": "middle",
   "paddingRight": 0,
   "mode": "push",
   "iconURL": "skin/IconButton_9FB9BD3F_96C5_703B_41D7_65AEE6E85A96.png",
   "maxHeight": 70,
   "width": "4.24%",
   "paddingLeft": 0,
   "transparencyActive": true,
   "borderSize": 0,
   "borderRadius": 0,
   "horizontalAlign": "center",
   "minWidth": 70,
   "class": "IconButton",
   "maxWidth": 70,
   "top": "40%",
   "minHeight": 70,
   "cursor": "hand",
   "paddingBottom": 0,
   "id": "IconButton_9FB9BD3F_96C5_703B_41D7_65AEE6E85A96",
   "backgroundOpacity": 0,
   "bottom": "40%",
   "paddingTop": 0,
   "shadow": false,
   "rollOverIconURL": "skin/IconButton_9FB9BD3F_96C5_703B_41D7_65AEE6E85A96_rollover.png",
   "right": "1%"
  },
  "buttonStop": [
   "this.IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4",
   "this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB"
  ],
  "buttonPlay": "this.IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED"
 },
 {
  "frames": [
   {
    "thumbnailUrl": "media/panorama_9145F5B4_9D6A_310F_41B6_278704EC634D_t.jpg",
    "overlays": [
     {
      "useHandCursor": true,
      "rollOverDisplay": false,
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 35,
           "width": 35,
           "url": "media/panorama_9145F5B4_9D6A_310F_41B6_278704EC634D_0_HS_0_0_0_map.gif",
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
      "enabledInCardboard": true,
      "areas": [
       {
        "toolTip": "ENTRANCE",
        "click": "this.startPanoramaWithCamera(this.panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E, this.camera_552A6ED5_5BF2_F2BA_41D6_D4FD03CB3A2E); this.mainPlayList.set('selectedIndex', 1)",
        "displayTooltipInTouchScreens": true,
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_9145D5B5_9D6A_3109_41DC_A9B09A3D3544",
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "yaw": 140.51,
        "hfov": 5.02,
        "image": {
         "levels": [
          {
           "height": 70,
           "width": 70,
           "url": "media/panorama_9145F5B4_9D6A_310F_41B6_278704EC634D_0_HS_0_0.png",
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
      "rollOverDisplay": false,
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 50,
           "width": 50,
           "url": "media/panorama_9145F5B4_9D6A_310F_41B6_278704EC634D_0_HS_5_0_0_map.gif",
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
      "enabledInCardboard": true,
      "areas": [
       {
        "toolTip": "ENTRANCE",
        "click": "this.startPanoramaWithCamera(this.panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2, this.camera_720C9D5F_62E0_9189_41D2_9F50BEB9274D); this.mainPlayList.set('selectedIndex', 1)",
        "displayTooltipInTouchScreens": true,
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_914595B5_9D6A_3109_41E0_AB5366CDC9BD",
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
           "url": "media/panorama_9145F5B4_9D6A_310F_41B6_278704EC634D_0_HS_5_0.png",
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
      "rollOverDisplay": true,
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 1,
           "width": 1,
           "url": "media/panorama_9145F5B4_9D6A_310F_41B6_278704EC634D_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 0,
        "yaw": -171.36,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 85.74
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA, this.camera_73FF6D69_62E0_9189_41D0_2DDD44F122E1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 5); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 8)"
       }
      ],
      "id": "overlay_914545B5_9D6A_3109_41DB_2D094D583EE1",
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "yaw": -171.36,
        "hfov": 0,
        "image": {
         "levels": [
          {
           "height": 1,
           "width": 1,
           "url": "media/panorama_9145F5B4_9D6A_310F_41B6_278704EC634D_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 85.74
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
       "url": "media/panorama_9145F5B4_9D6A_310F_41B6_278704EC634D_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_9145F5B4_9D6A_310F_41B6_278704EC634D.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 120,
  "partial": false,
  "pitch": 0,
  "audios": [
   {
    "autoplay": true,
    "id": "audio_6E842EF9_62E0_B089_41D3_E417C4013F8A",
    "audio": {
     "mp3Url": "media/audio_6E842EF9_62E0_B089_41D3_E417C4013F8A.mp3",
     "oggUrl": "media/audio_6E842EF9_62E0_B089_41D3_E417C4013F8A.ogg",
     "class": "AudioResource"
    },
    "class": "PanoramaAudio"
   },
   {
    "autoplay": true,
    "id": "audio_6FA1EE17_62E0_9399_41D5_D3DFA24E9A19",
    "loop": true,
    "audio": {
     "mp3Url": "media/audio_6FA1EE17_62E0_9399_41D5_D3DFA24E9A19.mp3",
     "oggUrl": "media/audio_6FA1EE17_62E0_9399_41D5_D3DFA24E9A19.ogg",
     "id": "audioresource_6DDB9510_62E1_9197_41D0_1D8E52DF6BB0",
     "class": "AudioResource"
    },
    "class": "PanoramaAudio"
   }
  ],
  "thumbnailUrl": "media/panorama_9145F5B4_9D6A_310F_41B6_278704EC634D_t.jpg",
  "id": "panorama_9145F5B4_9D6A_310F_41B6_278704EC634D",
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
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 0)"
        }
       ],
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
  "label": "STREETVIEW",
  "hfovMin": 100,
  "hfov": 360,
  "adjacentPanoramas": [
   {
    "panorama": {
     "frames": [
      {
       "thumbnailUrl": "media/panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044_t.jpg",
       "overlays": [
        {
         "useHandCursor": true,
         "rollOverDisplay": false,
         "maps": [
          {
           "image": {
            "levels": [
             {
              "height": 49,
              "width": 49,
              "url": "media/panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044_0_HS_0_0_0_map.gif",
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
         "enabledInCardboard": true,
         "areas": [
          {
           "toolTip": "BALCONY",
           "click": "this.startPanoramaWithCamera(this.panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C, this.camera_569B6D6C_5BF2_F669_41A7_8467FF9A6DAA); this.mainPlayList.set('selectedIndex', 6)",
           "displayTooltipInTouchScreens": true,
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "id": "overlay_916EDC9F_9D6A_1739_41B6_EC73A228B461",
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
              "url": "media/panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044_0_HS_0_0.png",
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
         "rollOverDisplay": false,
         "maps": [
          {
           "image": {
            "levels": [
             {
              "height": 41,
              "width": 41,
              "url": "media/panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044_0_HS_2_0_0_map.gif",
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
         "enabledInCardboard": true,
         "areas": [
          {
           "toolTip": "TOILET",
           "click": "this.startPanoramaWithCamera(this.panorama_46009756_572D_4167_41C6_2B49BD1EF7CE, this.camera_56E74D59_5BF2_F7AA_41D0_B6C262499B65); this.mainPlayList.set('selectedIndex', 7)",
           "displayTooltipInTouchScreens": true,
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "id": "overlay_916ECC9F_9D6A_1739_41B3_0FCA7885269D",
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
              "url": "media/panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044_0_HS_2_0.png",
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
         "rollOverDisplay": false,
         "maps": [
          {
           "image": {
            "levels": [
             {
              "height": 37,
              "width": 37,
              "url": "media/panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044_0_HS_3_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 5.37,
           "yaw": 34.7,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": 6.11
          }
         ],
         "enabledInCardboard": true,
         "areas": [
          {
           "toolTip": "TWIN BEDROOM",
           "click": "this.startPanoramaWithCamera(this.panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D, this.camera_56C57D3C_5BF2_F7EA_41BA_23AB5285E45A); this.mainPlayList.set('selectedIndex', 8)",
           "displayTooltipInTouchScreens": true,
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "id": "overlay_916EAC9F_9D6A_1739_41DF_9C1F85F25C04",
         "class": "HotspotPanoramaOverlay",
         "items": [
          {
           "yaw": 34.7,
           "hfov": 5.37,
           "image": {
            "levels": [
             {
              "height": 74,
              "width": 74,
              "url": "media/panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044_0_HS_3_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayImage",
           "pitch": 6.11
          }
         ]
        },
        {
         "useHandCursor": true,
         "rollOverDisplay": false,
         "maps": [
          {
           "image": {
            "levels": [
             {
              "height": 37,
              "width": 37,
              "url": "media/panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044_0_HS_4_0_0_map.gif",
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
         "enabledInCardboard": true,
         "areas": [
          {
           "toolTip": "SINGLE BEDROOM",
           "click": "this.startPanoramaWithCamera(this.panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC, this.camera_56F35D45_5BF2_F79A_41D0_857D96DC10DF); this.mainPlayList.set('selectedIndex', 4)",
           "displayTooltipInTouchScreens": true,
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "id": "overlay_916E9C9F_9D6A_1739_41D0_4A4CF03BE08B",
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
              "url": "media/panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044_0_HS_4_0.png",
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
         "rollOverDisplay": true,
         "maps": [
          {
           "image": {
            "levels": [
             {
              "height": 1,
              "width": 1,
              "url": "media/panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044_0_HS_1_0_0_map.gif",
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
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA, this.camera_6C142B6F_62E0_9189_41D2_AC4CB72D0E69); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 3)"
          }
         ],
         "id": "overlay_916E8C9F_9D6A_1733_41A6_3007A8C07742",
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
              "url": "media/panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044_0_HS_1_0.png",
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
         "rollOverDisplay": false,
         "maps": [
          {
           "image": {
            "levels": [
             {
              "height": 70,
              "width": 70,
              "url": "media/panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044_0_HS_5_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 7.8,
           "yaw": -178.2,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -39.78
          }
         ],
         "enabledInCardboard": true,
         "areas": [
          {
           "toolTip": "BALCONY",
           "click": "this.startPanoramaWithCamera(this.panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069, this.camera_6C2B1B31_62E0_9199_41BE_E84CA53FA3D4); this.mainPlayList.set('selectedIndex', 6)",
           "displayTooltipInTouchScreens": true,
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "id": "overlay_916D7CA5_9D6A_1709_41E2_1043CC0BE577",
         "class": "HotspotPanoramaOverlay",
         "items": [
          {
           "yaw": -178.2,
           "hfov": 7.8,
           "image": {
            "levels": [
             {
              "height": 140,
              "width": 140,
              "url": "media/panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044_0_HS_5_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -39.78
          }
         ]
        },
        {
         "useHandCursor": true,
         "rollOverDisplay": false,
         "maps": [
          {
           "image": {
            "levels": [
             {
              "height": 59,
              "width": 59,
              "url": "media/panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044_0_HS_6_0_0_map.gif",
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
         "enabledInCardboard": true,
         "areas": [
          {
           "toolTip": "TOILET",
           "click": "this.startPanoramaWithCamera(this.panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28, this.camera_6C314B31_62E0_9199_41D0_6E78B8EDB8F6); this.mainPlayList.set('selectedIndex', 7)",
           "displayTooltipInTouchScreens": true,
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "id": "overlay_916D5CA5_9D6A_1709_41C1_ED02D5F1677F",
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
              "url": "media/panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044_0_HS_6_0.png",
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
         "rollOverDisplay": false,
         "maps": [
          {
           "image": {
            "levels": [
             {
              "height": 53,
              "width": 53,
              "url": "media/panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044_0_HS_7_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 7.65,
           "yaw": 34.69,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": 6.66
          }
         ],
         "enabledInCardboard": true,
         "areas": [
          {
           "toolTip": "TWIN BEDROOM",
           "click": "this.startPanoramaWithCamera(this.panorama_91758D80_9D6A_1106_41DC_64D8466F87FC, this.camera_6C1B3B50_62E0_9197_41D3_BB549A577078); this.mainPlayList.set('selectedIndex', 8)",
           "displayTooltipInTouchScreens": true,
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "id": "overlay_916D4CA5_9D6A_1709_41DE_4E5FACFD7857",
         "class": "HotspotPanoramaOverlay",
         "items": [
          {
           "yaw": 34.69,
           "hfov": 7.65,
           "image": {
            "levels": [
             {
              "height": 106,
              "width": 106,
              "url": "media/panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044_0_HS_7_0.png",
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
         "rollOverDisplay": false,
         "maps": [
          {
           "image": {
            "levels": [
             {
              "height": 53,
              "width": 53,
              "url": "media/panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044_0_HS_8_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 7.5,
           "yaw": 34.72,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -13.15
          }
         ],
         "enabledInCardboard": true,
         "areas": [
          {
           "toolTip": "SINGLE BEDROOM",
           "click": "this.startPanoramaWithCamera(this.panorama_916227CC_9D6A_311F_41E3_34FF7141124F, this.camera_6C1F8B60_62E0_91B7_41D8_4CF7FB56D8A1); this.mainPlayList.set('selectedIndex', 4)",
           "displayTooltipInTouchScreens": true,
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "id": "overlay_916D2CA5_9D6A_1709_41D6_9840F4E40A44",
         "class": "HotspotPanoramaOverlay",
         "items": [
          {
           "yaw": 34.72,
           "hfov": 7.5,
           "image": {
            "levels": [
             {
              "height": 106,
              "width": 106,
              "url": "media/panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044_0_HS_8_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -13.15
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
          "url": "media/panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044_hq.jpeg",
          "class": "ImageResourceLevel"
         },
         {
          "height": 1608,
          "width": 3217,
          "url": "media/panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044.jpeg",
          "class": "ImageResourceLevel"
         }
        ],
        "class": "ImageResource"
       }
      }
     ],
     "hfovMax": 120,
     "partial": false,
     "pitch": 0,
     "audios": [
      {
       "maximumAngle": 360,
       "autoplay": true,
       "id": "audio_5F999E34_5349_3089_41A5_30E8148F4541",
       "loop": true,
       "audio": {
        "mp3Url": "media/audio_5F999E34_5349_3089_41A5_30E8148F4541.mp3",
        "oggUrl": "media/audio_5F999E34_5349_3089_41A5_30E8148F4541.ogg",
        "class": "AudioResource"
       },
       "yaw": 0,
       "class": "DirectionalPanoramaAudio",
       "pitch": 0
      }
     ],
     "thumbnailUrl": "media/panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044_t.jpg",
     "id": "panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044",
     "label": "MASTER BR",
     "hfovMin": 100,
     "hfov": 360,
     "adjacentPanoramas": [
      {
       "panorama": {
        "frames": [
         {
          "thumbnailUrl": "media/panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA_t.jpg",
          "overlays": [
           {
            "useHandCursor": true,
            "rollOverDisplay": false,
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "height": 52,
                 "width": 52,
                 "url": "media/panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA_0_HS_0_0_0_map.gif",
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
            "enabledInCardboard": true,
            "areas": [
             {
              "toolTip": "LIVING ROOM",
              "click": "this.startPanoramaWithCamera(this.panorama_47B53902_572E_CEDF_41CC_C256D31A5443, this.camera_566FDDCF_5BF2_F6A7_41C3_D60F04E20C30); this.mainPlayList.set('selectedIndex', 3)",
              "displayTooltipInTouchScreens": true,
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "id": "overlay_96931415_9D6A_370E_41C9_9E915A7267A4",
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
                 "url": "media/panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA_0_HS_0_0.png",
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
            "rollOverDisplay": false,
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "height": 43,
                 "width": 43,
                 "url": "media/panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA_0_HS_6_0_0_map.gif",
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
            "enabledInCardboard": true,
            "areas": [
             {
              "toolTip": "ENTRANCE",
              "click": "this.startPanoramaWithCamera(this.panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E, this.camera_565ACDA7_5BF2_F6E7_41BA_8BE7CEB9351B); this.mainPlayList.set('selectedIndex', 1)",
              "displayTooltipInTouchScreens": true,
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "id": "overlay_96936415_9D6A_370E_41DA_61A322290279",
            "class": "HotspotPanoramaOverlay",
            "items": [
             {
              "yaw": -97.88,
              "hfov": 5.99,
              "image": {
               "levels": [
                {
                 "height": 86,
                 "width": 86,
                 "url": "media/panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA_0_HS_6_0.png",
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
            "rollOverDisplay": true,
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "height": 1,
                 "width": 1,
                 "url": "media/panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA_0_HS_1_0_0_map.gif",
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
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA, this.camera_6DD18BC4_62E0_90FF_41BE_93BC11FEF93A); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 5); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 8); this.mainPlayList.set('selectedIndex', 6)"
             }
            ],
            "id": "overlay_96934415_9D6A_370E_41E0_14989CE3B134",
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
                 "url": "media/panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA_0_HS_1_0.png",
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
            "rollOverDisplay": false,
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "height": 75,
                 "width": 75,
                 "url": "media/panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA_0_HS_7_0_0_map.gif",
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
            "enabledInCardboard": true,
            "areas": [
             {
              "toolTip": "LIVING ROOM",
              "click": "this.startPanoramaWithCamera(this.panorama_916902A1_9D6A_7309_41D0_0B14DE574844, this.camera_6DFE8B95_62E0_9099_418D_57C37E90E4BB); this.mainPlayList.set('selectedIndex', 3)",
              "displayTooltipInTouchScreens": true,
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "id": "overlay_96938415_9D6A_370E_41E2_76474A8FC68D",
            "class": "HotspotPanoramaOverlay",
            "items": [
             {
              "yaw": 12.06,
              "hfov": 9.13,
              "image": {
               "levels": [
                {
                 "height": 150,
                 "width": 150,
                 "url": "media/panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA_0_HS_7_0.png",
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
            "rollOverDisplay": false,
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "height": 62,
                 "width": 62,
                 "url": "media/panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA_0_HS_8_0_0_map.gif",
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
            "enabledInCardboard": true,
            "areas": [
             {
              "toolTip": "ENTRANCE",
              "click": "this.startPanoramaWithCamera(this.panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2, this.camera_6DE49BB4_62E0_909F_41B8_2F42F43179A6); this.mainPlayList.set('selectedIndex', 1)",
              "displayTooltipInTouchScreens": true,
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "id": "overlay_9693C415_9D6A_3735_41D5_482009BAE28B",
            "class": "HotspotPanoramaOverlay",
            "items": [
             {
              "yaw": -97.22,
              "hfov": 8.61,
              "image": {
               "levels": [
                {
                 "height": 125,
                 "width": 125,
                 "url": "media/panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA_0_HS_8_0.png",
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
             "url": "media/panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA_hq.jpeg",
             "class": "ImageResourceLevel"
            },
            {
             "height": 1608,
             "width": 3217,
             "url": "media/panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA.jpeg",
             "class": "ImageResourceLevel"
            }
           ],
           "class": "ImageResource"
          }
         }
        ],
        "hfovMax": 120,
        "partial": false,
        "pitch": 0,
        "audios": [
         {
          "maximumAngle": 360,
          "autoplay": true,
          "id": "audio_5F11A888_534B_3198_41C1_CA34B7B483B7",
          "loop": true,
          "audio": {
           "mp3Url": "media/audio_5F11A888_534B_3198_41C1_CA34B7B483B7.mp3",
           "oggUrl": "media/audio_5F11A888_534B_3198_41C1_CA34B7B483B7.ogg",
           "class": "AudioResource"
          },
          "yaw": 0,
          "class": "DirectionalPanoramaAudio",
          "pitch": 0
         },
         {
          "maximumAngle": 360,
          "autoplay": true,
          "id": "audio_5116AAD0_5DE9_534C_41D3_54A18E2E7244",
          "loop": true,
          "audio": {
           "mp3Url": "media/audio_5116AAD0_5DE9_534C_41D3_54A18E2E7244.mp3",
           "oggUrl": "media/audio_5116AAD0_5DE9_534C_41D3_54A18E2E7244.ogg",
           "class": "AudioResource"
          },
          "yaw": 0,
          "class": "DirectionalPanoramaAudio",
          "pitch": 0
         }
        ],
        "thumbnailUrl": "media/panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA_t.jpg",
        "id": "panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA",
        "label": "POOL",
        "hfovMin": 100,
        "hfov": 360,
        "adjacentPanoramas": [
         {
          "panorama": "this.panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044",
          "yaw": -172.22,
          "class": "AdjacentPanorama",
          "backwardYaw": -162.92,
          "distance": 1
         },
         {
          "panorama": {
           "frames": [
            {
             "thumbnailUrl": "media/panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28_t.jpg",
             "overlays": [
              {
               "useHandCursor": true,
               "rollOverDisplay": false,
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "height": 49,
                    "width": 49,
                    "url": "media/panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28_0_HS_2_0_0_map.gif",
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
               "enabledInCardboard": true,
               "areas": [
                {
                 "toolTip": "MASTER BEDROOM",
                 "click": "this.startPanoramaWithCamera(this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF, this.camera_57262CFF_5BF2_F667_41D4_80634CF1C7DB); this.mainPlayList.set('selectedIndex', 5)",
                 "displayTooltipInTouchScreens": true,
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "id": "overlay_9164399E_9D6A_313B_41D8_325A071444CD",
               "class": "HotspotPanoramaOverlay",
               "items": [
                {
                 "yaw": 161.77,
                 "hfov": 6.58,
                 "image": {
                  "levels": [
                   {
                    "height": 98,
                    "width": 98,
                    "url": "media/panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28_0_HS_2_0.png",
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
               "rollOverDisplay": true,
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "height": 1,
                    "width": 1,
                    "url": "media/panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28_0_HS_1_0_0_map.gif",
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
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA, this.camera_6D6F5C09_62E0_9789_41C1_A5A5739C5E48); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 8)"
                }
               ],
               "id": "overlay_9164699E_9D6A_313B_41E1_AD85006D71DF",
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
                    "url": "media/panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28_0_HS_1_0.png",
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
               "rollOverDisplay": false,
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "height": 71,
                    "width": 71,
                    "url": "media/panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28_0_HS_3_0_0_map.gif",
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
               "enabledInCardboard": true,
               "areas": [
                {
                 "toolTip": "MASTER BEDROOM",
                 "click": "this.startPanoramaWithCamera(this.panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044, this.camera_6DC8CBC4_62E0_90FF_41CC_E420DD6B92C8); this.mainPlayList.set('selectedIndex', 5)",
                 "displayTooltipInTouchScreens": true,
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "id": "overlay_9164499E_9D6A_313B_41DE_815940631FC8",
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
                    "url": "media/panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28_0_HS_3_0.png",
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
                "url": "media/panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28_hq.jpeg",
                "class": "ImageResourceLevel"
               },
               {
                "height": 1608,
                "width": 3217,
                "url": "media/panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28.jpeg",
                "class": "ImageResourceLevel"
               }
              ],
              "class": "ImageResource"
             }
            }
           ],
           "hfovMax": 120,
           "partial": false,
           "pitch": 0,
           "audios": [
            {
             "maximumAngle": 360,
             "autoplay": true,
             "id": "audio_5E6F6697_534F_3188_41D2_212D7D5C7CD4",
             "loop": true,
             "audio": {
              "mp3Url": "media/audio_5E6F6697_534F_3188_41D2_212D7D5C7CD4.mp3",
              "oggUrl": "media/audio_5E6F6697_534F_3188_41D2_212D7D5C7CD4.ogg",
              "class": "AudioResource"
             },
             "yaw": 0,
             "class": "DirectionalPanoramaAudio",
             "pitch": 0
            },
            {
             "maximumAngle": 360,
             "autoplay": true,
             "id": "audio_53E0760B_5DE9_52DC_41AD_96CE4D26DD8B",
             "loop": true,
             "audio": {
              "mp3Url": "media/audio_53E0760B_5DE9_52DC_41AD_96CE4D26DD8B.mp3",
              "oggUrl": "media/audio_53E0760B_5DE9_52DC_41AD_96CE4D26DD8B.ogg",
              "class": "AudioResource"
             },
             "yaw": 0,
             "class": "DirectionalPanoramaAudio",
             "pitch": 0
            }
           ],
           "thumbnailUrl": "media/panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28_t.jpg",
           "id": "panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28",
           "label": "TOILET",
           "hfovMin": 100,
           "hfov": 360,
           "adjacentPanoramas": [
            {
             "panorama": "this.panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044",
             "yaw": 161.78,
             "class": "AdjacentPanorama",
             "backwardYaw": 82.9,
             "distance": 1
            },
            {
             "panorama": "this.panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA",
             "yaw": -162.92,
             "class": "AdjacentPanorama",
             "backwardYaw": -172.22,
             "distance": 1
            },
            {
             "panorama": {
              "frames": [
               {
                "thumbnailUrl": "media/panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069_t.jpg",
                "overlays": [
                 {
                  "useHandCursor": true,
                  "rollOverDisplay": false,
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "height": 60,
                       "width": 60,
                       "url": "media/panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069_0_HS_0_0_0_map.gif",
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
                  "enabledInCardboard": true,
                  "areas": [
                   {
                    "toolTip": "MASTER BEDROOM",
                    "click": "this.startPanoramaWithCamera(this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF, this.camera_55CB7E16_5BF2_F5B9_4191_4ABD27800AF8); this.mainPlayList.set('selectedIndex', 5)",
                    "displayTooltipInTouchScreens": true,
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "id": "overlay_9167A333_9D6A_1109_41CA_E1D737A39B12",
                  "class": "HotspotPanoramaOverlay",
                  "items": [
                   {
                    "yaw": -174.37,
                    "hfov": 6.32,
                    "image": {
                     "levels": [
                      {
                       "height": 120,
                       "width": 120,
                       "url": "media/panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069_0_HS_0_0.png",
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
                  "rollOverDisplay": true,
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "height": 1,
                       "width": 1,
                       "url": "media/panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069_0_HS_1_0_0_map.gif",
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
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA, this.camera_72F60C6D_62E0_9789_41C8_40E643DF2DC1); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 8); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 7)"
                   }
                  ],
                  "id": "overlay_9167D333_9D6A_1109_41C2_C53B15CF6B9A",
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
                       "url": "media/panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069_0_HS_1_0.png",
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
                  "rollOverDisplay": false,
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "height": 87,
                       "width": 87,
                       "url": "media/panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069_0_HS_6_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "hfov": 9.35,
                    "yaw": -174.39,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -42.06
                   }
                  ],
                  "enabledInCardboard": true,
                  "areas": [
                   {
                    "toolTip": "MASTER BEDROOM",
                    "click": "this.startPanoramaWithCamera(this.panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044, this.camera_6D5B6C19_62E0_9789_41D7_7DEDEDAB69C2); this.mainPlayList.set('selectedIndex', 5)",
                    "displayTooltipInTouchScreens": true,
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "id": "overlay_9167F339_9D6A_1179_41DF_24F351FACEF4",
                  "class": "HotspotPanoramaOverlay",
                  "items": [
                   {
                    "yaw": -174.39,
                    "hfov": 9.35,
                    "image": {
                     "levels": [
                      {
                       "height": 174,
                       "width": 174,
                       "url": "media/panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069_0_HS_6_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -42.06
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
                   "url": "media/panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069_hq.jpeg",
                   "class": "ImageResourceLevel"
                  },
                  {
                   "height": 1608,
                   "width": 3217,
                   "url": "media/panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069.jpeg",
                   "class": "ImageResourceLevel"
                  }
                 ],
                 "class": "ImageResource"
                }
               }
              ],
              "hfovMax": 120,
              "partial": false,
              "pitch": 0,
              "audios": [
               {
                "maximumAngle": 360,
                "autoplay": true,
                "id": "audio_5FA8081E_5349_30B9_41D0_06F2A3501C10",
                "loop": true,
                "audio": {
                 "mp3Url": "media/audio_5FA8081E_5349_30B9_41D0_06F2A3501C10.mp3",
                 "oggUrl": "media/audio_5FA8081E_5349_30B9_41D0_06F2A3501C10.ogg",
                 "class": "AudioResource"
                },
                "yaw": 0,
                "class": "DirectionalPanoramaAudio",
                "pitch": 0
               },
               {
                "maximumAngle": 360,
                "autoplay": true,
                "id": "audio_502EF191_5DEE_F1CC_41D5_35D2DA805B06",
                "loop": true,
                "audio": {
                 "mp3Url": "media/audio_502EF191_5DEE_F1CC_41D5_35D2DA805B06.mp3",
                 "oggUrl": "media/audio_502EF191_5DEE_F1CC_41D5_35D2DA805B06.ogg",
                 "class": "AudioResource"
                },
                "yaw": 0,
                "class": "DirectionalPanoramaAudio",
                "pitch": 0
               }
              ],
              "thumbnailUrl": "media/panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069_t.jpg",
              "id": "panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069",
              "label": "BALCONY",
              "hfovMin": 100,
              "hfov": 360,
              "adjacentPanoramas": [
               {
                "panorama": "this.panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044",
                "yaw": -174.39,
                "class": "AdjacentPanorama",
                "backwardYaw": -178.2,
                "distance": 1
               },
               {
                "panorama": "this.panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA",
                "yaw": -170.58,
                "class": "AdjacentPanorama",
                "backwardYaw": -172.22,
                "distance": 1
               },
               {
                "panorama": "this.panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28",
                "yaw": -170.58,
                "class": "AdjacentPanorama",
                "backwardYaw": -162.92,
                "distance": 1
               },
               {
                "panorama": {
                 "frames": [
                  {
                   "thumbnailUrl": "media/panorama_916902A1_9D6A_7309_41D0_0B14DE574844_t.jpg",
                   "overlays": [
                    {
                     "useHandCursor": true,
                     "rollOverDisplay": false,
                     "maps": [
                      {
                       "image": {
                        "levels": [
                         {
                          "height": 41,
                          "width": 41,
                          "url": "media/panorama_916902A1_9D6A_7309_41D0_0B14DE574844_0_HS_0_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "hfov": 5.96,
                       "yaw": 42.05,
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -6.87
                      }
                     ],
                     "enabledInCardboard": true,
                     "areas": [
                      {
                       "toolTip": "SINGLE BEDROOM",
                       "click": "this.startPanoramaWithCamera(this.panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC, this.camera_55BE4E50_5BF2_F5B9_41B2_A0DBD967D7CD); this.mainPlayList.set('selectedIndex', 4)",
                       "displayTooltipInTouchScreens": true,
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "id": "overlay_916912A2_9D6A_730B_41B8_3A8427B71ECF",
                     "class": "HotspotPanoramaOverlay",
                     "items": [
                      {
                       "yaw": 42.05,
                       "hfov": 5.96,
                       "image": {
                        "levels": [
                         {
                          "height": 83,
                          "width": 83,
                          "url": "media/panorama_916902A1_9D6A_7309_41D0_0B14DE574844_0_HS_0_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": -6.87
                      }
                     ]
                    },
                    {
                     "useHandCursor": true,
                     "rollOverDisplay": false,
                     "maps": [
                      {
                       "image": {
                        "levels": [
                         {
                          "height": 41,
                          "width": 41,
                          "url": "media/panorama_916902A1_9D6A_7309_41D0_0B14DE574844_0_HS_5_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "hfov": 5.41,
                       "yaw": -176.79,
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -25.6
                      }
                     ],
                     "enabledInCardboard": true,
                     "areas": [
                      {
                       "toolTip": "POOL",
                       "click": "this.startPanoramaWithCamera(this.panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D, this.camera_5577FE77_5BF2_F267_41AE_B186A0A61737); this.mainPlayList.set('selectedIndex', 2)",
                       "displayTooltipInTouchScreens": true,
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "id": "overlay_916922A2_9D6A_730B_41DE_1F49C2124306",
                     "class": "HotspotPanoramaOverlay",
                     "items": [
                      {
                       "yaw": -176.79,
                       "hfov": 5.41,
                       "image": {
                        "levels": [
                         {
                          "height": 83,
                          "width": 83,
                          "url": "media/panorama_916902A1_9D6A_7309_41D0_0B14DE574844_0_HS_5_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": -25.6
                      }
                     ]
                    },
                    {
                     "useHandCursor": true,
                     "rollOverDisplay": true,
                     "maps": [
                      {
                       "image": {
                        "levels": [
                         {
                          "height": 1,
                          "width": 1,
                          "url": "media/panorama_916902A1_9D6A_7309_41D0_0B14DE574844_0_HS_1_0_0_map.gif",
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
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA, this.camera_7273AD19_62E0_9189_41BB_3D49F3B4A780); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 8); this.mainPlayList.set('selectedIndex', 5)"
                      }
                     ],
                     "id": "overlay_9169D2A2_9D6A_730B_41B9_993A35E3613B",
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
                          "url": "media/panorama_916902A1_9D6A_7309_41D0_0B14DE574844_0_HS_1_0.png",
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
                     "rollOverDisplay": false,
                     "maps": [
                      {
                       "image": {
                        "levels": [
                         {
                          "height": 59,
                          "width": 59,
                          "url": "media/panorama_916902A1_9D6A_7309_41D0_0B14DE574844_0_HS_6_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "hfov": 8.59,
                       "yaw": 42.02,
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -6.28
                      }
                     ],
                     "enabledInCardboard": true,
                     "areas": [
                      {
                       "toolTip": "SINGLE BEDROOM",
                       "click": "this.startPanoramaWithCamera(this.panorama_916227CC_9D6A_311F_41E3_34FF7141124F, this.camera_72964D00_62E0_9177_417F_E7ED805BC240); this.mainPlayList.set('selectedIndex', 4)",
                       "displayTooltipInTouchScreens": true,
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "id": "overlay_916992A2_9D6A_730B_41D1_B90F49E44C03",
                     "class": "HotspotPanoramaOverlay",
                     "items": [
                      {
                       "yaw": 42.02,
                       "hfov": 8.59,
                       "image": {
                        "levels": [
                         {
                          "height": 119,
                          "width": 119,
                          "url": "media/panorama_916902A1_9D6A_7309_41D0_0B14DE574844_0_HS_6_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": -6.28
                      }
                     ]
                    },
                    {
                     "useHandCursor": true,
                     "rollOverDisplay": false,
                     "maps": [
                      {
                       "image": {
                        "levels": [
                         {
                          "height": 59,
                          "width": 59,
                          "url": "media/panorama_916902A1_9D6A_7309_41D0_0B14DE574844_0_HS_7_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "hfov": 7.83,
                       "yaw": -176.8,
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -24.98
                      }
                     ],
                     "enabledInCardboard": true,
                     "areas": [
                      {
                       "toolTip": "POOL",
                       "click": "this.startPanoramaWithCamera(this.panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA, this.camera_72DCFC9C_62E0_908F_416E_A04D167047E4); this.mainPlayList.set('selectedIndex', 2)",
                       "displayTooltipInTouchScreens": true,
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "id": "overlay_9169B2A2_9D6A_730B_41D4_EE8149DC4E93",
                     "class": "HotspotPanoramaOverlay",
                     "items": [
                      {
                       "yaw": -176.8,
                       "hfov": 7.83,
                       "image": {
                        "levels": [
                         {
                          "height": 119,
                          "width": 119,
                          "url": "media/panorama_916902A1_9D6A_7309_41D0_0B14DE574844_0_HS_7_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": -24.98
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
                      "url": "media/panorama_916902A1_9D6A_7309_41D0_0B14DE574844_hq.jpeg",
                      "class": "ImageResourceLevel"
                     },
                     {
                      "height": 1608,
                      "width": 3217,
                      "url": "media/panorama_916902A1_9D6A_7309_41D0_0B14DE574844.jpeg",
                      "class": "ImageResourceLevel"
                     }
                    ],
                    "class": "ImageResource"
                   }
                  }
                 ],
                 "hfovMax": 120,
                 "partial": false,
                 "pitch": 0,
                 "audios": [
                  {
                   "maximumAngle": 360,
                   "autoplay": true,
                   "id": "audio_5F3A7686_5349_3189_41B9_03AD1E92C6EA",
                   "loop": true,
                   "audio": {
                    "mp3Url": "media/audio_5F3A7686_5349_3189_41B9_03AD1E92C6EA.mp3",
                    "oggUrl": "media/audio_5F3A7686_5349_3189_41B9_03AD1E92C6EA.ogg",
                    "class": "AudioResource"
                   },
                   "yaw": 0,
                   "class": "DirectionalPanoramaAudio",
                   "pitch": 0
                  },
                  {
                   "maximumAngle": 360,
                   "autoplay": true,
                   "id": "audio_508C163F_5DEF_5335_41CB_6F4DF04ED378",
                   "loop": true,
                   "audio": {
                    "mp3Url": "media/audio_508C163F_5DEF_5335_41CB_6F4DF04ED378.mp3",
                    "oggUrl": "media/audio_508C163F_5DEF_5335_41CB_6F4DF04ED378.ogg",
                    "class": "AudioResource"
                   },
                   "yaw": 0,
                   "class": "DirectionalPanoramaAudio",
                   "pitch": 0
                  }
                 ],
                 "thumbnailUrl": "media/panorama_916902A1_9D6A_7309_41D0_0B14DE574844_t.jpg",
                 "id": "panorama_916902A1_9D6A_7309_41D0_0B14DE574844",
                 "label": "LIVINGROOM",
                 "hfovMin": 100,
                 "hfov": 360,
                 "adjacentPanoramas": [
                  {
                   "panorama": "this.panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044",
                   "yaw": -171.96,
                   "class": "AdjacentPanorama",
                   "backwardYaw": -162.92,
                   "distance": 1
                  },
                  {
                   "panorama": "this.panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA",
                   "yaw": -176.8,
                   "class": "AdjacentPanorama",
                   "backwardYaw": 12.06,
                   "distance": 1
                  },
                  {
                   "panorama": "this.panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28",
                   "yaw": -171.96,
                   "class": "AdjacentPanorama",
                   "backwardYaw": -162.92,
                   "distance": 1
                  },
                  {
                   "panorama": "this.panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069",
                   "yaw": -171.96,
                   "class": "AdjacentPanorama",
                   "backwardYaw": -170.58,
                   "distance": 1
                  },
                  {
                   "panorama": "this.panorama_9145F5B4_9D6A_310F_41B6_278704EC634D",
                   "yaw": -171.96,
                   "class": "AdjacentPanorama",
                   "backwardYaw": -171.36,
                   "distance": 1
                  },
                  {
                   "panorama": {
                    "frames": [
                     {
                      "thumbnailUrl": "media/panorama_91758D80_9D6A_1106_41DC_64D8466F87FC_t.jpg",
                      "overlays": [
                       {
                        "useHandCursor": true,
                        "rollOverDisplay": false,
                        "maps": [
                         {
                          "image": {
                           "levels": [
                            {
                             "height": 45,
                             "width": 45,
                             "url": "media/panorama_91758D80_9D6A_1106_41DC_64D8466F87FC_0_HS_2_0_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "hfov": 6.55,
                          "yaw": -142.88,
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": 8.82
                         }
                        ],
                        "enabledInCardboard": true,
                        "areas": [
                         {
                          "toolTip": "TERRACE",
                          "click": "this.startPanoramaWithCamera(this.panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116, this.camera_56043BB0_5BF2_F2FA_41B1_1DE6A0E08A4C); this.mainPlayList.set('selectedIndex', 9)",
                          "displayTooltipInTouchScreens": true,
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "id": "overlay_9175FD80_9D6A_1106_41AA_58E5D2CD1C04",
                        "class": "HotspotPanoramaOverlay",
                        "items": [
                         {
                          "yaw": -142.88,
                          "hfov": 6.55,
                          "image": {
                           "levels": [
                            {
                             "height": 91,
                             "width": 91,
                             "url": "media/panorama_91758D80_9D6A_1106_41DC_64D8466F87FC_0_HS_2_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "class": "HotspotPanoramaOverlayImage",
                          "pitch": 8.82
                         }
                        ]
                       },
                       {
                        "useHandCursor": true,
                        "rollOverDisplay": false,
                        "maps": [
                         {
                          "image": {
                           "levels": [
                            {
                             "height": 45,
                             "width": 45,
                             "url": "media/panorama_91758D80_9D6A_1106_41DC_64D8466F87FC_0_HS_0_0_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "hfov": 5.66,
                          "yaw": -142.87,
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": -31.29
                         }
                        ],
                        "enabledInCardboard": true,
                        "areas": [
                         {
                          "toolTip": "MASTER BEDROOM",
                          "click": "this.startPanoramaWithCamera(this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF, this.camera_56700B7F_5BF2_F267_41C2_DC8D8F885C23); this.mainPlayList.set('selectedIndex', 5)",
                          "displayTooltipInTouchScreens": true,
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "id": "overlay_9175ED80_9D6A_1106_41D5_F6221252AEF2",
                        "class": "HotspotPanoramaOverlay",
                        "items": [
                         {
                          "yaw": -142.87,
                          "hfov": 5.66,
                          "image": {
                           "levels": [
                            {
                             "height": 91,
                             "width": 91,
                             "url": "media/panorama_91758D80_9D6A_1106_41DC_64D8466F87FC_0_HS_0_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "class": "HotspotPanoramaOverlayImage",
                          "pitch": -31.29
                         }
                        ]
                       },
                       {
                        "useHandCursor": true,
                        "rollOverDisplay": true,
                        "maps": [
                         {
                          "image": {
                           "levels": [
                            {
                             "height": 1,
                             "width": 1,
                             "url": "media/panorama_91758D80_9D6A_1106_41DC_64D8466F87FC_0_HS_1_0_0_map.gif",
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
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2, this.camera_73884DB8_62E0_9097_41B0_D46AB70179F0); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 4)"
                         }
                        ],
                        "id": "overlay_9175DD80_9D6A_1106_41D0_4ED70EEFA362",
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
                             "url": "media/panorama_91758D80_9D6A_1106_41DC_64D8466F87FC_0_HS_1_0.png",
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
                        "rollOverDisplay": false,
                        "maps": [
                         {
                          "image": {
                           "levels": [
                            {
                             "height": 66,
                             "width": 66,
                             "url": "media/panorama_91758D80_9D6A_1106_41DC_64D8466F87FC_0_HS_3_0_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "hfov": 9.37,
                          "yaw": -142.9,
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": 9.48
                         }
                        ],
                        "enabledInCardboard": true,
                        "areas": [
                         {
                          "toolTip": "TERRACE",
                          "click": "this.startPanoramaWithCamera(this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA, this.camera_6C28DDED_62E0_9089_41C7_1AE9FA544BC8); this.mainPlayList.set('selectedIndex', 9)",
                          "displayTooltipInTouchScreens": true,
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "id": "overlay_91750D80_9D6A_1106_41D4_EA14D9776F6B",
                        "class": "HotspotPanoramaOverlay",
                        "items": [
                         {
                          "yaw": -142.9,
                          "hfov": 9.37,
                          "image": {
                           "levels": [
                            {
                             "height": 132,
                             "width": 132,
                             "url": "media/panorama_91758D80_9D6A_1106_41DC_64D8466F87FC_0_HS_3_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "class": "HotspotPanoramaOverlayImage",
                          "pitch": 9.48
                         }
                        ]
                       },
                       {
                        "useHandCursor": true,
                        "rollOverDisplay": false,
                        "maps": [
                         {
                          "image": {
                           "levels": [
                            {
                             "height": 66,
                             "width": 66,
                             "url": "media/panorama_91758D80_9D6A_1106_41DC_64D8466F87FC_0_HS_4_0_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "hfov": 8.06,
                          "yaw": -142.86,
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": -31.97
                         }
                        ],
                        "enabledInCardboard": true,
                        "areas": [
                         {
                          "toolTip": "MASTER BEDROOM",
                          "click": "this.startPanoramaWithCamera(this.panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044, this.camera_73E9ED73_62E0_9199_41D6_008AE020CCD1); this.mainPlayList.set('selectedIndex', 5)",
                          "displayTooltipInTouchScreens": true,
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "id": "overlay_91756D80_9D6A_1106_41D1_5718020AD198",
                        "class": "HotspotPanoramaOverlay",
                        "items": [
                         {
                          "yaw": -142.86,
                          "hfov": 8.06,
                          "image": {
                           "levels": [
                            {
                             "height": 132,
                             "width": 132,
                             "url": "media/panorama_91758D80_9D6A_1106_41DC_64D8466F87FC_0_HS_4_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "class": "HotspotPanoramaOverlayImage",
                          "pitch": -31.97
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
                         "url": "media/panorama_91758D80_9D6A_1106_41DC_64D8466F87FC_hq.jpeg",
                         "class": "ImageResourceLevel"
                        },
                        {
                         "height": 1608,
                         "width": 3217,
                         "url": "media/panorama_91758D80_9D6A_1106_41DC_64D8466F87FC.jpeg",
                         "class": "ImageResourceLevel"
                        }
                       ],
                       "class": "ImageResource"
                      }
                     }
                    ],
                    "hfovMax": 120,
                    "partial": false,
                    "pitch": 0,
                    "audios": [
                     {
                      "maximumAngle": 360,
                      "autoplay": true,
                      "id": "audio_5E08B9DF_534F_73B7_41C9_0C77F337DE42",
                      "loop": true,
                      "audio": {
                       "mp3Url": "media/audio_5E08B9DF_534F_73B7_41C9_0C77F337DE42.mp3",
                       "oggUrl": "media/audio_5E08B9DF_534F_73B7_41C9_0C77F337DE42.ogg",
                       "class": "AudioResource"
                      },
                      "yaw": 0,
                      "class": "DirectionalPanoramaAudio",
                      "pitch": 0
                     }
                    ],
                    "thumbnailUrl": "media/panorama_91758D80_9D6A_1106_41DC_64D8466F87FC_t.jpg",
                    "id": "panorama_91758D80_9D6A_1106_41DC_64D8466F87FC",
                    "label": "TWIN BR",
                    "hfovMin": 100,
                    "hfov": 360,
                    "adjacentPanoramas": [
                     {
                      "panorama": "this.panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044",
                      "yaw": -142.86,
                      "class": "AdjacentPanorama",
                      "backwardYaw": 34.69,
                      "distance": 1
                     },
                     {
                      "panorama": "this.panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA",
                      "yaw": -172.21,
                      "class": "AdjacentPanorama",
                      "backwardYaw": -172.22,
                      "distance": 1
                     },
                     {
                      "panorama": "this.panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28",
                      "yaw": -172.21,
                      "class": "AdjacentPanorama",
                      "backwardYaw": -162.92,
                      "distance": 1
                     },
                     {
                      "panorama": "this.panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069",
                      "yaw": -172.21,
                      "class": "AdjacentPanorama",
                      "backwardYaw": -170.58,
                      "distance": 1
                     },
                     {
                      "panorama": "this.panorama_916902A1_9D6A_7309_41D0_0B14DE574844",
                      "yaw": -172.21,
                      "class": "AdjacentPanorama",
                      "backwardYaw": -171.96,
                      "distance": 1
                     },
                     {
                      "panorama": "this.panorama_9145F5B4_9D6A_310F_41B6_278704EC634D",
                      "yaw": -172.21,
                      "class": "AdjacentPanorama",
                      "backwardYaw": -171.36,
                      "distance": 1
                     },
                     {
                      "panorama": {
                       "frames": [
                        {
                         "thumbnailUrl": "media/panorama_916227CC_9D6A_311F_41E3_34FF7141124F_t.jpg",
                         "overlays": [
                          {
                           "useHandCursor": true,
                           "rollOverDisplay": false,
                           "maps": [
                            {
                             "image": {
                              "levels": [
                               {
                                "height": 46,
                                "width": 45,
                                "url": "media/panorama_916227CC_9D6A_311F_41E3_34FF7141124F_0_HS_0_0_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "hfov": 6.59,
                             "yaw": -157.01,
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": 5.5
                            }
                           ],
                           "enabledInCardboard": true,
                           "areas": [
                            {
                             "toolTip": "MASTER BEDROOM\u000a",
                             "click": "this.startPanoramaWithCamera(this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF, this.camera_55D7BBEA_5BF2_F263_41D2_B1CC2C57A60F); this.mainPlayList.set('selectedIndex', 5)",
                             "displayTooltipInTouchScreens": true,
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "id": "overlay_916217CC_9D6A_311F_41E1_8BEF8FED51E3",
                           "class": "HotspotPanoramaOverlay",
                           "items": [
                            {
                             "yaw": -157.01,
                             "hfov": 6.59,
                             "image": {
                              "levels": [
                               {
                                "height": 92,
                                "width": 91,
                                "url": "media/panorama_916227CC_9D6A_311F_41E3_34FF7141124F_0_HS_0_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "class": "HotspotPanoramaOverlayImage",
                             "pitch": 5.5
                            }
                           ]
                          },
                          {
                           "useHandCursor": true,
                           "rollOverDisplay": false,
                           "maps": [
                            {
                             "image": {
                              "levels": [
                               {
                                "height": 46,
                                "width": 45,
                                "url": "media/panorama_916227CC_9D6A_311F_41E3_34FF7141124F_0_HS_2_0_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "hfov": 5.88,
                             "yaw": -157.03,
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": -27.49
                            }
                           ],
                           "enabledInCardboard": true,
                           "areas": [
                            {
                             "toolTip": "LIVING ROOM",
                             "click": "this.startPanoramaWithCamera(this.panorama_47B53902_572E_CEDF_41CC_C256D31A5443, this.camera_55FFAC21_5BF2_F59B_41D2_A4CCD4BC65CD); this.mainPlayList.set('selectedIndex', 3)",
                             "displayTooltipInTouchScreens": true,
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "id": "overlay_9162E7CC_9D6A_311F_4199_A2B1F88DE39F",
                           "class": "HotspotPanoramaOverlay",
                           "items": [
                            {
                             "yaw": -157.03,
                             "hfov": 5.88,
                             "image": {
                              "levels": [
                               {
                                "height": 92,
                                "width": 91,
                                "url": "media/panorama_916227CC_9D6A_311F_41E3_34FF7141124F_0_HS_2_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "class": "HotspotPanoramaOverlayImage",
                             "pitch": -27.49
                            }
                           ]
                          },
                          {
                           "useHandCursor": true,
                           "rollOverDisplay": true,
                           "maps": [
                            {
                             "image": {
                              "levels": [
                               {
                                "height": 1,
                                "width": 1,
                                "url": "media/panorama_916227CC_9D6A_311F_41E3_34FF7141124F_0_HS_1_0_0_map.gif",
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
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA, this.camera_6DF8BE48_62E0_93F7_41D6_5F0136561D32); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 8); this.mainPlayList.set('selectedIndex', 9)"
                            }
                           ],
                           "id": "overlay_9162F7CC_9D6A_311F_41D2_EC7CA4A52EE1",
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
                                "url": "media/panorama_916227CC_9D6A_311F_41E3_34FF7141124F_0_HS_1_0.png",
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
                           "rollOverDisplay": false,
                           "maps": [
                            {
                             "image": {
                              "levels": [
                               {
                                "height": 66,
                                "width": 66,
                                "url": "media/panorama_916227CC_9D6A_311F_41E3_34FF7141124F_0_HS_3_0_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "hfov": 9.45,
                             "yaw": -157,
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": 6.18
                            }
                           ],
                           "enabledInCardboard": true,
                           "areas": [
                            {
                             "toolTip": "MASTER BEDROOM",
                             "click": "this.startPanoramaWithCamera(this.panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044, this.camera_6C224DF7_62E0_9098_41D7_B151F68AECAD); this.mainPlayList.set('selectedIndex', 5)",
                             "displayTooltipInTouchScreens": true,
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "id": "overlay_9162D7CC_9D6A_311F_41CF_9DE4ED272EB1",
                           "class": "HotspotPanoramaOverlay",
                           "items": [
                            {
                             "yaw": -157,
                             "hfov": 9.45,
                             "image": {
                              "levels": [
                               {
                                "height": 132,
                                "width": 132,
                                "url": "media/panorama_916227CC_9D6A_311F_41E3_34FF7141124F_0_HS_3_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "class": "HotspotPanoramaOverlayImage",
                             "pitch": 6.18
                            }
                           ]
                          },
                          {
                           "useHandCursor": true,
                           "rollOverDisplay": false,
                           "maps": [
                            {
                             "image": {
                              "levels": [
                               {
                                "height": 66,
                                "width": 66,
                                "url": "media/panorama_916227CC_9D6A_311F_41E3_34FF7141124F_0_HS_4_0_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "hfov": 8.38,
                             "yaw": -157.02,
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": -28.2
                            }
                           ],
                           "enabledInCardboard": true,
                           "areas": [
                            {
                             "toolTip": "LIVING ROOM",
                             "click": "this.startPanoramaWithCamera(this.panorama_916902A1_9D6A_7309_41D0_0B14DE574844, this.camera_6C165E20_62E0_93B7_41C5_D807411A3018); this.mainPlayList.set('selectedIndex', 3)",
                             "displayTooltipInTouchScreens": true,
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "id": "overlay_916287CC_9D6A_311F_41DA_BF79E8211F43",
                           "class": "HotspotPanoramaOverlay",
                           "items": [
                            {
                             "yaw": -157.02,
                             "hfov": 8.38,
                             "image": {
                              "levels": [
                               {
                                "height": 132,
                                "width": 132,
                                "url": "media/panorama_916227CC_9D6A_311F_41E3_34FF7141124F_0_HS_4_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "class": "HotspotPanoramaOverlayImage",
                             "pitch": -28.2
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
                            "url": "media/panorama_916227CC_9D6A_311F_41E3_34FF7141124F_hq.jpeg",
                            "class": "ImageResourceLevel"
                           },
                           {
                            "height": 1608,
                            "width": 3217,
                            "url": "media/panorama_916227CC_9D6A_311F_41E3_34FF7141124F.jpeg",
                            "class": "ImageResourceLevel"
                           }
                          ],
                          "class": "ImageResource"
                         }
                        }
                       ],
                       "hfovMax": 120,
                       "partial": false,
                       "pitch": 0,
                       "audios": [
                        {
                         "maximumAngle": 360,
                         "autoplay": true,
                         "id": "audio_5FD12071_5349_1088_41CE_1A9919606FBF",
                         "loop": true,
                         "audio": {
                          "mp3Url": "media/audio_5FD12071_5349_1088_41CE_1A9919606FBF.mp3",
                          "oggUrl": "media/audio_5FD12071_5349_1088_41CE_1A9919606FBF.ogg",
                          "class": "AudioResource"
                         },
                         "yaw": 0,
                         "class": "DirectionalPanoramaAudio",
                         "pitch": 0
                        },
                        {
                         "maximumAngle": 360,
                         "autoplay": true,
                         "id": "audio_5049FC7B_5DEF_D73D_41B8_AB9CCE43637C",
                         "loop": true,
                         "audio": {
                          "mp3Url": "media/audio_5049FC7B_5DEF_D73D_41B8_AB9CCE43637C.mp3",
                          "oggUrl": "media/audio_5049FC7B_5DEF_D73D_41B8_AB9CCE43637C.ogg",
                          "class": "AudioResource"
                         },
                         "yaw": 0,
                         "class": "DirectionalPanoramaAudio",
                         "pitch": 0
                        }
                       ],
                       "thumbnailUrl": "media/panorama_916227CC_9D6A_311F_41E3_34FF7141124F_t.jpg",
                       "id": "panorama_916227CC_9D6A_311F_41E3_34FF7141124F",
                       "label": "SINGLE BR",
                       "hfovMin": 100,
                       "hfov": 360,
                       "adjacentPanoramas": [
                        {
                         "panorama": "this.panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044",
                         "yaw": -157,
                         "class": "AdjacentPanorama",
                         "backwardYaw": 34.72,
                         "distance": 1
                        },
                        {
                         "panorama": "this.panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA",
                         "yaw": -170.2,
                         "class": "AdjacentPanorama",
                         "backwardYaw": -172.22,
                         "distance": 1
                        },
                        {
                         "panorama": "this.panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28",
                         "yaw": -170.2,
                         "class": "AdjacentPanorama",
                         "backwardYaw": -162.92,
                         "distance": 1
                        },
                        {
                         "panorama": "this.panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069",
                         "yaw": -170.2,
                         "class": "AdjacentPanorama",
                         "backwardYaw": -170.58,
                         "distance": 1
                        },
                        {
                         "panorama": "this.panorama_916902A1_9D6A_7309_41D0_0B14DE574844",
                         "yaw": -157.02,
                         "class": "AdjacentPanorama",
                         "backwardYaw": 42.02,
                         "distance": 1
                        },
                        {
                         "panorama": "this.panorama_9145F5B4_9D6A_310F_41B6_278704EC634D",
                         "yaw": -170.2,
                         "class": "AdjacentPanorama",
                         "backwardYaw": -171.36,
                         "distance": 1
                        },
                        {
                         "panorama": "this.panorama_91758D80_9D6A_1106_41DC_64D8466F87FC",
                         "yaw": -170.2,
                         "class": "AdjacentPanorama",
                         "backwardYaw": -172.21,
                         "distance": 1
                        },
                        {
                         "panorama": {
                          "frames": [
                           {
                            "thumbnailUrl": "media/panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2_t.jpg",
                            "overlays": [
                             {
                              "useHandCursor": true,
                              "rollOverDisplay": false,
                              "maps": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "height": 34,
                                   "width": 34,
                                   "url": "media/panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2_0_HS_0_0_0_map.gif",
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
                              "enabledInCardboard": true,
                              "areas": [
                               {
                                "toolTip": "POOL",
                                "click": "this.startPanoramaWithCamera(this.panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D, this.camera_55581C8B_5BF2_F6AF_41D1_02AAAFF73E03); this.mainPlayList.set('selectedIndex', 2)",
                                "displayTooltipInTouchScreens": true,
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "id": "overlay_916947EC_9D6B_F11F_41D6_5EEC27EF8F9A",
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
                                   "url": "media/panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2_0_HS_0_0.png",
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
                              "rollOverDisplay": false,
                              "maps": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "height": 34,
                                   "width": 34,
                                   "url": "media/panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2_0_HS_6_0_0_map.gif",
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
                              "enabledInCardboard": true,
                              "areas": [
                               {
                                "toolTip": "STREET VIEW",
                                "click": "this.startPanoramaWithCamera(this.panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E, this.camera_55602CAB_5BF2_F6EF_41A1_3BA349C88636); this.mainPlayList.set('selectedIndex', 0)",
                                "displayTooltipInTouchScreens": true,
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "id": "overlay_916987EC_9D6B_F11F_41BB_7D24AFE8F505",
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
                                   "url": "media/panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2_0_HS_6_0.png",
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
                              "rollOverDisplay": true,
                              "maps": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "height": 1,
                                   "width": 1,
                                   "url": "media/panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2_0_HS_1_0_0_map.gif",
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
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA, this.camera_6DCF0E99_62E0_9089_41D3_6C563D86F6CE); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 5); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 8)"
                               }
                              ],
                              "id": "overlay_9169A7EC_9D6B_F11F_41CA_A9E6728D96FC",
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
                                   "url": "media/panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2_0_HS_1_0.png",
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
                              "rollOverDisplay": false,
                              "maps": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "height": 50,
                                   "width": 50,
                                   "url": "media/panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2_0_HS_7_0_0_map.gif",
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
                              "enabledInCardboard": true,
                              "areas": [
                               {
                                "toolTip": "POOL",
                                "click": "this.startPanoramaWithCamera(this.panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA, this.camera_6DF6FE5A_62E0_938B_41BA_F73843B9DC29); this.mainPlayList.set('selectedIndex', 2)",
                                "displayTooltipInTouchScreens": true,
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "id": "overlay_9169C7EC_9D6B_F11F_41C7_A3B2A477B925",
                              "class": "HotspotPanoramaOverlay",
                              "items": [
                               {
                                "yaw": -16.8,
                                "hfov": 7.12,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 100,
                                   "width": 100,
                                   "url": "media/panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2_0_HS_7_0.png",
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
                              "rollOverDisplay": false,
                              "maps": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "height": 50,
                                   "width": 50,
                                   "url": "media/panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2_0_HS_8_0_0_map.gif",
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
                              "enabledInCardboard": true,
                              "areas": [
                               {
                                "toolTip": "STREET VIEW",
                                "click": "this.startPanoramaWithCamera(this.panorama_9145F5B4_9D6A_310F_41B6_278704EC634D, this.camera_6DD83E7B_62E0_9389_41C7_635693C96E57); this.mainPlayList.set('selectedIndex', 0)",
                                "displayTooltipInTouchScreens": true,
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "id": "overlay_9169D7ED_9D6B_F119_41C3_694AFA3B7253",
                              "class": "HotspotPanoramaOverlay",
                              "items": [
                               {
                                "yaw": 0.93,
                                "hfov": 6.54,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 100,
                                   "width": 100,
                                   "url": "media/panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2_0_HS_8_0.png",
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
                               "url": "media/panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2_hq.jpeg",
                               "class": "ImageResourceLevel"
                              },
                              {
                               "height": 1608,
                               "width": 3217,
                               "url": "media/panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2.jpeg",
                               "class": "ImageResourceLevel"
                              }
                             ],
                             "class": "ImageResource"
                            }
                           }
                          ],
                          "hfovMax": 120,
                          "partial": false,
                          "pitch": 0,
                          "audios": [
                           {
                            "autoplay": true,
                            "id": "audio_6F24DDE5_62E1_B0B9_41B7_9BE4768AF408",
                            "audio": {
                             "mp3Url": "media/audio_6F24DDE5_62E1_B0B9_41B7_9BE4768AF408.mp3",
                             "oggUrl": "media/audio_6F24DDE5_62E1_B0B9_41B7_9BE4768AF408.ogg",
                             "class": "AudioResource"
                            },
                            "class": "PanoramaAudio"
                           },
                           {
                            "autoplay": true,
                            "id": "audio_6DDBF510_62E1_9197_41B5_964EC0286003",
                            "loop": true,
                            "audio": "this.audioresource_6DDB9510_62E1_9197_41D0_1D8E52DF6BB0",
                            "class": "PanoramaAudio"
                           }
                          ],
                          "thumbnailUrl": "media/panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2_t.jpg",
                          "id": "panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2",
                          "label": "ENTRANCE",
                          "hfovMin": 100,
                          "hfov": 360,
                          "adjacentPanoramas": [
                           {
                            "panorama": "this.panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044",
                            "yaw": -170.68,
                            "class": "AdjacentPanorama",
                            "backwardYaw": -162.92,
                            "distance": 1
                           },
                           {
                            "panorama": "this.panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA",
                            "yaw": -16.8,
                            "class": "AdjacentPanorama",
                            "backwardYaw": -97.22,
                            "distance": 1
                           },
                           {
                            "panorama": "this.panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28",
                            "yaw": -170.68,
                            "class": "AdjacentPanorama",
                            "backwardYaw": -162.92,
                            "distance": 1
                           },
                           {
                            "panorama": "this.panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069",
                            "yaw": -170.68,
                            "class": "AdjacentPanorama",
                            "backwardYaw": -170.58,
                            "distance": 1
                           },
                           {
                            "panorama": "this.panorama_916902A1_9D6A_7309_41D0_0B14DE574844",
                            "yaw": -170.68,
                            "class": "AdjacentPanorama",
                            "backwardYaw": -171.96,
                            "distance": 1
                           },
                           {
                            "panorama": "this.panorama_9145F5B4_9D6A_310F_41B6_278704EC634D",
                            "yaw": 0.93,
                            "class": "AdjacentPanorama",
                            "backwardYaw": 140.49,
                            "distance": 1
                           },
                           {
                            "panorama": "this.panorama_91758D80_9D6A_1106_41DC_64D8466F87FC",
                            "yaw": -170.68,
                            "class": "AdjacentPanorama",
                            "backwardYaw": -172.21,
                            "distance": 1
                           },
                           {
                            "panorama": "this.panorama_916227CC_9D6A_311F_41E3_34FF7141124F",
                            "yaw": -170.68,
                            "class": "AdjacentPanorama",
                            "backwardYaw": -170.2,
                            "distance": 1
                           },
                           {
                            "panorama": {
                             "frames": [
                              {
                               "thumbnailUrl": "media/panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA_t.jpg",
                               "overlays": [
                                {
                                 "useHandCursor": true,
                                 "rollOverDisplay": false,
                                 "maps": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 41,
                                      "width": 41,
                                      "url": "media/panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA_0_HS_6_0_0_map.gif",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "hfov": 5.63,
                                   "yaw": 18.93,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": -20.35
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "areas": [
                                  {
                                   "toolTip": "TWIN BEDROOM",
                                   "click": "this.startPanoramaWithCamera(this.panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D, this.camera_5488DF3C_5BF2_F3E9_41D1_C652E087859B); this.mainPlayList.set('selectedIndex', 8)",
                                   "displayTooltipInTouchScreens": true,
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "id": "overlay_914DB476_9D6A_170A_41D3_A4182884D4B3",
                                 "class": "HotspotPanoramaOverlay",
                                 "items": [
                                  {
                                   "yaw": 18.93,
                                   "hfov": 5.63,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 83,
                                      "width": 83,
                                      "url": "media/panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA_0_HS_6_0.png",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "class": "HotspotPanoramaOverlayImage",
                                   "pitch": -20.35
                                  }
                                 ]
                                },
                                {
                                 "useHandCursor": true,
                                 "rollOverDisplay": true,
                                 "maps": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 1,
                                      "width": 1,
                                      "url": "media/panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA_0_HS_5_0_0_map.gif",
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
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.startPanoramaWithCamera(this.panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2, this.camera_6D819EEA_62E0_908B_41CB_CA7E255DB621); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 5); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 4)"
                                  }
                                 ],
                                 "id": "overlay_914DA476_9D6A_170A_41D4_F5A9A50D4F34",
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
                                      "url": "media/panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA_0_HS_5_0.png",
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
                                 "rollOverDisplay": false,
                                 "maps": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 60,
                                      "width": 60,
                                      "url": "media/panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA_0_HS_7_0_0_map.gif",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "hfov": 8.07,
                                   "yaw": 18.94,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": -21.01
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "areas": [
                                  {
                                   "toolTip": "TWIN BEDROOM",
                                   "click": "this.startPanoramaWithCamera(this.panorama_91758D80_9D6A_1106_41DC_64D8466F87FC, this.camera_6D9D1ED6_62E0_909B_41D3_2F6C1BFEF91F); this.mainPlayList.set('selectedIndex', 8)",
                                   "displayTooltipInTouchScreens": true,
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "id": "overlay_914D4476_9D6A_170A_41A7_1A222953F06E",
                                 "class": "HotspotPanoramaOverlay",
                                 "items": [
                                  {
                                   "yaw": 18.94,
                                   "hfov": 8.07,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 120,
                                      "width": 120,
                                      "url": "media/panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA_0_HS_7_0.png",
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
                                  "url": "media/panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA_hq.jpeg",
                                  "class": "ImageResourceLevel"
                                 },
                                 {
                                  "height": 1608,
                                  "width": 3217,
                                  "url": "media/panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA.jpeg",
                                  "class": "ImageResourceLevel"
                                 }
                                ],
                                "class": "ImageResource"
                               }
                              }
                             ],
                             "hfovMax": 120,
                             "partial": false,
                             "pitch": 0,
                             "audios": [
                              {
                               "maximumAngle": 360,
                               "autoplay": true,
                               "id": "audio_5E20D107_534F_3088_4192_A9F38893E7D5",
                               "loop": true,
                               "audio": {
                                "mp3Url": "media/audio_5E20D107_534F_3088_4192_A9F38893E7D5.mp3",
                                "oggUrl": "media/audio_5E20D107_534F_3088_4192_A9F38893E7D5.ogg",
                                "class": "AudioResource"
                               },
                               "yaw": 0,
                               "class": "DirectionalPanoramaAudio",
                               "pitch": 0
                              },
                              {
                               "maximumAngle": 360,
                               "autoplay": true,
                               "id": "audio_53AB1146_5DE9_5154_41CA_FED3E44D14A9",
                               "loop": true,
                               "audio": {
                                "mp3Url": "media/audio_53AB1146_5DE9_5154_41CA_FED3E44D14A9.mp3",
                                "oggUrl": "media/audio_53AB1146_5DE9_5154_41CA_FED3E44D14A9.ogg",
                                "class": "AudioResource"
                               },
                               "yaw": 0,
                               "class": "DirectionalPanoramaAudio",
                               "pitch": 0
                              }
                             ],
                             "thumbnailUrl": "media/panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA_t.jpg",
                             "id": "panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA",
                             "label": "TERRACE",
                             "hfovMin": 100,
                             "hfov": 360,
                             "adjacentPanoramas": [
                              {
                               "panorama": "this.panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044",
                               "yaw": -173.12,
                               "class": "AdjacentPanorama",
                               "backwardYaw": -162.92,
                               "distance": 1
                              },
                              {
                               "panorama": "this.panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA",
                               "yaw": -173.12,
                               "class": "AdjacentPanorama",
                               "backwardYaw": -172.22,
                               "distance": 1
                              },
                              {
                               "panorama": "this.panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28",
                               "yaw": -173.12,
                               "class": "AdjacentPanorama",
                               "backwardYaw": -162.92,
                               "distance": 1
                              },
                              {
                               "panorama": "this.panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069",
                               "yaw": -173.12,
                               "class": "AdjacentPanorama",
                               "backwardYaw": -170.58,
                               "distance": 1
                              },
                              {
                               "panorama": "this.panorama_916902A1_9D6A_7309_41D0_0B14DE574844",
                               "yaw": -173.12,
                               "class": "AdjacentPanorama",
                               "backwardYaw": -171.96,
                               "distance": 1
                              },
                              {
                               "panorama": "this.panorama_9145F5B4_9D6A_310F_41B6_278704EC634D",
                               "yaw": -173.12,
                               "class": "AdjacentPanorama",
                               "backwardYaw": -171.36,
                               "distance": 1
                              },
                              {
                               "panorama": "this.panorama_91758D80_9D6A_1106_41DC_64D8466F87FC",
                               "yaw": 18.94,
                               "class": "AdjacentPanorama",
                               "backwardYaw": -142.9,
                               "distance": 1
                              },
                              {
                               "panorama": "this.panorama_916227CC_9D6A_311F_41E3_34FF7141124F",
                               "yaw": -173.12,
                               "class": "AdjacentPanorama",
                               "backwardYaw": -170.2,
                               "distance": 1
                              },
                              {
                               "panorama": "this.panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2",
                               "yaw": -173.12,
                               "class": "AdjacentPanorama",
                               "backwardYaw": -170.68,
                               "distance": 1
                              }
                             ],
                             "class": "Panorama",
                             "vfov": 180
                            },
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
                         "panorama": "this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA",
                         "yaw": -170.2,
                         "class": "AdjacentPanorama",
                         "backwardYaw": -173.12,
                         "distance": 1
                        }
                       ],
                       "class": "Panorama",
                       "vfov": 180
                      },
                      "yaw": -172.21,
                      "class": "AdjacentPanorama",
                      "backwardYaw": -170.2,
                      "distance": 1
                     },
                     {
                      "panorama": "this.panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2",
                      "yaw": -172.21,
                      "class": "AdjacentPanorama",
                      "backwardYaw": -170.68,
                      "distance": 1
                     },
                     {
                      "panorama": "this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA",
                      "yaw": -142.9,
                      "class": "AdjacentPanorama",
                      "backwardYaw": 18.94,
                      "distance": 1
                     }
                    ],
                    "class": "Panorama",
                    "vfov": 180
                   },
                   "yaw": -171.96,
                   "class": "AdjacentPanorama",
                   "backwardYaw": -172.21,
                   "distance": 1
                  },
                  {
                   "panorama": "this.panorama_916227CC_9D6A_311F_41E3_34FF7141124F",
                   "yaw": 42.02,
                   "class": "AdjacentPanorama",
                   "backwardYaw": -157.02,
                   "distance": 1
                  },
                  {
                   "panorama": "this.panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2",
                   "yaw": -171.96,
                   "class": "AdjacentPanorama",
                   "backwardYaw": -170.68,
                   "distance": 1
                  },
                  {
                   "panorama": "this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA",
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
                "panorama": "this.panorama_9145F5B4_9D6A_310F_41B6_278704EC634D",
                "yaw": -170.58,
                "class": "AdjacentPanorama",
                "backwardYaw": -171.36,
                "distance": 1
               },
               {
                "panorama": "this.panorama_91758D80_9D6A_1106_41DC_64D8466F87FC",
                "yaw": -170.58,
                "class": "AdjacentPanorama",
                "backwardYaw": -172.21,
                "distance": 1
               },
               {
                "panorama": "this.panorama_916227CC_9D6A_311F_41E3_34FF7141124F",
                "yaw": -170.58,
                "class": "AdjacentPanorama",
                "backwardYaw": -170.2,
                "distance": 1
               },
               {
                "panorama": "this.panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2",
                "yaw": -170.58,
                "class": "AdjacentPanorama",
                "backwardYaw": -170.68,
                "distance": 1
               },
               {
                "panorama": "this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA",
                "yaw": -170.58,
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
             "backwardYaw": -170.58,
             "distance": 1
            },
            {
             "panorama": "this.panorama_916902A1_9D6A_7309_41D0_0B14DE574844",
             "yaw": -162.92,
             "class": "AdjacentPanorama",
             "backwardYaw": -171.96,
             "distance": 1
            },
            {
             "panorama": "this.panorama_9145F5B4_9D6A_310F_41B6_278704EC634D",
             "yaw": -162.92,
             "class": "AdjacentPanorama",
             "backwardYaw": -171.36,
             "distance": 1
            },
            {
             "panorama": "this.panorama_91758D80_9D6A_1106_41DC_64D8466F87FC",
             "yaw": -162.92,
             "class": "AdjacentPanorama",
             "backwardYaw": -172.21,
             "distance": 1
            },
            {
             "panorama": "this.panorama_916227CC_9D6A_311F_41E3_34FF7141124F",
             "yaw": -162.92,
             "class": "AdjacentPanorama",
             "backwardYaw": -170.2,
             "distance": 1
            },
            {
             "panorama": "this.panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2",
             "yaw": -162.92,
             "class": "AdjacentPanorama",
             "backwardYaw": -170.68,
             "distance": 1
            },
            {
             "panorama": "this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA",
             "yaw": -162.92,
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
          "backwardYaw": -162.92,
          "distance": 1
         },
         {
          "panorama": "this.panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069",
          "yaw": -172.22,
          "class": "AdjacentPanorama",
          "backwardYaw": -170.58,
          "distance": 1
         },
         {
          "panorama": "this.panorama_916902A1_9D6A_7309_41D0_0B14DE574844",
          "yaw": 12.06,
          "class": "AdjacentPanorama",
          "backwardYaw": -176.8,
          "distance": 1
         },
         {
          "panorama": "this.panorama_9145F5B4_9D6A_310F_41B6_278704EC634D",
          "yaw": -172.22,
          "class": "AdjacentPanorama",
          "backwardYaw": -171.36,
          "distance": 1
         },
         {
          "panorama": "this.panorama_91758D80_9D6A_1106_41DC_64D8466F87FC",
          "yaw": -172.22,
          "class": "AdjacentPanorama",
          "backwardYaw": -172.21,
          "distance": 1
         },
         {
          "panorama": "this.panorama_916227CC_9D6A_311F_41E3_34FF7141124F",
          "yaw": -172.22,
          "class": "AdjacentPanorama",
          "backwardYaw": -170.2,
          "distance": 1
         },
         {
          "panorama": "this.panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2",
          "yaw": -97.22,
          "class": "AdjacentPanorama",
          "backwardYaw": -16.8,
          "distance": 1
         },
         {
          "panorama": "this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA",
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
       "panorama": "this.panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28",
       "yaw": 82.9,
       "class": "AdjacentPanorama",
       "backwardYaw": 161.78,
       "distance": 1
      },
      {
       "panorama": "this.panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069",
       "yaw": -178.2,
       "class": "AdjacentPanorama",
       "backwardYaw": -174.39,
       "distance": 1
      },
      {
       "panorama": "this.panorama_916902A1_9D6A_7309_41D0_0B14DE574844",
       "yaw": -162.92,
       "class": "AdjacentPanorama",
       "backwardYaw": -171.96,
       "distance": 1
      },
      {
       "panorama": "this.panorama_9145F5B4_9D6A_310F_41B6_278704EC634D",
       "yaw": -162.92,
       "class": "AdjacentPanorama",
       "backwardYaw": -171.36,
       "distance": 1
      },
      {
       "panorama": "this.panorama_91758D80_9D6A_1106_41DC_64D8466F87FC",
       "yaw": 34.69,
       "class": "AdjacentPanorama",
       "backwardYaw": -142.86,
       "distance": 1
      },
      {
       "panorama": "this.panorama_916227CC_9D6A_311F_41E3_34FF7141124F",
       "yaw": 34.72,
       "class": "AdjacentPanorama",
       "backwardYaw": -157,
       "distance": 1
      },
      {
       "panorama": "this.panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2",
       "yaw": -162.92,
       "class": "AdjacentPanorama",
       "backwardYaw": -170.68,
       "distance": 1
      },
      {
       "panorama": "this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA",
       "yaw": -162.92,
       "class": "AdjacentPanorama",
       "backwardYaw": -173.12,
       "distance": 1
      }
     ],
     "class": "Panorama",
     "vfov": 180
    },
    "yaw": -171.36,
    "class": "AdjacentPanorama",
    "backwardYaw": -162.92,
    "distance": 1
   },
   {
    "panorama": "this.panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA",
    "yaw": -171.36,
    "class": "AdjacentPanorama",
    "backwardYaw": -172.22,
    "distance": 1
   },
   {
    "panorama": "this.panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28",
    "yaw": -171.36,
    "class": "AdjacentPanorama",
    "backwardYaw": -162.92,
    "distance": 1
   },
   {
    "panorama": "this.panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069",
    "yaw": -171.36,
    "class": "AdjacentPanorama",
    "backwardYaw": -170.58,
    "distance": 1
   },
   {
    "panorama": "this.panorama_916902A1_9D6A_7309_41D0_0B14DE574844",
    "yaw": -171.36,
    "class": "AdjacentPanorama",
    "backwardYaw": -171.96,
    "distance": 1
   },
   {
    "panorama": "this.panorama_91758D80_9D6A_1106_41DC_64D8466F87FC",
    "yaw": -171.36,
    "class": "AdjacentPanorama",
    "backwardYaw": -172.21,
    "distance": 1
   },
   {
    "panorama": "this.panorama_916227CC_9D6A_311F_41E3_34FF7141124F",
    "yaw": -171.36,
    "class": "AdjacentPanorama",
    "backwardYaw": -170.2,
    "distance": 1
   },
   {
    "panorama": "this.panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2",
    "yaw": 140.49,
    "class": "AdjacentPanorama",
    "backwardYaw": 0.93,
    "distance": 1
   },
   {
    "panorama": "this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA",
    "yaw": -171.36,
    "class": "AdjacentPanorama",
    "backwardYaw": -173.12,
    "distance": 1
   }
  ],
  "class": "Panorama",
  "vfov": 180
 },
 {
  "gyroscopeVerticalDraggingEnabled": true,
  "touchControlMode": "drag_rotation",
  "buttonStop": [
   "this.IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4",
   "this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB"
  ],
  "displayPlaybackBar": true,
  "buttonToggleHotspots": {
   "toolTipPaddingRight": 6,
   "verticalAlign": "middle",
   "toolTipBorderRadius": 3,
   "paddingRight": 0,
   "toolTipShadowOpacity": 1,
   "mode": "toggle",
   "iconURL": "skin/IconButton_80E5955A_8E23_BB05_41CA_43DD61DBAEE9.png",
   "height": "100%",
   "maxHeight": 60,
   "width": "100%",
   "paddingLeft": 0,
   "toolTipBorderColor": "#767676",
   "transparencyActive": true,
   "toolTip": "Hotspots Visibility",
   "toolTipBorderSize": 1,
   "toolTipTextShadowColor": "#000000",
   "borderSize": 0,
   "toolTipBackgroundColor": "#000000",
   "toolTipPaddingLeft": 6,
   "borderRadius": 0,
   "horizontalAlign": "center",
   "pressedIconURL": "skin/IconButton_80E5955A_8E23_BB05_41CA_43DD61DBAEE9_pressed.png",
   "minWidth": 1,
   "click": "if(!this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, true, 0, this.effect_CDD059FA_EED0_D223_41DB_70ACFBE986FE, 'showEffect', false) } else if(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, false, 0, this.effect_CDD049FB_EED0_D221_41EB_CA2134B978E0, 'hideEffect', false) }",
   "toolTipTextShadowBlurRadius": 3,
   "toolTipOpacity": 0.7,
   "toolTipShadowVerticalLength": 0,
   "class": "IconButton",
   "maxWidth": 60,
   "toolTipPaddingBottom": 4,
   "minHeight": 1,
   "cursor": "hand",
   "paddingBottom": 0,
   "toolTipFontSize": 11,
   "shadow": false,
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
   "toolTipPaddingTop": 4,
   "toolTipFontStyle": "normal"
  },
  "class": "PanoramaPlayer",
  "buttonCardboardView": {
   "verticalAlign": "middle",
   "paddingRight": 0,
   "mode": "push",
   "iconURL": "skin/IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37.png",
   "height": "100%",
   "maxHeight": 60,
   "width": "100%",
   "transparencyActive": false,
   "paddingLeft": 0,
   "pressedIconURL": "skin/IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37_pressed.png",
   "borderSize": 0,
   "borderRadius": 0,
   "horizontalAlign": "center",
   "minWidth": 1,
   "class": "IconButton",
   "maxWidth": 60,
   "minHeight": 1,
   "cursor": "hand",
   "visible": false,
   "paddingBottom": 0,
   "shadow": false,
   "id": "IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37",
   "backgroundOpacity": 0,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37_rollover.png"
  },
  "id": "MainViewerPanoramaPlayer",
  "viewerArea": "this.MainViewer",
  "mouseControlMode": "drag_acceleration",
  "buttonPlay": "this.IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED",
  "preloadEnabled": false
 },
 {
  "movementMode": "constrained",
  "id": "MapViewerMapPlayer",
  "class": "MapPlayer",
  "viewerArea": {
   "toolTipShadowOpacity": 1,
   "playbackBarHeadShadowOpacity": 0.7,
   "playbackBarBackgroundColor": [
    "#FFFFFF"
   ],
   "paddingRight": 0,
   "progressBarOpacity": 1,
   "playbackBarHeight": 10,
   "playbackBarHeadWidth": 6,
   "playbackBarProgressBorderSize": 0,
   "playbackBarBackgroundColorDirection": "vertical",
   "minWidth": 1,
   "playbackBarHeadShadow": true,
   "playbackBarRight": 0,
   "class": "ViewerArea",
   "progressBackgroundOpacity": 1,
   "progressBarBorderSize": 0,
   "toolTipPaddingBottom": 4,
   "progressBarBorderRadius": 0,
   "progressBorderRadius": 0,
   "toolTipFontWeight": "normal",
   "paddingBottom": 0,
   "toolTipFontSize": 11,
   "shadow": false,
   "toolTipShadowVerticalLength": 0,
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
   "playbackBarHeadShadowVerticalLength": 0,
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
   "playbackBarHeadShadowBlurRadius": 3,
   "playbackBarHeadBorderColor": "#000000",
   "playbackBarProgressOpacity": 1,
   "paddingLeft": 0,
   "toolTipBorderColor": "#767676",
   "toolTipTextShadowColor": "#000000",
   "toolTipBorderSize": 1,
   "playbackBarHeadHeight": 15,
   "playbackBarBackgroundOpacity": 1,
   "playbackBarBorderSize": 0,
   "borderSize": 0,
   "toolTipBackgroundColor": "#000000",
   "toolTipPaddingLeft": 6,
   "playbackBarHeadBackgroundColorDirection": "vertical",
   "toolTipOpacity": 0.7,
   "playbackBarHeadBackgroundColorRatios": [
    0,
    1
   ],
   "toolTipTextShadowBlurRadius": 3,
   "playbackBarLeft": 0,
   "borderRadius": 0,
   "playbackBarOpacity": 1,
   "playbackBarHeadShadowColor": "#000000",
   "progressBarBorderColor": "#000000",
   "progressRight": 0,
   "playbackBarHeadBorderSize": 0,
   "progressBarBackgroundColorRatios": [
    0
   ],
   "top": "10%",
   "playbackBarHeadOpacity": 1,
   "progressOpacity": 1,
   "progressBackgroundColorDirection": "vertical",
   "minHeight": 1,
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
   "playbackBarHeadShadowHorizontalLength": 0,
   "playbackBarProgressBackgroundColorDirection": "vertical",
   "toolTipPaddingTop": 4,
   "toolTipFontStyle": "normal",
   "right": "10%"
  }
 },
 {
  "id": "panorama_9145F5B4_9D6A_310F_41B6_278704EC634D_camera",
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
 "this.panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2",
 {
  "id": "panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2_camera",
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
 "this.panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA",
 {
  "id": "panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA_camera",
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
 "this.panorama_916902A1_9D6A_7309_41D0_0B14DE574844",
 {
  "id": "panorama_916902A1_9D6A_7309_41D0_0B14DE574844_camera",
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
 "this.panorama_916227CC_9D6A_311F_41E3_34FF7141124F",
 {
  "id": "panorama_916227CC_9D6A_311F_41E3_34FF7141124F_camera",
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
 "this.panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044",
 {
  "id": "panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044_camera",
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
 "this.panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069",
 {
  "id": "panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069_camera",
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
 "this.panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28",
 {
  "id": "panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28_camera",
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
 "this.panorama_91758D80_9D6A_1106_41DC_64D8466F87FC",
 {
  "id": "panorama_91758D80_9D6A_1106_41DC_64D8466F87FC_camera",
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
 "this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA",
 {
  "id": "panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA_camera",
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
    "camera": "this.panorama_9145F5B4_9D6A_310F_41B6_278704EC634D_camera",
    "id": "PanoramaPlayListItem_6C528B0B_62E0_9189_41B9_8D49E23CB5A2",
    "media": "this.panorama_9145F5B4_9D6A_310F_41B6_278704EC634D",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_6C528B0B_62E0_9189_41B9_8D49E23CB5A2, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "camera": "this.panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_916902A1_9D6A_7309_41D0_0B14DE574844_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_916902A1_9D6A_7309_41D0_0B14DE574844",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_916227CC_9D6A_311F_41E3_34FF7141124F_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_916227CC_9D6A_311F_41E3_34FF7141124F",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_91758D80_9D6A_1106_41DC_64D8466F87FC_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_91758D80_9D6A_1106_41DC_64D8466F87FC",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA",
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
    "camera": "this.panorama_9145F5B4_9D6A_310F_41B6_278704EC634D_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_9145F5B4_9D6A_310F_41B6_278704EC634D",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 0, 1)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 1, 2)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 2, 3)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_916902A1_9D6A_7309_41D0_0B14DE574844_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_916902A1_9D6A_7309_41D0_0B14DE574844",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 3, 4)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_916227CC_9D6A_311F_41E3_34FF7141124F_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_916227CC_9D6A_311F_41E3_34FF7141124F",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 4, 5)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 5, 6)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 6, 7)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 7, 8)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_91758D80_9D6A_1106_41DC_64D8466F87FC_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_91758D80_9D6A_1106_41DC_64D8466F87FC",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 8, 9)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA",
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
  "id": "playList_705DFACD_62E0_9089_41D1_1F943F215E11",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.registerKey('visibility_ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472', this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472.get('visible')); this.registerKey('visibility_Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB', this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB.get('visible')); this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setComponentVisibility(this.Container_807F782A_8E23_A905_41DE_623121285A09, false, -1, this.effect_22974FB2_2DD9_0421_41BA_84205292D043, 'hideEffect', false); this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, false, -1, this.effect_22899FB3_2DD9_0427_41BB_298AEB3D2851, 'hideEffect', false); this.setComponentVisibility(this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB, true, -1, this.effect_2289DFB3_2DD9_0427_41AE_A35795880BA7, 'showEffect', false); this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, false, -1, this.effect_3876CD6E_2DF9_0421_41C1_F0AB7F279824, 'hideEffect', false); this.setComponentVisibility(this.Container_86F3A56C_8E22_5B1D_41CA_9CE53436FE56, false, -1, this.effect_22973FB1_2DD9_0423_41C1_E1E03953DCCE, 'hideEffect', false)",
    "media": "this.video_210B394E_3D54_1A60_41A3_CB42BEC0D3EC",
    "player": "this.MainViewerVideoPlayer",
    "class": "VideoPlayListItem",
    "end": "this.setComponentVisibility(this.Container_807F782A_8E23_A905_41DE_623121285A09, true, -1, this.effect_22977FB2_2DD9_0421_41C1_F53B037346DF, 'showEffect', false); this.setComponentVisibility(this.Container_807F782A_8E23_A905_41DE_623121285A09, true, -1, this.effect_22977FB2_2DD9_0421_41C1_F53B037346DF, 'showEffect', false); if(this.existsKey('visibility_Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB')){ if(this.getKey('visibility_Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB')) { this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, true, -1, this.effect_6D7BCEEA_62E0_908B_41C8_BA067553F950, 'showEffect', false); } else { this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, false, -1, this.effect_22899FB3_2DD9_0427_41BB_298AEB3D2851, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB'); this.setComponentVisibility(this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB, false, -1, this.effect_2289EFB3_2DD9_0427_41C0_ACB5A72AE218, 'hideEffect', false); this.setComponentVisibility(this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB, false, -1, this.effect_2289EFB3_2DD9_0427_41C0_ACB5A72AE218, 'hideEffect', false); if(this.existsKey('visibility_ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472')){ if(this.getKey('visibility_ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472')) { this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, true, -1, this.effect_6D7A2EEA_62E0_908B_41D0_6A1952DE5493, 'showEffect', false); } else { this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, false, -1, this.effect_3876CD6E_2DF9_0421_41C1_F0AB7F279824, 'hideEffect', false); } }; this.unregisterKey('visibility_ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472'); this.setComponentVisibility(this.Container_86F3A56C_8E22_5B1D_41CA_9CE53436FE56, true, -1, this.effect_22975FB2_2DD9_0421_41B4_7A2443082F44, 'showEffect', false); this.setComponentVisibility(this.Container_86F3A56C_8E22_5B1D_41CA_9CE53436FE56, true, -1, this.effect_22975FB2_2DD9_0421_41B4_7A2443082F44, 'showEffect', false)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_705DFACD_62E0_9089_41D1_1F943F215E11, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_705DFACD_62E0_9089_41D1_1F943F215E11, 0, this.video_210B394E_3D54_1A60_41A3_CB42BEC0D3EC)"
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
      "easing": "linear",
      "scaleMode": "fit_outside",
      "initialPosition": {
       "x": "0.50",
       "zoomFactor": 1,
       "class": "PhotoCameraPosition",
       "y": "0.50"
      },
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
      "easing": "linear",
      "scaleMode": "fit_outside",
      "initialPosition": {
       "x": "0.50",
       "zoomFactor": 1,
       "class": "PhotoCameraPosition",
       "y": "0.50"
      },
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
      "easing": "linear",
      "scaleMode": "fit_outside",
      "initialPosition": {
       "x": "0.50",
       "zoomFactor": 1,
       "class": "PhotoCameraPosition",
       "y": "0.50"
      },
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
      "easing": "linear",
      "scaleMode": "fit_outside",
      "initialPosition": {
       "x": "0.50",
       "zoomFactor": 1,
       "class": "PhotoCameraPosition",
       "y": "0.50"
      },
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
      "easing": "linear",
      "scaleMode": "fit_outside",
      "initialPosition": {
       "x": "0.50",
       "zoomFactor": 1,
       "class": "PhotoCameraPosition",
       "y": "0.50"
      },
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
      "easing": "linear",
      "scaleMode": "fit_outside",
      "initialPosition": {
       "x": "0.50",
       "zoomFactor": 1,
       "class": "PhotoCameraPosition",
       "y": "0.50"
      },
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
      "easing": "linear",
      "scaleMode": "fit_outside",
      "initialPosition": {
       "x": "0.50",
       "zoomFactor": 1,
       "class": "PhotoCameraPosition",
       "y": "0.50"
      },
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
      "easing": "linear",
      "scaleMode": "fit_outside",
      "initialPosition": {
       "x": "0.50",
       "zoomFactor": 1,
       "class": "PhotoCameraPosition",
       "y": "0.50"
      },
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
  "id": "playList_705CDACD_62E0_9089_41C9_3747EED92C94",
  "class": "PlayList",
  "items": [
   {
    "player": "this.ViewerAreaLabeled_9FD7235A_96CD_9045_41D9_23A3BCBDB1C6PhotoAlbumPlayer",
    "class": "PhotoAlbumPlayListItem",
    "media": "this.album_1AE8DEB7_0EE7_8CC7_4198_F5B75788CCF6",
    "begin": "this.loopAlbum(this.playList_705CDACD_62E0_9089_41C9_3747EED92C94, 0)"
   }
  ]
 },
 "this.map_4E02A832_427B_EE04_41CC_8E1CEC03E8D3",
 {
  "id": "playList_6C53DB0B_62E0_9189_41C2_0598EB912B73",
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
  "id": "camera_6C3D1B21_62E0_91B9_41D4_4533E42FF05E",
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
  "id": "camera_6C314B31_62E0_9199_41D0_6E78B8EDB8F6",
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
  "id": "camera_6C2B1B31_62E0_9199_41BE_E84CA53FA3D4",
  "initialPosition": {
   "yaw": 5.61,
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
  "id": "camera_6C2EFB41_62E0_91F9_41D1_CB028CF69E3D",
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
  "id": "camera_6C217B50_62E0_9197_419A_E493DC958AF2",
  "initialPosition": {
   "hfov": 120,
   "yaw": 8.64,
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
  "id": "camera_6C1B3B50_62E0_9197_41D3_BB549A577078",
  "initialPosition": {
   "yaw": 37.14,
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
  "id": "camera_6C1F8B60_62E0_91B7_41D8_4CF7FB56D8A1",
  "initialPosition": {
   "yaw": 23,
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
  "id": "camera_6C11AB60_62E0_91B7_41C9_CCF2CB7848C9",
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
  "id": "camera_6C142B6F_62E0_9189_41D2_AC4CB72D0E69",
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
  "id": "camera_6C0E2B6F_62E0_9189_41C7_0E2FE1E1D22F",
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
  "id": "camera_6C004B86_62E0_917B_41C8_05B540660382",
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
  "id": "camera_6C04AB86_62E0_917B_41D7_96A1538CC5B1",
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
  "id": "camera_6DFE8B95_62E0_9099_418D_57C37E90E4BB",
  "initialPosition": {
   "yaw": 3.2,
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
  "id": "camera_6DF16B95_62E0_9099_41CB_1CE343BC23FF",
  "initialPosition": {
   "hfov": 120,
   "yaw": 8.64,
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
  "id": "camera_6DEA7BA5_62E0_90B9_41CC_85DAD8B94720",
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
  "id": "camera_6DECBBA5_62E0_90B9_41CE_92F513EAD4C2",
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
  "id": "camera_6DE49BB4_62E0_909F_41B8_2F42F43179A6",
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
  "id": "camera_6DD18BC4_62E0_90FF_41BE_93BC11FEF93A",
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
  "id": "camera_6DC8CBC4_62E0_90FF_41CC_E420DD6B92C8",
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
  "id": "camera_6DC5FBD4_62E0_909F_41B3_85E043F34EFA",
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
  "id": "camera_6DB22BD4_62E0_909F_41C6_C1CF3586BAF0",
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
  "id": "camera_6DAFFBEA_62E0_908B_41D7_022CFC8697E1",
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
  "id": "camera_6DA48BEA_62E0_908B_41D1_E9022C4043F5",
  "initialPosition": {
   "hfov": 120,
   "yaw": 8.64,
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
  "id": "camera_6D97ABF9_62E0_9088_41D7_736097C2B0D5",
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
  "id": "camera_6D816BF9_62E0_9088_41D3_8473DDBB3357",
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
  "id": "camera_6D7D7C09_62E0_9789_41C2_4DF522D1415C",
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
  "id": "camera_6D6F5C09_62E0_9789_41C1_A5A5739C5E48",
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
  "id": "camera_6D5B6C19_62E0_9789_41D7_7DEDEDAB69C2",
  "initialPosition": {
   "yaw": 1.8,
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
  "id": "camera_6D56FC28_62E0_97B7_41D8_0C91D91BDA4A",
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
  "id": "camera_6D40EC28_62E0_97B7_41D7_E141B46B7129",
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
  "id": "camera_6D333C38_62E0_9797_41BE_A6B9371B168B",
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
  "id": "camera_6D2D6C38_62E0_9797_41C4_4FA16EF2C83B",
  "initialPosition": {
   "hfov": 120,
   "yaw": 8.64,
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
  "id": "camera_6D186C4E_62E0_978B_41BA_F8C4CDF8A572",
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
  "id": "camera_6D0A8C4E_62E0_978B_41BF_AB13ED781D3F",
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
  "id": "camera_6D056C5E_62E0_978B_41B3_176C59FED604",
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
  "id": "camera_72F60C6D_62E0_9789_41C8_40E643DF2DC1",
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
  "id": "camera_72E03C8D_62E0_9089_41C7_F08A362969CE",
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
  "id": "camera_72DCFC9C_62E0_908F_416E_A04D167047E4",
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
  "id": "camera_72CD8CB2_62E0_909B_41C0_DFD7EB6DEB66",
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
  "id": "camera_72B88CC2_62E0_90FB_41C3_C9E7DD1778E2",
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
  "id": "camera_72AABCD2_62E0_909B_41CD_14E2F3CB5976",
  "initialPosition": {
   "hfov": 120,
   "yaw": 8.64,
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
  "id": "camera_72A57CF1_62E0_9099_41D2_27C218E874A1",
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
  "id": "camera_72964D00_62E0_9177_417F_E7ED805BC240",
  "initialPosition": {
   "yaw": 22.98,
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
  "id": "camera_72807D10_62E0_9197_41D4_30B5B5956DBB",
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
  "id": "camera_7273AD19_62E0_9189_41BB_3D49F3B4A780",
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
  "id": "camera_726DED23_62E0_91B9_41BD_17EAB3F61768",
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
  "id": "camera_7258ED2B_62E0_9189_41D6_111BAE40A9F3",
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
  "id": "camera_72494D35_62E0_9199_41C8_F6826AC9BC65",
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
  "id": "camera_72446D37_62E0_9199_41D1_5956588D2A8F",
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
  "id": "camera_7236FD41_62E0_91F9_41CB_703618AECAEC",
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
  "id": "camera_72275D4B_62E0_9189_41B8_8AFF68EB9D42",
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
  "id": "camera_72125D55_62E0_9199_41D3_E0564BC76466",
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
  "id": "camera_720C9D5F_62E0_9189_41D2_9F50BEB9274D",
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
  "id": "camera_73FF6D69_62E0_9189_41D0_2DDD44F122E1",
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
  "id": "camera_73E9ED73_62E0_9199_41D6_008AE020CCD1",
  "initialPosition": {
   "yaw": -145.31,
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
  "id": "camera_73E49D7E_62E0_918B_41C3_3D6F4F61CFBA",
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
  "id": "camera_73D51D88_62E0_9177_41C7_34A50195C5B5",
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
  "id": "camera_73C7CD92_62E0_909B_41CD_05A0833458DC",
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
  "id": "camera_73B2AD9A_62E0_908B_41BC_5F303569AB7B",
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
  "id": "camera_73A33DA4_62E0_90BF_41BC_808FFE745EF9",
  "initialPosition": {
   "hfov": 120,
   "yaw": 8.64,
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
  "id": "camera_739E2DAE_62E0_908B_41A5_DA6939EB9FE8",
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
  "id": "camera_73884DB8_62E0_9097_41B0_D46AB70179F0",
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
  "id": "camera_6C28DDED_62E0_9089_41C7_1AE9FA544BC8",
  "initialPosition": {
   "yaw": -161.06,
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
  "id": "camera_6C224DF7_62E0_9098_41D7_B151F68AECAD",
  "initialPosition": {
   "yaw": -145.28,
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
  "id": "camera_6C240E02_62E0_937B_4172_3B5EDAF38708",
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
  "id": "camera_6C186E0C_62E0_938F_41AE_E4D45F528976",
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
  "id": "camera_6C124E16_62E0_939B_41A1_E93F7F352B7A",
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
  "id": "camera_6C165E20_62E0_93B7_41C5_D807411A3018",
  "initialPosition": {
   "yaw": -137.98,
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
  "id": "camera_6C083E2A_62E0_938B_41C1_DECBEE8DE33A",
  "initialPosition": {
   "hfov": 120,
   "yaw": 8.64,
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
  "id": "camera_6C023E34_62E0_939F_4181_6DDC9426DC78",
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
  "id": "camera_6C06BE3E_62E0_938B_41D7_FCF834466A6B",
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
  "id": "camera_6DF8BE48_62E0_93F7_41D6_5F0136561D32",
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
  "id": "camera_6DF32E50_62E0_9397_41D3_64DA92DE1B73",
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
  "id": "camera_6DF6FE5A_62E0_938B_41BA_F73843B9DC29",
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
  "id": "camera_6DE95E5C_62E0_938F_41D0_99DC586D70C2",
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
  "id": "camera_6DE3CE67_62E0_93B9_41BF_4F134381AE43",
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
  "id": "camera_6DE5AE71_62E0_9399_41BF_B66EEEFC8878",
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
  "id": "camera_6DD83E7B_62E0_9389_41C7_635693C96E57",
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
  "id": "camera_6DD23E85_62E0_9379_41D1_0D17F03DB1F4",
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
  "id": "camera_6DD6CE8F_62E0_9089_41B4_B0CE84F1A262",
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
  "id": "camera_6DCF0E99_62E0_9089_41D3_6C563D86F6CE",
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
  "id": "camera_6DC22EA3_62E0_90B9_41D8_30F7B873C1D2",
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
  "id": "camera_6DC4FEAB_62E0_9089_4189_108278AF95B9",
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
  "id": "camera_6DBDEEB5_62E0_9099_41BE_13F7074DA890",
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
  "id": "camera_6DB75EBF_62E0_9089_41C8_282CC683F26A",
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
  "id": "camera_6DAF2EC1_62E0_90F8_41BD_ED9FBC77D78F",
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
  "id": "camera_6DA05ECC_62E0_908F_41C3_5998E4EC31A0",
  "initialPosition": {
   "hfov": 120,
   "yaw": 8.64,
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
  "id": "camera_6D9D1ED6_62E0_909B_41D3_2F6C1BFEF91F",
  "initialPosition": {
   "yaw": 37.1,
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
  "id": "camera_6D948EE0_62E0_90B7_41BC_8C4BED849EB8",
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
  "id": "camera_6D819EEA_62E0_908B_41CB_CA7E255DB621",
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
  "id": "effect_6D7BCEEA_62E0_908B_41C8_BA067553F950",
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
  "id": "effect_6D7A2EEA_62E0_908B_41D0_6A1952DE5493",
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
 },
 {
  "maximumAngle": 360,
  "autoplay": true,
  "id": "audio_58C48535_534B_1088_419D_65D26EA3E6EE",
  "loop": true,
  "audio": {
   "mp3Url": "media/audio_58C48535_534B_1088_419D_65D26EA3E6EE.mp3",
   "oggUrl": "media/audio_58C48535_534B_1088_419D_65D26EA3E6EE.ogg",
   "class": "AudioResource"
  },
  "yaw": 0,
  "class": "DirectionalPanoramaAudio",
  "pitch": 0
 },
 {
  "maximumAngle": 360,
  "autoplay": true,
  "id": "audio_5F019C46_534B_1089_41CA_DD158DC6F095",
  "loop": true,
  "audio": {
   "mp3Url": "media/audio_5F019C46_534B_1089_41CA_DD158DC6F095.mp3",
   "oggUrl": "media/audio_5F019C46_534B_1089_41CA_DD158DC6F095.ogg",
   "class": "AudioResource"
  },
  "yaw": 0,
  "class": "DirectionalPanoramaAudio",
  "pitch": 0
 },
 "this.audio_5F11A888_534B_3198_41C1_CA34B7B483B7",
 "this.audio_5F3A7686_5349_3189_41B9_03AD1E92C6EA",
 "this.audio_5FD12071_5349_1088_41CE_1A9919606FBF",
 "this.audio_5F999E34_5349_3089_41A5_30E8148F4541",
 "this.audio_5FA8081E_5349_30B9_41D0_06F2A3501C10",
 "this.audio_5E6F6697_534F_3188_41D2_212D7D5C7CD4",
 "this.audio_5E08B9DF_534F_73B7_41C9_0C77F337DE42",
 "this.audio_5E20D107_534F_3088_4192_A9F38893E7D5",
 {
  "maximumAngle": 360,
  "autoplay": true,
  "id": "audio_51D70E9C_5DEA_B3F4_41C9_7C42C4A1D34D",
  "loop": true,
  "audio": {
   "mp3Url": "media/audio_51D70E9C_5DEA_B3F4_41C9_7C42C4A1D34D.mp3",
   "oggUrl": "media/audio_51D70E9C_5DEA_B3F4_41C9_7C42C4A1D34D.ogg",
   "class": "AudioResource"
  },
  "yaw": 0,
  "class": "DirectionalPanoramaAudio",
  "pitch": 0
 },
 "this.audio_5116AAD0_5DE9_534C_41D3_54A18E2E7244",
 "this.audio_508C163F_5DEF_5335_41CB_6F4DF04ED378",
 "this.audio_5049FC7B_5DEF_D73D_41B8_AB9CCE43637C",
 "this.audio_502EF191_5DEE_F1CC_41D5_35D2DA805B06",
 "this.audio_53E0760B_5DE9_52DC_41AD_96CE4D26DD8B",
 "this.audio_53AB1146_5DE9_5154_41CA_FED3E44D14A9",
 "this.audio_6E842EF9_62E0_B089_41D3_E417C4013F8A",
 "this.audio_6FA1EE17_62E0_9399_41D5_D3DFA24E9A19",
 "this.audio_6F24DDE5_62E1_B0B9_41B7_9BE4768AF408",
 "this.audio_6DDBF510_62E1_9197_41B5_964EC0286003"
], "children": [
 {
  "toolTipShadowOpacity": 1,
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "paddingRight": 0,
  "progressBarOpacity": 1,
  "playbackBarHeight": 10,
  "playbackBarHeadWidth": 6,
  "playbackBarProgressBorderSize": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "minWidth": 100,
  "playbackBarHeadShadow": true,
  "playbackBarRight": 0,
  "class": "ViewerArea",
  "progressBackgroundOpacity": 1,
  "progressBarBorderSize": 0,
  "toolTipPaddingBottom": 4,
  "progressBarBorderRadius": 0,
  "progressBorderRadius": 0,
  "toolTipFontWeight": "normal",
  "paddingBottom": 0,
  "toolTipFontSize": 11,
  "shadow": false,
  "toolTipShadowVerticalLength": 0,
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
  "playbackBarHeadShadowVerticalLength": 0,
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
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarProgressOpacity": 1,
  "paddingLeft": 0,
  "toolTipBorderColor": "#767676",
  "toolTipTextShadowColor": "#000000",
  "toolTipBorderSize": 1,
  "playbackBarHeadHeight": 15,
  "playbackBarBackgroundOpacity": 1,
  "playbackBarBorderSize": 0,
  "borderSize": 0,
  "toolTipBackgroundColor": "#000000",
  "toolTipPaddingLeft": 6,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "toolTipOpacity": 0.7,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarLeft": 0,
  "borderRadius": 0,
  "playbackBarOpacity": 1,
  "playbackBarHeadShadowColor": "#000000",
  "progressBarBorderColor": "#000000",
  "progressRight": 0,
  "playbackBarHeadBorderSize": 0,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "top": "0%",
  "playbackBarHeadOpacity": 1,
  "progressOpacity": 1,
  "progressBackgroundColorDirection": "vertical",
  "minHeight": 50,
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
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "toolTipPaddingTop": 4,
  "toolTipFontStyle": "normal",
  "right": "0%"
 },
 {
  "verticalAlign": "middle",
  "paddingRight": 0,
  "width": 500,
  "height": 50,
  "maxHeight": 55,
  "paddingLeft": 0,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "borderSize": 0,
  "layout": "horizontal",
  "borderRadius": 5,
  "horizontalAlign": "right",
  "minWidth": 500,
  "gap": 5,
  "class": "Container",
  "maxWidth": 500,
  "top": "3%",
  "minHeight": 55,
  "contentOpaque": false,
  "paddingBottom": 0,
  "id": "Container_807F782A_8E23_A905_41DE_623121285A09",
  "scrollBarColor": "#000000",
  "backgroundOpacity": 0,
  "paddingTop": 0,
  "shadow": false,
  "scrollBarVisible": "rollOver",
  "overflow": "visible",
  "scrollBarOpacity": 0.5,
  "right": "1.5%",
  "children": [
   {
    "verticalAlign": "middle",
    "paddingRight": 0,
    "width": 400,
    "height": 55,
    "maxHeight": 55,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "paddingLeft": 0,
    "borderSize": 0,
    "layout": "horizontal",
    "horizontalAlign": "right",
    "minWidth": 100,
    "gap": 0,
    "borderRadius": 0,
    "class": "Container",
    "contentOpaque": false,
    "minHeight": 55,
    "visible": false,
    "paddingBottom": 0,
    "shadow": false,
    "id": "Container_80D3CF90_8E26_E705_41E0_E47025A2C106",
    "scrollBarColor": "#000000",
    "backgroundOpacity": 0,
    "paddingTop": 0,
    "scrollBarVisible": "rollOver",
    "overflow": "visible",
    "scrollBarOpacity": 0.5,
    "children": [
     "this.IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37",
     {
      "toolTipPaddingRight": 6,
      "verticalAlign": "middle",
      "toolTipBorderRadius": 3,
      "paddingRight": 0,
      "toolTipShadowOpacity": 1,
      "mode": "toggle",
      "iconURL": "skin/IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA.png",
      "height": "100%",
      "maxHeight": 60,
      "width": "100%",
      "paddingLeft": 0,
      "toolTipBorderColor": "#767676",
      "transparencyActive": true,
      "toolTip": "Full Screen",
      "toolTipBorderSize": 1,
      "toolTipTextShadowColor": "#000000",
      "borderSize": 0,
      "toolTipBackgroundColor": "#000000",
      "toolTipPaddingLeft": 6,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "pressedIconURL": "skin/IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA_pressed.png",
      "minWidth": 1,
      "click": "if(!this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, true, 0, null, null, false) } else if(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, false, 0, null, null, false) }",
      "toolTipTextShadowBlurRadius": 3,
      "toolTipOpacity": 0.7,
      "toolTipShadowVerticalLength": 0,
      "class": "IconButton",
      "maxWidth": 60,
      "toolTipPaddingBottom": 4,
      "minHeight": 1,
      "cursor": "hand",
      "paddingBottom": 0,
      "toolTipFontSize": 11,
      "shadow": false,
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
      "toolTipPaddingTop": 4,
      "toolTipFontStyle": "normal"
     },
     {
      "toolTipPaddingRight": 6,
      "verticalAlign": "middle",
      "toolTipBorderRadius": 3,
      "paddingRight": 0,
      "toolTipShadowOpacity": 1,
      "mode": "toggle",
      "iconURL": "skin/IconButton_8105A313_8E22_BF0B_41E1_331C6035A930.png",
      "height": "100%",
      "maxHeight": 60,
      "width": "100%",
      "paddingLeft": 0,
      "toolTipBorderColor": "#767676",
      "transparencyActive": true,
      "toolTip": "Audio On/Off",
      "toolTipBorderSize": 1,
      "toolTipTextShadowColor": "#000000",
      "borderSize": 0,
      "toolTipBackgroundColor": "#000000",
      "toolTipPaddingLeft": 6,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "pressedIconURL": "skin/IconButton_8105A313_8E22_BF0B_41E1_331C6035A930_pressed.png",
      "minWidth": 1,
      "click": "if(!this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, true, 0, this.effect_CACBF85D_EED0_7261_41DB_A3B65ECE0D5D, 'showEffect', false) } else if(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, false, 0, this.effect_CACBC85D_EED0_7261_41BE_8CF4C3A8170C, 'hideEffect', false) }",
      "toolTipTextShadowBlurRadius": 3,
      "toolTipOpacity": 0.7,
      "toolTipShadowVerticalLength": 0,
      "class": "IconButton",
      "maxWidth": 60,
      "toolTipPaddingBottom": 4,
      "minHeight": 1,
      "cursor": "hand",
      "paddingBottom": 0,
      "toolTipFontSize": 11,
      "shadow": false,
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
      "toolTipPaddingTop": 4,
      "toolTipFontStyle": "normal"
     },
     "this.IconButton_80E5955A_8E23_BB05_41CA_43DD61DBAEE9"
    ]
   },
   {
    "toolTipPaddingRight": 6,
    "verticalAlign": "middle",
    "toolTipBorderRadius": 3,
    "paddingRight": 0,
    "toolTipShadowOpacity": 1,
    "mode": "toggle",
    "iconURL": "skin/IconButton_811D89E1_8E3D_AB07_4191_94003C90B2FF.png",
    "height": "100%",
    "maxHeight": 55,
    "width": "100%",
    "paddingLeft": 0,
    "toolTipBorderColor": "#767676",
    "transparencyActive": true,
    "toolTip": "Settings",
    "toolTipBorderSize": 1,
    "toolTipTextShadowColor": "#000000",
    "borderSize": 0,
    "toolTipBackgroundColor": "#000000",
    "toolTipPaddingLeft": 6,
    "borderRadius": 0,
    "horizontalAlign": "center",
    "pressedIconURL": "skin/IconButton_811D89E1_8E3D_AB07_4191_94003C90B2FF_pressed.png",
    "minWidth": 55,
    "click": "if(!this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, true, 0, this.effect_32C91197_3F22_3110_4181_9E76B593FBFE, 'showEffect', false) } else if(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, false, 0, this.effect_32C92197_3F22_3110_419D_E2E21968F16F, 'hideEffect', false) }",
    "toolTipTextShadowBlurRadius": 3,
    "toolTipOpacity": 0.7,
    "toolTipShadowVerticalLength": 0,
    "class": "IconButton",
    "maxWidth": 55,
    "toolTipPaddingBottom": 4,
    "minHeight": 55,
    "cursor": "hand",
    "paddingBottom": 0,
    "toolTipFontSize": 11,
    "shadow": false,
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
    "toolTipPaddingTop": 4,
    "toolTipFontStyle": "normal"
   }
  ]
 },
 {
  "verticalAlign": "top",
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "paddingRight": 0,
  "height": "100%",
  "paddingLeft": 0,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "borderSize": 0,
  "width": "100%",
  "horizontalAlign": "left",
  "minWidth": 1,
  "gap": 10,
  "borderRadius": 0,
  "class": "Container",
  "contentOpaque": false,
  "top": "0%",
  "backgroundColorDirection": "vertical",
  "visible": false,
  "paddingBottom": 0,
  "backgroundColorRatios": [
   0,
   1
  ],
  "minHeight": 1,
  "id": "Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB",
  "scrollBarColor": "#000000",
  "backgroundOpacity": 0.7,
  "paddingTop": 0,
  "shadow": false,
  "scrollBarVisible": "rollOver",
  "overflow": "scroll",
  "left": "0%",
  "layout": "absolute",
  "scrollBarOpacity": 0.5,
  "children": [
   "this.ViewerAreaLabeled_9FD7235A_96CD_9045_41D9_23A3BCBDB1C6",
   "this.IconButton_9FEA51EA_96CC_905A_41D3_F42DB0CD0A74",
   "this.IconButton_9FB9BD3F_96C5_703B_41D7_65AEE6E85A96",
   "this.IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4"
  ]
 },
 {
  "verticalAlign": "middle",
  "paddingRight": 0,
  "mode": "push",
  "iconURL": "skin/IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB.png",
  "height": "5.482%",
  "maxHeight": 50,
  "width": "3.03%",
  "paddingLeft": 0,
  "transparencyActive": true,
  "borderSize": 0,
  "borderRadius": 0,
  "horizontalAlign": "center",
  "minWidth": 50,
  "class": "IconButton",
  "maxWidth": 50,
  "top": "2%",
  "minHeight": 50,
  "cursor": "hand",
  "visible": false,
  "paddingBottom": 0,
  "id": "IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB",
  "backgroundOpacity": 0,
  "paddingTop": 0,
  "shadow": false,
  "rollOverIconURL": "skin/IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB_rollover.png",
  "right": "2%"
 },
 {
  "verticalAlign": "top",
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "paddingRight": 0,
  "paddingLeft": 0,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "borderSize": 0,
  "layout": "absolute",
  "horizontalAlign": "left",
  "minWidth": 1,
  "gap": 10,
  "borderRadius": 0,
  "class": "Container",
  "contentOpaque": false,
  "top": "0%",
  "backgroundColorDirection": "vertical",
  "visible": false,
  "paddingBottom": 0,
  "backgroundColorRatios": [
   0,
   1
  ],
  "minHeight": 1,
  "bottom": "0%",
  "id": "Container_53347472_4288_F6E6_4196_D7457B47D2CF",
  "scrollBarColor": "#000000",
  "backgroundOpacity": 0.3,
  "paddingTop": 0,
  "shadow": false,
  "scrollBarVisible": "rollOver",
  "overflow": "scroll",
  "left": "0%",
  "scrollBarOpacity": 0.5,
  "right": "0%",
  "children": [
   "this.MapViewer",
   {
    "verticalAlign": "middle",
    "paddingRight": 0,
    "mode": "push",
    "iconURL": "skin/IconButton_50D1A26C_4289_72E1_41CD_2B557DFCC24F.png",
    "height": "5.91%",
    "maxHeight": 50,
    "width": "5.07%",
    "paddingLeft": 0,
    "transparencyActive": true,
    "borderSize": 0,
    "borderRadius": 0,
    "horizontalAlign": "center",
    "minWidth": 50,
    "click": "this.setComponentVisibility(this.Container_53347472_4288_F6E6_4196_D7457B47D2CF, false, 0, this.effect_500E3733_4297_3267_41C9_4935C0BEBF39, 'hideEffect', false)",
    "class": "IconButton",
    "maxWidth": 50,
    "top": "5%",
    "minHeight": 50,
    "cursor": "hand",
    "paddingBottom": 0,
    "id": "IconButton_50D1A26C_4289_72E1_41CD_2B557DFCC24F",
    "backgroundOpacity": 0,
    "paddingTop": 0,
    "shadow": false,
    "rollOverIconURL": "skin/IconButton_50D1A26C_4289_72E1_41CD_2B557DFCC24F_rollover.png",
    "right": "5%"
   }
  ]
 },
 {
  "verticalAlign": "bottom",
  "paddingRight": 0,
  "height": 160,
  "maxHeight": 160,
  "layout": "vertical",
  "paddingLeft": 0,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "borderSize": 0,
  "horizontalAlign": "center",
  "minWidth": 1,
  "gap": 3,
  "borderRadius": 0,
  "class": "Container",
  "contentOpaque": false,
  "minHeight": 130,
  "paddingBottom": 0,
  "shadow": false,
  "bottom": "0.7%",
  "id": "Container_6EC9FEC0_76A2_F957_41C5_79AD4AF65B38",
  "scrollBarColor": "#000000",
  "backgroundOpacity": 0,
  "paddingTop": 0,
  "scrollBarVisible": "rollOver",
  "overflow": "visible",
  "left": "15%",
  "scrollBarOpacity": 0.5,
  "right": "15%",
  "children": [
   {
    "rollOverItemBackgroundColorDirection": "vertical",
    "backgroundColor": [
     "#000000"
    ],
    "rollOverItemThumbnailShadowBlurRadius": 15,
    "selectedItemBackgroundColor": [],
    "paddingRight": 5,
    "maxHeight": 100,
    "selectedItemThumbnailShadowVerticalLength": 0,
    "scrollBarWidth": 5,
    "scrollBarMargin": 2,
    "gap": 7,
    "itemHorizontalAlign": "center",
    "selectedItemLabelFontStyle": "italic",
    "horizontalAlign": "left",
    "rollOverItemBackgroundColor": [
     "#000000"
    ],
    "minWidth": 50,
    "maxWidth": 770,
    "itemMode": "normal",
    "selectedItemThumbnailShadowHorizontalLength": 0,
    "itemLabelFontColor": "#FFFFFF",
    "playList": "this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist",
    "rollOverItemLabelFontColor": "#FFFFFF",
    "itemThumbnailScaleMode": "fit_outside",
    "rollOverItemLabelFontWeight": "bold",
    "class": "ThumbnailList",
    "backgroundColorDirection": "vertical",
    "paddingBottom": 5,
    "selectedItemLabelTextDecoration": "underline",
    "scrollBarColor": "#52B7EF",
    "shadow": false,
    "itemPaddingBottom": 3,
    "itemLabelFontWeight": "normal",
    "rollOverItemLabelTextDecoration": "underline",
    "paddingTop": 5,
    "itemThumbnailOpacity": 1,
    "itemThumbnailBorderRadius": 30,
    "selectedItemLabelFontColor": "#FFFFFF",
    "scrollBarVisible": "rollOver",
    "rollOverItemLabelFontStyle": "normal",
    "itemThumbnailShadow": false,
    "rollOverItemBackgroundColorRatios": [
     0
    ],
    "itemLabelTextDecoration": "none",
    "scrollBarOpacity": 1,
    "itemPaddingRight": 3,
    "rollOverItemThumbnailShadowHorizontalLength": 0,
    "itemLabelFontStyle": "normal",
    "selectedItemThumbnailShadowBlurRadius": 15,
    "selectedItemThumbnailShadow": true,
    "selectedItemLabelFontSize": 11,
    "itemLabelHorizontalAlign": "center",
    "rollOverItemThumbnailShadowColor": "#FFFFFF",
    "itemThumbnailWidth": 60,
    "selectedItemThumbnailShadowOpacity": 1,
    "itemBorderRadius": 0,
    "itemPaddingLeft": 3,
    "paddingLeft": 5,
    "height": "100%",
    "selectedItemBorderSize": 0,
    "borderSize": 0,
    "width": "100%",
    "borderRadius": 3,
    "itemPaddingTop": 3,
    "itemVerticalAlign": "middle",
    "itemLabelGap": 5,
    "itemBackgroundColorDirection": "vertical",
    "selectedItemBorderRadius": 0,
    "itemBackgroundOpacity": 0,
    "itemBackgroundColor": [],
    "selectedItemThumbnailShadowColor": "#FFFFFF",
    "selectedItemLabelFontWeight": "bold",
    "layout": "horizontal",
    "rollOverItemBackgroundOpacity": 0,
    "rollOverItemThumbnailShadowOpacity": 1,
    "backgroundColorRatios": [
     0
    ],
    "minHeight": 70,
    "selectedItemBackgroundColorRatios": [],
    "itemLabelFontSize": 11,
    "id": "ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472",
    "rollOverItemThumbnailShadowVerticalLength": 0,
    "backgroundOpacity": 0.25,
    "itemOpacity": 1,
    "itemLabelPosition": "bottom",
    "rollOverItemThumbnailShadow": true,
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
    "height": 55,
    "maxHeight": 55,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "paddingLeft": 0,
    "borderSize": 0,
    "layout": "absolute",
    "borderRadius": 5,
    "horizontalAlign": "center",
    "minWidth": 70,
    "gap": 0,
    "class": "Container",
    "maxWidth": 70,
    "minHeight": 55,
    "contentOpaque": false,
    "paddingBottom": 0,
    "shadow": false,
    "id": "Container_86F3A56C_8E22_5B1D_41CA_9CE53436FE56",
    "scrollBarColor": "#000000",
    "backgroundOpacity": 0,
    "paddingTop": 0,
    "scrollBarVisible": "rollOver",
    "overflow": "visible",
    "scrollBarOpacity": 0.5,
    "children": [
     {
      "toolTipPaddingRight": 6,
      "verticalAlign": "middle",
      "toolTipBorderRadius": 3,
      "paddingRight": 0,
      "toolTipShadowOpacity": 1,
      "mode": "push",
      "iconURL": "skin/IconButton_87577B8F_8E22_AF1B_41CC_79EB87AE6DED.png",
      "height": "100%",
      "maxHeight": 70,
      "width": "100%",
      "paddingLeft": 0,
      "toolTipBorderColor": "#767676",
      "transparencyActive": true,
      "toolTip": "Info",
      "toolTipBorderSize": 1,
      "toolTipTextShadowColor": "#000000",
      "borderSize": 0,
      "toolTipBackgroundColor": "#000000",
      "toolTipPaddingLeft": 6,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "minWidth": 25,
      "click": "this.showPopupImage(this.ImageResource_6ECEF4DB_6091_DDD1_41D4_2B884570086A, null, '85%', '85%', this.FadeInEffect_8ED05F70_96C4_F045_41DC_2AB82A556F92, this.FadeOutEffect_8ED06F70_96C4_F045_41DA_C74400CF7B15, {'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'rollOverBorderSize':0,'pressedBackgroundColorDirection':'vertical','borderColor':'#000000','backgroundColorDirection':'vertical','pressedIconColor':'#CCCCCC','backgroundColor':['#000000','#000000','#000000'],'paddingBottom':10,'backgroundColorRatios':[0,0.09803921568627451,1],'iconHeight':25,'iconColor':'#FFFFFF','pressedIconWidth':25,'pressedIconHeight':25,'backgroundOpacity':0.15,'rollOverBorderColor':'#000000','rollOverBackgroundOpacity':0.5,'rollOverIconHeight':25,'paddingLeft':10,'rollOverIconLineWidth':3,'iconWidth':25,'pressedBackgroundColor':['#000000','#000000','#000000'],'rollOverIconWidth':25,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':3,'pressedBorderSize':0,'rollOverIconColor':'#52B7EF','rollOverBackgroundColorDirection':'vertical','rollOverBackgroundColor':['#000000','#000000','#000000'],'iconLineWidth':3,'paddingTop':10,'borderSize':0,'paddingRight':10,'pressedBorderColor':'#000000'}, null, null, false)",
      "toolTipTextShadowBlurRadius": 3,
      "toolTipOpacity": 0.7,
      "toolTipShadowVerticalLength": 0,
      "class": "IconButton",
      "maxWidth": 70,
      "toolTipPaddingBottom": 4,
      "minHeight": 25,
      "cursor": "hand",
      "visible": false,
      "paddingBottom": 0,
      "toolTipFontSize": 11,
      "shadow": false,
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
      "toolTipPaddingTop": 4,
      "rollOverIconURL": "skin/IconButton_87577B8F_8E22_AF1B_41CC_79EB87AE6DED_rollover.png",
      "toolTipFontStyle": "normal"
     },
     {
      "toolTipPaddingRight": 6,
      "verticalAlign": "middle",
      "toolTipBorderRadius": 3,
      "paddingRight": 0,
      "toolTipShadowOpacity": 1,
      "mode": "push",
      "iconURL": "skin/IconButton_213ED70C_2DB2_E6C5_41B6_0CCE6C77E889.png",
      "height": "100%",
      "maxHeight": 70,
      "width": "100%",
      "paddingLeft": 0,
      "toolTipBorderColor": "#767676",
      "transparencyActive": true,
      "toolTip": "Play Video",
      "toolTipBorderSize": 1,
      "toolTipTextShadowColor": "#000000",
      "borderSize": 0,
      "toolTipBackgroundColor": "#000000",
      "toolTipPaddingLeft": 6,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "minWidth": 25,
      "click": "this.setMediaBehaviour(this.playList_705DFACD_62E0_9089_41D1_1F943F215E11, 0); this.MainViewerVideoPlayer.play()",
      "toolTipTextShadowBlurRadius": 3,
      "toolTipOpacity": 0.7,
      "toolTipShadowVerticalLength": 0,
      "class": "IconButton",
      "maxWidth": 70,
      "toolTipPaddingBottom": 4,
      "minHeight": 25,
      "cursor": "hand",
      "visible": false,
      "paddingBottom": 0,
      "toolTipFontSize": 11,
      "shadow": false,
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
      "toolTipPaddingTop": 4,
      "rollOverIconURL": "skin/IconButton_213ED70C_2DB2_E6C5_41B6_0CCE6C77E889_rollover.png",
      "toolTipFontStyle": "normal"
     },
     {
      "toolTipPaddingRight": 6,
      "verticalAlign": "top",
      "toolTipBorderRadius": 3,
      "paddingRight": 0,
      "toolTipShadowOpacity": 1,
      "mode": "push",
      "iconURL": "skin/IconButton_67A0F254_76E6_A97F_419D_52AF6E3FE7C0.png",
      "height": "100%",
      "maxHeight": 55,
      "width": "100%",
      "paddingLeft": 0,
      "toolTipBorderColor": "#767676",
      "transparencyActive": true,
      "toolTip": "Show Panorama List",
      "toolTipBorderSize": 1,
      "toolTipTextShadowColor": "#000000",
      "borderSize": 0,
      "toolTipBackgroundColor": "#000000",
      "toolTipPaddingLeft": 6,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "minWidth": 70,
      "click": "this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, true, 0, this.effect_508929C3_77ED_DB59_41D8_05A6C8F0681B, 'showEffect', false); this.setComponentVisibility(this.IconButton_843BBEF5_8E22_690F_419D_28CBDD771ACC, true, 0, this.effect_508929C3_77ED_DB59_41D8_05A6C8F0681B, 'showEffect', false); this.setComponentVisibility(this.IconButton_67A0F254_76E6_A97F_419D_52AF6E3FE7C0, false, 0, this.effect_518C2CD2_77ED_D97B_41C3_3AC87D499717, 'hideEffect', false)",
      "toolTipTextShadowBlurRadius": 3,
      "toolTipOpacity": 0.7,
      "toolTipShadowVerticalLength": 0,
      "class": "IconButton",
      "maxWidth": 70,
      "toolTipPaddingBottom": 4,
      "minHeight": 55,
      "cursor": "hand",
      "visible": false,
      "paddingBottom": 0,
      "toolTipFontSize": 11,
      "shadow": false,
      "toolTipShadowHorizontalLength": 0,
      "toolTipShadowColor": "#333333",
      "toolTipShadowBlurRadius": 3,
      "toolTipFontWeight": "normal",
      "id": "IconButton_67A0F254_76E6_A97F_419D_52AF6E3FE7C0",
      "toolTipShadowSpread": 0,
      "toolTipTextShadowOpacity": 0,
      "backgroundOpacity": 0,
      "toolTipFontColor": "#606060",
      "toolTipFontFamily": "Arial",
      "paddingTop": 0,
      "toolTipPaddingTop": 4,
      "toolTipFontStyle": "normal"
     },
     {
      "toolTipPaddingRight": 6,
      "verticalAlign": "top",
      "toolTipBorderRadius": 3,
      "paddingRight": 0,
      "toolTipShadowOpacity": 1,
      "mode": "push",
      "iconURL": "skin/IconButton_843BBEF5_8E22_690F_419D_28CBDD771ACC.png",
      "height": "100%",
      "maxHeight": 55,
      "width": "100%",
      "paddingLeft": 0,
      "toolTipBorderColor": "#767676",
      "transparencyActive": true,
      "toolTip": "Hide Panorama List",
      "toolTipBorderSize": 1,
      "toolTipTextShadowColor": "#000000",
      "borderSize": 0,
      "toolTipBackgroundColor": "#000000",
      "toolTipPaddingLeft": 6,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "minWidth": 70,
      "click": "this.setComponentVisibility(this.IconButton_67A0F254_76E6_A97F_419D_52AF6E3FE7C0, true, 0, this.effect_640860A9_76E7_E929_4192_305B50E5610A, 'showEffect', false); this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, false, 0, this.effect_5032FA51_77E2_5979_41D1_45E5EF039077, 'hideEffect', false); this.setComponentVisibility(this.IconButton_843BBEF5_8E22_690F_419D_28CBDD771ACC, false, 0, this.effect_5032FA51_77E2_5979_41D1_45E5EF039077, 'hideEffect', false)",
      "toolTipTextShadowBlurRadius": 3,
      "toolTipOpacity": 0.7,
      "toolTipShadowVerticalLength": 0,
      "class": "IconButton",
      "maxWidth": 70,
      "toolTipPaddingBottom": 4,
      "minHeight": 55,
      "cursor": "hand",
      "paddingBottom": 0,
      "toolTipFontSize": 11,
      "shadow": false,
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
      "toolTipPaddingTop": 4,
      "toolTipFontStyle": "normal"
     },
     "this.IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED",
     {
      "toolTipPaddingRight": 6,
      "verticalAlign": "middle",
      "toolTipBorderRadius": 3,
      "paddingRight": 0,
      "toolTipShadowOpacity": 1,
      "mode": "push",
      "iconURL": "skin/IconButton_2FC9210C_3E8F_C4D4_41A7_10D1404CA49B.png",
      "height": "85%",
      "maxHeight": 70,
      "width": "85%",
      "paddingLeft": 0,
      "toolTipBorderColor": "#767676",
      "transparencyActive": true,
      "toolTip": "FLoor Plan",
      "toolTipBorderSize": 1,
      "toolTipTextShadowColor": "#000000",
      "borderSize": 0,
      "toolTipBackgroundColor": "#000000",
      "toolTipPaddingLeft": 6,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "pressedIconURL": "skin/IconButton_2FC9210C_3E8F_C4D4_41A7_10D1404CA49B_pressed.png",
      "minWidth": 25,
      "click": "this.setComponentVisibility(this.Container_53347472_4288_F6E6_4196_D7457B47D2CF, true, 0, this.effect_51CB7B74_4299_12E2_41B4_829087983DE5, 'showEffect', false)",
      "toolTipTextShadowBlurRadius": 3,
      "toolTipOpacity": 0.7,
      "toolTipShadowVerticalLength": 0,
      "class": "IconButton",
      "maxWidth": 70,
      "toolTipPaddingBottom": 4,
      "minHeight": 25,
      "cursor": "hand",
      "visible": false,
      "paddingBottom": 0,
      "toolTipFontSize": 11,
      "shadow": false,
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
      "toolTipPaddingTop": 4,
      "toolTipFontStyle": "normal"
     }
    ]
   }
  ]
 },
 {
  "backgroundColor": [
   "#000000"
  ],
  "paddingRight": 0,
  "paddingLeft": 0,
  "showEffect": {
   "easing": "cubic_in_out",
   "duration": 350,
   "class": "FadeInEffect"
  },
  "borderSize": 0,
  "minWidth": 0,
  "borderRadius": 0,
  "class": "UIComponent",
  "top": 0,
  "backgroundColorDirection": "vertical",
  "visible": false,
  "paddingBottom": 0,
  "backgroundColorRatios": [
   0
  ],
  "minHeight": 0,
  "bottom": 0,
  "id": "veilPopupPanorama",
  "backgroundOpacity": 0.55,
  "paddingTop": 0,
  "shadow": false,
  "left": 0,
  "right": 0
 },
 {
  "backgroundColor": [],
  "paddingRight": 0,
  "paddingLeft": 0,
  "borderSize": 0,
  "minWidth": 0,
  "borderRadius": 0,
  "scaleMode": "custom",
  "class": "ZoomImage",
  "top": 0,
  "backgroundColorDirection": "vertical",
  "visible": false,
  "paddingBottom": 0,
  "backgroundColorRatios": [],
  "minHeight": 0,
  "bottom": 0,
  "id": "zoomImagePopupPanorama",
  "backgroundOpacity": 1,
  "paddingTop": 0,
  "shadow": false,
  "left": 0,
  "right": 0
 },
 {
  "fontStyle": "normal",
  "verticalAlign": "middle",
  "iconHeight": 20,
  "backgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "fontSize": 12,
  "mode": "push",
  "paddingRight": 5,
  "fontColor": "#FFFFFF",
  "iconColor": "#000000",
  "paddingLeft": 5,
  "showEffect": {
   "easing": "cubic_in_out",
   "duration": 350,
   "class": "FadeInEffect"
  },
  "textDecoration": "none",
  "iconWidth": 20,
  "borderSize": 0,
  "horizontalAlign": "center",
  "gap": 5,
  "minWidth": 0,
  "fontFamily": "Arial",
  "borderRadius": 0,
  "class": "CloseButton",
  "fontWeight": "normal",
  "iconLineWidth": 5,
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
  "minHeight": 0,
  "id": "closeButtonPopupPanorama",
  "rollOverIconColor": "#666666",
  "backgroundOpacity": 0.3,
  "pressedIconColor": "#888888",
  "shadowColor": "#000000",
  "paddingTop": 5,
  "shadowSpread": 1,
  "shadow": false,
  "shadowBlurRadius": 6,
  "label": "",
  "borderColor": "#000000",
  "iconBeforeLabel": true,
  "right": 10,
  "layout": "horizontal"
 }
], 
 "verticalAlign": "top",
 "mouseWheelEnabled": true,
 "paddingRight": 0,
 "backgroundPreloadEnabled": true,
 "height": "100%",
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "borderSize": 0,
 "vrPolyfillScale": 0.5,
 "horizontalAlign": "left",
 "minWidth": 20,
 "gap": 10,
 "borderRadius": 0,
 "class": "Player",
 "contentOpaque": false,
 "scripts": {
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getKey": function(key){  return window[key]; },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "existsKey": function(key){  return key in window; },
  "unregisterKey": function(key){  delete window[key]; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "registerKey": function(key, value){  window[key] = value; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio) delete audios[audio.get('id')]; } if(audio) audio.stop(); },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } }
 },
 "paddingBottom": 0,
 "shadow": false,
 "minHeight": 20,
 "id": "rootPlayer",
 "scrollBarColor": "#000000",
 "paddingTop": 0,
 "buttonToggleMute": "this.IconButton_8105A313_8E22_BF0B_41E1_331C6035A930",
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "buttonToggleFullscreen": "this.IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA",
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "start": "this.syncPlaylists([this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); this.playList_6C53DB0B_62E0_9189_41C2_0598EB912B73.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA].forEach(function(component) { component.set('visible', false); }) }",
 "layout": "absolute"
})