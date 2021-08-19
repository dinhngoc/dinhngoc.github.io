TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "buttonPlay": {
   "toolTipPaddingBottom": 4,
   "verticalAlign": "middle",
   "mode": "push",
   "paddingTop": 0,
   "width": "100%",
   "iconURL": "skin/IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED.png",
   "height": "100%",
   "maxWidth": 70,
   "toolTipTextShadowOpacity": 0,
   "paddingLeft": 0,
   "toolTipPaddingTop": 4,
   "borderRadius": 0,
   "toolTipPaddingRight": 6,
   "toolTipBorderSize": 1,
   "toolTipFontSize": 11,
   "toolTipShadowOpacity": 1,
   "toolTipOpacity": 0.7,
   "class": "IconButton",
   "transparencyActive": true,
   "paddingRight": 0,
   "toolTipShadowVerticalLength": 0,
   "toolTipPaddingLeft": 6,
   "toolTipBorderColor": "#767676",
   "toolTipTextShadowColor": "#000000",
   "horizontalAlign": "center",
   "click": "this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, true, 0, this.effect_98AADBB0_96C5_F0C5_41B2_1C4D08E503DB, 'showEffect', false); this.playList_4C42649F_5EB8_3DAF_41C2_2243C10267BA.set('selectedIndex', 0)",
   "toolTipFontStyle": "normal",
   "toolTipBorderRadius": 3,
   "toolTip": "See Photos",
   "minHeight": 25,
   "rollOverIconURL": "skin/IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED_rollover.png",
   "cursor": "hand",
   "visible": false,
   "borderSize": 0,
   "toolTipTextShadowBlurRadius": 3,
   "toolTipBackgroundColor": "#000000",
   "id": "IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED",
   "maxHeight": 70,
   "toolTipFontWeight": "normal",
   "paddingBottom": 0,
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
    "mode": "push",
    "paddingTop": 0,
    "width": "3.03%",
    "iconURL": "skin/IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4.png",
    "height": "5.48%",
    "maxWidth": 50,
    "paddingLeft": 0,
    "borderRadius": 0,
    "class": "IconButton",
    "transparencyActive": true,
    "paddingRight": 0,
    "horizontalAlign": "center",
    "click": "this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, false, 0, this.effect_9B0AF4E2_96C4_F045_41D3_0E00FEE03A15, 'hideEffect', false)",
    "minHeight": 50,
    "rollOverIconURL": "skin/IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4_rollover.png",
    "top": "2%",
    "cursor": "hand",
    "borderSize": 0,
    "id": "IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4",
    "maxHeight": 50,
    "paddingBottom": 0,
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
  "id": "ViewerAreaLabeled_9FD7235A_96CD_9045_41D9_23A3BCBDB1C6PhotoAlbumPlayer",
  "buttonPrevious": {
   "verticalAlign": "middle",
   "mode": "push",
   "paddingTop": 0,
   "width": "4.24%",
   "iconURL": "skin/IconButton_9FEA51EA_96CC_905A_41D3_F42DB0CD0A74.png",
   "maxWidth": 70,
   "paddingLeft": 0,
   "borderRadius": 0,
   "class": "IconButton",
   "transparencyActive": true,
   "paddingRight": 0,
   "horizontalAlign": "center",
   "minHeight": 70,
   "rollOverIconURL": "skin/IconButton_9FEA51EA_96CC_905A_41D3_F42DB0CD0A74_rollover.png",
   "top": "40%",
   "cursor": "hand",
   "bottom": "40%",
   "borderSize": 0,
   "id": "IconButton_9FEA51EA_96CC_905A_41D3_F42DB0CD0A74",
   "maxHeight": 70,
   "paddingBottom": 0,
   "left": "1%",
   "backgroundOpacity": 0,
   "minWidth": 70,
   "shadow": false
  },
  "buttonNext": {
   "verticalAlign": "middle",
   "mode": "push",
   "paddingTop": 0,
   "width": "4.24%",
   "iconURL": "skin/IconButton_9FB9BD3F_96C5_703B_41D7_65AEE6E85A96.png",
   "maxWidth": 70,
   "paddingLeft": 0,
   "borderRadius": 0,
   "class": "IconButton",
   "transparencyActive": true,
   "paddingRight": 0,
   "horizontalAlign": "center",
   "minHeight": 70,
   "rollOverIconURL": "skin/IconButton_9FB9BD3F_96C5_703B_41D7_65AEE6E85A96_rollover.png",
   "top": "40%",
   "cursor": "hand",
   "bottom": "40%",
   "borderSize": 0,
   "id": "IconButton_9FB9BD3F_96C5_703B_41D7_65AEE6E85A96",
   "maxHeight": 70,
   "paddingBottom": 0,
   "backgroundOpacity": 0,
   "minWidth": 70,
   "right": "1%",
   "shadow": false
  },
  "viewerArea": {
   "shadow": false,
   "progressBorderRadius": 0,
   "progressBarBackgroundColorDirection": "vertical",
   "progressBackgroundColor": [
    "#FFFFFF"
   ],
   "toolTipPaddingBottom": 4,
   "playbackBarHeadShadowVerticalLength": 0,
   "progressBarOpacity": 1,
   "playbackBarProgressBackgroundColorDirection": "vertical",
   "paddingLeft": 0,
   "progressRight": 0,
   "toolTipBorderSize": 1,
   "playbackBarBackgroundColor": [
    "#FFFFFF"
   ],
   "toolTipShadowOpacity": 1,
   "toolTipOpacity": 0.7,
   "playbackBarBorderColor": "#FFFFFF",
   "class": "ViewerArea",
   "playbackBarHeight": 10,
   "paddingRight": 0,
   "toolTipShadowVerticalLength": 0,
   "toolTipTextShadowColor": "#000000",
   "playbackBarHeadWidth": 6,
   "playbackBarHeadShadow": true,
   "toolTipFontStyle": "normal",
   "minHeight": 1,
   "playbackBarProgressBorderSize": 0,
   "playbackBarHeadBackgroundColorDirection": "vertical",
   "progressBottom": 2,
   "progressBorderSize": 0,
   "playbackBarRight": 0,
   "toolTipBackgroundColor": "#000000",
   "playbackBarBackgroundColorDirection": "vertical",
   "progressBarBorderSize": 0,
   "progressBarBorderRadius": 0,
   "paddingBottom": 0,
   "transitionMode": "blending",
   "playbackBarOpacity": 1,
   "playbackBarProgressBorderRadius": 0,
   "toolTipShadowHorizontalLength": 0,
   "toolTipShadowSpread": 0,
   "toolTipShadowColor": "#333333",
   "toolTipShadowBlurRadius": 3,
   "playbackBarHeadShadowHorizontalLength": 0,
   "progressBackgroundOpacity": 1,
   "minWidth": 1,
   "playbackBarBorderRadius": 0,
   "toolTipFontColor": "#606060",
   "playbackBarProgressBorderColor": "#000000",
   "playbackBarHeadBackgroundColor": [
    "#111111",
    "#666666"
   ],
   "paddingTop": 0,
   "width": "100%",
   "playbackBarHeadBorderRadius": 0,
   "toolTipPaddingRight": 6,
   "toolTipTextShadowOpacity": 0,
   "height": "100%",
   "toolTipPaddingTop": 4,
   "borderRadius": 0,
   "toolTipFontSize": 11,
   "playbackBarProgressOpacity": 1,
   "progressLeft": 0,
   "playbackBarHeadShadowBlurRadius": 3,
   "playbackBarHeadBorderColor": "#000000",
   "progressBackgroundColorRatios": [
    0
   ],
   "playbackBarLeft": 0,
   "toolTipPaddingLeft": 6,
   "toolTipBorderColor": "#767676",
   "playbackBarProgressBackgroundColorRatios": [
    0
   ],
   "playbackBarBackgroundOpacity": 1,
   "playbackBarBorderSize": 0,
   "toolTipBorderRadius": 3,
   "playbackBarHeadShadowOpacity": 0.7,
   "playbackBarHeadHeight": 15,
   "top": "0%",
   "playbackBarHeadBackgroundColorRatios": [
    0,
    1
   ],
   "borderSize": 0,
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
   "progressOpacity": 1
  },
  "class": "PhotoAlbumPlayer",
  "buttonStop": [
   "this.IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4",
   "this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB"
  ]
 },
 {
  "adjacentPanoramas": [
   {
    "panorama": {
     "adjacentPanoramas": [
      {
       "panorama": {
        "adjacentPanoramas": [
         {
          "panorama": "this.panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044",
          "yaw": -172.22,
          "backwardYaw": -162.92,
          "class": "AdjacentPanorama",
          "distance": 1
         },
         {
          "panorama": {
           "adjacentPanoramas": [
            {
             "panorama": "this.panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044",
             "yaw": 161.78,
             "backwardYaw": 82.9,
             "class": "AdjacentPanorama",
             "distance": 1
            },
            {
             "panorama": "this.panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA",
             "yaw": -162.92,
             "backwardYaw": -172.22,
             "class": "AdjacentPanorama",
             "distance": 1
            },
            {
             "panorama": {
              "adjacentPanoramas": [
               {
                "panorama": "this.panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044",
                "yaw": -174.39,
                "backwardYaw": -178.2,
                "class": "AdjacentPanorama",
                "distance": 1
               },
               {
                "panorama": "this.panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA",
                "yaw": -170.58,
                "backwardYaw": -172.22,
                "class": "AdjacentPanorama",
                "distance": 1
               },
               {
                "panorama": "this.panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28",
                "yaw": -170.58,
                "backwardYaw": -162.92,
                "class": "AdjacentPanorama",
                "distance": 1
               },
               {
                "panorama": {
                 "adjacentPanoramas": [
                  {
                   "panorama": "this.panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044",
                   "yaw": -171.96,
                   "backwardYaw": -162.92,
                   "class": "AdjacentPanorama",
                   "distance": 1
                  },
                  {
                   "panorama": "this.panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA",
                   "yaw": -176.8,
                   "backwardYaw": 12.06,
                   "class": "AdjacentPanorama",
                   "distance": 1
                  },
                  {
                   "panorama": "this.panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28",
                   "yaw": -171.96,
                   "backwardYaw": -162.92,
                   "class": "AdjacentPanorama",
                   "distance": 1
                  },
                  {
                   "panorama": "this.panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069",
                   "yaw": -171.96,
                   "backwardYaw": -170.58,
                   "class": "AdjacentPanorama",
                   "distance": 1
                  },
                  {
                   "panorama": "this.panorama_9145F5B4_9D6A_310F_41B6_278704EC634D",
                   "yaw": -171.96,
                   "backwardYaw": -171.36,
                   "class": "AdjacentPanorama",
                   "distance": 1
                  },
                  {
                   "panorama": {
                    "adjacentPanoramas": [
                     {
                      "panorama": "this.panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044",
                      "yaw": -142.86,
                      "backwardYaw": 34.69,
                      "class": "AdjacentPanorama",
                      "distance": 1
                     },
                     {
                      "panorama": "this.panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA",
                      "yaw": -172.21,
                      "backwardYaw": -172.22,
                      "class": "AdjacentPanorama",
                      "distance": 1
                     },
                     {
                      "panorama": "this.panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28",
                      "yaw": -172.21,
                      "backwardYaw": -162.92,
                      "class": "AdjacentPanorama",
                      "distance": 1
                     },
                     {
                      "panorama": "this.panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069",
                      "yaw": -172.21,
                      "backwardYaw": -170.58,
                      "class": "AdjacentPanorama",
                      "distance": 1
                     },
                     {
                      "panorama": "this.panorama_916902A1_9D6A_7309_41D0_0B14DE574844",
                      "yaw": -172.21,
                      "backwardYaw": -171.96,
                      "class": "AdjacentPanorama",
                      "distance": 1
                     },
                     {
                      "panorama": "this.panorama_9145F5B4_9D6A_310F_41B6_278704EC634D",
                      "yaw": -172.21,
                      "backwardYaw": -171.36,
                      "class": "AdjacentPanorama",
                      "distance": 1
                     },
                     {
                      "panorama": {
                       "adjacentPanoramas": [
                        {
                         "panorama": "this.panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044",
                         "yaw": -157,
                         "backwardYaw": 34.72,
                         "class": "AdjacentPanorama",
                         "distance": 1
                        },
                        {
                         "panorama": "this.panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA",
                         "yaw": -170.2,
                         "backwardYaw": -172.22,
                         "class": "AdjacentPanorama",
                         "distance": 1
                        },
                        {
                         "panorama": "this.panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28",
                         "yaw": -170.2,
                         "backwardYaw": -162.92,
                         "class": "AdjacentPanorama",
                         "distance": 1
                        },
                        {
                         "panorama": "this.panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069",
                         "yaw": -170.2,
                         "backwardYaw": -170.58,
                         "class": "AdjacentPanorama",
                         "distance": 1
                        },
                        {
                         "panorama": "this.panorama_916902A1_9D6A_7309_41D0_0B14DE574844",
                         "yaw": -157.02,
                         "backwardYaw": 42.02,
                         "class": "AdjacentPanorama",
                         "distance": 1
                        },
                        {
                         "panorama": "this.panorama_9145F5B4_9D6A_310F_41B6_278704EC634D",
                         "yaw": -170.2,
                         "backwardYaw": -171.36,
                         "class": "AdjacentPanorama",
                         "distance": 1
                        },
                        {
                         "panorama": "this.panorama_91758D80_9D6A_1106_41DC_64D8466F87FC",
                         "yaw": -170.2,
                         "backwardYaw": -172.21,
                         "class": "AdjacentPanorama",
                         "distance": 1
                        },
                        {
                         "panorama": {
                          "adjacentPanoramas": [
                           {
                            "panorama": "this.panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044",
                            "yaw": -170.68,
                            "backwardYaw": -162.92,
                            "class": "AdjacentPanorama",
                            "distance": 1
                           },
                           {
                            "panorama": "this.panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA",
                            "yaw": -16.8,
                            "backwardYaw": -97.22,
                            "class": "AdjacentPanorama",
                            "distance": 1
                           },
                           {
                            "panorama": "this.panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28",
                            "yaw": -170.68,
                            "backwardYaw": -162.92,
                            "class": "AdjacentPanorama",
                            "distance": 1
                           },
                           {
                            "panorama": "this.panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069",
                            "yaw": -170.68,
                            "backwardYaw": -170.58,
                            "class": "AdjacentPanorama",
                            "distance": 1
                           },
                           {
                            "panorama": "this.panorama_916902A1_9D6A_7309_41D0_0B14DE574844",
                            "yaw": -170.68,
                            "backwardYaw": -171.96,
                            "class": "AdjacentPanorama",
                            "distance": 1
                           },
                           {
                            "panorama": "this.panorama_9145F5B4_9D6A_310F_41B6_278704EC634D",
                            "yaw": 0.93,
                            "backwardYaw": 140.49,
                            "class": "AdjacentPanorama",
                            "distance": 1
                           },
                           {
                            "panorama": "this.panorama_91758D80_9D6A_1106_41DC_64D8466F87FC",
                            "yaw": -170.68,
                            "backwardYaw": -172.21,
                            "class": "AdjacentPanorama",
                            "distance": 1
                           },
                           {
                            "panorama": "this.panorama_916227CC_9D6A_311F_41E3_34FF7141124F",
                            "yaw": -170.68,
                            "backwardYaw": -170.2,
                            "class": "AdjacentPanorama",
                            "distance": 1
                           },
                           {
                            "panorama": {
                             "adjacentPanoramas": [
                              {
                               "panorama": "this.panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044",
                               "yaw": -173.12,
                               "backwardYaw": -162.92,
                               "class": "AdjacentPanorama",
                               "distance": 1
                              },
                              {
                               "panorama": "this.panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA",
                               "yaw": -173.12,
                               "backwardYaw": -172.22,
                               "class": "AdjacentPanorama",
                               "distance": 1
                              },
                              {
                               "panorama": "this.panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28",
                               "yaw": -173.12,
                               "backwardYaw": -162.92,
                               "class": "AdjacentPanorama",
                               "distance": 1
                              },
                              {
                               "panorama": "this.panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069",
                               "yaw": -173.12,
                               "backwardYaw": -170.58,
                               "class": "AdjacentPanorama",
                               "distance": 1
                              },
                              {
                               "panorama": "this.panorama_916902A1_9D6A_7309_41D0_0B14DE574844",
                               "yaw": -173.12,
                               "backwardYaw": -171.96,
                               "class": "AdjacentPanorama",
                               "distance": 1
                              },
                              {
                               "panorama": "this.panorama_9145F5B4_9D6A_310F_41B6_278704EC634D",
                               "yaw": -173.12,
                               "backwardYaw": -171.36,
                               "class": "AdjacentPanorama",
                               "distance": 1
                              },
                              {
                               "panorama": "this.panorama_91758D80_9D6A_1106_41DC_64D8466F87FC",
                               "yaw": 18.94,
                               "backwardYaw": -142.9,
                               "class": "AdjacentPanorama",
                               "distance": 1
                              },
                              {
                               "panorama": "this.panorama_916227CC_9D6A_311F_41E3_34FF7141124F",
                               "yaw": -173.12,
                               "backwardYaw": -170.2,
                               "class": "AdjacentPanorama",
                               "distance": 1
                              },
                              {
                               "panorama": "this.panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2",
                               "yaw": -173.12,
                               "backwardYaw": -170.68,
                               "class": "AdjacentPanorama",
                               "distance": 1
                              }
                             ],
                             "id": "panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA",
                             "vfov": 180,
                             "partial": false,
                             "hfovMin": 100,
                             "pitch": 0,
                             "label": "TERRACE",
                             "thumbnailUrl": "media/panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA_t.jpg",
                             "class": "Panorama",
                             "hfov": 360,
                             "audios": [
                              {
                               "autoplay": true,
                               "maximumAngle": 360,
                               "id": "audio_5E20D107_534F_3088_4192_A9F38893E7D5",
                               "loop": true,
                               "audio": {
                                "mp3Url": "media/audio_5E20D107_534F_3088_4192_A9F38893E7D5.mp3",
                                "class": "AudioResource",
                                "oggUrl": "media/audio_5E20D107_534F_3088_4192_A9F38893E7D5.ogg"
                               },
                               "yaw": 0,
                               "class": "DirectionalPanoramaAudio",
                               "pitch": 0
                              },
                              {
                               "autoplay": true,
                               "maximumAngle": 360,
                               "id": "audio_53AB1146_5DE9_5154_41CA_FED3E44D14A9",
                               "loop": true,
                               "audio": {
                                "mp3Url": "media/audio_53AB1146_5DE9_5154_41CA_FED3E44D14A9.mp3",
                                "class": "AudioResource",
                                "oggUrl": "media/audio_53AB1146_5DE9_5154_41CA_FED3E44D14A9.ogg"
                               },
                               "yaw": 0,
                               "class": "DirectionalPanoramaAudio",
                               "pitch": 0
                              }
                             ],
                             "frames": [
                              {
                               "overlays": [
                                {
                                 "areas": [
                                  {
                                   "toolTip": "TWIN BEDROOM",
                                   "displayTooltipInTouchScreens": true,
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D, this.camera_5488DF3C_5BF2_F3E9_41D1_C652E087859B); this.mainPlayList.set('selectedIndex', 8)",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "id": "overlay_914DB476_9D6A_170A_41D3_A4182884D4B3",
                                 "useHandCursor": true,
                                 "enabledInCardboard": true,
                                 "maps": [
                                  {
                                   "hfov": 5.63,
                                   "yaw": 18.93,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 41,
                                      "width": 41,
                                      "url": "media/panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA_0_HS_6_0_0_map.gif",
                                      "class": "ImageResourceLevel"
                                     }
                                    ]
                                   },
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": -20.35
                                  }
                                 ],
                                 "rollOverDisplay": false,
                                 "class": "HotspotPanoramaOverlay",
                                 "items": [
                                  {
                                   "yaw": 18.93,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 5.63,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 83,
                                      "width": 83,
                                      "url": "media/panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA_0_HS_6_0.png",
                                      "class": "ImageResourceLevel"
                                     }
                                    ]
                                   },
                                   "pitch": -20.35
                                  }
                                 ]
                                },
                                {
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2, this.camera_4A40F8BE_5EB8_35F1_41D5_3BFE3190ADB7); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 5); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 4)",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "id": "overlay_914DA476_9D6A_170A_41D4_F5A9A50D4F34",
                                 "useHandCursor": true,
                                 "enabledInCardboard": true,
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
                                      "url": "media/panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA_0_HS_5_0_0_map.gif",
                                      "class": "ImageResourceLevel"
                                     }
                                    ]
                                   },
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": 85.84
                                  }
                                 ],
                                 "rollOverDisplay": true,
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
                                      "url": "media/panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA_0_HS_5_0.png",
                                      "class": "ImageResourceLevel"
                                     }
                                    ]
                                   },
                                   "pitch": 85.84
                                  }
                                 ]
                                },
                                {
                                 "areas": [
                                  {
                                   "toolTip": "TWIN BEDROOM",
                                   "displayTooltipInTouchScreens": true,
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_91758D80_9D6A_1106_41DC_64D8466F87FC, this.camera_4A6798AC_5EB8_3591_41C5_9DCF32226579); this.mainPlayList.set('selectedIndex', 8)",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "id": "overlay_914D4476_9D6A_170A_41A7_1A222953F06E",
                                 "useHandCursor": true,
                                 "enabledInCardboard": true,
                                 "maps": [
                                  {
                                   "hfov": 8.07,
                                   "yaw": 18.94,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 60,
                                      "width": 60,
                                      "url": "media/panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA_0_HS_7_0_0_map.gif",
                                      "class": "ImageResourceLevel"
                                     }
                                    ]
                                   },
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": -21.01
                                  }
                                 ],
                                 "rollOverDisplay": false,
                                 "class": "HotspotPanoramaOverlay",
                                 "items": [
                                  {
                                   "yaw": 18.94,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 8.07,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 120,
                                      "width": 120,
                                      "url": "media/panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA_0_HS_7_0.png",
                                      "class": "ImageResourceLevel"
                                     }
                                    ]
                                   },
                                   "pitch": -21.01
                                  }
                                 ]
                                }
                               ],
                               "thumbnailUrl": "media/panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA_t.jpg",
                               "class": "SphericPanoramaFrame",
                               "sphere": {
                                "class": "ImageResource",
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
                                ]
                               }
                              }
                             ],
                             "hfovMax": 120
                            },
                            "yaw": -170.68,
                            "backwardYaw": -173.12,
                            "class": "AdjacentPanorama",
                            "distance": 1
                           }
                          ],
                          "id": "panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2",
                          "vfov": 180,
                          "partial": false,
                          "hfovMin": 100,
                          "pitch": 0,
                          "label": "ENTRANCE",
                          "thumbnailUrl": "media/panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2_t.jpg",
                          "class": "Panorama",
                          "hfov": 360,
                          "audios": [
                           {
                            "autoplay": true,
                            "maximumAngle": 360,
                            "id": "audio_5F019C46_534B_1089_41CA_DD158DC6F095",
                            "loop": true,
                            "audio": {
                             "mp3Url": "media/audio_5F019C46_534B_1089_41CA_DD158DC6F095.mp3",
                             "class": "AudioResource",
                             "oggUrl": "media/audio_5F019C46_534B_1089_41CA_DD158DC6F095.ogg"
                            },
                            "yaw": 0,
                            "class": "DirectionalPanoramaAudio",
                            "pitch": 0
                           }
                          ],
                          "frames": [
                           {
                            "overlays": [
                             {
                              "areas": [
                               {
                                "toolTip": "POOL",
                                "displayTooltipInTouchScreens": true,
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D, this.camera_55581C8B_5BF2_F6AF_41D1_02AAAFF73E03); this.mainPlayList.set('selectedIndex', 2)",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "id": "overlay_916947EC_9D6B_F11F_41D6_5EEC27EF8F9A",
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "maps": [
                               {
                                "hfov": 4.97,
                                "yaw": -16.79,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 34,
                                   "width": 34,
                                   "url": "media/panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2_0_HS_0_0_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ]
                                },
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": -9.28
                               }
                              ],
                              "rollOverDisplay": false,
                              "class": "HotspotPanoramaOverlay",
                              "items": [
                               {
                                "yaw": -16.79,
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 4.97,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 69,
                                   "width": 69,
                                   "url": "media/panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2_0_HS_0_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ]
                                },
                                "pitch": -9.28
                               }
                              ]
                             },
                             {
                              "areas": [
                               {
                                "toolTip": "STREET VIEW",
                                "displayTooltipInTouchScreens": true,
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_475F6865_559D_57C8_41B1_BBF1B7029D8E, this.camera_55602CAB_5BF2_F6EF_41A1_3BA349C88636); this.mainPlayList.set('selectedIndex', 0)",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "id": "overlay_916987EC_9D6B_F11F_41BB_7D24AFE8F505",
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "maps": [
                               {
                                "hfov": 4.56,
                                "yaw": 0.94,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 34,
                                   "width": 34,
                                   "url": "media/panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2_0_HS_6_0_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ]
                                },
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": -25.17
                               }
                              ],
                              "rollOverDisplay": false,
                              "class": "HotspotPanoramaOverlay",
                              "items": [
                               {
                                "yaw": 0.94,
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 4.56,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 69,
                                   "width": 69,
                                   "url": "media/panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2_0_HS_6_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ]
                                },
                                "pitch": -25.17
                               }
                              ]
                             },
                             {
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA, this.camera_4AC17867_5EB8_349F_41C8_948919132FBC); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 5); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 8)",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "id": "overlay_9169A7EC_9D6B_F11F_41CA_A9E6728D96FC",
                              "useHandCursor": true,
                              "enabledInCardboard": true,
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
                                   "url": "media/panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2_0_HS_1_0_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ]
                                },
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": 83.2
                               }
                              ],
                              "rollOverDisplay": true,
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
                                   "url": "media/panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2_0_HS_1_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ]
                                },
                                "pitch": 83.2
                               }
                              ]
                             },
                             {
                              "areas": [
                               {
                                "toolTip": "POOL",
                                "displayTooltipInTouchScreens": true,
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA, this.camera_4AA3E825_5EB8_3490_41D1_A24F3E100F4D); this.mainPlayList.set('selectedIndex', 2)",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "id": "overlay_9169C7EC_9D6B_F11F_41C7_A3B2A477B925",
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "maps": [
                               {
                                "hfov": 7.12,
                                "yaw": -16.8,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 50,
                                   "width": 50,
                                   "url": "media/panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2_0_HS_7_0_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ]
                                },
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": -8.74
                               }
                              ],
                              "rollOverDisplay": false,
                              "class": "HotspotPanoramaOverlay",
                              "items": [
                               {
                                "yaw": -16.8,
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 7.12,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 100,
                                   "width": 100,
                                   "url": "media/panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2_0_HS_7_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ]
                                },
                                "pitch": -8.74
                               }
                              ]
                             },
                             {
                              "areas": [
                               {
                                "toolTip": "STREET VIEW",
                                "displayTooltipInTouchScreens": true,
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_9145F5B4_9D6A_310F_41B6_278704EC634D, this.camera_4AE8884B_5EB8_3490_41BF_B8528D0D6D10); this.mainPlayList.set('selectedIndex', 0)",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "id": "overlay_9169D7ED_9D6B_F119_41C3_694AFA3B7253",
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "maps": [
                               {
                                "hfov": 6.54,
                                "yaw": 0.93,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 50,
                                   "width": 50,
                                   "url": "media/panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2_0_HS_8_0_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ]
                                },
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": -24.65
                               }
                              ],
                              "rollOverDisplay": false,
                              "class": "HotspotPanoramaOverlay",
                              "items": [
                               {
                                "yaw": 0.93,
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 6.54,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 100,
                                   "width": 100,
                                   "url": "media/panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2_0_HS_8_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ]
                                },
                                "pitch": -24.65
                               }
                              ]
                             }
                            ],
                            "thumbnailUrl": "media/panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2_t.jpg",
                            "class": "SphericPanoramaFrame",
                            "sphere": {
                             "class": "ImageResource",
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
                             ]
                            }
                           }
                          ],
                          "hfovMax": 120
                         },
                         "yaw": -170.2,
                         "backwardYaw": -170.68,
                         "class": "AdjacentPanorama",
                         "distance": 1
                        },
                        {
                         "panorama": "this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA",
                         "yaw": -170.2,
                         "backwardYaw": -173.12,
                         "class": "AdjacentPanorama",
                         "distance": 1
                        }
                       ],
                       "id": "panorama_916227CC_9D6A_311F_41E3_34FF7141124F",
                       "vfov": 180,
                       "partial": false,
                       "hfovMin": 100,
                       "pitch": 0,
                       "label": "SINGLE BR",
                       "thumbnailUrl": "media/panorama_916227CC_9D6A_311F_41E3_34FF7141124F_t.jpg",
                       "class": "Panorama",
                       "hfov": 360,
                       "audios": [
                        {
                         "autoplay": true,
                         "maximumAngle": 360,
                         "id": "audio_5FD12071_5349_1088_41CE_1A9919606FBF",
                         "loop": true,
                         "audio": {
                          "mp3Url": "media/audio_5FD12071_5349_1088_41CE_1A9919606FBF.mp3",
                          "class": "AudioResource",
                          "oggUrl": "media/audio_5FD12071_5349_1088_41CE_1A9919606FBF.ogg"
                         },
                         "yaw": 0,
                         "class": "DirectionalPanoramaAudio",
                         "pitch": 0
                        },
                        {
                         "autoplay": true,
                         "maximumAngle": 360,
                         "id": "audio_5049FC7B_5DEF_D73D_41B8_AB9CCE43637C",
                         "loop": true,
                         "audio": {
                          "mp3Url": "media/audio_5049FC7B_5DEF_D73D_41B8_AB9CCE43637C.mp3",
                          "class": "AudioResource",
                          "oggUrl": "media/audio_5049FC7B_5DEF_D73D_41B8_AB9CCE43637C.ogg"
                         },
                         "yaw": 0,
                         "class": "DirectionalPanoramaAudio",
                         "pitch": 0
                        }
                       ],
                       "frames": [
                        {
                         "overlays": [
                          {
                           "areas": [
                            {
                             "toolTip": "MASTER BEDROOM\u000a",
                             "displayTooltipInTouchScreens": true,
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF, this.camera_55D7BBEA_5BF2_F263_41D2_B1CC2C57A60F); this.mainPlayList.set('selectedIndex', 5)",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "id": "overlay_916217CC_9D6A_311F_41E1_8BEF8FED51E3",
                           "useHandCursor": true,
                           "enabledInCardboard": true,
                           "maps": [
                            {
                             "hfov": 6.59,
                             "yaw": -157.01,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 46,
                                "width": 45,
                                "url": "media/panorama_916227CC_9D6A_311F_41E3_34FF7141124F_0_HS_0_0_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ]
                             },
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": 5.5
                            }
                           ],
                           "rollOverDisplay": false,
                           "class": "HotspotPanoramaOverlay",
                           "items": [
                            {
                             "yaw": -157.01,
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 6.59,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 92,
                                "width": 91,
                                "url": "media/panorama_916227CC_9D6A_311F_41E3_34FF7141124F_0_HS_0_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ]
                             },
                             "pitch": 5.5
                            }
                           ]
                          },
                          {
                           "areas": [
                            {
                             "toolTip": "LIVING ROOM",
                             "displayTooltipInTouchScreens": true,
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_47B53902_572E_CEDF_41CC_C256D31A5443, this.camera_55FFAC21_5BF2_F59B_41D2_A4CCD4BC65CD); this.mainPlayList.set('selectedIndex', 3)",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "id": "overlay_9162E7CC_9D6A_311F_4199_A2B1F88DE39F",
                           "useHandCursor": true,
                           "enabledInCardboard": true,
                           "maps": [
                            {
                             "hfov": 5.88,
                             "yaw": -157.03,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 46,
                                "width": 45,
                                "url": "media/panorama_916227CC_9D6A_311F_41E3_34FF7141124F_0_HS_2_0_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ]
                             },
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": -27.49
                            }
                           ],
                           "rollOverDisplay": false,
                           "class": "HotspotPanoramaOverlay",
                           "items": [
                            {
                             "yaw": -157.03,
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 5.88,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 92,
                                "width": 91,
                                "url": "media/panorama_916227CC_9D6A_311F_41E3_34FF7141124F_0_HS_2_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ]
                             },
                             "pitch": -27.49
                            }
                           ]
                          },
                          {
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA, this.camera_4D440812_5EB8_34B0_41C9_2B05630F6B15); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 8); this.mainPlayList.set('selectedIndex', 9)",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "id": "overlay_9162F7CC_9D6A_311F_41D2_EC7CA4A52EE1",
                           "useHandCursor": true,
                           "enabledInCardboard": true,
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
                                "url": "media/panorama_916227CC_9D6A_311F_41E3_34FF7141124F_0_HS_1_0_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ]
                             },
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": 81.21
                            }
                           ],
                           "rollOverDisplay": true,
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
                                "url": "media/panorama_916227CC_9D6A_311F_41E3_34FF7141124F_0_HS_1_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ]
                             },
                             "pitch": 81.21
                            }
                           ]
                          },
                          {
                           "areas": [
                            {
                             "toolTip": "MASTER BEDROOM",
                             "displayTooltipInTouchScreens": true,
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044, this.camera_4D2927C7_5EB8_3B9F_41D6_399D52B06765); this.mainPlayList.set('selectedIndex', 5)",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "id": "overlay_9162D7CC_9D6A_311F_41CF_9DE4ED272EB1",
                           "useHandCursor": true,
                           "enabledInCardboard": true,
                           "maps": [
                            {
                             "hfov": 9.45,
                             "yaw": -157,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 66,
                                "width": 66,
                                "url": "media/panorama_916227CC_9D6A_311F_41E3_34FF7141124F_0_HS_3_0_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ]
                             },
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": 6.18
                            }
                           ],
                           "rollOverDisplay": false,
                           "class": "HotspotPanoramaOverlay",
                           "items": [
                            {
                             "yaw": -157,
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 9.45,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 132,
                                "width": 132,
                                "url": "media/panorama_916227CC_9D6A_311F_41E3_34FF7141124F_0_HS_3_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ]
                             },
                             "pitch": 6.18
                            }
                           ]
                          },
                          {
                           "areas": [
                            {
                             "toolTip": "LIVING ROOM",
                             "displayTooltipInTouchScreens": true,
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_916902A1_9D6A_7309_41D0_0B14DE574844, this.camera_4D1DE7EC_5EB8_3B90_41D1_B8BD55608BED); this.mainPlayList.set('selectedIndex', 3)",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "id": "overlay_916287CC_9D6A_311F_41DA_BF79E8211F43",
                           "useHandCursor": true,
                           "enabledInCardboard": true,
                           "maps": [
                            {
                             "hfov": 8.38,
                             "yaw": -157.02,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 66,
                                "width": 66,
                                "url": "media/panorama_916227CC_9D6A_311F_41E3_34FF7141124F_0_HS_4_0_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ]
                             },
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": -28.2
                            }
                           ],
                           "rollOverDisplay": false,
                           "class": "HotspotPanoramaOverlay",
                           "items": [
                            {
                             "yaw": -157.02,
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 8.38,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 132,
                                "width": 132,
                                "url": "media/panorama_916227CC_9D6A_311F_41E3_34FF7141124F_0_HS_4_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ]
                             },
                             "pitch": -28.2
                            }
                           ]
                          }
                         ],
                         "thumbnailUrl": "media/panorama_916227CC_9D6A_311F_41E3_34FF7141124F_t.jpg",
                         "class": "SphericPanoramaFrame",
                         "sphere": {
                          "class": "ImageResource",
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
                          ]
                         }
                        }
                       ],
                       "hfovMax": 120
                      },
                      "yaw": -172.21,
                      "backwardYaw": -170.2,
                      "class": "AdjacentPanorama",
                      "distance": 1
                     },
                     {
                      "panorama": "this.panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2",
                      "yaw": -172.21,
                      "backwardYaw": -170.68,
                      "class": "AdjacentPanorama",
                      "distance": 1
                     },
                     {
                      "panorama": "this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA",
                      "yaw": -142.9,
                      "backwardYaw": 18.94,
                      "class": "AdjacentPanorama",
                      "distance": 1
                     }
                    ],
                    "id": "panorama_91758D80_9D6A_1106_41DC_64D8466F87FC",
                    "vfov": 180,
                    "partial": false,
                    "hfovMin": 100,
                    "pitch": 0,
                    "label": "TWIN BR",
                    "thumbnailUrl": "media/panorama_91758D80_9D6A_1106_41DC_64D8466F87FC_t.jpg",
                    "class": "Panorama",
                    "hfov": 360,
                    "audios": [
                     {
                      "autoplay": true,
                      "maximumAngle": 360,
                      "id": "audio_5E08B9DF_534F_73B7_41C9_0C77F337DE42",
                      "loop": true,
                      "audio": {
                       "mp3Url": "media/audio_5E08B9DF_534F_73B7_41C9_0C77F337DE42.mp3",
                       "class": "AudioResource",
                       "oggUrl": "media/audio_5E08B9DF_534F_73B7_41C9_0C77F337DE42.ogg"
                      },
                      "yaw": 0,
                      "class": "DirectionalPanoramaAudio",
                      "pitch": 0
                     }
                    ],
                    "frames": [
                     {
                      "overlays": [
                       {
                        "areas": [
                         {
                          "toolTip": "TERRACE",
                          "displayTooltipInTouchScreens": true,
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_47EE4DFC_55B3_68B8_41B1_0BD4104FF116, this.camera_56043BB0_5BF2_F2FA_41B1_1DE6A0E08A4C); this.mainPlayList.set('selectedIndex', 9)",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "id": "overlay_9175FD80_9D6A_1106_41AA_58E5D2CD1C04",
                        "useHandCursor": true,
                        "enabledInCardboard": true,
                        "maps": [
                         {
                          "hfov": 6.55,
                          "yaw": -142.88,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 45,
                             "width": 45,
                             "url": "media/panorama_91758D80_9D6A_1106_41DC_64D8466F87FC_0_HS_2_0_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ]
                          },
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": 8.82
                         }
                        ],
                        "rollOverDisplay": false,
                        "class": "HotspotPanoramaOverlay",
                        "items": [
                         {
                          "yaw": -142.88,
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 6.55,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 91,
                             "width": 91,
                             "url": "media/panorama_91758D80_9D6A_1106_41DC_64D8466F87FC_0_HS_2_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ]
                          },
                          "pitch": 8.82
                         }
                        ]
                       },
                       {
                        "areas": [
                         {
                          "toolTip": "MASTER BEDROOM",
                          "displayTooltipInTouchScreens": true,
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF, this.camera_56700B7F_5BF2_F267_41C2_DC8D8F885C23); this.mainPlayList.set('selectedIndex', 5)",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "id": "overlay_9175ED80_9D6A_1106_41D5_F6221252AEF2",
                        "useHandCursor": true,
                        "enabledInCardboard": true,
                        "maps": [
                         {
                          "hfov": 5.66,
                          "yaw": -142.87,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 45,
                             "width": 45,
                             "url": "media/panorama_91758D80_9D6A_1106_41DC_64D8466F87FC_0_HS_0_0_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ]
                          },
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": -31.29
                         }
                        ],
                        "rollOverDisplay": false,
                        "class": "HotspotPanoramaOverlay",
                        "items": [
                         {
                          "yaw": -142.87,
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 5.66,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 91,
                             "width": 91,
                             "url": "media/panorama_91758D80_9D6A_1106_41DC_64D8466F87FC_0_HS_0_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ]
                          },
                          "pitch": -31.29
                         }
                        ]
                       },
                       {
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2, this.camera_4DCCD7B4_5EB8_3BF1_41C9_D96506C398CC); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 4)",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "id": "overlay_9175DD80_9D6A_1106_41D0_4ED70EEFA362",
                        "useHandCursor": true,
                        "enabledInCardboard": true,
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
                             "url": "media/panorama_91758D80_9D6A_1106_41DC_64D8466F87FC_0_HS_1_0_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ]
                          },
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": 81.71
                         }
                        ],
                        "rollOverDisplay": true,
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
                             "url": "media/panorama_91758D80_9D6A_1106_41DC_64D8466F87FC_0_HS_1_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ]
                          },
                          "pitch": 81.71
                         }
                        ]
                       },
                       {
                        "areas": [
                         {
                          "toolTip": "TERRACE",
                          "displayTooltipInTouchScreens": true,
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA, this.camera_4DDEB7BD_5EB8_3BF2_41B1_762D5835A5CD); this.mainPlayList.set('selectedIndex', 9)",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "id": "overlay_91750D80_9D6A_1106_41D4_EA14D9776F6B",
                        "useHandCursor": true,
                        "enabledInCardboard": true,
                        "maps": [
                         {
                          "hfov": 9.37,
                          "yaw": -142.9,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 66,
                             "width": 66,
                             "url": "media/panorama_91758D80_9D6A_1106_41DC_64D8466F87FC_0_HS_3_0_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ]
                          },
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": 9.48
                         }
                        ],
                        "rollOverDisplay": false,
                        "class": "HotspotPanoramaOverlay",
                        "items": [
                         {
                          "yaw": -142.9,
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 9.37,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 132,
                             "width": 132,
                             "url": "media/panorama_91758D80_9D6A_1106_41DC_64D8466F87FC_0_HS_3_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ]
                          },
                          "pitch": 9.48
                         }
                        ]
                       },
                       {
                        "areas": [
                         {
                          "toolTip": "MASTER BEDROOM",
                          "displayTooltipInTouchScreens": true,
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044, this.camera_4DA74772_5EB8_3B71_41C2_73C135C388C9); this.mainPlayList.set('selectedIndex', 5)",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "id": "overlay_91756D80_9D6A_1106_41D1_5718020AD198",
                        "useHandCursor": true,
                        "enabledInCardboard": true,
                        "maps": [
                         {
                          "hfov": 8.06,
                          "yaw": -142.86,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 66,
                             "width": 66,
                             "url": "media/panorama_91758D80_9D6A_1106_41DC_64D8466F87FC_0_HS_4_0_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ]
                          },
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": -31.97
                         }
                        ],
                        "rollOverDisplay": false,
                        "class": "HotspotPanoramaOverlay",
                        "items": [
                         {
                          "yaw": -142.86,
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 8.06,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 132,
                             "width": 132,
                             "url": "media/panorama_91758D80_9D6A_1106_41DC_64D8466F87FC_0_HS_4_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ]
                          },
                          "pitch": -31.97
                         }
                        ]
                       }
                      ],
                      "thumbnailUrl": "media/panorama_91758D80_9D6A_1106_41DC_64D8466F87FC_t.jpg",
                      "class": "SphericPanoramaFrame",
                      "sphere": {
                       "class": "ImageResource",
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
                       ]
                      }
                     }
                    ],
                    "hfovMax": 120
                   },
                   "yaw": -171.96,
                   "backwardYaw": -172.21,
                   "class": "AdjacentPanorama",
                   "distance": 1
                  },
                  {
                   "panorama": "this.panorama_916227CC_9D6A_311F_41E3_34FF7141124F",
                   "yaw": 42.02,
                   "backwardYaw": -157.02,
                   "class": "AdjacentPanorama",
                   "distance": 1
                  },
                  {
                   "panorama": "this.panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2",
                   "yaw": -171.96,
                   "backwardYaw": -170.68,
                   "class": "AdjacentPanorama",
                   "distance": 1
                  },
                  {
                   "panorama": "this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA",
                   "yaw": -171.96,
                   "backwardYaw": -173.12,
                   "class": "AdjacentPanorama",
                   "distance": 1
                  }
                 ],
                 "id": "panorama_916902A1_9D6A_7309_41D0_0B14DE574844",
                 "vfov": 180,
                 "partial": false,
                 "hfovMin": 100,
                 "pitch": 0,
                 "label": "LIVINGROOM",
                 "thumbnailUrl": "media/panorama_916902A1_9D6A_7309_41D0_0B14DE574844_t.jpg",
                 "class": "Panorama",
                 "hfov": 360,
                 "audios": [
                  {
                   "autoplay": true,
                   "maximumAngle": 360,
                   "id": "audio_5F3A7686_5349_3189_41B9_03AD1E92C6EA",
                   "loop": true,
                   "audio": {
                    "mp3Url": "media/audio_5F3A7686_5349_3189_41B9_03AD1E92C6EA.mp3",
                    "class": "AudioResource",
                    "oggUrl": "media/audio_5F3A7686_5349_3189_41B9_03AD1E92C6EA.ogg"
                   },
                   "yaw": 0,
                   "class": "DirectionalPanoramaAudio",
                   "pitch": 0
                  },
                  {
                   "autoplay": true,
                   "maximumAngle": 360,
                   "id": "audio_508C163F_5DEF_5335_41CB_6F4DF04ED378",
                   "loop": true,
                   "audio": {
                    "mp3Url": "media/audio_508C163F_5DEF_5335_41CB_6F4DF04ED378.mp3",
                    "class": "AudioResource",
                    "oggUrl": "media/audio_508C163F_5DEF_5335_41CB_6F4DF04ED378.ogg"
                   },
                   "yaw": 0,
                   "class": "DirectionalPanoramaAudio",
                   "pitch": 0
                  }
                 ],
                 "frames": [
                  {
                   "overlays": [
                    {
                     "areas": [
                      {
                       "toolTip": "SINGLE BEDROOM",
                       "displayTooltipInTouchScreens": true,
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC, this.camera_55BE4E50_5BF2_F5B9_41B2_A0DBD967D7CD); this.mainPlayList.set('selectedIndex', 4)",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "id": "overlay_916912A2_9D6A_730B_41B8_3A8427B71ECF",
                     "useHandCursor": true,
                     "enabledInCardboard": true,
                     "maps": [
                      {
                       "hfov": 5.96,
                       "yaw": 42.05,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 41,
                          "width": 41,
                          "url": "media/panorama_916902A1_9D6A_7309_41D0_0B14DE574844_0_HS_0_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ]
                       },
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -6.87
                      }
                     ],
                     "rollOverDisplay": false,
                     "class": "HotspotPanoramaOverlay",
                     "items": [
                      {
                       "yaw": 42.05,
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 5.96,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 83,
                          "width": 83,
                          "url": "media/panorama_916902A1_9D6A_7309_41D0_0B14DE574844_0_HS_0_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ]
                       },
                       "pitch": -6.87
                      }
                     ]
                    },
                    {
                     "areas": [
                      {
                       "toolTip": "POOL",
                       "displayTooltipInTouchScreens": true,
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_58A130B8_5610_6BC8_41D4_C62F0C289B3D, this.camera_5577FE77_5BF2_F267_41AE_B186A0A61737); this.mainPlayList.set('selectedIndex', 2)",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "id": "overlay_916922A2_9D6A_730B_41DE_1F49C2124306",
                     "useHandCursor": true,
                     "enabledInCardboard": true,
                     "maps": [
                      {
                       "hfov": 5.41,
                       "yaw": -176.79,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 41,
                          "width": 41,
                          "url": "media/panorama_916902A1_9D6A_7309_41D0_0B14DE574844_0_HS_5_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ]
                       },
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -25.6
                      }
                     ],
                     "rollOverDisplay": false,
                     "class": "HotspotPanoramaOverlay",
                     "items": [
                      {
                       "yaw": -176.79,
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 5.41,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 83,
                          "width": 83,
                          "url": "media/panorama_916902A1_9D6A_7309_41D0_0B14DE574844_0_HS_5_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ]
                       },
                       "pitch": -25.6
                      }
                     ]
                    },
                    {
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA, this.camera_4C0F7715_5EB8_3CB3_41BD_EC06EBEAE904); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 8); this.mainPlayList.set('selectedIndex', 5)",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "id": "overlay_9169D2A2_9D6A_730B_41B9_993A35E3613B",
                     "useHandCursor": true,
                     "enabledInCardboard": true,
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
                          "url": "media/panorama_916902A1_9D6A_7309_41D0_0B14DE574844_0_HS_1_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ]
                       },
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": 82.97
                      }
                     ],
                     "rollOverDisplay": true,
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
                          "url": "media/panorama_916902A1_9D6A_7309_41D0_0B14DE574844_0_HS_1_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ]
                       },
                       "pitch": 82.97
                      }
                     ]
                    },
                    {
                     "areas": [
                      {
                       "toolTip": "SINGLE BEDROOM",
                       "displayTooltipInTouchScreens": true,
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_916227CC_9D6A_311F_41E3_34FF7141124F, this.camera_4C3AC702_5EB8_3C91_41D1_4BEEE87510DC); this.mainPlayList.set('selectedIndex', 4)",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "id": "overlay_916992A2_9D6A_730B_41D1_B90F49E44C03",
                     "useHandCursor": true,
                     "enabledInCardboard": true,
                     "maps": [
                      {
                       "hfov": 8.59,
                       "yaw": 42.02,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 59,
                          "width": 59,
                          "url": "media/panorama_916902A1_9D6A_7309_41D0_0B14DE574844_0_HS_6_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ]
                       },
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -6.28
                      }
                     ],
                     "rollOverDisplay": false,
                     "class": "HotspotPanoramaOverlay",
                     "items": [
                      {
                       "yaw": 42.02,
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 8.59,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 119,
                          "width": 119,
                          "url": "media/panorama_916902A1_9D6A_7309_41D0_0B14DE574844_0_HS_6_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ]
                       },
                       "pitch": -6.28
                      }
                     ]
                    },
                    {
                     "areas": [
                      {
                       "toolTip": "POOL",
                       "displayTooltipInTouchScreens": true,
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA, this.camera_4CC986D4_5EB8_3DB0_41C6_AC82BB06AC5E); this.mainPlayList.set('selectedIndex', 2)",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "id": "overlay_9169B2A2_9D6A_730B_41D4_EE8149DC4E93",
                     "useHandCursor": true,
                     "enabledInCardboard": true,
                     "maps": [
                      {
                       "hfov": 7.83,
                       "yaw": -176.8,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 59,
                          "width": 59,
                          "url": "media/panorama_916902A1_9D6A_7309_41D0_0B14DE574844_0_HS_7_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ]
                       },
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -24.98
                      }
                     ],
                     "rollOverDisplay": false,
                     "class": "HotspotPanoramaOverlay",
                     "items": [
                      {
                       "yaw": -176.8,
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 7.83,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 119,
                          "width": 119,
                          "url": "media/panorama_916902A1_9D6A_7309_41D0_0B14DE574844_0_HS_7_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ]
                       },
                       "pitch": -24.98
                      }
                     ]
                    }
                   ],
                   "thumbnailUrl": "media/panorama_916902A1_9D6A_7309_41D0_0B14DE574844_t.jpg",
                   "class": "SphericPanoramaFrame",
                   "sphere": {
                    "class": "ImageResource",
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
                    ]
                   }
                  }
                 ],
                 "hfovMax": 120
                },
                "yaw": -170.58,
                "backwardYaw": -171.96,
                "class": "AdjacentPanorama",
                "distance": 1
               },
               {
                "panorama": "this.panorama_9145F5B4_9D6A_310F_41B6_278704EC634D",
                "yaw": -170.58,
                "backwardYaw": -171.36,
                "class": "AdjacentPanorama",
                "distance": 1
               },
               {
                "panorama": "this.panorama_91758D80_9D6A_1106_41DC_64D8466F87FC",
                "yaw": -170.58,
                "backwardYaw": -172.21,
                "class": "AdjacentPanorama",
                "distance": 1
               },
               {
                "panorama": "this.panorama_916227CC_9D6A_311F_41E3_34FF7141124F",
                "yaw": -170.58,
                "backwardYaw": -170.2,
                "class": "AdjacentPanorama",
                "distance": 1
               },
               {
                "panorama": "this.panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2",
                "yaw": -170.58,
                "backwardYaw": -170.68,
                "class": "AdjacentPanorama",
                "distance": 1
               },
               {
                "panorama": "this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA",
                "yaw": -170.58,
                "backwardYaw": -173.12,
                "class": "AdjacentPanorama",
                "distance": 1
               }
              ],
              "id": "panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069",
              "vfov": 180,
              "partial": false,
              "hfovMin": 100,
              "pitch": 0,
              "label": "BALCONY",
              "thumbnailUrl": "media/panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069_t.jpg",
              "class": "Panorama",
              "hfov": 360,
              "audios": [
               {
                "autoplay": true,
                "maximumAngle": 360,
                "id": "audio_5FA8081E_5349_30B9_41D0_06F2A3501C10",
                "loop": true,
                "audio": {
                 "mp3Url": "media/audio_5FA8081E_5349_30B9_41D0_06F2A3501C10.mp3",
                 "class": "AudioResource",
                 "oggUrl": "media/audio_5FA8081E_5349_30B9_41D0_06F2A3501C10.ogg"
                },
                "yaw": 0,
                "class": "DirectionalPanoramaAudio",
                "pitch": 0
               },
               {
                "autoplay": true,
                "maximumAngle": 360,
                "id": "audio_502EF191_5DEE_F1CC_41D5_35D2DA805B06",
                "loop": true,
                "audio": {
                 "mp3Url": "media/audio_502EF191_5DEE_F1CC_41D5_35D2DA805B06.mp3",
                 "class": "AudioResource",
                 "oggUrl": "media/audio_502EF191_5DEE_F1CC_41D5_35D2DA805B06.ogg"
                },
                "yaw": 0,
                "class": "DirectionalPanoramaAudio",
                "pitch": 0
               }
              ],
              "frames": [
               {
                "overlays": [
                 {
                  "areas": [
                   {
                    "toolTip": "MASTER BEDROOM",
                    "displayTooltipInTouchScreens": true,
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF, this.camera_55CB7E16_5BF2_F5B9_4191_4ABD27800AF8); this.mainPlayList.set('selectedIndex', 5)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "id": "overlay_9167A333_9D6A_1109_41CA_E1D737A39B12",
                  "useHandCursor": true,
                  "enabledInCardboard": true,
                  "maps": [
                   {
                    "hfov": 6.32,
                    "yaw": -174.37,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 60,
                       "width": 60,
                       "url": "media/panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069_0_HS_0_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -43
                   }
                  ],
                  "rollOverDisplay": false,
                  "class": "HotspotPanoramaOverlay",
                  "items": [
                   {
                    "yaw": -174.37,
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 6.32,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 120,
                       "width": 120,
                       "url": "media/panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069_0_HS_0_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "pitch": -43
                   }
                  ]
                 },
                 {
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA, this.camera_4CE5E6C1_5EB8_3D90_41C6_7ED088C56FB2); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 8); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 7)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "id": "overlay_9167D333_9D6A_1109_41C2_C53B15CF6B9A",
                  "useHandCursor": true,
                  "enabledInCardboard": true,
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
                       "url": "media/panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069_0_HS_1_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": 85.29
                   }
                  ],
                  "rollOverDisplay": true,
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
                       "url": "media/panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069_0_HS_1_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "pitch": 85.29
                   }
                  ]
                 },
                 {
                  "areas": [
                   {
                    "toolTip": "MASTER BEDROOM",
                    "displayTooltipInTouchScreens": true,
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044, this.camera_4A2D064E_5EB8_3C91_41D5_5FE8C97B7C70); this.mainPlayList.set('selectedIndex', 5)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "id": "overlay_9167F339_9D6A_1179_41DF_24F351FACEF4",
                  "useHandCursor": true,
                  "enabledInCardboard": true,
                  "maps": [
                   {
                    "hfov": 9.35,
                    "yaw": -174.39,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 87,
                       "width": 87,
                       "url": "media/panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069_0_HS_6_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -42.06
                   }
                  ],
                  "rollOverDisplay": false,
                  "class": "HotspotPanoramaOverlay",
                  "items": [
                   {
                    "yaw": -174.39,
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 9.35,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 174,
                       "width": 174,
                       "url": "media/panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069_0_HS_6_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "pitch": -42.06
                   }
                  ]
                 }
                ],
                "thumbnailUrl": "media/panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069_t.jpg",
                "class": "SphericPanoramaFrame",
                "sphere": {
                 "class": "ImageResource",
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
                 ]
                }
               }
              ],
              "hfovMax": 120
             },
             "yaw": -162.92,
             "backwardYaw": -170.58,
             "class": "AdjacentPanorama",
             "distance": 1
            },
            {
             "panorama": "this.panorama_916902A1_9D6A_7309_41D0_0B14DE574844",
             "yaw": -162.92,
             "backwardYaw": -171.96,
             "class": "AdjacentPanorama",
             "distance": 1
            },
            {
             "panorama": "this.panorama_9145F5B4_9D6A_310F_41B6_278704EC634D",
             "yaw": -162.92,
             "backwardYaw": -171.36,
             "class": "AdjacentPanorama",
             "distance": 1
            },
            {
             "panorama": "this.panorama_91758D80_9D6A_1106_41DC_64D8466F87FC",
             "yaw": -162.92,
             "backwardYaw": -172.21,
             "class": "AdjacentPanorama",
             "distance": 1
            },
            {
             "panorama": "this.panorama_916227CC_9D6A_311F_41E3_34FF7141124F",
             "yaw": -162.92,
             "backwardYaw": -170.2,
             "class": "AdjacentPanorama",
             "distance": 1
            },
            {
             "panorama": "this.panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2",
             "yaw": -162.92,
             "backwardYaw": -170.68,
             "class": "AdjacentPanorama",
             "distance": 1
            },
            {
             "panorama": "this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA",
             "yaw": -162.92,
             "backwardYaw": -173.12,
             "class": "AdjacentPanorama",
             "distance": 1
            }
           ],
           "id": "panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28",
           "vfov": 180,
           "partial": false,
           "hfovMin": 100,
           "pitch": 0,
           "label": "TOILET",
           "thumbnailUrl": "media/panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28_t.jpg",
           "class": "Panorama",
           "hfov": 360,
           "audios": [
            {
             "autoplay": true,
             "maximumAngle": 360,
             "id": "audio_5E6F6697_534F_3188_41D2_212D7D5C7CD4",
             "loop": true,
             "audio": {
              "mp3Url": "media/audio_5E6F6697_534F_3188_41D2_212D7D5C7CD4.mp3",
              "class": "AudioResource",
              "oggUrl": "media/audio_5E6F6697_534F_3188_41D2_212D7D5C7CD4.ogg"
             },
             "yaw": 0,
             "class": "DirectionalPanoramaAudio",
             "pitch": 0
            },
            {
             "autoplay": true,
             "maximumAngle": 360,
             "id": "audio_53E0760B_5DE9_52DC_41AD_96CE4D26DD8B",
             "loop": true,
             "audio": {
              "mp3Url": "media/audio_53E0760B_5DE9_52DC_41AD_96CE4D26DD8B.mp3",
              "class": "AudioResource",
              "oggUrl": "media/audio_53E0760B_5DE9_52DC_41AD_96CE4D26DD8B.ogg"
             },
             "yaw": 0,
             "class": "DirectionalPanoramaAudio",
             "pitch": 0
            }
           ],
           "frames": [
            {
             "overlays": [
              {
               "areas": [
                {
                 "toolTip": "MASTER BEDROOM",
                 "displayTooltipInTouchScreens": true,
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_45750F9A_5593_A978_41D1_DB2A12878BDF, this.camera_57262CFF_5BF2_F667_41D4_80634CF1C7DB); this.mainPlayList.set('selectedIndex', 5)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "id": "overlay_9164399E_9D6A_313B_41D8_325A071444CD",
               "useHandCursor": true,
               "enabledInCardboard": true,
               "maps": [
                {
                 "hfov": 6.58,
                 "yaw": 161.77,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 49,
                    "width": 49,
                    "url": "media/panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28_0_HS_2_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -21.08
                }
               ],
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay",
               "items": [
                {
                 "yaw": 161.77,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 6.58,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 98,
                    "width": 98,
                    "url": "media/panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28_0_HS_2_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "pitch": -21.08
                }
               ]
              },
              {
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA, this.camera_4AD28645_5EB8_3C93_41A0_F05F4CF02CD0); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 8)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "id": "overlay_9164699E_9D6A_313B_41E1_AD85006D71DF",
               "useHandCursor": true,
               "enabledInCardboard": true,
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
                    "url": "media/panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28_0_HS_1_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": 80.2
                }
               ],
               "rollOverDisplay": true,
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
                    "url": "media/panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28_0_HS_1_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "pitch": 80.2
                }
               ]
              },
              {
               "areas": [
                {
                 "toolTip": "MASTER BEDROOM",
                 "displayTooltipInTouchScreens": true,
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044, this.camera_4AA335FB_5EB8_3F77_41A9_9AF052F34B4A); this.mainPlayList.set('selectedIndex', 5)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "id": "overlay_9164499E_9D6A_313B_41DE_815940631FC8",
               "useHandCursor": true,
               "enabledInCardboard": true,
               "maps": [
                {
                 "hfov": 9.65,
                 "yaw": 161.78,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 71,
                    "width": 71,
                    "url": "media/panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28_0_HS_3_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -20.35
                }
               ],
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay",
               "items": [
                {
                 "yaw": 161.78,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 9.65,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 143,
                    "width": 143,
                    "url": "media/panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28_0_HS_3_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "pitch": -20.35
                }
               ]
              }
             ],
             "thumbnailUrl": "media/panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28_t.jpg",
             "class": "SphericPanoramaFrame",
             "sphere": {
              "class": "ImageResource",
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
              ]
             }
            }
           ],
           "hfovMax": 120
          },
          "yaw": -172.22,
          "backwardYaw": -162.92,
          "class": "AdjacentPanorama",
          "distance": 1
         },
         {
          "panorama": "this.panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069",
          "yaw": -172.22,
          "backwardYaw": -170.58,
          "class": "AdjacentPanorama",
          "distance": 1
         },
         {
          "panorama": "this.panorama_916902A1_9D6A_7309_41D0_0B14DE574844",
          "yaw": 12.06,
          "backwardYaw": -176.8,
          "class": "AdjacentPanorama",
          "distance": 1
         },
         {
          "panorama": "this.panorama_9145F5B4_9D6A_310F_41B6_278704EC634D",
          "yaw": -172.22,
          "backwardYaw": -171.36,
          "class": "AdjacentPanorama",
          "distance": 1
         },
         {
          "panorama": "this.panorama_91758D80_9D6A_1106_41DC_64D8466F87FC",
          "yaw": -172.22,
          "backwardYaw": -172.21,
          "class": "AdjacentPanorama",
          "distance": 1
         },
         {
          "panorama": "this.panorama_916227CC_9D6A_311F_41E3_34FF7141124F",
          "yaw": -172.22,
          "backwardYaw": -170.2,
          "class": "AdjacentPanorama",
          "distance": 1
         },
         {
          "panorama": "this.panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2",
          "yaw": -97.22,
          "backwardYaw": -16.8,
          "class": "AdjacentPanorama",
          "distance": 1
         },
         {
          "panorama": "this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA",
          "yaw": -172.22,
          "backwardYaw": -173.12,
          "class": "AdjacentPanorama",
          "distance": 1
         }
        ],
        "id": "panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA",
        "vfov": 180,
        "partial": false,
        "hfovMin": 100,
        "pitch": 0,
        "label": "POOL",
        "thumbnailUrl": "media/panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA_t.jpg",
        "class": "Panorama",
        "hfov": 360,
        "audios": [
         {
          "autoplay": true,
          "maximumAngle": 360,
          "id": "audio_5F11A888_534B_3198_41C1_CA34B7B483B7",
          "loop": true,
          "audio": {
           "mp3Url": "media/audio_5F11A888_534B_3198_41C1_CA34B7B483B7.mp3",
           "class": "AudioResource",
           "oggUrl": "media/audio_5F11A888_534B_3198_41C1_CA34B7B483B7.ogg"
          },
          "yaw": 0,
          "class": "DirectionalPanoramaAudio",
          "pitch": 0
         },
         {
          "autoplay": true,
          "maximumAngle": 360,
          "id": "audio_5116AAD0_5DE9_534C_41D3_54A18E2E7244",
          "loop": true,
          "audio": {
           "mp3Url": "media/audio_5116AAD0_5DE9_534C_41D3_54A18E2E7244.mp3",
           "class": "AudioResource",
           "oggUrl": "media/audio_5116AAD0_5DE9_534C_41D3_54A18E2E7244.ogg"
          },
          "yaw": 0,
          "class": "DirectionalPanoramaAudio",
          "pitch": 0
         }
        ],
        "frames": [
         {
          "overlays": [
           {
            "areas": [
             {
              "toolTip": "LIVING ROOM",
              "displayTooltipInTouchScreens": true,
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_47B53902_572E_CEDF_41CC_C256D31A5443, this.camera_566FDDCF_5BF2_F6A7_41C3_D60F04E20C30); this.mainPlayList.set('selectedIndex', 3)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "id": "overlay_96931415_9D6A_370E_41C9_9E915A7267A4",
            "useHandCursor": true,
            "enabledInCardboard": true,
            "maps": [
             {
              "hfov": 6.33,
              "yaw": 12.08,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 52,
                 "width": 52,
                 "url": "media/panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA_0_HS_0_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -33.14
             }
            ],
            "rollOverDisplay": false,
            "class": "HotspotPanoramaOverlay",
            "items": [
             {
              "yaw": 12.08,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 6.33,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 105,
                 "width": 105,
                 "url": "media/panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA_0_HS_0_0.png",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "pitch": -33.14
             }
            ]
           },
           {
            "areas": [
             {
              "toolTip": "ENTRANCE",
              "displayTooltipInTouchScreens": true,
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E, this.camera_565ACDA7_5BF2_F6E7_41BA_8BE7CEB9351B); this.mainPlayList.set('selectedIndex', 1)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "id": "overlay_96936415_9D6A_370E_41DA_61A322290279",
            "useHandCursor": true,
            "enabledInCardboard": true,
            "maps": [
             {
              "hfov": 5.99,
              "yaw": -97.88,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 43,
                 "width": 43,
                 "url": "media/panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA_0_HS_6_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -16.95
             }
            ],
            "rollOverDisplay": false,
            "class": "HotspotPanoramaOverlay",
            "items": [
             {
              "yaw": -97.88,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 5.99,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 86,
                 "width": 86,
                 "url": "media/panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA_0_HS_6_0.png",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "pitch": -16.95
             }
            ]
           },
           {
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA, this.camera_4D5045F2_5EB8_3F71_41C6_49DB42BEBE95); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 5); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 8); this.mainPlayList.set('selectedIndex', 6)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "id": "overlay_96934415_9D6A_370E_41E0_14989CE3B134",
            "useHandCursor": true,
            "enabledInCardboard": true,
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
                 "url": "media/panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA_0_HS_1_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "class": "HotspotPanoramaOverlayMap",
              "pitch": 82.35
             }
            ],
            "rollOverDisplay": true,
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
                 "url": "media/panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA_0_HS_1_0.png",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "pitch": 82.35
             }
            ]
           },
           {
            "areas": [
             {
              "toolTip": "LIVING ROOM",
              "displayTooltipInTouchScreens": true,
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_916902A1_9D6A_7309_41D0_0B14DE574844, this.camera_4D1C4596_5EB8_3FB0_41D6_F7E6FD53B617); this.mainPlayList.set('selectedIndex', 3)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "id": "overlay_96938415_9D6A_370E_41E2_76474A8FC68D",
            "useHandCursor": true,
            "enabledInCardboard": true,
            "maps": [
             {
              "hfov": 9.13,
              "yaw": 12.06,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 75,
                 "width": 75,
                 "url": "media/panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA_0_HS_7_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -32.33
             }
            ],
            "rollOverDisplay": false,
            "class": "HotspotPanoramaOverlay",
            "items": [
             {
              "yaw": 12.06,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 9.13,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 150,
                 "width": 150,
                 "url": "media/panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA_0_HS_7_0.png",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "pitch": -32.33
             }
            ]
           },
           {
            "areas": [
             {
              "toolTip": "ENTRANCE",
              "displayTooltipInTouchScreens": true,
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2, this.camera_4D4715E8_5EB8_3F91_41C7_FC2EACF0E3F0); this.mainPlayList.set('selectedIndex', 1)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "id": "overlay_9693C415_9D6A_3735_41D5_482009BAE28B",
            "useHandCursor": true,
            "enabledInCardboard": true,
            "maps": [
             {
              "hfov": 8.61,
              "yaw": -97.22,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 62,
                 "width": 62,
                 "url": "media/panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA_0_HS_8_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -16.94
             }
            ],
            "rollOverDisplay": false,
            "class": "HotspotPanoramaOverlay",
            "items": [
             {
              "yaw": -97.22,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 8.61,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 125,
                 "width": 125,
                 "url": "media/panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA_0_HS_8_0.png",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "pitch": -16.94
             }
            ]
           }
          ],
          "thumbnailUrl": "media/panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA_t.jpg",
          "class": "SphericPanoramaFrame",
          "sphere": {
           "class": "ImageResource",
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
           ]
          }
         }
        ],
        "hfovMax": 120
       },
       "yaw": -162.92,
       "backwardYaw": -172.22,
       "class": "AdjacentPanorama",
       "distance": 1
      },
      {
       "panorama": "this.panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28",
       "yaw": 82.9,
       "backwardYaw": 161.78,
       "class": "AdjacentPanorama",
       "distance": 1
      },
      {
       "panorama": "this.panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069",
       "yaw": -178.2,
       "backwardYaw": -174.39,
       "class": "AdjacentPanorama",
       "distance": 1
      },
      {
       "panorama": "this.panorama_916902A1_9D6A_7309_41D0_0B14DE574844",
       "yaw": -162.92,
       "backwardYaw": -171.96,
       "class": "AdjacentPanorama",
       "distance": 1
      },
      {
       "panorama": "this.panorama_9145F5B4_9D6A_310F_41B6_278704EC634D",
       "yaw": -162.92,
       "backwardYaw": -171.36,
       "class": "AdjacentPanorama",
       "distance": 1
      },
      {
       "panorama": "this.panorama_91758D80_9D6A_1106_41DC_64D8466F87FC",
       "yaw": 34.69,
       "backwardYaw": -142.86,
       "class": "AdjacentPanorama",
       "distance": 1
      },
      {
       "panorama": "this.panorama_916227CC_9D6A_311F_41E3_34FF7141124F",
       "yaw": 34.72,
       "backwardYaw": -157,
       "class": "AdjacentPanorama",
       "distance": 1
      },
      {
       "panorama": "this.panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2",
       "yaw": -162.92,
       "backwardYaw": -170.68,
       "class": "AdjacentPanorama",
       "distance": 1
      },
      {
       "panorama": "this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA",
       "yaw": -162.92,
       "backwardYaw": -173.12,
       "class": "AdjacentPanorama",
       "distance": 1
      }
     ],
     "id": "panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044",
     "vfov": 180,
     "partial": false,
     "hfovMin": 100,
     "pitch": 0,
     "label": "MASTER BR",
     "thumbnailUrl": "media/panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044_t.jpg",
     "class": "Panorama",
     "hfov": 360,
     "audios": [
      {
       "autoplay": true,
       "maximumAngle": 360,
       "id": "audio_5F999E34_5349_3089_41A5_30E8148F4541",
       "loop": true,
       "audio": {
        "mp3Url": "media/audio_5F999E34_5349_3089_41A5_30E8148F4541.mp3",
        "class": "AudioResource",
        "oggUrl": "media/audio_5F999E34_5349_3089_41A5_30E8148F4541.ogg"
       },
       "yaw": 0,
       "class": "DirectionalPanoramaAudio",
       "pitch": 0
      }
     ],
     "frames": [
      {
       "overlays": [
        {
         "areas": [
          {
           "toolTip": "BALCONY",
           "displayTooltipInTouchScreens": true,
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_442A2C56_55AD_AFC8_41CC_E62C6090BD2C, this.camera_569B6D6C_5BF2_F669_41A7_8467FF9A6DAA); this.mainPlayList.set('selectedIndex', 6)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "id": "overlay_916EDC9F_9D6A_1739_41B6_EC73A228B461",
         "useHandCursor": true,
         "enabledInCardboard": true,
         "maps": [
          {
           "hfov": 5.48,
           "yaw": -178.25,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 49,
              "width": 49,
              "url": "media/panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044_0_HS_0_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -40.5
          }
         ],
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay",
         "items": [
          {
           "yaw": -178.25,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 5.48,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 99,
              "width": 99,
              "url": "media/panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044_0_HS_0_0.png",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "pitch": -40.5
          }
         ]
        },
        {
         "areas": [
          {
           "toolTip": "TOILET",
           "displayTooltipInTouchScreens": true,
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_46009756_572D_4167_41C6_2B49BD1EF7CE, this.camera_56E74D59_5BF2_F7AA_41D0_B6C262499B65); this.mainPlayList.set('selectedIndex', 7)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "id": "overlay_916ECC9F_9D6A_1739_41B3_0FCA7885269D",
         "useHandCursor": true,
         "enabledInCardboard": true,
         "maps": [
          {
           "hfov": 5.53,
           "yaw": 83.07,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 41,
              "width": 41,
              "url": "media/panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044_0_HS_2_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -22.75
          }
         ],
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay",
         "items": [
          {
           "yaw": 83.07,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 5.53,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 83,
              "width": 83,
              "url": "media/panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044_0_HS_2_0.png",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "pitch": -22.75
          }
         ]
        },
        {
         "areas": [
          {
           "toolTip": "TWIN BEDROOM",
           "displayTooltipInTouchScreens": true,
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_4404334D_55AE_B9D8_41CD_4007D8EB9C4D, this.camera_56C57D3C_5BF2_F7EA_41BA_23AB5285E45A); this.mainPlayList.set('selectedIndex', 8)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "id": "overlay_916EAC9F_9D6A_1739_41DF_9C1F85F25C04",
         "useHandCursor": true,
         "enabledInCardboard": true,
         "maps": [
          {
           "hfov": 5.37,
           "yaw": 34.7,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 37,
              "width": 37,
              "url": "media/panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044_0_HS_3_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "class": "HotspotPanoramaOverlayMap",
           "pitch": 6.11
          }
         ],
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay",
         "items": [
          {
           "yaw": 34.7,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 5.37,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 74,
              "width": 74,
              "url": "media/panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044_0_HS_3_0.png",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "pitch": 6.11
          }
         ]
        },
        {
         "areas": [
          {
           "toolTip": "SINGLE BEDROOM",
           "displayTooltipInTouchScreens": true,
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_46160BEA_572E_C12E_41B2_14AC54C7D9DC, this.camera_56F35D45_5BF2_F79A_41D0_857D96DC10DF); this.mainPlayList.set('selectedIndex', 4)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "id": "overlay_916E9C9F_9D6A_1739_41D0_4A4CF03BE08B",
         "useHandCursor": true,
         "enabledInCardboard": true,
         "maps": [
          {
           "hfov": 5.27,
           "yaw": 34.74,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 37,
              "width": 37,
              "url": "media/panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044_0_HS_4_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -12.59
          }
         ],
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay",
         "items": [
          {
           "yaw": 34.74,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 5.27,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 74,
              "width": 74,
              "url": "media/panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044_0_HS_4_0.png",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "pitch": -12.59
          }
         ]
        },
        {
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA, this.camera_4D2BB54F_5EB8_3C90_41C8_229BE397F426); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 3)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "id": "overlay_916E8C9F_9D6A_1733_41A6_3007A8C07742",
         "useHandCursor": true,
         "enabledInCardboard": true,
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
              "url": "media/panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044_0_HS_1_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "class": "HotspotPanoramaOverlayMap",
           "pitch": 76.94
          }
         ],
         "rollOverDisplay": true,
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
              "url": "media/panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044_0_HS_1_0.png",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "pitch": 76.94
          }
         ]
        },
        {
         "areas": [
          {
           "toolTip": "BALCONY",
           "displayTooltipInTouchScreens": true,
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069, this.camera_4D9234E4_5EB8_3D91_41C1_13C316841FC0); this.mainPlayList.set('selectedIndex', 6)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "id": "overlay_916D7CA5_9D6A_1709_41E2_1043CC0BE577",
         "useHandCursor": true,
         "enabledInCardboard": true,
         "maps": [
          {
           "hfov": 7.8,
           "yaw": -178.2,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 70,
              "width": 70,
              "url": "media/panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044_0_HS_5_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -39.78
          }
         ],
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay",
         "items": [
          {
           "yaw": -178.2,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 7.8,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 140,
              "width": 140,
              "url": "media/panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044_0_HS_5_0.png",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "pitch": -39.78
          }
         ]
        },
        {
         "areas": [
          {
           "toolTip": "TOILET",
           "displayTooltipInTouchScreens": true,
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28, this.camera_4D8494D4_5EB8_3DB1_41C2_764A0C188F7C); this.mainPlayList.set('selectedIndex', 7)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "id": "overlay_916D5CA5_9D6A_1709_41C1_ED02D5F1677F",
         "useHandCursor": true,
         "enabledInCardboard": true,
         "maps": [
          {
           "hfov": 8,
           "yaw": 82.9,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 59,
              "width": 59,
              "url": "media/panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044_0_HS_6_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -22.11
          }
         ],
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay",
         "items": [
          {
           "yaw": 82.9,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 8,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 119,
              "width": 119,
              "url": "media/panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044_0_HS_6_0.png",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "pitch": -22.11
          }
         ]
        },
        {
         "areas": [
          {
           "toolTip": "TWIN BEDROOM",
           "displayTooltipInTouchScreens": true,
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_91758D80_9D6A_1106_41DC_64D8466F87FC, this.camera_4DF3F513_5EB8_3CB0_41D1_852EAE067B75); this.mainPlayList.set('selectedIndex', 8)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "id": "overlay_916D4CA5_9D6A_1709_41DE_4E5FACFD7857",
         "useHandCursor": true,
         "enabledInCardboard": true,
         "maps": [
          {
           "hfov": 7.65,
           "yaw": 34.69,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 53,
              "width": 53,
              "url": "media/panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044_0_HS_7_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "class": "HotspotPanoramaOverlayMap",
           "pitch": 6.66
          }
         ],
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay",
         "items": [
          {
           "yaw": 34.69,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 7.65,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 106,
              "width": 106,
              "url": "media/panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044_0_HS_7_0.png",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "pitch": 6.66
          }
         ]
        },
        {
         "areas": [
          {
           "toolTip": "SINGLE BEDROOM",
           "displayTooltipInTouchScreens": true,
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_916227CC_9D6A_311F_41E3_34FF7141124F, this.camera_4DCD7522_5EB8_3C91_41A5_6958BF09917B); this.mainPlayList.set('selectedIndex', 4)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "id": "overlay_916D2CA5_9D6A_1709_41D6_9840F4E40A44",
         "useHandCursor": true,
         "enabledInCardboard": true,
         "maps": [
          {
           "hfov": 7.5,
           "yaw": 34.72,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 53,
              "width": 53,
              "url": "media/panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044_0_HS_8_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -13.15
          }
         ],
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay",
         "items": [
          {
           "yaw": 34.72,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 7.5,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 106,
              "width": 106,
              "url": "media/panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044_0_HS_8_0.png",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "pitch": -13.15
          }
         ]
        }
       ],
       "thumbnailUrl": "media/panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044_t.jpg",
       "class": "SphericPanoramaFrame",
       "sphere": {
        "class": "ImageResource",
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
        ]
       }
      }
     ],
     "hfovMax": 120
    },
    "yaw": -171.36,
    "backwardYaw": -162.92,
    "class": "AdjacentPanorama",
    "distance": 1
   },
   {
    "panorama": "this.panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA",
    "yaw": -171.36,
    "backwardYaw": -172.22,
    "class": "AdjacentPanorama",
    "distance": 1
   },
   {
    "panorama": "this.panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28",
    "yaw": -171.36,
    "backwardYaw": -162.92,
    "class": "AdjacentPanorama",
    "distance": 1
   },
   {
    "panorama": "this.panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069",
    "yaw": -171.36,
    "backwardYaw": -170.58,
    "class": "AdjacentPanorama",
    "distance": 1
   },
   {
    "panorama": "this.panorama_916902A1_9D6A_7309_41D0_0B14DE574844",
    "yaw": -171.36,
    "backwardYaw": -171.96,
    "class": "AdjacentPanorama",
    "distance": 1
   },
   {
    "panorama": "this.panorama_91758D80_9D6A_1106_41DC_64D8466F87FC",
    "yaw": -171.36,
    "backwardYaw": -172.21,
    "class": "AdjacentPanorama",
    "distance": 1
   },
   {
    "panorama": "this.panorama_916227CC_9D6A_311F_41E3_34FF7141124F",
    "yaw": -171.36,
    "backwardYaw": -170.2,
    "class": "AdjacentPanorama",
    "distance": 1
   },
   {
    "panorama": "this.panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2",
    "yaw": 140.49,
    "backwardYaw": 0.93,
    "class": "AdjacentPanorama",
    "distance": 1
   },
   {
    "panorama": "this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA",
    "yaw": -171.36,
    "backwardYaw": -173.12,
    "class": "AdjacentPanorama",
    "distance": 1
   }
  ],
  "vfov": 180,
  "id": "panorama_9145F5B4_9D6A_310F_41B6_278704EC634D",
  "partial": false,
  "hfovMin": 100,
  "pitch": 0,
  "mapLocations": [
   {
    "x": 303.34,
    "map": {
     "overlays": [
      {
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 0)",
         "class": "HotspotMapOverlayArea"
        }
       ],
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
       "rollOverDisplay": false,
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
     "initialZoomFactor": 1,
     "fieldOfViewOverlayInsideColor": "#999999",
     "fieldOfViewOverlayInsideOpacity": 0.3,
     "width": 1468,
     "id": "map_4E02A832_427B_EE04_41CC_8E1CEC03E8D3",
     "height": 864,
     "minimumZoomFactor": 0.5,
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
     "fieldOfViewOverlayOutsideColor": "#000000",
     "fieldOfViewOverlayRadiusScale": 0.09,
     "fieldOfViewOverlayOutsideOpacity": 0,
     "label": "first floor",
     "thumbnailUrl": "media/map_4E02A832_427B_EE04_41CC_8E1CEC03E8D3_t.jpg",
     "class": "Map",
     "scaleMode": "fit_inside",
     "maximumZoomFactor": 1.2
    },
    "y": 415.62,
    "angle": 71.83,
    "class": "PanoramaMapLocation"
   }
  ],
  "label": "STREETVIEW",
  "thumbnailUrl": "media/panorama_9145F5B4_9D6A_310F_41B6_278704EC634D_t.jpg",
  "class": "Panorama",
  "hfov": 360,
  "audios": [
   {
    "autoplay": true,
    "id": "audio_58C48535_534B_1088_419D_65D26EA3E6EE",
    "audio": {
     "mp3Url": "media/audio_58C48535_534B_1088_419D_65D26EA3E6EE.mp3",
     "class": "AudioResource",
     "oggUrl": "media/audio_58C48535_534B_1088_419D_65D26EA3E6EE.ogg"
    },
    "class": "PanoramaAudio"
   },
   {
    "autoplay": true,
    "id": "audio_51D70E9C_5DEA_B3F4_41C9_7C42C4A1D34D",
    "loop": true,
    "audio": {
     "mp3Url": "media/audio_51D70E9C_5DEA_B3F4_41C9_7C42C4A1D34D.mp3",
     "class": "AudioResource",
     "oggUrl": "media/audio_51D70E9C_5DEA_B3F4_41C9_7C42C4A1D34D.ogg"
    },
    "class": "PanoramaAudio"
   }
  ],
  "frames": [
   {
    "overlays": [
     {
      "areas": [
       {
        "toolTip": "ENTRANCE",
        "displayTooltipInTouchScreens": true,
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_4478C56F_5593_B9D8_41B3_B7F29BC4005E, this.camera_552A6ED5_5BF2_F2BA_41D6_D4FD03CB3A2E); this.mainPlayList.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_9145D5B5_9D6A_3109_41DC_A9B09A3D3544",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "maps": [
       {
        "hfov": 5.02,
        "yaw": 140.51,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 35,
           "width": 35,
           "url": "media/panorama_9145F5B4_9D6A_310F_41B6_278704EC634D_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 5.38
       }
      ],
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "yaw": 140.51,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 5.02,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 70,
           "width": 70,
           "url": "media/panorama_9145F5B4_9D6A_310F_41B6_278704EC634D_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": 5.38
       }
      ]
     },
     {
      "areas": [
       {
        "toolTip": "ENTRANCE",
        "displayTooltipInTouchScreens": true,
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2, this.camera_4C5F575F_5EB8_3CAF_41CA_F0C8ED269D80); this.mainPlayList.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_914595B5_9D6A_3109_41E0_AB5366CDC9BD",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "maps": [
       {
        "hfov": 7.16,
        "yaw": 140.49,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 50,
           "width": 50,
           "url": "media/panorama_9145F5B4_9D6A_310F_41B6_278704EC634D_0_HS_5_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 5.92
       }
      ],
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "yaw": 140.49,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 7.16,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 100,
           "width": 100,
           "url": "media/panorama_9145F5B4_9D6A_310F_41B6_278704EC634D_0_HS_5_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": 5.92
       }
      ]
     },
     {
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA, this.camera_4DA80768_5EB8_3C91_41D2_2E2A6574E8FE); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 5); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 8)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_914545B5_9D6A_3109_41DB_2D094D583EE1",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "maps": [
       {
        "hfov": 0,
        "yaw": -171.36,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 1,
           "width": 1,
           "url": "media/panorama_9145F5B4_9D6A_310F_41B6_278704EC634D_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 85.74
       }
      ],
      "rollOverDisplay": true,
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "yaw": -171.36,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 1,
           "width": 1,
           "url": "media/panorama_9145F5B4_9D6A_310F_41B6_278704EC634D_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": 85.74
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_9145F5B4_9D6A_310F_41B6_278704EC634D_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
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
     ]
    }
   }
  ],
  "hfovMax": 120
 },
 {
  "touchControlMode": "drag_rotation",
  "buttonToggleHotspots": {
   "toolTipPaddingBottom": 4,
   "verticalAlign": "middle",
   "mode": "toggle",
   "paddingTop": 0,
   "width": "100%",
   "iconURL": "skin/IconButton_80E5955A_8E23_BB05_41CA_43DD61DBAEE9.png",
   "height": "100%",
   "maxWidth": 60,
   "toolTipTextShadowOpacity": 0,
   "paddingLeft": 0,
   "toolTipPaddingTop": 4,
   "borderRadius": 0,
   "toolTipPaddingRight": 6,
   "toolTipBorderSize": 1,
   "toolTipFontSize": 11,
   "toolTipShadowOpacity": 1,
   "toolTipOpacity": 0.7,
   "class": "IconButton",
   "transparencyActive": true,
   "paddingRight": 0,
   "toolTipShadowVerticalLength": 0,
   "toolTipPaddingLeft": 6,
   "toolTipBorderColor": "#767676",
   "toolTipTextShadowColor": "#000000",
   "horizontalAlign": "center",
   "click": "if(!this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, true, 0, this.effect_CDD059FA_EED0_D223_41DB_70ACFBE986FE, 'showEffect', false) } else if(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, false, 0, this.effect_CDD049FB_EED0_D221_41EB_CA2134B978E0, 'hideEffect', false) }",
   "toolTipFontStyle": "normal",
   "toolTipBorderRadius": 3,
   "toolTip": "Hotspots Visibility",
   "minHeight": 1,
   "cursor": "hand",
   "borderSize": 0,
   "toolTipTextShadowBlurRadius": 3,
   "toolTipBackgroundColor": "#000000",
   "id": "IconButton_80E5955A_8E23_BB05_41CA_43DD61DBAEE9",
   "maxHeight": 60,
   "toolTipFontWeight": "normal",
   "paddingBottom": 0,
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
  "class": "PanoramaPlayer",
  "buttonStop": [
   "this.IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4",
   "this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB"
  ],
  "buttonPlay": "this.IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED",
  "buttonCardboardView": {
   "verticalAlign": "middle",
   "mode": "push",
   "paddingTop": 0,
   "width": "100%",
   "iconURL": "skin/IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37.png",
   "height": "100%",
   "maxWidth": 60,
   "paddingLeft": 0,
   "borderRadius": 0,
   "class": "IconButton",
   "transparencyActive": false,
   "paddingRight": 0,
   "horizontalAlign": "center",
   "minHeight": 1,
   "rollOverIconURL": "skin/IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37_rollover.png",
   "cursor": "hand",
   "visible": false,
   "borderSize": 0,
   "id": "IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37",
   "maxHeight": 60,
   "paddingBottom": 0,
   "pressedIconURL": "skin/IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37_pressed.png",
   "backgroundOpacity": 0,
   "minWidth": 1,
   "shadow": false
  },
  "id": "MainViewerPanoramaPlayer",
  "viewerArea": "this.MainViewer",
  "mouseControlMode": "drag_acceleration",
  "preloadEnabled": false,
  "displayPlaybackBar": true,
  "gyroscopeVerticalDraggingEnabled": true
 },
 {
  "movementMode": "constrained",
  "id": "MapViewerMapPlayer",
  "viewerArea": {
   "shadow": false,
   "progressBorderRadius": 0,
   "progressBarBackgroundColorDirection": "vertical",
   "progressBackgroundColor": [
    "#FFFFFF"
   ],
   "toolTipPaddingBottom": 4,
   "playbackBarHeadShadowVerticalLength": 0,
   "progressBarOpacity": 1,
   "playbackBarProgressBackgroundColorDirection": "vertical",
   "paddingLeft": 0,
   "progressRight": 0,
   "toolTipBorderSize": 1,
   "playbackBarBackgroundColor": [
    "#FFFFFF"
   ],
   "toolTipShadowOpacity": 1,
   "toolTipOpacity": 0.7,
   "playbackBarBorderColor": "#FFFFFF",
   "class": "ViewerArea",
   "playbackBarHeight": 10,
   "paddingRight": 0,
   "toolTipShadowVerticalLength": 0,
   "toolTipTextShadowColor": "#000000",
   "playbackBarHeadWidth": 6,
   "playbackBarHeadShadow": true,
   "toolTipFontStyle": "normal",
   "minHeight": 1,
   "playbackBarProgressBorderSize": 0,
   "playbackBarHeadBackgroundColorDirection": "vertical",
   "progressBottom": 2,
   "progressBorderSize": 0,
   "playbackBarRight": 0,
   "toolTipBackgroundColor": "#000000",
   "playbackBarBackgroundColorDirection": "vertical",
   "progressBarBorderSize": 0,
   "progressBarBorderRadius": 0,
   "playbackBarOpacity": 1,
   "playbackBarProgressBorderRadius": 0,
   "transitionMode": "blending",
   "paddingBottom": 0,
   "toolTipShadowHorizontalLength": 0,
   "toolTipShadowSpread": 0,
   "toolTipShadowColor": "#333333",
   "toolTipShadowBlurRadius": 3,
   "playbackBarHeadShadowHorizontalLength": 0,
   "progressBackgroundOpacity": 1,
   "minWidth": 1,
   "playbackBarBorderRadius": 0,
   "toolTipFontColor": "#606060",
   "playbackBarProgressBorderColor": "#000000",
   "playbackBarHeadBackgroundColor": [
    "#111111",
    "#666666"
   ],
   "paddingTop": 0,
   "playbackBarHeadBorderRadius": 0,
   "toolTipPaddingRight": 6,
   "toolTipTextShadowOpacity": 0,
   "toolTipPaddingTop": 4,
   "borderRadius": 0,
   "toolTipFontSize": 11,
   "playbackBarProgressOpacity": 1,
   "progressLeft": 0,
   "playbackBarHeadShadowBlurRadius": 3,
   "playbackBarHeadBorderColor": "#000000",
   "progressBackgroundColorRatios": [
    0
   ],
   "playbackBarLeft": 0,
   "toolTipPaddingLeft": 6,
   "toolTipBorderColor": "#767676",
   "playbackBarProgressBackgroundColorRatios": [
    0
   ],
   "playbackBarBackgroundOpacity": 1,
   "playbackBarBorderSize": 0,
   "toolTipBorderRadius": 3,
   "playbackBarHeadShadowOpacity": 0.7,
   "playbackBarHeadHeight": 15,
   "top": "10%",
   "playbackBarHeadBackgroundColorRatios": [
    0,
    1
   ],
   "bottom": "10%",
   "borderSize": 0,
   "playbackBarProgressBackgroundColor": [
    "#3399FF"
   ],
   "toolTipFontWeight": "normal",
   "id": "MapViewer",
   "toolTipTextShadowBlurRadius": 3,
   "progressBarBorderColor": "#000000",
   "playbackBarHeadOpacity": 1,
   "playbackBarHeadBorderSize": 0,
   "progressBackgroundColorDirection": "vertical",
   "playbackBarHeadShadowColor": "#000000",
   "progressBarBackgroundColorRatios": [
    0
   ],
   "progressHeight": 10,
   "left": "10%",
   "progressBorderColor": "#000000",
   "playbackBarBottom": 0,
   "right": "10%",
   "toolTipFontFamily": "Arial",
   "progressOpacity": 1,
   "progressBarBackgroundColor": [
    "#3399FF"
   ]
  },
  "class": "MapPlayer"
 },
 {
  "initialPosition": {
   "hfov": 120,
   "yaw": -12.18,
   "class": "PanoramaCameraPosition",
   "pitch": -29.58
  },
  "id": "panorama_9145F5B4_9D6A_310F_41B6_278704EC634D_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 "this.panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2",
 {
  "initialPosition": {
   "yaw": 6.26,
   "class": "PanoramaCameraPosition",
   "pitch": 1.37
  },
  "id": "panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 "this.panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA",
 {
  "initialPosition": {
   "yaw": 3.52,
   "class": "PanoramaCameraPosition",
   "pitch": -6.78
  },
  "id": "panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 "this.panorama_916902A1_9D6A_7309_41D0_0B14DE574844",
 {
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "panorama_916902A1_9D6A_7309_41D0_0B14DE574844_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 "this.panorama_916227CC_9D6A_311F_41E3_34FF7141124F",
 {
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "panorama_916227CC_9D6A_311F_41E3_34FF7141124F_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 "this.panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044",
 {
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 "this.panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069",
 {
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 "this.panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28",
 {
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 "this.panorama_91758D80_9D6A_1106_41DC_64D8466F87FC",
 {
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "panorama_91758D80_9D6A_1106_41DC_64D8466F87FC_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 "this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA",
 {
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 {
  "id": "mainPlayList",
  "class": "PlayList",
  "items": [
   {
    "camera": "this.panorama_9145F5B4_9D6A_310F_41B6_278704EC634D_camera",
    "id": "PanoramaPlayListItem_4C45E49F_5EB8_3DAF_41AF_A275C33FB2CA",
    "media": "this.panorama_9145F5B4_9D6A_310F_41B6_278704EC634D",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_4C45E49F_5EB8_3DAF_41AF_A275C33FB2CA, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "camera": "this.panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_916902A1_9D6A_7309_41D0_0B14DE574844_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_916902A1_9D6A_7309_41D0_0B14DE574844",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_916227CC_9D6A_311F_41E3_34FF7141124F_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_916227CC_9D6A_311F_41E3_34FF7141124F",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_91758D80_9D6A_1106_41DC_64D8466F87FC_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_91758D80_9D6A_1106_41DC_64D8466F87FC",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 0)",
    "class": "PanoramaPlayListItem"
   }
  ]
 },
 {
  "id": "ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist",
  "class": "PlayList",
  "items": [
   {
    "camera": "this.panorama_9145F5B4_9D6A_310F_41B6_278704EC634D_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_9145F5B4_9D6A_310F_41B6_278704EC634D",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 0, 1)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_916927EC_9D6B_F11F_41CC_B16F1727B4B2",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 1, 2)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_96933414_9D6A_370E_41D7_3AEDCBDD38AA",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 2, 3)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_916902A1_9D6A_7309_41D0_0B14DE574844_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_916902A1_9D6A_7309_41D0_0B14DE574844",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 3, 4)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_916227CC_9D6A_311F_41E3_34FF7141124F_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_916227CC_9D6A_311F_41E3_34FF7141124F",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 4, 5)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_916EEC9F_9D6A_1739_41DC_EFFF0C349044",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 5, 6)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_91678333_9D6A_1109_41D1_E3A3FFFDE069",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 6, 7)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_9164F99E_9D6A_313B_41B4_F1CA1A107C28",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 7, 8)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_91758D80_9D6A_1106_41DC_64D8466F87FC_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_91758D80_9D6A_1106_41DC_64D8466F87FC",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 8, 9)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_914D9476_9D6A_170A_41E2_C3F7878DF6CA",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 9, 0)",
    "class": "PanoramaPlayListItem"
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
  "id": "playList_4C4D949F_5EB8_3DAF_41C9_4B78346D4EBC",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.registerKey('visibility_ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472', this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472.get('visible')); this.registerKey('visibility_Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB', this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB.get('visible')); this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setComponentVisibility(this.Container_807F782A_8E23_A905_41DE_623121285A09, false, -1, this.effect_22974FB2_2DD9_0421_41BA_84205292D043, 'hideEffect', false); this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, false, -1, this.effect_22899FB3_2DD9_0427_41BB_298AEB3D2851, 'hideEffect', false); this.setComponentVisibility(this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB, true, -1, this.effect_2289DFB3_2DD9_0427_41AE_A35795880BA7, 'showEffect', false); this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, false, -1, this.effect_3876CD6E_2DF9_0421_41C1_F0AB7F279824, 'hideEffect', false); this.setComponentVisibility(this.Container_86F3A56C_8E22_5B1D_41CA_9CE53436FE56, false, -1, this.effect_22973FB1_2DD9_0423_41C1_E1E03953DCCE, 'hideEffect', false)",
    "media": "this.video_210B394E_3D54_1A60_41A3_CB42BEC0D3EC",
    "end": "this.setComponentVisibility(this.Container_807F782A_8E23_A905_41DE_623121285A09, true, -1, this.effect_22977FB2_2DD9_0421_41C1_F53B037346DF, 'showEffect', false); this.setComponentVisibility(this.Container_807F782A_8E23_A905_41DE_623121285A09, true, -1, this.effect_22977FB2_2DD9_0421_41C1_F53B037346DF, 'showEffect', false); if(this.existsKey('visibility_Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB')){ if(this.getKey('visibility_Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB')) { this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, true, -1, this.effect_4BA8A8D0_5EB8_35B1_41CC_D5F5569EAD57, 'showEffect', false); } else { this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, false, -1, this.effect_22899FB3_2DD9_0427_41BB_298AEB3D2851, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB'); this.setComponentVisibility(this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB, false, -1, this.effect_2289EFB3_2DD9_0427_41C0_ACB5A72AE218, 'hideEffect', false); this.setComponentVisibility(this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB, false, -1, this.effect_2289EFB3_2DD9_0427_41C0_ACB5A72AE218, 'hideEffect', false); if(this.existsKey('visibility_ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472')){ if(this.getKey('visibility_ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472')) { this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, true, -1, this.effect_4BACF8D0_5EB8_35B1_41BB_B00131B2CA83, 'showEffect', false); } else { this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, false, -1, this.effect_3876CD6E_2DF9_0421_41C1_F0AB7F279824, 'hideEffect', false); } }; this.unregisterKey('visibility_ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472'); this.setComponentVisibility(this.Container_86F3A56C_8E22_5B1D_41CA_9CE53436FE56, true, -1, this.effect_22975FB2_2DD9_0421_41B4_7A2443082F44, 'showEffect', false); this.setComponentVisibility(this.Container_86F3A56C_8E22_5B1D_41CA_9CE53436FE56, true, -1, this.effect_22975FB2_2DD9_0421_41B4_7A2443082F44, 'showEffect', false)",
    "player": "this.MainViewerVideoPlayer",
    "class": "VideoPlayListItem",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_4C4D949F_5EB8_3DAF_41C9_4B78346D4EBC, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_4C4D949F_5EB8_3DAF_41C9_4B78346D4EBC, 0, this.video_210B394E_3D54_1A60_41A3_CB42BEC0D3EC)"
   }
  ]
 },
 {
  "label": "Photo Album",
  "thumbnailUrl": "media/album_1AE8DEB7_0EE7_8CC7_4198_F5B75788CCF6_t.png",
  "class": "PhotoAlbum",
  "id": "album_1AE8DEB7_0EE7_8CC7_4198_F5B75788CCF6",
  "playList": {
   "id": "album_1AE8DEB7_0EE7_8CC7_4198_F5B75788CCF6_AlbumPlayList",
   "class": "PhotoPlayList",
   "items": [
    {
     "camera": {
      "duration": 5000,
      "scaleMode": "fit_outside",
      "targetPosition": {
       "x": "0.33",
       "zoomFactor": 1.1,
       "class": "PhotoCameraPosition",
       "y": "0.55"
      },
      "easing": "linear",
      "initialPosition": {
       "x": "0.50",
       "zoomFactor": 1,
       "class": "PhotoCameraPosition",
       "y": "0.50"
      },
      "class": "MovementPhotoCamera"
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
      "duration": 5000,
      "scaleMode": "fit_outside",
      "targetPosition": {
       "x": "0.50",
       "zoomFactor": 1.1,
       "class": "PhotoCameraPosition",
       "y": "0.71"
      },
      "easing": "linear",
      "initialPosition": {
       "x": "0.50",
       "zoomFactor": 1,
       "class": "PhotoCameraPosition",
       "y": "0.50"
      },
      "class": "MovementPhotoCamera"
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
      "duration": 5000,
      "scaleMode": "fit_outside",
      "targetPosition": {
       "x": "0.52",
       "zoomFactor": 1.1,
       "class": "PhotoCameraPosition",
       "y": "0.66"
      },
      "easing": "linear",
      "initialPosition": {
       "x": "0.50",
       "zoomFactor": 1,
       "class": "PhotoCameraPosition",
       "y": "0.50"
      },
      "class": "MovementPhotoCamera"
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
      "duration": 5000,
      "scaleMode": "fit_outside",
      "targetPosition": {
       "x": "0.70",
       "zoomFactor": 1.1,
       "class": "PhotoCameraPosition",
       "y": "0.71"
      },
      "easing": "linear",
      "initialPosition": {
       "x": "0.50",
       "zoomFactor": 1,
       "class": "PhotoCameraPosition",
       "y": "0.50"
      },
      "class": "MovementPhotoCamera"
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
      "duration": 5000,
      "scaleMode": "fit_outside",
      "targetPosition": {
       "x": "0.49",
       "zoomFactor": 1.1,
       "class": "PhotoCameraPosition",
       "y": "0.74"
      },
      "easing": "linear",
      "initialPosition": {
       "x": "0.50",
       "zoomFactor": 1,
       "class": "PhotoCameraPosition",
       "y": "0.50"
      },
      "class": "MovementPhotoCamera"
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
      "duration": 5000,
      "scaleMode": "fit_outside",
      "targetPosition": {
       "x": "0.32",
       "zoomFactor": 1.1,
       "class": "PhotoCameraPosition",
       "y": "0.47"
      },
      "easing": "linear",
      "initialPosition": {
       "x": "0.50",
       "zoomFactor": 1,
       "class": "PhotoCameraPosition",
       "y": "0.50"
      },
      "class": "MovementPhotoCamera"
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
      "duration": 5000,
      "scaleMode": "fit_outside",
      "targetPosition": {
       "x": "0.64",
       "zoomFactor": 1.1,
       "class": "PhotoCameraPosition",
       "y": "0.53"
      },
      "easing": "linear",
      "initialPosition": {
       "x": "0.50",
       "zoomFactor": 1,
       "class": "PhotoCameraPosition",
       "y": "0.50"
      },
      "class": "MovementPhotoCamera"
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
      "duration": 5000,
      "scaleMode": "fit_outside",
      "targetPosition": {
       "x": "0.31",
       "zoomFactor": 1.1,
       "class": "PhotoCameraPosition",
       "y": "0.32"
      },
      "easing": "linear",
      "initialPosition": {
       "x": "0.50",
       "zoomFactor": 1,
       "class": "PhotoCameraPosition",
       "y": "0.50"
      },
      "class": "MovementPhotoCamera"
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
  "id": "playList_4C42649F_5EB8_3DAF_41C2_2243C10267BA",
  "class": "PlayList",
  "items": [
   {
    "player": "this.ViewerAreaLabeled_9FD7235A_96CD_9045_41D9_23A3BCBDB1C6PhotoAlbumPlayer",
    "media": "this.album_1AE8DEB7_0EE7_8CC7_4198_F5B75788CCF6",
    "class": "PhotoAlbumPlayListItem",
    "begin": "this.loopAlbum(this.playList_4C42649F_5EB8_3DAF_41C2_2243C10267BA, 0)"
   }
  ]
 },
 "this.map_4E02A832_427B_EE04_41CC_8E1CEC03E8D3",
 {
  "id": "playList_4C47249F_5EB8_3DAF_41C2_69140060B782",
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
  "id": "ImageResource_6ECEF4DB_6091_DDD1_41D4_2B884570086A",
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
  "duration": 300,
  "id": "effect_518C2CD2_77ED_D97B_41C3_3AC87D499717",
  "class": "FadeOutEffect"
 },
 {
  "easing": "linear",
  "duration": 400,
  "id": "effect_508929C3_77ED_DB59_41D8_05A6C8F0681B",
  "from": "bottom",
  "class": "SlideInEffect"
 },
 {
  "easing": "linear",
  "duration": 400,
  "id": "effect_5032FA51_77E2_5979_41D1_45E5EF039077",
  "to": "bottom",
  "class": "SlideOutEffect"
 },
 {
  "easing": "linear",
  "duration": 300,
  "id": "effect_640860A9_76E7_E929_4192_305B50E5610A",
  "class": "FadeInEffect"
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
  "initialPosition": {
   "yaw": 7.78,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4D8E04D4_5EB8_3DB1_41C3_F96C95E9F61D",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 {
  "initialPosition": {
   "yaw": -18.22,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4D8494D4_5EB8_3DB1_41C2_764A0C188F7C",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 {
  "initialPosition": {
   "yaw": 5.61,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4D9234E4_5EB8_3D91_41C1_13C316841FC0",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 {
  "initialPosition": {
   "yaw": 8.04,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4DE934F3_5EB8_3D77_41BB_9610AB8F4AFF",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 {
  "initialPosition": {
   "hfov": 120,
   "yaw": 8.64,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4DE48503_5EB8_3C97_41D4_0A9A5B1053E4",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 {
  "initialPosition": {
   "yaw": 37.14,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4DF3F513_5EB8_3CB0_41D1_852EAE067B75",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 {
  "initialPosition": {
   "yaw": 23,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4DCD7522_5EB8_3C91_41A5_6958BF09917B",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 {
  "initialPosition": {
   "yaw": 9.32,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4DD9C53B_5EB8_3CF0_41AE_4B4526F174EC",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 {
  "initialPosition": {
   "yaw": 6.88,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4D2BB54F_5EB8_3C90_41C8_229BE397F426",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 {
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4D259563_5EB8_3C97_41CF_6D65A2925017",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 {
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4D360577_5EB8_3F7F_41C1_956201803846",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 {
  "initialPosition": {
   "yaw": 9.42,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4D03C58B_5EB8_3F97_41C9_B1A17C87ED21",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 {
  "initialPosition": {
   "yaw": 3.2,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4D1C4596_5EB8_3FB0_41D6_F7E6FD53B617",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 {
  "initialPosition": {
   "hfov": 120,
   "yaw": 8.64,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4D6E75AA_5EB8_3F90_41C1_41A23F5948C3",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 {
  "initialPosition": {
   "yaw": 7.79,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4D7AE5BE_5EB8_3FF1_41D5_AB01E1AC8462",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 {
  "initialPosition": {
   "yaw": 9.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4D74B5D8_5EB8_3FB1_41D4_2AD5E6A1B1C5",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 {
  "initialPosition": {
   "yaw": 163.2,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4D4715E8_5EB8_3F91_41C7_FC2EACF0E3F0",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 {
  "initialPosition": {
   "yaw": 6.88,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4D5045F2_5EB8_3F71_41C6_49DB42BEBE95",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 {
  "initialPosition": {
   "yaw": -97.1,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4AA335FB_5EB8_3F77_41A9_9AF052F34B4A",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 {
  "initialPosition": {
   "yaw": 7.78,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4ABC5605_5EB8_3C93_41B5_6C4840876A9F",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 {
  "initialPosition": {
   "yaw": 9.42,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4A8EC60E_5EB8_3C91_41AF_950FF5C42E44",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 {
  "initialPosition": {
   "yaw": 8.04,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4A980618_5EB8_3CB1_41B0_1F6CF90BE027",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 {
  "initialPosition": {
   "hfov": 120,
   "yaw": 8.64,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4AEAC621_5EB8_3C93_41C0_1093B44A5B1E",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 {
  "initialPosition": {
   "yaw": 7.79,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4AE5F62A_5EB8_3C91_41CE_B3B8D7189B2C",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 {
  "initialPosition": {
   "yaw": 9.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4AF6C633_5EB8_3CF7_41D3_C7B9C4FC30B8",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 {
  "initialPosition": {
   "yaw": 9.32,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4AC1863C_5EB8_3CF1_4199_DF5B760BE20B",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 {
  "initialPosition": {
   "yaw": 6.88,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4AD28645_5EB8_3C93_41A0_F05F4CF02CD0",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 {
  "initialPosition": {
   "yaw": 1.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4A2D064E_5EB8_3C91_41D5_5FE8C97B7C70",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 {
  "initialPosition": {
   "yaw": 7.78,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4A3E4658_5EB8_3CB1_41D6_DDC241E908BF",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 {
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4C877688_5EB8_3D90_41D1_13541D77B332",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 {
  "initialPosition": {
   "yaw": 8.04,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4C991691_5EB8_3DB0_41D2_28072A7CD7B3",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 {
  "initialPosition": {
   "hfov": 120,
   "yaw": 8.64,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4C9DA69A_5EB8_3DB0_41D2_A154157E0041",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 {
  "initialPosition": {
   "yaw": 7.79,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4C9766A4_5EB8_3D90_41B0_B633CF3610B9",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 {
  "initialPosition": {
   "yaw": 9.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4CEB86AD_5EB8_3D90_41CD_9A4E545F8D0D",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 {
  "initialPosition": {
   "yaw": 9.32,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4CEDE6B7_5EB8_3DF0_417B_0E00A8EF7EBB",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 {
  "initialPosition": {
   "yaw": 6.88,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4CE5E6C1_5EB8_3D90_41C6_7ED088C56FB2",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 {
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4CF3B6CB_5EB8_3D90_41C6_4127A25B2054",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 {
  "initialPosition": {
   "yaw": -167.94,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4CC986D4_5EB8_3DB0_41C6_AC82BB06AC5E",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 {
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4CC1D6DE_5EB8_3DB0_41AA_00F2DD389CEA",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 {
  "initialPosition": {
   "yaw": 9.42,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4CDC06E7_5EB8_3D90_41C0_726F0F39E8D9",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 {
  "initialPosition": {
   "hfov": 120,
   "yaw": 8.64,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4CD416F0_5EB8_3D71_41C7_8450A5819FB7",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 {
  "initialPosition": {
   "yaw": 7.79,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4C2266F9_5EB8_3D73_41D2_273A35A7CE1D",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 {
  "initialPosition": {
   "yaw": 22.98,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4C3AC702_5EB8_3C91_41D1_4BEEE87510DC",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 {
  "initialPosition": {
   "yaw": 9.32,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4C31070B_5EB8_3C97_41CA_2ADA5A46C0E4",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 {
  "initialPosition": {
   "yaw": 6.88,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4C0F7715_5EB8_3CB3_41BD_EC06EBEAE904",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 {
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4C07971E_5EB8_3CAE_41C4_DB0B5BA06CC7",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 {
  "initialPosition": {
   "yaw": 7.78,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4C1DF728_5EB8_3C91_41BE_3B3559B6E032",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 {
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4C6B1731_5EB8_3CF3_41C2_F646AF359537",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 {
  "initialPosition": {
   "yaw": 9.42,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4C61C73A_5EB8_3CF1_41B3_B28AEA3E34C0",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 {
  "initialPosition": {
   "yaw": 8.04,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4C7F1744_5EB8_3C91_41CA_806CFB05D204",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 {
  "initialPosition": {
   "yaw": 7.79,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4C75D74D_5EB8_3C93_41D5_C8A89488B825",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 {
  "initialPosition": {
   "yaw": 9.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4C40E756_5EB8_3CB1_41CD_98143A0E9661",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 {
  "initialPosition": {
   "yaw": -179.07,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4C5F575F_5EB8_3CAF_41CA_F0C8ED269D80",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 {
  "initialPosition": {
   "yaw": 6.88,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4DA80768_5EB8_3C91_41D2_2E2A6574E8FE",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 {
  "initialPosition": {
   "yaw": -145.31,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4DA74772_5EB8_3B71_41C2_73C135C388C9",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 {
  "initialPosition": {
   "yaw": 7.78,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4DB0177B_5EB8_3B77_41C4_84AF205497BE",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 {
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4D8CD785_5EB8_3B93_41CA_148DE6C3399A",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 {
  "initialPosition": {
   "yaw": 9.42,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4D98778E_5EB8_3B91_41CC_89ED7453AB55",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 {
  "initialPosition": {
   "yaw": 8.04,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4D95C798_5EB8_3BB1_41C2_09E72559252E",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 {
  "initialPosition": {
   "hfov": 120,
   "yaw": 8.64,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4DE6A7A1_5EB8_3B93_41C1_94684A1C45EE",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 {
  "initialPosition": {
   "yaw": 9.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4DF0A7AA_5EB8_3B91_41CF_E3E9FC94D1B8",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 {
  "initialPosition": {
   "yaw": 9.32,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4DCCD7B4_5EB8_3BF1_41C9_D96506C398CC",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 {
  "initialPosition": {
   "yaw": -161.06,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4DDEB7BD_5EB8_3BF2_41B1_762D5835A5CD",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 {
  "initialPosition": {
   "yaw": -145.28,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4D2927C7_5EB8_3B9F_41D6_399D52B06765",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 {
  "initialPosition": {
   "yaw": 7.78,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4D2507D0_5EB8_3BB1_41C8_2D905F27EF18",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 {
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4D3777D9_5EB8_3BB3_41D3_295D98C890EA",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 {
  "initialPosition": {
   "yaw": 9.42,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4D03B7E3_5EB8_3B97_41D2_3125169FF8C9",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 {
  "initialPosition": {
   "yaw": -137.98,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4D1DE7EC_5EB8_3B90_41D1_B8BD55608BED",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 {
  "initialPosition": {
   "hfov": 120,
   "yaw": 8.64,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4D6E27F6_5EB8_3B70_4193_66B582793C6A",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 {
  "initialPosition": {
   "yaw": 7.79,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4D7857FF_5EB8_3B70_41D5_B48004B2E8E8",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 {
  "initialPosition": {
   "yaw": 9.32,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4D4AC808_5EB8_3490_41B9_F8968E9912A6",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 {
  "initialPosition": {
   "yaw": 6.88,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4D440812_5EB8_34B0_41C9_2B05630F6B15",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 {
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4D56F81B_5EB8_34B0_41D7_4F50AE3385A9",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 {
  "initialPosition": {
   "yaw": 82.78,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4AA3E825_5EB8_3490_41D1_A24F3E100F4D",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 {
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4AB2482E_5EB8_3490_41D5_431A6CB877BE",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 {
  "initialPosition": {
   "yaw": 9.42,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4A8F5838_5EB8_34F0_419C_A0D599D33A7E",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 {
  "initialPosition": {
   "yaw": 8.04,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4A9E0842_5EB8_3490_41D2_C20A23257762",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 {
  "initialPosition": {
   "hfov": 120,
   "yaw": -39.51,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4AE8884B_5EB8_3490_41BF_B8528D0D6D10",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 {
  "initialPosition": {
   "yaw": 7.79,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4AE5F854_5EB8_34B0_41C6_FB3B5B845BD2",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 {
  "initialPosition": {
   "yaw": 9.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4AF4A85F_5EB8_34B0_41C9_6E985028DA35",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 {
  "initialPosition": {
   "yaw": 6.88,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4AC17867_5EB8_349F_41C8_948919132FBC",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 {
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4AD04871_5EB8_3573_41D3_38835A46067B",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 {
  "initialPosition": {
   "yaw": 7.78,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4A2D387A_5EB8_3571_4174_FF9B628DEC3E",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 {
  "initialPosition": {
   "yaw": 17.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4A3FA884_5EB8_3591_41CD_4E3C6C528532",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 {
  "initialPosition": {
   "yaw": 9.42,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4A0E888E_5EB8_3591_41C4_23D52D6B5142",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 {
  "initialPosition": {
   "yaw": 8.04,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4A1BE898_5EB8_35B1_41AA_CF4EAE0D3177",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 {
  "initialPosition": {
   "hfov": 120,
   "yaw": 8.64,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4A6A28A1_5EB8_3593_41C1_3316C6C470EC",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 {
  "initialPosition": {
   "yaw": 37.1,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4A6798AC_5EB8_3591_41C5_9DCF32226579",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 {
  "initialPosition": {
   "yaw": 9.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4A7628B5_5EB8_35F3_41C4_A8D666249A4D",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
 },
 {
  "initialPosition": {
   "yaw": 9.32,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_4A40F8BE_5EB8_35F1_41D5_3BFE3190ADB7",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
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
  }
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
  "id": "effect_22899FB3_2DD9_0427_41BB_298AEB3D2851",
  "class": "FadeOutEffect"
 },
 {
  "easing": "cubic_in_out",
  "duration": 1000,
  "id": "effect_4BA8A8D0_5EB8_35B1_41CC_D5F5569EAD57",
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
  "easing": "cubic_in_out",
  "duration": 1000,
  "id": "effect_3876CD6E_2DF9_0421_41C1_F0AB7F279824",
  "class": "FadeOutEffect"
 },
 {
  "easing": "cubic_in_out",
  "duration": 1000,
  "id": "effect_4BACF8D0_5EB8_35B1_41BB_B00131B2CA83",
  "class": "FadeInEffect"
 },
 "this.effect_3876CD6E_2DF9_0421_41C1_F0AB7F279824",
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
  "autoplay": true,
  "maximumAngle": 231.16,
  "id": "audio_A83B2F1A_B250_204B_41B2_61A870B2B428",
  "loop": true,
  "audio": {
   "mp3Url": "media/audio_A83B2F1A_B250_204B_41B2_61A870B2B428.mp3",
   "class": "AudioResource",
   "oggUrl": "media/audio_A83B2F1A_B250_204B_41B2_61A870B2B428.ogg",
   "id": "audioresource_1D15163A_0EEB_BFC9_419F_EF5F7074EFB1"
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
   "class": "AudioResource",
   "oggUrl": "media/audio_A875C8FE_B250_61CA_41D2_1BDD70C9887A.ogg",
   "id": "audioresource_A84F2D34_B270_605F_41E2_4CF67AB762D2"
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
   "class": "AudioResource",
   "oggUrl": "media/audio_A87513BA_B273_E04A_41AA_0102CD2EF1BE.ogg",
   "id": "audioresource_A83107F8_B270_2FD6_41E2_DAE1F661A577"
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
  "maximumAngle": 360,
  "id": "audio_1D15363A_0EEB_BFC9_4193_928F3B1A384C",
  "loop": true,
  "audio": "this.audioresource_1D15163A_0EEB_BFC9_419F_EF5F7074EFB1",
  "yaw": 0,
  "class": "DirectionalPanoramaAudio",
  "pitch": 0
 },
 "this.audio_58C48535_534B_1088_419D_65D26EA3E6EE",
 "this.audio_5F019C46_534B_1089_41CA_DD158DC6F095",
 "this.audio_5F11A888_534B_3198_41C1_CA34B7B483B7",
 "this.audio_5F3A7686_5349_3189_41B9_03AD1E92C6EA",
 "this.audio_5FD12071_5349_1088_41CE_1A9919606FBF",
 "this.audio_5F999E34_5349_3089_41A5_30E8148F4541",
 "this.audio_5FA8081E_5349_30B9_41D0_06F2A3501C10",
 "this.audio_5E6F6697_534F_3188_41D2_212D7D5C7CD4",
 "this.audio_5E08B9DF_534F_73B7_41C9_0C77F337DE42",
 "this.audio_5E20D107_534F_3088_4192_A9F38893E7D5",
 "this.audio_51D70E9C_5DEA_B3F4_41C9_7C42C4A1D34D",
 "this.audio_5116AAD0_5DE9_534C_41D3_54A18E2E7244",
 "this.audio_508C163F_5DEF_5335_41CB_6F4DF04ED378",
 "this.audio_5049FC7B_5DEF_D73D_41B8_AB9CCE43637C",
 "this.audio_502EF191_5DEE_F1CC_41D5_35D2DA805B06",
 "this.audio_53E0760B_5DE9_52DC_41AD_96CE4D26DD8B",
 "this.audio_53AB1146_5DE9_5154_41CA_FED3E44D14A9",
 {
  "autoplay": true,
  "id": "audio_4EA2DFE6_5E98_0B91_41D0_609166710E1F",
  "audio": {
   "mp3Url": "media/audio_4EA2DFE6_5E98_0B91_41D0_609166710E1F.mp3",
   "class": "AudioResource",
   "oggUrl": "media/audio_4EA2DFE6_5E98_0B91_41D0_609166710E1F.ogg"
  },
  "class": "MediaAudio"
 },
 "this.audio_58C48535_534B_1088_419D_65D26EA3E6EE",
 "this.audio_51D70E9C_5DEA_B3F4_41C9_7C42C4A1D34D"
], "children": [
 {
  "shadow": false,
  "progressBorderRadius": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "toolTipPaddingBottom": 4,
  "playbackBarHeadShadowVerticalLength": 0,
  "progressBarOpacity": 1,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "paddingLeft": 0,
  "progressRight": 0,
  "toolTipBorderSize": 1,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "toolTipShadowOpacity": 1,
  "toolTipOpacity": 0.7,
  "playbackBarBorderColor": "#FFFFFF",
  "class": "ViewerArea",
  "playbackBarHeight": 10,
  "paddingRight": 0,
  "toolTipShadowVerticalLength": 0,
  "toolTipTextShadowColor": "#000000",
  "playbackBarHeadWidth": 6,
  "playbackBarHeadShadow": true,
  "toolTipFontStyle": "normal",
  "minHeight": 50,
  "playbackBarProgressBorderSize": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "progressBottom": 0,
  "progressBorderSize": 0,
  "playbackBarRight": 0,
  "toolTipBackgroundColor": "#000000",
  "playbackBarBackgroundColorDirection": "vertical",
  "progressBarBorderSize": 0,
  "progressBarBorderRadius": 0,
  "playbackBarOpacity": 1,
  "playbackBarProgressBorderRadius": 0,
  "transitionMode": "blending",
  "paddingBottom": 0,
  "toolTipShadowHorizontalLength": 0,
  "toolTipShadowSpread": 0,
  "toolTipShadowColor": "#333333",
  "toolTipShadowBlurRadius": 3,
  "playbackBarHeadShadowHorizontalLength": 0,
  "progressBackgroundOpacity": 1,
  "minWidth": 100,
  "playbackBarBorderRadius": 0,
  "toolTipFontColor": "#606060",
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "paddingTop": 0,
  "playbackBarHeadBorderRadius": 0,
  "toolTipPaddingRight": 6,
  "toolTipTextShadowOpacity": 0,
  "toolTipPaddingTop": 4,
  "borderRadius": 0,
  "toolTipFontSize": 11,
  "playbackBarProgressOpacity": 1,
  "progressLeft": 0,
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarHeadBorderColor": "#000000",
  "progressBackgroundColorRatios": [
   0
  ],
  "playbackBarLeft": 0,
  "toolTipPaddingLeft": 6,
  "toolTipBorderColor": "#767676",
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "playbackBarBackgroundOpacity": 1,
  "playbackBarBorderSize": 0,
  "toolTipBorderRadius": 3,
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarHeadHeight": 15,
  "top": "0%",
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "bottom": "0%",
  "borderSize": 0,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "toolTipFontWeight": "normal",
  "id": "MainViewer",
  "toolTipTextShadowBlurRadius": 3,
  "progressBarBorderColor": "#000000",
  "playbackBarHeadOpacity": 1,
  "playbackBarHeadBorderSize": 0,
  "progressBackgroundColorDirection": "vertical",
  "playbackBarHeadShadowColor": "#000000",
  "progressBarBackgroundColorRatios": [
   0
  ],
  "progressHeight": 10,
  "left": "0%",
  "progressBorderColor": "#000000",
  "playbackBarBottom": 5,
  "right": "0%",
  "toolTipFontFamily": "Arial",
  "progressOpacity": 1,
  "progressBarBackgroundColor": [
   "#3399FF"
  ]
 },
 {
  "scrollBarColor": "#000000",
  "overflow": "visible",
  "scrollBarOpacity": 0.5,
  "verticalAlign": "middle",
  "paddingTop": 0,
  "width": 500,
  "height": 50,
  "maxWidth": 500,
  "paddingLeft": 0,
  "borderRadius": 5,
  "contentOpaque": false,
  "class": "Container",
  "paddingRight": 0,
  "scrollBarMargin": 2,
  "scrollBarWidth": 10,
  "minHeight": 55,
  "gap": 5,
  "top": "3%",
  "layout": "horizontal",
  "borderSize": 0,
  "id": "Container_807F782A_8E23_A905_41DE_623121285A09",
  "maxHeight": 55,
  "paddingBottom": 0,
  "horizontalAlign": "right",
  "backgroundOpacity": 0,
  "minWidth": 500,
  "right": "1.5%",
  "children": [
   {
    "scrollBarColor": "#000000",
    "overflow": "visible",
    "scrollBarOpacity": 0.5,
    "verticalAlign": "middle",
    "paddingTop": 0,
    "width": 400,
    "height": 55,
    "paddingLeft": 0,
    "borderRadius": 0,
    "contentOpaque": false,
    "class": "Container",
    "paddingRight": 0,
    "scrollBarMargin": 2,
    "scrollBarWidth": 10,
    "minHeight": 55,
    "gap": 0,
    "layout": "horizontal",
    "visible": false,
    "borderSize": 0,
    "id": "Container_80D3CF90_8E26_E705_41E0_E47025A2C106",
    "maxHeight": 55,
    "paddingBottom": 0,
    "horizontalAlign": "right",
    "backgroundOpacity": 0,
    "minWidth": 100,
    "children": [
     "this.IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37",
     {
      "toolTipPaddingBottom": 4,
      "verticalAlign": "middle",
      "mode": "toggle",
      "paddingTop": 0,
      "width": "100%",
      "iconURL": "skin/IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA.png",
      "height": "100%",
      "maxWidth": 60,
      "toolTipTextShadowOpacity": 0,
      "paddingLeft": 0,
      "toolTipPaddingTop": 4,
      "borderRadius": 0,
      "toolTipPaddingRight": 6,
      "toolTipBorderSize": 1,
      "toolTipFontSize": 11,
      "toolTipShadowOpacity": 1,
      "toolTipOpacity": 0.7,
      "class": "IconButton",
      "transparencyActive": true,
      "paddingRight": 0,
      "toolTipShadowVerticalLength": 0,
      "toolTipPaddingLeft": 6,
      "toolTipBorderColor": "#767676",
      "toolTipTextShadowColor": "#000000",
      "horizontalAlign": "center",
      "click": "if(!this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, true, 0, null, null, false) } else if(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, false, 0, null, null, false) }",
      "toolTipFontStyle": "normal",
      "toolTipBorderRadius": 3,
      "toolTip": "Full Screen",
      "minHeight": 1,
      "cursor": "hand",
      "borderSize": 0,
      "toolTipTextShadowBlurRadius": 3,
      "toolTipBackgroundColor": "#000000",
      "id": "IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA",
      "maxHeight": 60,
      "toolTipFontWeight": "normal",
      "paddingBottom": 0,
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
      "toolTipPaddingBottom": 4,
      "verticalAlign": "middle",
      "mode": "toggle",
      "paddingTop": 0,
      "width": "100%",
      "iconURL": "skin/IconButton_8105A313_8E22_BF0B_41E1_331C6035A930.png",
      "height": "100%",
      "maxWidth": 60,
      "toolTipTextShadowOpacity": 0,
      "paddingLeft": 0,
      "toolTipPaddingTop": 4,
      "borderRadius": 0,
      "toolTipPaddingRight": 6,
      "toolTipBorderSize": 1,
      "toolTipFontSize": 11,
      "toolTipShadowOpacity": 1,
      "toolTipOpacity": 0.7,
      "class": "IconButton",
      "transparencyActive": true,
      "paddingRight": 0,
      "toolTipShadowVerticalLength": 0,
      "toolTipPaddingLeft": 6,
      "toolTipBorderColor": "#767676",
      "toolTipTextShadowColor": "#000000",
      "horizontalAlign": "center",
      "click": "if(!this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, true, 0, this.effect_CACBF85D_EED0_7261_41DB_A3B65ECE0D5D, 'showEffect', false) } else if(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, false, 0, this.effect_CACBC85D_EED0_7261_41BE_8CF4C3A8170C, 'hideEffect', false) }",
      "toolTipFontStyle": "normal",
      "toolTipBorderRadius": 3,
      "toolTip": "Audio On/Off",
      "minHeight": 1,
      "cursor": "hand",
      "borderSize": 0,
      "toolTipTextShadowBlurRadius": 3,
      "toolTipBackgroundColor": "#000000",
      "id": "IconButton_8105A313_8E22_BF0B_41E1_331C6035A930",
      "maxHeight": 60,
      "toolTipFontWeight": "normal",
      "paddingBottom": 0,
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
    "toolTipPaddingBottom": 4,
    "verticalAlign": "middle",
    "mode": "toggle",
    "paddingTop": 0,
    "width": "100%",
    "iconURL": "skin/IconButton_811D89E1_8E3D_AB07_4191_94003C90B2FF.png",
    "height": "100%",
    "maxWidth": 55,
    "toolTipTextShadowOpacity": 0,
    "paddingLeft": 0,
    "toolTipPaddingTop": 4,
    "borderRadius": 0,
    "toolTipPaddingRight": 6,
    "toolTipBorderSize": 1,
    "toolTipFontSize": 11,
    "toolTipShadowOpacity": 1,
    "toolTipOpacity": 0.7,
    "class": "IconButton",
    "transparencyActive": true,
    "paddingRight": 0,
    "toolTipShadowVerticalLength": 0,
    "toolTipPaddingLeft": 6,
    "toolTipBorderColor": "#767676",
    "toolTipTextShadowColor": "#000000",
    "horizontalAlign": "center",
    "click": "if(!this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, true, 0, this.effect_32C91197_3F22_3110_4181_9E76B593FBFE, 'showEffect', false) } else if(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, false, 0, this.effect_32C92197_3F22_3110_419D_E2E21968F16F, 'hideEffect', false) }",
    "toolTipFontStyle": "normal",
    "toolTipBorderRadius": 3,
    "toolTip": "Settings",
    "minHeight": 55,
    "cursor": "hand",
    "borderSize": 0,
    "toolTipTextShadowBlurRadius": 3,
    "toolTipBackgroundColor": "#000000",
    "id": "IconButton_811D89E1_8E3D_AB07_4191_94003C90B2FF",
    "maxHeight": 55,
    "toolTipFontWeight": "normal",
    "paddingBottom": 0,
    "toolTipShadowHorizontalLength": 0,
    "toolTipShadowSpread": 0,
    "toolTipShadowColor": "#333333",
    "toolTipShadowBlurRadius": 3,
    "pressedIconURL": "skin/IconButton_811D89E1_8E3D_AB07_4191_94003C90B2FF_pressed.png",
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
  "backgroundColorDirection": "vertical",
  "overflow": "scroll",
  "scrollBarOpacity": 0.5,
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "verticalAlign": "top",
  "paddingTop": 0,
  "scrollBarColor": "#000000",
  "height": "100%",
  "width": "100%",
  "paddingLeft": 0,
  "borderRadius": 0,
  "contentOpaque": false,
  "class": "Container",
  "paddingRight": 0,
  "scrollBarMargin": 2,
  "scrollBarWidth": 10,
  "minHeight": 1,
  "gap": 10,
  "top": "0%",
  "layout": "absolute",
  "visible": false,
  "borderSize": 0,
  "backgroundColorRatios": [
   0,
   1
  ],
  "id": "Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB",
  "horizontalAlign": "left",
  "paddingBottom": 0,
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
  "mode": "push",
  "paddingTop": 0,
  "width": "3.03%",
  "iconURL": "skin/IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB.png",
  "height": "5.482%",
  "maxWidth": 50,
  "paddingLeft": 0,
  "borderRadius": 0,
  "class": "IconButton",
  "transparencyActive": true,
  "paddingRight": 0,
  "horizontalAlign": "center",
  "minHeight": 50,
  "rollOverIconURL": "skin/IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB_rollover.png",
  "top": "2%",
  "cursor": "hand",
  "visible": false,
  "borderSize": 0,
  "id": "IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB",
  "maxHeight": 50,
  "paddingBottom": 0,
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
  "paddingTop": 0,
  "scrollBarColor": "#000000",
  "paddingLeft": 0,
  "borderRadius": 0,
  "contentOpaque": false,
  "class": "Container",
  "paddingRight": 0,
  "scrollBarMargin": 2,
  "scrollBarWidth": 10,
  "minHeight": 1,
  "gap": 10,
  "top": "0%",
  "layout": "absolute",
  "bottom": "0%",
  "borderSize": 0,
  "visible": false,
  "id": "Container_53347472_4288_F6E6_4196_D7457B47D2CF",
  "horizontalAlign": "left",
  "backgroundColorRatios": [
   0,
   1
  ],
  "paddingBottom": 0,
  "left": "0%",
  "backgroundOpacity": 0.3,
  "minWidth": 1,
  "right": "0%",
  "children": [
   "this.MapViewer",
   {
    "verticalAlign": "middle",
    "mode": "push",
    "paddingTop": 0,
    "width": "5.07%",
    "iconURL": "skin/IconButton_50D1A26C_4289_72E1_41CD_2B557DFCC24F.png",
    "height": "5.91%",
    "maxWidth": 50,
    "paddingLeft": 0,
    "borderRadius": 0,
    "class": "IconButton",
    "transparencyActive": true,
    "paddingRight": 0,
    "horizontalAlign": "center",
    "click": "this.setComponentVisibility(this.Container_53347472_4288_F6E6_4196_D7457B47D2CF, false, 0, this.effect_500E3733_4297_3267_41C9_4935C0BEBF39, 'hideEffect', false)",
    "minHeight": 50,
    "rollOverIconURL": "skin/IconButton_50D1A26C_4289_72E1_41CD_2B557DFCC24F_rollover.png",
    "top": "5%",
    "cursor": "hand",
    "borderSize": 0,
    "id": "IconButton_50D1A26C_4289_72E1_41CD_2B557DFCC24F",
    "maxHeight": 50,
    "paddingBottom": 0,
    "backgroundOpacity": 0,
    "minWidth": 50,
    "right": "5%",
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
  "verticalAlign": "bottom",
  "paddingTop": 0,
  "height": 160,
  "paddingLeft": 0,
  "borderRadius": 0,
  "contentOpaque": false,
  "class": "Container",
  "paddingRight": 0,
  "scrollBarMargin": 2,
  "scrollBarWidth": 10,
  "minHeight": 130,
  "gap": 3,
  "layout": "vertical",
  "bottom": "0.7%",
  "borderSize": 0,
  "id": "Container_6EC9FEC0_76A2_F957_41C5_79AD4AF65B38",
  "maxHeight": 160,
  "paddingBottom": 0,
  "horizontalAlign": "center",
  "left": "15%",
  "backgroundOpacity": 0,
  "minWidth": 1,
  "right": "15%",
  "children": [
   {
    "rollOverItemThumbnailShadow": true,
    "backgroundColor": [
     "#000000"
    ],
    "verticalAlign": "top",
    "itemLabelFontFamily": "Arial",
    "itemBackgroundColorRatios": [],
    "rollOverItemThumbnailShadowVerticalLength": 0,
    "maxWidth": 770,
    "paddingLeft": 5,
    "itemThumbnailHeight": 60,
    "rollOverItemBackgroundColorDirection": "vertical",
    "class": "ThumbnailList",
    "selectedItemBackgroundColor": [],
    "paddingRight": 5,
    "scrollBarMargin": 2,
    "rollOverItemThumbnailShadowBlurRadius": 15,
    "scrollBarWidth": 5,
    "itemHorizontalAlign": "center",
    "itemMode": "normal",
    "playList": "this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist",
    "minHeight": 70,
    "gap": 7,
    "rollOverItemThumbnailShadowHorizontalLength": 0,
    "layout": "horizontal",
    "rollOverItemBackgroundColor": [
     "#000000"
    ],
    "itemLabelFontColor": "#FFFFFF",
    "horizontalAlign": "left",
    "selectedItemLabelFontStyle": "italic",
    "rollOverItemLabelFontColor": "#FFFFFF",
    "backgroundColorRatios": [
     0
    ],
    "rollOverItemLabelFontWeight": "bold",
    "paddingBottom": 5,
    "itemPaddingBottom": 3,
    "itemThumbnailScaleMode": "fit_outside",
    "selectedItemLabelFontColor": "#FFFFFF",
    "itemThumbnailOpacity": 1,
    "selectedItemLabelTextDecoration": "underline",
    "minWidth": 50,
    "itemLabelFontWeight": "normal",
    "selectedItemThumbnailShadowHorizontalLength": 0,
    "itemThumbnailShadow": false,
    "rollOverItemLabelTextDecoration": "underline",
    "rollOverItemLabelFontStyle": "normal",
    "backgroundColorDirection": "vertical",
    "itemThumbnailBorderRadius": 30,
    "scrollBarOpacity": 1,
    "rollOverItemBackgroundColorRatios": [
     0
    ],
    "scrollBarColor": "#52B7EF",
    "itemLabelTextDecoration": "none",
    "scrollBarVisible": "rollOver",
    "paddingTop": 5,
    "itemPaddingRight": 3,
    "itemLabelFontStyle": "normal",
    "height": "100%",
    "selectedItemThumbnailShadowBlurRadius": 15,
    "itemThumbnailWidth": 60,
    "borderRadius": 3,
    "selectedItemThumbnailShadow": true,
    "itemLabelHorizontalAlign": "center",
    "itemPaddingLeft": 3,
    "selectedItemLabelFontSize": 11,
    "itemBorderRadius": 0,
    "rollOverItemThumbnailShadowColor": "#FFFFFF",
    "selectedItemThumbnailShadowVerticalLength": 0,
    "selectedItemThumbnailShadowOpacity": 1,
    "width": "100%",
    "selectedItemBorderSize": 0,
    "itemPaddingTop": 3,
    "selectedItemBorderRadius": 0,
    "itemVerticalAlign": "middle",
    "borderSize": 0,
    "id": "ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472",
    "itemBackgroundOpacity": 0,
    "maxHeight": 100,
    "selectedItemThumbnailShadowColor": "#FFFFFF",
    "itemLabelGap": 5,
    "itemBackgroundColor": [],
    "itemBackgroundColorDirection": "vertical",
    "selectedItemBackgroundColorRatios": [],
    "itemOpacity": 1,
    "rollOverItemBackgroundOpacity": 0,
    "selectedItemLabelFontWeight": "bold",
    "itemLabelFontSize": 11,
    "selectedItemBackgroundOpacity": 0,
    "itemLabelPosition": "bottom",
    "rollOverItemThumbnailShadowOpacity": 1,
    "backgroundOpacity": 0.25,
    "shadow": false
   },
   {
    "scrollBarColor": "#000000",
    "overflow": "visible",
    "scrollBarOpacity": 0.5,
    "verticalAlign": "middle",
    "paddingTop": 0,
    "width": 70,
    "height": 55,
    "maxWidth": 70,
    "paddingLeft": 0,
    "borderRadius": 5,
    "contentOpaque": false,
    "class": "Container",
    "paddingRight": 0,
    "scrollBarMargin": 2,
    "scrollBarWidth": 10,
    "minHeight": 55,
    "gap": 0,
    "layout": "absolute",
    "borderSize": 0,
    "id": "Container_86F3A56C_8E22_5B1D_41CA_9CE53436FE56",
    "maxHeight": 55,
    "paddingBottom": 0,
    "horizontalAlign": "center",
    "backgroundOpacity": 0,
    "minWidth": 70,
    "children": [
     {
      "toolTipPaddingBottom": 4,
      "verticalAlign": "middle",
      "mode": "push",
      "paddingTop": 0,
      "width": "100%",
      "iconURL": "skin/IconButton_87577B8F_8E22_AF1B_41CC_79EB87AE6DED.png",
      "height": "100%",
      "maxWidth": 70,
      "toolTipTextShadowOpacity": 0,
      "paddingLeft": 0,
      "toolTipPaddingTop": 4,
      "borderRadius": 0,
      "toolTipPaddingRight": 6,
      "toolTipBorderSize": 1,
      "toolTipFontSize": 11,
      "toolTipShadowOpacity": 1,
      "toolTipOpacity": 0.7,
      "class": "IconButton",
      "transparencyActive": true,
      "paddingRight": 0,
      "toolTipShadowVerticalLength": 0,
      "toolTipPaddingLeft": 6,
      "toolTipBorderColor": "#767676",
      "toolTipTextShadowColor": "#000000",
      "horizontalAlign": "center",
      "click": "this.showPopupImage(this.ImageResource_6ECEF4DB_6091_DDD1_41D4_2B884570086A, null, '85%', '85%', this.FadeInEffect_8ED05F70_96C4_F045_41DC_2AB82A556F92, this.FadeOutEffect_8ED06F70_96C4_F045_41DA_C74400CF7B15, {'iconColor':'#FFFFFF','rollOverIconWidth':25,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorDirection':'vertical','rollOverBackgroundColor':['#000000','#000000','#000000'],'pressedBackgroundColor':['#000000','#000000','#000000'],'rollOverIconColor':'#52B7EF','backgroundColor':['#000000','#000000','#000000'],'rollOverBackgroundColorDirection':'vertical','pressedBorderSize':0,'borderSize':0,'backgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':25,'pressedIconLineWidth':3,'borderColor':'#000000','iconHeight':25,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':10,'pressedBorderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundOpacity':0.3,'pressedIconColor':'#CCCCCC','paddingBottom':10,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':25,'iconLineWidth':3,'pressedIconHeight':25,'paddingLeft':10,'backgroundOpacity':0.15,'rollOverBorderColor':'#000000','rollOverBackgroundOpacity':0.5,'rollOverIconHeight':25,'paddingRight':10,'rollOverIconLineWidth':3}, null, null, false)",
      "toolTipFontStyle": "normal",
      "toolTipBorderRadius": 3,
      "toolTip": "Info",
      "minHeight": 25,
      "rollOverIconURL": "skin/IconButton_87577B8F_8E22_AF1B_41CC_79EB87AE6DED_rollover.png",
      "cursor": "hand",
      "visible": false,
      "borderSize": 0,
      "toolTipTextShadowBlurRadius": 3,
      "toolTipBackgroundColor": "#000000",
      "id": "IconButton_87577B8F_8E22_AF1B_41CC_79EB87AE6DED",
      "maxHeight": 70,
      "toolTipFontWeight": "normal",
      "paddingBottom": 0,
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
      "toolTipPaddingBottom": 4,
      "verticalAlign": "middle",
      "mode": "push",
      "paddingTop": 0,
      "width": "100%",
      "iconURL": "skin/IconButton_213ED70C_2DB2_E6C5_41B6_0CCE6C77E889.png",
      "height": "100%",
      "maxWidth": 70,
      "toolTipTextShadowOpacity": 0,
      "paddingLeft": 0,
      "toolTipPaddingTop": 4,
      "borderRadius": 0,
      "toolTipPaddingRight": 6,
      "toolTipBorderSize": 1,
      "toolTipFontSize": 11,
      "toolTipShadowOpacity": 1,
      "toolTipOpacity": 0.7,
      "class": "IconButton",
      "transparencyActive": true,
      "paddingRight": 0,
      "toolTipShadowVerticalLength": 0,
      "toolTipPaddingLeft": 6,
      "toolTipBorderColor": "#767676",
      "toolTipTextShadowColor": "#000000",
      "horizontalAlign": "center",
      "click": "this.setMediaBehaviour(this.playList_4C4D949F_5EB8_3DAF_41C9_4B78346D4EBC, 0); this.MainViewerVideoPlayer.play()",
      "toolTipFontStyle": "normal",
      "toolTipBorderRadius": 3,
      "toolTip": "Play Video",
      "minHeight": 25,
      "rollOverIconURL": "skin/IconButton_213ED70C_2DB2_E6C5_41B6_0CCE6C77E889_rollover.png",
      "cursor": "hand",
      "visible": false,
      "borderSize": 0,
      "toolTipTextShadowBlurRadius": 3,
      "toolTipBackgroundColor": "#000000",
      "id": "IconButton_213ED70C_2DB2_E6C5_41B6_0CCE6C77E889",
      "maxHeight": 70,
      "toolTipFontWeight": "normal",
      "paddingBottom": 0,
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
      "toolTipPaddingBottom": 4,
      "verticalAlign": "top",
      "mode": "push",
      "paddingTop": 0,
      "width": "100%",
      "iconURL": "skin/IconButton_67A0F254_76E6_A97F_419D_52AF6E3FE7C0.png",
      "height": "100%",
      "maxWidth": 70,
      "toolTipTextShadowOpacity": 0,
      "paddingLeft": 0,
      "toolTipPaddingTop": 4,
      "borderRadius": 0,
      "toolTipPaddingRight": 6,
      "toolTipBorderSize": 1,
      "toolTipFontSize": 11,
      "toolTipShadowOpacity": 1,
      "toolTipOpacity": 0.7,
      "class": "IconButton",
      "transparencyActive": true,
      "paddingRight": 0,
      "toolTipShadowVerticalLength": 0,
      "toolTipPaddingLeft": 6,
      "toolTipBorderColor": "#767676",
      "toolTipTextShadowColor": "#000000",
      "horizontalAlign": "center",
      "click": "this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, true, 0, this.effect_508929C3_77ED_DB59_41D8_05A6C8F0681B, 'showEffect', false); this.setComponentVisibility(this.IconButton_843BBEF5_8E22_690F_419D_28CBDD771ACC, true, 0, this.effect_508929C3_77ED_DB59_41D8_05A6C8F0681B, 'showEffect', false); this.setComponentVisibility(this.IconButton_67A0F254_76E6_A97F_419D_52AF6E3FE7C0, false, 0, this.effect_518C2CD2_77ED_D97B_41C3_3AC87D499717, 'hideEffect', false)",
      "toolTipFontStyle": "normal",
      "toolTipBorderRadius": 3,
      "toolTip": "Show Panorama List",
      "minHeight": 55,
      "cursor": "hand",
      "visible": false,
      "borderSize": 0,
      "toolTipTextShadowBlurRadius": 3,
      "toolTipBackgroundColor": "#000000",
      "id": "IconButton_67A0F254_76E6_A97F_419D_52AF6E3FE7C0",
      "maxHeight": 55,
      "toolTipFontWeight": "normal",
      "paddingBottom": 0,
      "toolTipShadowHorizontalLength": 0,
      "toolTipShadowSpread": 0,
      "toolTipShadowColor": "#333333",
      "toolTipShadowBlurRadius": 3,
      "backgroundOpacity": 0,
      "toolTipFontColor": "#606060",
      "minWidth": 70,
      "toolTipFontFamily": "Arial",
      "shadow": false
     },
     {
      "toolTipPaddingBottom": 4,
      "verticalAlign": "top",
      "mode": "push",
      "paddingTop": 0,
      "width": "100%",
      "iconURL": "skin/IconButton_843BBEF5_8E22_690F_419D_28CBDD771ACC.png",
      "height": "100%",
      "maxWidth": 70,
      "toolTipTextShadowOpacity": 0,
      "paddingLeft": 0,
      "toolTipPaddingTop": 4,
      "borderRadius": 0,
      "toolTipPaddingRight": 6,
      "toolTipBorderSize": 1,
      "toolTipFontSize": 11,
      "toolTipShadowOpacity": 1,
      "toolTipOpacity": 0.7,
      "class": "IconButton",
      "transparencyActive": true,
      "paddingRight": 0,
      "toolTipShadowVerticalLength": 0,
      "toolTipPaddingLeft": 6,
      "toolTipBorderColor": "#767676",
      "toolTipTextShadowColor": "#000000",
      "horizontalAlign": "center",
      "click": "this.setComponentVisibility(this.IconButton_67A0F254_76E6_A97F_419D_52AF6E3FE7C0, true, 0, this.effect_640860A9_76E7_E929_4192_305B50E5610A, 'showEffect', false); this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, false, 0, this.effect_5032FA51_77E2_5979_41D1_45E5EF039077, 'hideEffect', false); this.setComponentVisibility(this.IconButton_843BBEF5_8E22_690F_419D_28CBDD771ACC, false, 0, this.effect_5032FA51_77E2_5979_41D1_45E5EF039077, 'hideEffect', false)",
      "toolTipFontStyle": "normal",
      "toolTipBorderRadius": 3,
      "toolTip": "Hide Panorama List",
      "minHeight": 55,
      "cursor": "hand",
      "borderSize": 0,
      "toolTipTextShadowBlurRadius": 3,
      "toolTipBackgroundColor": "#000000",
      "id": "IconButton_843BBEF5_8E22_690F_419D_28CBDD771ACC",
      "maxHeight": 55,
      "toolTipFontWeight": "normal",
      "paddingBottom": 0,
      "toolTipShadowHorizontalLength": 0,
      "toolTipShadowSpread": 0,
      "toolTipShadowColor": "#333333",
      "toolTipShadowBlurRadius": 3,
      "backgroundOpacity": 0,
      "toolTipFontColor": "#606060",
      "minWidth": 70,
      "toolTipFontFamily": "Arial",
      "shadow": false
     },
     "this.IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED",
     {
      "toolTipPaddingBottom": 4,
      "verticalAlign": "middle",
      "mode": "push",
      "paddingTop": 0,
      "width": "85%",
      "iconURL": "skin/IconButton_2FC9210C_3E8F_C4D4_41A7_10D1404CA49B.png",
      "height": "85%",
      "maxWidth": 70,
      "toolTipTextShadowOpacity": 0,
      "paddingLeft": 0,
      "toolTipPaddingTop": 4,
      "borderRadius": 0,
      "toolTipPaddingRight": 6,
      "toolTipBorderSize": 1,
      "toolTipFontSize": 11,
      "toolTipShadowOpacity": 1,
      "toolTipOpacity": 0.7,
      "class": "IconButton",
      "transparencyActive": true,
      "paddingRight": 0,
      "toolTipShadowVerticalLength": 0,
      "toolTipPaddingLeft": 6,
      "toolTipBorderColor": "#767676",
      "toolTipTextShadowColor": "#000000",
      "horizontalAlign": "center",
      "click": "this.setComponentVisibility(this.Container_53347472_4288_F6E6_4196_D7457B47D2CF, true, 0, this.effect_51CB7B74_4299_12E2_41B4_829087983DE5, 'showEffect', false)",
      "toolTipFontStyle": "normal",
      "toolTipBorderRadius": 3,
      "toolTip": "FLoor Plan",
      "minHeight": 25,
      "cursor": "hand",
      "visible": false,
      "borderSize": 0,
      "toolTipTextShadowBlurRadius": 3,
      "toolTipBackgroundColor": "#000000",
      "id": "IconButton_2FC9210C_3E8F_C4D4_41A7_10D1404CA49B",
      "maxHeight": 70,
      "toolTipFontWeight": "normal",
      "paddingBottom": 0,
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
  "showEffect": {
   "easing": "cubic_in_out",
   "duration": 350,
   "class": "FadeInEffect"
  },
  "backgroundColorDirection": "vertical",
  "backgroundColor": [
   "#000000"
  ],
  "paddingTop": 0,
  "paddingLeft": 0,
  "borderRadius": 0,
  "class": "UIComponent",
  "paddingRight": 0,
  "minHeight": 0,
  "top": 0,
  "bottom": 0,
  "borderSize": 0,
  "visible": false,
  "id": "veilPopupPanorama",
  "backgroundColorRatios": [
   0
  ],
  "paddingBottom": 0,
  "left": 0,
  "backgroundOpacity": 0.55,
  "minWidth": 0,
  "right": 0,
  "shadow": false
 },
 {
  "backgroundColorDirection": "vertical",
  "backgroundColor": [],
  "paddingTop": 0,
  "paddingLeft": 0,
  "borderRadius": 0,
  "class": "ZoomImage",
  "paddingRight": 0,
  "scaleMode": "custom",
  "minHeight": 0,
  "top": 0,
  "bottom": 0,
  "borderSize": 0,
  "visible": false,
  "id": "zoomImagePopupPanorama",
  "backgroundColorRatios": [],
  "paddingBottom": 0,
  "left": 0,
  "backgroundOpacity": 1,
  "minWidth": 0,
  "right": 0,
  "shadow": false
 },
 {
  "backgroundColorDirection": "vertical",
  "iconBeforeLabel": true,
  "backgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "verticalAlign": "middle",
  "fontSize": 12,
  "mode": "push",
  "paddingTop": 5,
  "iconHeight": 20,
  "textDecoration": "none",
  "paddingLeft": 5,
  "borderRadius": 0,
  "fontFamily": "Arial",
  "class": "CloseButton",
  "paddingRight": 5,
  "iconColor": "#000000",
  "horizontalAlign": "center",
  "minHeight": 0,
  "gap": 5,
  "top": 10,
  "fontWeight": "normal",
  "visible": false,
  "fontColor": "#FFFFFF",
  "borderColor": "#000000",
  "borderSize": 0,
  "cursor": "hand",
  "backgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "id": "closeButtonPopupPanorama",
  "fontStyle": "normal",
  "layout": "horizontal",
  "iconLineWidth": 5,
  "paddingBottom": 5,
  "shadowColor": "#000000",
  "shadowSpread": 1,
  "pressedIconColor": "#888888",
  "iconWidth": 20,
  "shadowBlurRadius": 6,
  "rollOverIconColor": "#666666",
  "showEffect": {
   "easing": "cubic_in_out",
   "duration": 350,
   "class": "FadeInEffect"
  },
  "label": "",
  "minWidth": 0,
  "right": 10,
  "backgroundOpacity": 0.3,
  "shadow": false
 }
], 
 "overflow": "visible",
 "scrollBarOpacity": 0.5,
 "mouseWheelEnabled": true,
 "verticalAlign": "top",
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "height": "100%",
 "width": "100%",
 "paddingLeft": 0,
 "borderRadius": 0,
 "contentOpaque": false,
 "class": "Player",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "vrPolyfillScale": 0.5,
 "minHeight": 20,
 "gap": 10,
 "layout": "absolute",
 "backgroundPreloadEnabled": true,
 "borderSize": 0,
 "scripts": {
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "registerKey": function(key, value){  window[key] = value; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio) delete audios[audio.get('id')]; } if(audio) audio.stop(); },
  "unregisterKey": function(key){  delete window[key]; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getKey": function(key){  return window[key]; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "existsKey": function(key){  return key in window; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); }
 },
 "id": "rootPlayer",
 "horizontalAlign": "left",
 "paddingBottom": 0,
 "buttonToggleMute": "this.IconButton_8105A313_8E22_BF0B_41E1_331C6035A930",
 "start": "this.playAudioList([this.audio_4EA2DFE6_5E98_0B91_41D0_609166710E1F]); this.syncPlaylists([this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); this.playList_4C47249F_5EB8_3DAF_41C2_69140060B782.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA].forEach(function(component) { component.set('visible', false); }) }",
 "minWidth": 20,
 "shadow": false,
 "buttonToggleFullscreen": "this.IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA",
 "scrollBarVisible": "rollOver"
})