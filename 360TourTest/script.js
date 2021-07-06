TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "buttonPlay": {
   "verticalAlign": "middle",
   "paddingRight": 0,
   "mode": "push",
   "toolTipPaddingRight": 6,
   "width": "100%",
   "toolTipPaddingBottom": 4,
   "iconURL": "skin/IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED.png",
   "height": "100%",
   "transparencyActive": true,
   "toolTip": "See Photos",
   "paddingLeft": 0,
   "toolTipTextShadowOpacity": 0,
   "toolTipFontSize": 11,
   "borderRadius": 0,
   "toolTipBorderSize": 1,
   "toolTipOpacity": 0.7,
   "borderSize": 0,
   "toolTipBackgroundColor": "#000000",
   "toolTipShadowOpacity": 1,
   "rollOverIconURL": "skin/IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED_rollover.png",
   "toolTipShadowVerticalLength": 0,
   "toolTipPaddingLeft": 6,
   "minHeight": 25,
   "shadow": false,
   "toolTipFontStyle": "normal",
   "toolTipBorderRadius": 3,
   "horizontalAlign": "center",
   "click": "this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, true, 0, this.effect_98AADBB0_96C5_F0C5_41B2_1C4D08E503DB, 'showEffect', false); this.playList_6A3196C1_7997_B055_41DA_54B224E073BD.set('selectedIndex', 0)",
   "toolTipBorderColor": "#767676",
   "cursor": "hand",
   "visible": false,
   "paddingBottom": 0,
   "class": "IconButton",
   "toolTipTextShadowBlurRadius": 3,
   "id": "IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED",
   "toolTipTextShadowColor": "#000000",
   "toolTipShadowHorizontalLength": 0,
   "toolTipFontWeight": "normal",
   "minWidth": 25,
   "toolTipShadowSpread": 0,
   "paddingTop": 0,
   "toolTipShadowColor": "#333333",
   "toolTipShadowBlurRadius": 3,
   "toolTipPaddingTop": 4,
   "backgroundOpacity": 0,
   "maxHeight": 70,
   "maxWidth": 70,
   "toolTipFontFamily": "Arial",
   "toolTipFontColor": "#606060"
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
    "width": "3.03%",
    "iconURL": "skin/IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4.png",
    "height": "5.48%",
    "transparencyActive": true,
    "paddingLeft": 0,
    "borderRadius": 0,
    "borderSize": 0,
    "rollOverIconURL": "skin/IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4_rollover.png",
    "shadow": false,
    "horizontalAlign": "center",
    "top": "2%",
    "click": "this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, false, 0, this.effect_9B0AF4E2_96C4_F045_41D3_0E00FEE03A15, 'hideEffect', false)",
    "minHeight": 50,
    "cursor": "hand",
    "paddingBottom": 0,
    "class": "IconButton",
    "id": "IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4",
    "minWidth": 50,
    "paddingTop": 0,
    "backgroundOpacity": 0,
    "maxHeight": 50,
    "maxWidth": 50,
    "right": "2%"
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
   "width": "4.24%",
   "iconURL": "skin/IconButton_9FEA51EA_96CC_905A_41D3_F42DB0CD0A74.png",
   "transparencyActive": true,
   "paddingLeft": 0,
   "borderRadius": 0,
   "borderSize": 0,
   "rollOverIconURL": "skin/IconButton_9FEA51EA_96CC_905A_41D3_F42DB0CD0A74_rollover.png",
   "minHeight": 70,
   "shadow": false,
   "horizontalAlign": "center",
   "top": "40%",
   "cursor": "hand",
   "paddingBottom": 0,
   "class": "IconButton",
   "bottom": "40%",
   "id": "IconButton_9FEA51EA_96CC_905A_41D3_F42DB0CD0A74",
   "minWidth": 70,
   "paddingTop": 0,
   "left": "1%",
   "backgroundOpacity": 0,
   "maxHeight": 70,
   "maxWidth": 70
  },
  "id": "ViewerAreaLabeled_9FD7235A_96CD_9045_41D9_23A3BCBDB1C6PhotoAlbumPlayer",
  "viewerArea": {
   "progressBorderRadius": 0,
   "progressBarBackgroundColorDirection": "vertical",
   "progressBackgroundColor": [
    "#FFFFFF"
   ],
   "paddingRight": 0,
   "toolTipPaddingBottom": 4,
   "playbackBarHeadShadowVerticalLength": 0,
   "progressBarOpacity": 1,
   "playbackBarBorderColor": "#FFFFFF",
   "playbackBarBackgroundColor": [
    "#FFFFFF"
   ],
   "playbackBarProgressBackgroundColorDirection": "vertical",
   "progressRight": 0,
   "toolTipBorderSize": 1,
   "toolTipOpacity": 0.7,
   "toolTipShadowOpacity": 1,
   "playbackBarHeight": 10,
   "playbackBarOpacity": 1,
   "toolTipShadowVerticalLength": 0,
   "playbackBarHeadWidth": 6,
   "shadow": false,
   "toolTipFontStyle": "normal",
   "playbackBarBackgroundColorDirection": "vertical",
   "class": "ViewerArea",
   "playbackBarProgressBorderSize": 0,
   "progressBottom": 2,
   "paddingBottom": 0,
   "playbackBarHeadBackgroundColorDirection": "vertical",
   "playbackBarRight": 0,
   "toolTipTextShadowColor": "#000000",
   "progressBorderSize": 0,
   "progressBarBorderSize": 0,
   "progressBarBorderRadius": 0,
   "playbackBarProgressBorderRadius": 0,
   "paddingTop": 0,
   "transitionMode": "blending",
   "toolTipShadowSpread": 0,
   "toolTipShadowColor": "#333333",
   "toolTipShadowBlurRadius": 3,
   "progressBackgroundOpacity": 1,
   "toolTipPaddingTop": 4,
   "toolTipFontColor": "#606060",
   "playbackBarBorderRadius": 0,
   "playbackBarHeadShadow": true,
   "playbackBarHeadShadowHorizontalLength": 0,
   "playbackBarProgressBorderColor": "#000000",
   "toolTipPaddingRight": 6,
   "width": "100%",
   "playbackBarHeadBorderRadius": 0,
   "paddingLeft": 0,
   "toolTipTextShadowOpacity": 0,
   "height": "100%",
   "progressLeft": 0,
   "toolTipFontSize": 11,
   "borderRadius": 0,
   "borderSize": 0,
   "playbackBarHeadBorderColor": "#000000",
   "progressBackgroundColorRatios": [
    0
   ],
   "playbackBarProgressOpacity": 1,
   "toolTipBackgroundColor": "#000000",
   "playbackBarHeadShadowBlurRadius": 3,
   "toolTipPaddingLeft": 6,
   "minHeight": 1,
   "playbackBarProgressBackgroundColorRatios": [
    0
   ],
   "playbackBarLeft": 0,
   "playbackBarHeadHeight": 15,
   "playbackBarBackgroundOpacity": 1,
   "playbackBarHeadBackgroundColor": [
    "#111111",
    "#666666"
   ],
   "toolTipBorderColor": "#767676",
   "toolTipBorderRadius": 3,
   "playbackBarHeadShadowOpacity": 0.7,
   "top": "0%",
   "playbackBarBorderSize": 0,
   "toolTipTextShadowBlurRadius": 3,
   "playbackBarHeadBackgroundColorRatios": [
    0,
    1
   ],
   "progressBarBorderColor": "#000000",
   "id": "ViewerAreaLabeled_9FD7235A_96CD_9045_41D9_23A3BCBDB1C6",
   "playbackBarHeadBorderSize": 0,
   "playbackBarHeadShadowColor": "#000000",
   "toolTipShadowHorizontalLength": 0,
   "playbackBarHeadOpacity": 1,
   "toolTipFontWeight": "normal",
   "progressBackgroundColorDirection": "vertical",
   "minWidth": 1,
   "progressBarBackgroundColorRatios": [
    0
   ],
   "progressHeight": 10,
   "left": "0%",
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
   "paddingRight": 0,
   "mode": "push",
   "width": "4.24%",
   "iconURL": "skin/IconButton_9FB9BD3F_96C5_703B_41D7_65AEE6E85A96.png",
   "transparencyActive": true,
   "paddingLeft": 0,
   "borderRadius": 0,
   "borderSize": 0,
   "rollOverIconURL": "skin/IconButton_9FB9BD3F_96C5_703B_41D7_65AEE6E85A96_rollover.png",
   "shadow": false,
   "horizontalAlign": "center",
   "top": "40%",
   "minHeight": 70,
   "cursor": "hand",
   "paddingBottom": 0,
   "class": "IconButton",
   "bottom": "40%",
   "id": "IconButton_9FB9BD3F_96C5_703B_41D7_65AEE6E85A96",
   "minWidth": 70,
   "paddingTop": 0,
   "backgroundOpacity": 0,
   "maxHeight": 70,
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
    "thumbnailUrl": "media/panorama_686578D6_797E_F07F_419A_320C6D79939B_t.jpg",
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
           "url": "media/panorama_686578D6_797E_F07F_419A_320C6D79939B_0_HS_0_0_0_map.gif",
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
      "id": "overlay_686548D6_797E_F07F_41D5_91045CFD3D92",
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "yaw": 140.51,
        "hfov": 5.02,
        "image": {
         "levels": [
          {
           "height": 69,
           "width": 69,
           "url": "media/panorama_686578D6_797E_F07F_419A_320C6D79939B_0_HS_0_0.png",
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
           "url": "media/panorama_686578D6_797E_F07F_419A_320C6D79939B_0_HS_5_0_0_map.gif",
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
        "click": "this.startPanoramaWithCamera(this.panorama_76DECD25_797E_B1DD_41CC_82836B30F638, this.camera_6A437A6E_7997_B02F_41DA_8D88926B6B7B); this.mainPlayList.set('selectedIndex', 1)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "displayTooltipInTouchScreens": true
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_686588D7_797E_F07D_41C2_1CF1E3ACF436",
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
           "url": "media/panorama_686578D6_797E_F07F_419A_320C6D79939B_0_HS_5_0.png",
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
           "url": "media/panorama_686578D6_797E_F07F_419A_320C6D79939B_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 0,
        "yaw": -171.35,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 85.73
       }
      ],
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_76E7D010_797D_EFF3_41CD_0CA79D873EE8, this.camera_6A57BA82_7997_B0D7_4193_45F018FEAB38); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 5); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 8)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": true,
      "id": "overlay_6865C8D7_797E_F07D_41C9_CA382764AE34",
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "yaw": -171.35,
        "hfov": 0,
        "image": {
         "levels": [
          {
           "height": 1,
           "width": 1,
           "url": "media/panorama_686578D6_797E_F07F_419A_320C6D79939B_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 85.73
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
       "url": "media/panorama_686578D6_797E_F07F_419A_320C6D79939B_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_686578D6_797E_F07F_419A_320C6D79939B.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "id": "panorama_686578D6_797E_F07F_419A_320C6D79939B",
  "adjacentPanoramas": [
   {
    "panorama": {
     "frames": [
      {
       "thumbnailUrl": "media/panorama_76C8BD33_797A_D035_41B1_015319AC55E5_t.jpg",
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
              "url": "media/panorama_76C8BD33_797A_D035_41B1_015319AC55E5_0_HS_6_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 5.63,
           "yaw": 18.78,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -20.36
          }
         ],
         "areas": [
          {
           "toolTip": "2 BEDROOM",
           "click": "this.startPanoramaWithCamera(this.panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D, this.camera_5488DF3C_5BF2_F3E9_41D1_C652E087859B); this.mainPlayList.set('selectedIndex', 8)",
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "displayTooltipInTouchScreens": true
          }
         ],
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "id": "overlay_76C8DD34_797A_D033_41DC_852B262871F2",
         "class": "HotspotPanoramaOverlay",
         "items": [
          {
           "yaw": 18.78,
           "hfov": 5.63,
           "image": {
            "levels": [
             {
              "height": 83,
              "width": 83,
              "url": "media/panorama_76C8BD33_797A_D035_41B1_015319AC55E5_0_HS_6_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -20.36
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
              "url": "media/panorama_76C8BD33_797A_D035_41B1_015319AC55E5_0_HS_5_0_0_map.gif",
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
           "click": "this.startPanoramaWithCamera(this.panorama_76E7D010_797D_EFF3_41CD_0CA79D873EE8, this.camera_6DB0B78D_7997_B0ED_41D4_B5F222C344DA); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 5); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 4)",
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "enabledInCardboard": true,
         "rollOverDisplay": true,
         "id": "overlay_76C91D34_797A_D033_41D3_F437E680D104",
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
              "url": "media/panorama_76C8BD33_797A_D035_41B1_015319AC55E5_0_HS_5_0.png",
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
              "url": "media/panorama_76C8BD33_797A_D035_41B1_015319AC55E5_0_HS_7_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 8.07,
           "yaw": 18.79,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -21.01
          }
         ],
         "areas": [
          {
           "toolTip": "2 BEDROOM",
           "click": "this.startPanoramaWithCamera(this.panorama_76C8A647_797A_B05D_4186_256163753950, this.camera_6DB85784_7997_B0D3_41D1_BE9C72FF20D8); this.mainPlayList.set('selectedIndex', 8)",
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "displayTooltipInTouchScreens": true
          }
         ],
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "id": "overlay_76C90D34_797A_D033_41BB_C076D4EB8913",
         "class": "HotspotPanoramaOverlay",
         "items": [
          {
           "yaw": 18.79,
           "hfov": 8.07,
           "image": {
            "levels": [
             {
              "height": 120,
              "width": 120,
              "url": "media/panorama_76C8BD33_797A_D035_41B1_015319AC55E5_0_HS_7_0.png",
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
          "url": "media/panorama_76C8BD33_797A_D035_41B1_015319AC55E5_hq.jpeg",
          "class": "ImageResourceLevel"
         },
         {
          "height": 1608,
          "width": 3217,
          "url": "media/panorama_76C8BD33_797A_D035_41B1_015319AC55E5.jpeg",
          "class": "ImageResourceLevel"
         }
        ],
        "class": "ImageResource"
       }
      }
     ],
     "id": "panorama_76C8BD33_797A_D035_41B1_015319AC55E5",
     "adjacentPanoramas": [
      {
       "panorama": {
        "frames": [
         {
          "thumbnailUrl": "media/panorama_76DCBBE8_797D_7054_4170_FD0720219C73_t.jpg",
          "overlays": [
           {
            "useHandCursor": true,
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "height": 48,
                 "width": 48,
                 "url": "media/panorama_76DCBBE8_797D_7054_4170_FD0720219C73_0_HS_2_0_0_map.gif",
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
            "id": "overlay_76DC9BE8_797D_7054_41DE_1E896805B8A1",
            "class": "HotspotPanoramaOverlay",
            "items": [
             {
              "yaw": 161.77,
              "hfov": 6.58,
              "image": {
               "levels": [
                {
                 "height": 97,
                 "width": 97,
                 "url": "media/panorama_76DCBBE8_797D_7054_4170_FD0720219C73_0_HS_2_0.png",
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
                 "url": "media/panorama_76DCBBE8_797D_7054_4170_FD0720219C73_0_HS_1_0_0_map.gif",
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
              "click": "this.startPanoramaWithCamera(this.panorama_76E7D010_797D_EFF3_41CD_0CA79D873EE8, this.camera_6D8BF738_7997_B033_41DA_CD173073D4C8); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 8)",
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "enabledInCardboard": true,
            "rollOverDisplay": true,
            "id": "overlay_76DC2BE8_797D_7054_41C2_571F96B636F8",
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
                 "url": "media/panorama_76DCBBE8_797D_7054_4170_FD0720219C73_0_HS_1_0.png",
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
                 "url": "media/panorama_76DCBBE8_797D_7054_4170_FD0720219C73_0_HS_3_0_0_map.gif",
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
              "click": "this.startPanoramaWithCamera(this.panorama_76DBE9A9_797D_D0D5_41DC_0975EEE8F2DE, this.camera_6A7E2711_7997_B1F5_41C2_120DCB9C0F3B); this.mainPlayList.set('selectedIndex', 5)",
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "displayTooltipInTouchScreens": true
             }
            ],
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "id": "overlay_76DC3BE8_797D_7054_41B4_1B1395E41DEB",
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
                 "url": "media/panorama_76DCBBE8_797D_7054_4170_FD0720219C73_0_HS_3_0.png",
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
             "url": "media/panorama_76DCBBE8_797D_7054_4170_FD0720219C73_hq.jpeg",
             "class": "ImageResourceLevel"
            },
            {
             "height": 1608,
             "width": 3217,
             "url": "media/panorama_76DCBBE8_797D_7054_4170_FD0720219C73.jpeg",
             "class": "ImageResourceLevel"
            }
           ],
           "class": "ImageResource"
          }
         }
        ],
        "id": "panorama_76DCBBE8_797D_7054_4170_FD0720219C73",
        "adjacentPanoramas": [
         {
          "panorama": "this.panorama_76C8BD33_797A_D035_41B1_015319AC55E5",
          "yaw": -162.92,
          "class": "AdjacentPanorama",
          "backwardYaw": -173.12,
          "distance": 1
         },
         {
          "panorama": {
           "frames": [
            {
             "thumbnailUrl": "media/panorama_76C8A647_797A_B05D_4186_256163753950_t.jpg",
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
                    "url": "media/panorama_76C8A647_797A_B05D_4186_256163753950_0_HS_2_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "hfov": 6.51,
                 "yaw": -129.93,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": 10.66
                }
               ],
               "areas": [
                {
                 "toolTip": "ROOFTOP",
                 "click": "this.startPanoramaWithCamera(this.panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116, this.camera_56043BB0_5BF2_F2FA_41B1_1DE6A0E08A4C); this.mainPlayList.set('selectedIndex', 9)",
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "displayTooltipInTouchScreens": true
                }
               ],
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "id": "overlay_76C8B647_797A_B05D_41D4_1FC4C931D1C9",
               "class": "HotspotPanoramaOverlay",
               "items": [
                {
                 "yaw": -129.93,
                 "hfov": 6.51,
                 "image": {
                  "levels": [
                   {
                    "height": 91,
                    "width": 91,
                    "url": "media/panorama_76C8A647_797A_B05D_4186_256163753950_0_HS_2_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": 10.66
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
                    "url": "media/panorama_76C8A647_797A_B05D_4186_256163753950_0_HS_0_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "hfov": 5.54,
                 "yaw": -128.51,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -33.22
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
               "id": "overlay_76C8E647_797A_B05D_41DE_477B5AB32FF8",
               "class": "HotspotPanoramaOverlay",
               "items": [
                {
                 "yaw": -128.51,
                 "hfov": 5.54,
                 "image": {
                  "levels": [
                   {
                    "height": 91,
                    "width": 91,
                    "url": "media/panorama_76C8A647_797A_B05D_4186_256163753950_0_HS_0_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -33.22
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
                    "url": "media/panorama_76C8A647_797A_B05D_4186_256163753950_0_HS_1_0_0_map.gif",
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
                 "click": "this.startPanoramaWithCamera(this.panorama_76E7D010_797D_EFF3_41CD_0CA79D873EE8, this.camera_6D1947E2_7997_B057_4194_98C944D0F437); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 4)",
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "enabledInCardboard": true,
               "rollOverDisplay": true,
               "id": "overlay_76C92647_797A_B05D_41C5_8554FDD76D4A",
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
                    "url": "media/panorama_76C8A647_797A_B05D_4186_256163753950_0_HS_1_0.png",
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
                    "url": "media/panorama_76C8A647_797A_B05D_4186_256163753950_0_HS_3_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "hfov": 9.32,
                 "yaw": -129.92,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": 11.37
                }
               ],
               "areas": [
                {
                 "toolTip": "ROOFTOP",
                 "click": "this.startPanoramaWithCamera(this.panorama_76C8BD33_797A_D035_41B1_015319AC55E5, this.camera_6DCA1797_7997_B0FD_41C4_0B2159EFCDBC); this.mainPlayList.set('selectedIndex', 9)",
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "displayTooltipInTouchScreens": true
                }
               ],
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "id": "overlay_76C93647_797A_B05D_41DD_62ABCB95ECD3",
               "class": "HotspotPanoramaOverlay",
               "items": [
                {
                 "yaw": -129.92,
                 "hfov": 9.32,
                 "image": {
                  "levels": [
                   {
                    "height": 132,
                    "width": 132,
                    "url": "media/panorama_76C8A647_797A_B05D_4186_256163753950_0_HS_3_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": 11.37
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
                    "url": "media/panorama_76C8A647_797A_B05D_4186_256163753950_0_HS_4_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "hfov": 7.89,
                 "yaw": -128.51,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -33.89
                }
               ],
               "areas": [
                {
                 "toolTip": "MASTER BEDROOM",
                 "click": "this.startPanoramaWithCamera(this.panorama_76DBE9A9_797D_D0D5_41DC_0975EEE8F2DE, this.camera_6DE557BD_7997_B02D_41DD_A87661760E5B); this.mainPlayList.set('selectedIndex', 5)",
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "displayTooltipInTouchScreens": true
                }
               ],
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "id": "overlay_76C95647_797A_B05D_41C8_A6A692FA9F02",
               "class": "HotspotPanoramaOverlay",
               "items": [
                {
                 "yaw": -128.51,
                 "hfov": 7.89,
                 "image": {
                  "levels": [
                   {
                    "height": 132,
                    "width": 132,
                    "url": "media/panorama_76C8A647_797A_B05D_4186_256163753950_0_HS_4_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -33.89
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
                "url": "media/panorama_76C8A647_797A_B05D_4186_256163753950_hq.jpeg",
                "class": "ImageResourceLevel"
               },
               {
                "height": 1608,
                "width": 3217,
                "url": "media/panorama_76C8A647_797A_B05D_4186_256163753950.jpeg",
                "class": "ImageResourceLevel"
               }
              ],
              "class": "ImageResource"
             }
            }
           ],
           "id": "panorama_76C8A647_797A_B05D_4186_256163753950",
           "adjacentPanoramas": [
            {
             "panorama": "this.panorama_76C8BD33_797A_D035_41B1_015319AC55E5",
             "yaw": -129.92,
             "class": "AdjacentPanorama",
             "backwardYaw": 18.79,
             "distance": 1
            },
            {
             "panorama": "this.panorama_76DCBBE8_797D_7054_4170_FD0720219C73",
             "yaw": -172.21,
             "class": "AdjacentPanorama",
             "backwardYaw": -162.92,
             "distance": 1
            },
            {
             "panorama": {
              "frames": [
               {
                "thumbnailUrl": "media/panorama_76F2A5B3_797D_7035_41C9_EDB47E025BBC_t.jpg",
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
                       "url": "media/panorama_76F2A5B3_797D_7035_41C9_EDB47E025BBC_0_HS_0_0_0_map.gif",
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
                  "id": "overlay_76F2B5B3_797D_7035_41C1_D0A2B707B786",
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
                       "url": "media/panorama_76F2A5B3_797D_7035_41C9_EDB47E025BBC_0_HS_0_0.png",
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
                       "url": "media/panorama_76F2A5B3_797D_7035_41C9_EDB47E025BBC_0_HS_6_0_0_map.gif",
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
                  "id": "overlay_76F165B3_797D_7035_41D7_5BB69AB4BA93",
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
                       "url": "media/panorama_76F2A5B3_797D_7035_41C9_EDB47E025BBC_0_HS_6_0.png",
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
                       "url": "media/panorama_76F2A5B3_797D_7035_41C9_EDB47E025BBC_0_HS_1_0_0_map.gif",
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
                    "click": "this.startPanoramaWithCamera(this.panorama_76E7D010_797D_EFF3_41CD_0CA79D873EE8, this.camera_6C834857_7997_B07D_41D0_ED046AB94A6B); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 5); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 8); this.mainPlayList.set('selectedIndex', 6)",
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "enabledInCardboard": true,
                  "rollOverDisplay": true,
                  "id": "overlay_76F145B3_797D_7035_41DD_639E7A845E40",
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
                       "url": "media/panorama_76F2A5B3_797D_7035_41C9_EDB47E025BBC_0_HS_1_0.png",
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
                       "height": 74,
                       "width": 74,
                       "url": "media/panorama_76F2A5B3_797D_7035_41C9_EDB47E025BBC_0_HS_7_0_0_map.gif",
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
                    "click": "this.startPanoramaWithCamera(this.panorama_76E9C091_797D_B0F5_41D3_9498EC183F6C, this.camera_6D45D807_7997_BFDC_41D3_47F70070B614); this.mainPlayList.set('selectedIndex', 3)",
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "displayTooltipInTouchScreens": true
                   }
                  ],
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "id": "overlay_76F125B3_797D_7035_41C7_D48429A65BE5",
                  "class": "HotspotPanoramaOverlay",
                  "items": [
                   {
                    "yaw": 12.06,
                    "hfov": 9.13,
                    "image": {
                     "levels": [
                      {
                       "height": 149,
                       "width": 149,
                       "url": "media/panorama_76F2A5B3_797D_7035_41C9_EDB47E025BBC_0_HS_7_0.png",
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
                       "url": "media/panorama_76F2A5B3_797D_7035_41C9_EDB47E025BBC_0_HS_8_0_0_map.gif",
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
                    "click": "this.startPanoramaWithCamera(this.panorama_76DECD25_797E_B1DD_41CC_82836B30F638, this.camera_6D7D8839_7997_B035_41DD_610DDC5686AF); this.mainPlayList.set('selectedIndex', 1)",
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "displayTooltipInTouchScreens": true
                   }
                  ],
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "id": "overlay_76F135B3_797D_7035_41D3_2F5A5D78DB2A",
                  "class": "HotspotPanoramaOverlay",
                  "items": [
                   {
                    "yaw": -97.22,
                    "hfov": 8.61,
                    "image": {
                     "levels": [
                      {
                       "height": 124,
                       "width": 124,
                       "url": "media/panorama_76F2A5B3_797D_7035_41C9_EDB47E025BBC_0_HS_8_0.png",
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
                   "url": "media/panorama_76F2A5B3_797D_7035_41C9_EDB47E025BBC_hq.jpeg",
                   "class": "ImageResourceLevel"
                  },
                  {
                   "height": 1608,
                   "width": 3217,
                   "url": "media/panorama_76F2A5B3_797D_7035_41C9_EDB47E025BBC.jpeg",
                   "class": "ImageResourceLevel"
                  }
                 ],
                 "class": "ImageResource"
                }
               }
              ],
              "id": "panorama_76F2A5B3_797D_7035_41C9_EDB47E025BBC",
              "adjacentPanoramas": [
               {
                "panorama": "this.panorama_76C8BD33_797A_D035_41B1_015319AC55E5",
                "yaw": -172.22,
                "class": "AdjacentPanorama",
                "backwardYaw": -173.12,
                "distance": 1
               },
               {
                "panorama": "this.panorama_76C8A647_797A_B05D_4186_256163753950",
                "yaw": -172.22,
                "class": "AdjacentPanorama",
                "backwardYaw": -172.21,
                "distance": 1
               },
               {
                "panorama": {
                 "frames": [
                  {
                   "thumbnailUrl": "media/panorama_76DFA23E_797D_502F_41D3_B13018714089_t.jpg",
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
                          "url": "media/panorama_76DFA23E_797D_502F_41D3_B13018714089_0_HS_0_0_0_map.gif",
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
                     "id": "overlay_76DF723E_797D_502F_41B0_BB0C40AEB993",
                     "class": "HotspotPanoramaOverlay",
                     "items": [
                      {
                       "yaw": -174.37,
                       "hfov": 6.32,
                       "image": {
                        "levels": [
                         {
                          "height": 119,
                          "width": 119,
                          "url": "media/panorama_76DFA23E_797D_502F_41D3_B13018714089_0_HS_0_0.png",
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
                          "url": "media/panorama_76DFA23E_797D_502F_41D3_B13018714089_0_HS_1_0_0_map.gif",
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
                       "click": "this.startPanoramaWithCamera(this.panorama_76E7D010_797D_EFF3_41CD_0CA79D873EE8, this.camera_6F0E4997_7997_B0FC_41C5_8466DBE15A31); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 8); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 7)",
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "enabledInCardboard": true,
                     "rollOverDisplay": true,
                     "id": "overlay_76DF023E_797D_502F_41B2_DDD4141839C6",
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
                          "url": "media/panorama_76DFA23E_797D_502F_41D3_B13018714089_0_HS_1_0.png",
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
                          "url": "media/panorama_76DFA23E_797D_502F_41D3_B13018714089_0_HS_6_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "hfov": 9.34,
                       "yaw": -174.34,
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -42.17
                      }
                     ],
                     "areas": [
                      {
                       "toolTip": "MASTER BEDROOM",
                       "click": "this.startPanoramaWithCamera(this.panorama_76DBE9A9_797D_D0D5_41DC_0975EEE8F2DE, this.camera_6FC63970_7997_B034_41C6_1A4973632347); this.mainPlayList.set('selectedIndex', 5)",
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea",
                       "displayTooltipInTouchScreens": true
                      }
                     ],
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "id": "overlay_76DF323E_797D_502F_41D5_0FF728A7FCD1",
                     "class": "HotspotPanoramaOverlay",
                     "items": [
                      {
                       "yaw": -174.34,
                       "hfov": 9.34,
                       "image": {
                        "levels": [
                         {
                          "height": 175,
                          "width": 175,
                          "url": "media/panorama_76DFA23E_797D_502F_41D3_B13018714089_0_HS_6_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": -42.17
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
                      "url": "media/panorama_76DFA23E_797D_502F_41D3_B13018714089_hq.jpeg",
                      "class": "ImageResourceLevel"
                     },
                     {
                      "height": 1608,
                      "width": 3217,
                      "url": "media/panorama_76DFA23E_797D_502F_41D3_B13018714089.jpeg",
                      "class": "ImageResourceLevel"
                     }
                    ],
                    "class": "ImageResource"
                   }
                  }
                 ],
                 "id": "panorama_76DFA23E_797D_502F_41D3_B13018714089",
                 "adjacentPanoramas": [
                  {
                   "panorama": "this.panorama_76C8BD33_797A_D035_41B1_015319AC55E5",
                   "yaw": -170.58,
                   "class": "AdjacentPanorama",
                   "backwardYaw": -173.12,
                   "distance": 1
                  },
                  {
                   "panorama": "this.panorama_76C8A647_797A_B05D_4186_256163753950",
                   "yaw": -170.58,
                   "class": "AdjacentPanorama",
                   "backwardYaw": -172.21,
                   "distance": 1
                  },
                  {
                   "panorama": "this.panorama_76F2A5B3_797D_7035_41C9_EDB47E025BBC",
                   "yaw": -170.58,
                   "class": "AdjacentPanorama",
                   "backwardYaw": -172.22,
                   "distance": 1
                  },
                  {
                   "panorama": {
                    "frames": [
                     {
                      "thumbnailUrl": "media/panorama_76E9C091_797D_B0F5_41D3_9498EC183F6C_t.jpg",
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
                             "url": "media/panorama_76E9C091_797D_B0F5_41D3_9498EC183F6C_0_HS_0_0_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "hfov": 5.96,
                          "yaw": 41.8,
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": -6.87
                         }
                        ],
                        "areas": [
                         {
                          "toolTip": "1 BEDROOM",
                          "click": "this.startPanoramaWithCamera(this.panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC, this.camera_55BE4E50_5BF2_F5B9_41B2_A0DBD967D7CD); this.mainPlayList.set('selectedIndex', 4)",
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea",
                          "displayTooltipInTouchScreens": true
                         }
                        ],
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "id": "overlay_76E9D091_797D_B0F5_41C6_2577407159FA",
                        "class": "HotspotPanoramaOverlay",
                        "items": [
                         {
                          "yaw": 41.8,
                          "hfov": 5.96,
                          "image": {
                           "levels": [
                            {
                             "height": 83,
                             "width": 83,
                             "url": "media/panorama_76E9C091_797D_B0F5_41D3_9498EC183F6C_0_HS_0_0.png",
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
                             "url": "media/panorama_76E9C091_797D_B0F5_41D3_9498EC183F6C_0_HS_5_0_0_map.gif",
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
                        "id": "overlay_76E9F091_797D_B0F5_41D2_CED09F4FD24E",
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
                             "url": "media/panorama_76E9C091_797D_B0F5_41D3_9498EC183F6C_0_HS_5_0.png",
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
                             "url": "media/panorama_76E9C091_797D_B0F5_41D3_9498EC183F6C_0_HS_1_0_0_map.gif",
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
                          "click": "this.startPanoramaWithCamera(this.panorama_686578D6_797E_F07F_419A_320C6D79939B, this.camera_6CF528D0_7997_B073_41D6_2E9607BA6D05); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 8); this.mainPlayList.set('selectedIndex', 5)",
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "enabledInCardboard": true,
                        "rollOverDisplay": true,
                        "id": "overlay_76E91091_797D_B0F5_41D0_DE8C07BC6420",
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
                             "url": "media/panorama_76E9C091_797D_B0F5_41D3_9498EC183F6C_0_HS_1_0.png",
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
                             "url": "media/panorama_76E9C091_797D_B0F5_41D3_9498EC183F6C_0_HS_6_0_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "hfov": 8.59,
                          "yaw": 41.79,
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": -6.25
                         }
                        ],
                        "areas": [
                         {
                          "toolTip": "1 BEDROOM",
                          "click": "this.startPanoramaWithCamera(this.panorama_76E7D010_797D_EFF3_41CD_0CA79D873EE8, this.camera_6C06F8E0_7997_B053_41C7_6E79C5DB25A6); this.mainPlayList.set('selectedIndex', 4)",
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea",
                          "displayTooltipInTouchScreens": true
                         }
                        ],
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "id": "overlay_76E93091_797D_B0F5_41D1_6ACFDA0BB9C7",
                        "class": "HotspotPanoramaOverlay",
                        "items": [
                         {
                          "yaw": 41.79,
                          "hfov": 8.59,
                          "image": {
                           "levels": [
                            {
                             "height": 119,
                             "width": 119,
                             "url": "media/panorama_76E9C091_797D_B0F5_41D3_9498EC183F6C_0_HS_6_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "class": "HotspotPanoramaOverlayImage",
                          "pitch": -6.25
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
                             "url": "media/panorama_76E9C091_797D_B0F5_41D3_9498EC183F6C_0_HS_7_0_0_map.gif",
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
                          "click": "this.startPanoramaWithCamera(this.panorama_76F2A5B3_797D_7035_41C9_EDB47E025BBC, this.camera_6CCD5893_7997_B0F5_41C0_38B4FF007612); this.mainPlayList.set('selectedIndex', 2)",
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea",
                          "displayTooltipInTouchScreens": true
                         }
                        ],
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "id": "overlay_76E94092_797D_B0F7_41D1_A0115AA87159",
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
                             "url": "media/panorama_76E9C091_797D_B0F5_41D3_9498EC183F6C_0_HS_7_0.png",
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
                         "url": "media/panorama_76E9C091_797D_B0F5_41D3_9498EC183F6C_hq.jpeg",
                         "class": "ImageResourceLevel"
                        },
                        {
                         "height": 1608,
                         "width": 3217,
                         "url": "media/panorama_76E9C091_797D_B0F5_41D3_9498EC183F6C.jpeg",
                         "class": "ImageResourceLevel"
                        }
                       ],
                       "class": "ImageResource"
                      }
                     }
                    ],
                    "id": "panorama_76E9C091_797D_B0F5_41D3_9498EC183F6C",
                    "adjacentPanoramas": [
                     {
                      "panorama": "this.panorama_76C8BD33_797A_D035_41B1_015319AC55E5",
                      "yaw": -171.96,
                      "class": "AdjacentPanorama",
                      "backwardYaw": -173.12,
                      "distance": 1
                     },
                     {
                      "panorama": "this.panorama_76DCBBE8_797D_7054_4170_FD0720219C73",
                      "yaw": -171.96,
                      "class": "AdjacentPanorama",
                      "backwardYaw": -162.92,
                      "distance": 1
                     },
                     {
                      "panorama": "this.panorama_76C8A647_797A_B05D_4186_256163753950",
                      "yaw": -171.96,
                      "class": "AdjacentPanorama",
                      "backwardYaw": -172.21,
                      "distance": 1
                     },
                     {
                      "panorama": "this.panorama_76F2A5B3_797D_7035_41C9_EDB47E025BBC",
                      "yaw": -176.8,
                      "class": "AdjacentPanorama",
                      "backwardYaw": 12.06,
                      "distance": 1
                     },
                     {
                      "panorama": {
                       "frames": [
                        {
                         "thumbnailUrl": "media/panorama_76DBE9A9_797D_D0D5_41DC_0975EEE8F2DE_t.jpg",
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
                                "url": "media/panorama_76DBE9A9_797D_D0D5_41DC_0975EEE8F2DE_0_HS_0_0_0_map.gif",
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
                           "id": "overlay_76DBD9A9_797D_D0D5_41DE_28911CB8A7FB",
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
                                "url": "media/panorama_76DBE9A9_797D_D0D5_41DC_0975EEE8F2DE_0_HS_0_0.png",
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
                                "url": "media/panorama_76DBE9A9_797D_D0D5_41DC_0975EEE8F2DE_0_HS_2_0_0_map.gif",
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
                             "toolTip": "WC",
                             "click": "this.startPanoramaWithCamera(this.panorama_46009756_572D_4167_41C6_2B49BD1EF7CE, this.camera_56E74D59_5BF2_F7AA_41D0_B6C262499B65); this.mainPlayList.set('selectedIndex', 7)",
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea",
                             "displayTooltipInTouchScreens": true
                            }
                           ],
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "id": "overlay_76DB29A9_797D_D0D5_419E_AD974410387A",
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
                                "url": "media/panorama_76DBE9A9_797D_D0D5_41DC_0975EEE8F2DE_0_HS_2_0.png",
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
                                "url": "media/panorama_76DBE9A9_797D_D0D5_41DC_0975EEE8F2DE_0_HS_3_0_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "hfov": 5.37,
                             "yaw": 34.84,
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": 6.1
                            }
                           ],
                           "areas": [
                            {
                             "toolTip": "2 BEDROOM",
                             "click": "this.startPanoramaWithCamera(this.panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D, this.camera_56C57D3C_5BF2_F7EA_41BA_23AB5285E45A); this.mainPlayList.set('selectedIndex', 8)",
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea",
                             "displayTooltipInTouchScreens": true
                            }
                           ],
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "id": "overlay_76DB09A9_797D_D0D5_4182_FDF61EE08354",
                           "class": "HotspotPanoramaOverlay",
                           "items": [
                            {
                             "yaw": 34.84,
                             "hfov": 5.37,
                             "image": {
                              "levels": [
                               {
                                "height": 74,
                                "width": 74,
                                "url": "media/panorama_76DBE9A9_797D_D0D5_41DC_0975EEE8F2DE_0_HS_3_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "class": "HotspotPanoramaOverlayImage",
                             "pitch": 6.1
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
                                "url": "media/panorama_76DBE9A9_797D_D0D5_41DC_0975EEE8F2DE_0_HS_4_0_0_map.gif",
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
                             "toolTip": "1 BEDROOM",
                             "click": "this.startPanoramaWithCamera(this.panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC, this.camera_56F35D45_5BF2_F79A_41D0_857D96DC10DF); this.mainPlayList.set('selectedIndex', 4)",
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea",
                             "displayTooltipInTouchScreens": true
                            }
                           ],
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "id": "overlay_76DB69A9_797D_D0D5_41C8_D410DCFD67C0",
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
                                "url": "media/panorama_76DBE9A9_797D_D0D5_41DC_0975EEE8F2DE_0_HS_4_0.png",
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
                                "url": "media/panorama_76DBE9A9_797D_D0D5_41DC_0975EEE8F2DE_0_HS_1_0_0_map.gif",
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
                             "click": "this.startPanoramaWithCamera(this.panorama_686578D6_797E_F07F_419A_320C6D79939B, this.camera_6C799937_7997_B03D_41D9_C4DF25042C02); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 3)",
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "enabledInCardboard": true,
                           "rollOverDisplay": true,
                           "id": "overlay_76DB59A9_797D_D0D5_41B5_6F2643B9C5E7",
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
                                "url": "media/panorama_76DBE9A9_797D_D0D5_41DC_0975EEE8F2DE_0_HS_1_0.png",
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
                                "width": 69,
                                "url": "media/panorama_76DBE9A9_797D_D0D5_41DC_0975EEE8F2DE_0_HS_5_0_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "hfov": 7.74,
                             "yaw": -178.18,
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": -39.8
                            }
                           ],
                           "areas": [
                            {
                             "toolTip": "BALCONY",
                             "click": "this.startPanoramaWithCamera(this.panorama_76DFA23E_797D_502F_41D3_B13018714089, this.camera_6C553924_7997_B1D3_41C8_9783BC8196F8); this.mainPlayList.set('selectedIndex', 6)",
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea",
                             "displayTooltipInTouchScreens": true
                            }
                           ],
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "id": "overlay_76DAA9A9_797D_D0D5_41BA_C1B4D651AAC5",
                           "class": "HotspotPanoramaOverlay",
                           "items": [
                            {
                             "yaw": -178.18,
                             "hfov": 7.74,
                             "image": {
                              "levels": [
                               {
                                "height": 140,
                                "width": 139,
                                "url": "media/panorama_76DBE9A9_797D_D0D5_41DC_0975EEE8F2DE_0_HS_5_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "class": "HotspotPanoramaOverlayImage",
                             "pitch": -39.8
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
                                "url": "media/panorama_76DBE9A9_797D_D0D5_41DC_0975EEE8F2DE_0_HS_6_0_0_map.gif",
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
                             "toolTip": "WC",
                             "click": "this.startPanoramaWithCamera(this.panorama_76DCBBE8_797D_7054_4170_FD0720219C73, this.camera_6C1998EF_7997_B02D_41C2_0D05CAFD13AF); this.mainPlayList.set('selectedIndex', 7)",
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea",
                             "displayTooltipInTouchScreens": true
                            }
                           ],
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "id": "overlay_76DAF9A9_797D_D0D5_41D4_7CB22EDFE195",
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
                                "url": "media/panorama_76DBE9A9_797D_D0D5_41DC_0975EEE8F2DE_0_HS_6_0.png",
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
                                "url": "media/panorama_76DBE9A9_797D_D0D5_41DC_0975EEE8F2DE_0_HS_7_0_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "hfov": 7.65,
                             "yaw": 34.82,
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": 6.66
                            }
                           ],
                           "areas": [
                            {
                             "toolTip": "2 BEDROOM",
                             "click": "this.startPanoramaWithCamera(this.panorama_76C8A647_797A_B05D_4186_256163753950, this.camera_6C3CC907_7997_B1DD_41DB_0227D3F07F26); this.mainPlayList.set('selectedIndex', 8)",
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea",
                             "displayTooltipInTouchScreens": true
                            }
                           ],
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "id": "overlay_76DAE9A9_797D_D0D5_41C8_11F62D08162A",
                           "class": "HotspotPanoramaOverlay",
                           "items": [
                            {
                             "yaw": 34.82,
                             "hfov": 7.65,
                             "image": {
                              "levels": [
                               {
                                "height": 106,
                                "width": 106,
                                "url": "media/panorama_76DBE9A9_797D_D0D5_41DC_0975EEE8F2DE_0_HS_7_0.png",
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
                                "url": "media/panorama_76DBE9A9_797D_D0D5_41DC_0975EEE8F2DE_0_HS_8_0_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "hfov": 7.5,
                             "yaw": 34.73,
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": -13.17
                            }
                           ],
                           "areas": [
                            {
                             "toolTip": "1 BEDROOM",
                             "click": "this.startPanoramaWithCamera(this.panorama_76E7D010_797D_EFF3_41CD_0CA79D873EE8, this.camera_6F8D5941_7997_B055_41D4_5C4E264422F1); this.mainPlayList.set('selectedIndex', 4)",
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea",
                             "displayTooltipInTouchScreens": true
                            }
                           ],
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "id": "overlay_76DAC9A9_797D_D0D5_419E_1D3444147B02",
                           "class": "HotspotPanoramaOverlay",
                           "items": [
                            {
                             "yaw": 34.73,
                             "hfov": 7.5,
                             "image": {
                              "levels": [
                               {
                                "height": 106,
                                "width": 106,
                                "url": "media/panorama_76DBE9A9_797D_D0D5_41DC_0975EEE8F2DE_0_HS_8_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "class": "HotspotPanoramaOverlayImage",
                             "pitch": -13.17
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
                            "url": "media/panorama_76DBE9A9_797D_D0D5_41DC_0975EEE8F2DE_hq.jpeg",
                            "class": "ImageResourceLevel"
                           },
                           {
                            "height": 1608,
                            "width": 3217,
                            "url": "media/panorama_76DBE9A9_797D_D0D5_41DC_0975EEE8F2DE.jpeg",
                            "class": "ImageResourceLevel"
                           }
                          ],
                          "class": "ImageResource"
                         }
                        }
                       ],
                       "id": "panorama_76DBE9A9_797D_D0D5_41DC_0975EEE8F2DE",
                       "adjacentPanoramas": [
                        {
                         "panorama": "this.panorama_76DCBBE8_797D_7054_4170_FD0720219C73",
                         "yaw": 82.9,
                         "class": "AdjacentPanorama",
                         "backwardYaw": 161.78,
                         "distance": 1
                        },
                        {
                         "panorama": "this.panorama_76C8BD33_797A_D035_41B1_015319AC55E5",
                         "yaw": -162.92,
                         "class": "AdjacentPanorama",
                         "backwardYaw": -173.12,
                         "distance": 1
                        },
                        {
                         "panorama": "this.panorama_76C8A647_797A_B05D_4186_256163753950",
                         "yaw": 34.82,
                         "class": "AdjacentPanorama",
                         "backwardYaw": -128.51,
                         "distance": 1
                        },
                        {
                         "panorama": "this.panorama_76F2A5B3_797D_7035_41C9_EDB47E025BBC",
                         "yaw": -162.92,
                         "class": "AdjacentPanorama",
                         "backwardYaw": -172.22,
                         "distance": 1
                        },
                        {
                         "panorama": "this.panorama_76E9C091_797D_B0F5_41D3_9498EC183F6C",
                         "yaw": -162.92,
                         "class": "AdjacentPanorama",
                         "backwardYaw": -171.96,
                         "distance": 1
                        },
                        {
                         "panorama": "this.panorama_76DFA23E_797D_502F_41D3_B13018714089",
                         "yaw": -178.18,
                         "class": "AdjacentPanorama",
                         "backwardYaw": -174.34,
                         "distance": 1
                        },
                        {
                         "panorama": {
                          "frames": [
                           {
                            "thumbnailUrl": "media/panorama_76DECD25_797E_B1DD_41CC_82836B30F638_t.jpg",
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
                                   "url": "media/panorama_76DECD25_797E_B1DD_41CC_82836B30F638_0_HS_0_0_0_map.gif",
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
                              "id": "overlay_76DEDD25_797E_B1DC_41CD_88FF920B869E",
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
                                   "url": "media/panorama_76DECD25_797E_B1DD_41CC_82836B30F638_0_HS_0_0.png",
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
                                   "url": "media/panorama_76DECD25_797E_B1DD_41CC_82836B30F638_0_HS_6_0_0_map.gif",
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
                              "id": "overlay_76DE8D26_797E_B1DF_41B9_7E75970FEC36",
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
                                   "url": "media/panorama_76DECD25_797E_B1DD_41CC_82836B30F638_0_HS_6_0.png",
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
                                   "url": "media/panorama_76DECD25_797E_B1DD_41CC_82836B30F638_0_HS_1_0_0_map.gif",
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
                                "click": "this.startPanoramaWithCamera(this.panorama_76E7D010_797D_EFF3_41CD_0CA79D873EE8, this.camera_6A267A24_7997_B3D3_4188_86CCFC62F6E4); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 5); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 8)",
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "enabledInCardboard": true,
                              "rollOverDisplay": true,
                              "id": "overlay_76DEAD26_797E_B1DF_41DA_399602E2625C",
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
                                   "url": "media/panorama_76DECD25_797E_B1DD_41CC_82836B30F638_0_HS_1_0.png",
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
                                   "url": "media/panorama_76DECD25_797E_B1DD_41CC_82836B30F638_0_HS_7_0_0_map.gif",
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
                                "click": "this.startPanoramaWithCamera(this.panorama_76F2A5B3_797D_7035_41C9_EDB47E025BBC, this.camera_6A0189F3_7997_B035_41D3_5C9FFF41FB5D); this.mainPlayList.set('selectedIndex', 2)",
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea",
                                "displayTooltipInTouchScreens": true
                               }
                              ],
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "id": "overlay_76DEBD26_797E_B1DF_41D4_631007FC9360",
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
                                   "url": "media/panorama_76DECD25_797E_B1DD_41CC_82836B30F638_0_HS_7_0.png",
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
                                   "url": "media/panorama_76DECD25_797E_B1DD_41CC_82836B30F638_0_HS_8_0_0_map.gif",
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
                                "click": "this.startPanoramaWithCamera(this.panorama_686578D6_797E_F07F_419A_320C6D79939B, this.camera_6A2DBA1A_7997_B3F7_41B6_0B2A18A4470A); this.mainPlayList.set('selectedIndex', 0)",
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea",
                                "displayTooltipInTouchScreens": true
                               }
                              ],
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "id": "overlay_76DD5D26_797E_B1DF_41DB_87E51314F268",
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
                                   "url": "media/panorama_76DECD25_797E_B1DD_41CC_82836B30F638_0_HS_8_0.png",
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
                               "url": "media/panorama_76DECD25_797E_B1DD_41CC_82836B30F638_hq.jpeg",
                               "class": "ImageResourceLevel"
                              },
                              {
                               "height": 1608,
                               "width": 3217,
                               "url": "media/panorama_76DECD25_797E_B1DD_41CC_82836B30F638.jpeg",
                               "class": "ImageResourceLevel"
                              }
                             ],
                             "class": "ImageResource"
                            }
                           }
                          ],
                          "id": "panorama_76DECD25_797E_B1DD_41CC_82836B30F638",
                          "adjacentPanoramas": [
                           {
                            "panorama": "this.panorama_76C8BD33_797A_D035_41B1_015319AC55E5",
                            "yaw": -170.68,
                            "class": "AdjacentPanorama",
                            "backwardYaw": -173.12,
                            "distance": 1
                           },
                           {
                            "panorama": "this.panorama_76DCBBE8_797D_7054_4170_FD0720219C73",
                            "yaw": -170.68,
                            "class": "AdjacentPanorama",
                            "backwardYaw": -162.92,
                            "distance": 1
                           },
                           {
                            "panorama": "this.panorama_76C8A647_797A_B05D_4186_256163753950",
                            "yaw": -170.68,
                            "class": "AdjacentPanorama",
                            "backwardYaw": -172.21,
                            "distance": 1
                           },
                           {
                            "panorama": "this.panorama_76F2A5B3_797D_7035_41C9_EDB47E025BBC",
                            "yaw": -16.8,
                            "class": "AdjacentPanorama",
                            "backwardYaw": -97.22,
                            "distance": 1
                           },
                           {
                            "panorama": "this.panorama_76E9C091_797D_B0F5_41D3_9498EC183F6C",
                            "yaw": -170.68,
                            "class": "AdjacentPanorama",
                            "backwardYaw": -171.96,
                            "distance": 1
                           },
                           {
                            "panorama": "this.panorama_76DBE9A9_797D_D0D5_41DC_0975EEE8F2DE",
                            "yaw": -170.68,
                            "class": "AdjacentPanorama",
                            "backwardYaw": -162.92,
                            "distance": 1
                           },
                           {
                            "panorama": "this.panorama_76DFA23E_797D_502F_41D3_B13018714089",
                            "yaw": -170.68,
                            "class": "AdjacentPanorama",
                            "backwardYaw": -170.58,
                            "distance": 1
                           },
                           {
                            "panorama": "this.panorama_686578D6_797E_F07F_419A_320C6D79939B",
                            "yaw": 0.93,
                            "class": "AdjacentPanorama",
                            "backwardYaw": 140.49,
                            "distance": 1
                           },
                           {
                            "panorama": {
                             "frames": [
                              {
                               "thumbnailUrl": "media/panorama_76E7D010_797D_EFF3_41CD_0CA79D873EE8_t.jpg",
                               "overlays": [
                                {
                                 "useHandCursor": true,
                                 "maps": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 46,
                                      "width": 46,
                                      "url": "media/panorama_76E7D010_797D_EFF3_41CD_0CA79D873EE8_0_HS_0_0_0_map.gif",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "hfov": 6.56,
                                   "yaw": -157,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": 7.99
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
                                 "id": "overlay_76E73010_797D_EFF3_41B7_24B40A48178E",
                                 "class": "HotspotPanoramaOverlay",
                                 "items": [
                                  {
                                   "yaw": -157,
                                   "hfov": 6.56,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 92,
                                      "width": 92,
                                      "url": "media/panorama_76E7D010_797D_EFF3_41CD_0CA79D873EE8_0_HS_0_0.png",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "class": "HotspotPanoramaOverlayImage",
                                   "pitch": 7.99
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
                                      "width": 46,
                                      "url": "media/panorama_76E7D010_797D_EFF3_41CD_0CA79D873EE8_0_HS_2_0_0_map.gif",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "hfov": 5.74,
                                   "yaw": -156.62,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": -29.99
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
                                 "id": "overlay_76E77011_797D_EFF5_41D7_DDA0205FA138",
                                 "class": "HotspotPanoramaOverlay",
                                 "items": [
                                  {
                                   "yaw": -156.62,
                                   "hfov": 5.74,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 92,
                                      "width": 92,
                                      "url": "media/panorama_76E7D010_797D_EFF3_41CD_0CA79D873EE8_0_HS_2_0.png",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "class": "HotspotPanoramaOverlayImage",
                                   "pitch": -29.99
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
                                      "url": "media/panorama_76E7D010_797D_EFF3_41CD_0CA79D873EE8_0_HS_1_0_0_map.gif",
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
                                   "click": "this.startPanoramaWithCamera(this.panorama_686578D6_797E_F07F_419A_320C6D79939B, this.camera_6D9F8ADF_7997_B06C_41DD_95A865CD9643); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 8); this.mainPlayList.set('selectedIndex', 9)",
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": true,
                                 "id": "overlay_76E74011_797D_EFF5_41B7_1E9FCFCE841C",
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
                                      "url": "media/panorama_76E7D010_797D_EFF3_41CD_0CA79D873EE8_0_HS_1_0.png",
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
                                      "url": "media/panorama_76E7D010_797D_EFF3_41CD_0CA79D873EE8_0_HS_3_0_0_map.gif",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "hfov": 9.4,
                                   "yaw": -157,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": 8.67
                                  }
                                 ],
                                 "areas": [
                                  {
                                   "toolTip": "MASTER BEDROOM",
                                   "click": "this.startPanoramaWithCamera(this.panorama_76DBE9A9_797D_D0D5_41DC_0975EEE8F2DE, this.camera_6A718AC1_7997_B055_41C8_2F1A08A224D6); this.mainPlayList.set('selectedIndex', 5)",
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea",
                                   "displayTooltipInTouchScreens": true
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "id": "overlay_76E6A011_797D_EFF5_41C0_20C097D55ECB",
                                 "class": "HotspotPanoramaOverlay",
                                 "items": [
                                  {
                                   "yaw": -157,
                                   "hfov": 9.4,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 132,
                                      "width": 132,
                                      "url": "media/panorama_76E7D010_797D_EFF3_41CD_0CA79D873EE8_0_HS_3_0.png",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "class": "HotspotPanoramaOverlayImage",
                                   "pitch": 8.67
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
                                      "url": "media/panorama_76E7D010_797D_EFF3_41CD_0CA79D873EE8_0_HS_4_0_0_map.gif",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "hfov": 8.17,
                                   "yaw": -156.62,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": -30.7
                                  }
                                 ],
                                 "areas": [
                                  {
                                   "toolTip": "LIVING ROOM",
                                   "click": "this.startPanoramaWithCamera(this.panorama_76E9C091_797D_B0F5_41D3_9498EC183F6C, this.camera_6A76CAB7_7997_B03D_41DD_54A8F1328B4A); this.mainPlayList.set('selectedIndex', 3)",
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea",
                                   "displayTooltipInTouchScreens": true
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "id": "overlay_76E6B011_797D_EFF5_4197_CA2C654FCE2E",
                                 "class": "HotspotPanoramaOverlay",
                                 "items": [
                                  {
                                   "yaw": -156.62,
                                   "hfov": 8.17,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 132,
                                      "width": 132,
                                      "url": "media/panorama_76E7D010_797D_EFF3_41CD_0CA79D873EE8_0_HS_4_0.png",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "class": "HotspotPanoramaOverlayImage",
                                   "pitch": -30.7
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
                                  "url": "media/panorama_76E7D010_797D_EFF3_41CD_0CA79D873EE8_hq.jpeg",
                                  "class": "ImageResourceLevel"
                                 },
                                 {
                                  "height": 1608,
                                  "width": 3217,
                                  "url": "media/panorama_76E7D010_797D_EFF3_41CD_0CA79D873EE8.jpeg",
                                  "class": "ImageResourceLevel"
                                 }
                                ],
                                "class": "ImageResource"
                               }
                              }
                             ],
                             "id": "panorama_76E7D010_797D_EFF3_41CD_0CA79D873EE8",
                             "adjacentPanoramas": [
                              {
                               "panorama": "this.panorama_76DCBBE8_797D_7054_4170_FD0720219C73",
                               "yaw": -170.2,
                               "class": "AdjacentPanorama",
                               "backwardYaw": -162.92,
                               "distance": 1
                              },
                              {
                               "panorama": "this.panorama_76C8BD33_797A_D035_41B1_015319AC55E5",
                               "yaw": -170.2,
                               "class": "AdjacentPanorama",
                               "backwardYaw": -173.12,
                               "distance": 1
                              },
                              {
                               "panorama": "this.panorama_76C8A647_797A_B05D_4186_256163753950",
                               "yaw": -170.2,
                               "class": "AdjacentPanorama",
                               "backwardYaw": -172.21,
                               "distance": 1
                              },
                              {
                               "panorama": "this.panorama_76F2A5B3_797D_7035_41C9_EDB47E025BBC",
                               "yaw": -170.2,
                               "class": "AdjacentPanorama",
                               "backwardYaw": -172.22,
                               "distance": 1
                              },
                              {
                               "panorama": "this.panorama_76E9C091_797D_B0F5_41D3_9498EC183F6C",
                               "yaw": -156.62,
                               "class": "AdjacentPanorama",
                               "backwardYaw": 41.79,
                               "distance": 1
                              },
                              {
                               "panorama": "this.panorama_76DBE9A9_797D_D0D5_41DC_0975EEE8F2DE",
                               "yaw": -157,
                               "class": "AdjacentPanorama",
                               "backwardYaw": 34.73,
                               "distance": 1
                              },
                              {
                               "panorama": "this.panorama_76DFA23E_797D_502F_41D3_B13018714089",
                               "yaw": -170.2,
                               "class": "AdjacentPanorama",
                               "backwardYaw": -170.58,
                               "distance": 1
                              },
                              {
                               "panorama": "this.panorama_76DECD25_797E_B1DD_41CC_82836B30F638",
                               "yaw": -170.2,
                               "class": "AdjacentPanorama",
                               "backwardYaw": -170.68,
                               "distance": 1
                              },
                              {
                               "panorama": "this.panorama_686578D6_797E_F07F_419A_320C6D79939B",
                               "yaw": -170.2,
                               "class": "AdjacentPanorama",
                               "backwardYaw": -171.35,
                               "distance": 1
                              }
                             ],
                             "partial": false,
                             "pitch": 0,
                             "thumbnailUrl": "media/panorama_76E7D010_797D_EFF3_41CD_0CA79D873EE8_t.jpg",
                             "hfovMin": 100,
                             "label": "1 BEDROOM",
                             "hfovMax": 120,
                             "hfov": 360,
                             "class": "Panorama",
                             "vfov": 180
                            },
                            "yaw": -170.68,
                            "class": "AdjacentPanorama",
                            "backwardYaw": -170.2,
                            "distance": 1
                           }
                          ],
                          "partial": false,
                          "pitch": 0,
                          "thumbnailUrl": "media/panorama_76DECD25_797E_B1DD_41CC_82836B30F638_t.jpg",
                          "hfovMin": 100,
                          "label": "ENTRANCE",
                          "hfovMax": 120,
                          "hfov": 360,
                          "class": "Panorama",
                          "vfov": 180
                         },
                         "yaw": -162.92,
                         "class": "AdjacentPanorama",
                         "backwardYaw": -170.68,
                         "distance": 1
                        },
                        {
                         "panorama": "this.panorama_686578D6_797E_F07F_419A_320C6D79939B",
                         "yaw": -162.92,
                         "class": "AdjacentPanorama",
                         "backwardYaw": -171.35,
                         "distance": 1
                        },
                        {
                         "panorama": "this.panorama_76E7D010_797D_EFF3_41CD_0CA79D873EE8",
                         "yaw": 34.73,
                         "class": "AdjacentPanorama",
                         "backwardYaw": -157,
                         "distance": 1
                        }
                       ],
                       "partial": false,
                       "pitch": 0,
                       "thumbnailUrl": "media/panorama_76DBE9A9_797D_D0D5_41DC_0975EEE8F2DE_t.jpg",
                       "hfovMin": 100,
                       "label": "MASTER",
                       "hfovMax": 120,
                       "hfov": 360,
                       "class": "Panorama",
                       "vfov": 180
                      },
                      "yaw": -171.96,
                      "class": "AdjacentPanorama",
                      "backwardYaw": -162.92,
                      "distance": 1
                     },
                     {
                      "panorama": "this.panorama_76DFA23E_797D_502F_41D3_B13018714089",
                      "yaw": -171.96,
                      "class": "AdjacentPanorama",
                      "backwardYaw": -170.58,
                      "distance": 1
                     },
                     {
                      "panorama": "this.panorama_76DECD25_797E_B1DD_41CC_82836B30F638",
                      "yaw": -171.96,
                      "class": "AdjacentPanorama",
                      "backwardYaw": -170.68,
                      "distance": 1
                     },
                     {
                      "panorama": "this.panorama_686578D6_797E_F07F_419A_320C6D79939B",
                      "yaw": -171.96,
                      "class": "AdjacentPanorama",
                      "backwardYaw": -171.35,
                      "distance": 1
                     },
                     {
                      "panorama": "this.panorama_76E7D010_797D_EFF3_41CD_0CA79D873EE8",
                      "yaw": 41.79,
                      "class": "AdjacentPanorama",
                      "backwardYaw": -156.62,
                      "distance": 1
                     }
                    ],
                    "partial": false,
                    "pitch": 0,
                    "thumbnailUrl": "media/panorama_76E9C091_797D_B0F5_41D3_9498EC183F6C_t.jpg",
                    "hfovMin": 100,
                    "label": "LIVING ROOM",
                    "hfovMax": 120,
                    "hfov": 360,
                    "class": "Panorama",
                    "vfov": 180
                   },
                   "yaw": -170.58,
                   "class": "AdjacentPanorama",
                   "backwardYaw": -171.96,
                   "distance": 1
                  },
                  {
                   "panorama": "this.panorama_76DBE9A9_797D_D0D5_41DC_0975EEE8F2DE",
                   "yaw": -174.34,
                   "class": "AdjacentPanorama",
                   "backwardYaw": -178.18,
                   "distance": 1
                  },
                  {
                   "panorama": "this.panorama_76DCBBE8_797D_7054_4170_FD0720219C73",
                   "yaw": -170.58,
                   "class": "AdjacentPanorama",
                   "backwardYaw": -162.92,
                   "distance": 1
                  },
                  {
                   "panorama": "this.panorama_76DECD25_797E_B1DD_41CC_82836B30F638",
                   "yaw": -170.58,
                   "class": "AdjacentPanorama",
                   "backwardYaw": -170.68,
                   "distance": 1
                  },
                  {
                   "panorama": "this.panorama_686578D6_797E_F07F_419A_320C6D79939B",
                   "yaw": -170.58,
                   "class": "AdjacentPanorama",
                   "backwardYaw": -171.35,
                   "distance": 1
                  },
                  {
                   "panorama": "this.panorama_76E7D010_797D_EFF3_41CD_0CA79D873EE8",
                   "yaw": -170.58,
                   "class": "AdjacentPanorama",
                   "backwardYaw": -170.2,
                   "distance": 1
                  }
                 ],
                 "partial": false,
                 "pitch": 0,
                 "thumbnailUrl": "media/panorama_76DFA23E_797D_502F_41D3_B13018714089_t.jpg",
                 "hfovMin": 100,
                 "label": "BALCONY",
                 "hfovMax": 120,
                 "hfov": 360,
                 "class": "Panorama",
                 "vfov": 180
                },
                "yaw": -172.22,
                "class": "AdjacentPanorama",
                "backwardYaw": -170.58,
                "distance": 1
               },
               {
                "panorama": "this.panorama_76E9C091_797D_B0F5_41D3_9498EC183F6C",
                "yaw": 12.06,
                "class": "AdjacentPanorama",
                "backwardYaw": -176.8,
                "distance": 1
               },
               {
                "panorama": "this.panorama_76DBE9A9_797D_D0D5_41DC_0975EEE8F2DE",
                "yaw": -172.22,
                "class": "AdjacentPanorama",
                "backwardYaw": -162.92,
                "distance": 1
               },
               {
                "panorama": "this.panorama_76DCBBE8_797D_7054_4170_FD0720219C73",
                "yaw": -172.22,
                "class": "AdjacentPanorama",
                "backwardYaw": -162.92,
                "distance": 1
               },
               {
                "panorama": "this.panorama_76DECD25_797E_B1DD_41CC_82836B30F638",
                "yaw": -97.22,
                "class": "AdjacentPanorama",
                "backwardYaw": -16.8,
                "distance": 1
               },
               {
                "panorama": "this.panorama_686578D6_797E_F07F_419A_320C6D79939B",
                "yaw": -172.22,
                "class": "AdjacentPanorama",
                "backwardYaw": -171.35,
                "distance": 1
               },
               {
                "panorama": "this.panorama_76E7D010_797D_EFF3_41CD_0CA79D873EE8",
                "yaw": -172.22,
                "class": "AdjacentPanorama",
                "backwardYaw": -170.2,
                "distance": 1
               }
              ],
              "partial": false,
              "pitch": 0,
              "thumbnailUrl": "media/panorama_76F2A5B3_797D_7035_41C9_EDB47E025BBC_t.jpg",
              "hfovMin": 100,
              "label": "POOL",
              "hfovMax": 120,
              "hfov": 360,
              "class": "Panorama",
              "vfov": 180
             },
             "yaw": -172.21,
             "class": "AdjacentPanorama",
             "backwardYaw": -172.22,
             "distance": 1
            },
            {
             "panorama": "this.panorama_76E9C091_797D_B0F5_41D3_9498EC183F6C",
             "yaw": -172.21,
             "class": "AdjacentPanorama",
             "backwardYaw": -171.96,
             "distance": 1
            },
            {
             "panorama": "this.panorama_76DBE9A9_797D_D0D5_41DC_0975EEE8F2DE",
             "yaw": -128.51,
             "class": "AdjacentPanorama",
             "backwardYaw": 34.82,
             "distance": 1
            },
            {
             "panorama": "this.panorama_76DFA23E_797D_502F_41D3_B13018714089",
             "yaw": -172.21,
             "class": "AdjacentPanorama",
             "backwardYaw": -170.58,
             "distance": 1
            },
            {
             "panorama": "this.panorama_76DECD25_797E_B1DD_41CC_82836B30F638",
             "yaw": -172.21,
             "class": "AdjacentPanorama",
             "backwardYaw": -170.68,
             "distance": 1
            },
            {
             "panorama": "this.panorama_686578D6_797E_F07F_419A_320C6D79939B",
             "yaw": -172.21,
             "class": "AdjacentPanorama",
             "backwardYaw": -171.35,
             "distance": 1
            },
            {
             "panorama": "this.panorama_76E7D010_797D_EFF3_41CD_0CA79D873EE8",
             "yaw": -172.21,
             "class": "AdjacentPanorama",
             "backwardYaw": -170.2,
             "distance": 1
            }
           ],
           "partial": false,
           "pitch": 0,
           "thumbnailUrl": "media/panorama_76C8A647_797A_B05D_4186_256163753950_t.jpg",
           "hfovMin": 100,
           "label": "2 BEDROOM",
           "hfovMax": 120,
           "hfov": 360,
           "class": "Panorama",
           "vfov": 180
          },
          "yaw": -162.92,
          "class": "AdjacentPanorama",
          "backwardYaw": -172.21,
          "distance": 1
         },
         {
          "panorama": "this.panorama_76F2A5B3_797D_7035_41C9_EDB47E025BBC",
          "yaw": -162.92,
          "class": "AdjacentPanorama",
          "backwardYaw": -172.22,
          "distance": 1
         },
         {
          "panorama": "this.panorama_76E9C091_797D_B0F5_41D3_9498EC183F6C",
          "yaw": -162.92,
          "class": "AdjacentPanorama",
          "backwardYaw": -171.96,
          "distance": 1
         },
         {
          "panorama": "this.panorama_76DBE9A9_797D_D0D5_41DC_0975EEE8F2DE",
          "yaw": 161.78,
          "class": "AdjacentPanorama",
          "backwardYaw": 82.9,
          "distance": 1
         },
         {
          "panorama": "this.panorama_76DFA23E_797D_502F_41D3_B13018714089",
          "yaw": -162.92,
          "class": "AdjacentPanorama",
          "backwardYaw": -170.58,
          "distance": 1
         },
         {
          "panorama": "this.panorama_76DECD25_797E_B1DD_41CC_82836B30F638",
          "yaw": -162.92,
          "class": "AdjacentPanorama",
          "backwardYaw": -170.68,
          "distance": 1
         },
         {
          "panorama": "this.panorama_686578D6_797E_F07F_419A_320C6D79939B",
          "yaw": -162.92,
          "class": "AdjacentPanorama",
          "backwardYaw": -171.35,
          "distance": 1
         },
         {
          "panorama": "this.panorama_76E7D010_797D_EFF3_41CD_0CA79D873EE8",
          "yaw": -162.92,
          "class": "AdjacentPanorama",
          "backwardYaw": -170.2,
          "distance": 1
         }
        ],
        "partial": false,
        "pitch": 0,
        "thumbnailUrl": "media/panorama_76DCBBE8_797D_7054_4170_FD0720219C73_t.jpg",
        "hfovMin": 100,
        "label": "WC",
        "hfovMax": 120,
        "hfov": 360,
        "class": "Panorama",
        "vfov": 180
       },
       "yaw": -173.12,
       "class": "AdjacentPanorama",
       "backwardYaw": -162.92,
       "distance": 1
      },
      {
       "panorama": "this.panorama_686578D6_797E_F07F_419A_320C6D79939B",
       "yaw": -173.12,
       "class": "AdjacentPanorama",
       "backwardYaw": -171.35,
       "distance": 1
      },
      {
       "panorama": "this.panorama_76F2A5B3_797D_7035_41C9_EDB47E025BBC",
       "yaw": -173.12,
       "class": "AdjacentPanorama",
       "backwardYaw": -172.22,
       "distance": 1
      },
      {
       "panorama": "this.panorama_76E9C091_797D_B0F5_41D3_9498EC183F6C",
       "yaw": -173.12,
       "class": "AdjacentPanorama",
       "backwardYaw": -171.96,
       "distance": 1
      },
      {
       "panorama": "this.panorama_76DBE9A9_797D_D0D5_41DC_0975EEE8F2DE",
       "yaw": -173.12,
       "class": "AdjacentPanorama",
       "backwardYaw": -162.92,
       "distance": 1
      },
      {
       "panorama": "this.panorama_76DFA23E_797D_502F_41D3_B13018714089",
       "yaw": -173.12,
       "class": "AdjacentPanorama",
       "backwardYaw": -170.58,
       "distance": 1
      },
      {
       "panorama": "this.panorama_76DECD25_797E_B1DD_41CC_82836B30F638",
       "yaw": -173.12,
       "class": "AdjacentPanorama",
       "backwardYaw": -170.68,
       "distance": 1
      },
      {
       "panorama": "this.panorama_76C8A647_797A_B05D_4186_256163753950",
       "yaw": 18.79,
       "class": "AdjacentPanorama",
       "backwardYaw": -129.92,
       "distance": 1
      },
      {
       "panorama": "this.panorama_76E7D010_797D_EFF3_41CD_0CA79D873EE8",
       "yaw": -173.12,
       "class": "AdjacentPanorama",
       "backwardYaw": -170.2,
       "distance": 1
      }
     ],
     "partial": false,
     "pitch": 0,
     "thumbnailUrl": "media/panorama_76C8BD33_797A_D035_41B1_015319AC55E5_t.jpg",
     "hfovMin": 100,
     "label": "ROOFTOP",
     "hfovMax": 120,
     "hfov": 360,
     "class": "Panorama",
     "vfov": 180
    },
    "yaw": -171.35,
    "class": "AdjacentPanorama",
    "backwardYaw": -173.12,
    "distance": 1
   },
   {
    "panorama": "this.panorama_76DCBBE8_797D_7054_4170_FD0720219C73",
    "yaw": -171.35,
    "class": "AdjacentPanorama",
    "backwardYaw": -162.92,
    "distance": 1
   },
   {
    "panorama": "this.panorama_76F2A5B3_797D_7035_41C9_EDB47E025BBC",
    "yaw": -171.35,
    "class": "AdjacentPanorama",
    "backwardYaw": -172.22,
    "distance": 1
   },
   {
    "panorama": "this.panorama_76E9C091_797D_B0F5_41D3_9498EC183F6C",
    "yaw": -171.35,
    "class": "AdjacentPanorama",
    "backwardYaw": -171.96,
    "distance": 1
   },
   {
    "panorama": "this.panorama_76DBE9A9_797D_D0D5_41DC_0975EEE8F2DE",
    "yaw": -171.35,
    "class": "AdjacentPanorama",
    "backwardYaw": -162.92,
    "distance": 1
   },
   {
    "panorama": "this.panorama_76DFA23E_797D_502F_41D3_B13018714089",
    "yaw": -171.35,
    "class": "AdjacentPanorama",
    "backwardYaw": -170.58,
    "distance": 1
   },
   {
    "panorama": "this.panorama_76DECD25_797E_B1DD_41CC_82836B30F638",
    "yaw": 140.49,
    "class": "AdjacentPanorama",
    "backwardYaw": 0.93,
    "distance": 1
   },
   {
    "panorama": "this.panorama_76C8A647_797A_B05D_4186_256163753950",
    "yaw": -171.35,
    "class": "AdjacentPanorama",
    "backwardYaw": -172.21,
    "distance": 1
   },
   {
    "panorama": "this.panorama_76E7D010_797D_EFF3_41CD_0CA79D873EE8",
    "yaw": -171.35,
    "class": "AdjacentPanorama",
    "backwardYaw": -170.2,
    "distance": 1
   }
  ],
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_686578D6_797E_F07F_419A_320C6D79939B_t.jpg",
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
         "click": "this.mainPlayList.set('selectedIndex', 0)",
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "rollOverDisplay": false,
       "image": {
        "x": 253.34,
        "y": 365.62,
        "class": "HotspotMapOverlayImage",
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
  "label": "STREET VIEW",
  "hfovMax": 120,
  "hfov": 360,
  "class": "Panorama",
  "vfov": 180
 },
 {
  "buttonCardboardView": {
   "verticalAlign": "middle",
   "paddingRight": 0,
   "mode": "push",
   "width": "100%",
   "height": "100%",
   "iconURL": "skin/IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37.png",
   "transparencyActive": false,
   "paddingLeft": 0,
   "borderRadius": 0,
   "borderSize": 0,
   "minHeight": 1,
   "shadow": false,
   "horizontalAlign": "center",
   "cursor": "hand",
   "paddingBottom": 0,
   "class": "IconButton",
   "id": "IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37",
   "minWidth": 1,
   "paddingTop": 0,
   "backgroundOpacity": 0,
   "maxHeight": 60,
   "maxWidth": 60
  },
  "touchControlMode": "drag_rotation",
  "displayPlaybackBar": true,
  "buttonToggleHotspots": {
   "verticalAlign": "middle",
   "paddingRight": 0,
   "mode": "toggle",
   "toolTipPaddingRight": 6,
   "width": "100%",
   "toolTipPaddingBottom": 4,
   "iconURL": "skin/IconButton_80E5955A_8E23_BB05_41CA_43DD61DBAEE9.png",
   "height": "100%",
   "transparencyActive": true,
   "toolTip": "Hotspots Visibility",
   "paddingLeft": 0,
   "toolTipTextShadowOpacity": 0,
   "toolTipFontSize": 11,
   "borderRadius": 0,
   "toolTipBorderSize": 1,
   "toolTipOpacity": 0.7,
   "borderSize": 0,
   "toolTipBackgroundColor": "#000000",
   "toolTipShadowOpacity": 1,
   "toolTipShadowVerticalLength": 0,
   "toolTipPaddingLeft": 6,
   "minHeight": 1,
   "shadow": false,
   "toolTipFontStyle": "normal",
   "toolTipBorderRadius": 3,
   "horizontalAlign": "center",
   "click": "if(!this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, true, 0, this.effect_CDD059FA_EED0_D223_41DB_70ACFBE986FE, 'showEffect', false) } else if(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, false, 0, this.effect_CDD049FB_EED0_D221_41EB_CA2134B978E0, 'hideEffect', false) }",
   "toolTipBorderColor": "#767676",
   "cursor": "hand",
   "paddingBottom": 0,
   "class": "IconButton",
   "toolTipTextShadowBlurRadius": 3,
   "id": "IconButton_80E5955A_8E23_BB05_41CA_43DD61DBAEE9",
   "toolTipTextShadowColor": "#000000",
   "toolTipShadowHorizontalLength": 0,
   "toolTipFontWeight": "normal",
   "minWidth": 1,
   "toolTipShadowSpread": 0,
   "paddingTop": 0,
   "toolTipShadowColor": "#333333",
   "toolTipShadowBlurRadius": 3,
   "pressedIconURL": "skin/IconButton_80E5955A_8E23_BB05_41CA_43DD61DBAEE9_pressed.png",
   "toolTipPaddingTop": 4,
   "backgroundOpacity": 0,
   "maxHeight": 60,
   "maxWidth": 60,
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
  "movementMode": "constrained",
  "id": "MapViewerMapPlayer",
  "class": "MapPlayer",
  "viewerArea": {
   "progressBorderRadius": 0,
   "progressBarBackgroundColorDirection": "vertical",
   "progressBackgroundColor": [
    "#FFFFFF"
   ],
   "paddingRight": 0,
   "toolTipPaddingBottom": 4,
   "playbackBarHeadShadowVerticalLength": 0,
   "progressBarOpacity": 1,
   "playbackBarBorderColor": "#FFFFFF",
   "playbackBarBackgroundColor": [
    "#FFFFFF"
   ],
   "playbackBarProgressBackgroundColorDirection": "vertical",
   "progressRight": 0,
   "toolTipBorderSize": 1,
   "toolTipOpacity": 0.7,
   "toolTipShadowOpacity": 1,
   "playbackBarHeight": 10,
   "playbackBarOpacity": 1,
   "toolTipShadowVerticalLength": 0,
   "playbackBarHeadWidth": 6,
   "shadow": false,
   "toolTipFontStyle": "normal",
   "playbackBarBackgroundColorDirection": "vertical",
   "class": "ViewerArea",
   "playbackBarProgressBorderSize": 0,
   "progressBottom": 2,
   "paddingBottom": 0,
   "playbackBarHeadBackgroundColorDirection": "vertical",
   "playbackBarRight": 0,
   "toolTipTextShadowColor": "#000000",
   "progressBorderSize": 0,
   "progressBarBorderSize": 0,
   "progressBarBorderRadius": 0,
   "playbackBarProgressBorderRadius": 0,
   "paddingTop": 0,
   "transitionMode": "blending",
   "toolTipShadowSpread": 0,
   "toolTipShadowColor": "#333333",
   "toolTipShadowBlurRadius": 3,
   "progressBackgroundOpacity": 1,
   "toolTipPaddingTop": 4,
   "toolTipFontColor": "#606060",
   "playbackBarBorderRadius": 0,
   "playbackBarHeadShadow": true,
   "playbackBarHeadShadowHorizontalLength": 0,
   "playbackBarProgressBorderColor": "#000000",
   "toolTipPaddingRight": 6,
   "playbackBarHeadBorderRadius": 0,
   "paddingLeft": 0,
   "toolTipTextShadowOpacity": 0,
   "progressLeft": 0,
   "toolTipFontSize": 11,
   "borderRadius": 0,
   "borderSize": 0,
   "playbackBarHeadBorderColor": "#000000",
   "progressBackgroundColorRatios": [
    0
   ],
   "playbackBarProgressOpacity": 1,
   "toolTipBackgroundColor": "#000000",
   "playbackBarHeadShadowBlurRadius": 3,
   "toolTipPaddingLeft": 6,
   "toolTipBorderColor": "#767676",
   "playbackBarProgressBackgroundColorRatios": [
    0
   ],
   "playbackBarLeft": 0,
   "playbackBarHeadHeight": 15,
   "playbackBarBackgroundOpacity": 1,
   "playbackBarHeadBackgroundColor": [
    "#111111",
    "#666666"
   ],
   "minHeight": 1,
   "toolTipBorderRadius": 3,
   "playbackBarHeadShadowOpacity": 0.7,
   "top": "10%",
   "playbackBarBorderSize": 0,
   "toolTipTextShadowBlurRadius": 3,
   "playbackBarHeadBackgroundColorRatios": [
    0,
    1
   ],
   "bottom": "10%",
   "progressBarBorderColor": "#000000",
   "id": "MapViewer",
   "playbackBarHeadBorderSize": 0,
   "playbackBarHeadShadowColor": "#000000",
   "toolTipShadowHorizontalLength": 0,
   "playbackBarHeadOpacity": 1,
   "toolTipFontWeight": "normal",
   "progressBackgroundColorDirection": "vertical",
   "minWidth": 1,
   "progressBarBackgroundColorRatios": [
    0
   ],
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
  "initialPosition": {
   "hfov": 120,
   "yaw": 178.1,
   "class": "PanoramaCameraPosition",
   "pitch": 2.83
  },
  "id": "panorama_686578D6_797E_F07F_419A_320C6D79939B_camera",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_76DECD25_797E_B1DD_41CC_82836B30F638",
 {
  "initialPosition": {
   "yaw": 16.81,
   "class": "PanoramaCameraPosition",
   "pitch": 2.87
  },
  "id": "panorama_76DECD25_797E_B1DD_41CC_82836B30F638_camera",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_76F2A5B3_797D_7035_41C9_EDB47E025BBC",
 {
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "panorama_76F2A5B3_797D_7035_41C9_EDB47E025BBC_camera",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_76E9C091_797D_B0F5_41D3_9498EC183F6C",
 {
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "panorama_76E9C091_797D_B0F5_41D3_9498EC183F6C_camera",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_76E7D010_797D_EFF3_41CD_0CA79D873EE8",
 {
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "panorama_76E7D010_797D_EFF3_41CD_0CA79D873EE8_camera",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_76DBE9A9_797D_D0D5_41DC_0975EEE8F2DE",
 {
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "panorama_76DBE9A9_797D_D0D5_41DC_0975EEE8F2DE_camera",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_76DFA23E_797D_502F_41D3_B13018714089",
 {
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "panorama_76DFA23E_797D_502F_41D3_B13018714089_camera",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_76DCBBE8_797D_7054_4170_FD0720219C73",
 {
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "panorama_76DCBBE8_797D_7054_4170_FD0720219C73_camera",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_76C8A647_797A_B05D_4186_256163753950",
 {
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "panorama_76C8A647_797A_B05D_4186_256163753950_camera",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_76C8BD33_797A_D035_41B1_015319AC55E5",
 {
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "panorama_76C8BD33_797A_D035_41B1_015319AC55E5_camera",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "mainPlayList",
  "class": "PlayList",
  "items": [
   {
    "id": "PanoramaPlayListItem_6A4906C9_7997_B055_41C7_81492FA53112",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_686578D6_797E_F07F_419A_320C6D79939B",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_6A4906C9_7997_B055_41C7_81492FA53112, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_686578D6_797E_F07F_419A_320C6D79939B_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "media": "this.panorama_76DECD25_797E_B1DD_41CC_82836B30F638",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_76DECD25_797E_B1DD_41CC_82836B30F638_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "media": "this.panorama_76F2A5B3_797D_7035_41C9_EDB47E025BBC",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_76F2A5B3_797D_7035_41C9_EDB47E025BBC_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "media": "this.panorama_76E9C091_797D_B0F5_41D3_9498EC183F6C",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_76E9C091_797D_B0F5_41D3_9498EC183F6C_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "media": "this.panorama_76E7D010_797D_EFF3_41CD_0CA79D873EE8",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_76E7D010_797D_EFF3_41CD_0CA79D873EE8_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "media": "this.panorama_76DBE9A9_797D_D0D5_41DC_0975EEE8F2DE",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_76DBE9A9_797D_D0D5_41DC_0975EEE8F2DE_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "media": "this.panorama_76DFA23E_797D_502F_41D3_B13018714089",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_76DFA23E_797D_502F_41D3_B13018714089_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "media": "this.panorama_76DCBBE8_797D_7054_4170_FD0720219C73",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_76DCBBE8_797D_7054_4170_FD0720219C73_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "media": "this.panorama_76C8A647_797A_B05D_4186_256163753950",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_76C8A647_797A_B05D_4186_256163753950_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 0)",
    "media": "this.panorama_76C8BD33_797A_D035_41B1_015319AC55E5",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_76C8BD33_797A_D035_41B1_015319AC55E5_camera"
   }
  ]
 },
 {
  "id": "ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 0, 1)",
    "media": "this.panorama_686578D6_797E_F07F_419A_320C6D79939B",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_686578D6_797E_F07F_419A_320C6D79939B_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 1, 2)",
    "media": "this.panorama_76DECD25_797E_B1DD_41CC_82836B30F638",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_76DECD25_797E_B1DD_41CC_82836B30F638_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 2, 3)",
    "media": "this.panorama_76F2A5B3_797D_7035_41C9_EDB47E025BBC",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_76F2A5B3_797D_7035_41C9_EDB47E025BBC_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 3, 4)",
    "media": "this.panorama_76E9C091_797D_B0F5_41D3_9498EC183F6C",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_76E9C091_797D_B0F5_41D3_9498EC183F6C_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 4, 5)",
    "media": "this.panorama_76E7D010_797D_EFF3_41CD_0CA79D873EE8",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_76E7D010_797D_EFF3_41CD_0CA79D873EE8_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 5, 6)",
    "media": "this.panorama_76DBE9A9_797D_D0D5_41DC_0975EEE8F2DE",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_76DBE9A9_797D_D0D5_41DC_0975EEE8F2DE_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 6, 7)",
    "media": "this.panorama_76DFA23E_797D_502F_41D3_B13018714089",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_76DFA23E_797D_502F_41D3_B13018714089_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 7, 8)",
    "media": "this.panorama_76DCBBE8_797D_7054_4170_FD0720219C73",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_76DCBBE8_797D_7054_4170_FD0720219C73_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 8, 9)",
    "media": "this.panorama_76C8A647_797A_B05D_4186_256163753950",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_76C8A647_797A_B05D_4186_256163753950_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 9, 0)",
    "media": "this.panorama_76C8BD33_797A_D035_41B1_015319AC55E5",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_76C8BD33_797A_D035_41B1_015319AC55E5_camera"
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
  "id": "playList_6A3036C0_7997_B053_41C7_B807F7A77FA8",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.registerKey('visibility_ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472', this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472.get('visible')); this.registerKey('visibility_Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB', this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB.get('visible')); this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setComponentVisibility(this.Container_807F782A_8E23_A905_41DE_623121285A09, false, -1, this.effect_22974FB2_2DD9_0421_41BA_84205292D043, 'hideEffect', false); this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, false, -1, this.effect_22899FB3_2DD9_0427_41BB_298AEB3D2851, 'hideEffect', false); this.setComponentVisibility(this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB, true, -1, this.effect_2289DFB3_2DD9_0427_41AE_A35795880BA7, 'showEffect', false); this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, false, -1, this.effect_3876CD6E_2DF9_0421_41C1_F0AB7F279824, 'hideEffect', false); this.setComponentVisibility(this.Container_86F3A56C_8E22_5B1D_41CA_9CE53436FE56, false, -1, this.effect_22973FB1_2DD9_0423_41C1_E1E03953DCCE, 'hideEffect', false)",
    "media": "this.video_210B394E_3D54_1A60_41A3_CB42BEC0D3EC",
    "end": "this.setComponentVisibility(this.Container_807F782A_8E23_A905_41DE_623121285A09, true, -1, this.effect_22977FB2_2DD9_0421_41C1_F53B037346DF, 'showEffect', false); this.setComponentVisibility(this.Container_807F782A_8E23_A905_41DE_623121285A09, true, -1, this.effect_22977FB2_2DD9_0421_41C1_F53B037346DF, 'showEffect', false); if(this.existsKey('visibility_Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB')){ if(this.getKey('visibility_Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB')) { this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, true, -1, this.effect_6D9BEAE2_7997_B054_41D1_74FA31D955FA, 'showEffect', false); } else { this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, false, -1, this.effect_22899FB3_2DD9_0427_41BB_298AEB3D2851, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB'); this.setComponentVisibility(this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB, false, -1, this.effect_2289EFB3_2DD9_0427_41C0_ACB5A72AE218, 'hideEffect', false); this.setComponentVisibility(this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB, false, -1, this.effect_2289EFB3_2DD9_0427_41C0_ACB5A72AE218, 'hideEffect', false); if(this.existsKey('visibility_ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472')){ if(this.getKey('visibility_ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472')) { this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, true, -1, this.effect_6D9B3AE2_7997_B054_41D9_5EAC4680B539, 'showEffect', false); } else { this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, false, -1, this.effect_3876CD6E_2DF9_0421_41C1_F0AB7F279824, 'hideEffect', false); } }; this.unregisterKey('visibility_ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472'); this.setComponentVisibility(this.Container_86F3A56C_8E22_5B1D_41CA_9CE53436FE56, true, -1, this.effect_22975FB2_2DD9_0421_41B4_7A2443082F44, 'showEffect', false); this.setComponentVisibility(this.Container_86F3A56C_8E22_5B1D_41CA_9CE53436FE56, true, -1, this.effect_22975FB2_2DD9_0421_41B4_7A2443082F44, 'showEffect', false)",
    "player": "this.MainViewerVideoPlayer",
    "class": "VideoPlayListItem",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_6A3036C0_7997_B053_41C7_B807F7A77FA8, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_6A3036C0_7997_B053_41C7_B807F7A77FA8, 0, this.video_210B394E_3D54_1A60_41A3_CB42BEC0D3EC)"
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
      "initialPosition": {
       "x": "0.50",
       "zoomFactor": 1,
       "class": "PhotoCameraPosition",
       "y": "0.50"
      },
      "scaleMode": "fit_outside",
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
      "initialPosition": {
       "x": "0.50",
       "zoomFactor": 1,
       "class": "PhotoCameraPosition",
       "y": "0.50"
      },
      "scaleMode": "fit_outside",
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
      "initialPosition": {
       "x": "0.50",
       "zoomFactor": 1,
       "class": "PhotoCameraPosition",
       "y": "0.50"
      },
      "scaleMode": "fit_outside",
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
      "initialPosition": {
       "x": "0.50",
       "zoomFactor": 1,
       "class": "PhotoCameraPosition",
       "y": "0.50"
      },
      "scaleMode": "fit_outside",
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
      "initialPosition": {
       "x": "0.50",
       "zoomFactor": 1,
       "class": "PhotoCameraPosition",
       "y": "0.50"
      },
      "scaleMode": "fit_outside",
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
      "initialPosition": {
       "x": "0.50",
       "zoomFactor": 1,
       "class": "PhotoCameraPosition",
       "y": "0.50"
      },
      "scaleMode": "fit_outside",
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
      "initialPosition": {
       "x": "0.50",
       "zoomFactor": 1,
       "class": "PhotoCameraPosition",
       "y": "0.50"
      },
      "scaleMode": "fit_outside",
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
      "initialPosition": {
       "x": "0.50",
       "zoomFactor": 1,
       "class": "PhotoCameraPosition",
       "y": "0.50"
      },
      "scaleMode": "fit_outside",
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
  "id": "playList_6A3196C1_7997_B055_41DA_54B224E073BD",
  "class": "PlayList",
  "items": [
   {
    "media": "this.album_1AE8DEB7_0EE7_8CC7_4198_F5B75788CCF6",
    "player": "this.ViewerAreaLabeled_9FD7235A_96CD_9045_41D9_23A3BCBDB1C6PhotoAlbumPlayer",
    "class": "PhotoAlbumPlayListItem",
    "begin": "this.loopAlbum(this.playList_6A3196C1_7997_B055_41DA_54B224E073BD, 0)"
   }
  ]
 },
 "this.map_4E02A832_427B_EE04_41CC_8E1CEC03E8D3",
 {
  "id": "playList_6A4876C8_7997_B053_41D4_92C1F2B58CAF",
  "class": "PlayList",
  "items": [
   {
    "media": "this.map_4E02A832_427B_EE04_41CC_8E1CEC03E8D3",
    "player": "this.MapViewerMapPlayer",
    "class": "MapPlayListItem",
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
  "initialPosition": {
   "yaw": 6.88,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_6A53F6EB_7997_B055_41D0_81A493CF84C1",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 7.79,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_6A6F86F5_7997_B03D_41D2_AD6BFC8AE801",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 7.78,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_6A6806FE_7997_B02F_41D4_529E69D7E9DE",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 8.04,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_6A62F708_7997_B1D3_41DC_817E6A70222F",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": -97.1,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_6A7E2711_7997_B1F5_41C2_120DCB9C0F3B",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 9.42,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_6A78371B_7997_B1F5_41D9_5BB503950A0B",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 9.32,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_6A759725_7997_B1DD_41B5_0B6DD02529ED",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "hfov": 120,
   "yaw": 8.65,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_6D8F872E_7997_B02F_41D1_0943A58CD020",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 9.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_6D8BF738_7997_B033_41DA_CD173073D4C8",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_6D82A741_7997_B055_41D6_A314A26E724C",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "hfov": 120,
   "yaw": 8.65,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_6D9C174B_7997_B055_41C5_358D0A6DD4AA",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 7.78,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_6D997754_7997_B073_4195_2ED2E200FB9A",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 8.04,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_6D90275E_7997_B06F_41DD_F3B779FF9543",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_6DAA9767_7997_B05D_41D3_9DCA26BCD1CD",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 9.42,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_6DA46770_7997_B033_41C2_4F727A1E780B",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 9.32,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_6DBFE77A_7997_B037_41D8_D9C75647DF86",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 50.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_6DB85784_7997_B0D3_41D1_BE9C72FF20D8",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 9.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_6DB0B78D_7997_B0ED_41D4_B5F222C344DA",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": -161.21,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_6DCA1797_7997_B0FD_41C4_0B2159EFCDBC",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_6DC377A0_7997_B0D3_41DA_44CC8AA80658",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 7.78,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_6DD807AA_7997_B0D7_41B8_97004E6D0BE6",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 8.04,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_6DEFE7B3_7997_B035_41DD_DA78473721D8",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": -145.18,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_6DE557BD_7997_B02D_41DD_A87661760E5B",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 9.42,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_6DFB97C6_7997_B05F_41D0_E5E6C9A3A072",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 9.32,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_6DF117CF_7997_B06D_41D2_575400C8C6CA",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "hfov": 120,
   "yaw": 8.65,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_6D04C7D9_7997_B075_41B4_39F112529A42",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 9.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_6D1947E2_7997_B057_4194_98C944D0F437",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 6.88,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_6D2D67EB_7997_B054_41DA_FD331E4BA8FA",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 7.79,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_6D3FE7F4_7997_B03C_41C7_FF46C82D45E3",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 9.42,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_6D31A7FD_7997_B02C_41B5_1D1D56222CFB",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 3.2,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_6D45D807_7997_BFDC_41D3_47F70070B614",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_6D57881B_7997_BFF4_41DD_2F9B55B7C847",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_6D6A582A_7997_BFD7_41C6_B85FEDA17EBD",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 163.2,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_6D7D8839_7997_B035_41DD_610DDC5686AF",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "hfov": 120,
   "yaw": 8.65,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_6D711848_7997_B053_41D0_193D92047D4E",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 9.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_6C834857_7997_B07D_41D0_ED046AB94A6B",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 6.88,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_6C92B866_7997_B05F_41A2_E563B28FE54B",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_6CA78875_7997_B03D_4191_9D5A6A634EA8",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 7.79,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_6CB9E884_7997_B0D3_41D2_FA477FA44EB5",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": -167.94,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_6CCD5893_7997_B0F5_41C0_38B4FF007612",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_6CDCF8A3_7997_B0D5_41D4_483EB55619DC",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 9.42,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_6CEE68B2_7997_B037_41D7_745A9E041391",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 9.32,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_6CE308C1_7997_B055_41C6_30EC9899A2BD",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "hfov": 120,
   "yaw": 8.65,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_6CF528D0_7997_B073_41D6_2E9607BA6D05",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 23.38,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_6C06F8E0_7997_B053_41C7_6E79C5DB25A6",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": -18.22,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_6C1998EF_7997_B02D_41C2_0D05CAFD13AF",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 6.88,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_6C2A88FD_7997_B02D_41CF_400752DC7615",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 51.49,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_6C3CC907_7997_B1DD_41DB_0227D3F07F26",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 7.78,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_6C4E2910_7997_B1F3_4172_48F9665030BC",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 8.04,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_6C43D91A_7997_B1F7_41D9_7DEA00E27806",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 5.66,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_6C553924_7997_B1D3_41C8_9783BC8196F8",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 9.32,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_6C66092E_7997_B02F_41DC_5EA3A8CD697D",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "hfov": 120,
   "yaw": 8.65,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_6C799937_7997_B03D_41D9_C4DF25042C02",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 23,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_6F8D5941_7997_B055_41D4_5C4E264422F1",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 6.88,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_6F9CB94A_7997_B057_41AF_133E0FF86F79",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 7.79,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_6FAE0954_7997_B073_41DB_515381E114C5",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 7.78,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_6FA3E95E_7997_B06F_41D3_EE160D283AFE",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 8.04,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_6FB55967_7997_B05D_41A2_126D3CA0C158",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 1.82,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_6FC63970_7997_B034_41C6_1A4973632347",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_6FD8797A_7997_B034_41B9_543989B24755",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 9.32,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_6FED3984_7997_B0DC_41B6_D83A2A6FACF2",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "hfov": 120,
   "yaw": 8.65,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_6FFCA98E_7997_B0EC_41CF_E5C660AC5127",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 9.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_6F0E4997_7997_B0FC_41C5_8466DBE15A31",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 6.88,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_6A0D19D6_7997_B07F_41D3_BE837D876CBE",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_6A09A9E0_7997_B053_41D7_8055D745888F",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 7.79,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_6A0489E9_7997_B055_41D7_F9D9506AB5F6",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 82.78,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_6A0189F3_7997_B035_41D3_5C9FFF41FB5D",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 8.04,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_6A1A09FD_7997_B02D_41C6_468D1EAA97B0",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_6A166A07_7997_B3DD_41CC_292C9B248C4E",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 9.42,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_6A104A10_7997_B3F3_41DA_1EC666F7EF10",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "hfov": 120,
   "yaw": -39.51,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_6A2DBA1A_7997_B3F7_41B6_0B2A18A4470A",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 9.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_6A267A24_7997_B3D3_4188_86CCFC62F6E4",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 6.88,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_6A205A2E_7997_B02F_41DC_53672C18D0D2",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_6A3DCA39_7997_B035_41BD_1C305F476087",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 7.78,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_6A378A43_7997_B055_41D7_2D56DBF66948",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 8.04,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_6A330A4E_7997_B06F_41C5_906643360999",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_6A4D0A58_7997_B073_41DA_088627BB5077",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 9.42,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_6A496A63_7997_B055_41B7_A349EF3237A3",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": -179.07,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_6A437A6E_7997_B02F_41DA_8D88926B6B7B",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 7.79,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_6A5A8A78_7997_B033_41BB_08C6277203AB",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 9.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_6A57BA82_7997_B0D7_4193_45F018FEAB38",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_6A516A8D_7997_B0ED_41DA_8AC95115F06E",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 6.88,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_6A6BDA97_7997_B0FD_419C_CE9028EC3A0A",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 7.79,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_6A62BAA2_7997_B0D7_41CF_9E1CFE252C1E",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 7.78,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_6A7FFAAC_7997_B0D3_41C2_166843DC1B16",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": -138.21,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_6A76CAB7_7997_B03D_41DD_54A8F1328B4A",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": -145.27,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_6A718AC1_7997_B055_41C8_2F1A08A224D6",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 9.42,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_6D8ACACB_7997_B055_41D1_EA287C1B9C15",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 9.32,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_6D85CAD6_7997_B07F_41BF_12CB899BEFE4",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "hfov": 120,
   "yaw": 8.65,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_6D9F8ADF_7997_B06C_41DD_95A865CD9643",
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
  "automaticZoomSpeed": 10,
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
  "id": "effect_6D9BEAE2_7997_B054_41D1_74FA31D955FA",
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
  "id": "effect_6D9B3AE2_7997_B054_41D9_5EAC4680B539",
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
 }
], "children": [
 {
  "progressBorderRadius": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "paddingRight": 0,
  "toolTipPaddingBottom": 4,
  "playbackBarHeadShadowVerticalLength": 0,
  "progressBarOpacity": 1,
  "playbackBarBorderColor": "#FFFFFF",
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "progressRight": 0,
  "toolTipBorderSize": 1,
  "toolTipOpacity": 0.7,
  "toolTipShadowOpacity": 1,
  "playbackBarHeight": 10,
  "playbackBarOpacity": 1,
  "toolTipShadowVerticalLength": 0,
  "playbackBarHeadWidth": 6,
  "shadow": false,
  "toolTipFontStyle": "normal",
  "playbackBarBackgroundColorDirection": "vertical",
  "class": "ViewerArea",
  "playbackBarProgressBorderSize": 0,
  "progressBottom": 0,
  "paddingBottom": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarRight": 0,
  "toolTipTextShadowColor": "#000000",
  "progressBorderSize": 0,
  "progressBarBorderSize": 0,
  "progressBarBorderRadius": 0,
  "playbackBarProgressBorderRadius": 0,
  "paddingTop": 0,
  "transitionMode": "blending",
  "toolTipShadowSpread": 0,
  "toolTipShadowColor": "#333333",
  "toolTipShadowBlurRadius": 3,
  "progressBackgroundOpacity": 1,
  "toolTipPaddingTop": 4,
  "toolTipFontColor": "#606060",
  "playbackBarBorderRadius": 0,
  "playbackBarHeadShadow": true,
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarProgressBorderColor": "#000000",
  "toolTipPaddingRight": 6,
  "playbackBarHeadBorderRadius": 0,
  "paddingLeft": 0,
  "toolTipTextShadowOpacity": 0,
  "progressLeft": 0,
  "toolTipFontSize": 11,
  "borderRadius": 0,
  "borderSize": 0,
  "playbackBarHeadBorderColor": "#000000",
  "progressBackgroundColorRatios": [
   0
  ],
  "playbackBarProgressOpacity": 1,
  "toolTipBackgroundColor": "#000000",
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipPaddingLeft": 6,
  "toolTipBorderColor": "#767676",
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "playbackBarLeft": 0,
  "playbackBarHeadHeight": 15,
  "playbackBarBackgroundOpacity": 1,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "minHeight": 50,
  "toolTipBorderRadius": 3,
  "playbackBarHeadShadowOpacity": 0.7,
  "top": "0%",
  "playbackBarBorderSize": 0,
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "bottom": "0%",
  "progressBarBorderColor": "#000000",
  "id": "MainViewer",
  "playbackBarHeadBorderSize": 0,
  "playbackBarHeadShadowColor": "#000000",
  "toolTipShadowHorizontalLength": 0,
  "playbackBarHeadOpacity": 1,
  "toolTipFontWeight": "normal",
  "progressBackgroundColorDirection": "vertical",
  "minWidth": 100,
  "progressBarBackgroundColorRatios": [
   0
  ],
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
  "children": [
   {
    "children": [
     "this.IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37",
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "mode": "toggle",
      "toolTipPaddingRight": 6,
      "width": "100%",
      "toolTipPaddingBottom": 4,
      "iconURL": "skin/IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA.png",
      "height": "100%",
      "transparencyActive": true,
      "toolTip": "Full Screen",
      "paddingLeft": 0,
      "toolTipTextShadowOpacity": 0,
      "toolTipFontSize": 11,
      "borderRadius": 0,
      "toolTipBorderSize": 1,
      "toolTipOpacity": 0.7,
      "borderSize": 0,
      "toolTipBackgroundColor": "#000000",
      "toolTipShadowOpacity": 1,
      "toolTipShadowVerticalLength": 0,
      "toolTipPaddingLeft": 6,
      "minHeight": 1,
      "shadow": false,
      "toolTipFontStyle": "normal",
      "toolTipBorderRadius": 3,
      "horizontalAlign": "center",
      "click": "if(!this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, true, 0, null, null, false) } else if(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, false, 0, null, null, false) }",
      "toolTipBorderColor": "#767676",
      "cursor": "hand",
      "paddingBottom": 0,
      "class": "IconButton",
      "toolTipTextShadowBlurRadius": 3,
      "id": "IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA",
      "toolTipTextShadowColor": "#000000",
      "toolTipShadowHorizontalLength": 0,
      "toolTipFontWeight": "normal",
      "minWidth": 1,
      "toolTipShadowSpread": 0,
      "paddingTop": 0,
      "toolTipShadowColor": "#333333",
      "toolTipShadowBlurRadius": 3,
      "pressedIconURL": "skin/IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA_pressed.png",
      "toolTipPaddingTop": 4,
      "backgroundOpacity": 0,
      "maxHeight": 60,
      "maxWidth": 60,
      "toolTipFontFamily": "Arial",
      "toolTipFontColor": "#606060"
     },
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "mode": "toggle",
      "toolTipPaddingRight": 6,
      "width": "100%",
      "toolTipPaddingBottom": 4,
      "iconURL": "skin/IconButton_8105A313_8E22_BF0B_41E1_331C6035A930.png",
      "height": "100%",
      "transparencyActive": true,
      "toolTip": "Audio On/Off",
      "paddingLeft": 0,
      "toolTipTextShadowOpacity": 0,
      "toolTipFontSize": 11,
      "borderRadius": 0,
      "toolTipBorderSize": 1,
      "toolTipOpacity": 0.7,
      "borderSize": 0,
      "toolTipBackgroundColor": "#000000",
      "toolTipShadowOpacity": 1,
      "toolTipShadowVerticalLength": 0,
      "toolTipPaddingLeft": 6,
      "minHeight": 1,
      "shadow": false,
      "toolTipFontStyle": "normal",
      "toolTipBorderRadius": 3,
      "horizontalAlign": "center",
      "click": "if(!this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, true, 0, this.effect_CACBF85D_EED0_7261_41DB_A3B65ECE0D5D, 'showEffect', false) } else if(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, false, 0, this.effect_CACBC85D_EED0_7261_41BE_8CF4C3A8170C, 'hideEffect', false) }",
      "toolTipBorderColor": "#767676",
      "cursor": "hand",
      "paddingBottom": 0,
      "class": "IconButton",
      "toolTipTextShadowBlurRadius": 3,
      "id": "IconButton_8105A313_8E22_BF0B_41E1_331C6035A930",
      "toolTipTextShadowColor": "#000000",
      "toolTipShadowHorizontalLength": 0,
      "toolTipFontWeight": "normal",
      "minWidth": 1,
      "toolTipShadowSpread": 0,
      "paddingTop": 0,
      "toolTipShadowColor": "#333333",
      "toolTipShadowBlurRadius": 3,
      "pressedIconURL": "skin/IconButton_8105A313_8E22_BF0B_41E1_331C6035A930_pressed.png",
      "toolTipPaddingTop": 4,
      "backgroundOpacity": 0,
      "maxHeight": 60,
      "maxWidth": 60,
      "toolTipFontFamily": "Arial",
      "toolTipFontColor": "#606060"
     },
     "this.IconButton_80E5955A_8E23_BB05_41CA_43DD61DBAEE9"
    ],
    "scrollBarColor": "#000000",
    "overflow": "visible",
    "scrollBarOpacity": 0.5,
    "paddingRight": 0,
    "verticalAlign": "middle",
    "width": 400,
    "height": 55,
    "layout": "horizontal",
    "paddingLeft": 0,
    "borderRadius": 0,
    "borderSize": 0,
    "gap": 0,
    "contentOpaque": false,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "minHeight": 55,
    "shadow": false,
    "horizontalAlign": "right",
    "class": "Container",
    "visible": false,
    "paddingBottom": 0,
    "id": "Container_80D3CF90_8E26_E705_41E0_E47025A2C106",
    "paddingTop": 0,
    "minWidth": 100,
    "backgroundOpacity": 0,
    "maxHeight": 55,
    "scrollBarVisible": "rollOver"
   },
   {
    "verticalAlign": "middle",
    "paddingRight": 0,
    "mode": "toggle",
    "toolTipPaddingRight": 6,
    "width": "100%",
    "toolTipPaddingBottom": 4,
    "iconURL": "skin/IconButton_811D89E1_8E3D_AB07_4191_94003C90B2FF.png",
    "height": "100%",
    "transparencyActive": true,
    "toolTip": "Settings",
    "paddingLeft": 0,
    "toolTipTextShadowOpacity": 0,
    "toolTipFontSize": 11,
    "borderRadius": 0,
    "toolTipBorderSize": 1,
    "toolTipOpacity": 0.7,
    "borderSize": 0,
    "toolTipBackgroundColor": "#000000",
    "toolTipShadowOpacity": 1,
    "toolTipShadowVerticalLength": 0,
    "toolTipPaddingLeft": 6,
    "minHeight": 55,
    "shadow": false,
    "toolTipFontStyle": "normal",
    "toolTipBorderRadius": 3,
    "horizontalAlign": "center",
    "click": "if(!this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, true, 0, this.effect_32C91197_3F22_3110_4181_9E76B593FBFE, 'showEffect', false) } else if(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, false, 0, this.effect_32C92197_3F22_3110_419D_E2E21968F16F, 'hideEffect', false) }",
    "toolTipBorderColor": "#767676",
    "cursor": "hand",
    "paddingBottom": 0,
    "class": "IconButton",
    "toolTipTextShadowBlurRadius": 3,
    "id": "IconButton_811D89E1_8E3D_AB07_4191_94003C90B2FF",
    "toolTipTextShadowColor": "#000000",
    "toolTipShadowHorizontalLength": 0,
    "toolTipFontWeight": "normal",
    "minWidth": 55,
    "toolTipShadowSpread": 0,
    "paddingTop": 0,
    "toolTipShadowColor": "#333333",
    "toolTipShadowBlurRadius": 3,
    "toolTipPaddingTop": 4,
    "backgroundOpacity": 0,
    "maxHeight": 55,
    "maxWidth": 55,
    "toolTipFontFamily": "Arial",
    "toolTipFontColor": "#606060"
   }
  ],
  "scrollBarColor": "#000000",
  "overflow": "visible",
  "scrollBarOpacity": 0.5,
  "paddingRight": 0,
  "verticalAlign": "middle",
  "width": 500,
  "height": 50,
  "layout": "horizontal",
  "paddingLeft": 0,
  "borderRadius": 5,
  "borderSize": 0,
  "gap": 5,
  "contentOpaque": false,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "shadow": false,
  "horizontalAlign": "right",
  "top": "3%",
  "minHeight": 55,
  "paddingBottom": 0,
  "class": "Container",
  "id": "Container_807F782A_8E23_A905_41DE_623121285A09",
  "paddingTop": 0,
  "minWidth": 500,
  "backgroundOpacity": 0,
  "maxHeight": 55,
  "maxWidth": 500,
  "right": "1.5%",
  "scrollBarVisible": "rollOver"
 },
 {
  "children": [
   "this.ViewerAreaLabeled_9FD7235A_96CD_9045_41D9_23A3BCBDB1C6",
   "this.IconButton_9FEA51EA_96CC_905A_41D3_F42DB0CD0A74",
   "this.IconButton_9FB9BD3F_96C5_703B_41D7_65AEE6E85A96",
   "this.IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4"
  ],
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
  "paddingLeft": 0,
  "borderRadius": 0,
  "borderSize": 0,
  "gap": 10,
  "contentOpaque": false,
  "layout": "absolute",
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "minHeight": 1,
  "shadow": false,
  "horizontalAlign": "left",
  "top": "0%",
  "visible": false,
  "paddingBottom": 0,
  "class": "Container",
  "id": "Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB",
  "minWidth": 1,
  "paddingTop": 0,
  "left": "0%",
  "backgroundOpacity": 0.7,
  "verticalAlign": "top",
  "scrollBarVisible": "rollOver"
 },
 {
  "verticalAlign": "middle",
  "paddingRight": 0,
  "mode": "push",
  "width": "3.03%",
  "iconURL": "skin/IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB.png",
  "height": "5.482%",
  "transparencyActive": true,
  "paddingLeft": 0,
  "borderRadius": 0,
  "borderSize": 0,
  "rollOverIconURL": "skin/IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB_rollover.png",
  "shadow": false,
  "horizontalAlign": "center",
  "top": "2%",
  "minHeight": 50,
  "cursor": "hand",
  "visible": false,
  "paddingBottom": 0,
  "class": "IconButton",
  "id": "IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB",
  "minWidth": 50,
  "paddingTop": 0,
  "backgroundOpacity": 0,
  "maxHeight": 50,
  "maxWidth": 50,
  "right": "2%"
 },
 {
  "children": [
   "this.MapViewer",
   {
    "verticalAlign": "middle",
    "paddingRight": 0,
    "mode": "push",
    "width": "5.07%",
    "iconURL": "skin/IconButton_50D1A26C_4289_72E1_41CD_2B557DFCC24F.png",
    "height": "5.91%",
    "transparencyActive": true,
    "paddingLeft": 0,
    "borderRadius": 0,
    "borderSize": 0,
    "rollOverIconURL": "skin/IconButton_50D1A26C_4289_72E1_41CD_2B557DFCC24F_rollover.png",
    "shadow": false,
    "horizontalAlign": "center",
    "top": "5%",
    "click": "this.setComponentVisibility(this.Container_53347472_4288_F6E6_4196_D7457B47D2CF, false, 0, this.effect_500E3733_4297_3267_41C9_4935C0BEBF39, 'hideEffect', false)",
    "minHeight": 50,
    "cursor": "hand",
    "paddingBottom": 0,
    "class": "IconButton",
    "id": "IconButton_50D1A26C_4289_72E1_41CD_2B557DFCC24F",
    "minWidth": 50,
    "paddingTop": 0,
    "backgroundOpacity": 0,
    "maxHeight": 50,
    "maxWidth": 50,
    "right": "5%"
   }
  ],
  "backgroundColorRatios": [
   0,
   1
  ],
  "backgroundColorDirection": "vertical",
  "overflow": "scroll",
  "scrollBarOpacity": 0.5,
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "paddingRight": 0,
  "scrollBarColor": "#000000",
  "layout": "absolute",
  "paddingLeft": 0,
  "borderRadius": 0,
  "borderSize": 0,
  "gap": 10,
  "contentOpaque": false,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "shadow": false,
  "horizontalAlign": "left",
  "top": "0%",
  "minHeight": 1,
  "visible": false,
  "paddingBottom": 0,
  "class": "Container",
  "bottom": "0%",
  "id": "Container_53347472_4288_F6E6_4196_D7457B47D2CF",
  "minWidth": 1,
  "paddingTop": 0,
  "left": "0%",
  "backgroundOpacity": 0.3,
  "right": "0%",
  "verticalAlign": "top",
  "scrollBarVisible": "rollOver"
 },
 {
  "children": [
   {
    "rollOverItemThumbnailShadow": true,
    "backgroundColor": [
     "#000000"
    ],
    "itemBackgroundColorRatios": [],
    "itemLabelFontFamily": "Arial",
    "paddingRight": 5,
    "rollOverItemBackgroundColorDirection": "vertical",
    "gap": 7,
    "itemThumbnailHeight": 60,
    "selectedItemBackgroundColor": [],
    "scrollBarWidth": 5,
    "scrollBarMargin": 2,
    "playList": "this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist",
    "itemHorizontalAlign": "center",
    "shadow": false,
    "horizontalAlign": "left",
    "class": "ThumbnailList",
    "selectedItemLabelFontStyle": "italic",
    "selectedItemThumbnailShadowVerticalLength": 0,
    "paddingBottom": 5,
    "itemMode": "normal",
    "rollOverItemThumbnailShadowBlurRadius": 15,
    "rollOverItemLabelFontColor": "#FFFFFF",
    "selectedItemThumbnailShadowHorizontalLength": 0,
    "itemLabelFontColor": "#FFFFFF",
    "rollOverItemBackgroundColor": [
     "#000000"
    ],
    "rollOverItemLabelFontWeight": "bold",
    "itemPaddingBottom": 3,
    "itemThumbnailScaleMode": "fit_outside",
    "selectedItemLabelFontColor": "#FFFFFF",
    "paddingTop": 5,
    "selectedItemLabelTextDecoration": "underline",
    "maxHeight": 100,
    "maxWidth": 783,
    "rollOverItemThumbnailShadowHorizontalLength": 0,
    "itemLabelFontWeight": "normal",
    "itemThumbnailShadow": false,
    "itemThumbnailOpacity": 1,
    "backgroundColorRatios": [
     0
    ],
    "backgroundColorDirection": "vertical",
    "itemThumbnailBorderRadius": 30,
    "scrollBarOpacity": 1,
    "rollOverItemLabelTextDecoration": "underline",
    "scrollBarColor": "#52B7EF",
    "itemLabelTextDecoration": "none",
    "scrollBarVisible": "rollOver",
    "itemPaddingRight": 3,
    "rollOverItemLabelFontStyle": "normal",
    "itemLabelFontStyle": "normal",
    "height": "100%",
    "selectedItemThumbnailShadowBlurRadius": 15,
    "paddingLeft": 5,
    "itemThumbnailWidth": 60,
    "rollOverItemBackgroundColorRatios": [
     0
    ],
    "itemLabelHorizontalAlign": "center",
    "borderRadius": 3,
    "selectedItemLabelFontSize": 11,
    "borderSize": 0,
    "itemBorderRadius": 0,
    "selectedItemThumbnailShadow": true,
    "rollOverItemThumbnailShadowColor": "#FFFFFF",
    "itemPaddingLeft": 3,
    "minHeight": 70,
    "selectedItemThumbnailShadowOpacity": 1,
    "rollOverItemThumbnailShadowVerticalLength": 0,
    "itemPaddingTop": 3,
    "selectedItemBorderRadius": 0,
    "selectedItemBorderSize": 0,
    "itemVerticalAlign": "middle",
    "itemBackgroundOpacity": 0,
    "rollOverItemBackgroundOpacity": 0,
    "id": "ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472",
    "selectedItemBackgroundColorRatios": [],
    "selectedItemThumbnailShadowColor": "#FFFFFF",
    "itemLabelGap": 5,
    "selectedItemLabelFontWeight": "bold",
    "itemOpacity": 1,
    "rollOverItemThumbnailShadowOpacity": 1,
    "itemBackgroundColor": [],
    "itemLabelFontSize": 11,
    "selectedItemBackgroundOpacity": 0,
    "itemBackgroundColorDirection": "vertical",
    "minWidth": 50,
    "itemLabelPosition": "bottom",
    "width": "100%",
    "backgroundOpacity": 0.25,
    "verticalAlign": "top",
    "layout": "horizontal"
   },
   {
    "children": [
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "mode": "push",
      "toolTipPaddingRight": 6,
      "width": "100%",
      "toolTipPaddingBottom": 4,
      "iconURL": "skin/IconButton_87577B8F_8E22_AF1B_41CC_79EB87AE6DED.png",
      "height": "100%",
      "transparencyActive": true,
      "toolTip": "Info",
      "paddingLeft": 0,
      "toolTipTextShadowOpacity": 0,
      "toolTipFontSize": 11,
      "borderRadius": 0,
      "toolTipBorderSize": 1,
      "toolTipOpacity": 0.7,
      "borderSize": 0,
      "toolTipBackgroundColor": "#000000",
      "toolTipShadowOpacity": 1,
      "rollOverIconURL": "skin/IconButton_87577B8F_8E22_AF1B_41CC_79EB87AE6DED_rollover.png",
      "toolTipShadowVerticalLength": 0,
      "toolTipPaddingLeft": 6,
      "minHeight": 25,
      "shadow": false,
      "toolTipFontStyle": "normal",
      "toolTipBorderRadius": 3,
      "horizontalAlign": "center",
      "click": "this.showPopupImage(this.ImageResource_6ECEF4DB_6091_DDD1_41D4_2B884570086A, null, '85%', '85%', this.FadeInEffect_8ED05F70_96C4_F045_41DC_2AB82A556F92, this.FadeOutEffect_8ED06F70_96C4_F045_41DA_C74400CF7B15, {'rollOverIconWidth':25,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorDirection':'vertical','rollOverBackgroundColor':['#000000','#000000','#000000'],'pressedBackgroundColor':['#000000','#000000','#000000'],'iconHeight':25,'rollOverIconColor':'#52B7EF','backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorDirection':'vertical','pressedBorderSize':0,'iconColor':'#FFFFFF','iconLineWidth':3,'backgroundColor':['#000000','#000000','#000000'],'paddingBottom':10,'pressedIconLineWidth':3,'borderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundOpacity':0.3,'paddingTop':10,'pressedIconColor':'#CCCCCC','paddingLeft':10,'paddingRight':10,'pressedBackgroundColorDirection':'vertical','borderSize':0,'pressedIconWidth':25,'pressedIconHeight':25,'backgroundOpacity':0.15,'rollOverBorderColor':'#000000','rollOverBackgroundOpacity':0.5,'iconWidth':25,'rollOverIconHeight':25,'rollOverIconLineWidth':3}, null, null, false)",
      "toolTipBorderColor": "#767676",
      "cursor": "hand",
      "visible": false,
      "paddingBottom": 0,
      "class": "IconButton",
      "toolTipTextShadowBlurRadius": 3,
      "id": "IconButton_87577B8F_8E22_AF1B_41CC_79EB87AE6DED",
      "toolTipTextShadowColor": "#000000",
      "toolTipShadowHorizontalLength": 0,
      "toolTipFontWeight": "normal",
      "minWidth": 25,
      "toolTipShadowSpread": 0,
      "paddingTop": 0,
      "toolTipShadowColor": "#333333",
      "toolTipShadowBlurRadius": 3,
      "toolTipPaddingTop": 4,
      "backgroundOpacity": 0,
      "maxHeight": 70,
      "maxWidth": 70,
      "toolTipFontFamily": "Arial",
      "toolTipFontColor": "#606060"
     },
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "mode": "push",
      "toolTipPaddingRight": 6,
      "width": "100%",
      "toolTipPaddingBottom": 4,
      "iconURL": "skin/IconButton_213ED70C_2DB2_E6C5_41B6_0CCE6C77E889.png",
      "height": "100%",
      "transparencyActive": true,
      "toolTip": "Play Video",
      "paddingLeft": 0,
      "toolTipTextShadowOpacity": 0,
      "toolTipFontSize": 11,
      "borderRadius": 0,
      "toolTipBorderSize": 1,
      "toolTipOpacity": 0.7,
      "borderSize": 0,
      "toolTipBackgroundColor": "#000000",
      "toolTipShadowOpacity": 1,
      "rollOverIconURL": "skin/IconButton_213ED70C_2DB2_E6C5_41B6_0CCE6C77E889_rollover.png",
      "toolTipShadowVerticalLength": 0,
      "toolTipPaddingLeft": 6,
      "minHeight": 25,
      "shadow": false,
      "toolTipFontStyle": "normal",
      "toolTipBorderRadius": 3,
      "horizontalAlign": "center",
      "click": "this.setMediaBehaviour(this.playList_6A3036C0_7997_B053_41C7_B807F7A77FA8, 0); this.MainViewerVideoPlayer.play()",
      "toolTipBorderColor": "#767676",
      "cursor": "hand",
      "visible": false,
      "paddingBottom": 0,
      "class": "IconButton",
      "toolTipTextShadowBlurRadius": 3,
      "id": "IconButton_213ED70C_2DB2_E6C5_41B6_0CCE6C77E889",
      "toolTipTextShadowColor": "#000000",
      "toolTipShadowHorizontalLength": 0,
      "toolTipFontWeight": "normal",
      "minWidth": 25,
      "toolTipShadowSpread": 0,
      "paddingTop": 0,
      "toolTipShadowColor": "#333333",
      "toolTipShadowBlurRadius": 3,
      "toolTipPaddingTop": 4,
      "backgroundOpacity": 0,
      "maxHeight": 70,
      "maxWidth": 70,
      "toolTipFontFamily": "Arial",
      "toolTipFontColor": "#606060"
     },
     {
      "verticalAlign": "top",
      "paddingRight": 0,
      "mode": "push",
      "toolTipPaddingRight": 6,
      "width": "100%",
      "toolTipPaddingBottom": 4,
      "iconURL": "skin/IconButton_67A0F254_76E6_A97F_419D_52AF6E3FE7C0.png",
      "height": "100%",
      "transparencyActive": true,
      "toolTip": "Show Panorama List",
      "paddingLeft": 0,
      "toolTipTextShadowOpacity": 0,
      "toolTipFontSize": 11,
      "borderRadius": 0,
      "toolTipBorderSize": 1,
      "toolTipOpacity": 0.7,
      "borderSize": 0,
      "toolTipBackgroundColor": "#000000",
      "toolTipShadowOpacity": 1,
      "toolTipShadowVerticalLength": 0,
      "toolTipPaddingLeft": 6,
      "minHeight": 55,
      "shadow": false,
      "toolTipFontStyle": "normal",
      "toolTipBorderRadius": 3,
      "horizontalAlign": "center",
      "click": "this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, true, 0, this.effect_508929C3_77ED_DB59_41D8_05A6C8F0681B, 'showEffect', false); this.setComponentVisibility(this.IconButton_843BBEF5_8E22_690F_419D_28CBDD771ACC, true, 0, this.effect_508929C3_77ED_DB59_41D8_05A6C8F0681B, 'showEffect', false); this.setComponentVisibility(this.IconButton_67A0F254_76E6_A97F_419D_52AF6E3FE7C0, false, 0, this.effect_518C2CD2_77ED_D97B_41C3_3AC87D499717, 'hideEffect', false)",
      "toolTipBorderColor": "#767676",
      "cursor": "hand",
      "visible": false,
      "paddingBottom": 0,
      "class": "IconButton",
      "toolTipTextShadowBlurRadius": 3,
      "id": "IconButton_67A0F254_76E6_A97F_419D_52AF6E3FE7C0",
      "toolTipTextShadowColor": "#000000",
      "toolTipShadowHorizontalLength": 0,
      "toolTipFontWeight": "normal",
      "minWidth": 70,
      "toolTipShadowSpread": 0,
      "paddingTop": 0,
      "toolTipShadowColor": "#333333",
      "toolTipShadowBlurRadius": 3,
      "toolTipPaddingTop": 4,
      "backgroundOpacity": 0,
      "maxHeight": 55,
      "maxWidth": 70,
      "toolTipFontFamily": "Arial",
      "toolTipFontColor": "#606060"
     },
     {
      "verticalAlign": "top",
      "paddingRight": 0,
      "mode": "push",
      "toolTipPaddingRight": 6,
      "width": "100%",
      "toolTipPaddingBottom": 4,
      "iconURL": "skin/IconButton_843BBEF5_8E22_690F_419D_28CBDD771ACC.png",
      "height": "100%",
      "transparencyActive": true,
      "toolTip": "Hide Panorama List",
      "paddingLeft": 0,
      "toolTipTextShadowOpacity": 0,
      "toolTipFontSize": 11,
      "borderRadius": 0,
      "toolTipBorderSize": 1,
      "toolTipOpacity": 0.7,
      "borderSize": 0,
      "toolTipBackgroundColor": "#000000",
      "toolTipShadowOpacity": 1,
      "toolTipShadowVerticalLength": 0,
      "toolTipPaddingLeft": 6,
      "minHeight": 55,
      "shadow": false,
      "toolTipFontStyle": "normal",
      "toolTipBorderRadius": 3,
      "horizontalAlign": "center",
      "click": "this.setComponentVisibility(this.IconButton_67A0F254_76E6_A97F_419D_52AF6E3FE7C0, true, 0, this.effect_640860A9_76E7_E929_4192_305B50E5610A, 'showEffect', false); this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, false, 0, this.effect_5032FA51_77E2_5979_41D1_45E5EF039077, 'hideEffect', false); this.setComponentVisibility(this.IconButton_843BBEF5_8E22_690F_419D_28CBDD771ACC, false, 0, this.effect_5032FA51_77E2_5979_41D1_45E5EF039077, 'hideEffect', false)",
      "toolTipBorderColor": "#767676",
      "cursor": "hand",
      "paddingBottom": 0,
      "class": "IconButton",
      "toolTipTextShadowBlurRadius": 3,
      "id": "IconButton_843BBEF5_8E22_690F_419D_28CBDD771ACC",
      "toolTipTextShadowColor": "#000000",
      "toolTipShadowHorizontalLength": 0,
      "toolTipFontWeight": "normal",
      "minWidth": 70,
      "toolTipShadowSpread": 0,
      "paddingTop": 0,
      "toolTipShadowColor": "#333333",
      "toolTipShadowBlurRadius": 3,
      "toolTipPaddingTop": 4,
      "backgroundOpacity": 0,
      "maxHeight": 55,
      "maxWidth": 70,
      "toolTipFontFamily": "Arial",
      "toolTipFontColor": "#606060"
     },
     "this.IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED",
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "mode": "push",
      "toolTipPaddingRight": 6,
      "width": "85%",
      "toolTipPaddingBottom": 4,
      "iconURL": "skin/IconButton_2FC9210C_3E8F_C4D4_41A7_10D1404CA49B.png",
      "height": "85%",
      "transparencyActive": true,
      "toolTip": "FLoor Plan",
      "paddingLeft": 0,
      "toolTipTextShadowOpacity": 0,
      "toolTipFontSize": 11,
      "borderRadius": 0,
      "toolTipBorderSize": 1,
      "toolTipOpacity": 0.7,
      "borderSize": 0,
      "toolTipBackgroundColor": "#000000",
      "toolTipShadowOpacity": 1,
      "toolTipShadowVerticalLength": 0,
      "toolTipPaddingLeft": 6,
      "minHeight": 25,
      "shadow": false,
      "toolTipFontStyle": "normal",
      "toolTipBorderRadius": 3,
      "horizontalAlign": "center",
      "click": "this.setComponentVisibility(this.Container_53347472_4288_F6E6_4196_D7457B47D2CF, true, 0, this.effect_51CB7B74_4299_12E2_41B4_829087983DE5, 'showEffect', false)",
      "toolTipBorderColor": "#767676",
      "cursor": "hand",
      "visible": false,
      "paddingBottom": 0,
      "class": "IconButton",
      "toolTipTextShadowBlurRadius": 3,
      "id": "IconButton_2FC9210C_3E8F_C4D4_41A7_10D1404CA49B",
      "toolTipTextShadowColor": "#000000",
      "toolTipShadowHorizontalLength": 0,
      "toolTipFontWeight": "normal",
      "minWidth": 25,
      "toolTipShadowSpread": 0,
      "paddingTop": 0,
      "toolTipShadowColor": "#333333",
      "toolTipShadowBlurRadius": 3,
      "pressedIconURL": "skin/IconButton_2FC9210C_3E8F_C4D4_41A7_10D1404CA49B_pressed.png",
      "toolTipPaddingTop": 4,
      "backgroundOpacity": 0,
      "maxHeight": 70,
      "maxWidth": 70,
      "toolTipFontFamily": "Arial",
      "toolTipFontColor": "#606060"
     }
    ],
    "scrollBarColor": "#000000",
    "overflow": "visible",
    "scrollBarOpacity": 0.5,
    "paddingRight": 0,
    "verticalAlign": "middle",
    "width": 70,
    "height": 55,
    "layout": "absolute",
    "paddingLeft": 0,
    "borderRadius": 5,
    "borderSize": 0,
    "gap": 0,
    "contentOpaque": false,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "minHeight": 55,
    "shadow": false,
    "horizontalAlign": "center",
    "class": "Container",
    "paddingBottom": 0,
    "id": "Container_86F3A56C_8E22_5B1D_41CA_9CE53436FE56",
    "paddingTop": 0,
    "minWidth": 70,
    "backgroundOpacity": 0,
    "maxHeight": 55,
    "maxWidth": 70,
    "scrollBarVisible": "rollOver"
   }
  ],
  "scrollBarColor": "#000000",
  "overflow": "visible",
  "scrollBarOpacity": 0.5,
  "paddingRight": 0,
  "verticalAlign": "bottom",
  "layout": "vertical",
  "height": 160,
  "paddingLeft": 0,
  "borderRadius": 0,
  "borderSize": 0,
  "gap": 3,
  "contentOpaque": false,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "shadow": false,
  "horizontalAlign": "center",
  "class": "Container",
  "minHeight": 130,
  "paddingBottom": 0,
  "bottom": "0.7%",
  "id": "Container_6EC9FEC0_76A2_F957_41C5_79AD4AF65B38",
  "paddingTop": 0,
  "minWidth": 1,
  "left": "15%",
  "backgroundOpacity": 0,
  "maxHeight": 160,
  "right": "15%",
  "scrollBarVisible": "rollOver"
 },
 {
  "backgroundColorRatios": [
   0
  ],
  "backgroundColorDirection": "vertical",
  "backgroundColor": [
   "#000000"
  ],
  "paddingRight": 0,
  "paddingLeft": 0,
  "borderRadius": 0,
  "borderSize": 0,
  "shadow": false,
  "top": 0,
  "showEffect": {
   "easing": "cubic_in_out",
   "duration": 350,
   "class": "FadeInEffect"
  },
  "minHeight": 0,
  "visible": false,
  "paddingBottom": 0,
  "class": "UIComponent",
  "bottom": 0,
  "id": "veilPopupPanorama",
  "minWidth": 0,
  "paddingTop": 0,
  "left": 0,
  "backgroundOpacity": 0.55,
  "right": 0
 },
 {
  "backgroundColorRatios": [],
  "backgroundColorDirection": "vertical",
  "backgroundColor": [],
  "paddingRight": 0,
  "paddingLeft": 0,
  "borderRadius": 0,
  "borderSize": 0,
  "scaleMode": "custom",
  "shadow": false,
  "top": 0,
  "minHeight": 0,
  "visible": false,
  "paddingBottom": 0,
  "class": "ZoomImage",
  "bottom": 0,
  "id": "zoomImagePopupPanorama",
  "minWidth": 0,
  "paddingTop": 0,
  "left": 0,
  "backgroundOpacity": 1,
  "right": 0
 },
 {
  "gap": 5,
  "backgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "backgroundColorDirection": "vertical",
  "iconHeight": 20,
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
  "paddingLeft": 5,
  "borderRadius": 0,
  "borderSize": 0,
  "fontFamily": "Arial",
  "layout": "horizontal",
  "iconWidth": 20,
  "fontColor": "#FFFFFF",
  "shadow": false,
  "horizontalAlign": "center",
  "top": 10,
  "showEffect": {
   "easing": "cubic_in_out",
   "duration": 350,
   "class": "FadeInEffect"
  },
  "minHeight": 0,
  "visible": false,
  "paddingBottom": 5,
  "borderColor": "#000000",
  "class": "CloseButton",
  "cursor": "hand",
  "id": "closeButtonPopupPanorama",
  "fontStyle": "normal",
  "fontWeight": "normal",
  "iconLineWidth": 5,
  "shadowColor": "#000000",
  "pressedIconColor": "#888888",
  "minWidth": 0,
  "rollOverIconColor": "#666666",
  "shadowBlurRadius": 6,
  "paddingTop": 5,
  "backgroundOpacity": 0.3,
  "label": "",
  "right": 10,
  "shadowSpread": 1,
  "verticalAlign": "middle"
 }
], 
 "overflow": "visible",
 "scrollBarOpacity": 0.5,
 "mouseWheelEnabled": true,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "height": "100%",
 "width": "100%",
 "paddingLeft": 0,
 "borderRadius": 0,
 "borderSize": 0,
 "gap": 10,
 "contentOpaque": false,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "buttonToggleMute": "this.IconButton_8105A313_8E22_BF0B_41E1_331C6035A930",
 "shadow": false,
 "vrPolyfillScale": 0.5,
 "horizontalAlign": "left",
 "minHeight": 20,
 "paddingBottom": 0,
 "class": "Player",
 "scripts": {
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "registerKey": function(key, value){  window[key] = value; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "existsKey": function(key){  return key in window; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "unregisterKey": function(key){  delete window[key]; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio) delete audios[audio.get('id')]; } if(audio) audio.stop(); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getKey": function(key){  return window[key]; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); }
 },
 "id": "rootPlayer",
 "minWidth": 20,
 "backgroundPreloadEnabled": true,
 "paddingTop": 0,
 "start": "this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37], 'cardboardAvailable'); this.syncPlaylists([this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); this.playList_6A4876C8_7997_B053_41D4_92C1F2B58CAF.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA].forEach(function(component) { component.set('visible', false); }) }",
 "buttonToggleFullscreen": "this.IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA",
 "verticalAlign": "top",
 "scrollBarVisible": "rollOver"
})