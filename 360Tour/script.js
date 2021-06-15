TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "buttonPlay": {
   "paddingLeft": 0,
   "maxHeight": 70,
   "paddingRight": 0,
   "mode": "push",
   "toolTipPaddingRight": 14,
   "toolTipPaddingBottom": 9,
   "iconURL": "skin/IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED.png",
   "width": "26%",
   "minHeight": 1,
   "transparencyActive": true,
   "toolTipPaddingTop": 9,
   "borderRadius": 0,
   "toolTipBorderSize": 0,
   "toolTipTextShadowOpacity": 1,
   "toolTipFontSize": 13,
   "toolTipTextShadowHorizontalLength": 0,
   "toolTipShadowOpacity": 0,
   "toolTipOpacity": 0.7,
   "borderSize": 0,
   "rollOverIconURL": "skin/IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED_rollover.png",
   "toolTipPaddingLeft": 14,
   "toolTipBorderColor": "#767676",
   "toolTipTextShadowColor": "#000000",
   "class": "IconButton",
   "toolTipFontStyle": "normal",
   "toolTipBorderRadius": 1,
   "shadow": false,
   "horizontalAlign": "center",
   "click": "this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, true, 0, this.effect_98AADBB0_96C5_F0C5_41B2_1C4D08E503DB, 'showEffect', false); this.playList_22AC5D1A_0F14_CA57_4198_B59C75E503A0.set('selectedIndex', 0)",
   "cursor": "hand",
   "toolTip": "See Photos",
   "paddingBottom": 0,
   "toolTipTextShadowBlurRadius": 3,
   "toolTipBackgroundColor": "#000000",
   "toolTipFontWeight": "normal",
   "id": "IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED",
   "height": "76.75%",
   "maxWidth": 85,
   "paddingTop": 0,
   "minWidth": 1,
   "toolTipShadowSpread": 0,
   "toolTipShadowColor": "#333333",
   "toolTipShadowBlurRadius": 3,
   "toolTipTextShadowVerticalLength": 0,
   "backgroundOpacity": 0,
   "toolTipFontColor": "#FFFFFF",
   "toolTipFontFamily": "Arial",
   "verticalAlign": "middle"
  },
  "buttonPrevious": {
   "paddingLeft": 0,
   "maxHeight": 70,
   "paddingRight": 0,
   "mode": "push",
   "iconURL": "skin/IconButton_9FEA51EA_96CC_905A_41D3_F42DB0CD0A74.png",
   "width": "4.24%",
   "minHeight": 50,
   "transparencyActive": true,
   "borderRadius": 0,
   "borderSize": 0,
   "rollOverIconURL": "skin/IconButton_9FEA51EA_96CC_905A_41D3_F42DB0CD0A74_rollover.png",
   "class": "IconButton",
   "shadow": false,
   "horizontalAlign": "center",
   "top": "40%",
   "cursor": "hand",
   "paddingBottom": 0,
   "bottom": "40%",
   "id": "IconButton_9FEA51EA_96CC_905A_41D3_F42DB0CD0A74",
   "maxWidth": 70,
   "paddingTop": 0,
   "minWidth": 50,
   "left": "1%",
   "backgroundOpacity": 0,
   "verticalAlign": "middle"
  },
  "id": "ViewerAreaLabeled_9FD7235A_96CD_9045_41D9_23A3BCBDB1C6PhotoAlbumPlayer",
  "viewerArea": {
   "playbackBarHeadShadow": true,
   "paddingRight": 0,
   "progressBorderRadius": 0,
   "progressBarBackgroundColorDirection": "vertical",
   "progressBackgroundColor": [
    "#FFFFFF"
   ],
   "progressBarOpacity": 1,
   "toolTipPaddingBottom": 9,
   "playbackBarProgressBackgroundColorDirection": "vertical",
   "progressRight": 0,
   "toolTipBorderSize": 0,
   "playbackBarBackgroundColor": [
    "#FFFFFF"
   ],
   "toolTipShadowOpacity": 0,
   "toolTipOpacity": 0.7,
   "playbackBarBorderColor": "#FFFFFF",
   "playbackBarHeight": 10,
   "toolTipTextShadowColor": "#000000",
   "playbackBarHeadWidth": 6,
   "class": "ViewerArea",
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
   "minWidth": 1,
   "toolTipShadowSpread": 0,
   "transitionMode": "blending",
   "toolTipShadowColor": "#333333",
   "toolTipShadowBlurRadius": 3,
   "toolTipTextShadowVerticalLength": 0,
   "toolTipFontColor": "#FFFFFF",
   "playbackBarBorderRadius": 0,
   "playbackBarHeadShadowVerticalLength": 0,
   "playbackBarProgressBorderColor": "#000000",
   "progressBackgroundOpacity": 1,
   "toolTipPaddingRight": 14,
   "width": "100%",
   "playbackBarHeadBackgroundColor": [
    "#111111",
    "#666666"
   ],
   "minHeight": 1,
   "playbackBarHeadBorderRadius": 0,
   "toolTipPaddingTop": 9,
   "borderRadius": 0,
   "toolTipTextShadowOpacity": 1,
   "toolTipFontSize": 13,
   "playbackBarProgressOpacity": 1,
   "height": "100%",
   "progressLeft": 0,
   "borderSize": 0,
   "playbackBarHeadBorderColor": "#000000",
   "progressBackgroundColorRatios": [
    0
   ],
   "toolTipTextShadowHorizontalLength": 0,
   "playbackBarLeft": 0,
   "playbackBarHeadShadowBlurRadius": 3,
   "toolTipPaddingLeft": 14,
   "toolTipBorderColor": "#767676",
   "playbackBarProgressBackgroundColorRatios": [
    0
   ],
   "playbackBarBackgroundOpacity": 1,
   "playbackBarHeadShadowHorizontalLength": 0,
   "playbackBarBorderSize": 0,
   "toolTipBorderRadius": 1,
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
   "progressBarBorderColor": "#000000",
   "playbackBarHeadOpacity": 1,
   "progressBarBackgroundColorRatios": [
    0
   ],
   "progressBackgroundColorDirection": "vertical",
   "playbackBarProgressBackgroundColor": [
    "#3399FF"
   ],
   "playbackBarBottom": 0,
   "paddingLeft": 0,
   "progressHeight": 10,
   "left": "0%",
   "progressBarBackgroundColor": [
    "#3399FF"
   ],
   "toolTipFontFamily": "Arial",
   "progressBorderColor": "#000000",
   "progressOpacity": 1
  },
  "buttonNext": {
   "paddingLeft": 0,
   "maxHeight": 70,
   "paddingRight": 0,
   "mode": "push",
   "iconURL": "skin/IconButton_9FB9BD3F_96C5_703B_41D7_65AEE6E85A96.png",
   "width": "4.24%",
   "minHeight": 50,
   "transparencyActive": true,
   "borderRadius": 0,
   "borderSize": 0,
   "rollOverIconURL": "skin/IconButton_9FB9BD3F_96C5_703B_41D7_65AEE6E85A96_rollover.png",
   "class": "IconButton",
   "shadow": false,
   "horizontalAlign": "center",
   "top": "40%",
   "cursor": "hand",
   "paddingBottom": 0,
   "bottom": "40%",
   "id": "IconButton_9FB9BD3F_96C5_703B_41D7_65AEE6E85A96",
   "maxWidth": 70,
   "paddingTop": 0,
   "minWidth": 50,
   "backgroundOpacity": 0,
   "right": "1%",
   "verticalAlign": "middle"
  },
  "class": "PhotoAlbumPlayer",
  "buttonStop": [
   {
    "paddingLeft": 0,
    "maxHeight": 50,
    "paddingRight": 0,
    "mode": "push",
    "iconURL": "skin/IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4.png",
    "width": "3.03%",
    "minHeight": 40,
    "transparencyActive": true,
    "borderRadius": 0,
    "borderSize": 0,
    "rollOverIconURL": "skin/IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4_rollover.png",
    "class": "IconButton",
    "shadow": false,
    "horizontalAlign": "center",
    "top": "2%",
    "click": "this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, false, 0, this.effect_9B0AF4E2_96C4_F045_41D3_0E00FEE03A15, 'hideEffect', false)",
    "cursor": "hand",
    "paddingBottom": 0,
    "id": "IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4",
    "height": "5.48%",
    "maxWidth": 50,
    "paddingTop": 0,
    "minWidth": 40,
    "backgroundOpacity": 0,
    "right": "1%",
    "verticalAlign": "middle"
   },
   "this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB"
  ]
 },
 {
  "frames": [
   {
    "thumbnailUrl": "media/panorama_1EE43061_0EA4_947A_41A0_3B6CE944E0BD_t.jpg",
    "overlays": [
     {
      "useHandCursor": true,
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 98,
           "width": 98,
           "url": "media/panorama_1EE43061_0EA4_947A_41A0_3B6CE944E0BD_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 10.91,
        "yaw": 24.96,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -6.69
       }
      ],
      "areas": [
       {
        "toolTip": "Thu Thiem",
        "click": "this.mainPlayList.set('selectedIndex', 1)",
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true,
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_1FA86567_0E9B_9C47_4193_74856C86FF9C",
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "image": {
         "levels": [
          {
           "height": 196,
           "width": 196,
           "url": "media/panorama_1EE43061_0EA4_947A_41A0_3B6CE944E0BD_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "yaw": 24.96,
        "hfov": 10.91,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -6.69
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_1EE43061_0EA4_947A_41A0_3B6CE944E0BD_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_1EE43061_0EA4_947A_41A0_3B6CE944E0BD.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "id": "panorama_1EE43061_0EA4_947A_41A0_3B6CE944E0BD",
  "audios": [
   {
    "autoplay": true,
    "maximumAngle": 360,
    "id": "audio_1D15363A_0EEB_BFC9_4193_928F3B1A384C",
    "loop": true,
    "audio": {
     "mp3Url": "media/audio_A83B2F1A_B250_204B_41B2_61A870B2B428.mp3",
     "oggUrl": "media/audio_A83B2F1A_B250_204B_41B2_61A870B2B428.ogg",
     "id": "audioresource_1D15163A_0EEB_BFC9_419F_EF5F7074EFB1",
     "class": "AudioResource"
    },
    "yaw": 0,
    "class": "DirectionalPanoramaAudio",
    "pitch": 0
   }
  ],
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_1EE43061_0EA4_947A_41A0_3B6CE944E0BD_t.jpg",
  "hfovMin": 60,
  "label": "Saigon River",
  "hfovMax": 120,
  "hfov": 360,
  "class": "Panorama",
  "vfov": 180
 },
 {
  "buttonCardboardView": {
   "paddingLeft": 0,
   "maxHeight": 70,
   "paddingRight": 0,
   "mode": "push",
   "iconURL": "skin/IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37.png",
   "width": "17.15%",
   "minHeight": 1,
   "transparencyActive": false,
   "borderRadius": 0,
   "borderSize": 0,
   "height": "76.75%",
   "class": "IconButton",
   "shadow": false,
   "horizontalAlign": "center",
   "cursor": "hand",
   "paddingBottom": 0,
   "id": "IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37",
   "maxWidth": 70,
   "paddingTop": 0,
   "minWidth": 1,
   "backgroundOpacity": 0,
   "verticalAlign": "middle"
  },
  "displayPlaybackBar": true,
  "buttonToggleHotspots": {
   "paddingLeft": 0,
   "maxHeight": 70,
   "paddingRight": 0,
   "mode": "toggle",
   "toolTipPaddingRight": 14,
   "toolTipPaddingBottom": 9,
   "iconURL": "skin/IconButton_80E5955A_8E23_BB05_41CA_43DD61DBAEE9.png",
   "width": "17.15%",
   "minHeight": 1,
   "transparencyActive": true,
   "toolTipPaddingTop": 9,
   "borderRadius": 0,
   "toolTipBorderSize": 0,
   "toolTipTextShadowOpacity": 1,
   "toolTipFontSize": 13,
   "toolTipTextShadowHorizontalLength": 0,
   "toolTipShadowOpacity": 0,
   "toolTipOpacity": 0.7,
   "borderSize": 0,
   "height": "76.75%",
   "toolTipPaddingLeft": 14,
   "toolTipBorderColor": "#767676",
   "toolTipTextShadowColor": "#000000",
   "class": "IconButton",
   "toolTipFontStyle": "normal",
   "toolTipBorderRadius": 1,
   "shadow": false,
   "horizontalAlign": "center",
   "click": "if(!this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, true, 0, this.effect_CDD059FA_EED0_D223_41DB_70ACFBE986FE, 'showEffect', false) } else if(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, false, 0, this.effect_CDD049FB_EED0_D221_41EB_CA2134B978E0, 'hideEffect', false) }",
   "cursor": "hand",
   "toolTip": "Hotspots Visibility",
   "paddingBottom": 0,
   "toolTipTextShadowBlurRadius": 3,
   "toolTipBackgroundColor": "#000000",
   "toolTipFontWeight": "normal",
   "id": "IconButton_80E5955A_8E23_BB05_41CA_43DD61DBAEE9",
   "maxWidth": 70,
   "paddingTop": 0,
   "minWidth": 1,
   "toolTipShadowSpread": 0,
   "toolTipShadowColor": "#333333",
   "toolTipShadowBlurRadius": 3,
   "pressedIconURL": "skin/IconButton_80E5955A_8E23_BB05_41CA_43DD61DBAEE9_pressed.png",
   "toolTipTextShadowVerticalLength": 0,
   "backgroundOpacity": 0,
   "toolTipFontColor": "#FFFFFF",
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
  "touchControlMode": "drag_rotation",
  "class": "PanoramaPlayer",
  "gyroscopeVerticalDraggingEnabled": true,
  "preloadEnabled": false
 },
 {
  "id": "panorama_1EE43061_0EA4_947A_41A0_3B6CE944E0BD_camera",
  "initialPosition": {
   "yaw": 56.21,
   "class": "PanoramaCameraPosition",
   "pitch": -9.17
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
  "frames": [
   {
    "thumbnailUrl": "media/panorama_1E842842_0EA4_93B9_414A_441A2EBCC2F8_t.jpg",
    "overlays": [
     {
      "useHandCursor": true,
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 98,
           "width": 98,
           "url": "media/panorama_1E842842_0EA4_93B9_414A_441A2EBCC2F8_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 10.98,
        "yaw": 26.47,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -1.91
       }
      ],
      "areas": [
       {
        "toolTip": "Rach Chiec",
        "click": "this.mainPlayList.set('selectedIndex', 2)",
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true,
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_1D54B787_0EEF_9CC7_41AB_AFC7066D7D2C",
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "image": {
         "levels": [
          {
           "height": 196,
           "width": 196,
           "url": "media/panorama_1E842842_0EA4_93B9_414A_441A2EBCC2F8_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "yaw": 26.47,
        "hfov": 10.98,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -1.91
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_1E842842_0EA4_93B9_414A_441A2EBCC2F8_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_1E842842_0EA4_93B9_414A_441A2EBCC2F8.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "id": "panorama_1E842842_0EA4_93B9_414A_441A2EBCC2F8",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_1E842842_0EA4_93B9_414A_441A2EBCC2F8_t.jpg",
  "hfovMin": 60,
  "label": "Thu Thiem",
  "hfovMax": 120,
  "hfov": 360,
  "class": "Panorama",
  "vfov": 180
 },
 {
  "id": "panorama_1E842842_0EA4_93B9_414A_441A2EBCC2F8_camera",
  "initialPosition": {
   "yaw": 17.44,
   "class": "PanoramaCameraPosition",
   "pitch": -15.33
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
  "frames": [
   {
    "thumbnailUrl": "media/panorama_1E813FF4_0EA4_8C59_419B_E1759FB769AD_t.jpg",
    "overlays": [
     {
      "useHandCursor": true,
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 98,
           "width": 98,
           "url": "media/panorama_1E813FF4_0EA4_8C59_419B_E1759FB769AD_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 10.99,
        "yaw": 9.64,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 0.35
       }
      ],
      "areas": [
       {
        "toolTip": "Sai Gon River",
        "click": "this.mainPlayList.set('selectedIndex', 0)",
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true,
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_1A81F069_0EEC_944B_4196_06A09DC27510",
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "image": {
         "levels": [
          {
           "height": 196,
           "width": 196,
           "url": "media/panorama_1E813FF4_0EA4_8C59_419B_E1759FB769AD_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "yaw": 9.64,
        "hfov": 10.99,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 0.35
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_1E813FF4_0EA4_8C59_419B_E1759FB769AD_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_1E813FF4_0EA4_8C59_419B_E1759FB769AD.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "id": "panorama_1E813FF4_0EA4_8C59_419B_E1759FB769AD",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_1E813FF4_0EA4_8C59_419B_E1759FB769AD_t.jpg",
  "hfovMin": 60,
  "label": "Rach Chiec",
  "hfovMax": 120,
  "hfov": 360,
  "class": "Panorama",
  "vfov": 180
 },
 {
  "id": "panorama_1E813FF4_0EA4_8C59_419B_E1759FB769AD_camera",
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
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "media": "this.panorama_1EE43061_0EA4_947A_41A0_3B6CE944E0BD",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_1EE43061_0EA4_947A_41A0_3B6CE944E0BD_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "media": "this.panorama_1E842842_0EA4_93B9_414A_441A2EBCC2F8",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_1E842842_0EA4_93B9_414A_441A2EBCC2F8_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 0)",
    "media": "this.panorama_1E813FF4_0EA4_8C59_419B_E1759FB769AD",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_1E813FF4_0EA4_8C59_419B_E1759FB769AD_camera"
   }
  ]
 },
 {
  "id": "ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist",
  "class": "PlayList",
  "items": [
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 0, 1)",
    "media": "this.panorama_1EE43061_0EA4_947A_41A0_3B6CE944E0BD",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_1EE43061_0EA4_947A_41A0_3B6CE944E0BD_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 1, 2)",
    "media": "this.panorama_1E842842_0EA4_93B9_414A_441A2EBCC2F8",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_1E842842_0EA4_93B9_414A_441A2EBCC2F8_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 2, 0)",
    "media": "this.panorama_1E813FF4_0EA4_8C59_419B_E1759FB769AD",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_1E813FF4_0EA4_8C59_419B_E1759FB769AD_camera"
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
      "image": {
       "levels": [
        {
         "url": "media/album_1AE8DEB7_0EE7_8CC7_4198_F5B75788CCF6_0.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "thumbnailUrl": "media/album_1AE8DEB7_0EE7_8CC7_4198_F5B75788CCF6_0_t.jpg",
      "class": "Photo",
      "label": "5.2. Khu CN phan mem ITP (2)",
      "width": 8192,
      "id": "album_1AE8DEB7_0EE7_8CC7_4198_F5B75788CCF6_0",
      "height": 4096,
      "duration": 5000
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
       "x": "0.34",
       "zoomFactor": 1.1,
       "class": "PhotoCameraPosition",
       "y": "0.72"
      },
      "duration": 5000,
      "class": "MovementPhotoCamera"
     }
    },
    {
     "class": "PhotoPlayListItem",
     "media": {
      "image": {
       "levels": [
        {
         "url": "media/album_1AE8DEB7_0EE7_8CC7_4198_F5B75788CCF6_1.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "thumbnailUrl": "media/album_1AE8DEB7_0EE7_8CC7_4198_F5B75788CCF6_1_t.jpg",
      "class": "Photo",
      "label": "7. Ben xe mien Dong moi",
      "width": 8192,
      "id": "album_1AE8DEB7_0EE7_8CC7_4198_F5B75788CCF6_1",
      "height": 4096,
      "duration": 5000
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
       "y": "0.48"
      },
      "duration": 5000,
      "class": "MovementPhotoCamera"
     }
    },
    {
     "class": "PhotoPlayListItem",
     "media": {
      "image": {
       "levels": [
        {
         "url": "media/album_1AE8DEB7_0EE7_8CC7_4198_F5B75788CCF6_2.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "thumbnailUrl": "media/album_1AE8DEB7_0EE7_8CC7_4198_F5B75788CCF6_2_t.jpg",
      "class": "Photo",
      "label": "8. Grand park q9",
      "width": 8192,
      "id": "album_1AE8DEB7_0EE7_8CC7_4198_F5B75788CCF6_2",
      "height": 4096,
      "duration": 5000
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
       "x": "0.40",
       "zoomFactor": 1.1,
       "class": "PhotoCameraPosition",
       "y": "0.29"
      },
      "duration": 5000,
      "class": "MovementPhotoCamera"
     }
    }
   ]
  },
  "class": "PhotoAlbum"
 },
 "this.album_1AE8DEB7_0EE7_8CC7_4198_F5B75788CCF6_0",
 "this.album_1AE8DEB7_0EE7_8CC7_4198_F5B75788CCF6_1",
 "this.album_1AE8DEB7_0EE7_8CC7_4198_F5B75788CCF6_2",
 {
  "id": "playList_22AC5D1A_0F14_CA57_4198_B59C75E503A0",
  "class": "PlayList",
  "items": [
   {
    "player": "this.ViewerAreaLabeled_9FD7235A_96CD_9045_41D9_23A3BCBDB1C6PhotoAlbumPlayer",
    "begin": "this.loopAlbum(this.playList_22AC5D1A_0F14_CA57_4198_B59C75E503A0, 0)",
    "class": "PhotoAlbumPlayListItem",
    "media": "this.album_1AE8DEB7_0EE7_8CC7_4198_F5B75788CCF6"
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
  "id": "ImageResource_03DBD41E_0EF7_5A4F_41A2_D0E6652CF41C",
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
  "autoplay": true,
  "maximumAngle": 231.16,
  "id": "audio_A83B2F1A_B250_204B_41B2_61A870B2B428",
  "loop": true,
  "audio": "this.audioresource_1D15163A_0EEB_BFC9_419F_EF5F7074EFB1",
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
  "autoplay": true,
  "id": "audio_A8835F26_B97D_D04F_41C0_FE4CF3AF4F49",
  "audio": {
   "mp3Url": "media/audio_A8835F26_B97D_D04F_41C0_FE4CF3AF4F49.mp3",
   "oggUrl": "media/audio_A8835F26_B97D_D04F_41C0_FE4CF3AF4F49.ogg",
   "class": "AudioResource"
  },
  "class": "MediaAudio"
 },
 {
  "image": {
   "levels": [
    {
     "url": "media/photo_1D911E4D_0EFC_8C4B_4180_DC7B2E0CE38C.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "thumbnailUrl": "media/photo_1D911E4D_0EFC_8C4B_4180_DC7B2E0CE38C_t.jpg",
  "class": "Photo",
  "label": "7. Ben xe mien Dong moi",
  "width": 8192,
  "id": "photo_1D911E4D_0EFC_8C4B_4180_DC7B2E0CE38C",
  "height": 4096,
  "duration": 5000
 },
 "this.audio_1D15363A_0EEB_BFC9_4193_928F3B1A384C"
], "children": [
 {
  "playbackBarHeadShadow": true,
  "paddingRight": 0,
  "progressBorderRadius": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "progressBarOpacity": 1,
  "toolTipPaddingBottom": 9,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "progressRight": 0,
  "toolTipBorderSize": 0,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "toolTipShadowOpacity": 0,
  "toolTipOpacity": 0.7,
  "playbackBarBorderColor": "#FFFFFF",
  "playbackBarHeight": 10,
  "toolTipTextShadowColor": "#000000",
  "playbackBarHeadWidth": 6,
  "class": "ViewerArea",
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
  "minWidth": 100,
  "toolTipShadowSpread": 0,
  "transitionMode": "blending",
  "toolTipShadowColor": "#333333",
  "toolTipShadowBlurRadius": 3,
  "toolTipTextShadowVerticalLength": 0,
  "toolTipFontColor": "#FFFFFF",
  "playbackBarBorderRadius": 0,
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarProgressBorderColor": "#000000",
  "progressBackgroundOpacity": 1,
  "toolTipPaddingRight": 14,
  "width": "100%",
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "minHeight": 50,
  "playbackBarHeadBorderRadius": 0,
  "toolTipPaddingTop": 9,
  "borderRadius": 0,
  "toolTipTextShadowOpacity": 1,
  "toolTipFontSize": 13,
  "playbackBarProgressOpacity": 1,
  "height": "100%",
  "progressLeft": 0,
  "borderSize": 0,
  "playbackBarHeadBorderColor": "#000000",
  "progressBackgroundColorRatios": [
   0
  ],
  "toolTipTextShadowHorizontalLength": 0,
  "playbackBarLeft": 0,
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipPaddingLeft": 14,
  "toolTipBorderColor": "#767676",
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "playbackBarBackgroundOpacity": 1,
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarBorderSize": 0,
  "toolTipBorderRadius": 1,
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarHeadHeight": 15,
  "top": 0,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadBorderSize": 0,
  "playbackBarHeadShadowColor": "#000000",
  "toolTipFontWeight": "normal",
  "id": "MainViewer",
  "toolTipTextShadowBlurRadius": 3,
  "progressBarBorderColor": "#000000",
  "playbackBarHeadOpacity": 1,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "progressBackgroundColorDirection": "vertical",
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarBottom": 5,
  "paddingLeft": 0,
  "progressHeight": 10,
  "left": 0,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "toolTipFontFamily": "Arial",
  "progressBorderColor": "#000000",
  "progressOpacity": 1
 },
 {
  "layout": "horizontal",
  "paddingLeft": 0,
  "backgroundColorDirection": "vertical",
  "overflow": "visible",
  "scrollBarOpacity": 0.5,
  "paddingRight": 0,
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "scrollBarColor": "#000000",
  "minHeight": 50,
  "borderRadius": 5,
  "borderSize": 0,
  "contentOpaque": false,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "class": "Container",
  "shadow": false,
  "horizontalAlign": "center",
  "top": "88%",
  "paddingBottom": 0,
  "backgroundColorRatios": [
   0,
   1
  ],
  "id": "Container_86F3A56C_8E22_5B1D_41CA_9CE53436FE56",
  "gap": 50,
  "bottom": "3%",
  "paddingTop": 0,
  "minWidth": 240,
  "left": "2%",
  "backgroundOpacity": 0.25,
  "right": "80%",
  "children": [
   {
    "paddingLeft": 0,
    "maxHeight": 70,
    "paddingRight": 0,
    "mode": "push",
    "toolTipPaddingRight": 14,
    "toolTipPaddingBottom": 9,
    "iconURL": "skin/IconButton_87577B8F_8E22_AF1B_41CC_79EB87AE6DED.png",
    "width": "22%",
    "minHeight": 1,
    "transparencyActive": true,
    "toolTipPaddingTop": 9,
    "borderRadius": 0,
    "toolTipBorderSize": 0,
    "toolTipTextShadowOpacity": 1,
    "toolTipFontSize": 13,
    "toolTipTextShadowHorizontalLength": 0,
    "toolTipShadowOpacity": 0,
    "toolTipOpacity": 0.7,
    "borderSize": 0,
    "rollOverIconURL": "skin/IconButton_87577B8F_8E22_AF1B_41CC_79EB87AE6DED_rollover.png",
    "toolTipPaddingLeft": 14,
    "toolTipBorderColor": "#767676",
    "toolTipTextShadowColor": "#000000",
    "class": "IconButton",
    "toolTipFontStyle": "normal",
    "toolTipBorderRadius": 1,
    "shadow": false,
    "horizontalAlign": "center",
    "click": "this.showPopupImage(this.ImageResource_03DBD41E_0EF7_5A4F_41A2_D0E6652CF41C, null, '85%', '85%', this.FadeInEffect_8ED05F70_96C4_F045_41DC_2AB82A556F92, this.FadeOutEffect_8ED06F70_96C4_F045_41DA_C74400CF7B15, {'rollOverIconWidth':25,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorDirection':'vertical','rollOverBackgroundColor':['#000000','#000000','#000000'],'pressedBackgroundColor':['#000000','#000000','#000000'],'iconHeight':25,'rollOverIconColor':'#52B7EF','backgroundColor':['#000000','#000000','#000000'],'rollOverBackgroundColorDirection':'vertical','pressedBorderSize':0,'iconColor':'#FFFFFF','backgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':10,'paddingBottom':10,'pressedIconLineWidth':3,'borderColor':'#000000','paddingLeft':10,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':3,'pressedBorderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundOpacity':0.3,'paddingTop':10,'pressedIconColor':'#CCCCCC','pressedBackgroundColorDirection':'vertical','borderSize':0,'pressedIconWidth':25,'pressedIconHeight':25,'backgroundOpacity':0.15,'rollOverBorderColor':'#000000','rollOverBackgroundOpacity':0.5,'iconWidth':25,'rollOverIconHeight':25,'rollOverIconLineWidth':3}, null, null, false)",
    "cursor": "hand",
    "toolTip": "Open Info",
    "paddingBottom": 0,
    "toolTipTextShadowBlurRadius": 3,
    "toolTipBackgroundColor": "#000000",
    "toolTipFontWeight": "normal",
    "id": "IconButton_87577B8F_8E22_AF1B_41CC_79EB87AE6DED",
    "height": "76.75%",
    "maxWidth": 70,
    "paddingTop": 0,
    "minWidth": 1,
    "toolTipShadowSpread": 0,
    "toolTipShadowColor": "#333333",
    "toolTipShadowBlurRadius": 3,
    "toolTipTextShadowVerticalLength": 0,
    "backgroundOpacity": 0,
    "toolTipFontColor": "#FFFFFF",
    "toolTipFontFamily": "Arial",
    "verticalAlign": "middle"
   },
   "this.IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED",
   {
    "paddingLeft": 0,
    "maxHeight": 70,
    "paddingRight": 0,
    "mode": "toggle",
    "toolTipPaddingRight": 14,
    "toolTipPaddingBottom": 9,
    "iconURL": "skin/IconButton_843BBEF5_8E22_690F_419D_28CBDD771ACC.png",
    "width": "22%",
    "minHeight": 1,
    "transparencyActive": true,
    "toolTipPaddingTop": 9,
    "borderRadius": 0,
    "toolTipBorderSize": 0,
    "toolTipTextShadowOpacity": 1,
    "toolTipFontSize": 13,
    "toolTipTextShadowHorizontalLength": 0,
    "toolTipShadowOpacity": 0,
    "toolTipOpacity": 0.7,
    "borderSize": 0,
    "height": "76.75%",
    "toolTipPaddingLeft": 14,
    "toolTipBorderColor": "#767676",
    "toolTipTextShadowColor": "#000000",
    "class": "IconButton",
    "toolTipFontStyle": "normal",
    "toolTipBorderRadius": 1,
    "shadow": false,
    "horizontalAlign": "center",
    "click": "if(!this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472.get('visible')){ this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, true, 0, this.effect_85A2AAA4_9245_B8B0_41CE_5BE27798090E, 'showEffect', false) } else if(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472.get('visible')){ this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, false, 0, this.effect_85A28AA4_9245_B8B0_41A1_5761D51DA5D1, 'hideEffect', false) }",
    "cursor": "hand",
    "toolTip": "Panorama List",
    "paddingBottom": 0,
    "toolTipTextShadowBlurRadius": 3,
    "toolTipBackgroundColor": "#000000",
    "toolTipFontWeight": "normal",
    "id": "IconButton_843BBEF5_8E22_690F_419D_28CBDD771ACC",
    "maxWidth": 70,
    "paddingTop": 0,
    "minWidth": 1,
    "toolTipShadowSpread": 0,
    "toolTipShadowColor": "#333333",
    "toolTipShadowBlurRadius": 3,
    "pressedIconURL": "skin/IconButton_843BBEF5_8E22_690F_419D_28CBDD771ACC_pressed.png",
    "toolTipTextShadowVerticalLength": 0,
    "backgroundOpacity": 0,
    "toolTipFontColor": "#FFFFFF",
    "toolTipFontFamily": "Arial",
    "verticalAlign": "middle"
   }
  ],
  "verticalAlign": "middle",
  "scrollBarVisible": "rollOver"
 },
 {
  "layout": "horizontal",
  "paddingLeft": 0,
  "scrollBarColor": "#000000",
  "overflow": "visible",
  "scrollBarOpacity": 0.5,
  "paddingRight": 0,
  "width": "22.545%",
  "minHeight": 50,
  "borderRadius": 5,
  "borderSize": 0,
  "gap": 1,
  "contentOpaque": false,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "class": "Container",
  "shadow": false,
  "horizontalAlign": "right",
  "top": "89%",
  "paddingBottom": 0,
  "bottom": "3%",
  "id": "Container_807F782A_8E23_A905_41DE_623121285A09",
  "paddingTop": 0,
  "minWidth": 265,
  "backgroundOpacity": 0,
  "right": 25,
  "children": [
   {
    "layout": "horizontal",
    "paddingLeft": 0,
    "scrollBarColor": "#000000",
    "overflow": "visible",
    "scrollBarOpacity": 0.5,
    "paddingRight": 0,
    "width": "75.269%",
    "minHeight": 1,
    "height": "100%",
    "borderRadius": 0,
    "borderSize": 0,
    "gap": 10,
    "contentOpaque": false,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "class": "Container",
    "shadow": false,
    "horizontalAlign": "right",
    "visible": false,
    "paddingBottom": 0,
    "id": "Container_80D3CF90_8E26_E705_41E0_E47025A2C106",
    "paddingTop": 0,
    "minWidth": 1,
    "backgroundOpacity": 0,
    "children": [
     "this.IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37",
     {
      "paddingLeft": 0,
      "maxHeight": 70,
      "paddingRight": 0,
      "mode": "toggle",
      "toolTipPaddingRight": 14,
      "toolTipPaddingBottom": 9,
      "iconURL": "skin/IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA.png",
      "width": "17.48%",
      "minHeight": 1,
      "transparencyActive": true,
      "toolTipPaddingTop": 9,
      "borderRadius": 0,
      "toolTipBorderSize": 0,
      "toolTipTextShadowOpacity": 1,
      "toolTipFontSize": 13,
      "toolTipTextShadowHorizontalLength": 0,
      "toolTipShadowOpacity": 0,
      "toolTipOpacity": 0.7,
      "borderSize": 0,
      "height": "76.75%",
      "toolTipPaddingLeft": 14,
      "toolTipBorderColor": "#767676",
      "toolTipTextShadowColor": "#000000",
      "class": "IconButton",
      "toolTipFontStyle": "normal",
      "toolTipBorderRadius": 1,
      "shadow": false,
      "horizontalAlign": "center",
      "click": "if(!this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, true, 0, null, null, false) } else if(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, false, 0, null, null, false) }",
      "cursor": "hand",
      "toolTip": "Full Screen",
      "paddingBottom": 0,
      "toolTipTextShadowBlurRadius": 3,
      "toolTipBackgroundColor": "#000000",
      "toolTipFontWeight": "normal",
      "id": "IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA",
      "maxWidth": 70,
      "paddingTop": 0,
      "minWidth": 1,
      "toolTipShadowSpread": 0,
      "toolTipShadowColor": "#333333",
      "toolTipShadowBlurRadius": 3,
      "pressedIconURL": "skin/IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA_pressed.png",
      "toolTipTextShadowVerticalLength": 0,
      "backgroundOpacity": 0,
      "toolTipFontColor": "#FFFFFF",
      "toolTipFontFamily": "Arial",
      "verticalAlign": "middle"
     },
     {
      "paddingLeft": 0,
      "maxHeight": 70,
      "paddingRight": 0,
      "mode": "toggle",
      "toolTipPaddingRight": 14,
      "toolTipPaddingBottom": 9,
      "iconURL": "skin/IconButton_8105A313_8E22_BF0B_41E1_331C6035A930.png",
      "width": "17.15%",
      "minHeight": 1,
      "transparencyActive": true,
      "toolTipPaddingTop": 9,
      "borderRadius": 0,
      "toolTipBorderSize": 0,
      "toolTipTextShadowOpacity": 1,
      "toolTipFontSize": 13,
      "toolTipTextShadowHorizontalLength": 0,
      "toolTipShadowOpacity": 0,
      "toolTipOpacity": 0.7,
      "borderSize": 0,
      "height": "76.75%",
      "toolTipPaddingLeft": 14,
      "toolTipBorderColor": "#767676",
      "toolTipTextShadowColor": "#000000",
      "class": "IconButton",
      "toolTipFontStyle": "normal",
      "toolTipBorderRadius": 1,
      "shadow": false,
      "horizontalAlign": "center",
      "click": "if(!this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, true, 0, this.effect_CACBF85D_EED0_7261_41DB_A3B65ECE0D5D, 'showEffect', false) } else if(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, false, 0, this.effect_CACBC85D_EED0_7261_41BE_8CF4C3A8170C, 'hideEffect', false) }",
      "cursor": "hand",
      "toolTip": "Audio On/Off",
      "paddingBottom": 0,
      "toolTipTextShadowBlurRadius": 3,
      "toolTipBackgroundColor": "#000000",
      "toolTipFontWeight": "normal",
      "id": "IconButton_8105A313_8E22_BF0B_41E1_331C6035A930",
      "maxWidth": 70,
      "paddingTop": 0,
      "minWidth": 1,
      "toolTipShadowSpread": 0,
      "toolTipShadowColor": "#333333",
      "toolTipShadowBlurRadius": 3,
      "pressedIconURL": "skin/IconButton_8105A313_8E22_BF0B_41E1_331C6035A930_pressed.png",
      "toolTipTextShadowVerticalLength": 0,
      "backgroundOpacity": 0,
      "toolTipFontColor": "#FFFFFF",
      "toolTipFontFamily": "Arial",
      "verticalAlign": "middle"
     },
     "this.IconButton_80E5955A_8E23_BB05_41CA_43DD61DBAEE9"
    ],
    "verticalAlign": "middle",
    "scrollBarVisible": "rollOver"
   },
   {
    "layout": "horizontal",
    "paddingLeft": 0,
    "scrollBarColor": "#000000",
    "overflow": "visible",
    "scrollBarOpacity": 0.5,
    "paddingRight": 0,
    "width": "15.59%",
    "minHeight": 1,
    "height": "100%",
    "borderRadius": 0,
    "borderSize": 0,
    "gap": 10,
    "contentOpaque": false,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "class": "Container",
    "shadow": false,
    "horizontalAlign": "center",
    "paddingBottom": 0,
    "id": "Container_80B2155B_8E3F_DB3B_41A1_77496D90E2FB",
    "paddingTop": 0,
    "minWidth": 1,
    "backgroundOpacity": 0,
    "children": [
     {
      "paddingLeft": 0,
      "maxHeight": 70,
      "paddingRight": 0,
      "mode": "toggle",
      "toolTipPaddingRight": 14,
      "toolTipPaddingBottom": 9,
      "iconURL": "skin/IconButton_811D89E1_8E3D_AB07_4191_94003C90B2FF.png",
      "width": "82.76%",
      "minHeight": 1,
      "transparencyActive": true,
      "toolTipPaddingTop": 9,
      "borderRadius": 0,
      "toolTipBorderSize": 0,
      "toolTipTextShadowOpacity": 1,
      "toolTipFontSize": 13,
      "toolTipTextShadowHorizontalLength": 0,
      "toolTipShadowOpacity": 0,
      "toolTipOpacity": 0.7,
      "borderSize": 0,
      "height": "76.75%",
      "toolTipPaddingLeft": 14,
      "toolTipBorderColor": "#767676",
      "toolTipTextShadowColor": "#000000",
      "class": "IconButton",
      "toolTipFontStyle": "normal",
      "toolTipBorderRadius": 1,
      "shadow": false,
      "horizontalAlign": "center",
      "click": "if(!this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, true, 0, this.effect_CD2B8C48_EED0_726F_41E4_49557D18059C, 'showEffect', false) } else if(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, false, 0, this.effect_CD2BEC48_EED0_726F_41DF_F342BE2B4EF0, 'hideEffect', false) }",
      "cursor": "hand",
      "toolTip": "Settings",
      "paddingBottom": 0,
      "toolTipTextShadowBlurRadius": 3,
      "toolTipBackgroundColor": "#000000",
      "toolTipFontWeight": "normal",
      "id": "IconButton_811D89E1_8E3D_AB07_4191_94003C90B2FF",
      "maxWidth": 70,
      "paddingTop": 0,
      "minWidth": 1,
      "toolTipShadowSpread": 0,
      "toolTipShadowColor": "#333333",
      "toolTipShadowBlurRadius": 3,
      "toolTipTextShadowVerticalLength": 0,
      "backgroundOpacity": 0,
      "toolTipFontColor": "#FFFFFF",
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
  "layout": "vertical",
  "paddingLeft": 0,
  "scrollBarColor": "#000000",
  "overflow": "visible",
  "scrollBarOpacity": 0.5,
  "paddingRight": 0,
  "width": "21%",
  "minHeight": 120,
  "height": "25%",
  "borderRadius": 0,
  "borderSize": 0,
  "gap": 10,
  "contentOpaque": false,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "class": "Container",
  "shadow": false,
  "horizontalAlign": "left",
  "top": "3.5%",
  "paddingBottom": 0,
  "id": "Container_82CEEC30_9220_D3AB_41D9_A91DB817BCCC",
  "paddingTop": 0,
  "minWidth": 300,
  "left": "2.14%",
  "backgroundOpacity": 0,
  "children": [
   {
    "paddingLeft": 0,
    "maxHeight": 237,
    "paddingRight": 0,
    "width": "100%",
    "minHeight": 1,
    "height": "100%",
    "borderRadius": 0,
    "borderSize": 0,
    "url": "skin/Image_839F2153_92C3_4990_41DE_8BB8E5D909EE.png",
    "horizontalAlign": "center",
    "scaleMode": "fit_inside",
    "class": "Image",
    "shadow": false,
    "visible": false,
    "paddingBottom": 0,
    "id": "Image_839F2153_92C3_4990_41DE_8BB8E5D909EE",
    "maxWidth": 504,
    "paddingTop": 0,
    "minWidth": 1,
    "backgroundOpacity": 0,
    "verticalAlign": "top"
   },
   {
    "paddingLeft": 0,
    "maxHeight": 200,
    "paddingRight": 0,
    "width": "100%",
    "minHeight": 1,
    "height": "100%",
    "borderRadius": 0,
    "borderSize": 0,
    "url": "skin/Image_834E90F5_92C5_4890_41B3_1F18BA633A48.png",
    "horizontalAlign": "center",
    "scaleMode": "fit_inside",
    "class": "Image",
    "shadow": false,
    "visible": false,
    "paddingBottom": 0,
    "id": "Image_834E90F5_92C5_4890_41B3_1F18BA633A48",
    "maxWidth": 504,
    "paddingTop": 0,
    "minWidth": 1,
    "backgroundOpacity": 0,
    "verticalAlign": "top"
   },
   {
    "paddingLeft": 0,
    "maxHeight": 200,
    "paddingRight": 0,
    "width": "100%",
    "minHeight": 1,
    "height": "100%",
    "borderRadius": 0,
    "borderSize": 0,
    "url": "skin/Image_82D03E84_923C_DB71_41D5_F59C5FE2AAED.png",
    "horizontalAlign": "center",
    "scaleMode": "fit_inside",
    "class": "Image",
    "shadow": false,
    "visible": false,
    "paddingBottom": 0,
    "id": "Image_82D03E84_923C_DB71_41D5_F59C5FE2AAED",
    "maxWidth": 504,
    "paddingTop": 0,
    "minWidth": 1,
    "backgroundOpacity": 0,
    "verticalAlign": "top"
   },
   {
    "paddingLeft": 0,
    "maxHeight": 200,
    "paddingRight": 0,
    "width": "94.59%",
    "minHeight": 1,
    "height": "87.72%",
    "borderRadius": 0,
    "borderSize": 0,
    "url": "skin/Image_9DBFF4C8_9223_DCFB_41B4_FC435007C476.png",
    "horizontalAlign": "center",
    "scaleMode": "fit_inside",
    "class": "Image",
    "shadow": false,
    "visible": false,
    "paddingBottom": 0,
    "id": "Image_9DBFF4C8_9223_DCFB_41B4_FC435007C476",
    "maxWidth": 504,
    "paddingTop": 0,
    "minWidth": 1,
    "backgroundOpacity": 0,
    "verticalAlign": "top"
   }
  ],
  "verticalAlign": "top",
  "scrollBarVisible": "rollOver"
 },
 {
  "layout": "vertical",
  "backgroundOpacity": 0.25,
  "itemBackgroundColorRatios": [],
  "paddingRight": 15,
  "itemLabelFontFamily": "Arial",
  "backgroundColor": [
   "#000000"
  ],
  "itemThumbnailHeight": 80,
  "gap": 12,
  "selectedItemBackgroundColor": [],
  "scrollBarWidth": 7,
  "scrollBarMargin": 4,
  "horizontalAlign": "left",
  "itemHorizontalAlign": "center",
  "class": "ThumbnailList",
  "shadow": false,
  "itemMode": "normal",
  "selectedItemLabelFontStyle": "italic",
  "playList": "this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist",
  "itemLabelFontColor": "#FFFFFF",
  "rollOverItemLabelFontColor": "#FFFFFF",
  "backgroundColorRatios": [
   0
  ],
  "paddingBottom": 20,
  "maxWidth": 150,
  "rollOverItemLabelFontWeight": "bold",
  "itemPaddingBottom": 3,
  "minWidth": 1,
  "paddingTop": 20,
  "selectedItemLabelFontColor": "#FFFFFF",
  "itemThumbnailOpacity": 1,
  "itemThumbnailScaleMode": "fit_outside",
  "itemLabelFontWeight": "normal",
  "selectedItemLabelTextDecoration": "underline",
  "itemThumbnailShadow": false,
  "rollOverItemLabelTextDecoration": "underline",
  "backgroundColorDirection": "vertical",
  "itemThumbnailBorderRadius": 25,
  "scrollBarOpacity": 1,
  "scrollBarColor": "#52B7EF",
  "itemLabelTextDecoration": "none",
  "scrollBarVisible": "rollOver",
  "itemPaddingRight": 3,
  "itemLabelFontStyle": "normal",
  "height": "82.127%",
  "selectedItemThumbnailShadowBlurRadius": 10,
  "minHeight": 1,
  "itemThumbnailWidth": 80,
  "borderRadius": 3,
  "selectedItemThumbnailShadow": true,
  "itemPaddingLeft": 3,
  "selectedItemLabelFontSize": 12,
  "borderSize": 0,
  "itemBorderRadius": 0,
  "itemLabelHorizontalAlign": "center",
  "selectedItemThumbnailShadowHorizontalLength": 0,
  "selectedItemThumbnailShadowOpacity": 0.73,
  "selectedItemBorderSize": 0,
  "itemPaddingTop": 3,
  "selectedItemBorderRadius": 0,
  "top": "3.61%",
  "itemVerticalAlign": "middle",
  "visible": false,
  "id": "ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472",
  "itemBackgroundOpacity": 0,
  "selectedItemBackgroundColorRatios": [],
  "itemLabelGap": 9,
  "selectedItemLabelFontWeight": "bold",
  "itemBackgroundColorDirection": "vertical",
  "itemOpacity": 1,
  "itemBackgroundColor": [],
  "itemLabelFontSize": 12,
  "selectedItemBackgroundOpacity": 0,
  "itemLabelPosition": "bottom",
  "selectedItemThumbnailShadowVerticalLength": 0,
  "paddingLeft": 15,
  "right": "2%",
  "verticalAlign": "top"
 },
 {
  "layout": "absolute",
  "paddingLeft": 0,
  "backgroundColorDirection": "vertical",
  "overflow": "scroll",
  "scrollBarOpacity": 0.5,
  "paddingRight": 0,
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "scrollBarColor": "#000000",
  "width": "100%",
  "minHeight": 1,
  "borderRadius": 0,
  "borderSize": 0,
  "gap": 10,
  "contentOpaque": false,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "class": "Container",
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
  "height": "100%",
  "paddingTop": 0,
  "minWidth": 1,
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
  "paddingLeft": 0,
  "maxHeight": 50,
  "paddingRight": 0,
  "mode": "push",
  "iconURL": "skin/IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB.png",
  "width": "3.03%",
  "minHeight": 40,
  "transparencyActive": true,
  "borderRadius": 0,
  "borderSize": 0,
  "rollOverIconURL": "skin/IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB_rollover.png",
  "class": "IconButton",
  "shadow": false,
  "horizontalAlign": "center",
  "top": "2%",
  "cursor": "hand",
  "visible": false,
  "paddingBottom": 0,
  "id": "IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB",
  "height": "5.482%",
  "maxWidth": 50,
  "paddingTop": 0,
  "minWidth": 40,
  "backgroundOpacity": 0,
  "right": "1%",
  "verticalAlign": "middle"
 },
 {
  "paddingLeft": 0,
  "backgroundColorDirection": "vertical",
  "paddingRight": 0,
  "backgroundColor": [
   "#000000"
  ],
  "minHeight": 0,
  "borderRadius": 0,
  "borderSize": 0,
  "showEffect": {
   "easing": "cubic_in_out",
   "duration": 350,
   "class": "FadeInEffect"
  },
  "class": "UIComponent",
  "shadow": false,
  "top": 0,
  "visible": false,
  "paddingBottom": 0,
  "backgroundColorRatios": [
   0
  ],
  "id": "veilPopupPanorama",
  "bottom": 0,
  "paddingTop": 0,
  "minWidth": 0,
  "left": 0,
  "backgroundOpacity": 0.55,
  "right": 0
 },
 {
  "paddingLeft": 0,
  "backgroundColorDirection": "vertical",
  "paddingRight": 0,
  "backgroundColor": [],
  "minHeight": 0,
  "borderRadius": 0,
  "borderSize": 0,
  "scaleMode": "custom",
  "class": "ZoomImage",
  "shadow": false,
  "top": 0,
  "visible": false,
  "paddingBottom": 0,
  "backgroundColorRatios": [],
  "id": "zoomImagePopupPanorama",
  "bottom": 0,
  "paddingTop": 0,
  "minWidth": 0,
  "left": 0,
  "backgroundOpacity": 1,
  "right": 0
 },
 {
  "gap": 5,
  "layout": "horizontal",
  "paddingLeft": 5,
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
  "textDecoration": "none",
  "iconColor": "#000000",
  "minHeight": 0,
  "borderRadius": 0,
  "iconBeforeLabel": true,
  "iconWidth": 20,
  "borderSize": 0,
  "showEffect": {
   "easing": "cubic_in_out",
   "duration": 350,
   "class": "FadeInEffect"
  },
  "fontColor": "#FFFFFF",
  "class": "CloseButton",
  "shadow": false,
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
  "iconLineWidth": 5,
  "shadowColor": "#000000",
  "paddingTop": 5,
  "minWidth": 0,
  "fontStyle": "normal",
  "rollOverIconColor": "#666666",
  "shadowBlurRadius": 6,
  "shadowSpread": 1,
  "pressedIconColor": "#888888",
  "backgroundOpacity": 0.3,
  "label": "",
  "right": 10,
  "verticalAlign": "middle"
 }
], 
 "layout": "absolute",
 "paddingLeft": 0,
 "overflow": "visible",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "mouseWheelEnabled": true,
 "scrollBarColor": "#000000",
 "width": "100%",
 "minHeight": 20,
 "height": "100%",
 "borderRadius": 0,
 "borderSize": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "buttonToggleMute": "this.IconButton_8105A313_8E22_BF0B_41E1_331C6035A930",
 "class": "Player",
 "shadow": false,
 "horizontalAlign": "left",
 "backgroundPreloadEnabled": true,
 "paddingBottom": 0,
 "scripts": {
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio) delete audios[audio.get('id')]; } if(audio) audio.stop(); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "existsKey": function(key){  return key in window; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getKey": function(key){  return window[key]; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "unregisterKey": function(key){  delete window[key]; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "registerKey": function(key, value){  window[key] = value; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; }
 },
 "id": "rootPlayer",
 "vrPolyfillScale": 0.5,
 "paddingTop": 0,
 "minWidth": 20,
 "start": "this.playAudioList([this.audio_A8835F26_B97D_D04F_41C0_FE4CF3AF4F49]); this.syncPlaylists([this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA].forEach(function(component) { component.set('visible', false); }) }",
 "buttonToggleFullscreen": "this.IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA",
 "verticalAlign": "top",
 "scrollBarVisible": "rollOver"
})