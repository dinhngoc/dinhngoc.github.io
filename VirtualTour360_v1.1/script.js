TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "viewerArea": "this.MainViewer",
  "id": "MainViewerVideoPlayer",
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
    "class": "IconButton",
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
    "rollOverIconURL": "skin/IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4_rollover.png",
    "right": "2%"
   },
   "this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB"
  ],
  "displayPlaybackBar": true,
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
   "class": "IconButton",
   "borderRadius": 0,
   "horizontalAlign": "center",
   "minWidth": 25,
   "click": "this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, true, 0, this.effect_98AADBB0_96C5_F0C5_41B2_1C4D08E503DB, 'showEffect', false); this.playList_56100FCA_4255_C7DC_41AD_A616AD378777.set('selectedIndex', 0)",
   "toolTipTextShadowBlurRadius": 3,
   "toolTipOpacity": 0.7,
   "toolTipShadowVerticalLength": 0,
   "toolTipPaddingBottom": 4,
   "maxWidth": 70,
   "shadow": false,
   "minHeight": 25,
   "cursor": "hand",
   "paddingBottom": 0,
   "toolTipFontSize": 14,
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
  "class": "VideoPlayer"
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
   "class": "ViewerArea",
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
   "toolTipFontSize": 14,
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
   "playbackBarHeadShadowHorizontalLength": 0,
   "transitionMode": "blending",
   "paddingTop": 0,
   "progressHeight": 10,
   "playbackBarBorderRadius": 0,
   "playbackBarProgressBorderColor": "#000000",
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
   "playbackBarHeadShadowVerticalLength": 0,
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
  "id": "ViewerAreaLabeled_9FD7235A_96CD_9045_41D9_23A3BCBDB1C6PhotoAlbumPlayer",
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
   "class": "IconButton",
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
   "rollOverIconURL": "skin/IconButton_9FEA51EA_96CC_905A_41D3_F42DB0CD0A74_rollover.png"
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
   "class": "IconButton",
   "borderRadius": 0,
   "horizontalAlign": "center",
   "minWidth": 60,
   "maxWidth": 70,
   "top": "40%",
   "minHeight": 60,
   "cursor": "hand",
   "paddingBottom": 0,
   "shadow": false,
   "bottom": "40%",
   "id": "IconButton_9FB9BD3F_96C5_703B_41D7_65AEE6E85A96",
   "backgroundOpacity": 0,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_9FB9BD3F_96C5_703B_41D7_65AEE6E85A96_rollover.png",
   "right": "1%"
  },
  "buttonPlay": "this.IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED",
  "buttonStop": [
   "this.IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4",
   "this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB"
  ],
  "class": "PhotoAlbumPlayer"
 },
 {
  "hfovMax": 120,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_4DEBC1BC_411E_B0BA_41C2_8D75AEE4E70B_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "maps": [
       {
        "hfov": 15.91,
        "yaw": 1.79,
        "image": {
         "levels": [
          {
           "height": 30,
           "width": 30,
           "url": "media/panorama_4DEBC1BC_411E_B0BA_41C2_8D75AEE4E70B_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -19.43
       }
      ],
      "enabledInCardboard": true,
      "useHandCursor": true,
      "id": "overlay_4DEBA1BC_411E_B0BA_41AA_8B5E6319F164",
      "areas": [
       {
        "toolTip": "Entrance",
        "click": "this.startPanoramaWithCamera(this.panorama_4D1613E3_4119_90CE_41CC_DF7832021B96, this.camera_513B03AF_4255_D853_41C8_53CD4A2D64AA); this.mainPlayList.set('selectedIndex', 1)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "displayTooltipInTouchScreens": true
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "yaw": 1.79,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 15.91,
        "image": {
         "levels": [
          {
           "height": 60,
           "width": 60,
           "url": "media/panorama_4DEBC1BC_411E_B0BA_41C2_8D75AEE4E70B_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -19.43
       }
      ]
     },
     {
      "rollOverDisplay": true,
      "maps": [
       {
        "hfov": 0,
        "yaw": -159.78,
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
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 94.51
       }
      ],
      "enabledInCardboard": true,
      "useHandCursor": true,
      "id": "overlay_4DEA61BC_411E_B0BA_41C2_95BA4BBA7507",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_4C068664_4127_93CA_41A2_D07233B3A2AF, this.camera_51E9A3EC_4255_DFD4_41BC_DC6468AC39EC); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 5); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 8); this.mainPlayList.set('selectedIndex', 9)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "yaw": -159.78,
        "class": "HotspotPanoramaOverlayImage",
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
  "pitch": 0,
  "thumbnailUrl": "media/panorama_4DEBC1BC_411E_B0BA_41C2_8D75AEE4E70B_t.jpg",
  "id": "panorama_4DEBC1BC_411E_B0BA_41C2_8D75AEE4E70B",
  "hfovMin": 60,
  "label": "Street View",
  "class": "Panorama",
  "partial": false,
  "hfov": 360,
  "adjacentPanoramas": [
   {
    "distance": 1,
    "panorama": {
     "hfovMax": 120,
     "frames": [
      {
       "thumbnailUrl": "media/panorama_4C63FF21_4126_914D_41B9_FA0A4C032B16_t.jpg",
       "overlays": [
        {
         "rollOverDisplay": false,
         "maps": [
          {
           "hfov": 13.57,
           "yaw": -133.33,
           "image": {
            "levels": [
             {
              "height": 74,
              "width": 74,
              "url": "media/panorama_4C63FF21_4126_914D_41B9_FA0A4C032B16_0_HS_0_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -41.09
          }
         ],
         "enabledInCardboard": true,
         "useHandCursor": true,
         "id": "overlay_58319CDD_4169_90F5_41C3_F4620B57D94B",
         "areas": [
          {
           "toolTip": "Bed Room",
           "click": "this.startPanoramaWithCamera(this.panorama_4C068664_4127_93CA_41A2_D07233B3A2AF, this.camera_50EC3063_4255_D8D3_4181_16DF20D625E3); this.mainPlayList.set('selectedIndex', 8)",
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "displayTooltipInTouchScreens": true
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "items": [
          {
           "yaw": -133.33,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 13.57,
           "image": {
            "levels": [
             {
              "height": 149,
              "width": 149,
              "url": "media/panorama_4C63FF21_4126_914D_41B9_FA0A4C032B16_0_HS_0_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -41.09
          }
         ]
        },
        {
         "rollOverDisplay": true,
         "maps": [
          {
           "hfov": 0,
           "yaw": -162.92,
           "image": {
            "levels": [
             {
              "height": 1,
              "width": 1,
              "url": "media/panorama_4C63FF21_4126_914D_41B9_FA0A4C032B16_0_HS_1_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayMap",
           "pitch": 80.2
          }
         ],
         "enabledInCardboard": true,
         "useHandCursor": true,
         "id": "overlay_5A57E675_416F_93CA_41CF_A4FEA76323D0",
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_4DEBC1BC_411E_B0BA_41C2_8D75AEE4E70B, this.camera_50E6E063_4255_D8D3_41D0_0AE53BB4B0C0); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 5); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 9)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "class": "HotspotPanoramaOverlay",
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
              "url": "media/panorama_4C63FF21_4126_914D_41B9_FA0A4C032B16_0_HS_1_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": 80.2
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
          "url": "media/panorama_4C63FF21_4126_914D_41B9_FA0A4C032B16_hq.jpeg",
          "class": "ImageResourceLevel"
         }
        ],
        "class": "ImageResource"
       }
      }
     ],
     "pitch": 0,
     "thumbnailUrl": "media/panorama_4C63FF21_4126_914D_41B9_FA0A4C032B16_t.jpg",
     "id": "panorama_4C63FF21_4126_914D_41B9_FA0A4C032B16",
     "hfovMin": 60,
     "label": "WC",
     "class": "Panorama",
     "partial": false,
     "hfov": 360,
     "adjacentPanoramas": [
      {
       "distance": 1,
       "panorama": {
        "hfovMax": 120,
        "frames": [
         {
          "thumbnailUrl": "media/panorama_4C09B820_411A_9F4A_418C_3401DFC19214_t.jpg",
          "overlays": [
           {
            "rollOverDisplay": false,
            "maps": [
             {
              "hfov": 13.63,
              "yaw": -108.24,
              "image": {
               "levels": [
                {
                 "height": 30,
                 "width": 30,
                 "url": "media/panorama_4C09B820_411A_9F4A_418C_3401DFC19214_0_HS_0_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -36.11
             }
            ],
            "enabledInCardboard": true,
            "useHandCursor": true,
            "id": "overlay_4C09A820_411A_9F4A_41CC_F59D0360722B",
            "areas": [
             {
              "toolTip": "Living Room",
              "click": "this.startPanoramaWithCamera(this.panorama_4C0707C9_4119_90DD_41C2_22B8691226F2, this.camera_50B34099_4255_D87C_41CE_83CDF9082B91); this.mainPlayList.set('selectedIndex', 5)",
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "displayTooltipInTouchScreens": true
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "items": [
             {
              "yaw": -108.24,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 13.63,
              "image": {
               "levels": [
                {
                 "height": 60,
                 "width": 60,
                 "url": "media/panorama_4C09B820_411A_9F4A_418C_3401DFC19214_0_HS_0_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -36.11
             }
            ]
           },
           {
            "rollOverDisplay": true,
            "maps": [
             {
              "hfov": 0,
              "yaw": -169.59,
              "image": {
               "levels": [
                {
                 "height": 1,
                 "width": 1,
                 "url": "media/panorama_4C09B820_411A_9F4A_418C_3401DFC19214_0_HS_5_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "class": "HotspotPanoramaOverlayMap",
              "pitch": 91.13
             }
            ],
            "enabledInCardboard": true,
            "useHandCursor": true,
            "id": "overlay_54E61023_4179_AF4E_41BC_0445381678F4",
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_4C068664_4127_93CA_41A2_D07233B3A2AF, this.camera_5171B0D9_4255_D9FC_41B1_5885E6CB5911); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 8); this.mainPlayList.set('selectedIndex', 9)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "items": [
             {
              "yaw": -169.59,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 0,
              "image": {
               "levels": [
                {
                 "height": 1,
                 "width": 1,
                 "url": "media/panorama_4C09B820_411A_9F4A_418C_3401DFC19214_0_HS_5_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": 91.13
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
        "pitch": 0,
        "thumbnailUrl": "media/panorama_4C09B820_411A_9F4A_418C_3401DFC19214_t.jpg",
        "id": "panorama_4C09B820_411A_9F4A_418C_3401DFC19214",
        "hfovMin": 60,
        "label": "Roof Top",
        "class": "Panorama",
        "partial": false,
        "hfov": 360,
        "adjacentPanoramas": [
         {
          "distance": 1,
          "panorama": "this.panorama_4C63FF21_4126_914D_41B9_FA0A4C032B16",
          "yaw": -169.59,
          "class": "AdjacentPanorama",
          "backwardYaw": -162.92
         },
         {
          "distance": 1,
          "panorama": {
           "hfovMax": 120,
           "frames": [
            {
             "thumbnailUrl": "media/panorama_4D1613E3_4119_90CE_41CC_DF7832021B96_t.jpg",
             "overlays": [
              {
               "rollOverDisplay": false,
               "maps": [
                {
                 "hfov": 16.68,
                 "yaw": -12.94,
                 "image": {
                  "levels": [
                   {
                    "height": 30,
                    "width": 30,
                    "url": "media/panorama_4D1613E3_4119_90CE_41CC_DF7832021B96_0_HS_0_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -8.75
                }
               ],
               "enabledInCardboard": true,
               "useHandCursor": true,
               "id": "overlay_4D1603E3_4119_90CE_41C1_00D48FCCCA41",
               "areas": [
                {
                 "toolTip": "Swimming Pool",
                 "click": "this.startPanoramaWithCamera(this.panorama_4C046DCD_411A_B0DA_41CD_92ADD7E360C8, this.camera_513C70FD_4255_D9B4_41C6_BE213491D681); this.mainPlayList.set('selectedIndex', 2)",
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "displayTooltipInTouchScreens": true
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "items": [
                {
                 "yaw": -12.94,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 16.68,
                 "image": {
                  "levels": [
                   {
                    "height": 60,
                    "width": 60,
                    "url": "media/panorama_4D1613E3_4119_90CE_41CC_DF7832021B96_0_HS_0_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -8.75
                }
               ]
              },
              {
               "rollOverDisplay": false,
               "maps": [
                {
                 "hfov": 10.9,
                 "yaw": 70.03,
                 "image": {
                  "levels": [
                   {
                    "height": 30,
                    "width": 30,
                    "url": "media/panorama_4D1613E3_4119_90CE_41CC_DF7832021B96_0_HS_5_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -49.78
                }
               ],
               "enabledInCardboard": true,
               "useHandCursor": true,
               "id": "overlay_566281A6_4217_673D_41C4_B6181D3CABDE",
               "areas": [
                {
                 "toolTip": "Street View",
                 "click": "this.startPanoramaWithCamera(this.panorama_4DEBC1BC_411E_B0BA_41C2_8D75AEE4E70B, this.camera_51C1811C_4255_D875_4191_5F02A6C037C4); this.mainPlayList.set('selectedIndex', 0)",
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "displayTooltipInTouchScreens": true
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "items": [
                {
                 "yaw": 70.03,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 10.9,
                 "image": {
                  "levels": [
                   {
                    "height": 60,
                    "width": 60,
                    "url": "media/panorama_4D1613E3_4119_90CE_41CC_DF7832021B96_0_HS_5_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -49.78
                }
               ]
              },
              {
               "rollOverDisplay": true,
               "maps": [
                {
                 "hfov": 0,
                 "yaw": -171.93,
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
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": 97.03
                }
               ],
               "enabledInCardboard": true,
               "useHandCursor": true,
               "id": "overlay_4D11E3E3_4119_90CE_41AC_D4FCB2474918",
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_4C068664_4127_93CA_41A2_D07233B3A2AF, this.camera_51F4D13C_4255_D8B4_41CB_5AA0BA4C2695); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 5); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 8); this.mainPlayList.set('selectedIndex', 9)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "items": [
                {
                 "yaw": -171.93,
                 "class": "HotspotPanoramaOverlayImage",
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
           "pitch": 0,
           "thumbnailUrl": "media/panorama_4D1613E3_4119_90CE_41CC_DF7832021B96_t.jpg",
           "id": "panorama_4D1613E3_4119_90CE_41CC_DF7832021B96",
           "hfovMin": 60,
           "label": "Entrance",
           "class": "Panorama",
           "partial": false,
           "hfov": 360,
           "adjacentPanoramas": [
            {
             "distance": 1,
             "panorama": "this.panorama_4C63FF21_4126_914D_41B9_FA0A4C032B16",
             "yaw": -171.93,
             "class": "AdjacentPanorama",
             "backwardYaw": -162.92
            },
            {
             "distance": 1,
             "panorama": "this.panorama_4C09B820_411A_9F4A_418C_3401DFC19214",
             "yaw": -171.93,
             "class": "AdjacentPanorama",
             "backwardYaw": -169.59
            },
            {
             "distance": 1,
             "panorama": {
              "hfovMax": 120,
              "frames": [
               {
                "thumbnailUrl": "media/panorama_4C5FDE04_4126_734A_41CC_218B1F932217_t.jpg",
                "overlays": [
                 {
                  "rollOverDisplay": false,
                  "maps": [
                   {
                    "hfov": 24.57,
                    "yaw": 85.73,
                    "image": {
                     "levels": [
                      {
                       "height": 74,
                       "width": 74,
                       "url": "media/panorama_4C5FDE04_4126_734A_41CC_218B1F932217_0_HS_0_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -24.49
                   }
                  ],
                  "enabledInCardboard": true,
                  "useHandCursor": true,
                  "id": "overlay_5D00EDD9_4119_90FD_41C3_E09552F1A551",
                  "areas": [
                   {
                    "toolTip": "Bed Room",
                    "click": "this.startPanoramaWithCamera(this.panorama_4C068664_4127_93CA_41A2_D07233B3A2AF, this.camera_567521E6_4255_DBD5_41CD_31D55329117B); this.mainPlayList.set('selectedIndex', 8)",
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "displayTooltipInTouchScreens": true
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "items": [
                   {
                    "yaw": 85.73,
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 24.57,
                    "image": {
                     "levels": [
                      {
                       "height": 149,
                       "width": 149,
                       "url": "media/panorama_4C5FDE04_4126_734A_41CC_218B1F932217_0_HS_0_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -24.49
                   }
                  ]
                 },
                 {
                  "rollOverDisplay": true,
                  "maps": [
                   {
                    "hfov": 0,
                    "yaw": -172.21,
                    "image": {
                     "levels": [
                      {
                       "height": 1,
                       "width": 1,
                       "url": "media/panorama_4C5FDE04_4126_734A_41CC_218B1F932217_0_HS_1_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": 81.71
                   }
                  ],
                  "enabledInCardboard": true,
                  "useHandCursor": true,
                  "id": "overlay_5CF8495D_411B_91F5_41CC_9ED13A5D2046",
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_4DEBC1BC_411E_B0BA_41C2_8D75AEE4E70B, this.camera_564441D2_4255_DBCC_41BF_91EE7BB8D07D); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 5); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 7)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
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
                       "url": "media/panorama_4C5FDE04_4126_734A_41CC_218B1F932217_0_HS_1_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": 81.71
                   }
                  ]
                 }
                ],
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
              "pitch": 0,
              "thumbnailUrl": "media/panorama_4C5FDE04_4126_734A_41CC_218B1F932217_t.jpg",
              "id": "panorama_4C5FDE04_4126_734A_41CC_218B1F932217",
              "hfovMin": 60,
              "label": "Double Beds Room",
              "class": "Panorama",
              "partial": false,
              "hfov": 360,
              "adjacentPanoramas": [
               {
                "distance": 1,
                "panorama": "this.panorama_4C63FF21_4126_914D_41B9_FA0A4C032B16",
                "yaw": -172.21,
                "class": "AdjacentPanorama",
                "backwardYaw": -162.92
               },
               {
                "distance": 1,
                "panorama": "this.panorama_4C09B820_411A_9F4A_418C_3401DFC19214",
                "yaw": -172.21,
                "class": "AdjacentPanorama",
                "backwardYaw": -169.59
               },
               {
                "distance": 1,
                "panorama": "this.panorama_4D1613E3_4119_90CE_41CC_DF7832021B96",
                "yaw": -172.21,
                "class": "AdjacentPanorama",
                "backwardYaw": -171.93
               },
               {
                "distance": 1,
                "panorama": {
                 "hfovMax": 120,
                 "frames": [
                  {
                   "thumbnailUrl": "media/panorama_4C0707C9_4119_90DD_41C2_22B8691226F2_t.jpg",
                   "overlays": [
                    {
                     "rollOverDisplay": false,
                     "maps": [
                      {
                       "hfov": 14.78,
                       "yaw": 13.65,
                       "image": {
                        "levels": [
                         {
                          "height": 74,
                          "width": 74,
                          "url": "media/panorama_4C0707C9_4119_90DD_41C2_22B8691226F2_0_HS_0_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -34.81
                      }
                     ],
                     "enabledInCardboard": true,
                     "useHandCursor": true,
                     "id": "overlay_4C0737C9_4119_90DD_419A_AE2A022FED96",
                     "areas": [
                      {
                       "toolTip": "Master Room",
                       "click": "this.startPanoramaWithCamera(this.panorama_4C1BD32D_4126_915A_41CF_10469E86A717, this.camera_56221238_4255_D8BC_41C5_88DC3FAB62FE); this.mainPlayList.set('selectedIndex', 6)",
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea",
                       "displayTooltipInTouchScreens": true
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "items": [
                      {
                       "yaw": 13.65,
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 14.78,
                       "image": {
                        "levels": [
                         {
                          "height": 149,
                          "width": 149,
                          "url": "media/panorama_4C0707C9_4119_90DD_41C2_22B8691226F2_0_HS_0_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -34.81
                      }
                     ]
                    },
                    {
                     "rollOverDisplay": true,
                     "maps": [
                      {
                       "hfov": 0,
                       "yaw": -167.69,
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
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": 86.48
                      }
                     ],
                     "enabledInCardboard": true,
                     "useHandCursor": true,
                     "id": "overlay_4C0727D0_4119_90CA_41CF_9F09FB3AFB60",
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_4C068664_4127_93CA_41A2_D07233B3A2AF, this.camera_56F7F256_4255_D8F5_41B2_6EC534C38D5A); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 8); this.mainPlayList.set('selectedIndex', 9)",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "items": [
                      {
                       "yaw": -167.69,
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 0,
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
                       "pitch": 86.48
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
                 "pitch": 0,
                 "thumbnailUrl": "media/panorama_4C0707C9_4119_90DD_41C2_22B8691226F2_t.jpg",
                 "id": "panorama_4C0707C9_4119_90DD_41C2_22B8691226F2",
                 "hfovMin": 60,
                 "label": "Living Room",
                 "class": "Panorama",
                 "partial": false,
                 "hfov": 360,
                 "adjacentPanoramas": [
                  {
                   "distance": 1,
                   "panorama": "this.panorama_4C63FF21_4126_914D_41B9_FA0A4C032B16",
                   "yaw": -167.69,
                   "class": "AdjacentPanorama",
                   "backwardYaw": -162.92
                  },
                  {
                   "distance": 1,
                   "panorama": "this.panorama_4C09B820_411A_9F4A_418C_3401DFC19214",
                   "yaw": -167.69,
                   "class": "AdjacentPanorama",
                   "backwardYaw": -108.24
                  },
                  {
                   "distance": 1,
                   "panorama": "this.panorama_4D1613E3_4119_90CE_41CC_DF7832021B96",
                   "yaw": -167.69,
                   "class": "AdjacentPanorama",
                   "backwardYaw": -171.93
                  },
                  {
                   "distance": 1,
                   "panorama": "this.panorama_4C5FDE04_4126_734A_41CC_218B1F932217",
                   "yaw": -167.69,
                   "class": "AdjacentPanorama",
                   "backwardYaw": -172.21
                  },
                  {
                   "distance": 1,
                   "panorama": {
                    "hfovMax": 120,
                    "frames": [
                     {
                      "thumbnailUrl": "media/panorama_4C046DCD_411A_B0DA_41CD_92ADD7E360C8_t.jpg",
                      "overlays": [
                       {
                        "rollOverDisplay": false,
                        "maps": [
                         {
                          "hfov": 13.83,
                          "yaw": 85.53,
                          "image": {
                           "levels": [
                            {
                             "height": 30,
                             "width": 30,
                             "url": "media/panorama_4C046DCD_411A_B0DA_41CD_92ADD7E360C8_0_HS_0_0_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": -34.99
                         }
                        ],
                        "enabledInCardboard": true,
                        "useHandCursor": true,
                        "id": "overlay_4C047DCD_411A_B0DA_41CC_338A0B5A8E7B",
                        "areas": [
                         {
                          "toolTip": "Master Balcony",
                          "click": "this.startPanoramaWithCamera(this.panorama_4C597F40_411B_91CA_41B3_3FEECDEB1412, this.camera_50DC12C6_4255_D9D5_41A7_3A71329DF844); this.mainPlayList.set('selectedIndex', 3)",
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea",
                          "displayTooltipInTouchScreens": true
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "items": [
                         {
                          "yaw": 85.53,
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 13.83,
                          "image": {
                           "levels": [
                            {
                             "height": 60,
                             "width": 60,
                             "url": "media/panorama_4C046DCD_411A_B0DA_41CD_92ADD7E360C8_0_HS_0_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -34.99
                         }
                        ]
                       },
                       {
                        "rollOverDisplay": true,
                        "maps": [
                         {
                          "hfov": 0,
                          "yaw": -162.42,
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
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": 95.93
                         }
                        ],
                        "enabledInCardboard": true,
                        "useHandCursor": true,
                        "id": "overlay_4C044DCD_411A_B0DA_41C9_57A3E5C6891B",
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_4C068664_4127_93CA_41A2_D07233B3A2AF, this.camera_50C212DB_4255_D9FC_41C7_4000C646430D); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 5); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 8); this.mainPlayList.set('selectedIndex', 9)",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "items": [
                         {
                          "yaw": -162.42,
                          "class": "HotspotPanoramaOverlayImage",
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
                          "pitch": 95.93
                         }
                        ]
                       },
                       {
                        "rollOverDisplay": false,
                        "maps": [
                         {
                          "hfov": 16.2,
                          "yaw": 89.16,
                          "image": {
                           "levels": [
                            {
                             "height": 30,
                             "width": 30,
                             "url": "media/panorama_4C046DCD_411A_B0DA_41CD_92ADD7E360C8_0_HS_5_0_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": -16.31
                         }
                        ],
                        "enabledInCardboard": true,
                        "useHandCursor": true,
                        "id": "overlay_568FC7DF_420F_AB0B_41B0_6D811D202177",
                        "areas": [
                         {
                          "toolTip": "Entrance",
                          "click": "this.startPanoramaWithCamera(this.panorama_4D1613E3_4119_90CE_41CC_DF7832021B96, this.camera_569E8275_4255_D8B4_41C0_1894482E4BBF); this.mainPlayList.set('selectedIndex', 1)",
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea",
                          "displayTooltipInTouchScreens": true
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "items": [
                         {
                          "yaw": 89.16,
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 16.2,
                          "image": {
                           "levels": [
                            {
                             "height": 60,
                             "width": 60,
                             "url": "media/panorama_4C046DCD_411A_B0DA_41CD_92ADD7E360C8_0_HS_5_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -16.31
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
                    "pitch": 0,
                    "thumbnailUrl": "media/panorama_4C046DCD_411A_B0DA_41CD_92ADD7E360C8_t.jpg",
                    "id": "panorama_4C046DCD_411A_B0DA_41CD_92ADD7E360C8",
                    "hfovMin": 60,
                    "label": "Swimming Pool",
                    "class": "Panorama",
                    "partial": false,
                    "hfov": 360,
                    "adjacentPanoramas": [
                     {
                      "distance": 1,
                      "panorama": "this.panorama_4C63FF21_4126_914D_41B9_FA0A4C032B16",
                      "yaw": -162.42,
                      "class": "AdjacentPanorama",
                      "backwardYaw": -162.92
                     },
                     {
                      "distance": 1,
                      "panorama": "this.panorama_4C09B820_411A_9F4A_418C_3401DFC19214",
                      "yaw": -162.42,
                      "class": "AdjacentPanorama",
                      "backwardYaw": -169.59
                     },
                     {
                      "distance": 1,
                      "panorama": "this.panorama_4D1613E3_4119_90CE_41CC_DF7832021B96",
                      "yaw": 89.16,
                      "class": "AdjacentPanorama",
                      "backwardYaw": -12.94
                     },
                     {
                      "distance": 1,
                      "panorama": "this.panorama_4C5FDE04_4126_734A_41CC_218B1F932217",
                      "yaw": -162.42,
                      "class": "AdjacentPanorama",
                      "backwardYaw": -172.21
                     },
                     {
                      "distance": 1,
                      "panorama": "this.panorama_4C0707C9_4119_90DD_41C2_22B8691226F2",
                      "yaw": -162.42,
                      "class": "AdjacentPanorama",
                      "backwardYaw": -167.69
                     },
                     {
                      "distance": 1,
                      "panorama": {
                       "hfovMax": 120,
                       "frames": [
                        {
                         "thumbnailUrl": "media/panorama_4C1BD32D_4126_915A_41CF_10469E86A717_t.jpg",
                         "overlays": [
                          {
                           "rollOverDisplay": false,
                           "maps": [
                            {
                             "hfov": 15.38,
                             "yaw": 63.89,
                             "image": {
                              "levels": [
                               {
                                "height": 74,
                                "width": 74,
                                "url": "media/panorama_4C1BD32D_4126_915A_41CF_10469E86A717_0_HS_0_0_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": -31.3
                            }
                           ],
                           "enabledInCardboard": true,
                           "useHandCursor": true,
                           "id": "overlay_56B4E471_4166_B7CD_41AC_8EFD6E00D471",
                           "areas": [
                            {
                             "toolTip": "WC",
                             "click": "this.startPanoramaWithCamera(this.panorama_4C63FF21_4126_914D_41B9_FA0A4C032B16, this.camera_50CC12E5_4255_D9D4_41C8_F1EEAF4F5C18); this.mainPlayList.set('selectedIndex', 7)",
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea",
                             "displayTooltipInTouchScreens": true
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "items": [
                            {
                             "yaw": 63.89,
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 15.38,
                             "image": {
                              "levels": [
                               {
                                "height": 149,
                                "width": 149,
                                "url": "media/panorama_4C1BD32D_4126_915A_41CF_10469E86A717_0_HS_0_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -31.3
                            }
                           ]
                          },
                          {
                           "rollOverDisplay": true,
                           "maps": [
                            {
                             "hfov": 0,
                             "yaw": -162.92,
                             "image": {
                              "levels": [
                               {
                                "height": 1,
                                "width": 1,
                                "url": "media/panorama_4C1BD32D_4126_915A_41CF_10469E86A717_0_HS_1_0_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": 76.94
                            }
                           ],
                           "enabledInCardboard": true,
                           "useHandCursor": true,
                           "id": "overlay_59030146_4166_91D6_41CD_C4AD0DEB2297",
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_4C068664_4127_93CA_41A2_D07233B3A2AF, this.camera_50841335_4255_D8B4_41AD_7725E14A2423); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 5); this.mainPlayList.set('selectedIndex', 8); this.mainPlayList.set('selectedIndex', 9)",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
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
                                "url": "media/panorama_4C1BD32D_4126_915A_41CF_10469E86A717_0_HS_1_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": 76.94
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
                            "url": "media/panorama_4C1BD32D_4126_915A_41CF_10469E86A717_hq.jpeg",
                            "class": "ImageResourceLevel"
                           }
                          ],
                          "class": "ImageResource"
                         }
                        }
                       ],
                       "pitch": 0,
                       "thumbnailUrl": "media/panorama_4C1BD32D_4126_915A_41CF_10469E86A717_t.jpg",
                       "id": "panorama_4C1BD32D_4126_915A_41CF_10469E86A717",
                       "hfovMin": 60,
                       "label": "Master Room",
                       "class": "Panorama",
                       "partial": false,
                       "hfov": 360,
                       "adjacentPanoramas": [
                        {
                         "distance": 1,
                         "panorama": "this.panorama_4C63FF21_4126_914D_41B9_FA0A4C032B16",
                         "yaw": 63.89,
                         "class": "AdjacentPanorama",
                         "backwardYaw": -162.92
                        },
                        {
                         "distance": 1,
                         "panorama": "this.panorama_4C09B820_411A_9F4A_418C_3401DFC19214",
                         "yaw": -162.92,
                         "class": "AdjacentPanorama",
                         "backwardYaw": -169.59
                        },
                        {
                         "distance": 1,
                         "panorama": "this.panorama_4D1613E3_4119_90CE_41CC_DF7832021B96",
                         "yaw": -162.92,
                         "class": "AdjacentPanorama",
                         "backwardYaw": -171.93
                        },
                        {
                         "distance": 1,
                         "panorama": "this.panorama_4C5FDE04_4126_734A_41CC_218B1F932217",
                         "yaw": -162.92,
                         "class": "AdjacentPanorama",
                         "backwardYaw": -172.21
                        },
                        {
                         "distance": 1,
                         "panorama": "this.panorama_4C0707C9_4119_90DD_41C2_22B8691226F2",
                         "yaw": -162.92,
                         "class": "AdjacentPanorama",
                         "backwardYaw": 13.65
                        },
                        {
                         "distance": 1,
                         "panorama": "this.panorama_4C046DCD_411A_B0DA_41CD_92ADD7E360C8",
                         "yaw": -162.92,
                         "class": "AdjacentPanorama",
                         "backwardYaw": -162.42
                        },
                        {
                         "distance": 1,
                         "panorama": {
                          "hfovMax": 120,
                          "frames": [
                           {
                            "thumbnailUrl": "media/panorama_4C597F40_411B_91CA_41B3_3FEECDEB1412_t.jpg",
                            "overlays": [
                             {
                              "rollOverDisplay": false,
                              "maps": [
                               {
                                "hfov": 8.97,
                                "yaw": 88.61,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 30,
                                   "width": 30,
                                   "url": "media/panorama_4C597F40_411B_91CA_41B3_3FEECDEB1412_0_HS_0_0_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": -57.9
                               }
                              ],
                              "enabledInCardboard": true,
                              "useHandCursor": true,
                              "id": "overlay_4C596F40_411B_91CA_41C6_B66A9F50A105",
                              "areas": [
                               {
                                "toolTip": "Roof Top",
                                "click": "this.startPanoramaWithCamera(this.panorama_4C09B820_411A_9F4A_418C_3401DFC19214, this.camera_50B0234A_4255_D8DC_41AD_572668E96EB3); this.mainPlayList.set('selectedIndex', 4)",
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea",
                                "displayTooltipInTouchScreens": true
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "items": [
                               {
                                "yaw": 88.61,
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 8.97,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 60,
                                   "width": 60,
                                   "url": "media/panorama_4C597F40_411B_91CA_41B3_3FEECDEB1412_0_HS_0_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": -57.9
                               }
                              ]
                             },
                             {
                              "rollOverDisplay": true,
                              "maps": [
                               {
                                "hfov": 0,
                                "yaw": -164.04,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 1,
                                   "width": 1,
                                   "url": "media/panorama_4C597F40_411B_91CA_41B3_3FEECDEB1412_0_HS_1_0_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": 89.55
                               }
                              ],
                              "enabledInCardboard": true,
                              "useHandCursor": true,
                              "id": "overlay_4C593F40_411B_91CA_41C5_23B2BACF2F7B",
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_4C068664_4127_93CA_41A2_D07233B3A2AF, this.camera_5114F391_4255_D84C_41C0_143FBF57E4D9); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 5); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 8); this.mainPlayList.set('selectedIndex', 9)",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "items": [
                               {
                                "yaw": -164.04,
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 0,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 1,
                                   "width": 1,
                                   "url": "media/panorama_4C597F40_411B_91CA_41B3_3FEECDEB1412_0_HS_1_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": 89.55
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
                          "pitch": 0,
                          "thumbnailUrl": "media/panorama_4C597F40_411B_91CA_41B3_3FEECDEB1412_t.jpg",
                          "id": "panorama_4C597F40_411B_91CA_41B3_3FEECDEB1412",
                          "hfovMin": 60,
                          "label": "Master Balcony",
                          "class": "Panorama",
                          "partial": false,
                          "hfov": 360,
                          "adjacentPanoramas": [
                           {
                            "distance": 1,
                            "panorama": "this.panorama_4C63FF21_4126_914D_41B9_FA0A4C032B16",
                            "yaw": -164.04,
                            "class": "AdjacentPanorama",
                            "backwardYaw": -162.92
                           },
                           {
                            "distance": 1,
                            "panorama": "this.panorama_4C09B820_411A_9F4A_418C_3401DFC19214",
                            "yaw": 88.61,
                            "class": "AdjacentPanorama",
                            "backwardYaw": -169.59
                           },
                           {
                            "distance": 1,
                            "panorama": "this.panorama_4D1613E3_4119_90CE_41CC_DF7832021B96",
                            "yaw": -164.04,
                            "class": "AdjacentPanorama",
                            "backwardYaw": -171.93
                           },
                           {
                            "distance": 1,
                            "panorama": "this.panorama_4C5FDE04_4126_734A_41CC_218B1F932217",
                            "yaw": -164.04,
                            "class": "AdjacentPanorama",
                            "backwardYaw": -172.21
                           },
                           {
                            "distance": 1,
                            "panorama": "this.panorama_4C0707C9_4119_90DD_41C2_22B8691226F2",
                            "yaw": -164.04,
                            "class": "AdjacentPanorama",
                            "backwardYaw": -167.69
                           },
                           {
                            "distance": 1,
                            "panorama": "this.panorama_4C046DCD_411A_B0DA_41CD_92ADD7E360C8",
                            "yaw": -164.04,
                            "class": "AdjacentPanorama",
                            "backwardYaw": 85.53
                           },
                           {
                            "distance": 1,
                            "panorama": "this.panorama_4C1BD32D_4126_915A_41CF_10469E86A717",
                            "yaw": -164.04,
                            "class": "AdjacentPanorama",
                            "backwardYaw": -162.92
                           },
                           {
                            "distance": 1,
                            "panorama": "this.panorama_4DEBC1BC_411E_B0BA_41C2_8D75AEE4E70B",
                            "yaw": -164.04,
                            "class": "AdjacentPanorama",
                            "backwardYaw": -159.78
                           },
                           {
                            "distance": 1,
                            "panorama": {
                             "hfovMax": 120,
                             "frames": [
                              {
                               "thumbnailUrl": "media/panorama_4C068664_4127_93CA_41A2_D07233B3A2AF_t.jpg",
                               "overlays": [
                                {
                                 "rollOverDisplay": false,
                                 "maps": [
                                  {
                                   "hfov": 14.36,
                                   "yaw": 81.23,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 74,
                                      "width": 74,
                                      "url": "media/panorama_4C068664_4127_93CA_41A2_D07233B3A2AF_0_HS_0_0_0_map.gif",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": -37.07
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "useHandCursor": true,
                                 "id": "overlay_5B8E9A3B_411A_73BC_41C5_0ED42A574E99",
                                 "areas": [
                                  {
                                   "toolTip": "Double Beds Room",
                                   "click": "this.startPanoramaWithCamera(this.panorama_4C5FDE04_4126_734A_41CC_218B1F932217, this.camera_51A24412_4255_D84D_41AB_5EE75793C7C3); this.mainPlayList.set('selectedIndex', 9)",
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea",
                                   "displayTooltipInTouchScreens": true
                                  }
                                 ],
                                 "class": "HotspotPanoramaOverlay",
                                 "items": [
                                  {
                                   "yaw": 81.23,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 14.36,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 149,
                                      "width": 149,
                                      "url": "media/panorama_4C068664_4127_93CA_41A2_D07233B3A2AF_0_HS_0_0.png",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": -37.07
                                  }
                                 ]
                                },
                                {
                                 "rollOverDisplay": true,
                                 "maps": [
                                  {
                                   "hfov": 0,
                                   "yaw": -170.2,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 1,
                                      "width": 1,
                                      "url": "media/panorama_4C068664_4127_93CA_41A2_D07233B3A2AF_0_HS_1_0_0_map.gif",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": 81.21
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "useHandCursor": true,
                                 "id": "overlay_5AB597AD_4119_915A_41D0_1E9920DC79B5",
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_4DEBC1BC_411E_B0BA_41C2_8D75AEE4E70B, this.camera_566DC44F_4255_D8D3_417A_866EEAB5944D); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 5); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 7)",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "class": "HotspotPanoramaOverlay",
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
                                      "url": "media/panorama_4C068664_4127_93CA_41A2_D07233B3A2AF_0_HS_1_0.png",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": 81.21
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
                                  "url": "media/panorama_4C068664_4127_93CA_41A2_D07233B3A2AF_hq.jpeg",
                                  "class": "ImageResourceLevel"
                                 }
                                ],
                                "class": "ImageResource"
                               }
                              }
                             ],
                             "pitch": 0,
                             "thumbnailUrl": "media/panorama_4C068664_4127_93CA_41A2_D07233B3A2AF_t.jpg",
                             "id": "panorama_4C068664_4127_93CA_41A2_D07233B3A2AF",
                             "hfovMin": 60,
                             "label": "Bed Room",
                             "class": "Panorama",
                             "partial": false,
                             "hfov": 360,
                             "adjacentPanoramas": [
                              {
                               "distance": 1,
                               "panorama": "this.panorama_4C63FF21_4126_914D_41B9_FA0A4C032B16",
                               "yaw": -170.2,
                               "class": "AdjacentPanorama",
                               "backwardYaw": -133.33
                              },
                              {
                               "distance": 1,
                               "panorama": "this.panorama_4C09B820_411A_9F4A_418C_3401DFC19214",
                               "yaw": -170.2,
                               "class": "AdjacentPanorama",
                               "backwardYaw": -169.59
                              },
                              {
                               "distance": 1,
                               "panorama": "this.panorama_4D1613E3_4119_90CE_41CC_DF7832021B96",
                               "yaw": -170.2,
                               "class": "AdjacentPanorama",
                               "backwardYaw": -171.93
                              },
                              {
                               "distance": 1,
                               "panorama": "this.panorama_4C5FDE04_4126_734A_41CC_218B1F932217",
                               "yaw": 81.23,
                               "class": "AdjacentPanorama",
                               "backwardYaw": 85.73
                              },
                              {
                               "distance": 1,
                               "panorama": "this.panorama_4C0707C9_4119_90DD_41C2_22B8691226F2",
                               "yaw": -170.2,
                               "class": "AdjacentPanorama",
                               "backwardYaw": -167.69
                              },
                              {
                               "distance": 1,
                               "panorama": "this.panorama_4C046DCD_411A_B0DA_41CD_92ADD7E360C8",
                               "yaw": -170.2,
                               "class": "AdjacentPanorama",
                               "backwardYaw": -162.42
                              },
                              {
                               "distance": 1,
                               "panorama": "this.panorama_4C1BD32D_4126_915A_41CF_10469E86A717",
                               "yaw": -170.2,
                               "class": "AdjacentPanorama",
                               "backwardYaw": -162.92
                              },
                              {
                               "distance": 1,
                               "panorama": "this.panorama_4C597F40_411B_91CA_41B3_3FEECDEB1412",
                               "yaw": -170.2,
                               "class": "AdjacentPanorama",
                               "backwardYaw": -164.04
                              },
                              {
                               "distance": 1,
                               "panorama": "this.panorama_4DEBC1BC_411E_B0BA_41C2_8D75AEE4E70B",
                               "yaw": -170.2,
                               "class": "AdjacentPanorama",
                               "backwardYaw": -159.78
                              }
                             ],
                             "vfov": 180
                            },
                            "yaw": -164.04,
                            "class": "AdjacentPanorama",
                            "backwardYaw": -170.2
                           }
                          ],
                          "vfov": 180
                         },
                         "yaw": -162.92,
                         "class": "AdjacentPanorama",
                         "backwardYaw": -164.04
                        },
                        {
                         "distance": 1,
                         "panorama": "this.panorama_4DEBC1BC_411E_B0BA_41C2_8D75AEE4E70B",
                         "yaw": -162.92,
                         "class": "AdjacentPanorama",
                         "backwardYaw": -159.78
                        },
                        {
                         "distance": 1,
                         "panorama": "this.panorama_4C068664_4127_93CA_41A2_D07233B3A2AF",
                         "yaw": -162.92,
                         "class": "AdjacentPanorama",
                         "backwardYaw": -170.2
                        }
                       ],
                       "vfov": 180
                      },
                      "yaw": -162.42,
                      "class": "AdjacentPanorama",
                      "backwardYaw": -162.92
                     },
                     {
                      "distance": 1,
                      "panorama": "this.panorama_4C597F40_411B_91CA_41B3_3FEECDEB1412",
                      "yaw": 85.53,
                      "class": "AdjacentPanorama",
                      "backwardYaw": -164.04
                     },
                     {
                      "distance": 1,
                      "panorama": "this.panorama_4DEBC1BC_411E_B0BA_41C2_8D75AEE4E70B",
                      "yaw": -162.42,
                      "class": "AdjacentPanorama",
                      "backwardYaw": -159.78
                     },
                     {
                      "distance": 1,
                      "panorama": "this.panorama_4C068664_4127_93CA_41A2_D07233B3A2AF",
                      "yaw": -162.42,
                      "class": "AdjacentPanorama",
                      "backwardYaw": -170.2
                     }
                    ],
                    "vfov": 180
                   },
                   "yaw": -167.69,
                   "class": "AdjacentPanorama",
                   "backwardYaw": -162.42
                  },
                  {
                   "distance": 1,
                   "panorama": "this.panorama_4C1BD32D_4126_915A_41CF_10469E86A717",
                   "yaw": 13.65,
                   "class": "AdjacentPanorama",
                   "backwardYaw": -162.92
                  },
                  {
                   "distance": 1,
                   "panorama": "this.panorama_4C597F40_411B_91CA_41B3_3FEECDEB1412",
                   "yaw": -167.69,
                   "class": "AdjacentPanorama",
                   "backwardYaw": -164.04
                  },
                  {
                   "distance": 1,
                   "panorama": "this.panorama_4DEBC1BC_411E_B0BA_41C2_8D75AEE4E70B",
                   "yaw": -167.69,
                   "class": "AdjacentPanorama",
                   "backwardYaw": -159.78
                  },
                  {
                   "distance": 1,
                   "panorama": "this.panorama_4C068664_4127_93CA_41A2_D07233B3A2AF",
                   "yaw": -167.69,
                   "class": "AdjacentPanorama",
                   "backwardYaw": -170.2
                  }
                 ],
                 "vfov": 180
                },
                "yaw": -172.21,
                "class": "AdjacentPanorama",
                "backwardYaw": -167.69
               },
               {
                "distance": 1,
                "panorama": "this.panorama_4C046DCD_411A_B0DA_41CD_92ADD7E360C8",
                "yaw": -172.21,
                "class": "AdjacentPanorama",
                "backwardYaw": -162.42
               },
               {
                "distance": 1,
                "panorama": "this.panorama_4C1BD32D_4126_915A_41CF_10469E86A717",
                "yaw": -172.21,
                "class": "AdjacentPanorama",
                "backwardYaw": -162.92
               },
               {
                "distance": 1,
                "panorama": "this.panorama_4C597F40_411B_91CA_41B3_3FEECDEB1412",
                "yaw": -172.21,
                "class": "AdjacentPanorama",
                "backwardYaw": -164.04
               },
               {
                "distance": 1,
                "panorama": "this.panorama_4DEBC1BC_411E_B0BA_41C2_8D75AEE4E70B",
                "yaw": -172.21,
                "class": "AdjacentPanorama",
                "backwardYaw": -159.78
               },
               {
                "distance": 1,
                "panorama": "this.panorama_4C068664_4127_93CA_41A2_D07233B3A2AF",
                "yaw": 85.73,
                "class": "AdjacentPanorama",
                "backwardYaw": 81.23
               }
              ],
              "vfov": 180
             },
             "yaw": -171.93,
             "class": "AdjacentPanorama",
             "backwardYaw": -172.21
            },
            {
             "distance": 1,
             "panorama": "this.panorama_4C0707C9_4119_90DD_41C2_22B8691226F2",
             "yaw": -171.93,
             "class": "AdjacentPanorama",
             "backwardYaw": -167.69
            },
            {
             "distance": 1,
             "panorama": "this.panorama_4C046DCD_411A_B0DA_41CD_92ADD7E360C8",
             "yaw": -12.94,
             "class": "AdjacentPanorama",
             "backwardYaw": 89.16
            },
            {
             "distance": 1,
             "panorama": "this.panorama_4C1BD32D_4126_915A_41CF_10469E86A717",
             "yaw": -171.93,
             "class": "AdjacentPanorama",
             "backwardYaw": -162.92
            },
            {
             "distance": 1,
             "panorama": "this.panorama_4C597F40_411B_91CA_41B3_3FEECDEB1412",
             "yaw": -171.93,
             "class": "AdjacentPanorama",
             "backwardYaw": -164.04
            },
            {
             "distance": 1,
             "panorama": "this.panorama_4DEBC1BC_411E_B0BA_41C2_8D75AEE4E70B",
             "yaw": 70.03,
             "class": "AdjacentPanorama",
             "backwardYaw": 1.79
            },
            {
             "distance": 1,
             "panorama": "this.panorama_4C068664_4127_93CA_41A2_D07233B3A2AF",
             "yaw": -171.93,
             "class": "AdjacentPanorama",
             "backwardYaw": -170.2
            }
           ],
           "vfov": 180
          },
          "yaw": -169.59,
          "class": "AdjacentPanorama",
          "backwardYaw": -171.93
         },
         {
          "distance": 1,
          "panorama": "this.panorama_4C5FDE04_4126_734A_41CC_218B1F932217",
          "yaw": -169.59,
          "class": "AdjacentPanorama",
          "backwardYaw": -172.21
         },
         {
          "distance": 1,
          "panorama": "this.panorama_4C0707C9_4119_90DD_41C2_22B8691226F2",
          "yaw": -108.24,
          "class": "AdjacentPanorama",
          "backwardYaw": -167.69
         },
         {
          "distance": 1,
          "panorama": "this.panorama_4C046DCD_411A_B0DA_41CD_92ADD7E360C8",
          "yaw": -169.59,
          "class": "AdjacentPanorama",
          "backwardYaw": -162.42
         },
         {
          "distance": 1,
          "panorama": "this.panorama_4C1BD32D_4126_915A_41CF_10469E86A717",
          "yaw": -169.59,
          "class": "AdjacentPanorama",
          "backwardYaw": -162.92
         },
         {
          "distance": 1,
          "panorama": "this.panorama_4C597F40_411B_91CA_41B3_3FEECDEB1412",
          "yaw": -169.59,
          "class": "AdjacentPanorama",
          "backwardYaw": 88.61
         },
         {
          "distance": 1,
          "panorama": "this.panorama_4DEBC1BC_411E_B0BA_41C2_8D75AEE4E70B",
          "yaw": -169.59,
          "class": "AdjacentPanorama",
          "backwardYaw": -159.78
         },
         {
          "distance": 1,
          "panorama": "this.panorama_4C068664_4127_93CA_41A2_D07233B3A2AF",
          "yaw": -169.59,
          "class": "AdjacentPanorama",
          "backwardYaw": -170.2
         }
        ],
        "vfov": 180
       },
       "yaw": -162.92,
       "class": "AdjacentPanorama",
       "backwardYaw": -169.59
      },
      {
       "distance": 1,
       "panorama": "this.panorama_4D1613E3_4119_90CE_41CC_DF7832021B96",
       "yaw": -162.92,
       "class": "AdjacentPanorama",
       "backwardYaw": -171.93
      },
      {
       "distance": 1,
       "panorama": "this.panorama_4C5FDE04_4126_734A_41CC_218B1F932217",
       "yaw": -162.92,
       "class": "AdjacentPanorama",
       "backwardYaw": -172.21
      },
      {
       "distance": 1,
       "panorama": "this.panorama_4C0707C9_4119_90DD_41C2_22B8691226F2",
       "yaw": -162.92,
       "class": "AdjacentPanorama",
       "backwardYaw": -167.69
      },
      {
       "distance": 1,
       "panorama": "this.panorama_4C046DCD_411A_B0DA_41CD_92ADD7E360C8",
       "yaw": -162.92,
       "class": "AdjacentPanorama",
       "backwardYaw": -162.42
      },
      {
       "distance": 1,
       "panorama": "this.panorama_4C1BD32D_4126_915A_41CF_10469E86A717",
       "yaw": -162.92,
       "class": "AdjacentPanorama",
       "backwardYaw": 63.89
      },
      {
       "distance": 1,
       "panorama": "this.panorama_4C597F40_411B_91CA_41B3_3FEECDEB1412",
       "yaw": -162.92,
       "class": "AdjacentPanorama",
       "backwardYaw": -164.04
      },
      {
       "distance": 1,
       "panorama": "this.panorama_4DEBC1BC_411E_B0BA_41C2_8D75AEE4E70B",
       "yaw": -162.92,
       "class": "AdjacentPanorama",
       "backwardYaw": -159.78
      },
      {
       "distance": 1,
       "panorama": "this.panorama_4C068664_4127_93CA_41A2_D07233B3A2AF",
       "yaw": -133.33,
       "class": "AdjacentPanorama",
       "backwardYaw": -170.2
      }
     ],
     "vfov": 180
    },
    "yaw": -159.78,
    "class": "AdjacentPanorama",
    "backwardYaw": -162.92
   },
   {
    "distance": 1,
    "panorama": "this.panorama_4C09B820_411A_9F4A_418C_3401DFC19214",
    "yaw": -159.78,
    "class": "AdjacentPanorama",
    "backwardYaw": -169.59
   },
   {
    "distance": 1,
    "panorama": "this.panorama_4D1613E3_4119_90CE_41CC_DF7832021B96",
    "yaw": 1.79,
    "class": "AdjacentPanorama",
    "backwardYaw": 70.03
   },
   {
    "distance": 1,
    "panorama": "this.panorama_4C5FDE04_4126_734A_41CC_218B1F932217",
    "yaw": -159.78,
    "class": "AdjacentPanorama",
    "backwardYaw": -172.21
   },
   {
    "distance": 1,
    "panorama": "this.panorama_4C0707C9_4119_90DD_41C2_22B8691226F2",
    "yaw": -159.78,
    "class": "AdjacentPanorama",
    "backwardYaw": -167.69
   },
   {
    "distance": 1,
    "panorama": "this.panorama_4C046DCD_411A_B0DA_41CD_92ADD7E360C8",
    "yaw": -159.78,
    "class": "AdjacentPanorama",
    "backwardYaw": -162.42
   },
   {
    "distance": 1,
    "panorama": "this.panorama_4C1BD32D_4126_915A_41CF_10469E86A717",
    "yaw": -159.78,
    "class": "AdjacentPanorama",
    "backwardYaw": -162.92
   },
   {
    "distance": 1,
    "panorama": "this.panorama_4C597F40_411B_91CA_41B3_3FEECDEB1412",
    "yaw": -159.78,
    "class": "AdjacentPanorama",
    "backwardYaw": -164.04
   },
   {
    "distance": 1,
    "panorama": "this.panorama_4C068664_4127_93CA_41A2_D07233B3A2AF",
    "yaw": -159.78,
    "class": "AdjacentPanorama",
    "backwardYaw": -170.2
   }
  ],
  "vfov": 180
 },
 {
  "gyroscopeVerticalDraggingEnabled": true,
  "touchControlMode": "drag_rotation",
  "buttonPlay": "this.IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED",
  "displayPlaybackBar": true,
  "class": "PanoramaPlayer",
  "viewerArea": "this.MainViewer",
  "id": "MainViewerPanoramaPlayer",
  "preloadEnabled": false,
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
   "class": "IconButton",
   "borderRadius": 0,
   "horizontalAlign": "center",
   "pressedIconURL": "skin/IconButton_80E5955A_8E23_BB05_41CA_43DD61DBAEE9_pressed.png",
   "minWidth": 1,
   "click": "if(!this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, true, 0, this.effect_CDD059FA_EED0_D223_41DB_70ACFBE986FE, 'showEffect', false) } else if(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, false, 0, this.effect_CDD049FB_EED0_D221_41EB_CA2134B978E0, 'hideEffect', false) }",
   "toolTipTextShadowBlurRadius": 3,
   "toolTipOpacity": 0.7,
   "toolTipShadowVerticalLength": 0,
   "toolTipPaddingBottom": 4,
   "maxWidth": 60,
   "shadow": false,
   "minHeight": 1,
   "cursor": "hand",
   "paddingBottom": 0,
   "toolTipFontSize": 14,
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
  "mouseControlMode": "drag_acceleration",
  "buttonStop": [
   "this.IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4",
   "this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB"
  ],
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
   "borderSize": 0,
   "class": "IconButton",
   "borderRadius": 0,
   "horizontalAlign": "center",
   "minWidth": 1,
   "maxWidth": 60,
   "shadow": false,
   "minHeight": 1,
   "cursor": "hand",
   "paddingBottom": 0,
   "id": "IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37",
   "backgroundOpacity": 0,
   "paddingTop": 0
  }
 },
 {
  "id": "panorama_4DEBC1BC_411E_B0BA_41C2_8D75AEE4E70B_camera",
  "initialPosition": {
   "yaw": -17.16,
   "class": "PanoramaCameraPosition",
   "pitch": -3.97
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
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
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
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
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
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
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
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
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
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
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 "this.panorama_4C1BD32D_4126_915A_41CF_10469E86A717",
 {
  "id": "panorama_4C1BD32D_4126_915A_41CF_10469E86A717_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 "this.panorama_4C63FF21_4126_914D_41B9_FA0A4C032B16",
 {
  "id": "panorama_4C63FF21_4126_914D_41B9_FA0A4C032B16_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 "this.panorama_4C068664_4127_93CA_41A2_D07233B3A2AF",
 {
  "id": "panorama_4C068664_4127_93CA_41A2_D07233B3A2AF_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 "this.panorama_4C5FDE04_4126_734A_41CC_218B1F932217",
 {
  "id": "panorama_4C5FDE04_4126_734A_41CC_218B1F932217_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
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
  "class": "Video",
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
  "scaleMode": "fit_outside"
 },
 {
  "id": "playList_5610BFCA_4255_C7DC_41A2_C8D36EEE20A1",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.registerKey('visibility_Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB', this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB.get('visible')); this.registerKey('visibility_ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472', this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472.get('visible')); this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setComponentVisibility(this.Container_86F3A56C_8E22_5B1D_41CA_9CE53436FE56, false, -1, this.effect_22973FB1_2DD9_0423_41C1_E1E03953DCCE, 'hideEffect', false); this.setComponentVisibility(this.Container_807F782A_8E23_A905_41DE_623121285A09, false, -1, this.effect_22974FB2_2DD9_0421_41BA_84205292D043, 'hideEffect', false); this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, false, -1, this.effect_3876CD6E_2DF9_0421_41C1_F0AB7F279824, 'hideEffect', false); this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, false, -1, this.effect_22899FB3_2DD9_0427_41BB_298AEB3D2851, 'hideEffect', false); this.setComponentVisibility(this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB, true, -1, this.effect_2289DFB3_2DD9_0427_41AE_A35795880BA7, 'showEffect', false)",
    "media": "this.video_210B394E_3D54_1A60_41A3_CB42BEC0D3EC",
    "end": "this.setComponentVisibility(this.Container_86F3A56C_8E22_5B1D_41CA_9CE53436FE56, true, -1, this.effect_22975FB2_2DD9_0421_41B4_7A2443082F44, 'showEffect', false); this.setComponentVisibility(this.Container_86F3A56C_8E22_5B1D_41CA_9CE53436FE56, true, -1, this.effect_22975FB2_2DD9_0421_41B4_7A2443082F44, 'showEffect', false); this.setComponentVisibility(this.Container_807F782A_8E23_A905_41DE_623121285A09, true, -1, this.effect_22977FB2_2DD9_0421_41C1_F53B037346DF, 'showEffect', false); this.setComponentVisibility(this.Container_807F782A_8E23_A905_41DE_623121285A09, true, -1, this.effect_22977FB2_2DD9_0421_41C1_F53B037346DF, 'showEffect', false); if(this.existsKey('visibility_ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472')){ if(this.getKey('visibility_ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472')) { this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, true, -1, this.effect_56025451_4255_D8CF_41AE_B743ADC2950D, 'showEffect', false); } else { this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, false, -1, this.effect_3876CD6E_2DF9_0421_41C1_F0AB7F279824, 'hideEffect', false); } }; this.unregisterKey('visibility_ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472'); if(this.existsKey('visibility_Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB')){ if(this.getKey('visibility_Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB')) { this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, true, -1, this.effect_56018451_4255_D8CF_419E_E60714523D8A, 'showEffect', false); } else { this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, false, -1, this.effect_22899FB3_2DD9_0427_41BB_298AEB3D2851, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB'); this.setComponentVisibility(this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB, false, -1, this.effect_2289EFB3_2DD9_0427_41C0_ACB5A72AE218, 'hideEffect', false); this.setComponentVisibility(this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB, false, -1, this.effect_2289EFB3_2DD9_0427_41C0_ACB5A72AE218, 'hideEffect', false)",
    "player": "this.MainViewerVideoPlayer",
    "class": "VideoPlayListItem",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_5610BFCA_4255_C7DC_41A2_C8D36EEE20A1, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_5610BFCA_4255_C7DC_41A2_C8D36EEE20A1, 0, this.video_210B394E_3D54_1A60_41A3_CB42BEC0D3EC)"
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
     "media": {
      "thumbnailUrl": "media/photo_25EB8F3B_3D54_3627_41C1_FA6C2C76D85C_t.jpg",
      "duration": 5000,
      "label": "DJI_0355",
      "class": "Photo",
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
     "class": "PhotoPlayListItem",
     "camera": {
      "easing": "linear",
      "scaleMode": "fit_outside",
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
      "duration": 5000,
      "class": "MovementPhotoCamera"
     }
    },
    {
     "media": {
      "thumbnailUrl": "media/photo_2537233E_3D54_0E20_41B8_95E46BC1EC07_t.jpg",
      "duration": 5000,
      "label": "DJI_0364",
      "class": "Photo",
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
     "class": "PhotoPlayListItem",
     "camera": {
      "easing": "linear",
      "scaleMode": "fit_outside",
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
      "duration": 5000,
      "class": "MovementPhotoCamera"
     }
    },
    {
     "media": {
      "thumbnailUrl": "media/photo_25363697_3D54_16EF_41C7_78CA5BF042D8_t.jpg",
      "duration": 5000,
      "label": "DJI_0369",
      "class": "Photo",
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
     "class": "PhotoPlayListItem",
     "camera": {
      "easing": "linear",
      "scaleMode": "fit_outside",
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
      "duration": 5000,
      "class": "MovementPhotoCamera"
     }
    },
    {
     "media": {
      "thumbnailUrl": "media/photo_2536FA03_3D54_19E7_41C9_9A86E77D5C4C_t.jpg",
      "duration": 5000,
      "label": "DJI_0388",
      "class": "Photo",
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
     "class": "PhotoPlayListItem",
     "camera": {
      "easing": "linear",
      "scaleMode": "fit_outside",
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
      "duration": 5000,
      "class": "MovementPhotoCamera"
     }
    },
    {
     "media": {
      "thumbnailUrl": "media/photo_25365DAF_3D54_1A3F_41C9_6122F3F568B7_t.jpg",
      "duration": 5000,
      "label": "DJI_0402",
      "class": "Photo",
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
     "class": "PhotoPlayListItem",
     "camera": {
      "easing": "linear",
      "scaleMode": "fit_outside",
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
      "duration": 5000,
      "class": "MovementPhotoCamera"
     }
    },
    {
     "media": {
      "thumbnailUrl": "media/photo_2536E107_3D54_0BE0_41C7_237D79278EAE_t.jpg",
      "duration": 5000,
      "label": "DJI_0405",
      "class": "Photo",
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
     "class": "PhotoPlayListItem",
     "camera": {
      "easing": "linear",
      "scaleMode": "fit_outside",
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
      "duration": 5000,
      "class": "MovementPhotoCamera"
     }
    },
    {
     "media": {
      "thumbnailUrl": "media/photo_25361460_3D54_0A21_41C5_9CEF516D0083_t.jpg",
      "duration": 5000,
      "label": "DJI_0415",
      "class": "Photo",
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
     "class": "PhotoPlayListItem",
     "camera": {
      "easing": "linear",
      "scaleMode": "fit_outside",
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
      "duration": 5000,
      "class": "MovementPhotoCamera"
     }
    },
    {
     "media": {
      "thumbnailUrl": "media/photo_2536E7CB_3D54_F667_41C8_0C74E4EA5879_t.jpg",
      "duration": 5000,
      "label": "DJI_0441",
      "class": "Photo",
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
     "class": "PhotoPlayListItem",
     "camera": {
      "easing": "linear",
      "scaleMode": "fit_outside",
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
  "id": "playList_56100FCA_4255_C7DC_41AD_A616AD378777",
  "class": "PlayList",
  "items": [
   {
    "player": "this.ViewerAreaLabeled_9FD7235A_96CD_9045_41D9_23A3BCBDB1C6PhotoAlbumPlayer",
    "media": "this.album_1AE8DEB7_0EE7_8CC7_4198_F5B75788CCF6",
    "class": "PhotoAlbumPlayListItem",
    "begin": "this.loopAlbum(this.playList_56100FCA_4255_C7DC_41AD_A616AD378777, 0)"
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
  "duration": 500,
  "class": "FadeInEffect"
 },
 {
  "easing": "cubic_out",
  "id": "FadeOutEffect_8ED06F70_96C4_F045_41DA_C74400CF7B15",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 {
  "easing": "linear",
  "id": "effect_98AADBB0_96C5_F0C5_41B2_1C4D08E503DB",
  "duration": 200,
  "class": "FadeInEffect"
 },
 {
  "easing": "linear",
  "id": "effect_15DDF232_3E91_44CF_41AB_F8C3E6067377",
  "duration": 400,
  "class": "FadeInEffect"
 },
 {
  "easing": "linear",
  "id": "effect_15DDE232_3E91_44CF_41B1_14501B4EC17A",
  "duration": 400,
  "class": "FadeOutEffect"
 },
 {
  "easing": "linear",
  "id": "effect_CACBF85D_EED0_7261_41DB_A3B65ECE0D5D",
  "duration": 200,
  "class": "FadeInEffect"
 },
 {
  "easing": "linear",
  "id": "effect_CACBC85D_EED0_7261_41BE_8CF4C3A8170C",
  "duration": 200,
  "class": "FadeOutEffect"
 },
 {
  "easing": "linear",
  "id": "effect_CDD059FA_EED0_D223_41DB_70ACFBE986FE",
  "duration": 200,
  "class": "FadeInEffect"
 },
 {
  "easing": "linear",
  "id": "effect_CDD049FB_EED0_D221_41EB_CA2134B978E0",
  "duration": 200,
  "class": "FadeOutEffect"
 },
 {
  "easing": "linear",
  "id": "effect_32C91197_3F22_3110_4181_9E76B593FBFE",
  "duration": 400,
  "class": "FadeInEffect"
 },
 {
  "easing": "linear",
  "id": "effect_32C92197_3F22_3110_419D_E2E21968F16F",
  "duration": 400,
  "class": "FadeOutEffect"
 },
 {
  "easing": "linear",
  "id": "effect_9B0AF4E2_96C4_F045_41D3_0E00FEE03A15",
  "duration": 200,
  "class": "FadeOutEffect"
 },
 {
  "id": "camera_5027701E_4255_D875_41C5_C210AEEE28C4",
  "initialPosition": {
   "yaw": 10.41,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_502E501E_4255_D875_41C1_D0C1059D4889",
  "initialPosition": {
   "yaw": 8.07,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_50D40035_4255_D8B4_41A7_D51835B342A6",
  "initialPosition": {
   "yaw": 7.79,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_50DBD035_4255_D8B4_41C4_139150E688F8",
  "initialPosition": {
   "yaw": 12.31,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_50C1F044_4255_D8D4_41D0_8885379A85B0",
  "initialPosition": {
   "yaw": 17.58,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_50C97044_4255_D8D4_41C8_2BFF4E50455D",
  "initialPosition": {
   "yaw": -116.11,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_50FF5054_4255_D8F4_41B5_DC480B21F896",
  "initialPosition": {
   "yaw": 15.96,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_50E6E063_4255_D8D3_41D0_0AE53BB4B0C0",
  "initialPosition": {
   "yaw": 20.22,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_50EC3063_4255_D8D3_4181_16DF20D625E3",
  "initialPosition": {
   "yaw": 9.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_50921073_4255_D8CC_41A3_A7F823BB8704",
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_50988083_4255_D84C_419F_ED66BAB2BB10",
  "initialPosition": {
   "yaw": 8.07,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_508D1092_4255_D84D_41AE_B51C0C123C68",
  "initialPosition": {
   "yaw": 7.79,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_50B34099_4255_D87C_41CE_83CDF9082B91",
  "initialPosition": {
   "yaw": 12.31,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_50A5B0A8_4255_D85D_4176_9E7C3DED6C92",
  "initialPosition": {
   "yaw": 17.58,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_50A9A0A8_4255_D85D_41C4_BB8CC82B0F28",
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_515BB0BC_4255_D9B4_4167_0A50B9D16F6F",
  "initialPosition": {
   "yaw": -91.39,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_514E20C4_4255_D9D4_41CD_543A1428B944",
  "initialPosition": {
   "yaw": 20.22,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_5171B0D9_4255_D9FC_41B1_5885E6CB5911",
  "initialPosition": {
   "yaw": 9.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_516300DA_4255_D9FD_41B8_7A84FA069DC0",
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_511610EA_4255_D9DC_41CA_EFC6F8BEC57D",
  "initialPosition": {
   "yaw": 10.41,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_5107A0EA_4255_D9DC_41CC_A74A3BC2A1B5",
  "initialPosition": {
   "yaw": 7.79,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_510970FD_4255_D9B4_41B8_E1C8D0F22C10",
  "initialPosition": {
   "yaw": 12.31,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_513C70FD_4255_D9B4_41C6_BE213491D681",
  "initialPosition": {
   "yaw": -90.84,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_512DE10D_4255_D854_41CA_CD4CB544DDE2",
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_51D0E11C_4255_D875_41C4_2F3C20278349",
  "initialPosition": {
   "yaw": 15.96,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_51C1811C_4255_D875_4191_5F02A6C037C4",
  "initialPosition": {
   "yaw": -178.21,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_51F4D13C_4255_D8B4_41CB_5AA0BA4C2695",
  "initialPosition": {
   "yaw": 9.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_51E6714B_4255_D8DC_41B5_200569B80291",
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_5197D161_4255_D8CF_41C3_30CD88ED7CDA",
  "initialPosition": {
   "yaw": 10.41,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_519A2171_4255_D8CC_41C0_3BEE220ABC1E",
  "initialPosition": {
   "yaw": 8.07,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_518BE181_4255_D84C_41C6_5D8A6B35A378",
  "initialPosition": {
   "yaw": 12.31,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_51BEC1A0_4255_D84C_41A2_E9E099CC7984",
  "initialPosition": {
   "yaw": 17.58,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_51AFD1AF_4255_D853_41C4_56A85A4C9168",
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_565281C8_4255_DBDC_41CC_F15CC43AA1AE",
  "initialPosition": {
   "yaw": 15.96,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_564441D2_4255_DBCC_41BF_91EE7BB8D07D",
  "initialPosition": {
   "yaw": 20.22,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_567521E6_4255_DBD5_41CD_31D55329117B",
  "initialPosition": {
   "yaw": -98.77,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_5678E203_4255_D84C_41C6_4AD7104879C9",
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_5669F20F_4255_D854_41B3_CAEEC1809D8A",
  "initialPosition": {
   "yaw": 71.76,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_561CD219_4255_D87C_41AF_ED50C7C83ACB",
  "initialPosition": {
   "yaw": 8.07,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_560E0223_4255_D853_41C6_D475A5A77BA5",
  "initialPosition": {
   "yaw": 7.79,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_5630B22E_4255_D854_41C0_F39DBA52045D",
  "initialPosition": {
   "yaw": 17.58,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_56221238_4255_D8BC_41C5_88DC3FAB62FE",
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_56D3C242_4255_D8CC_41BF_F55027525AF7",
  "initialPosition": {
   "yaw": 15.96,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_56C6724C_4255_D8D4_41B1_7A72F4FE9DC8",
  "initialPosition": {
   "yaw": 20.22,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_56F7F256_4255_D8F5_41B2_6EC534C38D5A",
  "initialPosition": {
   "yaw": 9.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_56FAE261_4255_D8CC_41BE_7C78C0F0382A",
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_56EB926B_4255_D8DC_41BD_2196148C9C68",
  "initialPosition": {
   "yaw": 10.41,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_569E8275_4255_D8B4_41C0_1894482E4BBF",
  "initialPosition": {
   "yaw": 167.06,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_502AA2A8_4255_D85C_41B4_808845756859",
  "initialPosition": {
   "yaw": 7.79,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_50D662B2_4255_D84C_41AD_82429EF4840F",
  "initialPosition": {
   "yaw": 12.31,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_50D242BC_4255_D9B4_41BD_BE63C66361C9",
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_50DC12C6_4255_D9D5_41A7_3A71329DF844",
  "initialPosition": {
   "yaw": 15.96,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_50D872D0_4255_D9CD_41B6_D72A1F6A138A",
  "initialPosition": {
   "yaw": 20.22,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_50C212DB_4255_D9FC_41C7_4000C646430D",
  "initialPosition": {
   "yaw": 9.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_50CC12E5_4255_D9D4_41C8_F1EEAF4F5C18",
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_50C862EF_4255_D9D4_41C0_FE37AF858758",
  "initialPosition": {
   "yaw": 10.41,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_50F202F9_4255_D9BC_41C6_723CA2152A5D",
  "initialPosition": {
   "yaw": 8.07,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_50FD9303_4255_D84C_41CF_25D928370FCD",
  "initialPosition": {
   "yaw": 7.79,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_50E7F30D_4255_D854_41B1_2105BED7E6FA",
  "initialPosition": {
   "yaw": -166.35,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_50E0D317_4255_D874_41C7_4C03F6CAE457",
  "initialPosition": {
   "yaw": 17.58,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_5096A321_4255_D84C_41A9_CE9B020503FF",
  "initialPosition": {
   "yaw": 15.96,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_509CA32B_4255_D85C_41CA_7911691376A0",
  "initialPosition": {
   "yaw": 20.22,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_50841335_4255_D8B4_41AD_7725E14A2423",
  "initialPosition": {
   "yaw": 9.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_5089B33F_4255_D8B3_41C1_B6AE3F5A2583",
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_50B0234A_4255_D8DC_41AD_572668E96EB3",
  "initialPosition": {
   "yaw": 10.41,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_50A3535C_4255_D8F4_4192_A4A188EF3E5F",
  "initialPosition": {
   "yaw": 8.07,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_5157435E_4255_D8F4_41C7_3FDCF1EF2558",
  "initialPosition": {
   "yaw": 7.79,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_51592368_4255_D8DC_41B8_D42A83A27E72",
  "initialPosition": {
   "yaw": 12.31,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_514BB372_4255_D8CD_41CB_E6274F06DB33",
  "initialPosition": {
   "yaw": -94.47,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_517FE37C_4255_D8B5_4199_1FD328F389B1",
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_51618387_4255_D854_41CE_59872C478B00",
  "initialPosition": {
   "yaw": 20.22,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_5114F391_4255_D84C_41C0_143FBF57E4D9",
  "initialPosition": {
   "yaw": 9.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_5106C39B_4255_D87C_41C7_527CE5CE3D88",
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_5109E3A5_4255_D854_41B1_B970A7EEBADB",
  "initialPosition": {
   "yaw": 10.41,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_513B03AF_4255_D853_41C8_53CD4A2D64AA",
  "initialPosition": {
   "yaw": -109.97,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_512D03B9_4255_DFBF_41CC_A36FA97F49AB",
  "initialPosition": {
   "yaw": 7.79,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_51D023C3_4255_DFD3_41C1_647E5403C40E",
  "initialPosition": {
   "yaw": 12.31,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_51C183CE_4255_DFD4_4187_50592CFAFF1C",
  "initialPosition": {
   "yaw": 17.58,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_51F573D8_4255_DFFC_41CC_9B8A93559C3D",
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_51E683E2_4255_DFCC_41C0_C37FFF204AAD",
  "initialPosition": {
   "yaw": 15.96,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_51E9A3EC_4255_DFD4_41BC_DC6468AC39EC",
  "initialPosition": {
   "yaw": 9.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_519BC3F6_4255_DFB4_41CF_E4600A72DFE9",
  "initialPosition": {
   "yaw": 46.67,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_518DC400_4255_D84D_41BC_9136C02595E8",
  "initialPosition": {
   "yaw": 10.41,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_51B0340A_4255_D85D_41B8_08A5F516DB46",
  "initialPosition": {
   "yaw": 8.07,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_51A24412_4255_D84D_41AB_5EE75793C7C3",
  "initialPosition": {
   "yaw": -94.27,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_5655441F_4255_D874_4147_AF78FC895DA7",
  "initialPosition": {
   "yaw": 12.31,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_56469429_4255_D85C_4192_5C5B02FB4762",
  "initialPosition": {
   "yaw": 17.58,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_5648E43B_4255_D8BC_41C7_56BBDD338DC6",
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_567BA445_4255_D8D7_41C9_87D61EE9F952",
  "initialPosition": {
   "yaw": 15.96,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "id": "camera_566DC44F_4255_D8D3_417A_866EEAB5944D",
  "initialPosition": {
   "yaw": 20.22,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
   ]
  }
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_22973FB1_2DD9_0423_41C1_E1E03953DCCE",
  "duration": 1000,
  "class": "FadeOutEffect"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_22975FB2_2DD9_0421_41B4_7A2443082F44",
  "duration": 1000,
  "class": "FadeInEffect"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_22974FB2_2DD9_0421_41BA_84205292D043",
  "duration": 1000,
  "class": "FadeOutEffect"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_22977FB2_2DD9_0421_41C1_F53B037346DF",
  "duration": 1000,
  "class": "FadeInEffect"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_3876CD6E_2DF9_0421_41C1_F0AB7F279824",
  "duration": 1000,
  "class": "FadeOutEffect"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_56025451_4255_D8CF_41AE_B743ADC2950D",
  "duration": 1000,
  "class": "FadeInEffect"
 },
 "this.effect_3876CD6E_2DF9_0421_41C1_F0AB7F279824",
 {
  "easing": "cubic_in_out",
  "id": "effect_22899FB3_2DD9_0427_41BB_298AEB3D2851",
  "duration": 1000,
  "class": "FadeOutEffect"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_56018451_4255_D8CF_419E_E60714523D8A",
  "duration": 1000,
  "class": "FadeInEffect"
 },
 "this.effect_22899FB3_2DD9_0427_41BB_298AEB3D2851",
 {
  "easing": "cubic_in_out",
  "id": "effect_2289DFB3_2DD9_0427_41AE_A35795880BA7",
  "duration": 1000,
  "class": "FadeInEffect"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_2289EFB3_2DD9_0427_41C0_ACB5A72AE218",
  "duration": 1000,
  "class": "FadeOutEffect"
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
  "duration": 5000,
  "label": "7. Ben xe mien Dong moi",
  "class": "Photo",
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
  "class": "ViewerArea",
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
  "toolTipFontSize": 14,
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
  "playbackBarHeadShadowHorizontalLength": 0,
  "transitionMode": "blending",
  "paddingTop": 0,
  "progressHeight": 10,
  "playbackBarBorderRadius": 0,
  "playbackBarProgressBorderColor": "#000000",
  "toolTipPaddingRight": 6,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "toolTipBorderRadius": 3,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
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
  "playbackBarHeadShadowVerticalLength": 0,
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
  "verticalAlign": "middle",
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "paddingRight": 10,
  "height": 70,
  "maxHeight": 70,
  "paddingLeft": 10,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "borderSize": 0,
  "class": "Container",
  "horizontalAlign": "center",
  "minWidth": 100,
  "gap": 35,
  "borderRadius": 5,
  "contentOpaque": false,
  "shadow": false,
  "backgroundColorDirection": "vertical",
  "paddingBottom": 0,
  "backgroundColorRatios": [
   0,
   1
  ],
  "minHeight": 25,
  "bottom": "3%",
  "id": "Container_86F3A56C_8E22_5B1D_41CA_9CE53436FE56",
  "scrollBarColor": "#000000",
  "backgroundOpacity": 0.25,
  "paddingTop": 0,
  "scrollBarVisible": "rollOver",
  "overflow": "visible",
  "left": "0%",
  "layout": "horizontal",
  "scrollBarOpacity": 0.5,
  "right": "0%",
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
    "class": "IconButton",
    "borderRadius": 0,
    "horizontalAlign": "center",
    "minWidth": 25,
    "click": "this.showPopupImage(this.ImageResource_536A2F3F_412A_B1B6_41B9_51CAE5D86C15, null, '85%', '85%', this.FadeInEffect_8ED05F70_96C4_F045_41DC_2AB82A556F92, this.FadeOutEffect_8ED06F70_96C4_F045_41DA_C74400CF7B15, {'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'rollOverBorderSize':0,'pressedBackgroundColorDirection':'vertical','borderColor':'#000000','backgroundColorDirection':'vertical','pressedIconColor':'#CCCCCC','backgroundColor':['#000000','#000000','#000000'],'paddingBottom':10,'backgroundColorRatios':[0,0.09803921568627451,1],'iconHeight':25,'iconColor':'#FFFFFF','pressedIconWidth':25,'pressedIconHeight':25,'backgroundOpacity':0.15,'rollOverBorderColor':'#000000','rollOverBackgroundOpacity':0.5,'rollOverIconHeight':25,'paddingLeft':10,'rollOverIconLineWidth':3,'iconWidth':25,'pressedBackgroundColor':['#000000','#000000','#000000'],'rollOverIconWidth':25,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':3,'pressedBorderSize':0,'rollOverIconColor':'#52B7EF','rollOverBackgroundColorDirection':'vertical','rollOverBackgroundColor':['#000000','#000000','#000000'],'iconLineWidth':3,'paddingTop':10,'borderSize':0,'paddingRight':10,'pressedBorderColor':'#000000'}, null, null, false)",
    "toolTipTextShadowBlurRadius": 3,
    "toolTipOpacity": 0.7,
    "toolTipShadowVerticalLength": 0,
    "toolTipPaddingBottom": 4,
    "maxWidth": 70,
    "shadow": false,
    "minHeight": 25,
    "cursor": "hand",
    "paddingBottom": 0,
    "toolTipFontSize": 14,
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
    "class": "IconButton",
    "borderRadius": 0,
    "horizontalAlign": "center",
    "minWidth": 25,
    "click": "this.setMediaBehaviour(this.playList_5610BFCA_4255_C7DC_41A2_C8D36EEE20A1, 0); this.MainViewerVideoPlayer.play()",
    "toolTipTextShadowBlurRadius": 3,
    "toolTipOpacity": 0.7,
    "toolTipShadowVerticalLength": 0,
    "toolTipPaddingBottom": 4,
    "maxWidth": 70,
    "shadow": false,
    "minHeight": 25,
    "cursor": "hand",
    "paddingBottom": 0,
    "toolTipFontSize": 14,
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
   "this.IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED",
   {
    "toolTipPaddingRight": 6,
    "verticalAlign": "middle",
    "toolTipBorderRadius": 3,
    "paddingRight": 0,
    "toolTipShadowOpacity": 1,
    "mode": "toggle",
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
    "class": "IconButton",
    "borderRadius": 0,
    "horizontalAlign": "center",
    "pressedIconURL": "skin/IconButton_2FC9210C_3E8F_C4D4_41A7_10D1404CA49B_pressed.png",
    "minWidth": 25,
    "toolTipTextShadowBlurRadius": 3,
    "toolTipOpacity": 0.7,
    "toolTipShadowVerticalLength": 0,
    "toolTipPaddingBottom": 4,
    "maxWidth": 70,
    "shadow": false,
    "minHeight": 25,
    "cursor": "hand",
    "paddingBottom": 0,
    "toolTipFontSize": 14,
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
   },
   {
    "toolTipPaddingRight": 6,
    "verticalAlign": "middle",
    "toolTipBorderRadius": 3,
    "paddingRight": 0,
    "toolTipShadowOpacity": 1,
    "mode": "toggle",
    "iconURL": "skin/IconButton_843BBEF5_8E22_690F_419D_28CBDD771ACC.png",
    "height": "100%",
    "maxHeight": 70,
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
    "class": "IconButton",
    "borderRadius": 0,
    "horizontalAlign": "center",
    "pressedIconURL": "skin/IconButton_843BBEF5_8E22_690F_419D_28CBDD771ACC_pressed.png",
    "minWidth": 25,
    "click": "if(!this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472.get('visible')){ this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, true, 0, this.effect_15DDF232_3E91_44CF_41AB_F8C3E6067377, 'showEffect', false) } else if(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472.get('visible')){ this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, false, 0, this.effect_15DDE232_3E91_44CF_41B1_14501B4EC17A, 'hideEffect', false) }",
    "toolTipTextShadowBlurRadius": 3,
    "toolTipOpacity": 0.7,
    "toolTipShadowVerticalLength": 0,
    "toolTipPaddingBottom": 4,
    "maxWidth": 70,
    "shadow": false,
    "minHeight": 25,
    "cursor": "hand",
    "paddingBottom": 0,
    "toolTipFontSize": 14,
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
   }
  ]
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
  "class": "Container",
  "borderRadius": 5,
  "horizontalAlign": "right",
  "minWidth": 500,
  "gap": 5,
  "maxWidth": 500,
  "top": "3%",
  "minHeight": 55,
  "contentOpaque": false,
  "paddingBottom": 0,
  "shadow": false,
  "id": "Container_807F782A_8E23_A905_41DE_623121285A09",
  "scrollBarColor": "#000000",
  "backgroundOpacity": 0,
  "paddingTop": 0,
  "scrollBarVisible": "rollOver",
  "overflow": "visible",
  "layout": "horizontal",
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
    "class": "Container",
    "horizontalAlign": "right",
    "minWidth": 100,
    "gap": 0,
    "borderRadius": 0,
    "contentOpaque": false,
    "shadow": false,
    "minHeight": 55,
    "visible": false,
    "paddingBottom": 0,
    "id": "Container_80D3CF90_8E26_E705_41E0_E47025A2C106",
    "scrollBarColor": "#000000",
    "backgroundOpacity": 0,
    "paddingTop": 0,
    "scrollBarVisible": "rollOver",
    "overflow": "visible",
    "layout": "horizontal",
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
      "class": "IconButton",
      "borderRadius": 0,
      "horizontalAlign": "center",
      "pressedIconURL": "skin/IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA_pressed.png",
      "minWidth": 1,
      "click": "if(!this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, true, 0, null, null, false) } else if(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, false, 0, null, null, false) }",
      "toolTipTextShadowBlurRadius": 3,
      "toolTipOpacity": 0.7,
      "toolTipShadowVerticalLength": 0,
      "toolTipPaddingBottom": 4,
      "maxWidth": 60,
      "shadow": false,
      "minHeight": 1,
      "cursor": "hand",
      "paddingBottom": 0,
      "toolTipFontSize": 14,
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
      "class": "IconButton",
      "borderRadius": 0,
      "horizontalAlign": "center",
      "pressedIconURL": "skin/IconButton_8105A313_8E22_BF0B_41E1_331C6035A930_pressed.png",
      "minWidth": 1,
      "click": "if(!this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, true, 0, this.effect_CACBF85D_EED0_7261_41DB_A3B65ECE0D5D, 'showEffect', false) } else if(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, false, 0, this.effect_CACBC85D_EED0_7261_41BE_8CF4C3A8170C, 'hideEffect', false) }",
      "toolTipTextShadowBlurRadius": 3,
      "toolTipOpacity": 0.7,
      "toolTipShadowVerticalLength": 0,
      "toolTipPaddingBottom": 4,
      "maxWidth": 60,
      "shadow": false,
      "minHeight": 1,
      "cursor": "hand",
      "paddingBottom": 0,
      "toolTipFontSize": 14,
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
    "class": "IconButton",
    "borderRadius": 0,
    "horizontalAlign": "center",
    "minWidth": 55,
    "click": "if(!this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, true, 0, this.effect_32C91197_3F22_3110_4181_9E76B593FBFE, 'showEffect', false) } else if(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, false, 0, this.effect_32C92197_3F22_3110_419D_E2E21968F16F, 'hideEffect', false) }",
    "toolTipTextShadowBlurRadius": 3,
    "toolTipOpacity": 0.7,
    "toolTipShadowVerticalLength": 0,
    "toolTipPaddingBottom": 4,
    "maxWidth": 55,
    "shadow": false,
    "minHeight": 55,
    "cursor": "hand",
    "paddingBottom": 0,
    "toolTipFontSize": 14,
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
  "paddingRight": 5,
  "selectedItemBackgroundColor": [],
  "backgroundColor": [
   "#000000"
  ],
  "scrollBarWidth": 7,
  "scrollBarMargin": 4,
  "gap": 5,
  "itemHorizontalAlign": "center",
  "rollOverItemLabelFontWeight": "bold",
  "selectedItemLabelFontStyle": "italic",
  "minWidth": 90,
  "class": "ThumbnailList",
  "maxWidth": 100,
  "horizontalAlign": "left",
  "itemLabelFontColor": "#FFFFFF",
  "playList": "this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist",
  "rollOverItemLabelFontColor": "#FFFFFF",
  "itemThumbnailScaleMode": "fit_outside",
  "itemMode": "normal",
  "backgroundColorDirection": "vertical",
  "paddingBottom": 5,
  "shadow": false,
  "selectedItemLabelTextDecoration": "underline",
  "scrollBarColor": "#52B7EF",
  "itemPaddingBottom": 3,
  "itemLabelFontWeight": "normal",
  "rollOverItemLabelTextDecoration": "underline",
  "paddingTop": 5,
  "itemThumbnailOpacity": 1,
  "itemThumbnailShadow": false,
  "selectedItemLabelFontColor": "#FFFFFF",
  "scrollBarVisible": "rollOver",
  "itemThumbnailBorderRadius": 25,
  "itemLabelTextDecoration": "none",
  "scrollBarOpacity": 1,
  "itemPaddingRight": 3,
  "selectedItemThumbnailShadowVerticalLength": 0,
  "itemLabelFontStyle": "normal",
  "selectedItemThumbnailShadowBlurRadius": 10,
  "selectedItemThumbnailShadow": true,
  "selectedItemLabelFontSize": 12,
  "itemLabelHorizontalAlign": "center",
  "itemPaddingLeft": 3,
  "itemThumbnailWidth": 70,
  "selectedItemThumbnailShadowOpacity": 0.73,
  "itemBorderRadius": 0,
  "width": 120,
  "paddingLeft": 5,
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
  "top": "15%",
  "minHeight": 100,
  "backgroundColorRatios": [
   0
  ],
  "bottom": "15%",
  "itemLabelFontSize": 12,
  "id": "ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472",
  "backgroundOpacity": 0.25,
  "selectedItemBackgroundColorRatios": [],
  "itemOpacity": 1,
  "selectedItemThumbnailShadowHorizontalLength": 0,
  "itemLabelPosition": "bottom",
  "itemBackgroundColorRatios": [],
  "selectedItemBackgroundOpacity": 0,
  "itemLabelFontFamily": "Arial",
  "itemThumbnailHeight": 70,
  "right": "1.5%",
  "layout": "vertical"
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
  "class": "Container",
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
  "width": "100%",
  "scrollBarOpacity": 0.5,
  "children": [
   "this.ViewerAreaLabeled_9FD7235A_96CD_9045_41D9_23A3BCBDB1C6",
   "this.IconButton_9FEA51EA_96CC_905A_41D3_F42DB0CD0A74",
   "this.IconButton_9FB9BD3F_96C5_703B_41D7_65AEE6E85A96",
   "this.IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4"
  ],
  "layout": "absolute"
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
  "class": "IconButton",
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
  "rollOverIconURL": "skin/IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB_rollover.png",
  "right": "2%"
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
  "class": "UIComponent",
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
  "backgroundColor": [],
  "paddingRight": 0,
  "paddingLeft": 0,
  "borderSize": 0,
  "class": "ZoomImage",
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
  "class": "CloseButton",
  "horizontalAlign": "center",
  "minWidth": 0,
  "fontFamily": "Arial",
  "borderRadius": 0,
  "fontWeight": "normal",
  "iconLineWidth": 5,
  "top": 10,
  "backgroundColorDirection": "vertical",
  "cursor": "hand",
  "layout": "horizontal",
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
  "right": 10
 }
], 
 "verticalAlign": "top",
 "mouseWheelEnabled": true,
 "layout": "absolute",
 "paddingRight": 0,
 "backgroundPreloadEnabled": true,
 "height": "100%",
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "borderSize": 0,
 "class": "Player",
 "horizontalAlign": "left",
 "minWidth": 20,
 "gap": 10,
 "borderRadius": 0,
 "contentOpaque": false,
 "scripts": {
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getKey": function(key){  return window[key]; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "registerKey": function(key, value){  window[key] = value; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "unregisterKey": function(key){  delete window[key]; },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio) delete audios[audio.get('id')]; } if(audio) audio.stop(); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "existsKey": function(key){  return key in window; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); }
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
 "vrPolyfillScale": 0.5,
 "scrollBarOpacity": 0.5,
 "start": "this.playAudioList([this.audio_15B68E59_3D54_1663_4199_CC0245D4ECA1]); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37], 'cardboardAvailable'); this.syncPlaylists([this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA].forEach(function(component) { component.set('visible', false); }) }",
 "width": "100%"
})