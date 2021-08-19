TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "buttonPlay": {
   "backgroundOpacity": 0,
   "paddingRight": 0,
   "mode": "push",
   "toolTipPaddingRight": 6,
   "toolTipBackgroundColor": "#000000",
   "iconURL": "skin/IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED.png",
   "height": "100%",
   "toolTipShadowVerticalLength": 0,
   "width": "100%",
   "toolTipTextShadowOpacity": 0,
   "toolTipPaddingBottom": 4,
   "transparencyActive": true,
   "toolTipTextShadowColor": "#000000",
   "toolTipFontSize": 11,
   "borderRadius": 0,
   "toolTipShadowOpacity": 1,
   "toolTipOpacity": 0.7,
   "borderSize": 0,
   "maxWidth": 70,
   "rollOverIconURL": "skin/IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED_rollover.png",
   "toolTipPaddingLeft": 6,
   "toolTipBorderColor": "#767676",
   "shadow": false,
   "minHeight": 25,
   "toolTipBorderSize": 1,
   "class": "IconButton",
   "toolTipFontStyle": "normal",
   "toolTipBorderRadius": 3,
   "toolTip": "See Photos",
   "horizontalAlign": "center",
   "click": "this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, true, 0, this.effect_98AADBB0_96C5_F0C5_41B2_1C4D08E503DB, 'showEffect', false); this.playList_52733C5A_5E22_85BE_41C9_BC41DED33381.set('selectedIndex', 0)",
   "cursor": "hand",
   "visible": false,
   "paddingBottom": 0,
   "toolTipTextShadowBlurRadius": 3,
   "minWidth": 25,
   "toolTipShadowHorizontalLength": 0,
   "id": "IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED",
   "toolTipFontWeight": "normal",
   "toolTipShadowSpread": 0,
   "paddingTop": 0,
   "toolTipShadowColor": "#333333",
   "toolTipShadowBlurRadius": 3,
   "maxHeight": 70,
   "toolTipPaddingTop": 4,
   "paddingLeft": 0,
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
    "backgroundOpacity": 0,
    "paddingRight": 0,
    "mode": "push",
    "iconURL": "skin/IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4.png",
    "height": "5.48%",
    "width": "3.03%",
    "transparencyActive": true,
    "borderRadius": 0,
    "borderSize": 0,
    "maxWidth": 50,
    "rollOverIconURL": "skin/IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4_rollover.png",
    "shadow": false,
    "minHeight": 50,
    "class": "IconButton",
    "horizontalAlign": "center",
    "top": "2%",
    "click": "this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, false, 0, this.effect_9B0AF4E2_96C4_F045_41D3_0E00FEE03A15, 'hideEffect', false)",
    "cursor": "hand",
    "paddingBottom": 0,
    "minWidth": 50,
    "id": "IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4",
    "paddingTop": 0,
    "maxHeight": 50,
    "paddingLeft": 0,
    "right": "2%",
    "verticalAlign": "middle"
   },
   "this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB"
  ]
 },
 {
  "buttonPlay": "this.IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED",
  "buttonPrevious": {
   "backgroundOpacity": 0,
   "paddingRight": 0,
   "mode": "push",
   "iconURL": "skin/IconButton_9FEA51EA_96CC_905A_41D3_F42DB0CD0A74.png",
   "width": "4.24%",
   "transparencyActive": true,
   "borderRadius": 0,
   "borderSize": 0,
   "maxWidth": 70,
   "rollOverIconURL": "skin/IconButton_9FEA51EA_96CC_905A_41D3_F42DB0CD0A74_rollover.png",
   "shadow": false,
   "minHeight": 70,
   "class": "IconButton",
   "horizontalAlign": "center",
   "top": "40%",
   "cursor": "hand",
   "paddingBottom": 0,
   "minWidth": 70,
   "id": "IconButton_9FEA51EA_96CC_905A_41D3_F42DB0CD0A74",
   "bottom": "40%",
   "paddingTop": 0,
   "left": "1%",
   "maxHeight": 70,
   "paddingLeft": 0,
   "verticalAlign": "middle"
  },
  "id": "ViewerAreaLabeled_9FD7235A_96CD_9045_41D9_23A3BCBDB1C6PhotoAlbumPlayer",
  "viewerArea": {
   "paddingLeft": 0,
   "progressBorderRadius": 0,
   "progressBarBackgroundColorDirection": "vertical",
   "progressBackgroundColor": [
    "#FFFFFF"
   ],
   "paddingRight": 0,
   "toolTipBackgroundColor": "#000000",
   "toolTipShadowVerticalLength": 0,
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
   "playbackBarHeadShadowVerticalLength": 0,
   "shadow": false,
   "playbackBarHeadWidth": 6,
   "toolTipBorderSize": 1,
   "playbackBarProgressBackgroundColorDirection": "vertical",
   "class": "ViewerArea",
   "toolTipFontStyle": "normal",
   "playbackBarBackgroundColorDirection": "vertical",
   "playbackBarProgressBorderSize": 0,
   "progressBottom": 2,
   "paddingBottom": 0,
   "playbackBarHeadBackgroundColorDirection": "vertical",
   "playbackBarRight": 0,
   "minWidth": 1,
   "progressBorderSize": 0,
   "progressBarBorderSize": 0,
   "progressBarBorderRadius": 0,
   "playbackBarProgressBorderRadius": 0,
   "paddingTop": 0,
   "transitionMode": "blending",
   "toolTipShadowSpread": 0,
   "toolTipShadowColor": "#333333",
   "toolTipShadowBlurRadius": 3,
   "toolTipPaddingTop": 4,
   "toolTipFontColor": "#606060",
   "playbackBarBorderRadius": 0,
   "playbackBarHeadShadowHorizontalLength": 0,
   "playbackBarProgressBorderColor": "#000000",
   "toolTipPaddingRight": 6,
   "width": "100%",
   "playbackBarHeadBorderRadius": 0,
   "height": "100%",
   "toolTipTextShadowColor": "#000000",
   "toolTipTextShadowOpacity": 0,
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
   "minHeight": 1,
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
   "playbackBarHeadBorderSize": 0,
   "playbackBarHeadShadowColor": "#000000",
   "progressBarBorderColor": "#000000",
   "id": "ViewerAreaLabeled_9FD7235A_96CD_9045_41D9_23A3BCBDB1C6",
   "toolTipTextShadowBlurRadius": 3,
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
   "playbackBarBottom": 0,
   "playbackBarProgressBackgroundColor": [
    "#3399FF"
   ],
   "progressBarBackgroundColor": [
    "#3399FF"
   ],
   "toolTipFontFamily": "Arial",
   "progressBorderColor": "#000000",
   "progressOpacity": 1
  },
  "buttonNext": {
   "backgroundOpacity": 0,
   "paddingRight": 0,
   "mode": "push",
   "iconURL": "skin/IconButton_9FB9BD3F_96C5_703B_41D7_65AEE6E85A96.png",
   "width": "4.24%",
   "transparencyActive": true,
   "borderRadius": 0,
   "borderSize": 0,
   "maxWidth": 70,
   "rollOverIconURL": "skin/IconButton_9FB9BD3F_96C5_703B_41D7_65AEE6E85A96_rollover.png",
   "shadow": false,
   "minHeight": 70,
   "class": "IconButton",
   "horizontalAlign": "center",
   "top": "40%",
   "cursor": "hand",
   "paddingBottom": 0,
   "minWidth": 70,
   "id": "IconButton_9FB9BD3F_96C5_703B_41D7_65AEE6E85A96",
   "bottom": "40%",
   "paddingTop": 0,
   "maxHeight": 70,
   "paddingLeft": 0,
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
  "frames": [
   {
    "thumbnailUrl": "media/panorama_9145F5B4_9D6A_310F_41B6_278704EC634D_t.jpg",
    "overlays": [
     {
      "useHandCursor": true,
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
      "areas": [
       {
        "toolTip": "ENTRANCE",
        "click": "this.startPanoramaWithCamera(this.panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E, this.camera_552A6ED5_5BF2_F2BA_41D6_D4FD03CB3A2E); this.mainPlayList.set('selectedIndex', 1)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "displayTooltipInTouchScreens": true
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
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
      "areas": [
       {
        "toolTip": "ENTRANCE",
        "click": "this.startPanoramaWithCamera(this.panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2, this.camera_50AD1FD7_5E22_82B6_41C3_873D029311D5); this.mainPlayList.set('selectedIndex', 1)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "displayTooltipInTouchScreens": true
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
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
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA, this.camera_50DDB022_5E22_BD8E_41C4_1CB2A8686822); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 5); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 8)"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": true,
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
  "audios": [
   {
    "autoplay": true,
    "id": "audio_58C48535_534B_1088_419D_65D26EA3E6EE",
    "audio": {
     "mp3Url": "media/audio_58C48535_534B_1088_419D_65D26EA3E6EE.mp3",
     "oggUrl": "media/audio_58C48535_534B_1088_419D_65D26EA3E6EE.ogg",
     "class": "AudioResource"
    },
    "class": "PanoramaAudio"
   },
   {
    "autoplay": true,
    "id": "audio_51D70E9C_5DEA_B3F4_41C9_7C42C4A1D34D",
    "loop": true,
    "audio": {
     "mp3Url": "media/audio_51D70E9C_5DEA_B3F4_41C9_7C42C4A1D34D.mp3",
     "oggUrl": "media/audio_51D70E9C_5DEA_B3F4_41C9_7C42C4A1D34D.ogg",
     "class": "AudioResource"
    },
    "class": "PanoramaAudio"
   }
  ],
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_9145F5B4_9D6A_310F_41B6_278704EC634D_t.jpg",
  "id": "panorama_9145F5B4_9D6A_310F_41B6_278704EC634D",
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
  "label": "STREETVIEW",
  "hfovMax": 120,
  "hfov": 360,
  "adjacentPanoramas": [
   {
    "panorama": {
     "hfovMax": 120,
     "frames": [
      {
       "thumbnailUrl": "media/panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2_t.jpg",
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
         "areas": [
          {
           "toolTip": "POOL",
           "click": "this.startPanoramaWithCamera(this.panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D, this.camera_55581C8B_5BF2_F6AF_41D1_02AAAFF73E03); this.mainPlayList.set('selectedIndex', 2)",
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "displayTooltipInTouchScreens": true
          }
         ],
         "enabledInCardboard": true,
         "rollOverDisplay": false,
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
         "areas": [
          {
           "toolTip": "STREET VIEW",
           "click": "this.startPanoramaWithCamera(this.panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E, this.camera_55602CAB_5BF2_F6EF_41A1_3BA349C88636); this.mainPlayList.set('selectedIndex', 0)",
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "displayTooltipInTouchScreens": true
          }
         ],
         "enabledInCardboard": true,
         "rollOverDisplay": false,
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
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA, this.camera_52CAAD24_5E22_878B_419A_5F747D0B1BED); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 5); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 8)"
          }
         ],
         "enabledInCardboard": true,
         "rollOverDisplay": true,
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
         "areas": [
          {
           "toolTip": "POOL",
           "click": "this.startPanoramaWithCamera(this.panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA, this.camera_52E2FCF1_5E22_868A_419A_9E37F9BDB7CF); this.mainPlayList.set('selectedIndex', 2)",
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "displayTooltipInTouchScreens": true
          }
         ],
         "enabledInCardboard": true,
         "rollOverDisplay": false,
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
         "areas": [
          {
           "toolTip": "STREET VIEW",
           "click": "this.startPanoramaWithCamera(this.panorama_9145F5B4_9D6A_310F_41B6_278704EC634D, this.camera_52F8FD1A_5E22_87BF_4172_389D5CC280F7); this.mainPlayList.set('selectedIndex', 0)",
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "displayTooltipInTouchScreens": true
          }
         ],
         "enabledInCardboard": true,
         "rollOverDisplay": false,
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
     "audios": [
      {
       "autoplay": true,
       "id": "audio_5F019C46_534B_1089_41CA_DD158DC6F095",
       "audio": {
        "mp3Url": "media/audio_5F019C46_534B_1089_41CA_DD158DC6F095.mp3",
        "oggUrl": "media/audio_5F019C46_534B_1089_41CA_DD158DC6F095.ogg",
        "class": "AudioResource"
       },
       "class": "PanoramaAudio"
      }
     ],
     "partial": false,
     "pitch": 0,
     "thumbnailUrl": "media/panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2_t.jpg",
     "id": "panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2",
     "hfovMin": 100,
     "label": "ENTRANCE",
     "hfov": 360,
     "adjacentPanoramas": [
      {
       "panorama": {
        "hfovMax": 120,
        "frames": [
         {
          "thumbnailUrl": "media/panorama_916227CC_9D6A_311F_41E3_34FF7141124F_t.jpg",
          "overlays": [
           {
            "useHandCursor": true,
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
            "areas": [
             {
              "toolTip": "MASTER BEDROOM\u000a",
              "click": "this.startPanoramaWithCamera(this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF, this.camera_55D7BBEA_5BF2_F263_41D2_B1CC2C57A60F); this.mainPlayList.set('selectedIndex', 5)",
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "displayTooltipInTouchScreens": true
             }
            ],
            "enabledInCardboard": true,
            "rollOverDisplay": false,
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
            "areas": [
             {
              "toolTip": "LIVING ROOM",
              "click": "this.startPanoramaWithCamera(this.panorama_47B53902_572E_CEDF_41CC_C256D31A5443, this.camera_55FFAC21_5BF2_F59B_41D2_A4CCD4BC65CD); this.mainPlayList.set('selectedIndex', 3)",
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "displayTooltipInTouchScreens": true
             }
            ],
            "enabledInCardboard": true,
            "rollOverDisplay": false,
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
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA, this.camera_534F4D80_5E22_868A_41C7_66ABBDA05C38); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 8); this.mainPlayList.set('selectedIndex', 9)"
             }
            ],
            "enabledInCardboard": true,
            "rollOverDisplay": true,
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
            "areas": [
             {
              "toolTip": "MASTER BEDROOM",
              "click": "this.startPanoramaWithCamera(this.panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044, this.camera_536B2D6D_5E22_879A_419A_D181DF4CDD5E); this.mainPlayList.set('selectedIndex', 5)",
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "displayTooltipInTouchScreens": true
             }
            ],
            "enabledInCardboard": true,
            "rollOverDisplay": false,
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
            "areas": [
             {
              "toolTip": "LIVING ROOM",
              "click": "this.startPanoramaWithCamera(this.panorama_916902A1_9D6A_7309_41D0_0B14DE574844, this.camera_53051D4F_5E22_8795_41C9_933BD804130D); this.mainPlayList.set('selectedIndex', 3)",
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "displayTooltipInTouchScreens": true
             }
            ],
            "enabledInCardboard": true,
            "rollOverDisplay": false,
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
        "audios": [
         {
          "autoplay": true,
          "id": "audio_5FD12071_5349_1088_41CE_1A9919606FBF",
          "audio": {
           "mp3Url": "media/audio_5FD12071_5349_1088_41CE_1A9919606FBF.mp3",
           "oggUrl": "media/audio_5FD12071_5349_1088_41CE_1A9919606FBF.ogg",
           "class": "AudioResource"
          },
          "class": "PanoramaAudio"
         },
         {
          "autoplay": true,
          "id": "audio_5049FC7B_5DEF_D73D_41B8_AB9CCE43637C",
          "loop": true,
          "audio": {
           "mp3Url": "media/audio_5049FC7B_5DEF_D73D_41B8_AB9CCE43637C.mp3",
           "oggUrl": "media/audio_5049FC7B_5DEF_D73D_41B8_AB9CCE43637C.ogg",
           "class": "AudioResource"
          },
          "class": "PanoramaAudio"
         }
        ],
        "partial": false,
        "pitch": 0,
        "thumbnailUrl": "media/panorama_916227CC_9D6A_311F_41E3_34FF7141124F_t.jpg",
        "id": "panorama_916227CC_9D6A_311F_41E3_34FF7141124F",
        "hfovMin": 100,
        "label": "SINGLE BR",
        "hfov": 360,
        "adjacentPanoramas": [
         {
          "panorama": "this.panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2",
          "yaw": -170.2,
          "class": "AdjacentPanorama",
          "backwardYaw": -170.68,
          "distance": 1
         },
         {
          "panorama": {
           "hfovMax": 120,
           "frames": [
            {
             "thumbnailUrl": "media/panorama_91758D80_9D6A_1106_41DC_64D8466F87FC_t.jpg",
             "overlays": [
              {
               "useHandCursor": true,
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
               "areas": [
                {
                 "toolTip": "TERRACE",
                 "click": "this.startPanoramaWithCamera(this.panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116, this.camera_56043BB0_5BF2_F2FA_41B1_1DE6A0E08A4C); this.mainPlayList.set('selectedIndex', 9)",
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "displayTooltipInTouchScreens": true
                }
               ],
               "enabledInCardboard": true,
               "rollOverDisplay": false,
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
               "areas": [
                {
                 "toolTip": "MASTER BEDROOM",
                 "click": "this.startPanoramaWithCamera(this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF, this.camera_56700B7F_5BF2_F267_41C2_DC8D8F885C23); this.mainPlayList.set('selectedIndex', 5)",
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "displayTooltipInTouchScreens": true
                }
               ],
               "enabledInCardboard": true,
               "rollOverDisplay": false,
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
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_9145F5B4_9D6A_310F_41B6_278704EC634D, this.camera_5205EDE2_5E22_868E_41CC_FD74F2BDBE84); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 4)"
                }
               ],
               "enabledInCardboard": true,
               "rollOverDisplay": true,
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
               "areas": [
                {
                 "toolTip": "TERRACE",
                 "click": "this.startPanoramaWithCamera(this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA, this.camera_520C8DEB_5E22_869E_41D4_11FE48433C30); this.mainPlayList.set('selectedIndex', 9)",
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "displayTooltipInTouchScreens": true
                }
               ],
               "enabledInCardboard": true,
               "rollOverDisplay": false,
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
               "areas": [
                {
                 "toolTip": "MASTER BEDROOM",
                 "click": "this.startPanoramaWithCamera(this.panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044, this.camera_523FEDD9_5E22_86BA_41C6_B339902A507A); this.mainPlayList.set('selectedIndex', 5)",
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "displayTooltipInTouchScreens": true
                }
               ],
               "enabledInCardboard": true,
               "rollOverDisplay": false,
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
           "audios": [
            {
             "autoplay": true,
             "id": "audio_5E08B9DF_534F_73B7_41C9_0C77F337DE42",
             "audio": {
              "mp3Url": "media/audio_5E08B9DF_534F_73B7_41C9_0C77F337DE42.mp3",
              "oggUrl": "media/audio_5E08B9DF_534F_73B7_41C9_0C77F337DE42.ogg",
              "class": "AudioResource"
             },
             "class": "PanoramaAudio"
            }
           ],
           "partial": false,
           "pitch": 0,
           "thumbnailUrl": "media/panorama_91758D80_9D6A_1106_41DC_64D8466F87FC_t.jpg",
           "id": "panorama_91758D80_9D6A_1106_41DC_64D8466F87FC",
           "hfovMin": 100,
           "label": "TWIN BR",
           "hfov": 360,
           "adjacentPanoramas": [
            {
             "panorama": "this.panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2",
             "yaw": -172.21,
             "class": "AdjacentPanorama",
             "backwardYaw": -170.68,
             "distance": 1
            },
            {
             "panorama": "this.panorama_916227CC_9D6A_311F_41E3_34FF7141124F",
             "yaw": -172.21,
             "class": "AdjacentPanorama",
             "backwardYaw": -170.2,
             "distance": 1
            },
            {
             "panorama": {
              "hfovMax": 120,
              "frames": [
               {
                "thumbnailUrl": "media/panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28_t.jpg",
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
                  "areas": [
                   {
                    "toolTip": "MASTER BEDROOM",
                    "click": "this.startPanoramaWithCamera(this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF, this.camera_57262CFF_5BF2_F667_41D4_80634CF1C7DB); this.mainPlayList.set('selectedIndex', 5)",
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "displayTooltipInTouchScreens": true
                   }
                  ],
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
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
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA, this.camera_52AE6E3E_5E22_85F6_41A4_0FD482DD7D2C); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 8)"
                   }
                  ],
                  "enabledInCardboard": true,
                  "rollOverDisplay": true,
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
                  "areas": [
                   {
                    "toolTip": "MASTER BEDROOM",
                    "click": "this.startPanoramaWithCamera(this.panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044, this.camera_5255CE2B_5E22_859E_41AA_C58C42D58CF6); this.mainPlayList.set('selectedIndex', 5)",
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "displayTooltipInTouchScreens": true
                   }
                  ],
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
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
              "audios": [
               {
                "autoplay": true,
                "id": "audio_5E6F6697_534F_3188_41D2_212D7D5C7CD4",
                "audio": {
                 "mp3Url": "media/audio_5E6F6697_534F_3188_41D2_212D7D5C7CD4.mp3",
                 "oggUrl": "media/audio_5E6F6697_534F_3188_41D2_212D7D5C7CD4.ogg",
                 "class": "AudioResource"
                },
                "class": "PanoramaAudio"
               },
               {
                "autoplay": true,
                "id": "audio_53E0760B_5DE9_52DC_41AD_96CE4D26DD8B",
                "loop": true,
                "audio": {
                 "mp3Url": "media/audio_53E0760B_5DE9_52DC_41AD_96CE4D26DD8B.mp3",
                 "oggUrl": "media/audio_53E0760B_5DE9_52DC_41AD_96CE4D26DD8B.ogg",
                 "class": "AudioResource"
                },
                "class": "PanoramaAudio"
               }
              ],
              "partial": false,
              "pitch": 0,
              "thumbnailUrl": "media/panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28_t.jpg",
              "id": "panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28",
              "hfovMin": 100,
              "label": "TOILET",
              "hfov": 360,
              "adjacentPanoramas": [
               {
                "panorama": "this.panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2",
                "yaw": -162.92,
                "class": "AdjacentPanorama",
                "backwardYaw": -170.68,
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
                "panorama": "this.panorama_91758D80_9D6A_1106_41DC_64D8466F87FC",
                "yaw": -162.92,
                "class": "AdjacentPanorama",
                "backwardYaw": -172.21,
                "distance": 1
               },
               {
                "panorama": {
                 "hfovMax": 120,
                 "frames": [
                  {
                   "thumbnailUrl": "media/panorama_916902A1_9D6A_7309_41D0_0B14DE574844_t.jpg",
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
                     "areas": [
                      {
                       "toolTip": "SINGLE BEDROOM",
                       "click": "this.startPanoramaWithCamera(this.panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC, this.camera_55BE4E50_5BF2_F5B9_41B2_A0DBD967D7CD); this.mainPlayList.set('selectedIndex', 4)",
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea",
                       "displayTooltipInTouchScreens": true
                      }
                     ],
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
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
                     "areas": [
                      {
                       "toolTip": "POOL",
                       "click": "this.startPanoramaWithCamera(this.panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D, this.camera_5577FE77_5BF2_F267_41AE_B186A0A61737); this.mainPlayList.set('selectedIndex', 2)",
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea",
                       "displayTooltipInTouchScreens": true
                      }
                     ],
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
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
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA, this.camera_5324BE90_5E22_828A_41D4_9E4195E4C213); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 8); this.mainPlayList.set('selectedIndex', 5)"
                      }
                     ],
                     "enabledInCardboard": true,
                     "rollOverDisplay": true,
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
                     "areas": [
                      {
                       "toolTip": "SINGLE BEDROOM",
                       "click": "this.startPanoramaWithCamera(this.panorama_916227CC_9D6A_311F_41E3_34FF7141124F, this.camera_52830E50_5E22_858A_41D4_7B6DE5AA84B3); this.mainPlayList.set('selectedIndex', 4)",
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea",
                       "displayTooltipInTouchScreens": true
                      }
                     ],
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
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
                     "areas": [
                      {
                       "toolTip": "POOL",
                       "click": "this.startPanoramaWithCamera(this.panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA, this.camera_52FEAE75_5E22_858A_41D2_A1A6B2ACDBAE); this.mainPlayList.set('selectedIndex', 2)",
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea",
                       "displayTooltipInTouchScreens": true
                      }
                     ],
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
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
                 "audios": [
                  {
                   "autoplay": true,
                   "id": "audio_5F3A7686_5349_3189_41B9_03AD1E92C6EA",
                   "audio": {
                    "mp3Url": "media/audio_5F3A7686_5349_3189_41B9_03AD1E92C6EA.mp3",
                    "oggUrl": "media/audio_5F3A7686_5349_3189_41B9_03AD1E92C6EA.ogg",
                    "class": "AudioResource"
                   },
                   "class": "PanoramaAudio"
                  },
                  {
                   "autoplay": true,
                   "id": "audio_508C163F_5DEF_5335_41CB_6F4DF04ED378",
                   "loop": true,
                   "audio": {
                    "mp3Url": "media/audio_508C163F_5DEF_5335_41CB_6F4DF04ED378.mp3",
                    "oggUrl": "media/audio_508C163F_5DEF_5335_41CB_6F4DF04ED378.ogg",
                    "class": "AudioResource"
                   },
                   "class": "PanoramaAudio"
                  }
                 ],
                 "partial": false,
                 "pitch": 0,
                 "thumbnailUrl": "media/panorama_916902A1_9D6A_7309_41D0_0B14DE574844_t.jpg",
                 "id": "panorama_916902A1_9D6A_7309_41D0_0B14DE574844",
                 "hfovMin": 100,
                 "label": "LIVINGROOM",
                 "hfov": 360,
                 "adjacentPanoramas": [
                  {
                   "panorama": "this.panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2",
                   "yaw": -171.96,
                   "class": "AdjacentPanorama",
                   "backwardYaw": -170.68,
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
                   "panorama": "this.panorama_91758D80_9D6A_1106_41DC_64D8466F87FC",
                   "yaw": -171.96,
                   "class": "AdjacentPanorama",
                   "backwardYaw": -172.21,
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
                   "panorama": {
                    "hfovMax": 120,
                    "frames": [
                     {
                      "thumbnailUrl": "media/panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069_t.jpg",
                      "overlays": [
                       {
                        "useHandCursor": true,
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
                        "areas": [
                         {
                          "toolTip": "MASTER BEDROOM",
                          "click": "this.startPanoramaWithCamera(this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF, this.camera_55CB7E16_5BF2_F5B9_4191_4ABD27800AF8); this.mainPlayList.set('selectedIndex', 5)",
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea",
                          "displayTooltipInTouchScreens": true
                         }
                        ],
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
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
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA, this.camera_53A71EE4_5E22_828A_4168_26FD00E4D044); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 8); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 7)"
                         }
                        ],
                        "enabledInCardboard": true,
                        "rollOverDisplay": true,
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
                        "areas": [
                         {
                          "toolTip": "MASTER BEDROOM",
                          "click": "this.startPanoramaWithCamera(this.panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044, this.camera_53430ED1_5E22_828A_41D1_AB00066C33CB); this.mainPlayList.set('selectedIndex', 5)",
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea",
                          "displayTooltipInTouchScreens": true
                         }
                        ],
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
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
                    "audios": [
                     {
                      "autoplay": true,
                      "id": "audio_5FA8081E_5349_30B9_41D0_06F2A3501C10",
                      "audio": {
                       "mp3Url": "media/audio_5FA8081E_5349_30B9_41D0_06F2A3501C10.mp3",
                       "oggUrl": "media/audio_5FA8081E_5349_30B9_41D0_06F2A3501C10.ogg",
                       "class": "AudioResource"
                      },
                      "class": "PanoramaAudio"
                     },
                     {
                      "autoplay": true,
                      "id": "audio_502EF191_5DEE_F1CC_41D5_35D2DA805B06",
                      "loop": true,
                      "audio": {
                       "mp3Url": "media/audio_502EF191_5DEE_F1CC_41D5_35D2DA805B06.mp3",
                       "oggUrl": "media/audio_502EF191_5DEE_F1CC_41D5_35D2DA805B06.ogg",
                       "class": "AudioResource"
                      },
                      "class": "PanoramaAudio"
                     }
                    ],
                    "partial": false,
                    "pitch": 0,
                    "thumbnailUrl": "media/panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069_t.jpg",
                    "id": "panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069",
                    "hfovMin": 100,
                    "label": "BALCONY",
                    "hfov": 360,
                    "adjacentPanoramas": [
                     {
                      "panorama": "this.panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2",
                      "yaw": -170.58,
                      "class": "AdjacentPanorama",
                      "backwardYaw": -170.68,
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
                      "panorama": "this.panorama_91758D80_9D6A_1106_41DC_64D8466F87FC",
                      "yaw": -170.58,
                      "class": "AdjacentPanorama",
                      "backwardYaw": -172.21,
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
                      "panorama": "this.panorama_916902A1_9D6A_7309_41D0_0B14DE574844",
                      "yaw": -170.58,
                      "class": "AdjacentPanorama",
                      "backwardYaw": -171.96,
                      "distance": 1
                     },
                     {
                      "panorama": {
                       "hfovMax": 120,
                       "frames": [
                        {
                         "thumbnailUrl": "media/panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA_t.jpg",
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
                           "areas": [
                            {
                             "toolTip": "LIVING ROOM",
                             "click": "this.startPanoramaWithCamera(this.panorama_47B53902_572E_CEDF_41CC_C256D31A5443, this.camera_566FDDCF_5BF2_F6A7_41C3_D60F04E20C30); this.mainPlayList.set('selectedIndex', 3)",
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea",
                             "displayTooltipInTouchScreens": true
                            }
                           ],
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
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
                           "areas": [
                            {
                             "toolTip": "ENTRANCE",
                             "click": "this.startPanoramaWithCamera(this.panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E, this.camera_565ACDA7_5BF2_F6E7_41BA_8BE7CEB9351B); this.mainPlayList.set('selectedIndex', 1)",
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea",
                             "displayTooltipInTouchScreens": true
                            }
                           ],
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
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
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA, this.camera_53D9BF37_5E22_83F6_41A9_6B4AE133815E); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 5); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 8); this.mainPlayList.set('selectedIndex', 6)"
                            }
                           ],
                           "enabledInCardboard": true,
                           "rollOverDisplay": true,
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
                           "areas": [
                            {
                             "toolTip": "LIVING ROOM",
                             "click": "this.startPanoramaWithCamera(this.panorama_916902A1_9D6A_7309_41D0_0B14DE574844, this.camera_53E1AF12_5E22_838E_41CF_07C8E4C414FF); this.mainPlayList.set('selectedIndex', 3)",
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea",
                             "displayTooltipInTouchScreens": true
                            }
                           ],
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
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
                           "areas": [
                            {
                             "toolTip": "ENTRANCE",
                             "click": "this.startPanoramaWithCamera(this.panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2, this.camera_53AAAEED_5E22_829A_41C5_273A829C324A); this.mainPlayList.set('selectedIndex', 1)",
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea",
                             "displayTooltipInTouchScreens": true
                            }
                           ],
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
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
                       "audios": [
                        {
                         "autoplay": true,
                         "id": "audio_5F11A888_534B_3198_41C1_CA34B7B483B7",
                         "audio": {
                          "mp3Url": "media/audio_5F11A888_534B_3198_41C1_CA34B7B483B7.mp3",
                          "oggUrl": "media/audio_5F11A888_534B_3198_41C1_CA34B7B483B7.ogg",
                          "class": "AudioResource"
                         },
                         "class": "PanoramaAudio"
                        },
                        {
                         "autoplay": true,
                         "id": "audio_5116AAD0_5DE9_534C_41D3_54A18E2E7244",
                         "loop": true,
                         "audio": {
                          "mp3Url": "media/audio_5116AAD0_5DE9_534C_41D3_54A18E2E7244.mp3",
                          "oggUrl": "media/audio_5116AAD0_5DE9_534C_41D3_54A18E2E7244.ogg",
                          "class": "AudioResource"
                         },
                         "class": "PanoramaAudio"
                        }
                       ],
                       "partial": false,
                       "pitch": 0,
                       "thumbnailUrl": "media/panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA_t.jpg",
                       "id": "panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA",
                       "hfovMin": 100,
                       "label": "POOL",
                       "hfov": 360,
                       "adjacentPanoramas": [
                        {
                         "panorama": "this.panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2",
                         "yaw": -97.22,
                         "class": "AdjacentPanorama",
                         "backwardYaw": -16.8,
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
                         "panorama": "this.panorama_91758D80_9D6A_1106_41DC_64D8466F87FC",
                         "yaw": -172.22,
                         "class": "AdjacentPanorama",
                         "backwardYaw": -172.21,
                         "distance": 1
                        },
                        {
                         "panorama": "this.panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28",
                         "yaw": -172.22,
                         "class": "AdjacentPanorama",
                         "backwardYaw": -162.92,
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
                         "panorama": "this.panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069",
                         "yaw": -172.22,
                         "class": "AdjacentPanorama",
                         "backwardYaw": -170.58,
                         "distance": 1
                        },
                        {
                         "panorama": {
                          "hfovMax": 120,
                          "frames": [
                           {
                            "thumbnailUrl": "media/panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044_t.jpg",
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
                              "areas": [
                               {
                                "toolTip": "BALCONY",
                                "click": "this.startPanoramaWithCamera(this.panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C, this.camera_569B6D6C_5BF2_F669_41A7_8467FF9A6DAA); this.mainPlayList.set('selectedIndex', 6)",
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea",
                                "displayTooltipInTouchScreens": true
                               }
                              ],
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
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
                              "areas": [
                               {
                                "toolTip": "TOILET",
                                "click": "this.startPanoramaWithCamera(this.panorama_46009756_572D_4167_41C6_2B49BD1EF7CE, this.camera_56E74D59_5BF2_F7AA_41D0_B6C262499B65); this.mainPlayList.set('selectedIndex', 7)",
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea",
                                "displayTooltipInTouchScreens": true
                               }
                              ],
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
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
                              "areas": [
                               {
                                "toolTip": "TWIN BEDROOM",
                                "click": "this.startPanoramaWithCamera(this.panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D, this.camera_56C57D3C_5BF2_F7EA_41BA_23AB5285E45A); this.mainPlayList.set('selectedIndex', 8)",
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea",
                                "displayTooltipInTouchScreens": true
                               }
                              ],
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
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
                              "areas": [
                               {
                                "toolTip": "SINGLE BEDROOM",
                                "click": "this.startPanoramaWithCamera(this.panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC, this.camera_56F35D45_5BF2_F79A_41D0_857D96DC10DF); this.mainPlayList.set('selectedIndex', 4)",
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea",
                                "displayTooltipInTouchScreens": true
                               }
                              ],
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
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
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA, this.camera_505C6FC5_5E22_828A_41D4_0C7B85C5791F); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 3)"
                               }
                              ],
                              "enabledInCardboard": true,
                              "rollOverDisplay": true,
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
                              "areas": [
                               {
                                "toolTip": "BALCONY",
                                "click": "this.startPanoramaWithCamera(this.panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069, this.camera_50760F93_5E22_828E_41D6_63FDABC0AA79); this.mainPlayList.set('selectedIndex', 6)",
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea",
                                "displayTooltipInTouchScreens": true
                               }
                              ],
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
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
                              "areas": [
                               {
                                "toolTip": "TOILET",
                                "click": "this.startPanoramaWithCamera(this.panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28, this.camera_50123F75_5E22_838A_41C3_475006EC4858); this.mainPlayList.set('selectedIndex', 7)",
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea",
                                "displayTooltipInTouchScreens": true
                               }
                              ],
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
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
                              "areas": [
                               {
                                "toolTip": "TWIN BEDROOM",
                                "click": "this.startPanoramaWithCamera(this.panorama_91758D80_9D6A_1106_41DC_64D8466F87FC, this.camera_500F0F66_5E22_8396_41CE_38B296BB9C8F); this.mainPlayList.set('selectedIndex', 8)",
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea",
                                "displayTooltipInTouchScreens": true
                               }
                              ],
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
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
                              "areas": [
                               {
                                "toolTip": "SINGLE BEDROOM",
                                "click": "this.startPanoramaWithCamera(this.panorama_916227CC_9D6A_311F_41E3_34FF7141124F, this.camera_503E5F53_5E22_838E_41C7_38CB2B9E6B1E); this.mainPlayList.set('selectedIndex', 4)",
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea",
                                "displayTooltipInTouchScreens": true
                               }
                              ],
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
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
                          "audios": [
                           {
                            "autoplay": true,
                            "id": "audio_5F999E34_5349_3089_41A5_30E8148F4541",
                            "audio": {
                             "mp3Url": "media/audio_5F999E34_5349_3089_41A5_30E8148F4541.mp3",
                             "oggUrl": "media/audio_5F999E34_5349_3089_41A5_30E8148F4541.ogg",
                             "class": "AudioResource"
                            },
                            "class": "PanoramaAudio"
                           }
                          ],
                          "partial": false,
                          "pitch": 0,
                          "thumbnailUrl": "media/panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044_t.jpg",
                          "id": "panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044",
                          "hfovMin": 100,
                          "label": "MASTER BR",
                          "hfov": 360,
                          "adjacentPanoramas": [
                           {
                            "panorama": "this.panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2",
                            "yaw": -162.92,
                            "class": "AdjacentPanorama",
                            "backwardYaw": -170.68,
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
                            "panorama": "this.panorama_91758D80_9D6A_1106_41DC_64D8466F87FC",
                            "yaw": 34.69,
                            "class": "AdjacentPanorama",
                            "backwardYaw": -142.86,
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
                            "panorama": "this.panorama_916902A1_9D6A_7309_41D0_0B14DE574844",
                            "yaw": -162.92,
                            "class": "AdjacentPanorama",
                            "backwardYaw": -171.96,
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
                            "panorama": "this.panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA",
                            "yaw": -162.92,
                            "class": "AdjacentPanorama",
                            "backwardYaw": -172.22,
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
                            "panorama": {
                             "hfovMax": 120,
                             "frames": [
                              {
                               "thumbnailUrl": "media/panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA_t.jpg",
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
                                 "areas": [
                                  {
                                   "toolTip": "TWIN BEDROOM",
                                   "click": "this.startPanoramaWithCamera(this.panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D, this.camera_5488DF3C_5BF2_F3E9_41D1_C652E087859B); this.mainPlayList.set('selectedIndex', 8)",
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea",
                                   "displayTooltipInTouchScreens": true
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
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
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.startPanoramaWithCamera(this.panorama_9145F5B4_9D6A_310F_41B6_278704EC634D, this.camera_515EB077_5E22_BE76_41D2_8BB54308E6B2); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 5); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 4)"
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": true,
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
                                 "areas": [
                                  {
                                   "toolTip": "TWIN BEDROOM",
                                   "click": "this.startPanoramaWithCamera(this.panorama_91758D80_9D6A_1106_41DC_64D8466F87FC, this.camera_5102B03D_5E22_BDFA_41C0_24DB2292B637); this.mainPlayList.set('selectedIndex', 8)",
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea",
                                   "displayTooltipInTouchScreens": true
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
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
                             "audios": [
                              {
                               "autoplay": true,
                               "id": "audio_5E20D107_534F_3088_4192_A9F38893E7D5",
                               "audio": {
                                "mp3Url": "media/audio_5E20D107_534F_3088_4192_A9F38893E7D5.mp3",
                                "oggUrl": "media/audio_5E20D107_534F_3088_4192_A9F38893E7D5.ogg",
                                "class": "AudioResource"
                               },
                               "class": "PanoramaAudio"
                              },
                              {
                               "autoplay": true,
                               "id": "audio_53AB1146_5DE9_5154_41CA_FED3E44D14A9",
                               "loop": true,
                               "audio": {
                                "mp3Url": "media/audio_53AB1146_5DE9_5154_41CA_FED3E44D14A9.mp3",
                                "oggUrl": "media/audio_53AB1146_5DE9_5154_41CA_FED3E44D14A9.ogg",
                                "class": "AudioResource"
                               },
                               "class": "PanoramaAudio"
                              }
                             ],
                             "partial": false,
                             "pitch": 0,
                             "thumbnailUrl": "media/panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA_t.jpg",
                             "id": "panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA",
                             "hfovMin": 100,
                             "label": "TERRACE",
                             "hfov": 360,
                             "adjacentPanoramas": [
                              {
                               "panorama": "this.panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2",
                               "yaw": -173.12,
                               "class": "AdjacentPanorama",
                               "backwardYaw": -170.68,
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
                               "panorama": "this.panorama_91758D80_9D6A_1106_41DC_64D8466F87FC",
                               "yaw": 18.94,
                               "class": "AdjacentPanorama",
                               "backwardYaw": -142.9,
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
                               "panorama": "this.panorama_916902A1_9D6A_7309_41D0_0B14DE574844",
                               "yaw": -173.12,
                               "class": "AdjacentPanorama",
                               "backwardYaw": -171.96,
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
                               "panorama": "this.panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA",
                               "yaw": -173.12,
                               "class": "AdjacentPanorama",
                               "backwardYaw": -172.22,
                               "distance": 1
                              },
                              {
                               "panorama": "this.panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044",
                               "yaw": -173.12,
                               "class": "AdjacentPanorama",
                               "backwardYaw": -162.92,
                               "distance": 1
                              },
                              {
                               "panorama": "this.panorama_9145F5B4_9D6A_310F_41B6_278704EC634D",
                               "yaw": -173.12,
                               "class": "AdjacentPanorama",
                               "backwardYaw": -171.36,
                               "distance": 1
                              }
                             ],
                             "class": "Panorama",
                             "vfov": 180
                            },
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
                         "panorama": "this.panorama_9145F5B4_9D6A_310F_41B6_278704EC634D",
                         "yaw": -172.22,
                         "class": "AdjacentPanorama",
                         "backwardYaw": -171.36,
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
                      "yaw": -170.58,
                      "class": "AdjacentPanorama",
                      "backwardYaw": -172.22,
                      "distance": 1
                     },
                     {
                      "panorama": "this.panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044",
                      "yaw": -174.39,
                      "class": "AdjacentPanorama",
                      "backwardYaw": -178.2,
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
                   "yaw": -171.96,
                   "class": "AdjacentPanorama",
                   "backwardYaw": -170.58,
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
                   "panorama": "this.panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044",
                   "yaw": -171.96,
                   "class": "AdjacentPanorama",
                   "backwardYaw": -162.92,
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
                "yaw": -162.92,
                "class": "AdjacentPanorama",
                "backwardYaw": -171.96,
                "distance": 1
               },
               {
                "panorama": "this.panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069",
                "yaw": -162.92,
                "class": "AdjacentPanorama",
                "backwardYaw": -170.58,
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
                "panorama": "this.panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044",
                "yaw": 161.78,
                "class": "AdjacentPanorama",
                "backwardYaw": 82.9,
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
             "yaw": -172.21,
             "class": "AdjacentPanorama",
             "backwardYaw": -162.92,
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
             "panorama": "this.panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069",
             "yaw": -172.21,
             "class": "AdjacentPanorama",
             "backwardYaw": -170.58,
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
             "panorama": "this.panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044",
             "yaw": -142.86,
             "class": "AdjacentPanorama",
             "backwardYaw": 34.69,
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
          "yaw": -170.2,
          "class": "AdjacentPanorama",
          "backwardYaw": -172.21,
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
          "panorama": "this.panorama_916902A1_9D6A_7309_41D0_0B14DE574844",
          "yaw": -157.02,
          "class": "AdjacentPanorama",
          "backwardYaw": 42.02,
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
          "panorama": "this.panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA",
          "yaw": -170.2,
          "class": "AdjacentPanorama",
          "backwardYaw": -172.22,
          "distance": 1
         },
         {
          "panorama": "this.panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044",
          "yaw": -157,
          "class": "AdjacentPanorama",
          "backwardYaw": 34.72,
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
       "yaw": -170.68,
       "class": "AdjacentPanorama",
       "backwardYaw": -170.2,
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
       "panorama": "this.panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28",
       "yaw": -170.68,
       "class": "AdjacentPanorama",
       "backwardYaw": -162.92,
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
       "panorama": "this.panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069",
       "yaw": -170.68,
       "class": "AdjacentPanorama",
       "backwardYaw": -170.58,
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
       "panorama": "this.panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044",
       "yaw": -170.68,
       "class": "AdjacentPanorama",
       "backwardYaw": -162.92,
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
       "panorama": "this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA",
       "yaw": -170.68,
       "class": "AdjacentPanorama",
       "backwardYaw": -173.12,
       "distance": 1
      }
     ],
     "class": "Panorama",
     "vfov": 180
    },
    "yaw": 140.49,
    "class": "AdjacentPanorama",
    "backwardYaw": 0.93,
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
    "panorama": "this.panorama_91758D80_9D6A_1106_41DC_64D8466F87FC",
    "yaw": -171.36,
    "class": "AdjacentPanorama",
    "backwardYaw": -172.21,
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
    "panorama": "this.panorama_916902A1_9D6A_7309_41D0_0B14DE574844",
    "yaw": -171.36,
    "class": "AdjacentPanorama",
    "backwardYaw": -171.96,
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
    "panorama": "this.panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA",
    "yaw": -171.36,
    "class": "AdjacentPanorama",
    "backwardYaw": -172.22,
    "distance": 1
   },
   {
    "panorama": "this.panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044",
    "yaw": -171.36,
    "class": "AdjacentPanorama",
    "backwardYaw": -162.92,
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
  "buttonCardboardView": {
   "backgroundOpacity": 0,
   "paddingRight": 0,
   "mode": "push",
   "iconURL": "skin/IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37.png",
   "height": "100%",
   "width": "100%",
   "transparencyActive": false,
   "borderRadius": 0,
   "borderSize": 0,
   "maxWidth": 60,
   "rollOverIconURL": "skin/IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37_rollover.png",
   "shadow": false,
   "minHeight": 1,
   "class": "IconButton",
   "horizontalAlign": "center",
   "cursor": "hand",
   "visible": false,
   "paddingBottom": 0,
   "minWidth": 1,
   "id": "IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37",
   "paddingTop": 0,
   "maxHeight": 60,
   "paddingLeft": 0,
   "pressedIconURL": "skin/IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37_pressed.png",
   "verticalAlign": "middle"
  },
  "preloadEnabled": false,
  "buttonToggleHotspots": {
   "backgroundOpacity": 0,
   "paddingRight": 0,
   "mode": "toggle",
   "toolTipPaddingRight": 6,
   "toolTipBackgroundColor": "#000000",
   "iconURL": "skin/IconButton_80E5955A_8E23_BB05_41CA_43DD61DBAEE9.png",
   "height": "100%",
   "toolTipShadowVerticalLength": 0,
   "width": "100%",
   "toolTipTextShadowOpacity": 0,
   "toolTipPaddingBottom": 4,
   "transparencyActive": true,
   "toolTipTextShadowColor": "#000000",
   "toolTipFontSize": 11,
   "borderRadius": 0,
   "toolTipShadowOpacity": 1,
   "toolTipOpacity": 0.7,
   "borderSize": 0,
   "maxWidth": 60,
   "toolTipPaddingLeft": 6,
   "toolTipBorderColor": "#767676",
   "shadow": false,
   "minHeight": 1,
   "toolTipBorderSize": 1,
   "class": "IconButton",
   "toolTipFontStyle": "normal",
   "toolTipBorderRadius": 3,
   "toolTip": "Hotspots Visibility",
   "horizontalAlign": "center",
   "click": "if(!this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, true, 0, this.effect_CDD059FA_EED0_D223_41DB_70ACFBE986FE, 'showEffect', false) } else if(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, false, 0, this.effect_CDD049FB_EED0_D221_41EB_CA2134B978E0, 'hideEffect', false) }",
   "cursor": "hand",
   "paddingBottom": 0,
   "toolTipTextShadowBlurRadius": 3,
   "minWidth": 1,
   "toolTipShadowHorizontalLength": 0,
   "id": "IconButton_80E5955A_8E23_BB05_41CA_43DD61DBAEE9",
   "toolTipFontWeight": "normal",
   "toolTipShadowSpread": 0,
   "paddingTop": 0,
   "toolTipShadowColor": "#333333",
   "toolTipShadowBlurRadius": 3,
   "maxHeight": 60,
   "toolTipPaddingTop": 4,
   "paddingLeft": 0,
   "toolTipFontColor": "#606060",
   "pressedIconURL": "skin/IconButton_80E5955A_8E23_BB05_41CA_43DD61DBAEE9_pressed.png",
   "toolTipFontFamily": "Arial",
   "verticalAlign": "middle"
  },
  "buttonStop": [
   "this.IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4",
   "this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB"
  ],
  "buttonPlay": "this.IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED",
  "id": "MainViewerPanoramaPlayer",
  "viewerArea": "this.MainViewer",
  "displayPlaybackBar": true,
  "mouseControlMode": "drag_acceleration",
  "class": "PanoramaPlayer",
  "gyroscopeVerticalDraggingEnabled": true,
  "touchControlMode": "drag_rotation"
 },
 {
  "movementMode": "constrained",
  "id": "MapViewerMapPlayer",
  "class": "MapPlayer",
  "viewerArea": {
   "paddingLeft": 0,
   "progressBorderRadius": 0,
   "progressBarBackgroundColorDirection": "vertical",
   "progressBackgroundColor": [
    "#FFFFFF"
   ],
   "paddingRight": 0,
   "toolTipBackgroundColor": "#000000",
   "toolTipShadowVerticalLength": 0,
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
   "playbackBarHeadShadowVerticalLength": 0,
   "shadow": false,
   "playbackBarHeadWidth": 6,
   "toolTipBorderSize": 1,
   "playbackBarProgressBackgroundColorDirection": "vertical",
   "class": "ViewerArea",
   "toolTipFontStyle": "normal",
   "playbackBarBackgroundColorDirection": "vertical",
   "playbackBarProgressBorderSize": 0,
   "progressBottom": 2,
   "paddingBottom": 0,
   "playbackBarHeadBackgroundColorDirection": "vertical",
   "playbackBarRight": 0,
   "minWidth": 1,
   "progressBorderSize": 0,
   "progressBarBorderSize": 0,
   "progressBarBorderRadius": 0,
   "playbackBarProgressBorderRadius": 0,
   "paddingTop": 0,
   "transitionMode": "blending",
   "toolTipShadowSpread": 0,
   "toolTipShadowColor": "#333333",
   "toolTipShadowBlurRadius": 3,
   "toolTipPaddingTop": 4,
   "toolTipFontColor": "#606060",
   "playbackBarBorderRadius": 0,
   "playbackBarHeadShadowHorizontalLength": 0,
   "playbackBarProgressBorderColor": "#000000",
   "toolTipPaddingRight": 6,
   "playbackBarHeadBorderRadius": 0,
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
   "minHeight": 1,
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
   "playbackBarHeadShadowColor": "#000000",
   "playbackBarOpacity": 1,
   "toolTipFontWeight": "normal",
   "progressBackgroundColorDirection": "vertical",
   "toolTipShadowHorizontalLength": 0,
   "playbackBarHeadOpacity": 1,
   "progressBarBackgroundColorRatios": [
    0
   ],
   "progressHeight": 10,
   "left": "10%",
   "playbackBarHeadShadow": true,
   "playbackBarBottom": 0,
   "playbackBarProgressBackgroundColor": [
    "#3399FF"
   ],
   "right": "10%",
   "toolTipFontFamily": "Arial",
   "progressBorderColor": "#000000",
   "progressOpacity": 1,
   "progressBarBackgroundColor": [
    "#3399FF"
   ]
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
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
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
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
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
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
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
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
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
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
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
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
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
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
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
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
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
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
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
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "mainPlayList",
  "class": "PlayList",
  "items": [
   {
    "id": "PanoramaPlayListItem_527AAC64_5E22_858A_41B1_E5745FCD5811",
    "media": "this.panorama_9145F5B4_9D6A_310F_41B6_278704EC634D",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_527AAC64_5E22_858A_41B1_E5745FCD5811, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_9145F5B4_9D6A_310F_41B6_278704EC634D_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "media": "this.panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "media": "this.panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "media": "this.panorama_916902A1_9D6A_7309_41D0_0B14DE574844",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_916902A1_9D6A_7309_41D0_0B14DE574844_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "media": "this.panorama_916227CC_9D6A_311F_41E3_34FF7141124F",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_916227CC_9D6A_311F_41E3_34FF7141124F_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "media": "this.panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "media": "this.panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "media": "this.panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "media": "this.panorama_91758D80_9D6A_1106_41DC_64D8466F87FC",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_91758D80_9D6A_1106_41DC_64D8466F87FC_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 0)",
    "media": "this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA_camera"
   }
  ]
 },
 {
  "id": "ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 0, 1)",
    "media": "this.panorama_9145F5B4_9D6A_310F_41B6_278704EC634D",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_9145F5B4_9D6A_310F_41B6_278704EC634D_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 1, 2)",
    "media": "this.panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 2, 3)",
    "media": "this.panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 3, 4)",
    "media": "this.panorama_916902A1_9D6A_7309_41D0_0B14DE574844",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_916902A1_9D6A_7309_41D0_0B14DE574844_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 4, 5)",
    "media": "this.panorama_916227CC_9D6A_311F_41E3_34FF7141124F",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_916227CC_9D6A_311F_41E3_34FF7141124F_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 5, 6)",
    "media": "this.panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 6, 7)",
    "media": "this.panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 7, 8)",
    "media": "this.panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 8, 9)",
    "media": "this.panorama_91758D80_9D6A_1106_41DC_64D8466F87FC",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_91758D80_9D6A_1106_41DC_64D8466F87FC_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 9, 0)",
    "media": "this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
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
  "scaleMode": "fit_outside",
  "class": "Video"
 },
 {
  "id": "playList_5273BC59_5E22_85BA_41D5_1646ADFBE29C",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.registerKey('visibility_ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472', this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472.get('visible')); this.registerKey('visibility_Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB', this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB.get('visible')); this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setComponentVisibility(this.Container_807F782A_8E23_A905_41DE_623121285A09, false, -1, this.effect_22974FB2_2DD9_0421_41BA_84205292D043, 'hideEffect', false); this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, false, -1, this.effect_22899FB3_2DD9_0427_41BB_298AEB3D2851, 'hideEffect', false); this.setComponentVisibility(this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB, true, -1, this.effect_2289DFB3_2DD9_0427_41AE_A35795880BA7, 'showEffect', false); this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, false, -1, this.effect_3876CD6E_2DF9_0421_41C1_F0AB7F279824, 'hideEffect', false); this.setComponentVisibility(this.Container_86F3A56C_8E22_5B1D_41CA_9CE53436FE56, false, -1, this.effect_22973FB1_2DD9_0423_41C1_E1E03953DCCE, 'hideEffect', false)",
    "media": "this.video_210B394E_3D54_1A60_41A3_CB42BEC0D3EC",
    "player": "this.MainViewerVideoPlayer",
    "class": "VideoPlayListItem",
    "end": "this.setComponentVisibility(this.Container_807F782A_8E23_A905_41DE_623121285A09, true, -1, this.effect_22977FB2_2DD9_0421_41C1_F53B037346DF, 'showEffect', false); this.setComponentVisibility(this.Container_807F782A_8E23_A905_41DE_623121285A09, true, -1, this.effect_22977FB2_2DD9_0421_41C1_F53B037346DF, 'showEffect', false); if(this.existsKey('visibility_Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB')){ if(this.getKey('visibility_Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB')) { this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, true, -1, this.effect_51B4807E_5E22_BE76_41A1_912719F051A2, 'showEffect', false); } else { this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, false, -1, this.effect_22899FB3_2DD9_0427_41BB_298AEB3D2851, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB'); this.setComponentVisibility(this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB, false, -1, this.effect_2289EFB3_2DD9_0427_41C0_ACB5A72AE218, 'hideEffect', false); this.setComponentVisibility(this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB, false, -1, this.effect_2289EFB3_2DD9_0427_41C0_ACB5A72AE218, 'hideEffect', false); if(this.existsKey('visibility_ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472')){ if(this.getKey('visibility_ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472')) { this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, true, -1, this.effect_51B0307F_5E22_BE76_41C7_D204D627E519, 'showEffect', false); } else { this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, false, -1, this.effect_3876CD6E_2DF9_0421_41C1_F0AB7F279824, 'hideEffect', false); } }; this.unregisterKey('visibility_ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472'); this.setComponentVisibility(this.Container_86F3A56C_8E22_5B1D_41CA_9CE53436FE56, true, -1, this.effect_22975FB2_2DD9_0421_41B4_7A2443082F44, 'showEffect', false); this.setComponentVisibility(this.Container_86F3A56C_8E22_5B1D_41CA_9CE53436FE56, true, -1, this.effect_22975FB2_2DD9_0421_41B4_7A2443082F44, 'showEffect', false)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_5273BC59_5E22_85BA_41D5_1646ADFBE29C, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_5273BC59_5E22_85BA_41D5_1646ADFBE29C, 0, this.video_210B394E_3D54_1A60_41A3_CB42BEC0D3EC)"
   }
  ]
 },
 {
  "thumbnailUrl": "media/album_1AE8DEB7_0EE7_8CC7_4198_F5B75788CCF6_t.png",
  "class": "PhotoAlbum",
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
  "id": "playList_52733C5A_5E22_85BE_41C9_BC41DED33381",
  "class": "PlayList",
  "items": [
   {
    "player": "this.ViewerAreaLabeled_9FD7235A_96CD_9045_41D9_23A3BCBDB1C6PhotoAlbumPlayer",
    "class": "PhotoAlbumPlayListItem",
    "media": "this.album_1AE8DEB7_0EE7_8CC7_4198_F5B75788CCF6",
    "begin": "this.loopAlbum(this.playList_52733C5A_5E22_85BE_41C9_BC41DED33381, 0)"
   }
  ]
 },
 "this.map_4E02A832_427B_EE04_41CC_8E1CEC03E8D3",
 {
  "id": "playList_527DBC61_5E22_858A_41BB_8313CDD92049",
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
  "id": "camera_52B76C92_5E22_868E_41B5_B2DFF2B2B927",
  "initialPosition": {
   "yaw": 9.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_52BC3C9C_5E22_86BA_41D4_227A40ACBA6A",
  "initialPosition": {
   "yaw": 7.79,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_52837CAE_5E22_8696_41A8_2C5CF8EC988C",
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_52884CC8_5E22_869A_41C4_D81309EAEA32",
  "initialPosition": {
   "yaw": 8.04,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_529C9CDC_5E22_86BA_41D5_5EE01725DB9E",
  "initialPosition": {
   "yaw": 9.42,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_52E2FCF1_5E22_868A_419A_9E37F9BDB7CF",
  "initialPosition": {
   "yaw": 82.78,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_52F49D04_5E22_878B_41B5_CDEBB1A54041",
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_52F8FD1A_5E22_87BF_4172_389D5CC280F7",
  "initialPosition": {
   "hfov": 120,
   "yaw": -39.51,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_52CAAD24_5E22_878B_419A_5F747D0B1BED",
  "initialPosition": {
   "yaw": 6.88,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_52DE5D2F_5E22_8795_41AE_20E05BBFE2A2",
  "initialPosition": {
   "yaw": 9.32,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_53200D3A_5E22_87FF_419E_043EFC32C5C1",
  "initialPosition": {
   "yaw": 7.79,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_53320D45_5E22_8795_41C2_4A834C5EEC4B",
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_53051D4F_5E22_8795_41C9_933BD804130D",
  "initialPosition": {
   "yaw": -137.98,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_5316AD5A_5E22_87BF_419F_0395E3384804",
  "initialPosition": {
   "yaw": 9.42,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_5319BD63_5E22_878E_41B5_23DA6FC3B307",
  "initialPosition": {
   "yaw": 7.78,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_536B2D6D_5E22_879A_419A_D181DF4CDD5E",
  "initialPosition": {
   "yaw": -145.28,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_537E6D76_5E22_8676_41B7_966F56BCA5AA",
  "initialPosition": {
   "hfov": 120,
   "yaw": 8.64,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_534F4D80_5E22_868A_41C7_66ABBDA05C38",
  "initialPosition": {
   "yaw": 6.88,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_55D5ADA0_5E22_868A_41C6_71659C0D4DBD",
  "initialPosition": {
   "yaw": 9.32,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_55D25DAA_5E22_869E_41C5_9CF735BC61E7",
  "initialPosition": {
   "yaw": 9.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_55DC0DB3_5E22_868E_41CE_E87F45C809E3",
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_55D85DBD_5E22_86FA_41B5_20961A17B471",
  "initialPosition": {
   "yaw": 8.04,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_5221CDC6_5E22_8696_4180_AF1F90217DFF",
  "initialPosition": {
   "yaw": 9.42,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_52290DCF_5E22_8696_41C6_C091C67CDE6A",
  "initialPosition": {
   "yaw": 7.78,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_523FEDD9_5E22_86BA_41C6_B339902A507A",
  "initialPosition": {
   "yaw": -145.31,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_5205EDE2_5E22_868E_41CC_FD74F2BDBE84",
  "initialPosition": {
   "hfov": 120,
   "yaw": 8.64,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_520C8DEB_5E22_869E_41D4_11FE48433C30",
  "initialPosition": {
   "yaw": -161.06,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_5212ADF4_5E22_868A_41BE_EFF9798F45B5",
  "initialPosition": {
   "yaw": 9.32,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_52190DFE_5E22_8676_41CC_C27365CEA867",
  "initialPosition": {
   "yaw": 9.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_526E9E07_5E22_8596_41CF_65D64F472960",
  "initialPosition": {
   "yaw": 7.79,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_5275DE10_5E22_858A_41C9_CA3BD62C7034",
  "initialPosition": {
   "yaw": 8.04,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_527A8E19_5E22_85BA_41C1_CC966ED62C09",
  "initialPosition": {
   "yaw": 9.42,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_52404E22_5E22_858E_41BD_F190AE93342B",
  "initialPosition": {
   "yaw": 7.78,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_5255CE2B_5E22_859E_41AA_C58C42D58CF6",
  "initialPosition": {
   "yaw": -97.1,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_52592E35_5E22_858A_41C5_CB285CC6A486",
  "initialPosition": {
   "hfov": 120,
   "yaw": 8.64,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_52AE6E3E_5E22_85F6_41A4_0FD482DD7D2C",
  "initialPosition": {
   "yaw": 6.88,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_52B16E47_5E22_8596_41D6_E4BF10D10E00",
  "initialPosition": {
   "yaw": 9.32,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_52830E50_5E22_858A_41D4_7B6DE5AA84B3",
  "initialPosition": {
   "yaw": 22.98,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_5296BE59_5E22_85BA_41D3_13AD54148997",
  "initialPosition": {
   "yaw": 7.79,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_52997E62_5E22_858F_4134_30AC63414280",
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_52EC1E6C_5E22_859A_41B4_BEBE3B9472C4",
  "initialPosition": {
   "yaw": 9.42,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_52FEAE75_5E22_858A_41D2_A1A6B2ACDBAE",
  "initialPosition": {
   "yaw": -167.94,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_52C25E7E_5E22_8276_41BD_0CB59CFE1FE0",
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_52D33E87_5E22_8296_41A6_9B7ED759821A",
  "initialPosition": {
   "hfov": 120,
   "yaw": 8.64,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_5324BE90_5E22_828A_41D4_9E4195E4C213",
  "initialPosition": {
   "yaw": 6.88,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_53379E9A_5E22_82BE_41D4_939A7064F560",
  "initialPosition": {
   "yaw": 9.32,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_5339FEA3_5E22_828E_41CC_8B38DB43217A",
  "initialPosition": {
   "yaw": 9.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_530CEEAD_5E22_829A_41D4_A53EC5D83B0F",
  "initialPosition": {
   "yaw": 7.79,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_531DDEB6_5E22_82F6_41CE_54FC3AC4AA0E",
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_53601EBF_5E22_82F6_41B3_93D7BBB4C90A",
  "initialPosition": {
   "yaw": 8.04,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_5371BEC8_5E22_829A_41C6_B73918AACCF5",
  "initialPosition": {
   "yaw": 7.78,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_53430ED1_5E22_828A_41D1_AB00066C33CB",
  "initialPosition": {
   "yaw": 1.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_53567EDB_5E22_82BE_418D_10C6DA4B7075",
  "initialPosition": {
   "hfov": 120,
   "yaw": 8.64,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_53A71EE4_5E22_828A_4168_26FD00E4D044",
  "initialPosition": {
   "yaw": 6.88,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_53AAAEED_5E22_829A_41C5_273A829C324A",
  "initialPosition": {
   "yaw": 163.2,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_53BB8EF6_5E22_8276_41C6_9AFA8D984C94",
  "initialPosition": {
   "yaw": 9.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_538EBF00_5E22_838A_41D5_7BE688668C68",
  "initialPosition": {
   "yaw": 7.79,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_53902F09_5E22_839A_41CE_BC5ADE63FD2E",
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_53E1AF12_5E22_838E_41CF_07C8E4C414FF",
  "initialPosition": {
   "yaw": 3.2,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_53F4AF1B_5E22_83BE_41C7_158CBDD23AC1",
  "initialPosition": {
   "yaw": 9.42,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_53C64F25_5E22_838A_41D1_3C73F631BB33",
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_53C8DF2E_5E22_8396_41C6_C7F8F9CC4489",
  "initialPosition": {
   "hfov": 120,
   "yaw": 8.64,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_53D9BF37_5E22_83F6_41A9_6B4AE133815E",
  "initialPosition": {
   "yaw": 6.88,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_502CAF41_5E22_838A_41D2_A6926542B406",
  "initialPosition": {
   "yaw": 9.32,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_503E5F53_5E22_838E_41C7_38CB2B9E6B1E",
  "initialPosition": {
   "yaw": 23,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_500F0F66_5E22_8396_41CE_38B296BB9C8F",
  "initialPosition": {
   "yaw": 37.14,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_50123F75_5E22_838A_41C3_475006EC4858",
  "initialPosition": {
   "yaw": -18.22,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_5063BF84_5E22_828A_41CE_B5DC8F2D7D88",
  "initialPosition": {
   "yaw": 8.04,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_50760F93_5E22_828E_41D6_63FDABC0AA79",
  "initialPosition": {
   "yaw": 5.61,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_50479FA7_5E22_8296_41D5_9BD70982718F",
  "initialPosition": {
   "yaw": 7.78,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_50491FB6_5E22_82F6_41B3_380383F2AB73",
  "initialPosition": {
   "hfov": 120,
   "yaw": 8.64,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_505C6FC5_5E22_828A_41D4_0C7B85C5791F",
  "initialPosition": {
   "yaw": 6.88,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_50AD1FD7_5E22_82B6_41C3_873D029311D5",
  "initialPosition": {
   "yaw": -179.07,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_50B00FE0_5E22_828A_41D6_5B9D00311031",
  "initialPosition": {
   "yaw": 9.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_5081DFE9_5E22_829A_41B5_892CA0484B1A",
  "initialPosition": {
   "yaw": 7.79,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_50942FF3_5E22_828E_41B0_B20FB15330CE",
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_50E5AFFC_5E22_827A_41C3_286311A715B1",
  "initialPosition": {
   "yaw": 8.04,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_50F6A005_5E22_BD8A_41D4_2165763E884C",
  "initialPosition": {
   "yaw": 9.42,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_50F9E00F_5E22_BD96_41C3_1C0BCB4ED980",
  "initialPosition": {
   "yaw": 7.78,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_50CAA018_5E22_BDBA_41C9_A9E23EE56D57",
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_50DDB022_5E22_BD8E_41C4_1CB2A8686822",
  "initialPosition": {
   "yaw": 6.88,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_512E802B_5E22_BD9E_41D3_CF55C8901091",
  "initialPosition": {
   "yaw": 9.32,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_5131A034_5E22_BD8A_41A2_CF9FC45CD930",
  "initialPosition": {
   "yaw": 9.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_5102B03D_5E22_BDFA_41C0_24DB2292B637",
  "initialPosition": {
   "yaw": 37.1,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_51146047_5E22_BD96_41B8_0561A86A9C54",
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_51676050_5E22_BD8A_41BD_545769814015",
  "initialPosition": {
   "yaw": 8.04,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_5168F05A_5E22_BDBE_41B1_7BC297ADF259",
  "initialPosition": {
   "yaw": 9.42,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_517B0063_5E22_BD8E_41B5_9C4F32A815D1",
  "initialPosition": {
   "yaw": 7.78,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_514C006D_5E22_BD9A_4190_F7AC45C51C1B",
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_515EB077_5E22_BE76_41D2_8BB54308E6B2",
  "initialPosition": {
   "hfov": 120,
   "yaw": 8.64,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
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
  "id": "effect_51B4807E_5E22_BE76_41A1_912719F051A2",
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
  "id": "effect_51B0307F_5E22_BE76_41C7_D204D627E519",
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
 {
  "autoplay": true,
  "id": "audio_57293B7E_5DEA_B134_41C3_35DD62C73B29",
  "audio": {
   "mp3Url": "media/audio_57293B7E_5DEA_B134_41C3_35DD62C73B29.mp3",
   "oggUrl": "media/audio_57293B7E_5DEA_B134_41C3_35DD62C73B29.ogg",
   "class": "AudioResource"
  },
  "class": "MediaAudio"
 },
 "this.audio_51D70E9C_5DEA_B3F4_41C9_7C42C4A1D34D",
 "this.audio_5116AAD0_5DE9_534C_41D3_54A18E2E7244",
 "this.audio_508C163F_5DEF_5335_41CB_6F4DF04ED378",
 "this.audio_5049FC7B_5DEF_D73D_41B8_AB9CCE43637C",
 "this.audio_502EF191_5DEE_F1CC_41D5_35D2DA805B06",
 "this.audio_53E0760B_5DE9_52DC_41AD_96CE4D26DD8B",
 "this.audio_53AB1146_5DE9_5154_41CA_FED3E44D14A9",
 "this.audio_58C48535_534B_1088_419D_65D26EA3E6EE",
 "this.audio_51D70E9C_5DEA_B3F4_41C9_7C42C4A1D34D",
 "this.audio_5F019C46_534B_1089_41CA_DD158DC6F095",
 "this.audio_5F11A888_534B_3198_41C1_CA34B7B483B7",
 "this.audio_5116AAD0_5DE9_534C_41D3_54A18E2E7244",
 "this.audio_5F3A7686_5349_3189_41B9_03AD1E92C6EA",
 "this.audio_508C163F_5DEF_5335_41CB_6F4DF04ED378",
 "this.audio_5FD12071_5349_1088_41CE_1A9919606FBF",
 "this.audio_5049FC7B_5DEF_D73D_41B8_AB9CCE43637C",
 "this.audio_5F999E34_5349_3089_41A5_30E8148F4541",
 "this.audio_5FA8081E_5349_30B9_41D0_06F2A3501C10",
 "this.audio_502EF191_5DEE_F1CC_41D5_35D2DA805B06",
 "this.audio_5E6F6697_534F_3188_41D2_212D7D5C7CD4",
 "this.audio_53E0760B_5DE9_52DC_41AD_96CE4D26DD8B",
 "this.audio_5E08B9DF_534F_73B7_41C9_0C77F337DE42",
 "this.audio_5E20D107_534F_3088_4192_A9F38893E7D5",
 "this.audio_53AB1146_5DE9_5154_41CA_FED3E44D14A9"
], "children": [
 {
  "paddingLeft": 0,
  "progressBorderRadius": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "paddingRight": 0,
  "toolTipBackgroundColor": "#000000",
  "toolTipShadowVerticalLength": 0,
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
  "playbackBarHeadShadowVerticalLength": 0,
  "shadow": false,
  "playbackBarHeadWidth": 6,
  "toolTipBorderSize": 1,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "class": "ViewerArea",
  "toolTipFontStyle": "normal",
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarProgressBorderSize": 0,
  "progressBottom": 0,
  "paddingBottom": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarRight": 0,
  "minWidth": 100,
  "progressBorderSize": 0,
  "progressBarBorderSize": 0,
  "progressBarBorderRadius": 0,
  "playbackBarProgressBorderRadius": 0,
  "paddingTop": 0,
  "transitionMode": "blending",
  "toolTipShadowSpread": 0,
  "toolTipShadowColor": "#333333",
  "toolTipShadowBlurRadius": 3,
  "toolTipPaddingTop": 4,
  "toolTipFontColor": "#606060",
  "playbackBarBorderRadius": 0,
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarProgressBorderColor": "#000000",
  "toolTipPaddingRight": 6,
  "playbackBarHeadBorderRadius": 0,
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
  "minHeight": 50,
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
  "playbackBarHeadShadowColor": "#000000",
  "playbackBarOpacity": 1,
  "toolTipFontWeight": "normal",
  "progressBackgroundColorDirection": "vertical",
  "toolTipShadowHorizontalLength": 0,
  "playbackBarHeadOpacity": 1,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "progressHeight": 10,
  "left": "0%",
  "playbackBarHeadShadow": true,
  "playbackBarBottom": 5,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "right": "0%",
  "toolTipFontFamily": "Arial",
  "progressBorderColor": "#000000",
  "progressOpacity": 1,
  "progressBarBackgroundColor": [
   "#3399FF"
  ]
 },
 {
  "layout": "horizontal",
  "backgroundOpacity": 0,
  "scrollBarColor": "#000000",
  "overflow": "visible",
  "scrollBarOpacity": 0.5,
  "paddingRight": 0,
  "width": 500,
  "height": 50,
  "contentOpaque": false,
  "borderRadius": 5,
  "borderSize": 0,
  "gap": 5,
  "maxWidth": 500,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "shadow": false,
  "minHeight": 55,
  "class": "Container",
  "top": "3%",
  "paddingBottom": 0,
  "minWidth": 500,
  "id": "Container_807F782A_8E23_A905_41DE_623121285A09",
  "horizontalAlign": "right",
  "paddingTop": 0,
  "maxHeight": 55,
  "paddingLeft": 0,
  "right": "1.5%",
  "children": [
   {
    "layout": "horizontal",
    "backgroundOpacity": 0,
    "scrollBarColor": "#000000",
    "overflow": "visible",
    "scrollBarOpacity": 0.5,
    "paddingRight": 0,
    "width": 400,
    "height": 55,
    "contentOpaque": false,
    "borderRadius": 0,
    "borderSize": 0,
    "gap": 0,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "shadow": false,
    "minHeight": 55,
    "class": "Container",
    "visible": false,
    "paddingBottom": 0,
    "minWidth": 100,
    "id": "Container_80D3CF90_8E26_E705_41E0_E47025A2C106",
    "horizontalAlign": "right",
    "paddingTop": 0,
    "maxHeight": 55,
    "paddingLeft": 0,
    "children": [
     "this.IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37",
     {
      "backgroundOpacity": 0,
      "paddingRight": 0,
      "mode": "toggle",
      "toolTipPaddingRight": 6,
      "toolTipBackgroundColor": "#000000",
      "iconURL": "skin/IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA.png",
      "height": "100%",
      "toolTipShadowVerticalLength": 0,
      "width": "100%",
      "toolTipTextShadowOpacity": 0,
      "toolTipPaddingBottom": 4,
      "transparencyActive": true,
      "toolTipTextShadowColor": "#000000",
      "toolTipFontSize": 11,
      "borderRadius": 0,
      "toolTipShadowOpacity": 1,
      "toolTipOpacity": 0.7,
      "borderSize": 0,
      "maxWidth": 60,
      "toolTipPaddingLeft": 6,
      "toolTipBorderColor": "#767676",
      "shadow": false,
      "minHeight": 1,
      "toolTipBorderSize": 1,
      "class": "IconButton",
      "toolTipFontStyle": "normal",
      "toolTipBorderRadius": 3,
      "toolTip": "Full Screen",
      "horizontalAlign": "center",
      "click": "if(!this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, true, 0, null, null, false) } else if(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, false, 0, null, null, false) }",
      "cursor": "hand",
      "paddingBottom": 0,
      "toolTipTextShadowBlurRadius": 3,
      "minWidth": 1,
      "toolTipShadowHorizontalLength": 0,
      "id": "IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA",
      "toolTipFontWeight": "normal",
      "toolTipShadowSpread": 0,
      "paddingTop": 0,
      "toolTipShadowColor": "#333333",
      "toolTipShadowBlurRadius": 3,
      "maxHeight": 60,
      "toolTipPaddingTop": 4,
      "paddingLeft": 0,
      "toolTipFontColor": "#606060",
      "pressedIconURL": "skin/IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA_pressed.png",
      "toolTipFontFamily": "Arial",
      "verticalAlign": "middle"
     },
     {
      "backgroundOpacity": 0,
      "paddingRight": 0,
      "mode": "toggle",
      "toolTipPaddingRight": 6,
      "toolTipBackgroundColor": "#000000",
      "iconURL": "skin/IconButton_8105A313_8E22_BF0B_41E1_331C6035A930.png",
      "height": "100%",
      "toolTipShadowVerticalLength": 0,
      "width": "100%",
      "toolTipTextShadowOpacity": 0,
      "toolTipPaddingBottom": 4,
      "transparencyActive": true,
      "toolTipTextShadowColor": "#000000",
      "toolTipFontSize": 11,
      "borderRadius": 0,
      "toolTipShadowOpacity": 1,
      "toolTipOpacity": 0.7,
      "borderSize": 0,
      "maxWidth": 60,
      "toolTipPaddingLeft": 6,
      "toolTipBorderColor": "#767676",
      "shadow": false,
      "minHeight": 1,
      "toolTipBorderSize": 1,
      "class": "IconButton",
      "toolTipFontStyle": "normal",
      "toolTipBorderRadius": 3,
      "toolTip": "Audio On/Off",
      "horizontalAlign": "center",
      "click": "if(!this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, true, 0, this.effect_CACBF85D_EED0_7261_41DB_A3B65ECE0D5D, 'showEffect', false) } else if(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, false, 0, this.effect_CACBC85D_EED0_7261_41BE_8CF4C3A8170C, 'hideEffect', false) }",
      "cursor": "hand",
      "paddingBottom": 0,
      "toolTipTextShadowBlurRadius": 3,
      "minWidth": 1,
      "toolTipShadowHorizontalLength": 0,
      "id": "IconButton_8105A313_8E22_BF0B_41E1_331C6035A930",
      "toolTipFontWeight": "normal",
      "toolTipShadowSpread": 0,
      "paddingTop": 0,
      "toolTipShadowColor": "#333333",
      "toolTipShadowBlurRadius": 3,
      "maxHeight": 60,
      "toolTipPaddingTop": 4,
      "paddingLeft": 0,
      "toolTipFontColor": "#606060",
      "pressedIconURL": "skin/IconButton_8105A313_8E22_BF0B_41E1_331C6035A930_pressed.png",
      "toolTipFontFamily": "Arial",
      "verticalAlign": "middle"
     },
     "this.IconButton_80E5955A_8E23_BB05_41CA_43DD61DBAEE9"
    ],
    "verticalAlign": "middle",
    "scrollBarVisible": "rollOver"
   },
   {
    "backgroundOpacity": 0,
    "paddingRight": 0,
    "mode": "toggle",
    "toolTipPaddingRight": 6,
    "toolTipBackgroundColor": "#000000",
    "iconURL": "skin/IconButton_811D89E1_8E3D_AB07_4191_94003C90B2FF.png",
    "height": "100%",
    "toolTipShadowVerticalLength": 0,
    "width": "100%",
    "toolTipTextShadowOpacity": 0,
    "toolTipPaddingBottom": 4,
    "transparencyActive": true,
    "toolTipTextShadowColor": "#000000",
    "toolTipFontSize": 11,
    "borderRadius": 0,
    "toolTipShadowOpacity": 1,
    "toolTipOpacity": 0.7,
    "borderSize": 0,
    "maxWidth": 55,
    "toolTipPaddingLeft": 6,
    "toolTipBorderColor": "#767676",
    "shadow": false,
    "minHeight": 55,
    "toolTipBorderSize": 1,
    "class": "IconButton",
    "toolTipFontStyle": "normal",
    "toolTipBorderRadius": 3,
    "toolTip": "Settings",
    "horizontalAlign": "center",
    "click": "if(!this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, true, 0, this.effect_32C91197_3F22_3110_4181_9E76B593FBFE, 'showEffect', false) } else if(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, false, 0, this.effect_32C92197_3F22_3110_419D_E2E21968F16F, 'hideEffect', false) }",
    "cursor": "hand",
    "paddingBottom": 0,
    "toolTipTextShadowBlurRadius": 3,
    "minWidth": 55,
    "toolTipShadowHorizontalLength": 0,
    "id": "IconButton_811D89E1_8E3D_AB07_4191_94003C90B2FF",
    "toolTipFontWeight": "normal",
    "toolTipShadowSpread": 0,
    "paddingTop": 0,
    "toolTipShadowColor": "#333333",
    "toolTipShadowBlurRadius": 3,
    "maxHeight": 55,
    "toolTipPaddingTop": 4,
    "paddingLeft": 0,
    "toolTipFontColor": "#606060",
    "pressedIconURL": "skin/IconButton_811D89E1_8E3D_AB07_4191_94003C90B2FF_pressed.png",
    "toolTipFontFamily": "Arial",
    "verticalAlign": "middle"
   }
  ],
  "verticalAlign": "middle",
  "scrollBarVisible": "rollOver"
 },
 {
  "layout": "absolute",
  "backgroundOpacity": 0.7,
  "backgroundColorRatios": [
   0,
   1
  ],
  "backgroundColorDirection": "vertical",
  "overflow": "scroll",
  "scrollBarOpacity": 0.5,
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "paddingRight": 0,
  "scrollBarColor": "#000000",
  "height": "100%",
  "width": "100%",
  "contentOpaque": false,
  "borderRadius": 0,
  "borderSize": 0,
  "gap": 10,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "shadow": false,
  "minHeight": 1,
  "class": "Container",
  "top": "0%",
  "visible": false,
  "paddingBottom": 0,
  "minWidth": 1,
  "id": "Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB",
  "horizontalAlign": "left",
  "paddingTop": 0,
  "left": "0%",
  "paddingLeft": 0,
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
  "backgroundOpacity": 0,
  "paddingRight": 0,
  "mode": "push",
  "iconURL": "skin/IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB.png",
  "height": "5.482%",
  "width": "3.03%",
  "transparencyActive": true,
  "borderRadius": 0,
  "borderSize": 0,
  "maxWidth": 50,
  "rollOverIconURL": "skin/IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB_rollover.png",
  "shadow": false,
  "minHeight": 50,
  "class": "IconButton",
  "horizontalAlign": "center",
  "top": "2%",
  "cursor": "hand",
  "visible": false,
  "paddingBottom": 0,
  "minWidth": 50,
  "id": "IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB",
  "paddingTop": 0,
  "maxHeight": 50,
  "paddingLeft": 0,
  "right": "2%",
  "verticalAlign": "middle"
 },
 {
  "layout": "absolute",
  "backgroundOpacity": 0.3,
  "backgroundColorRatios": [
   0,
   1
  ],
  "backgroundColorDirection": "vertical",
  "horizontalAlign": "left",
  "scrollBarOpacity": 0.5,
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "overflow": "scroll",
  "paddingRight": 0,
  "scrollBarColor": "#000000",
  "contentOpaque": false,
  "borderRadius": 0,
  "borderSize": 0,
  "gap": 10,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "shadow": false,
  "minHeight": 1,
  "class": "Container",
  "top": "0%",
  "visible": false,
  "paddingBottom": 0,
  "minWidth": 1,
  "id": "Container_53347472_4288_F6E6_4196_D7457B47D2CF",
  "bottom": "0%",
  "paddingTop": 0,
  "left": "0%",
  "paddingLeft": 0,
  "right": "0%",
  "children": [
   "this.MapViewer",
   {
    "backgroundOpacity": 0,
    "paddingRight": 0,
    "mode": "push",
    "iconURL": "skin/IconButton_50D1A26C_4289_72E1_41CD_2B557DFCC24F.png",
    "height": "5.91%",
    "width": "5.07%",
    "transparencyActive": true,
    "borderRadius": 0,
    "borderSize": 0,
    "maxWidth": 50,
    "rollOverIconURL": "skin/IconButton_50D1A26C_4289_72E1_41CD_2B557DFCC24F_rollover.png",
    "shadow": false,
    "minHeight": 50,
    "class": "IconButton",
    "horizontalAlign": "center",
    "top": "5%",
    "click": "this.setComponentVisibility(this.Container_53347472_4288_F6E6_4196_D7457B47D2CF, false, 0, this.effect_500E3733_4297_3267_41C9_4935C0BEBF39, 'hideEffect', false)",
    "cursor": "hand",
    "paddingBottom": 0,
    "minWidth": 50,
    "id": "IconButton_50D1A26C_4289_72E1_41CD_2B557DFCC24F",
    "paddingTop": 0,
    "maxHeight": 50,
    "paddingLeft": 0,
    "right": "5%",
    "verticalAlign": "middle"
   }
  ],
  "verticalAlign": "top",
  "scrollBarVisible": "rollOver"
 },
 {
  "layout": "vertical",
  "backgroundOpacity": 0,
  "scrollBarColor": "#000000",
  "overflow": "visible",
  "scrollBarOpacity": 0.5,
  "paddingRight": 0,
  "height": 160,
  "contentOpaque": false,
  "borderRadius": 0,
  "borderSize": 0,
  "gap": 3,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "shadow": false,
  "minHeight": 130,
  "class": "Container",
  "horizontalAlign": "center",
  "paddingBottom": 0,
  "minWidth": 1,
  "id": "Container_6EC9FEC0_76A2_F957_41C5_79AD4AF65B38",
  "bottom": "0.7%",
  "paddingTop": 0,
  "left": "15%",
  "maxHeight": 160,
  "paddingLeft": 0,
  "right": "15%",
  "children": [
   {
    "layout": "horizontal",
    "paddingLeft": 5,
    "backgroundColor": [
     "#000000"
    ],
    "itemBackgroundColorRatios": [],
    "itemLabelFontFamily": "Arial",
    "paddingRight": 5,
    "selectedItemThumbnailShadowVerticalLength": 0,
    "rollOverItemBackgroundColorDirection": "vertical",
    "rollOverItemThumbnailShadowHorizontalLength": 0,
    "gap": 7,
    "itemThumbnailHeight": 60,
    "selectedItemBackgroundColor": [],
    "scrollBarWidth": 5,
    "scrollBarMargin": 2,
    "shadow": false,
    "itemHorizontalAlign": "center",
    "class": "ThumbnailList",
    "playList": "this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist",
    "horizontalAlign": "left",
    "itemMode": "normal",
    "rollOverItemBackgroundColor": [
     "#000000"
    ],
    "paddingBottom": 5,
    "rollOverItemThumbnailShadowBlurRadius": 15,
    "rollOverItemLabelFontColor": "#FFFFFF",
    "minWidth": 50,
    "itemLabelFontColor": "#FFFFFF",
    "selectedItemLabelFontStyle": "italic",
    "rollOverItemLabelFontWeight": "bold",
    "itemPaddingBottom": 3,
    "paddingTop": 5,
    "selectedItemLabelFontColor": "#FFFFFF",
    "itemThumbnailScaleMode": "fit_outside",
    "selectedItemLabelTextDecoration": "underline",
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
    "rollOverItemLabelTextDecoration": "underline",
    "scrollBarColor": "#52B7EF",
    "scrollBarVisible": "rollOver",
    "itemPaddingRight": 3,
    "rollOverItemBackgroundColorRatios": [
     0
    ],
    "itemLabelTextDecoration": "none",
    "itemLabelFontStyle": "normal",
    "height": "100%",
    "selectedItemThumbnailShadowBlurRadius": 15,
    "itemThumbnailWidth": 60,
    "selectedItemThumbnailShadow": true,
    "borderRadius": 3,
    "selectedItemLabelFontSize": 11,
    "borderSize": 0,
    "itemBorderRadius": 0,
    "itemLabelHorizontalAlign": "center",
    "itemPaddingLeft": 3,
    "maxWidth": 770,
    "minHeight": 70,
    "rollOverItemThumbnailShadowColor": "#FFFFFF",
    "width": "100%",
    "rollOverItemThumbnailShadowVerticalLength": 0,
    "selectedItemBorderSize": 0,
    "itemPaddingTop": 3,
    "selectedItemThumbnailShadowOpacity": 1,
    "selectedItemBorderRadius": 0,
    "selectedItemThumbnailShadowHorizontalLength": 0,
    "itemVerticalAlign": "middle",
    "selectedItemThumbnailShadowColor": "#FFFFFF",
    "id": "ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472",
    "itemBackgroundOpacity": 0,
    "selectedItemBackgroundColorRatios": [],
    "rollOverItemBackgroundOpacity": 0,
    "itemLabelGap": 5,
    "selectedItemLabelFontWeight": "bold",
    "itemOpacity": 1,
    "rollOverItemThumbnailShadowOpacity": 1,
    "itemBackgroundColor": [],
    "itemLabelFontSize": 11,
    "selectedItemBackgroundOpacity": 0,
    "itemBackgroundColorDirection": "vertical",
    "itemLabelPosition": "bottom",
    "backgroundOpacity": 0.25,
    "maxHeight": 100,
    "rollOverItemThumbnailShadow": true,
    "verticalAlign": "top"
   },
   {
    "layout": "absolute",
    "backgroundOpacity": 0,
    "scrollBarColor": "#000000",
    "overflow": "visible",
    "scrollBarOpacity": 0.5,
    "paddingRight": 0,
    "width": 70,
    "height": 55,
    "contentOpaque": false,
    "borderRadius": 5,
    "borderSize": 0,
    "gap": 0,
    "maxWidth": 70,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "shadow": false,
    "minHeight": 55,
    "class": "Container",
    "paddingBottom": 0,
    "minWidth": 70,
    "id": "Container_86F3A56C_8E22_5B1D_41CA_9CE53436FE56",
    "horizontalAlign": "center",
    "paddingTop": 0,
    "maxHeight": 55,
    "paddingLeft": 0,
    "children": [
     {
      "backgroundOpacity": 0,
      "paddingRight": 0,
      "mode": "push",
      "toolTipPaddingRight": 6,
      "toolTipBackgroundColor": "#000000",
      "iconURL": "skin/IconButton_87577B8F_8E22_AF1B_41CC_79EB87AE6DED.png",
      "height": "100%",
      "toolTipShadowVerticalLength": 0,
      "width": "100%",
      "toolTipTextShadowOpacity": 0,
      "toolTipPaddingBottom": 4,
      "transparencyActive": true,
      "toolTipTextShadowColor": "#000000",
      "toolTipFontSize": 11,
      "borderRadius": 0,
      "toolTipShadowOpacity": 1,
      "toolTipOpacity": 0.7,
      "borderSize": 0,
      "maxWidth": 70,
      "rollOverIconURL": "skin/IconButton_87577B8F_8E22_AF1B_41CC_79EB87AE6DED_rollover.png",
      "toolTipPaddingLeft": 6,
      "toolTipBorderColor": "#767676",
      "shadow": false,
      "minHeight": 25,
      "toolTipBorderSize": 1,
      "class": "IconButton",
      "toolTipFontStyle": "normal",
      "toolTipBorderRadius": 3,
      "toolTip": "Info",
      "horizontalAlign": "center",
      "click": "this.showPopupImage(this.ImageResource_6ECEF4DB_6091_DDD1_41D4_2B884570086A, null, '85%', '85%', this.FadeInEffect_8ED05F70_96C4_F045_41DC_2AB82A556F92, this.FadeOutEffect_8ED06F70_96C4_F045_41DA_C74400CF7B15, {'rollOverIconWidth':25,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorDirection':'vertical','rollOverBackgroundColor':['#000000','#000000','#000000'],'pressedBackgroundColor':['#000000','#000000','#000000'],'iconHeight':25,'rollOverIconColor':'#52B7EF','backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorDirection':'vertical','pressedBorderSize':0,'iconColor':'#FFFFFF','iconLineWidth':3,'backgroundColor':['#000000','#000000','#000000'],'paddingBottom':10,'pressedIconLineWidth':3,'borderColor':'#000000','paddingLeft':10,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundOpacity':0.3,'paddingTop':10,'pressedIconColor':'#CCCCCC','paddingRight':10,'pressedBackgroundColorDirection':'vertical','borderSize':0,'pressedIconWidth':25,'pressedIconHeight':25,'backgroundOpacity':0.15,'rollOverBorderColor':'#000000','rollOverBackgroundOpacity':0.5,'iconWidth':25,'rollOverIconHeight':25,'rollOverIconLineWidth':3}, null, null, false)",
      "cursor": "hand",
      "visible": false,
      "paddingBottom": 0,
      "toolTipTextShadowBlurRadius": 3,
      "minWidth": 25,
      "toolTipShadowHorizontalLength": 0,
      "id": "IconButton_87577B8F_8E22_AF1B_41CC_79EB87AE6DED",
      "toolTipFontWeight": "normal",
      "toolTipShadowSpread": 0,
      "paddingTop": 0,
      "toolTipShadowColor": "#333333",
      "toolTipShadowBlurRadius": 3,
      "maxHeight": 70,
      "toolTipPaddingTop": 4,
      "paddingLeft": 0,
      "toolTipFontColor": "#606060",
      "toolTipFontFamily": "Arial",
      "verticalAlign": "middle"
     },
     {
      "backgroundOpacity": 0,
      "paddingRight": 0,
      "mode": "push",
      "toolTipPaddingRight": 6,
      "toolTipBackgroundColor": "#000000",
      "iconURL": "skin/IconButton_213ED70C_2DB2_E6C5_41B6_0CCE6C77E889.png",
      "height": "100%",
      "toolTipShadowVerticalLength": 0,
      "width": "100%",
      "toolTipTextShadowOpacity": 0,
      "toolTipPaddingBottom": 4,
      "transparencyActive": true,
      "toolTipTextShadowColor": "#000000",
      "toolTipFontSize": 11,
      "borderRadius": 0,
      "toolTipShadowOpacity": 1,
      "toolTipOpacity": 0.7,
      "borderSize": 0,
      "maxWidth": 70,
      "rollOverIconURL": "skin/IconButton_213ED70C_2DB2_E6C5_41B6_0CCE6C77E889_rollover.png",
      "toolTipPaddingLeft": 6,
      "toolTipBorderColor": "#767676",
      "shadow": false,
      "minHeight": 25,
      "toolTipBorderSize": 1,
      "class": "IconButton",
      "toolTipFontStyle": "normal",
      "toolTipBorderRadius": 3,
      "toolTip": "Play Video",
      "horizontalAlign": "center",
      "click": "this.setMediaBehaviour(this.playList_5273BC59_5E22_85BA_41D5_1646ADFBE29C, 0); this.MainViewerVideoPlayer.play()",
      "cursor": "hand",
      "visible": false,
      "paddingBottom": 0,
      "toolTipTextShadowBlurRadius": 3,
      "minWidth": 25,
      "toolTipShadowHorizontalLength": 0,
      "id": "IconButton_213ED70C_2DB2_E6C5_41B6_0CCE6C77E889",
      "toolTipFontWeight": "normal",
      "toolTipShadowSpread": 0,
      "paddingTop": 0,
      "toolTipShadowColor": "#333333",
      "toolTipShadowBlurRadius": 3,
      "maxHeight": 70,
      "toolTipPaddingTop": 4,
      "paddingLeft": 0,
      "toolTipFontColor": "#606060",
      "toolTipFontFamily": "Arial",
      "verticalAlign": "middle"
     },
     {
      "backgroundOpacity": 0,
      "paddingRight": 0,
      "mode": "push",
      "toolTipPaddingRight": 6,
      "toolTipBackgroundColor": "#000000",
      "iconURL": "skin/IconButton_67A0F254_76E6_A97F_419D_52AF6E3FE7C0.png",
      "height": "100%",
      "toolTipShadowVerticalLength": 0,
      "width": "100%",
      "toolTipTextShadowOpacity": 0,
      "toolTipPaddingBottom": 4,
      "transparencyActive": true,
      "toolTipTextShadowColor": "#000000",
      "toolTipFontSize": 11,
      "borderRadius": 0,
      "toolTipShadowOpacity": 1,
      "toolTipOpacity": 0.7,
      "borderSize": 0,
      "maxWidth": 70,
      "toolTipPaddingLeft": 6,
      "toolTipBorderColor": "#767676",
      "shadow": false,
      "minHeight": 55,
      "toolTipBorderSize": 1,
      "class": "IconButton",
      "toolTipFontStyle": "normal",
      "toolTipBorderRadius": 3,
      "toolTip": "Show Panorama List",
      "horizontalAlign": "center",
      "click": "this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, true, 0, this.effect_508929C3_77ED_DB59_41D8_05A6C8F0681B, 'showEffect', false); this.setComponentVisibility(this.IconButton_843BBEF5_8E22_690F_419D_28CBDD771ACC, true, 0, this.effect_508929C3_77ED_DB59_41D8_05A6C8F0681B, 'showEffect', false); this.setComponentVisibility(this.IconButton_67A0F254_76E6_A97F_419D_52AF6E3FE7C0, false, 0, this.effect_518C2CD2_77ED_D97B_41C3_3AC87D499717, 'hideEffect', false)",
      "cursor": "hand",
      "visible": false,
      "paddingBottom": 0,
      "toolTipTextShadowBlurRadius": 3,
      "minWidth": 70,
      "toolTipShadowHorizontalLength": 0,
      "id": "IconButton_67A0F254_76E6_A97F_419D_52AF6E3FE7C0",
      "toolTipFontWeight": "normal",
      "toolTipShadowSpread": 0,
      "paddingTop": 0,
      "toolTipShadowColor": "#333333",
      "toolTipShadowBlurRadius": 3,
      "maxHeight": 55,
      "toolTipPaddingTop": 4,
      "paddingLeft": 0,
      "toolTipFontColor": "#606060",
      "toolTipFontFamily": "Arial",
      "verticalAlign": "top"
     },
     {
      "backgroundOpacity": 0,
      "paddingRight": 0,
      "mode": "push",
      "toolTipPaddingRight": 6,
      "toolTipBackgroundColor": "#000000",
      "iconURL": "skin/IconButton_843BBEF5_8E22_690F_419D_28CBDD771ACC.png",
      "height": "100%",
      "toolTipShadowVerticalLength": 0,
      "width": "100%",
      "toolTipTextShadowOpacity": 0,
      "toolTipPaddingBottom": 4,
      "transparencyActive": true,
      "toolTipTextShadowColor": "#000000",
      "toolTipFontSize": 11,
      "borderRadius": 0,
      "toolTipShadowOpacity": 1,
      "toolTipOpacity": 0.7,
      "borderSize": 0,
      "maxWidth": 70,
      "toolTipPaddingLeft": 6,
      "toolTipBorderColor": "#767676",
      "shadow": false,
      "minHeight": 55,
      "toolTipBorderSize": 1,
      "class": "IconButton",
      "toolTipFontStyle": "normal",
      "toolTipBorderRadius": 3,
      "toolTip": "Hide Panorama List",
      "horizontalAlign": "center",
      "click": "this.setComponentVisibility(this.IconButton_67A0F254_76E6_A97F_419D_52AF6E3FE7C0, true, 0, this.effect_640860A9_76E7_E929_4192_305B50E5610A, 'showEffect', false); this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, false, 0, this.effect_5032FA51_77E2_5979_41D1_45E5EF039077, 'hideEffect', false); this.setComponentVisibility(this.IconButton_843BBEF5_8E22_690F_419D_28CBDD771ACC, false, 0, this.effect_5032FA51_77E2_5979_41D1_45E5EF039077, 'hideEffect', false)",
      "cursor": "hand",
      "paddingBottom": 0,
      "toolTipTextShadowBlurRadius": 3,
      "minWidth": 70,
      "toolTipShadowHorizontalLength": 0,
      "id": "IconButton_843BBEF5_8E22_690F_419D_28CBDD771ACC",
      "toolTipFontWeight": "normal",
      "toolTipShadowSpread": 0,
      "paddingTop": 0,
      "toolTipShadowColor": "#333333",
      "toolTipShadowBlurRadius": 3,
      "maxHeight": 55,
      "toolTipPaddingTop": 4,
      "paddingLeft": 0,
      "toolTipFontColor": "#606060",
      "toolTipFontFamily": "Arial",
      "verticalAlign": "top"
     },
     "this.IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED",
     {
      "backgroundOpacity": 0,
      "paddingRight": 0,
      "mode": "push",
      "toolTipPaddingRight": 6,
      "toolTipBackgroundColor": "#000000",
      "iconURL": "skin/IconButton_2FC9210C_3E8F_C4D4_41A7_10D1404CA49B.png",
      "height": "85%",
      "toolTipShadowVerticalLength": 0,
      "width": "85%",
      "toolTipTextShadowOpacity": 0,
      "toolTipPaddingBottom": 4,
      "transparencyActive": true,
      "toolTipTextShadowColor": "#000000",
      "toolTipFontSize": 11,
      "borderRadius": 0,
      "toolTipShadowOpacity": 1,
      "toolTipOpacity": 0.7,
      "borderSize": 0,
      "maxWidth": 70,
      "toolTipPaddingLeft": 6,
      "toolTipBorderColor": "#767676",
      "shadow": false,
      "minHeight": 25,
      "toolTipBorderSize": 1,
      "class": "IconButton",
      "toolTipFontStyle": "normal",
      "toolTipBorderRadius": 3,
      "toolTip": "FLoor Plan",
      "horizontalAlign": "center",
      "click": "this.setComponentVisibility(this.Container_53347472_4288_F6E6_4196_D7457B47D2CF, true, 0, this.effect_51CB7B74_4299_12E2_41B4_829087983DE5, 'showEffect', false)",
      "cursor": "hand",
      "visible": false,
      "paddingBottom": 0,
      "toolTipTextShadowBlurRadius": 3,
      "minWidth": 25,
      "toolTipShadowHorizontalLength": 0,
      "id": "IconButton_2FC9210C_3E8F_C4D4_41A7_10D1404CA49B",
      "toolTipFontWeight": "normal",
      "toolTipShadowSpread": 0,
      "paddingTop": 0,
      "toolTipShadowColor": "#333333",
      "toolTipShadowBlurRadius": 3,
      "maxHeight": 70,
      "toolTipPaddingTop": 4,
      "paddingLeft": 0,
      "toolTipFontColor": "#606060",
      "pressedIconURL": "skin/IconButton_2FC9210C_3E8F_C4D4_41A7_10D1404CA49B_pressed.png",
      "toolTipFontFamily": "Arial",
      "verticalAlign": "middle"
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
  "backgroundOpacity": 0.55,
  "backgroundColorRatios": [
   0
  ],
  "backgroundColorDirection": "vertical",
  "backgroundColor": [
   "#000000"
  ],
  "paddingRight": 0,
  "borderRadius": 0,
  "borderSize": 0,
  "showEffect": {
   "easing": "cubic_in_out",
   "duration": 350,
   "class": "FadeInEffect"
  },
  "shadow": false,
  "minHeight": 0,
  "class": "UIComponent",
  "top": 0,
  "visible": false,
  "paddingBottom": 0,
  "minWidth": 0,
  "id": "veilPopupPanorama",
  "bottom": 0,
  "paddingTop": 0,
  "left": 0,
  "paddingLeft": 0,
  "right": 0
 },
 {
  "backgroundOpacity": 1,
  "backgroundColorRatios": [],
  "backgroundColorDirection": "vertical",
  "backgroundColor": [],
  "paddingRight": 0,
  "borderRadius": 0,
  "borderSize": 0,
  "scaleMode": "custom",
  "shadow": false,
  "minHeight": 0,
  "class": "ZoomImage",
  "top": 0,
  "visible": false,
  "paddingBottom": 0,
  "minWidth": 0,
  "id": "zoomImagePopupPanorama",
  "bottom": 0,
  "paddingTop": 0,
  "left": 0,
  "paddingLeft": 0,
  "right": 0
 },
 {
  "layout": "horizontal",
  "backgroundOpacity": 0.3,
  "backgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "backgroundColorDirection": "vertical",
  "iconHeight": 20,
  "rollOverIconColor": "#666666",
  "backgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "fontSize": 12,
  "mode": "push",
  "paddingRight": 5,
  "textDecoration": "none",
  "iconColor": "#000000",
  "iconBeforeLabel": true,
  "fontFamily": "Arial",
  "borderRadius": 0,
  "borderSize": 0,
  "fontStyle": "normal",
  "iconWidth": 20,
  "showEffect": {
   "easing": "cubic_in_out",
   "duration": 350,
   "class": "FadeInEffect"
  },
  "shadow": false,
  "minHeight": 0,
  "fontColor": "#FFFFFF",
  "class": "CloseButton",
  "top": 10,
  "fontWeight": "normal",
  "visible": false,
  "paddingBottom": 5,
  "borderColor": "#000000",
  "cursor": "hand",
  "minWidth": 0,
  "id": "closeButtonPopupPanorama",
  "gap": 5,
  "iconLineWidth": 5,
  "horizontalAlign": "center",
  "shadowColor": "#000000",
  "pressedIconColor": "#888888",
  "shadowBlurRadius": 6,
  "paddingTop": 5,
  "paddingLeft": 5,
  "label": "",
  "right": 10,
  "shadowSpread": 1,
  "verticalAlign": "middle"
 }
], 
 "layout": "absolute",
 "overflow": "visible",
 "scrollBarOpacity": 0.5,
 "mouseWheelEnabled": true,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "height": "100%",
 "width": "100%",
 "contentOpaque": false,
 "borderRadius": 0,
 "borderSize": 0,
 "gap": 10,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "shadow": false,
 "minHeight": 20,
 "buttonToggleMute": "this.IconButton_8105A313_8E22_BF0B_41E1_331C6035A930",
 "class": "Player",
 "vrPolyfillScale": 0.5,
 "backgroundPreloadEnabled": true,
 "paddingBottom": 0,
 "scripts": {
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "registerKey": function(key, value){  window[key] = value; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio) delete audios[audio.get('id')]; } if(audio) audio.stop(); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "existsKey": function(key){  return key in window; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "getKey": function(key){  return window[key]; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "unregisterKey": function(key){  delete window[key]; },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } }
 },
 "minWidth": 20,
 "id": "rootPlayer",
 "horizontalAlign": "left",
 "paddingTop": 0,
 "start": "this.playAudioList([this.audio_57293B7E_5DEA_B134_41C3_35DD62C73B29]); this.syncPlaylists([this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); this.playList_527DBC61_5E22_858A_41BB_8313CDD92049.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA].forEach(function(component) { component.set('visible', false); }) }",
 "paddingLeft": 0,
 "buttonToggleFullscreen": "this.IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA",
 "verticalAlign": "top",
 "scrollBarVisible": "rollOver"
})