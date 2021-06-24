TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "viewerArea": "this.MainViewer",
  "class": "VideoPlayer",
  "buttonStop": [
   {
    "class": "IconButton",
    "paddingRight": 0,
    "verticalAlign": "middle",
    "mode": "push",
    "maxHeight": 50,
    "height": "5.48%",
    "width": "3.03%",
    "paddingLeft": 0,
    "transparencyActive": true,
    "borderSize": 0,
    "borderRadius": 0,
    "horizontalAlign": "center",
    "minWidth": 50,
    "click": "this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, false, 0, this.effect_9B0AF4E2_96C4_F045_41D3_0E00FEE03A15, 'hideEffect', false)",
    "maxWidth": 50,
    "top": "2%",
    "minHeight": 50,
    "cursor": "hand",
    "paddingBottom": 0,
    "shadow": false,
    "id": "IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4",
    "backgroundOpacity": 0,
    "paddingTop": 0,
    "iconURL": "skin/IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4.png",
    "right": "2%",
    "rollOverIconURL": "skin/IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4_rollover.png"
   },
   "this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB"
  ],
  "displayPlaybackBar": true,
  "id": "MainViewerVideoPlayer",
  "buttonPlay": {
   "toolTipPaddingRight": 6,
   "class": "IconButton",
   "toolTipBorderRadius": 3,
   "paddingRight": 0,
   "toolTipShadowOpacity": 1,
   "verticalAlign": "middle",
   "mode": "push",
   "maxHeight": 80,
   "height": "100%",
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
   "minWidth": 50,
   "click": "this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, true, 0, this.effect_98AADBB0_96C5_F0C5_41B2_1C4D08E503DB, 'showEffect', false); this.playList_27D6436D_3EB1_4B55_41C2_AA9198D858AA.set('selectedIndex', 0)",
   "toolTipTextShadowBlurRadius": 3,
   "toolTipOpacity": 0.7,
   "toolTipShadowVerticalLength": 0,
   "toolTipPaddingBottom": 4,
   "maxWidth": 80,
   "shadow": false,
   "minHeight": 50,
   "cursor": "hand",
   "paddingBottom": 0,
   "toolTipFontSize": 12,
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
   "iconURL": "skin/IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED.png",
   "toolTipFontStyle": "normal",
   "rollOverIconURL": "skin/IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED_rollover.png"
  }
 },
 {
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
   "shadow": false,
   "progressBackgroundOpacity": 1,
   "progressBarBorderSize": 0,
   "toolTipPaddingBottom": 4,
   "progressBarBorderRadius": 0,
   "progressBorderRadius": 0,
   "toolTipFontWeight": "normal",
   "paddingBottom": 0,
   "toolTipFontSize": 12,
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
   "toolTipPaddingRight": 6,
   "class": "ViewerArea",
   "toolTipBorderRadius": 3,
   "playbackBarHeadBackgroundColor": [
    "#111111",
    "#666666"
   ],
   "progressLeft": 0,
   "progressBackgroundColorRatios": [
    0
   ],
   "playbackBarHeadShadowVerticalLength": 0,
   "playbackBarHeadBorderRadius": 0,
   "playbackBarBorderColor": "#FFFFFF",
   "playbackBarHeadShadowBlurRadius": 3,
   "playbackBarHeadBorderColor": "#000000",
   "playbackBarProgressOpacity": 1,
   "paddingLeft": 0,
   "toolTipBorderColor": "#767676",
   "playbackBarProgressBackgroundColor": [
    "#3399FF"
   ],
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
   "playbackBarHeadShadowHorizontalLength": 0,
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
   "playbackBarProgressBackgroundColorDirection": "vertical",
   "toolTipPaddingTop": 4,
   "toolTipFontStyle": "normal"
  },
  "class": "PhotoAlbumPlayer",
  "buttonPrevious": {
   "class": "IconButton",
   "paddingRight": 0,
   "verticalAlign": "middle",
   "mode": "push",
   "maxHeight": 70,
   "width": "4.24%",
   "paddingLeft": 0,
   "transparencyActive": true,
   "borderSize": 0,
   "borderRadius": 0,
   "horizontalAlign": "center",
   "minWidth": 60,
   "shadow": false,
   "maxWidth": 70,
   "top": "40%",
   "minHeight": 60,
   "cursor": "hand",
   "paddingBottom": 0,
   "id": "IconButton_9FEA51EA_96CC_905A_41D3_F42DB0CD0A74",
   "backgroundOpacity": 0,
   "bottom": "40%",
   "paddingTop": 0,
   "left": "1%",
   "iconURL": "skin/IconButton_9FEA51EA_96CC_905A_41D3_F42DB0CD0A74.png",
   "rollOverIconURL": "skin/IconButton_9FEA51EA_96CC_905A_41D3_F42DB0CD0A74_rollover.png"
  },
  "buttonNext": {
   "class": "IconButton",
   "paddingRight": 0,
   "verticalAlign": "middle",
   "mode": "push",
   "maxHeight": 70,
   "width": "4.24%",
   "paddingLeft": 0,
   "transparencyActive": true,
   "borderSize": 0,
   "borderRadius": 0,
   "horizontalAlign": "center",
   "minWidth": 60,
   "maxWidth": 70,
   "top": "40%",
   "minHeight": 60,
   "cursor": "hand",
   "paddingBottom": 0,
   "shadow": false,
   "id": "IconButton_9FB9BD3F_96C5_703B_41D7_65AEE6E85A96",
   "backgroundOpacity": 0,
   "bottom": "40%",
   "paddingTop": 0,
   "iconURL": "skin/IconButton_9FB9BD3F_96C5_703B_41D7_65AEE6E85A96.png",
   "right": "1%",
   "rollOverIconURL": "skin/IconButton_9FB9BD3F_96C5_703B_41D7_65AEE6E85A96_rollover.png"
  },
  "id": "ViewerAreaLabeled_9FD7235A_96CD_9045_41D9_23A3BCBDB1C6PhotoAlbumPlayer",
  "buttonStop": [
   "this.IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4",
   "this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB"
  ],
  "buttonPlay": "this.IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED"
 },
 {
  "class": "Panorama",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_2A3212FD_3D4C_0E23_41C0_04B3E12E8F14_t.jpg",
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "rollOverDisplay": false,
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 50,
           "width": 50,
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A3212FD_3D4C_0E23_41C0_04B3E12E8F14_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "hfov": 8.61,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -3.02,
        "pitch": -11.62
       }
      ],
      "id": "overlay_2A32E2FD_3D4C_0E23_41BF_6BE2D56D6AB4",
      "enabledInCardboard": true,
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "toolTip": "Out View",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_25553EB7_3D4C_162F_41C4_ABE3C7F9C5B0, this.camera_24A6346C_3EB1_4D5B_41C0_ED859854B873); this.mainPlayList.set('selectedIndex', 1)",
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -3.02,
        "hfov": 8.61,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 100,
           "width": 100,
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A3212FD_3D4C_0E23_41C0_04B3E12E8F14_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -11.62
       }
      ]
     },
     {
      "rollOverDisplay": true,
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 1,
           "width": 1,
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A3212FD_3D4C_0E23_41C0_04B3E12E8F14_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "hfov": 0,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -41.07,
        "pitch": 19.41
       }
      ],
      "id": "overlay_2A32D2FD_3D4C_0E23_41B9_727E3DC67D70",
      "enabledInCardboard": true,
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_25789C34_3D4C_1A20_41A5_C0AD56C4B00F, this.camera_24ABE462_3EB1_4D4F_41C2_DA4B129E998D); this.mainPlayList.set('selectedIndex', 2)"
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -41.07,
        "hfov": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 1,
           "width": 1,
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A3212FD_3D4C_0E23_41C0_04B3E12E8F14_0_HS_1_0.png"
          }
         ]
        },
        "pitch": 19.41
       }
      ]
     },
     {
      "rollOverDisplay": true,
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 1,
           "width": 1,
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A3212FD_3D4C_0E23_41C0_04B3E12E8F14_0_HS_2_0_0_map.gif"
          }
         ]
        },
        "hfov": 0,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -1.63,
        "pitch": 18.65
       }
      ],
      "id": "overlay_2A32A2FD_3D4C_0E23_41C4_26904FD72E7D",
      "enabledInCardboard": true,
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_2554CA98_3D4C_3EE1_41C5_3E8526A1D270, this.camera_24FC148B_3EB1_4DDD_41AF_6DC13A066D78); this.mainPlayList.set('selectedIndex', 3)"
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -1.63,
        "hfov": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 1,
           "width": 1,
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A3212FD_3D4C_0E23_41C0_04B3E12E8F14_0_HS_2_0.png"
          }
         ]
        },
        "pitch": 18.65
       }
      ]
     },
     {
      "rollOverDisplay": true,
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 1,
           "width": 1,
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A3212FD_3D4C_0E23_41C0_04B3E12E8F14_0_HS_3_0_0_map.gif"
          }
         ]
        },
        "hfov": 0,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -21.48,
        "pitch": 30.21
       }
      ],
      "id": "overlay_2A32B2FD_3D4C_0E23_41B9_93ABA3A62D17",
      "enabledInCardboard": true,
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_255448EA_3D4C_1A21_41C9_3DB54CE3D3DC, this.camera_24C3E480_3EB1_4DCB_41BA_812462B52E7B); this.mainPlayList.set('selectedIndex', 4)"
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -21.48,
        "hfov": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 1,
           "width": 1,
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A3212FD_3D4C_0E23_41C0_04B3E12E8F14_0_HS_3_0.png"
          }
         ]
        },
        "pitch": 30.21
       }
      ]
     },
     {
      "rollOverDisplay": true,
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 1,
           "width": 1,
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A3212FD_3D4C_0E23_41C0_04B3E12E8F14_0_HS_4_0_0_map.gif"
          }
         ]
        },
        "hfov": 0,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -21.73,
        "pitch": 41.77
       }
      ],
      "id": "overlay_2A3282FD_3D4C_0E22_41C6_67F0125AA08D",
      "enabledInCardboard": true,
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_257A7074_3D4C_0A21_41A8_648C8CC16F7F, this.camera_24D0A476_3EB1_4D37_41CA_962800051089); this.mainPlayList.set('selectedIndex', 5)"
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -21.73,
        "hfov": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 1,
           "width": 1,
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A3212FD_3D4C_0E23_41C0_04B3E12E8F14_0_HS_4_0.png"
          }
         ]
        },
        "pitch": 41.77
       }
      ]
     }
    ],
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2048,
       "width": 4096,
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A3212FD_3D4C_0E23_41C0_04B3E12E8F14_hq.jpeg"
      },
      {
       "height": 1608,
       "width": 3217,
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A3212FD_3D4C_0E23_41C0_04B3E12E8F14.jpeg"
      }
     ]
    }
   }
  ],
  "hfovMin": 60,
  "partial": false,
  "id": "panorama_2A3212FD_3D4C_0E23_41C0_04B3E12E8F14",
  "pitch": 0,
  "thumbnailUrl": "media/panorama_2A3212FD_3D4C_0E23_41C0_04B3E12E8F14_t.jpg",
  "label": "Front View",
  "hfovMax": 120,
  "hfov": 360,
  "adjacentPanoramas": [
   {
    "panorama": {
     "class": "Panorama",
     "frames": [
      {
       "thumbnailUrl": "media/panorama_25789C34_3D4C_1A20_41A5_C0AD56C4B00F_t.jpg",
       "class": "SphericPanoramaFrame",
       "overlays": [
        {
         "rollOverDisplay": false,
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 50,
              "width": 50,
              "class": "ImageResourceLevel",
              "url": "media/panorama_25789C34_3D4C_1A20_41A5_C0AD56C4B00F_0_HS_0_0_0_map.gif"
             }
            ]
           },
           "hfov": 8.63,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 14.07,
           "pitch": -10.86
          }
         ],
         "id": "overlay_2578EC34_3D4C_1A20_41C5_1AEFACCE1A7B",
         "enabledInCardboard": true,
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "toolTip": "Living Room",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_2554CA98_3D4C_3EE1_41C5_3E8526A1D270, this.camera_24B91458_3EB1_4D7B_41C7_0E1B4B948E7D); this.mainPlayList.set('selectedIndex', 3)",
           "mapColor": "#FF0000",
           "displayTooltipInTouchScreens": true
          }
         ],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": 14.07,
           "hfov": 8.63,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 100,
              "width": 100,
              "class": "ImageResourceLevel",
              "url": "media/panorama_25789C34_3D4C_1A20_41A5_C0AD56C4B00F_0_HS_0_0.png"
             }
            ]
           },
           "pitch": -10.86
          }
         ]
        },
        {
         "rollOverDisplay": true,
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 1,
              "width": 1,
              "class": "ImageResourceLevel",
              "url": "media/panorama_25789C34_3D4C_1A20_41A5_C0AD56C4B00F_0_HS_1_0_0_map.gif"
             }
            ]
           },
           "hfov": 0,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 138.8,
           "pitch": -20.79
          }
         ],
         "id": "overlay_2578FC34_3D4C_1A20_41CB_82EFA479E8B9",
         "enabledInCardboard": true,
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_2A3212FD_3D4C_0E23_41C0_04B3E12E8F14, this.camera_2770E42D_3EB1_4CD4_41C2_6E92169C9CE0); this.mainPlayList.set('selectedIndex', 0)"
          }
         ],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": 138.8,
           "hfov": 0,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 1,
              "width": 1,
              "class": "ImageResourceLevel",
              "url": "media/panorama_25789C34_3D4C_1A20_41A5_C0AD56C4B00F_0_HS_1_0.png"
             }
            ]
           },
           "pitch": -20.79
          }
         ]
        },
        {
         "rollOverDisplay": true,
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 1,
              "width": 1,
              "class": "ImageResourceLevel",
              "url": "media/panorama_25789C34_3D4C_1A20_41A5_C0AD56C4B00F_0_HS_2_0_0_map.gif"
             }
            ]
           },
           "hfov": 0,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 113.93,
           "pitch": -37.62
          }
         ],
         "id": "overlay_2578CC34_3D4C_1A20_41B6_46F7340A1FB1",
         "enabledInCardboard": true,
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_25553EB7_3D4C_162F_41C4_ABE3C7F9C5B0, this.camera_27631438_3EB1_4D3C_41AC_5364C06348EC); this.mainPlayList.set('selectedIndex', 1)"
          }
         ],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": 113.93,
           "hfov": 0,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 1,
              "width": 1,
              "class": "ImageResourceLevel",
              "url": "media/panorama_25789C34_3D4C_1A20_41A5_C0AD56C4B00F_0_HS_2_0.png"
             }
            ]
           },
           "pitch": -37.62
          }
         ]
        },
        {
         "rollOverDisplay": true,
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 1,
              "width": 1,
              "class": "ImageResourceLevel",
              "url": "media/panorama_25789C34_3D4C_1A20_41A5_C0AD56C4B00F_0_HS_3_0_0_map.gif"
             }
            ]
           },
           "hfov": 0,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 10.93,
           "pitch": 8.6
          }
         ],
         "id": "overlay_2578DC34_3D4C_1A20_41B6_C7A2B5940DBB",
         "enabledInCardboard": true,
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_255448EA_3D4C_1A21_41C9_3DB54CE3D3DC, this.camera_248F544E_3EB1_4D57_41B1_232FD740A411); this.mainPlayList.set('selectedIndex', 4)"
          }
         ],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": 10.93,
           "hfov": 0,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 1,
              "width": 1,
              "class": "ImageResourceLevel",
              "url": "media/panorama_25789C34_3D4C_1A20_41A5_C0AD56C4B00F_0_HS_3_0.png"
             }
            ]
           },
           "pitch": 8.6
          }
         ]
        },
        {
         "rollOverDisplay": true,
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 1,
              "width": 1,
              "class": "ImageResourceLevel",
              "url": "media/panorama_25789C34_3D4C_1A20_41A5_C0AD56C4B00F_0_HS_4_0_0_map.gif"
             }
            ]
           },
           "hfov": 0,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 32.28,
           "pitch": 63.37
          }
         ],
         "id": "overlay_25783C34_3D4C_1A20_41CB_154DBF4FEB79",
         "enabledInCardboard": true,
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_257A7074_3D4C_0A21_41A8_648C8CC16F7F, this.camera_249D8443_3EB1_4D4D_41AC_1854B082A884); this.mainPlayList.set('selectedIndex', 5)"
          }
         ],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": 32.28,
           "hfov": 0,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 1,
              "width": 1,
              "class": "ImageResourceLevel",
              "url": "media/panorama_25789C34_3D4C_1A20_41A5_C0AD56C4B00F_0_HS_4_0.png"
             }
            ]
           },
           "pitch": 63.37
          }
         ]
        }
       ],
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "height": 2048,
          "width": 4096,
          "class": "ImageResourceLevel",
          "url": "media/panorama_25789C34_3D4C_1A20_41A5_C0AD56C4B00F_hq.jpeg"
         },
         {
          "height": 1608,
          "width": 3217,
          "class": "ImageResourceLevel",
          "url": "media/panorama_25789C34_3D4C_1A20_41A5_C0AD56C4B00F.jpeg"
         }
        ]
       }
      }
     ],
     "hfovMin": 60,
     "partial": false,
     "id": "panorama_25789C34_3D4C_1A20_41A5_C0AD56C4B00F",
     "pitch": 0,
     "thumbnailUrl": "media/panorama_25789C34_3D4C_1A20_41A5_C0AD56C4B00F_t.jpg",
     "label": "Pool",
     "hfovMax": 120,
     "hfov": 360,
     "adjacentPanoramas": [
      {
       "panorama": "this.panorama_2A3212FD_3D4C_0E23_41C0_04B3E12E8F14",
       "class": "AdjacentPanorama",
       "yaw": 138.8,
       "backwardYaw": -41.07,
       "distance": 1
      },
      {
       "panorama": {
        "class": "Panorama",
        "frames": [
         {
          "thumbnailUrl": "media/panorama_25553EB7_3D4C_162F_41C4_ABE3C7F9C5B0_t.jpg",
          "class": "SphericPanoramaFrame",
          "overlays": [
           {
            "rollOverDisplay": false,
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 59,
                 "width": 59,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_25553EB7_3D4C_162F_41C4_ABE3C7F9C5B0_0_HS_0_0_0_map.gif"
                }
               ]
              },
              "hfov": 10.5,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 1.38,
              "pitch": -5.21
             }
            ],
            "id": "overlay_25555EB7_3D4C_162F_41A5_A7A6B9E22571",
            "enabledInCardboard": true,
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "toolTip": "Pool",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_25789C34_3D4C_1A20_41A5_C0AD56C4B00F, this.camera_27EBA393_3EB1_4BCC_4193_A655CE312E5D); this.mainPlayList.set('selectedIndex', 2)",
              "mapColor": "#FF0000",
              "displayTooltipInTouchScreens": true
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 1.38,
              "hfov": 10.5,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 119,
                 "width": 119,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_25553EB7_3D4C_162F_41C4_ABE3C7F9C5B0_0_HS_0_0.png"
                }
               ]
              },
              "pitch": -5.21
             }
            ]
           },
           {
            "rollOverDisplay": true,
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 1,
                 "width": 1,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_25553EB7_3D4C_162F_41C4_ABE3C7F9C5B0_0_HS_1_0_0_map.gif"
                }
               ]
              },
              "hfov": 0,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 152.37,
              "pitch": -10.99
             }
            ],
            "id": "overlay_25557EB7_3D4C_162F_41A7_ECC96B33C9DA",
            "enabledInCardboard": true,
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_2A3212FD_3D4C_0E23_41C0_04B3E12E8F14, this.camera_27E013A3_3EB1_4BCD_41CE_CB0A0D07C335); this.mainPlayList.set('selectedIndex', 0)"
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 152.37,
              "hfov": 0,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 1,
                 "width": 1,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_25553EB7_3D4C_162F_41C4_ABE3C7F9C5B0_0_HS_1_0.png"
                }
               ]
              },
              "pitch": -10.99
             }
            ]
           },
           {
            "rollOverDisplay": true,
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 1,
                 "width": 1,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_25553EB7_3D4C_162F_41C4_ABE3C7F9C5B0_0_HS_2_0_0_map.gif"
                }
               ]
              },
              "hfov": 0,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 43.84,
              "pitch": 52.32
             }
            ],
            "id": "overlay_25568EB7_3D4C_162F_41A5_E92903719731",
            "enabledInCardboard": true,
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_2554CA98_3D4C_3EE1_41C5_3E8526A1D270, this.camera_270393D2_3EB1_4B4F_41B2_0E146586984F); this.mainPlayList.set('selectedIndex', 3)"
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 43.84,
              "hfov": 0,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 1,
                 "width": 1,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_25553EB7_3D4C_162F_41C4_ABE3C7F9C5B0_0_HS_2_0.png"
                }
               ]
              },
              "pitch": 52.32
             }
            ]
           },
           {
            "rollOverDisplay": true,
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 1,
                 "width": 1,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_25553EB7_3D4C_162F_41C4_ABE3C7F9C5B0_0_HS_3_0_0_map.gif"
                }
               ]
              },
              "hfov": 0,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -41.83,
              "pitch": 56.34
             }
            ],
            "id": "overlay_25569EB7_3D4C_162F_41B0_C7CAA2609CAB",
            "enabledInCardboard": true,
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_255448EA_3D4C_1A21_41C9_3DB54CE3D3DC, this.camera_271523C3_3EB1_4B4D_41C1_16FEA335D917); this.mainPlayList.set('selectedIndex', 4)"
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": -41.83,
              "hfov": 0,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 1,
                 "width": 1,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_25553EB7_3D4C_162F_41C4_ABE3C7F9C5B0_0_HS_3_0.png"
                }
               ]
              },
              "pitch": 56.34
             }
            ]
           },
           {
            "rollOverDisplay": true,
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 1,
                 "width": 1,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_25553EB7_3D4C_162F_41C4_ABE3C7F9C5B0_0_HS_4_0_0_map.gif"
                }
               ]
              },
              "hfov": 0,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -6.66,
              "pitch": 78.95
             }
            ],
            "id": "overlay_2556AEB7_3D4C_162F_41CE_7D8754BB0E84",
            "enabledInCardboard": true,
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_257A7074_3D4C_0A21_41A8_648C8CC16F7F, this.camera_271F53B3_3EB1_4BCD_41B1_8815469763A6); this.mainPlayList.set('selectedIndex', 5)"
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": -6.66,
              "hfov": 0,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 1,
                 "width": 1,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_25553EB7_3D4C_162F_41C4_ABE3C7F9C5B0_0_HS_4_0.png"
                }
               ]
              },
              "pitch": 78.95
             }
            ]
           }
          ],
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 2048,
             "width": 4096,
             "class": "ImageResourceLevel",
             "url": "media/panorama_25553EB7_3D4C_162F_41C4_ABE3C7F9C5B0_hq.jpeg"
            },
            {
             "height": 1608,
             "width": 3217,
             "class": "ImageResourceLevel",
             "url": "media/panorama_25553EB7_3D4C_162F_41C4_ABE3C7F9C5B0.jpeg"
            }
           ]
          }
         }
        ],
        "hfovMin": 60,
        "partial": false,
        "id": "panorama_25553EB7_3D4C_162F_41C4_ABE3C7F9C5B0",
        "pitch": 0,
        "thumbnailUrl": "media/panorama_25553EB7_3D4C_162F_41C4_ABE3C7F9C5B0_t.jpg",
        "label": "Out View",
        "hfovMax": 120,
        "hfov": 360,
        "adjacentPanoramas": [
         {
          "panorama": "this.panorama_25789C34_3D4C_1A20_41A5_C0AD56C4B00F",
          "class": "AdjacentPanorama",
          "yaw": 1.38,
          "backwardYaw": 113.93,
          "distance": 1
         },
         {
          "panorama": "this.panorama_2A3212FD_3D4C_0E23_41C0_04B3E12E8F14",
          "class": "AdjacentPanorama",
          "yaw": 152.37,
          "backwardYaw": -3.02,
          "distance": 1
         },
         {
          "panorama": {
           "class": "Panorama",
           "frames": [
            {
             "thumbnailUrl": "media/panorama_257A7074_3D4C_0A21_41A8_648C8CC16F7F_t.jpg",
             "class": "SphericPanoramaFrame",
             "overlays": [
              {
               "rollOverDisplay": false,
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 59,
                    "width": 59,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_257A7074_3D4C_0A21_41A8_648C8CC16F7F_0_HS_0_0_0_map.gif"
                   }
                  ]
                 },
                 "hfov": 10.48,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -137.04,
                 "pitch": -6.47
                }
               ],
               "id": "overlay_257A4074_3D4C_0A21_41C4_735D08CCB883",
               "enabledInCardboard": true,
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "toolTip": "Bedroom",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_255448EA_3D4C_1A21_41C9_3DB54CE3D3DC, this.camera_274B340E_3EB1_4CD4_41C5_0A1CA0E5C3CA); this.mainPlayList.set('selectedIndex', 4)",
                 "mapColor": "#FF0000",
                 "displayTooltipInTouchScreens": true
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": -137.04,
                 "hfov": 10.48,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 119,
                    "width": 119,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_257A7074_3D4C_0A21_41A8_648C8CC16F7F_0_HS_0_0.png"
                   }
                  ]
                 },
                 "pitch": -6.47
                }
               ]
              },
              {
               "rollOverDisplay": true,
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 1,
                    "width": 1,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_257A7074_3D4C_0A21_41A8_648C8CC16F7F_0_HS_1_0_0_map.gif"
                   }
                  ]
                 },
                 "hfov": 0.02,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -11.14,
                 "pitch": 75.89
                }
               ],
               "id": "overlay_257AA074_3D4C_0A21_41B7_A62EF50AEB1E",
               "enabledInCardboard": true,
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_2A3212FD_3D4C_0E23_41C0_04B3E12E8F14, this.camera_272F63F0_3EB1_4B4C_41CA_B82C77C1238A); this.mainPlayList.set('selectedIndex', 0)"
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": -11.14,
                 "hfov": 0.02,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 1,
                    "width": 1,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_257A7074_3D4C_0A21_41A8_648C8CC16F7F_0_HS_1_0.png"
                   }
                  ]
                 },
                 "pitch": 75.89
                }
               ]
              },
              {
               "rollOverDisplay": true,
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 1,
                    "width": 1,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_257A7074_3D4C_0A21_41A8_648C8CC16F7F_0_HS_2_0_0_map.gif"
                   }
                  ]
                 },
                 "hfov": 0.04,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -58.36,
                 "pitch": 65.59
                }
               ],
               "id": "overlay_257AB074_3D4C_0A22_4185_A4CCF850A5A4",
               "enabledInCardboard": true,
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_25553EB7_3D4C_162F_41C4_ABE3C7F9C5B0, this.camera_2759C3FF_3EB1_4B34_41C9_C6111D64AB6E); this.mainPlayList.set('selectedIndex', 1)"
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": -58.36,
                 "hfov": 0.04,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 1,
                    "width": 1,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_257A7074_3D4C_0A21_41A8_648C8CC16F7F_0_HS_2_0.png"
                   }
                  ]
                 },
                 "pitch": 65.59
                }
               ]
              },
              {
               "rollOverDisplay": true,
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 1,
                    "width": 1,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_257A7074_3D4C_0A21_41A8_648C8CC16F7F_0_HS_3_0_0_map.gif"
                   }
                  ]
                 },
                 "hfov": 0.07,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -8.12,
                 "pitch": 36.7
                }
               ],
               "id": "overlay_257A8075_3D4C_0A23_4197_7351ED85C1E6",
               "enabledInCardboard": true,
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_25789C34_3D4C_1A20_41A5_C0AD56C4B00F, this.camera_273C63E0_3EB1_4B4C_41B3_01CC04DE8A84); this.mainPlayList.set('selectedIndex', 2)"
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": -8.12,
                 "hfov": 0.07,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 1,
                    "width": 1,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_257A7074_3D4C_0A21_41A8_648C8CC16F7F_0_HS_3_0.png"
                   }
                  ]
                 },
                 "pitch": 36.7
                }
               ]
              },
              {
               "rollOverDisplay": true,
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 1,
                    "width": 1,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_257A7074_3D4C_0A21_41A8_648C8CC16F7F_0_HS_4_0_0_map.gif"
                   }
                  ]
                 },
                 "hfov": 0,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 39.06,
                 "pitch": 79.2
                }
               ],
               "id": "overlay_257A9075_3D4C_0A23_41CE_5386F7FC6737",
               "enabledInCardboard": true,
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_2554CA98_3D4C_3EE1_41C5_3E8526A1D270, this.camera_2746341E_3EB1_4CF4_41B5_A2761BBF0ECF); this.mainPlayList.set('selectedIndex', 3)"
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": 39.06,
                 "hfov": 0,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 1,
                    "width": 1,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_257A7074_3D4C_0A21_41A8_648C8CC16F7F_0_HS_4_0.png"
                   }
                  ]
                 },
                 "pitch": 79.2
                }
               ]
              }
             ],
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "height": 2048,
                "width": 4096,
                "class": "ImageResourceLevel",
                "url": "media/panorama_257A7074_3D4C_0A21_41A8_648C8CC16F7F_hq.jpeg"
               },
               {
                "height": 1608,
                "width": 3217,
                "class": "ImageResourceLevel",
                "url": "media/panorama_257A7074_3D4C_0A21_41A8_648C8CC16F7F.jpeg"
               }
              ]
             }
            }
           ],
           "hfovMin": 60,
           "partial": false,
           "id": "panorama_257A7074_3D4C_0A21_41A8_648C8CC16F7F",
           "pitch": 0,
           "thumbnailUrl": "media/panorama_257A7074_3D4C_0A21_41A8_648C8CC16F7F_t.jpg",
           "label": "View Deck",
           "hfovMax": 120,
           "hfov": 360,
           "adjacentPanoramas": [
            {
             "panorama": "this.panorama_25789C34_3D4C_1A20_41A5_C0AD56C4B00F",
             "class": "AdjacentPanorama",
             "yaw": -8.12,
             "backwardYaw": 32.28,
             "distance": 1
            },
            {
             "panorama": "this.panorama_2A3212FD_3D4C_0E23_41C0_04B3E12E8F14",
             "class": "AdjacentPanorama",
             "yaw": -11.14,
             "backwardYaw": -21.73,
             "distance": 1
            },
            {
             "panorama": "this.panorama_25553EB7_3D4C_162F_41C4_ABE3C7F9C5B0",
             "class": "AdjacentPanorama",
             "yaw": -58.36,
             "backwardYaw": -6.66,
             "distance": 1
            },
            {
             "panorama": {
              "class": "Panorama",
              "frames": [
               {
                "thumbnailUrl": "media/panorama_255448EA_3D4C_1A21_41C9_3DB54CE3D3DC_t.jpg",
                "class": "SphericPanoramaFrame",
                "overlays": [
                 {
                  "rollOverDisplay": true,
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 1,
                       "width": 1,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_255448EA_3D4C_1A21_41C9_3DB54CE3D3DC_0_HS_0_0_0_map.gif"
                      }
                     ]
                    },
                    "hfov": 0,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 165.43,
                    "pitch": -38.37
                   }
                  ],
                  "id": "overlay_255458EA_3D4C_1A21_41AB_D71896F3D29F",
                  "enabledInCardboard": true,
                  "useHandCursor": true,
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_25789C34_3D4C_1A20_41A5_C0AD56C4B00F, this.camera_24EF5495_3EB1_4DF5_41C9_E4981509B5FF); this.mainPlayList.set('selectedIndex', 2)"
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 165.43,
                    "hfov": 0,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 1,
                       "width": 1,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_255448EA_3D4C_1A21_41C9_3DB54CE3D3DC_0_HS_0_0.png"
                      }
                     ]
                    },
                    "pitch": -38.37
                   }
                  ]
                 },
                 {
                  "rollOverDisplay": true,
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 1,
                       "width": 1,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_255448EA_3D4C_1A21_41C9_3DB54CE3D3DC_0_HS_1_0_0_map.gif"
                      }
                     ]
                    },
                    "hfov": 0,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 147.34,
                    "pitch": -21.79
                   }
                  ],
                  "id": "overlay_255468EA_3D4C_1A21_41B4_36EB7CAD303A",
                  "enabledInCardboard": true,
                  "useHandCursor": true,
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_2A3212FD_3D4C_0E23_41C0_04B3E12E8F14, this.camera_2419849F_3EB1_4DF5_41C2_9A13A6360CAA); this.mainPlayList.set('selectedIndex', 0)"
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 147.34,
                    "hfov": 0,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 1,
                       "width": 1,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_255448EA_3D4C_1A21_41C9_3DB54CE3D3DC_0_HS_1_0.png"
                      }
                     ]
                    },
                    "pitch": -21.79
                   }
                  ]
                 },
                 {
                  "rollOverDisplay": true,
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 1,
                       "width": 1,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_255448EA_3D4C_1A21_41C9_3DB54CE3D3DC_0_HS_2_0_0_map.gif"
                      }
                     ]
                    },
                    "hfov": 0,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 125.99,
                    "pitch": -34.86
                   }
                  ],
                  "id": "overlay_255478EA_3D4C_1A21_41C4_CCFCD4DD0588",
                  "enabledInCardboard": true,
                  "useHandCursor": true,
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_25553EB7_3D4C_162F_41C4_ABE3C7F9C5B0, this.camera_240A74AA_3EB1_4DDF_41C6_5AB43292885B); this.mainPlayList.set('selectedIndex', 1)"
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 125.99,
                    "hfov": 0,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 1,
                       "width": 1,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_255448EA_3D4C_1A21_41C9_3DB54CE3D3DC_0_HS_2_0.png"
                      }
                     ]
                    },
                    "pitch": -34.86
                   }
                  ]
                 },
                 {
                  "rollOverDisplay": true,
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 1,
                       "width": 1,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_255448EA_3D4C_1A21_41C9_3DB54CE3D3DC_0_HS_3_0_0_map.gif"
                      }
                     ]
                    },
                    "hfov": 0,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 118.2,
                    "pitch": 1.57
                   }
                  ],
                  "id": "overlay_255488EA_3D4C_1A21_4194_A2BA1CB98E61",
                  "enabledInCardboard": true,
                  "useHandCursor": true,
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_2554CA98_3D4C_3EE1_41C5_3E8526A1D270, this.camera_243794BD_3EB1_4D35_419F_C0D06117581E); this.mainPlayList.set('selectedIndex', 3)"
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 118.2,
                    "hfov": 0,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 1,
                       "width": 1,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_255448EA_3D4C_1A21_41C9_3DB54CE3D3DC_0_HS_3_0.png"
                      }
                     ]
                    },
                    "pitch": 1.57
                   }
                  ]
                 },
                 {
                  "rollOverDisplay": false,
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 50,
                       "width": 50,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_255448EA_3D4C_1A21_41C9_3DB54CE3D3DC_0_HS_4_0_0_map.gif"
                      }
                     ]
                    },
                    "hfov": 8.69,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 1.25,
                    "pitch": -8.6
                   }
                  ],
                  "id": "overlay_2554C8EA_3D4C_1A21_418E_798FAA0C9AF8",
                  "enabledInCardboard": true,
                  "useHandCursor": true,
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "toolTip": "View Deck",
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_257A7074_3D4C_0A21_41A8_648C8CC16F7F, this.camera_240554B3_3EB1_4DCD_4199_53F65D8C6F9D); this.mainPlayList.set('selectedIndex', 5)",
                    "mapColor": "#FF0000",
                    "displayTooltipInTouchScreens": true
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 1.25,
                    "hfov": 8.69,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 100,
                       "width": 100,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_255448EA_3D4C_1A21_41C9_3DB54CE3D3DC_0_HS_4_0.png"
                      }
                     ]
                    },
                    "pitch": -8.6
                   }
                  ]
                 }
                ],
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "height": 2048,
                   "width": 4096,
                   "class": "ImageResourceLevel",
                   "url": "media/panorama_255448EA_3D4C_1A21_41C9_3DB54CE3D3DC_hq.jpeg"
                  },
                  {
                   "height": 1608,
                   "width": 3217,
                   "class": "ImageResourceLevel",
                   "url": "media/panorama_255448EA_3D4C_1A21_41C9_3DB54CE3D3DC.jpeg"
                  }
                 ]
                }
               }
              ],
              "hfovMin": 60,
              "partial": false,
              "id": "panorama_255448EA_3D4C_1A21_41C9_3DB54CE3D3DC",
              "pitch": 0,
              "thumbnailUrl": "media/panorama_255448EA_3D4C_1A21_41C9_3DB54CE3D3DC_t.jpg",
              "label": "Bedroom",
              "hfovMax": 120,
              "hfov": 360,
              "adjacentPanoramas": [
               {
                "panorama": "this.panorama_25789C34_3D4C_1A20_41A5_C0AD56C4B00F",
                "class": "AdjacentPanorama",
                "yaw": 165.43,
                "backwardYaw": 10.93,
                "distance": 1
               },
               {
                "panorama": "this.panorama_2A3212FD_3D4C_0E23_41C0_04B3E12E8F14",
                "class": "AdjacentPanorama",
                "yaw": 147.34,
                "backwardYaw": -21.48,
                "distance": 1
               },
               {
                "panorama": "this.panorama_25553EB7_3D4C_162F_41C4_ABE3C7F9C5B0",
                "class": "AdjacentPanorama",
                "yaw": 125.99,
                "backwardYaw": -41.83,
                "distance": 1
               },
               {
                "panorama": "this.panorama_257A7074_3D4C_0A21_41A8_648C8CC16F7F",
                "class": "AdjacentPanorama",
                "yaw": 1.25,
                "backwardYaw": -137.04,
                "distance": 1
               },
               {
                "panorama": {
                 "class": "Panorama",
                 "frames": [
                  {
                   "thumbnailUrl": "media/panorama_2554CA98_3D4C_3EE1_41C5_3E8526A1D270_t.jpg",
                   "class": "SphericPanoramaFrame",
                   "overlays": [
                    {
                     "rollOverDisplay": true,
                     "maps": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 1,
                          "width": 1,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_2554CA98_3D4C_3EE1_41C5_3E8526A1D270_0_HS_0_0_0_map.gif"
                         }
                        ]
                       },
                       "hfov": 0,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": 165.68,
                       "pitch": -30.33
                      }
                     ],
                     "id": "overlay_2554EA98_3D4C_3EE1_41B3_0AF33D493D68",
                     "enabledInCardboard": true,
                     "useHandCursor": true,
                     "class": "HotspotPanoramaOverlay",
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_25789C34_3D4C_1A20_41A5_C0AD56C4B00F, this.camera_2422E4C7_3EB1_4D55_417B_06030B723F3D); this.mainPlayList.set('selectedIndex', 2)"
                      }
                     ],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": 165.68,
                       "hfov": 0,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 1,
                          "width": 1,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_2554CA98_3D4C_3EE1_41C5_3E8526A1D270_0_HS_0_0.png"
                         }
                        ]
                       },
                       "pitch": -30.33
                      }
                     ]
                    },
                    {
                     "rollOverDisplay": false,
                     "maps": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 59,
                          "width": 59,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_2554CA98_3D4C_3EE1_41C5_3E8526A1D270_0_HS_1_0_0_map.gif"
                         }
                        ]
                       },
                       "hfov": 10.53,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": 18.46,
                       "pitch": 3.08
                      }
                     ],
                     "id": "overlay_25549A98_3D4C_3EE1_41B3_12C8169C96F9",
                     "enabledInCardboard": true,
                     "useHandCursor": true,
                     "class": "HotspotPanoramaOverlay",
                     "areas": [
                      {
                       "toolTip": "Bedroom",
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_255448EA_3D4C_1A21_41C9_3DB54CE3D3DC, this.camera_2469C4F0_3EB1_4D4B_41CC_332D28725EDA); this.mainPlayList.set('selectedIndex', 4)",
                       "mapColor": "#FF0000",
                       "displayTooltipInTouchScreens": true
                      }
                     ],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": 18.46,
                       "hfov": 10.53,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 119,
                          "width": 119,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_2554CA98_3D4C_3EE1_41C5_3E8526A1D270_0_HS_1_0.png"
                         }
                        ]
                       },
                       "pitch": 3.08
                      }
                     ]
                    },
                    {
                     "rollOverDisplay": true,
                     "maps": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 1,
                          "width": 1,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_2554CA98_3D4C_3EE1_41C5_3E8526A1D270_0_HS_2_0_0_map.gif"
                         }
                        ]
                       },
                       "hfov": 0,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": 157.89,
                       "pitch": -8.23
                      }
                     ],
                     "id": "overlay_2554AA98_3D4C_3EE1_41CC_B8FCC3D08310",
                     "enabledInCardboard": true,
                     "useHandCursor": true,
                     "class": "HotspotPanoramaOverlay",
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_2A3212FD_3D4C_0E23_41C0_04B3E12E8F14, this.camera_245374D1_3EB1_4D4D_417B_3B64841D3E25); this.mainPlayList.set('selectedIndex', 0)"
                      }
                     ],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": 157.89,
                       "hfov": 0,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 1,
                          "width": 1,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_2554CA98_3D4C_3EE1_41C5_3E8526A1D270_0_HS_2_0.png"
                         }
                        ]
                       },
                       "pitch": -8.23
                      }
                     ]
                    },
                    {
                     "rollOverDisplay": true,
                     "maps": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 1,
                          "width": 1,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_2554CA98_3D4C_3EE1_41C5_3E8526A1D270_0_HS_3_0_0_map.gif"
                         }
                        ]
                       },
                       "hfov": 0,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": 131.77,
                       "pitch": -7.47
                      }
                     ],
                     "id": "overlay_25545A98_3D4C_3EE1_41C9_E70B128D2EFA",
                     "enabledInCardboard": true,
                     "useHandCursor": true,
                     "class": "HotspotPanoramaOverlay",
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_25553EB7_3D4C_162F_41C4_ABE3C7F9C5B0, this.camera_244D94DB_3EB1_4D7D_41AB_04DC5F041C34); this.mainPlayList.set('selectedIndex', 1)"
                      }
                     ],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": 131.77,
                       "hfov": 0,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 1,
                          "width": 1,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_2554CA98_3D4C_3EE1_41C5_3E8526A1D270_0_HS_3_0.png"
                         }
                        ]
                       },
                       "pitch": -7.47
                      }
                     ]
                    },
                    {
                     "rollOverDisplay": true,
                     "maps": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 1,
                          "width": 1,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_2554CA98_3D4C_3EE1_41C5_3E8526A1D270_0_HS_4_0_0_map.gif"
                         }
                        ]
                       },
                       "hfov": 0,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": 109.66,
                       "pitch": 29.46
                      }
                     ],
                     "id": "overlay_25544A98_3D4C_3EE1_41B8_DF36D5B63711",
                     "enabledInCardboard": true,
                     "useHandCursor": true,
                     "class": "HotspotPanoramaOverlay",
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_257A7074_3D4C_0A21_41A8_648C8CC16F7F, this.camera_2478B4E5_3EB1_4D55_41C9_C96473E55559); this.mainPlayList.set('selectedIndex', 5)"
                      }
                     ],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": 109.66,
                       "hfov": 0,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 1,
                          "width": 1,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_2554CA98_3D4C_3EE1_41C5_3E8526A1D270_0_HS_4_0.png"
                         }
                        ]
                       },
                       "pitch": 29.46
                      }
                     ]
                    }
                   ],
                   "sphere": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "height": 2048,
                      "width": 4096,
                      "class": "ImageResourceLevel",
                      "url": "media/panorama_2554CA98_3D4C_3EE1_41C5_3E8526A1D270_hq.jpeg"
                     },
                     {
                      "height": 1608,
                      "width": 3217,
                      "class": "ImageResourceLevel",
                      "url": "media/panorama_2554CA98_3D4C_3EE1_41C5_3E8526A1D270.jpeg"
                     }
                    ]
                   }
                  }
                 ],
                 "hfovMin": 60,
                 "partial": false,
                 "id": "panorama_2554CA98_3D4C_3EE1_41C5_3E8526A1D270",
                 "pitch": 0,
                 "thumbnailUrl": "media/panorama_2554CA98_3D4C_3EE1_41C5_3E8526A1D270_t.jpg",
                 "label": "Living Room",
                 "hfovMax": 120,
                 "hfov": 360,
                 "adjacentPanoramas": [
                  {
                   "panorama": "this.panorama_25789C34_3D4C_1A20_41A5_C0AD56C4B00F",
                   "class": "AdjacentPanorama",
                   "yaw": 165.68,
                   "backwardYaw": 14.07,
                   "distance": 1
                  },
                  {
                   "panorama": "this.panorama_2A3212FD_3D4C_0E23_41C0_04B3E12E8F14",
                   "class": "AdjacentPanorama",
                   "yaw": 157.89,
                   "backwardYaw": -1.63,
                   "distance": 1
                  },
                  {
                   "panorama": "this.panorama_25553EB7_3D4C_162F_41C4_ABE3C7F9C5B0",
                   "class": "AdjacentPanorama",
                   "yaw": 131.77,
                   "backwardYaw": 43.84,
                   "distance": 1
                  },
                  {
                   "panorama": "this.panorama_257A7074_3D4C_0A21_41A8_648C8CC16F7F",
                   "class": "AdjacentPanorama",
                   "yaw": 109.66,
                   "backwardYaw": 39.06,
                   "distance": 1
                  },
                  {
                   "panorama": "this.panorama_255448EA_3D4C_1A21_41C9_3DB54CE3D3DC",
                   "class": "AdjacentPanorama",
                   "yaw": 18.46,
                   "backwardYaw": 118.2,
                   "distance": 1
                  }
                 ],
                 "vfov": 180
                },
                "class": "AdjacentPanorama",
                "yaw": 118.2,
                "backwardYaw": 18.46,
                "distance": 1
               }
              ],
              "vfov": 180
             },
             "class": "AdjacentPanorama",
             "yaw": -137.04,
             "backwardYaw": 1.25,
             "distance": 1
            },
            {
             "panorama": "this.panorama_2554CA98_3D4C_3EE1_41C5_3E8526A1D270",
             "class": "AdjacentPanorama",
             "yaw": 39.06,
             "backwardYaw": 109.66,
             "distance": 1
            }
           ],
           "vfov": 180
          },
          "class": "AdjacentPanorama",
          "yaw": -6.66,
          "backwardYaw": -58.36,
          "distance": 1
         },
         {
          "panorama": "this.panorama_255448EA_3D4C_1A21_41C9_3DB54CE3D3DC",
          "class": "AdjacentPanorama",
          "yaw": -41.83,
          "backwardYaw": 125.99,
          "distance": 1
         },
         {
          "panorama": "this.panorama_2554CA98_3D4C_3EE1_41C5_3E8526A1D270",
          "class": "AdjacentPanorama",
          "yaw": 43.84,
          "backwardYaw": 131.77,
          "distance": 1
         }
        ],
        "vfov": 180
       },
       "class": "AdjacentPanorama",
       "yaw": 113.93,
       "backwardYaw": 1.38,
       "distance": 1
      },
      {
       "panorama": "this.panorama_257A7074_3D4C_0A21_41A8_648C8CC16F7F",
       "class": "AdjacentPanorama",
       "yaw": 32.28,
       "backwardYaw": -8.12,
       "distance": 1
      },
      {
       "panorama": "this.panorama_255448EA_3D4C_1A21_41C9_3DB54CE3D3DC",
       "class": "AdjacentPanorama",
       "yaw": 10.93,
       "backwardYaw": 165.43,
       "distance": 1
      },
      {
       "panorama": "this.panorama_2554CA98_3D4C_3EE1_41C5_3E8526A1D270",
       "class": "AdjacentPanorama",
       "yaw": 14.07,
       "backwardYaw": 165.68,
       "distance": 1
      }
     ],
     "vfov": 180
    },
    "class": "AdjacentPanorama",
    "yaw": -41.07,
    "backwardYaw": 138.8,
    "distance": 1
   },
   {
    "panorama": "this.panorama_25553EB7_3D4C_162F_41C4_ABE3C7F9C5B0",
    "class": "AdjacentPanorama",
    "yaw": -3.02,
    "backwardYaw": 152.37,
    "distance": 1
   },
   {
    "panorama": "this.panorama_257A7074_3D4C_0A21_41A8_648C8CC16F7F",
    "class": "AdjacentPanorama",
    "yaw": -21.73,
    "backwardYaw": -11.14,
    "distance": 1
   },
   {
    "panorama": "this.panorama_255448EA_3D4C_1A21_41C9_3DB54CE3D3DC",
    "class": "AdjacentPanorama",
    "yaw": -21.48,
    "backwardYaw": 147.34,
    "distance": 1
   },
   {
    "panorama": "this.panorama_2554CA98_3D4C_3EE1_41C5_3E8526A1D270",
    "class": "AdjacentPanorama",
    "yaw": -1.63,
    "backwardYaw": 157.89,
    "distance": 1
   }
  ],
  "vfov": 180
 },
 {
  "gyroscopeVerticalDraggingEnabled": true,
  "touchControlMode": "drag_rotation",
  "class": "PanoramaPlayer",
  "buttonStop": [
   "this.IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4",
   "this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB"
  ],
  "displayPlaybackBar": true,
  "viewerArea": "this.MainViewer",
  "id": "MainViewerPanoramaPlayer",
  "preloadEnabled": false,
  "buttonToggleHotspots": {
   "toolTipPaddingRight": 6,
   "class": "IconButton",
   "toolTipBorderRadius": 3,
   "paddingRight": 0,
   "toolTipShadowOpacity": 1,
   "verticalAlign": "middle",
   "mode": "toggle",
   "maxHeight": 70,
   "height": "76.75%",
   "width": "17.15%",
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
   "minWidth": 50,
   "click": "if(!this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, true, 0, this.effect_CDD059FA_EED0_D223_41DB_70ACFBE986FE, 'showEffect', false) } else if(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, false, 0, this.effect_CDD049FB_EED0_D221_41EB_CA2134B978E0, 'hideEffect', false) }",
   "toolTipTextShadowBlurRadius": 3,
   "toolTipOpacity": 0.7,
   "toolTipShadowVerticalLength": 0,
   "toolTipPaddingBottom": 4,
   "maxWidth": 70,
   "shadow": false,
   "minHeight": 50,
   "cursor": "hand",
   "paddingBottom": 0,
   "toolTipFontSize": 12,
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
   "iconURL": "skin/IconButton_80E5955A_8E23_BB05_41CA_43DD61DBAEE9.png",
   "toolTipFontStyle": "normal"
  },
  "mouseControlMode": "drag_acceleration",
  "buttonPlay": "this.IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED",
  "buttonCardboardView": {
   "class": "IconButton",
   "paddingRight": 0,
   "verticalAlign": "middle",
   "mode": "push",
   "maxHeight": 70,
   "height": "76.75%",
   "width": "17.15%",
   "transparencyActive": false,
   "paddingLeft": 0,
   "borderSize": 0,
   "borderRadius": 0,
   "horizontalAlign": "center",
   "minWidth": 50,
   "maxWidth": 70,
   "shadow": false,
   "minHeight": 50,
   "cursor": "hand",
   "paddingBottom": 0,
   "id": "IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37",
   "backgroundOpacity": 0,
   "paddingTop": 0,
   "iconURL": "skin/IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37.png"
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_2A3212FD_3D4C_0E23_41C0_04B3E12E8F14_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -17.16,
   "pitch": -3.97
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 "this.panorama_25553EB7_3D4C_162F_41C4_ABE3C7F9C5B0",
 {
  "class": "PanoramaCamera",
  "id": "panorama_25553EB7_3D4C_162F_41C4_ABE3C7F9C5B0_camera",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 "this.panorama_25789C34_3D4C_1A20_41A5_C0AD56C4B00F",
 {
  "class": "PanoramaCamera",
  "id": "panorama_25789C34_3D4C_1A20_41A5_C0AD56C4B00F_camera",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 "this.panorama_2554CA98_3D4C_3EE1_41C5_3E8526A1D270",
 {
  "class": "PanoramaCamera",
  "id": "panorama_2554CA98_3D4C_3EE1_41C5_3E8526A1D270_camera",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 "this.panorama_255448EA_3D4C_1A21_41C9_3DB54CE3D3DC",
 {
  "class": "PanoramaCamera",
  "id": "panorama_255448EA_3D4C_1A21_41C9_3DB54CE3D3DC_camera",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 "this.panorama_257A7074_3D4C_0A21_41A8_648C8CC16F7F",
 {
  "class": "PanoramaCamera",
  "id": "panorama_257A7074_3D4C_0A21_41A8_648C8CC16F7F_camera",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_2A3212FD_3D4C_0E23_41C0_04B3E12E8F14",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_2A3212FD_3D4C_0E23_41C0_04B3E12E8F14_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_25553EB7_3D4C_162F_41C4_ABE3C7F9C5B0",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_25553EB7_3D4C_162F_41C4_ABE3C7F9C5B0_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_25789C34_3D4C_1A20_41A5_C0AD56C4B00F",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_25789C34_3D4C_1A20_41A5_C0AD56C4B00F_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_2554CA98_3D4C_3EE1_41C5_3E8526A1D270",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_2554CA98_3D4C_3EE1_41C5_3E8526A1D270_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_255448EA_3D4C_1A21_41C9_3DB54CE3D3DC",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_255448EA_3D4C_1A21_41C9_3DB54CE3D3DC_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_257A7074_3D4C_0A21_41A8_648C8CC16F7F",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_257A7074_3D4C_0A21_41A8_648C8CC16F7F_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 0)"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist",
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_2A3212FD_3D4C_0E23_41C0_04B3E12E8F14",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_2A3212FD_3D4C_0E23_41C0_04B3E12E8F14_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 0, 1)"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_25553EB7_3D4C_162F_41C4_ABE3C7F9C5B0",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_25553EB7_3D4C_162F_41C4_ABE3C7F9C5B0_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 1, 2)"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_25789C34_3D4C_1A20_41A5_C0AD56C4B00F",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_25789C34_3D4C_1A20_41A5_C0AD56C4B00F_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 2, 3)"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_2554CA98_3D4C_3EE1_41C5_3E8526A1D270",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_2554CA98_3D4C_3EE1_41C5_3E8526A1D270_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 3, 4)"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_255448EA_3D4C_1A21_41C9_3DB54CE3D3DC",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_255448EA_3D4C_1A21_41C9_3DB54CE3D3DC_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 4, 5)"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_257A7074_3D4C_0A21_41A8_648C8CC16F7F",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_257A7074_3D4C_0A21_41A8_648C8CC16F7F_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 5, 0)"
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
   "class": "VideoResource",
   "height": 1080,
   "webmUrl": "media/video_210B394E_3D54_1A60_41A3_CB42BEC0D3EC.webm"
  },
  "width": 1920,
  "scaleMode": "fit_outside",
  "loop": false,
  "height": 1080,
  "id": "video_210B394E_3D54_1A60_41A3_CB42BEC0D3EC"
 },
 {
  "class": "PlayList",
  "id": "playList_27D7F36D_3EB1_4B55_41BD_24151A787095",
  "items": [
   {
    "begin": "this.registerKey('visibility_Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB', this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB.get('visible')); this.registerKey('visibility_ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472', this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472.get('visible')); this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setComponentVisibility(this.Container_86F3A56C_8E22_5B1D_41CA_9CE53436FE56, false, -1, this.effect_22973FB1_2DD9_0423_41C1_E1E03953DCCE, 'hideEffect', false); this.setComponentVisibility(this.Container_807F782A_8E23_A905_41DE_623121285A09, false, -1, this.effect_22974FB2_2DD9_0421_41BA_84205292D043, 'hideEffect', false); this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, false, -1, this.effect_3876CD6E_2DF9_0421_41C1_F0AB7F279824, 'hideEffect', false); this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, false, -1, this.effect_22899FB3_2DD9_0427_41BB_298AEB3D2851, 'hideEffect', false); this.setComponentVisibility(this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB, true, -1, this.effect_2289DFB3_2DD9_0427_41AE_A35795880BA7, 'showEffect', false)",
    "media": "this.video_210B394E_3D54_1A60_41A3_CB42BEC0D3EC",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_27D7F36D_3EB1_4B55_41BD_24151A787095, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_27D7F36D_3EB1_4B55_41BD_24151A787095, 0, this.video_210B394E_3D54_1A60_41A3_CB42BEC0D3EC)",
    "class": "VideoPlayListItem",
    "end": "this.setComponentVisibility(this.Container_86F3A56C_8E22_5B1D_41CA_9CE53436FE56, true, -1, this.effect_22975FB2_2DD9_0421_41B4_7A2443082F44, 'showEffect', false); this.setComponentVisibility(this.Container_86F3A56C_8E22_5B1D_41CA_9CE53436FE56, true, -1, this.effect_22975FB2_2DD9_0421_41B4_7A2443082F44, 'showEffect', false); this.setComponentVisibility(this.Container_807F782A_8E23_A905_41DE_623121285A09, true, -1, this.effect_22977FB2_2DD9_0421_41C1_F53B037346DF, 'showEffect', false); this.setComponentVisibility(this.Container_807F782A_8E23_A905_41DE_623121285A09, true, -1, this.effect_22977FB2_2DD9_0421_41C1_F53B037346DF, 'showEffect', false); if(this.existsKey('visibility_ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472')){ if(this.getKey('visibility_ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472')) { this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, true, -1, this.effect_246D34F2_3EB1_4D4F_41CC_F354D5E3E62F, 'showEffect', false); } else { this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, false, -1, this.effect_3876CD6E_2DF9_0421_41C1_F0AB7F279824, 'hideEffect', false); } }; this.unregisterKey('visibility_ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472'); if(this.existsKey('visibility_Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB')){ if(this.getKey('visibility_Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB')) { this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, true, -1, this.effect_246DF4F2_3EB1_4D4F_41B5_ECB3972E378C, 'showEffect', false); } else { this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, false, -1, this.effect_22899FB3_2DD9_0427_41BB_298AEB3D2851, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB'); this.setComponentVisibility(this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB, false, -1, this.effect_2289EFB3_2DD9_0427_41C0_ACB5A72AE218, 'hideEffect', false); this.setComponentVisibility(this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB, false, -1, this.effect_2289EFB3_2DD9_0427_41C0_ACB5A72AE218, 'hideEffect', false)",
    "player": "this.MainViewerVideoPlayer"
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
      "class": "Photo",
      "label": "DJI_0355",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/photo_25EB8F3B_3D54_3627_41C1_FA6C2C76D85C.JPG"
        }
       ]
      },
      "width": 5472,
      "duration": 5000,
      "height": 3648,
      "id": "photo_25EB8F3B_3D54_3627_41C1_FA6C2C76D85C"
     },
     "camera": {
      "easing": "linear",
      "class": "MovementPhotoCamera",
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
      "scaleMode": "fit_outside",
      "duration": 5000
     }
    },
    {
     "class": "PhotoPlayListItem",
     "media": {
      "thumbnailUrl": "media/photo_2537233E_3D54_0E20_41B8_95E46BC1EC07_t.jpg",
      "class": "Photo",
      "label": "DJI_0364",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/photo_2537233E_3D54_0E20_41B8_95E46BC1EC07.jpg"
        }
       ]
      },
      "width": 4900,
      "duration": 5000,
      "height": 3264,
      "id": "photo_2537233E_3D54_0E20_41B8_95E46BC1EC07"
     },
     "camera": {
      "easing": "linear",
      "class": "MovementPhotoCamera",
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
      "scaleMode": "fit_outside",
      "duration": 5000
     }
    },
    {
     "class": "PhotoPlayListItem",
     "media": {
      "thumbnailUrl": "media/photo_25363697_3D54_16EF_41C7_78CA5BF042D8_t.jpg",
      "class": "Photo",
      "label": "DJI_0369",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/photo_25363697_3D54_16EF_41C7_78CA5BF042D8.jpg"
        }
       ]
      },
      "width": 4900,
      "duration": 5000,
      "height": 3264,
      "id": "photo_25363697_3D54_16EF_41C7_78CA5BF042D8"
     },
     "camera": {
      "easing": "linear",
      "class": "MovementPhotoCamera",
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
      "scaleMode": "fit_outside",
      "duration": 5000
     }
    },
    {
     "class": "PhotoPlayListItem",
     "media": {
      "thumbnailUrl": "media/photo_2536FA03_3D54_19E7_41C9_9A86E77D5C4C_t.jpg",
      "class": "Photo",
      "label": "DJI_0388",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/photo_2536FA03_3D54_19E7_41C9_9A86E77D5C4C.JPG"
        }
       ]
      },
      "width": 5472,
      "duration": 5000,
      "height": 3648,
      "id": "photo_2536FA03_3D54_19E7_41C9_9A86E77D5C4C"
     },
     "camera": {
      "easing": "linear",
      "class": "MovementPhotoCamera",
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
      "scaleMode": "fit_outside",
      "duration": 5000
     }
    },
    {
     "class": "PhotoPlayListItem",
     "media": {
      "thumbnailUrl": "media/photo_25365DAF_3D54_1A3F_41C9_6122F3F568B7_t.jpg",
      "class": "Photo",
      "label": "DJI_0402",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/photo_25365DAF_3D54_1A3F_41C9_6122F3F568B7.jpg"
        }
       ]
      },
      "width": 4900,
      "duration": 5000,
      "height": 3264,
      "id": "photo_25365DAF_3D54_1A3F_41C9_6122F3F568B7"
     },
     "camera": {
      "easing": "linear",
      "class": "MovementPhotoCamera",
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
      "scaleMode": "fit_outside",
      "duration": 5000
     }
    },
    {
     "class": "PhotoPlayListItem",
     "media": {
      "thumbnailUrl": "media/photo_2536E107_3D54_0BE0_41C7_237D79278EAE_t.jpg",
      "class": "Photo",
      "label": "DJI_0405",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/photo_2536E107_3D54_0BE0_41C7_237D79278EAE.jpg"
        }
       ]
      },
      "width": 4900,
      "duration": 5000,
      "height": 3264,
      "id": "photo_2536E107_3D54_0BE0_41C7_237D79278EAE"
     },
     "camera": {
      "easing": "linear",
      "class": "MovementPhotoCamera",
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
      "scaleMode": "fit_outside",
      "duration": 5000
     }
    },
    {
     "class": "PhotoPlayListItem",
     "media": {
      "thumbnailUrl": "media/photo_25361460_3D54_0A21_41C5_9CEF516D0083_t.jpg",
      "class": "Photo",
      "label": "DJI_0415",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/photo_25361460_3D54_0A21_41C5_9CEF516D0083.jpg"
        }
       ]
      },
      "width": 4900,
      "duration": 5000,
      "height": 3264,
      "id": "photo_25361460_3D54_0A21_41C5_9CEF516D0083"
     },
     "camera": {
      "easing": "linear",
      "class": "MovementPhotoCamera",
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
      "scaleMode": "fit_outside",
      "duration": 5000
     }
    },
    {
     "class": "PhotoPlayListItem",
     "media": {
      "thumbnailUrl": "media/photo_2536E7CB_3D54_F667_41C8_0C74E4EA5879_t.jpg",
      "class": "Photo",
      "label": "DJI_0441",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/photo_2536E7CB_3D54_F667_41C8_0C74E4EA5879.jpg"
        }
       ]
      },
      "width": 4900,
      "duration": 5000,
      "height": 3264,
      "id": "photo_2536E7CB_3D54_F667_41C8_0C74E4EA5879"
     },
     "camera": {
      "easing": "linear",
      "class": "MovementPhotoCamera",
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
      "scaleMode": "fit_outside",
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
  "id": "playList_27D6436D_3EB1_4B55_41C2_AA9198D858AA",
  "items": [
   {
    "begin": "this.loopAlbum(this.playList_27D6436D_3EB1_4B55_41C2_AA9198D858AA, 0)",
    "class": "PhotoAlbumPlayListItem",
    "media": "this.album_1AE8DEB7_0EE7_8CC7_4198_F5B75788CCF6",
    "player": "this.ViewerAreaLabeled_9FD7235A_96CD_9045_41D9_23A3BCBDB1C6PhotoAlbumPlayer"
   }
  ]
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
  "id": "ImageResource_2F68CE66_3D54_1621_41C2_54B4E6D3FD7B"
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
  "class": "FadeInEffect",
  "id": "effect_98AADBB0_96C5_F0C5_41B2_1C4D08E503DB",
  "duration": 200
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
  "id": "effect_CD2B8C48_EED0_726F_41E4_49557D18059C",
  "duration": 200
 },
 {
  "easing": "linear",
  "class": "FadeOutEffect",
  "id": "effect_CD2BEC48_EED0_726F_41DF_F342BE2B4EF0",
  "duration": 200
 },
 {
  "easing": "linear",
  "class": "FadeOutEffect",
  "id": "effect_9B0AF4E2_96C4_F045_41D3_0E00FEE03A15",
  "duration": 200
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_27EBA393_3EB1_4BCC_4193_A655CE312E5D",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -66.07,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_27E013A3_3EB1_4BCD_41CE_CB0A0D07C335",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 176.98,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_271F53B3_3EB1_4BCD_41B1_8815469763A6",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 121.64,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_271523C3_3EB1_4B4D_41C1_16FEA335D917",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -54.01,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_270393D2_3EB1_4B4F_41B2_0E146586984F",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -48.23,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_273C63E0_3EB1_4B4C_41B3_01CC04DE8A84",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -147.72,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_272F63F0_3EB1_4B4C_41CA_B82C77C1238A",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 158.27,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_2759C3FF_3EB1_4B34_41C9_C6111D64AB6E",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 173.34,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_274B340E_3EB1_4CD4_41C5_0A1CA0E5C3CA",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -178.75,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_2746341E_3EB1_4CF4_41B5_A2761BBF0ECF",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -70.34,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_2770E42D_3EB1_4CD4_41C2_6E92169C9CE0",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 138.93,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_27631438_3EB1_4D3C_41AC_5364C06348EC",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -178.62,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_249D8443_3EB1_4D4D_41AC_1854B082A884",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 171.88,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_248F544E_3EB1_4D57_41B1_232FD740A411",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -14.57,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_24B91458_3EB1_4D7B_41C7_0E1B4B948E7D",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -14.32,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_24ABE462_3EB1_4D4F_41C2_DA4B129E998D",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -41.2,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_24A6346C_3EB1_4D5B_41C0_ED859854B873",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -27.63,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_24D0A476_3EB1_4D37_41CA_962800051089",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 168.86,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_24C3E480_3EB1_4DCB_41BA_812462B52E7B",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -32.66,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_24FC148B_3EB1_4DDD_41AF_6DC13A066D78",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -22.11,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_24EF5495_3EB1_4DF5_41C9_E4981509B5FF",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -169.07,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_2419849F_3EB1_4DF5_41C2_9A13A6360CAA",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 158.52,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_240A74AA_3EB1_4DDF_41C6_5AB43292885B",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 138.17,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_240554B3_3EB1_4DCD_4199_53F65D8C6F9D",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 42.96,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_243794BD_3EB1_4D35_419F_C0D06117581E",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -161.54,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_2422E4C7_3EB1_4D55_417B_06030B723F3D",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -165.93,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_245374D1_3EB1_4D4D_417B_3B64841D3E25",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 178.37,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_244D94DB_3EB1_4D7D_41AB_04DC5F041C34",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -136.16,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_2478B4E5_3EB1_4D55_41C9_C96473E55559",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -140.94,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_2469C4F0_3EB1_4D4B_41CC_332D28725EDA",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -61.8,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
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
  "id": "effect_3876CD6E_2DF9_0421_41C1_F0AB7F279824",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "id": "effect_246D34F2_3EB1_4D4F_41CC_F354D5E3E62F",
  "duration": 1000
 },
 "this.effect_3876CD6E_2DF9_0421_41C1_F0AB7F279824",
 {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "id": "effect_22899FB3_2DD9_0427_41BB_298AEB3D2851",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "id": "effect_246DF4F2_3EB1_4D4F_41B5_ECB3972E378C",
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
  "maximumAngle": 231.16,
  "autoplay": true,
  "class": "DirectionalPanoramaAudio",
  "yaw": -17.74,
  "loop": true,
  "audio": {
   "mp3Url": "media/audio_A83B2F1A_B250_204B_41B2_61A870B2B428.mp3",
   "id": "audioresource_1D15163A_0EEB_BFC9_419F_EF5F7074EFB1",
   "oggUrl": "media/audio_A83B2F1A_B250_204B_41B2_61A870B2B428.ogg",
   "class": "AudioResource"
  },
  "id": "audio_A83B2F1A_B250_204B_41B2_61A870B2B428",
  "pitch": -7.7
 },
 {
  "maximumAngle": 97.14,
  "autoplay": true,
  "class": "DirectionalPanoramaAudio",
  "yaw": 4.55,
  "loop": true,
  "audio": {
   "mp3Url": "media/audio_A875C8FE_B250_61CA_41D2_1BDD70C9887A.mp3",
   "id": "audioresource_A84F2D34_B270_605F_41E2_4CF67AB762D2",
   "oggUrl": "media/audio_A875C8FE_B250_61CA_41D2_1BDD70C9887A.ogg",
   "class": "AudioResource"
  },
  "id": "audio_A875C8FE_B250_61CA_41D2_1BDD70C9887A",
  "pitch": -18.69
 },
 {
  "maximumAngle": 61.89,
  "autoplay": true,
  "class": "DirectionalPanoramaAudio",
  "yaw": -10.86,
  "loop": true,
  "audio": {
   "mp3Url": "media/audio_A87513BA_B273_E04A_41AA_0102CD2EF1BE.mp3",
   "id": "audioresource_A83107F8_B270_2FD6_41E2_DAE1F661A577",
   "oggUrl": "media/audio_A87513BA_B273_E04A_41AA_0102CD2EF1BE.ogg",
   "class": "AudioResource"
  },
  "id": "audio_A87513BA_B273_E04A_41AA_0102CD2EF1BE",
  "pitch": -0.76
 },
 {
  "autoplay": true,
  "class": "PanoramaAudio",
  "audio": "this.audioresource_A83107F8_B270_2FD6_41E2_DAE1F661A577",
  "id": "audio_A83165F4_B270_23DF_41DC_E385B4E6556E"
 },
 {
  "maximumAngle": 222.06,
  "autoplay": true,
  "class": "DirectionalPanoramaAudio",
  "yaw": 0,
  "loop": true,
  "audio": "this.audioresource_A83107F8_B270_2FD6_41E2_DAE1F661A577",
  "id": "audio_A8213A22_B270_E07A_41D5_F14349BD0E04",
  "pitch": 0
 },
 {
  "maximumAngle": 265.52,
  "autoplay": true,
  "class": "DirectionalPanoramaAudio",
  "yaw": -40.93,
  "loop": true,
  "audio": "this.audioresource_A83107F8_B270_2FD6_41E2_DAE1F661A577",
  "id": "audio_A8284F56_B270_60DB_41E0_27608EB2E0B9",
  "pitch": 0.51
 },
 {
  "thumbnailUrl": "media/photo_1D911E4D_0EFC_8C4B_4180_DC7B2E0CE38C_t.jpg",
  "class": "Photo",
  "label": "7. Ben xe mien Dong moi",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/photo_1D911E4D_0EFC_8C4B_4180_DC7B2E0CE38C.jpg"
    }
   ]
  },
  "width": 8192,
  "duration": 5000,
  "height": 4096,
  "id": "photo_1D911E4D_0EFC_8C4B_4180_DC7B2E0CE38C"
 },
 {
  "maximumAngle": 360,
  "autoplay": true,
  "class": "DirectionalPanoramaAudio",
  "yaw": 0,
  "loop": true,
  "audio": "this.audioresource_1D15163A_0EEB_BFC9_419F_EF5F7074EFB1",
  "id": "audio_1D15363A_0EEB_BFC9_4193_928F3B1A384C",
  "pitch": 0
 },
 {
  "autoplay": true,
  "class": "MediaAudio",
  "audio": {
   "mp3Url": "media/audio_15B68E59_3D54_1663_4199_CC0245D4ECA1.mp3",
   "class": "AudioResource",
   "oggUrl": "media/audio_15B68E59_3D54_1663_4199_CC0245D4ECA1.ogg"
  },
  "id": "audio_15B68E59_3D54_1663_4199_CC0245D4ECA1"
 }
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
  "shadow": false,
  "progressBackgroundOpacity": 1,
  "progressBarBorderSize": 0,
  "toolTipPaddingBottom": 4,
  "progressBarBorderRadius": 0,
  "progressBorderRadius": 0,
  "toolTipFontWeight": "normal",
  "paddingBottom": 0,
  "toolTipFontSize": 12,
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
  "toolTipFontColor": "#606060",
  "transitionMode": "blending",
  "paddingTop": 0,
  "progressHeight": 10,
  "playbackBarBorderRadius": 0,
  "playbackBarProgressBorderColor": "#000000",
  "toolTipPaddingRight": 6,
  "class": "ViewerArea",
  "toolTipBorderRadius": 3,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "progressLeft": 0,
  "progressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarHeadBorderRadius": 0,
  "playbackBarBorderColor": "#FFFFFF",
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarProgressOpacity": 1,
  "paddingLeft": 0,
  "toolTipBorderColor": "#767676",
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
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
  "playbackBarHeadShadowHorizontalLength": 0,
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
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "toolTipPaddingTop": 4,
  "toolTipFontStyle": "normal",
  "right": "0%"
 },
 {
  "class": "Container",
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "verticalAlign": "middle",
  "paddingRight": 10,
  "height": "8%",
  "paddingLeft": 10,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "borderSize": 0,
  "layout": "horizontal",
  "horizontalAlign": "left",
  "minWidth": 1,
  "gap": 50,
  "borderRadius": 5,
  "shadow": false,
  "contentOpaque": false,
  "backgroundColorDirection": "vertical",
  "paddingBottom": 0,
  "backgroundColorRatios": [
   0,
   1
  ],
  "minHeight": 1,
  "bottom": "3%",
  "id": "Container_86F3A56C_8E22_5B1D_41CA_9CE53436FE56",
  "scrollBarColor": "#000000",
  "backgroundOpacity": 0.25,
  "paddingTop": 0,
  "scrollBarVisible": "rollOver",
  "overflow": "visible",
  "left": "0%",
  "scrollBarOpacity": 0.5,
  "right": "0%",
  "children": [
   {
    "toolTipPaddingRight": 6,
    "class": "IconButton",
    "toolTipBorderRadius": 3,
    "paddingRight": 0,
    "toolTipShadowOpacity": 1,
    "verticalAlign": "middle",
    "mode": "push",
    "maxHeight": 80,
    "height": "100%",
    "width": "100%",
    "paddingLeft": 0,
    "toolTipBorderColor": "#767676",
    "transparencyActive": true,
    "toolTip": "Open Info",
    "toolTipBorderSize": 1,
    "toolTipTextShadowColor": "#000000",
    "borderSize": 0,
    "toolTipBackgroundColor": "#000000",
    "toolTipPaddingLeft": 6,
    "borderRadius": 0,
    "horizontalAlign": "center",
    "minWidth": 50,
    "click": "this.showPopupImage(this.ImageResource_2F68CE66_3D54_1621_41C2_54B4E6D3FD7B, null, '85%', '85%', this.FadeInEffect_8ED05F70_96C4_F045_41DC_2AB82A556F92, this.FadeOutEffect_8ED06F70_96C4_F045_41DA_C74400CF7B15, {'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'rollOverBorderSize':0,'pressedBackgroundColorDirection':'vertical','borderColor':'#000000','backgroundColorDirection':'vertical','pressedIconColor':'#CCCCCC','backgroundColor':['#000000','#000000','#000000'],'paddingBottom':10,'backgroundColorRatios':[0,0.09803921568627451,1],'iconHeight':25,'iconColor':'#FFFFFF','pressedIconWidth':25,'pressedIconHeight':25,'backgroundOpacity':0.15,'rollOverBorderColor':'#000000','rollOverBackgroundOpacity':0.5,'rollOverIconHeight':25,'paddingLeft':10,'rollOverIconLineWidth':3,'iconWidth':25,'pressedBackgroundColor':['#000000','#000000','#000000'],'rollOverIconWidth':25,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':3,'pressedBorderSize':0,'rollOverIconColor':'#52B7EF','rollOverBackgroundColorDirection':'vertical','rollOverBackgroundColor':['#000000','#000000','#000000'],'iconLineWidth':3,'paddingTop':10,'borderSize':0,'paddingRight':10,'pressedBorderColor':'#000000'}, null, null, false)",
    "toolTipTextShadowBlurRadius": 3,
    "toolTipOpacity": 0.7,
    "toolTipShadowVerticalLength": 0,
    "toolTipPaddingBottom": 4,
    "maxWidth": 80,
    "shadow": false,
    "minHeight": 50,
    "cursor": "hand",
    "paddingBottom": 0,
    "toolTipFontSize": 12,
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
    "iconURL": "skin/IconButton_87577B8F_8E22_AF1B_41CC_79EB87AE6DED.png",
    "toolTipFontStyle": "normal",
    "rollOverIconURL": "skin/IconButton_87577B8F_8E22_AF1B_41CC_79EB87AE6DED_rollover.png"
   },
   {
    "toolTipPaddingRight": 6,
    "class": "IconButton",
    "toolTipBorderRadius": 3,
    "paddingRight": 0,
    "toolTipShadowOpacity": 1,
    "verticalAlign": "middle",
    "mode": "push",
    "maxHeight": 80,
    "height": "100%",
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
    "minWidth": 50,
    "click": "this.setMediaBehaviour(this.playList_27D7F36D_3EB1_4B55_41BD_24151A787095, 0); this.MainViewerVideoPlayer.play()",
    "toolTipTextShadowBlurRadius": 3,
    "toolTipOpacity": 0.7,
    "toolTipShadowVerticalLength": 0,
    "toolTipPaddingBottom": 4,
    "maxWidth": 80,
    "shadow": false,
    "minHeight": 50,
    "cursor": "hand",
    "paddingBottom": 0,
    "toolTipFontSize": 12,
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
    "iconURL": "skin/IconButton_213ED70C_2DB2_E6C5_41B6_0CCE6C77E889.png",
    "toolTipFontStyle": "normal",
    "rollOverIconURL": "skin/IconButton_213ED70C_2DB2_E6C5_41B6_0CCE6C77E889_rollover.png"
   },
   "this.IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED",
   {
    "toolTipPaddingRight": 6,
    "class": "IconButton",
    "toolTipBorderRadius": 3,
    "paddingRight": 0,
    "toolTipShadowOpacity": 1,
    "verticalAlign": "middle",
    "mode": "push",
    "maxHeight": 80,
    "height": "100%",
    "width": "100%",
    "paddingLeft": 0,
    "toolTipBorderColor": "#767676",
    "transparencyActive": false,
    "toolTip": "FLoorPlan",
    "toolTipBorderSize": 1,
    "toolTipTextShadowColor": "#000000",
    "borderSize": 0,
    "toolTipBackgroundColor": "#F6F6F6",
    "toolTipPaddingLeft": 6,
    "borderRadius": 0,
    "horizontalAlign": "center",
    "minWidth": 50,
    "toolTipTextShadowBlurRadius": 3,
    "toolTipOpacity": 1,
    "toolTipShadowVerticalLength": 0,
    "toolTipPaddingBottom": 4,
    "maxWidth": 80,
    "shadow": false,
    "minHeight": 50,
    "cursor": "hand",
    "paddingBottom": 0,
    "toolTipFontSize": 12,
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
    "iconURL": "skin/IconButton_2FC9210C_3E8F_C4D4_41A7_10D1404CA49B.png",
    "toolTipFontStyle": "normal"
   },
   {
    "toolTipPaddingRight": 6,
    "class": "IconButton",
    "toolTipBorderRadius": 3,
    "paddingRight": 0,
    "toolTipShadowOpacity": 1,
    "verticalAlign": "middle",
    "mode": "toggle",
    "maxHeight": 80,
    "height": "100%",
    "width": "100%",
    "paddingLeft": 0,
    "toolTipBorderColor": "#767676",
    "transparencyActive": true,
    "toolTip": "Panorama List",
    "toolTipBorderSize": 1,
    "toolTipTextShadowColor": "#000000",
    "borderSize": 0,
    "toolTipBackgroundColor": "#000000",
    "toolTipPaddingLeft": 6,
    "borderRadius": 0,
    "horizontalAlign": "center",
    "pressedIconURL": "skin/IconButton_843BBEF5_8E22_690F_419D_28CBDD771ACC_pressed.png",
    "minWidth": 50,
    "click": "if(!this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472.get('visible')){ this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, true, 0, null, null, false) } else if(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472.get('visible')){ this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, false, 0, null, null, false) }",
    "toolTipTextShadowBlurRadius": 3,
    "toolTipOpacity": 0.7,
    "toolTipShadowVerticalLength": 0,
    "toolTipPaddingBottom": 4,
    "maxWidth": 80,
    "shadow": false,
    "minHeight": 50,
    "cursor": "hand",
    "paddingBottom": 0,
    "toolTipFontSize": 12,
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
    "iconURL": "skin/IconButton_843BBEF5_8E22_690F_419D_28CBDD771ACC.png",
    "toolTipFontStyle": "normal"
   }
  ]
 },
 {
  "class": "Container",
  "paddingRight": 0,
  "verticalAlign": "middle",
  "height": "8.5%",
  "width": "25%",
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "paddingLeft": 0,
  "borderSize": 0,
  "layout": "horizontal",
  "horizontalAlign": "right",
  "minWidth": 1,
  "gap": 1,
  "borderRadius": 5,
  "contentOpaque": false,
  "top": "2%",
  "minHeight": 1,
  "paddingBottom": 0,
  "shadow": false,
  "id": "Container_807F782A_8E23_A905_41DE_623121285A09",
  "scrollBarColor": "#000000",
  "backgroundOpacity": 0,
  "paddingTop": 0,
  "scrollBarVisible": "rollOver",
  "overflow": "visible",
  "scrollBarOpacity": 0.5,
  "right": "1%",
  "children": [
   {
    "class": "Container",
    "paddingRight": 0,
    "verticalAlign": "middle",
    "height": "100%",
    "width": "75%",
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "paddingLeft": 0,
    "borderSize": 0,
    "layout": "horizontal",
    "horizontalAlign": "right",
    "minWidth": 1,
    "gap": 10,
    "borderRadius": 0,
    "contentOpaque": false,
    "shadow": false,
    "minHeight": 1,
    "paddingBottom": 0,
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
      "class": "IconButton",
      "toolTipBorderRadius": 3,
      "paddingRight": 0,
      "toolTipShadowOpacity": 1,
      "verticalAlign": "middle",
      "mode": "toggle",
      "maxHeight": 70,
      "height": "76.75%",
      "width": "17.15%",
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
      "minWidth": 50,
      "click": "if(!this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, true, 0, null, null, false) } else if(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, false, 0, null, null, false) }",
      "toolTipTextShadowBlurRadius": 3,
      "toolTipOpacity": 0.7,
      "toolTipShadowVerticalLength": 0,
      "toolTipPaddingBottom": 4,
      "maxWidth": 70,
      "shadow": false,
      "minHeight": 50,
      "cursor": "hand",
      "paddingBottom": 0,
      "toolTipFontSize": 12,
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
      "iconURL": "skin/IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA.png",
      "toolTipFontStyle": "normal"
     },
     {
      "toolTipPaddingRight": 6,
      "class": "IconButton",
      "toolTipBorderRadius": 3,
      "paddingRight": 0,
      "toolTipShadowOpacity": 1,
      "verticalAlign": "middle",
      "mode": "toggle",
      "maxHeight": 70,
      "height": "76.75%",
      "width": "17.15%",
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
      "minWidth": 50,
      "click": "if(!this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, true, 0, this.effect_CACBF85D_EED0_7261_41DB_A3B65ECE0D5D, 'showEffect', false) } else if(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, false, 0, this.effect_CACBC85D_EED0_7261_41BE_8CF4C3A8170C, 'hideEffect', false) }",
      "toolTipTextShadowBlurRadius": 3,
      "toolTipOpacity": 0.7,
      "toolTipShadowVerticalLength": 0,
      "toolTipPaddingBottom": 4,
      "maxWidth": 70,
      "shadow": false,
      "minHeight": 50,
      "cursor": "hand",
      "paddingBottom": 0,
      "toolTipFontSize": 12,
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
      "iconURL": "skin/IconButton_8105A313_8E22_BF0B_41E1_331C6035A930.png",
      "toolTipFontStyle": "normal"
     },
     "this.IconButton_80E5955A_8E23_BB05_41CA_43DD61DBAEE9"
    ]
   },
   {
    "class": "Container",
    "paddingRight": 0,
    "verticalAlign": "middle",
    "height": "100%",
    "width": "15.59%",
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "paddingLeft": 0,
    "borderSize": 0,
    "layout": "horizontal",
    "horizontalAlign": "center",
    "minWidth": 1,
    "gap": 10,
    "borderRadius": 0,
    "contentOpaque": false,
    "shadow": false,
    "minHeight": 1,
    "paddingBottom": 0,
    "id": "Container_80B2155B_8E3F_DB3B_41A1_77496D90E2FB",
    "scrollBarColor": "#000000",
    "backgroundOpacity": 0,
    "paddingTop": 0,
    "scrollBarVisible": "rollOver",
    "overflow": "visible",
    "scrollBarOpacity": 0.5,
    "children": [
     {
      "toolTipPaddingRight": 6,
      "class": "IconButton",
      "toolTipBorderRadius": 3,
      "paddingRight": 0,
      "toolTipShadowOpacity": 1,
      "verticalAlign": "middle",
      "mode": "toggle",
      "maxHeight": 70,
      "height": "76.75%",
      "width": "82.76%",
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
      "minWidth": 50,
      "click": "if(!this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, true, 0, this.effect_CD2B8C48_EED0_726F_41E4_49557D18059C, 'showEffect', false) } else if(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, false, 0, this.effect_CD2BEC48_EED0_726F_41DF_F342BE2B4EF0, 'hideEffect', false) }",
      "toolTipTextShadowBlurRadius": 3,
      "toolTipOpacity": 0.7,
      "toolTipShadowVerticalLength": 0,
      "toolTipPaddingBottom": 4,
      "maxWidth": 70,
      "shadow": false,
      "minHeight": 50,
      "cursor": "hand",
      "paddingBottom": 0,
      "toolTipFontSize": 12,
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
      "iconURL": "skin/IconButton_811D89E1_8E3D_AB07_4191_94003C90B2FF.png",
      "toolTipFontStyle": "normal"
     }
    ]
   }
  ]
 },
 {
  "playList": "this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist",
  "backgroundColor": [
   "#000000"
  ],
  "selectedItemBackgroundColor": [],
  "paddingRight": 0,
  "scrollBarWidth": 7,
  "scrollBarMargin": 4,
  "gap": 0,
  "itemHorizontalAlign": "center",
  "selectedItemLabelFontStyle": "italic",
  "horizontalAlign": "center",
  "minWidth": 1,
  "itemHeight": "100%",
  "itemMode": "normal",
  "itemLabelFontColor": "#FFFFFF",
  "rollOverItemLabelFontColor": "#FFFFFF",
  "itemThumbnailScaleMode": "fit_outside",
  "rollOverItemLabelFontWeight": "bold",
  "shadow": false,
  "itemMinHeight": 50,
  "backgroundColorDirection": "vertical",
  "paddingBottom": 0,
  "selectedItemLabelTextDecoration": "underline",
  "scrollBarColor": "#52B7EF",
  "itemPaddingBottom": 3,
  "itemLabelFontWeight": "normal",
  "rollOverItemLabelTextDecoration": "underline",
  "paddingTop": 0,
  "itemThumbnailOpacity": 1,
  "selectedItemThumbnailShadowVerticalLength": 0,
  "itemThumbnailBorderRadius": 25,
  "selectedItemLabelFontColor": "#FFFFFF",
  "scrollBarVisible": "rollOver",
  "itemThumbnailShadow": false,
  "itemLabelTextDecoration": "none",
  "scrollBarOpacity": 1,
  "itemPaddingRight": 3,
  "itemLabelFontStyle": "normal",
  "itemMinWidth": 50,
  "class": "ThumbnailGrid",
  "selectedItemThumbnailShadow": true,
  "selectedItemLabelFontSize": 12,
  "selectedItemThumbnailShadowBlurRadius": 10,
  "itemLabelHorizontalAlign": "center",
  "itemThumbnailWidth": 80,
  "selectedItemThumbnailShadowOpacity": 0.73,
  "itemBorderRadius": 0,
  "itemPaddingLeft": 3,
  "paddingLeft": 0,
  "itemMaxHeight": 10000,
  "height": "40%",
  "selectedItemBorderSize": 0,
  "borderSize": 0,
  "itemPaddingTop": 3,
  "itemVerticalAlign": "middle",
  "borderRadius": 3,
  "itemLabelGap": 9,
  "itemBackgroundColorDirection": "vertical",
  "selectedItemBorderRadius": 0,
  "itemBackgroundOpacity": 0,
  "itemBackgroundColor": [],
  "selectedItemLabelFontWeight": "bold",
  "top": "20%",
  "itemMaxWidth": 10000,
  "backgroundColorRatios": [
   0
  ],
  "minHeight": 1,
  "itemWidth": "15%",
  "selectedItemBackgroundColorRatios": [],
  "itemLabelFontSize": 12,
  "id": "ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472",
  "backgroundOpacity": 0.25,
  "selectedItemThumbnailShadowHorizontalLength": 0,
  "itemOpacity": 1,
  "itemLabelPosition": "bottom",
  "left": "25%",
  "itemBackgroundColorRatios": [],
  "selectedItemBackgroundOpacity": 0,
  "itemLabelFontFamily": "Arial",
  "itemThumbnailHeight": 80,
  "verticalAlign": "middle",
  "right": "25%"
 },
 {
  "class": "Container",
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "verticalAlign": "top",
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
  "shadow": false,
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
  "class": "IconButton",
  "paddingRight": 0,
  "verticalAlign": "middle",
  "mode": "push",
  "maxHeight": 50,
  "height": "5.482%",
  "width": "3.03%",
  "paddingLeft": 0,
  "transparencyActive": true,
  "borderSize": 0,
  "borderRadius": 0,
  "horizontalAlign": "center",
  "minWidth": 50,
  "maxWidth": 50,
  "top": "2%",
  "minHeight": 50,
  "cursor": "hand",
  "visible": false,
  "paddingBottom": 0,
  "shadow": false,
  "id": "IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB",
  "backgroundOpacity": 0,
  "paddingTop": 0,
  "iconURL": "skin/IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB.png",
  "right": "2%",
  "rollOverIconURL": "skin/IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB_rollover.png"
 },
 {
  "class": "UIComponent",
  "backgroundColor": [
   "#000000"
  ],
  "paddingRight": 0,
  "paddingLeft": 0,
  "showEffect": {
   "easing": "cubic_in_out",
   "class": "FadeInEffect",
   "duration": 350
  },
  "borderSize": 0,
  "minWidth": 0,
  "borderRadius": 0,
  "shadow": false,
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
  "left": 0,
  "right": 0
 },
 {
  "class": "ZoomImage",
  "backgroundColor": [],
  "paddingRight": 0,
  "paddingLeft": 0,
  "borderSize": 0,
  "minWidth": 0,
  "borderRadius": 0,
  "scaleMode": "custom",
  "shadow": false,
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
  "left": 0,
  "right": 0
 },
 {
  "gap": 5,
  "class": "CloseButton",
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
  "fontColor": "#FFFFFF",
  "iconColor": "#000000",
  "paddingLeft": 5,
  "showEffect": {
   "easing": "cubic_in_out",
   "class": "FadeInEffect",
   "duration": 350
  },
  "textDecoration": "none",
  "iconWidth": 20,
  "borderSize": 0,
  "horizontalAlign": "center",
  "minWidth": 0,
  "fontFamily": "Arial",
  "borderRadius": 0,
  "fontWeight": "normal",
  "iconLineWidth": 5,
  "top": 10,
  "backgroundColorDirection": "vertical",
  "cursor": "hand",
  "visible": false,
  "paddingBottom": 5,
  "shadow": false,
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
  "fontStyle": "normal",
  "shadowBlurRadius": 6,
  "label": "",
  "borderColor": "#000000",
  "iconBeforeLabel": true,
  "right": 10,
  "layout": "horizontal"
 }
], 
 "class": "Player",
 "verticalAlign": "top",
 "paddingRight": 0,
 "mouseWheelEnabled": true,
 "height": "100%",
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "backgroundPreloadEnabled": true,
 "borderSize": 0,
 "vrPolyfillScale": 0.5,
 "horizontalAlign": "left",
 "minWidth": 20,
 "gap": 10,
 "borderRadius": 0,
 "contentOpaque": false,
 "scripts": {
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getKey": function(key){  return window[key]; },
  "existsKey": function(key){  return key in window; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio) delete audios[audio.get('id')]; } if(audio) audio.stop(); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "registerKey": function(key, value){  window[key] = value; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "unregisterKey": function(key){  delete window[key]; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } }
 },
 "shadow": false,
 "paddingBottom": 0,
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
 "start": "this.playAudioList([this.audio_15B68E59_3D54_1663_4199_CC0245D4ECA1]); this.syncPlaylists([this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA].forEach(function(component) { component.set('visible', false); }) }",
 "layout": "absolute"
})