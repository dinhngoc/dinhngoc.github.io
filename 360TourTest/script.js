TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "buttonPlay": {
   "verticalAlign": "middle",
   "paddingRight": 0,
   "mode": "push",
   "toolTipPaddingRight": 6,
   "paddingLeft": 0,
   "iconURL": "skin/IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED.png",
   "height": "76%",
   "maxWidth": 70,
   "width": "24%",
   "toolTipPaddingBottom": 4,
   "toolTipTextShadowOpacity": 0,
   "transparencyActive": true,
   "toolTipPaddingTop": 4,
   "toolTip": "See Photos",
   "toolTipFontSize": 12,
   "toolTipOpacity": 0.7,
   "borderSize": 0,
   "toolTipBorderSize": 1,
   "toolTipShadowOpacity": 1,
   "borderRadius": 0,
   "toolTipShadowVerticalLength": 0,
   "toolTipPaddingLeft": 6,
   "toolTipBorderColor": "#767676",
   "horizontalAlign": "center",
   "rollOverIconURL": "skin/IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED_rollover.png",
   "toolTipTextShadowColor": "#000000",
   "toolTipFontStyle": "normal",
   "minHeight": 1,
   "class": "IconButton",
   "click": "this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, true, 0, this.effect_98AADBB0_96C5_F0C5_41B2_1C4D08E503DB, 'showEffect', false); this.playList_104F8307_3D3C_0FE0_41C4_982D0E78C367.set('selectedIndex', 0)",
   "toolTipBorderRadius": 3,
   "paddingBottom": 0,
   "toolTipTextShadowBlurRadius": 3,
   "cursor": "hand",
   "toolTipFontWeight": "normal",
   "id": "IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED",
   "toolTipBackgroundColor": "#000000",
   "maxHeight": 70,
   "paddingTop": 0,
   "toolTipShadowHorizontalLength": 0,
   "toolTipShadowSpread": 0,
   "toolTipShadowColor": "#333333",
   "toolTipShadowBlurRadius": 3,
   "backgroundOpacity": 0,
   "toolTipFontColor": "#606060",
   "minWidth": 1,
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
    "borderSize": 0,
    "rollOverIconURL": "skin/IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4_rollover.png",
    "horizontalAlign": "center",
    "minHeight": 40,
    "top": "2%",
    "click": "this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, false, 0, this.effect_9B0AF4E2_96C4_F045_41D3_0E00FEE03A15, 'hideEffect', false)",
    "paddingBottom": 0,
    "class": "IconButton",
    "cursor": "hand",
    "id": "IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4",
    "maxHeight": 50,
    "paddingTop": 0,
    "backgroundOpacity": 0,
    "minWidth": 40,
    "right": "1%",
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
   "rollOverIconURL": "skin/IconButton_9FEA51EA_96CC_905A_41D3_F42DB0CD0A74_rollover.png",
   "horizontalAlign": "center",
   "minHeight": 50,
   "top": "40%",
   "paddingBottom": 0,
   "class": "IconButton",
   "cursor": "hand",
   "bottom": "40%",
   "id": "IconButton_9FEA51EA_96CC_905A_41D3_F42DB0CD0A74",
   "maxHeight": 70,
   "paddingTop": 0,
   "left": "1%",
   "backgroundOpacity": 0,
   "minWidth": 50,
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
   "toolTipOpacity": 0.7,
   "playbackBarBorderColor": "#FFFFFF",
   "toolTipShadowOpacity": 1,
   "playbackBarHeight": 10,
   "toolTipShadowVerticalLength": 0,
   "playbackBarHeadWidth": 6,
   "toolTipTextShadowColor": "#000000",
   "toolTipFontStyle": "normal",
   "minHeight": 1,
   "class": "ViewerArea",
   "playbackBarProgressBorderSize": 0,
   "playbackBarHeadBackgroundColorDirection": "vertical",
   "progressBottom": 2,
   "playbackBarBackgroundColorDirection": "vertical",
   "paddingBottom": 0,
   "progressBorderSize": 0,
   "playbackBarHeadShadowHorizontalLength": 0,
   "toolTipBackgroundColor": "#000000",
   "progressBarBorderSize": 0,
   "playbackBarRight": 0,
   "progressBarBorderRadius": 0,
   "paddingTop": 0,
   "transitionMode": "blending",
   "playbackBarProgressBorderRadius": 0,
   "toolTipShadowSpread": 0,
   "playbackBarOpacity": 1,
   "toolTipShadowColor": "#333333",
   "toolTipShadowBlurRadius": 3,
   "playbackBarHeadShadow": true,
   "progressBackgroundOpacity": 1,
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
   "toolTipTextShadowOpacity": 0,
   "height": "100%",
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
   "playbackBarHeadHeight": 15,
   "playbackBarBackgroundOpacity": 1,
   "playbackBarBorderSize": 0,
   "toolTipBorderRadius": 3,
   "playbackBarHeadShadowOpacity": 0.7,
   "top": "0%",
   "playbackBarProgressBackgroundColor": [
    "#3399FF"
   ],
   "playbackBarHeadBackgroundColorRatios": [
    0,
    1
   ],
   "playbackBarHeadShadowColor": "#000000",
   "toolTipFontWeight": "normal",
   "id": "ViewerAreaLabeled_9FD7235A_96CD_9045_41D9_23A3BCBDB1C6",
   "toolTipTextShadowBlurRadius": 3,
   "progressBarBorderColor": "#000000",
   "toolTipShadowHorizontalLength": 0,
   "playbackBarHeadOpacity": 1,
   "playbackBarHeadBorderSize": 0,
   "progressBackgroundColorDirection": "vertical",
   "playbackBarHeadShadowVerticalLength": 0,
   "progressBarBackgroundColorRatios": [
    0
   ],
   "progressHeight": 10,
   "playbackBarBottom": 0,
   "progressBorderColor": "#000000",
   "left": "0%",
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
   "borderSize": 0,
   "rollOverIconURL": "skin/IconButton_9FB9BD3F_96C5_703B_41D7_65AEE6E85A96_rollover.png",
   "horizontalAlign": "center",
   "minHeight": 50,
   "top": "40%",
   "paddingBottom": 0,
   "class": "IconButton",
   "cursor": "hand",
   "bottom": "40%",
   "id": "IconButton_9FB9BD3F_96C5_703B_41D7_65AEE6E85A96",
   "maxHeight": 70,
   "paddingTop": 0,
   "backgroundOpacity": 0,
   "minWidth": 50,
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
  "hfovMax": 120,
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_2A3212FD_3D4C_0E23_41C0_04B3E12E8F14_t.jpg",
  "id": "panorama_2A3212FD_3D4C_0E23_41C0_04B3E12E8F14",
  "hfovMin": 60,
  "label": "Front View",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_2A3212FD_3D4C_0E23_41C0_04B3E12E8F14_t.jpg",
    "overlays": [
     {
      "useHandCursor": true,
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 50,
           "width": 50,
           "url": "media/panorama_2A3212FD_3D4C_0E23_41C0_04B3E12E8F14_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 8.61,
        "yaw": -3.02,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -11.62
       }
      ],
      "areas": [
       {
        "toolTip": "Out View",
        "click": "this.startPanoramaWithCamera(this.panorama_25553EB7_3D4C_162F_41C4_ABE3C7F9C5B0, this.camera_10F6C38E_3D3C_0EE1_4195_23CC307B6B56); this.mainPlayList.set('selectedIndex', 1)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "displayTooltipInTouchScreens": true
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_2A32E2FD_3D4C_0E23_41BF_6BE2D56D6AB4",
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "yaw": -3.02,
        "hfov": 8.61,
        "image": {
         "levels": [
          {
           "height": 100,
           "width": 100,
           "url": "media/panorama_2A3212FD_3D4C_0E23_41C0_04B3E12E8F14_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -11.62
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
           "url": "media/panorama_2A3212FD_3D4C_0E23_41C0_04B3E12E8F14_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 0,
        "yaw": -41.07,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 19.41
       }
      ],
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_25789C34_3D4C_1A20_41A5_C0AD56C4B00F, this.camera_10FC2384_3D3C_0EE1_41AC_E1ADAAAB7231); this.mainPlayList.set('selectedIndex', 2)"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": true,
      "id": "overlay_2A32D2FD_3D4C_0E23_41B9_727E3DC67D70",
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "yaw": -41.07,
        "hfov": 0,
        "image": {
         "levels": [
          {
           "height": 1,
           "width": 1,
           "url": "media/panorama_2A3212FD_3D4C_0E23_41C0_04B3E12E8F14_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 19.41
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
           "url": "media/panorama_2A3212FD_3D4C_0E23_41C0_04B3E12E8F14_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 0,
        "yaw": -1.63,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 18.65
       }
      ],
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_2554CA98_3D4C_3EE1_41C5_3E8526A1D270, this.camera_10E443A3_3D3C_0E27_41C9_AEC5494EE76C); this.mainPlayList.set('selectedIndex', 3)"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": true,
      "id": "overlay_2A32A2FD_3D4C_0E23_41C4_26904FD72E7D",
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "yaw": -1.63,
        "hfov": 0,
        "image": {
         "levels": [
          {
           "height": 1,
           "width": 1,
           "url": "media/panorama_2A3212FD_3D4C_0E23_41C0_04B3E12E8F14_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 18.65
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
           "url": "media/panorama_2A3212FD_3D4C_0E23_41C0_04B3E12E8F14_0_HS_3_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 0,
        "yaw": -21.48,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 30.21
       }
      ],
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_255448EA_3D4C_1A21_41C9_3DB54CE3D3DC, this.camera_10EC9398_3D3C_0EE1_41A0_173D93DF5035); this.mainPlayList.set('selectedIndex', 4)"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": true,
      "id": "overlay_2A32B2FD_3D4C_0E23_41B9_93ABA3A62D17",
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "yaw": -21.48,
        "hfov": 0,
        "image": {
         "levels": [
          {
           "height": 1,
           "width": 1,
           "url": "media/panorama_2A3212FD_3D4C_0E23_41C0_04B3E12E8F14_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 30.21
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
           "url": "media/panorama_2A3212FD_3D4C_0E23_41C0_04B3E12E8F14_0_HS_4_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 0,
        "yaw": -21.73,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 41.77
       }
      ],
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_257A7074_3D4C_0A21_41A8_648C8CC16F7F, this.camera_10D303AC_3D3C_0E21_41B0_CDB0E5A6690F); this.mainPlayList.set('selectedIndex', 5)"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": true,
      "id": "overlay_2A3282FD_3D4C_0E22_41C6_67F0125AA08D",
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "yaw": -21.73,
        "hfov": 0,
        "image": {
         "levels": [
          {
           "height": 1,
           "width": 1,
           "url": "media/panorama_2A3212FD_3D4C_0E23_41C0_04B3E12E8F14_0_HS_4_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 41.77
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 2048,
       "width": 4096,
       "url": "media/panorama_2A3212FD_3D4C_0E23_41C0_04B3E12E8F14_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_2A3212FD_3D4C_0E23_41C0_04B3E12E8F14.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
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
     "thumbnailUrl": "media/panorama_25789C34_3D4C_1A20_41A5_C0AD56C4B00F_t.jpg",
     "id": "panorama_25789C34_3D4C_1A20_41A5_C0AD56C4B00F",
     "hfovMin": 60,
     "label": "Pool",
     "frames": [
      {
       "thumbnailUrl": "media/panorama_25789C34_3D4C_1A20_41A5_C0AD56C4B00F_t.jpg",
       "overlays": [
        {
         "useHandCursor": true,
         "maps": [
          {
           "image": {
            "levels": [
             {
              "height": 50,
              "width": 50,
              "url": "media/panorama_25789C34_3D4C_1A20_41A5_C0AD56C4B00F_0_HS_0_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 8.63,
           "yaw": 14.07,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -10.86
          }
         ],
         "areas": [
          {
           "toolTip": "Living Room",
           "click": "this.startPanoramaWithCamera(this.panorama_2554CA98_3D4C_3EE1_41C5_3E8526A1D270, this.camera_10A8D3DC_3D3C_0E61_41C4_BA51A825DB14); this.mainPlayList.set('selectedIndex', 3)",
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "displayTooltipInTouchScreens": true
          }
         ],
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "id": "overlay_2578EC34_3D4C_1A20_41C5_1AEFACCE1A7B",
         "class": "HotspotPanoramaOverlay",
         "items": [
          {
           "yaw": 14.07,
           "hfov": 8.63,
           "image": {
            "levels": [
             {
              "height": 100,
              "width": 100,
              "url": "media/panorama_25789C34_3D4C_1A20_41A5_C0AD56C4B00F_0_HS_0_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -10.86
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
              "url": "media/panorama_25789C34_3D4C_1A20_41A5_C0AD56C4B00F_0_HS_1_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 0,
           "yaw": 138.8,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -20.79
          }
         ],
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_2A3212FD_3D4C_0E23_41C0_04B3E12E8F14, this.camera_10CE23B6_3D3C_0E21_41CE_4D3FA0975E1F); this.mainPlayList.set('selectedIndex', 0)"
          }
         ],
         "enabledInCardboard": true,
         "rollOverDisplay": true,
         "id": "overlay_2578FC34_3D4C_1A20_41CB_82EFA479E8B9",
         "class": "HotspotPanoramaOverlay",
         "items": [
          {
           "yaw": 138.8,
           "hfov": 0,
           "image": {
            "levels": [
             {
              "height": 1,
              "width": 1,
              "url": "media/panorama_25789C34_3D4C_1A20_41A5_C0AD56C4B00F_0_HS_1_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -20.79
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
              "url": "media/panorama_25789C34_3D4C_1A20_41A5_C0AD56C4B00F_0_HS_2_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 0,
           "yaw": 113.93,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -37.62
          }
         ],
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_25553EB7_3D4C_162F_41C4_ABE3C7F9C5B0, this.camera_10C4B3C0_3D3C_0E61_41A2_684B62C066A6); this.mainPlayList.set('selectedIndex', 1)"
          }
         ],
         "enabledInCardboard": true,
         "rollOverDisplay": true,
         "id": "overlay_2578CC34_3D4C_1A20_41B6_46F7340A1FB1",
         "class": "HotspotPanoramaOverlay",
         "items": [
          {
           "yaw": 113.93,
           "hfov": 0,
           "image": {
            "levels": [
             {
              "height": 1,
              "width": 1,
              "url": "media/panorama_25789C34_3D4C_1A20_41A5_C0AD56C4B00F_0_HS_2_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -37.62
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
              "url": "media/panorama_25789C34_3D4C_1A20_41A5_C0AD56C4B00F_0_HS_3_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 0,
           "yaw": 10.93,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": 8.6
          }
         ],
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_255448EA_3D4C_1A21_41C9_3DB54CE3D3DC, this.camera_10B273CC_3D3C_0E61_41C2_974FAEA53CAF); this.mainPlayList.set('selectedIndex', 4)"
          }
         ],
         "enabledInCardboard": true,
         "rollOverDisplay": true,
         "id": "overlay_2578DC34_3D4C_1A20_41B6_C7A2B5940DBB",
         "class": "HotspotPanoramaOverlay",
         "items": [
          {
           "yaw": 10.93,
           "hfov": 0,
           "image": {
            "levels": [
             {
              "height": 1,
              "width": 1,
              "url": "media/panorama_25789C34_3D4C_1A20_41A5_C0AD56C4B00F_0_HS_3_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayImage",
           "pitch": 8.6
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
              "url": "media/panorama_25789C34_3D4C_1A20_41A5_C0AD56C4B00F_0_HS_4_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 0,
           "yaw": 32.28,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": 63.37
          }
         ],
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_257A7074_3D4C_0A21_41A8_648C8CC16F7F, this.camera_10A7B3E7_3D3C_0E2F_4189_27BEFCDF1E82); this.mainPlayList.set('selectedIndex', 5)"
          }
         ],
         "enabledInCardboard": true,
         "rollOverDisplay": true,
         "id": "overlay_25783C34_3D4C_1A20_41CB_154DBF4FEB79",
         "class": "HotspotPanoramaOverlay",
         "items": [
          {
           "yaw": 32.28,
           "hfov": 0,
           "image": {
            "levels": [
             {
              "height": 1,
              "width": 1,
              "url": "media/panorama_25789C34_3D4C_1A20_41A5_C0AD56C4B00F_0_HS_4_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayImage",
           "pitch": 63.37
          }
         ]
        }
       ],
       "class": "SphericPanoramaFrame",
       "sphere": {
        "levels": [
         {
          "height": 2048,
          "width": 4096,
          "url": "media/panorama_25789C34_3D4C_1A20_41A5_C0AD56C4B00F_hq.jpeg",
          "class": "ImageResourceLevel"
         },
         {
          "height": 1608,
          "width": 3217,
          "url": "media/panorama_25789C34_3D4C_1A20_41A5_C0AD56C4B00F.jpeg",
          "class": "ImageResourceLevel"
         }
        ],
        "class": "ImageResource"
       }
      }
     ],
     "hfov": 360,
     "adjacentPanoramas": [
      {
       "panorama": "this.panorama_2A3212FD_3D4C_0E23_41C0_04B3E12E8F14",
       "yaw": 138.8,
       "class": "AdjacentPanorama",
       "backwardYaw": -41.07,
       "distance": 1
      },
      {
       "panorama": {
        "hfovMax": 120,
        "partial": false,
        "pitch": 0,
        "thumbnailUrl": "media/panorama_25553EB7_3D4C_162F_41C4_ABE3C7F9C5B0_t.jpg",
        "id": "panorama_25553EB7_3D4C_162F_41C4_ABE3C7F9C5B0",
        "hfovMin": 60,
        "label": "Out View",
        "frames": [
         {
          "thumbnailUrl": "media/panorama_25553EB7_3D4C_162F_41C4_ABE3C7F9C5B0_t.jpg",
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
                 "url": "media/panorama_25553EB7_3D4C_162F_41C4_ABE3C7F9C5B0_0_HS_0_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "hfov": 10.5,
              "yaw": 1.38,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -5.21
             }
            ],
            "areas": [
             {
              "toolTip": "Pool",
              "click": "this.startPanoramaWithCamera(this.panorama_25789C34_3D4C_1A20_41A5_C0AD56C4B00F, this.camera_108B33FA_3D3C_0E26_419A_9C4405D33940); this.mainPlayList.set('selectedIndex', 2)",
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "displayTooltipInTouchScreens": true
             }
            ],
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "id": "overlay_25555EB7_3D4C_162F_41A5_A7A6B9E22571",
            "class": "HotspotPanoramaOverlay",
            "items": [
             {
              "yaw": 1.38,
              "hfov": 10.5,
              "image": {
               "levels": [
                {
                 "height": 119,
                 "width": 119,
                 "url": "media/panorama_25553EB7_3D4C_162F_41C4_ABE3C7F9C5B0_0_HS_0_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -5.21
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
                 "url": "media/panorama_25553EB7_3D4C_162F_41C4_ABE3C7F9C5B0_0_HS_1_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "hfov": 0,
              "yaw": 152.37,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -10.99
             }
            ],
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_2A3212FD_3D4C_0E23_41C0_04B3E12E8F14, this.camera_109CD3F0_3D3C_0E21_41AC_553B0481BDB7); this.mainPlayList.set('selectedIndex', 0)"
             }
            ],
            "enabledInCardboard": true,
            "rollOverDisplay": true,
            "id": "overlay_25557EB7_3D4C_162F_41A7_ECC96B33C9DA",
            "class": "HotspotPanoramaOverlay",
            "items": [
             {
              "yaw": 152.37,
              "hfov": 0,
              "image": {
               "levels": [
                {
                 "height": 1,
                 "width": 1,
                 "url": "media/panorama_25553EB7_3D4C_162F_41C4_ABE3C7F9C5B0_0_HS_1_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -10.99
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
                 "url": "media/panorama_25553EB7_3D4C_162F_41C4_ABE3C7F9C5B0_0_HS_2_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "hfov": 0,
              "yaw": 43.84,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": 52.32
             }
            ],
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_2554CA98_3D4C_3EE1_41C5_3E8526A1D270, this.camera_137D240F_3D3C_09FF_41BE_91859BD327B4); this.mainPlayList.set('selectedIndex', 3)"
             }
            ],
            "enabledInCardboard": true,
            "rollOverDisplay": true,
            "id": "overlay_25568EB7_3D4C_162F_41A5_E92903719731",
            "class": "HotspotPanoramaOverlay",
            "items": [
             {
              "yaw": 43.84,
              "hfov": 0,
              "image": {
               "levels": [
                {
                 "height": 1,
                 "width": 1,
                 "url": "media/panorama_25553EB7_3D4C_162F_41C4_ABE3C7F9C5B0_0_HS_2_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "class": "HotspotPanoramaOverlayImage",
              "pitch": 52.32
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
                 "url": "media/panorama_25553EB7_3D4C_162F_41C4_ABE3C7F9C5B0_0_HS_3_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "hfov": 0,
              "yaw": -41.83,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": 56.34
             }
            ],
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_255448EA_3D4C_1A21_41C9_3DB54CE3D3DC, this.camera_1087F405_3D3C_09E3_41C6_87912A5EED92); this.mainPlayList.set('selectedIndex', 4)"
             }
            ],
            "enabledInCardboard": true,
            "rollOverDisplay": true,
            "id": "overlay_25569EB7_3D4C_162F_41B0_C7CAA2609CAB",
            "class": "HotspotPanoramaOverlay",
            "items": [
             {
              "yaw": -41.83,
              "hfov": 0,
              "image": {
               "levels": [
                {
                 "height": 1,
                 "width": 1,
                 "url": "media/panorama_25553EB7_3D4C_162F_41C4_ABE3C7F9C5B0_0_HS_3_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "class": "HotspotPanoramaOverlayImage",
              "pitch": 56.34
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
                 "url": "media/panorama_25553EB7_3D4C_162F_41C4_ABE3C7F9C5B0_0_HS_4_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "hfov": 0,
              "yaw": -6.66,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": 78.95
             }
            ],
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_257A7074_3D4C_0A21_41A8_648C8CC16F7F, this.camera_13693419_3D3C_09E3_41CD_3DD7B9D652C3); this.mainPlayList.set('selectedIndex', 5)"
             }
            ],
            "enabledInCardboard": true,
            "rollOverDisplay": true,
            "id": "overlay_2556AEB7_3D4C_162F_41CE_7D8754BB0E84",
            "class": "HotspotPanoramaOverlay",
            "items": [
             {
              "yaw": -6.66,
              "hfov": 0,
              "image": {
               "levels": [
                {
                 "height": 1,
                 "width": 1,
                 "url": "media/panorama_25553EB7_3D4C_162F_41C4_ABE3C7F9C5B0_0_HS_4_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "class": "HotspotPanoramaOverlayImage",
              "pitch": 78.95
             }
            ]
           }
          ],
          "class": "SphericPanoramaFrame",
          "sphere": {
           "levels": [
            {
             "height": 2048,
             "width": 4096,
             "url": "media/panorama_25553EB7_3D4C_162F_41C4_ABE3C7F9C5B0_hq.jpeg",
             "class": "ImageResourceLevel"
            },
            {
             "height": 1608,
             "width": 3217,
             "url": "media/panorama_25553EB7_3D4C_162F_41C4_ABE3C7F9C5B0.jpeg",
             "class": "ImageResourceLevel"
            }
           ],
           "class": "ImageResource"
          }
         }
        ],
        "hfov": 360,
        "adjacentPanoramas": [
         {
          "panorama": "this.panorama_2A3212FD_3D4C_0E23_41C0_04B3E12E8F14",
          "yaw": 152.37,
          "class": "AdjacentPanorama",
          "backwardYaw": -3.02,
          "distance": 1
         },
         {
          "panorama": "this.panorama_25789C34_3D4C_1A20_41A5_C0AD56C4B00F",
          "yaw": 1.38,
          "class": "AdjacentPanorama",
          "backwardYaw": 113.93,
          "distance": 1
         },
         {
          "panorama": {
           "hfovMax": 120,
           "partial": false,
           "pitch": 0,
           "thumbnailUrl": "media/panorama_255448EA_3D4C_1A21_41C9_3DB54CE3D3DC_t.jpg",
           "id": "panorama_255448EA_3D4C_1A21_41C9_3DB54CE3D3DC",
           "hfovMin": 60,
           "label": "Bedroom",
           "frames": [
            {
             "thumbnailUrl": "media/panorama_255448EA_3D4C_1A21_41C9_3DB54CE3D3DC_t.jpg",
             "overlays": [
              {
               "useHandCursor": true,
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "height": 1,
                    "width": 1,
                    "url": "media/panorama_255448EA_3D4C_1A21_41C9_3DB54CE3D3DC_0_HS_0_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "hfov": 0,
                 "yaw": 165.43,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -38.37
                }
               ],
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_25789C34_3D4C_1A20_41A5_C0AD56C4B00F, this.camera_10288329_3D3C_0E20_41A4_236139453C68); this.mainPlayList.set('selectedIndex', 2)"
                }
               ],
               "enabledInCardboard": true,
               "rollOverDisplay": true,
               "id": "overlay_255458EA_3D4C_1A21_41AB_D71896F3D29F",
               "class": "HotspotPanoramaOverlay",
               "items": [
                {
                 "yaw": 165.43,
                 "hfov": 0,
                 "image": {
                  "levels": [
                   {
                    "height": 1,
                    "width": 1,
                    "url": "media/panorama_255448EA_3D4C_1A21_41C9_3DB54CE3D3DC_0_HS_0_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -38.37
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
                    "url": "media/panorama_255448EA_3D4C_1A21_41C9_3DB54CE3D3DC_0_HS_1_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "hfov": 0,
                 "yaw": 147.34,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -21.79
                }
               ],
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_2A3212FD_3D4C_0E23_41C0_04B3E12E8F14, this.camera_1037331F_3D3C_0FE0_41B9_BDCB0CAC462F); this.mainPlayList.set('selectedIndex', 0)"
                }
               ],
               "enabledInCardboard": true,
               "rollOverDisplay": true,
               "id": "overlay_255468EA_3D4C_1A21_41B4_36EB7CAD303A",
               "class": "HotspotPanoramaOverlay",
               "items": [
                {
                 "yaw": 147.34,
                 "hfov": 0,
                 "image": {
                  "levels": [
                   {
                    "height": 1,
                    "width": 1,
                    "url": "media/panorama_255448EA_3D4C_1A21_41C9_3DB54CE3D3DC_0_HS_1_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -21.79
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
                    "url": "media/panorama_255448EA_3D4C_1A21_41C9_3DB54CE3D3DC_0_HS_2_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "hfov": 0,
                 "yaw": 125.99,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -34.86
                }
               ],
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_25553EB7_3D4C_162F_41C4_ABE3C7F9C5B0, this.camera_102CD333_3D3C_0E20_41CC_AB2C92816E08); this.mainPlayList.set('selectedIndex', 1)"
                }
               ],
               "enabledInCardboard": true,
               "rollOverDisplay": true,
               "id": "overlay_255478EA_3D4C_1A21_41C4_CCFCD4DD0588",
               "class": "HotspotPanoramaOverlay",
               "items": [
                {
                 "yaw": 125.99,
                 "hfov": 0,
                 "image": {
                  "levels": [
                   {
                    "height": 1,
                    "width": 1,
                    "url": "media/panorama_255448EA_3D4C_1A21_41C9_3DB54CE3D3DC_0_HS_2_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -34.86
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
                    "url": "media/panorama_255448EA_3D4C_1A21_41C9_3DB54CE3D3DC_0_HS_3_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "hfov": 0,
                 "yaw": 118.2,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": 1.57
                }
               ],
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_2554CA98_3D4C_3EE1_41C5_3E8526A1D270, this.camera_1026833D_3D3C_0E20_41B5_3A0D58E69D6E); this.mainPlayList.set('selectedIndex', 3)"
                }
               ],
               "enabledInCardboard": true,
               "rollOverDisplay": true,
               "id": "overlay_255488EA_3D4C_1A21_4194_A2BA1CB98E61",
               "class": "HotspotPanoramaOverlay",
               "items": [
                {
                 "yaw": 118.2,
                 "hfov": 0,
                 "image": {
                  "levels": [
                   {
                    "height": 1,
                    "width": 1,
                    "url": "media/panorama_255448EA_3D4C_1A21_41C9_3DB54CE3D3DC_0_HS_3_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": 1.57
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
                    "url": "media/panorama_255448EA_3D4C_1A21_41C9_3DB54CE3D3DC_0_HS_4_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "hfov": 8.69,
                 "yaw": 1.25,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -8.6
                }
               ],
               "areas": [
                {
                 "toolTip": "View Deck",
                 "click": "this.startPanoramaWithCamera(this.panorama_257A7074_3D4C_0A21_41A8_648C8CC16F7F, this.camera_101A7347_3D3C_0E60_41BA_5FAA0286E8A4); this.mainPlayList.set('selectedIndex', 5)",
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "displayTooltipInTouchScreens": true
                }
               ],
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "id": "overlay_2554C8EA_3D4C_1A21_418E_798FAA0C9AF8",
               "class": "HotspotPanoramaOverlay",
               "items": [
                {
                 "yaw": 1.25,
                 "hfov": 8.69,
                 "image": {
                  "levels": [
                   {
                    "height": 100,
                    "width": 100,
                    "url": "media/panorama_255448EA_3D4C_1A21_41C9_3DB54CE3D3DC_0_HS_4_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -8.6
                }
               ]
              }
             ],
             "class": "SphericPanoramaFrame",
             "sphere": {
              "levels": [
               {
                "height": 2048,
                "width": 4096,
                "url": "media/panorama_255448EA_3D4C_1A21_41C9_3DB54CE3D3DC_hq.jpeg",
                "class": "ImageResourceLevel"
               },
               {
                "height": 1608,
                "width": 3217,
                "url": "media/panorama_255448EA_3D4C_1A21_41C9_3DB54CE3D3DC.jpeg",
                "class": "ImageResourceLevel"
               }
              ],
              "class": "ImageResource"
             }
            }
           ],
           "hfov": 360,
           "adjacentPanoramas": [
            {
             "panorama": "this.panorama_2A3212FD_3D4C_0E23_41C0_04B3E12E8F14",
             "yaw": 147.34,
             "class": "AdjacentPanorama",
             "backwardYaw": -21.48,
             "distance": 1
            },
            {
             "panorama": "this.panorama_25789C34_3D4C_1A20_41A5_C0AD56C4B00F",
             "yaw": 165.43,
             "class": "AdjacentPanorama",
             "backwardYaw": 10.93,
             "distance": 1
            },
            {
             "panorama": "this.panorama_25553EB7_3D4C_162F_41C4_ABE3C7F9C5B0",
             "yaw": 125.99,
             "class": "AdjacentPanorama",
             "backwardYaw": -41.83,
             "distance": 1
            },
            {
             "panorama": {
              "hfovMax": 120,
              "partial": false,
              "pitch": 0,
              "thumbnailUrl": "media/panorama_2554CA98_3D4C_3EE1_41C5_3E8526A1D270_t.jpg",
              "id": "panorama_2554CA98_3D4C_3EE1_41C5_3E8526A1D270",
              "hfovMin": 60,
              "label": "Living Room",
              "frames": [
               {
                "thumbnailUrl": "media/panorama_2554CA98_3D4C_3EE1_41C5_3E8526A1D270_t.jpg",
                "overlays": [
                 {
                  "useHandCursor": true,
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "height": 1,
                       "width": 1,
                       "url": "media/panorama_2554CA98_3D4C_3EE1_41C5_3E8526A1D270_0_HS_0_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "hfov": 0,
                    "yaw": 165.68,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -30.33
                   }
                  ],
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_25789C34_3D4C_1A20_41A5_C0AD56C4B00F, this.camera_1011C35D_3D3C_0E60_41C0_4250006F1965); this.mainPlayList.set('selectedIndex', 2)"
                   }
                  ],
                  "enabledInCardboard": true,
                  "rollOverDisplay": true,
                  "id": "overlay_2554EA98_3D4C_3EE1_41B3_0AF33D493D68",
                  "class": "HotspotPanoramaOverlay",
                  "items": [
                   {
                    "yaw": 165.68,
                    "hfov": 0,
                    "image": {
                     "levels": [
                      {
                       "height": 1,
                       "width": 1,
                       "url": "media/panorama_2554CA98_3D4C_3EE1_41C5_3E8526A1D270_0_HS_0_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -30.33
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
                       "url": "media/panorama_2554CA98_3D4C_3EE1_41C5_3E8526A1D270_0_HS_1_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "hfov": 10.53,
                    "yaw": 18.46,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": 3.08
                   }
                  ],
                  "areas": [
                   {
                    "toolTip": "Bedroom",
                    "click": "this.startPanoramaWithCamera(this.panorama_255448EA_3D4C_1A21_41C9_3DB54CE3D3DC, this.camera_10081366_3D3C_0E21_41CA_3F96323C44EC); this.mainPlayList.set('selectedIndex', 4)",
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "displayTooltipInTouchScreens": true
                   }
                  ],
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "id": "overlay_25549A98_3D4C_3EE1_41B3_12C8169C96F9",
                  "class": "HotspotPanoramaOverlay",
                  "items": [
                   {
                    "yaw": 18.46,
                    "hfov": 10.53,
                    "image": {
                     "levels": [
                      {
                       "height": 119,
                       "width": 119,
                       "url": "media/panorama_2554CA98_3D4C_3EE1_41C5_3E8526A1D270_0_HS_1_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": 3.08
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
                       "url": "media/panorama_2554CA98_3D4C_3EE1_41C5_3E8526A1D270_0_HS_2_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "hfov": 0,
                    "yaw": 157.89,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -8.23
                   }
                  ],
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_2A3212FD_3D4C_0E23_41C0_04B3E12E8F14, this.camera_101CC352_3D3C_0E61_41C1_1E6C1BEDC40F); this.mainPlayList.set('selectedIndex', 0)"
                   }
                  ],
                  "enabledInCardboard": true,
                  "rollOverDisplay": true,
                  "id": "overlay_2554AA98_3D4C_3EE1_41CC_B8FCC3D08310",
                  "class": "HotspotPanoramaOverlay",
                  "items": [
                   {
                    "yaw": 157.89,
                    "hfov": 0,
                    "image": {
                     "levels": [
                      {
                       "height": 1,
                       "width": 1,
                       "url": "media/panorama_2554CA98_3D4C_3EE1_41C5_3E8526A1D270_0_HS_2_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -8.23
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
                       "url": "media/panorama_2554CA98_3D4C_3EE1_41C5_3E8526A1D270_0_HS_3_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "hfov": 0,
                    "yaw": 131.77,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -7.47
                   }
                  ],
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_25553EB7_3D4C_162F_41C4_ABE3C7F9C5B0, this.camera_10035371_3D3C_0E23_41CB_939E8B77676A); this.mainPlayList.set('selectedIndex', 1)"
                   }
                  ],
                  "enabledInCardboard": true,
                  "rollOverDisplay": true,
                  "id": "overlay_25545A98_3D4C_3EE1_41C9_E70B128D2EFA",
                  "class": "HotspotPanoramaOverlay",
                  "items": [
                   {
                    "yaw": 131.77,
                    "hfov": 0,
                    "image": {
                     "levels": [
                      {
                       "height": 1,
                       "width": 1,
                       "url": "media/panorama_2554CA98_3D4C_3EE1_41C5_3E8526A1D270_0_HS_3_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -7.47
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
                       "url": "media/panorama_2554CA98_3D4C_3EE1_41C5_3E8526A1D270_0_HS_4_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "hfov": 0,
                    "yaw": 109.66,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": 29.46
                   }
                  ],
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_257A7074_3D4C_0A21_41A8_648C8CC16F7F, this.camera_1005C37A_3D3C_0E21_41CB_30FBB75D9FA8); this.mainPlayList.set('selectedIndex', 5)"
                   }
                  ],
                  "enabledInCardboard": true,
                  "rollOverDisplay": true,
                  "id": "overlay_25544A98_3D4C_3EE1_41B8_DF36D5B63711",
                  "class": "HotspotPanoramaOverlay",
                  "items": [
                   {
                    "yaw": 109.66,
                    "hfov": 0,
                    "image": {
                     "levels": [
                      {
                       "height": 1,
                       "width": 1,
                       "url": "media/panorama_2554CA98_3D4C_3EE1_41C5_3E8526A1D270_0_HS_4_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": 29.46
                   }
                  ]
                 }
                ],
                "class": "SphericPanoramaFrame",
                "sphere": {
                 "levels": [
                  {
                   "height": 2048,
                   "width": 4096,
                   "url": "media/panorama_2554CA98_3D4C_3EE1_41C5_3E8526A1D270_hq.jpeg",
                   "class": "ImageResourceLevel"
                  },
                  {
                   "height": 1608,
                   "width": 3217,
                   "url": "media/panorama_2554CA98_3D4C_3EE1_41C5_3E8526A1D270.jpeg",
                   "class": "ImageResourceLevel"
                  }
                 ],
                 "class": "ImageResource"
                }
               }
              ],
              "hfov": 360,
              "adjacentPanoramas": [
               {
                "panorama": "this.panorama_2A3212FD_3D4C_0E23_41C0_04B3E12E8F14",
                "yaw": 157.89,
                "class": "AdjacentPanorama",
                "backwardYaw": -1.63,
                "distance": 1
               },
               {
                "panorama": "this.panorama_25789C34_3D4C_1A20_41A5_C0AD56C4B00F",
                "yaw": 165.68,
                "class": "AdjacentPanorama",
                "backwardYaw": 14.07,
                "distance": 1
               },
               {
                "panorama": "this.panorama_255448EA_3D4C_1A21_41C9_3DB54CE3D3DC",
                "yaw": 18.46,
                "class": "AdjacentPanorama",
                "backwardYaw": 118.2,
                "distance": 1
               },
               {
                "panorama": "this.panorama_25553EB7_3D4C_162F_41C4_ABE3C7F9C5B0",
                "yaw": 131.77,
                "class": "AdjacentPanorama",
                "backwardYaw": 43.84,
                "distance": 1
               },
               {
                "panorama": {
                 "hfovMax": 120,
                 "partial": false,
                 "pitch": 0,
                 "thumbnailUrl": "media/panorama_257A7074_3D4C_0A21_41A8_648C8CC16F7F_t.jpg",
                 "id": "panorama_257A7074_3D4C_0A21_41A8_648C8CC16F7F",
                 "hfovMin": 60,
                 "label": "View Deck",
                 "frames": [
                  {
                   "thumbnailUrl": "media/panorama_257A7074_3D4C_0A21_41A8_648C8CC16F7F_t.jpg",
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
                          "url": "media/panorama_257A7074_3D4C_0A21_41A8_648C8CC16F7F_0_HS_0_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "hfov": 10.48,
                       "yaw": -137.04,
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -6.47
                      }
                     ],
                     "areas": [
                      {
                       "toolTip": "Bedroom",
                       "click": "this.startPanoramaWithCamera(this.panorama_255448EA_3D4C_1A21_41C9_3DB54CE3D3DC, this.camera_134C9437_3D3C_0A2F_41C8_FC29B1CFA99E); this.mainPlayList.set('selectedIndex', 4)",
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea",
                       "displayTooltipInTouchScreens": true
                      }
                     ],
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "id": "overlay_257A4074_3D4C_0A21_41C4_735D08CCB883",
                     "class": "HotspotPanoramaOverlay",
                     "items": [
                      {
                       "yaw": -137.04,
                       "hfov": 10.48,
                       "image": {
                        "levels": [
                         {
                          "height": 119,
                          "width": 119,
                          "url": "media/panorama_257A7074_3D4C_0A21_41A8_648C8CC16F7F_0_HS_0_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": -6.47
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
                          "url": "media/panorama_257A7074_3D4C_0A21_41A8_648C8CC16F7F_0_HS_1_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "hfov": 0.02,
                       "yaw": -11.14,
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": 75.89
                      }
                     ],
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_2A3212FD_3D4C_0E23_41C0_04B3E12E8F14, this.camera_13649422_3D3C_0A21_4196_A133CB13F823); this.mainPlayList.set('selectedIndex', 0)"
                      }
                     ],
                     "enabledInCardboard": true,
                     "rollOverDisplay": true,
                     "id": "overlay_257AA074_3D4C_0A21_41B7_A62EF50AEB1E",
                     "class": "HotspotPanoramaOverlay",
                     "items": [
                      {
                       "yaw": -11.14,
                       "hfov": 0.02,
                       "image": {
                        "levels": [
                         {
                          "height": 1,
                          "width": 1,
                          "url": "media/panorama_257A7074_3D4C_0A21_41A8_648C8CC16F7F_0_HS_1_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": 75.89
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
                          "url": "media/panorama_257A7074_3D4C_0A21_41A8_648C8CC16F7F_0_HS_2_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "hfov": 0.04,
                       "yaw": -58.36,
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": 65.59
                      }
                     ],
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_25553EB7_3D4C_162F_41C4_ABE3C7F9C5B0, this.camera_133A2440_3D3C_0A61_41B8_583A86716DA2); this.mainPlayList.set('selectedIndex', 1)"
                      }
                     ],
                     "enabledInCardboard": true,
                     "rollOverDisplay": true,
                     "id": "overlay_257AB074_3D4C_0A22_4185_A4CCF850A5A4",
                     "class": "HotspotPanoramaOverlay",
                     "items": [
                      {
                       "yaw": -58.36,
                       "hfov": 0.04,
                       "image": {
                        "levels": [
                         {
                          "height": 1,
                          "width": 1,
                          "url": "media/panorama_257A7074_3D4C_0A21_41A8_648C8CC16F7F_0_HS_2_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": 65.59
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
                          "url": "media/panorama_257A7074_3D4C_0A21_41A8_648C8CC16F7F_0_HS_3_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "hfov": 0.07,
                       "yaw": -8.12,
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": 36.7
                      }
                     ],
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_25789C34_3D4C_1A20_41A5_C0AD56C4B00F, this.camera_1350B42C_3D3C_0A21_41C3_41E593FF8810); this.mainPlayList.set('selectedIndex', 2)"
                      }
                     ],
                     "enabledInCardboard": true,
                     "rollOverDisplay": true,
                     "id": "overlay_257A8075_3D4C_0A23_4197_7351ED85C1E6",
                     "class": "HotspotPanoramaOverlay",
                     "items": [
                      {
                       "yaw": -8.12,
                       "hfov": 0.07,
                       "image": {
                        "levels": [
                         {
                          "height": 1,
                          "width": 1,
                          "url": "media/panorama_257A7074_3D4C_0A21_41A8_648C8CC16F7F_0_HS_3_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": 36.7
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
                          "url": "media/panorama_257A7074_3D4C_0A21_41A8_648C8CC16F7F_0_HS_4_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "hfov": 0,
                       "yaw": 39.06,
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": 79.2
                      }
                     ],
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_2554CA98_3D4C_3EE1_41C5_3E8526A1D270, this.camera_1336D44A_3D3C_0A61_4181_6F7523BB6175); this.mainPlayList.set('selectedIndex', 3)"
                      }
                     ],
                     "enabledInCardboard": true,
                     "rollOverDisplay": true,
                     "id": "overlay_257A9075_3D4C_0A23_41CE_5386F7FC6737",
                     "class": "HotspotPanoramaOverlay",
                     "items": [
                      {
                       "yaw": 39.06,
                       "hfov": 0,
                       "image": {
                        "levels": [
                         {
                          "height": 1,
                          "width": 1,
                          "url": "media/panorama_257A7074_3D4C_0A21_41A8_648C8CC16F7F_0_HS_4_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": 79.2
                      }
                     ]
                    }
                   ],
                   "class": "SphericPanoramaFrame",
                   "sphere": {
                    "levels": [
                     {
                      "height": 2048,
                      "width": 4096,
                      "url": "media/panorama_257A7074_3D4C_0A21_41A8_648C8CC16F7F_hq.jpeg",
                      "class": "ImageResourceLevel"
                     },
                     {
                      "height": 1608,
                      "width": 3217,
                      "url": "media/panorama_257A7074_3D4C_0A21_41A8_648C8CC16F7F.jpeg",
                      "class": "ImageResourceLevel"
                     }
                    ],
                    "class": "ImageResource"
                   }
                  }
                 ],
                 "hfov": 360,
                 "adjacentPanoramas": [
                  {
                   "panorama": "this.panorama_2A3212FD_3D4C_0E23_41C0_04B3E12E8F14",
                   "yaw": -11.14,
                   "class": "AdjacentPanorama",
                   "backwardYaw": -21.73,
                   "distance": 1
                  },
                  {
                   "panorama": "this.panorama_25789C34_3D4C_1A20_41A5_C0AD56C4B00F",
                   "yaw": -8.12,
                   "class": "AdjacentPanorama",
                   "backwardYaw": 32.28,
                   "distance": 1
                  },
                  {
                   "panorama": "this.panorama_255448EA_3D4C_1A21_41C9_3DB54CE3D3DC",
                   "yaw": -137.04,
                   "class": "AdjacentPanorama",
                   "backwardYaw": 1.25,
                   "distance": 1
                  },
                  {
                   "panorama": "this.panorama_25553EB7_3D4C_162F_41C4_ABE3C7F9C5B0",
                   "yaw": -58.36,
                   "class": "AdjacentPanorama",
                   "backwardYaw": -6.66,
                   "distance": 1
                  },
                  {
                   "panorama": "this.panorama_2554CA98_3D4C_3EE1_41C5_3E8526A1D270",
                   "yaw": 39.06,
                   "class": "AdjacentPanorama",
                   "backwardYaw": 109.66,
                   "distance": 1
                  }
                 ],
                 "class": "Panorama",
                 "vfov": 180
                },
                "yaw": 109.66,
                "class": "AdjacentPanorama",
                "backwardYaw": 39.06,
                "distance": 1
               }
              ],
              "class": "Panorama",
              "vfov": 180
             },
             "yaw": 118.2,
             "class": "AdjacentPanorama",
             "backwardYaw": 18.46,
             "distance": 1
            },
            {
             "panorama": "this.panorama_257A7074_3D4C_0A21_41A8_648C8CC16F7F",
             "yaw": 1.25,
             "class": "AdjacentPanorama",
             "backwardYaw": -137.04,
             "distance": 1
            }
           ],
           "class": "Panorama",
           "vfov": 180
          },
          "yaw": -41.83,
          "class": "AdjacentPanorama",
          "backwardYaw": 125.99,
          "distance": 1
         },
         {
          "panorama": "this.panorama_2554CA98_3D4C_3EE1_41C5_3E8526A1D270",
          "yaw": 43.84,
          "class": "AdjacentPanorama",
          "backwardYaw": 131.77,
          "distance": 1
         },
         {
          "panorama": "this.panorama_257A7074_3D4C_0A21_41A8_648C8CC16F7F",
          "yaw": -6.66,
          "class": "AdjacentPanorama",
          "backwardYaw": -58.36,
          "distance": 1
         }
        ],
        "class": "Panorama",
        "vfov": 180
       },
       "yaw": 113.93,
       "class": "AdjacentPanorama",
       "backwardYaw": 1.38,
       "distance": 1
      },
      {
       "panorama": "this.panorama_255448EA_3D4C_1A21_41C9_3DB54CE3D3DC",
       "yaw": 10.93,
       "class": "AdjacentPanorama",
       "backwardYaw": 165.43,
       "distance": 1
      },
      {
       "panorama": "this.panorama_2554CA98_3D4C_3EE1_41C5_3E8526A1D270",
       "yaw": 14.07,
       "class": "AdjacentPanorama",
       "backwardYaw": 165.68,
       "distance": 1
      },
      {
       "panorama": "this.panorama_257A7074_3D4C_0A21_41A8_648C8CC16F7F",
       "yaw": 32.28,
       "class": "AdjacentPanorama",
       "backwardYaw": -8.12,
       "distance": 1
      }
     ],
     "class": "Panorama",
     "vfov": 180
    },
    "yaw": -41.07,
    "class": "AdjacentPanorama",
    "backwardYaw": 138.8,
    "distance": 1
   },
   {
    "panorama": "this.panorama_25553EB7_3D4C_162F_41C4_ABE3C7F9C5B0",
    "yaw": -3.02,
    "class": "AdjacentPanorama",
    "backwardYaw": 152.37,
    "distance": 1
   },
   {
    "panorama": "this.panorama_255448EA_3D4C_1A21_41C9_3DB54CE3D3DC",
    "yaw": -21.48,
    "class": "AdjacentPanorama",
    "backwardYaw": 147.34,
    "distance": 1
   },
   {
    "panorama": "this.panorama_2554CA98_3D4C_3EE1_41C5_3E8526A1D270",
    "yaw": -1.63,
    "class": "AdjacentPanorama",
    "backwardYaw": 157.89,
    "distance": 1
   },
   {
    "panorama": "this.panorama_257A7074_3D4C_0A21_41A8_648C8CC16F7F",
    "yaw": -21.73,
    "class": "AdjacentPanorama",
    "backwardYaw": -11.14,
    "distance": 1
   }
  ],
  "class": "Panorama",
  "vfov": 180
 },
 {
  "touchControlMode": "drag_rotation",
  "displayPlaybackBar": true,
  "buttonCardboardView": {
   "verticalAlign": "middle",
   "paddingRight": 0,
   "mode": "push",
   "paddingLeft": 0,
   "iconURL": "skin/IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37.png",
   "height": "76.75%",
   "maxWidth": 70,
   "width": "17.15%",
   "transparencyActive": false,
   "borderRadius": 0,
   "borderSize": 0,
   "horizontalAlign": "center",
   "minHeight": 1,
   "class": "IconButton",
   "paddingBottom": 0,
   "cursor": "hand",
   "id": "IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37",
   "maxHeight": 70,
   "paddingTop": 0,
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
  "preloadEnabled": false,
  "buttonToggleHotspots": {
   "verticalAlign": "middle",
   "paddingRight": 0,
   "mode": "toggle",
   "toolTipPaddingRight": 6,
   "paddingLeft": 0,
   "iconURL": "skin/IconButton_80E5955A_8E23_BB05_41CA_43DD61DBAEE9.png",
   "height": "76.75%",
   "maxWidth": 70,
   "width": "17.15%",
   "toolTipPaddingBottom": 4,
   "toolTipTextShadowOpacity": 0,
   "transparencyActive": true,
   "toolTipPaddingTop": 4,
   "toolTip": "Hotspots Visibility",
   "toolTipFontSize": 12,
   "toolTipOpacity": 0.7,
   "borderSize": 0,
   "toolTipBorderSize": 1,
   "toolTipShadowOpacity": 1,
   "borderRadius": 0,
   "toolTipShadowVerticalLength": 0,
   "toolTipPaddingLeft": 6,
   "toolTipBorderColor": "#767676",
   "horizontalAlign": "center",
   "toolTipTextShadowColor": "#000000",
   "toolTipFontStyle": "normal",
   "minHeight": 1,
   "class": "IconButton",
   "click": "if(!this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, true, 0, this.effect_CDD059FA_EED0_D223_41DB_70ACFBE986FE, 'showEffect', false) } else if(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, false, 0, this.effect_CDD049FB_EED0_D221_41EB_CA2134B978E0, 'hideEffect', false) }",
   "toolTipBorderRadius": 3,
   "paddingBottom": 0,
   "toolTipTextShadowBlurRadius": 3,
   "cursor": "hand",
   "toolTipFontWeight": "normal",
   "id": "IconButton_80E5955A_8E23_BB05_41CA_43DD61DBAEE9",
   "toolTipBackgroundColor": "#000000",
   "maxHeight": 70,
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
  "mouseControlMode": "drag_acceleration",
  "class": "PanoramaPlayer",
  "gyroscopeVerticalDraggingEnabled": true
 },
 {
  "id": "panorama_2A3212FD_3D4C_0E23_41C0_04B3E12E8F14_camera",
  "initialPosition": {
   "yaw": -17.16,
   "class": "PanoramaCameraPosition",
   "pitch": -3.97
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
 "this.panorama_25553EB7_3D4C_162F_41C4_ABE3C7F9C5B0",
 {
  "id": "panorama_25553EB7_3D4C_162F_41C4_ABE3C7F9C5B0_camera",
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
 "this.panorama_25789C34_3D4C_1A20_41A5_C0AD56C4B00F",
 {
  "id": "panorama_25789C34_3D4C_1A20_41A5_C0AD56C4B00F_camera",
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
 "this.panorama_2554CA98_3D4C_3EE1_41C5_3E8526A1D270",
 {
  "id": "panorama_2554CA98_3D4C_3EE1_41C5_3E8526A1D270_camera",
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
 "this.panorama_255448EA_3D4C_1A21_41C9_3DB54CE3D3DC",
 {
  "id": "panorama_255448EA_3D4C_1A21_41C9_3DB54CE3D3DC_camera",
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
 "this.panorama_257A7074_3D4C_0A21_41A8_648C8CC16F7F",
 {
  "id": "panorama_257A7074_3D4C_0A21_41A8_648C8CC16F7F_camera",
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
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "media": "this.panorama_2A3212FD_3D4C_0E23_41C0_04B3E12E8F14",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_2A3212FD_3D4C_0E23_41C0_04B3E12E8F14_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "media": "this.panorama_25553EB7_3D4C_162F_41C4_ABE3C7F9C5B0",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_25553EB7_3D4C_162F_41C4_ABE3C7F9C5B0_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "media": "this.panorama_25789C34_3D4C_1A20_41A5_C0AD56C4B00F",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_25789C34_3D4C_1A20_41A5_C0AD56C4B00F_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "media": "this.panorama_2554CA98_3D4C_3EE1_41C5_3E8526A1D270",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_2554CA98_3D4C_3EE1_41C5_3E8526A1D270_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "media": "this.panorama_255448EA_3D4C_1A21_41C9_3DB54CE3D3DC",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_255448EA_3D4C_1A21_41C9_3DB54CE3D3DC_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 0)",
    "media": "this.panorama_257A7074_3D4C_0A21_41A8_648C8CC16F7F",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_257A7074_3D4C_0A21_41A8_648C8CC16F7F_camera"
   }
  ]
 },
 {
  "id": "ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 0, 1)",
    "media": "this.panorama_2A3212FD_3D4C_0E23_41C0_04B3E12E8F14",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_2A3212FD_3D4C_0E23_41C0_04B3E12E8F14_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 1, 2)",
    "media": "this.panorama_25553EB7_3D4C_162F_41C4_ABE3C7F9C5B0",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_25553EB7_3D4C_162F_41C4_ABE3C7F9C5B0_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 2, 3)",
    "media": "this.panorama_25789C34_3D4C_1A20_41A5_C0AD56C4B00F",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_25789C34_3D4C_1A20_41A5_C0AD56C4B00F_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 3, 4)",
    "media": "this.panorama_2554CA98_3D4C_3EE1_41C5_3E8526A1D270",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_2554CA98_3D4C_3EE1_41C5_3E8526A1D270_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 4, 5)",
    "media": "this.panorama_255448EA_3D4C_1A21_41C9_3DB54CE3D3DC",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_255448EA_3D4C_1A21_41C9_3DB54CE3D3DC_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 5, 0)",
    "media": "this.panorama_257A7074_3D4C_0A21_41A8_648C8CC16F7F",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_257A7074_3D4C_0A21_41A8_648C8CC16F7F_camera"
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
  "id": "playList_104FB307_3D3C_0FE0_41BC_4056FB6C8001",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.registerKey('visibility_Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB', this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB.get('visible')); this.registerKey('visibility_ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472', this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472.get('visible')); this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setComponentVisibility(this.Container_86F3A56C_8E22_5B1D_41CA_9CE53436FE56, false, -1, this.effect_22973FB1_2DD9_0423_41C1_E1E03953DCCE, 'hideEffect', false); this.setComponentVisibility(this.Container_807F782A_8E23_A905_41DE_623121285A09, false, -1, this.effect_22974FB2_2DD9_0421_41BA_84205292D043, 'hideEffect', false); this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, false, -1, this.effect_3876CD6E_2DF9_0421_41C1_F0AB7F279824, 'hideEffect', false); this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, false, -1, this.effect_22899FB3_2DD9_0427_41BB_298AEB3D2851, 'hideEffect', false); this.setComponentVisibility(this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB, true, -1, this.effect_2289DFB3_2DD9_0427_41AE_A35795880BA7, 'showEffect', false)",
    "media": "this.video_210B394E_3D54_1A60_41A3_CB42BEC0D3EC",
    "player": "this.MainViewerVideoPlayer",
    "class": "VideoPlayListItem",
    "end": "this.setComponentVisibility(this.Container_86F3A56C_8E22_5B1D_41CA_9CE53436FE56, true, -1, this.effect_22975FB2_2DD9_0421_41B4_7A2443082F44, 'showEffect', false); this.setComponentVisibility(this.Container_86F3A56C_8E22_5B1D_41CA_9CE53436FE56, true, -1, this.effect_22975FB2_2DD9_0421_41B4_7A2443082F44, 'showEffect', false); this.setComponentVisibility(this.Container_807F782A_8E23_A905_41DE_623121285A09, true, -1, this.effect_22977FB2_2DD9_0421_41C1_F53B037346DF, 'showEffect', false); this.setComponentVisibility(this.Container_807F782A_8E23_A905_41DE_623121285A09, true, -1, this.effect_22977FB2_2DD9_0421_41C1_F53B037346DF, 'showEffect', false); if(this.existsKey('visibility_ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472')){ if(this.getKey('visibility_ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472')) { this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, true, -1, this.effect_1334344B_3D3C_0A67_41C4_0A566938A3BC, 'showEffect', false); } else { this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, false, -1, this.effect_3876CD6E_2DF9_0421_41C1_F0AB7F279824, 'hideEffect', false); } }; this.unregisterKey('visibility_ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472'); if(this.existsKey('visibility_Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB')){ if(this.getKey('visibility_Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB')) { this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, true, -1, this.effect_1334044C_3D3C_0A61_41B8_C440FF154C79, 'showEffect', false); } else { this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, false, -1, this.effect_22899FB3_2DD9_0427_41BB_298AEB3D2851, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB'); this.setComponentVisibility(this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB, false, -1, this.effect_2289EFB3_2DD9_0427_41C0_ACB5A72AE218, 'hideEffect', false); this.setComponentVisibility(this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB, false, -1, this.effect_2289EFB3_2DD9_0427_41C0_ACB5A72AE218, 'hideEffect', false)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_104FB307_3D3C_0FE0_41BC_4056FB6C8001, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_104FB307_3D3C_0FE0_41BC_4056FB6C8001, 0, this.video_210B394E_3D54_1A60_41A3_CB42BEC0D3EC)"
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
  "id": "playList_104F8307_3D3C_0FE0_41C4_982D0E78C367",
  "class": "PlayList",
  "items": [
   {
    "player": "this.ViewerAreaLabeled_9FD7235A_96CD_9045_41D9_23A3BCBDB1C6PhotoAlbumPlayer",
    "class": "PhotoAlbumPlayListItem",
    "media": "this.album_1AE8DEB7_0EE7_8CC7_4198_F5B75788CCF6",
    "begin": "this.loopAlbum(this.playList_104F8307_3D3C_0FE0_41C4_982D0E78C367, 0)"
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
  "id": "ImageResource_2F68CE66_3D54_1621_41C2_54B4E6D3FD7B",
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
  "easing": "quad_in",
  "id": "effect_85A2AAA4_9245_B8B0_41CE_5BE27798090E",
  "class": "FadeInEffect",
  "duration": 300
 },
 {
  "easing": "quad_out",
  "id": "effect_85A28AA4_9245_B8B0_41A1_5761D51DA5D1",
  "class": "FadeOutEffect",
  "duration": 300
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
  "id": "effect_CD2B8C48_EED0_726F_41E4_49557D18059C",
  "class": "FadeInEffect",
  "duration": 200
 },
 {
  "easing": "linear",
  "id": "effect_CD2BEC48_EED0_726F_41DF_F342BE2B4EF0",
  "class": "FadeOutEffect",
  "duration": 200
 },
 {
  "easing": "linear",
  "id": "effect_9B0AF4E2_96C4_F045_41D3_0E00FEE03A15",
  "class": "FadeOutEffect",
  "duration": 200
 },
 {
  "id": "camera_1037331F_3D3C_0FE0_41B9_BDCB0CAC462F",
  "initialPosition": {
   "yaw": 158.52,
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
  "id": "camera_10288329_3D3C_0E20_41A4_236139453C68",
  "initialPosition": {
   "yaw": -169.07,
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
  "id": "camera_102CD333_3D3C_0E20_41CC_AB2C92816E08",
  "initialPosition": {
   "yaw": 138.17,
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
  "id": "camera_1026833D_3D3C_0E20_41B5_3A0D58E69D6E",
  "initialPosition": {
   "yaw": -161.54,
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
  "id": "camera_101A7347_3D3C_0E60_41BA_5FAA0286E8A4",
  "initialPosition": {
   "yaw": 42.96,
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
  "id": "camera_101CC352_3D3C_0E61_41C1_1E6C1BEDC40F",
  "initialPosition": {
   "yaw": 178.37,
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
  "id": "camera_1011C35D_3D3C_0E60_41C0_4250006F1965",
  "initialPosition": {
   "yaw": -165.93,
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
  "id": "camera_10081366_3D3C_0E21_41CA_3F96323C44EC",
  "initialPosition": {
   "yaw": -61.8,
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
  "id": "camera_10035371_3D3C_0E23_41CB_939E8B77676A",
  "initialPosition": {
   "yaw": -136.16,
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
  "id": "camera_1005C37A_3D3C_0E21_41CB_30FBB75D9FA8",
  "initialPosition": {
   "yaw": -140.94,
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
  "id": "camera_10FC2384_3D3C_0EE1_41AC_E1ADAAAB7231",
  "initialPosition": {
   "yaw": -41.2,
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
  "id": "camera_10F6C38E_3D3C_0EE1_4195_23CC307B6B56",
  "initialPosition": {
   "yaw": -27.63,
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
  "id": "camera_10EC9398_3D3C_0EE1_41A0_173D93DF5035",
  "initialPosition": {
   "yaw": -32.66,
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
  "id": "camera_10E443A3_3D3C_0E27_41C9_AEC5494EE76C",
  "initialPosition": {
   "yaw": -22.11,
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
  "id": "camera_10D303AC_3D3C_0E21_41B0_CDB0E5A6690F",
  "initialPosition": {
   "yaw": 168.86,
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
  "id": "camera_10CE23B6_3D3C_0E21_41CE_4D3FA0975E1F",
  "initialPosition": {
   "yaw": 138.93,
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
  "id": "camera_10C4B3C0_3D3C_0E61_41A2_684B62C066A6",
  "initialPosition": {
   "yaw": -178.62,
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
  "id": "camera_10B273CC_3D3C_0E61_41C2_974FAEA53CAF",
  "initialPosition": {
   "yaw": -14.57,
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
  "id": "camera_10A8D3DC_3D3C_0E61_41C4_BA51A825DB14",
  "initialPosition": {
   "yaw": -14.32,
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
  "id": "camera_10A7B3E7_3D3C_0E2F_4189_27BEFCDF1E82",
  "initialPosition": {
   "yaw": 171.88,
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
  "id": "camera_109CD3F0_3D3C_0E21_41AC_553B0481BDB7",
  "initialPosition": {
   "yaw": 176.98,
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
  "id": "camera_108B33FA_3D3C_0E26_419A_9C4405D33940",
  "initialPosition": {
   "yaw": -66.07,
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
  "id": "camera_1087F405_3D3C_09E3_41C6_87912A5EED92",
  "initialPosition": {
   "yaw": -54.01,
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
  "id": "camera_137D240F_3D3C_09FF_41BE_91859BD327B4",
  "initialPosition": {
   "yaw": -48.23,
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
  "id": "camera_13693419_3D3C_09E3_41CD_3DD7B9D652C3",
  "initialPosition": {
   "yaw": 121.64,
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
  "id": "camera_13649422_3D3C_0A21_4196_A133CB13F823",
  "initialPosition": {
   "yaw": 158.27,
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
  "id": "camera_1350B42C_3D3C_0A21_41C3_41E593FF8810",
  "initialPosition": {
   "yaw": -147.72,
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
  "id": "camera_134C9437_3D3C_0A2F_41C8_FC29B1CFA99E",
  "initialPosition": {
   "yaw": -178.75,
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
  "id": "camera_133A2440_3D3C_0A61_41B8_583A86716DA2",
  "initialPosition": {
   "yaw": 173.34,
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
  "id": "camera_1336D44A_3D3C_0A61_4181_6F7523BB6175",
  "initialPosition": {
   "yaw": -70.34,
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
  "id": "effect_1334344B_3D3C_0A67_41C4_0A566938A3BC",
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
  "id": "effect_1334044C_3D3C_0A61_41B8_C440FF154C79",
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
  "autoplay": true,
  "id": "audio_A83B2F1A_B250_204B_41B2_61A870B2B428",
  "loop": true,
  "audio": {
   "mp3Url": "media/audio_A83B2F1A_B250_204B_41B2_61A870B2B428.mp3",
   "oggUrl": "media/audio_A83B2F1A_B250_204B_41B2_61A870B2B428.ogg",
   "id": "audioresource_1D15163A_0EEB_BFC9_419F_EF5F7074EFB1",
   "class": "AudioResource"
  },
  "maximumAngle": 231.16,
  "yaw": -17.74,
  "class": "DirectionalPanoramaAudio",
  "pitch": -7.7
 },
 {
  "autoplay": true,
  "id": "audio_A875C8FE_B250_61CA_41D2_1BDD70C9887A",
  "loop": true,
  "audio": {
   "mp3Url": "media/audio_A875C8FE_B250_61CA_41D2_1BDD70C9887A.mp3",
   "oggUrl": "media/audio_A875C8FE_B250_61CA_41D2_1BDD70C9887A.ogg",
   "id": "audioresource_A84F2D34_B270_605F_41E2_4CF67AB762D2",
   "class": "AudioResource"
  },
  "maximumAngle": 97.14,
  "yaw": 4.55,
  "class": "DirectionalPanoramaAudio",
  "pitch": -18.69
 },
 {
  "autoplay": true,
  "id": "audio_A87513BA_B273_E04A_41AA_0102CD2EF1BE",
  "loop": true,
  "audio": {
   "mp3Url": "media/audio_A87513BA_B273_E04A_41AA_0102CD2EF1BE.mp3",
   "oggUrl": "media/audio_A87513BA_B273_E04A_41AA_0102CD2EF1BE.ogg",
   "id": "audioresource_A83107F8_B270_2FD6_41E2_DAE1F661A577",
   "class": "AudioResource"
  },
  "maximumAngle": 61.89,
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
  "id": "audio_A8213A22_B270_E07A_41D5_F14349BD0E04",
  "loop": true,
  "audio": "this.audioresource_A83107F8_B270_2FD6_41E2_DAE1F661A577",
  "maximumAngle": 222.06,
  "yaw": 0,
  "class": "DirectionalPanoramaAudio",
  "pitch": 0
 },
 {
  "autoplay": true,
  "id": "audio_A8284F56_B270_60DB_41E0_27608EB2E0B9",
  "loop": true,
  "audio": "this.audioresource_A83107F8_B270_2FD6_41E2_DAE1F661A577",
  "maximumAngle": 265.52,
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
  "id": "audio_1D15363A_0EEB_BFC9_4193_928F3B1A384C",
  "loop": true,
  "audio": "this.audioresource_1D15163A_0EEB_BFC9_419F_EF5F7074EFB1",
  "maximumAngle": 360,
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
  "toolTipOpacity": 0.7,
  "playbackBarBorderColor": "#FFFFFF",
  "toolTipShadowOpacity": 1,
  "playbackBarHeight": 10,
  "toolTipShadowVerticalLength": 0,
  "playbackBarHeadWidth": 6,
  "toolTipTextShadowColor": "#000000",
  "toolTipFontStyle": "normal",
  "minHeight": 50,
  "class": "ViewerArea",
  "playbackBarProgressBorderSize": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "progressBottom": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "paddingBottom": 0,
  "progressBorderSize": 0,
  "playbackBarHeadShadowHorizontalLength": 0,
  "toolTipBackgroundColor": "#000000",
  "progressBarBorderSize": 0,
  "playbackBarRight": 0,
  "progressBarBorderRadius": 0,
  "paddingTop": 0,
  "transitionMode": "blending",
  "playbackBarProgressBorderRadius": 0,
  "toolTipShadowSpread": 0,
  "playbackBarOpacity": 1,
  "toolTipShadowColor": "#333333",
  "toolTipShadowBlurRadius": 3,
  "playbackBarHeadShadow": true,
  "progressBackgroundOpacity": 1,
  "toolTipFontColor": "#606060",
  "minWidth": 100,
  "playbackBarBorderRadius": 0,
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
  "playbackBarBorderSize": 0,
  "toolTipBorderRadius": 3,
  "playbackBarHeadShadowOpacity": 0.7,
  "top": 0,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadShadowColor": "#000000",
  "toolTipFontWeight": "normal",
  "id": "MainViewer",
  "toolTipTextShadowBlurRadius": 3,
  "progressBarBorderColor": "#000000",
  "toolTipShadowHorizontalLength": 0,
  "playbackBarHeadOpacity": 1,
  "playbackBarHeadBorderSize": 0,
  "progressBackgroundColorDirection": "vertical",
  "playbackBarHeadShadowVerticalLength": 0,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "progressHeight": 10,
  "playbackBarBottom": 5,
  "progressBorderColor": "#000000",
  "left": 0,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "toolTipFontFamily": "Arial",
  "progressOpacity": 1
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
  "paddingRight": 0,
  "scrollBarColor": "#000000",
  "height": "9%",
  "width": "25%",
  "borderRadius": 5,
  "paddingLeft": 0,
  "borderSize": 0,
  "gap": 50,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "contentOpaque": false,
  "horizontalAlign": "center",
  "minHeight": 55,
  "class": "Container",
  "layout": "horizontal",
  "paddingBottom": 0,
  "bottom": "3%",
  "id": "Container_86F3A56C_8E22_5B1D_41CA_9CE53436FE56",
  "backgroundColorRatios": [
   0,
   1
  ],
  "paddingTop": 0,
  "left": "3%",
  "backgroundOpacity": 0.25,
  "minWidth": 350,
  "children": [
   {
    "verticalAlign": "middle",
    "paddingRight": 0,
    "mode": "push",
    "toolTipPaddingRight": 6,
    "paddingLeft": 0,
    "iconURL": "skin/IconButton_87577B8F_8E22_AF1B_41CC_79EB87AE6DED.png",
    "height": "76%",
    "maxWidth": 70,
    "width": "22%",
    "toolTipPaddingBottom": 4,
    "toolTipTextShadowOpacity": 0,
    "transparencyActive": true,
    "toolTipPaddingTop": 4,
    "toolTip": "Open Info",
    "toolTipFontSize": 12,
    "toolTipOpacity": 0.7,
    "borderSize": 0,
    "toolTipBorderSize": 1,
    "toolTipShadowOpacity": 1,
    "borderRadius": 0,
    "toolTipShadowVerticalLength": 0,
    "toolTipPaddingLeft": 6,
    "toolTipBorderColor": "#767676",
    "horizontalAlign": "center",
    "rollOverIconURL": "skin/IconButton_87577B8F_8E22_AF1B_41CC_79EB87AE6DED_rollover.png",
    "toolTipTextShadowColor": "#000000",
    "toolTipFontStyle": "normal",
    "minHeight": 1,
    "class": "IconButton",
    "click": "this.showPopupImage(this.ImageResource_2F68CE66_3D54_1621_41C2_54B4E6D3FD7B, null, '85%', '85%', this.FadeInEffect_8ED05F70_96C4_F045_41DC_2AB82A556F92, this.FadeOutEffect_8ED06F70_96C4_F045_41DA_C74400CF7B15, {'rollOverIconWidth':25,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorDirection':'vertical','rollOverBackgroundColor':['#000000','#000000','#000000'],'pressedBackgroundColor':['#000000','#000000','#000000'],'iconHeight':25,'rollOverIconColor':'#52B7EF','backgroundColor':['#000000','#000000','#000000'],'rollOverBackgroundColorDirection':'vertical','pressedBorderSize':0,'iconColor':'#FFFFFF','backgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':10,'paddingBottom':10,'pressedIconLineWidth':3,'borderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':3,'pressedBorderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundOpacity':0.3,'paddingTop':10,'pressedIconColor':'#CCCCCC','paddingLeft':10,'pressedBackgroundColorDirection':'vertical','borderSize':0,'pressedIconWidth':25,'pressedIconHeight':25,'backgroundOpacity':0.15,'rollOverBorderColor':'#000000','rollOverBackgroundOpacity':0.5,'iconWidth':25,'rollOverIconHeight':25,'rollOverIconLineWidth':3}, null, null, false)",
    "toolTipBorderRadius": 3,
    "paddingBottom": 0,
    "toolTipTextShadowBlurRadius": 3,
    "cursor": "hand",
    "toolTipFontWeight": "normal",
    "id": "IconButton_87577B8F_8E22_AF1B_41CC_79EB87AE6DED",
    "toolTipBackgroundColor": "#000000",
    "maxHeight": 70,
    "paddingTop": 0,
    "toolTipShadowHorizontalLength": 0,
    "toolTipShadowSpread": 0,
    "toolTipShadowColor": "#333333",
    "toolTipShadowBlurRadius": 3,
    "backgroundOpacity": 0,
    "toolTipFontColor": "#606060",
    "minWidth": 1,
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
    "height": "76%",
    "maxWidth": 70,
    "width": "22%",
    "toolTipPaddingBottom": 4,
    "toolTipTextShadowOpacity": 0,
    "transparencyActive": true,
    "toolTipPaddingTop": 4,
    "toolTip": "Play Video",
    "toolTipFontSize": 12,
    "toolTipOpacity": 0.7,
    "borderSize": 0,
    "toolTipBorderSize": 1,
    "toolTipShadowOpacity": 1,
    "borderRadius": 0,
    "toolTipShadowVerticalLength": 0,
    "toolTipPaddingLeft": 6,
    "toolTipBorderColor": "#767676",
    "horizontalAlign": "center",
    "rollOverIconURL": "skin/IconButton_213ED70C_2DB2_E6C5_41B6_0CCE6C77E889_rollover.png",
    "toolTipTextShadowColor": "#000000",
    "toolTipFontStyle": "normal",
    "minHeight": 1,
    "class": "IconButton",
    "click": "this.setMediaBehaviour(this.playList_104FB307_3D3C_0FE0_41BC_4056FB6C8001, 0); this.MainViewerVideoPlayer.play()",
    "toolTipBorderRadius": 3,
    "paddingBottom": 0,
    "toolTipTextShadowBlurRadius": 3,
    "cursor": "hand",
    "toolTipFontWeight": "normal",
    "id": "IconButton_213ED70C_2DB2_E6C5_41B6_0CCE6C77E889",
    "toolTipBackgroundColor": "#000000",
    "maxHeight": 70,
    "paddingTop": 0,
    "toolTipShadowHorizontalLength": 0,
    "toolTipShadowSpread": 0,
    "toolTipShadowColor": "#333333",
    "toolTipShadowBlurRadius": 3,
    "backgroundOpacity": 0,
    "toolTipFontColor": "#606060",
    "minWidth": 1,
    "toolTipFontFamily": "Arial",
    "shadow": false
   },
   "this.IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED",
   {
    "verticalAlign": "middle",
    "paddingRight": 0,
    "mode": "toggle",
    "toolTipPaddingRight": 6,
    "paddingLeft": 0,
    "iconURL": "skin/IconButton_843BBEF5_8E22_690F_419D_28CBDD771ACC.png",
    "height": "76%",
    "maxWidth": 70,
    "width": "22%",
    "toolTipPaddingBottom": 4,
    "toolTipTextShadowOpacity": 0,
    "transparencyActive": true,
    "toolTipPaddingTop": 4,
    "toolTip": "Panorama List",
    "toolTipFontSize": 12,
    "toolTipOpacity": 0.7,
    "borderSize": 0,
    "toolTipBorderSize": 1,
    "toolTipShadowOpacity": 1,
    "borderRadius": 0,
    "toolTipShadowVerticalLength": 0,
    "toolTipPaddingLeft": 6,
    "toolTipBorderColor": "#767676",
    "horizontalAlign": "center",
    "toolTipTextShadowColor": "#000000",
    "toolTipFontStyle": "normal",
    "minHeight": 1,
    "class": "IconButton",
    "click": "if(!this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472.get('visible')){ this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, true, 0, this.effect_85A2AAA4_9245_B8B0_41CE_5BE27798090E, 'showEffect', false) } else if(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472.get('visible')){ this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, false, 0, this.effect_85A28AA4_9245_B8B0_41A1_5761D51DA5D1, 'hideEffect', false) }",
    "toolTipBorderRadius": 3,
    "paddingBottom": 0,
    "toolTipTextShadowBlurRadius": 3,
    "cursor": "hand",
    "toolTipFontWeight": "normal",
    "id": "IconButton_843BBEF5_8E22_690F_419D_28CBDD771ACC",
    "toolTipBackgroundColor": "#000000",
    "maxHeight": 70,
    "paddingTop": 0,
    "toolTipShadowHorizontalLength": 0,
    "toolTipShadowSpread": 0,
    "toolTipShadowColor": "#333333",
    "toolTipShadowBlurRadius": 3,
    "pressedIconURL": "skin/IconButton_843BBEF5_8E22_690F_419D_28CBDD771ACC_pressed.png",
    "backgroundOpacity": 0,
    "toolTipFontColor": "#606060",
    "minWidth": 1,
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
  "height": "7.957%",
  "width": "25%",
  "borderRadius": 5,
  "borderSize": 0,
  "gap": 1,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "contentOpaque": false,
  "horizontalAlign": "right",
  "minHeight": 55,
  "class": "Container",
  "layout": "horizontal",
  "paddingBottom": 0,
  "bottom": "3%",
  "id": "Container_807F782A_8E23_A905_41DE_623121285A09",
  "paddingTop": 0,
  "backgroundOpacity": 0,
  "minWidth": 300,
  "right": 25,
  "children": [
   {
    "scrollBarColor": "#000000",
    "overflow": "visible",
    "scrollBarOpacity": 0.5,
    "paddingRight": 0,
    "verticalAlign": "middle",
    "paddingLeft": 0,
    "height": "100%",
    "width": "75.269%",
    "borderRadius": 0,
    "borderSize": 0,
    "contentOpaque": false,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "horizontalAlign": "right",
    "minHeight": 1,
    "class": "Container",
    "layout": "horizontal",
    "visible": false,
    "paddingBottom": 0,
    "id": "Container_80D3CF90_8E26_E705_41E0_E47025A2C106",
    "paddingTop": 0,
    "gap": 10,
    "backgroundOpacity": 0,
    "minWidth": 1,
    "children": [
     "this.IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37",
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "mode": "toggle",
      "toolTipPaddingRight": 6,
      "paddingLeft": 0,
      "iconURL": "skin/IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA.png",
      "height": "76.75%",
      "maxWidth": 70,
      "width": "17.15%",
      "toolTipPaddingBottom": 4,
      "toolTipTextShadowOpacity": 0,
      "transparencyActive": true,
      "toolTipPaddingTop": 4,
      "toolTip": "Full Screen",
      "toolTipFontSize": 12,
      "toolTipOpacity": 0.7,
      "borderSize": 0,
      "toolTipBorderSize": 1,
      "toolTipShadowOpacity": 1,
      "borderRadius": 0,
      "toolTipShadowVerticalLength": 0,
      "toolTipPaddingLeft": 6,
      "toolTipBorderColor": "#767676",
      "horizontalAlign": "center",
      "toolTipTextShadowColor": "#000000",
      "toolTipFontStyle": "normal",
      "minHeight": 1,
      "class": "IconButton",
      "click": "if(!this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, true, 0, null, null, false) } else if(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, false, 0, null, null, false) }",
      "toolTipBorderRadius": 3,
      "paddingBottom": 0,
      "toolTipTextShadowBlurRadius": 3,
      "cursor": "hand",
      "toolTipFontWeight": "normal",
      "id": "IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA",
      "toolTipBackgroundColor": "#000000",
      "maxHeight": 70,
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
      "height": "76.75%",
      "maxWidth": 70,
      "width": "17.15%",
      "toolTipPaddingBottom": 4,
      "toolTipTextShadowOpacity": 0,
      "transparencyActive": true,
      "toolTipPaddingTop": 4,
      "toolTip": "Audio On/Off",
      "toolTipFontSize": 12,
      "toolTipOpacity": 0.7,
      "borderSize": 0,
      "toolTipBorderSize": 1,
      "toolTipShadowOpacity": 1,
      "borderRadius": 0,
      "toolTipShadowVerticalLength": 0,
      "toolTipPaddingLeft": 6,
      "toolTipBorderColor": "#767676",
      "horizontalAlign": "center",
      "toolTipTextShadowColor": "#000000",
      "toolTipFontStyle": "normal",
      "minHeight": 1,
      "class": "IconButton",
      "click": "if(!this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, true, 0, this.effect_CACBF85D_EED0_7261_41DB_A3B65ECE0D5D, 'showEffect', false) } else if(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, false, 0, this.effect_CACBC85D_EED0_7261_41BE_8CF4C3A8170C, 'hideEffect', false) }",
      "toolTipBorderRadius": 3,
      "paddingBottom": 0,
      "toolTipTextShadowBlurRadius": 3,
      "cursor": "hand",
      "toolTipFontWeight": "normal",
      "id": "IconButton_8105A313_8E22_BF0B_41E1_331C6035A930",
      "toolTipBackgroundColor": "#000000",
      "maxHeight": 70,
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
    "scrollBarColor": "#000000",
    "overflow": "visible",
    "scrollBarOpacity": 0.5,
    "paddingRight": 0,
    "verticalAlign": "middle",
    "paddingLeft": 0,
    "height": "100%",
    "width": "15.59%",
    "borderRadius": 0,
    "borderSize": 0,
    "contentOpaque": false,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "horizontalAlign": "center",
    "minHeight": 1,
    "class": "Container",
    "layout": "horizontal",
    "paddingBottom": 0,
    "id": "Container_80B2155B_8E3F_DB3B_41A1_77496D90E2FB",
    "paddingTop": 0,
    "gap": 10,
    "backgroundOpacity": 0,
    "minWidth": 1,
    "children": [
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "mode": "toggle",
      "toolTipPaddingRight": 6,
      "paddingLeft": 0,
      "iconURL": "skin/IconButton_811D89E1_8E3D_AB07_4191_94003C90B2FF.png",
      "height": "76.75%",
      "maxWidth": 70,
      "width": "82.76%",
      "toolTipPaddingBottom": 4,
      "toolTipTextShadowOpacity": 0,
      "transparencyActive": true,
      "toolTipPaddingTop": 4,
      "toolTip": "Settings",
      "toolTipFontSize": 12,
      "toolTipOpacity": 0.7,
      "borderSize": 0,
      "toolTipBorderSize": 1,
      "toolTipShadowOpacity": 1,
      "borderRadius": 0,
      "toolTipShadowVerticalLength": 0,
      "toolTipPaddingLeft": 6,
      "toolTipBorderColor": "#767676",
      "horizontalAlign": "center",
      "toolTipTextShadowColor": "#000000",
      "toolTipFontStyle": "normal",
      "minHeight": 1,
      "class": "IconButton",
      "click": "if(!this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, true, 0, this.effect_CD2B8C48_EED0_726F_41E4_49557D18059C, 'showEffect', false) } else if(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, false, 0, this.effect_CD2BEC48_EED0_726F_41DF_F342BE2B4EF0, 'hideEffect', false) }",
      "toolTipBorderRadius": 3,
      "paddingBottom": 0,
      "toolTipTextShadowBlurRadius": 3,
      "cursor": "hand",
      "toolTipFontWeight": "normal",
      "id": "IconButton_811D89E1_8E3D_AB07_4191_94003C90B2FF",
      "toolTipBackgroundColor": "#000000",
      "maxHeight": 70,
      "paddingTop": 0,
      "toolTipShadowHorizontalLength": 0,
      "toolTipShadowSpread": 0,
      "toolTipShadowColor": "#333333",
      "toolTipShadowBlurRadius": 3,
      "backgroundOpacity": 0,
      "toolTipFontColor": "#606060",
      "minWidth": 1,
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
  "verticalAlign": "top",
  "itemBackgroundColorRatios": [],
  "backgroundColor": [
   "#000000"
  ],
  "itemLabelFontFamily": "Arial",
  "paddingRight": 15,
  "maxWidth": 150,
  "itemThumbnailHeight": 80,
  "paddingLeft": 15,
  "gap": 12,
  "selectedItemBackgroundColor": [],
  "scrollBarWidth": 7,
  "scrollBarMargin": 4,
  "playList": "this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist",
  "horizontalAlign": "left",
  "itemHorizontalAlign": "center",
  "minHeight": 1,
  "class": "ThumbnailList",
  "layout": "vertical",
  "selectedItemLabelFontStyle": "italic",
  "rollOverItemLabelFontWeight": "bold",
  "itemMode": "normal",
  "backgroundColorRatios": [
   0
  ],
  "paddingBottom": 20,
  "rollOverItemLabelFontColor": "#FFFFFF",
  "itemLabelFontColor": "#FFFFFF",
  "itemPaddingBottom": 3,
  "paddingTop": 20,
  "selectedItemLabelFontColor": "#FFFFFF",
  "itemThumbnailScaleMode": "fit_outside",
  "selectedItemLabelTextDecoration": "underline",
  "minWidth": 1,
  "itemThumbnailOpacity": 1,
  "itemLabelFontWeight": "normal",
  "itemThumbnailBorderRadius": 25,
  "rollOverItemLabelTextDecoration": "underline",
  "backgroundColorDirection": "vertical",
  "scrollBarVisible": "rollOver",
  "scrollBarOpacity": 1,
  "scrollBarColor": "#52B7EF",
  "itemLabelTextDecoration": "none",
  "itemThumbnailShadow": false,
  "itemPaddingRight": 3,
  "itemLabelFontStyle": "normal",
  "height": "82.127%",
  "selectedItemThumbnailShadowBlurRadius": 10,
  "itemThumbnailWidth": 80,
  "borderRadius": 3,
  "selectedItemThumbnailShadow": true,
  "itemLabelHorizontalAlign": "center",
  "itemPaddingLeft": 3,
  "selectedItemLabelFontSize": 12,
  "borderSize": 0,
  "itemBorderRadius": 0,
  "selectedItemThumbnailShadowOpacity": 0.73,
  "selectedItemBorderSize": 0,
  "itemPaddingTop": 3,
  "selectedItemBorderRadius": 0,
  "top": "3.5%",
  "itemVerticalAlign": "middle",
  "itemBackgroundOpacity": 0,
  "id": "ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472",
  "selectedItemBackgroundColorRatios": [],
  "itemLabelGap": 9,
  "selectedItemLabelFontWeight": "bold",
  "itemBackgroundColorDirection": "vertical",
  "itemOpacity": 1,
  "itemBackgroundColor": [],
  "itemLabelFontSize": 12,
  "selectedItemBackgroundOpacity": 0,
  "selectedItemThumbnailShadowHorizontalLength": 0,
  "itemLabelPosition": "bottom",
  "selectedItemThumbnailShadowVerticalLength": 0,
  "backgroundOpacity": 0.25,
  "right": "2.5%",
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
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "contentOpaque": false,
  "horizontalAlign": "left",
  "minHeight": 1,
  "top": "0%",
  "layout": "absolute",
  "visible": false,
  "paddingBottom": 0,
  "class": "Container",
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
  "rollOverIconURL": "skin/IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB_rollover.png",
  "horizontalAlign": "center",
  "minHeight": 40,
  "top": "2%",
  "visible": false,
  "paddingBottom": 0,
  "class": "IconButton",
  "cursor": "hand",
  "id": "IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB",
  "maxHeight": 50,
  "paddingTop": 0,
  "backgroundOpacity": 0,
  "minWidth": 40,
  "right": "1%",
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
  "minHeight": 0,
  "top": 0,
  "visible": false,
  "paddingBottom": 0,
  "class": "UIComponent",
  "bottom": 0,
  "id": "veilPopupPanorama",
  "backgroundColorRatios": [
   0
  ],
  "paddingTop": 0,
  "showEffect": {
   "easing": "cubic_in_out",
   "duration": 350,
   "class": "FadeInEffect"
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
  "scaleMode": "custom",
  "minHeight": 0,
  "top": 0,
  "visible": false,
  "paddingBottom": 0,
  "class": "ZoomImage",
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
  "fontStyle": "normal",
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
  "gap": 5,
  "horizontalAlign": "center",
  "fontColor": "#FFFFFF",
  "minHeight": 0,
  "top": 10,
  "fontWeight": "normal",
  "visible": false,
  "paddingBottom": 5,
  "borderColor": "#000000",
  "class": "CloseButton",
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
  "showEffect": {
   "easing": "cubic_in_out",
   "duration": 350,
   "class": "FadeInEffect"
  },
  "fontFamily": "Arial",
  "layout": "horizontal",
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
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "buttonToggleMute": "this.IconButton_8105A313_8E22_BF0B_41E1_331C6035A930",
 "vrPolyfillScale": 0.5,
 "minHeight": 20,
 "class": "Player",
 "layout": "absolute",
 "paddingBottom": 0,
 "id": "rootPlayer",
 "scripts": {
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "unregisterKey": function(key){  delete window[key]; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "registerKey": function(key, value){  window[key] = value; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio) delete audios[audio.get('id')]; } if(audio) audio.stop(); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getKey": function(key){  return window[key]; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "existsKey": function(key){  return key in window; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; }
 },
 "backgroundPreloadEnabled": true,
 "paddingTop": 0,
 "gap": 10,
 "start": "this.playAudioList([this.audio_15B68E59_3D54_1663_4199_CC0245D4ECA1]); this.syncPlaylists([this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA].forEach(function(component) { component.set('visible', false); }) }",
 "minWidth": 20,
 "shadow": false,
 "buttonToggleFullscreen": "this.IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA",
 "scrollBarVisible": "rollOver"
})