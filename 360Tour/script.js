TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "buttonPlay": {
   "backgroundOpacity": 0,
   "minWidth": 25,
   "paddingRight": 0,
   "mode": "push",
   "maxWidth": 70,
   "toolTipPaddingBottom": 4,
   "paddingLeft": 0,
   "height": "100%",
   "toolTipPaddingRight": 6,
   "width": "100%",
   "toolTipTextShadowOpacity": 0,
   "iconURL": "skin/IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED.png",
   "transparencyActive": true,
   "toolTipPaddingTop": 4,
   "toolTipBorderSize": 1,
   "toolTip": "See Photos",
   "toolTipFontSize": 11,
   "toolTipShadowOpacity": 1,
   "toolTipOpacity": 0.7,
   "borderSize": 0,
   "borderRadius": 0,
   "toolTipShadowVerticalLength": 0,
   "toolTipPaddingLeft": 6,
   "toolTipBorderColor": "#767676",
   "toolTipTextShadowColor": "#000000",
   "rollOverIconURL": "skin/IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED_rollover.png",
   "click": "this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, true, 0, this.effect_98AADBB0_96C5_F0C5_41B2_1C4D08E503DB, 'showEffect', false); this.playList_6AF5DDA1_6719_A5E4_41D0_E84A52CE6759.set('selectedIndex', 0)",
   "toolTipFontStyle": "normal",
   "toolTipBorderRadius": 3,
   "shadow": false,
   "horizontalAlign": "center",
   "cursor": "hand",
   "visible": false,
   "paddingBottom": 0,
   "maxHeight": 70,
   "toolTipTextShadowBlurRadius": 3,
   "toolTipBackgroundColor": "#000000",
   "toolTipFontWeight": "normal",
   "id": "IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED",
   "minHeight": 25,
   "toolTipShadowHorizontalLength": 0,
   "paddingTop": 0,
   "class": "IconButton",
   "toolTipShadowSpread": 0,
   "toolTipShadowColor": "#333333",
   "toolTipShadowBlurRadius": 3,
   "toolTipFontColor": "#606060",
   "toolTipFontFamily": "Arial",
   "verticalAlign": "middle"
  },
  "id": "MainViewerVideoPlayer",
  "class": "VideoPlayer",
  "displayPlaybackBar": true,
  "viewerArea": "this.MainViewer",
  "buttonStop": [
   {
    "backgroundOpacity": 0,
    "minWidth": 50,
    "paddingRight": 0,
    "mode": "push",
    "maxWidth": 50,
    "paddingLeft": 0,
    "height": "5.48%",
    "width": "3.03%",
    "iconURL": "skin/IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4.png",
    "transparencyActive": true,
    "borderSize": 0,
    "borderRadius": 0,
    "rollOverIconURL": "skin/IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4_rollover.png",
    "click": "this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, false, 0, this.effect_9B0AF4E2_96C4_F045_41D3_0E00FEE03A15, 'hideEffect', false)",
    "shadow": false,
    "horizontalAlign": "center",
    "top": "2%",
    "cursor": "hand",
    "paddingBottom": 0,
    "maxHeight": 50,
    "id": "IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4",
    "minHeight": 50,
    "paddingTop": 0,
    "class": "IconButton",
    "right": "2%",
    "verticalAlign": "middle"
   },
   "this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB"
  ]
 },
 {
  "buttonPlay": "this.IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED",
  "id": "ViewerAreaLabeled_9FD7235A_96CD_9045_41D9_23A3BCBDB1C6PhotoAlbumPlayer",
  "buttonPrevious": {
   "minWidth": 70,
   "paddingRight": 0,
   "mode": "push",
   "maxWidth": 70,
   "paddingLeft": 0,
   "width": "4.24%",
   "iconURL": "skin/IconButton_9FEA51EA_96CC_905A_41D3_F42DB0CD0A74.png",
   "transparencyActive": true,
   "borderSize": 0,
   "borderRadius": 0,
   "rollOverIconURL": "skin/IconButton_9FEA51EA_96CC_905A_41D3_F42DB0CD0A74_rollover.png",
   "shadow": false,
   "horizontalAlign": "center",
   "top": "40%",
   "cursor": "hand",
   "paddingBottom": 0,
   "maxHeight": 70,
   "bottom": "40%",
   "id": "IconButton_9FEA51EA_96CC_905A_41D3_F42DB0CD0A74",
   "minHeight": 70,
   "paddingTop": 0,
   "class": "IconButton",
   "left": "1%",
   "backgroundOpacity": 0,
   "verticalAlign": "middle"
  },
  "viewerArea": {
   "paddingRight": 0,
   "progressBorderRadius": 0,
   "progressBarBackgroundColorDirection": "vertical",
   "progressBackgroundColor": [
    "#FFFFFF"
   ],
   "playbackBarHeadShadowVerticalLength": 0,
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
   "toolTipFontStyle": "normal",
   "shadow": false,
   "playbackBarProgressBorderSize": 0,
   "playbackBarHeadBackgroundColorDirection": "vertical",
   "progressBottom": 2,
   "playbackBarBackgroundColorDirection": "vertical",
   "paddingBottom": 0,
   "playbackBarRight": 0,
   "toolTipBackgroundColor": "#000000",
   "progressBorderSize": 0,
   "progressBarBorderSize": 0,
   "progressBarBorderRadius": 0,
   "playbackBarOpacity": 1,
   "playbackBarProgressBorderRadius": 0,
   "paddingTop": 0,
   "transitionMode": "blending",
   "class": "ViewerArea",
   "toolTipShadowSpread": 0,
   "playbackBarHeadShadowHorizontalLength": 0,
   "toolTipShadowColor": "#333333",
   "toolTipShadowBlurRadius": 3,
   "progressBackgroundOpacity": 1,
   "toolTipFontColor": "#606060",
   "playbackBarBorderRadius": 0,
   "playbackBarHeadShadow": true,
   "minWidth": 1,
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
   "toolTipFontSize": 11,
   "playbackBarProgressOpacity": 1,
   "borderRadius": 0,
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
   "progressLeft": 0,
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
   "playbackBarHeadShadowColor": "#000000",
   "toolTipFontWeight": "normal",
   "id": "ViewerAreaLabeled_9FD7235A_96CD_9045_41D9_23A3BCBDB1C6",
   "toolTipTextShadowBlurRadius": 3,
   "minHeight": 1,
   "progressBarBorderColor": "#000000",
   "toolTipShadowHorizontalLength": 0,
   "playbackBarHeadOpacity": 1,
   "progressBarBackgroundColorRatios": [
    0
   ],
   "progressBackgroundColorDirection": "vertical",
   "progressHeight": 10,
   "left": "0%",
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
  "class": "PhotoAlbumPlayer",
  "buttonNext": {
   "minWidth": 70,
   "paddingRight": 0,
   "mode": "push",
   "maxWidth": 70,
   "paddingLeft": 0,
   "width": "4.24%",
   "iconURL": "skin/IconButton_9FB9BD3F_96C5_703B_41D7_65AEE6E85A96.png",
   "transparencyActive": true,
   "borderSize": 0,
   "borderRadius": 0,
   "rollOverIconURL": "skin/IconButton_9FB9BD3F_96C5_703B_41D7_65AEE6E85A96_rollover.png",
   "shadow": false,
   "horizontalAlign": "center",
   "top": "40%",
   "cursor": "hand",
   "paddingBottom": 0,
   "maxHeight": 70,
   "bottom": "40%",
   "id": "IconButton_9FB9BD3F_96C5_703B_41D7_65AEE6E85A96",
   "minHeight": 70,
   "paddingTop": 0,
   "class": "IconButton",
   "backgroundOpacity": 0,
   "right": "1%",
   "verticalAlign": "middle"
  },
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
      "id": "overlay_9145D5B5_9D6A_3109_41DC_A9B09A3D3544",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E, this.camera_552A6ED5_5BF2_F2BA_41D6_D4FD03CB3A2E); this.mainPlayList.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "toolTip": "ENTRANCE",
        "displayTooltipInTouchScreens": true
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
           "width": 70,
           "url": "media/panorama_9145F5B4_9D6A_310F_41B6_278704EC634D_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 5.38
       }
      ]
     },
     {
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
      "id": "overlay_914595B5_9D6A_3109_41E0_AB5366CDC9BD",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2, this.camera_6A86C1C5_6719_BDAC_41C0_C0194716B3BC); this.mainPlayList.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "toolTip": "ENTRANCE",
        "displayTooltipInTouchScreens": true
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
           "width": 100,
           "url": "media/panorama_9145F5B4_9D6A_310F_41B6_278704EC634D_0_HS_5_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 5.92
       }
      ]
     },
     {
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
      "id": "overlay_914545B5_9D6A_3109_41DB_2D094D583EE1",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA, this.camera_6AC881FE_6719_BD5C_41D9_5DA27C232FF5); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 5); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 8)"
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
           "width": 1,
           "url": "media/panorama_9145F5B4_9D6A_310F_41B6_278704EC634D_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
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
    "id": "audio_6EE4F6F1_6384_1566_4191_B2F6A0AC783C",
    "class": "PanoramaAudio",
    "audio": {
     "class": "AudioResource",
     "oggUrl": "media/audio_6EE4F6F1_6384_1566_4191_B2F6A0AC783C.ogg",
     "mp3Url": "media/audio_6EE4F6F1_6384_1566_4191_B2F6A0AC783C.mp3"
    }
   }
  ],
  "hfovMax": 120,
  "id": "panorama_9145F5B4_9D6A_310F_41B6_278704EC634D",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_9145F5B4_9D6A_310F_41B6_278704EC634D_t.jpg",
  "class": "Panorama",
  "hfovMin": 100,
  "label": "STREETVIEW",
  "mapLocations": [
   {
    "x": 303.34,
    "class": "PanoramaMapLocation",
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
     "class": "Map",
     "fieldOfViewOverlayOutsideOpacity": 0,
     "label": "first floor",
     "overlays": [
      {
       "id": "overlay_4E318587_4299_762E_41B8_79C61CBB293C",
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 253.34,
        "width": 100,
        "class": "HotspotMapOverlayMap",
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
        }
       },
       "rollOverDisplay": false,
       "image": {
        "x": 253.34,
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
        },
        "class": "HotspotMapOverlayImage",
        "y": 365.62,
        "width": 100,
        "height": 100
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 0)"
        }
       ],
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
  "hfov": 360,
  "adjacentPanoramas": [
   {
    "panorama": {
     "frames": [
      {
       "thumbnailUrl": "media/panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28_t.jpg",
       "overlays": [
        {
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
         "id": "overlay_9164399E_9D6A_313B_41D8_325A071444CD",
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF, this.camera_57262CFF_5BF2_F667_41D4_80634CF1C7DB); this.mainPlayList.set('selectedIndex', 5)",
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "toolTip": "MASTER BEDROOM",
           "displayTooltipInTouchScreens": true
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
              "width": 98,
              "url": "media/panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28_0_HS_2_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -21.08
          }
         ]
        },
        {
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
         "id": "overlay_9164699E_9D6A_313B_41E1_AD85006D71DF",
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "enabledInCardboard": true,
         "rollOverDisplay": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA, this.camera_6A3E8E2C_6719_A6FC_41D2_EFF83483EB31); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 8)"
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
              "width": 1,
              "url": "media/panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28_0_HS_1_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": 80.2
          }
         ]
        },
        {
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
         "id": "overlay_9164499E_9D6A_313B_41DE_815940631FC8",
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044, this.camera_6928EDE6_6719_A56C_41B9_AF1D16F47C7A); this.mainPlayList.set('selectedIndex', 5)",
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "toolTip": "MASTER BEDROOM",
           "displayTooltipInTouchScreens": true
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
              "width": 143,
              "url": "media/panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28_0_HS_3_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
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
       "id": "audio_718220A6_6384_2DEB_41B1_B96CD879EE93",
       "class": "PanoramaAudio",
       "audio": {
        "class": "AudioResource",
        "oggUrl": "media/audio_718220A6_6384_2DEB_41B1_B96CD879EE93.ogg",
        "mp3Url": "media/audio_718220A6_6384_2DEB_41B1_B96CD879EE93.mp3"
       }
      }
     ],
     "hfovMax": 120,
     "partial": false,
     "pitch": 0,
     "thumbnailUrl": "media/panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28_t.jpg",
     "class": "Panorama",
     "hfovMin": 100,
     "label": "TOILET",
     "id": "panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28",
     "hfov": 360,
     "adjacentPanoramas": [
      {
       "panorama": {
        "frames": [
         {
          "thumbnailUrl": "media/panorama_916227CC_9D6A_311F_41E3_34FF7141124F_t.jpg",
          "overlays": [
           {
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
            "id": "overlay_916217CC_9D6A_311F_41E1_8BEF8FED51E3",
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF, this.camera_55D7BBEA_5BF2_F263_41D2_B1CC2C57A60F); this.mainPlayList.set('selectedIndex', 5)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "toolTip": "MASTER BEDROOM\u000a",
              "displayTooltipInTouchScreens": true
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
                 "width": 91,
                 "url": "media/panorama_916227CC_9D6A_311F_41E3_34FF7141124F_0_HS_0_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": 5.5
             }
            ]
           },
           {
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
            "id": "overlay_9162E7CC_9D6A_311F_4199_A2B1F88DE39F",
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_47B53902_572E_CEDF_41CC_C256D31A5443, this.camera_55FFAC21_5BF2_F59B_41D2_A4CCD4BC65CD); this.mainPlayList.set('selectedIndex', 3)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "toolTip": "LIVING ROOM",
              "displayTooltipInTouchScreens": true
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
                 "width": 91,
                 "url": "media/panorama_916227CC_9D6A_311F_41E3_34FF7141124F_0_HS_2_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -27.49
             }
            ]
           },
           {
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
            "id": "overlay_9162F7CC_9D6A_311F_41D2_EC7CA4A52EE1",
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "enabledInCardboard": true,
            "rollOverDisplay": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA, this.camera_6A4CBE9A_6719_A7A4_41B9_676C81727E77); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 8); this.mainPlayList.set('selectedIndex', 9)"
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
                 "width": 1,
                 "url": "media/panorama_916227CC_9D6A_311F_41E3_34FF7141124F_0_HS_1_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": 81.21
             }
            ]
           },
           {
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
            "id": "overlay_9162D7CC_9D6A_311F_41CF_9DE4ED272EB1",
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044, this.camera_6A292E52_6719_A6A4_41D5_553E57F97647); this.mainPlayList.set('selectedIndex', 5)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "toolTip": "MASTER BEDROOM",
              "displayTooltipInTouchScreens": true
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
                 "width": 132,
                 "url": "media/panorama_916227CC_9D6A_311F_41E3_34FF7141124F_0_HS_3_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": 6.18
             }
            ]
           },
           {
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
            "id": "overlay_916287CC_9D6A_311F_41DA_BF79E8211F43",
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_916902A1_9D6A_7309_41D0_0B14DE574844, this.camera_6A584E81_6719_A7A4_41D6_1389FD587A36); this.mainPlayList.set('selectedIndex', 3)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "toolTip": "LIVING ROOM",
              "displayTooltipInTouchScreens": true
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
                 "width": 132,
                 "url": "media/panorama_916227CC_9D6A_311F_41E3_34FF7141124F_0_HS_4_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
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
          "id": "audio_6CB5443C_6384_14DE_41D8_273A5618B00E",
          "class": "PanoramaAudio",
          "audio": {
           "class": "AudioResource",
           "oggUrl": "media/audio_6CB5443C_6384_14DE_41D8_273A5618B00E.ogg",
           "mp3Url": "media/audio_6CB5443C_6384_14DE_41D8_273A5618B00E.mp3"
          }
         }
        ],
        "hfovMax": 120,
        "partial": false,
        "pitch": 0,
        "thumbnailUrl": "media/panorama_916227CC_9D6A_311F_41E3_34FF7141124F_t.jpg",
        "class": "Panorama",
        "hfovMin": 100,
        "label": "SINGLE BR",
        "id": "panorama_916227CC_9D6A_311F_41E3_34FF7141124F",
        "hfov": 360,
        "adjacentPanoramas": [
         {
          "panorama": "this.panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28",
          "yaw": -170.2,
          "class": "AdjacentPanorama",
          "backwardYaw": -162.92,
          "distance": 1
         },
         {
          "panorama": {
           "frames": [
            {
             "thumbnailUrl": "media/panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2_t.jpg",
             "overlays": [
              {
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
               "id": "overlay_916947EC_9D6B_F11F_41D6_5EEC27EF8F9A",
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D, this.camera_55581C8B_5BF2_F6AF_41D1_02AAAFF73E03); this.mainPlayList.set('selectedIndex', 2)",
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "toolTip": "POOL",
                 "displayTooltipInTouchScreens": true
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
                    "width": 69,
                    "url": "media/panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2_0_HS_0_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -9.28
                }
               ]
              },
              {
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
               "id": "overlay_916987EC_9D6B_F11F_41BB_7D24AFE8F505",
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E, this.camera_55602CAB_5BF2_F6EF_41A1_3BA349C88636); this.mainPlayList.set('selectedIndex', 0)",
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "toolTip": "STREET VIEW",
                 "displayTooltipInTouchScreens": true
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
                    "width": 69,
                    "url": "media/panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2_0_HS_6_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -25.17
                }
               ]
              },
              {
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
               "id": "overlay_9169A7EC_9D6B_F11F_41CA_A9E6728D96FC",
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "enabledInCardboard": true,
               "rollOverDisplay": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA, this.camera_6AACBF13_6719_A6A4_4175_A437F14B545F); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 5); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 8)"
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
                    "width": 1,
                    "url": "media/panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2_0_HS_1_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": 83.2
                }
               ]
              },
              {
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
               "id": "overlay_9169C7EC_9D6B_F11F_41C7_A3B2A477B925",
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA, this.camera_6A60BEE3_6719_A764_41CE_497F260A82C3); this.mainPlayList.set('selectedIndex', 2)",
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "toolTip": "POOL",
                 "displayTooltipInTouchScreens": true
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
                    "width": 100,
                    "url": "media/panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2_0_HS_7_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -8.74
                }
               ]
              },
              {
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
               "id": "overlay_9169D7ED_9D6B_F119_41C3_694AFA3B7253",
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_9145F5B4_9D6A_310F_41B6_278704EC634D, this.camera_6ABB6F0A_6719_A6A4_41CE_3DC64D845BC0); this.mainPlayList.set('selectedIndex', 0)",
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "toolTip": "STREET VIEW",
                 "displayTooltipInTouchScreens": true
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
                    "width": 100,
                    "url": "media/panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2_0_HS_8_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
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
             "id": "audio_6E12927D_6384_2D59_41C7_723CAE05D156",
             "class": "PanoramaAudio",
             "audio": {
              "class": "AudioResource",
              "oggUrl": "media/audio_6E12927D_6384_2D59_41C7_723CAE05D156.ogg",
              "mp3Url": "media/audio_6E12927D_6384_2D59_41C7_723CAE05D156.mp3"
             }
            }
           ],
           "hfovMax": 120,
           "partial": false,
           "pitch": 0,
           "thumbnailUrl": "media/panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2_t.jpg",
           "class": "Panorama",
           "hfovMin": 100,
           "label": "ENTRANCE",
           "id": "panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2",
           "hfov": 360,
           "adjacentPanoramas": [
            {
             "panorama": "this.panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28",
             "yaw": -170.68,
             "class": "AdjacentPanorama",
             "backwardYaw": -162.92,
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
                "thumbnailUrl": "media/panorama_91758D80_9D6A_1106_41DC_64D8466F87FC_t.jpg",
                "overlays": [
                 {
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
                  "id": "overlay_9175FD80_9D6A_1106_41AA_58E5D2CD1C04",
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "click": "this.startPanoramaWithCamera(this.panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116, this.camera_56043BB0_5BF2_F2FA_41B1_1DE6A0E08A4C); this.mainPlayList.set('selectedIndex', 9)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "toolTip": "TERRACE",
                    "displayTooltipInTouchScreens": true
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
                       "width": 91,
                       "url": "media/panorama_91758D80_9D6A_1106_41DC_64D8466F87FC_0_HS_2_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": 8.82
                   }
                  ]
                 },
                 {
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
                  "id": "overlay_9175ED80_9D6A_1106_41D5_F6221252AEF2",
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "click": "this.startPanoramaWithCamera(this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF, this.camera_56700B7F_5BF2_F267_41C2_DC8D8F885C23); this.mainPlayList.set('selectedIndex', 5)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "toolTip": "MASTER BEDROOM",
                    "displayTooltipInTouchScreens": true
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
                       "width": 91,
                       "url": "media/panorama_91758D80_9D6A_1106_41DC_64D8466F87FC_0_HS_0_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -31.29
                   }
                  ]
                 },
                 {
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
                  "id": "overlay_9175DD80_9D6A_1106_41D0_4ED70EEFA362",
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "enabledInCardboard": true,
                  "rollOverDisplay": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_9145F5B4_9D6A_310F_41B6_278704EC634D, this.camera_6900DF60_6719_A564_41D3_2CC79C07A6BA); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 4)"
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
                       "width": 1,
                       "url": "media/panorama_91758D80_9D6A_1106_41DC_64D8466F87FC_0_HS_1_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": 81.71
                   }
                  ]
                 },
                 {
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
                  "id": "overlay_91750D80_9D6A_1106_41D4_EA14D9776F6B",
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "click": "this.startPanoramaWithCamera(this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA, this.camera_69333F78_6719_A564_41D5_2E8945B8A1A6); this.mainPlayList.set('selectedIndex', 9)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "toolTip": "TERRACE",
                    "displayTooltipInTouchScreens": true
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
                       "width": 132,
                       "url": "media/panorama_91758D80_9D6A_1106_41DC_64D8466F87FC_0_HS_3_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": 9.48
                   }
                  ]
                 },
                 {
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
                  "id": "overlay_91756D80_9D6A_1106_41D1_5718020AD198",
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "click": "this.startPanoramaWithCamera(this.panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044, this.camera_6AF69F38_6719_A6E5_41D7_05D25502AA73); this.mainPlayList.set('selectedIndex', 5)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "toolTip": "MASTER BEDROOM",
                    "displayTooltipInTouchScreens": true
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
                       "width": 132,
                       "url": "media/panorama_91758D80_9D6A_1106_41DC_64D8466F87FC_0_HS_4_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
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
                "id": "audio_712D6885_6384_3DAE_4188_B01AAF4ACE39",
                "class": "PanoramaAudio",
                "audio": {
                 "class": "AudioResource",
                 "oggUrl": "media/audio_712D6885_6384_3DAE_4188_B01AAF4ACE39.ogg",
                 "mp3Url": "media/audio_712D6885_6384_3DAE_4188_B01AAF4ACE39.mp3"
                }
               }
              ],
              "hfovMax": 120,
              "partial": false,
              "pitch": 0,
              "thumbnailUrl": "media/panorama_91758D80_9D6A_1106_41DC_64D8466F87FC_t.jpg",
              "class": "Panorama",
              "hfovMin": 100,
              "label": "TWIN BR",
              "id": "panorama_91758D80_9D6A_1106_41DC_64D8466F87FC",
              "hfov": 360,
              "adjacentPanoramas": [
               {
                "panorama": "this.panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28",
                "yaw": -172.21,
                "class": "AdjacentPanorama",
                "backwardYaw": -162.92,
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
                "panorama": "this.panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2",
                "yaw": -172.21,
                "class": "AdjacentPanorama",
                "backwardYaw": -170.68,
                "distance": 1
               },
               {
                "panorama": {
                 "frames": [
                  {
                   "thumbnailUrl": "media/panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044_t.jpg",
                   "overlays": [
                    {
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
                     "id": "overlay_916EDC9F_9D6A_1739_41B6_EC73A228B461",
                     "class": "HotspotPanoramaOverlay",
                     "useHandCursor": true,
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "click": "this.startPanoramaWithCamera(this.panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C, this.camera_569B6D6C_5BF2_F669_41A7_8467FF9A6DAA); this.mainPlayList.set('selectedIndex', 6)",
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "toolTip": "BALCONY",
                       "displayTooltipInTouchScreens": true
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
                          "width": 99,
                          "url": "media/panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044_0_HS_0_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -40.5
                      }
                     ]
                    },
                    {
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
                     "id": "overlay_916ECC9F_9D6A_1739_41B3_0FCA7885269D",
                     "class": "HotspotPanoramaOverlay",
                     "useHandCursor": true,
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "click": "this.startPanoramaWithCamera(this.panorama_46009756_572D_4167_41C6_2B49BD1EF7CE, this.camera_56E74D59_5BF2_F7AA_41D0_B6C262499B65); this.mainPlayList.set('selectedIndex', 7)",
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "toolTip": "TOILET",
                       "displayTooltipInTouchScreens": true
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
                          "width": 83,
                          "url": "media/panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044_0_HS_2_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -22.75
                      }
                     ]
                    },
                    {
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
                     "id": "overlay_916EAC9F_9D6A_1739_41DF_9C1F85F25C04",
                     "class": "HotspotPanoramaOverlay",
                     "useHandCursor": true,
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "click": "this.startPanoramaWithCamera(this.panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D, this.camera_56C57D3C_5BF2_F7EA_41BA_23AB5285E45A); this.mainPlayList.set('selectedIndex', 8)",
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "toolTip": "TWIN BEDROOM",
                       "displayTooltipInTouchScreens": true
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
                          "width": 74,
                          "url": "media/panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044_0_HS_3_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": 6.11
                      }
                     ]
                    },
                    {
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
                     "id": "overlay_916E9C9F_9D6A_1739_41D0_4A4CF03BE08B",
                     "class": "HotspotPanoramaOverlay",
                     "useHandCursor": true,
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "click": "this.startPanoramaWithCamera(this.panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC, this.camera_56F35D45_5BF2_F79A_41D0_857D96DC10DF); this.mainPlayList.set('selectedIndex', 4)",
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "toolTip": "SINGLE BEDROOM",
                       "displayTooltipInTouchScreens": true
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
                          "width": 74,
                          "url": "media/panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044_0_HS_4_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -12.59
                      }
                     ]
                    },
                    {
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
                     "id": "overlay_916E8C9F_9D6A_1733_41A6_3007A8C07742",
                     "class": "HotspotPanoramaOverlay",
                     "useHandCursor": true,
                     "enabledInCardboard": true,
                     "rollOverDisplay": true,
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA, this.camera_69B65020_6719_BAE4_41C4_E6BC8C3017AA); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 3)"
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
                          "width": 1,
                          "url": "media/panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044_0_HS_1_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": 76.94
                      }
                     ]
                    },
                    {
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
                     "id": "overlay_916D7CA5_9D6A_1709_41E2_1043CC0BE577",
                     "class": "HotspotPanoramaOverlay",
                     "useHandCursor": true,
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "click": "this.startPanoramaWithCamera(this.panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069, this.camera_6960BFFB_6719_A564_41B9_8933F35E671D); this.mainPlayList.set('selectedIndex', 6)",
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "toolTip": "BALCONY",
                       "displayTooltipInTouchScreens": true
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
                          "width": 140,
                          "url": "media/panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044_0_HS_5_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -39.78
                      }
                     ]
                    },
                    {
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
                     "id": "overlay_916D5CA5_9D6A_1709_41C1_ED02D5F1677F",
                     "class": "HotspotPanoramaOverlay",
                     "useHandCursor": true,
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "click": "this.startPanoramaWithCamera(this.panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28, this.camera_69259F8C_6719_A5BC_41CC_989E16828F8D); this.mainPlayList.set('selectedIndex', 7)",
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "toolTip": "TOILET",
                       "displayTooltipInTouchScreens": true
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
                          "width": 119,
                          "url": "media/panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044_0_HS_6_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -22.11
                      }
                     ]
                    },
                    {
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
                     "id": "overlay_916D4CA5_9D6A_1709_41DE_4E5FACFD7857",
                     "class": "HotspotPanoramaOverlay",
                     "useHandCursor": true,
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "click": "this.startPanoramaWithCamera(this.panorama_91758D80_9D6A_1106_41DC_64D8466F87FC, this.camera_697D9FD2_6719_A5A4_41C6_B178E9A6F4C9); this.mainPlayList.set('selectedIndex', 8)",
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "toolTip": "TWIN BEDROOM",
                       "displayTooltipInTouchScreens": true
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
                          "width": 106,
                          "url": "media/panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044_0_HS_7_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": 6.66
                      }
                     ]
                    },
                    {
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
                     "id": "overlay_916D2CA5_9D6A_1709_41D6_9840F4E40A44",
                     "class": "HotspotPanoramaOverlay",
                     "useHandCursor": true,
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "click": "this.startPanoramaWithCamera(this.panorama_916227CC_9D6A_311F_41E3_34FF7141124F, this.camera_69568FA9_6719_A5E4_41CE_33208C9DE42F); this.mainPlayList.set('selectedIndex', 4)",
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "toolTip": "SINGLE BEDROOM",
                       "displayTooltipInTouchScreens": true
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
                          "width": 106,
                          "url": "media/panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044_0_HS_8_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
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
                   "id": "audio_6C4C2061_6384_2D66_41C1_1067FF251E6E",
                   "class": "PanoramaAudio",
                   "audio": {
                    "class": "AudioResource",
                    "oggUrl": "media/audio_6C4C2061_6384_2D66_41C1_1067FF251E6E.ogg",
                    "mp3Url": "media/audio_6C4C2061_6384_2D66_41C1_1067FF251E6E.mp3"
                   }
                  }
                 ],
                 "hfovMax": 120,
                 "partial": false,
                 "pitch": 0,
                 "thumbnailUrl": "media/panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044_t.jpg",
                 "class": "Panorama",
                 "hfovMin": 100,
                 "label": "MASTER BR",
                 "id": "panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044",
                 "hfov": 360,
                 "adjacentPanoramas": [
                  {
                   "panorama": "this.panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28",
                   "yaw": 82.9,
                   "class": "AdjacentPanorama",
                   "backwardYaw": 161.78,
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
                   "panorama": "this.panorama_91758D80_9D6A_1106_41DC_64D8466F87FC",
                   "yaw": 34.69,
                   "class": "AdjacentPanorama",
                   "backwardYaw": -142.86,
                   "distance": 1
                  },
                  {
                   "panorama": {
                    "frames": [
                     {
                      "thumbnailUrl": "media/panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA_t.jpg",
                      "overlays": [
                       {
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
                        "id": "overlay_96931415_9D6A_370E_41C9_9E915A7267A4",
                        "class": "HotspotPanoramaOverlay",
                        "useHandCursor": true,
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "areas": [
                         {
                          "click": "this.startPanoramaWithCamera(this.panorama_47B53902_572E_CEDF_41CC_C256D31A5443, this.camera_566FDDCF_5BF2_F6A7_41C3_D60F04E20C30); this.mainPlayList.set('selectedIndex', 3)",
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "toolTip": "LIVING ROOM",
                          "displayTooltipInTouchScreens": true
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
                             "width": 105,
                             "url": "media/panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA_0_HS_0_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -33.14
                         }
                        ]
                       },
                       {
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
                        "id": "overlay_96936415_9D6A_370E_41DA_61A322290279",
                        "class": "HotspotPanoramaOverlay",
                        "useHandCursor": true,
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "areas": [
                         {
                          "click": "this.startPanoramaWithCamera(this.panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E, this.camera_565ACDA7_5BF2_F6E7_41BA_8BE7CEB9351B); this.mainPlayList.set('selectedIndex', 1)",
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "toolTip": "ENTRANCE",
                          "displayTooltipInTouchScreens": true
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
                             "width": 86,
                             "url": "media/panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA_0_HS_6_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -16.95
                         }
                        ]
                       },
                       {
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
                        "id": "overlay_96934415_9D6A_370E_41E0_14989CE3B134",
                        "class": "HotspotPanoramaOverlay",
                        "useHandCursor": true,
                        "enabledInCardboard": true,
                        "rollOverDisplay": true,
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA, this.camera_683D8078_6719_BB65_41AA_F0721239A696); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 5); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 8); this.mainPlayList.set('selectedIndex', 6)"
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
                             "width": 1,
                             "url": "media/panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA_0_HS_1_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": 82.35
                         }
                        ]
                       },
                       {
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
                        "id": "overlay_96938415_9D6A_370E_41E2_76474A8FC68D",
                        "class": "HotspotPanoramaOverlay",
                        "useHandCursor": true,
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "areas": [
                         {
                          "click": "this.startPanoramaWithCamera(this.panorama_916902A1_9D6A_7309_41D0_0B14DE574844, this.camera_68162065_6719_BB6F_41D2_B59B2657C1B2); this.mainPlayList.set('selectedIndex', 3)",
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "toolTip": "LIVING ROOM",
                          "displayTooltipInTouchScreens": true
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
                             "width": 150,
                             "url": "media/panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA_0_HS_7_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -32.33
                         }
                        ]
                       },
                       {
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
                        "id": "overlay_9693C415_9D6A_3735_41D5_482009BAE28B",
                        "class": "HotspotPanoramaOverlay",
                        "useHandCursor": true,
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "areas": [
                         {
                          "click": "this.startPanoramaWithCamera(this.panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2, this.camera_69CC103E_6719_BADD_41CB_FB1F617EEA3F); this.mainPlayList.set('selectedIndex', 1)",
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "toolTip": "ENTRANCE",
                          "displayTooltipInTouchScreens": true
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
                             "width": 125,
                             "url": "media/panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA_0_HS_8_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
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
                      "id": "audio_6DDDE8A6_6384_1DEA_41C5_875048642922",
                      "class": "PanoramaAudio",
                      "audio": {
                       "class": "AudioResource",
                       "oggUrl": "media/audio_6DDDE8A6_6384_1DEA_41C5_875048642922.ogg",
                       "mp3Url": "media/audio_6DDDE8A6_6384_1DEA_41C5_875048642922.mp3"
                      }
                     }
                    ],
                    "hfovMax": 120,
                    "partial": false,
                    "pitch": 0,
                    "thumbnailUrl": "media/panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA_t.jpg",
                    "class": "Panorama",
                    "hfovMin": 100,
                    "label": "POOL",
                    "id": "panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA",
                    "hfov": 360,
                    "adjacentPanoramas": [
                     {
                      "panorama": "this.panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28",
                      "yaw": -172.22,
                      "class": "AdjacentPanorama",
                      "backwardYaw": -162.92,
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
                      "panorama": "this.panorama_91758D80_9D6A_1106_41DC_64D8466F87FC",
                      "yaw": -172.22,
                      "class": "AdjacentPanorama",
                      "backwardYaw": -172.21,
                      "distance": 1
                     },
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
                         "thumbnailUrl": "media/panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069_t.jpg",
                         "overlays": [
                          {
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
                           "id": "overlay_9167A333_9D6A_1109_41CA_E1D737A39B12",
                           "class": "HotspotPanoramaOverlay",
                           "useHandCursor": true,
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "areas": [
                            {
                             "click": "this.startPanoramaWithCamera(this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF, this.camera_55CB7E16_5BF2_F5B9_4191_4ABD27800AF8); this.mainPlayList.set('selectedIndex', 5)",
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000",
                             "toolTip": "MASTER BEDROOM",
                             "displayTooltipInTouchScreens": true
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
                                "width": 120,
                                "url": "media/panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069_0_HS_0_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -43
                            }
                           ]
                          },
                          {
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
                           "id": "overlay_9167D333_9D6A_1109_41C2_C53B15CF6B9A",
                           "class": "HotspotPanoramaOverlay",
                           "useHandCursor": true,
                           "enabledInCardboard": true,
                           "rollOverDisplay": true,
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA, this.camera_6A4CA146_6719_BAAD_41A6_A43A72D46F17); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 8); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 7)"
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
                                "width": 1,
                                "url": "media/panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069_0_HS_1_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": 85.29
                            }
                           ]
                          },
                          {
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
                           "id": "overlay_9167F339_9D6A_1179_41DF_24F351FACEF4",
                           "class": "HotspotPanoramaOverlay",
                           "useHandCursor": true,
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "areas": [
                            {
                             "click": "this.startPanoramaWithCamera(this.panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044, this.camera_6A22E118_6719_BAA5_41D0_8461D2421DEC); this.mainPlayList.set('selectedIndex', 5)",
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000",
                             "toolTip": "MASTER BEDROOM",
                             "displayTooltipInTouchScreens": true
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
                                "width": 174,
                                "url": "media/panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069_0_HS_6_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
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
                         "id": "audio_724C9696_6384_15AA_41C8_8DF380D40AC4",
                         "class": "PanoramaAudio",
                         "audio": {
                          "class": "AudioResource",
                          "oggUrl": "media/audio_724C9696_6384_15AA_41C8_8DF380D40AC4.ogg",
                          "mp3Url": "media/audio_724C9696_6384_15AA_41C8_8DF380D40AC4.mp3"
                         }
                        }
                       ],
                       "hfovMax": 120,
                       "partial": false,
                       "pitch": 0,
                       "thumbnailUrl": "media/panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069_t.jpg",
                       "class": "Panorama",
                       "hfovMin": 100,
                       "label": "BALCONY",
                       "id": "panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069",
                       "hfov": 360,
                       "adjacentPanoramas": [
                        {
                         "panorama": "this.panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28",
                         "yaw": -170.58,
                         "class": "AdjacentPanorama",
                         "backwardYaw": -162.92,
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
                         "panorama": "this.panorama_91758D80_9D6A_1106_41DC_64D8466F87FC",
                         "yaw": -170.58,
                         "class": "AdjacentPanorama",
                         "backwardYaw": -172.21,
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
                         "panorama": "this.panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA",
                         "yaw": -170.58,
                         "class": "AdjacentPanorama",
                         "backwardYaw": -172.22,
                         "distance": 1
                        },
                        {
                         "panorama": {
                          "frames": [
                           {
                            "thumbnailUrl": "media/panorama_916902A1_9D6A_7309_41D0_0B14DE574844_t.jpg",
                            "overlays": [
                             {
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
                              "id": "overlay_916912A2_9D6A_730B_41B8_3A8427B71ECF",
                              "class": "HotspotPanoramaOverlay",
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "click": "this.startPanoramaWithCamera(this.panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC, this.camera_55BE4E50_5BF2_F5B9_41B2_A0DBD967D7CD); this.mainPlayList.set('selectedIndex', 4)",
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000",
                                "toolTip": "SINGLE BEDROOM",
                                "displayTooltipInTouchScreens": true
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
                                   "width": 83,
                                   "url": "media/panorama_916902A1_9D6A_7309_41D0_0B14DE574844_0_HS_0_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": -6.87
                               }
                              ]
                             },
                             {
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
                              "id": "overlay_916922A2_9D6A_730B_41DE_1F49C2124306",
                              "class": "HotspotPanoramaOverlay",
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "click": "this.startPanoramaWithCamera(this.panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D, this.camera_5577FE77_5BF2_F267_41AE_B186A0A61737); this.mainPlayList.set('selectedIndex', 2)",
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000",
                                "toolTip": "POOL",
                                "displayTooltipInTouchScreens": true
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
                                   "width": 83,
                                   "url": "media/panorama_916902A1_9D6A_7309_41D0_0B14DE574844_0_HS_5_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": -25.6
                               }
                              ]
                             },
                             {
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
                              "id": "overlay_9169D2A2_9D6A_730B_41B9_993A35E3613B",
                              "class": "HotspotPanoramaOverlay",
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "rollOverDisplay": true,
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA, this.camera_6A9B81A8_6719_BDE4_41D0_674C11DE4D29); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 8); this.mainPlayList.set('selectedIndex', 5)"
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
                                   "width": 1,
                                   "url": "media/panorama_916902A1_9D6A_7309_41D0_0B14DE574844_0_HS_1_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": 82.97
                               }
                              ]
                             },
                             {
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
                              "id": "overlay_916992A2_9D6A_730B_41D1_B90F49E44C03",
                              "class": "HotspotPanoramaOverlay",
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "click": "this.startPanoramaWithCamera(this.panorama_916227CC_9D6A_311F_41E3_34FF7141124F, this.camera_6A43515D_6719_BD5C_41AB_D0713E865360); this.mainPlayList.set('selectedIndex', 4)",
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000",
                                "toolTip": "SINGLE BEDROOM",
                                "displayTooltipInTouchScreens": true
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
                                   "width": 119,
                                   "url": "media/panorama_916902A1_9D6A_7309_41D0_0B14DE574844_0_HS_6_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": -6.28
                               }
                              ]
                             },
                             {
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
                              "id": "overlay_9169B2A2_9D6A_730B_41D4_EE8149DC4E93",
                              "class": "HotspotPanoramaOverlay",
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "click": "this.startPanoramaWithCamera(this.panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA, this.camera_6A6C618B_6719_BDA4_41BF_9D047B1E6BA1); this.mainPlayList.set('selectedIndex', 2)",
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000",
                                "toolTip": "POOL",
                                "displayTooltipInTouchScreens": true
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
                                   "width": 119,
                                   "url": "media/panorama_916902A1_9D6A_7309_41D0_0B14DE574844_0_HS_7_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
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
                            "id": "audio_6DF01D54_6384_14AE_41CB_FE05B1B90F20",
                            "class": "PanoramaAudio",
                            "audio": {
                             "class": "AudioResource",
                             "oggUrl": "media/audio_6DF01D54_6384_14AE_41CB_FE05B1B90F20.ogg",
                             "mp3Url": "media/audio_6DF01D54_6384_14AE_41CB_FE05B1B90F20.mp3"
                            }
                           }
                          ],
                          "hfovMax": 120,
                          "partial": false,
                          "pitch": 0,
                          "thumbnailUrl": "media/panorama_916902A1_9D6A_7309_41D0_0B14DE574844_t.jpg",
                          "class": "Panorama",
                          "hfovMin": 100,
                          "label": "LIVINGROOM",
                          "id": "panorama_916902A1_9D6A_7309_41D0_0B14DE574844",
                          "hfov": 360,
                          "adjacentPanoramas": [
                           {
                            "panorama": "this.panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28",
                            "yaw": -171.96,
                            "class": "AdjacentPanorama",
                            "backwardYaw": -162.92,
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
                            "panorama": "this.panorama_91758D80_9D6A_1106_41DC_64D8466F87FC",
                            "yaw": -171.96,
                            "class": "AdjacentPanorama",
                            "backwardYaw": -172.21,
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
                            "panorama": "this.panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA",
                            "yaw": -176.8,
                            "class": "AdjacentPanorama",
                            "backwardYaw": 12.06,
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
                               "thumbnailUrl": "media/panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA_t.jpg",
                               "overlays": [
                                {
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
                                 "id": "overlay_914DB476_9D6A_170A_41D3_A4182884D4B3",
                                 "class": "HotspotPanoramaOverlay",
                                 "useHandCursor": true,
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "areas": [
                                  {
                                   "click": "this.startPanoramaWithCamera(this.panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D, this.camera_5488DF3C_5BF2_F3E9_41D1_C652E087859B); this.mainPlayList.set('selectedIndex', 8)",
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000",
                                   "toolTip": "TWIN BEDROOM",
                                   "displayTooltipInTouchScreens": true
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
                                      "width": 83,
                                      "url": "media/panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA_0_HS_6_0.png",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": -20.35
                                  }
                                 ]
                                },
                                {
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
                                 "id": "overlay_914DA476_9D6A_170A_41D4_F5A9A50D4F34",
                                 "class": "HotspotPanoramaOverlay",
                                 "useHandCursor": true,
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": true,
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.startPanoramaWithCamera(this.panorama_9145F5B4_9D6A_310F_41B6_278704EC634D, this.camera_694FB277_6719_BF6C_41C9_3D5229E4A712); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 5); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 4)"
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
                                      "width": 1,
                                      "url": "media/panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA_0_HS_5_0.png",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": 85.84
                                  }
                                 ]
                                },
                                {
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
                                 "id": "overlay_914D4476_9D6A_170A_41A7_1A222953F06E",
                                 "class": "HotspotPanoramaOverlay",
                                 "useHandCursor": true,
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "areas": [
                                  {
                                   "click": "this.startPanoramaWithCamera(this.panorama_91758D80_9D6A_1106_41DC_64D8466F87FC, this.camera_6912D224_6719_BEEC_41A9_4CEA0B2DFD66); this.mainPlayList.set('selectedIndex', 8)",
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000",
                                   "toolTip": "TWIN BEDROOM",
                                   "displayTooltipInTouchScreens": true
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
                                      "width": 120,
                                      "url": "media/panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA_0_HS_7_0.png",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
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
                               "id": "audio_7152B69D_638C_35DE_41D2_F7F5A2244344",
                               "class": "PanoramaAudio",
                               "audio": {
                                "class": "AudioResource",
                                "oggUrl": "media/audio_7152B69D_638C_35DE_41D2_F7F5A2244344.ogg",
                                "mp3Url": "media/audio_7152B69D_638C_35DE_41D2_F7F5A2244344.mp3"
                               }
                              }
                             ],
                             "hfovMax": 120,
                             "partial": false,
                             "pitch": 0,
                             "thumbnailUrl": "media/panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA_t.jpg",
                             "class": "Panorama",
                             "hfovMin": 100,
                             "label": "TERRACE",
                             "id": "panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA",
                             "hfov": 360,
                             "adjacentPanoramas": [
                              {
                               "panorama": "this.panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28",
                               "yaw": -173.12,
                               "class": "AdjacentPanorama",
                               "backwardYaw": -162.92,
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
                              },
                              {
                               "panorama": "this.panorama_91758D80_9D6A_1106_41DC_64D8466F87FC",
                               "yaw": 18.94,
                               "class": "AdjacentPanorama",
                               "backwardYaw": -142.9,
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
                               "panorama": "this.panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA",
                               "yaw": -173.12,
                               "class": "AdjacentPanorama",
                               "backwardYaw": -172.22,
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
                              }
                             ],
                             "vfov": 180
                            },
                            "yaw": -171.96,
                            "class": "AdjacentPanorama",
                            "backwardYaw": -173.12,
                            "distance": 1
                           }
                          ],
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
                         "panorama": "this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA",
                         "yaw": -170.58,
                         "class": "AdjacentPanorama",
                         "backwardYaw": -173.12,
                         "distance": 1
                        }
                       ],
                       "vfov": 180
                      },
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
                      "panorama": "this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA",
                      "yaw": -172.22,
                      "class": "AdjacentPanorama",
                      "backwardYaw": -173.12,
                      "distance": 1
                     }
                    ],
                    "vfov": 180
                   },
                   "yaw": -162.92,
                   "class": "AdjacentPanorama",
                   "backwardYaw": -172.22,
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
                   "panorama": "this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA",
                   "yaw": -162.92,
                   "class": "AdjacentPanorama",
                   "backwardYaw": -173.12,
                   "distance": 1
                  }
                 ],
                 "vfov": 180
                },
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
                "panorama": "this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA",
                "yaw": -142.9,
                "class": "AdjacentPanorama",
                "backwardYaw": 18.94,
                "distance": 1
               }
              ],
              "vfov": 180
             },
             "yaw": -170.68,
             "class": "AdjacentPanorama",
             "backwardYaw": -172.21,
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
             "panorama": "this.panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA",
             "yaw": -16.8,
             "class": "AdjacentPanorama",
             "backwardYaw": -97.22,
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
             "panorama": "this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA",
             "yaw": -170.68,
             "class": "AdjacentPanorama",
             "backwardYaw": -173.12,
             "distance": 1
            }
           ],
           "vfov": 180
          },
          "yaw": -170.2,
          "class": "AdjacentPanorama",
          "backwardYaw": -170.68,
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
          "panorama": "this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA",
          "yaw": -170.2,
          "class": "AdjacentPanorama",
          "backwardYaw": -173.12,
          "distance": 1
         }
        ],
        "vfov": 180
       },
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
       "panorama": "this.panorama_91758D80_9D6A_1106_41DC_64D8466F87FC",
       "yaw": -162.92,
       "class": "AdjacentPanorama",
       "backwardYaw": -172.21,
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
       "panorama": "this.panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA",
       "yaw": -162.92,
       "class": "AdjacentPanorama",
       "backwardYaw": -172.22,
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
       "panorama": "this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA",
       "yaw": -162.92,
       "class": "AdjacentPanorama",
       "backwardYaw": -173.12,
       "distance": 1
      }
     ],
     "vfov": 180
    },
    "yaw": -171.36,
    "class": "AdjacentPanorama",
    "backwardYaw": -162.92,
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
    "panorama": "this.panorama_91758D80_9D6A_1106_41DC_64D8466F87FC",
    "yaw": -171.36,
    "class": "AdjacentPanorama",
    "backwardYaw": -172.21,
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
    "panorama": "this.panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA",
    "yaw": -171.36,
    "class": "AdjacentPanorama",
    "backwardYaw": -172.22,
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
    "panorama": "this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA",
    "yaw": -171.36,
    "class": "AdjacentPanorama",
    "backwardYaw": -173.12,
    "distance": 1
   }
  ],
  "vfov": 180
 },
 {
  "class": "PanoramaPlayer",
  "touchControlMode": "drag_rotation",
  "displayPlaybackBar": true,
  "buttonToggleHotspots": {
   "backgroundOpacity": 0,
   "minWidth": 1,
   "paddingRight": 0,
   "mode": "toggle",
   "maxWidth": 60,
   "toolTipPaddingBottom": 4,
   "paddingLeft": 0,
   "height": "100%",
   "toolTipPaddingRight": 6,
   "width": "100%",
   "toolTipTextShadowOpacity": 0,
   "iconURL": "skin/IconButton_80E5955A_8E23_BB05_41CA_43DD61DBAEE9.png",
   "transparencyActive": true,
   "toolTipPaddingTop": 4,
   "toolTipBorderSize": 1,
   "toolTip": "Hotspots Visibility",
   "toolTipFontSize": 11,
   "toolTipShadowOpacity": 1,
   "toolTipOpacity": 0.7,
   "borderSize": 0,
   "borderRadius": 0,
   "toolTipShadowVerticalLength": 0,
   "toolTipPaddingLeft": 6,
   "toolTipBorderColor": "#767676",
   "toolTipTextShadowColor": "#000000",
   "click": "if(!this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, true, 0, this.effect_CDD059FA_EED0_D223_41DB_70ACFBE986FE, 'showEffect', false) } else if(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, false, 0, this.effect_CDD049FB_EED0_D221_41EB_CA2134B978E0, 'hideEffect', false) }",
   "toolTipFontStyle": "normal",
   "toolTipBorderRadius": 3,
   "shadow": false,
   "horizontalAlign": "center",
   "cursor": "hand",
   "paddingBottom": 0,
   "maxHeight": 60,
   "toolTipTextShadowBlurRadius": 3,
   "toolTipBackgroundColor": "#000000",
   "toolTipFontWeight": "normal",
   "id": "IconButton_80E5955A_8E23_BB05_41CA_43DD61DBAEE9",
   "minHeight": 1,
   "toolTipShadowHorizontalLength": 0,
   "paddingTop": 0,
   "class": "IconButton",
   "toolTipShadowSpread": 0,
   "toolTipShadowColor": "#333333",
   "toolTipShadowBlurRadius": 3,
   "pressedIconURL": "skin/IconButton_80E5955A_8E23_BB05_41CA_43DD61DBAEE9_pressed.png",
   "toolTipFontColor": "#606060",
   "toolTipFontFamily": "Arial",
   "verticalAlign": "middle"
  },
  "buttonStop": [
   "this.IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4",
   "this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB"
  ],
  "buttonPlay": "this.IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED",
  "buttonCardboardView": {
   "backgroundOpacity": 0,
   "minWidth": 1,
   "paddingRight": 0,
   "mode": "push",
   "maxWidth": 60,
   "paddingLeft": 0,
   "height": "100%",
   "width": "100%",
   "iconURL": "skin/IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37.png",
   "transparencyActive": false,
   "borderSize": 0,
   "borderRadius": 0,
   "rollOverIconURL": "skin/IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37_rollover.png",
   "shadow": false,
   "horizontalAlign": "center",
   "cursor": "hand",
   "visible": false,
   "paddingBottom": 0,
   "maxHeight": 60,
   "id": "IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37",
   "minHeight": 1,
   "paddingTop": 0,
   "class": "IconButton",
   "pressedIconURL": "skin/IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37_pressed.png",
   "verticalAlign": "middle"
  },
  "id": "MainViewerPanoramaPlayer",
  "viewerArea": "this.MainViewer",
  "mouseControlMode": "drag_acceleration",
  "preloadEnabled": false,
  "gyroscopeVerticalDraggingEnabled": true
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
   "playbackBarHeadShadowVerticalLength": 0,
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
   "toolTipFontStyle": "normal",
   "shadow": false,
   "playbackBarProgressBorderSize": 0,
   "playbackBarHeadBackgroundColorDirection": "vertical",
   "progressBottom": 2,
   "playbackBarBackgroundColorDirection": "vertical",
   "paddingBottom": 0,
   "playbackBarRight": 0,
   "toolTipBackgroundColor": "#000000",
   "progressBorderSize": 0,
   "progressBarBorderSize": 0,
   "progressBarBorderRadius": 0,
   "playbackBarOpacity": 1,
   "playbackBarProgressBorderRadius": 0,
   "paddingTop": 0,
   "transitionMode": "blending",
   "class": "ViewerArea",
   "toolTipShadowSpread": 0,
   "playbackBarHeadShadowHorizontalLength": 0,
   "toolTipShadowColor": "#333333",
   "toolTipShadowBlurRadius": 3,
   "progressBackgroundOpacity": 1,
   "toolTipFontColor": "#606060",
   "playbackBarBorderRadius": 0,
   "playbackBarHeadShadow": true,
   "minWidth": 1,
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
   "toolTipFontSize": 11,
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
   "playbackBarHeadBackgroundColorRatios": [
    0,
    1
   ],
   "playbackBarHeadShadowOpacity": 0.7,
   "playbackBarHeadHeight": 15,
   "top": "10%",
   "toolTipBorderRadius": 3,
   "toolTipTextShadowBlurRadius": 3,
   "bottom": "10%",
   "toolTipFontWeight": "normal",
   "id": "MapViewer",
   "playbackBarHeadBorderSize": 0,
   "minHeight": 1,
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
  "id": "panorama_9145F5B4_9D6A_310F_41B6_278704EC634D_camera",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "hfov": 120,
   "yaw": 178.1,
   "class": "PanoramaCameraPosition",
   "pitch": 2.83
  }
 },
 "this.panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2",
 {
  "id": "panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2_camera",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "yaw": 16.81,
   "class": "PanoramaCameraPosition",
   "pitch": 2.87
  }
 },
 "this.panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA",
 {
  "id": "panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA_camera",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_916902A1_9D6A_7309_41D0_0B14DE574844",
 {
  "id": "panorama_916902A1_9D6A_7309_41D0_0B14DE574844_camera",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_916227CC_9D6A_311F_41E3_34FF7141124F",
 {
  "id": "panorama_916227CC_9D6A_311F_41E3_34FF7141124F_camera",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044",
 {
  "id": "panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044_camera",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069",
 {
  "id": "panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069_camera",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28",
 {
  "id": "panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28_camera",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_91758D80_9D6A_1106_41DC_64D8466F87FC",
 {
  "id": "panorama_91758D80_9D6A_1106_41DC_64D8466F87FC_camera",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA",
 {
  "id": "panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA_camera",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "mainPlayList",
  "class": "PlayList",
  "items": [
   {
    "id": "PanoramaPlayListItem_6AE82DA9_6719_A5E4_41CA_4CC176442B53",
    "class": "PanoramaPlayListItem",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_6AE82DA9_6719_A5E4_41CA_4CC176442B53, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_9145F5B4_9D6A_310F_41B6_278704EC634D",
    "camera": "this.panorama_9145F5B4_9D6A_310F_41B6_278704EC634D_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2",
    "camera": "this.panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA",
    "camera": "this.panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_916902A1_9D6A_7309_41D0_0B14DE574844",
    "camera": "this.panorama_916902A1_9D6A_7309_41D0_0B14DE574844_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_916227CC_9D6A_311F_41E3_34FF7141124F",
    "camera": "this.panorama_916227CC_9D6A_311F_41E3_34FF7141124F_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044",
    "camera": "this.panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069",
    "camera": "this.panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28",
    "camera": "this.panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_91758D80_9D6A_1106_41DC_64D8466F87FC",
    "camera": "this.panorama_91758D80_9D6A_1106_41DC_64D8466F87FC_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 0)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA",
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
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_9145F5B4_9D6A_310F_41B6_278704EC634D",
    "camera": "this.panorama_9145F5B4_9D6A_310F_41B6_278704EC634D_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 1, 2)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2",
    "camera": "this.panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 2, 3)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA",
    "camera": "this.panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 3, 4)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_916902A1_9D6A_7309_41D0_0B14DE574844",
    "camera": "this.panorama_916902A1_9D6A_7309_41D0_0B14DE574844_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 4, 5)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_916227CC_9D6A_311F_41E3_34FF7141124F",
    "camera": "this.panorama_916227CC_9D6A_311F_41E3_34FF7141124F_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 5, 6)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044",
    "camera": "this.panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 6, 7)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069",
    "camera": "this.panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 7, 8)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28",
    "camera": "this.panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 8, 9)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_91758D80_9D6A_1106_41DC_64D8466F87FC",
    "camera": "this.panorama_91758D80_9D6A_1106_41DC_64D8466F87FC_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 9, 0)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA",
    "camera": "this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA_camera"
   }
  ]
 },
 {
  "thumbnailUrl": "media/video_210B394E_3D54_1A60_41A3_CB42BEC0D3EC_t.jpg",
  "class": "Video",
  "label": "DJI_0384",
  "video": {
   "webmUrl": "media/video_210B394E_3D54_1A60_41A3_CB42BEC0D3EC.webm",
   "width": 1920,
   "class": "VideoResource",
   "height": 1080,
   "mp4Url": "media/video_210B394E_3D54_1A60_41A3_CB42BEC0D3EC.mp4"
  },
  "width": 1920,
  "id": "video_210B394E_3D54_1A60_41A3_CB42BEC0D3EC",
  "loop": false,
  "height": 1080,
  "scaleMode": "fit_outside"
 },
 {
  "id": "playList_6AF56DA1_6719_A5E4_41AD_72ED048B3370",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.registerKey('visibility_ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472', this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472.get('visible')); this.registerKey('visibility_Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB', this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB.get('visible')); this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setComponentVisibility(this.Container_807F782A_8E23_A905_41DE_623121285A09, false, -1, this.effect_22974FB2_2DD9_0421_41BA_84205292D043, 'hideEffect', false); this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, false, -1, this.effect_22899FB3_2DD9_0427_41BB_298AEB3D2851, 'hideEffect', false); this.setComponentVisibility(this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB, true, -1, this.effect_2289DFB3_2DD9_0427_41AE_A35795880BA7, 'showEffect', false); this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, false, -1, this.effect_3876CD6E_2DF9_0421_41C1_F0AB7F279824, 'hideEffect', false); this.setComponentVisibility(this.Container_86F3A56C_8E22_5B1D_41CA_9CE53436FE56, false, -1, this.effect_22973FB1_2DD9_0423_41C1_E1E03953DCCE, 'hideEffect', false)",
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_210B394E_3D54_1A60_41A3_CB42BEC0D3EC",
    "end": "this.setComponentVisibility(this.Container_807F782A_8E23_A905_41DE_623121285A09, true, -1, this.effect_22977FB2_2DD9_0421_41C1_F53B037346DF, 'showEffect', false); this.setComponentVisibility(this.Container_807F782A_8E23_A905_41DE_623121285A09, true, -1, this.effect_22977FB2_2DD9_0421_41C1_F53B037346DF, 'showEffect', false); if(this.existsKey('visibility_Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB')){ if(this.getKey('visibility_Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB')) { this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, true, -1, this.effect_6947327B_6719_BF64_41D4_85AC8E12D7E6, 'showEffect', false); } else { this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, false, -1, this.effect_22899FB3_2DD9_0427_41BB_298AEB3D2851, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB'); this.setComponentVisibility(this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB, false, -1, this.effect_2289EFB3_2DD9_0427_41C0_ACB5A72AE218, 'hideEffect', false); this.setComponentVisibility(this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB, false, -1, this.effect_2289EFB3_2DD9_0427_41C0_ACB5A72AE218, 'hideEffect', false); if(this.existsKey('visibility_ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472')){ if(this.getKey('visibility_ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472')) { this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, true, -1, this.effect_6947927C_6719_BF5C_41C9_1F2A8B5EBA9F, 'showEffect', false); } else { this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, false, -1, this.effect_3876CD6E_2DF9_0421_41C1_F0AB7F279824, 'hideEffect', false); } }; this.unregisterKey('visibility_ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472'); this.setComponentVisibility(this.Container_86F3A56C_8E22_5B1D_41CA_9CE53436FE56, true, -1, this.effect_22975FB2_2DD9_0421_41B4_7A2443082F44, 'showEffect', false); this.setComponentVisibility(this.Container_86F3A56C_8E22_5B1D_41CA_9CE53436FE56, true, -1, this.effect_22975FB2_2DD9_0421_41B4_7A2443082F44, 'showEffect', false)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_6AF56DA1_6719_A5E4_41AD_72ED048B3370, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_6AF56DA1_6719_A5E4_41AD_72ED048B3370, 0, this.video_210B394E_3D54_1A60_41A3_CB42BEC0D3EC)"
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
      },
      "duration": 5000
     },
     "camera": {
      "scaleMode": "fit_outside",
      "class": "MovementPhotoCamera",
      "easing": "linear",
      "targetPosition": {
       "x": "0.33",
       "zoomFactor": 1.1,
       "class": "PhotoCameraPosition",
       "y": "0.55"
      },
      "duration": 5000,
      "initialPosition": {
       "x": "0.50",
       "zoomFactor": 1,
       "class": "PhotoCameraPosition",
       "y": "0.50"
      }
     }
    },
    {
     "class": "PhotoPlayListItem",
     "media": {
      "thumbnailUrl": "media/photo_2537233E_3D54_0E20_41B8_95E46BC1EC07_t.jpg",
      "class": "Photo",
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
      },
      "duration": 5000
     },
     "camera": {
      "scaleMode": "fit_outside",
      "class": "MovementPhotoCamera",
      "easing": "linear",
      "targetPosition": {
       "x": "0.50",
       "zoomFactor": 1.1,
       "class": "PhotoCameraPosition",
       "y": "0.71"
      },
      "duration": 5000,
      "initialPosition": {
       "x": "0.50",
       "zoomFactor": 1,
       "class": "PhotoCameraPosition",
       "y": "0.50"
      }
     }
    },
    {
     "class": "PhotoPlayListItem",
     "media": {
      "thumbnailUrl": "media/photo_25363697_3D54_16EF_41C7_78CA5BF042D8_t.jpg",
      "class": "Photo",
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
      },
      "duration": 5000
     },
     "camera": {
      "scaleMode": "fit_outside",
      "class": "MovementPhotoCamera",
      "easing": "linear",
      "targetPosition": {
       "x": "0.52",
       "zoomFactor": 1.1,
       "class": "PhotoCameraPosition",
       "y": "0.66"
      },
      "duration": 5000,
      "initialPosition": {
       "x": "0.50",
       "zoomFactor": 1,
       "class": "PhotoCameraPosition",
       "y": "0.50"
      }
     }
    },
    {
     "class": "PhotoPlayListItem",
     "media": {
      "thumbnailUrl": "media/photo_2536FA03_3D54_19E7_41C9_9A86E77D5C4C_t.jpg",
      "class": "Photo",
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
      },
      "duration": 5000
     },
     "camera": {
      "scaleMode": "fit_outside",
      "class": "MovementPhotoCamera",
      "easing": "linear",
      "targetPosition": {
       "x": "0.70",
       "zoomFactor": 1.1,
       "class": "PhotoCameraPosition",
       "y": "0.71"
      },
      "duration": 5000,
      "initialPosition": {
       "x": "0.50",
       "zoomFactor": 1,
       "class": "PhotoCameraPosition",
       "y": "0.50"
      }
     }
    },
    {
     "class": "PhotoPlayListItem",
     "media": {
      "thumbnailUrl": "media/photo_25365DAF_3D54_1A3F_41C9_6122F3F568B7_t.jpg",
      "class": "Photo",
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
      },
      "duration": 5000
     },
     "camera": {
      "scaleMode": "fit_outside",
      "class": "MovementPhotoCamera",
      "easing": "linear",
      "targetPosition": {
       "x": "0.49",
       "zoomFactor": 1.1,
       "class": "PhotoCameraPosition",
       "y": "0.74"
      },
      "duration": 5000,
      "initialPosition": {
       "x": "0.50",
       "zoomFactor": 1,
       "class": "PhotoCameraPosition",
       "y": "0.50"
      }
     }
    },
    {
     "class": "PhotoPlayListItem",
     "media": {
      "thumbnailUrl": "media/photo_2536E107_3D54_0BE0_41C7_237D79278EAE_t.jpg",
      "class": "Photo",
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
      },
      "duration": 5000
     },
     "camera": {
      "scaleMode": "fit_outside",
      "class": "MovementPhotoCamera",
      "easing": "linear",
      "targetPosition": {
       "x": "0.32",
       "zoomFactor": 1.1,
       "class": "PhotoCameraPosition",
       "y": "0.47"
      },
      "duration": 5000,
      "initialPosition": {
       "x": "0.50",
       "zoomFactor": 1,
       "class": "PhotoCameraPosition",
       "y": "0.50"
      }
     }
    },
    {
     "class": "PhotoPlayListItem",
     "media": {
      "thumbnailUrl": "media/photo_25361460_3D54_0A21_41C5_9CEF516D0083_t.jpg",
      "class": "Photo",
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
      },
      "duration": 5000
     },
     "camera": {
      "scaleMode": "fit_outside",
      "class": "MovementPhotoCamera",
      "easing": "linear",
      "targetPosition": {
       "x": "0.64",
       "zoomFactor": 1.1,
       "class": "PhotoCameraPosition",
       "y": "0.53"
      },
      "duration": 5000,
      "initialPosition": {
       "x": "0.50",
       "zoomFactor": 1,
       "class": "PhotoCameraPosition",
       "y": "0.50"
      }
     }
    },
    {
     "class": "PhotoPlayListItem",
     "media": {
      "thumbnailUrl": "media/photo_2536E7CB_3D54_F667_41C8_0C74E4EA5879_t.jpg",
      "class": "Photo",
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
      },
      "duration": 5000
     },
     "camera": {
      "scaleMode": "fit_outside",
      "class": "MovementPhotoCamera",
      "easing": "linear",
      "targetPosition": {
       "x": "0.31",
       "zoomFactor": 1.1,
       "class": "PhotoCameraPosition",
       "y": "0.32"
      },
      "duration": 5000,
      "initialPosition": {
       "x": "0.50",
       "zoomFactor": 1,
       "class": "PhotoCameraPosition",
       "y": "0.50"
      }
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
  "id": "playList_6AF5DDA1_6719_A5E4_41D0_E84A52CE6759",
  "class": "PlayList",
  "items": [
   {
    "player": "this.ViewerAreaLabeled_9FD7235A_96CD_9045_41D9_23A3BCBDB1C6PhotoAlbumPlayer",
    "class": "PhotoAlbumPlayListItem",
    "media": "this.album_1AE8DEB7_0EE7_8CC7_4198_F5B75788CCF6",
    "begin": "this.loopAlbum(this.playList_6AF5DDA1_6719_A5E4_41D0_E84A52CE6759, 0)"
   }
  ]
 },
 "this.map_4E02A832_427B_EE04_41CC_8E1CEC03E8D3",
 {
  "id": "playList_6AEB9DA8_6719_A5E4_41C8_6D665BB5EB67",
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
  "id": "ImageResource_6D467B97_636C_BBB6_41A0_C44DB3AF2919",
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
  "id": "camera_6904FDC5_6719_A5AF_41D1_DAA056318505",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "yaw": 9.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_693CCDD2_6719_A5A5_41CA_E4E4F0D3D222",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "yaw": 9.32,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6932DDDC_6719_A55D_41AC_DABFE917EC5B",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "yaw": 7.79,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6928EDE6_6719_A56C_41B9_AF1D16F47C7A",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "yaw": -97.1,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6A138E06_6719_A6AC_41D7_3B1B5422E629",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "yaw": 7.78,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6A0CAE0F_6719_A6BC_41CD_660AFC40F483",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "yaw": 9.42,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6A08AE19_6719_A6A4_41C6_E5644ACE56C8",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "yaw": 8.04,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6A026E22_6719_A6E4_41C6_0E540A58467C",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "hfov": 120,
   "yaw": 8.64,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6A3E8E2C_6719_A6FC_41D2_EFF83483EB31",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "yaw": 6.88,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6A38AE35_6719_A6EC_41D6_2C651BB648DB",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6A329E3E_6719_A6DC_41AA_0C28B03E4A5D",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "yaw": 9.32,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6A2EDE48_6719_A6A4_41D8_227502C26092",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "yaw": 7.79,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6A292E52_6719_A6A4_41D5_553E57F97647",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "yaw": -145.28,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6A258E5C_6719_A75C_41AF_607A35937A95",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "yaw": 7.78,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6A5FBE66_6719_A76C_41D1_FE0E65D185BF",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "yaw": 9.42,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6A584E81_6719_A7A4_41D6_1389FD587A36",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "yaw": -137.98,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6A520E8F_6719_A7BC_41D3_C98FC4969918",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "hfov": 120,
   "yaw": 8.64,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6A4CBE9A_6719_A7A4_41B9_676C81727E77",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "yaw": 6.88,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6A469EA5_6719_A7EC_41D7_09F3302191C3",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6A7E8EAF_6719_A7FC_41D7_E4047395CBB6",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "yaw": 9.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6A778EBA_6719_A7E4_41D0_3EFA6322030B",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "yaw": 7.79,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6A6A6ECA_6719_A7A4_41C0_9F31113A7F60",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6A60BEE3_6719_A764_41CE_497F260A82C3",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "yaw": 82.78,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6A958EF3_6719_A764_4195_871766DF409E",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "yaw": 9.42,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6A86EF00_6719_A6A4_41D0_63BADEFC2778",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "yaw": 8.04,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6ABB6F0A_6719_A6A4_41CE_3DC64D845BC0",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "hfov": 120,
   "yaw": -39.51,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6AACBF13_6719_A6A4_4175_A437F14B545F",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "yaw": 6.88,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6AA14F1D_6719_A6DC_41D2_24B294C4DA25",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6AD37F26_6719_A6EC_41CC_F5BFA6459C29",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "yaw": 9.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6AC5FF2F_6719_A6FB_41CD_389FAD249C28",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "yaw": 9.32,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6AF69F38_6719_A6E5_41D7_05D25502AA73",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "yaw": -145.31,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6AE8CF42_6719_A6A5_41BD_E2BBEFE629DB",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "yaw": 7.78,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_691DAF4B_6719_A6BB_4190_CA5D67B50DF5",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "yaw": 9.42,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_690FCF56_6719_A6AD_41BB_7C1650821834",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "yaw": 8.04,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6900DF60_6719_A564_41D3_2CC79C07A6BA",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "hfov": 120,
   "yaw": 8.64,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_69333F78_6719_A564_41D5_2E8945B8A1A6",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "yaw": -161.06,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_69259F8C_6719_A5BC_41CC_989E16828F8D",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "yaw": -18.22,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_69568FA9_6719_A5E4_41CE_33208C9DE42F",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "yaw": 23,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6948BFC1_6719_A5A4_41C8_9494E6F2A35B",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "yaw": 9.32,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_697D9FD2_6719_A5A4_41C6_B178E9A6F4C9",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "yaw": 37.14,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_696FFFE6_6719_A56C_41D7_B5336A6E6BF1",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "yaw": 7.78,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6960BFFB_6719_A564_41B9_8933F35E671D",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "yaw": 5.61,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6993200A_6719_BAA4_41D2_6638B2FDE9DB",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "yaw": 8.04,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_69855016_6719_BAAC_41CE_3A45AA294BD9",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "hfov": 120,
   "yaw": 8.64,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_69B65020_6719_BAE4_41C4_E6BC8C3017AA",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "yaw": 6.88,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_69A8A02A_6719_BAE4_41D0_443C8F627D2B",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_69DD6034_6719_BAEC_41CE_E4E32FADFE26",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "yaw": 9.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_69CC103E_6719_BADD_41CB_FB1F617EEA3F",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "yaw": 163.2,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_69C0B048_6719_BAA5_41D8_2F9A8CC1F24F",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "yaw": 7.79,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_69F32052_6719_BAA5_41A8_D232AC2150F4",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_69E5B05B_6719_BB5B_41D1_76818F7CD053",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "yaw": 9.42,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_68162065_6719_BB6F_41D2_B59B2657C1B2",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "yaw": 3.2,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6808906E_6719_BB7D_4191_6C054AAFEF4A",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "hfov": 120,
   "yaw": 8.64,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_683D8078_6719_BB65_41AA_F0721239A696",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "yaw": 6.88,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_682C1082_6719_BBA5_41D7_93CB796B065A",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6A3170CB_6719_BBBB_41D4_903CEE240F7D",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "yaw": 9.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6A2DB0E6_6719_BB6C_41D0_0D5B11CE86E7",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "yaw": 9.32,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6A26D0FF_6719_BB5B_41D6_1286873F70E9",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "yaw": 7.79,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6A22E118_6719_BAA5_41D0_8461D2421DEC",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "yaw": 1.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6A5C7124_6719_BAED_41D6_F009E7AD826B",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "yaw": 7.78,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6A59112F_6719_BAFB_41D5_216AB7654C07",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "yaw": 8.04,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6A52E13B_6719_BAE4_41B4_A5474C0793CE",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "hfov": 120,
   "yaw": 8.64,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6A4CA146_6719_BAAD_41A6_A43A72D46F17",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "yaw": 6.88,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6A495152_6719_BAA4_41D8_D67C879220C1",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6A43515D_6719_BD5C_41AB_D0713E865360",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "yaw": 22.98,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6A7FD169_6719_BD64_41D1_81E388EDEDD2",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "yaw": 9.32,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6A79C174_6719_BD6C_41CD_C648F24F5F3A",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "yaw": 7.79,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6A72217F_6719_BD5C_41C6_27BCA0832638",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6A6C618B_6719_BDA4_41BF_9D047B1E6BA1",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "yaw": -167.94,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6A678195_6719_BDAC_41D2_4EA26BD7C7D4",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "yaw": 9.42,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6A60D19E_6719_BDDD_41D3_E33C0A453B11",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "hfov": 120,
   "yaw": 8.64,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6A9B81A8_6719_BDE4_41D0_674C11DE4D29",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "yaw": 6.88,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6A94E1B2_6719_BDE4_41D6_C52CC1AA6960",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6A8F61BB_6719_BDE4_41C1_393C398131FD",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "yaw": 9.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6A86C1C5_6719_BDAC_41C0_C0194716B3BC",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "yaw": -179.07,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6ABF61CE_6719_BDBC_41D6_D4946D8C4EC4",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "yaw": 7.79,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6AB481D8_6719_BDA4_41C4_758BAED66430",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6AAC51E1_6719_BD64_41D7_8E5B3B172321",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "yaw": 7.78,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6AA2A1EB_6719_BD64_4164_E427FD35615F",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "yaw": 9.42,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6AD681F5_6719_BD6C_41CF_6C9269F332E7",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "yaw": 8.04,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6AC881FE_6719_BD5C_41D9_5DA27C232FF5",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "yaw": 6.88,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6AFDA208_6719_BEA4_41CA_B9B1CF5B973D",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6AEFF211_6719_BEA4_41C6_932984D9BA8C",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "yaw": 9.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6AE1F21B_6719_BEA4_41CE_20220AE0C9AD",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "yaw": 9.32,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6912D224_6719_BEEC_41A9_4CEA0B2DFD66",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "yaw": 37.1,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6905723D_6719_BEDC_41CA_FE4433CFE1D7",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6936224E_6719_BEBC_41B2_8C208E58A51A",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "yaw": 7.78,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6928425B_6719_BEA4_41A5_02BAE0E93897",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "yaw": 9.42,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_695D5269_6719_BF64_41C3_386670A6B25D",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "yaw": 8.04,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_694FB277_6719_BF6C_41C9_3D5229E4A712",
  "class": "PanoramaCamera",
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
  "initialPosition": {
   "hfov": 120,
   "yaw": 8.64,
   "class": "PanoramaCameraPosition",
   "pitch": 0
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
  "id": "effect_6947327B_6719_BF64_41D4_85AC8E12D7E6",
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
  "id": "effect_6947927C_6719_BF5C_41C9_1F2A8B5EBA9F",
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
  "id": "audio_A83B2F1A_B250_204B_41B2_61A870B2B428",
  "class": "DirectionalPanoramaAudio",
  "loop": true,
  "audio": {
   "class": "AudioResource",
   "oggUrl": "media/audio_A83B2F1A_B250_204B_41B2_61A870B2B428.ogg",
   "id": "audioresource_1D15163A_0EEB_BFC9_419F_EF5F7074EFB1",
   "mp3Url": "media/audio_A83B2F1A_B250_204B_41B2_61A870B2B428.mp3"
  },
  "maximumAngle": 231.16,
  "yaw": -17.74,
  "pitch": -7.7
 },
 {
  "autoplay": true,
  "id": "audio_A875C8FE_B250_61CA_41D2_1BDD70C9887A",
  "class": "DirectionalPanoramaAudio",
  "loop": true,
  "audio": {
   "class": "AudioResource",
   "oggUrl": "media/audio_A875C8FE_B250_61CA_41D2_1BDD70C9887A.ogg",
   "id": "audioresource_A84F2D34_B270_605F_41E2_4CF67AB762D2",
   "mp3Url": "media/audio_A875C8FE_B250_61CA_41D2_1BDD70C9887A.mp3"
  },
  "maximumAngle": 97.14,
  "yaw": 4.55,
  "pitch": -18.69
 },
 {
  "autoplay": true,
  "id": "audio_A87513BA_B273_E04A_41AA_0102CD2EF1BE",
  "class": "DirectionalPanoramaAudio",
  "loop": true,
  "audio": {
   "class": "AudioResource",
   "oggUrl": "media/audio_A87513BA_B273_E04A_41AA_0102CD2EF1BE.ogg",
   "id": "audioresource_A83107F8_B270_2FD6_41E2_DAE1F661A577",
   "mp3Url": "media/audio_A87513BA_B273_E04A_41AA_0102CD2EF1BE.mp3"
  },
  "maximumAngle": 61.89,
  "yaw": -10.86,
  "pitch": -0.76
 },
 {
  "autoplay": true,
  "id": "audio_A83165F4_B270_23DF_41DC_E385B4E6556E",
  "class": "PanoramaAudio",
  "audio": "this.audioresource_A83107F8_B270_2FD6_41E2_DAE1F661A577"
 },
 {
  "autoplay": true,
  "id": "audio_A8213A22_B270_E07A_41D5_F14349BD0E04",
  "class": "DirectionalPanoramaAudio",
  "loop": true,
  "audio": "this.audioresource_A83107F8_B270_2FD6_41E2_DAE1F661A577",
  "maximumAngle": 222.06,
  "yaw": 0,
  "pitch": 0
 },
 {
  "autoplay": true,
  "id": "audio_A8284F56_B270_60DB_41E0_27608EB2E0B9",
  "class": "DirectionalPanoramaAudio",
  "loop": true,
  "audio": "this.audioresource_A83107F8_B270_2FD6_41E2_DAE1F661A577",
  "maximumAngle": 265.52,
  "yaw": -40.93,
  "pitch": 0.51
 },
 {
  "thumbnailUrl": "media/photo_1D911E4D_0EFC_8C4B_4180_DC7B2E0CE38C_t.jpg",
  "class": "Photo",
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
  },
  "duration": 5000
 },
 {
  "autoplay": true,
  "id": "audio_1D15363A_0EEB_BFC9_4193_928F3B1A384C",
  "class": "DirectionalPanoramaAudio",
  "loop": true,
  "audio": "this.audioresource_1D15163A_0EEB_BFC9_419F_EF5F7074EFB1",
  "maximumAngle": 360,
  "yaw": 0,
  "pitch": 0
 },
 {
  "autoplay": true,
  "id": "audio_58C48535_534B_1088_419D_65D26EA3E6EE",
  "class": "DirectionalPanoramaAudio",
  "loop": true,
  "audio": {
   "class": "AudioResource",
   "oggUrl": "media/audio_58C48535_534B_1088_419D_65D26EA3E6EE.ogg",
   "mp3Url": "media/audio_58C48535_534B_1088_419D_65D26EA3E6EE.mp3"
  },
  "maximumAngle": 360,
  "yaw": 0,
  "pitch": 0
 },
 {
  "autoplay": true,
  "id": "audio_5F019C46_534B_1089_41CA_DD158DC6F095",
  "class": "DirectionalPanoramaAudio",
  "loop": true,
  "audio": {
   "class": "AudioResource",
   "oggUrl": "media/audio_5F019C46_534B_1089_41CA_DD158DC6F095.ogg",
   "mp3Url": "media/audio_5F019C46_534B_1089_41CA_DD158DC6F095.mp3"
  },
  "maximumAngle": 360,
  "yaw": 0,
  "pitch": 0
 },
 {
  "autoplay": true,
  "id": "audio_5F11A888_534B_3198_41C1_CA34B7B483B7",
  "class": "DirectionalPanoramaAudio",
  "loop": true,
  "audio": {
   "class": "AudioResource",
   "oggUrl": "media/audio_5F11A888_534B_3198_41C1_CA34B7B483B7.ogg",
   "mp3Url": "media/audio_5F11A888_534B_3198_41C1_CA34B7B483B7.mp3"
  },
  "maximumAngle": 360,
  "yaw": 0,
  "pitch": 0
 },
 {
  "autoplay": true,
  "id": "audio_5F3A7686_5349_3189_41B9_03AD1E92C6EA",
  "class": "DirectionalPanoramaAudio",
  "loop": true,
  "audio": {
   "class": "AudioResource",
   "oggUrl": "media/audio_5F3A7686_5349_3189_41B9_03AD1E92C6EA.ogg",
   "mp3Url": "media/audio_5F3A7686_5349_3189_41B9_03AD1E92C6EA.mp3"
  },
  "maximumAngle": 360,
  "yaw": 0,
  "pitch": 0
 },
 {
  "autoplay": true,
  "id": "audio_5FD12071_5349_1088_41CE_1A9919606FBF",
  "class": "DirectionalPanoramaAudio",
  "loop": true,
  "audio": {
   "class": "AudioResource",
   "oggUrl": "media/audio_5FD12071_5349_1088_41CE_1A9919606FBF.ogg",
   "mp3Url": "media/audio_5FD12071_5349_1088_41CE_1A9919606FBF.mp3"
  },
  "maximumAngle": 360,
  "yaw": 0,
  "pitch": 0
 },
 {
  "autoplay": true,
  "id": "audio_5F999E34_5349_3089_41A5_30E8148F4541",
  "class": "DirectionalPanoramaAudio",
  "loop": true,
  "audio": {
   "class": "AudioResource",
   "oggUrl": "media/audio_5F999E34_5349_3089_41A5_30E8148F4541.ogg",
   "mp3Url": "media/audio_5F999E34_5349_3089_41A5_30E8148F4541.mp3"
  },
  "maximumAngle": 360,
  "yaw": 0,
  "pitch": 0
 },
 {
  "autoplay": true,
  "id": "audio_5FA8081E_5349_30B9_41D0_06F2A3501C10",
  "class": "DirectionalPanoramaAudio",
  "loop": true,
  "audio": {
   "class": "AudioResource",
   "oggUrl": "media/audio_5FA8081E_5349_30B9_41D0_06F2A3501C10.ogg",
   "mp3Url": "media/audio_5FA8081E_5349_30B9_41D0_06F2A3501C10.mp3"
  },
  "maximumAngle": 360,
  "yaw": 0,
  "pitch": 0
 },
 {
  "autoplay": true,
  "id": "audio_5E6F6697_534F_3188_41D2_212D7D5C7CD4",
  "class": "DirectionalPanoramaAudio",
  "loop": true,
  "audio": {
   "class": "AudioResource",
   "oggUrl": "media/audio_5E6F6697_534F_3188_41D2_212D7D5C7CD4.ogg",
   "mp3Url": "media/audio_5E6F6697_534F_3188_41D2_212D7D5C7CD4.mp3"
  },
  "maximumAngle": 360,
  "yaw": 0,
  "pitch": 0
 },
 {
  "autoplay": true,
  "id": "audio_5E08B9DF_534F_73B7_41C9_0C77F337DE42",
  "class": "DirectionalPanoramaAudio",
  "loop": true,
  "audio": {
   "class": "AudioResource",
   "oggUrl": "media/audio_5E08B9DF_534F_73B7_41C9_0C77F337DE42.ogg",
   "mp3Url": "media/audio_5E08B9DF_534F_73B7_41C9_0C77F337DE42.mp3"
  },
  "maximumAngle": 360,
  "yaw": 0,
  "pitch": 0
 },
 {
  "autoplay": true,
  "id": "audio_5E20D107_534F_3088_4192_A9F38893E7D5",
  "class": "DirectionalPanoramaAudio",
  "loop": true,
  "audio": {
   "class": "AudioResource",
   "oggUrl": "media/audio_5E20D107_534F_3088_4192_A9F38893E7D5.ogg",
   "mp3Url": "media/audio_5E20D107_534F_3088_4192_A9F38893E7D5.mp3"
  },
  "maximumAngle": 360,
  "yaw": 0,
  "pitch": 0
 },
 {
  "autoplay": true,
  "id": "audio_51D70E9C_5DEA_B3F4_41C9_7C42C4A1D34D",
  "class": "DirectionalPanoramaAudio",
  "loop": true,
  "audio": {
   "class": "AudioResource",
   "oggUrl": "media/audio_51D70E9C_5DEA_B3F4_41C9_7C42C4A1D34D.ogg",
   "mp3Url": "media/audio_51D70E9C_5DEA_B3F4_41C9_7C42C4A1D34D.mp3"
  },
  "maximumAngle": 360,
  "yaw": 0,
  "pitch": 0
 },
 {
  "autoplay": true,
  "id": "audio_5116AAD0_5DE9_534C_41D3_54A18E2E7244",
  "class": "DirectionalPanoramaAudio",
  "loop": true,
  "audio": {
   "class": "AudioResource",
   "oggUrl": "media/audio_5116AAD0_5DE9_534C_41D3_54A18E2E7244.ogg",
   "mp3Url": "media/audio_5116AAD0_5DE9_534C_41D3_54A18E2E7244.mp3"
  },
  "maximumAngle": 360,
  "yaw": 0,
  "pitch": 0
 },
 {
  "autoplay": true,
  "id": "audio_508C163F_5DEF_5335_41CB_6F4DF04ED378",
  "class": "DirectionalPanoramaAudio",
  "loop": true,
  "audio": {
   "class": "AudioResource",
   "oggUrl": "media/audio_508C163F_5DEF_5335_41CB_6F4DF04ED378.ogg",
   "mp3Url": "media/audio_508C163F_5DEF_5335_41CB_6F4DF04ED378.mp3"
  },
  "maximumAngle": 360,
  "yaw": 0,
  "pitch": 0
 },
 {
  "autoplay": true,
  "id": "audio_5049FC7B_5DEF_D73D_41B8_AB9CCE43637C",
  "class": "DirectionalPanoramaAudio",
  "loop": true,
  "audio": {
   "class": "AudioResource",
   "oggUrl": "media/audio_5049FC7B_5DEF_D73D_41B8_AB9CCE43637C.ogg",
   "mp3Url": "media/audio_5049FC7B_5DEF_D73D_41B8_AB9CCE43637C.mp3"
  },
  "maximumAngle": 360,
  "yaw": 0,
  "pitch": 0
 },
 {
  "autoplay": true,
  "id": "audio_502EF191_5DEE_F1CC_41D5_35D2DA805B06",
  "class": "DirectionalPanoramaAudio",
  "loop": true,
  "audio": {
   "class": "AudioResource",
   "oggUrl": "media/audio_502EF191_5DEE_F1CC_41D5_35D2DA805B06.ogg",
   "mp3Url": "media/audio_502EF191_5DEE_F1CC_41D5_35D2DA805B06.mp3"
  },
  "maximumAngle": 360,
  "yaw": 0,
  "pitch": 0
 },
 {
  "autoplay": true,
  "id": "audio_53E0760B_5DE9_52DC_41AD_96CE4D26DD8B",
  "class": "DirectionalPanoramaAudio",
  "loop": true,
  "audio": {
   "class": "AudioResource",
   "oggUrl": "media/audio_53E0760B_5DE9_52DC_41AD_96CE4D26DD8B.ogg",
   "mp3Url": "media/audio_53E0760B_5DE9_52DC_41AD_96CE4D26DD8B.mp3"
  },
  "maximumAngle": 360,
  "yaw": 0,
  "pitch": 0
 },
 {
  "autoplay": true,
  "id": "audio_53AB1146_5DE9_5154_41CA_FED3E44D14A9",
  "class": "DirectionalPanoramaAudio",
  "loop": true,
  "audio": {
   "class": "AudioResource",
   "oggUrl": "media/audio_53AB1146_5DE9_5154_41CA_FED3E44D14A9.ogg",
   "mp3Url": "media/audio_53AB1146_5DE9_5154_41CA_FED3E44D14A9.mp3"
  },
  "maximumAngle": 360,
  "yaw": 0,
  "pitch": 0
 },
 "this.audio_6EE4F6F1_6384_1566_4191_B2F6A0AC783C",
 {
  "autoplay": true,
  "id": "audio_6F1C9B0A_6384_7CBA_41CE_60AB31F61D24",
  "class": "PanoramaAudio",
  "loop": true,
  "audio": {
   "class": "AudioResource",
   "oggUrl": "media/audio_6F1C9B0A_6384_7CBA_41CE_60AB31F61D24.ogg",
   "id": "audioresource_6D4D7951_6384_7CA9_41C2_D9426E16B877",
   "mp3Url": "media/audio_6F1C9B0A_6384_7CBA_41CE_60AB31F61D24.mp3"
  }
 },
 "this.audio_6E12927D_6384_2D59_41C7_723CAE05D156",
 {
  "autoplay": true,
  "id": "audio_6D4D4951_6384_7CA9_41AB_4CA3D5AC763C",
  "class": "PanoramaAudio",
  "loop": true,
  "audio": "this.audioresource_6D4D7951_6384_7CA9_41C2_D9426E16B877"
 },
 "this.audio_6DDDE8A6_6384_1DEA_41C5_875048642922",
 {
  "autoplay": true,
  "id": "audio_6E776C92_6384_15AB_41D1_7742A38BF5FD",
  "class": "PanoramaAudio",
  "loop": true,
  "audio": "this.audioresource_6D4D7951_6384_7CA9_41C2_D9426E16B877"
 },
 "this.audio_6DF01D54_6384_14AE_41CB_FE05B1B90F20",
 {
  "autoplay": true,
  "id": "audio_6CC884AF_6384_15FA_41C8_10B064133449",
  "class": "PanoramaAudio",
  "loop": true,
  "audio": "this.audioresource_6D4D7951_6384_7CA9_41C2_D9426E16B877"
 },
 "this.audio_6CB5443C_6384_14DE_41D8_273A5618B00E",
 {
  "autoplay": true,
  "id": "audio_6C20885A_6384_3D5A_41D2_29CAA5B9D606",
  "class": "PanoramaAudio",
  "loop": true,
  "audio": "this.audioresource_6D4D7951_6384_7CA9_41C2_D9426E16B877"
 },
 "this.audio_6C4C2061_6384_2D66_41C1_1067FF251E6E",
 {
  "autoplay": true,
  "id": "audio_6C6CA987_6385_FFAA_419D_40276EDF3E58",
  "class": "PanoramaAudio",
  "loop": true,
  "audio": "this.audioresource_6D4D7951_6384_7CA9_41C2_D9426E16B877"
 },
 "this.audio_724C9696_6384_15AA_41C8_8DF380D40AC4",
 {
  "autoplay": true,
  "id": "audio_708437E5_6384_F36E_4191_02D5F0B580D7",
  "class": "PanoramaAudio",
  "loop": true,
  "audio": "this.audioresource_6D4D7951_6384_7CA9_41C2_D9426E16B877"
 },
 "this.audio_718220A6_6384_2DEB_41B1_B96CD879EE93",
 {
  "autoplay": true,
  "id": "audio_71670918_6384_7CA6_41D3_387F6462AB38",
  "class": "PanoramaAudio",
  "loop": true,
  "audio": "this.audioresource_6D4D7951_6384_7CA9_41C2_D9426E16B877"
 },
 "this.audio_712D6885_6384_3DAE_4188_B01AAF4ACE39",
 {
  "autoplay": true,
  "id": "audio_71193EF7_6384_156A_41D1_AE1F02DD23B5",
  "class": "PanoramaAudio",
  "loop": true,
  "audio": "this.audioresource_6D4D7951_6384_7CA9_41C2_D9426E16B877"
 },
 "this.audio_7152B69D_638C_35DE_41D2_F7F5A2244344",
 {
  "autoplay": true,
  "id": "audio_7031C845_638C_1CAE_41D6_83B3ABBDA83C",
  "class": "PanoramaAudio",
  "loop": true,
  "audio": "this.audioresource_6D4D7951_6384_7CA9_41C2_D9426E16B877"
 },
 {
  "autoplay": true,
  "id": "audio_6D2FAD8A_6719_A5A4_41CF_E2D2269D0483",
  "class": "MediaAudio",
  "audio": {
   "class": "AudioResource",
   "oggUrl": "media/audio_6D2FAD8A_6719_A5A4_41CF_E2D2269D0483.ogg",
   "mp3Url": "media/audio_6D2FAD8A_6719_A5A4_41CF_E2D2269D0483.mp3"
  }
 }
], "children": [
 {
  "paddingRight": 0,
  "progressBorderRadius": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarHeadShadowVerticalLength": 0,
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
  "toolTipFontStyle": "normal",
  "shadow": false,
  "playbackBarProgressBorderSize": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "progressBottom": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "paddingBottom": 0,
  "playbackBarRight": 0,
  "toolTipBackgroundColor": "#000000",
  "progressBorderSize": 0,
  "progressBarBorderSize": 0,
  "progressBarBorderRadius": 0,
  "playbackBarOpacity": 1,
  "playbackBarProgressBorderRadius": 0,
  "paddingTop": 0,
  "transitionMode": "blending",
  "class": "ViewerArea",
  "toolTipShadowSpread": 0,
  "playbackBarHeadShadowHorizontalLength": 0,
  "toolTipShadowColor": "#333333",
  "toolTipShadowBlurRadius": 3,
  "progressBackgroundOpacity": 1,
  "toolTipFontColor": "#606060",
  "playbackBarBorderRadius": 0,
  "playbackBarHeadShadow": true,
  "minWidth": 100,
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
  "toolTipFontSize": 11,
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
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarHeadHeight": 15,
  "top": "0%",
  "toolTipBorderRadius": 3,
  "toolTipTextShadowBlurRadius": 3,
  "bottom": "0%",
  "toolTipFontWeight": "normal",
  "id": "MainViewer",
  "playbackBarHeadBorderSize": 0,
  "minHeight": 50,
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
  "minWidth": 500,
  "scrollBarColor": "#000000",
  "overflow": "visible",
  "scrollBarOpacity": 0.5,
  "paddingRight": 0,
  "maxWidth": 500,
  "width": 500,
  "paddingLeft": 0,
  "height": 50,
  "layout": "horizontal",
  "borderRadius": 5,
  "borderSize": 0,
  "gap": 5,
  "contentOpaque": false,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "shadow": false,
  "horizontalAlign": "right",
  "top": "3%",
  "paddingBottom": 0,
  "maxHeight": 55,
  "id": "Container_807F782A_8E23_A905_41DE_623121285A09",
  "minHeight": 55,
  "paddingTop": 0,
  "class": "Container",
  "backgroundOpacity": 0,
  "right": "1.5%",
  "children": [
   {
    "minWidth": 100,
    "scrollBarColor": "#000000",
    "overflow": "visible",
    "scrollBarOpacity": 0.5,
    "paddingRight": 0,
    "width": 400,
    "paddingLeft": 0,
    "height": 55,
    "layout": "horizontal",
    "borderRadius": 0,
    "borderSize": 0,
    "gap": 0,
    "contentOpaque": false,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "shadow": false,
    "horizontalAlign": "right",
    "visible": false,
    "paddingBottom": 0,
    "maxHeight": 55,
    "id": "Container_80D3CF90_8E26_E705_41E0_E47025A2C106",
    "minHeight": 55,
    "paddingTop": 0,
    "class": "Container",
    "backgroundOpacity": 0,
    "children": [
     "this.IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37",
     {
      "backgroundOpacity": 0,
      "minWidth": 1,
      "paddingRight": 0,
      "mode": "toggle",
      "maxWidth": 60,
      "toolTipPaddingBottom": 4,
      "paddingLeft": 0,
      "height": "100%",
      "toolTipPaddingRight": 6,
      "width": "100%",
      "toolTipTextShadowOpacity": 0,
      "iconURL": "skin/IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA.png",
      "transparencyActive": true,
      "toolTipPaddingTop": 4,
      "toolTipBorderSize": 1,
      "toolTip": "Full Screen",
      "toolTipFontSize": 11,
      "toolTipShadowOpacity": 1,
      "toolTipOpacity": 0.7,
      "borderSize": 0,
      "borderRadius": 0,
      "toolTipShadowVerticalLength": 0,
      "toolTipPaddingLeft": 6,
      "toolTipBorderColor": "#767676",
      "toolTipTextShadowColor": "#000000",
      "click": "if(!this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, true, 0, null, null, false) } else if(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, false, 0, null, null, false) }",
      "toolTipFontStyle": "normal",
      "toolTipBorderRadius": 3,
      "shadow": false,
      "horizontalAlign": "center",
      "cursor": "hand",
      "paddingBottom": 0,
      "maxHeight": 60,
      "toolTipTextShadowBlurRadius": 3,
      "toolTipBackgroundColor": "#000000",
      "toolTipFontWeight": "normal",
      "id": "IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA",
      "minHeight": 1,
      "toolTipShadowHorizontalLength": 0,
      "paddingTop": 0,
      "class": "IconButton",
      "toolTipShadowSpread": 0,
      "toolTipShadowColor": "#333333",
      "toolTipShadowBlurRadius": 3,
      "pressedIconURL": "skin/IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA_pressed.png",
      "toolTipFontColor": "#606060",
      "toolTipFontFamily": "Arial",
      "verticalAlign": "middle"
     },
     {
      "backgroundOpacity": 0,
      "minWidth": 1,
      "paddingRight": 0,
      "mode": "toggle",
      "maxWidth": 60,
      "toolTipPaddingBottom": 4,
      "paddingLeft": 0,
      "height": "100%",
      "toolTipPaddingRight": 6,
      "width": "100%",
      "toolTipTextShadowOpacity": 0,
      "iconURL": "skin/IconButton_8105A313_8E22_BF0B_41E1_331C6035A930.png",
      "transparencyActive": true,
      "toolTipPaddingTop": 4,
      "toolTipBorderSize": 1,
      "toolTip": "Audio On/Off",
      "toolTipFontSize": 11,
      "toolTipShadowOpacity": 1,
      "toolTipOpacity": 0.7,
      "borderSize": 0,
      "borderRadius": 0,
      "toolTipShadowVerticalLength": 0,
      "toolTipPaddingLeft": 6,
      "toolTipBorderColor": "#767676",
      "toolTipTextShadowColor": "#000000",
      "click": "if(!this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, true, 0, this.effect_CACBF85D_EED0_7261_41DB_A3B65ECE0D5D, 'showEffect', false) } else if(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, false, 0, this.effect_CACBC85D_EED0_7261_41BE_8CF4C3A8170C, 'hideEffect', false) }",
      "toolTipFontStyle": "normal",
      "toolTipBorderRadius": 3,
      "shadow": false,
      "horizontalAlign": "center",
      "cursor": "hand",
      "paddingBottom": 0,
      "maxHeight": 60,
      "toolTipTextShadowBlurRadius": 3,
      "toolTipBackgroundColor": "#000000",
      "toolTipFontWeight": "normal",
      "id": "IconButton_8105A313_8E22_BF0B_41E1_331C6035A930",
      "minHeight": 1,
      "toolTipShadowHorizontalLength": 0,
      "paddingTop": 0,
      "class": "IconButton",
      "toolTipShadowSpread": 0,
      "toolTipShadowColor": "#333333",
      "toolTipShadowBlurRadius": 3,
      "pressedIconURL": "skin/IconButton_8105A313_8E22_BF0B_41E1_331C6035A930_pressed.png",
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
    "backgroundOpacity": 0,
    "minWidth": 55,
    "paddingRight": 0,
    "mode": "toggle",
    "maxWidth": 55,
    "toolTipPaddingBottom": 4,
    "paddingLeft": 0,
    "height": "100%",
    "toolTipPaddingRight": 6,
    "width": "100%",
    "toolTipTextShadowOpacity": 0,
    "iconURL": "skin/IconButton_811D89E1_8E3D_AB07_4191_94003C90B2FF.png",
    "transparencyActive": true,
    "toolTipPaddingTop": 4,
    "toolTipBorderSize": 1,
    "toolTip": "Settings",
    "toolTipFontSize": 11,
    "toolTipShadowOpacity": 1,
    "toolTipOpacity": 0.7,
    "borderSize": 0,
    "borderRadius": 0,
    "toolTipShadowVerticalLength": 0,
    "toolTipPaddingLeft": 6,
    "toolTipBorderColor": "#767676",
    "toolTipTextShadowColor": "#000000",
    "click": "if(!this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, true, 0, this.effect_32C91197_3F22_3110_4181_9E76B593FBFE, 'showEffect', false) } else if(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, false, 0, this.effect_32C92197_3F22_3110_419D_E2E21968F16F, 'hideEffect', false) }",
    "toolTipFontStyle": "normal",
    "toolTipBorderRadius": 3,
    "shadow": false,
    "horizontalAlign": "center",
    "cursor": "hand",
    "paddingBottom": 0,
    "maxHeight": 55,
    "toolTipTextShadowBlurRadius": 3,
    "toolTipBackgroundColor": "#000000",
    "toolTipFontWeight": "normal",
    "id": "IconButton_811D89E1_8E3D_AB07_4191_94003C90B2FF",
    "minHeight": 55,
    "toolTipShadowHorizontalLength": 0,
    "paddingTop": 0,
    "class": "IconButton",
    "toolTipShadowSpread": 0,
    "toolTipShadowColor": "#333333",
    "toolTipShadowBlurRadius": 3,
    "pressedIconURL": "skin/IconButton_811D89E1_8E3D_AB07_4191_94003C90B2FF_pressed.png",
    "toolTipFontColor": "#606060",
    "toolTipFontFamily": "Arial",
    "verticalAlign": "middle"
   }
  ],
  "verticalAlign": "middle",
  "scrollBarVisible": "rollOver"
 },
 {
  "backgroundOpacity": 0.7,
  "minWidth": 1,
  "backgroundColorDirection": "vertical",
  "overflow": "scroll",
  "scrollBarOpacity": 0.5,
  "paddingRight": 0,
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "scrollBarColor": "#000000",
  "paddingLeft": 0,
  "height": "100%",
  "width": "100%",
  "borderSize": 0,
  "gap": 10,
  "contentOpaque": false,
  "layout": "absolute",
  "borderRadius": 0,
  "scrollBarMargin": 2,
  "scrollBarWidth": 10,
  "shadow": false,
  "horizontalAlign": "left",
  "top": "0%",
  "visible": false,
  "paddingBottom": 0,
  "backgroundColorRatios": [
   0,
   1
  ],
  "id": "Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB",
  "minHeight": 1,
  "paddingTop": 0,
  "class": "Container",
  "left": "0%",
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
  "minWidth": 50,
  "paddingRight": 0,
  "mode": "push",
  "maxWidth": 50,
  "paddingLeft": 0,
  "height": "5.482%",
  "width": "3.03%",
  "iconURL": "skin/IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB.png",
  "transparencyActive": true,
  "borderSize": 0,
  "borderRadius": 0,
  "rollOverIconURL": "skin/IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB_rollover.png",
  "shadow": false,
  "horizontalAlign": "center",
  "top": "2%",
  "cursor": "hand",
  "visible": false,
  "paddingBottom": 0,
  "maxHeight": 50,
  "id": "IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB",
  "minHeight": 50,
  "paddingTop": 0,
  "class": "IconButton",
  "right": "2%",
  "verticalAlign": "middle"
 },
 {
  "minWidth": 1,
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
  "gap": 10,
  "contentOpaque": false,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "shadow": false,
  "horizontalAlign": "left",
  "top": "0%",
  "visible": false,
  "paddingBottom": 0,
  "bottom": "0%",
  "id": "Container_53347472_4288_F6E6_4196_D7457B47D2CF",
  "minHeight": 1,
  "backgroundColorRatios": [
   0,
   1
  ],
  "paddingTop": 0,
  "class": "Container",
  "left": "0%",
  "backgroundOpacity": 0.3,
  "right": "0%",
  "children": [
   "this.MapViewer",
   {
    "backgroundOpacity": 0,
    "minWidth": 50,
    "paddingRight": 0,
    "mode": "push",
    "maxWidth": 50,
    "paddingLeft": 0,
    "height": "5.91%",
    "width": "5.07%",
    "iconURL": "skin/IconButton_50D1A26C_4289_72E1_41CD_2B557DFCC24F.png",
    "transparencyActive": true,
    "borderSize": 0,
    "borderRadius": 0,
    "rollOverIconURL": "skin/IconButton_50D1A26C_4289_72E1_41CD_2B557DFCC24F_rollover.png",
    "click": "this.setComponentVisibility(this.Container_53347472_4288_F6E6_4196_D7457B47D2CF, false, 0, this.effect_500E3733_4297_3267_41C9_4935C0BEBF39, 'hideEffect', false)",
    "shadow": false,
    "horizontalAlign": "center",
    "top": "5%",
    "cursor": "hand",
    "paddingBottom": 0,
    "maxHeight": 50,
    "id": "IconButton_50D1A26C_4289_72E1_41CD_2B557DFCC24F",
    "minHeight": 50,
    "paddingTop": 0,
    "class": "IconButton",
    "right": "5%",
    "verticalAlign": "middle"
   }
  ],
  "verticalAlign": "top",
  "scrollBarVisible": "rollOver"
 },
 {
  "minWidth": 1,
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
  "paddingBottom": 0,
  "maxHeight": 160,
  "bottom": "0.7%",
  "id": "Container_6EC9FEC0_76A2_F957_41C5_79AD4AF65B38",
  "minHeight": 130,
  "paddingTop": 0,
  "class": "Container",
  "left": "15%",
  "backgroundOpacity": 0,
  "right": "15%",
  "children": [
   {
    "paddingRight": 5,
    "itemBackgroundColorRatios": [],
    "itemLabelFontFamily": "Arial",
    "backgroundColor": [
     "#000000"
    ],
    "rollOverItemBackgroundColorDirection": "vertical",
    "rollOverItemThumbnailShadowHorizontalLength": 0,
    "itemThumbnailHeight": 60,
    "gap": 7,
    "selectedItemBackgroundColor": [],
    "scrollBarWidth": 5,
    "scrollBarMargin": 2,
    "horizontalAlign": "left",
    "itemHorizontalAlign": "center",
    "itemMode": "normal",
    "shadow": false,
    "rollOverItemThumbnailShadowBlurRadius": 15,
    "selectedItemLabelFontStyle": "italic",
    "playList": "this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist",
    "paddingBottom": 5,
    "rollOverItemBackgroundColor": [
     "#000000"
    ],
    "rollOverItemLabelFontColor": "#FFFFFF",
    "backgroundColorRatios": [
     0
    ],
    "itemLabelFontColor": "#FFFFFF",
    "rollOverItemThumbnailShadowVerticalLength": 0,
    "rollOverItemLabelFontWeight": "bold",
    "paddingTop": 5,
    "class": "ThumbnailList",
    "selectedItemThumbnailShadowHorizontalLength": 0,
    "itemThumbnailScaleMode": "fit_outside",
    "selectedItemLabelFontColor": "#FFFFFF",
    "itemThumbnailOpacity": 1,
    "itemPaddingBottom": 3,
    "selectedItemLabelTextDecoration": "underline",
    "itemLabelFontWeight": "normal",
    "itemThumbnailShadow": false,
    "rollOverItemLabelTextDecoration": "underline",
    "rollOverItemLabelFontStyle": "normal",
    "minWidth": 50,
    "backgroundColorDirection": "vertical",
    "itemThumbnailBorderRadius": 30,
    "scrollBarOpacity": 1,
    "rollOverItemBackgroundColorRatios": [
     0
    ],
    "scrollBarColor": "#52B7EF",
    "itemLabelTextDecoration": "none",
    "scrollBarVisible": "rollOver",
    "maxWidth": 770,
    "itemPaddingRight": 3,
    "paddingLeft": 5,
    "height": "100%",
    "selectedItemThumbnailShadowBlurRadius": 15,
    "itemLabelFontStyle": "normal",
    "selectedItemThumbnailShadow": true,
    "itemLabelHorizontalAlign": "center",
    "itemPaddingLeft": 3,
    "itemThumbnailWidth": 60,
    "borderRadius": 3,
    "borderSize": 0,
    "itemBorderRadius": 0,
    "selectedItemThumbnailShadowOpacity": 1,
    "selectedItemThumbnailShadowVerticalLength": 0,
    "selectedItemLabelFontSize": 11,
    "rollOverItemThumbnailShadowColor": "#FFFFFF",
    "width": "100%",
    "selectedItemBorderSize": 0,
    "itemPaddingTop": 3,
    "selectedItemBorderRadius": 0,
    "layout": "horizontal",
    "itemVerticalAlign": "middle",
    "maxHeight": 100,
    "id": "ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472",
    "itemBackgroundOpacity": 0,
    "minHeight": 70,
    "selectedItemThumbnailShadowColor": "#FFFFFF",
    "itemLabelGap": 5,
    "selectedItemLabelFontWeight": "bold",
    "itemBackgroundColorDirection": "vertical",
    "selectedItemBackgroundColorRatios": [],
    "itemOpacity": 1,
    "rollOverItemBackgroundOpacity": 0,
    "itemBackgroundColor": [],
    "itemLabelFontSize": 11,
    "selectedItemBackgroundOpacity": 0,
    "itemLabelPosition": "bottom",
    "rollOverItemThumbnailShadowOpacity": 1,
    "backgroundOpacity": 0.25,
    "rollOverItemThumbnailShadow": true,
    "verticalAlign": "top"
   },
   {
    "minWidth": 70,
    "scrollBarColor": "#000000",
    "overflow": "visible",
    "scrollBarOpacity": 0.5,
    "paddingRight": 0,
    "maxWidth": 70,
    "width": 70,
    "paddingLeft": 0,
    "height": 55,
    "layout": "absolute",
    "borderRadius": 5,
    "borderSize": 0,
    "gap": 0,
    "contentOpaque": false,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "shadow": false,
    "horizontalAlign": "center",
    "paddingBottom": 0,
    "maxHeight": 55,
    "id": "Container_86F3A56C_8E22_5B1D_41CA_9CE53436FE56",
    "minHeight": 55,
    "paddingTop": 0,
    "class": "Container",
    "backgroundOpacity": 0,
    "children": [
     {
      "backgroundOpacity": 0,
      "minWidth": 25,
      "paddingRight": 0,
      "mode": "push",
      "maxWidth": 70,
      "toolTipPaddingBottom": 4,
      "paddingLeft": 0,
      "height": "100%",
      "toolTipPaddingRight": 6,
      "width": "100%",
      "toolTipTextShadowOpacity": 0,
      "iconURL": "skin/IconButton_87577B8F_8E22_AF1B_41CC_79EB87AE6DED.png",
      "transparencyActive": true,
      "toolTipPaddingTop": 4,
      "toolTipBorderSize": 1,
      "toolTip": "Info",
      "toolTipFontSize": 11,
      "toolTipShadowOpacity": 1,
      "toolTipOpacity": 0.7,
      "borderSize": 0,
      "borderRadius": 0,
      "toolTipShadowVerticalLength": 0,
      "toolTipPaddingLeft": 6,
      "toolTipBorderColor": "#767676",
      "toolTipTextShadowColor": "#000000",
      "rollOverIconURL": "skin/IconButton_87577B8F_8E22_AF1B_41CC_79EB87AE6DED_rollover.png",
      "click": "this.showPopupImage(this.ImageResource_6D467B97_636C_BBB6_41A0_C44DB3AF2919, null, '85%', '85%', this.FadeInEffect_8ED05F70_96C4_F045_41DC_2AB82A556F92, this.FadeOutEffect_8ED06F70_96C4_F045_41DA_C74400CF7B15, {'rollOverIconWidth':25,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorDirection':'vertical','rollOverBackgroundColor':['#000000','#000000','#000000'],'pressedBackgroundColor':['#000000','#000000','#000000'],'iconHeight':25,'rollOverIconColor':'#52B7EF','backgroundColor':['#000000','#000000','#000000'],'rollOverBackgroundColorDirection':'vertical','pressedBorderSize':0,'iconColor':'#FFFFFF','backgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':10,'paddingBottom':10,'pressedIconLineWidth':3,'borderColor':'#000000','paddingLeft':10,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':3,'pressedBorderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundOpacity':0.3,'paddingTop':10,'pressedIconColor':'#CCCCCC','pressedBackgroundColorDirection':'vertical','borderSize':0,'pressedIconWidth':25,'pressedIconHeight':25,'backgroundOpacity':0.15,'rollOverBorderColor':'#000000','rollOverBackgroundOpacity':0.5,'iconWidth':25,'rollOverIconHeight':25,'rollOverIconLineWidth':3}, null, null, false)",
      "toolTipFontStyle": "normal",
      "toolTipBorderRadius": 3,
      "shadow": false,
      "horizontalAlign": "center",
      "cursor": "hand",
      "visible": false,
      "paddingBottom": 0,
      "maxHeight": 70,
      "toolTipTextShadowBlurRadius": 3,
      "toolTipBackgroundColor": "#000000",
      "toolTipFontWeight": "normal",
      "id": "IconButton_87577B8F_8E22_AF1B_41CC_79EB87AE6DED",
      "minHeight": 25,
      "toolTipShadowHorizontalLength": 0,
      "paddingTop": 0,
      "class": "IconButton",
      "toolTipShadowSpread": 0,
      "toolTipShadowColor": "#333333",
      "toolTipShadowBlurRadius": 3,
      "toolTipFontColor": "#606060",
      "toolTipFontFamily": "Arial",
      "verticalAlign": "middle"
     },
     {
      "backgroundOpacity": 0,
      "minWidth": 25,
      "paddingRight": 0,
      "mode": "push",
      "maxWidth": 70,
      "toolTipPaddingBottom": 4,
      "paddingLeft": 0,
      "height": "100%",
      "toolTipPaddingRight": 6,
      "width": "100%",
      "toolTipTextShadowOpacity": 0,
      "iconURL": "skin/IconButton_213ED70C_2DB2_E6C5_41B6_0CCE6C77E889.png",
      "transparencyActive": true,
      "toolTipPaddingTop": 4,
      "toolTipBorderSize": 1,
      "toolTip": "Play Video",
      "toolTipFontSize": 11,
      "toolTipShadowOpacity": 1,
      "toolTipOpacity": 0.7,
      "borderSize": 0,
      "borderRadius": 0,
      "toolTipShadowVerticalLength": 0,
      "toolTipPaddingLeft": 6,
      "toolTipBorderColor": "#767676",
      "toolTipTextShadowColor": "#000000",
      "rollOverIconURL": "skin/IconButton_213ED70C_2DB2_E6C5_41B6_0CCE6C77E889_rollover.png",
      "click": "this.setMediaBehaviour(this.playList_6AF56DA1_6719_A5E4_41AD_72ED048B3370, 0); this.MainViewerVideoPlayer.play()",
      "toolTipFontStyle": "normal",
      "toolTipBorderRadius": 3,
      "shadow": false,
      "horizontalAlign": "center",
      "cursor": "hand",
      "visible": false,
      "paddingBottom": 0,
      "maxHeight": 70,
      "toolTipTextShadowBlurRadius": 3,
      "toolTipBackgroundColor": "#000000",
      "toolTipFontWeight": "normal",
      "id": "IconButton_213ED70C_2DB2_E6C5_41B6_0CCE6C77E889",
      "minHeight": 25,
      "toolTipShadowHorizontalLength": 0,
      "paddingTop": 0,
      "class": "IconButton",
      "toolTipShadowSpread": 0,
      "toolTipShadowColor": "#333333",
      "toolTipShadowBlurRadius": 3,
      "toolTipFontColor": "#606060",
      "toolTipFontFamily": "Arial",
      "verticalAlign": "middle"
     },
     {
      "backgroundOpacity": 0,
      "minWidth": 70,
      "paddingRight": 0,
      "mode": "push",
      "maxWidth": 70,
      "toolTipPaddingBottom": 4,
      "paddingLeft": 0,
      "height": "100%",
      "toolTipPaddingRight": 6,
      "width": "100%",
      "toolTipTextShadowOpacity": 0,
      "iconURL": "skin/IconButton_67A0F254_76E6_A97F_419D_52AF6E3FE7C0.png",
      "transparencyActive": true,
      "toolTipPaddingTop": 4,
      "toolTipBorderSize": 1,
      "toolTip": "Show Panorama List",
      "toolTipFontSize": 11,
      "toolTipShadowOpacity": 1,
      "toolTipOpacity": 0.7,
      "borderSize": 0,
      "borderRadius": 0,
      "toolTipShadowVerticalLength": 0,
      "toolTipPaddingLeft": 6,
      "toolTipBorderColor": "#767676",
      "toolTipTextShadowColor": "#000000",
      "click": "this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, true, 0, this.effect_508929C3_77ED_DB59_41D8_05A6C8F0681B, 'showEffect', false); this.setComponentVisibility(this.IconButton_843BBEF5_8E22_690F_419D_28CBDD771ACC, true, 0, this.effect_508929C3_77ED_DB59_41D8_05A6C8F0681B, 'showEffect', false); this.setComponentVisibility(this.IconButton_67A0F254_76E6_A97F_419D_52AF6E3FE7C0, false, 0, this.effect_518C2CD2_77ED_D97B_41C3_3AC87D499717, 'hideEffect', false)",
      "toolTipFontStyle": "normal",
      "toolTipBorderRadius": 3,
      "shadow": false,
      "horizontalAlign": "center",
      "cursor": "hand",
      "visible": false,
      "paddingBottom": 0,
      "maxHeight": 55,
      "toolTipTextShadowBlurRadius": 3,
      "toolTipBackgroundColor": "#000000",
      "toolTipFontWeight": "normal",
      "id": "IconButton_67A0F254_76E6_A97F_419D_52AF6E3FE7C0",
      "minHeight": 55,
      "toolTipShadowHorizontalLength": 0,
      "paddingTop": 0,
      "class": "IconButton",
      "toolTipShadowSpread": 0,
      "toolTipShadowColor": "#333333",
      "toolTipShadowBlurRadius": 3,
      "toolTipFontColor": "#606060",
      "toolTipFontFamily": "Arial",
      "verticalAlign": "top"
     },
     {
      "backgroundOpacity": 0,
      "minWidth": 70,
      "paddingRight": 0,
      "mode": "push",
      "maxWidth": 70,
      "toolTipPaddingBottom": 4,
      "paddingLeft": 0,
      "height": "100%",
      "toolTipPaddingRight": 6,
      "width": "100%",
      "toolTipTextShadowOpacity": 0,
      "iconURL": "skin/IconButton_843BBEF5_8E22_690F_419D_28CBDD771ACC.png",
      "transparencyActive": true,
      "toolTipPaddingTop": 4,
      "toolTipBorderSize": 1,
      "toolTip": "Hide Panorama List",
      "toolTipFontSize": 11,
      "toolTipShadowOpacity": 1,
      "toolTipOpacity": 0.7,
      "borderSize": 0,
      "borderRadius": 0,
      "toolTipShadowVerticalLength": 0,
      "toolTipPaddingLeft": 6,
      "toolTipBorderColor": "#767676",
      "toolTipTextShadowColor": "#000000",
      "click": "this.setComponentVisibility(this.IconButton_67A0F254_76E6_A97F_419D_52AF6E3FE7C0, true, 0, this.effect_640860A9_76E7_E929_4192_305B50E5610A, 'showEffect', false); this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, false, 0, this.effect_5032FA51_77E2_5979_41D1_45E5EF039077, 'hideEffect', false); this.setComponentVisibility(this.IconButton_843BBEF5_8E22_690F_419D_28CBDD771ACC, false, 0, this.effect_5032FA51_77E2_5979_41D1_45E5EF039077, 'hideEffect', false)",
      "toolTipFontStyle": "normal",
      "toolTipBorderRadius": 3,
      "shadow": false,
      "horizontalAlign": "center",
      "cursor": "hand",
      "paddingBottom": 0,
      "maxHeight": 55,
      "toolTipTextShadowBlurRadius": 3,
      "toolTipBackgroundColor": "#000000",
      "toolTipFontWeight": "normal",
      "id": "IconButton_843BBEF5_8E22_690F_419D_28CBDD771ACC",
      "minHeight": 55,
      "toolTipShadowHorizontalLength": 0,
      "paddingTop": 0,
      "class": "IconButton",
      "toolTipShadowSpread": 0,
      "toolTipShadowColor": "#333333",
      "toolTipShadowBlurRadius": 3,
      "toolTipFontColor": "#606060",
      "toolTipFontFamily": "Arial",
      "verticalAlign": "top"
     },
     "this.IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED",
     {
      "backgroundOpacity": 0,
      "minWidth": 25,
      "paddingRight": 0,
      "mode": "push",
      "maxWidth": 70,
      "toolTipPaddingBottom": 4,
      "paddingLeft": 0,
      "height": "85%",
      "toolTipPaddingRight": 6,
      "width": "85%",
      "toolTipTextShadowOpacity": 0,
      "iconURL": "skin/IconButton_2FC9210C_3E8F_C4D4_41A7_10D1404CA49B.png",
      "transparencyActive": true,
      "toolTipPaddingTop": 4,
      "toolTipBorderSize": 1,
      "toolTip": "FLoor Plan",
      "toolTipFontSize": 11,
      "toolTipShadowOpacity": 1,
      "toolTipOpacity": 0.7,
      "borderSize": 0,
      "borderRadius": 0,
      "toolTipShadowVerticalLength": 0,
      "toolTipPaddingLeft": 6,
      "toolTipBorderColor": "#767676",
      "toolTipTextShadowColor": "#000000",
      "click": "this.setComponentVisibility(this.Container_53347472_4288_F6E6_4196_D7457B47D2CF, true, 0, this.effect_51CB7B74_4299_12E2_41B4_829087983DE5, 'showEffect', false)",
      "toolTipFontStyle": "normal",
      "toolTipBorderRadius": 3,
      "shadow": false,
      "horizontalAlign": "center",
      "cursor": "hand",
      "visible": false,
      "paddingBottom": 0,
      "maxHeight": 70,
      "toolTipTextShadowBlurRadius": 3,
      "toolTipBackgroundColor": "#000000",
      "toolTipFontWeight": "normal",
      "id": "IconButton_2FC9210C_3E8F_C4D4_41A7_10D1404CA49B",
      "minHeight": 25,
      "toolTipShadowHorizontalLength": 0,
      "paddingTop": 0,
      "class": "IconButton",
      "toolTipShadowSpread": 0,
      "toolTipShadowColor": "#333333",
      "toolTipShadowBlurRadius": 3,
      "pressedIconURL": "skin/IconButton_2FC9210C_3E8F_C4D4_41A7_10D1404CA49B_pressed.png",
      "toolTipFontColor": "#606060",
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
  "minWidth": 0,
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
  "visible": false,
  "paddingBottom": 0,
  "showEffect": {
   "easing": "cubic_in_out",
   "duration": 350,
   "class": "FadeInEffect"
  },
  "bottom": 0,
  "id": "veilPopupPanorama",
  "minHeight": 0,
  "backgroundColorRatios": [
   0
  ],
  "paddingTop": 0,
  "class": "UIComponent",
  "left": 0,
  "backgroundOpacity": 0.55,
  "right": 0
 },
 {
  "minWidth": 0,
  "backgroundColorDirection": "vertical",
  "paddingRight": 0,
  "backgroundColor": [],
  "paddingLeft": 0,
  "borderRadius": 0,
  "borderSize": 0,
  "scaleMode": "custom",
  "shadow": false,
  "top": 0,
  "visible": false,
  "paddingBottom": 0,
  "bottom": 0,
  "id": "zoomImagePopupPanorama",
  "minHeight": 0,
  "backgroundColorRatios": [],
  "paddingTop": 0,
  "class": "ZoomImage",
  "left": 0,
  "backgroundOpacity": 1,
  "right": 0
 },
 {
  "minWidth": 0,
  "backgroundColorDirection": "vertical",
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
  "fontFamily": "Arial",
  "layout": "horizontal",
  "fontColor": "#FFFFFF",
  "shadow": false,
  "horizontalAlign": "center",
  "top": 10,
  "fontWeight": "normal",
  "visible": false,
  "paddingBottom": 5,
  "borderColor": "#000000",
  "showEffect": {
   "easing": "cubic_in_out",
   "duration": 350,
   "class": "FadeInEffect"
  },
  "cursor": "hand",
  "backgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "id": "closeButtonPopupPanorama",
  "fontStyle": "normal",
  "minHeight": 0,
  "iconLineWidth": 5,
  "shadowColor": "#000000",
  "paddingTop": 5,
  "pressedIconColor": "#888888",
  "gap": 5,
  "class": "CloseButton",
  "shadowBlurRadius": 6,
  "shadowSpread": 1,
  "rollOverIconColor": "#666666",
  "backgroundOpacity": 0.3,
  "label": "",
  "right": 10,
  "verticalAlign": "middle"
 }
], 
 "minWidth": 20,
 "overflow": "visible",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "mouseWheelEnabled": true,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "height": "100%",
 "width": "100%",
 "borderSize": 0,
 "gap": 10,
 "contentOpaque": false,
 "layout": "absolute",
 "borderRadius": 0,
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "shadow": false,
 "horizontalAlign": "left",
 "backgroundPreloadEnabled": true,
 "paddingBottom": 0,
 "buttonToggleMute": "this.IconButton_8105A313_8E22_BF0B_41E1_331C6035A930",
 "scripts": {
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio) delete audios[audio.get('id')]; } if(audio) audio.stop(); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "getKey": function(key){  return window[key]; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "registerKey": function(key, value){  window[key] = value; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "unregisterKey": function(key){  delete window[key]; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "existsKey": function(key){  return key in window; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); }
 },
 "id": "rootPlayer",
 "minHeight": 20,
 "vrPolyfillScale": 0.5,
 "paddingTop": 0,
 "class": "Player",
 "start": "this.playAudioList([this.audio_6D2FAD8A_6719_A5A4_41CF_E2D2269D0483]); this.syncPlaylists([this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); this.playList_6AEB9DA8_6719_A5E4_41C8_6D665BB5EB67.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA].forEach(function(component) { component.set('visible', false); }) }",
 "buttonToggleFullscreen": "this.IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA",
 "verticalAlign": "top",
 "scrollBarVisible": "rollOver"
})