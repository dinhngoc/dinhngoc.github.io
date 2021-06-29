TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "viewerArea": "this.MainViewer",
  "id": "MainViewerVideoPlayer",
  "buttonStop": [
   {
    "paddingLeft": 0,
    "iconURL": "skin/IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4.png",
    "verticalAlign": "middle",
    "mode": "push",
    "paddingTop": 0,
    "height": "5.48%",
    "width": "3.03%",
    "class": "IconButton",
    "transparencyActive": true,
    "paddingRight": 0,
    "click": "this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, false, 0, this.effect_9B0AF4E2_96C4_F045_41D3_0E00FEE03A15, 'hideEffect', false)",
    "borderRadius": 0,
    "horizontalAlign": "center",
    "minWidth": 50,
    "top": "2%",
    "cursor": "hand",
    "maxWidth": 50,
    "borderSize": 0,
    "id": "IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4",
    "backgroundOpacity": 0,
    "minHeight": 50,
    "paddingBottom": 0,
    "shadow": false,
    "maxHeight": 50,
    "rollOverIconURL": "skin/IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4_rollover.png",
    "right": "2%"
   },
   "this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB"
  ],
  "displayPlaybackBar": true,
  "buttonPlay": {
   "paddingLeft": 0,
   "iconURL": "skin/IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED.png",
   "verticalAlign": "middle",
   "toolTipBorderRadius": 3,
   "toolTipShadowOpacity": 1,
   "mode": "push",
   "paddingTop": 0,
   "height": "100%",
   "width": "100%",
   "toolTipBorderSize": 1,
   "toolTipBorderColor": "#767676",
   "toolTipTextShadowColor": "#000000",
   "toolTipPaddingLeft": 6,
   "toolTipBackgroundColor": "#000000",
   "class": "IconButton",
   "transparencyActive": true,
   "toolTipOpacity": 0.7,
   "paddingRight": 0,
   "toolTipShadowVerticalLength": 0,
   "click": "this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, true, 0, this.effect_98AADBB0_96C5_F0C5_41B2_1C4D08E503DB, 'showEffect', false); this.playList_5920C5D2_5728_BD22_41B6_79E95B6542FD.set('selectedIndex', 0)",
   "toolTipTextShadowBlurRadius": 3,
   "borderRadius": 0,
   "horizontalAlign": "center",
   "toolTipPaddingBottom": 4,
   "minWidth": 25,
   "cursor": "hand",
   "maxWidth": 70,
   "visible": false,
   "toolTipFontSize": 14,
   "borderSize": 0,
   "toolTipShadowHorizontalLength": 0,
   "toolTipShadowColor": "#333333",
   "toolTipShadowBlurRadius": 3,
   "toolTipFontWeight": "normal",
   "id": "IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED",
   "toolTipShadowSpread": 0,
   "toolTipTextShadowOpacity": 0,
   "backgroundOpacity": 0,
   "minHeight": 25,
   "paddingBottom": 0,
   "toolTipFontFamily": "Arial",
   "toolTipFontColor": "#606060",
   "shadow": false,
   "maxHeight": 70,
   "toolTipPaddingTop": 4,
   "rollOverIconURL": "skin/IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED_rollover.png",
   "toolTipPaddingRight": 6,
   "toolTip": "See Photos",
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
   "progressBarOpacity": 1,
   "playbackBarHeight": 10,
   "playbackBarHeadWidth": 6,
   "playbackBarProgressBorderSize": 0,
   "class": "ViewerArea",
   "playbackBarBackgroundColorDirection": "vertical",
   "paddingRight": 0,
   "playbackBarRight": 0,
   "playbackBarHeadShadow": true,
   "shadow": false,
   "toolTipShadowVerticalLength": 0,
   "toolTipPaddingBottom": 4,
   "progressBackgroundOpacity": 1,
   "progressBarBorderSize": 0,
   "progressBarBorderRadius": 0,
   "progressBorderRadius": 0,
   "toolTipFontWeight": "normal",
   "toolTipFontSize": 14,
   "playbackBarProgressBorderRadius": 0,
   "toolTipShadowColor": "#333333",
   "toolTipShadowBlurRadius": 3,
   "toolTipShadowSpread": 0,
   "toolTipTextShadowOpacity": 0,
   "progressBottom": 2,
   "minHeight": 1,
   "paddingBottom": 0,
   "transitionMode": "blending",
   "toolTipFontColor": "#606060",
   "progressHeight": 10,
   "playbackBarProgressBackgroundColorRatios": [
    0
   ],
   "playbackBarBorderRadius": 0,
   "playbackBarProgressBorderColor": "#000000",
   "playbackBarHeadShadowVerticalLength": 0,
   "toolTipPaddingRight": 6,
   "paddingLeft": 0,
   "playbackBarProgressBackgroundColor": [
    "#3399FF"
   ],
   "toolTipBorderRadius": 3,
   "playbackBarHeadBackgroundColor": [
    "#111111",
    "#666666"
   ],
   "progressLeft": 0,
   "paddingTop": 0,
   "playbackBarHeadBorderRadius": 0,
   "playbackBarBorderColor": "#FFFFFF",
   "playbackBarHeadShadowBlurRadius": 3,
   "playbackBarHeadBorderColor": "#000000",
   "progressBackgroundColorRatios": [
    0
   ],
   "playbackBarProgressOpacity": 1,
   "toolTipBorderSize": 1,
   "toolTipBorderColor": "#767676",
   "height": "100%",
   "toolTipTextShadowColor": "#000000",
   "toolTipPaddingLeft": 6,
   "playbackBarHeadBackgroundColorDirection": "vertical",
   "playbackBarBackgroundOpacity": 1,
   "playbackBarBorderSize": 0,
   "playbackBarHeadBackgroundColorRatios": [
    0,
    1
   ],
   "toolTipBackgroundColor": "#000000",
   "playbackBarLeft": 0,
   "playbackBarHeadHeight": 15,
   "borderRadius": 0,
   "toolTipTextShadowBlurRadius": 3,
   "toolTipOpacity": 0.7,
   "width": "100%",
   "playbackBarOpacity": 1,
   "playbackBarHeadShadowColor": "#000000",
   "minWidth": 1,
   "playbackBarHeadShadowHorizontalLength": 0,
   "playbackBarHeadBorderSize": 0,
   "progressBarBackgroundColorRatios": [
    0
   ],
   "top": "0%",
   "progressBarBorderColor": "#000000",
   "progressRight": 0,
   "playbackBarHeadOpacity": 1,
   "progressOpacity": 1,
   "borderSize": 0,
   "progressBarBackgroundColorDirection": "vertical",
   "id": "ViewerAreaLabeled_9FD7235A_96CD_9045_41D9_23A3BCBDB1C6",
   "progressBackgroundColorDirection": "vertical",
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
   "paddingLeft": 0,
   "verticalAlign": "middle",
   "mode": "push",
   "paddingTop": 0,
   "width": "4.24%",
   "class": "IconButton",
   "transparencyActive": true,
   "borderRadius": 0,
   "paddingRight": 0,
   "horizontalAlign": "center",
   "minWidth": 70,
   "top": "40%",
   "cursor": "hand",
   "maxWidth": 70,
   "bottom": "40%",
   "borderSize": 0,
   "id": "IconButton_9FEA51EA_96CC_905A_41D3_F42DB0CD0A74",
   "backgroundOpacity": 0,
   "minHeight": 70,
   "paddingBottom": 0,
   "shadow": false,
   "left": "1%",
   "maxHeight": 70,
   "rollOverIconURL": "skin/IconButton_9FEA51EA_96CC_905A_41D3_F42DB0CD0A74_rollover.png",
   "iconURL": "skin/IconButton_9FEA51EA_96CC_905A_41D3_F42DB0CD0A74.png"
  },
  "buttonNext": {
   "paddingLeft": 0,
   "verticalAlign": "middle",
   "mode": "push",
   "paddingTop": 0,
   "width": "4.24%",
   "class": "IconButton",
   "transparencyActive": true,
   "borderRadius": 0,
   "paddingRight": 0,
   "horizontalAlign": "center",
   "minWidth": 70,
   "top": "40%",
   "cursor": "hand",
   "maxWidth": 70,
   "bottom": "40%",
   "borderSize": 0,
   "id": "IconButton_9FB9BD3F_96C5_703B_41D7_65AEE6E85A96",
   "backgroundOpacity": 0,
   "minHeight": 70,
   "paddingBottom": 0,
   "shadow": false,
   "maxHeight": 70,
   "rollOverIconURL": "skin/IconButton_9FB9BD3F_96C5_703B_41D7_65AEE6E85A96_rollover.png",
   "right": "1%",
   "iconURL": "skin/IconButton_9FB9BD3F_96C5_703B_41D7_65AEE6E85A96.png"
  },
  "buttonPlay": "this.IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED",
  "buttonStop": [
   "this.IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4",
   "this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB"
  ],
  "class": "PhotoAlbumPlayer"
 },
 {
  "adjacentPanoramas": [
   {
    "panorama": {
     "adjacentPanoramas": [
      {
       "panorama": "this.panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E",
       "distance": 1,
       "yaw": -162.92,
       "class": "AdjacentPanorama",
       "backwardYaw": -171.35
      },
      {
       "panorama": {
        "adjacentPanoramas": [
         {
          "panorama": {
           "adjacentPanoramas": [
            {
             "panorama": "this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF",
             "distance": 1,
             "yaw": -163.02,
             "class": "AdjacentPanorama",
             "backwardYaw": 82.89
            },
            {
             "panorama": "this.panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D",
             "distance": 1,
             "yaw": -162.92,
             "class": "AdjacentPanorama",
             "backwardYaw": -172.22
            },
            {
             "panorama": {
              "adjacentPanoramas": [
               {
                "panorama": "this.panorama_46009756_572D_4167_41C6_2B49BD1EF7CE",
                "distance": 1,
                "yaw": -170.58,
                "class": "AdjacentPanorama",
                "backwardYaw": -162.92
               },
               {
                "panorama": "this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF",
                "distance": 1,
                "yaw": 167.85,
                "class": "AdjacentPanorama",
                "backwardYaw": 164.88
               },
               {
                "panorama": "this.panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D",
                "distance": 1,
                "yaw": -170.58,
                "class": "AdjacentPanorama",
                "backwardYaw": -172.22
               },
               {
                "panorama": {
                 "adjacentPanoramas": [
                  {
                   "panorama": "this.panorama_46009756_572D_4167_41C6_2B49BD1EF7CE",
                   "distance": 1,
                   "yaw": -171.96,
                   "class": "AdjacentPanorama",
                   "backwardYaw": -162.92
                  },
                  {
                   "panorama": "this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF",
                   "distance": 1,
                   "yaw": -171.96,
                   "class": "AdjacentPanorama",
                   "backwardYaw": -162.92
                  },
                  {
                   "panorama": "this.panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D",
                   "distance": 1,
                   "yaw": -164.38,
                   "class": "AdjacentPanorama",
                   "backwardYaw": -20.13
                  },
                  {
                   "panorama": "this.panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C",
                   "distance": 1,
                   "yaw": -171.96,
                   "class": "AdjacentPanorama",
                   "backwardYaw": -170.58
                  },
                  {
                   "panorama": "this.panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E",
                   "distance": 1,
                   "yaw": -171.96,
                   "class": "AdjacentPanorama",
                   "backwardYaw": -171.35
                  },
                  {
                   "panorama": {
                    "adjacentPanoramas": [
                     {
                      "panorama": "this.panorama_46009756_572D_4167_41C6_2B49BD1EF7CE",
                      "distance": 1,
                      "yaw": -172.21,
                      "class": "AdjacentPanorama",
                      "backwardYaw": -162.92
                     },
                     {
                      "panorama": "this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF",
                      "distance": 1,
                      "yaw": 108.57,
                      "class": "AdjacentPanorama",
                      "backwardYaw": 34.76
                     },
                     {
                      "panorama": "this.panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D",
                      "distance": 1,
                      "yaw": -172.21,
                      "class": "AdjacentPanorama",
                      "backwardYaw": -172.22
                     },
                     {
                      "panorama": "this.panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C",
                      "distance": 1,
                      "yaw": -172.21,
                      "class": "AdjacentPanorama",
                      "backwardYaw": -170.58
                     },
                     {
                      "panorama": "this.panorama_47B53902_572E_CEDF_41CC_C256D31A5443",
                      "distance": 1,
                      "yaw": -172.21,
                      "class": "AdjacentPanorama",
                      "backwardYaw": -171.96
                     },
                     {
                      "panorama": "this.panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E",
                      "distance": 1,
                      "yaw": -172.21,
                      "class": "AdjacentPanorama",
                      "backwardYaw": -171.35
                     },
                     {
                      "panorama": {
                       "adjacentPanoramas": [
                        {
                         "panorama": "this.panorama_46009756_572D_4167_41C6_2B49BD1EF7CE",
                         "distance": 1,
                         "yaw": -170.2,
                         "class": "AdjacentPanorama",
                         "backwardYaw": -162.92
                        },
                        {
                         "panorama": "this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF",
                         "distance": 1,
                         "yaw": 111.23,
                         "class": "AdjacentPanorama",
                         "backwardYaw": 35.02
                        },
                        {
                         "panorama": "this.panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D",
                         "distance": 1,
                         "yaw": -170.2,
                         "class": "AdjacentPanorama",
                         "backwardYaw": -172.22
                        },
                        {
                         "panorama": "this.panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C",
                         "distance": 1,
                         "yaw": -170.2,
                         "class": "AdjacentPanorama",
                         "backwardYaw": -170.58
                        },
                        {
                         "panorama": "this.panorama_47B53902_572E_CEDF_41CC_C256D31A5443",
                         "distance": 1,
                         "yaw": 110.98,
                         "class": "AdjacentPanorama",
                         "backwardYaw": 41.78
                        },
                        {
                         "panorama": "this.panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E",
                         "distance": 1,
                         "yaw": -170.2,
                         "class": "AdjacentPanorama",
                         "backwardYaw": -171.35
                        },
                        {
                         "panorama": "this.panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D",
                         "distance": 1,
                         "yaw": -170.2,
                         "class": "AdjacentPanorama",
                         "backwardYaw": -172.21
                        },
                        {
                         "panorama": {
                          "adjacentPanoramas": [
                           {
                            "panorama": "this.panorama_46009756_572D_4167_41C6_2B49BD1EF7CE",
                            "distance": 1,
                            "yaw": -170.68,
                            "class": "AdjacentPanorama",
                            "backwardYaw": -162.92
                           },
                           {
                            "panorama": "this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF",
                            "distance": 1,
                            "yaw": -170.68,
                            "class": "AdjacentPanorama",
                            "backwardYaw": -162.92
                           },
                           {
                            "panorama": "this.panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D",
                            "distance": 1,
                            "yaw": -11.64,
                            "class": "AdjacentPanorama",
                            "backwardYaw": -95.85
                           },
                           {
                            "panorama": "this.panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C",
                            "distance": 1,
                            "yaw": -170.68,
                            "class": "AdjacentPanorama",
                            "backwardYaw": -170.58
                           },
                           {
                            "panorama": "this.panorama_47B53902_572E_CEDF_41CC_C256D31A5443",
                            "distance": 1,
                            "yaw": -170.68,
                            "class": "AdjacentPanorama",
                            "backwardYaw": -171.96
                           },
                           {
                            "panorama": "this.panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E",
                            "distance": 1,
                            "yaw": 2.3,
                            "class": "AdjacentPanorama",
                            "backwardYaw": -172.64
                           },
                           {
                            "panorama": "this.panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D",
                            "distance": 1,
                            "yaw": -170.68,
                            "class": "AdjacentPanorama",
                            "backwardYaw": -172.21
                           },
                           {
                            "panorama": "this.panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC",
                            "distance": 1,
                            "yaw": -170.68,
                            "class": "AdjacentPanorama",
                            "backwardYaw": -170.2
                           },
                           {
                            "panorama": {
                             "adjacentPanoramas": [
                              {
                               "panorama": "this.panorama_46009756_572D_4167_41C6_2B49BD1EF7CE",
                               "distance": 1,
                               "yaw": -173.12,
                               "class": "AdjacentPanorama",
                               "backwardYaw": -162.92
                              },
                              {
                               "panorama": "this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF",
                               "distance": 1,
                               "yaw": -173.12,
                               "class": "AdjacentPanorama",
                               "backwardYaw": -162.92
                              },
                              {
                               "panorama": "this.panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D",
                               "distance": 1,
                               "yaw": -173.12,
                               "class": "AdjacentPanorama",
                               "backwardYaw": -172.22
                              },
                              {
                               "panorama": "this.panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C",
                               "distance": 1,
                               "yaw": -173.12,
                               "class": "AdjacentPanorama",
                               "backwardYaw": -170.58
                              },
                              {
                               "panorama": "this.panorama_47B53902_572E_CEDF_41CC_C256D31A5443",
                               "distance": 1,
                               "yaw": -173.12,
                               "class": "AdjacentPanorama",
                               "backwardYaw": -171.96
                              },
                              {
                               "panorama": "this.panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E",
                               "distance": 1,
                               "yaw": -173.12,
                               "class": "AdjacentPanorama",
                               "backwardYaw": -171.35
                              },
                              {
                               "panorama": "this.panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D",
                               "distance": 1,
                               "yaw": 35.94,
                               "class": "AdjacentPanorama",
                               "backwardYaw": 109.07
                              },
                              {
                               "panorama": "this.panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC",
                               "distance": 1,
                               "yaw": -173.12,
                               "class": "AdjacentPanorama",
                               "backwardYaw": -170.2
                              },
                              {
                               "panorama": "this.panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E",
                               "distance": 1,
                               "yaw": -173.12,
                               "class": "AdjacentPanorama",
                               "backwardYaw": -170.68
                              }
                             ],
                             "id": "panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116",
                             "vfov": 180,
                             "partial": false,
                             "pitch": 0,
                             "hfovMax": 120,
                             "label": "08_Rooftop",
                             "thumbnailUrl": "media/panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116_t.jpg",
                             "class": "Panorama",
                             "hfov": 360,
                             "frames": [
                              {
                               "overlays": [
                                {
                                 "rollOverDisplay": false,
                                 "id": "overlay_47EE6DFC_55B3_68B8_41D1_9C870BBC84DA",
                                 "enabledInCardboard": true,
                                 "useHandCursor": true,
                                 "areas": [
                                  {
                                   "displayTooltipInTouchScreens": true,
                                   "click": "this.startPanoramaWithCamera(this.panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D, this.camera_58F83A1D_5728_B726_41CB_E6BF76621355); this.mainPlayList.set('selectedIndex', 8)",
                                   "mapColor": "#FF0000",
                                   "toolTip": "07_2Beds Room",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "maps": [
                                  {
                                   "hfov": 15.27,
                                   "yaw": 35.94,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 64,
                                      "width": 64,
                                      "url": "media/panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116_0_HS_6_0_0_map.gif",
                                      "class": "ImageResourceLevel"
                                     }
                                    ]
                                   },
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": -11.73
                                  }
                                 ],
                                 "class": "HotspotPanoramaOverlay",
                                 "items": [
                                  {
                                   "yaw": 35.94,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 15.27,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 129,
                                      "width": 129,
                                      "url": "media/panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116_0_HS_6_0.png",
                                      "class": "ImageResourceLevel"
                                     }
                                    ]
                                   },
                                   "pitch": -11.73
                                  }
                                 ]
                                },
                                {
                                 "rollOverDisplay": true,
                                 "id": "overlay_47EE9DFC_55B3_68B8_41BE_F533FF904D14",
                                 "enabledInCardboard": true,
                                 "useHandCursor": true,
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E, this.camera_58C5CA34_5728_B766_41C7_E29421305261); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 5); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 4)",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "maps": [
                                  {
                                   "hfov": 0,
                                   "yaw": -173.12,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 1,
                                      "width": 1,
                                      "url": "media/panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116_0_HS_5_0_0_map.gif",
                                      "class": "ImageResourceLevel"
                                     }
                                    ]
                                   },
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": 85.84
                                  }
                                 ],
                                 "class": "HotspotPanoramaOverlay",
                                 "items": [
                                  {
                                   "yaw": -173.12,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 0,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 1,
                                      "width": 1,
                                      "url": "media/panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116_0_HS_5_0.png",
                                      "class": "ImageResourceLevel"
                                     }
                                    ]
                                   },
                                   "pitch": 85.84
                                  }
                                 ]
                                }
                               ],
                               "thumbnailUrl": "media/panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116_t.jpg",
                               "class": "SphericPanoramaFrame",
                               "sphere": {
                                "class": "ImageResource",
                                "levels": [
                                 {
                                  "height": 1500,
                                  "width": 3000,
                                  "url": "media/panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116_hq.jpeg",
                                  "class": "ImageResourceLevel"
                                 }
                                ]
                               }
                              }
                             ],
                             "hfovMin": 60
                            },
                            "distance": 1,
                            "yaw": -170.68,
                            "class": "AdjacentPanorama",
                            "backwardYaw": -173.12
                           }
                          ],
                          "id": "panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E",
                          "vfov": 180,
                          "partial": false,
                          "pitch": 0,
                          "hfovMax": 120,
                          "label": "02_Entrance",
                          "thumbnailUrl": "media/panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E_t.jpg",
                          "class": "Panorama",
                          "hfov": 360,
                          "frames": [
                           {
                            "overlays": [
                             {
                              "rollOverDisplay": false,
                              "id": "overlay_447F356F_5593_B9D8_41C7_F6DF7CCD3B4C",
                              "enabledInCardboard": true,
                              "useHandCursor": true,
                              "areas": [
                               {
                                "displayTooltipInTouchScreens": true,
                                "click": "this.startPanoramaWithCamera(this.panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D, this.camera_5836D971_5728_B5FF_41D1_CFCF45474395); this.mainPlayList.set('selectedIndex', 2)",
                                "mapColor": "#FF0000",
                                "toolTip": "03_Pool",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "maps": [
                               {
                                "hfov": 15.51,
                                "yaw": -11.64,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 64,
                                   "width": 64,
                                   "url": "media/panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E_0_HS_0_0_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ]
                                },
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": -6.08
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "items": [
                               {
                                "yaw": -11.64,
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 15.51,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 129,
                                   "width": 129,
                                   "url": "media/panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E_0_HS_0_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ]
                                },
                                "pitch": -6.08
                               }
                              ]
                             },
                             {
                              "rollOverDisplay": false,
                              "id": "overlay_447F256F_5593_B9D8_41CF_5C6A714CBEB7",
                              "enabledInCardboard": true,
                              "useHandCursor": true,
                              "areas": [
                               {
                                "displayTooltipInTouchScreens": true,
                                "click": "this.startPanoramaWithCamera(this.panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E, this.camera_586C8999_5728_B52F_41B8_5ABC299F59AC); this.mainPlayList.set('selectedIndex', 0)",
                                "mapColor": "#FF0000",
                                "toolTip": "01_Street View",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "maps": [
                               {
                                "hfov": 14.32,
                                "yaw": 2.3,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 64,
                                   "width": 64,
                                   "url": "media/panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E_0_HS_6_0_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ]
                                },
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": -23.35
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "items": [
                               {
                                "yaw": 2.3,
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 14.32,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 129,
                                   "width": 129,
                                   "url": "media/panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E_0_HS_6_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ]
                                },
                                "pitch": -23.35
                               }
                              ]
                             },
                             {
                              "rollOverDisplay": true,
                              "id": "overlay_447F056F_5593_B9D8_41CE_B187244AECBF",
                              "enabledInCardboard": true,
                              "useHandCursor": true,
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116, this.camera_585A59C3_5728_B523_41D0_E32C68C6141B); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 5); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 8)",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "maps": [
                               {
                                "hfov": 0,
                                "yaw": -170.68,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 1,
                                   "width": 1,
                                   "url": "media/panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E_0_HS_1_0_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ]
                                },
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": 83.2
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "items": [
                               {
                                "yaw": -170.68,
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 0,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 1,
                                   "width": 1,
                                   "url": "media/panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E_0_HS_1_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ]
                                },
                                "pitch": 83.2
                               }
                              ]
                             }
                            ],
                            "thumbnailUrl": "media/panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E_t.jpg",
                            "class": "SphericPanoramaFrame",
                            "sphere": {
                             "class": "ImageResource",
                             "levels": [
                              {
                               "height": 1500,
                               "width": 3000,
                               "url": "media/panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E_hq.jpeg",
                               "class": "ImageResourceLevel"
                              }
                             ]
                            }
                           }
                          ],
                          "hfovMin": 60
                         },
                         "distance": 1,
                         "yaw": -170.2,
                         "class": "AdjacentPanorama",
                         "backwardYaw": -170.68
                        },
                        {
                         "panorama": "this.panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116",
                         "distance": 1,
                         "yaw": -170.2,
                         "class": "AdjacentPanorama",
                         "backwardYaw": -173.12
                        }
                       ],
                       "id": "panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC",
                       "vfov": 180,
                       "partial": false,
                       "pitch": 0,
                       "hfovMax": 120,
                       "label": "05_1Bedroom",
                       "thumbnailUrl": "media/panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC_t.jpg",
                       "class": "Panorama",
                       "hfov": 360,
                       "frames": [
                        {
                         "overlays": [
                          {
                           "rollOverDisplay": false,
                           "id": "overlay_46165BEA_572E_C12E_41C3_9D907FE87C25",
                           "enabledInCardboard": true,
                           "useHandCursor": true,
                           "areas": [
                            {
                             "displayTooltipInTouchScreens": true,
                             "click": "this.startPanoramaWithCamera(this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF, this.camera_59A508EF_5728_B4E2_41B4_725A76462713); this.mainPlayList.set('selectedIndex', 5)",
                             "mapColor": "#FF0000",
                             "toolTip": "06_Master\u000a",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "maps": [
                            {
                             "hfov": 12.78,
                             "yaw": 111.23,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 54,
                                "width": 54,
                                "url": "media/panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC_0_HS_0_0_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ]
                             },
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": 14.57
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "items": [
                            {
                             "yaw": 111.23,
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 12.78,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 109,
                                "width": 109,
                                "url": "media/panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC_0_HS_0_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ]
                             },
                             "pitch": 14.57
                            }
                           ]
                          },
                          {
                           "rollOverDisplay": false,
                           "id": "overlay_4616BBEA_572E_C12E_41AF_EC82A979FD75",
                           "enabledInCardboard": true,
                           "useHandCursor": true,
                           "areas": [
                            {
                             "displayTooltipInTouchScreens": true,
                             "click": "this.startPanoramaWithCamera(this.panorama_47B53902_572E_CEDF_41CC_C256D31A5443, this.camera_59938916_5728_B522_41B1_8076DC0B6359); this.mainPlayList.set('selectedIndex', 3)",
                             "mapColor": "#FF0000",
                             "toolTip": "04_Living Room",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "maps": [
                            {
                             "hfov": 10.99,
                             "yaw": 110.98,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 54,
                                "width": 54,
                                "url": "media/panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC_0_HS_2_0_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ]
                             },
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": -33.67
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "items": [
                            {
                             "yaw": 110.98,
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 10.99,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 109,
                                "width": 109,
                                "url": "media/panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC_0_HS_2_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ]
                             },
                             "pitch": -33.67
                            }
                           ]
                          },
                          {
                           "rollOverDisplay": true,
                           "id": "overlay_4616ABEA_572E_C12E_41A1_596C274FCBFE",
                           "enabledInCardboard": true,
                           "useHandCursor": true,
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116, this.camera_59DB9948_5728_B52E_41C9_DA9BD2BD04B1); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 8); this.mainPlayList.set('selectedIndex', 9)",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "maps": [
                            {
                             "hfov": 0,
                             "yaw": -170.2,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 1,
                                "width": 1,
                                "url": "media/panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC_0_HS_1_0_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ]
                             },
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": 81.21
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "items": [
                            {
                             "yaw": -170.2,
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 0,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 1,
                                "width": 1,
                                "url": "media/panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC_0_HS_1_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ]
                             },
                             "pitch": 81.21
                            }
                           ]
                          }
                         ],
                         "thumbnailUrl": "media/panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC_t.jpg",
                         "class": "SphericPanoramaFrame",
                         "sphere": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "height": 1500,
                            "width": 3000,
                            "url": "media/panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC_hq.jpeg",
                            "class": "ImageResourceLevel"
                           }
                          ]
                         }
                        }
                       ],
                       "hfovMin": 60
                      },
                      "distance": 1,
                      "yaw": -172.21,
                      "class": "AdjacentPanorama",
                      "backwardYaw": -170.2
                     },
                     {
                      "panorama": "this.panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E",
                      "distance": 1,
                      "yaw": -172.21,
                      "class": "AdjacentPanorama",
                      "backwardYaw": -170.68
                     },
                     {
                      "panorama": "this.panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116",
                      "distance": 1,
                      "yaw": 109.07,
                      "class": "AdjacentPanorama",
                      "backwardYaw": 35.94
                     }
                    ],
                    "id": "panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D",
                    "vfov": 180,
                    "partial": false,
                    "pitch": 0,
                    "hfovMax": 120,
                    "label": "07_2Beds Room",
                    "thumbnailUrl": "media/panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D_t.jpg",
                    "class": "Panorama",
                    "hfov": 360,
                    "frames": [
                     {
                      "overlays": [
                       {
                        "rollOverDisplay": false,
                        "id": "overlay_4404034D_55AE_B9D8_41D4_07F6934855E0",
                        "enabledInCardboard": true,
                        "useHandCursor": true,
                        "areas": [
                         {
                          "displayTooltipInTouchScreens": true,
                          "click": "this.startPanoramaWithCamera(this.panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116, this.camera_5959A8DB_5728_B322_41D0_164DD9151BE2); this.mainPlayList.set('selectedIndex', 9)",
                          "mapColor": "#FF0000",
                          "toolTip": "08_Rooftop",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "maps": [
                         {
                          "hfov": 13.75,
                          "yaw": 109.07,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 39,
                             "width": 39,
                             "url": "media/panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D_0_HS_2_0_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ]
                          },
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": 17.23
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "items": [
                         {
                          "yaw": 109.07,
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 13.75,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 79,
                             "width": 79,
                             "url": "media/panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D_0_HS_2_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ]
                          },
                          "pitch": 17.23
                         }
                        ]
                       },
                       {
                        "rollOverDisplay": false,
                        "id": "overlay_4404134D_55AE_B9D8_41B9_1813EAE5CA83",
                        "enabledInCardboard": true,
                        "useHandCursor": true,
                        "areas": [
                         {
                          "displayTooltipInTouchScreens": true,
                          "click": "this.startPanoramaWithCamera(this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF, this.camera_5938F895_5728_B326_41CC_A8EB6E531E2F); this.mainPlayList.set('selectedIndex', 5)",
                          "mapColor": "#FF0000",
                          "toolTip": "06_Master",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "maps": [
                         {
                          "hfov": 11.94,
                          "yaw": 108.57,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 39,
                             "width": 39,
                             "url": "media/panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D_0_HS_0_0_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ]
                          },
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": -34.02
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "items": [
                         {
                          "yaw": 108.57,
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 11.94,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 79,
                             "width": 79,
                             "url": "media/panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D_0_HS_0_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ]
                          },
                          "pitch": -34.02
                         }
                        ]
                       },
                       {
                        "rollOverDisplay": true,
                        "id": "overlay_4404534D_55AE_B9D8_41B2_377AB17E4600",
                        "enabledInCardboard": true,
                        "useHandCursor": true,
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E, this.camera_594FD8D1_5728_B33E_41C4_BD1E50A48612); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 4)",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "maps": [
                         {
                          "hfov": 0,
                          "yaw": -172.21,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 1,
                             "width": 1,
                             "url": "media/panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D_0_HS_1_0_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ]
                          },
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": 81.71
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "items": [
                         {
                          "yaw": -172.21,
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 0,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 1,
                             "width": 1,
                             "url": "media/panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D_0_HS_1_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ]
                          },
                          "pitch": 81.71
                         }
                        ]
                       }
                      ],
                      "thumbnailUrl": "media/panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D_t.jpg",
                      "class": "SphericPanoramaFrame",
                      "sphere": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "height": 1000,
                         "width": 2000,
                         "url": "media/panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D_hq.jpeg",
                         "class": "ImageResourceLevel"
                        }
                       ]
                      }
                     }
                    ],
                    "hfovMin": 60
                   },
                   "distance": 1,
                   "yaw": -171.96,
                   "class": "AdjacentPanorama",
                   "backwardYaw": -172.21
                  },
                  {
                   "panorama": "this.panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC",
                   "distance": 1,
                   "yaw": 41.78,
                   "class": "AdjacentPanorama",
                   "backwardYaw": 110.98
                  },
                  {
                   "panorama": "this.panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E",
                   "distance": 1,
                   "yaw": -171.96,
                   "class": "AdjacentPanorama",
                   "backwardYaw": -170.68
                  },
                  {
                   "panorama": "this.panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116",
                   "distance": 1,
                   "yaw": -171.96,
                   "class": "AdjacentPanorama",
                   "backwardYaw": -173.12
                  }
                 ],
                 "id": "panorama_47B53902_572E_CEDF_41CC_C256D31A5443",
                 "vfov": 180,
                 "partial": false,
                 "pitch": 0,
                 "hfovMax": 120,
                 "label": "04_Living Room",
                 "thumbnailUrl": "media/panorama_47B53902_572E_CEDF_41CC_C256D31A5443_t.jpg",
                 "class": "Panorama",
                 "hfov": 360,
                 "frames": [
                  {
                   "overlays": [
                    {
                     "rollOverDisplay": false,
                     "id": "overlay_47B55902_572E_CEDF_41AF_5DD57D9CB811",
                     "enabledInCardboard": true,
                     "useHandCursor": true,
                     "areas": [
                      {
                       "displayTooltipInTouchScreens": true,
                       "click": "this.startPanoramaWithCamera(this.panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC, this.camera_5A424816_5728_B325_41D3_8E9239B169DF); this.mainPlayList.set('selectedIndex', 4)",
                       "mapColor": "#FF0000",
                       "toolTip": "05_1Bedroom",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "maps": [
                      {
                       "hfov": 17.93,
                       "yaw": 41.78,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 74,
                          "width": 74,
                          "url": "media/panorama_47B53902_572E_CEDF_41CC_C256D31A5443_0_HS_0_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ]
                       },
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -4.92
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "items": [
                      {
                       "yaw": 41.78,
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 17.93,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 149,
                          "width": 149,
                          "url": "media/panorama_47B53902_572E_CEDF_41CC_C256D31A5443_0_HS_0_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ]
                       },
                       "pitch": -4.92
                      }
                     ]
                    },
                    {
                     "rollOverDisplay": false,
                     "id": "overlay_47B54902_572E_CEDF_41B1_68F40224ADD4",
                     "enabledInCardboard": true,
                     "useHandCursor": true,
                     "areas": [
                      {
                       "displayTooltipInTouchScreens": true,
                       "click": "this.startPanoramaWithCamera(this.panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D, this.camera_5A1457EE_5728_BCE5_41D3_1B46FD16F27E); this.mainPlayList.set('selectedIndex', 2)",
                       "mapColor": "#FF0000",
                       "toolTip": "03_Pool",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "maps": [
                      {
                       "hfov": 18.09,
                       "yaw": -164.38,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 79,
                          "width": 79,
                          "url": "media/panorama_47B53902_572E_CEDF_41CC_C256D31A5443_0_HS_5_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ]
                       },
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -19.59
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "items": [
                      {
                       "yaw": -164.38,
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 18.09,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 159,
                          "width": 159,
                          "url": "media/panorama_47B53902_572E_CEDF_41CC_C256D31A5443_0_HS_5_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ]
                       },
                       "pitch": -19.59
                      }
                     ]
                    },
                    {
                     "rollOverDisplay": true,
                     "id": "overlay_47B57902_572E_CEDF_41D0_F28E9EC04E5B",
                     "enabledInCardboard": true,
                     "useHandCursor": true,
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116, this.camera_5AAA5829_5728_B36F_41C9_86EA42C430E3); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 8); this.mainPlayList.set('selectedIndex', 5)",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "maps": [
                      {
                       "hfov": 0,
                       "yaw": -171.96,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 1,
                          "width": 1,
                          "url": "media/panorama_47B53902_572E_CEDF_41CC_C256D31A5443_0_HS_1_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ]
                       },
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": 82.97
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "items": [
                      {
                       "yaw": -171.96,
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 0,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 1,
                          "width": 1,
                          "url": "media/panorama_47B53902_572E_CEDF_41CC_C256D31A5443_0_HS_1_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ]
                       },
                       "pitch": 82.97
                      }
                     ]
                    }
                   ],
                   "thumbnailUrl": "media/panorama_47B53902_572E_CEDF_41CC_C256D31A5443_t.jpg",
                   "class": "SphericPanoramaFrame",
                   "sphere": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "height": 1500,
                      "width": 3000,
                      "url": "media/panorama_47B53902_572E_CEDF_41CC_C256D31A5443_hq.jpeg",
                      "class": "ImageResourceLevel"
                     }
                    ]
                   }
                  }
                 ],
                 "hfovMin": 60
                },
                "distance": 1,
                "yaw": -170.58,
                "class": "AdjacentPanorama",
                "backwardYaw": -171.96
               },
               {
                "panorama": "this.panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E",
                "distance": 1,
                "yaw": -170.58,
                "class": "AdjacentPanorama",
                "backwardYaw": -171.35
               },
               {
                "panorama": "this.panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D",
                "distance": 1,
                "yaw": -170.58,
                "class": "AdjacentPanorama",
                "backwardYaw": -172.21
               },
               {
                "panorama": "this.panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC",
                "distance": 1,
                "yaw": -170.58,
                "class": "AdjacentPanorama",
                "backwardYaw": -170.2
               },
               {
                "panorama": "this.panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E",
                "distance": 1,
                "yaw": -170.58,
                "class": "AdjacentPanorama",
                "backwardYaw": -170.68
               },
               {
                "panorama": "this.panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116",
                "distance": 1,
                "yaw": -170.58,
                "class": "AdjacentPanorama",
                "backwardYaw": -173.12
               }
              ],
              "id": "panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C",
              "vfov": 180,
              "partial": false,
              "pitch": 0,
              "hfovMax": 120,
              "label": "06a_Balcony",
              "thumbnailUrl": "media/panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C_t.jpg",
              "class": "Panorama",
              "hfov": 360,
              "frames": [
               {
                "overlays": [
                 {
                  "rollOverDisplay": false,
                  "id": "overlay_442A1C56_55AD_AFC8_41D5_0D9EEC86CEFD",
                  "enabledInCardboard": true,
                  "useHandCursor": true,
                  "areas": [
                   {
                    "displayTooltipInTouchScreens": true,
                    "click": "this.startPanoramaWithCamera(this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF, this.camera_5BC9278D_5728_BD26_41D2_8CAE00396680); this.mainPlayList.set('selectedIndex', 5)",
                    "mapColor": "#FF0000",
                    "toolTip": "06_Master",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "maps": [
                   {
                    "hfov": 18.22,
                    "yaw": 167.85,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 89,
                       "width": 89,
                       "url": "media/panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C_0_HS_0_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -32.47
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "items": [
                   {
                    "yaw": 167.85,
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 18.22,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 179,
                       "width": 179,
                       "url": "media/panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C_0_HS_0_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "pitch": -32.47
                   }
                  ]
                 },
                 {
                  "rollOverDisplay": true,
                  "id": "overlay_442A7C56_55AD_AFC8_41D5_4AD267333E92",
                  "enabledInCardboard": true,
                  "useHandCursor": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116, this.camera_5A3527D1_5728_BD3E_417B_D4C1489634D8); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 8); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 7)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "maps": [
                   {
                    "hfov": 0,
                    "yaw": -170.58,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 1,
                       "width": 1,
                       "url": "media/panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C_0_HS_1_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": 85.29
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "items": [
                   {
                    "yaw": -170.58,
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 0,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 1,
                       "width": 1,
                       "url": "media/panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C_0_HS_1_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "pitch": 85.29
                   }
                  ]
                 }
                ],
                "thumbnailUrl": "media/panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C_t.jpg",
                "class": "SphericPanoramaFrame",
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "height": 1500,
                   "width": 3000,
                   "url": "media/panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C_hq.jpeg",
                   "class": "ImageResourceLevel"
                  }
                 ]
                }
               }
              ],
              "hfovMin": 60
             },
             "distance": 1,
             "yaw": -162.92,
             "class": "AdjacentPanorama",
             "backwardYaw": -170.58
            },
            {
             "panorama": "this.panorama_47B53902_572E_CEDF_41CC_C256D31A5443",
             "distance": 1,
             "yaw": -162.92,
             "class": "AdjacentPanorama",
             "backwardYaw": -171.96
            },
            {
             "panorama": "this.panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E",
             "distance": 1,
             "yaw": -162.92,
             "class": "AdjacentPanorama",
             "backwardYaw": -171.35
            },
            {
             "panorama": "this.panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D",
             "distance": 1,
             "yaw": -162.92,
             "class": "AdjacentPanorama",
             "backwardYaw": -172.21
            },
            {
             "panorama": "this.panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC",
             "distance": 1,
             "yaw": -162.92,
             "class": "AdjacentPanorama",
             "backwardYaw": -170.2
            },
            {
             "panorama": "this.panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E",
             "distance": 1,
             "yaw": -162.92,
             "class": "AdjacentPanorama",
             "backwardYaw": -170.68
            },
            {
             "panorama": "this.panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116",
             "distance": 1,
             "yaw": -162.92,
             "class": "AdjacentPanorama",
             "backwardYaw": -173.12
            }
           ],
           "id": "panorama_46009756_572D_4167_41C6_2B49BD1EF7CE",
           "vfov": 180,
           "partial": false,
           "pitch": 0,
           "hfovMax": 120,
           "label": "06b_WC",
           "thumbnailUrl": "media/panorama_46009756_572D_4167_41C6_2B49BD1EF7CE_t.jpg",
           "class": "Panorama",
           "hfov": 360,
           "frames": [
            {
             "overlays": [
              {
               "rollOverDisplay": false,
               "id": "overlay_46008756_572D_4167_41D0_C46707775FAB",
               "enabledInCardboard": true,
               "useHandCursor": true,
               "areas": [
                {
                 "displayTooltipInTouchScreens": true,
                 "click": "this.startPanoramaWithCamera(this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF, this.camera_597FC615_5728_BF26_41B2_9E7AE3755E62); this.mainPlayList.set('selectedIndex', 5)",
                 "mapColor": "#FF0000",
                 "toolTip": "06_Master",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "maps": [
                {
                 "hfov": 17.89,
                 "yaw": -163.02,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 84,
                    "width": 84,
                    "url": "media/panorama_46009756_572D_4167_41C6_2B49BD1EF7CE_0_HS_2_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -28.73
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "items": [
                {
                 "yaw": -163.02,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 17.89,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 169,
                    "width": 169,
                    "url": "media/panorama_46009756_572D_4167_41C6_2B49BD1EF7CE_0_HS_2_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "pitch": -28.73
                }
               ]
              },
              {
               "rollOverDisplay": true,
               "id": "overlay_4600A756_572D_4167_41C9_64294F212518",
               "enabledInCardboard": true,
               "useHandCursor": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116, this.camera_59EC7680_5728_BF1D_41B1_EAD36FABEDCC); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 8)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "maps": [
                {
                 "hfov": 0,
                 "yaw": -162.92,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 1,
                    "width": 1,
                    "url": "media/panorama_46009756_572D_4167_41C6_2B49BD1EF7CE_0_HS_1_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": 80.2
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "items": [
                {
                 "yaw": -162.92,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 0,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 1,
                    "width": 1,
                    "url": "media/panorama_46009756_572D_4167_41C6_2B49BD1EF7CE_0_HS_1_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "pitch": 80.2
                }
               ]
              }
             ],
             "thumbnailUrl": "media/panorama_46009756_572D_4167_41C6_2B49BD1EF7CE_t.jpg",
             "class": "SphericPanoramaFrame",
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "height": 1500,
                "width": 3000,
                "url": "media/panorama_46009756_572D_4167_41C6_2B49BD1EF7CE_hq.jpeg",
                "class": "ImageResourceLevel"
               }
              ]
             }
            }
           ],
           "hfovMin": 60
          },
          "distance": 1,
          "yaw": -172.22,
          "class": "AdjacentPanorama",
          "backwardYaw": -162.92
         },
         {
          "panorama": "this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF",
          "distance": 1,
          "yaw": -172.22,
          "class": "AdjacentPanorama",
          "backwardYaw": -162.92
         },
         {
          "panorama": "this.panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C",
          "distance": 1,
          "yaw": -172.22,
          "class": "AdjacentPanorama",
          "backwardYaw": -170.58
         },
         {
          "panorama": "this.panorama_47B53902_572E_CEDF_41CC_C256D31A5443",
          "distance": 1,
          "yaw": -20.13,
          "class": "AdjacentPanorama",
          "backwardYaw": -164.38
         },
         {
          "panorama": "this.panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E",
          "distance": 1,
          "yaw": -172.22,
          "class": "AdjacentPanorama",
          "backwardYaw": -171.35
         },
         {
          "panorama": "this.panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D",
          "distance": 1,
          "yaw": -172.22,
          "class": "AdjacentPanorama",
          "backwardYaw": -172.21
         },
         {
          "panorama": "this.panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC",
          "distance": 1,
          "yaw": -172.22,
          "class": "AdjacentPanorama",
          "backwardYaw": -170.2
         },
         {
          "panorama": "this.panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E",
          "distance": 1,
          "yaw": -95.85,
          "class": "AdjacentPanorama",
          "backwardYaw": -11.64
         },
         {
          "panorama": "this.panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116",
          "distance": 1,
          "yaw": -172.22,
          "class": "AdjacentPanorama",
          "backwardYaw": -173.12
         }
        ],
        "id": "panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D",
        "vfov": 180,
        "partial": false,
        "pitch": 0,
        "hfovMax": 120,
        "label": "03_Pool",
        "thumbnailUrl": "media/panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D_t.jpg",
        "class": "Panorama",
        "hfov": 360,
        "frames": [
         {
          "overlays": [
           {
            "rollOverDisplay": false,
            "id": "overlay_58A2E0B8_5610_6BC8_41AC_72ACAF049ECD",
            "enabledInCardboard": true,
            "useHandCursor": true,
            "areas": [
             {
              "displayTooltipInTouchScreens": true,
              "click": "this.startPanoramaWithCamera(this.panorama_47B53902_572E_CEDF_41CC_C256D31A5443, this.camera_58ABB71F_5728_BD22_41D3_812928204251); this.mainPlayList.set('selectedIndex', 3)",
              "mapColor": "#FF0000",
              "toolTip": "04_Living Room",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "maps": [
             {
              "hfov": 16.74,
              "yaw": -20.13,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 79,
                 "width": 79,
                 "url": "media/panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D_0_HS_0_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -29.3
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "items": [
             {
              "yaw": -20.13,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 16.74,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 159,
                 "width": 159,
                 "url": "media/panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D_0_HS_0_0.png",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "pitch": -29.3
             }
            ]
           },
           {
            "rollOverDisplay": false,
            "id": "overlay_58A2C0B8_5610_6BC8_41D0_139AB1287679",
            "enabledInCardboard": true,
            "useHandCursor": true,
            "areas": [
             {
              "displayTooltipInTouchScreens": true,
              "click": "this.startPanoramaWithCamera(this.panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E, this.camera_5BFF576E_5728_BDE2_41C1_5665E4538915); this.mainPlayList.set('selectedIndex', 1)",
              "mapColor": "#FF0000",
              "toolTip": "02_Entrance",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "maps": [
             {
              "hfov": 17.45,
              "yaw": -95.85,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 74,
                 "width": 74,
                 "url": "media/panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D_0_HS_6_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -14.14
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "items": [
             {
              "yaw": -95.85,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 17.45,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 149,
                 "width": 149,
                 "url": "media/panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D_0_HS_6_0.png",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "pitch": -14.14
             }
            ]
           },
           {
            "rollOverDisplay": true,
            "id": "overlay_58A2A0B8_5610_6BC8_41D1_5ADBE82A62BD",
            "enabledInCardboard": true,
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116, this.camera_5BF37778_5728_BDEE_41C0_04D3C31346D9); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 5); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 8); this.mainPlayList.set('selectedIndex', 6)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "maps": [
             {
              "hfov": 0,
              "yaw": -172.22,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 1,
                 "width": 1,
                 "url": "media/panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D_0_HS_1_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "class": "HotspotPanoramaOverlayMap",
              "pitch": 82.35
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "items": [
             {
              "yaw": -172.22,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 0,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 1,
                 "width": 1,
                 "url": "media/panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D_0_HS_1_0.png",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "pitch": 82.35
             }
            ]
           }
          ],
          "thumbnailUrl": "media/panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D_t.jpg",
          "class": "SphericPanoramaFrame",
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 1500,
             "width": 3000,
             "url": "media/panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D_hq.jpeg",
             "class": "ImageResourceLevel"
            }
           ]
          }
         }
        ],
        "hfovMin": 60
       },
       "distance": 1,
       "yaw": -162.92,
       "class": "AdjacentPanorama",
       "backwardYaw": -172.22
      },
      {
       "panorama": "this.panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C",
       "distance": 1,
       "yaw": 164.88,
       "class": "AdjacentPanorama",
       "backwardYaw": 167.85
      },
      {
       "panorama": "this.panorama_47B53902_572E_CEDF_41CC_C256D31A5443",
       "distance": 1,
       "yaw": -162.92,
       "class": "AdjacentPanorama",
       "backwardYaw": -171.96
      },
      {
       "panorama": "this.panorama_46009756_572D_4167_41C6_2B49BD1EF7CE",
       "distance": 1,
       "yaw": 82.89,
       "class": "AdjacentPanorama",
       "backwardYaw": -163.02
      },
      {
       "panorama": "this.panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D",
       "distance": 1,
       "yaw": 34.76,
       "class": "AdjacentPanorama",
       "backwardYaw": 108.57
      },
      {
       "panorama": "this.panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC",
       "distance": 1,
       "yaw": 35.02,
       "class": "AdjacentPanorama",
       "backwardYaw": 111.23
      },
      {
       "panorama": "this.panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E",
       "distance": 1,
       "yaw": -162.92,
       "class": "AdjacentPanorama",
       "backwardYaw": -170.68
      },
      {
       "panorama": "this.panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116",
       "distance": 1,
       "yaw": -162.92,
       "class": "AdjacentPanorama",
       "backwardYaw": -173.12
      }
     ],
     "id": "panorama_45750F9A_5593_A978_41D1_DB2A12878BDF",
     "vfov": 180,
     "partial": false,
     "pitch": 0,
     "hfovMax": 120,
     "label": "06_Master",
     "thumbnailUrl": "media/panorama_45750F9A_5593_A978_41D1_DB2A12878BDF_t.jpg",
     "class": "Panorama",
     "hfov": 360,
     "frames": [
      {
       "overlays": [
        {
         "rollOverDisplay": false,
         "id": "overlay_45751F9A_5593_A978_419E_9D0477D55A63",
         "enabledInCardboard": true,
         "useHandCursor": true,
         "areas": [
          {
           "displayTooltipInTouchScreens": true,
           "click": "this.startPanoramaWithCamera(this.panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C, this.camera_59DA36A3_5728_BF63_41BC_F26CE812AC91); this.mainPlayList.set('selectedIndex', 6)",
           "mapColor": "#FF0000",
           "toolTip": "06a_Balcony",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "maps": [
          {
           "hfov": 15.62,
           "yaw": 164.88,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 74,
              "width": 74,
              "url": "media/panorama_45750F9A_5593_A978_41D1_DB2A12878BDF_0_HS_0_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -29.79
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "items": [
          {
           "yaw": 164.88,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 15.62,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 149,
              "width": 149,
              "url": "media/panorama_45750F9A_5593_A978_41D1_DB2A12878BDF_0_HS_0_0.png",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "pitch": -29.79
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "id": "overlay_45756F9A_5593_A978_41C5_5DEA8239FD11",
         "enabledInCardboard": true,
         "useHandCursor": true,
         "areas": [
          {
           "displayTooltipInTouchScreens": true,
           "click": "this.startPanoramaWithCamera(this.panorama_46009756_572D_4167_41C6_2B49BD1EF7CE, this.camera_582746BC_5728_BF66_41AD_ECBEA4DC028A); this.mainPlayList.set('selectedIndex', 7)",
           "mapColor": "#FF0000",
           "toolTip": "06b_WC",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "maps": [
          {
           "hfov": 15.99,
           "yaw": 82.89,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 69,
              "width": 69,
              "url": "media/panorama_45750F9A_5593_A978_41D1_DB2A12878BDF_0_HS_2_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -17.88
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "items": [
          {
           "yaw": 82.89,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 15.99,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 139,
              "width": 139,
              "url": "media/panorama_45750F9A_5593_A978_41D1_DB2A12878BDF_0_HS_2_0.png",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "pitch": -17.88
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "id": "overlay_45757F9A_5593_A978_41CE_912DDA5CD743",
         "enabledInCardboard": true,
         "useHandCursor": true,
         "areas": [
          {
           "displayTooltipInTouchScreens": true,
           "click": "this.startPanoramaWithCamera(this.panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D, this.camera_5830C6CC_5728_BF25_41BE_807CAA13778F); this.mainPlayList.set('selectedIndex', 8)",
           "mapColor": "#FF0000",
           "toolTip": "07_2Beds Room",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "maps": [
          {
           "hfov": 11.87,
           "yaw": 34.76,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 49,
              "width": 49,
              "url": "media/panorama_45750F9A_5593_A978_41D1_DB2A12878BDF_0_HS_3_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "class": "HotspotPanoramaOverlayMap",
           "pitch": 8.38
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "items": [
          {
           "yaw": 34.76,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 11.87,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 99,
              "width": 99,
              "url": "media/panorama_45750F9A_5593_A978_41D1_DB2A12878BDF_0_HS_3_0.png",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "pitch": 8.38
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "id": "overlay_58837D58_56A1_81B9_41CB_BA3BEC867C09",
         "enabledInCardboard": true,
         "useHandCursor": true,
         "areas": [
          {
           "displayTooltipInTouchScreens": true,
           "click": "this.startPanoramaWithCamera(this.panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC, this.camera_5803B6DA_5728_BF22_41D2_816AE4BE6466); this.mainPlayList.set('selectedIndex', 4)",
           "mapColor": "#FF0000",
           "toolTip": "05_1Bedroom",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "maps": [
          {
           "hfov": 11.54,
           "yaw": 35.02,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 49,
              "width": 49,
              "url": "media/panorama_45750F9A_5593_A978_41D1_DB2A12878BDF_0_HS_4_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -15.99
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "items": [
          {
           "yaw": 35.02,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 11.54,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 99,
              "width": 99,
              "url": "media/panorama_45750F9A_5593_A978_41D1_DB2A12878BDF_0_HS_4_0.png",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "pitch": -15.99
          }
         ]
        },
        {
         "rollOverDisplay": true,
         "id": "overlay_45754F9A_5593_A978_41C5_5FC9223E8F5C",
         "enabledInCardboard": true,
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116, this.camera_586CB6F4_5728_BCE6_41C9_0A042FB24482); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 3)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "maps": [
          {
           "hfov": 0,
           "yaw": -162.92,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 1,
              "width": 1,
              "url": "media/panorama_45750F9A_5593_A978_41D1_DB2A12878BDF_0_HS_1_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "class": "HotspotPanoramaOverlayMap",
           "pitch": 76.94
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "items": [
          {
           "yaw": -162.92,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 0,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 1,
              "width": 1,
              "url": "media/panorama_45750F9A_5593_A978_41D1_DB2A12878BDF_0_HS_1_0.png",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "pitch": 76.94
          }
         ]
        }
       ],
       "thumbnailUrl": "media/panorama_45750F9A_5593_A978_41D1_DB2A12878BDF_t.jpg",
       "class": "SphericPanoramaFrame",
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "height": 1500,
          "width": 3000,
          "url": "media/panorama_45750F9A_5593_A978_41D1_DB2A12878BDF_hq.jpeg",
          "class": "ImageResourceLevel"
         }
        ]
       }
      }
     ],
     "hfovMin": 60
    },
    "distance": 1,
    "yaw": -171.35,
    "class": "AdjacentPanorama",
    "backwardYaw": -162.92
   },
   {
    "panorama": "this.panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D",
    "distance": 1,
    "yaw": -171.35,
    "class": "AdjacentPanorama",
    "backwardYaw": -172.22
   },
   {
    "panorama": "this.panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C",
    "distance": 1,
    "yaw": -171.35,
    "class": "AdjacentPanorama",
    "backwardYaw": -170.58
   },
   {
    "panorama": "this.panorama_47B53902_572E_CEDF_41CC_C256D31A5443",
    "distance": 1,
    "yaw": -171.35,
    "class": "AdjacentPanorama",
    "backwardYaw": -171.96
   },
   {
    "panorama": "this.panorama_46009756_572D_4167_41C6_2B49BD1EF7CE",
    "distance": 1,
    "yaw": -171.35,
    "class": "AdjacentPanorama",
    "backwardYaw": -162.92
   },
   {
    "panorama": "this.panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D",
    "distance": 1,
    "yaw": -171.35,
    "class": "AdjacentPanorama",
    "backwardYaw": -172.21
   },
   {
    "panorama": "this.panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC",
    "distance": 1,
    "yaw": -171.35,
    "class": "AdjacentPanorama",
    "backwardYaw": -170.2
   },
   {
    "panorama": "this.panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E",
    "distance": 1,
    "yaw": -172.64,
    "class": "AdjacentPanorama",
    "backwardYaw": 2.3
   },
   {
    "panorama": "this.panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116",
    "distance": 1,
    "yaw": -171.35,
    "class": "AdjacentPanorama",
    "backwardYaw": -173.12
   }
  ],
  "id": "panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E",
  "mapLocations": [
   {
    "x": 303.34,
    "map": {
     "overlays": [
      {
       "rollOverDisplay": false,
       "id": "overlay_4E318587_4299_762E_41B8_79C61CBB293C",
       "map": {
        "offsetY": 0,
        "x": 253.34,
        "width": 100,
        "y": 365.62,
        "height": 100,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 50,
           "width": 50,
           "url": "media/map_4E02A832_427B_EE04_41CC_8E1CEC03E8D3_HS_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "class": "HotspotMapOverlayMap"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 0)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "image": {
        "x": 253.34,
        "y": 365.62,
        "class": "HotspotMapOverlayImage",
        "width": 100,
        "height": 100,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 100,
           "width": 100,
           "url": "media/map_4E02A832_427B_EE04_41CC_8E1CEC03E8D3_HS_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        }
       },
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      }
     ],
     "fieldOfViewOverlayInsideColor": "#999999",
     "minimumZoomFactor": 0.5,
     "width": 1468,
     "id": "map_4E02A832_427B_EE04_41CC_8E1CEC03E8D3",
     "maximumZoomFactor": 1.2,
     "fieldOfViewOverlayInsideOpacity": 0.3,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 864,
        "width": 1468,
        "url": "media/map_4E02A832_427B_EE04_41CC_8E1CEC03E8D3.jpeg",
        "class": "ImageResourceLevel"
       },
       {
        "height": 432,
        "grayscale": true,
        "width": 734,
        "url": "media/map_4E02A832_427B_EE04_41CC_8E1CEC03E8D3_lq.jpeg",
        "class": "ImageResourceLevel"
       }
      ]
     },
     "fieldOfViewOverlayRadiusScale": 0.09,
     "height": 864,
     "label": "first floor",
     "fieldOfViewOverlayOutsideOpacity": 0,
     "thumbnailUrl": "media/map_4E02A832_427B_EE04_41CC_8E1CEC03E8D3_t.jpg",
     "class": "Map",
     "fieldOfViewOverlayOutsideColor": "#000000",
     "scaleMode": "fit_inside",
     "initialZoomFactor": 1
    },
    "y": 415.62,
    "angle": 71.83,
    "class": "PanoramaMapLocation"
   }
  ],
  "partial": false,
  "vfov": 180,
  "hfovMax": 120,
  "pitch": 0,
  "label": "01_Street View",
  "thumbnailUrl": "media/panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E_t.jpg",
  "class": "Panorama",
  "hfov": 360,
  "frames": [
   {
    "overlays": [
     {
      "rollOverDisplay": false,
      "id": "overlay_475F4865_559D_57C8_41D3_E745D8290F70",
      "enabledInCardboard": true,
      "useHandCursor": true,
      "areas": [
       {
        "displayTooltipInTouchScreens": true,
        "click": "this.startPanoramaWithCamera(this.panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E, this.camera_5AC23877_5728_B3E2_4190_42D8F8A5476F); this.mainPlayList.set('selectedIndex', 1)",
        "mapColor": "#FF0000",
        "toolTip": "02_Entrance",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "hfov": 15.5,
        "yaw": -172.64,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 64,
           "width": 64,
           "url": "media/panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -6.56
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "yaw": -172.64,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 15.5,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 129,
           "width": 129,
           "url": "media/panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -6.56
       }
      ]
     },
     {
      "rollOverDisplay": true,
      "id": "overlay_4750A865_559D_57C8_41B4_524DB443B897",
      "enabledInCardboard": true,
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116, this.camera_5ADCB882_5728_B322_41C3_4BCDD101DECE); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 5); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 8)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "hfov": 0,
        "yaw": -171.35,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 1,
           "width": 1,
           "url": "media/panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 85.73
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "yaw": -171.35,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 1,
           "width": 1,
           "url": "media/panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": 85.73
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 1500,
       "width": 3000,
       "url": "media/panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E_hq.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    }
   }
  ],
  "hfovMin": 60
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
   "paddingLeft": 0,
   "iconURL": "skin/IconButton_80E5955A_8E23_BB05_41CA_43DD61DBAEE9.png",
   "verticalAlign": "middle",
   "toolTipBorderRadius": 3,
   "toolTipShadowOpacity": 1,
   "mode": "toggle",
   "paddingTop": 0,
   "height": "100%",
   "width": "100%",
   "toolTipBorderSize": 1,
   "toolTipBorderColor": "#767676",
   "toolTipTextShadowColor": "#000000",
   "toolTipPaddingLeft": 6,
   "pressedIconURL": "skin/IconButton_80E5955A_8E23_BB05_41CA_43DD61DBAEE9_pressed.png",
   "toolTipBackgroundColor": "#000000",
   "class": "IconButton",
   "transparencyActive": true,
   "toolTipOpacity": 0.7,
   "paddingRight": 0,
   "toolTipShadowVerticalLength": 0,
   "click": "if(!this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, true, 0, this.effect_CDD059FA_EED0_D223_41DB_70ACFBE986FE, 'showEffect', false) } else if(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, false, 0, this.effect_CDD049FB_EED0_D221_41EB_CA2134B978E0, 'hideEffect', false) }",
   "toolTipTextShadowBlurRadius": 3,
   "borderRadius": 0,
   "horizontalAlign": "center",
   "toolTipPaddingBottom": 4,
   "minWidth": 1,
   "cursor": "hand",
   "maxWidth": 60,
   "toolTipFontSize": 14,
   "borderSize": 0,
   "toolTipShadowHorizontalLength": 0,
   "toolTipShadowColor": "#333333",
   "toolTipShadowBlurRadius": 3,
   "toolTipFontWeight": "normal",
   "id": "IconButton_80E5955A_8E23_BB05_41CA_43DD61DBAEE9",
   "toolTipShadowSpread": 0,
   "toolTipTextShadowOpacity": 0,
   "backgroundOpacity": 0,
   "minHeight": 1,
   "paddingBottom": 0,
   "toolTipFontFamily": "Arial",
   "toolTipFontColor": "#606060",
   "shadow": false,
   "maxHeight": 60,
   "toolTipPaddingTop": 4,
   "toolTipPaddingRight": 6,
   "toolTip": "Hotspots Visibility",
   "toolTipFontStyle": "normal"
  },
  "mouseControlMode": "drag_acceleration",
  "buttonStop": [
   "this.IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4",
   "this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB"
  ],
  "buttonCardboardView": {
   "paddingLeft": 0,
   "iconURL": "skin/IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37.png",
   "verticalAlign": "middle",
   "mode": "push",
   "paddingTop": 0,
   "height": "100%",
   "width": "100%",
   "class": "IconButton",
   "transparencyActive": false,
   "paddingRight": 0,
   "borderRadius": 0,
   "horizontalAlign": "center",
   "minWidth": 1,
   "cursor": "hand",
   "maxWidth": 60,
   "borderSize": 0,
   "id": "IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37",
   "backgroundOpacity": 0,
   "minHeight": 1,
   "paddingBottom": 0,
   "shadow": false,
   "maxHeight": 60
  }
 },
 {
  "viewerArea": {
   "toolTipShadowOpacity": 1,
   "playbackBarHeadShadowOpacity": 0.7,
   "playbackBarBackgroundColor": [
    "#FFFFFF"
   ],
   "progressBarOpacity": 1,
   "playbackBarHeight": 10,
   "playbackBarHeadWidth": 6,
   "playbackBarProgressBorderSize": 0,
   "class": "ViewerArea",
   "playbackBarBackgroundColorDirection": "vertical",
   "paddingRight": 0,
   "playbackBarRight": 0,
   "playbackBarHeadShadow": true,
   "shadow": false,
   "toolTipShadowVerticalLength": 0,
   "toolTipPaddingBottom": 4,
   "progressBackgroundOpacity": 1,
   "progressBarBorderSize": 0,
   "progressBarBorderRadius": 0,
   "progressBorderRadius": 0,
   "toolTipFontWeight": "normal",
   "toolTipFontSize": 12,
   "playbackBarProgressBorderRadius": 0,
   "toolTipShadowColor": "#333333",
   "minHeight": 1,
   "toolTipShadowSpread": 0,
   "toolTipTextShadowOpacity": 0,
   "progressBottom": 2,
   "playbackBarProgressBackgroundColorRatios": [
    0
   ],
   "progressHeight": 10,
   "transitionMode": "blending",
   "toolTipFontColor": "#606060",
   "paddingBottom": 0,
   "toolTipShadowBlurRadius": 3,
   "playbackBarBorderRadius": 0,
   "playbackBarProgressBorderColor": "#000000",
   "playbackBarHeadShadowVerticalLength": 0,
   "toolTipPaddingRight": 6,
   "paddingLeft": 0,
   "playbackBarProgressBackgroundColor": [
    "#3399FF"
   ],
   "toolTipBorderRadius": 3,
   "playbackBarHeadBackgroundColor": [
    "#111111",
    "#666666"
   ],
   "progressLeft": 0,
   "paddingTop": 0,
   "playbackBarHeadBorderRadius": 0,
   "playbackBarBorderColor": "#FFFFFF",
   "playbackBarHeadShadowBlurRadius": 3,
   "playbackBarHeadBorderColor": "#000000",
   "progressBackgroundColorRatios": [
    0
   ],
   "playbackBarProgressOpacity": 1,
   "toolTipBorderSize": 1,
   "toolTipBorderColor": "#767676",
   "toolTipTextShadowColor": "#000000",
   "toolTipPaddingLeft": 6,
   "playbackBarHeadBackgroundColorDirection": "vertical",
   "playbackBarBackgroundOpacity": 1,
   "playbackBarBorderSize": 0,
   "playbackBarHeadBackgroundColorRatios": [
    0,
    1
   ],
   "toolTipBackgroundColor": "#F6F6F6",
   "playbackBarLeft": 0,
   "playbackBarHeadHeight": 15,
   "borderRadius": 0,
   "toolTipTextShadowBlurRadius": 3,
   "toolTipOpacity": 1,
   "playbackBarOpacity": 1,
   "playbackBarHeadShadowColor": "#000000",
   "minWidth": 1,
   "playbackBarHeadShadowHorizontalLength": 0,
   "playbackBarHeadBorderSize": 0,
   "progressBarBackgroundColorRatios": [
    0
   ],
   "top": "10%",
   "progressBarBorderColor": "#000000",
   "progressRight": 0,
   "playbackBarHeadOpacity": 1,
   "bottom": "10%",
   "progressOpacity": 1,
   "borderSize": 0,
   "id": "MapViewer",
   "progressBackgroundColorDirection": "vertical",
   "toolTipShadowHorizontalLength": 0,
   "progressBarBackgroundColorDirection": "vertical",
   "progressBorderColor": "#000000",
   "toolTipFontFamily": "Arial",
   "playbackBarBottom": 0,
   "progressBarBackgroundColor": [
    "#3399FF"
   ],
   "left": "10%",
   "progressBackgroundColor": [
    "#FFFFFF"
   ],
   "progressBorderSize": 0,
   "playbackBarProgressBackgroundColorDirection": "vertical",
   "toolTipPaddingTop": 4,
   "toolTipFontStyle": "normal",
   "right": "10%"
  },
  "movementMode": "constrained",
  "id": "MapViewerMapPlayer",
  "class": "MapPlayer"
 },
 {
  "id": "panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E_camera",
  "initialPosition": {
   "yaw": 178.1,
   "class": "PanoramaCameraPosition",
   "pitch": 2.83
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E",
 {
  "id": "panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E_camera",
  "initialPosition": {
   "yaw": 16.81,
   "class": "PanoramaCameraPosition",
   "pitch": 2.87
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D",
 {
  "id": "panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_47B53902_572E_CEDF_41CC_C256D31A5443",
 {
  "id": "panorama_47B53902_572E_CEDF_41CC_C256D31A5443_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC",
 {
  "id": "panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF",
 {
  "id": "panorama_45750F9A_5593_A978_41D1_DB2A12878BDF_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C",
 {
  "id": "panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_46009756_572D_4167_41C6_2B49BD1EF7CE",
 {
  "id": "panorama_46009756_572D_4167_41C6_2B49BD1EF7CE_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D",
 {
  "id": "panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116",
 {
  "id": "panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "mainPlayList",
  "class": "PlayList",
  "items": [
   {
    "camera": "this.panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E_camera",
    "media": "this.panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_593DC5E1_5728_BD1E_41CF_F7F3A9310FF0, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "id": "PanoramaPlayListItem_593DC5E1_5728_BD1E_41CF_F7F3A9310FF0",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "media": "this.panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "media": "this.panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "media": "this.panorama_47B53902_572E_CEDF_41CC_C256D31A5443",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_47B53902_572E_CEDF_41CC_C256D31A5443_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "media": "this.panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "media": "this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "media": "this.panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "media": "this.panorama_46009756_572D_4167_41C6_2B49BD1EF7CE",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_46009756_572D_4167_41C6_2B49BD1EF7CE_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "media": "this.panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 0)",
    "media": "this.panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116_camera"
   }
  ]
 },
 {
  "id": "ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 0, 1)",
    "media": "this.panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 1, 2)",
    "media": "this.panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 2, 3)",
    "media": "this.panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 3, 4)",
    "media": "this.panorama_47B53902_572E_CEDF_41CC_C256D31A5443",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_47B53902_572E_CEDF_41CC_C256D31A5443_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 4, 5)",
    "media": "this.panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 5, 6)",
    "media": "this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 6, 7)",
    "media": "this.panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 7, 8)",
    "media": "this.panorama_46009756_572D_4167_41C6_2B49BD1EF7CE",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_46009756_572D_4167_41C6_2B49BD1EF7CE_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 8, 9)",
    "media": "this.panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 9, 0)",
    "media": "this.panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116_camera"
   }
  ]
 },
 {
  "label": "DJI_0384",
  "class": "Video",
  "video": {
   "mp4Url": "media/video_210B394E_3D54_1A60_41A3_CB42BEC0D3EC.mp4",
   "width": 1920,
   "webmUrl": "media/video_210B394E_3D54_1A60_41A3_CB42BEC0D3EC.webm",
   "height": 1080,
   "class": "VideoResource"
  },
  "width": 1920,
  "id": "video_210B394E_3D54_1A60_41A3_CB42BEC0D3EC",
  "loop": false,
  "height": 1080,
  "scaleMode": "fit_outside",
  "thumbnailUrl": "media/video_210B394E_3D54_1A60_41A3_CB42BEC0D3EC_t.jpg"
 },
 {
  "id": "playList_592045D2_5728_BD22_41CD_37185FDEDD15",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.registerKey('visibility_Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB', this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB.get('visible')); this.registerKey('visibility_ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472', this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472.get('visible')); this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setComponentVisibility(this.Container_86F3A56C_8E22_5B1D_41CA_9CE53436FE56, false, -1, this.effect_22973FB1_2DD9_0423_41C1_E1E03953DCCE, 'hideEffect', false); this.setComponentVisibility(this.Container_807F782A_8E23_A905_41DE_623121285A09, false, -1, this.effect_22974FB2_2DD9_0421_41BA_84205292D043, 'hideEffect', false); this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, false, -1, this.effect_3876CD6E_2DF9_0421_41C1_F0AB7F279824, 'hideEffect', false); this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, false, -1, this.effect_22899FB3_2DD9_0427_41BB_298AEB3D2851, 'hideEffect', false); this.setComponentVisibility(this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB, true, -1, this.effect_2289DFB3_2DD9_0427_41AE_A35795880BA7, 'showEffect', false)",
    "media": "this.video_210B394E_3D54_1A60_41A3_CB42BEC0D3EC",
    "end": "this.setComponentVisibility(this.Container_86F3A56C_8E22_5B1D_41CA_9CE53436FE56, true, -1, this.effect_22975FB2_2DD9_0421_41B4_7A2443082F44, 'showEffect', false); this.setComponentVisibility(this.Container_86F3A56C_8E22_5B1D_41CA_9CE53436FE56, true, -1, this.effect_22975FB2_2DD9_0421_41B4_7A2443082F44, 'showEffect', false); this.setComponentVisibility(this.Container_807F782A_8E23_A905_41DE_623121285A09, true, -1, this.effect_22977FB2_2DD9_0421_41C1_F53B037346DF, 'showEffect', false); this.setComponentVisibility(this.Container_807F782A_8E23_A905_41DE_623121285A09, true, -1, this.effect_22977FB2_2DD9_0421_41C1_F53B037346DF, 'showEffect', false); if(this.existsKey('visibility_ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472')){ if(this.getKey('visibility_ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472')) { this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, true, -1, this.effect_472A1A3B_5728_B762_41CE_2EAF4941A575, 'showEffect', false); } else { this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, false, -1, this.effect_3876CD6E_2DF9_0421_41C1_F0AB7F279824, 'hideEffect', false); } }; this.unregisterKey('visibility_ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472'); if(this.existsKey('visibility_Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB')){ if(this.getKey('visibility_Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB')) { this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, true, -1, this.effect_472ACA3B_5728_B762_41A3_D1F3909C29AA, 'showEffect', false); } else { this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, false, -1, this.effect_22899FB3_2DD9_0427_41BB_298AEB3D2851, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB'); this.setComponentVisibility(this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB, false, -1, this.effect_2289EFB3_2DD9_0427_41C0_ACB5A72AE218, 'hideEffect', false); this.setComponentVisibility(this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB, false, -1, this.effect_2289EFB3_2DD9_0427_41C0_ACB5A72AE218, 'hideEffect', false)",
    "player": "this.MainViewerVideoPlayer",
    "class": "VideoPlayListItem",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_592045D2_5728_BD22_41CD_37185FDEDD15, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_592045D2_5728_BD22_41CD_37185FDEDD15, 0, this.video_210B394E_3D54_1A60_41A3_CB42BEC0D3EC)"
   }
  ]
 },
 {
  "label": "Photo Album",
  "playList": {
   "id": "album_1AE8DEB7_0EE7_8CC7_4198_F5B75788CCF6_AlbumPlayList",
   "class": "PhotoPlayList",
   "items": [
    {
     "camera": {
      "easing": "linear",
      "scaleMode": "fit_outside",
      "class": "MovementPhotoCamera",
      "duration": 5000,
      "targetPosition": {
       "zoomFactor": 1.1,
       "x": "0.33",
       "class": "PhotoCameraPosition",
       "y": "0.55"
      },
      "initialPosition": {
       "zoomFactor": 1,
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "y": "0.50"
      }
     },
     "media": {
      "label": "DJI_0355",
      "class": "Photo",
      "width": 5472,
      "id": "photo_25EB8F3B_3D54_3627_41C1_FA6C2C76D85C",
      "height": 3648,
      "duration": 5000,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/photo_25EB8F3B_3D54_3627_41C1_FA6C2C76D85C.JPG",
         "class": "ImageResourceLevel"
        }
       ]
      },
      "thumbnailUrl": "media/photo_25EB8F3B_3D54_3627_41C1_FA6C2C76D85C_t.jpg"
     },
     "class": "PhotoPlayListItem"
    },
    {
     "camera": {
      "easing": "linear",
      "scaleMode": "fit_outside",
      "class": "MovementPhotoCamera",
      "duration": 5000,
      "targetPosition": {
       "zoomFactor": 1.1,
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "y": "0.71"
      },
      "initialPosition": {
       "zoomFactor": 1,
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "y": "0.50"
      }
     },
     "media": {
      "label": "DJI_0364",
      "class": "Photo",
      "width": 4900,
      "id": "photo_2537233E_3D54_0E20_41B8_95E46BC1EC07",
      "height": 3264,
      "duration": 5000,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/photo_2537233E_3D54_0E20_41B8_95E46BC1EC07.jpg",
         "class": "ImageResourceLevel"
        }
       ]
      },
      "thumbnailUrl": "media/photo_2537233E_3D54_0E20_41B8_95E46BC1EC07_t.jpg"
     },
     "class": "PhotoPlayListItem"
    },
    {
     "camera": {
      "easing": "linear",
      "scaleMode": "fit_outside",
      "class": "MovementPhotoCamera",
      "duration": 5000,
      "targetPosition": {
       "zoomFactor": 1.1,
       "x": "0.52",
       "class": "PhotoCameraPosition",
       "y": "0.66"
      },
      "initialPosition": {
       "zoomFactor": 1,
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "y": "0.50"
      }
     },
     "media": {
      "label": "DJI_0369",
      "class": "Photo",
      "width": 4900,
      "id": "photo_25363697_3D54_16EF_41C7_78CA5BF042D8",
      "height": 3264,
      "duration": 5000,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/photo_25363697_3D54_16EF_41C7_78CA5BF042D8.jpg",
         "class": "ImageResourceLevel"
        }
       ]
      },
      "thumbnailUrl": "media/photo_25363697_3D54_16EF_41C7_78CA5BF042D8_t.jpg"
     },
     "class": "PhotoPlayListItem"
    },
    {
     "camera": {
      "easing": "linear",
      "scaleMode": "fit_outside",
      "class": "MovementPhotoCamera",
      "duration": 5000,
      "targetPosition": {
       "zoomFactor": 1.1,
       "x": "0.70",
       "class": "PhotoCameraPosition",
       "y": "0.71"
      },
      "initialPosition": {
       "zoomFactor": 1,
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "y": "0.50"
      }
     },
     "media": {
      "label": "DJI_0388",
      "class": "Photo",
      "width": 5472,
      "id": "photo_2536FA03_3D54_19E7_41C9_9A86E77D5C4C",
      "height": 3648,
      "duration": 5000,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/photo_2536FA03_3D54_19E7_41C9_9A86E77D5C4C.JPG",
         "class": "ImageResourceLevel"
        }
       ]
      },
      "thumbnailUrl": "media/photo_2536FA03_3D54_19E7_41C9_9A86E77D5C4C_t.jpg"
     },
     "class": "PhotoPlayListItem"
    },
    {
     "camera": {
      "easing": "linear",
      "scaleMode": "fit_outside",
      "class": "MovementPhotoCamera",
      "duration": 5000,
      "targetPosition": {
       "zoomFactor": 1.1,
       "x": "0.49",
       "class": "PhotoCameraPosition",
       "y": "0.74"
      },
      "initialPosition": {
       "zoomFactor": 1,
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "y": "0.50"
      }
     },
     "media": {
      "label": "DJI_0402",
      "class": "Photo",
      "width": 4900,
      "id": "photo_25365DAF_3D54_1A3F_41C9_6122F3F568B7",
      "height": 3264,
      "duration": 5000,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/photo_25365DAF_3D54_1A3F_41C9_6122F3F568B7.jpg",
         "class": "ImageResourceLevel"
        }
       ]
      },
      "thumbnailUrl": "media/photo_25365DAF_3D54_1A3F_41C9_6122F3F568B7_t.jpg"
     },
     "class": "PhotoPlayListItem"
    },
    {
     "camera": {
      "easing": "linear",
      "scaleMode": "fit_outside",
      "class": "MovementPhotoCamera",
      "duration": 5000,
      "targetPosition": {
       "zoomFactor": 1.1,
       "x": "0.32",
       "class": "PhotoCameraPosition",
       "y": "0.47"
      },
      "initialPosition": {
       "zoomFactor": 1,
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "y": "0.50"
      }
     },
     "media": {
      "label": "DJI_0405",
      "class": "Photo",
      "width": 4900,
      "id": "photo_2536E107_3D54_0BE0_41C7_237D79278EAE",
      "height": 3264,
      "duration": 5000,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/photo_2536E107_3D54_0BE0_41C7_237D79278EAE.jpg",
         "class": "ImageResourceLevel"
        }
       ]
      },
      "thumbnailUrl": "media/photo_2536E107_3D54_0BE0_41C7_237D79278EAE_t.jpg"
     },
     "class": "PhotoPlayListItem"
    },
    {
     "camera": {
      "easing": "linear",
      "scaleMode": "fit_outside",
      "class": "MovementPhotoCamera",
      "duration": 5000,
      "targetPosition": {
       "zoomFactor": 1.1,
       "x": "0.64",
       "class": "PhotoCameraPosition",
       "y": "0.53"
      },
      "initialPosition": {
       "zoomFactor": 1,
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "y": "0.50"
      }
     },
     "media": {
      "label": "DJI_0415",
      "class": "Photo",
      "width": 4900,
      "id": "photo_25361460_3D54_0A21_41C5_9CEF516D0083",
      "height": 3264,
      "duration": 5000,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/photo_25361460_3D54_0A21_41C5_9CEF516D0083.jpg",
         "class": "ImageResourceLevel"
        }
       ]
      },
      "thumbnailUrl": "media/photo_25361460_3D54_0A21_41C5_9CEF516D0083_t.jpg"
     },
     "class": "PhotoPlayListItem"
    },
    {
     "camera": {
      "easing": "linear",
      "scaleMode": "fit_outside",
      "class": "MovementPhotoCamera",
      "duration": 5000,
      "targetPosition": {
       "zoomFactor": 1.1,
       "x": "0.31",
       "class": "PhotoCameraPosition",
       "y": "0.32"
      },
      "initialPosition": {
       "zoomFactor": 1,
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "y": "0.50"
      }
     },
     "media": {
      "label": "DJI_0441",
      "class": "Photo",
      "width": 4900,
      "id": "photo_2536E7CB_3D54_F667_41C8_0C74E4EA5879",
      "height": 3264,
      "duration": 5000,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/photo_2536E7CB_3D54_F667_41C8_0C74E4EA5879.jpg",
         "class": "ImageResourceLevel"
        }
       ]
      },
      "thumbnailUrl": "media/photo_2536E7CB_3D54_F667_41C8_0C74E4EA5879_t.jpg"
     },
     "class": "PhotoPlayListItem"
    }
   ]
  },
  "thumbnailUrl": "media/album_1AE8DEB7_0EE7_8CC7_4198_F5B75788CCF6_t.png",
  "class": "PhotoAlbum",
  "id": "album_1AE8DEB7_0EE7_8CC7_4198_F5B75788CCF6"
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
  "id": "playList_5920C5D2_5728_BD22_41B6_79E95B6542FD",
  "class": "PlayList",
  "items": [
   {
    "player": "this.ViewerAreaLabeled_9FD7235A_96CD_9045_41D9_23A3BCBDB1C6PhotoAlbumPlayer",
    "media": "this.album_1AE8DEB7_0EE7_8CC7_4198_F5B75788CCF6",
    "class": "PhotoAlbumPlayListItem",
    "begin": "this.loopAlbum(this.playList_5920C5D2_5728_BD22_41B6_79E95B6542FD, 0)"
   }
  ]
 },
 "this.map_4E02A832_427B_EE04_41CC_8E1CEC03E8D3",
 {
  "id": "playList_593F45DF_5728_BD22_41B0_D8E123AA0669",
  "class": "PlayList",
  "items": [
   {
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_4E02A832_427B_EE04_41CC_8E1CEC03E8D3",
    "class": "MapPlayListItem",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')"
   }
  ]
 },
 {
  "id": "ImageResource_536A2F3F_412A_B1B6_41B9_51CAE5D86C15",
  "class": "ImageResource",
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
  ]
 },
 {
  "easing": "cubic_in",
  "duration": 500,
  "id": "FadeInEffect_8ED05F70_96C4_F045_41DC_2AB82A556F92",
  "class": "FadeInEffect"
 },
 {
  "easing": "cubic_out",
  "duration": 500,
  "id": "FadeOutEffect_8ED06F70_96C4_F045_41DA_C74400CF7B15",
  "class": "FadeOutEffect"
 },
 {
  "easing": "linear",
  "duration": 200,
  "id": "effect_98AADBB0_96C5_F0C5_41B2_1C4D08E503DB",
  "class": "FadeInEffect"
 },
 {
  "easing": "linear",
  "duration": 300,
  "id": "effect_51CB7B74_4299_12E2_41B4_829087983DE5",
  "class": "FadeInEffect"
 },
 {
  "easing": "linear",
  "duration": 400,
  "id": "effect_15DDF232_3E91_44CF_41AB_F8C3E6067377",
  "class": "FadeInEffect"
 },
 {
  "easing": "linear",
  "duration": 400,
  "id": "effect_15DDE232_3E91_44CF_41B1_14501B4EC17A",
  "class": "FadeOutEffect"
 },
 {
  "easing": "linear",
  "duration": 200,
  "id": "effect_CACBF85D_EED0_7261_41DB_A3B65ECE0D5D",
  "class": "FadeInEffect"
 },
 {
  "easing": "linear",
  "duration": 200,
  "id": "effect_CACBC85D_EED0_7261_41BE_8CF4C3A8170C",
  "class": "FadeOutEffect"
 },
 {
  "easing": "linear",
  "duration": 200,
  "id": "effect_CDD059FA_EED0_D223_41DB_70ACFBE986FE",
  "class": "FadeInEffect"
 },
 {
  "easing": "linear",
  "duration": 200,
  "id": "effect_CDD049FB_EED0_D221_41EB_CA2134B978E0",
  "class": "FadeOutEffect"
 },
 {
  "easing": "linear",
  "duration": 400,
  "id": "effect_32C91197_3F22_3110_4181_9E76B593FBFE",
  "class": "FadeInEffect"
 },
 {
  "easing": "linear",
  "duration": 400,
  "id": "effect_32C92197_3F22_3110_419D_E2E21968F16F",
  "class": "FadeOutEffect"
 },
 {
  "easing": "linear",
  "duration": 200,
  "id": "effect_9B0AF4E2_96C4_F045_41D3_0E00FEE03A15",
  "class": "FadeOutEffect"
 },
 {
  "easing": "linear",
  "duration": 300,
  "id": "effect_500E3733_4297_3267_41C9_4935C0BEBF39",
  "class": "FadeOutEffect"
 },
 {
  "id": "camera_597FC615_5728_BF26_41B2_9E7AE3755E62",
  "initialPosition": {
   "yaw": -97.11,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_594E6625_5728_BF66_41C8_C85005BE1F53",
  "initialPosition": {
   "yaw": 7.78,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_5958162F_5728_BF62_41D5_605A4120426B",
  "initialPosition": {
   "yaw": 9.42,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_5955D63F_5728_BF62_41D0_5969A158C67C",
  "initialPosition": {
   "yaw": 8.04,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_59A47648_5728_BF2E_41D2_9C3AB85692B3",
  "initialPosition": {
   "yaw": 8.65,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_59B1F658_5728_BF2E_41B1_34E19E9D3A97",
  "initialPosition": {
   "yaw": 7.79,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_59805662_5728_BFE2_41A5_F0F8111D5947",
  "initialPosition": {
   "yaw": 9.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_599D5671_5728_BFFE_41BD_D05DD9A5C7CC",
  "initialPosition": {
   "yaw": 9.32,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_59EC7680_5728_BF1D_41B1_EAD36FABEDCC",
  "initialPosition": {
   "yaw": 6.88,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_59FEA689_5728_BF2F_41D2_4BD0FA15BF56",
  "initialPosition": {
   "yaw": 8.65,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_59CB8698_5728_BF2D_41D3_BDA13E1C336D",
  "initialPosition": {
   "yaw": 7.78,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_59DA36A3_5728_BF63_41BC_F26CE812AC91",
  "initialPosition": {
   "yaw": -12.15,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_59D786B3_5728_BF63_4193_6EF36C278A1D",
  "initialPosition": {
   "yaw": 8.04,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_582746BC_5728_BF66_41AD_ECBEA4DC028A",
  "initialPosition": {
   "yaw": 16.98,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_5830C6CC_5728_BF25_41BE_807CAA13778F",
  "initialPosition": {
   "yaw": -71.43,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_5803B6DA_5728_BF22_41D2_816AE4BE6466",
  "initialPosition": {
   "yaw": -68.77,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_5812A6E5_5728_BCE6_4183_663F004231E8",
  "initialPosition": {
   "yaw": 9.32,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_586CB6F4_5728_BCE6_41C9_0A042FB24482",
  "initialPosition": {
   "yaw": 6.88,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_587FD6FF_5728_BCE2_41C9_B634B01CCB45",
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_5849170A_5728_BD22_41B7_45851E821C06",
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_5858D714_5728_BD26_41D2_CEFFCDDEE457",
  "initialPosition": {
   "yaw": 9.42,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_58ABB71F_5728_BD22_41D3_812928204251",
  "initialPosition": {
   "yaw": 15.62,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_58A54729_5728_BD6E_41D5_416C90508B0A",
  "initialPosition": {
   "yaw": 8.65,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_58B78733_5728_BD62_41C4_BDF31A1CFE84",
  "initialPosition": {
   "yaw": 7.79,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_5BFA2765_5728_BDE6_41BB_822123CE136E",
  "initialPosition": {
   "yaw": 9.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_5BFF576E_5728_BDE2_41C1_5665E4538915",
  "initialPosition": {
   "yaw": 168.36,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_5BF37778_5728_BDEE_41C0_04D3C31346D9",
  "initialPosition": {
   "yaw": 6.88,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_5BF49782_5728_BD22_41CD_5369B1570C5D",
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_5BC9278D_5728_BD26_41D2_8CAE00396680",
  "initialPosition": {
   "yaw": -15.12,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_5BC32796_5728_BD22_41C4_B47D48C22213",
  "initialPosition": {
   "yaw": 7.78,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_5BDA67A0_5728_BD1E_41C3_C6AFB5506FA0",
  "initialPosition": {
   "yaw": 8.04,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_5BD277A9_5728_BD6E_41D4_D30F62BDDDF7",
  "initialPosition": {
   "yaw": 8.65,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_5A2837B3_5728_BD62_41B6_2E1E356B3C38",
  "initialPosition": {
   "yaw": 7.79,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_5A21E7BE_5728_BD62_41C8_2066152D7B97",
  "initialPosition": {
   "yaw": 9.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_5A3CF7C7_5728_BD22_41D0_CF2AE9EA00CB",
  "initialPosition": {
   "yaw": 9.32,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_5A3527D1_5728_BD3E_417B_D4C1489634D8",
  "initialPosition": {
   "yaw": 6.88,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_5A0037DA_5728_BD22_41B0_ECCC1CBC8D34",
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_5A1F47E4_5728_BCE6_41C0_5FDCF5EEDC43",
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_5A1457EE_5728_BCE5_41D3_1B46FD16F27E",
  "initialPosition": {
   "yaw": 159.87,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_5A6337F8_5728_BCED_41C4_3B4C1593DFB2",
  "initialPosition": {
   "yaw": 9.42,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_5A78F802_5728_B31D_41C0_200C57D3E659",
  "initialPosition": {
   "yaw": 8.65,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_5A77C80C_5728_B325_41CC_3806702E1EA0",
  "initialPosition": {
   "yaw": 7.79,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_5A424816_5728_B325_41D3_8E9239B169DF",
  "initialPosition": {
   "yaw": -69.02,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_5A598820_5728_B31D_41D5_7EEE913D88C5",
  "initialPosition": {
   "yaw": 9.32,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_5AAA5829_5728_B36F_41C9_86EA42C430E3",
  "initialPosition": {
   "yaw": 6.88,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_5AA61832_5728_B37D_41D0_D5A8209C536C",
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_5AB0783D_5728_B367_41C1_44F9256A0C4F",
  "initialPosition": {
   "yaw": 7.78,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_5A8C2847_5728_B323_41C3_FB7F4DB23EA3",
  "initialPosition": {
   "yaw": 9.42,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_5A9E684F_5728_B322_41D1_0A089AAF0DD1",
  "initialPosition": {
   "yaw": 8.04,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_5AEA085A_5728_B322_41B8_C6CC18211432",
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_5AE43864_5728_B3E6_41D5_B79583035AB8",
  "initialPosition": {
   "yaw": 7.79,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_5AF6686D_5728_B3E6_41BC_3AC9DEBCA648",
  "initialPosition": {
   "yaw": 9.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_5AC23877_5728_B3E2_4190_42D8F8A5476F",
  "initialPosition": {
   "yaw": -177.7,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_5ADCB882_5728_B322_41C3_4BCDD101DECE",
  "initialPosition": {
   "yaw": 6.88,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_592E788B_5728_B322_41D5_C079243E4969",
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_5938F895_5728_B326_41CC_A8EB6E531E2F",
  "initialPosition": {
   "yaw": -145.24,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_590B589F_5728_B322_41D2_C12FFD475364",
  "initialPosition": {
   "yaw": 7.78,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_590478A9_5728_B36E_41B4_C22DEF2E382A",
  "initialPosition": {
   "yaw": 9.42,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_5916E8B3_5728_B362_41BE_E0E08DBAE87B",
  "initialPosition": {
   "yaw": 8.04,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_5963C8BD_5728_B366_41CC_E21EE0224CA8",
  "initialPosition": {
   "yaw": 8.65,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_597248C7_5728_B322_41C5_B47AD542B576",
  "initialPosition": {
   "yaw": 9.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_594FD8D1_5728_B33E_41C4_BD1E50A48612",
  "initialPosition": {
   "yaw": 9.32,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_5959A8DB_5728_B322_41D0_164DD9151BE2",
  "initialPosition": {
   "yaw": -144.06,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_59A808E5_5728_B4E6_41B5_4B124AB9BCB2",
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_59A508EF_5728_B4E2_41B4_725A76462713",
  "initialPosition": {
   "yaw": -144.98,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_59B428F9_5728_B4EE_41B3_9FFBD3FFF8A1",
  "initialPosition": {
   "yaw": 7.78,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_5981090D_5728_B526_41BB_AA4F754039D2",
  "initialPosition": {
   "yaw": 9.42,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_59938916_5728_B522_41B1_8076DC0B6359",
  "initialPosition": {
   "yaw": -138.22,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_59ED0925_5728_B566_41CF_637384D3A6FB",
  "initialPosition": {
   "yaw": 8.65,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_59FC392F_5728_B562_4176_91953C977E74",
  "initialPosition": {
   "yaw": 7.79,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_59CEB93F_5728_B562_41CB_25275083793C",
  "initialPosition": {
   "yaw": 9.32,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_59DB9948_5728_B52E_41C9_DA9BD2BD04B1",
  "initialPosition": {
   "yaw": 6.88,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_582AF957_5728_B522_41C1_23B96AA4B37D",
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_5827D966_5728_B5E5_41CE_FA325573541C",
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_5836D971_5728_B5FF_41D1_CFCF45474395",
  "initialPosition": {
   "yaw": 84.15,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_5803B980_5728_B51D_41D3_E25029890DA9",
  "initialPosition": {
   "yaw": 9.42,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_5812698A_5728_B52D_41AC_A7684A891B57",
  "initialPosition": {
   "yaw": 8.04,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_586C8999_5728_B52F_41B8_5ABC299F59AC",
  "initialPosition": {
   "yaw": 7.36,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_587E19A9_5728_B56F_41D5_BC9122672227",
  "initialPosition": {
   "yaw": 7.79,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_584889B3_5728_B563_41C4_E1694A4024D7",
  "initialPosition": {
   "yaw": 9.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_585A59C3_5728_B523_41D0_E32C68C6141B",
  "initialPosition": {
   "yaw": 6.88,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_5854C9CB_5728_B521_41C5_FC41AD4E1749",
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_58A729DB_5728_B522_41A2_2F8762058C00",
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_58B019EB_5728_B4E2_41B9_548F28DA9E4D",
  "initialPosition": {
   "yaw": 7.78,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_588379F5_5728_B4E6_41D3_11BF53C0FB3E",
  "initialPosition": {
   "yaw": 9.42,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_589C1A04_5728_B726_41D2_A4A9630110CE",
  "initialPosition": {
   "yaw": 8.04,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_58EF6A0E_5728_B722_41D1_84D813BAF45A",
  "initialPosition": {
   "yaw": 8.65,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_58F83A1D_5728_B726_41CB_E6BF76621355",
  "initialPosition": {
   "yaw": -70.93,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_58CB4A29_5728_B76E_41B1_E17D83E0459F",
  "initialPosition": {
   "yaw": 9.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_58C5CA34_5728_B766_41C7_E29421305261",
  "initialPosition": {
   "yaw": 9.32,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "easing": "cubic_in_out",
  "duration": 1000,
  "id": "effect_22973FB1_2DD9_0423_41C1_E1E03953DCCE",
  "class": "FadeOutEffect"
 },
 {
  "easing": "cubic_in_out",
  "duration": 1000,
  "id": "effect_22975FB2_2DD9_0421_41B4_7A2443082F44",
  "class": "FadeInEffect"
 },
 {
  "easing": "cubic_in_out",
  "duration": 1000,
  "id": "effect_22974FB2_2DD9_0421_41BA_84205292D043",
  "class": "FadeOutEffect"
 },
 {
  "easing": "cubic_in_out",
  "duration": 1000,
  "id": "effect_22977FB2_2DD9_0421_41C1_F53B037346DF",
  "class": "FadeInEffect"
 },
 {
  "easing": "cubic_in_out",
  "duration": 1000,
  "id": "effect_3876CD6E_2DF9_0421_41C1_F0AB7F279824",
  "class": "FadeOutEffect"
 },
 {
  "easing": "cubic_in_out",
  "duration": 1000,
  "id": "effect_472A1A3B_5728_B762_41CE_2EAF4941A575",
  "class": "FadeInEffect"
 },
 "this.effect_3876CD6E_2DF9_0421_41C1_F0AB7F279824",
 {
  "easing": "cubic_in_out",
  "duration": 1000,
  "id": "effect_22899FB3_2DD9_0427_41BB_298AEB3D2851",
  "class": "FadeOutEffect"
 },
 {
  "easing": "cubic_in_out",
  "duration": 1000,
  "id": "effect_472ACA3B_5728_B762_41A3_D1F3909C29AA",
  "class": "FadeInEffect"
 },
 "this.effect_22899FB3_2DD9_0427_41BB_298AEB3D2851",
 {
  "easing": "cubic_in_out",
  "duration": 1000,
  "id": "effect_2289DFB3_2DD9_0427_41AE_A35795880BA7",
  "class": "FadeInEffect"
 },
 {
  "easing": "cubic_in_out",
  "duration": 1000,
  "id": "effect_2289EFB3_2DD9_0427_41C0_ACB5A72AE218",
  "class": "FadeOutEffect"
 },
 {
  "autoplay": true,
  "id": "audio_A83B2F1A_B250_204B_41B2_61A870B2B428",
  "loop": true,
  "audio": {
   "id": "audioresource_1D15163A_0EEB_BFC9_419F_EF5F7074EFB1",
   "oggUrl": "media/audio_A83B2F1A_B250_204B_41B2_61A870B2B428.ogg",
   "mp3Url": "media/audio_A83B2F1A_B250_204B_41B2_61A870B2B428.mp3",
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
   "id": "audioresource_A84F2D34_B270_605F_41E2_4CF67AB762D2",
   "oggUrl": "media/audio_A875C8FE_B250_61CA_41D2_1BDD70C9887A.ogg",
   "mp3Url": "media/audio_A875C8FE_B250_61CA_41D2_1BDD70C9887A.mp3",
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
   "id": "audioresource_A83107F8_B270_2FD6_41E2_DAE1F661A577",
   "oggUrl": "media/audio_A87513BA_B273_E04A_41AA_0102CD2EF1BE.ogg",
   "mp3Url": "media/audio_A87513BA_B273_E04A_41AA_0102CD2EF1BE.mp3",
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
  "label": "7. Ben xe mien Dong moi",
  "class": "Photo",
  "width": 8192,
  "id": "photo_1D911E4D_0EFC_8C4B_4180_DC7B2E0CE38C",
  "height": 4096,
  "duration": 5000,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/photo_1D911E4D_0EFC_8C4B_4180_DC7B2E0CE38C.jpg",
     "class": "ImageResourceLevel"
    }
   ]
  },
  "thumbnailUrl": "media/photo_1D911E4D_0EFC_8C4B_4180_DC7B2E0CE38C_t.jpg"
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
   "oggUrl": "media/audio_15B68E59_3D54_1663_4199_CC0245D4ECA1.ogg",
   "mp3Url": "media/audio_15B68E59_3D54_1663_4199_CC0245D4ECA1.mp3",
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
  "progressBarOpacity": 1,
  "playbackBarHeight": 10,
  "playbackBarHeadWidth": 6,
  "playbackBarProgressBorderSize": 0,
  "class": "ViewerArea",
  "playbackBarBackgroundColorDirection": "vertical",
  "paddingRight": 0,
  "playbackBarRight": 0,
  "playbackBarHeadShadow": true,
  "shadow": false,
  "toolTipShadowVerticalLength": 0,
  "toolTipPaddingBottom": 4,
  "progressBackgroundOpacity": 1,
  "progressBarBorderSize": 0,
  "progressBarBorderRadius": 0,
  "progressBorderRadius": 0,
  "toolTipFontWeight": "normal",
  "toolTipFontSize": 14,
  "playbackBarProgressBorderRadius": 0,
  "toolTipShadowColor": "#333333",
  "minHeight": 50,
  "toolTipShadowSpread": 0,
  "toolTipTextShadowOpacity": 0,
  "progressBottom": 0,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "progressHeight": 10,
  "transitionMode": "blending",
  "toolTipFontColor": "#606060",
  "paddingBottom": 0,
  "toolTipShadowBlurRadius": 3,
  "playbackBarBorderRadius": 0,
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipPaddingRight": 6,
  "paddingLeft": 0,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "toolTipBorderRadius": 3,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "progressLeft": 0,
  "paddingTop": 0,
  "playbackBarHeadBorderRadius": 0,
  "playbackBarBorderColor": "#FFFFFF",
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarHeadBorderColor": "#000000",
  "progressBackgroundColorRatios": [
   0
  ],
  "playbackBarProgressOpacity": 1,
  "toolTipBorderSize": 1,
  "toolTipBorderColor": "#767676",
  "toolTipTextShadowColor": "#000000",
  "toolTipPaddingLeft": 6,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarBackgroundOpacity": 1,
  "playbackBarBorderSize": 0,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipBackgroundColor": "#000000",
  "playbackBarLeft": 0,
  "playbackBarHeadHeight": 15,
  "borderRadius": 0,
  "toolTipTextShadowBlurRadius": 3,
  "toolTipOpacity": 0.7,
  "playbackBarOpacity": 1,
  "playbackBarHeadShadowColor": "#000000",
  "minWidth": 100,
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarHeadBorderSize": 0,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "top": "0%",
  "progressBarBorderColor": "#000000",
  "progressRight": 0,
  "playbackBarHeadOpacity": 1,
  "bottom": "0%",
  "progressOpacity": 1,
  "borderSize": 0,
  "id": "MainViewer",
  "progressBackgroundColorDirection": "vertical",
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
  "paddingLeft": 10,
  "verticalAlign": "middle",
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "paddingTop": 0,
  "height": 70,
  "layout": "horizontal",
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "class": "Container",
  "paddingRight": 10,
  "overflow": "visible",
  "shadow": false,
  "gap": 35,
  "minWidth": 100,
  "borderRadius": 5,
  "horizontalAlign": "center",
  "backgroundColorDirection": "vertical",
  "contentOpaque": false,
  "bottom": "3%",
  "borderSize": 0,
  "backgroundColorRatios": [
   0,
   1
  ],
  "id": "Container_86F3A56C_8E22_5B1D_41CA_9CE53436FE56",
  "scrollBarColor": "#000000",
  "backgroundOpacity": 0.25,
  "minHeight": 25,
  "paddingBottom": 0,
  "scrollBarVisible": "rollOver",
  "left": "0%",
  "maxHeight": 70,
  "scrollBarOpacity": 0.5,
  "right": "0%",
  "children": [
   {
    "paddingLeft": 0,
    "iconURL": "skin/IconButton_87577B8F_8E22_AF1B_41CC_79EB87AE6DED.png",
    "verticalAlign": "middle",
    "toolTipBorderRadius": 3,
    "toolTipShadowOpacity": 1,
    "mode": "push",
    "paddingTop": 0,
    "height": "100%",
    "width": "100%",
    "toolTipBorderSize": 1,
    "toolTipBorderColor": "#767676",
    "toolTipTextShadowColor": "#000000",
    "toolTipPaddingLeft": 6,
    "toolTipBackgroundColor": "#000000",
    "class": "IconButton",
    "transparencyActive": true,
    "toolTipOpacity": 0.7,
    "paddingRight": 0,
    "toolTipShadowVerticalLength": 0,
    "click": "this.showPopupImage(this.ImageResource_536A2F3F_412A_B1B6_41B9_51CAE5D86C15, null, '85%', '85%', this.FadeInEffect_8ED05F70_96C4_F045_41DC_2AB82A556F92, this.FadeOutEffect_8ED06F70_96C4_F045_41DA_C74400CF7B15, {'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'rollOverBorderSize':0,'pressedBackgroundColorDirection':'vertical','borderColor':'#000000','backgroundColorDirection':'vertical','pressedIconColor':'#CCCCCC','iconLineWidth':3,'backgroundColor':['#000000','#000000','#000000'],'borderSize':0,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':10,'pressedIconWidth':25,'paddingLeft':10,'pressedIconHeight':25,'iconHeight':25,'backgroundOpacity':0.15,'rollOverBorderColor':'#000000','paddingBottom':10,'rollOverBackgroundOpacity':0.5,'rollOverIconHeight':25,'iconWidth':25,'rollOverIconLineWidth':3,'pressedBackgroundColor':['#000000','#000000','#000000'],'rollOverIconWidth':25,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':3,'pressedBorderSize':0,'rollOverIconColor':'#52B7EF','rollOverBackgroundColorDirection':'vertical','rollOverBackgroundColor':['#000000','#000000','#000000'],'iconColor':'#FFFFFF','paddingRight':10,'pressedBorderColor':'#000000'}, null, null, false)",
    "toolTipTextShadowBlurRadius": 3,
    "borderRadius": 0,
    "horizontalAlign": "center",
    "toolTipPaddingBottom": 4,
    "minWidth": 25,
    "cursor": "hand",
    "maxWidth": 70,
    "visible": false,
    "toolTipFontSize": 14,
    "borderSize": 0,
    "toolTipShadowHorizontalLength": 0,
    "toolTipShadowColor": "#333333",
    "toolTipShadowBlurRadius": 3,
    "toolTipFontWeight": "normal",
    "id": "IconButton_87577B8F_8E22_AF1B_41CC_79EB87AE6DED",
    "toolTipShadowSpread": 0,
    "toolTipTextShadowOpacity": 0,
    "backgroundOpacity": 0,
    "minHeight": 25,
    "paddingBottom": 0,
    "toolTipFontFamily": "Arial",
    "toolTipFontColor": "#606060",
    "shadow": false,
    "maxHeight": 70,
    "toolTipPaddingTop": 4,
    "rollOverIconURL": "skin/IconButton_87577B8F_8E22_AF1B_41CC_79EB87AE6DED_rollover.png",
    "toolTipPaddingRight": 6,
    "toolTip": "Info",
    "toolTipFontStyle": "normal"
   },
   {
    "paddingLeft": 0,
    "iconURL": "skin/IconButton_213ED70C_2DB2_E6C5_41B6_0CCE6C77E889.png",
    "verticalAlign": "middle",
    "toolTipBorderRadius": 3,
    "toolTipShadowOpacity": 1,
    "mode": "push",
    "paddingTop": 0,
    "height": "100%",
    "width": "100%",
    "toolTipBorderSize": 1,
    "toolTipBorderColor": "#767676",
    "toolTipTextShadowColor": "#000000",
    "toolTipPaddingLeft": 6,
    "toolTipBackgroundColor": "#000000",
    "class": "IconButton",
    "transparencyActive": true,
    "toolTipOpacity": 0.7,
    "paddingRight": 0,
    "toolTipShadowVerticalLength": 0,
    "click": "this.setMediaBehaviour(this.playList_592045D2_5728_BD22_41CD_37185FDEDD15, 0); this.MainViewerVideoPlayer.play()",
    "toolTipTextShadowBlurRadius": 3,
    "borderRadius": 0,
    "horizontalAlign": "center",
    "toolTipPaddingBottom": 4,
    "minWidth": 25,
    "cursor": "hand",
    "maxWidth": 70,
    "visible": false,
    "toolTipFontSize": 14,
    "borderSize": 0,
    "toolTipShadowHorizontalLength": 0,
    "toolTipShadowColor": "#333333",
    "toolTipShadowBlurRadius": 3,
    "toolTipFontWeight": "normal",
    "id": "IconButton_213ED70C_2DB2_E6C5_41B6_0CCE6C77E889",
    "toolTipShadowSpread": 0,
    "toolTipTextShadowOpacity": 0,
    "backgroundOpacity": 0,
    "minHeight": 25,
    "paddingBottom": 0,
    "toolTipFontFamily": "Arial",
    "toolTipFontColor": "#606060",
    "shadow": false,
    "maxHeight": 70,
    "toolTipPaddingTop": 4,
    "rollOverIconURL": "skin/IconButton_213ED70C_2DB2_E6C5_41B6_0CCE6C77E889_rollover.png",
    "toolTipPaddingRight": 6,
    "toolTip": "Play Video",
    "toolTipFontStyle": "normal"
   },
   "this.IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED",
   {
    "paddingLeft": 0,
    "iconURL": "skin/IconButton_2FC9210C_3E8F_C4D4_41A7_10D1404CA49B.png",
    "verticalAlign": "middle",
    "toolTipBorderRadius": 3,
    "toolTipShadowOpacity": 1,
    "mode": "push",
    "paddingTop": 0,
    "height": "85%",
    "width": "85%",
    "toolTipBorderSize": 1,
    "toolTipBorderColor": "#767676",
    "toolTipTextShadowColor": "#000000",
    "toolTipPaddingLeft": 6,
    "pressedIconURL": "skin/IconButton_2FC9210C_3E8F_C4D4_41A7_10D1404CA49B_pressed.png",
    "toolTipBackgroundColor": "#000000",
    "class": "IconButton",
    "transparencyActive": true,
    "toolTipOpacity": 0.7,
    "paddingRight": 0,
    "toolTipShadowVerticalLength": 0,
    "click": "this.setComponentVisibility(this.Container_53347472_4288_F6E6_4196_D7457B47D2CF, true, 0, this.effect_51CB7B74_4299_12E2_41B4_829087983DE5, 'showEffect', false)",
    "toolTipTextShadowBlurRadius": 3,
    "borderRadius": 0,
    "horizontalAlign": "center",
    "toolTipPaddingBottom": 4,
    "minWidth": 25,
    "cursor": "hand",
    "maxWidth": 70,
    "visible": false,
    "toolTipFontSize": 14,
    "borderSize": 0,
    "toolTipShadowHorizontalLength": 0,
    "toolTipShadowColor": "#333333",
    "toolTipShadowBlurRadius": 3,
    "toolTipFontWeight": "normal",
    "id": "IconButton_2FC9210C_3E8F_C4D4_41A7_10D1404CA49B",
    "toolTipShadowSpread": 0,
    "toolTipTextShadowOpacity": 0,
    "backgroundOpacity": 0,
    "minHeight": 25,
    "paddingBottom": 0,
    "toolTipFontFamily": "Arial",
    "toolTipFontColor": "#606060",
    "shadow": false,
    "maxHeight": 70,
    "toolTipPaddingTop": 4,
    "toolTipPaddingRight": 6,
    "toolTip": "FLoor Plan",
    "toolTipFontStyle": "normal"
   },
   {
    "paddingLeft": 0,
    "iconURL": "skin/IconButton_843BBEF5_8E22_690F_419D_28CBDD771ACC.png",
    "verticalAlign": "middle",
    "toolTipBorderRadius": 3,
    "toolTipShadowOpacity": 1,
    "mode": "toggle",
    "paddingTop": 0,
    "height": "100%",
    "width": "100%",
    "toolTipBorderSize": 1,
    "toolTipBorderColor": "#767676",
    "toolTipTextShadowColor": "#000000",
    "toolTipPaddingLeft": 6,
    "pressedIconURL": "skin/IconButton_843BBEF5_8E22_690F_419D_28CBDD771ACC_pressed.png",
    "toolTipBackgroundColor": "#000000",
    "class": "IconButton",
    "transparencyActive": true,
    "toolTipOpacity": 0.7,
    "paddingRight": 0,
    "toolTipShadowVerticalLength": 0,
    "click": "if(!this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472.get('visible')){ this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, true, 0, this.effect_15DDF232_3E91_44CF_41AB_F8C3E6067377, 'showEffect', false) } else if(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472.get('visible')){ this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, false, 0, this.effect_15DDE232_3E91_44CF_41B1_14501B4EC17A, 'hideEffect', false) }",
    "toolTipTextShadowBlurRadius": 3,
    "borderRadius": 0,
    "horizontalAlign": "center",
    "toolTipPaddingBottom": 4,
    "minWidth": 25,
    "cursor": "hand",
    "maxWidth": 70,
    "toolTipFontSize": 14,
    "borderSize": 0,
    "toolTipShadowHorizontalLength": 0,
    "toolTipShadowColor": "#333333",
    "toolTipShadowBlurRadius": 3,
    "toolTipFontWeight": "normal",
    "id": "IconButton_843BBEF5_8E22_690F_419D_28CBDD771ACC",
    "toolTipShadowSpread": 0,
    "toolTipTextShadowOpacity": 0,
    "backgroundOpacity": 0,
    "minHeight": 25,
    "paddingBottom": 0,
    "toolTipFontFamily": "Arial",
    "toolTipFontColor": "#606060",
    "shadow": false,
    "maxHeight": 70,
    "toolTipPaddingTop": 4,
    "toolTipPaddingRight": 6,
    "toolTip": "Panorama List",
    "toolTipFontStyle": "normal"
   }
  ]
 },
 {
  "paddingLeft": 0,
  "verticalAlign": "middle",
  "paddingTop": 0,
  "width": 500,
  "height": 50,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "class": "Container",
  "borderRadius": 5,
  "paddingRight": 0,
  "overflow": "visible",
  "gap": 5,
  "minWidth": 500,
  "horizontalAlign": "right",
  "top": "3%",
  "maxWidth": 500,
  "borderSize": 0,
  "minHeight": 55,
  "id": "Container_807F782A_8E23_A905_41DE_623121285A09",
  "scrollBarColor": "#000000",
  "backgroundOpacity": 0,
  "paddingBottom": 0,
  "layout": "horizontal",
  "shadow": false,
  "maxHeight": 55,
  "scrollBarVisible": "rollOver",
  "scrollBarOpacity": 0.5,
  "right": "1.5%",
  "contentOpaque": false,
  "children": [
   {
    "paddingLeft": 0,
    "verticalAlign": "middle",
    "paddingTop": 0,
    "height": 55,
    "width": 400,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "class": "Container",
    "borderRadius": 0,
    "paddingRight": 0,
    "overflow": "visible",
    "gap": 0,
    "minWidth": 100,
    "horizontalAlign": "right",
    "layout": "horizontal",
    "shadow": false,
    "visible": false,
    "borderSize": 0,
    "minHeight": 55,
    "id": "Container_80D3CF90_8E26_E705_41E0_E47025A2C106",
    "scrollBarColor": "#000000",
    "backgroundOpacity": 0,
    "paddingBottom": 0,
    "scrollBarVisible": "rollOver",
    "maxHeight": 55,
    "scrollBarOpacity": 0.5,
    "contentOpaque": false,
    "children": [
     "this.IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37",
     {
      "paddingLeft": 0,
      "iconURL": "skin/IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA.png",
      "verticalAlign": "middle",
      "toolTipBorderRadius": 3,
      "toolTipShadowOpacity": 1,
      "mode": "toggle",
      "paddingTop": 0,
      "height": "100%",
      "width": "100%",
      "toolTipBorderSize": 1,
      "toolTipBorderColor": "#767676",
      "toolTipTextShadowColor": "#000000",
      "toolTipPaddingLeft": 6,
      "pressedIconURL": "skin/IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA_pressed.png",
      "toolTipBackgroundColor": "#000000",
      "class": "IconButton",
      "transparencyActive": true,
      "toolTipOpacity": 0.7,
      "paddingRight": 0,
      "toolTipShadowVerticalLength": 0,
      "click": "if(!this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, true, 0, null, null, false) } else if(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, false, 0, null, null, false) }",
      "toolTipTextShadowBlurRadius": 3,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "toolTipPaddingBottom": 4,
      "minWidth": 1,
      "cursor": "hand",
      "maxWidth": 60,
      "toolTipFontSize": 14,
      "borderSize": 0,
      "toolTipShadowHorizontalLength": 0,
      "toolTipShadowColor": "#333333",
      "toolTipShadowBlurRadius": 3,
      "toolTipFontWeight": "normal",
      "id": "IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA",
      "toolTipShadowSpread": 0,
      "toolTipTextShadowOpacity": 0,
      "backgroundOpacity": 0,
      "minHeight": 1,
      "paddingBottom": 0,
      "toolTipFontFamily": "Arial",
      "toolTipFontColor": "#606060",
      "shadow": false,
      "maxHeight": 60,
      "toolTipPaddingTop": 4,
      "toolTipPaddingRight": 6,
      "toolTip": "Full Screen",
      "toolTipFontStyle": "normal"
     },
     {
      "paddingLeft": 0,
      "iconURL": "skin/IconButton_8105A313_8E22_BF0B_41E1_331C6035A930.png",
      "verticalAlign": "middle",
      "toolTipBorderRadius": 3,
      "toolTipShadowOpacity": 1,
      "mode": "toggle",
      "paddingTop": 0,
      "height": "100%",
      "width": "100%",
      "toolTipBorderSize": 1,
      "toolTipBorderColor": "#767676",
      "toolTipTextShadowColor": "#000000",
      "toolTipPaddingLeft": 6,
      "pressedIconURL": "skin/IconButton_8105A313_8E22_BF0B_41E1_331C6035A930_pressed.png",
      "toolTipBackgroundColor": "#000000",
      "class": "IconButton",
      "transparencyActive": true,
      "toolTipOpacity": 0.7,
      "paddingRight": 0,
      "toolTipShadowVerticalLength": 0,
      "click": "if(!this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, true, 0, this.effect_CACBF85D_EED0_7261_41DB_A3B65ECE0D5D, 'showEffect', false) } else if(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, false, 0, this.effect_CACBC85D_EED0_7261_41BE_8CF4C3A8170C, 'hideEffect', false) }",
      "toolTipTextShadowBlurRadius": 3,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "toolTipPaddingBottom": 4,
      "minWidth": 1,
      "cursor": "hand",
      "maxWidth": 60,
      "toolTipFontSize": 14,
      "borderSize": 0,
      "toolTipShadowHorizontalLength": 0,
      "toolTipShadowColor": "#333333",
      "toolTipShadowBlurRadius": 3,
      "toolTipFontWeight": "normal",
      "id": "IconButton_8105A313_8E22_BF0B_41E1_331C6035A930",
      "toolTipShadowSpread": 0,
      "toolTipTextShadowOpacity": 0,
      "backgroundOpacity": 0,
      "minHeight": 1,
      "paddingBottom": 0,
      "toolTipFontFamily": "Arial",
      "toolTipFontColor": "#606060",
      "shadow": false,
      "maxHeight": 60,
      "toolTipPaddingTop": 4,
      "toolTipPaddingRight": 6,
      "toolTip": "Audio On/Off",
      "toolTipFontStyle": "normal"
     },
     "this.IconButton_80E5955A_8E23_BB05_41CA_43DD61DBAEE9"
    ]
   },
   {
    "paddingLeft": 0,
    "iconURL": "skin/IconButton_811D89E1_8E3D_AB07_4191_94003C90B2FF.png",
    "verticalAlign": "middle",
    "toolTipBorderRadius": 3,
    "toolTipShadowOpacity": 1,
    "mode": "toggle",
    "paddingTop": 0,
    "height": "100%",
    "width": "100%",
    "toolTipBorderSize": 1,
    "toolTipBorderColor": "#767676",
    "toolTipTextShadowColor": "#000000",
    "toolTipPaddingLeft": 6,
    "toolTipBackgroundColor": "#000000",
    "class": "IconButton",
    "transparencyActive": true,
    "toolTipOpacity": 0.7,
    "paddingRight": 0,
    "toolTipShadowVerticalLength": 0,
    "click": "if(!this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, true, 0, this.effect_32C91197_3F22_3110_4181_9E76B593FBFE, 'showEffect', false) } else if(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, false, 0, this.effect_32C92197_3F22_3110_419D_E2E21968F16F, 'hideEffect', false) }",
    "toolTipTextShadowBlurRadius": 3,
    "borderRadius": 0,
    "horizontalAlign": "center",
    "toolTipPaddingBottom": 4,
    "minWidth": 55,
    "cursor": "hand",
    "maxWidth": 55,
    "toolTipFontSize": 14,
    "borderSize": 0,
    "toolTipShadowHorizontalLength": 0,
    "toolTipShadowColor": "#333333",
    "toolTipShadowBlurRadius": 3,
    "toolTipFontWeight": "normal",
    "id": "IconButton_811D89E1_8E3D_AB07_4191_94003C90B2FF",
    "toolTipShadowSpread": 0,
    "toolTipTextShadowOpacity": 0,
    "backgroundOpacity": 0,
    "minHeight": 55,
    "paddingBottom": 0,
    "toolTipFontFamily": "Arial",
    "toolTipFontColor": "#606060",
    "shadow": false,
    "maxHeight": 55,
    "toolTipPaddingTop": 4,
    "toolTipPaddingRight": 6,
    "toolTip": "Settings",
    "toolTipFontStyle": "normal"
   }
  ]
 },
 {
  "verticalAlign": "top",
  "backgroundColor": [
   "#000000"
  ],
  "selectedItemBackgroundColor": [],
  "scrollBarWidth": 7,
  "scrollBarMargin": 4,
  "itemHorizontalAlign": "center",
  "rollOverItemLabelFontWeight": "bold",
  "selectedItemLabelFontStyle": "italic",
  "paddingRight": 5,
  "class": "ThumbnailList",
  "shadow": false,
  "itemMode": "normal",
  "gap": 5,
  "itemLabelFontColor": "#FFFFFF",
  "rollOverItemLabelFontColor": "#FFFFFF",
  "itemThumbnailScaleMode": "fit_outside",
  "horizontalAlign": "left",
  "backgroundColorDirection": "vertical",
  "playList": "this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist",
  "selectedItemLabelTextDecoration": "underline",
  "scrollBarColor": "#52B7EF",
  "itemPaddingBottom": 3,
  "minHeight": 100,
  "itemLabelFontWeight": "normal",
  "rollOverItemLabelTextDecoration": "underline",
  "selectedItemLabelFontColor": "#FFFFFF",
  "itemThumbnailOpacity": 1,
  "paddingBottom": 5,
  "itemThumbnailBorderRadius": 25,
  "scrollBarVisible": "rollOver",
  "itemThumbnailShadow": false,
  "itemLabelTextDecoration": "none",
  "scrollBarOpacity": 1,
  "itemPaddingRight": 3,
  "itemLabelFontStyle": "normal",
  "paddingLeft": 5,
  "selectedItemThumbnailShadowBlurRadius": 10,
  "selectedItemThumbnailShadow": true,
  "selectedItemLabelFontSize": 12,
  "itemLabelHorizontalAlign": "center",
  "paddingTop": 5,
  "width": 105,
  "selectedItemThumbnailShadowHorizontalLength": 0,
  "selectedItemThumbnailShadowOpacity": 0.73,
  "itemBorderRadius": 0,
  "itemThumbnailWidth": 75,
  "selectedItemBorderSize": 0,
  "itemPaddingLeft": 3,
  "itemPaddingTop": 3,
  "itemVerticalAlign": "middle",
  "borderRadius": 3,
  "itemLabelGap": 9,
  "itemBackgroundColorDirection": "vertical",
  "selectedItemBorderRadius": 0,
  "itemBackgroundOpacity": 0,
  "itemBackgroundColor": [],
  "minWidth": 90,
  "selectedItemLabelFontWeight": "bold",
  "top": "15%",
  "maxWidth": 105,
  "bottom": "15%",
  "borderSize": 0,
  "backgroundColorRatios": [
   0
  ],
  "itemLabelFontSize": 12,
  "id": "ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472",
  "backgroundOpacity": 0.25,
  "selectedItemBackgroundColorRatios": [],
  "itemOpacity": 1,
  "selectedItemThumbnailShadowVerticalLength": 0,
  "itemLabelPosition": "bottom",
  "itemBackgroundColorRatios": [],
  "selectedItemBackgroundOpacity": 0,
  "itemLabelFontFamily": "Arial",
  "itemThumbnailHeight": 75,
  "right": "1.5%",
  "layout": "vertical"
 },
 {
  "paddingLeft": 0,
  "verticalAlign": "top",
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "paddingTop": 0,
  "height": "100%",
  "width": "100%",
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "class": "Container",
  "borderRadius": 0,
  "paddingRight": 0,
  "overflow": "scroll",
  "gap": 10,
  "minWidth": 1,
  "horizontalAlign": "left",
  "top": "0%",
  "backgroundColorDirection": "vertical",
  "shadow": false,
  "visible": false,
  "borderSize": 0,
  "backgroundColorRatios": [
   0,
   1
  ],
  "id": "Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB",
  "scrollBarColor": "#000000",
  "backgroundOpacity": 0.7,
  "minHeight": 1,
  "paddingBottom": 0,
  "layout": "absolute",
  "scrollBarVisible": "rollOver",
  "left": "0%",
  "scrollBarOpacity": 0.5,
  "contentOpaque": false,
  "children": [
   "this.ViewerAreaLabeled_9FD7235A_96CD_9045_41D9_23A3BCBDB1C6",
   "this.IconButton_9FEA51EA_96CC_905A_41D3_F42DB0CD0A74",
   "this.IconButton_9FB9BD3F_96C5_703B_41D7_65AEE6E85A96",
   "this.IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4"
  ]
 },
 {
  "paddingLeft": 0,
  "iconURL": "skin/IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB.png",
  "verticalAlign": "middle",
  "mode": "push",
  "paddingTop": 0,
  "height": "5.482%",
  "width": "3.03%",
  "class": "IconButton",
  "transparencyActive": true,
  "paddingRight": 0,
  "borderRadius": 0,
  "horizontalAlign": "center",
  "minWidth": 50,
  "top": "2%",
  "cursor": "hand",
  "maxWidth": 50,
  "visible": false,
  "borderSize": 0,
  "id": "IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB",
  "backgroundOpacity": 0,
  "minHeight": 50,
  "paddingBottom": 0,
  "shadow": false,
  "maxHeight": 50,
  "rollOverIconURL": "skin/IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB_rollover.png",
  "right": "2%"
 },
 {
  "paddingLeft": 0,
  "verticalAlign": "top",
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "paddingTop": 0,
  "layout": "absolute",
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "class": "Container",
  "borderRadius": 0,
  "paddingRight": 0,
  "overflow": "scroll",
  "gap": 10,
  "minWidth": 1,
  "horizontalAlign": "left",
  "top": "0%",
  "backgroundColorDirection": "vertical",
  "shadow": false,
  "bottom": "0%",
  "borderSize": 0,
  "backgroundColorRatios": [
   0,
   1
  ],
  "visible": false,
  "id": "Container_53347472_4288_F6E6_4196_D7457B47D2CF",
  "scrollBarColor": "#000000",
  "backgroundOpacity": 0.3,
  "minHeight": 1,
  "paddingBottom": 0,
  "scrollBarVisible": "rollOver",
  "left": "0%",
  "scrollBarOpacity": 0.5,
  "right": "0%",
  "contentOpaque": false,
  "children": [
   "this.MapViewer",
   {
    "paddingLeft": 0,
    "iconURL": "skin/IconButton_50D1A26C_4289_72E1_41CD_2B557DFCC24F.png",
    "verticalAlign": "middle",
    "mode": "push",
    "paddingTop": 0,
    "height": "5.91%",
    "width": "5.07%",
    "class": "IconButton",
    "transparencyActive": true,
    "paddingRight": 0,
    "click": "this.setComponentVisibility(this.Container_53347472_4288_F6E6_4196_D7457B47D2CF, false, 0, this.effect_500E3733_4297_3267_41C9_4935C0BEBF39, 'hideEffect', false)",
    "borderRadius": 0,
    "horizontalAlign": "center",
    "minWidth": 50,
    "top": "5%",
    "cursor": "hand",
    "maxWidth": 50,
    "borderSize": 0,
    "id": "IconButton_50D1A26C_4289_72E1_41CD_2B557DFCC24F",
    "backgroundOpacity": 0,
    "minHeight": 50,
    "paddingBottom": 0,
    "shadow": false,
    "maxHeight": 50,
    "rollOverIconURL": "skin/IconButton_50D1A26C_4289_72E1_41CD_2B557DFCC24F_rollover.png",
    "right": "5%"
   }
  ]
 },
 {
  "paddingLeft": 0,
  "showEffect": {
   "easing": "cubic_in_out",
   "duration": 350,
   "class": "FadeInEffect"
  },
  "backgroundColor": [
   "#000000"
  ],
  "paddingTop": 0,
  "class": "UIComponent",
  "borderRadius": 0,
  "paddingRight": 0,
  "minWidth": 0,
  "top": 0,
  "backgroundColorDirection": "vertical",
  "shadow": false,
  "bottom": 0,
  "borderSize": 0,
  "backgroundColorRatios": [
   0
  ],
  "visible": false,
  "id": "veilPopupPanorama",
  "backgroundOpacity": 0.55,
  "minHeight": 0,
  "paddingBottom": 0,
  "left": 0,
  "right": 0
 },
 {
  "paddingLeft": 0,
  "backgroundColor": [],
  "paddingTop": 0,
  "class": "ZoomImage",
  "borderRadius": 0,
  "paddingRight": 0,
  "scaleMode": "custom",
  "minWidth": 0,
  "top": 0,
  "backgroundColorDirection": "vertical",
  "shadow": false,
  "bottom": 0,
  "borderSize": 0,
  "backgroundColorRatios": [],
  "visible": false,
  "id": "zoomImagePopupPanorama",
  "backgroundOpacity": 1,
  "minHeight": 0,
  "paddingBottom": 0,
  "left": 0,
  "right": 0
 },
 {
  "fontStyle": "normal",
  "paddingLeft": 5,
  "verticalAlign": "middle",
  "backgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "fontSize": 12,
  "mode": "push",
  "paddingTop": 5,
  "iconHeight": 20,
  "textDecoration": "none",
  "class": "CloseButton",
  "borderRadius": 0,
  "rollOverIconColor": "#666666",
  "paddingRight": 5,
  "fontColor": "#FFFFFF",
  "fontFamily": "Arial",
  "horizontalAlign": "center",
  "fontWeight": "normal",
  "minWidth": 0,
  "iconColor": "#000000",
  "gap": 5,
  "top": 10,
  "backgroundColorDirection": "vertical",
  "cursor": "hand",
  "shadow": false,
  "visible": false,
  "borderSize": 0,
  "backgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "pressedIconColor": "#888888",
  "showEffect": {
   "easing": "cubic_in_out",
   "duration": 350,
   "class": "FadeInEffect"
  },
  "id": "closeButtonPopupPanorama",
  "backgroundOpacity": 0.3,
  "minHeight": 0,
  "paddingBottom": 5,
  "shadowColor": "#000000",
  "iconLineWidth": 5,
  "borderColor": "#000000",
  "shadowSpread": 1,
  "shadowBlurRadius": 6,
  "label": "",
  "right": 10,
  "iconBeforeLabel": true,
  "iconWidth": 20,
  "layout": "horizontal"
 }
], 
 "paddingLeft": 0,
 "mouseWheelEnabled": true,
 "verticalAlign": "top",
 "paddingTop": 0,
 "backgroundPreloadEnabled": true,
 "height": "100%",
 "vrPolyfillScale": 0.5,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "class": "Player",
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "visible",
 "buttonToggleMute": "this.IconButton_8105A313_8E22_BF0B_41E1_331C6035A930",
 "gap": 10,
 "minWidth": 20,
 "scripts": {
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getKey": function(key){  return window[key]; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "registerKey": function(key, value){  window[key] = value; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio) delete audios[audio.get('id')]; } if(audio) audio.stop(); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "unregisterKey": function(key){  delete window[key]; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "existsKey": function(key){  return key in window; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } }
 },
 "horizontalAlign": "left",
 "width": "100%",
 "shadow": false,
 "borderSize": 0,
 "id": "rootPlayer",
 "scrollBarColor": "#000000",
 "minHeight": 20,
 "paddingBottom": 0,
 "layout": "absolute",
 "scrollBarVisible": "rollOver",
 "buttonToggleFullscreen": "this.IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA",
 "start": "this.playAudioList([this.audio_15B68E59_3D54_1663_4199_CC0245D4ECA1]); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37], 'cardboardAvailable'); this.syncPlaylists([this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); this.playList_593F45DF_5728_BD22_41B0_D8E123AA0669.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA].forEach(function(component) { component.set('visible', false); }) }",
 "scrollBarOpacity": 0.5,
 "contentOpaque": false
})