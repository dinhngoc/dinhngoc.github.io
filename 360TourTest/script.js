TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "buttonPlay": {
   "paddingLeft": 0,
   "toolTipBackgroundColor": "#000000",
   "paddingRight": 0,
   "verticalAlign": "middle",
   "mode": "push",
   "toolTipPaddingRight": 6,
   "toolTipPaddingBottom": 4,
   "iconURL": "skin/IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED.png",
   "height": "100%",
   "width": "100%",
   "toolTipTextShadowOpacity": 0,
   "transparencyActive": true,
   "toolTipPaddingTop": 4,
   "borderRadius": 0,
   "toolTipBorderSize": 1,
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
   "class": "IconButton",
   "toolTipFontStyle": "normal",
   "toolTipBorderRadius": 3,
   "toolTip": "See Photos",
   "click": "this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, true, 0, this.effect_98AADBB0_96C5_F0C5_41B2_1C4D08E503DB, 'showEffect', false); this.playList_55631099_411A_6F7A_4175_9F0DE1915BDF.set('selectedIndex', 0)",
   "cursor": "hand",
   "paddingBottom": 0,
   "maxHeight": 75,
   "minWidth": 30,
   "toolTipTextShadowBlurRadius": 3,
   "toolTipFontWeight": "normal",
   "id": "IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED",
   "minHeight": 30,
   "toolTipShadowHorizontalLength": 0,
   "toolTipShadowSpread": 0,
   "paddingTop": 0,
   "toolTipShadowColor": "#333333",
   "toolTipShadowBlurRadius": 3,
   "backgroundOpacity": 0,
   "maxWidth": 75,
   "toolTipTextShadowColor": "#000000",
   "toolTipFontFamily": "Arial",
   "toolTipFontColor": "#606060"
  },
  "id": "MainViewerVideoPlayer",
  "viewerArea": "this.MainViewer",
  "displayPlaybackBar": true,
  "class": "VideoPlayer",
  "buttonStop": [
   {
    "paddingLeft": 0,
    "paddingRight": 0,
    "verticalAlign": "middle",
    "mode": "push",
    "iconURL": "skin/IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4.png",
    "height": "5.48%",
    "width": "3.03%",
    "transparencyActive": true,
    "borderRadius": 0,
    "borderSize": 0,
    "rollOverIconURL": "skin/IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4_rollover.png",
    "shadow": false,
    "horizontalAlign": "center",
    "class": "IconButton",
    "top": "2%",
    "click": "this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, false, 0, this.effect_9B0AF4E2_96C4_F045_41D3_0E00FEE03A15, 'hideEffect', false)",
    "cursor": "hand",
    "paddingBottom": 0,
    "maxHeight": 50,
    "minWidth": 50,
    "id": "IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4",
    "minHeight": 50,
    "paddingTop": 0,
    "backgroundOpacity": 0,
    "maxWidth": 50,
    "right": "2%"
   },
   "this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB"
  ]
 },
 {
  "buttonPlay": "this.IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED",
  "buttonPrevious": {
   "paddingLeft": 0,
   "paddingRight": 0,
   "verticalAlign": "middle",
   "mode": "push",
   "iconURL": "skin/IconButton_9FEA51EA_96CC_905A_41D3_F42DB0CD0A74.png",
   "width": "4.24%",
   "transparencyActive": true,
   "borderRadius": 0,
   "borderSize": 0,
   "rollOverIconURL": "skin/IconButton_9FEA51EA_96CC_905A_41D3_F42DB0CD0A74_rollover.png",
   "shadow": false,
   "horizontalAlign": "center",
   "class": "IconButton",
   "top": "40%",
   "cursor": "hand",
   "paddingBottom": 0,
   "maxHeight": 70,
   "minWidth": 60,
   "bottom": "40%",
   "id": "IconButton_9FEA51EA_96CC_905A_41D3_F42DB0CD0A74",
   "minHeight": 60,
   "paddingTop": 0,
   "left": "1%",
   "backgroundOpacity": 0,
   "maxWidth": 70
  },
  "id": "ViewerAreaLabeled_9FD7235A_96CD_9045_41D9_23A3BCBDB1C6PhotoAlbumPlayer",
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
   "toolTipOpacity": 0.7,
   "playbackBarBorderColor": "#FFFFFF",
   "toolTipShadowOpacity": 1,
   "playbackBarHeight": 10,
   "toolTipShadowVerticalLength": 0,
   "shadow": false,
   "playbackBarHeadWidth": 6,
   "class": "ViewerArea",
   "toolTipFontStyle": "normal",
   "playbackBarBackgroundColorDirection": "vertical",
   "playbackBarProgressBorderSize": 0,
   "playbackBarHeadBackgroundColorDirection": "vertical",
   "progressBottom": 2,
   "paddingBottom": 0,
   "playbackBarRight": 0,
   "progressBorderSize": 0,
   "progressBarBorderSize": 0,
   "progressBarBorderRadius": 0,
   "playbackBarProgressBorderRadius": 0,
   "paddingTop": 0,
   "transitionMode": "blending",
   "toolTipShadowSpread": 0,
   "toolTipShadowColor": "#333333",
   "toolTipShadowBlurRadius": 3,
   "playbackBarHeadShadow": true,
   "toolTipFontColor": "#606060",
   "toolTipTextShadowColor": "#000000",
   "playbackBarBorderRadius": 0,
   "toolTipBackgroundColor": "#000000",
   "playbackBarOpacity": 1,
   "toolTipPaddingRight": 6,
   "width": "100%",
   "playbackBarProgressBorderColor": "#000000",
   "playbackBarHeadBackgroundColor": [
    "#111111",
    "#666666"
   ],
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
   "playbackBarHeadBackgroundColorRatios": [
    0,
    1
   ],
   "minWidth": 1,
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
   "toolTipShadowHorizontalLength": 0,
   "minHeight": 1,
   "playbackBarBottom": 0,
   "playbackBarHeadShadowHorizontalLength": 0,
   "paddingLeft": 0,
   "progressBarBackgroundColorRatios": [
    0
   ],
   "left": "0%",
   "progressBarBackgroundColor": [
    "#3399FF"
   ],
   "toolTipFontFamily": "Arial",
   "progressBorderColor": "#000000",
   "progressOpacity": 1,
   "progressHeight": 10,
   "progressBackgroundOpacity": 1
  },
  "buttonNext": {
   "paddingLeft": 0,
   "paddingRight": 0,
   "verticalAlign": "middle",
   "mode": "push",
   "iconURL": "skin/IconButton_9FB9BD3F_96C5_703B_41D7_65AEE6E85A96.png",
   "width": "4.24%",
   "transparencyActive": true,
   "borderRadius": 0,
   "borderSize": 0,
   "rollOverIconURL": "skin/IconButton_9FB9BD3F_96C5_703B_41D7_65AEE6E85A96_rollover.png",
   "shadow": false,
   "horizontalAlign": "center",
   "class": "IconButton",
   "top": "40%",
   "cursor": "hand",
   "paddingBottom": 0,
   "maxHeight": 70,
   "minWidth": 60,
   "bottom": "40%",
   "id": "IconButton_9FB9BD3F_96C5_703B_41D7_65AEE6E85A96",
   "minHeight": 60,
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
  "hfovMax": 120,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_4DEBC1BC_411E_B0BA_41C2_8D75AEE4E70B_t.jpg",
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
           "url": "media/panorama_4DEBC1BC_411E_B0BA_41C2_8D75AEE4E70B_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 24.46,
        "yaw": 3.47,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -29.56
       }
      ],
      "areas": [
       {
        "toolTip": "Entrance",
        "click": "this.startPanoramaWithCamera(this.panorama_4D1613E3_4119_90CE_41CC_DF7832021B96, this.camera_55BFF0A8_411A_6F5B_41C6_CB9744A8060A); this.mainPlayList.set('selectedIndex', 1)",
        "displayTooltipInTouchScreens": true,
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_4DEBA1BC_411E_B0BA_41AA_8B5E6319F164",
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "yaw": 3.47,
        "hfov": 24.46,
        "image": {
         "levels": [
          {
           "height": 100,
           "width": 100,
           "url": "media/panorama_4DEBC1BC_411E_B0BA_41C2_8D75AEE4E70B_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -29.56
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
           "url": "media/panorama_4DEBC1BC_411E_B0BA_41C2_8D75AEE4E70B_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 0,
        "yaw": -159.78,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 94.51
       }
      ],
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 5); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 8); this.mainPlayList.set('selectedIndex', 9)"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": true,
      "id": "overlay_4DEA61BC_411E_B0BA_41C2_95BA4BBA7507",
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "yaw": -159.78,
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
        "class": "HotspotPanoramaOverlayImage",
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
  "hfovMin": 60,
  "label": "Street View",
  "hfov": 360,
  "adjacentPanoramas": [
   {
    "panorama": {
     "hfovMax": 120,
     "frames": [
      {
       "thumbnailUrl": "media/panorama_4D1613E3_4119_90CE_41CC_DF7832021B96_t.jpg",
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
              "url": "media/panorama_4D1613E3_4119_90CE_41CC_DF7832021B96_0_HS_0_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 21.91,
           "yaw": -80.44,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -38.84
          }
         ],
         "areas": [
          {
           "toolTip": "Swimming Pool",
           "click": "this.startPanoramaWithCamera(this.panorama_4C046DCD_411A_B0DA_41CD_92ADD7E360C8, this.camera_546A71AD_4119_915A_41BA_0B521CE8B681); this.mainPlayList.set('selectedIndex', 2)",
           "displayTooltipInTouchScreens": true,
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "id": "overlay_4D1603E3_4119_90CE_41C1_00D48FCCCA41",
         "class": "HotspotPanoramaOverlay",
         "items": [
          {
           "yaw": -80.44,
           "hfov": 21.91,
           "image": {
            "levels": [
             {
              "height": 100,
              "width": 100,
              "url": "media/panorama_4D1613E3_4119_90CE_41CC_DF7832021B96_0_HS_0_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -38.84
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
              "url": "media/panorama_4D1613E3_4119_90CE_41CC_DF7832021B96_0_HS_1_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 0,
           "yaw": -171.93,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": 97.03
          }
         ],
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 5); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 8); this.mainPlayList.set('selectedIndex', 9)"
          }
         ],
         "enabledInCardboard": true,
         "rollOverDisplay": true,
         "id": "overlay_4D11E3E3_4119_90CE_41AC_D4FCB2474918",
         "class": "HotspotPanoramaOverlay",
         "items": [
          {
           "yaw": -171.93,
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
           "class": "HotspotPanoramaOverlayImage",
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
     "hfov": 360,
     "adjacentPanoramas": [
      {
       "panorama": "this.panorama_4DEBC1BC_411E_B0BA_41C2_8D75AEE4E70B",
       "yaw": -171.93,
       "class": "AdjacentPanorama",
       "backwardYaw": 3.47,
       "distance": 1
      },
      {
       "panorama": {
        "hfovMax": 120,
        "frames": [
         {
          "thumbnailUrl": "media/panorama_4C046DCD_411A_B0DA_41CD_92ADD7E360C8_t.jpg",
          "overlays": [
           {
            "useHandCursor": true,
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "height": 6,
                 "width": 4,
                 "url": "media/panorama_4C046DCD_411A_B0DA_41CD_92ADD7E360C8_0_HS_0_0_0_map.gif",
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
              "click": "this.startPanoramaWithCamera(this.panorama_4C597F40_411B_91CA_41B3_3FEECDEB1412, this.camera_55CBE132_4119_914F_41C4_2A0FCAAC046C); this.mainPlayList.set('selectedIndex', 3)",
              "displayTooltipInTouchScreens": true,
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "id": "overlay_4C047DCD_411A_B0DA_41CC_338A0B5A8E7B",
            "class": "HotspotPanoramaOverlay",
            "items": [
             {
              "yaw": 14.07,
              "hfov": 8.63,
              "image": {
               "levels": [
                {
                 "height": 12,
                 "width": 9,
                 "url": "media/panorama_4C046DCD_411A_B0DA_41CD_92ADD7E360C8_0_HS_0_0.png",
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
                 "url": "media/panorama_4C046DCD_411A_B0DA_41CD_92ADD7E360C8_0_HS_1_0_0_map.gif",
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
              "click": "this.startPanoramaWithCamera(this.panorama_4DEBC1BC_411E_B0BA_41C2_8D75AEE4E70B, this.camera_55EF611C_4119_917A_41C4_D926ABBDA2BC); this.mainPlayList.set('selectedIndex', 0)"
             }
            ],
            "enabledInCardboard": true,
            "rollOverDisplay": true,
            "id": "overlay_4C044DCD_411A_B0DA_41C9_57A3E5C6891B",
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
                 "url": "media/panorama_4C046DCD_411A_B0DA_41CD_92ADD7E360C8_0_HS_1_0.png",
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
                 "url": "media/panorama_4C046DCD_411A_B0DA_41CD_92ADD7E360C8_0_HS_2_0_0_map.gif",
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
              "click": "this.startPanoramaWithCamera(this.panorama_4D1613E3_4119_90CE_41CC_DF7832021B96, this.camera_55FD010D_4119_915A_41B5_BFDE9A3AF002); this.mainPlayList.set('selectedIndex', 1)"
             }
            ],
            "enabledInCardboard": true,
            "rollOverDisplay": true,
            "id": "overlay_4C043DCD_411A_B0DA_4181_704CBBF5378A",
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
                 "url": "media/panorama_4C046DCD_411A_B0DA_41CD_92ADD7E360C8_0_HS_2_0.png",
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
                 "url": "media/panorama_4C046DCD_411A_B0DA_41CD_92ADD7E360C8_0_HS_3_0_0_map.gif",
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
              "click": "this.startPanoramaWithCamera(this.panorama_4C09B820_411A_9F4A_418C_3401DFC19214, this.camera_558180FD_4119_90BA_41AE_1545F5868438); this.mainPlayList.set('selectedIndex', 4)"
             }
            ],
            "enabledInCardboard": true,
            "rollOverDisplay": true,
            "id": "overlay_4C040DCD_411A_B0DA_41C1_8BDC22049A5A",
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
                 "url": "media/panorama_4C046DCD_411A_B0DA_41CD_92ADD7E360C8_0_HS_3_0.png",
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
                 "url": "media/panorama_4C046DCD_411A_B0DA_41CD_92ADD7E360C8_0_HS_4_0_0_map.gif",
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
              "click": "this.startPanoramaWithCamera(this.panorama_4C0707C9_4119_90DD_41C2_22B8691226F2, this.camera_55D8011C_4119_917A_4193_4F60DA13E275); this.mainPlayList.set('selectedIndex', 5)"
             }
            ],
            "enabledInCardboard": true,
            "rollOverDisplay": true,
            "id": "overlay_4C04FDCD_411A_B0DA_41C6_0375ADD25A8D",
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
                 "url": "media/panorama_4C046DCD_411A_B0DA_41CD_92ADD7E360C8_0_HS_4_0.png",
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
        "hfov": 360,
        "adjacentPanoramas": [
         {
          "panorama": {
           "hfovMax": 120,
           "frames": [
            {
             "thumbnailUrl": "media/panorama_4C09B820_411A_9F4A_418C_3401DFC19214_t.jpg",
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
                    "url": "media/panorama_4C09B820_411A_9F4A_418C_3401DFC19214_0_HS_0_0_0_map.gif",
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
                 "click": "this.startPanoramaWithCamera(this.panorama_4C046DCD_411A_B0DA_41CD_92ADD7E360C8, this.camera_54215161_4119_91CA_41B5_F64A10ACF560); this.mainPlayList.set('selectedIndex', 2)"
                }
               ],
               "enabledInCardboard": true,
               "rollOverDisplay": true,
               "id": "overlay_4C09A820_411A_9F4A_41CC_F59D0360722B",
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
                    "url": "media/panorama_4C09B820_411A_9F4A_418C_3401DFC19214_0_HS_0_0.png",
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
                    "url": "media/panorama_4C09B820_411A_9F4A_418C_3401DFC19214_0_HS_1_0_0_map.gif",
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
                 "click": "this.startPanoramaWithCamera(this.panorama_4DEBC1BC_411E_B0BA_41C2_8D75AEE4E70B, this.camera_55C48142_4119_91CE_41AC_C8F38CAEAB2D); this.mainPlayList.set('selectedIndex', 0)"
                }
               ],
               "enabledInCardboard": true,
               "rollOverDisplay": true,
               "id": "overlay_4C099820_411A_9F4A_419F_2B7CC43675B0",
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
                    "url": "media/panorama_4C09B820_411A_9F4A_418C_3401DFC19214_0_HS_1_0.png",
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
                    "url": "media/panorama_4C09B820_411A_9F4A_418C_3401DFC19214_0_HS_2_0_0_map.gif",
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
                 "click": "this.startPanoramaWithCamera(this.panorama_4D1613E3_4119_90CE_41CC_DF7832021B96, this.camera_5437B152_4119_91CE_4189_FEE9EBB690E6); this.mainPlayList.set('selectedIndex', 1)"
                }
               ],
               "enabledInCardboard": true,
               "rollOverDisplay": true,
               "id": "overlay_4C09F820_411A_9F4A_41A3_706D39A8E764",
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
                    "url": "media/panorama_4C09B820_411A_9F4A_418C_3401DFC19214_0_HS_2_0.png",
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
                    "url": "media/panorama_4C09B820_411A_9F4A_418C_3401DFC19214_0_HS_3_0_0_map.gif",
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
                 "click": "this.startPanoramaWithCamera(this.panorama_4C597F40_411B_91CA_41B3_3FEECDEB1412, this.camera_540DF180_4119_914B_41B6_737CE7ED0216); this.mainPlayList.set('selectedIndex', 3)"
                }
               ],
               "enabledInCardboard": true,
               "rollOverDisplay": true,
               "id": "overlay_4C09E820_411A_9F4A_41A8_1B1432E54002",
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
                    "url": "media/panorama_4C09B820_411A_9F4A_418C_3401DFC19214_0_HS_3_0.png",
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
                    "height": 6,
                    "width": 4,
                    "url": "media/panorama_4C09B820_411A_9F4A_418C_3401DFC19214_0_HS_4_0_0_map.gif",
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
                 "click": "this.startPanoramaWithCamera(this.panorama_4C0707C9_4119_90DD_41C2_22B8691226F2, this.camera_541C0171_4119_91CA_41C8_053C404790AC); this.mainPlayList.set('selectedIndex', 5)",
                 "displayTooltipInTouchScreens": true,
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "id": "overlay_4C09D820_411A_9F4A_41CD_7A461249E09E",
               "class": "HotspotPanoramaOverlay",
               "items": [
                {
                 "yaw": 1.25,
                 "hfov": 8.69,
                 "image": {
                  "levels": [
                   {
                    "height": 12,
                    "width": 9,
                    "url": "media/panorama_4C09B820_411A_9F4A_418C_3401DFC19214_0_HS_4_0.png",
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
           "label": "Roof Top",
           "hfov": 360,
           "adjacentPanoramas": [
            {
             "panorama": "this.panorama_4DEBC1BC_411E_B0BA_41C2_8D75AEE4E70B",
             "yaw": 147.34,
             "class": "AdjacentPanorama",
             "backwardYaw": -159.78,
             "distance": 1
            },
            {
             "panorama": "this.panorama_4D1613E3_4119_90CE_41CC_DF7832021B96",
             "yaw": 125.99,
             "class": "AdjacentPanorama",
             "backwardYaw": -171.93,
             "distance": 1
            },
            {
             "panorama": "this.panorama_4C046DCD_411A_B0DA_41CD_92ADD7E360C8",
             "yaw": 165.43,
             "class": "AdjacentPanorama",
             "backwardYaw": 10.93,
             "distance": 1
            },
            {
             "panorama": {
              "hfovMax": 120,
              "frames": [
               {
                "thumbnailUrl": "media/panorama_4C0707C9_4119_90DD_41C2_22B8691226F2_t.jpg",
                "overlays": [
                 {
                  "useHandCursor": true,
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "height": 43,
                       "width": 43,
                       "url": "media/panorama_4C0707C9_4119_90DD_41C2_22B8691226F2_0_HS_0_0_0_map.gif",
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
                    "click": "this.startPanoramaWithCamera(this.panorama_4C09B820_411A_9F4A_418C_3401DFC19214, this.camera_54B211EA_4119_90DF_41A8_B58B243D7AE6); this.mainPlayList.set('selectedIndex', 4)",
                    "displayTooltipInTouchScreens": true,
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "id": "overlay_4C0737C9_4119_90DD_419A_AE2A022FED96",
                  "class": "HotspotPanoramaOverlay",
                  "items": [
                   {
                    "yaw": -137.04,
                    "hfov": 10.48,
                    "image": {
                     "levels": [
                      {
                       "height": 87,
                       "width": 87,
                       "url": "media/panorama_4C0707C9_4119_90DD_41C2_22B8691226F2_0_HS_0_0.png",
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
                       "url": "media/panorama_4C0707C9_4119_90DD_41C2_22B8691226F2_0_HS_1_0_0_map.gif",
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
                    "click": "this.startPanoramaWithCamera(this.panorama_4DEBC1BC_411E_B0BA_41C2_8D75AEE4E70B, this.camera_54AC61FD_4119_90BA_4194_B0B92FC9179B); this.mainPlayList.set('selectedIndex', 0)"
                   }
                  ],
                  "enabledInCardboard": true,
                  "rollOverDisplay": true,
                  "id": "overlay_4C0727D0_4119_90CA_41CF_9F09FB3AFB60",
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
                       "url": "media/panorama_4C0707C9_4119_90DD_41C2_22B8691226F2_0_HS_1_0.png",
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
                       "url": "media/panorama_4C0707C9_4119_90DD_41C2_22B8691226F2_0_HS_2_0_0_map.gif",
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
                    "click": "this.startPanoramaWithCamera(this.panorama_4D1613E3_4119_90CE_41CC_DF7832021B96, this.camera_549DF209_4119_935A_41AF_E26FA606C382); this.mainPlayList.set('selectedIndex', 1)"
                   }
                  ],
                  "enabledInCardboard": true,
                  "rollOverDisplay": true,
                  "id": "overlay_4C0747D0_4119_90CA_41C3_3805815760E8",
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
                       "url": "media/panorama_4C0707C9_4119_90DD_41C2_22B8691226F2_0_HS_2_0.png",
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
                       "url": "media/panorama_4C0707C9_4119_90DD_41C2_22B8691226F2_0_HS_3_0_0_map.gif",
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
                    "click": "this.startPanoramaWithCamera(this.panorama_4C046DCD_411A_B0DA_41CD_92ADD7E360C8, this.camera_54884213_4119_934E_41B5_7F56A647DBDF); this.mainPlayList.set('selectedIndex', 2)"
                   }
                  ],
                  "enabledInCardboard": true,
                  "rollOverDisplay": true,
                  "id": "overlay_4C0767D0_4119_90CA_41A3_D5DB1C3AF67F",
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
                       "url": "media/panorama_4C0707C9_4119_90DD_41C2_22B8691226F2_0_HS_3_0.png",
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
                       "url": "media/panorama_4C0707C9_4119_90DD_41C2_22B8691226F2_0_HS_4_0_0_map.gif",
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
                    "click": "this.startPanoramaWithCamera(this.panorama_4C597F40_411B_91CA_41B3_3FEECDEB1412, this.camera_54F9321D_4119_9375_41BF_1A460B67F0CC); this.mainPlayList.set('selectedIndex', 3)"
                   }
                  ],
                  "enabledInCardboard": true,
                  "rollOverDisplay": true,
                  "id": "overlay_4C0697D0_4119_90CA_41B4_56BEEA46F83A",
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
                       "url": "media/panorama_4C0707C9_4119_90DD_41C2_22B8691226F2_0_HS_4_0.png",
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
              "hfov": 360,
              "adjacentPanoramas": [
               {
                "panorama": "this.panorama_4C09B820_411A_9F4A_418C_3401DFC19214",
                "yaw": -137.04,
                "class": "AdjacentPanorama",
                "backwardYaw": 1.25,
                "distance": 1
               },
               {
                "panorama": "this.panorama_4DEBC1BC_411E_B0BA_41C2_8D75AEE4E70B",
                "yaw": -11.14,
                "class": "AdjacentPanorama",
                "backwardYaw": -159.78,
                "distance": 1
               },
               {
                "panorama": "this.panorama_4D1613E3_4119_90CE_41CC_DF7832021B96",
                "yaw": -58.36,
                "class": "AdjacentPanorama",
                "backwardYaw": -171.93,
                "distance": 1
               },
               {
                "panorama": "this.panorama_4C046DCD_411A_B0DA_41CD_92ADD7E360C8",
                "yaw": -8.12,
                "class": "AdjacentPanorama",
                "backwardYaw": 32.28,
                "distance": 1
               },
               {
                "panorama": {
                 "hfovMax": 120,
                 "frames": [
                  {
                   "thumbnailUrl": "media/panorama_4C597F40_411B_91CA_41B3_3FEECDEB1412_t.jpg",
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
                          "url": "media/panorama_4C597F40_411B_91CA_41B3_3FEECDEB1412_0_HS_0_0_0_map.gif",
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
                       "click": "this.startPanoramaWithCamera(this.panorama_4C046DCD_411A_B0DA_41CD_92ADD7E360C8, this.camera_54C10246_4119_93D6_41CE_CE5629F8C968); this.mainPlayList.set('selectedIndex', 2)"
                      }
                     ],
                     "enabledInCardboard": true,
                     "rollOverDisplay": true,
                     "id": "overlay_4C596F40_411B_91CA_41C6_B66A9F50A105",
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
                          "url": "media/panorama_4C597F40_411B_91CA_41B3_3FEECDEB1412_0_HS_0_0.png",
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
                          "height": 7,
                          "width": 5,
                          "url": "media/panorama_4C597F40_411B_91CA_41B3_3FEECDEB1412_0_HS_1_0_0_map.gif",
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
                       "click": "this.startPanoramaWithCamera(this.panorama_4C09B820_411A_9F4A_418C_3401DFC19214, this.camera_54F44227_4119_9355_41CA_A5791B9C0E22); this.mainPlayList.set('selectedIndex', 4)",
                       "displayTooltipInTouchScreens": true,
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "id": "overlay_4C593F40_411B_91CA_41C5_23B2BACF2F7B",
                     "class": "HotspotPanoramaOverlay",
                     "items": [
                      {
                       "yaw": 18.46,
                       "hfov": 10.53,
                       "image": {
                        "levels": [
                         {
                          "height": 14,
                          "width": 11,
                          "url": "media/panorama_4C597F40_411B_91CA_41B3_3FEECDEB1412_0_HS_1_0.png",
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
                          "url": "media/panorama_4C597F40_411B_91CA_41B3_3FEECDEB1412_0_HS_2_0_0_map.gif",
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
                       "click": "this.startPanoramaWithCamera(this.panorama_4DEBC1BC_411E_B0BA_41C2_8D75AEE4E70B, this.camera_54E5C232_4119_934E_41C0_DE92E4489704); this.mainPlayList.set('selectedIndex', 0)"
                      }
                     ],
                     "enabledInCardboard": true,
                     "rollOverDisplay": true,
                     "id": "overlay_4C56CF40_411B_91CA_41CB_F9F81F51008A",
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
                          "url": "media/panorama_4C597F40_411B_91CA_41B3_3FEECDEB1412_0_HS_2_0.png",
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
                          "url": "media/panorama_4C597F40_411B_91CA_41B3_3FEECDEB1412_0_HS_3_0_0_map.gif",
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
                       "click": "this.startPanoramaWithCamera(this.panorama_4D1613E3_4119_90CE_41CC_DF7832021B96, this.camera_54D6823A_4119_93BE_41BA_7BA620E58481); this.mainPlayList.set('selectedIndex', 1)"
                      }
                     ],
                     "enabledInCardboard": true,
                     "rollOverDisplay": true,
                     "id": "overlay_4C56EF40_411B_91CA_41CA_4D790779D30C",
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
                          "url": "media/panorama_4C597F40_411B_91CA_41B3_3FEECDEB1412_0_HS_3_0.png",
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
                          "url": "media/panorama_4C597F40_411B_91CA_41B3_3FEECDEB1412_0_HS_4_0_0_map.gif",
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
                       "click": "this.startPanoramaWithCamera(this.panorama_4C0707C9_4119_90DD_41C2_22B8691226F2, this.camera_5732A250_4119_93CA_41CE_875C1E705C2D); this.mainPlayList.set('selectedIndex', 5)"
                      }
                     ],
                     "enabledInCardboard": true,
                     "rollOverDisplay": true,
                     "id": "overlay_4C569F40_411B_91CA_4198_86F14528D100",
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
                          "url": "media/panorama_4C597F40_411B_91CA_41B3_3FEECDEB1412_0_HS_4_0.png",
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
                 "label": "Master Balcony",
                 "hfov": 360,
                 "adjacentPanoramas": [
                  {
                   "panorama": "this.panorama_4C09B820_411A_9F4A_418C_3401DFC19214",
                   "yaw": 18.46,
                   "class": "AdjacentPanorama",
                   "backwardYaw": 118.2,
                   "distance": 1
                  },
                  {
                   "panorama": "this.panorama_4DEBC1BC_411E_B0BA_41C2_8D75AEE4E70B",
                   "yaw": 157.89,
                   "class": "AdjacentPanorama",
                   "backwardYaw": -159.78,
                   "distance": 1
                  },
                  {
                   "panorama": "this.panorama_4D1613E3_4119_90CE_41CC_DF7832021B96",
                   "yaw": 131.77,
                   "class": "AdjacentPanorama",
                   "backwardYaw": -171.93,
                   "distance": 1
                  },
                  {
                   "panorama": "this.panorama_4C046DCD_411A_B0DA_41CD_92ADD7E360C8",
                   "yaw": 165.68,
                   "class": "AdjacentPanorama",
                   "backwardYaw": 14.07,
                   "distance": 1
                  },
                  {
                   "panorama": "this.panorama_4C0707C9_4119_90DD_41C2_22B8691226F2",
                   "yaw": 109.66,
                   "class": "AdjacentPanorama",
                   "backwardYaw": 39.06,
                   "distance": 1
                  }
                 ],
                 "class": "Panorama",
                 "vfov": 180
                },
                "yaw": 39.06,
                "class": "AdjacentPanorama",
                "backwardYaw": 109.66,
                "distance": 1
               }
              ],
              "class": "Panorama",
              "vfov": 180
             },
             "yaw": 1.25,
             "class": "AdjacentPanorama",
             "backwardYaw": -137.04,
             "distance": 1
            },
            {
             "panorama": "this.panorama_4C597F40_411B_91CA_41B3_3FEECDEB1412",
             "yaw": 118.2,
             "class": "AdjacentPanorama",
             "backwardYaw": 18.46,
             "distance": 1
            }
           ],
           "class": "Panorama",
           "vfov": 180
          },
          "yaw": 10.93,
          "class": "AdjacentPanorama",
          "backwardYaw": 165.43,
          "distance": 1
         },
         {
          "panorama": "this.panorama_4D1613E3_4119_90CE_41CC_DF7832021B96",
          "yaw": 113.93,
          "class": "AdjacentPanorama",
          "backwardYaw": -80.44,
          "distance": 1
         },
         {
          "panorama": "this.panorama_4DEBC1BC_411E_B0BA_41C2_8D75AEE4E70B",
          "yaw": 138.8,
          "class": "AdjacentPanorama",
          "backwardYaw": -159.78,
          "distance": 1
         },
         {
          "panorama": "this.panorama_4C0707C9_4119_90DD_41C2_22B8691226F2",
          "yaw": 32.28,
          "class": "AdjacentPanorama",
          "backwardYaw": -8.12,
          "distance": 1
         },
         {
          "panorama": "this.panorama_4C597F40_411B_91CA_41B3_3FEECDEB1412",
          "yaw": 14.07,
          "class": "AdjacentPanorama",
          "backwardYaw": 165.68,
          "distance": 1
         }
        ],
        "class": "Panorama",
        "vfov": 180
       },
       "yaw": -80.44,
       "class": "AdjacentPanorama",
       "backwardYaw": 113.93,
       "distance": 1
      },
      {
       "panorama": "this.panorama_4C09B820_411A_9F4A_418C_3401DFC19214",
       "yaw": -171.93,
       "class": "AdjacentPanorama",
       "backwardYaw": 125.99,
       "distance": 1
      },
      {
       "panorama": "this.panorama_4C0707C9_4119_90DD_41C2_22B8691226F2",
       "yaw": -171.93,
       "class": "AdjacentPanorama",
       "backwardYaw": -58.36,
       "distance": 1
      },
      {
       "panorama": "this.panorama_4C597F40_411B_91CA_41B3_3FEECDEB1412",
       "yaw": -171.93,
       "class": "AdjacentPanorama",
       "backwardYaw": 131.77,
       "distance": 1
      }
     ],
     "class": "Panorama",
     "vfov": 180
    },
    "yaw": 3.47,
    "class": "AdjacentPanorama",
    "backwardYaw": -171.93,
    "distance": 1
   },
   {
    "panorama": "this.panorama_4C046DCD_411A_B0DA_41CD_92ADD7E360C8",
    "yaw": -159.78,
    "class": "AdjacentPanorama",
    "backwardYaw": 138.8,
    "distance": 1
   },
   {
    "panorama": "this.panorama_4C09B820_411A_9F4A_418C_3401DFC19214",
    "yaw": -159.78,
    "class": "AdjacentPanorama",
    "backwardYaw": 147.34,
    "distance": 1
   },
   {
    "panorama": "this.panorama_4C0707C9_4119_90DD_41C2_22B8691226F2",
    "yaw": -159.78,
    "class": "AdjacentPanorama",
    "backwardYaw": -11.14,
    "distance": 1
   },
   {
    "panorama": "this.panorama_4C597F40_411B_91CA_41B3_3FEECDEB1412",
    "yaw": -159.78,
    "class": "AdjacentPanorama",
    "backwardYaw": 157.89,
    "distance": 1
   }
  ],
  "class": "Panorama",
  "vfov": 180
 },
 {
  "buttonCardboardView": {
   "paddingLeft": 0,
   "paddingRight": 0,
   "verticalAlign": "middle",
   "mode": "push",
   "height": "100%",
   "width": "100%",
   "iconURL": "skin/IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37.png",
   "transparencyActive": false,
   "borderRadius": 0,
   "borderSize": 0,
   "shadow": false,
   "horizontalAlign": "center",
   "class": "IconButton",
   "cursor": "hand",
   "paddingBottom": 0,
   "maxHeight": 60,
   "minWidth": 1,
   "id": "IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37",
   "minHeight": 1,
   "paddingTop": 0,
   "backgroundOpacity": 0,
   "maxWidth": 60
  },
  "touchControlMode": "drag_rotation",
  "displayPlaybackBar": true,
  "buttonToggleHotspots": {
   "paddingLeft": 0,
   "toolTipBackgroundColor": "#000000",
   "paddingRight": 0,
   "verticalAlign": "middle",
   "mode": "toggle",
   "toolTipPaddingRight": 6,
   "toolTipPaddingBottom": 4,
   "iconURL": "skin/IconButton_80E5955A_8E23_BB05_41CA_43DD61DBAEE9.png",
   "height": "100%",
   "width": "100%",
   "toolTipTextShadowOpacity": 0,
   "transparencyActive": true,
   "toolTipPaddingTop": 4,
   "borderRadius": 0,
   "toolTipBorderSize": 1,
   "toolTipFontSize": 12,
   "toolTipOpacity": 0.7,
   "borderSize": 0,
   "toolTipShadowOpacity": 1,
   "toolTipShadowVerticalLength": 0,
   "toolTipPaddingLeft": 6,
   "toolTipBorderColor": "#767676",
   "shadow": false,
   "horizontalAlign": "center",
   "class": "IconButton",
   "toolTipFontStyle": "normal",
   "toolTipBorderRadius": 3,
   "toolTip": "Hotspots Visibility",
   "click": "if(!this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, true, 0, this.effect_CDD059FA_EED0_D223_41DB_70ACFBE986FE, 'showEffect', false) } else if(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, false, 0, this.effect_CDD049FB_EED0_D221_41EB_CA2134B978E0, 'hideEffect', false) }",
   "cursor": "hand",
   "paddingBottom": 0,
   "maxHeight": 60,
   "minWidth": 1,
   "toolTipTextShadowBlurRadius": 3,
   "toolTipFontWeight": "normal",
   "id": "IconButton_80E5955A_8E23_BB05_41CA_43DD61DBAEE9",
   "minHeight": 1,
   "toolTipShadowHorizontalLength": 0,
   "toolTipShadowSpread": 0,
   "paddingTop": 0,
   "toolTipShadowColor": "#333333",
   "toolTipShadowBlurRadius": 3,
   "pressedIconURL": "skin/IconButton_80E5955A_8E23_BB05_41CA_43DD61DBAEE9_pressed.png",
   "backgroundOpacity": 0,
   "maxWidth": 60,
   "toolTipTextShadowColor": "#000000",
   "toolTipFontFamily": "Arial",
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
  "id": "panorama_4DEBC1BC_411E_B0BA_41C2_8D75AEE4E70B_camera",
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
 "this.panorama_4D1613E3_4119_90CE_41CC_DF7832021B96",
 {
  "id": "panorama_4D1613E3_4119_90CE_41CC_DF7832021B96_camera",
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
 "this.panorama_4C046DCD_411A_B0DA_41CD_92ADD7E360C8",
 {
  "id": "panorama_4C046DCD_411A_B0DA_41CD_92ADD7E360C8_camera",
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
 "this.panorama_4C597F40_411B_91CA_41B3_3FEECDEB1412",
 {
  "id": "panorama_4C597F40_411B_91CA_41B3_3FEECDEB1412_camera",
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
 "this.panorama_4C09B820_411A_9F4A_418C_3401DFC19214",
 {
  "id": "panorama_4C09B820_411A_9F4A_418C_3401DFC19214_camera",
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
 "this.panorama_4C0707C9_4119_90DD_41C2_22B8691226F2",
 {
  "id": "panorama_4C0707C9_4119_90DD_41C2_22B8691226F2_camera",
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
  "hfovMax": 120,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_4C1BD32D_4126_915A_41CF_10469E86A717_t.jpg",
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
  "label": "Master Room",
  "hfov": 360,
  "class": "Panorama",
  "vfov": 180
 },
 {
  "id": "panorama_4C1BD32D_4126_915A_41CF_10469E86A717_camera",
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
  "hfovMax": 120,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_4C63FF21_4126_914D_41B9_FA0A4C032B16_t.jpg",
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
  "hfov": 360,
  "class": "Panorama",
  "vfov": 180
 },
 {
  "id": "panorama_4C63FF21_4126_914D_41B9_FA0A4C032B16_camera",
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
  "hfovMax": 120,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_4C068664_4127_93CA_41A2_D07233B3A2AF_t.jpg",
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
  "label": "Bed Room",
  "hfov": 360,
  "class": "Panorama",
  "vfov": 180
 },
 {
  "id": "panorama_4C068664_4127_93CA_41A2_D07233B3A2AF_camera",
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
  "hfovMax": 120,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_4C5FDE04_4126_734A_41CC_218B1F932217_t.jpg",
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
  "label": "Double Beds Room",
  "hfov": 360,
  "class": "Panorama",
  "vfov": 180
 },
 {
  "id": "panorama_4C5FDE04_4126_734A_41CC_218B1F932217_camera",
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
    "media": "this.panorama_4DEBC1BC_411E_B0BA_41C2_8D75AEE4E70B",
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
    "media": "this.panorama_4C597F40_411B_91CA_41B3_3FEECDEB1412",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_4C597F40_411B_91CA_41B3_3FEECDEB1412_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "media": "this.panorama_4C09B820_411A_9F4A_418C_3401DFC19214",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_4C09B820_411A_9F4A_418C_3401DFC19214_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "media": "this.panorama_4C0707C9_4119_90DD_41C2_22B8691226F2",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_4C0707C9_4119_90DD_41C2_22B8691226F2_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "media": "this.panorama_4C1BD32D_4126_915A_41CF_10469E86A717",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_4C1BD32D_4126_915A_41CF_10469E86A717_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "media": "this.panorama_4C63FF21_4126_914D_41B9_FA0A4C032B16",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_4C63FF21_4126_914D_41B9_FA0A4C032B16_camera"
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
    "media": "this.panorama_4C5FDE04_4126_734A_41CC_218B1F932217",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_4C5FDE04_4126_734A_41CC_218B1F932217_camera"
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
    "media": "this.panorama_4C597F40_411B_91CA_41B3_3FEECDEB1412",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_4C597F40_411B_91CA_41B3_3FEECDEB1412_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 4, 5)",
    "media": "this.panorama_4C09B820_411A_9F4A_418C_3401DFC19214",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_4C09B820_411A_9F4A_418C_3401DFC19214_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 5, 6)",
    "media": "this.panorama_4C0707C9_4119_90DD_41C2_22B8691226F2",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_4C0707C9_4119_90DD_41C2_22B8691226F2_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 6, 7)",
    "media": "this.panorama_4C1BD32D_4126_915A_41CF_10469E86A717",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_4C1BD32D_4126_915A_41CF_10469E86A717_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 7, 8)",
    "media": "this.panorama_4C63FF21_4126_914D_41B9_FA0A4C032B16",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_4C63FF21_4126_914D_41B9_FA0A4C032B16_camera"
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
    "media": "this.panorama_4C5FDE04_4126_734A_41CC_218B1F932217",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_4C5FDE04_4126_734A_41CC_218B1F932217_camera"
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
  "id": "playList_556C5099_411A_6F7A_41C5_51818EEAF29B",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.registerKey('visibility_Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB', this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB.get('visible')); this.registerKey('visibility_ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472', this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472.get('visible')); this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setComponentVisibility(this.Container_86F3A56C_8E22_5B1D_41CA_9CE53436FE56, false, -1, this.effect_22973FB1_2DD9_0423_41C1_E1E03953DCCE, 'hideEffect', false); this.setComponentVisibility(this.Container_807F782A_8E23_A905_41DE_623121285A09, false, -1, this.effect_22974FB2_2DD9_0421_41BA_84205292D043, 'hideEffect', false); this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, false, -1, this.effect_3876CD6E_2DF9_0421_41C1_F0AB7F279824, 'hideEffect', false); this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, false, -1, this.effect_22899FB3_2DD9_0427_41BB_298AEB3D2851, 'hideEffect', false); this.setComponentVisibility(this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB, true, -1, this.effect_2289DFB3_2DD9_0427_41AE_A35795880BA7, 'showEffect', false)",
    "media": "this.video_210B394E_3D54_1A60_41A3_CB42BEC0D3EC",
    "player": "this.MainViewerVideoPlayer",
    "class": "VideoPlayListItem",
    "end": "this.setComponentVisibility(this.Container_86F3A56C_8E22_5B1D_41CA_9CE53436FE56, true, -1, this.effect_22975FB2_2DD9_0421_41B4_7A2443082F44, 'showEffect', false); this.setComponentVisibility(this.Container_86F3A56C_8E22_5B1D_41CA_9CE53436FE56, true, -1, this.effect_22975FB2_2DD9_0421_41B4_7A2443082F44, 'showEffect', false); this.setComponentVisibility(this.Container_807F782A_8E23_A905_41DE_623121285A09, true, -1, this.effect_22977FB2_2DD9_0421_41C1_F53B037346DF, 'showEffect', false); this.setComponentVisibility(this.Container_807F782A_8E23_A905_41DE_623121285A09, true, -1, this.effect_22977FB2_2DD9_0421_41C1_F53B037346DF, 'showEffect', false); if(this.existsKey('visibility_ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472')){ if(this.getKey('visibility_ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472')) { this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, true, -1, this.effect_57354250_4119_93CA_41AC_ED784F65C039, 'showEffect', false); } else { this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, false, -1, this.effect_3876CD6E_2DF9_0421_41C1_F0AB7F279824, 'hideEffect', false); } }; this.unregisterKey('visibility_ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472'); if(this.existsKey('visibility_Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB')){ if(this.getKey('visibility_Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB')) { this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, true, -1, this.effect_57349250_4119_93CA_41B8_815556DE6D48, 'showEffect', false); } else { this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, false, -1, this.effect_22899FB3_2DD9_0427_41BB_298AEB3D2851, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB'); this.setComponentVisibility(this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB, false, -1, this.effect_2289EFB3_2DD9_0427_41C0_ACB5A72AE218, 'hideEffect', false); this.setComponentVisibility(this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB, false, -1, this.effect_2289EFB3_2DD9_0427_41C0_ACB5A72AE218, 'hideEffect', false)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_556C5099_411A_6F7A_41C5_51818EEAF29B, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_556C5099_411A_6F7A_41C5_51818EEAF29B, 0, this.video_210B394E_3D54_1A60_41A3_CB42BEC0D3EC)"
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
  "id": "playList_55631099_411A_6F7A_4175_9F0DE1915BDF",
  "class": "PlayList",
  "items": [
   {
    "player": "this.ViewerAreaLabeled_9FD7235A_96CD_9045_41D9_23A3BCBDB1C6PhotoAlbumPlayer",
    "class": "PhotoAlbumPlayListItem",
    "media": "this.album_1AE8DEB7_0EE7_8CC7_4198_F5B75788CCF6",
    "begin": "this.loopAlbum(this.playList_55631099_411A_6F7A_4175_9F0DE1915BDF, 0)"
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
  "easing": "linear",
  "id": "effect_15DDF232_3E91_44CF_41AB_F8C3E6067377",
  "class": "FadeInEffect",
  "duration": 400
 },
 {
  "easing": "linear",
  "id": "effect_15DDE232_3E91_44CF_41B1_14501B4EC17A",
  "class": "FadeOutEffect",
  "duration": 400
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
  "id": "camera_55BFF0A8_411A_6F5B_41C6_CB9744A8060A",
  "initialPosition": {
   "yaw": 8.07,
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
  "id": "camera_55B5E0B8_4119_90BA_41C0_5AEC8F31282E",
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
  "id": "camera_55AC10C7_4119_90D5_41A8_27528F358329",
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
  "id": "camera_5599B0CE_4119_90D6_41B7_B0004C01E06D",
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
  "id": "camera_559770ED_4119_90D5_41C9_29382D6724F7",
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
  "id": "camera_558180FD_4119_90BA_41AE_1545F5868438",
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
  "id": "camera_55FD010D_4119_915A_41B5_BFDE9A3AF002",
  "initialPosition": {
   "yaw": 99.56,
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
  "id": "camera_55EF611C_4119_917A_41C4_D926ABBDA2BC",
  "initialPosition": {
   "yaw": 20.22,
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
  "id": "camera_55D8011C_4119_917A_4193_4F60DA13E275",
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
  "id": "camera_55CBE132_4119_914F_41C4_2A0FCAAC046C",
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
  "id": "camera_55C48142_4119_91CE_41AC_C8F38CAEAB2D",
  "initialPosition": {
   "yaw": 20.22,
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
  "id": "camera_5437B152_4119_91CE_4189_FEE9EBB690E6",
  "initialPosition": {
   "yaw": 8.07,
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
  "id": "camera_54215161_4119_91CA_41B5_F64A10ACF560",
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
  "id": "camera_541C0171_4119_91CA_41C8_053C404790AC",
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
  "id": "camera_540DF180_4119_914B_41B6_737CE7ED0216",
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
  "id": "camera_547F5199_4119_917A_41BE_8172427D6FBE",
  "initialPosition": {
   "yaw": -176.53,
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
  "id": "camera_546A71AD_4119_915A_41BA_0B521CE8B681",
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
  "id": "camera_545B31B7_4119_90B5_41BE_BC15CE8137BD",
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
  "id": "camera_545661CC_4119_90DA_41A2_8AAB023668E0",
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
  "id": "camera_544731D6_4119_90F6_41B1_287DFA838BF0",
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
  "id": "camera_54B211EA_4119_90DF_41A8_B58B243D7AE6",
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
  "id": "camera_54AC61FD_4119_90BA_4194_B0B92FC9179B",
  "initialPosition": {
   "yaw": 20.22,
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
  "id": "camera_549DF209_4119_935A_41AF_E26FA606C382",
  "initialPosition": {
   "yaw": 8.07,
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
  "id": "camera_54884213_4119_934E_41B5_7F56A647DBDF",
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
  "id": "camera_54F9321D_4119_9375_41BF_1A460B67F0CC",
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
  "id": "camera_54F44227_4119_9355_41CA_A5791B9C0E22",
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
  "id": "camera_54E5C232_4119_934E_41C0_DE92E4489704",
  "initialPosition": {
   "yaw": 20.22,
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
  "id": "camera_54D6823A_4119_93BE_41BA_7BA620E58481",
  "initialPosition": {
   "yaw": 8.07,
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
  "id": "camera_54C10246_4119_93D6_41CE_CE5629F8C968",
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
  "id": "camera_5732A250_4119_93CA_41CE_875C1E705C2D",
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
  "id": "effect_57354250_4119_93CA_41AC_ED784F65C039",
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
  "id": "effect_57349250_4119_93CA_41B8_815556DE6D48",
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
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
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
  "toolTipOpacity": 0.7,
  "playbackBarBorderColor": "#FFFFFF",
  "toolTipShadowOpacity": 1,
  "playbackBarHeight": 10,
  "toolTipShadowVerticalLength": 0,
  "shadow": false,
  "playbackBarHeadWidth": 6,
  "class": "ViewerArea",
  "toolTipFontStyle": "normal",
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarProgressBorderSize": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "progressBottom": 0,
  "paddingBottom": 0,
  "playbackBarRight": 0,
  "progressBorderSize": 0,
  "progressBarBorderSize": 0,
  "progressBarBorderRadius": 0,
  "playbackBarProgressBorderRadius": 0,
  "paddingTop": 0,
  "transitionMode": "blending",
  "toolTipShadowSpread": 0,
  "toolTipShadowColor": "#333333",
  "toolTipShadowBlurRadius": 3,
  "playbackBarHeadShadow": true,
  "toolTipFontColor": "#606060",
  "toolTipTextShadowColor": "#000000",
  "playbackBarBorderRadius": 0,
  "toolTipBackgroundColor": "#000000",
  "playbackBarOpacity": 1,
  "toolTipPaddingRight": 6,
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
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
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "minWidth": 100,
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
  "minHeight": 50,
  "playbackBarBottom": 5,
  "playbackBarHeadShadowHorizontalLength": 0,
  "toolTipShadowHorizontalLength": 0,
  "paddingLeft": 0,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "left": "0%",
  "progressBackgroundOpacity": 1,
  "toolTipFontFamily": "Arial",
  "progressBorderColor": "#000000",
  "progressOpacity": 1,
  "progressHeight": 10,
  "right": "0%"
 },
 {
  "layout": "horizontal",
  "paddingLeft": 10,
  "backgroundColorDirection": "vertical",
  "overflow": "visible",
  "scrollBarOpacity": 0.5,
  "paddingRight": 10,
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "scrollBarColor": "#000000",
  "height": 75,
  "borderRadius": 5,
  "borderSize": 0,
  "gap": 35,
  "contentOpaque": false,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "shadow": false,
  "class": "Container",
  "horizontalAlign": "center",
  "paddingBottom": 0,
  "maxHeight": 75,
  "minWidth": 1,
  "bottom": "3%",
  "id": "Container_86F3A56C_8E22_5B1D_41CA_9CE53436FE56",
  "minHeight": 30,
  "backgroundColorRatios": [
   0,
   1
  ],
  "paddingTop": 0,
  "left": "0%",
  "backgroundOpacity": 0.25,
  "right": "0%",
  "children": [
   {
    "paddingLeft": 0,
    "toolTipBackgroundColor": "#000000",
    "paddingRight": 0,
    "verticalAlign": "middle",
    "mode": "push",
    "toolTipPaddingRight": 6,
    "toolTipPaddingBottom": 4,
    "iconURL": "skin/IconButton_87577B8F_8E22_AF1B_41CC_79EB87AE6DED.png",
    "height": "100%",
    "width": "100%",
    "toolTipTextShadowOpacity": 0,
    "transparencyActive": true,
    "toolTipPaddingTop": 4,
    "borderRadius": 0,
    "toolTipBorderSize": 1,
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
    "class": "IconButton",
    "toolTipFontStyle": "normal",
    "toolTipBorderRadius": 3,
    "toolTip": "Info",
    "click": "this.showPopupImage(this.ImageResource_536A2F3F_412A_B1B6_41B9_51CAE5D86C15, null, '85%', '85%', this.FadeInEffect_8ED05F70_96C4_F045_41DC_2AB82A556F92, this.FadeOutEffect_8ED06F70_96C4_F045_41DA_C74400CF7B15, {'rollOverIconWidth':25,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorDirection':'vertical','rollOverBackgroundColor':['#000000','#000000','#000000'],'pressedBackgroundColor':['#000000','#000000','#000000'],'iconHeight':25,'rollOverIconColor':'#52B7EF','backgroundColor':['#000000','#000000','#000000'],'rollOverBackgroundColorDirection':'vertical','pressedBorderSize':0,'iconColor':'#FFFFFF','backgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':10,'paddingBottom':10,'pressedIconLineWidth':3,'borderColor':'#000000','paddingLeft':10,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':3,'pressedBorderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundOpacity':0.3,'paddingTop':10,'pressedIconColor':'#CCCCCC','pressedBackgroundColorDirection':'vertical','borderSize':0,'pressedIconWidth':25,'pressedIconHeight':25,'backgroundOpacity':0.15,'rollOverBorderColor':'#000000','rollOverBackgroundOpacity':0.5,'iconWidth':25,'rollOverIconHeight':25,'rollOverIconLineWidth':3}, null, null, false)",
    "cursor": "hand",
    "paddingBottom": 0,
    "maxHeight": 75,
    "minWidth": 30,
    "toolTipTextShadowBlurRadius": 3,
    "toolTipFontWeight": "normal",
    "id": "IconButton_87577B8F_8E22_AF1B_41CC_79EB87AE6DED",
    "minHeight": 30,
    "toolTipShadowHorizontalLength": 0,
    "toolTipShadowSpread": 0,
    "paddingTop": 0,
    "toolTipShadowColor": "#333333",
    "toolTipShadowBlurRadius": 3,
    "backgroundOpacity": 0,
    "maxWidth": 75,
    "toolTipTextShadowColor": "#000000",
    "toolTipFontFamily": "Arial",
    "toolTipFontColor": "#606060"
   },
   {
    "paddingLeft": 0,
    "toolTipBackgroundColor": "#000000",
    "paddingRight": 0,
    "verticalAlign": "middle",
    "mode": "push",
    "toolTipPaddingRight": 6,
    "toolTipPaddingBottom": 4,
    "iconURL": "skin/IconButton_213ED70C_2DB2_E6C5_41B6_0CCE6C77E889.png",
    "height": "100%",
    "width": "100%",
    "toolTipTextShadowOpacity": 0,
    "transparencyActive": true,
    "toolTipPaddingTop": 4,
    "borderRadius": 0,
    "toolTipBorderSize": 1,
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
    "class": "IconButton",
    "toolTipFontStyle": "normal",
    "toolTipBorderRadius": 3,
    "toolTip": "Play Video",
    "click": "this.setMediaBehaviour(this.playList_556C5099_411A_6F7A_41C5_51818EEAF29B, 0); this.MainViewerVideoPlayer.play()",
    "cursor": "hand",
    "paddingBottom": 0,
    "maxHeight": 75,
    "minWidth": 30,
    "toolTipTextShadowBlurRadius": 3,
    "toolTipFontWeight": "normal",
    "id": "IconButton_213ED70C_2DB2_E6C5_41B6_0CCE6C77E889",
    "minHeight": 30,
    "toolTipShadowHorizontalLength": 0,
    "toolTipShadowSpread": 0,
    "paddingTop": 0,
    "toolTipShadowColor": "#333333",
    "toolTipShadowBlurRadius": 3,
    "backgroundOpacity": 0,
    "maxWidth": 75,
    "toolTipTextShadowColor": "#000000",
    "toolTipFontFamily": "Arial",
    "toolTipFontColor": "#606060"
   },
   "this.IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED",
   {
    "paddingLeft": 0,
    "toolTipBackgroundColor": "#F6F6F6",
    "paddingRight": 0,
    "verticalAlign": "middle",
    "mode": "push",
    "toolTipPaddingRight": 6,
    "toolTipPaddingBottom": 4,
    "iconURL": "skin/IconButton_2FC9210C_3E8F_C4D4_41A7_10D1404CA49B.png",
    "height": "100%",
    "width": "100%",
    "toolTipTextShadowOpacity": 0,
    "transparencyActive": false,
    "toolTipPaddingTop": 4,
    "borderRadius": 0,
    "toolTipBorderSize": 1,
    "toolTipFontSize": 12,
    "toolTipOpacity": 1,
    "borderSize": 0,
    "toolTipShadowOpacity": 1,
    "toolTipShadowVerticalLength": 0,
    "toolTipPaddingLeft": 6,
    "toolTipBorderColor": "#767676",
    "shadow": false,
    "horizontalAlign": "center",
    "class": "IconButton",
    "toolTipFontStyle": "normal",
    "toolTipBorderRadius": 3,
    "toolTip": "FLoor Plan",
    "cursor": "hand",
    "paddingBottom": 0,
    "maxHeight": 75,
    "minWidth": 30,
    "toolTipTextShadowBlurRadius": 3,
    "toolTipFontWeight": "normal",
    "id": "IconButton_2FC9210C_3E8F_C4D4_41A7_10D1404CA49B",
    "minHeight": 30,
    "toolTipShadowHorizontalLength": 0,
    "toolTipShadowSpread": 0,
    "paddingTop": 0,
    "toolTipShadowColor": "#333333",
    "toolTipShadowBlurRadius": 3,
    "backgroundOpacity": 0,
    "maxWidth": 75,
    "toolTipTextShadowColor": "#000000",
    "toolTipFontFamily": "Arial",
    "toolTipFontColor": "#606060"
   },
   {
    "paddingLeft": 0,
    "toolTipBackgroundColor": "#000000",
    "paddingRight": 0,
    "verticalAlign": "middle",
    "mode": "toggle",
    "toolTipPaddingRight": 6,
    "toolTipPaddingBottom": 4,
    "iconURL": "skin/IconButton_843BBEF5_8E22_690F_419D_28CBDD771ACC.png",
    "height": "100%",
    "width": "100%",
    "toolTipTextShadowOpacity": 0,
    "transparencyActive": true,
    "toolTipPaddingTop": 4,
    "borderRadius": 0,
    "toolTipBorderSize": 1,
    "toolTipFontSize": 12,
    "toolTipOpacity": 0.7,
    "borderSize": 0,
    "toolTipShadowOpacity": 1,
    "toolTipShadowVerticalLength": 0,
    "toolTipPaddingLeft": 6,
    "toolTipBorderColor": "#767676",
    "shadow": false,
    "horizontalAlign": "center",
    "class": "IconButton",
    "toolTipFontStyle": "normal",
    "toolTipBorderRadius": 3,
    "toolTip": "Panorama List",
    "click": "if(!this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472.get('visible')){ this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, true, 0, this.effect_15DDF232_3E91_44CF_41AB_F8C3E6067377, 'showEffect', false) } else if(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472.get('visible')){ this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, false, 0, this.effect_15DDE232_3E91_44CF_41B1_14501B4EC17A, 'hideEffect', false) }",
    "cursor": "hand",
    "paddingBottom": 0,
    "maxHeight": 75,
    "minWidth": 30,
    "toolTipTextShadowBlurRadius": 3,
    "toolTipFontWeight": "normal",
    "id": "IconButton_843BBEF5_8E22_690F_419D_28CBDD771ACC",
    "minHeight": 30,
    "toolTipShadowHorizontalLength": 0,
    "toolTipShadowSpread": 0,
    "paddingTop": 0,
    "toolTipShadowColor": "#333333",
    "toolTipShadowBlurRadius": 3,
    "pressedIconURL": "skin/IconButton_843BBEF5_8E22_690F_419D_28CBDD771ACC_pressed.png",
    "backgroundOpacity": 0,
    "maxWidth": 75,
    "toolTipTextShadowColor": "#000000",
    "toolTipFontFamily": "Arial",
    "toolTipFontColor": "#606060"
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
  "verticalAlign": "middle",
  "width": 500,
  "height": 50,
  "borderRadius": 5,
  "borderSize": 0,
  "gap": 5,
  "contentOpaque": false,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "shadow": false,
  "class": "Container",
  "horizontalAlign": "right",
  "top": "3%",
  "paddingBottom": 0,
  "maxHeight": 55,
  "minWidth": 500,
  "id": "Container_807F782A_8E23_A905_41DE_623121285A09",
  "minHeight": 55,
  "paddingTop": 0,
  "backgroundOpacity": 0,
  "maxWidth": 500,
  "right": "1.5%",
  "children": [
   {
    "layout": "horizontal",
    "paddingLeft": 0,
    "scrollBarColor": "#000000",
    "overflow": "visible",
    "scrollBarOpacity": 0.5,
    "paddingRight": 0,
    "width": 400,
    "height": 55,
    "borderRadius": 0,
    "borderSize": 0,
    "gap": 0,
    "contentOpaque": false,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "shadow": false,
    "class": "Container",
    "horizontalAlign": "right",
    "visible": false,
    "paddingBottom": 0,
    "maxHeight": 55,
    "minWidth": 100,
    "id": "Container_80D3CF90_8E26_E705_41E0_E47025A2C106",
    "minHeight": 55,
    "paddingTop": 0,
    "backgroundOpacity": 0,
    "children": [
     "this.IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37",
     {
      "paddingLeft": 0,
      "toolTipBackgroundColor": "#000000",
      "paddingRight": 0,
      "verticalAlign": "middle",
      "mode": "toggle",
      "toolTipPaddingRight": 6,
      "toolTipPaddingBottom": 4,
      "iconURL": "skin/IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA.png",
      "height": "100%",
      "width": "100%",
      "toolTipTextShadowOpacity": 0,
      "transparencyActive": true,
      "toolTipPaddingTop": 4,
      "borderRadius": 0,
      "toolTipBorderSize": 1,
      "toolTipFontSize": 12,
      "toolTipOpacity": 0.7,
      "borderSize": 0,
      "toolTipShadowOpacity": 1,
      "toolTipShadowVerticalLength": 0,
      "toolTipPaddingLeft": 6,
      "toolTipBorderColor": "#767676",
      "shadow": false,
      "horizontalAlign": "center",
      "class": "IconButton",
      "toolTipFontStyle": "normal",
      "toolTipBorderRadius": 3,
      "toolTip": "Full Screen",
      "click": "if(!this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, true, 0, null, null, false) } else if(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, false, 0, null, null, false) }",
      "cursor": "hand",
      "paddingBottom": 0,
      "maxHeight": 60,
      "minWidth": 1,
      "toolTipTextShadowBlurRadius": 3,
      "toolTipFontWeight": "normal",
      "id": "IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA",
      "minHeight": 1,
      "toolTipShadowHorizontalLength": 0,
      "toolTipShadowSpread": 0,
      "paddingTop": 0,
      "toolTipShadowColor": "#333333",
      "toolTipShadowBlurRadius": 3,
      "pressedIconURL": "skin/IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA_pressed.png",
      "backgroundOpacity": 0,
      "maxWidth": 60,
      "toolTipTextShadowColor": "#000000",
      "toolTipFontFamily": "Arial",
      "toolTipFontColor": "#606060"
     },
     {
      "paddingLeft": 0,
      "toolTipBackgroundColor": "#000000",
      "paddingRight": 0,
      "verticalAlign": "middle",
      "mode": "toggle",
      "toolTipPaddingRight": 6,
      "toolTipPaddingBottom": 4,
      "iconURL": "skin/IconButton_8105A313_8E22_BF0B_41E1_331C6035A930.png",
      "height": "100%",
      "width": "100%",
      "toolTipTextShadowOpacity": 0,
      "transparencyActive": true,
      "toolTipPaddingTop": 4,
      "borderRadius": 0,
      "toolTipBorderSize": 1,
      "toolTipFontSize": 12,
      "toolTipOpacity": 0.7,
      "borderSize": 0,
      "toolTipShadowOpacity": 1,
      "toolTipShadowVerticalLength": 0,
      "toolTipPaddingLeft": 6,
      "toolTipBorderColor": "#767676",
      "shadow": false,
      "horizontalAlign": "center",
      "class": "IconButton",
      "toolTipFontStyle": "normal",
      "toolTipBorderRadius": 3,
      "toolTip": "Audio On/Off",
      "click": "if(!this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, true, 0, this.effect_CACBF85D_EED0_7261_41DB_A3B65ECE0D5D, 'showEffect', false) } else if(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, false, 0, this.effect_CACBC85D_EED0_7261_41BE_8CF4C3A8170C, 'hideEffect', false) }",
      "cursor": "hand",
      "paddingBottom": 0,
      "maxHeight": 60,
      "minWidth": 1,
      "toolTipTextShadowBlurRadius": 3,
      "toolTipFontWeight": "normal",
      "id": "IconButton_8105A313_8E22_BF0B_41E1_331C6035A930",
      "minHeight": 1,
      "toolTipShadowHorizontalLength": 0,
      "toolTipShadowSpread": 0,
      "paddingTop": 0,
      "toolTipShadowColor": "#333333",
      "toolTipShadowBlurRadius": 3,
      "pressedIconURL": "skin/IconButton_8105A313_8E22_BF0B_41E1_331C6035A930_pressed.png",
      "backgroundOpacity": 0,
      "maxWidth": 60,
      "toolTipTextShadowColor": "#000000",
      "toolTipFontFamily": "Arial",
      "toolTipFontColor": "#606060"
     },
     "this.IconButton_80E5955A_8E23_BB05_41CA_43DD61DBAEE9"
    ],
    "verticalAlign": "middle",
    "scrollBarVisible": "rollOver"
   },
   {
    "paddingLeft": 0,
    "toolTipBackgroundColor": "#000000",
    "paddingRight": 0,
    "verticalAlign": "middle",
    "mode": "toggle",
    "toolTipPaddingRight": 6,
    "toolTipPaddingBottom": 4,
    "iconURL": "skin/IconButton_811D89E1_8E3D_AB07_4191_94003C90B2FF.png",
    "height": "100%",
    "width": "100%",
    "toolTipTextShadowOpacity": 0,
    "transparencyActive": true,
    "toolTipPaddingTop": 4,
    "borderRadius": 0,
    "toolTipBorderSize": 1,
    "toolTipFontSize": 12,
    "toolTipOpacity": 0.7,
    "borderSize": 0,
    "toolTipShadowOpacity": 1,
    "toolTipShadowVerticalLength": 0,
    "toolTipPaddingLeft": 6,
    "toolTipBorderColor": "#767676",
    "shadow": false,
    "horizontalAlign": "center",
    "class": "IconButton",
    "toolTipFontStyle": "normal",
    "toolTipBorderRadius": 3,
    "toolTip": "Settings",
    "click": "if(!this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, true, 0, this.effect_32C91197_3F22_3110_4181_9E76B593FBFE, 'showEffect', false) } else if(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, false, 0, this.effect_32C92197_3F22_3110_419D_E2E21968F16F, 'hideEffect', false) }",
    "cursor": "hand",
    "paddingBottom": 0,
    "maxHeight": 55,
    "minWidth": 55,
    "toolTipTextShadowBlurRadius": 3,
    "toolTipFontWeight": "normal",
    "id": "IconButton_811D89E1_8E3D_AB07_4191_94003C90B2FF",
    "minHeight": 55,
    "toolTipShadowHorizontalLength": 0,
    "toolTipShadowSpread": 0,
    "paddingTop": 0,
    "toolTipShadowColor": "#333333",
    "toolTipShadowBlurRadius": 3,
    "backgroundOpacity": 0,
    "maxWidth": 55,
    "toolTipTextShadowColor": "#000000",
    "toolTipFontFamily": "Arial",
    "toolTipFontColor": "#606060"
   }
  ],
  "scrollBarVisible": "rollOver"
 },
 {
  "layout": "vertical",
  "backgroundOpacity": 0.25,
  "backgroundColor": [
   "#000000"
  ],
  "itemBackgroundColorRatios": [],
  "itemLabelFontFamily": "Arial",
  "paddingRight": 5,
  "itemThumbnailHeight": 70,
  "gap": 5,
  "selectedItemBackgroundColor": [],
  "scrollBarWidth": 7,
  "scrollBarMargin": 4,
  "shadow": false,
  "horizontalAlign": "left",
  "itemHorizontalAlign": "center",
  "class": "ThumbnailList",
  "playList": "this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist",
  "itemMode": "normal",
  "selectedItemLabelFontStyle": "italic",
  "itemLabelFontColor": "#FFFFFF",
  "rollOverItemLabelFontColor": "#FFFFFF",
  "backgroundColorRatios": [
   0
  ],
  "paddingBottom": 5,
  "selectedItemThumbnailShadowVerticalLength": 0,
  "rollOverItemLabelFontWeight": "bold",
  "itemPaddingBottom": 3,
  "paddingTop": 5,
  "selectedItemLabelFontColor": "#FFFFFF",
  "itemThumbnailOpacity": 1,
  "itemThumbnailScaleMode": "fit_outside",
  "selectedItemLabelTextDecoration": "underline",
  "maxWidth": 100,
  "itemLabelFontWeight": "normal",
  "itemThumbnailShadow": false,
  "rollOverItemLabelTextDecoration": "underline",
  "backgroundColorDirection": "vertical",
  "itemThumbnailBorderRadius": 25,
  "scrollBarOpacity": 1,
  "itemLabelTextDecoration": "none",
  "scrollBarVisible": "rollOver",
  "selectedItemThumbnailShadowHorizontalLength": 0,
  "width": 120,
  "scrollBarColor": "#52B7EF",
  "itemLabelFontStyle": "normal",
  "itemPaddingRight": 3,
  "itemThumbnailWidth": 70,
  "borderRadius": 3,
  "selectedItemThumbnailShadow": true,
  "itemLabelHorizontalAlign": "center",
  "itemPaddingLeft": 3,
  "selectedItemLabelFontSize": 12,
  "borderSize": 0,
  "itemBorderRadius": 0,
  "selectedItemThumbnailShadowBlurRadius": 10,
  "selectedItemThumbnailShadowOpacity": 0.73,
  "selectedItemBorderSize": 0,
  "itemPaddingTop": 3,
  "selectedItemBorderRadius": 0,
  "top": "15%",
  "itemVerticalAlign": "middle",
  "minWidth": 90,
  "itemBackgroundOpacity": 0,
  "bottom": "15%",
  "id": "ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472",
  "selectedItemBackgroundColorRatios": [],
  "itemLabelGap": 9,
  "selectedItemLabelFontWeight": "bold",
  "minHeight": 100,
  "itemOpacity": 1,
  "itemBackgroundColor": [],
  "itemLabelFontSize": 12,
  "selectedItemBackgroundOpacity": 0,
  "itemLabelPosition": "bottom",
  "paddingLeft": 5,
  "itemBackgroundColorDirection": "vertical",
  "right": "1.5%",
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
  "height": "100%",
  "width": "100%",
  "borderRadius": 0,
  "borderSize": 0,
  "contentOpaque": false,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "shadow": false,
  "horizontalAlign": "left",
  "class": "Container",
  "top": "0%",
  "visible": false,
  "paddingBottom": 0,
  "minWidth": 1,
  "backgroundColorRatios": [
   0,
   1
  ],
  "id": "Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB",
  "gap": 10,
  "minHeight": 1,
  "paddingTop": 0,
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
  "paddingRight": 0,
  "verticalAlign": "middle",
  "mode": "push",
  "iconURL": "skin/IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB.png",
  "height": "5.482%",
  "width": "3.03%",
  "transparencyActive": true,
  "borderRadius": 0,
  "borderSize": 0,
  "rollOverIconURL": "skin/IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB_rollover.png",
  "shadow": false,
  "horizontalAlign": "center",
  "class": "IconButton",
  "top": "2%",
  "cursor": "hand",
  "visible": false,
  "paddingBottom": 0,
  "maxHeight": 50,
  "minWidth": 50,
  "id": "IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB",
  "minHeight": 50,
  "paddingTop": 0,
  "backgroundOpacity": 0,
  "maxWidth": 50,
  "right": "2%"
 },
 {
  "paddingLeft": 0,
  "backgroundColorDirection": "vertical",
  "paddingRight": 0,
  "backgroundColor": [
   "#000000"
  ],
  "borderRadius": 0,
  "borderSize": 0,
  "showEffect": {
   "easing": "cubic_in_out",
   "duration": 350,
   "class": "FadeInEffect"
  },
  "shadow": false,
  "class": "UIComponent",
  "top": 0,
  "visible": false,
  "paddingBottom": 0,
  "minWidth": 0,
  "bottom": 0,
  "id": "veilPopupPanorama",
  "minHeight": 0,
  "backgroundColorRatios": [
   0
  ],
  "paddingTop": 0,
  "left": 0,
  "backgroundOpacity": 0.55,
  "right": 0
 },
 {
  "paddingLeft": 0,
  "backgroundColorDirection": "vertical",
  "paddingRight": 0,
  "backgroundColor": [],
  "borderRadius": 0,
  "borderSize": 0,
  "scaleMode": "custom",
  "shadow": false,
  "class": "ZoomImage",
  "top": 0,
  "visible": false,
  "paddingBottom": 0,
  "minWidth": 0,
  "bottom": 0,
  "id": "zoomImagePopupPanorama",
  "minHeight": 0,
  "backgroundColorRatios": [],
  "paddingTop": 0,
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
  "borderRadius": 0,
  "iconBeforeLabel": true,
  "iconWidth": 20,
  "borderSize": 0,
  "showEffect": {
   "easing": "cubic_in_out",
   "duration": 350,
   "class": "FadeInEffect"
  },
  "shadow": false,
  "horizontalAlign": "center",
  "fontColor": "#FFFFFF",
  "class": "CloseButton",
  "top": 10,
  "fontWeight": "normal",
  "visible": false,
  "paddingBottom": 5,
  "borderColor": "#000000",
  "minWidth": 0,
  "cursor": "hand",
  "backgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "id": "closeButtonPopupPanorama",
  "fontFamily": "Arial",
  "minHeight": 0,
  "iconLineWidth": 5,
  "shadowColor": "#000000",
  "paddingTop": 5,
  "pressedIconColor": "#888888",
  "fontStyle": "normal",
  "rollOverIconColor": "#666666",
  "shadowBlurRadius": 6,
  "shadowSpread": 1,
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
 "height": "100%",
 "width": "100%",
 "borderRadius": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "shadow": false,
 "horizontalAlign": "left",
 "buttonToggleMute": "this.IconButton_8105A313_8E22_BF0B_41E1_331C6035A930",
 "class": "Player",
 "backgroundPreloadEnabled": true,
 "paddingBottom": 0,
 "minWidth": 20,
 "scripts": {
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "registerKey": function(key, value){  window[key] = value; },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "unregisterKey": function(key){  delete window[key]; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getKey": function(key){  return window[key]; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio) delete audios[audio.get('id')]; } if(audio) audio.stop(); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "existsKey": function(key){  return key in window; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } }
 },
 "vrPolyfillScale": 0.5,
 "id": "rootPlayer",
 "gap": 10,
 "minHeight": 20,
 "paddingTop": 0,
 "start": "this.playAudioList([this.audio_15B68E59_3D54_1663_4199_CC0245D4ECA1]); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37], 'cardboardAvailable'); this.syncPlaylists([this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA].forEach(function(component) { component.set('visible', false); }) }",
 "verticalAlign": "top",
 "buttonToggleFullscreen": "this.IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA",
 "scrollBarVisible": "rollOver"
})