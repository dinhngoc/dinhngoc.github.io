TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "class": "VideoPlayer",
  "id": "MainViewerVideoPlayer",
  "viewerArea": "this.MainViewer",
  "displayPlaybackBar": true,
  "buttonPlay": {
   "class": "IconButton",
   "paddingRight": 0,
   "mode": "push",
   "toolTipPaddingRight": 6,
   "minWidth": 25,
   "iconURL": "skin/IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED.png",
   "height": "100%",
   "width": "100%",
   "toolTipPaddingBottom": 4,
   "toolTipTextShadowOpacity": 0,
   "transparencyActive": true,
   "toolTipPaddingTop": 4,
   "toolTip": "See Photos",
   "toolTipFontSize": 14,
   "toolTipShadowOpacity": 1,
   "toolTipOpacity": 0.7,
   "borderSize": 0,
   "toolTipBorderSize": 1,
   "paddingLeft": 0,
   "toolTipTextShadowColor": "#000000",
   "borderRadius": 0,
   "maxWidth": 70,
   "toolTipPaddingLeft": 6,
   "toolTipBorderColor": "#767676",
   "toolTipShadowHorizontalLength": 0,
   "horizontalAlign": "center",
   "rollOverIconURL": "skin/IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED_rollover.png",
   "toolTipShadowVerticalLength": 0,
   "shadow": false,
   "toolTipFontStyle": "normal",
   "toolTipBorderRadius": 3,
   "toolTipBackgroundColor": "#000000",
   "click": "this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, true, 0, this.effect_98AADBB0_96C5_F0C5_41B2_1C4D08E503DB, 'showEffect', false); this.playList_6BAF63B9_602D_004D_41D7_D537138D1DBF.set('selectedIndex', 0)",
   "cursor": "hand",
   "visible": false,
   "paddingBottom": 0,
   "toolTipTextShadowBlurRadius": 3,
   "toolTipFontWeight": "normal",
   "id": "IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED",
   "maxHeight": 70,
   "paddingTop": 0,
   "toolTipShadowSpread": 0,
   "toolTipShadowColor": "#333333",
   "toolTipShadowBlurRadius": 3,
   "backgroundOpacity": 0,
   "minHeight": 25,
   "toolTipFontColor": "#606060",
   "toolTipFontFamily": "Arial",
   "verticalAlign": "middle"
  },
  "buttonStop": [
   {
    "class": "IconButton",
    "paddingRight": 0,
    "mode": "push",
    "minWidth": 50,
    "iconURL": "skin/IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4.png",
    "height": "5.48%",
    "width": "3.03%",
    "transparencyActive": true,
    "borderRadius": 0,
    "borderSize": 0,
    "paddingLeft": 0,
    "rollOverIconURL": "skin/IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4_rollover.png",
    "maxWidth": 50,
    "horizontalAlign": "center",
    "shadow": false,
    "top": "2%",
    "click": "this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, false, 0, this.effect_9B0AF4E2_96C4_F045_41D3_0E00FEE03A15, 'hideEffect', false)",
    "cursor": "hand",
    "paddingBottom": 0,
    "id": "IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4",
    "maxHeight": 50,
    "paddingTop": 0,
    "backgroundOpacity": 0,
    "minHeight": 50,
    "right": "2%",
    "verticalAlign": "middle"
   },
   "this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB"
  ]
 },
 {
  "class": "PhotoAlbumPlayer",
  "id": "ViewerAreaLabeled_9FD7235A_96CD_9045_41D9_23A3BCBDB1C6PhotoAlbumPlayer",
  "viewerArea": {
   "class": "ViewerArea",
   "paddingRight": 0,
   "progressBorderRadius": 0,
   "progressBarBackgroundColorDirection": "vertical",
   "progressBackgroundColor": [
    "#FFFFFF"
   ],
   "playbackBarHeadShadowHorizontalLength": 0,
   "playbackBarOpacity": 1,
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
   "playbackBarHeadWidth": 6,
   "shadow": false,
   "toolTipFontStyle": "normal",
   "toolTipShadowHorizontalLength": 0,
   "playbackBarBackgroundColorDirection": "vertical",
   "toolTipBackgroundColor": "#000000",
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
   "minHeight": 1,
   "toolTipShadowBlurRadius": 3,
   "toolTipFontColor": "#606060",
   "playbackBarBorderRadius": 0,
   "playbackBarProgressBorderColor": "#000000",
   "playbackBarHeadBackgroundColor": [
    "#111111",
    "#666666"
   ],
   "toolTipPaddingRight": 6,
   "minWidth": 1,
   "playbackBarHeadBorderRadius": 0,
   "width": "100%",
   "paddingLeft": 0,
   "toolTipTextShadowOpacity": 0,
   "height": "100%",
   "toolTipPaddingTop": 4,
   "borderRadius": 0,
   "toolTipFontSize": 14,
   "playbackBarProgressOpacity": 1,
   "progressLeft": 0,
   "borderSize": 0,
   "playbackBarHeadBorderColor": "#000000",
   "progressBackgroundColorRatios": [
    0
   ],
   "toolTipTextShadowColor": "#000000",
   "progressBackgroundOpacity": 1,
   "playbackBarHeadShadowBlurRadius": 3,
   "toolTipPaddingLeft": 6,
   "toolTipBorderColor": "#767676",
   "playbackBarProgressBackgroundColorRatios": [
    0
   ],
   "playbackBarLeft": 0,
   "playbackBarHeadHeight": 15,
   "playbackBarBackgroundOpacity": 1,
   "playbackBarHeadShadowVerticalLength": 0,
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
   "toolTipFontWeight": "normal",
   "id": "ViewerAreaLabeled_9FD7235A_96CD_9045_41D9_23A3BCBDB1C6",
   "toolTipTextShadowBlurRadius": 3,
   "progressBarBorderColor": "#000000",
   "playbackBarHeadOpacity": 1,
   "playbackBarProgressBackgroundColor": [
    "#3399FF"
   ],
   "progressHeight": 10,
   "progressBarBackgroundColorRatios": [
    0
   ],
   "playbackBarBottom": 0,
   "progressBorderColor": "#000000",
   "progressBackgroundColorDirection": "vertical",
   "left": "0%",
   "progressBarBackgroundColor": [
    "#3399FF"
   ],
   "toolTipFontFamily": "Arial",
   "progressOpacity": 1,
   "playbackBarHeadShadow": true
  },
  "buttonNext": {
   "class": "IconButton",
   "paddingRight": 0,
   "mode": "push",
   "minWidth": 70,
   "iconURL": "skin/IconButton_9FB9BD3F_96C5_703B_41D7_65AEE6E85A96.png",
   "width": "4.24%",
   "transparencyActive": true,
   "borderRadius": 0,
   "borderSize": 0,
   "paddingLeft": 0,
   "rollOverIconURL": "skin/IconButton_9FB9BD3F_96C5_703B_41D7_65AEE6E85A96_rollover.png",
   "maxWidth": 70,
   "horizontalAlign": "center",
   "shadow": false,
   "top": "40%",
   "cursor": "hand",
   "paddingBottom": 0,
   "bottom": "40%",
   "id": "IconButton_9FB9BD3F_96C5_703B_41D7_65AEE6E85A96",
   "maxHeight": 70,
   "paddingTop": 0,
   "backgroundOpacity": 0,
   "minHeight": 70,
   "right": "1%",
   "verticalAlign": "middle"
  },
  "buttonPlay": "this.IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED",
  "buttonPrevious": {
   "class": "IconButton",
   "paddingRight": 0,
   "mode": "push",
   "minWidth": 70,
   "iconURL": "skin/IconButton_9FEA51EA_96CC_905A_41D3_F42DB0CD0A74.png",
   "width": "4.24%",
   "transparencyActive": true,
   "borderRadius": 0,
   "borderSize": 0,
   "rollOverIconURL": "skin/IconButton_9FEA51EA_96CC_905A_41D3_F42DB0CD0A74_rollover.png",
   "maxWidth": 70,
   "paddingLeft": 0,
   "horizontalAlign": "center",
   "shadow": false,
   "top": "40%",
   "cursor": "hand",
   "paddingBottom": 0,
   "bottom": "40%",
   "id": "IconButton_9FEA51EA_96CC_905A_41D3_F42DB0CD0A74",
   "maxHeight": 70,
   "paddingTop": 0,
   "left": "1%",
   "backgroundOpacity": 0,
   "minHeight": 70,
   "verticalAlign": "middle"
  },
  "buttonStop": [
   "this.IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4",
   "this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB"
  ]
 },
 {
  "class": "Panorama",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E_t.jpg",
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 5.97,
        "yaw": 143,
        "image": {
         "levels": [
          {
           "height": 25,
           "class": "ImageResourceLevel",
           "width": 25,
           "url": "media/panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E_0_HS_0_0_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 6.12
       }
      ],
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_475F4865_559D_57C8_41D3_E745D8290F70",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "toolTip": "02_Entrance",
        "click": "this.startPanoramaWithCamera(this.panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E, this.camera_552A6ED5_5BF2_F2BA_41D6_D4FD03CB3A2E); this.mainPlayList.set('selectedIndex', 1)",
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 143,
        "hfov": 5.97,
        "image": {
         "levels": [
          {
           "height": 50,
           "class": "ImageResourceLevel",
           "width": 50,
           "url": "media/panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E_0_HS_0_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 6.12
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 3.55,
        "yaw": 142.99,
        "image": {
         "levels": [
          {
           "height": 15,
           "class": "ImageResourceLevel",
           "width": 15,
           "url": "media/panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E_0_HS_5_0_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 9.53
       }
      ],
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_57DB1062_5BD6_CD9E_41D5_EB829B3E698C",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "toolTip": "02_Entrance",
        "click": "this.startPanoramaWithCamera(this.panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E, this.camera_6BF05741_602D_003D_41D4_78EE97587992); this.mainPlayList.set('selectedIndex', 1)",
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 142.99,
        "hfov": 3.55,
        "image": {
         "levels": [
          {
           "height": 30,
           "class": "ImageResourceLevel",
           "width": 30,
           "url": "media/panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E_0_HS_5_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 9.53
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 0,
        "yaw": -171.35,
        "image": {
         "levels": [
          {
           "height": 1,
           "class": "ImageResourceLevel",
           "width": 1,
           "url": "media/panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E_0_HS_1_0_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 85.73
       }
      ],
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": true,
      "id": "overlay_4750A865_559D_57C8_41B4_524DB443B897",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116, this.camera_6C01279E_602D_0047_41D2_74E7816B4336); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 5); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 8)"
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -171.35,
        "hfov": 0,
        "image": {
         "levels": [
          {
           "height": 1,
           "class": "ImageResourceLevel",
           "width": 1,
           "url": "media/panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E_0_HS_1_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 85.73
       }
      ]
     }
    ],
    "sphere": {
     "levels": [
      {
       "height": 1500,
       "class": "ImageResourceLevel",
       "width": 3000,
       "url": "media/panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E_hq.jpeg"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "panorama": {
     "class": "Panorama",
     "frames": [
      {
       "class": "SphericPanoramaFrame",
       "thumbnailUrl": "media/panorama_46009756_572D_4167_41C6_2B49BD1EF7CE_t.jpg",
       "overlays": [
        {
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 4.88,
           "yaw": -162.78,
           "image": {
            "levels": [
             {
              "height": 25,
              "class": "ImageResourceLevel",
              "width": 25,
              "url": "media/panorama_46009756_572D_4167_41C6_2B49BD1EF7CE_0_HS_2_0_0_map.gif"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -35.63
          }
         ],
         "useHandCursor": true,
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "id": "overlay_46008756_572D_4167_41D0_C46707775FAB",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "toolTip": "06_Master",
           "click": "this.startPanoramaWithCamera(this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF, this.camera_57262CFF_5BF2_F667_41D4_80634CF1C7DB); this.mainPlayList.set('selectedIndex', 5)",
           "mapColor": "#FF0000",
           "displayTooltipInTouchScreens": true
          }
         ],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": -162.78,
           "hfov": 4.88,
           "image": {
            "levels": [
             {
              "height": 50,
              "class": "ImageResourceLevel",
              "width": 50,
              "url": "media/panorama_46009756_572D_4167_41C6_2B49BD1EF7CE_0_HS_2_0.png"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -35.63
          }
         ]
        },
        {
         "class": "HotspotPanoramaOverlay",
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
              "url": "media/panorama_46009756_572D_4167_41C6_2B49BD1EF7CE_0_HS_1_0_0_map.gif"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": 80.2
          }
         ],
         "useHandCursor": true,
         "enabledInCardboard": true,
         "rollOverDisplay": true,
         "id": "overlay_4600A756_572D_4167_41C9_64294F212518",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116, this.camera_6AB2C454_602D_00DB_41B9_C29C510D9735); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 8)"
          }
         ],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": -162.92,
           "hfov": 0,
           "image": {
            "levels": [
             {
              "height": 1,
              "class": "ImageResourceLevel",
              "width": 1,
              "url": "media/panorama_46009756_572D_4167_41C6_2B49BD1EF7CE_0_HS_1_0.png"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": 80.2
          }
         ]
        },
        {
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 3.04,
           "yaw": -162.75,
           "image": {
            "levels": [
             {
              "height": 15,
              "class": "ImageResourceLevel",
              "width": 15,
              "url": "media/panorama_46009756_572D_4167_41C6_2B49BD1EF7CE_0_HS_3_0_0_map.gif"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -32.33
          }
         ],
         "useHandCursor": true,
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "id": "overlay_506D085B_5C1B_43E9_41C4_750FC45D63B1",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "toolTip": "06_Master",
           "click": "this.startPanoramaWithCamera(this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF, this.camera_6A404425_602D_0044_41B6_D59D93AD1F86); this.mainPlayList.set('selectedIndex', 5)",
           "mapColor": "#FF0000",
           "displayTooltipInTouchScreens": true
          }
         ],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": -162.75,
           "hfov": 3.04,
           "image": {
            "levels": [
             {
              "height": 30,
              "class": "ImageResourceLevel",
              "width": 30,
              "url": "media/panorama_46009756_572D_4167_41C6_2B49BD1EF7CE_0_HS_3_0.png"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -32.33
          }
         ]
        }
       ],
       "sphere": {
        "levels": [
         {
          "height": 1500,
          "class": "ImageResourceLevel",
          "width": 3000,
          "url": "media/panorama_46009756_572D_4167_41C6_2B49BD1EF7CE_hq.jpeg"
         }
        ],
        "class": "ImageResource"
       }
      }
     ],
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "class": "Panorama",
        "frames": [
         {
          "class": "SphericPanoramaFrame",
          "thumbnailUrl": "media/panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC_t.jpg",
          "overlays": [
           {
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 5.9,
              "yaw": 114.88,
              "image": {
               "levels": [
                {
                 "height": 25,
                 "class": "ImageResourceLevel",
                 "width": 25,
                 "url": "media/panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC_0_HS_0_0_0_map.gif"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": 10.22
             }
            ],
            "useHandCursor": true,
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "id": "overlay_46165BEA_572E_C12E_41C3_9D907FE87C25",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "toolTip": "06_Master\u000a",
              "click": "this.startPanoramaWithCamera(this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF, this.camera_55D7BBEA_5BF2_F263_41D2_B1CC2C57A60F); this.mainPlayList.set('selectedIndex', 5)",
              "mapColor": "#FF0000",
              "displayTooltipInTouchScreens": true
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 114.88,
              "hfov": 5.9,
              "image": {
               "levels": [
                {
                 "height": 50,
                 "class": "ImageResourceLevel",
                 "width": 50,
                 "url": "media/panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC_0_HS_0_0.png"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": 10.22
             }
            ]
           },
           {
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 5.25,
              "yaw": 114.94,
              "image": {
               "levels": [
                {
                 "height": 24,
                 "class": "ImageResourceLevel",
                 "width": 24,
                 "url": "media/panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC_0_HS_2_0_0_map.gif"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -28.96
             }
            ],
            "useHandCursor": true,
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "id": "overlay_4616BBEA_572E_C12E_41AF_EC82A979FD75",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "toolTip": "04_Living Room",
              "click": "this.startPanoramaWithCamera(this.panorama_47B53902_572E_CEDF_41CC_C256D31A5443, this.camera_55FFAC21_5BF2_F59B_41D2_A4CCD4BC65CD); this.mainPlayList.set('selectedIndex', 3)",
              "mapColor": "#FF0000",
              "displayTooltipInTouchScreens": true
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 114.94,
              "hfov": 5.25,
              "image": {
               "levels": [
                {
                 "height": 49,
                 "class": "ImageResourceLevel",
                 "width": 49,
                 "url": "media/panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC_0_HS_2_0.png"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -28.96
             }
            ]
           },
           {
            "class": "HotspotPanoramaOverlay",
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
                 "url": "media/panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC_0_HS_1_0_0_map.gif"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": 81.21
             }
            ],
            "useHandCursor": true,
            "enabledInCardboard": true,
            "rollOverDisplay": true,
            "id": "overlay_4616ABEA_572E_C12E_41A1_596C274FCBFE",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116, this.camera_6B2F04AE_602D_0047_41C0_E96086B7B972); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 8); this.mainPlayList.set('selectedIndex', 9)"
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": -170.2,
              "hfov": 0,
              "image": {
               "levels": [
                {
                 "height": 1,
                 "class": "ImageResourceLevel",
                 "width": 1,
                 "url": "media/panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC_0_HS_1_0.png"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": 81.21
             }
            ]
           },
           {
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 2.91,
              "yaw": 114.89,
              "image": {
               "levels": [
                {
                 "height": 12,
                 "class": "ImageResourceLevel",
                 "width": 12,
                 "url": "media/panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC_0_HS_3_0_0_map.gif"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": 13.9
             }
            ],
            "useHandCursor": true,
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "id": "overlay_57769E2A_5BEB_BFA8_41B2_5C99266FE40B",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "toolTip": "06_Master",
              "click": "this.startPanoramaWithCamera(this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF, this.camera_6AEA047A_602D_00CF_41A2_7313E039BFE6); this.mainPlayList.set('selectedIndex', 5)",
              "mapColor": "#FF0000",
              "displayTooltipInTouchScreens": true
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 114.89,
              "hfov": 2.91,
              "image": {
               "levels": [
                {
                 "height": 25,
                 "class": "ImageResourceLevel",
                 "width": 25,
                 "url": "media/panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC_0_HS_3_0.png"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": 13.9
             }
            ]
           },
           {
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 2.53,
              "yaw": 115,
              "image": {
               "levels": [
                {
                 "height": 12,
                 "class": "ImageResourceLevel",
                 "width": 12,
                 "url": "media/panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC_0_HS_4_0_0_map.gif"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -32.59
             }
            ],
            "useHandCursor": true,
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "id": "overlay_57A6CB58_5BED_C5E8_41BA_36A078F34542",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "toolTip": "04_Living Room",
              "click": "this.startPanoramaWithCamera(this.panorama_47B53902_572E_CEDF_41CC_C256D31A5443, this.camera_6AC7A497_602D_0045_41A4_3E71C1D18B70); this.mainPlayList.set('selectedIndex', 3)",
              "mapColor": "#FF0000",
              "displayTooltipInTouchScreens": true
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 115,
              "hfov": 2.53,
              "image": {
               "levels": [
                {
                 "height": 25,
                 "class": "ImageResourceLevel",
                 "width": 25,
                 "url": "media/panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC_0_HS_4_0.png"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -32.59
             }
            ]
           }
          ],
          "sphere": {
           "levels": [
            {
             "height": 1500,
             "class": "ImageResourceLevel",
             "width": 3000,
             "url": "media/panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC_hq.jpeg"
            }
           ],
           "class": "ImageResource"
          }
         }
        ],
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_46009756_572D_4167_41C6_2B49BD1EF7CE",
          "yaw": -170.2,
          "backwardYaw": -162.92,
          "distance": 1
         },
         {
          "class": "AdjacentPanorama",
          "panorama": {
           "class": "Panorama",
           "frames": [
            {
             "class": "SphericPanoramaFrame",
             "thumbnailUrl": "media/panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E_t.jpg",
             "overlays": [
              {
               "class": "HotspotPanoramaOverlay",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 5.95,
                 "yaw": -14.93,
                 "image": {
                  "levels": [
                   {
                    "height": 25,
                    "class": "ImageResourceLevel",
                    "width": 25,
                    "url": "media/panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E_0_HS_0_0_0_map.gif"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -7.21
                }
               ],
               "useHandCursor": true,
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "id": "overlay_447F356F_5593_B9D8_41C7_F6DF7CCD3B4C",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "toolTip": "03_Pool",
                 "click": "this.startPanoramaWithCamera(this.panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D, this.camera_55581C8B_5BF2_F6AF_41D1_02AAAFF73E03); this.mainPlayList.set('selectedIndex', 2)",
                 "mapColor": "#FF0000",
                 "displayTooltipInTouchScreens": true
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": -14.93,
                 "hfov": 5.95,
                 "image": {
                  "levels": [
                   {
                    "height": 50,
                    "class": "ImageResourceLevel",
                    "width": 50,
                    "url": "media/panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E_0_HS_0_0.png"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -7.21
                }
               ]
              },
              {
               "class": "HotspotPanoramaOverlay",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 5.45,
                 "yaw": 1.8,
                 "image": {
                  "levels": [
                   {
                    "height": 25,
                    "class": "ImageResourceLevel",
                    "width": 25,
                    "url": "media/panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E_0_HS_6_0_0_map.gif"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -24.79
                }
               ],
               "useHandCursor": true,
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "id": "overlay_447F256F_5593_B9D8_41CF_5C6A714CBEB7",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "toolTip": "01_Street View",
                 "click": "this.startPanoramaWithCamera(this.panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E, this.camera_55602CAB_5BF2_F6EF_41A1_3BA349C88636); this.mainPlayList.set('selectedIndex', 0)",
                 "mapColor": "#FF0000",
                 "displayTooltipInTouchScreens": true
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": 1.8,
                 "hfov": 5.45,
                 "image": {
                  "levels": [
                   {
                    "height": 50,
                    "class": "ImageResourceLevel",
                    "width": 50,
                    "url": "media/panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E_0_HS_6_0.png"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -24.79
                }
               ]
              },
              {
               "class": "HotspotPanoramaOverlay",
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
                    "url": "media/panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E_0_HS_1_0_0_map.gif"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": 83.2
                }
               ],
               "useHandCursor": true,
               "enabledInCardboard": true,
               "rollOverDisplay": true,
               "id": "overlay_447F056F_5593_B9D8_41CE_B187244AECBF",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116, this.camera_6B57352B_602D_004D_41D1_F5820AE574D2); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 5); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 8)"
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": -170.68,
                 "hfov": 0,
                 "image": {
                  "levels": [
                   {
                    "height": 1,
                    "class": "ImageResourceLevel",
                    "width": 1,
                    "url": "media/panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E_0_HS_1_0.png"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": 83.2
                }
               ]
              },
              {
               "class": "HotspotPanoramaOverlay",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 3.59,
                 "yaw": -14.94,
                 "image": {
                  "levels": [
                   {
                    "height": 15,
                    "class": "ImageResourceLevel",
                    "width": 15,
                    "url": "media/panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E_0_HS_7_0_0_map.gif"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -4.06
                }
               ],
               "useHandCursor": true,
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "id": "overlay_5793A8C2_5BD2_3E99_41CF_E849618F9B2B",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "toolTip": "03_Pool",
                 "click": "this.startPanoramaWithCamera(this.panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D, this.camera_6B6874E3_602D_01FD_41C7_4467214CB958); this.mainPlayList.set('selectedIndex', 2)",
                 "mapColor": "#FF0000",
                 "displayTooltipInTouchScreens": true
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": -14.94,
                 "hfov": 3.59,
                 "image": {
                  "levels": [
                   {
                    "height": 30,
                    "class": "ImageResourceLevel",
                    "width": 30,
                    "url": "media/panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E_0_HS_7_0.png"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -4.06
                }
               ]
              },
              {
               "class": "HotspotPanoramaOverlay",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 3.35,
                 "yaw": 1.83,
                 "image": {
                  "levels": [
                   {
                    "height": 15,
                    "class": "ImageResourceLevel",
                    "width": 15,
                    "url": "media/panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E_0_HS_8_0_0_map.gif"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -21.57
                }
               ],
               "useHandCursor": true,
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "id": "overlay_572B55CD_5BCE_76AB_41A0_59FCFB6B5DB1",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "toolTip": "01_Street View",
                 "click": "this.startPanoramaWithCamera(this.panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E, this.camera_6B43B51B_602D_004D_41C7_B3BC3D43EAD8); this.mainPlayList.set('selectedIndex', 0)",
                 "mapColor": "#FF0000",
                 "displayTooltipInTouchScreens": true
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": 1.83,
                 "hfov": 3.35,
                 "image": {
                  "levels": [
                   {
                    "height": 30,
                    "class": "ImageResourceLevel",
                    "width": 30,
                    "url": "media/panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E_0_HS_8_0.png"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -21.57
                }
               ]
              }
             ],
             "sphere": {
              "levels": [
               {
                "height": 1500,
                "class": "ImageResourceLevel",
                "width": 3000,
                "url": "media/panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E_hq.jpeg"
               }
              ],
              "class": "ImageResource"
             }
            }
           ],
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_46009756_572D_4167_41C6_2B49BD1EF7CE",
             "yaw": -170.68,
             "backwardYaw": -162.92,
             "distance": 1
            },
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC",
             "yaw": -170.68,
             "backwardYaw": -170.2,
             "distance": 1
            },
            {
             "class": "AdjacentPanorama",
             "panorama": {
              "class": "Panorama",
              "frames": [
               {
                "class": "SphericPanoramaFrame",
                "thumbnailUrl": "media/panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D_t.jpg",
                "overlays": [
                 {
                  "class": "HotspotPanoramaOverlay",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 8.86,
                    "yaw": 110.69,
                    "image": {
                     "levels": [
                      {
                       "height": 25,
                       "class": "ImageResourceLevel",
                       "width": 25,
                       "url": "media/panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D_0_HS_2_0_0_map.gif"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": 10.19
                   }
                  ],
                  "useHandCursor": true,
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "id": "overlay_4404034D_55AE_B9D8_41D4_07F6934855E0",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "toolTip": "08_Rooftop",
                    "click": "this.startPanoramaWithCamera(this.panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116, this.camera_56043BB0_5BF2_F2FA_41B1_1DE6A0E08A4C); this.mainPlayList.set('selectedIndex', 9)",
                    "mapColor": "#FF0000",
                    "displayTooltipInTouchScreens": true
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 110.69,
                    "hfov": 8.86,
                    "image": {
                     "levels": [
                      {
                       "height": 50,
                       "class": "ImageResourceLevel",
                       "width": 50,
                       "url": "media/panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D_0_HS_2_0.png"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": 10.19
                   }
                  ]
                 },
                 {
                  "class": "HotspotPanoramaOverlay",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 8.07,
                    "yaw": 110.8,
                    "image": {
                     "levels": [
                      {
                       "height": 25,
                       "class": "ImageResourceLevel",
                       "width": 25,
                       "url": "media/panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D_0_HS_0_0_0_map.gif"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -26.25
                   }
                  ],
                  "useHandCursor": true,
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "id": "overlay_4404134D_55AE_B9D8_41B9_1813EAE5CA83",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "toolTip": "06_Master",
                    "click": "this.startPanoramaWithCamera(this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF, this.camera_56700B7F_5BF2_F267_41C2_DC8D8F885C23); this.mainPlayList.set('selectedIndex', 5)",
                    "mapColor": "#FF0000",
                    "displayTooltipInTouchScreens": true
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 110.8,
                    "hfov": 8.07,
                    "image": {
                     "levels": [
                      {
                       "height": 50,
                       "class": "ImageResourceLevel",
                       "width": 50,
                       "url": "media/panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D_0_HS_0_0.png"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -26.25
                   }
                  ]
                 },
                 {
                  "class": "HotspotPanoramaOverlay",
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
                       "url": "media/panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D_0_HS_1_0_0_map.gif"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": 81.71
                   }
                  ],
                  "useHandCursor": true,
                  "enabledInCardboard": true,
                  "rollOverDisplay": true,
                  "id": "overlay_4404534D_55AE_B9D8_41B2_377AB17E4600",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E, this.camera_6BCB959D_602D_0044_41B2_C97FDF0D7845); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 4)"
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -172.21,
                    "hfov": 0,
                    "image": {
                     "levels": [
                      {
                       "height": 1,
                       "class": "ImageResourceLevel",
                       "width": 1,
                       "url": "media/panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D_0_HS_1_0.png"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": 81.71
                   }
                  ]
                 },
                 {
                  "class": "HotspotPanoramaOverlay",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 4.33,
                    "yaw": 110.67,
                    "image": {
                     "levels": [
                      {
                       "height": 12,
                       "class": "ImageResourceLevel",
                       "width": 12,
                       "url": "media/panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D_0_HS_3_0_0_map.gif"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": 15.8
                   }
                  ],
                  "useHandCursor": true,
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "id": "overlay_5080A170_5C1D_C5B7_41C0_472F46DC3820",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "toolTip": "08_Rooftop",
                    "click": "this.startPanoramaWithCamera(this.panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116, this.camera_6BDF25A8_602D_004B_41D7_73F1ABE18317); this.mainPlayList.set('selectedIndex', 9)",
                    "mapColor": "#FF0000",
                    "displayTooltipInTouchScreens": true
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 110.67,
                    "hfov": 4.33,
                    "image": {
                     "levels": [
                      {
                       "height": 25,
                       "class": "ImageResourceLevel",
                       "width": 25,
                       "url": "media/panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D_0_HS_3_0.png"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": 15.8
                   }
                  ]
                 },
                 {
                  "class": "HotspotPanoramaOverlay",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 3.82,
                    "yaw": 110.96,
                    "image": {
                     "levels": [
                      {
                       "height": 12,
                       "class": "ImageResourceLevel",
                       "width": 12,
                       "url": "media/panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D_0_HS_4_0_0_map.gif"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -31.79
                   }
                  ],
                  "useHandCursor": true,
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "id": "overlay_508B4A17_5C1F_4779_4187_6F9E39735C4A",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "toolTip": "06_Master",
                    "click": "this.startPanoramaWithCamera(this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF, this.camera_6B9C7570_602D_00DB_41D6_8909F8C0E49F); this.mainPlayList.set('selectedIndex', 5)",
                    "mapColor": "#FF0000",
                    "displayTooltipInTouchScreens": true
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 110.96,
                    "hfov": 3.82,
                    "image": {
                     "levels": [
                      {
                       "height": 25,
                       "class": "ImageResourceLevel",
                       "width": 25,
                       "url": "media/panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D_0_HS_4_0.png"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -31.79
                   }
                  ]
                 }
                ],
                "sphere": {
                 "levels": [
                  {
                   "height": 1000,
                   "class": "ImageResourceLevel",
                   "width": 2000,
                   "url": "media/panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D_hq.jpeg"
                  }
                 ],
                 "class": "ImageResource"
                }
               }
              ],
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_46009756_572D_4167_41C6_2B49BD1EF7CE",
                "yaw": -172.21,
                "backwardYaw": -162.92,
                "distance": 1
               },
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC",
                "yaw": -172.21,
                "backwardYaw": -170.2,
                "distance": 1
               },
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E",
                "yaw": -172.21,
                "backwardYaw": -170.68,
                "distance": 1
               },
               {
                "class": "AdjacentPanorama",
                "panorama": {
                 "class": "Panorama",
                 "frames": [
                  {
                   "class": "SphericPanoramaFrame",
                   "thumbnailUrl": "media/panorama_45750F9A_5593_A978_41D1_DB2A12878BDF_t.jpg",
                   "overlays": [
                    {
                     "class": "HotspotPanoramaOverlay",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 4.95,
                       "yaw": 162.56,
                       "image": {
                        "levels": [
                         {
                          "height": 25,
                          "class": "ImageResourceLevel",
                          "width": 25,
                          "url": "media/panorama_45750F9A_5593_A978_41D1_DB2A12878BDF_0_HS_0_0_0_map.gif"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -34.4
                      }
                     ],
                     "useHandCursor": true,
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "id": "overlay_45751F9A_5593_A978_419E_9D0477D55A63",
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "toolTip": "06a_Balcony",
                       "click": "this.startPanoramaWithCamera(this.panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C, this.camera_569B6D6C_5BF2_F669_41A7_8467FF9A6DAA); this.mainPlayList.set('selectedIndex', 6)",
                       "mapColor": "#FF0000",
                       "displayTooltipInTouchScreens": true
                      }
                     ],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": 162.56,
                       "hfov": 4.95,
                       "image": {
                        "levels": [
                         {
                          "height": 50,
                          "class": "ImageResourceLevel",
                          "width": 50,
                          "url": "media/panorama_45750F9A_5593_A978_41D1_DB2A12878BDF_0_HS_0_0.png"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -34.4
                      }
                     ]
                    },
                    {
                     "class": "HotspotPanoramaOverlay",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 5.53,
                       "yaw": 83.07,
                       "image": {
                        "levels": [
                         {
                          "height": 25,
                          "class": "ImageResourceLevel",
                          "width": 25,
                          "url": "media/panorama_45750F9A_5593_A978_41D1_DB2A12878BDF_0_HS_2_0_0_map.gif"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -22.75
                      }
                     ],
                     "useHandCursor": true,
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "id": "overlay_45756F9A_5593_A978_41C5_5DEA8239FD11",
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "toolTip": "06b_WC",
                       "click": "this.startPanoramaWithCamera(this.panorama_46009756_572D_4167_41C6_2B49BD1EF7CE, this.camera_56E74D59_5BF2_F7AA_41D0_B6C262499B65); this.mainPlayList.set('selectedIndex', 7)",
                       "mapColor": "#FF0000",
                       "displayTooltipInTouchScreens": true
                      }
                     ],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": 83.07,
                       "hfov": 5.53,
                       "image": {
                        "levels": [
                         {
                          "height": 50,
                          "class": "ImageResourceLevel",
                          "width": 50,
                          "url": "media/panorama_45750F9A_5593_A978_41D1_DB2A12878BDF_0_HS_2_0.png"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -22.75
                      }
                     ]
                    },
                    {
                     "class": "HotspotPanoramaOverlay",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 5.97,
                       "yaw": 34.95,
                       "image": {
                        "levels": [
                         {
                          "height": 24,
                          "class": "ImageResourceLevel",
                          "width": 24,
                          "url": "media/panorama_45750F9A_5593_A978_41D1_DB2A12878BDF_0_HS_3_0_0_map.gif"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": 5.8
                      }
                     ],
                     "useHandCursor": true,
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "id": "overlay_45757F9A_5593_A978_41CE_912DDA5CD743",
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "toolTip": "07_2Beds Room",
                       "click": "this.startPanoramaWithCamera(this.panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D, this.camera_56C57D3C_5BF2_F7EA_41BA_23AB5285E45A); this.mainPlayList.set('selectedIndex', 8)",
                       "mapColor": "#FF0000",
                       "displayTooltipInTouchScreens": true
                      }
                     ],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": 34.95,
                       "hfov": 5.97,
                       "image": {
                        "levels": [
                         {
                          "height": 49,
                          "class": "ImageResourceLevel",
                          "width": 49,
                          "url": "media/panorama_45750F9A_5593_A978_41D1_DB2A12878BDF_0_HS_3_0.png"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": 5.8
                      }
                     ]
                    },
                    {
                     "class": "HotspotPanoramaOverlay",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 5.85,
                       "yaw": 34.93,
                       "image": {
                        "levels": [
                         {
                          "height": 25,
                          "class": "ImageResourceLevel",
                          "width": 25,
                          "url": "media/panorama_45750F9A_5593_A978_41D1_DB2A12878BDF_0_HS_4_0_0_map.gif"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -12.89
                      }
                     ],
                     "useHandCursor": true,
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "id": "overlay_58837D58_56A1_81B9_41CB_BA3BEC867C09",
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "toolTip": "05_1Bedroom",
                       "click": "this.startPanoramaWithCamera(this.panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC, this.camera_56F35D45_5BF2_F79A_41D0_857D96DC10DF); this.mainPlayList.set('selectedIndex', 4)",
                       "mapColor": "#FF0000",
                       "displayTooltipInTouchScreens": true
                      }
                     ],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": 34.93,
                       "hfov": 5.85,
                       "image": {
                        "levels": [
                         {
                          "height": 50,
                          "class": "ImageResourceLevel",
                          "width": 50,
                          "url": "media/panorama_45750F9A_5593_A978_41D1_DB2A12878BDF_0_HS_4_0.png"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -12.89
                      }
                     ]
                    },
                    {
                     "class": "HotspotPanoramaOverlay",
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
                          "url": "media/panorama_45750F9A_5593_A978_41D1_DB2A12878BDF_0_HS_1_0_0_map.gif"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": 76.94
                      }
                     ],
                     "useHandCursor": true,
                     "enabledInCardboard": true,
                     "rollOverDisplay": true,
                     "id": "overlay_45754F9A_5593_A978_41C5_5FC9223E8F5C",
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116, this.camera_6AAE861F_602D_0045_41CA_DFBBBCA6389F); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 3)"
                      }
                     ],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": -162.92,
                       "hfov": 0,
                       "image": {
                        "levels": [
                         {
                          "height": 1,
                          "class": "ImageResourceLevel",
                          "width": 1,
                          "url": "media/panorama_45750F9A_5593_A978_41D1_DB2A12878BDF_0_HS_1_0.png"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": 76.94
                      }
                     ]
                    },
                    {
                     "class": "HotspotPanoramaOverlay",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 3.08,
                       "yaw": 162.5,
                       "image": {
                        "levels": [
                         {
                          "height": 15,
                          "class": "ImageResourceLevel",
                          "width": 15,
                          "url": "media/panorama_45750F9A_5593_A978_41D1_DB2A12878BDF_0_HS_5_0_0_map.gif"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -31.19
                      }
                     ],
                     "useHandCursor": true,
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "id": "overlay_57A78873_5BEF_C3BF_41BD_8AE3C45B5803",
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "toolTip": "06a_Balcony",
                       "click": "this.startPanoramaWithCamera(this.panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C, this.camera_6A5EF602_602D_003F_41CF_EFD6389B813E); this.mainPlayList.set('selectedIndex', 6)",
                       "mapColor": "#FF0000",
                       "displayTooltipInTouchScreens": true
                      }
                     ],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": 162.5,
                       "hfov": 3.08,
                       "image": {
                        "levels": [
                         {
                          "height": 30,
                          "class": "ImageResourceLevel",
                          "width": 30,
                          "url": "media/panorama_45750F9A_5593_A978_41D1_DB2A12878BDF_0_HS_5_0.png"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -31.19
                      }
                     ]
                    },
                    {
                     "class": "HotspotPanoramaOverlay",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 3.39,
                       "yaw": 83.08,
                       "image": {
                        "levels": [
                         {
                          "height": 15,
                          "class": "ImageResourceLevel",
                          "width": 15,
                          "url": "media/panorama_45750F9A_5593_A978_41D1_DB2A12878BDF_0_HS_6_0_0_map.gif"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -19.5
                      }
                     ],
                     "useHandCursor": true,
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "id": "overlay_56F9D46A_5BED_43A8_41D0_1E74CFFA5811",
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "toolTip": "06b_WC",
                       "click": "this.startPanoramaWithCamera(this.panorama_46009756_572D_4167_41C6_2B49BD1EF7CE, this.camera_6C2D35B3_602D_005D_41BB_94984F27EE0D); this.mainPlayList.set('selectedIndex', 7)",
                       "mapColor": "#FF0000",
                       "displayTooltipInTouchScreens": true
                      }
                     ],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": 83.08,
                       "hfov": 3.39,
                       "image": {
                        "levels": [
                         {
                          "height": 30,
                          "class": "ImageResourceLevel",
                          "width": 30,
                          "url": "media/panorama_45750F9A_5593_A978_41D1_DB2A12878BDF_0_HS_6_0.png"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -19.5
                      }
                     ]
                    },
                    {
                     "class": "HotspotPanoramaOverlay",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 2.96,
                       "yaw": 34.95,
                       "image": {
                        "levels": [
                         {
                          "height": 12,
                          "class": "ImageResourceLevel",
                          "width": 12,
                          "url": "media/panorama_45750F9A_5593_A978_41D1_DB2A12878BDF_0_HS_7_0_0_map.gif"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": 9.54
                      }
                     ],
                     "useHandCursor": true,
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "id": "overlay_579E1042_5BE4_C3D8_41AA_C542414FE913",
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "toolTip": "07_2Beds Room",
                       "click": "this.startPanoramaWithCamera(this.panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D, this.camera_6A4455EF_602D_03C5_41C0_7F7EF741A47C); this.mainPlayList.set('selectedIndex', 8)",
                       "mapColor": "#FF0000",
                       "displayTooltipInTouchScreens": true
                      }
                     ],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": 34.95,
                       "hfov": 2.96,
                       "image": {
                        "levels": [
                         {
                          "height": 25,
                          "class": "ImageResourceLevel",
                          "width": 25,
                          "url": "media/panorama_45750F9A_5593_A978_41D1_DB2A12878BDF_0_HS_7_0.png"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": 9.54
                      }
                     ]
                    },
                    {
                     "class": "HotspotPanoramaOverlay",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 2.87,
                       "yaw": 35,
                       "image": {
                        "levels": [
                         {
                          "height": 12,
                          "class": "ImageResourceLevel",
                          "width": 12,
                          "url": "media/panorama_45750F9A_5593_A978_41D1_DB2A12878BDF_0_HS_8_0_0_map.gif"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -16.71
                      }
                     ],
                     "useHandCursor": true,
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "id": "overlay_579A3B76_5BE4_C5B8_418F_FC076DEAF78B",
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "toolTip": "05_1Bedroom",
                       "click": "this.startPanoramaWithCamera(this.panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC, this.camera_6C22C5BC_602D_004B_41AE_B6D20B4B9483); this.mainPlayList.set('selectedIndex', 4)",
                       "mapColor": "#FF0000",
                       "displayTooltipInTouchScreens": true
                      }
                     ],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": 35,
                       "hfov": 2.87,
                       "image": {
                        "levels": [
                         {
                          "height": 25,
                          "class": "ImageResourceLevel",
                          "width": 25,
                          "url": "media/panorama_45750F9A_5593_A978_41D1_DB2A12878BDF_0_HS_8_0.png"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -16.71
                      }
                     ]
                    }
                   ],
                   "sphere": {
                    "levels": [
                     {
                      "height": 1500,
                      "class": "ImageResourceLevel",
                      "width": 3000,
                      "url": "media/panorama_45750F9A_5593_A978_41D1_DB2A12878BDF_hq.jpeg"
                     }
                    ],
                    "class": "ImageResource"
                   }
                  }
                 ],
                 "adjacentPanoramas": [
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_46009756_572D_4167_41C6_2B49BD1EF7CE",
                   "yaw": 83.08,
                   "backwardYaw": -162.75,
                   "distance": 1
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC",
                   "yaw": 35,
                   "backwardYaw": 114.89,
                   "distance": 1
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E",
                   "yaw": -162.92,
                   "backwardYaw": -170.68,
                   "distance": 1
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D",
                   "yaw": 34.95,
                   "backwardYaw": 110.96,
                   "distance": 1
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": {
                    "class": "Panorama",
                    "frames": [
                     {
                      "class": "SphericPanoramaFrame",
                      "thumbnailUrl": "media/panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D_t.jpg",
                      "overlays": [
                       {
                        "class": "HotspotPanoramaOverlay",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 5.51,
                          "yaw": -15.91,
                          "image": {
                           "levels": [
                            {
                             "height": 25,
                             "class": "ImageResourceLevel",
                             "width": 25,
                             "url": "media/panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D_0_HS_0_0_0_map.gif"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -23.4
                         }
                        ],
                        "useHandCursor": true,
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "id": "overlay_58A2E0B8_5610_6BC8_41AC_72ACAF049ECD",
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "toolTip": "04_Living Room",
                          "click": "this.startPanoramaWithCamera(this.panorama_47B53902_572E_CEDF_41CC_C256D31A5443, this.camera_566FDDCF_5BF2_F6A7_41C3_D60F04E20C30); this.mainPlayList.set('selectedIndex', 3)",
                          "mapColor": "#FF0000",
                          "displayTooltipInTouchScreens": true
                         }
                        ],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": -15.91,
                          "hfov": 5.51,
                          "image": {
                           "levels": [
                            {
                             "height": 50,
                             "class": "ImageResourceLevel",
                             "width": 50,
                             "url": "media/panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D_0_HS_0_0.png"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -23.4
                         }
                        ]
                       },
                       {
                        "class": "HotspotPanoramaOverlay",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 5.92,
                          "yaw": -97.31,
                          "image": {
                           "levels": [
                            {
                             "height": 25,
                             "class": "ImageResourceLevel",
                             "width": 25,
                             "url": "media/panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D_0_HS_6_0_0_map.gif"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -9.64
                         }
                        ],
                        "useHandCursor": true,
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "id": "overlay_58A2C0B8_5610_6BC8_41D0_139AB1287679",
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "toolTip": "02_Entrance",
                          "click": "this.startPanoramaWithCamera(this.panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E, this.camera_565ACDA7_5BF2_F6E7_41BA_8BE7CEB9351B); this.mainPlayList.set('selectedIndex', 1)",
                          "mapColor": "#FF0000",
                          "displayTooltipInTouchScreens": true
                         }
                        ],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": -97.31,
                          "hfov": 5.92,
                          "image": {
                           "levels": [
                            {
                             "height": 50,
                             "class": "ImageResourceLevel",
                             "width": 50,
                             "url": "media/panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D_0_HS_6_0.png"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -9.64
                         }
                        ]
                       },
                       {
                        "class": "HotspotPanoramaOverlay",
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
                             "url": "media/panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D_0_HS_1_0_0_map.gif"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": 82.35
                         }
                        ],
                        "useHandCursor": true,
                        "enabledInCardboard": true,
                        "rollOverDisplay": true,
                        "id": "overlay_58A2A0B8_5610_6BC8_41D1_5ADBE82A62BD",
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116, this.camera_6AFD0676_602D_00C7_4185_80963EE52F21); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 5); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 8); this.mainPlayList.set('selectedIndex', 6)"
                         }
                        ],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": -172.22,
                          "hfov": 0,
                          "image": {
                           "levels": [
                            {
                             "height": 1,
                             "class": "ImageResourceLevel",
                             "width": 1,
                             "url": "media/panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D_0_HS_1_0.png"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": 82.35
                         }
                        ]
                       },
                       {
                        "class": "HotspotPanoramaOverlay",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 3.38,
                          "yaw": -15.86,
                          "image": {
                           "levels": [
                            {
                             "height": 14,
                             "class": "ImageResourceLevel",
                             "width": 14,
                             "url": "media/panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D_0_HS_7_0_0_map.gif"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -20.08
                         }
                        ],
                        "useHandCursor": true,
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "id": "overlay_57B43222_5BFC_C75B_4182_7A9FA3CAC323",
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "toolTip": "04_Living Room",
                          "click": "this.startPanoramaWithCamera(this.panorama_47B53902_572E_CEDF_41CC_C256D31A5443, this.camera_6A913662_602D_00FF_41D1_B504A3B712E4); this.mainPlayList.set('selectedIndex', 3)",
                          "mapColor": "#FF0000",
                          "displayTooltipInTouchScreens": true
                         }
                        ],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": -15.86,
                          "hfov": 3.38,
                          "image": {
                           "levels": [
                            {
                             "height": 29,
                             "class": "ImageResourceLevel",
                             "width": 29,
                             "url": "media/panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D_0_HS_7_0.png"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -20.08
                         }
                        ]
                       },
                       {
                        "class": "HotspotPanoramaOverlay",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 2.96,
                          "yaw": -93.71,
                          "image": {
                           "levels": [
                            {
                             "height": 12,
                             "class": "ImageResourceLevel",
                             "width": 12,
                             "url": "media/panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D_0_HS_8_0_0_map.gif"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -9.7
                         }
                        ],
                        "useHandCursor": true,
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "id": "overlay_5767B04D_5BFF_43E8_41A5_8076DCF11CBB",
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "toolTip": "02_Entrance",
                          "click": "this.startPanoramaWithCamera(this.panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E, this.camera_6ABE563D_602D_0045_41C1_67F64D28E823); this.mainPlayList.set('selectedIndex', 1)",
                          "mapColor": "#FF0000",
                          "displayTooltipInTouchScreens": true
                         }
                        ],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": -93.71,
                          "hfov": 2.96,
                          "image": {
                           "levels": [
                            {
                             "height": 25,
                             "class": "ImageResourceLevel",
                             "width": 25,
                             "url": "media/panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D_0_HS_8_0.png"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -9.7
                         }
                        ]
                       }
                      ],
                      "sphere": {
                       "levels": [
                        {
                         "height": 1500,
                         "class": "ImageResourceLevel",
                         "width": 3000,
                         "url": "media/panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D_hq.jpeg"
                        }
                       ],
                       "class": "ImageResource"
                      }
                     }
                    ],
                    "adjacentPanoramas": [
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_46009756_572D_4167_41C6_2B49BD1EF7CE",
                      "yaw": -172.22,
                      "backwardYaw": -162.92,
                      "distance": 1
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC",
                      "yaw": -172.22,
                      "backwardYaw": -170.2,
                      "distance": 1
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E",
                      "yaw": -93.71,
                      "backwardYaw": -14.94,
                      "distance": 1
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D",
                      "yaw": -172.22,
                      "backwardYaw": -172.21,
                      "distance": 1
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF",
                      "yaw": -172.22,
                      "backwardYaw": -162.92,
                      "distance": 1
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": {
                       "class": "Panorama",
                       "frames": [
                        {
                         "class": "SphericPanoramaFrame",
                         "thumbnailUrl": "media/panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C_t.jpg",
                         "overlays": [
                          {
                           "class": "HotspotPanoramaOverlay",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "hfov": 4.67,
                             "yaw": 160.52,
                             "image": {
                              "levels": [
                               {
                                "height": 24,
                                "class": "ImageResourceLevel",
                                "width": 24,
                                "url": "media/panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C_0_HS_0_0_0_map.gif"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -38.95
                            }
                           ],
                           "useHandCursor": true,
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "id": "overlay_442A1C56_55AD_AFC8_41D5_0D9EEC86CEFD",
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "toolTip": "06_Master",
                             "click": "this.startPanoramaWithCamera(this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF, this.camera_55CB7E16_5BF2_F5B9_4191_4ABD27800AF8); this.mainPlayList.set('selectedIndex', 5)",
                             "mapColor": "#FF0000",
                             "displayTooltipInTouchScreens": true
                            }
                           ],
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "yaw": 160.52,
                             "hfov": 4.67,
                             "image": {
                              "levels": [
                               {
                                "height": 49,
                                "class": "ImageResourceLevel",
                                "width": 49,
                                "url": "media/panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C_0_HS_0_0.png"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -38.95
                            }
                           ]
                          },
                          {
                           "class": "HotspotPanoramaOverlay",
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
                                "url": "media/panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C_0_HS_1_0_0_map.gif"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": 85.29
                            }
                           ],
                           "useHandCursor": true,
                           "enabledInCardboard": true,
                           "rollOverDisplay": true,
                           "id": "overlay_442A7C56_55AD_AFC8_41D5_4AD267333E92",
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116, this.camera_6B6DA6C9_602D_01CD_41CE_6816ED85EF73); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 8); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 7)"
                            }
                           ],
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "yaw": -170.58,
                             "hfov": 0,
                             "image": {
                              "levels": [
                               {
                                "height": 1,
                                "class": "ImageResourceLevel",
                                "width": 1,
                                "url": "media/panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C_0_HS_1_0.png"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": 85.29
                            }
                           ]
                          },
                          {
                           "class": "HotspotPanoramaOverlay",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "hfov": 2.93,
                             "yaw": 160.52,
                             "image": {
                              "levels": [
                               {
                                "height": 14,
                                "class": "ImageResourceLevel",
                                "width": 14,
                                "url": "media/panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C_0_HS_6_0_0_map.gif"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -35.51
                            }
                           ],
                           "useHandCursor": true,
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "id": "overlay_5794707F_5BE4_C3A8_41CD_E10EA0877B80",
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "toolTip": "06_Master",
                             "click": "this.startPanoramaWithCamera(this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF, this.camera_6B2186A4_602D_007B_41BD_FCF503025A06); this.mainPlayList.set('selectedIndex', 5)",
                             "mapColor": "#FF0000",
                             "displayTooltipInTouchScreens": true
                            }
                           ],
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "yaw": 160.52,
                             "hfov": 2.93,
                             "image": {
                              "levels": [
                               {
                                "height": 29,
                                "class": "ImageResourceLevel",
                                "width": 29,
                                "url": "media/panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C_0_HS_6_0.png"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -35.51
                            }
                           ]
                          }
                         ],
                         "sphere": {
                          "levels": [
                           {
                            "height": 1500,
                            "class": "ImageResourceLevel",
                            "width": 3000,
                            "url": "media/panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C_hq.jpeg"
                           }
                          ],
                          "class": "ImageResource"
                         }
                        }
                       ],
                       "adjacentPanoramas": [
                        {
                         "class": "AdjacentPanorama",
                         "panorama": "this.panorama_46009756_572D_4167_41C6_2B49BD1EF7CE",
                         "yaw": -170.58,
                         "backwardYaw": -162.92,
                         "distance": 1
                        },
                        {
                         "class": "AdjacentPanorama",
                         "panorama": "this.panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC",
                         "yaw": -170.58,
                         "backwardYaw": -170.2,
                         "distance": 1
                        },
                        {
                         "class": "AdjacentPanorama",
                         "panorama": "this.panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E",
                         "yaw": -170.58,
                         "backwardYaw": -170.68,
                         "distance": 1
                        },
                        {
                         "class": "AdjacentPanorama",
                         "panorama": "this.panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D",
                         "yaw": -170.58,
                         "backwardYaw": -172.21,
                         "distance": 1
                        },
                        {
                         "class": "AdjacentPanorama",
                         "panorama": "this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF",
                         "yaw": 160.52,
                         "backwardYaw": 162.5,
                         "distance": 1
                        },
                        {
                         "class": "AdjacentPanorama",
                         "panorama": "this.panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D",
                         "yaw": -170.58,
                         "backwardYaw": -172.22,
                         "distance": 1
                        },
                        {
                         "class": "AdjacentPanorama",
                         "panorama": {
                          "class": "Panorama",
                          "frames": [
                           {
                            "class": "SphericPanoramaFrame",
                            "thumbnailUrl": "media/panorama_47B53902_572E_CEDF_41CC_C256D31A5443_t.jpg",
                            "overlays": [
                             {
                              "class": "HotspotPanoramaOverlay",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 5.95,
                                "yaw": 42.54,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 24,
                                   "class": "ImageResourceLevel",
                                   "width": 24,
                                   "url": "media/panorama_47B53902_572E_CEDF_41CC_C256D31A5443_0_HS_0_0_0_map.gif"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": -7.16
                               }
                              ],
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "id": "overlay_47B55902_572E_CEDF_41AF_5DD57D9CB811",
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "toolTip": "05_1Bedroom",
                                "click": "this.startPanoramaWithCamera(this.panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC, this.camera_55BE4E50_5BF2_F5B9_41B2_A0DBD967D7CD); this.mainPlayList.set('selectedIndex', 4)",
                                "mapColor": "#FF0000",
                                "displayTooltipInTouchScreens": true
                               }
                              ],
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": 42.54,
                                "hfov": 5.95,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 49,
                                   "class": "ImageResourceLevel",
                                   "width": 49,
                                   "url": "media/panorama_47B53902_572E_CEDF_41CC_C256D31A5443_0_HS_0_0.png"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": -7.16
                               }
                              ]
                             },
                             {
                              "class": "HotspotPanoramaOverlay",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 5.42,
                                "yaw": -164.23,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 24,
                                   "class": "ImageResourceLevel",
                                   "width": 24,
                                   "url": "media/panorama_47B53902_572E_CEDF_41CC_C256D31A5443_0_HS_5_0_0_map.gif"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": -25.33
                               }
                              ],
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "id": "overlay_47B54902_572E_CEDF_41B1_68F40224ADD4",
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "toolTip": "03_Pool",
                                "click": "this.startPanoramaWithCamera(this.panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D, this.camera_5577FE77_5BF2_F267_41AE_B186A0A61737); this.mainPlayList.set('selectedIndex', 2)",
                                "mapColor": "#FF0000",
                                "displayTooltipInTouchScreens": true
                               }
                              ],
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": -164.23,
                                "hfov": 5.42,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 49,
                                   "class": "ImageResourceLevel",
                                   "width": 49,
                                   "url": "media/panorama_47B53902_572E_CEDF_41CC_C256D31A5443_0_HS_5_0.png"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": -25.33
                               }
                              ]
                             },
                             {
                              "class": "HotspotPanoramaOverlay",
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
                                   "url": "media/panorama_47B53902_572E_CEDF_41CC_C256D31A5443_0_HS_1_0_0_map.gif"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": 82.97
                               }
                              ],
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "rollOverDisplay": true,
                              "id": "overlay_47B57902_572E_CEDF_41D0_F28E9EC04E5B",
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116, this.camera_6B98071C_602D_0044_41C5_2F6DB0715A57); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 8); this.mainPlayList.set('selectedIndex', 5)"
                               }
                              ],
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": -171.96,
                                "hfov": 0,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 1,
                                   "class": "ImageResourceLevel",
                                   "width": 1,
                                   "url": "media/panorama_47B53902_572E_CEDF_41CC_C256D31A5443_0_HS_1_0.png"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": 82.97
                               }
                              ]
                             },
                             {
                              "class": "HotspotPanoramaOverlay",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 3.59,
                                "yaw": 42.59,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 14,
                                   "class": "ImageResourceLevel",
                                   "width": 14,
                                   "url": "media/panorama_47B53902_572E_CEDF_41CC_C256D31A5443_0_HS_6_0_0_map.gif"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": -3.64
                               }
                              ],
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "id": "overlay_5791E8EE_5BFB_44A8_41C2_CE4E8FCB8536",
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "toolTip": "05_1Bedroom",
                                "click": "this.startPanoramaWithCamera(this.panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC, this.camera_6B77B6DC_602D_01CB_41B6_FC92E2E8436A); this.mainPlayList.set('selectedIndex', 4)",
                                "mapColor": "#FF0000",
                                "displayTooltipInTouchScreens": true
                               }
                              ],
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": 42.59,
                                "hfov": 3.59,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 29,
                                   "class": "ImageResourceLevel",
                                   "width": 29,
                                   "url": "media/panorama_47B53902_572E_CEDF_41CC_C256D31A5443_0_HS_6_0.png"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": -3.64
                               }
                              ]
                             },
                             {
                              "class": "HotspotPanoramaOverlay",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 3.34,
                                "yaw": -164.16,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 14,
                                   "class": "ImageResourceLevel",
                                   "width": 14,
                                   "url": "media/panorama_47B53902_572E_CEDF_41CC_C256D31A5443_0_HS_7_0_0_map.gif"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": -22.07
                               }
                              ],
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "id": "overlay_57A7B7AB_5BE5_4CA9_41D1_7CA9E6A13255",
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "toolTip": "03_Pool",
                                "click": "this.startPanoramaWithCamera(this.panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D, this.camera_6BA3C700_602D_003C_41B2_2905ED548A6E); this.mainPlayList.set('selectedIndex', 2)",
                                "mapColor": "#FF0000",
                                "displayTooltipInTouchScreens": true
                               }
                              ],
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": -164.16,
                                "hfov": 3.34,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 29,
                                   "class": "ImageResourceLevel",
                                   "width": 29,
                                   "url": "media/panorama_47B53902_572E_CEDF_41CC_C256D31A5443_0_HS_7_0.png"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": -22.07
                               }
                              ]
                             }
                            ],
                            "sphere": {
                             "levels": [
                              {
                               "height": 1500,
                               "class": "ImageResourceLevel",
                               "width": 3000,
                               "url": "media/panorama_47B53902_572E_CEDF_41CC_C256D31A5443_hq.jpeg"
                              }
                             ],
                             "class": "ImageResource"
                            }
                           }
                          ],
                          "adjacentPanoramas": [
                           {
                            "class": "AdjacentPanorama",
                            "panorama": "this.panorama_46009756_572D_4167_41C6_2B49BD1EF7CE",
                            "yaw": -171.96,
                            "backwardYaw": -162.92,
                            "distance": 1
                           },
                           {
                            "class": "AdjacentPanorama",
                            "panorama": "this.panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC",
                            "yaw": 42.59,
                            "backwardYaw": 115,
                            "distance": 1
                           },
                           {
                            "class": "AdjacentPanorama",
                            "panorama": "this.panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E",
                            "yaw": -171.96,
                            "backwardYaw": -170.68,
                            "distance": 1
                           },
                           {
                            "class": "AdjacentPanorama",
                            "panorama": "this.panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D",
                            "yaw": -171.96,
                            "backwardYaw": -172.21,
                            "distance": 1
                           },
                           {
                            "class": "AdjacentPanorama",
                            "panorama": "this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF",
                            "yaw": -171.96,
                            "backwardYaw": -162.92,
                            "distance": 1
                           },
                           {
                            "class": "AdjacentPanorama",
                            "panorama": "this.panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D",
                            "yaw": -164.16,
                            "backwardYaw": -15.86,
                            "distance": 1
                           },
                           {
                            "class": "AdjacentPanorama",
                            "panorama": "this.panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C",
                            "yaw": -171.96,
                            "backwardYaw": -170.58,
                            "distance": 1
                           },
                           {
                            "class": "AdjacentPanorama",
                            "panorama": "this.panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E",
                            "yaw": -171.96,
                            "backwardYaw": -171.35,
                            "distance": 1
                           },
                           {
                            "class": "AdjacentPanorama",
                            "panorama": {
                             "class": "Panorama",
                             "frames": [
                              {
                               "class": "SphericPanoramaFrame",
                               "thumbnailUrl": "media/panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116_t.jpg",
                               "overlays": [
                                {
                                 "class": "HotspotPanoramaOverlay",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 5.99,
                                   "yaw": 35.15,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 24,
                                      "class": "ImageResourceLevel",
                                      "width": 24,
                                      "url": "media/panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116_0_HS_6_0_0_map.gif"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": -3.77
                                  }
                                 ],
                                 "useHandCursor": true,
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "id": "overlay_47EE6DFC_55B3_68B8_41D1_9C870BBC84DA",
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "toolTip": "07_2Beds Room",
                                   "click": "this.startPanoramaWithCamera(this.panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D, this.camera_5488DF3C_5BF2_F3E9_41D1_C652E087859B); this.mainPlayList.set('selectedIndex', 8)",
                                   "mapColor": "#FF0000",
                                   "displayTooltipInTouchScreens": true
                                  }
                                 ],
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": 35.15,
                                   "hfov": 5.99,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 49,
                                      "class": "ImageResourceLevel",
                                      "width": 49,
                                      "url": "media/panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116_0_HS_6_0.png"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": -3.77
                                  }
                                 ]
                                },
                                {
                                 "class": "HotspotPanoramaOverlay",
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
                                      "url": "media/panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116_0_HS_5_0_0_map.gif"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": 85.84
                                  }
                                 ],
                                 "useHandCursor": true,
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": true,
                                 "id": "overlay_47EE9DFC_55B3_68B8_41BE_F533FF904D14",
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E, this.camera_6C84D80A_602D_004F_41C5_3C08F7A63271); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 5); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 4)"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": -173.12,
                                   "hfov": 0,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 1,
                                      "class": "ImageResourceLevel",
                                      "width": 1,
                                      "url": "media/panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116_0_HS_5_0.png"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": 85.84
                                  }
                                 ]
                                },
                                {
                                 "class": "HotspotPanoramaOverlay",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 2.97,
                                   "yaw": 35.19,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 12,
                                      "class": "ImageResourceLevel",
                                      "width": 12,
                                      "url": "media/panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116_0_HS_7_0_0_map.gif"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": -7.41
                                  }
                                 ],
                                 "useHandCursor": true,
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "id": "overlay_5077CCBC_5C1C_FCAF_41CB_A5DE047647F6",
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "toolTip": "07_2Beds Room",
                                   "click": "this.startPanoramaWithCamera(this.panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D, this.camera_6C49F7D6_602D_0FC7_41D6_26D26B790304); this.mainPlayList.set('selectedIndex', 8)",
                                   "mapColor": "#FF0000",
                                   "displayTooltipInTouchScreens": true
                                  }
                                 ],
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": 35.19,
                                   "hfov": 2.97,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 24,
                                      "class": "ImageResourceLevel",
                                      "width": 24,
                                      "url": "media/panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116_0_HS_7_0.png"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": -7.41
                                  }
                                 ]
                                }
                               ],
                               "sphere": {
                                "levels": [
                                 {
                                  "height": 1500,
                                  "class": "ImageResourceLevel",
                                  "width": 3000,
                                  "url": "media/panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116_hq.jpeg"
                                 }
                                ],
                                "class": "ImageResource"
                               }
                              }
                             ],
                             "adjacentPanoramas": [
                              {
                               "class": "AdjacentPanorama",
                               "panorama": "this.panorama_46009756_572D_4167_41C6_2B49BD1EF7CE",
                               "yaw": -173.12,
                               "backwardYaw": -162.92,
                               "distance": 1
                              },
                              {
                               "class": "AdjacentPanorama",
                               "panorama": "this.panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC",
                               "yaw": -173.12,
                               "backwardYaw": -170.2,
                               "distance": 1
                              },
                              {
                               "class": "AdjacentPanorama",
                               "panorama": "this.panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E",
                               "yaw": -173.12,
                               "backwardYaw": -170.68,
                               "distance": 1
                              },
                              {
                               "class": "AdjacentPanorama",
                               "panorama": "this.panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D",
                               "yaw": 35.19,
                               "backwardYaw": 110.67,
                               "distance": 1
                              },
                              {
                               "class": "AdjacentPanorama",
                               "panorama": "this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF",
                               "yaw": -173.12,
                               "backwardYaw": -162.92,
                               "distance": 1
                              },
                              {
                               "class": "AdjacentPanorama",
                               "panorama": "this.panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D",
                               "yaw": -173.12,
                               "backwardYaw": -172.22,
                               "distance": 1
                              },
                              {
                               "class": "AdjacentPanorama",
                               "panorama": "this.panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C",
                               "yaw": -173.12,
                               "backwardYaw": -170.58,
                               "distance": 1
                              },
                              {
                               "class": "AdjacentPanorama",
                               "panorama": "this.panorama_47B53902_572E_CEDF_41CC_C256D31A5443",
                               "yaw": -173.12,
                               "backwardYaw": -171.96,
                               "distance": 1
                              },
                              {
                               "class": "AdjacentPanorama",
                               "panorama": "this.panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E",
                               "yaw": -173.12,
                               "backwardYaw": -171.35,
                               "distance": 1
                              }
                             ],
                             "id": "panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116",
                             "partial": false,
                             "pitch": 0,
                             "thumbnailUrl": "media/panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116_t.jpg",
                             "hfovMin": 60,
                             "label": "08_Rooftop",
                             "hfovMax": 120,
                             "hfov": 360,
                             "vfov": 180
                            },
                            "yaw": -171.96,
                            "backwardYaw": -173.12,
                            "distance": 1
                           }
                          ],
                          "id": "panorama_47B53902_572E_CEDF_41CC_C256D31A5443",
                          "partial": false,
                          "pitch": 0,
                          "thumbnailUrl": "media/panorama_47B53902_572E_CEDF_41CC_C256D31A5443_t.jpg",
                          "hfovMin": 60,
                          "label": "04_Living Room",
                          "hfovMax": 120,
                          "hfov": 360,
                          "vfov": 180
                         },
                         "yaw": -170.58,
                         "backwardYaw": -171.96,
                         "distance": 1
                        },
                        {
                         "class": "AdjacentPanorama",
                         "panorama": "this.panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E",
                         "yaw": -170.58,
                         "backwardYaw": -171.35,
                         "distance": 1
                        },
                        {
                         "class": "AdjacentPanorama",
                         "panorama": "this.panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116",
                         "yaw": -170.58,
                         "backwardYaw": -173.12,
                         "distance": 1
                        }
                       ],
                       "id": "panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C",
                       "partial": false,
                       "pitch": 0,
                       "thumbnailUrl": "media/panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C_t.jpg",
                       "hfovMin": 60,
                       "label": "06a_Balcony",
                       "hfovMax": 120,
                       "hfov": 360,
                       "vfov": 180
                      },
                      "yaw": -172.22,
                      "backwardYaw": -170.58,
                      "distance": 1
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_47B53902_572E_CEDF_41CC_C256D31A5443",
                      "yaw": -15.86,
                      "backwardYaw": -164.16,
                      "distance": 1
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E",
                      "yaw": -172.22,
                      "backwardYaw": -171.35,
                      "distance": 1
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116",
                      "yaw": -172.22,
                      "backwardYaw": -173.12,
                      "distance": 1
                     }
                    ],
                    "id": "panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D",
                    "partial": false,
                    "pitch": 0,
                    "thumbnailUrl": "media/panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D_t.jpg",
                    "hfovMin": 60,
                    "label": "03_Pool",
                    "hfovMax": 120,
                    "hfov": 360,
                    "vfov": 180
                   },
                   "yaw": -162.92,
                   "backwardYaw": -172.22,
                   "distance": 1
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C",
                   "yaw": 162.5,
                   "backwardYaw": 160.52,
                   "distance": 1
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_47B53902_572E_CEDF_41CC_C256D31A5443",
                   "yaw": -162.92,
                   "backwardYaw": -171.96,
                   "distance": 1
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E",
                   "yaw": -162.92,
                   "backwardYaw": -171.35,
                   "distance": 1
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116",
                   "yaw": -162.92,
                   "backwardYaw": -173.12,
                   "distance": 1
                  }
                 ],
                 "id": "panorama_45750F9A_5593_A978_41D1_DB2A12878BDF",
                 "partial": false,
                 "pitch": 0,
                 "thumbnailUrl": "media/panorama_45750F9A_5593_A978_41D1_DB2A12878BDF_t.jpg",
                 "hfovMin": 60,
                 "label": "06_Master",
                 "hfovMax": 120,
                 "hfov": 360,
                 "vfov": 180
                },
                "yaw": 110.96,
                "backwardYaw": 34.95,
                "distance": 1
               },
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D",
                "yaw": -172.21,
                "backwardYaw": -172.22,
                "distance": 1
               },
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C",
                "yaw": -172.21,
                "backwardYaw": -170.58,
                "distance": 1
               },
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_47B53902_572E_CEDF_41CC_C256D31A5443",
                "yaw": -172.21,
                "backwardYaw": -171.96,
                "distance": 1
               },
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E",
                "yaw": -172.21,
                "backwardYaw": -171.35,
                "distance": 1
               },
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116",
                "yaw": 110.67,
                "backwardYaw": 35.19,
                "distance": 1
               }
              ],
              "id": "panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D",
              "partial": false,
              "pitch": 0,
              "thumbnailUrl": "media/panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D_t.jpg",
              "hfovMin": 60,
              "label": "07_2Beds Room",
              "hfovMax": 120,
              "hfov": 360,
              "vfov": 180
             },
             "yaw": -170.68,
             "backwardYaw": -172.21,
             "distance": 1
            },
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF",
             "yaw": -170.68,
             "backwardYaw": -162.92,
             "distance": 1
            },
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D",
             "yaw": -14.94,
             "backwardYaw": -93.71,
             "distance": 1
            },
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C",
             "yaw": -170.68,
             "backwardYaw": -170.58,
             "distance": 1
            },
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_47B53902_572E_CEDF_41CC_C256D31A5443",
             "yaw": -170.68,
             "backwardYaw": -171.96,
             "distance": 1
            },
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E",
             "yaw": 1.83,
             "backwardYaw": 142.99,
             "distance": 1
            },
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116",
             "yaw": -170.68,
             "backwardYaw": -173.12,
             "distance": 1
            }
           ],
           "id": "panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E",
           "partial": false,
           "pitch": 0,
           "thumbnailUrl": "media/panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E_t.jpg",
           "hfovMin": 60,
           "label": "02_Entrance",
           "hfovMax": 120,
           "hfov": 360,
           "vfov": 180
          },
          "yaw": -170.2,
          "backwardYaw": -170.68,
          "distance": 1
         },
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D",
          "yaw": -170.2,
          "backwardYaw": -172.21,
          "distance": 1
         },
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF",
          "yaw": 114.89,
          "backwardYaw": 35,
          "distance": 1
         },
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D",
          "yaw": -170.2,
          "backwardYaw": -172.22,
          "distance": 1
         },
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C",
          "yaw": -170.2,
          "backwardYaw": -170.58,
          "distance": 1
         },
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_47B53902_572E_CEDF_41CC_C256D31A5443",
          "yaw": 115,
          "backwardYaw": 42.59,
          "distance": 1
         },
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E",
          "yaw": -170.2,
          "backwardYaw": -171.35,
          "distance": 1
         },
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116",
          "yaw": -170.2,
          "backwardYaw": -173.12,
          "distance": 1
         }
        ],
        "id": "panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC",
        "partial": false,
        "pitch": 0,
        "thumbnailUrl": "media/panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC_t.jpg",
        "hfovMin": 60,
        "label": "05_1Bedroom",
        "hfovMax": 120,
        "hfov": 360,
        "vfov": 180
       },
       "yaw": -162.92,
       "backwardYaw": -170.2,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E",
       "yaw": -162.92,
       "backwardYaw": -170.68,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D",
       "yaw": -162.92,
       "backwardYaw": -172.21,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF",
       "yaw": -162.75,
       "backwardYaw": 83.08,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D",
       "yaw": -162.92,
       "backwardYaw": -172.22,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C",
       "yaw": -162.92,
       "backwardYaw": -170.58,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_47B53902_572E_CEDF_41CC_C256D31A5443",
       "yaw": -162.92,
       "backwardYaw": -171.96,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E",
       "yaw": -162.92,
       "backwardYaw": -171.35,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116",
       "yaw": -162.92,
       "backwardYaw": -173.12,
       "distance": 1
      }
     ],
     "id": "panorama_46009756_572D_4167_41C6_2B49BD1EF7CE",
     "partial": false,
     "pitch": 0,
     "thumbnailUrl": "media/panorama_46009756_572D_4167_41C6_2B49BD1EF7CE_t.jpg",
     "hfovMin": 60,
     "label": "06b_WC",
     "hfovMax": 120,
     "hfov": 360,
     "vfov": 180
    },
    "yaw": -171.35,
    "backwardYaw": -162.92,
    "distance": 1
   },
   {
    "class": "AdjacentPanorama",
    "panorama": "this.panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC",
    "yaw": -171.35,
    "backwardYaw": -170.2,
    "distance": 1
   },
   {
    "class": "AdjacentPanorama",
    "panorama": "this.panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E",
    "yaw": 142.99,
    "backwardYaw": 1.83,
    "distance": 1
   },
   {
    "class": "AdjacentPanorama",
    "panorama": "this.panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D",
    "yaw": -171.35,
    "backwardYaw": -172.21,
    "distance": 1
   },
   {
    "class": "AdjacentPanorama",
    "panorama": "this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF",
    "yaw": -171.35,
    "backwardYaw": -162.92,
    "distance": 1
   },
   {
    "class": "AdjacentPanorama",
    "panorama": "this.panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D",
    "yaw": -171.35,
    "backwardYaw": -172.22,
    "distance": 1
   },
   {
    "class": "AdjacentPanorama",
    "panorama": "this.panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C",
    "yaw": -171.35,
    "backwardYaw": -170.58,
    "distance": 1
   },
   {
    "class": "AdjacentPanorama",
    "panorama": "this.panorama_47B53902_572E_CEDF_41CC_C256D31A5443",
    "yaw": -171.35,
    "backwardYaw": -171.96,
    "distance": 1
   },
   {
    "class": "AdjacentPanorama",
    "panorama": "this.panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116",
    "yaw": -171.35,
    "backwardYaw": -173.12,
    "distance": 1
   }
  ],
  "id": "panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E_t.jpg",
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 415.62,
    "x": 303.34,
    "angle": 71.83,
    "map": {
     "class": "Map",
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
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_4E318587_4299_762E_41B8_79C61CBB293C",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 100,
        "y": 365.62,
        "height": 100,
        "x": 253.34,
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
       "rollOverDisplay": false,
       "image": {
        "height": 100,
        "class": "HotspotMapOverlayImage",
        "y": 365.62,
        "x": 253.34,
        "width": 100,
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
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
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
  "hfovMin": 60,
  "label": "01_Street View",
  "hfovMax": 120,
  "hfov": 360,
  "vfov": 180
 },
 {
  "class": "PanoramaPlayer",
  "preloadEnabled": false,
  "displayPlaybackBar": true,
  "buttonPlay": "this.IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED",
  "buttonStop": [
   "this.IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4",
   "this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB"
  ],
  "buttonToggleHotspots": {
   "class": "IconButton",
   "paddingRight": 0,
   "mode": "toggle",
   "toolTipPaddingRight": 6,
   "minWidth": 1,
   "iconURL": "skin/IconButton_80E5955A_8E23_BB05_41CA_43DD61DBAEE9.png",
   "height": "100%",
   "width": "100%",
   "toolTipPaddingBottom": 4,
   "toolTipTextShadowOpacity": 0,
   "transparencyActive": true,
   "toolTipPaddingTop": 4,
   "toolTip": "Hotspots Visibility",
   "toolTipFontSize": 14,
   "toolTipShadowOpacity": 1,
   "toolTipOpacity": 0.7,
   "borderSize": 0,
   "toolTipBorderSize": 1,
   "paddingLeft": 0,
   "toolTipTextShadowColor": "#000000",
   "borderRadius": 0,
   "maxWidth": 60,
   "toolTipPaddingLeft": 6,
   "toolTipBorderColor": "#767676",
   "toolTipShadowHorizontalLength": 0,
   "horizontalAlign": "center",
   "toolTipShadowVerticalLength": 0,
   "shadow": false,
   "toolTipFontStyle": "normal",
   "toolTipBorderRadius": 3,
   "toolTipBackgroundColor": "#000000",
   "click": "if(!this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, true, 0, this.effect_CDD059FA_EED0_D223_41DB_70ACFBE986FE, 'showEffect', false) } else if(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, false, 0, this.effect_CDD049FB_EED0_D221_41EB_CA2134B978E0, 'hideEffect', false) }",
   "cursor": "hand",
   "paddingBottom": 0,
   "toolTipTextShadowBlurRadius": 3,
   "toolTipFontWeight": "normal",
   "id": "IconButton_80E5955A_8E23_BB05_41CA_43DD61DBAEE9",
   "maxHeight": 60,
   "paddingTop": 0,
   "toolTipShadowSpread": 0,
   "toolTipShadowColor": "#333333",
   "toolTipShadowBlurRadius": 3,
   "pressedIconURL": "skin/IconButton_80E5955A_8E23_BB05_41CA_43DD61DBAEE9_pressed.png",
   "backgroundOpacity": 0,
   "minHeight": 1,
   "toolTipFontColor": "#606060",
   "toolTipFontFamily": "Arial",
   "verticalAlign": "middle"
  },
  "buttonCardboardView": {
   "class": "IconButton",
   "paddingRight": 0,
   "mode": "push",
   "minWidth": 1,
   "height": "100%",
   "width": "100%",
   "iconURL": "skin/IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37.png",
   "transparencyActive": false,
   "borderRadius": 0,
   "borderSize": 0,
   "paddingLeft": 0,
   "maxWidth": 60,
   "horizontalAlign": "center",
   "shadow": false,
   "cursor": "hand",
   "paddingBottom": 0,
   "id": "IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37",
   "maxHeight": 60,
   "paddingTop": 0,
   "backgroundOpacity": 0,
   "minHeight": 1,
   "verticalAlign": "middle"
  },
  "id": "MainViewerPanoramaPlayer",
  "viewerArea": "this.MainViewer",
  "touchControlMode": "drag_rotation",
  "mouseControlMode": "drag_acceleration",
  "gyroscopeVerticalDraggingEnabled": true
 },
 {
  "class": "MapPlayer",
  "movementMode": "constrained",
  "id": "MapViewerMapPlayer",
  "viewerArea": {
   "class": "ViewerArea",
   "paddingRight": 0,
   "progressBorderRadius": 0,
   "progressBarBackgroundColorDirection": "vertical",
   "progressBackgroundColor": [
    "#FFFFFF"
   ],
   "playbackBarHeadShadowHorizontalLength": 0,
   "playbackBarOpacity": 1,
   "progressBarOpacity": 1,
   "toolTipPaddingBottom": 4,
   "playbackBarProgressBackgroundColorDirection": "vertical",
   "progressRight": 0,
   "toolTipBorderSize": 1,
   "playbackBarBackgroundColor": [
    "#FFFFFF"
   ],
   "toolTipOpacity": 1,
   "playbackBarBorderColor": "#FFFFFF",
   "toolTipShadowOpacity": 1,
   "playbackBarHeight": 10,
   "toolTipShadowVerticalLength": 0,
   "playbackBarHeadWidth": 6,
   "shadow": false,
   "toolTipFontStyle": "normal",
   "toolTipShadowHorizontalLength": 0,
   "playbackBarBackgroundColorDirection": "vertical",
   "toolTipBackgroundColor": "#F6F6F6",
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
   "minHeight": 1,
   "toolTipShadowBlurRadius": 3,
   "toolTipFontColor": "#606060",
   "playbackBarBorderRadius": 0,
   "playbackBarProgressBorderColor": "#000000",
   "playbackBarHeadBackgroundColor": [
    "#111111",
    "#666666"
   ],
   "toolTipPaddingRight": 6,
   "minWidth": 1,
   "playbackBarHeadBorderRadius": 0,
   "paddingLeft": 0,
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
   "toolTipTextShadowColor": "#000000",
   "progressBackgroundOpacity": 1,
   "playbackBarHeadShadowBlurRadius": 3,
   "toolTipPaddingLeft": 6,
   "toolTipBorderColor": "#767676",
   "playbackBarProgressBackgroundColorRatios": [
    0
   ],
   "playbackBarLeft": 0,
   "playbackBarHeadHeight": 15,
   "playbackBarBackgroundOpacity": 1,
   "playbackBarHeadShadowVerticalLength": 0,
   "playbackBarBorderSize": 0,
   "toolTipBorderRadius": 3,
   "playbackBarHeadShadowOpacity": 0.7,
   "top": "10%",
   "playbackBarHeadBackgroundColorRatios": [
    0,
    1
   ],
   "toolTipTextShadowBlurRadius": 3,
   "bottom": "10%",
   "toolTipFontWeight": "normal",
   "id": "MapViewer",
   "playbackBarHeadBorderSize": 0,
   "playbackBarHeadShadow": true,
   "progressBarBorderColor": "#000000",
   "playbackBarHeadOpacity": 1,
   "progressHeight": 10,
   "playbackBarHeadShadowColor": "#000000",
   "progressBarBackgroundColorRatios": [
    0
   ],
   "playbackBarBottom": 0,
   "progressBorderColor": "#000000",
   "progressBackgroundColorDirection": "vertical",
   "left": "10%",
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
  "class": "PanoramaCamera",
  "id": "panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 178.1,
   "pitch": 2.83
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 "this.panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E",
 {
  "class": "PanoramaCamera",
  "id": "panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 16.81,
   "pitch": 2.87
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 "this.panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D",
 {
  "class": "PanoramaCamera",
  "id": "panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 "this.panorama_47B53902_572E_CEDF_41CC_C256D31A5443",
 {
  "class": "PanoramaCamera",
  "id": "panorama_47B53902_572E_CEDF_41CC_C256D31A5443_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 "this.panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC",
 {
  "class": "PanoramaCamera",
  "id": "panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 "this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF",
 {
  "class": "PanoramaCamera",
  "id": "panorama_45750F9A_5593_A978_41D1_DB2A12878BDF_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 "this.panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C",
 {
  "class": "PanoramaCamera",
  "id": "panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 "this.panorama_46009756_572D_4167_41C6_2B49BD1EF7CE",
 {
  "class": "PanoramaCamera",
  "id": "panorama_46009756_572D_4167_41C6_2B49BD1EF7CE_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 "this.panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D",
 {
  "class": "PanoramaCamera",
  "id": "panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 "this.panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116",
 {
  "class": "PanoramaCamera",
  "id": "panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_6BBC43C7_602D_07C5_4199_D6EE08FDAE44",
    "media": "this.panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_6BBC43C7_602D_07C5_4199_D6EE08FDAE44, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "media": "this.panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "media": "this.panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "media": "this.panorama_47B53902_572E_CEDF_41CC_C256D31A5443",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_47B53902_572E_CEDF_41CC_C256D31A5443_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "media": "this.panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "media": "this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "media": "this.panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "media": "this.panorama_46009756_572D_4167_41C6_2B49BD1EF7CE",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_46009756_572D_4167_41C6_2B49BD1EF7CE_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "media": "this.panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 0)",
    "media": "this.panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116_camera"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist",
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 0, 1)",
    "media": "this.panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 1, 2)",
    "media": "this.panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 2, 3)",
    "media": "this.panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 3, 4)",
    "media": "this.panorama_47B53902_572E_CEDF_41CC_C256D31A5443",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_47B53902_572E_CEDF_41CC_C256D31A5443_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 4, 5)",
    "media": "this.panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 5, 6)",
    "media": "this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 6, 7)",
    "media": "this.panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 7, 8)",
    "media": "this.panorama_46009756_572D_4167_41C6_2B49BD1EF7CE",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_46009756_572D_4167_41C6_2B49BD1EF7CE_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 8, 9)",
    "media": "this.panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 9, 0)",
    "media": "this.panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116_camera"
   }
  ]
 },
 {
  "class": "Video",
  "thumbnailUrl": "media/video_210B394E_3D54_1A60_41A3_CB42BEC0D3EC_t.jpg",
  "label": "DJI_0384",
  "video": {
   "webmUrl": "media/video_210B394E_3D54_1A60_41A3_CB42BEC0D3EC.webm",
   "mp4Url": "media/video_210B394E_3D54_1A60_41A3_CB42BEC0D3EC.mp4",
   "width": 1920,
   "height": 1080,
   "class": "VideoResource"
  },
  "width": 1920,
  "id": "video_210B394E_3D54_1A60_41A3_CB42BEC0D3EC",
  "loop": false,
  "height": 1080,
  "scaleMode": "fit_outside"
 },
 {
  "class": "PlayList",
  "id": "playList_6BAFC3B8_602D_004B_41A7_4A2855C13CC5",
  "items": [
   {
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_210B394E_3D54_1A60_41A3_CB42BEC0D3EC",
    "begin": "this.registerKey('visibility_Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB', this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB.get('visible')); this.registerKey('visibility_ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472', this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472.get('visible')); this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setComponentVisibility(this.Container_86F3A56C_8E22_5B1D_41CA_9CE53436FE56, false, -1, this.effect_22973FB1_2DD9_0423_41C1_E1E03953DCCE, 'hideEffect', false); this.setComponentVisibility(this.Container_807F782A_8E23_A905_41DE_623121285A09, false, -1, this.effect_22974FB2_2DD9_0421_41BA_84205292D043, 'hideEffect', false); this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, false, -1, this.effect_3876CD6E_2DF9_0421_41C1_F0AB7F279824, 'hideEffect', false); this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, false, -1, this.effect_22899FB3_2DD9_0427_41BB_298AEB3D2851, 'hideEffect', false); this.setComponentVisibility(this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB, true, -1, this.effect_2289DFB3_2DD9_0427_41AE_A35795880BA7, 'showEffect', false)",
    "end": "this.setComponentVisibility(this.Container_86F3A56C_8E22_5B1D_41CA_9CE53436FE56, true, -1, this.effect_22975FB2_2DD9_0421_41B4_7A2443082F44, 'showEffect', false); this.setComponentVisibility(this.Container_86F3A56C_8E22_5B1D_41CA_9CE53436FE56, true, -1, this.effect_22975FB2_2DD9_0421_41B4_7A2443082F44, 'showEffect', false); this.setComponentVisibility(this.Container_807F782A_8E23_A905_41DE_623121285A09, true, -1, this.effect_22977FB2_2DD9_0421_41C1_F53B037346DF, 'showEffect', false); this.setComponentVisibility(this.Container_807F782A_8E23_A905_41DE_623121285A09, true, -1, this.effect_22977FB2_2DD9_0421_41C1_F53B037346DF, 'showEffect', false); if(this.existsKey('visibility_ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472')){ if(this.getKey('visibility_ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472')) { this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, true, -1, this.effect_6CEAF811_602D_005D_41A6_11A20EAB286E, 'showEffect', false); } else { this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, false, -1, this.effect_3876CD6E_2DF9_0421_41C1_F0AB7F279824, 'hideEffect', false); } }; this.unregisterKey('visibility_ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472'); if(this.existsKey('visibility_Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB')){ if(this.getKey('visibility_Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB')) { this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, true, -1, this.effect_6CEA7812_602D_005F_41C9_C39D406BDB3F, 'showEffect', false); } else { this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, false, -1, this.effect_22899FB3_2DD9_0427_41BB_298AEB3D2851, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB'); this.setComponentVisibility(this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB, false, -1, this.effect_2289EFB3_2DD9_0427_41C0_ACB5A72AE218, 'hideEffect', false); this.setComponentVisibility(this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB, false, -1, this.effect_2289EFB3_2DD9_0427_41C0_ACB5A72AE218, 'hideEffect', false)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_6BAFC3B8_602D_004B_41A7_4A2855C13CC5, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_6BAFC3B8_602D_004B_41A7_4A2855C13CC5, 0, this.video_210B394E_3D54_1A60_41A3_CB42BEC0D3EC)"
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
      "class": "Photo",
      "thumbnailUrl": "media/photo_25EB8F3B_3D54_3627_41C1_FA6C2C76D85C_t.jpg",
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
      "class": "MovementPhotoCamera",
      "scaleMode": "fit_outside",
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.50",
       "zoomFactor": 1,
       "y": "0.50"
      },
      "easing": "linear",
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.33",
       "zoomFactor": 1.1,
       "y": "0.55"
      },
      "duration": 5000
     }
    },
    {
     "class": "PhotoPlayListItem",
     "media": {
      "class": "Photo",
      "thumbnailUrl": "media/photo_2537233E_3D54_0E20_41B8_95E46BC1EC07_t.jpg",
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
      "class": "MovementPhotoCamera",
      "scaleMode": "fit_outside",
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.50",
       "zoomFactor": 1,
       "y": "0.50"
      },
      "easing": "linear",
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.50",
       "zoomFactor": 1.1,
       "y": "0.71"
      },
      "duration": 5000
     }
    },
    {
     "class": "PhotoPlayListItem",
     "media": {
      "class": "Photo",
      "thumbnailUrl": "media/photo_25363697_3D54_16EF_41C7_78CA5BF042D8_t.jpg",
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
      "class": "MovementPhotoCamera",
      "scaleMode": "fit_outside",
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.50",
       "zoomFactor": 1,
       "y": "0.50"
      },
      "easing": "linear",
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.52",
       "zoomFactor": 1.1,
       "y": "0.66"
      },
      "duration": 5000
     }
    },
    {
     "class": "PhotoPlayListItem",
     "media": {
      "class": "Photo",
      "thumbnailUrl": "media/photo_2536FA03_3D54_19E7_41C9_9A86E77D5C4C_t.jpg",
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
      "class": "MovementPhotoCamera",
      "scaleMode": "fit_outside",
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.50",
       "zoomFactor": 1,
       "y": "0.50"
      },
      "easing": "linear",
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.70",
       "zoomFactor": 1.1,
       "y": "0.71"
      },
      "duration": 5000
     }
    },
    {
     "class": "PhotoPlayListItem",
     "media": {
      "class": "Photo",
      "thumbnailUrl": "media/photo_25365DAF_3D54_1A3F_41C9_6122F3F568B7_t.jpg",
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
      "class": "MovementPhotoCamera",
      "scaleMode": "fit_outside",
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.50",
       "zoomFactor": 1,
       "y": "0.50"
      },
      "easing": "linear",
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.49",
       "zoomFactor": 1.1,
       "y": "0.74"
      },
      "duration": 5000
     }
    },
    {
     "class": "PhotoPlayListItem",
     "media": {
      "class": "Photo",
      "thumbnailUrl": "media/photo_2536E107_3D54_0BE0_41C7_237D79278EAE_t.jpg",
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
      "class": "MovementPhotoCamera",
      "scaleMode": "fit_outside",
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.50",
       "zoomFactor": 1,
       "y": "0.50"
      },
      "easing": "linear",
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.32",
       "zoomFactor": 1.1,
       "y": "0.47"
      },
      "duration": 5000
     }
    },
    {
     "class": "PhotoPlayListItem",
     "media": {
      "class": "Photo",
      "thumbnailUrl": "media/photo_25361460_3D54_0A21_41C5_9CEF516D0083_t.jpg",
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
      "class": "MovementPhotoCamera",
      "scaleMode": "fit_outside",
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.50",
       "zoomFactor": 1,
       "y": "0.50"
      },
      "easing": "linear",
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.64",
       "zoomFactor": 1.1,
       "y": "0.53"
      },
      "duration": 5000
     }
    },
    {
     "class": "PhotoPlayListItem",
     "media": {
      "class": "Photo",
      "thumbnailUrl": "media/photo_2536E7CB_3D54_F667_41C8_0C74E4EA5879_t.jpg",
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
      "class": "MovementPhotoCamera",
      "scaleMode": "fit_outside",
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.50",
       "zoomFactor": 1,
       "y": "0.50"
      },
      "easing": "linear",
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.31",
       "zoomFactor": 1.1,
       "y": "0.32"
      },
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
  "id": "playList_6BAF63B9_602D_004D_41D7_D537138D1DBF",
  "items": [
   {
    "class": "PhotoAlbumPlayListItem",
    "player": "this.ViewerAreaLabeled_9FD7235A_96CD_9045_41D9_23A3BCBDB1C6PhotoAlbumPlayer",
    "media": "this.album_1AE8DEB7_0EE7_8CC7_4198_F5B75788CCF6",
    "begin": "this.loopAlbum(this.playList_6BAF63B9_602D_004D_41D7_D537138D1DBF, 0)"
   }
  ]
 },
 "this.map_4E02A832_427B_EE04_41CC_8E1CEC03E8D3",
 {
  "class": "PlayList",
  "id": "playList_6BA033C4_602D_003B_41CC_633FBE600049",
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
  "id": "ImageResource_536A2F3F_412A_B1B6_41B9_51CAE5D86C15"
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
  "id": "effect_51CB7B74_4299_12E2_41B4_829087983DE5",
  "duration": 300
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_15DDF232_3E91_44CF_41AB_F8C3E6067377",
  "duration": 400
 },
 {
  "easing": "linear",
  "class": "FadeOutEffect",
  "id": "effect_15DDE232_3E91_44CF_41B1_14501B4EC17A",
  "duration": 400
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
  "class": "PanoramaCamera",
  "id": "camera_6A7CC407_602D_0044_41CD_7089EBFA726E",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.8,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6A771411_602D_005C_41D6_FD9E530296D6",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.32,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6A4E741B_602D_004C_418D_887D90DED6FB",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 7.79,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6A404425_602D_0044_41B6_D59D93AD1F86",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -96.92,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6A5A242E_602D_0044_419F_C7D201885CBC",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 7.78,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6AAD8437_602D_0045_41CC_2DC5C164C772",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.42,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6AA75441_602D_003D_41D2_834ED6869F1F",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 8.04,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6ABE144B_602D_00CD_41D7_E6175D648908",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 8.65,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6AB2C454_602D_00DB_41B9_C29C510D9735",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 6.88,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6A85745E_602D_00C7_41D1_B8A1D60A4913",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 17.08,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6A9E8467_602D_00C5_41B8_350587B37843",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.32,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6A93A470_602D_00DB_41D6_6844984B7EF1",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 7.79,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6AEA047A_602D_00CF_41A2_7313E039BFE6",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -145,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6AFF1483_602D_003D_41AC_70D14710DB2D",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 7.78,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6AF0A48D_602D_0045_41C5_C91E56D41D63",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.42,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6AC7A497_602D_0045_41A4_3E71C1D18B70",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -137.41,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6AD864A2_602D_007F_41AF_E832CD63DF6B",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 8.65,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6B2F04AE_602D_0047_41C0_E96086B7B972",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 6.88,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6B3D64B7_602D_0045_41B0_E7A3D57AFEF7",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 17.08,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6B30A4C2_602D_003F_41D1_5CCFA41C413E",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.8,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6B0684CC_602D_01CB_4189_48594CF90D29",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 7.79,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6B1A04D8_602D_01CB_41BD_6E863EE43FFC",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 17.08,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6B6874E3_602D_01FD_41C7_4467214CB958",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 86.29,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6B7FD4F6_602D_01C7_41A4_C32697C6CECB",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.42,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6B4DB50A_602D_004F_41D7_3BDAFB3446C6",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 8.04,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6B43B51B_602D_004D_41C7_B3BC3D43EAD8",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -37.01,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6B57352B_602D_004D_41D1_F5820AE574D2",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 6.88,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6BA4F53C_602D_004B_41C2_38EED26CA5E1",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 17.08,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6BB8B551_602D_00DD_41D4_4FB2AFDBD53A",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.8,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6B8E6560_602D_00FB_41D0_2B9C3E24326B",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.32,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6B9C7570_602D_00DB_41D6_8909F8C0E49F",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -145.05,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6B90257E_602D_00C4_41A3_669F1AE9069C",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 7.78,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6BE64588_602D_004C_41C6_A10B7F406955",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.42,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6BF5B592_602D_005D_41D6_02A3B20740CE",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 8.04,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6BCB959D_602D_0044_41B2_C97FDF0D7845",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 8.65,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6BDF25A8_602D_004B_41D7_73F1ABE18317",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -144.81,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6C2D35B3_602D_005D_41BB_94984F27EE0D",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 17.25,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6C22C5BC_602D_004B_41AE_B6D20B4B9483",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -65.11,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6C3695C6_602D_03C7_41BF_E064270E96A2",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.32,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6A4455EF_602D_03C5_41C0_7F7EF741A47C",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -69.04,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6A40A5F8_602D_03CB_41C5_765C0AF46C59",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 7.78,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6A5EF602_602D_003F_41CF_EFD6389B813E",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -19.48,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6A5A760B_602D_004D_41B2_803314146902",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 8.04,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6A509615_602D_0045_41BC_04E4DA1BC749",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 8.65,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6AAE861F_602D_0045_41CA_DFBBBCA6389F",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 6.88,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6AAA062A_602D_004F_41BC_1FDD89CC34DE",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 17.08,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6AA02633_602D_005D_41B8_9F7F9AC2C650",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.8,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6ABE563D_602D_0045_41C1_67F64D28E823",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 165.06,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6AB3F646_602D_00C7_4190_2F72F2467A2B",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 7.79,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6A8A9650_602D_00DB_41CE_5FE9B2836661",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 17.08,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6A9C0659_602D_00CD_41AA_0737B0CFEB4A",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.42,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6A913662_602D_00FF_41D1_B504A3B712E4",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 15.84,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6AEBF66C_602D_00CB_41D0_373400AEE0B0",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 8.65,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6AFD0676_602D_00C7_4185_80963EE52F21",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 6.88,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6AF6A67F_602D_00C5_41C9_12105BB700B7",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 17.08,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6ACA4688_602D_004B_41B7_04CF64E18B17",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.8,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6ADEB692_602D_005F_41A0_776F7CE38F5A",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.32,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6AD2969B_602D_004D_41B6_AE8D6A78E101",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 7.79,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6B2186A4_602D_007B_41BD_FCF503025A06",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -17.5,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6B3546AD_602D_0045_41D2_1F1300CE6B26",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 7.78,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6B0B46B7_602D_0045_41D6_40D7EB9C3318",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 8.04,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6B1F46C0_602D_003B_41D7_B03B968590A6",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 8.65,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6B6DA6C9_602D_01CD_41CE_6816ED85EF73",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 6.88,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6B6016D2_602D_01DF_41D6_5AEEB9DF77DA",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 17.08,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6B77B6DC_602D_01CB_41B6_FC92E2E8436A",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -65,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6B45E6E5_602D_01C5_41D0_E961159F1103",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.32,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6B59D6ED_602D_01C4_41B3_853B53EDA758",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 7.79,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6BAC36F7_602D_01C4_41AE_514DBE1CDB59",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 17.08,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6BA3C700_602D_003C_41B2_2905ED548A6E",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 164.14,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6BB1C709_602D_004C_41D7_D714D9E034B1",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.42,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6B843713_602D_005C_41C6_6504D57AD2EE",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 8.65,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6B98071C_602D_0044_41C5_2F6DB0715A57",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 6.88,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6BEE5725_602D_0045_41A1_53FC98DB47FB",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 17.08,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6BFDF72F_602D_0045_41C2_64DB618DFB5F",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.8,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6BF05741_602D_003D_41D4_78EE97587992",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -178.17,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6BC7E751_602D_00DD_41BA_79B5BB61060F",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 7.79,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6BD5B760_602D_00FB_41B7_EE3512E6D3EB",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 17.08,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6C28276F_602D_00C5_41D0_5CC4A24D49A3",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 7.78,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6C3FB77F_602D_00C5_41BE_8D573FAE7C1B",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.42,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6C0DA78F_602D_0045_41C6_BF1D2793CDD2",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 8.04,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6C01279E_602D_0047_41D2_74E7816B4336",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 6.88,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6C1777A8_602D_004B_41BB_CE8AE21E81CC",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 17.08,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6C6A97B7_602D_0045_41B5_15F3304A85E1",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.8,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6C7837C6_602D_0FC7_41B8_F9DB7F58FD62",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.32,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6C49F7D6_602D_0FC7_41D6_26D26B790304",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -69.33,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6C5C67E4_602D_0FFB_41B3_5E6110AC4F2E",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 17.08,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6CADF7ED_602D_0FC5_41BA_7E059F5F9437",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 7.78,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6CA0C7F7_602D_0FC5_41B5_6542E8F41E91",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.42,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6CB62800_602D_003B_41C4_79BCC50584A8",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 8.04,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6C84D80A_602D_004F_41C5_3C08F7A63271",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 8.65,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
  "id": "effect_6CEAF811_602D_005D_41A6_11A20EAB286E",
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
  "id": "effect_6CEA7812_602D_005F_41C9_C39D406BDB3F",
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
  "class": "DirectionalPanoramaAudio",
  "maximumAngle": 231.16,
  "id": "audio_A83B2F1A_B250_204B_41B2_61A870B2B428",
  "loop": true,
  "audio": {
   "class": "AudioResource",
   "id": "audioresource_1D15163A_0EEB_BFC9_419F_EF5F7074EFB1",
   "mp3Url": "media/audio_A83B2F1A_B250_204B_41B2_61A870B2B428.mp3",
   "oggUrl": "media/audio_A83B2F1A_B250_204B_41B2_61A870B2B428.ogg"
  },
  "autoplay": true,
  "yaw": -17.74,
  "pitch": -7.7
 },
 {
  "class": "DirectionalPanoramaAudio",
  "maximumAngle": 97.14,
  "id": "audio_A875C8FE_B250_61CA_41D2_1BDD70C9887A",
  "loop": true,
  "audio": {
   "class": "AudioResource",
   "id": "audioresource_A84F2D34_B270_605F_41E2_4CF67AB762D2",
   "mp3Url": "media/audio_A875C8FE_B250_61CA_41D2_1BDD70C9887A.mp3",
   "oggUrl": "media/audio_A875C8FE_B250_61CA_41D2_1BDD70C9887A.ogg"
  },
  "autoplay": true,
  "yaw": 4.55,
  "pitch": -18.69
 },
 {
  "class": "DirectionalPanoramaAudio",
  "maximumAngle": 61.89,
  "id": "audio_A87513BA_B273_E04A_41AA_0102CD2EF1BE",
  "loop": true,
  "audio": {
   "class": "AudioResource",
   "id": "audioresource_A83107F8_B270_2FD6_41E2_DAE1F661A577",
   "mp3Url": "media/audio_A87513BA_B273_E04A_41AA_0102CD2EF1BE.mp3",
   "oggUrl": "media/audio_A87513BA_B273_E04A_41AA_0102CD2EF1BE.ogg"
  },
  "autoplay": true,
  "yaw": -10.86,
  "pitch": -0.76
 },
 {
  "class": "PanoramaAudio",
  "id": "audio_A83165F4_B270_23DF_41DC_E385B4E6556E",
  "audio": "this.audioresource_A83107F8_B270_2FD6_41E2_DAE1F661A577",
  "autoplay": true
 },
 {
  "class": "DirectionalPanoramaAudio",
  "maximumAngle": 222.06,
  "id": "audio_A8213A22_B270_E07A_41D5_F14349BD0E04",
  "loop": true,
  "audio": "this.audioresource_A83107F8_B270_2FD6_41E2_DAE1F661A577",
  "autoplay": true,
  "yaw": 0,
  "pitch": 0
 },
 {
  "class": "DirectionalPanoramaAudio",
  "maximumAngle": 265.52,
  "id": "audio_A8284F56_B270_60DB_41E0_27608EB2E0B9",
  "loop": true,
  "audio": "this.audioresource_A83107F8_B270_2FD6_41E2_DAE1F661A577",
  "autoplay": true,
  "yaw": -40.93,
  "pitch": 0.51
 },
 {
  "class": "Photo",
  "thumbnailUrl": "media/photo_1D911E4D_0EFC_8C4B_4180_DC7B2E0CE38C_t.jpg",
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
  "class": "DirectionalPanoramaAudio",
  "maximumAngle": 360,
  "id": "audio_1D15363A_0EEB_BFC9_4193_928F3B1A384C",
  "loop": true,
  "audio": "this.audioresource_1D15163A_0EEB_BFC9_419F_EF5F7074EFB1",
  "autoplay": true,
  "yaw": 0,
  "pitch": 0
 }
], "children": [
 {
  "class": "ViewerArea",
  "paddingRight": 0,
  "progressBorderRadius": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarOpacity": 1,
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
  "playbackBarHeadWidth": 6,
  "shadow": false,
  "toolTipFontStyle": "normal",
  "toolTipShadowHorizontalLength": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "toolTipBackgroundColor": "#000000",
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
  "minHeight": 50,
  "toolTipShadowBlurRadius": 3,
  "toolTipFontColor": "#606060",
  "playbackBarBorderRadius": 0,
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "toolTipPaddingRight": 6,
  "minWidth": 100,
  "playbackBarHeadBorderRadius": 0,
  "paddingLeft": 0,
  "toolTipTextShadowOpacity": 0,
  "toolTipPaddingTop": 4,
  "borderRadius": 0,
  "toolTipFontSize": 14,
  "playbackBarProgressOpacity": 1,
  "progressLeft": 0,
  "borderSize": 0,
  "playbackBarHeadBorderColor": "#000000",
  "progressBackgroundColorRatios": [
   0
  ],
  "toolTipTextShadowColor": "#000000",
  "progressBackgroundOpacity": 1,
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipPaddingLeft": 6,
  "toolTipBorderColor": "#767676",
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "playbackBarLeft": 0,
  "playbackBarHeadHeight": 15,
  "playbackBarBackgroundOpacity": 1,
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarBorderSize": 0,
  "toolTipBorderRadius": 3,
  "playbackBarHeadShadowOpacity": 0.7,
  "top": "0%",
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipTextShadowBlurRadius": 3,
  "bottom": "0%",
  "toolTipFontWeight": "normal",
  "id": "MainViewer",
  "playbackBarHeadBorderSize": 0,
  "playbackBarHeadShadow": true,
  "progressBarBorderColor": "#000000",
  "playbackBarHeadOpacity": 1,
  "progressHeight": 10,
  "playbackBarHeadShadowColor": "#000000",
  "progressBarBackgroundColorRatios": [
   0
  ],
  "playbackBarBottom": 5,
  "progressBorderColor": "#000000",
  "progressBackgroundColorDirection": "vertical",
  "left": "0%",
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
  "class": "Container",
  "backgroundColorDirection": "vertical",
  "overflow": "visible",
  "scrollBarOpacity": 0.5,
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "paddingRight": 10,
  "scrollBarColor": "#000000",
  "height": 70,
  "minWidth": 100,
  "paddingLeft": 10,
  "borderRadius": 5,
  "borderSize": 0,
  "contentOpaque": false,
  "layout": "horizontal",
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "horizontalAlign": "center",
  "shadow": false,
  "paddingBottom": 0,
  "bottom": "3%",
  "id": "Container_86F3A56C_8E22_5B1D_41CA_9CE53436FE56",
  "gap": 35,
  "backgroundColorRatios": [
   0,
   1
  ],
  "maxHeight": 70,
  "paddingTop": 0,
  "minHeight": 25,
  "left": "0%",
  "backgroundOpacity": 0.25,
  "right": "0%",
  "children": [
   {
    "class": "IconButton",
    "paddingRight": 0,
    "mode": "push",
    "toolTipPaddingRight": 6,
    "minWidth": 25,
    "iconURL": "skin/IconButton_87577B8F_8E22_AF1B_41CC_79EB87AE6DED.png",
    "height": "100%",
    "width": "100%",
    "toolTipPaddingBottom": 4,
    "toolTipTextShadowOpacity": 0,
    "transparencyActive": true,
    "toolTipPaddingTop": 4,
    "toolTip": "Info",
    "toolTipFontSize": 14,
    "toolTipShadowOpacity": 1,
    "toolTipOpacity": 0.7,
    "borderSize": 0,
    "toolTipBorderSize": 1,
    "paddingLeft": 0,
    "toolTipTextShadowColor": "#000000",
    "borderRadius": 0,
    "maxWidth": 70,
    "toolTipPaddingLeft": 6,
    "toolTipBorderColor": "#767676",
    "toolTipShadowHorizontalLength": 0,
    "horizontalAlign": "center",
    "rollOverIconURL": "skin/IconButton_87577B8F_8E22_AF1B_41CC_79EB87AE6DED_rollover.png",
    "toolTipShadowVerticalLength": 0,
    "shadow": false,
    "toolTipFontStyle": "normal",
    "toolTipBorderRadius": 3,
    "toolTipBackgroundColor": "#000000",
    "click": "this.showPopupImage(this.ImageResource_536A2F3F_412A_B1B6_41B9_51CAE5D86C15, null, '85%', '85%', this.FadeInEffect_8ED05F70_96C4_F045_41DC_2AB82A556F92, this.FadeOutEffect_8ED06F70_96C4_F045_41DA_C74400CF7B15, {'rollOverIconWidth':25,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorDirection':'vertical','rollOverBackgroundColor':['#000000','#000000','#000000'],'pressedBackgroundColor':['#000000','#000000','#000000'],'iconHeight':25,'rollOverIconColor':'#52B7EF','backgroundColor':['#000000','#000000','#000000'],'rollOverBackgroundColorDirection':'vertical','pressedBorderSize':0,'iconColor':'#FFFFFF','backgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':10,'paddingBottom':10,'pressedIconLineWidth':3,'borderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':3,'pressedBorderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundOpacity':0.3,'paddingTop':10,'pressedIconColor':'#CCCCCC','paddingLeft':10,'pressedBackgroundColorDirection':'vertical','borderSize':0,'pressedIconWidth':25,'pressedIconHeight':25,'backgroundOpacity':0.15,'rollOverBorderColor':'#000000','rollOverBackgroundOpacity':0.5,'iconWidth':25,'rollOverIconHeight':25,'rollOverIconLineWidth':3}, null, null, false)",
    "cursor": "hand",
    "visible": false,
    "paddingBottom": 0,
    "toolTipTextShadowBlurRadius": 3,
    "toolTipFontWeight": "normal",
    "id": "IconButton_87577B8F_8E22_AF1B_41CC_79EB87AE6DED",
    "maxHeight": 70,
    "paddingTop": 0,
    "toolTipShadowSpread": 0,
    "toolTipShadowColor": "#333333",
    "toolTipShadowBlurRadius": 3,
    "backgroundOpacity": 0,
    "minHeight": 25,
    "toolTipFontColor": "#606060",
    "toolTipFontFamily": "Arial",
    "verticalAlign": "middle"
   },
   {
    "class": "IconButton",
    "paddingRight": 0,
    "mode": "push",
    "toolTipPaddingRight": 6,
    "minWidth": 25,
    "iconURL": "skin/IconButton_213ED70C_2DB2_E6C5_41B6_0CCE6C77E889.png",
    "height": "100%",
    "width": "100%",
    "toolTipPaddingBottom": 4,
    "toolTipTextShadowOpacity": 0,
    "transparencyActive": true,
    "toolTipPaddingTop": 4,
    "toolTip": "Play Video",
    "toolTipFontSize": 14,
    "toolTipShadowOpacity": 1,
    "toolTipOpacity": 0.7,
    "borderSize": 0,
    "toolTipBorderSize": 1,
    "paddingLeft": 0,
    "toolTipTextShadowColor": "#000000",
    "borderRadius": 0,
    "maxWidth": 70,
    "toolTipPaddingLeft": 6,
    "toolTipBorderColor": "#767676",
    "toolTipShadowHorizontalLength": 0,
    "horizontalAlign": "center",
    "rollOverIconURL": "skin/IconButton_213ED70C_2DB2_E6C5_41B6_0CCE6C77E889_rollover.png",
    "toolTipShadowVerticalLength": 0,
    "shadow": false,
    "toolTipFontStyle": "normal",
    "toolTipBorderRadius": 3,
    "toolTipBackgroundColor": "#000000",
    "click": "this.setMediaBehaviour(this.playList_6BAFC3B8_602D_004B_41A7_4A2855C13CC5, 0); this.MainViewerVideoPlayer.play()",
    "cursor": "hand",
    "visible": false,
    "paddingBottom": 0,
    "toolTipTextShadowBlurRadius": 3,
    "toolTipFontWeight": "normal",
    "id": "IconButton_213ED70C_2DB2_E6C5_41B6_0CCE6C77E889",
    "maxHeight": 70,
    "paddingTop": 0,
    "toolTipShadowSpread": 0,
    "toolTipShadowColor": "#333333",
    "toolTipShadowBlurRadius": 3,
    "backgroundOpacity": 0,
    "minHeight": 25,
    "toolTipFontColor": "#606060",
    "toolTipFontFamily": "Arial",
    "verticalAlign": "middle"
   },
   "this.IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED",
   {
    "class": "IconButton",
    "paddingRight": 0,
    "mode": "push",
    "toolTipPaddingRight": 6,
    "minWidth": 25,
    "iconURL": "skin/IconButton_2FC9210C_3E8F_C4D4_41A7_10D1404CA49B.png",
    "height": "85%",
    "width": "85%",
    "toolTipPaddingBottom": 4,
    "toolTipTextShadowOpacity": 0,
    "transparencyActive": true,
    "toolTipPaddingTop": 4,
    "toolTip": "FLoor Plan",
    "toolTipFontSize": 14,
    "toolTipShadowOpacity": 1,
    "toolTipOpacity": 0.7,
    "borderSize": 0,
    "toolTipBorderSize": 1,
    "paddingLeft": 0,
    "toolTipTextShadowColor": "#000000",
    "borderRadius": 0,
    "maxWidth": 70,
    "toolTipPaddingLeft": 6,
    "toolTipBorderColor": "#767676",
    "toolTipShadowHorizontalLength": 0,
    "horizontalAlign": "center",
    "toolTipShadowVerticalLength": 0,
    "shadow": false,
    "toolTipFontStyle": "normal",
    "toolTipBorderRadius": 3,
    "toolTipBackgroundColor": "#000000",
    "click": "this.setComponentVisibility(this.Container_53347472_4288_F6E6_4196_D7457B47D2CF, true, 0, this.effect_51CB7B74_4299_12E2_41B4_829087983DE5, 'showEffect', false)",
    "cursor": "hand",
    "visible": false,
    "paddingBottom": 0,
    "toolTipTextShadowBlurRadius": 3,
    "toolTipFontWeight": "normal",
    "id": "IconButton_2FC9210C_3E8F_C4D4_41A7_10D1404CA49B",
    "maxHeight": 70,
    "paddingTop": 0,
    "toolTipShadowSpread": 0,
    "toolTipShadowColor": "#333333",
    "toolTipShadowBlurRadius": 3,
    "pressedIconURL": "skin/IconButton_2FC9210C_3E8F_C4D4_41A7_10D1404CA49B_pressed.png",
    "backgroundOpacity": 0,
    "minHeight": 25,
    "toolTipFontColor": "#606060",
    "toolTipFontFamily": "Arial",
    "verticalAlign": "middle"
   },
   {
    "class": "IconButton",
    "paddingRight": 0,
    "mode": "toggle",
    "toolTipPaddingRight": 6,
    "minWidth": 25,
    "iconURL": "skin/IconButton_843BBEF5_8E22_690F_419D_28CBDD771ACC.png",
    "height": "100%",
    "width": "100%",
    "toolTipPaddingBottom": 4,
    "toolTipTextShadowOpacity": 0,
    "transparencyActive": true,
    "toolTipPaddingTop": 4,
    "toolTip": "Panorama List",
    "toolTipFontSize": 14,
    "toolTipShadowOpacity": 1,
    "toolTipOpacity": 0.7,
    "borderSize": 0,
    "toolTipBorderSize": 1,
    "paddingLeft": 0,
    "toolTipTextShadowColor": "#000000",
    "borderRadius": 0,
    "maxWidth": 70,
    "toolTipPaddingLeft": 6,
    "toolTipBorderColor": "#767676",
    "toolTipShadowHorizontalLength": 0,
    "horizontalAlign": "center",
    "toolTipShadowVerticalLength": 0,
    "shadow": false,
    "toolTipFontStyle": "normal",
    "toolTipBorderRadius": 3,
    "toolTipBackgroundColor": "#000000",
    "click": "if(!this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472.get('visible')){ this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, true, 0, this.effect_15DDF232_3E91_44CF_41AB_F8C3E6067377, 'showEffect', false) } else if(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472.get('visible')){ this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, false, 0, this.effect_15DDE232_3E91_44CF_41B1_14501B4EC17A, 'hideEffect', false) }",
    "cursor": "hand",
    "paddingBottom": 0,
    "toolTipTextShadowBlurRadius": 3,
    "toolTipFontWeight": "normal",
    "id": "IconButton_843BBEF5_8E22_690F_419D_28CBDD771ACC",
    "maxHeight": 70,
    "paddingTop": 0,
    "toolTipShadowSpread": 0,
    "toolTipShadowColor": "#333333",
    "toolTipShadowBlurRadius": 3,
    "pressedIconURL": "skin/IconButton_843BBEF5_8E22_690F_419D_28CBDD771ACC_pressed.png",
    "backgroundOpacity": 0,
    "minHeight": 25,
    "toolTipFontColor": "#606060",
    "toolTipFontFamily": "Arial",
    "verticalAlign": "middle"
   }
  ],
  "verticalAlign": "middle",
  "scrollBarVisible": "rollOver"
 },
 {
  "class": "Container",
  "scrollBarColor": "#000000",
  "overflow": "visible",
  "scrollBarOpacity": 0.5,
  "paddingRight": 0,
  "width": 500,
  "height": 50,
  "minWidth": 500,
  "borderRadius": 5,
  "paddingLeft": 0,
  "borderSize": 0,
  "contentOpaque": false,
  "layout": "horizontal",
  "scrollBarWidth": 10,
  "maxWidth": 500,
  "scrollBarMargin": 2,
  "shadow": false,
  "horizontalAlign": "right",
  "top": "3%",
  "paddingBottom": 0,
  "id": "Container_807F782A_8E23_A905_41DE_623121285A09",
  "gap": 5,
  "maxHeight": 55,
  "paddingTop": 0,
  "backgroundOpacity": 0,
  "minHeight": 55,
  "right": "1.5%",
  "children": [
   {
    "class": "Container",
    "scrollBarColor": "#000000",
    "overflow": "visible",
    "scrollBarOpacity": 0.5,
    "paddingRight": 0,
    "width": 400,
    "height": 55,
    "minWidth": 100,
    "borderRadius": 0,
    "borderSize": 0,
    "gap": 0,
    "paddingLeft": 0,
    "layout": "horizontal",
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "contentOpaque": false,
    "shadow": false,
    "horizontalAlign": "right",
    "visible": false,
    "paddingBottom": 0,
    "id": "Container_80D3CF90_8E26_E705_41E0_E47025A2C106",
    "maxHeight": 55,
    "paddingTop": 0,
    "minHeight": 55,
    "backgroundOpacity": 0,
    "children": [
     "this.IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37",
     {
      "class": "IconButton",
      "paddingRight": 0,
      "mode": "toggle",
      "toolTipPaddingRight": 6,
      "minWidth": 1,
      "iconURL": "skin/IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA.png",
      "height": "100%",
      "width": "100%",
      "toolTipPaddingBottom": 4,
      "toolTipTextShadowOpacity": 0,
      "transparencyActive": true,
      "toolTipPaddingTop": 4,
      "toolTip": "Full Screen",
      "toolTipFontSize": 14,
      "toolTipShadowOpacity": 1,
      "toolTipOpacity": 0.7,
      "borderSize": 0,
      "toolTipBorderSize": 1,
      "paddingLeft": 0,
      "toolTipTextShadowColor": "#000000",
      "borderRadius": 0,
      "maxWidth": 60,
      "toolTipPaddingLeft": 6,
      "toolTipBorderColor": "#767676",
      "toolTipShadowHorizontalLength": 0,
      "horizontalAlign": "center",
      "toolTipShadowVerticalLength": 0,
      "shadow": false,
      "toolTipFontStyle": "normal",
      "toolTipBorderRadius": 3,
      "toolTipBackgroundColor": "#000000",
      "click": "if(!this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, true, 0, null, null, false) } else if(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, false, 0, null, null, false) }",
      "cursor": "hand",
      "paddingBottom": 0,
      "toolTipTextShadowBlurRadius": 3,
      "toolTipFontWeight": "normal",
      "id": "IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA",
      "maxHeight": 60,
      "paddingTop": 0,
      "toolTipShadowSpread": 0,
      "toolTipShadowColor": "#333333",
      "toolTipShadowBlurRadius": 3,
      "pressedIconURL": "skin/IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA_pressed.png",
      "backgroundOpacity": 0,
      "minHeight": 1,
      "toolTipFontColor": "#606060",
      "toolTipFontFamily": "Arial",
      "verticalAlign": "middle"
     },
     {
      "class": "IconButton",
      "paddingRight": 0,
      "mode": "toggle",
      "toolTipPaddingRight": 6,
      "minWidth": 1,
      "iconURL": "skin/IconButton_8105A313_8E22_BF0B_41E1_331C6035A930.png",
      "height": "100%",
      "width": "100%",
      "toolTipPaddingBottom": 4,
      "toolTipTextShadowOpacity": 0,
      "transparencyActive": true,
      "toolTipPaddingTop": 4,
      "toolTip": "Audio On/Off",
      "toolTipFontSize": 14,
      "toolTipShadowOpacity": 1,
      "toolTipOpacity": 0.7,
      "borderSize": 0,
      "toolTipBorderSize": 1,
      "paddingLeft": 0,
      "toolTipTextShadowColor": "#000000",
      "borderRadius": 0,
      "maxWidth": 60,
      "toolTipPaddingLeft": 6,
      "toolTipBorderColor": "#767676",
      "toolTipShadowHorizontalLength": 0,
      "horizontalAlign": "center",
      "toolTipShadowVerticalLength": 0,
      "shadow": false,
      "toolTipFontStyle": "normal",
      "toolTipBorderRadius": 3,
      "toolTipBackgroundColor": "#000000",
      "click": "if(!this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, true, 0, this.effect_CACBF85D_EED0_7261_41DB_A3B65ECE0D5D, 'showEffect', false) } else if(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, false, 0, this.effect_CACBC85D_EED0_7261_41BE_8CF4C3A8170C, 'hideEffect', false) }",
      "cursor": "hand",
      "paddingBottom": 0,
      "toolTipTextShadowBlurRadius": 3,
      "toolTipFontWeight": "normal",
      "id": "IconButton_8105A313_8E22_BF0B_41E1_331C6035A930",
      "maxHeight": 60,
      "paddingTop": 0,
      "toolTipShadowSpread": 0,
      "toolTipShadowColor": "#333333",
      "toolTipShadowBlurRadius": 3,
      "pressedIconURL": "skin/IconButton_8105A313_8E22_BF0B_41E1_331C6035A930_pressed.png",
      "backgroundOpacity": 0,
      "minHeight": 1,
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
    "class": "IconButton",
    "paddingRight": 0,
    "mode": "toggle",
    "toolTipPaddingRight": 6,
    "minWidth": 55,
    "iconURL": "skin/IconButton_811D89E1_8E3D_AB07_4191_94003C90B2FF.png",
    "height": "100%",
    "width": "100%",
    "toolTipPaddingBottom": 4,
    "toolTipTextShadowOpacity": 0,
    "transparencyActive": true,
    "toolTipPaddingTop": 4,
    "toolTip": "Settings",
    "toolTipFontSize": 14,
    "toolTipShadowOpacity": 1,
    "toolTipOpacity": 0.7,
    "borderSize": 0,
    "toolTipBorderSize": 1,
    "paddingLeft": 0,
    "toolTipTextShadowColor": "#000000",
    "borderRadius": 0,
    "maxWidth": 55,
    "toolTipPaddingLeft": 6,
    "toolTipBorderColor": "#767676",
    "toolTipShadowHorizontalLength": 0,
    "horizontalAlign": "center",
    "toolTipShadowVerticalLength": 0,
    "shadow": false,
    "toolTipFontStyle": "normal",
    "toolTipBorderRadius": 3,
    "toolTipBackgroundColor": "#000000",
    "click": "if(!this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, true, 0, this.effect_32C91197_3F22_3110_4181_9E76B593FBFE, 'showEffect', false) } else if(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, false, 0, this.effect_32C92197_3F22_3110_419D_E2E21968F16F, 'hideEffect', false) }",
    "cursor": "hand",
    "paddingBottom": 0,
    "toolTipTextShadowBlurRadius": 3,
    "toolTipFontWeight": "normal",
    "id": "IconButton_811D89E1_8E3D_AB07_4191_94003C90B2FF",
    "maxHeight": 55,
    "paddingTop": 0,
    "toolTipShadowSpread": 0,
    "toolTipShadowColor": "#333333",
    "toolTipShadowBlurRadius": 3,
    "backgroundOpacity": 0,
    "minHeight": 55,
    "toolTipFontColor": "#606060",
    "toolTipFontFamily": "Arial",
    "verticalAlign": "middle"
   }
  ],
  "verticalAlign": "middle",
  "scrollBarVisible": "rollOver"
 },
 {
  "class": "ThumbnailList",
  "itemBackgroundColorRatios": [],
  "backgroundColor": [
   "#000000"
  ],
  "itemLabelFontFamily": "Arial",
  "paddingRight": 5,
  "itemThumbnailHeight": 75,
  "gap": 5,
  "selectedItemBackgroundColor": [],
  "scrollBarWidth": 7,
  "itemHorizontalAlign": "center",
  "playList": "this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist",
  "horizontalAlign": "left",
  "maxWidth": 105,
  "scrollBarMargin": 4,
  "selectedItemLabelFontStyle": "italic",
  "itemLabelFontColor": "#FFFFFF",
  "shadow": false,
  "rollOverItemLabelFontColor": "#FFFFFF",
  "backgroundColorRatios": [
   0
  ],
  "paddingBottom": 5,
  "itemMode": "normal",
  "rollOverItemLabelFontWeight": "bold",
  "itemPaddingBottom": 3,
  "paddingTop": 5,
  "selectedItemLabelFontColor": "#FFFFFF",
  "itemThumbnailOpacity": 1,
  "itemThumbnailScaleMode": "fit_outside",
  "selectedItemLabelTextDecoration": "underline",
  "minHeight": 100,
  "itemLabelFontWeight": "normal",
  "itemThumbnailShadow": false,
  "rollOverItemLabelTextDecoration": "underline",
  "backgroundColorDirection": "vertical",
  "itemThumbnailBorderRadius": 25,
  "scrollBarOpacity": 1,
  "scrollBarColor": "#52B7EF",
  "itemLabelTextDecoration": "none",
  "scrollBarVisible": "rollOver",
  "width": 105,
  "itemLabelFontStyle": "normal",
  "minWidth": 90,
  "paddingLeft": 5,
  "itemThumbnailWidth": 75,
  "borderRadius": 3,
  "itemLabelHorizontalAlign": "center",
  "itemPaddingLeft": 3,
  "selectedItemLabelFontSize": 12,
  "borderSize": 0,
  "itemBorderRadius": 0,
  "selectedItemThumbnailShadow": true,
  "itemPaddingRight": 3,
  "selectedItemThumbnailShadowOpacity": 0.73,
  "selectedItemThumbnailShadowBlurRadius": 10,
  "selectedItemThumbnailShadowVerticalLength": 0,
  "selectedItemBorderSize": 0,
  "itemPaddingTop": 3,
  "selectedItemBorderRadius": 0,
  "top": "15%",
  "itemVerticalAlign": "middle",
  "bottom": "15%",
  "id": "ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472",
  "itemBackgroundOpacity": 0,
  "itemBackgroundColorDirection": "vertical",
  "selectedItemBackgroundColorRatios": [],
  "itemLabelGap": 9,
  "selectedItemLabelFontWeight": "bold",
  "itemOpacity": 1,
  "itemBackgroundColor": [],
  "itemLabelFontSize": 12,
  "selectedItemBackgroundOpacity": 0,
  "itemLabelPosition": "bottom",
  "layout": "vertical",
  "selectedItemThumbnailShadowHorizontalLength": 0,
  "backgroundOpacity": 0.25,
  "right": "1.5%",
  "verticalAlign": "top"
 },
 {
  "class": "Container",
  "children": [
   "this.ViewerAreaLabeled_9FD7235A_96CD_9045_41D9_23A3BCBDB1C6",
   "this.IconButton_9FEA51EA_96CC_905A_41D3_F42DB0CD0A74",
   "this.IconButton_9FB9BD3F_96C5_703B_41D7_65AEE6E85A96",
   "this.IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4"
  ],
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
  "minWidth": 1,
  "borderRadius": 0,
  "borderSize": 0,
  "gap": 10,
  "paddingLeft": 0,
  "width": "100%",
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "layout": "absolute",
  "horizontalAlign": "left",
  "shadow": false,
  "top": "0%",
  "visible": false,
  "paddingBottom": 0,
  "backgroundColorRatios": [
   0,
   1
  ],
  "id": "Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB",
  "contentOpaque": false,
  "paddingTop": 0,
  "minHeight": 1,
  "left": "0%",
  "backgroundOpacity": 0.7,
  "verticalAlign": "top",
  "scrollBarVisible": "rollOver"
 },
 {
  "class": "IconButton",
  "paddingRight": 0,
  "mode": "push",
  "minWidth": 50,
  "iconURL": "skin/IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB.png",
  "height": "5.482%",
  "width": "3.03%",
  "transparencyActive": true,
  "borderRadius": 0,
  "borderSize": 0,
  "paddingLeft": 0,
  "rollOverIconURL": "skin/IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB_rollover.png",
  "maxWidth": 50,
  "horizontalAlign": "center",
  "shadow": false,
  "top": "2%",
  "cursor": "hand",
  "visible": false,
  "paddingBottom": 0,
  "id": "IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB",
  "maxHeight": 50,
  "paddingTop": 0,
  "backgroundOpacity": 0,
  "minHeight": 50,
  "right": "2%",
  "verticalAlign": "middle"
 },
 {
  "class": "Container",
  "backgroundColorDirection": "vertical",
  "overflow": "scroll",
  "scrollBarOpacity": 0.5,
  "paddingRight": 0,
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "scrollBarColor": "#000000",
  "minWidth": 1,
  "borderRadius": 0,
  "paddingLeft": 0,
  "borderSize": 0,
  "layout": "absolute",
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "contentOpaque": false,
  "horizontalAlign": "left",
  "shadow": false,
  "top": "0%",
  "visible": false,
  "paddingBottom": 0,
  "bottom": "0%",
  "id": "Container_53347472_4288_F6E6_4196_D7457B47D2CF",
  "gap": 10,
  "backgroundColorRatios": [
   0,
   1
  ],
  "paddingTop": 0,
  "minHeight": 1,
  "left": "0%",
  "backgroundOpacity": 0.3,
  "right": "0%",
  "children": [
   "this.MapViewer",
   {
    "class": "IconButton",
    "paddingRight": 0,
    "mode": "push",
    "minWidth": 50,
    "iconURL": "skin/IconButton_50D1A26C_4289_72E1_41CD_2B557DFCC24F.png",
    "height": "5.91%",
    "width": "5.07%",
    "transparencyActive": true,
    "borderRadius": 0,
    "borderSize": 0,
    "paddingLeft": 0,
    "rollOverIconURL": "skin/IconButton_50D1A26C_4289_72E1_41CD_2B557DFCC24F_rollover.png",
    "maxWidth": 50,
    "horizontalAlign": "center",
    "shadow": false,
    "top": "5%",
    "click": "this.setComponentVisibility(this.Container_53347472_4288_F6E6_4196_D7457B47D2CF, false, 0, this.effect_500E3733_4297_3267_41C9_4935C0BEBF39, 'hideEffect', false)",
    "cursor": "hand",
    "paddingBottom": 0,
    "id": "IconButton_50D1A26C_4289_72E1_41CD_2B557DFCC24F",
    "maxHeight": 50,
    "paddingTop": 0,
    "backgroundOpacity": 0,
    "minHeight": 50,
    "right": "5%",
    "verticalAlign": "middle"
   }
  ],
  "verticalAlign": "top",
  "scrollBarVisible": "rollOver"
 },
 {
  "class": "UIComponent",
  "backgroundColorDirection": "vertical",
  "paddingRight": 0,
  "backgroundColor": [
   "#000000"
  ],
  "showEffect": {
   "easing": "cubic_in_out",
   "class": "FadeInEffect",
   "duration": 350
  },
  "minWidth": 0,
  "borderRadius": 0,
  "paddingLeft": 0,
  "borderSize": 0,
  "shadow": false,
  "top": 0,
  "visible": false,
  "paddingBottom": 0,
  "bottom": 0,
  "id": "veilPopupPanorama",
  "backgroundColorRatios": [
   0
  ],
  "paddingTop": 0,
  "minHeight": 0,
  "left": 0,
  "backgroundOpacity": 0.55,
  "right": 0
 },
 {
  "class": "ZoomImage",
  "backgroundColorDirection": "vertical",
  "paddingRight": 0,
  "backgroundColor": [],
  "minWidth": 0,
  "borderRadius": 0,
  "paddingLeft": 0,
  "borderSize": 0,
  "scaleMode": "custom",
  "shadow": false,
  "top": 0,
  "visible": false,
  "paddingBottom": 0,
  "bottom": 0,
  "id": "zoomImagePopupPanorama",
  "backgroundColorRatios": [],
  "paddingTop": 0,
  "minHeight": 0,
  "left": 0,
  "backgroundOpacity": 1,
  "right": 0
 },
 {
  "gap": 5,
  "class": "CloseButton",
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
  "showEffect": {
   "easing": "cubic_in_out",
   "class": "FadeInEffect",
   "duration": 350
  },
  "iconColor": "#000000",
  "minWidth": 0,
  "borderRadius": 0,
  "iconBeforeLabel": true,
  "iconWidth": 20,
  "borderSize": 0,
  "paddingLeft": 5,
  "layout": "horizontal",
  "horizontalAlign": "center",
  "fontColor": "#FFFFFF",
  "shadow": false,
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
  "textDecoration": "none",
  "paddingTop": 5,
  "pressedIconColor": "#888888",
  "fontStyle": "normal",
  "rollOverIconColor": "#666666",
  "shadowBlurRadius": 6,
  "shadowSpread": 1,
  "minHeight": 0,
  "backgroundOpacity": 0.3,
  "label": "",
  "right": 10,
  "verticalAlign": "middle"
 }
], 
 "class": "Player",
 "overflow": "visible",
 "scrollBarOpacity": 0.5,
 "mouseWheelEnabled": true,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "height": "100%",
 "minWidth": 20,
 "borderRadius": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "layout": "absolute",
 "horizontalAlign": "left",
 "buttonToggleMute": "this.IconButton_8105A313_8E22_BF0B_41E1_331C6035A930",
 "shadow": false,
 "backgroundPreloadEnabled": true,
 "paddingBottom": 0,
 "scripts": {
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getKey": function(key){  return window[key]; },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "registerKey": function(key, value){  window[key] = value; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "unregisterKey": function(key){  delete window[key]; },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "existsKey": function(key){  return key in window; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio) delete audios[audio.get('id')]; } if(audio) audio.stop(); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } }
 },
 "vrPolyfillScale": 0.5,
 "id": "rootPlayer",
 "gap": 10,
 "paddingTop": 0,
 "minHeight": 20,
 "start": "this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37], 'cardboardAvailable'); this.syncPlaylists([this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); this.playList_6BA033C4_602D_003B_41CC_633FBE600049.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA].forEach(function(component) { component.set('visible', false); }) }",
 "verticalAlign": "top",
 "buttonToggleFullscreen": "this.IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA",
 "scrollBarVisible": "rollOver"
})