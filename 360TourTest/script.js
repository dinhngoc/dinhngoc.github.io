TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "buttonPlay": {
   "verticalAlign": "middle",
   "paddingRight": 0,
   "mode": "push",
   "toolTipPaddingRight": 6,
   "paddingLeft": 0,
   "iconURL": "skin/IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED.png",
   "height": "100%",
   "maxWidth": 70,
   "width": "100%",
   "toolTipPaddingBottom": 4,
   "toolTipTextShadowOpacity": 0,
   "transparencyActive": true,
   "toolTipPaddingTop": 4,
   "toolTip": "See Photos",
   "toolTipFontSize": 14,
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
   "minHeight": 25,
   "class": "IconButton",
   "click": "this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, true, 0, this.effect_98AADBB0_96C5_F0C5_41B2_1C4D08E503DB, 'showEffect', false); this.playList_5984D0B7_429B_0E6E_41C5_C56E938D2B4B.set('selectedIndex', 0)",
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
   "minWidth": 25,
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
    "minHeight": 50,
    "top": "2%",
    "click": "this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, false, 0, this.effect_9B0AF4E2_96C4_F045_41D3_0E00FEE03A15, 'hideEffect', false)",
    "paddingBottom": 0,
    "class": "IconButton",
    "cursor": "hand",
    "id": "IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4",
    "maxHeight": 50,
    "paddingTop": 0,
    "backgroundOpacity": 0,
    "minWidth": 50,
    "right": "2%",
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
   "minHeight": 60,
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
   "minWidth": 60,
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
   "progressBottom": 2,
   "minHeight": 1,
   "class": "ViewerArea",
   "playbackBarProgressBorderSize": 0,
   "playbackBarHeadBackgroundColorDirection": "vertical",
   "playbackBarBackgroundColorDirection": "vertical",
   "paddingBottom": 0,
   "progressBorderSize": 0,
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
   "toolTipFontSize": 14,
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
   "playbackBarHeadBorderSize": 0,
   "playbackBarHeadBackgroundColorRatios": [
    0,
    1
   ],
   "playbackBarHeadShadowColor": "#000000",
   "toolTipFontWeight": "normal",
   "id": "ViewerAreaLabeled_9FD7235A_96CD_9045_41D9_23A3BCBDB1C6",
   "toolTipTextShadowBlurRadius": 3,
   "playbackBarHeadShadowVerticalLength": 0,
   "progressBarBorderColor": "#000000",
   "playbackBarHeadShadow": true,
   "playbackBarHeadOpacity": 1,
   "playbackBarProgressBackgroundColor": [
    "#3399FF"
   ],
   "progressBackgroundColorDirection": "vertical",
   "toolTipShadowHorizontalLength": 0,
   "progressBackgroundOpacity": 1,
   "progressBarBackgroundColorRatios": [
    0
   ],
   "progressHeight": 10,
   "left": "0%",
   "progressBorderColor": "#000000",
   "playbackBarBottom": 0,
   "progressBarBackgroundColor": [
    "#3399FF"
   ],
   "toolTipFontFamily": "Arial",
   "progressOpacity": 1,
   "playbackBarHeadShadowHorizontalLength": 0
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
   "minHeight": 60,
   "top": "40%",
   "paddingBottom": 0,
   "class": "IconButton",
   "cursor": "hand",
   "bottom": "40%",
   "id": "IconButton_9FB9BD3F_96C5_703B_41D7_65AEE6E85A96",
   "maxHeight": 70,
   "paddingTop": 0,
   "backgroundOpacity": 0,
   "minWidth": 60,
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
  "mapLocations": [
   {
    "x": 300.88,
    "class": "PanoramaMapLocation",
    "y": 431.85,
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
        "x": 265.88,
        "width": 70,
        "y": 396.85,
        "height": 70,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 34,
           "width": 34,
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
        "x": 265.88,
        "class": "HotspotMapOverlayImage",
        "y": 396.85,
        "width": 70,
        "height": 70,
        "image": {
         "levels": [
          {
           "height": 69,
           "width": 69,
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
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_4DEBC1BC_411E_B0BA_41C2_8D75AEE4E70B_t.jpg",
  "id": "panorama_4DEBC1BC_411E_B0BA_41C2_8D75AEE4E70B",
  "hfovMin": 60,
  "label": "Street View",
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
           "height": 30,
           "width": 30,
           "url": "media/panorama_4DEBC1BC_411E_B0BA_41C2_8D75AEE4E70B_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 15.91,
        "yaw": 1.79,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -19.43
       }
      ],
      "areas": [
       {
        "toolTip": "Entrance",
        "click": "this.startPanoramaWithCamera(this.panorama_4D1613E3_4119_90CE_41CC_DF7832021B96, this.camera_5A453141_429B_0E22_41B2_20BBBAC0728B); this.mainPlayList.set('selectedIndex', 1)",
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
        "yaw": 1.79,
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
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -19.43
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
        "click": "this.startPanoramaWithCamera(this.panorama_4C068664_4127_93CA_41A2_D07233B3A2AF, this.camera_5BB48160_429B_0EE2_41CB_A2A5E1D067CB); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 5); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 8); this.mainPlayList.set('selectedIndex', 9)"
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
  "hfov": 360,
  "adjacentPanoramas": [
   {
    "panorama": {
     "hfovMax": 120,
     "partial": false,
     "pitch": 0,
     "thumbnailUrl": "media/panorama_4C597F40_411B_91CA_41B3_3FEECDEB1412_t.jpg",
     "id": "panorama_4C597F40_411B_91CA_41B3_3FEECDEB1412",
     "hfovMin": 60,
     "label": "Master Balcony",
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
              "height": 30,
              "width": 30,
              "url": "media/panorama_4C597F40_411B_91CA_41B3_3FEECDEB1412_0_HS_0_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 8.97,
           "yaw": 88.61,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -57.9
          }
         ],
         "areas": [
          {
           "toolTip": "Roof Top",
           "click": "this.startPanoramaWithCamera(this.panorama_4C09B820_411A_9F4A_418C_3401DFC19214, this.camera_5B9E41A5_429B_0E62_41CD_93A39B22C08E); this.mainPlayList.set('selectedIndex', 4)",
           "displayTooltipInTouchScreens": true,
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "id": "overlay_4C596F40_411B_91CA_41C6_B66A9F50A105",
         "class": "HotspotPanoramaOverlay",
         "items": [
          {
           "yaw": 88.61,
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
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -57.9
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
              "url": "media/panorama_4C597F40_411B_91CA_41B3_3FEECDEB1412_0_HS_1_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 0,
           "yaw": -164.04,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": 89.55
          }
         ],
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_4C068664_4127_93CA_41A2_D07233B3A2AF, this.camera_5B8511B5_429B_0E62_41CF_3C140B219106); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 5); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 8); this.mainPlayList.set('selectedIndex', 9)"
          }
         ],
         "enabledInCardboard": true,
         "rollOverDisplay": true,
         "id": "overlay_4C593F40_411B_91CA_41C5_23B2BACF2F7B",
         "class": "HotspotPanoramaOverlay",
         "items": [
          {
           "yaw": -164.04,
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
           "class": "HotspotPanoramaOverlayImage",
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
     "hfov": 360,
     "adjacentPanoramas": [
      {
       "panorama": "this.panorama_4DEBC1BC_411E_B0BA_41C2_8D75AEE4E70B",
       "yaw": -164.04,
       "class": "AdjacentPanorama",
       "backwardYaw": -159.78,
       "distance": 1
      },
      {
       "panorama": {
        "hfovMax": 120,
        "partial": false,
        "pitch": 0,
        "thumbnailUrl": "media/panorama_4C1BD32D_4126_915A_41CF_10469E86A717_t.jpg",
        "id": "panorama_4C1BD32D_4126_915A_41CF_10469E86A717",
        "hfovMin": 60,
        "label": "Master Room",
        "frames": [
         {
          "thumbnailUrl": "media/panorama_4C1BD32D_4126_915A_41CF_10469E86A717_t.jpg",
          "overlays": [
           {
            "useHandCursor": true,
            "maps": [
             {
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
              "hfov": 15.38,
              "yaw": 63.89,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -31.3
             }
            ],
            "areas": [
             {
              "toolTip": "WC",
              "click": "this.startPanoramaWithCamera(this.panorama_4C63FF21_4126_914D_41B9_FA0A4C032B16, this.camera_5BD16209_429B_1222_41C9_48461EF6D198); this.mainPlayList.set('selectedIndex', 7)",
              "displayTooltipInTouchScreens": true,
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "id": "overlay_56B4E471_4166_B7CD_41AC_8EFD6E00D471",
            "class": "HotspotPanoramaOverlay",
            "items": [
             {
              "yaw": 63.89,
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
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -31.3
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
                 "url": "media/panorama_4C1BD32D_4126_915A_41CF_10469E86A717_0_HS_1_0_0_map.gif",
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
              "click": "this.startPanoramaWithCamera(this.panorama_4C068664_4127_93CA_41A2_D07233B3A2AF, this.camera_5BD9F219_429B_1222_41BD_B3783CF23AF9); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 5); this.mainPlayList.set('selectedIndex', 8); this.mainPlayList.set('selectedIndex', 9)"
             }
            ],
            "enabledInCardboard": true,
            "rollOverDisplay": true,
            "id": "overlay_59030146_4166_91D6_41CD_C4AD0DEB2297",
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
                 "url": "media/panorama_4C1BD32D_4126_915A_41CF_10469E86A717_0_HS_1_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "class": "HotspotPanoramaOverlayImage",
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
        "hfov": 360,
        "adjacentPanoramas": [
         {
          "panorama": "this.panorama_4DEBC1BC_411E_B0BA_41C2_8D75AEE4E70B",
          "yaw": -162.92,
          "class": "AdjacentPanorama",
          "backwardYaw": -159.78,
          "distance": 1
         },
         {
          "panorama": "this.panorama_4C597F40_411B_91CA_41B3_3FEECDEB1412",
          "yaw": -162.92,
          "class": "AdjacentPanorama",
          "backwardYaw": -164.04,
          "distance": 1
         },
         {
          "panorama": {
           "hfovMax": 120,
           "partial": false,
           "pitch": 0,
           "thumbnailUrl": "media/panorama_4C5FDE04_4126_734A_41CC_218B1F932217_t.jpg",
           "id": "panorama_4C5FDE04_4126_734A_41CC_218B1F932217",
           "hfovMin": 60,
           "label": "Double Beds Room",
           "frames": [
            {
             "thumbnailUrl": "media/panorama_4C5FDE04_4126_734A_41CC_218B1F932217_t.jpg",
             "overlays": [
              {
               "useHandCursor": true,
               "maps": [
                {
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
                 "hfov": 24.57,
                 "yaw": 85.73,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -24.49
                }
               ],
               "areas": [
                {
                 "toolTip": "Bed Room",
                 "click": "this.startPanoramaWithCamera(this.panorama_4C068664_4127_93CA_41A2_D07233B3A2AF, this.camera_5B78D27A_429B_12E6_41AB_F8732D636E6F); this.mainPlayList.set('selectedIndex', 8)",
                 "displayTooltipInTouchScreens": true,
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "id": "overlay_5D00EDD9_4119_90FD_41C3_E09552F1A551",
               "class": "HotspotPanoramaOverlay",
               "items": [
                {
                 "yaw": 85.73,
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
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -24.49
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
                    "url": "media/panorama_4C5FDE04_4126_734A_41CC_218B1F932217_0_HS_1_0_0_map.gif",
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
                 "click": "this.startPanoramaWithCamera(this.panorama_4C63FF21_4126_914D_41B9_FA0A4C032B16, this.camera_5B743270_429B_12E2_419C_F2D635B3C8A4); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 5); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 7)"
                }
               ],
               "enabledInCardboard": true,
               "rollOverDisplay": true,
               "id": "overlay_5CF8495D_411B_91F5_41CC_9ED13A5D2046",
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
                    "url": "media/panorama_4C5FDE04_4126_734A_41CC_218B1F932217_0_HS_1_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "class": "HotspotPanoramaOverlayImage",
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
           "hfov": 360,
           "adjacentPanoramas": [
            {
             "panorama": "this.panorama_4DEBC1BC_411E_B0BA_41C2_8D75AEE4E70B",
             "yaw": -172.21,
             "class": "AdjacentPanorama",
             "backwardYaw": -159.78,
             "distance": 1
            },
            {
             "panorama": "this.panorama_4C597F40_411B_91CA_41B3_3FEECDEB1412",
             "yaw": -172.21,
             "class": "AdjacentPanorama",
             "backwardYaw": -164.04,
             "distance": 1
            },
            {
             "panorama": "this.panorama_4C1BD32D_4126_915A_41CF_10469E86A717",
             "yaw": -172.21,
             "class": "AdjacentPanorama",
             "backwardYaw": -162.92,
             "distance": 1
            },
            {
             "panorama": {
              "hfovMax": 120,
              "partial": false,
              "pitch": 0,
              "thumbnailUrl": "media/panorama_4C046DCD_411A_B0DA_41CD_92ADD7E360C8_t.jpg",
              "id": "panorama_4C046DCD_411A_B0DA_41CD_92ADD7E360C8",
              "hfovMin": 60,
              "label": "Swimming Pool",
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
                       "height": 30,
                       "width": 30,
                       "url": "media/panorama_4C046DCD_411A_B0DA_41CD_92ADD7E360C8_0_HS_0_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "hfov": 13.83,
                    "yaw": 85.53,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -34.99
                   }
                  ],
                  "areas": [
                   {
                    "toolTip": "Master Balcony",
                    "click": "this.startPanoramaWithCamera(this.panorama_4C597F40_411B_91CA_41B3_3FEECDEB1412, this.camera_5B5E228E_429B_123E_419B_E2DDBE2C92A7); this.mainPlayList.set('selectedIndex', 3)",
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
                    "yaw": 85.53,
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
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -34.99
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
                    "yaw": -162.42,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": 95.93
                   }
                  ],
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_4C068664_4127_93CA_41A2_D07233B3A2AF, this.camera_58F0233B_429B_1266_41C0_C92A2F320A7D); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 5); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 8); this.mainPlayList.set('selectedIndex', 9)"
                   }
                  ],
                  "enabledInCardboard": true,
                  "rollOverDisplay": true,
                  "id": "overlay_4C044DCD_411A_B0DA_41C9_57A3E5C6891B",
                  "class": "HotspotPanoramaOverlay",
                  "items": [
                   {
                    "yaw": -162.42,
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
                    "pitch": 95.93
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
                       "height": 30,
                       "width": 30,
                       "url": "media/panorama_4C046DCD_411A_B0DA_41CD_92ADD7E360C8_0_HS_5_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "hfov": 16.2,
                    "yaw": 89.16,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -16.31
                   }
                  ],
                  "areas": [
                   {
                    "toolTip": "Entrance",
                    "click": "this.startPanoramaWithCamera(this.panorama_4D1613E3_4119_90CE_41CC_DF7832021B96, this.camera_58A882F4_429B_13E2_41CF_F68CA298B534); this.mainPlayList.set('selectedIndex', 1)",
                    "displayTooltipInTouchScreens": true,
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "id": "overlay_568FC7DF_420F_AB0B_41B0_6D811D202177",
                  "class": "HotspotPanoramaOverlay",
                  "items": [
                   {
                    "yaw": 89.16,
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
                    "class": "HotspotPanoramaOverlayImage",
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
              "hfov": 360,
              "adjacentPanoramas": [
               {
                "panorama": "this.panorama_4DEBC1BC_411E_B0BA_41C2_8D75AEE4E70B",
                "yaw": -162.42,
                "class": "AdjacentPanorama",
                "backwardYaw": -159.78,
                "distance": 1
               },
               {
                "panorama": "this.panorama_4C597F40_411B_91CA_41B3_3FEECDEB1412",
                "yaw": 85.53,
                "class": "AdjacentPanorama",
                "backwardYaw": -164.04,
                "distance": 1
               },
               {
                "panorama": "this.panorama_4C1BD32D_4126_915A_41CF_10469E86A717",
                "yaw": -162.42,
                "class": "AdjacentPanorama",
                "backwardYaw": -162.92,
                "distance": 1
               },
               {
                "panorama": "this.panorama_4C5FDE04_4126_734A_41CC_218B1F932217",
                "yaw": -162.42,
                "class": "AdjacentPanorama",
                "backwardYaw": -172.21,
                "distance": 1
               },
               {
                "panorama": {
                 "hfovMax": 120,
                 "partial": false,
                 "pitch": 0,
                 "thumbnailUrl": "media/panorama_4C0707C9_4119_90DD_41C2_22B8691226F2_t.jpg",
                 "id": "panorama_4C0707C9_4119_90DD_41C2_22B8691226F2",
                 "hfovMin": 60,
                 "label": "Living Room",
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
                          "height": 74,
                          "width": 74,
                          "url": "media/panorama_4C0707C9_4119_90DD_41C2_22B8691226F2_0_HS_0_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "hfov": 14.78,
                       "yaw": 13.65,
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -34.81
                      }
                     ],
                     "areas": [
                      {
                       "toolTip": "Master Room",
                       "click": "this.startPanoramaWithCamera(this.panorama_4C1BD32D_4126_915A_41CF_10469E86A717, this.camera_58C6536B_429B_12E6_419E_B1B348AF7F64); this.mainPlayList.set('selectedIndex', 6)",
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
                       "yaw": 13.65,
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
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": -34.81
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
                       "hfov": 0,
                       "yaw": -167.69,
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": 86.48
                      }
                     ],
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_4C068664_4127_93CA_41A2_D07233B3A2AF, this.camera_587503A8_429B_1262_41BD_3D6C7EC1A241); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 8); this.mainPlayList.set('selectedIndex', 9)"
                      }
                     ],
                     "enabledInCardboard": true,
                     "rollOverDisplay": true,
                     "id": "overlay_4C0727D0_4119_90CA_41CF_9F09FB3AFB60",
                     "class": "HotspotPanoramaOverlay",
                     "items": [
                      {
                       "yaw": -167.69,
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
                       "class": "HotspotPanoramaOverlayImage",
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
                 "hfov": 360,
                 "adjacentPanoramas": [
                  {
                   "panorama": "this.panorama_4DEBC1BC_411E_B0BA_41C2_8D75AEE4E70B",
                   "yaw": -167.69,
                   "class": "AdjacentPanorama",
                   "backwardYaw": -159.78,
                   "distance": 1
                  },
                  {
                   "panorama": "this.panorama_4C597F40_411B_91CA_41B3_3FEECDEB1412",
                   "yaw": -167.69,
                   "class": "AdjacentPanorama",
                   "backwardYaw": -164.04,
                   "distance": 1
                  },
                  {
                   "panorama": "this.panorama_4C1BD32D_4126_915A_41CF_10469E86A717",
                   "yaw": 13.65,
                   "class": "AdjacentPanorama",
                   "backwardYaw": -162.92,
                   "distance": 1
                  },
                  {
                   "panorama": "this.panorama_4C5FDE04_4126_734A_41CC_218B1F932217",
                   "yaw": -167.69,
                   "class": "AdjacentPanorama",
                   "backwardYaw": -172.21,
                   "distance": 1
                  },
                  {
                   "panorama": "this.panorama_4C046DCD_411A_B0DA_41CD_92ADD7E360C8",
                   "yaw": -167.69,
                   "class": "AdjacentPanorama",
                   "backwardYaw": -162.42,
                   "distance": 1
                  },
                  {
                   "panorama": {
                    "hfovMax": 120,
                    "partial": false,
                    "pitch": 0,
                    "thumbnailUrl": "media/panorama_4D1613E3_4119_90CE_41CC_DF7832021B96_t.jpg",
                    "id": "panorama_4D1613E3_4119_90CE_41CC_DF7832021B96",
                    "hfovMin": 60,
                    "label": "Entrance",
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
                             "height": 30,
                             "width": 30,
                             "url": "media/panorama_4D1613E3_4119_90CE_41CC_DF7832021B96_0_HS_0_0_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "hfov": 16.68,
                          "yaw": -12.94,
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": -8.75
                         }
                        ],
                        "areas": [
                         {
                          "toolTip": "Swimming Pool",
                          "click": "this.startPanoramaWithCamera(this.panorama_4C046DCD_411A_B0DA_41CD_92ADD7E360C8, this.camera_59B033DA_429B_1226_41C6_223811C1F002); this.mainPlayList.set('selectedIndex', 2)",
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
                          "yaw": -12.94,
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
                          "class": "HotspotPanoramaOverlayImage",
                          "pitch": -8.75
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
                             "height": 30,
                             "width": 30,
                             "url": "media/panorama_4D1613E3_4119_90CE_41CC_DF7832021B96_0_HS_5_0_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "hfov": 10.9,
                          "yaw": 70.03,
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": -49.78
                         }
                        ],
                        "areas": [
                         {
                          "toolTip": "Street View",
                          "click": "this.startPanoramaWithCamera(this.panorama_4DEBC1BC_411E_B0BA_41C2_8D75AEE4E70B, this.camera_586663B2_429B_1266_4196_F62F717B0832); this.mainPlayList.set('selectedIndex', 0)",
                          "displayTooltipInTouchScreens": true,
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "id": "overlay_566281A6_4217_673D_41C4_B6181D3CABDE",
                        "class": "HotspotPanoramaOverlay",
                        "items": [
                         {
                          "yaw": 70.03,
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
                          "class": "HotspotPanoramaOverlayImage",
                          "pitch": -49.78
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
                          "click": "this.startPanoramaWithCamera(this.panorama_4C068664_4127_93CA_41A2_D07233B3A2AF, this.camera_5BB00436_429B_1661_41C5_40922C8A9D23); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 5); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 8); this.mainPlayList.set('selectedIndex', 9)"
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
                    "hfov": 360,
                    "adjacentPanoramas": [
                     {
                      "panorama": "this.panorama_4DEBC1BC_411E_B0BA_41C2_8D75AEE4E70B",
                      "yaw": 70.03,
                      "class": "AdjacentPanorama",
                      "backwardYaw": 1.79,
                      "distance": 1
                     },
                     {
                      "panorama": "this.panorama_4C597F40_411B_91CA_41B3_3FEECDEB1412",
                      "yaw": -171.93,
                      "class": "AdjacentPanorama",
                      "backwardYaw": -164.04,
                      "distance": 1
                     },
                     {
                      "panorama": "this.panorama_4C1BD32D_4126_915A_41CF_10469E86A717",
                      "yaw": -171.93,
                      "class": "AdjacentPanorama",
                      "backwardYaw": -162.92,
                      "distance": 1
                     },
                     {
                      "panorama": "this.panorama_4C5FDE04_4126_734A_41CC_218B1F932217",
                      "yaw": -171.93,
                      "class": "AdjacentPanorama",
                      "backwardYaw": -172.21,
                      "distance": 1
                     },
                     {
                      "panorama": "this.panorama_4C046DCD_411A_B0DA_41CD_92ADD7E360C8",
                      "yaw": -12.94,
                      "class": "AdjacentPanorama",
                      "backwardYaw": 89.16,
                      "distance": 1
                     },
                     {
                      "panorama": "this.panorama_4C0707C9_4119_90DD_41C2_22B8691226F2",
                      "yaw": -171.93,
                      "class": "AdjacentPanorama",
                      "backwardYaw": -167.69,
                      "distance": 1
                     },
                     {
                      "panorama": {
                       "hfovMax": 120,
                       "partial": false,
                       "pitch": 0,
                       "thumbnailUrl": "media/panorama_4C09B820_411A_9F4A_418C_3401DFC19214_t.jpg",
                       "id": "panorama_4C09B820_411A_9F4A_418C_3401DFC19214",
                       "hfovMin": 60,
                       "label": "Roof Top",
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
                                "height": 30,
                                "width": 30,
                                "url": "media/panorama_4C09B820_411A_9F4A_418C_3401DFC19214_0_HS_0_0_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "hfov": 13.63,
                             "yaw": -108.24,
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": -36.11
                            }
                           ],
                           "areas": [
                            {
                             "toolTip": "Living Room",
                             "click": "this.startPanoramaWithCamera(this.panorama_4C0707C9_4119_90DD_41C2_22B8691226F2, this.camera_5B921474_429B_16E2_41C7_25740DD548CD); this.mainPlayList.set('selectedIndex', 5)",
                             "displayTooltipInTouchScreens": true,
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "id": "overlay_4C09A820_411A_9F4A_41CC_F59D0360722B",
                           "class": "HotspotPanoramaOverlay",
                           "items": [
                            {
                             "yaw": -108.24,
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
                             "class": "HotspotPanoramaOverlayImage",
                             "pitch": -36.11
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
                                "url": "media/panorama_4C09B820_411A_9F4A_418C_3401DFC19214_0_HS_5_0_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "hfov": 0,
                             "yaw": -169.59,
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": 91.13
                            }
                           ],
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_4C068664_4127_93CA_41A2_D07233B3A2AF, this.camera_5B82E492_429B_1626_41C1_83D4B73A68B0); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 8); this.mainPlayList.set('selectedIndex', 9)"
                            }
                           ],
                           "enabledInCardboard": true,
                           "rollOverDisplay": true,
                           "id": "overlay_54E61023_4179_AF4E_41BC_0445381678F4",
                           "class": "HotspotPanoramaOverlay",
                           "items": [
                            {
                             "yaw": -169.59,
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
                             "class": "HotspotPanoramaOverlayImage",
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
                       "hfov": 360,
                       "adjacentPanoramas": [
                        {
                         "panorama": "this.panorama_4DEBC1BC_411E_B0BA_41C2_8D75AEE4E70B",
                         "yaw": -169.59,
                         "class": "AdjacentPanorama",
                         "backwardYaw": -159.78,
                         "distance": 1
                        },
                        {
                         "panorama": "this.panorama_4C597F40_411B_91CA_41B3_3FEECDEB1412",
                         "yaw": -169.59,
                         "class": "AdjacentPanorama",
                         "backwardYaw": 88.61,
                         "distance": 1
                        },
                        {
                         "panorama": "this.panorama_4C1BD32D_4126_915A_41CF_10469E86A717",
                         "yaw": -169.59,
                         "class": "AdjacentPanorama",
                         "backwardYaw": -162.92,
                         "distance": 1
                        },
                        {
                         "panorama": "this.panorama_4C5FDE04_4126_734A_41CC_218B1F932217",
                         "yaw": -169.59,
                         "class": "AdjacentPanorama",
                         "backwardYaw": -172.21,
                         "distance": 1
                        },
                        {
                         "panorama": "this.panorama_4C046DCD_411A_B0DA_41CD_92ADD7E360C8",
                         "yaw": -169.59,
                         "class": "AdjacentPanorama",
                         "backwardYaw": -162.42,
                         "distance": 1
                        },
                        {
                         "panorama": "this.panorama_4C0707C9_4119_90DD_41C2_22B8691226F2",
                         "yaw": -108.24,
                         "class": "AdjacentPanorama",
                         "backwardYaw": -167.69,
                         "distance": 1
                        },
                        {
                         "panorama": "this.panorama_4D1613E3_4119_90CE_41CC_DF7832021B96",
                         "yaw": -169.59,
                         "class": "AdjacentPanorama",
                         "backwardYaw": -171.93,
                         "distance": 1
                        },
                        {
                         "panorama": {
                          "hfovMax": 120,
                          "partial": false,
                          "pitch": 0,
                          "thumbnailUrl": "media/panorama_4C63FF21_4126_914D_41B9_FA0A4C032B16_t.jpg",
                          "id": "panorama_4C63FF21_4126_914D_41B9_FA0A4C032B16",
                          "hfovMin": 60,
                          "label": "WC",
                          "frames": [
                           {
                            "thumbnailUrl": "media/panorama_4C63FF21_4126_914D_41B9_FA0A4C032B16_t.jpg",
                            "overlays": [
                             {
                              "useHandCursor": true,
                              "maps": [
                               {
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
                                "hfov": 13.57,
                                "yaw": -133.33,
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": -41.09
                               }
                              ],
                              "areas": [
                               {
                                "toolTip": "Bed Room",
                                "click": "this.startPanoramaWithCamera(this.panorama_4C068664_4127_93CA_41A2_D07233B3A2AF, this.camera_5BDA44ED_429B_17E2_41B3_BA2ECD0E3F22); this.mainPlayList.set('selectedIndex', 8)",
                                "displayTooltipInTouchScreens": true,
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "id": "overlay_58319CDD_4169_90F5_41C3_F4620B57D94B",
                              "class": "HotspotPanoramaOverlay",
                              "items": [
                               {
                                "yaw": -133.33,
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
                                "class": "HotspotPanoramaOverlayImage",
                                "pitch": -41.09
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
                                   "url": "media/panorama_4C63FF21_4126_914D_41B9_FA0A4C032B16_0_HS_1_0_0_map.gif",
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
                                "click": "this.startPanoramaWithCamera(this.panorama_4C09B820_411A_9F4A_418C_3401DFC19214, this.camera_5BD204E3_429B_17E6_41A3_EA8DE624288D); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 5); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 9)"
                               }
                              ],
                              "enabledInCardboard": true,
                              "rollOverDisplay": true,
                              "id": "overlay_5A57E675_416F_93CA_41CF_A4FEA76323D0",
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
                                   "url": "media/panorama_4C63FF21_4126_914D_41B9_FA0A4C032B16_0_HS_1_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "class": "HotspotPanoramaOverlayImage",
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
                          "hfov": 360,
                          "adjacentPanoramas": [
                           {
                            "panorama": "this.panorama_4DEBC1BC_411E_B0BA_41C2_8D75AEE4E70B",
                            "yaw": -162.92,
                            "class": "AdjacentPanorama",
                            "backwardYaw": -159.78,
                            "distance": 1
                           },
                           {
                            "panorama": "this.panorama_4C597F40_411B_91CA_41B3_3FEECDEB1412",
                            "yaw": -162.92,
                            "class": "AdjacentPanorama",
                            "backwardYaw": -164.04,
                            "distance": 1
                           },
                           {
                            "panorama": "this.panorama_4C1BD32D_4126_915A_41CF_10469E86A717",
                            "yaw": -162.92,
                            "class": "AdjacentPanorama",
                            "backwardYaw": 63.89,
                            "distance": 1
                           },
                           {
                            "panorama": "this.panorama_4C5FDE04_4126_734A_41CC_218B1F932217",
                            "yaw": -162.92,
                            "class": "AdjacentPanorama",
                            "backwardYaw": -172.21,
                            "distance": 1
                           },
                           {
                            "panorama": "this.panorama_4C046DCD_411A_B0DA_41CD_92ADD7E360C8",
                            "yaw": -162.92,
                            "class": "AdjacentPanorama",
                            "backwardYaw": -162.42,
                            "distance": 1
                           },
                           {
                            "panorama": "this.panorama_4C0707C9_4119_90DD_41C2_22B8691226F2",
                            "yaw": -162.92,
                            "class": "AdjacentPanorama",
                            "backwardYaw": -167.69,
                            "distance": 1
                           },
                           {
                            "panorama": "this.panorama_4D1613E3_4119_90CE_41CC_DF7832021B96",
                            "yaw": -162.92,
                            "class": "AdjacentPanorama",
                            "backwardYaw": -171.93,
                            "distance": 1
                           },
                           {
                            "panorama": "this.panorama_4C09B820_411A_9F4A_418C_3401DFC19214",
                            "yaw": -162.92,
                            "class": "AdjacentPanorama",
                            "backwardYaw": -169.59,
                            "distance": 1
                           },
                           {
                            "panorama": {
                             "hfovMax": 120,
                             "partial": false,
                             "pitch": 0,
                             "thumbnailUrl": "media/panorama_4C068664_4127_93CA_41A2_D07233B3A2AF_t.jpg",
                             "id": "panorama_4C068664_4127_93CA_41A2_D07233B3A2AF",
                             "hfovMin": 60,
                             "label": "Bed Room",
                             "frames": [
                              {
                               "thumbnailUrl": "media/panorama_4C068664_4127_93CA_41A2_D07233B3A2AF_t.jpg",
                               "overlays": [
                                {
                                 "useHandCursor": true,
                                 "maps": [
                                  {
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
                                   "hfov": 14.36,
                                   "yaw": 81.23,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": -37.07
                                  }
                                 ],
                                 "areas": [
                                  {
                                   "toolTip": "Double Beds Room",
                                   "click": "this.startPanoramaWithCamera(this.panorama_4C5FDE04_4126_734A_41CC_218B1F932217, this.camera_5B3DE516_429B_1621_41B7_17030EB6B6E2); this.mainPlayList.set('selectedIndex', 9)",
                                   "displayTooltipInTouchScreens": true,
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "id": "overlay_5B8E9A3B_411A_73BC_41C5_0ED42A574E99",
                                 "class": "HotspotPanoramaOverlay",
                                 "items": [
                                  {
                                   "yaw": 81.23,
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
                                   "class": "HotspotPanoramaOverlayImage",
                                   "pitch": -37.07
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
                                      "url": "media/panorama_4C068664_4127_93CA_41A2_D07233B3A2AF_0_HS_1_0_0_map.gif",
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
                                   "click": "this.startPanoramaWithCamera(this.panorama_4C63FF21_4126_914D_41B9_FA0A4C032B16, this.camera_5B025548_429B_1622_41B5_0E2A8740A038); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 5); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 7)"
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": true,
                                 "id": "overlay_5AB597AD_4119_915A_41D0_1E9920DC79B5",
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
                                      "url": "media/panorama_4C068664_4127_93CA_41A2_D07233B3A2AF_0_HS_1_0.png",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "class": "HotspotPanoramaOverlayImage",
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
                             "hfov": 360,
                             "adjacentPanoramas": [
                              {
                               "panorama": "this.panorama_4DEBC1BC_411E_B0BA_41C2_8D75AEE4E70B",
                               "yaw": -170.2,
                               "class": "AdjacentPanorama",
                               "backwardYaw": -159.78,
                               "distance": 1
                              },
                              {
                               "panorama": "this.panorama_4C597F40_411B_91CA_41B3_3FEECDEB1412",
                               "yaw": -170.2,
                               "class": "AdjacentPanorama",
                               "backwardYaw": -164.04,
                               "distance": 1
                              },
                              {
                               "panorama": "this.panorama_4C1BD32D_4126_915A_41CF_10469E86A717",
                               "yaw": -170.2,
                               "class": "AdjacentPanorama",
                               "backwardYaw": -162.92,
                               "distance": 1
                              },
                              {
                               "panorama": "this.panorama_4C5FDE04_4126_734A_41CC_218B1F932217",
                               "yaw": 81.23,
                               "class": "AdjacentPanorama",
                               "backwardYaw": 85.73,
                               "distance": 1
                              },
                              {
                               "panorama": "this.panorama_4C046DCD_411A_B0DA_41CD_92ADD7E360C8",
                               "yaw": -170.2,
                               "class": "AdjacentPanorama",
                               "backwardYaw": -162.42,
                               "distance": 1
                              },
                              {
                               "panorama": "this.panorama_4C0707C9_4119_90DD_41C2_22B8691226F2",
                               "yaw": -170.2,
                               "class": "AdjacentPanorama",
                               "backwardYaw": -167.69,
                               "distance": 1
                              },
                              {
                               "panorama": "this.panorama_4D1613E3_4119_90CE_41CC_DF7832021B96",
                               "yaw": -170.2,
                               "class": "AdjacentPanorama",
                               "backwardYaw": -171.93,
                               "distance": 1
                              },
                              {
                               "panorama": "this.panorama_4C09B820_411A_9F4A_418C_3401DFC19214",
                               "yaw": -170.2,
                               "class": "AdjacentPanorama",
                               "backwardYaw": -169.59,
                               "distance": 1
                              },
                              {
                               "panorama": "this.panorama_4C63FF21_4126_914D_41B9_FA0A4C032B16",
                               "yaw": -170.2,
                               "class": "AdjacentPanorama",
                               "backwardYaw": -133.33,
                               "distance": 1
                              }
                             ],
                             "class": "Panorama",
                             "vfov": 180
                            },
                            "yaw": -133.33,
                            "class": "AdjacentPanorama",
                            "backwardYaw": -170.2,
                            "distance": 1
                           }
                          ],
                          "class": "Panorama",
                          "vfov": 180
                         },
                         "yaw": -169.59,
                         "class": "AdjacentPanorama",
                         "backwardYaw": -162.92,
                         "distance": 1
                        },
                        {
                         "panorama": "this.panorama_4C068664_4127_93CA_41A2_D07233B3A2AF",
                         "yaw": -169.59,
                         "class": "AdjacentPanorama",
                         "backwardYaw": -170.2,
                         "distance": 1
                        }
                       ],
                       "class": "Panorama",
                       "vfov": 180
                      },
                      "yaw": -171.93,
                      "class": "AdjacentPanorama",
                      "backwardYaw": -169.59,
                      "distance": 1
                     },
                     {
                      "panorama": "this.panorama_4C63FF21_4126_914D_41B9_FA0A4C032B16",
                      "yaw": -171.93,
                      "class": "AdjacentPanorama",
                      "backwardYaw": -162.92,
                      "distance": 1
                     },
                     {
                      "panorama": "this.panorama_4C068664_4127_93CA_41A2_D07233B3A2AF",
                      "yaw": -171.93,
                      "class": "AdjacentPanorama",
                      "backwardYaw": -170.2,
                      "distance": 1
                     }
                    ],
                    "class": "Panorama",
                    "vfov": 180
                   },
                   "yaw": -167.69,
                   "class": "AdjacentPanorama",
                   "backwardYaw": -171.93,
                   "distance": 1
                  },
                  {
                   "panorama": "this.panorama_4C09B820_411A_9F4A_418C_3401DFC19214",
                   "yaw": -167.69,
                   "class": "AdjacentPanorama",
                   "backwardYaw": -108.24,
                   "distance": 1
                  },
                  {
                   "panorama": "this.panorama_4C63FF21_4126_914D_41B9_FA0A4C032B16",
                   "yaw": -167.69,
                   "class": "AdjacentPanorama",
                   "backwardYaw": -162.92,
                   "distance": 1
                  },
                  {
                   "panorama": "this.panorama_4C068664_4127_93CA_41A2_D07233B3A2AF",
                   "yaw": -167.69,
                   "class": "AdjacentPanorama",
                   "backwardYaw": -170.2,
                   "distance": 1
                  }
                 ],
                 "class": "Panorama",
                 "vfov": 180
                },
                "yaw": -162.42,
                "class": "AdjacentPanorama",
                "backwardYaw": -167.69,
                "distance": 1
               },
               {
                "panorama": "this.panorama_4D1613E3_4119_90CE_41CC_DF7832021B96",
                "yaw": 89.16,
                "class": "AdjacentPanorama",
                "backwardYaw": -12.94,
                "distance": 1
               },
               {
                "panorama": "this.panorama_4C09B820_411A_9F4A_418C_3401DFC19214",
                "yaw": -162.42,
                "class": "AdjacentPanorama",
                "backwardYaw": -169.59,
                "distance": 1
               },
               {
                "panorama": "this.panorama_4C63FF21_4126_914D_41B9_FA0A4C032B16",
                "yaw": -162.42,
                "class": "AdjacentPanorama",
                "backwardYaw": -162.92,
                "distance": 1
               },
               {
                "panorama": "this.panorama_4C068664_4127_93CA_41A2_D07233B3A2AF",
                "yaw": -162.42,
                "class": "AdjacentPanorama",
                "backwardYaw": -170.2,
                "distance": 1
               }
              ],
              "class": "Panorama",
              "vfov": 180
             },
             "yaw": -172.21,
             "class": "AdjacentPanorama",
             "backwardYaw": -162.42,
             "distance": 1
            },
            {
             "panorama": "this.panorama_4C0707C9_4119_90DD_41C2_22B8691226F2",
             "yaw": -172.21,
             "class": "AdjacentPanorama",
             "backwardYaw": -167.69,
             "distance": 1
            },
            {
             "panorama": "this.panorama_4D1613E3_4119_90CE_41CC_DF7832021B96",
             "yaw": -172.21,
             "class": "AdjacentPanorama",
             "backwardYaw": -171.93,
             "distance": 1
            },
            {
             "panorama": "this.panorama_4C09B820_411A_9F4A_418C_3401DFC19214",
             "yaw": -172.21,
             "class": "AdjacentPanorama",
             "backwardYaw": -169.59,
             "distance": 1
            },
            {
             "panorama": "this.panorama_4C63FF21_4126_914D_41B9_FA0A4C032B16",
             "yaw": -172.21,
             "class": "AdjacentPanorama",
             "backwardYaw": -162.92,
             "distance": 1
            },
            {
             "panorama": "this.panorama_4C068664_4127_93CA_41A2_D07233B3A2AF",
             "yaw": 85.73,
             "class": "AdjacentPanorama",
             "backwardYaw": 81.23,
             "distance": 1
            }
           ],
           "class": "Panorama",
           "vfov": 180
          },
          "yaw": -162.92,
          "class": "AdjacentPanorama",
          "backwardYaw": -172.21,
          "distance": 1
         },
         {
          "panorama": "this.panorama_4C046DCD_411A_B0DA_41CD_92ADD7E360C8",
          "yaw": -162.92,
          "class": "AdjacentPanorama",
          "backwardYaw": -162.42,
          "distance": 1
         },
         {
          "panorama": "this.panorama_4C0707C9_4119_90DD_41C2_22B8691226F2",
          "yaw": -162.92,
          "class": "AdjacentPanorama",
          "backwardYaw": 13.65,
          "distance": 1
         },
         {
          "panorama": "this.panorama_4D1613E3_4119_90CE_41CC_DF7832021B96",
          "yaw": -162.92,
          "class": "AdjacentPanorama",
          "backwardYaw": -171.93,
          "distance": 1
         },
         {
          "panorama": "this.panorama_4C09B820_411A_9F4A_418C_3401DFC19214",
          "yaw": -162.92,
          "class": "AdjacentPanorama",
          "backwardYaw": -169.59,
          "distance": 1
         },
         {
          "panorama": "this.panorama_4C63FF21_4126_914D_41B9_FA0A4C032B16",
          "yaw": 63.89,
          "class": "AdjacentPanorama",
          "backwardYaw": -162.92,
          "distance": 1
         },
         {
          "panorama": "this.panorama_4C068664_4127_93CA_41A2_D07233B3A2AF",
          "yaw": -162.92,
          "class": "AdjacentPanorama",
          "backwardYaw": -170.2,
          "distance": 1
         }
        ],
        "class": "Panorama",
        "vfov": 180
       },
       "yaw": -164.04,
       "class": "AdjacentPanorama",
       "backwardYaw": -162.92,
       "distance": 1
      },
      {
       "panorama": "this.panorama_4C5FDE04_4126_734A_41CC_218B1F932217",
       "yaw": -164.04,
       "class": "AdjacentPanorama",
       "backwardYaw": -172.21,
       "distance": 1
      },
      {
       "panorama": "this.panorama_4C046DCD_411A_B0DA_41CD_92ADD7E360C8",
       "yaw": -164.04,
       "class": "AdjacentPanorama",
       "backwardYaw": 85.53,
       "distance": 1
      },
      {
       "panorama": "this.panorama_4C0707C9_4119_90DD_41C2_22B8691226F2",
       "yaw": -164.04,
       "class": "AdjacentPanorama",
       "backwardYaw": -167.69,
       "distance": 1
      },
      {
       "panorama": "this.panorama_4D1613E3_4119_90CE_41CC_DF7832021B96",
       "yaw": -164.04,
       "class": "AdjacentPanorama",
       "backwardYaw": -171.93,
       "distance": 1
      },
      {
       "panorama": "this.panorama_4C09B820_411A_9F4A_418C_3401DFC19214",
       "yaw": 88.61,
       "class": "AdjacentPanorama",
       "backwardYaw": -169.59,
       "distance": 1
      },
      {
       "panorama": "this.panorama_4C63FF21_4126_914D_41B9_FA0A4C032B16",
       "yaw": -164.04,
       "class": "AdjacentPanorama",
       "backwardYaw": -162.92,
       "distance": 1
      },
      {
       "panorama": "this.panorama_4C068664_4127_93CA_41A2_D07233B3A2AF",
       "yaw": -164.04,
       "class": "AdjacentPanorama",
       "backwardYaw": -170.2,
       "distance": 1
      }
     ],
     "class": "Panorama",
     "vfov": 180
    },
    "yaw": -159.78,
    "class": "AdjacentPanorama",
    "backwardYaw": -164.04,
    "distance": 1
   },
   {
    "panorama": "this.panorama_4C1BD32D_4126_915A_41CF_10469E86A717",
    "yaw": -159.78,
    "class": "AdjacentPanorama",
    "backwardYaw": -162.92,
    "distance": 1
   },
   {
    "panorama": "this.panorama_4C5FDE04_4126_734A_41CC_218B1F932217",
    "yaw": -159.78,
    "class": "AdjacentPanorama",
    "backwardYaw": -172.21,
    "distance": 1
   },
   {
    "panorama": "this.panorama_4C046DCD_411A_B0DA_41CD_92ADD7E360C8",
    "yaw": -159.78,
    "class": "AdjacentPanorama",
    "backwardYaw": -162.42,
    "distance": 1
   },
   {
    "panorama": "this.panorama_4C0707C9_4119_90DD_41C2_22B8691226F2",
    "yaw": -159.78,
    "class": "AdjacentPanorama",
    "backwardYaw": -167.69,
    "distance": 1
   },
   {
    "panorama": "this.panorama_4D1613E3_4119_90CE_41CC_DF7832021B96",
    "yaw": 1.79,
    "class": "AdjacentPanorama",
    "backwardYaw": 70.03,
    "distance": 1
   },
   {
    "panorama": "this.panorama_4C09B820_411A_9F4A_418C_3401DFC19214",
    "yaw": -159.78,
    "class": "AdjacentPanorama",
    "backwardYaw": -169.59,
    "distance": 1
   },
   {
    "panorama": "this.panorama_4C63FF21_4126_914D_41B9_FA0A4C032B16",
    "yaw": -159.78,
    "class": "AdjacentPanorama",
    "backwardYaw": -162.92,
    "distance": 1
   },
   {
    "panorama": "this.panorama_4C068664_4127_93CA_41A2_D07233B3A2AF",
    "yaw": -159.78,
    "class": "AdjacentPanorama",
    "backwardYaw": -170.2,
    "distance": 1
   }
  ],
  "class": "Panorama",
  "vfov": 180
 },
 {
  "touchControlMode": "drag_rotation",
  "buttonToggleHotspots": {
   "verticalAlign": "middle",
   "paddingRight": 0,
   "mode": "toggle",
   "toolTipPaddingRight": 6,
   "paddingLeft": 0,
   "iconURL": "skin/IconButton_80E5955A_8E23_BB05_41CA_43DD61DBAEE9.png",
   "height": "100%",
   "maxWidth": 60,
   "width": "100%",
   "toolTipPaddingBottom": 4,
   "toolTipTextShadowOpacity": 0,
   "transparencyActive": true,
   "toolTipPaddingTop": 4,
   "toolTip": "Hotspots Visibility",
   "toolTipFontSize": 14,
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
   "maxHeight": 60,
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
  "displayPlaybackBar": true,
  "buttonStop": [
   "this.IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4",
   "this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB"
  ],
  "buttonPlay": "this.IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED",
  "id": "MainViewerPanoramaPlayer",
  "viewerArea": "this.MainViewer",
  "buttonCardboardView": {
   "verticalAlign": "middle",
   "paddingRight": 0,
   "mode": "push",
   "paddingLeft": 0,
   "height": "100%",
   "maxWidth": 60,
   "width": "100%",
   "iconURL": "skin/IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37.png",
   "transparencyActive": false,
   "borderRadius": 0,
   "borderSize": 0,
   "horizontalAlign": "center",
   "minHeight": 1,
   "class": "IconButton",
   "paddingBottom": 0,
   "cursor": "hand",
   "id": "IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37",
   "maxHeight": 60,
   "paddingTop": 0,
   "backgroundOpacity": 0,
   "minWidth": 1,
   "shadow": false
  },
  "mouseControlMode": "drag_acceleration",
  "preloadEnabled": false,
  "class": "PanoramaPlayer",
  "gyroscopeVerticalDraggingEnabled": true
 },
 {
  "movementMode": "constrained",
  "id": "MapViewerMapPlayer",
  "class": "MapPlayer",
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
   "toolTipOpacity": 1,
   "playbackBarBorderColor": "#FFFFFF",
   "toolTipShadowOpacity": 1,
   "playbackBarHeight": 10,
   "toolTipShadowVerticalLength": 0,
   "playbackBarHeadWidth": 6,
   "toolTipTextShadowColor": "#000000",
   "toolTipFontStyle": "normal",
   "progressBottom": 2,
   "minHeight": 1,
   "class": "ViewerArea",
   "playbackBarProgressBorderSize": 0,
   "playbackBarHeadBackgroundColorDirection": "vertical",
   "playbackBarBackgroundColorDirection": "vertical",
   "paddingBottom": 0,
   "progressBorderSize": 0,
   "toolTipBackgroundColor": "#F6F6F6",
   "progressBarBorderSize": 0,
   "playbackBarRight": 0,
   "progressBarBorderRadius": 0,
   "playbackBarProgressBorderRadius": 0,
   "paddingTop": 0,
   "transitionMode": "blending",
   "toolTipShadowSpread": 0,
   "playbackBarOpacity": 1,
   "toolTipShadowColor": "#333333",
   "toolTipShadowBlurRadius": 3,
   "toolTipFontColor": "#606060",
   "minWidth": 1,
   "playbackBarBorderRadius": 0,
   "playbackBarProgressBorderColor": "#000000",
   "playbackBarHeadBackgroundColor": [
    "#111111",
    "#666666"
   ],
   "toolTipPaddingRight": 6,
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
   "top": "15%",
   "playbackBarHeadBorderSize": 0,
   "playbackBarHeadBackgroundColorRatios": [
    0,
    1
   ],
   "bottom": "15%",
   "toolTipFontWeight": "normal",
   "id": "MapViewer",
   "toolTipTextShadowBlurRadius": 3,
   "playbackBarHeadShadowVerticalLength": 0,
   "progressBarBorderColor": "#000000",
   "playbackBarHeadShadow": true,
   "playbackBarHeadOpacity": 1,
   "playbackBarProgressBackgroundColor": [
    "#3399FF"
   ],
   "progressBackgroundColorDirection": "vertical",
   "playbackBarHeadShadowColor": "#000000",
   "progressBackgroundOpacity": 1,
   "progressBarBackgroundColorRatios": [
    0
   ],
   "progressHeight": 10,
   "left": "15%",
   "toolTipShadowHorizontalLength": 0,
   "progressBorderColor": "#000000",
   "playbackBarBottom": 0,
   "right": "15%",
   "toolTipFontFamily": "Arial",
   "progressOpacity": 1,
   "progressBarBackgroundColor": [
    "#3399FF"
   ],
   "playbackBarHeadShadowHorizontalLength": 0
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
 "this.panorama_4C1BD32D_4126_915A_41CF_10469E86A717",
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
 "this.panorama_4C63FF21_4126_914D_41B9_FA0A4C032B16",
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
 "this.panorama_4C068664_4127_93CA_41A2_D07233B3A2AF",
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
 "this.panorama_4C5FDE04_4126_734A_41CC_218B1F932217",
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
    "id": "PanoramaPlayListItem_59F230C7_429B_0E2F_41C5_371E276860D4",
    "media": "this.panorama_4DEBC1BC_411E_B0BA_41C2_8D75AEE4E70B",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_59F230C7_429B_0E2F_41C5_371E276860D4, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
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
  "id": "playList_598450B7_429B_0E6E_41CA_1C0E2BF7C71C",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.registerKey('visibility_Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB', this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB.get('visible')); this.registerKey('visibility_ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472', this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472.get('visible')); this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setComponentVisibility(this.Container_86F3A56C_8E22_5B1D_41CA_9CE53436FE56, false, -1, this.effect_22973FB1_2DD9_0423_41C1_E1E03953DCCE, 'hideEffect', false); this.setComponentVisibility(this.Container_807F782A_8E23_A905_41DE_623121285A09, false, -1, this.effect_22974FB2_2DD9_0421_41BA_84205292D043, 'hideEffect', false); this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, false, -1, this.effect_3876CD6E_2DF9_0421_41C1_F0AB7F279824, 'hideEffect', false); this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, false, -1, this.effect_22899FB3_2DD9_0427_41BB_298AEB3D2851, 'hideEffect', false); this.setComponentVisibility(this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB, true, -1, this.effect_2289DFB3_2DD9_0427_41AE_A35795880BA7, 'showEffect', false)",
    "media": "this.video_210B394E_3D54_1A60_41A3_CB42BEC0D3EC",
    "player": "this.MainViewerVideoPlayer",
    "class": "VideoPlayListItem",
    "end": "this.setComponentVisibility(this.Container_86F3A56C_8E22_5B1D_41CA_9CE53436FE56, true, -1, this.effect_22975FB2_2DD9_0421_41B4_7A2443082F44, 'showEffect', false); this.setComponentVisibility(this.Container_86F3A56C_8E22_5B1D_41CA_9CE53436FE56, true, -1, this.effect_22975FB2_2DD9_0421_41B4_7A2443082F44, 'showEffect', false); this.setComponentVisibility(this.Container_807F782A_8E23_A905_41DE_623121285A09, true, -1, this.effect_22977FB2_2DD9_0421_41C1_F53B037346DF, 'showEffect', false); this.setComponentVisibility(this.Container_807F782A_8E23_A905_41DE_623121285A09, true, -1, this.effect_22977FB2_2DD9_0421_41C1_F53B037346DF, 'showEffect', false); if(this.existsKey('visibility_ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472')){ if(this.getKey('visibility_ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472')) { this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, true, -1, this.effect_5B0CC552_429B_1626_41A5_964B9350FF7C, 'showEffect', false); } else { this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, false, -1, this.effect_3876CD6E_2DF9_0421_41C1_F0AB7F279824, 'hideEffect', false); } }; this.unregisterKey('visibility_ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472'); if(this.existsKey('visibility_Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB')){ if(this.getKey('visibility_Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB')) { this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, true, -1, this.effect_5B0CE552_429B_1626_41BF_ADEBCA29C8F6, 'showEffect', false); } else { this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, false, -1, this.effect_22899FB3_2DD9_0427_41BB_298AEB3D2851, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB'); this.setComponentVisibility(this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB, false, -1, this.effect_2289EFB3_2DD9_0427_41C0_ACB5A72AE218, 'hideEffect', false); this.setComponentVisibility(this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB, false, -1, this.effect_2289EFB3_2DD9_0427_41C0_ACB5A72AE218, 'hideEffect', false)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_598450B7_429B_0E6E_41CA_1C0E2BF7C71C, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_598450B7_429B_0E6E_41CA_1C0E2BF7C71C, 0, this.video_210B394E_3D54_1A60_41A3_CB42BEC0D3EC)"
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
  "id": "playList_5984D0B7_429B_0E6E_41C5_C56E938D2B4B",
  "class": "PlayList",
  "items": [
   {
    "player": "this.ViewerAreaLabeled_9FD7235A_96CD_9045_41D9_23A3BCBDB1C6PhotoAlbumPlayer",
    "class": "PhotoAlbumPlayListItem",
    "media": "this.album_1AE8DEB7_0EE7_8CC7_4198_F5B75788CCF6",
    "begin": "this.loopAlbum(this.playList_5984D0B7_429B_0E6E_41C5_C56E938D2B4B, 0)"
   }
  ]
 },
 "this.map_4E02A832_427B_EE04_41CC_8E1CEC03E8D3",
 {
  "id": "playList_59F5E0C7_429B_0E2F_41D0_3F8200431ED7",
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
  "id": "effect_51CB7B74_4299_12E2_41B4_829087983DE5",
  "class": "FadeInEffect",
  "duration": 300
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
  "easing": "linear",
  "id": "effect_500E3733_4297_3267_41C9_4935C0BEBF39",
  "class": "FadeOutEffect",
  "duration": 300
 },
 {
  "id": "camera_59DD50DD_429B_0E23_41CC_E2A2ADACAFEB",
  "initialPosition": {
   "yaw": 15.96,
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
  "id": "camera_59C460EC_429B_0FE2_41C1_02CC34C8E54F",
  "initialPosition": {
   "yaw": 17.08,
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
  "id": "camera_59CDB0EC_429B_0FE2_41A6_F0C47F760205",
  "initialPosition": {
   "yaw": 7.79,
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
  "id": "camera_5933E0FC_429B_0FE2_41C1_6D65D444D6C7",
  "initialPosition": {
   "yaw": 17.58,
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
  "id": "camera_5938610C_429B_0E21_41B3_CA2EBB282E54",
  "initialPosition": {
   "yaw": 12.31,
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
  "id": "camera_5A453141_429B_0E22_41B2_20BBBAC0728B",
  "initialPosition": {
   "yaw": -109.97,
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
  "id": "camera_5A416141_429B_0E22_41C6_9134BF2E833F",
  "initialPosition": {
   "yaw": 10.41,
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
  "id": "camera_5A4AA151_429B_0E23_41A2_D2D3ED869F53",
  "initialPosition": {
   "yaw": 17.08,
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
  "id": "camera_5BB48160_429B_0EE2_41CB_A2A5E1D067CB",
  "initialPosition": {
   "yaw": 9.8,
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
  "id": "camera_5BB14160_429B_0EE2_41A4_B851A6CB6FB4",
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
  "id": "camera_5BBB4170_429B_0EE2_41B3_2BF8A2B85AFD",
  "initialPosition": {
   "yaw": 17.08,
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
  "id": "camera_5BA73180_429B_0E21_41C8_88A0B68FFC32",
  "initialPosition": {
   "yaw": 7.79,
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
  "id": "camera_5BA10180_429B_0E21_41A3_0DFDB6FC9D78",
  "initialPosition": {
   "yaw": -94.47,
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
  "id": "camera_5BAD918F_429B_0E3E_41C6_A3880DDF5BAC",
  "initialPosition": {
   "yaw": 12.31,
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
  "id": "camera_5B97A19F_429B_0E5E_41C3_3B527962899F",
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
  "id": "camera_5B9E41A5_429B_0E62_41CD_93A39B22C08E",
  "initialPosition": {
   "yaw": 10.41,
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
  "id": "camera_5B9AE1B5_429B_0E62_41B9_C52E69BFF00A",
  "initialPosition": {
   "yaw": 17.08,
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
  "id": "camera_5B8511B5_429B_0E62_41CF_3C140B219106",
  "initialPosition": {
   "yaw": 9.8,
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
  "id": "camera_5B8ED1C5_429B_0E23_41B9_78DFE49A8523",
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
  "id": "camera_5B89C1D4_429B_0E22_41D0_6956B1576D6C",
  "initialPosition": {
   "yaw": 15.96,
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
  "id": "camera_5BF291D4_429B_0E22_4182_D53ECB66E81D",
  "initialPosition": {
   "yaw": 7.79,
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
  "id": "camera_5BFDD1E4_429B_11E2_41D0_4FBB52BE52B0",
  "initialPosition": {
   "yaw": 17.58,
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
  "id": "camera_5BE4D1F3_429B_11E6_41C1_E6998CD828D1",
  "initialPosition": {
   "yaw": -166.35,
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
  "id": "camera_5BE1F1F3_429B_11E6_41C8_A388042542D1",
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
  "id": "camera_5BD64209_429B_1222_4171_F552AD0CF1A5",
  "initialPosition": {
   "yaw": 10.41,
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
  "id": "camera_5BD16209_429B_1222_41C9_48461EF6D198",
  "initialPosition": {
   "yaw": 17.08,
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
  "id": "camera_5BD9F219_429B_1222_41BD_B3783CF23AF9",
  "initialPosition": {
   "yaw": 9.8,
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
  "id": "camera_5BCE2229_429B_1262_41B6_CA2FF7E3779B",
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
  "id": "camera_5BC98229_429B_1262_41BE_8D6B4B3983B3",
  "initialPosition": {
   "yaw": 15.96,
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
  "id": "camera_5B3EF238_429B_1262_41BE_8D4C88B3FC88",
  "initialPosition": {
   "yaw": 17.08,
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
  "id": "camera_5B264248_429B_1222_419F_B9DFAC60B821",
  "initialPosition": {
   "yaw": 17.58,
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
  "id": "camera_5B2CA248_429B_1222_41CE_2881D6DCB789",
  "initialPosition": {
   "yaw": 12.31,
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
  "id": "camera_5B116258_429B_1221_41D0_5E07C50E506A",
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
  "id": "camera_5B02C267_429B_12EE_41B2_ADBD97EEA437",
  "initialPosition": {
   "yaw": 10.41,
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
  "id": "camera_5B743270_429B_12E2_419C_F2D635B3C8A4",
  "initialPosition": {
   "yaw": 17.08,
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
  "id": "camera_5B78D27A_429B_12E6_41AB_F8732D636E6F",
  "initialPosition": {
   "yaw": -98.77,
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
  "id": "camera_5B6A7284_429B_1222_41A6_A183ACC344A3",
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
  "id": "camera_5B5E228E_429B_123E_419B_E2DDBE2C92A7",
  "initialPosition": {
   "yaw": 15.96,
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
  "id": "camera_5B4032AC_429B_1262_41B2_F856BABF2C83",
  "initialPosition": {
   "yaw": 17.08,
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
  "id": "camera_58B4D2C1_429B_1222_4139_9190A89E5BE8",
  "initialPosition": {
   "yaw": 7.79,
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
  "id": "camera_58A622DF_429B_13DE_41CE_40B4F19C6343",
  "initialPosition": {
   "yaw": 12.31,
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
  "id": "camera_58A882F4_429B_13E2_41CF_F68CA298B534",
  "initialPosition": {
   "yaw": 167.06,
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
  "id": "camera_589D0308_429B_1222_41BC_C8D976D18EAB",
  "initialPosition": {
   "yaw": 10.41,
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
  "id": "camera_588F9324_429B_1262_41B6_01282C793D0A",
  "initialPosition": {
   "yaw": 17.08,
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
  "id": "camera_58F0233B_429B_1266_41C0_C92A2F320A7D",
  "initialPosition": {
   "yaw": 9.8,
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
  "id": "camera_58E2A34F_429B_123E_41BF_35843D4871D3",
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
  "id": "camera_58D7F361_429B_12E2_41CD_6508FF9EBD39",
  "initialPosition": {
   "yaw": 15.96,
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
  "id": "camera_58C6536B_429B_12E6_419E_B1B348AF7F64",
  "initialPosition": {
   "yaw": 17.08,
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
  "id": "camera_58C82375_429B_12E2_41CC_9794BEE03DA7",
  "initialPosition": {
   "yaw": 7.79,
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
  "id": "camera_583D237F_429B_12DE_41D0_1FAF77380755",
  "initialPosition": {
   "yaw": 17.58,
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
  "id": "camera_582FD389_429B_1222_41C1_7A3DA51738C7",
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
  "id": "camera_58107394_429B_1221_41C1_37B9DA47F7FA",
  "initialPosition": {
   "yaw": 71.76,
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
  "id": "camera_5802F39E_429B_1221_41C8_ED126C06275B",
  "initialPosition": {
   "yaw": 17.08,
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
  "id": "camera_587503A8_429B_1262_41BD_3D6C7EC1A241",
  "initialPosition": {
   "yaw": 9.8,
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
  "id": "camera_586663B2_429B_1266_4196_F62F717B0832",
  "initialPosition": {
   "yaw": -178.21,
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
  "id": "camera_5868C3BC_429B_1262_41C5_14B4D954C920",
  "initialPosition": {
   "yaw": 15.96,
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
  "id": "camera_585D63C6_429B_122E_4196_6FB065ABB0D2",
  "initialPosition": {
   "yaw": 17.08,
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
  "id": "camera_584FC3D0_429B_1222_41CE_95C653C83936",
  "initialPosition": {
   "yaw": 7.79,
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
  "id": "camera_59B033DA_429B_1226_41C6_223811C1F002",
  "initialPosition": {
   "yaw": -90.84,
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
  "id": "camera_59A293DC_429B_1222_41CC_8BB03FB0ED63",
  "initialPosition": {
   "yaw": 12.31,
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
  "id": "camera_599503F0_429B_11E2_41C6_5260A7754486",
  "initialPosition": {
   "yaw": 10.41,
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
  "id": "camera_5BB4042B_429B_1666_4196_0BD3182C017C",
  "initialPosition": {
   "yaw": 17.08,
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
  "id": "camera_5BB00436_429B_1661_41C5_40922C8A9D23",
  "initialPosition": {
   "yaw": 9.8,
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
  "id": "camera_5BBC6440_429B_1621_41BA_F3D37A0A2D80",
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
  "id": "camera_5BB9B44C_429B_1621_41CC_0EE4395DD6AA",
  "initialPosition": {
   "yaw": -91.39,
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
  "id": "camera_5BA25456_429B_162E_41B2_4E9B1B72E146",
  "initialPosition": {
   "yaw": 17.08,
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
  "id": "camera_5BAC4460_429B_16E2_41B8_A36F14ACD038",
  "initialPosition": {
   "yaw": 7.79,
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
  "id": "camera_5B96546A_429B_16E6_41AD_BD65F6CD4CD5",
  "initialPosition": {
   "yaw": 17.58,
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
  "id": "camera_5B921474_429B_16E2_41C7_25740DD548CD",
  "initialPosition": {
   "yaw": 12.31,
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
  "id": "camera_5B9C747E_429B_16DE_41C9_675101EA58F4",
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
  "id": "camera_5B98F488_429B_1622_41BA_8C7B545F8174",
  "initialPosition": {
   "yaw": 17.08,
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
  "id": "camera_5B82E492_429B_1626_41C1_83D4B73A68B0",
  "initialPosition": {
   "yaw": 9.8,
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
  "id": "camera_5B8F049C_429B_1622_41A6_141C087DC70A",
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
  "id": "camera_5B89A4A7_429B_166F_41C6_1A112DD935AE",
  "initialPosition": {
   "yaw": 15.96,
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
  "id": "camera_5BF094B1_429B_1663_41A0_248C9D3E8610",
  "initialPosition": {
   "yaw": -116.11,
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
  "id": "camera_5BFA54BB_429B_1666_41D0_9DC8B27C2051",
  "initialPosition": {
   "yaw": 7.79,
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
  "id": "camera_5BE4A4C5_429B_1622_41A8_60F89A0BED19",
  "initialPosition": {
   "yaw": 17.58,
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
  "id": "camera_5BEE54CF_429B_163E_41B2_5B7EFD8BCBC9",
  "initialPosition": {
   "yaw": 12.31,
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
  "id": "camera_5BE8B4E1_429B_17E2_41CB_8F2F48D77930",
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
  "id": "camera_5BD204E3_429B_17E6_41A3_EA8DE624288D",
  "initialPosition": {
   "yaw": 10.41,
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
  "id": "camera_5BDA44ED_429B_17E2_41B3_BA2ECD0E3F22",
  "initialPosition": {
   "yaw": 9.8,
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
  "id": "camera_5BC2E4F7_429B_17EE_41B7_6CD5C5E7C301",
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
  "id": "camera_5BCD9501_429B_1622_41BF_91F22D99B616",
  "initialPosition": {
   "yaw": 15.96,
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
  "id": "camera_5B32050C_429B_1621_41D0_06570662638A",
  "initialPosition": {
   "yaw": 17.08,
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
  "id": "camera_5B3DE516_429B_1621_41B7_17030EB6B6E2",
  "initialPosition": {
   "yaw": -94.27,
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
  "id": "camera_5B226528_429B_1662_41C1_B91B5B035471",
  "initialPosition": {
   "yaw": 17.58,
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
  "id": "camera_5B2A9532_429B_1666_41CA_5A1083D4CD27",
  "initialPosition": {
   "yaw": 12.31,
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
  "id": "camera_5B125534_429B_1662_4193_EA133156A69C",
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
  "id": "camera_5B1A953E_429B_165E_418D_55C987281D96",
  "initialPosition": {
   "yaw": 10.41,
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
  "id": "camera_5B025548_429B_1622_41B5_0E2A8740A038",
  "initialPosition": {
   "yaw": 46.67,
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
  "id": "effect_5B0CC552_429B_1626_41A5_964B9350FF7C",
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
  "id": "effect_5B0CE552_429B_1626_41BF_ADEBCA29C8F6",
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
  "progressBottom": 0,
  "minHeight": 50,
  "class": "ViewerArea",
  "playbackBarProgressBorderSize": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarBackgroundColorDirection": "vertical",
  "paddingBottom": 0,
  "progressBorderSize": 0,
  "toolTipBackgroundColor": "#000000",
  "progressBarBorderSize": 0,
  "playbackBarRight": 0,
  "progressBarBorderRadius": 0,
  "playbackBarProgressBorderRadius": 0,
  "paddingTop": 0,
  "transitionMode": "blending",
  "toolTipShadowSpread": 0,
  "playbackBarOpacity": 1,
  "toolTipShadowColor": "#333333",
  "toolTipShadowBlurRadius": 3,
  "toolTipFontColor": "#606060",
  "minWidth": 100,
  "playbackBarBorderRadius": 0,
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "toolTipPaddingRight": 6,
  "playbackBarHeadBorderRadius": 0,
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
  "playbackBarHeadBorderSize": 0,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "bottom": "0%",
  "toolTipFontWeight": "normal",
  "id": "MainViewer",
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarHeadShadowVerticalLength": 0,
  "progressBarBorderColor": "#000000",
  "playbackBarHeadShadow": true,
  "playbackBarHeadOpacity": 1,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "progressBackgroundColorDirection": "vertical",
  "playbackBarHeadShadowColor": "#000000",
  "progressBackgroundOpacity": 1,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "progressHeight": 10,
  "left": "0%",
  "toolTipShadowHorizontalLength": 0,
  "progressBorderColor": "#000000",
  "playbackBarBottom": 5,
  "right": "0%",
  "toolTipFontFamily": "Arial",
  "progressOpacity": 1,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeadShadowHorizontalLength": 0
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
  "paddingRight": 10,
  "scrollBarColor": "#000000",
  "height": 70,
  "paddingLeft": 10,
  "borderRadius": 5,
  "borderSize": 0,
  "gap": 35,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "contentOpaque": false,
  "minHeight": 25,
  "horizontalAlign": "center",
  "class": "Container",
  "layout": "horizontal",
  "paddingBottom": 0,
  "bottom": "3%",
  "id": "Container_86F3A56C_8E22_5B1D_41CA_9CE53436FE56",
  "maxHeight": 70,
  "backgroundColorRatios": [
   0,
   1
  ],
  "paddingTop": 0,
  "left": "0%",
  "backgroundOpacity": 0.25,
  "minWidth": 100,
  "right": "0%",
  "children": [
   {
    "verticalAlign": "middle",
    "paddingRight": 0,
    "mode": "push",
    "toolTipPaddingRight": 6,
    "paddingLeft": 0,
    "iconURL": "skin/IconButton_87577B8F_8E22_AF1B_41CC_79EB87AE6DED.png",
    "height": "100%",
    "maxWidth": 70,
    "width": "100%",
    "toolTipPaddingBottom": 4,
    "toolTipTextShadowOpacity": 0,
    "transparencyActive": true,
    "toolTipPaddingTop": 4,
    "toolTip": "Info",
    "toolTipFontSize": 14,
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
    "minHeight": 25,
    "class": "IconButton",
    "click": "this.showPopupImage(this.ImageResource_536A2F3F_412A_B1B6_41B9_51CAE5D86C15, null, '85%', '85%', this.FadeInEffect_8ED05F70_96C4_F045_41DC_2AB82A556F92, this.FadeOutEffect_8ED06F70_96C4_F045_41DA_C74400CF7B15, {'rollOverIconWidth':25,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorDirection':'vertical','rollOverBackgroundColor':['#000000','#000000','#000000'],'pressedBackgroundColor':['#000000','#000000','#000000'],'iconHeight':25,'rollOverIconColor':'#52B7EF','backgroundColor':['#000000','#000000','#000000'],'rollOverBackgroundColorDirection':'vertical','pressedBorderSize':0,'iconColor':'#FFFFFF','backgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':10,'paddingBottom':10,'pressedIconLineWidth':3,'borderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':3,'pressedBorderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundOpacity':0.3,'paddingTop':10,'pressedIconColor':'#CCCCCC','paddingLeft':10,'pressedBackgroundColorDirection':'vertical','borderSize':0,'pressedIconWidth':25,'pressedIconHeight':25,'backgroundOpacity':0.15,'rollOverBorderColor':'#000000','rollOverBackgroundOpacity':0.5,'iconWidth':25,'rollOverIconHeight':25,'rollOverIconLineWidth':3}, null, null, false)",
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
    "minWidth": 25,
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
    "height": "100%",
    "maxWidth": 70,
    "width": "100%",
    "toolTipPaddingBottom": 4,
    "toolTipTextShadowOpacity": 0,
    "transparencyActive": true,
    "toolTipPaddingTop": 4,
    "toolTip": "Play Video",
    "toolTipFontSize": 14,
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
    "minHeight": 25,
    "class": "IconButton",
    "click": "this.setMediaBehaviour(this.playList_598450B7_429B_0E6E_41CA_1C0E2BF7C71C, 0); this.MainViewerVideoPlayer.play()",
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
    "minWidth": 25,
    "toolTipFontFamily": "Arial",
    "shadow": false
   },
   "this.IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED",
   {
    "verticalAlign": "middle",
    "paddingRight": 0,
    "mode": "push",
    "toolTipPaddingRight": 6,
    "paddingLeft": 0,
    "iconURL": "skin/IconButton_2FC9210C_3E8F_C4D4_41A7_10D1404CA49B.png",
    "height": "85%",
    "maxWidth": 70,
    "width": "85%",
    "toolTipPaddingBottom": 4,
    "toolTipTextShadowOpacity": 0,
    "transparencyActive": true,
    "toolTipPaddingTop": 4,
    "toolTip": "FLoor Plan",
    "toolTipFontSize": 14,
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
    "minHeight": 25,
    "class": "IconButton",
    "click": "this.setComponentVisibility(this.Container_53347472_4288_F6E6_4196_D7457B47D2CF, true, 0, this.effect_51CB7B74_4299_12E2_41B4_829087983DE5, 'showEffect', false)",
    "toolTipBorderRadius": 3,
    "paddingBottom": 0,
    "toolTipTextShadowBlurRadius": 3,
    "cursor": "hand",
    "toolTipFontWeight": "normal",
    "id": "IconButton_2FC9210C_3E8F_C4D4_41A7_10D1404CA49B",
    "toolTipBackgroundColor": "#000000",
    "maxHeight": 70,
    "paddingTop": 0,
    "toolTipShadowHorizontalLength": 0,
    "toolTipShadowSpread": 0,
    "toolTipShadowColor": "#333333",
    "toolTipShadowBlurRadius": 3,
    "pressedIconURL": "skin/IconButton_2FC9210C_3E8F_C4D4_41A7_10D1404CA49B_pressed.png",
    "backgroundOpacity": 0,
    "toolTipFontColor": "#606060",
    "minWidth": 25,
    "toolTipFontFamily": "Arial",
    "shadow": false
   },
   {
    "verticalAlign": "middle",
    "paddingRight": 0,
    "mode": "toggle",
    "toolTipPaddingRight": 6,
    "paddingLeft": 0,
    "iconURL": "skin/IconButton_843BBEF5_8E22_690F_419D_28CBDD771ACC.png",
    "height": "100%",
    "maxWidth": 70,
    "width": "100%",
    "toolTipPaddingBottom": 4,
    "toolTipTextShadowOpacity": 0,
    "transparencyActive": true,
    "toolTipPaddingTop": 4,
    "toolTip": "Panorama List",
    "toolTipFontSize": 14,
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
    "minHeight": 25,
    "class": "IconButton",
    "click": "if(!this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472.get('visible')){ this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, true, 0, this.effect_15DDF232_3E91_44CF_41AB_F8C3E6067377, 'showEffect', false) } else if(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472.get('visible')){ this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, false, 0, this.effect_15DDE232_3E91_44CF_41B1_14501B4EC17A, 'hideEffect', false) }",
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
    "minWidth": 25,
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
  "height": 50,
  "maxWidth": 500,
  "width": 500,
  "borderRadius": 5,
  "borderSize": 0,
  "gap": 5,
  "contentOpaque": false,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "minHeight": 55,
  "horizontalAlign": "right",
  "top": "3%",
  "layout": "horizontal",
  "paddingBottom": 0,
  "class": "Container",
  "id": "Container_807F782A_8E23_A905_41DE_623121285A09",
  "maxHeight": 55,
  "paddingTop": 0,
  "backgroundOpacity": 0,
  "minWidth": 500,
  "right": "1.5%",
  "children": [
   {
    "scrollBarColor": "#000000",
    "overflow": "visible",
    "scrollBarOpacity": 0.5,
    "paddingRight": 0,
    "verticalAlign": "middle",
    "paddingLeft": 0,
    "height": 55,
    "width": 400,
    "borderRadius": 0,
    "borderSize": 0,
    "gap": 0,
    "contentOpaque": false,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "minHeight": 55,
    "horizontalAlign": "right",
    "class": "Container",
    "layout": "horizontal",
    "visible": false,
    "paddingBottom": 0,
    "id": "Container_80D3CF90_8E26_E705_41E0_E47025A2C106",
    "maxHeight": 55,
    "paddingTop": 0,
    "backgroundOpacity": 0,
    "minWidth": 100,
    "children": [
     "this.IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37",
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "mode": "toggle",
      "toolTipPaddingRight": 6,
      "paddingLeft": 0,
      "iconURL": "skin/IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA.png",
      "height": "100%",
      "maxWidth": 60,
      "width": "100%",
      "toolTipPaddingBottom": 4,
      "toolTipTextShadowOpacity": 0,
      "transparencyActive": true,
      "toolTipPaddingTop": 4,
      "toolTip": "Full Screen",
      "toolTipFontSize": 14,
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
      "maxHeight": 60,
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
      "height": "100%",
      "maxWidth": 60,
      "width": "100%",
      "toolTipPaddingBottom": 4,
      "toolTipTextShadowOpacity": 0,
      "transparencyActive": true,
      "toolTipPaddingTop": 4,
      "toolTip": "Audio On/Off",
      "toolTipFontSize": 14,
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
      "maxHeight": 60,
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
    "verticalAlign": "middle",
    "paddingRight": 0,
    "mode": "toggle",
    "toolTipPaddingRight": 6,
    "paddingLeft": 0,
    "iconURL": "skin/IconButton_811D89E1_8E3D_AB07_4191_94003C90B2FF.png",
    "height": "100%",
    "maxWidth": 55,
    "width": "100%",
    "toolTipPaddingBottom": 4,
    "toolTipTextShadowOpacity": 0,
    "transparencyActive": true,
    "toolTipPaddingTop": 4,
    "toolTip": "Settings",
    "toolTipFontSize": 14,
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
    "minHeight": 55,
    "class": "IconButton",
    "click": "if(!this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, true, 0, this.effect_32C91197_3F22_3110_4181_9E76B593FBFE, 'showEffect', false) } else if(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, false, 0, this.effect_32C92197_3F22_3110_419D_E2E21968F16F, 'hideEffect', false) }",
    "toolTipBorderRadius": 3,
    "paddingBottom": 0,
    "toolTipTextShadowBlurRadius": 3,
    "cursor": "hand",
    "toolTipFontWeight": "normal",
    "id": "IconButton_811D89E1_8E3D_AB07_4191_94003C90B2FF",
    "toolTipBackgroundColor": "#000000",
    "maxHeight": 55,
    "paddingTop": 0,
    "toolTipShadowHorizontalLength": 0,
    "toolTipShadowSpread": 0,
    "toolTipShadowColor": "#333333",
    "toolTipShadowBlurRadius": 3,
    "backgroundOpacity": 0,
    "toolTipFontColor": "#606060",
    "minWidth": 55,
    "toolTipFontFamily": "Arial",
    "shadow": false
   }
  ],
  "shadow": false,
  "scrollBarVisible": "rollOver"
 },
 {
  "verticalAlign": "top",
  "itemBackgroundColorRatios": [],
  "paddingRight": 5,
  "itemLabelFontFamily": "Arial",
  "paddingLeft": 5,
  "maxWidth": 105,
  "itemThumbnailHeight": 75,
  "backgroundColor": [
   "#000000"
  ],
  "gap": 5,
  "selectedItemBackgroundColor": [],
  "scrollBarWidth": 7,
  "scrollBarMargin": 4,
  "playList": "this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist",
  "horizontalAlign": "left",
  "itemHorizontalAlign": "center",
  "minHeight": 100,
  "class": "ThumbnailList",
  "layout": "vertical",
  "selectedItemLabelFontStyle": "italic",
  "paddingBottom": 5,
  "itemMode": "normal",
  "backgroundColorRatios": [
   0
  ],
  "itemLabelFontColor": "#FFFFFF",
  "rollOverItemLabelFontColor": "#FFFFFF",
  "rollOverItemLabelFontWeight": "bold",
  "itemPaddingBottom": 3,
  "paddingTop": 5,
  "selectedItemLabelFontColor": "#FFFFFF",
  "itemThumbnailScaleMode": "fit_outside",
  "selectedItemLabelTextDecoration": "underline",
  "minWidth": 90,
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
  "selectedItemThumbnailShadowHorizontalLength": 0,
  "width": 105,
  "itemLabelFontStyle": "normal",
  "itemPaddingRight": 3,
  "itemThumbnailWidth": 75,
  "borderRadius": 3,
  "selectedItemThumbnailShadowBlurRadius": 10,
  "itemLabelHorizontalAlign": "center",
  "itemPaddingLeft": 3,
  "selectedItemLabelFontSize": 12,
  "borderSize": 0,
  "itemBorderRadius": 0,
  "selectedItemThumbnailShadow": true,
  "selectedItemThumbnailShadowOpacity": 0.73,
  "selectedItemBorderSize": 0,
  "itemPaddingTop": 3,
  "selectedItemBorderRadius": 0,
  "top": "15%",
  "itemVerticalAlign": "middle",
  "itemBackgroundOpacity": 0,
  "bottom": "15%",
  "id": "ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472",
  "selectedItemBackgroundColorRatios": [],
  "itemLabelGap": 9,
  "selectedItemLabelFontWeight": "bold",
  "itemBackgroundColorDirection": "vertical",
  "itemOpacity": 1,
  "itemBackgroundColor": [],
  "itemLabelFontSize": 12,
  "selectedItemBackgroundOpacity": 0,
  "selectedItemThumbnailShadowVerticalLength": 0,
  "itemLabelPosition": "bottom",
  "backgroundOpacity": 0.25,
  "right": "1.5%",
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
  "minHeight": 50,
  "top": "2%",
  "visible": false,
  "paddingBottom": 0,
  "class": "IconButton",
  "cursor": "hand",
  "id": "IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB",
  "maxHeight": 50,
  "paddingTop": 0,
  "backgroundOpacity": 0,
  "minWidth": 50,
  "right": "2%",
  "shadow": false
 },
 {
  "backgroundColorDirection": "vertical",
  "overflow": "scroll",
  "scrollBarOpacity": 0.5,
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "verticalAlign": "top",
  "paddingRight": 0,
  "scrollBarColor": "#000000",
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
  "bottom": "0%",
  "id": "Container_53347472_4288_F6E6_4196_D7457B47D2CF",
  "backgroundColorRatios": [
   0,
   1
  ],
  "paddingTop": 0,
  "left": "0%",
  "backgroundOpacity": 0.3,
  "minWidth": 1,
  "right": "0%",
  "children": [
   "this.MapViewer",
   {
    "verticalAlign": "middle",
    "paddingRight": 0,
    "mode": "push",
    "paddingLeft": 0,
    "iconURL": "skin/IconButton_50D1A26C_4289_72E1_41CD_2B557DFCC24F.png",
    "height": "5.91%",
    "maxWidth": 50,
    "width": "5.07%",
    "transparencyActive": true,
    "borderRadius": 0,
    "borderSize": 0,
    "rollOverIconURL": "skin/IconButton_50D1A26C_4289_72E1_41CD_2B557DFCC24F_rollover.png",
    "horizontalAlign": "center",
    "minHeight": 50,
    "top": "2%",
    "click": "this.setComponentVisibility(this.Container_53347472_4288_F6E6_4196_D7457B47D2CF, false, 0, this.effect_500E3733_4297_3267_41C9_4935C0BEBF39, 'hideEffect', false)",
    "paddingBottom": 0,
    "class": "IconButton",
    "cursor": "hand",
    "id": "IconButton_50D1A26C_4289_72E1_41CD_2B557DFCC24F",
    "maxHeight": 50,
    "paddingTop": 0,
    "backgroundOpacity": 0,
    "minWidth": 50,
    "right": "2%",
    "shadow": false
   }
  ],
  "shadow": false,
  "scrollBarVisible": "rollOver"
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
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "unregisterKey": function(key){  delete window[key]; },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "registerKey": function(key, value){  window[key] = value; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio) delete audios[audio.get('id')]; } if(audio) audio.stop(); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "existsKey": function(key){  return key in window; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getKey": function(key){  return window[key]; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); }
 },
 "backgroundPreloadEnabled": true,
 "paddingTop": 0,
 "gap": 10,
 "start": "this.playAudioList([this.audio_15B68E59_3D54_1663_4199_CC0245D4ECA1]); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37], 'cardboardAvailable'); this.syncPlaylists([this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); this.playList_59F5E0C7_429B_0E2F_41D0_3F8200431ED7.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA].forEach(function(component) { component.set('visible', false); }) }",
 "minWidth": 20,
 "shadow": false,
 "buttonToggleFullscreen": "this.IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA",
 "scrollBarVisible": "rollOver"
})