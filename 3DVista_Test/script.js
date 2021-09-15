TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "adjacentPanoramas": [
   {
    "panorama": {
     "adjacentPanoramas": [
      {
       "panorama": {
        "adjacentPanoramas": [
         {
          "panorama": "this.panorama_EE1A46AE_E75B_6918_41D4_342F069646E8",
          "backwardYaw": -176.89,
          "yaw": -0.07,
          "class": "AdjacentPanorama",
          "distance": 1
         },
         {
          "panorama": {
           "adjacentPanoramas": [
            {
             "panorama": {
              "adjacentPanoramas": [
               {
                "panorama": "this.panorama_EE6590D3_E75A_A90F_41E3_006BF9C28D7E",
                "backwardYaw": 18.38,
                "yaw": 35.7,
                "class": "AdjacentPanorama",
                "distance": 1
               },
               {
                "panorama": {
                 "adjacentPanoramas": [
                  {
                   "panorama": "this.panorama_EE6590D3_E75A_A90F_41E3_006BF9C28D7E",
                   "backwardYaw": 67.16,
                   "yaw": 107.02,
                   "class": "AdjacentPanorama",
                   "distance": 1
                  },
                  {
                   "panorama": {
                    "adjacentPanoramas": [
                     {
                      "panorama": {
                       "adjacentPanoramas": [
                        {
                         "panorama": "this.panorama_EE659B53_E75A_BF0E_41C1_A393D71C934F",
                         "backwardYaw": 1.77,
                         "yaw": -179.76,
                         "class": "AdjacentPanorama",
                         "distance": 1
                        }
                       ],
                       "vfov": 180,
                       "partial": false,
                       "class": "Panorama",
                       "id": "panorama_EE65EE2A_E75A_B918_41B6_BE85642FAED1",
                       "hfovMin": 60,
                       "pitch": 0,
                       "frames": [
                        {
                         "thumbnailUrl": "media/panorama_EE65EE2A_E75A_B918_41B6_BE85642FAED1_t.jpg",
                         "sphere": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "height": 1000,
                            "width": 2000,
                            "url": "media/panorama_EE65EE2A_E75A_B918_41B6_BE85642FAED1_hq.jpeg",
                            "class": "ImageResourceLevel"
                           }
                          ]
                         },
                         "class": "SphericPanoramaFrame",
                         "overlays": [
                          {
                           "areas": [
                            {
                             "click": "this.startPanoramaWithCamera(this.panorama_EE659B53_E75A_BF0E_41C1_A393D71C934F, this.camera_E9E2ABD1_E789_8C82_41EC_8450BD416922); this.mainPlayList.set('selectedIndex', 6)",
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "id": "overlay_E90831A3_E77E_AB08_41DB_31FAA9CCF9DB",
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "useHandCursor": true,
                           "maps": [
                            {
                             "hfov": 11.88,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 49,
                                "width": 33,
                                "url": "media/panorama_EE65EE2A_E75A_B918_41B6_BE85642FAED1_0_HS_0_0_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ]
                             },
                             "yaw": -179.76,
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": 2.35
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "items": [
                            {
                             "yaw": -179.76,
                             "hfov": 11.88,
                             "class": "HotspotPanoramaOverlayImage",
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 98,
                                "width": 66,
                                "url": "media/panorama_EE65EE2A_E75A_B918_41B6_BE85642FAED1_0_HS_0_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ]
                             },
                             "pitch": 2.35
                            }
                           ]
                          },
                          {
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "id": "overlay_E9A04433_E779_690F_41E6_A3DD4171B5C7",
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "useHandCursor": true,
                           "maps": [
                            {
                             "hfov": 16.3,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 16,
                                "width": 35,
                                "url": "media/panorama_EE65EE2A_E75A_B918_41B6_BE85642FAED1_0_HS_1_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ]
                             },
                             "yaw": -177.69,
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": -6.89
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "items": [
                            {
                             "yaw": -177.69,
                             "hfov": 16.3,
                             "class": "HotspotPanoramaOverlayImage",
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 41,
                                "width": 91,
                                "url": "media/panorama_EE65EE2A_E75A_B918_41B6_BE85642FAED1_0_HS_1_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ]
                             },
                             "pitch": -6.89
                            }
                           ]
                          }
                         ]
                        }
                       ],
                       "hfovMax": 120,
                       "hfov": 360,
                       "label": "CAM 15",
                       "thumbnailUrl": "media/panorama_EE65EE2A_E75A_B918_41B6_BE85642FAED1_t.jpg",
                       "cardboardMenu": {
                        "fontFamily": "Arial",
                        "label": "Media",
                        "backgroundColor": "#404040",
                        "opacity": 0.4,
                        "selectedFontColor": "#FFFFFF",
                        "fontColor": "#FFFFFF",
                        "rollOverFontColor": "#FFFFFF",
                        "id": "Menu_EA420B2C_E789_8D82_41DA_AA7EFCA7D157",
                        "class": "Menu",
                        "selectedBackgroundColor": "#202020",
                        "children": [
                         {
                          "click": "this.mainPlayList.set('selectedIndex', 0)",
                          "label": "CAM 01_WM",
                          "class": "MenuItem"
                         },
                         {
                          "click": "this.mainPlayList.set('selectedIndex', 1)",
                          "label": "CAM 03_WM",
                          "class": "MenuItem"
                         },
                         {
                          "click": "this.mainPlayList.set('selectedIndex', 2)",
                          "label": "CAM 05_WM",
                          "class": "MenuItem"
                         },
                         {
                          "click": "this.mainPlayList.set('selectedIndex', 3)",
                          "label": "CAM 07_WM",
                          "class": "MenuItem"
                         },
                         {
                          "click": "this.mainPlayList.set('selectedIndex', 4)",
                          "label": "CAM 09",
                          "class": "MenuItem"
                         },
                         {
                          "click": "this.mainPlayList.set('selectedIndex', 5)",
                          "label": "CAM 10",
                          "class": "MenuItem"
                         },
                         {
                          "click": "this.mainPlayList.set('selectedIndex', 6)",
                          "label": "CAM 12",
                          "class": "MenuItem"
                         },
                         {
                          "click": "this.mainPlayList.set('selectedIndex', 7)",
                          "label": "CAM 15",
                          "class": "MenuItem"
                         }
                        ],
                        "rollOverBackgroundColor": "#000000",
                        "rollOverOpacity": 0.8
                       }
                      },
                      "backwardYaw": -179.76,
                      "yaw": 1.77,
                      "class": "AdjacentPanorama",
                      "distance": 1
                     },
                     {
                      "panorama": "this.panorama_EE65C8A1_E75A_B90B_41E2_9894B97F7344",
                      "backwardYaw": -0.59,
                      "yaw": -178.65,
                      "class": "AdjacentPanorama",
                      "distance": 1
                     }
                    ],
                    "vfov": 180,
                    "partial": false,
                    "class": "Panorama",
                    "id": "panorama_EE659B53_E75A_BF0E_41C1_A393D71C934F",
                    "hfovMin": 60,
                    "pitch": 0,
                    "frames": [
                     {
                      "thumbnailUrl": "media/panorama_EE659B53_E75A_BF0E_41C1_A393D71C934F_t.jpg",
                      "sphere": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "height": 1000,
                         "width": 2000,
                         "url": "media/panorama_EE659B53_E75A_BF0E_41C1_A393D71C934F_hq.jpeg",
                         "class": "ImageResourceLevel"
                        }
                       ]
                      },
                      "class": "SphericPanoramaFrame",
                      "overlays": [
                       {
                        "areas": [
                         {
                          "click": "this.startPanoramaWithCamera(this.panorama_EE65EE2A_E75A_B918_41B6_BE85642FAED1, this.camera_E993DB6A_E789_8D86_41D1_1020CA2A0B8D); this.mainPlayList.set('selectedIndex', 7)",
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "id": "overlay_E94C5096_E779_A909_41D5_87CEA999095F",
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "useHandCursor": true,
                        "maps": [
                         {
                          "hfov": 10.67,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 42,
                             "width": 29,
                             "url": "media/panorama_EE659B53_E75A_BF0E_41C1_A393D71C934F_0_HS_0_0_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ]
                          },
                          "yaw": 1.77,
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": -3.04
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "items": [
                         {
                          "yaw": 1.77,
                          "hfov": 10.67,
                          "class": "HotspotPanoramaOverlayImage",
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 85,
                             "width": 59,
                             "url": "media/panorama_EE659B53_E75A_BF0E_41C1_A393D71C934F_0_HS_0_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ]
                          },
                          "pitch": -3.04
                         }
                        ]
                       },
                       {
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "id": "overlay_E85603DE_E779_6F39_41E0_ED6BD259967C",
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "useHandCursor": true,
                        "maps": [
                         {
                          "hfov": 15.63,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 16,
                             "width": 32,
                             "url": "media/panorama_EE659B53_E75A_BF0E_41C1_A393D71C934F_0_HS_1_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ]
                          },
                          "yaw": 3.14,
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": -12.55
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "items": [
                         {
                          "yaw": 3.14,
                          "hfov": 15.63,
                          "class": "HotspotPanoramaOverlayImage",
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 43,
                             "width": 88,
                             "url": "media/panorama_EE659B53_E75A_BF0E_41C1_A393D71C934F_0_HS_1_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ]
                          },
                          "pitch": -12.55
                         }
                        ]
                       },
                       {
                        "areas": [
                         {
                          "click": "this.startPanoramaWithCamera(this.panorama_EE65C8A1_E75A_B90B_41E2_9894B97F7344, this.camera_E9A50B73_E789_8D86_41E1_C6FEF8BFD645); this.mainPlayList.set('selectedIndex', 5)",
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "id": "overlay_E82D9EFB_E77E_B6FF_41E2_3BAF95882577",
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "useHandCursor": true,
                        "maps": [
                         {
                          "hfov": 15.02,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 43,
                             "width": 41,
                             "url": "media/panorama_EE659B53_E75A_BF0E_41C1_A393D71C934F_0_HS_2_0_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ]
                          },
                          "yaw": -178.65,
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": -3.97
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "items": [
                         {
                          "yaw": -178.65,
                          "hfov": 15.02,
                          "class": "HotspotPanoramaOverlayImage",
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 86,
                             "width": 83,
                             "url": "media/panorama_EE659B53_E75A_BF0E_41C1_A393D71C934F_0_HS_2_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ]
                          },
                          "pitch": -3.97
                         }
                        ]
                       },
                       {
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "id": "overlay_E8203590_E77F_AB09_41EC_4CA49CC833AF",
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "useHandCursor": true,
                        "maps": [
                         {
                          "hfov": 16.63,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 16,
                             "width": 26,
                             "url": "media/panorama_EE659B53_E75A_BF0E_41C1_A393D71C934F_0_HS_3_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ]
                          },
                          "yaw": -176.1,
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": -14.14
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "items": [
                         {
                          "yaw": -176.1,
                          "hfov": 16.63,
                          "class": "HotspotPanoramaOverlayImage",
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 58,
                             "width": 95,
                             "url": "media/panorama_EE659B53_E75A_BF0E_41C1_A393D71C934F_0_HS_3_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ]
                          },
                          "pitch": -14.14
                         }
                        ]
                       }
                      ]
                     }
                    ],
                    "hfovMax": 120,
                    "hfov": 360,
                    "label": "CAM 12",
                    "thumbnailUrl": "media/panorama_EE659B53_E75A_BF0E_41C1_A393D71C934F_t.jpg",
                    "cardboardMenu": "this.Menu_EA420B2C_E789_8D82_41DA_AA7EFCA7D157"
                   },
                   "backwardYaw": -178.65,
                   "yaw": -0.59,
                   "class": "AdjacentPanorama",
                   "distance": 1
                  },
                  {
                   "panorama": "this.panorama_EE65A5D7_E75A_AB08_41E7_BC1428E7BBD1",
                   "backwardYaw": 4.14,
                   "yaw": -82.16,
                   "class": "AdjacentPanorama",
                   "distance": 1
                  }
                 ],
                 "vfov": 180,
                 "partial": false,
                 "class": "Panorama",
                 "id": "panorama_EE65C8A1_E75A_B90B_41E2_9894B97F7344",
                 "hfovMin": 60,
                 "pitch": 0,
                 "frames": [
                  {
                   "thumbnailUrl": "media/panorama_EE65C8A1_E75A_B90B_41E2_9894B97F7344_t.jpg",
                   "sphere": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "height": 1000,
                      "width": 2000,
                      "url": "media/panorama_EE65C8A1_E75A_B90B_41E2_9894B97F7344_hq.jpeg",
                      "class": "ImageResourceLevel"
                     }
                    ]
                   },
                   "class": "SphericPanoramaFrame",
                   "overlays": [
                    {
                     "areas": [
                      {
                       "click": "this.startPanoramaWithCamera(this.panorama_EE65A5D7_E75A_AB08_41E7_BC1428E7BBD1, this.camera_E93F9C11_E789_8B82_41E5_22D61245B629); this.mainPlayList.set('selectedIndex', 4)",
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "id": "overlay_EAD32518_E766_AB39_41DF_F39BF9DE11CC",
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "useHandCursor": true,
                     "maps": [
                      {
                       "hfov": 12.05,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 40,
                          "width": 33,
                          "url": "media/panorama_EE65C8A1_E75A_B90B_41E2_9894B97F7344_0_HS_0_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ]
                       },
                       "yaw": -82.16,
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -4.8
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "items": [
                      {
                       "yaw": -82.16,
                       "hfov": 12.05,
                       "class": "HotspotPanoramaOverlayImage",
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 81,
                          "width": 67,
                          "url": "media/panorama_EE65C8A1_E75A_B90B_41E2_9894B97F7344_0_HS_0_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ]
                       },
                       "pitch": -4.8
                      }
                     ]
                    },
                    {
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "id": "overlay_E95C565C_E767_A939_41BD_8D8F0980D387",
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "useHandCursor": true,
                     "maps": [
                      {
                       "hfov": 14.46,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 16,
                          "width": 33,
                          "url": "media/panorama_EE65C8A1_E75A_B90B_41E2_9894B97F7344_0_HS_1_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ]
                       },
                       "yaw": -80.54,
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -13.6
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "items": [
                      {
                       "yaw": -80.54,
                       "hfov": 14.46,
                       "class": "HotspotPanoramaOverlayImage",
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 39,
                          "width": 82,
                          "url": "media/panorama_EE65C8A1_E75A_B90B_41E2_9894B97F7344_0_HS_1_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ]
                       },
                       "pitch": -13.6
                      }
                     ]
                    },
                    {
                     "areas": [
                      {
                       "click": "this.startPanoramaWithCamera(this.panorama_EE659B53_E75A_BF0E_41C1_A393D71C934F, this.camera_E92D9C08_E789_8B82_41CE_C0586CCD1042); this.mainPlayList.set('selectedIndex', 6)",
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "id": "overlay_E916DD75_E779_5B0B_41C0_79092CFB3C5C",
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "useHandCursor": true,
                     "maps": [
                      {
                       "hfov": 13.79,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 35,
                          "width": 38,
                          "url": "media/panorama_EE65C8A1_E75A_B90B_41E2_9894B97F7344_0_HS_2_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ]
                       },
                       "yaw": -0.59,
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -2.95
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "items": [
                      {
                       "yaw": -0.59,
                       "hfov": 13.79,
                       "class": "HotspotPanoramaOverlayImage",
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 70,
                          "width": 76,
                          "url": "media/panorama_EE65C8A1_E75A_B90B_41E2_9894B97F7344_0_HS_2_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ]
                       },
                       "pitch": -2.95
                      }
                     ]
                    },
                    {
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "id": "overlay_E9E6DB8D_E779_7F1B_41D6_3456CD54B1EC",
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "useHandCursor": true,
                     "maps": [
                      {
                       "hfov": 17.88,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 16,
                          "width": 36,
                          "url": "media/panorama_EE65C8A1_E75A_B90B_41E2_9894B97F7344_0_HS_3_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ]
                       },
                       "yaw": 2.03,
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -11.11
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "items": [
                      {
                       "yaw": 2.03,
                       "hfov": 17.88,
                       "class": "HotspotPanoramaOverlayImage",
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 44,
                          "width": 101,
                          "url": "media/panorama_EE65C8A1_E75A_B90B_41E2_9894B97F7344_0_HS_3_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ]
                       },
                       "pitch": -11.11
                      }
                     ]
                    },
                    {
                     "areas": [
                      {
                       "click": "this.startPanoramaWithCamera(this.panorama_EE6590D3_E75A_A90F_41E3_006BF9C28D7E, this.camera_E91B9BFC_E789_8C82_41EA_EAD1CA4B0389); this.mainPlayList.set('selectedIndex', 3)",
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "id": "overlay_E9F20E66_E77B_5908_41EA_A347443B9B98",
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "useHandCursor": true,
                     "maps": [
                      {
                       "hfov": 18.05,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 37,
                          "width": 50,
                          "url": "media/panorama_EE65C8A1_E75A_B90B_41E2_9894B97F7344_0_HS_4_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ]
                       },
                       "yaw": 107.02,
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -0.05
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "items": [
                      {
                       "yaw": 107.02,
                       "hfov": 18.05,
                       "class": "HotspotPanoramaOverlayImage",
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 75,
                          "width": 100,
                          "url": "media/panorama_EE65C8A1_E75A_B90B_41E2_9894B97F7344_0_HS_4_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ]
                       },
                       "pitch": -0.05
                      }
                     ]
                    },
                    {
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "id": "overlay_E98A5DFD_E77B_5AFB_41BE_F17E4C715A9D",
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "useHandCursor": true,
                     "maps": [
                      {
                       "hfov": 16.07,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 16,
                          "width": 36,
                          "url": "media/panorama_EE65C8A1_E75A_B90B_41E2_9894B97F7344_0_HS_5_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ]
                       },
                       "yaw": 109.78,
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -7.43
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "items": [
                      {
                       "yaw": 109.78,
                       "hfov": 16.07,
                       "class": "HotspotPanoramaOverlayImage",
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 40,
                          "width": 90,
                          "url": "media/panorama_EE65C8A1_E75A_B90B_41E2_9894B97F7344_0_HS_5_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ]
                       },
                       "pitch": -7.43
                      }
                     ]
                    }
                   ]
                  }
                 ],
                 "hfovMax": 120,
                 "hfov": 360,
                 "label": "CAM 10",
                 "thumbnailUrl": "media/panorama_EE65C8A1_E75A_B90B_41E2_9894B97F7344_t.jpg",
                 "cardboardMenu": "this.Menu_EA420B2C_E789_8D82_41DA_AA7EFCA7D157"
                },
                "backwardYaw": -82.16,
                "yaw": 4.14,
                "class": "AdjacentPanorama",
                "distance": 1
               }
              ],
              "vfov": 180,
              "partial": false,
              "class": "Panorama",
              "id": "panorama_EE65A5D7_E75A_AB08_41E7_BC1428E7BBD1",
              "hfovMin": 60,
              "pitch": 0,
              "frames": [
               {
                "thumbnailUrl": "media/panorama_EE65A5D7_E75A_AB08_41E7_BC1428E7BBD1_t.jpg",
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "height": 1000,
                   "width": 2000,
                   "url": "media/panorama_EE65A5D7_E75A_AB08_41E7_BC1428E7BBD1_hq.jpeg",
                   "class": "ImageResourceLevel"
                  }
                 ]
                },
                "class": "SphericPanoramaFrame",
                "overlays": [
                 {
                  "areas": [
                   {
                    "click": "this.startPanoramaWithCamera(this.panorama_EE6590D3_E75A_A90F_41E3_006BF9C28D7E, this.camera_E9B7BB83_E789_8C86_41D3_56683F511002); this.mainPlayList.set('selectedIndex', 3)",
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "id": "overlay_EA0BA48C_E76A_A919_41D0_AE54BB1E4A05",
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "useHandCursor": true,
                  "maps": [
                   {
                    "hfov": 10.34,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 31,
                       "width": 28,
                       "url": "media/panorama_EE65A5D7_E75A_AB08_41E7_BC1428E7BBD1_0_HS_0_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "yaw": 35.7,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": 4.57
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "items": [
                   {
                    "yaw": 35.7,
                    "hfov": 10.34,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 62,
                       "width": 57,
                       "url": "media/panorama_EE65A5D7_E75A_AB08_41E7_BC1428E7BBD1_0_HS_0_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "pitch": 4.57
                   }
                  ]
                 },
                 {
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "id": "overlay_E9177299_E76B_A938_41DC_B7200A7AF817",
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "useHandCursor": true,
                  "maps": [
                   {
                    "hfov": 14.7,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 16,
                       "width": 32,
                       "url": "media/panorama_EE65A5D7_E75A_AB08_41E7_BC1428E7BBD1_0_HS_1_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "yaw": 37.18,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -3.34
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "items": [
                   {
                    "yaw": 37.18,
                    "hfov": 14.7,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 40,
                       "width": 81,
                       "url": "media/panorama_EE65A5D7_E75A_AB08_41E7_BC1428E7BBD1_0_HS_1_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "pitch": -3.34
                   }
                  ]
                 },
                 {
                  "areas": [
                   {
                    "click": "this.startPanoramaWithCamera(this.panorama_EE65C8A1_E75A_B90B_41E2_9894B97F7344, this.camera_E9C93B97_E789_8C8E_41DE_BC659262C658); this.mainPlayList.set('selectedIndex', 5)",
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "id": "overlay_E92EB755_E76B_570B_41CA_20EFD4ADE2D6",
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "useHandCursor": true,
                  "maps": [
                   {
                    "hfov": 13.48,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 26,
                       "width": 37,
                       "url": "media/panorama_EE65A5D7_E75A_AB08_41E7_BC1428E7BBD1_0_HS_2_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "yaw": 4.14,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": 2.44
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "items": [
                   {
                    "yaw": 4.14,
                    "hfov": 13.48,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 53,
                       "width": 74,
                       "url": "media/panorama_EE65A5D7_E75A_AB08_41E7_BC1428E7BBD1_0_HS_2_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "pitch": 2.44
                   }
                  ]
                 },
                 {
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "id": "overlay_E91136EB_E769_A91F_41D1_5F81E3CA53BB",
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "useHandCursor": true,
                  "maps": [
                   {
                    "hfov": 16.27,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 16,
                       "width": 33,
                       "url": "media/panorama_EE65A5D7_E75A_AB08_41E7_BC1428E7BBD1_0_HS_3_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "yaw": 6.12,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -5.19
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "items": [
                   {
                    "yaw": 6.12,
                    "hfov": 16.27,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 43,
                       "width": 90,
                       "url": "media/panorama_EE65A5D7_E75A_AB08_41E7_BC1428E7BBD1_0_HS_3_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "pitch": -5.19
                   }
                  ]
                 }
                ]
               }
              ],
              "hfovMax": 120,
              "hfov": 360,
              "label": "CAM 09",
              "thumbnailUrl": "media/panorama_EE65A5D7_E75A_AB08_41E7_BC1428E7BBD1_t.jpg",
              "cardboardMenu": "this.Menu_EA420B2C_E789_8D82_41DA_AA7EFCA7D157"
             },
             "backwardYaw": 35.7,
             "yaw": 18.38,
             "class": "AdjacentPanorama",
             "distance": 1
            },
            {
             "panorama": "this.panorama_EE64ABCF_E75B_5F17_41E2_4DF6DDFD49D2",
             "backwardYaw": -176.17,
             "yaw": -126.8,
             "class": "AdjacentPanorama",
             "distance": 1
            },
            {
             "panorama": "this.panorama_EE65C8A1_E75A_B90B_41E2_9894B97F7344",
             "backwardYaw": 107.02,
             "yaw": 67.16,
             "class": "AdjacentPanorama",
             "distance": 1
            }
           ],
           "vfov": 180,
           "partial": false,
           "class": "Panorama",
           "id": "panorama_EE6590D3_E75A_A90F_41E3_006BF9C28D7E",
           "hfovMin": 60,
           "pitch": 0,
           "frames": [
            {
             "thumbnailUrl": "media/panorama_EE6590D3_E75A_A90F_41E3_006BF9C28D7E_t.jpg",
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "height": 2500,
                "width": 5000,
                "url": "media/panorama_EE6590D3_E75A_A90F_41E3_006BF9C28D7E_hq.jpeg",
                "class": "ImageResourceLevel"
               },
               {
                "height": 1608,
                "width": 3217,
                "url": "media/panorama_EE6590D3_E75A_A90F_41E3_006BF9C28D7E.jpeg",
                "class": "ImageResourceLevel"
               }
              ]
             },
             "class": "SphericPanoramaFrame",
             "overlays": [
              {
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_EE64ABCF_E75B_5F17_41E2_4DF6DDFD49D2, this.camera_EA7BEB4E_E789_8D9E_41B7_13B7B17D1680); this.mainPlayList.set('selectedIndex', 2)",
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "id": "overlay_EB9FA3C9_E76B_6F1B_41BD_4C3FCDB841E1",
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "useHandCursor": true,
               "maps": [
                {
                 "hfov": 8.35,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 78,
                    "width": 57,
                    "url": "media/panorama_EE6590D3_E75A_A90F_41E3_006BF9C28D7E_0_HS_0_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "yaw": -126.8,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": 0.88
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "items": [
                {
                 "yaw": -126.8,
                 "hfov": 8.35,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 157,
                    "width": 115,
                    "url": "media/panorama_EE6590D3_E75A_A90F_41E3_006BF9C28D7E_0_HS_0_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "pitch": 0.88
                }
               ]
              },
              {
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000"
                }
               ],
               "id": "overlay_E9478110_E76A_AB09_41E7_781CCF0DCF10",
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "useHandCursor": true,
               "maps": [
                {
                 "hfov": 13.9,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 16,
                    "width": 28,
                    "url": "media/panorama_EE6590D3_E75A_A90F_41E3_006BF9C28D7E_0_HS_1_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "yaw": -125.44,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -7.16
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "items": [
                {
                 "yaw": -125.44,
                 "hfov": 13.9,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 108,
                    "width": 194,
                    "url": "media/panorama_EE6590D3_E75A_A90F_41E3_006BF9C28D7E_0_HS_1_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "pitch": -7.16
                }
               ]
              },
              {
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_EE65A5D7_E75A_AB08_41E7_BC1428E7BBD1, this.camera_EA672B44_E789_8D82_41B5_A6307D2FB8CD); this.mainPlayList.set('selectedIndex', 4)",
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "id": "overlay_E9597B6D_E769_BF1B_41DC_2F759DEABF76",
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "useHandCursor": true,
               "maps": [
                {
                 "hfov": 15.04,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 73,
                    "width": 104,
                    "url": "media/panorama_EE6590D3_E75A_A90F_41E3_006BF9C28D7E_0_HS_2_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "yaw": 18.38,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -0.48
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "items": [
                {
                 "yaw": 18.38,
                 "hfov": 15.04,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 147,
                    "width": 208,
                    "url": "media/panorama_EE6590D3_E75A_A90F_41E3_006BF9C28D7E_0_HS_2_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "pitch": -0.48
                }
               ]
              },
              {
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000"
                }
               ],
               "id": "overlay_E93797B1_E76E_F70B_41E5_CA0088C05C58",
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "useHandCursor": true,
               "maps": [
                {
                 "hfov": 13.85,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 16,
                    "width": 32,
                    "url": "media/panorama_EE6590D3_E75A_A90F_41E3_006BF9C28D7E_0_HS_3_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "yaw": 20.01,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -7.01
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "items": [
                {
                 "yaw": 20.01,
                 "hfov": 13.85,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 94,
                    "width": 193,
                    "url": "media/panorama_EE6590D3_E75A_A90F_41E3_006BF9C28D7E_0_HS_3_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "pitch": -7.01
                }
               ]
              },
              {
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_EE65C8A1_E75A_B90B_41E2_9894B97F7344, this.camera_E98DFB57_E789_8D8E_41C4_9A7909509F88); this.mainPlayList.set('selectedIndex', 5)",
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "id": "overlay_E93DE440_E76F_A909_41DA_B0083915A8C9",
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "useHandCursor": true,
               "maps": [
                {
                 "hfov": 12.69,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 84,
                    "width": 88,
                    "url": "media/panorama_EE6590D3_E75A_A90F_41E3_006BF9C28D7E_0_HS_4_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "yaw": 67.16,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -1.66
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "items": [
                {
                 "yaw": 67.16,
                 "hfov": 12.69,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 168,
                    "width": 176,
                    "url": "media/panorama_EE6590D3_E75A_A90F_41E3_006BF9C28D7E_0_HS_4_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "pitch": -1.66
                }
               ]
              },
              {
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000"
                }
               ],
               "id": "overlay_E9F529D2_E769_5B09_41D0_20656BD0B866",
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "useHandCursor": true,
               "maps": [
                {
                 "hfov": 16.09,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 16,
                    "width": 33,
                    "url": "media/panorama_EE6590D3_E75A_A90F_41E3_006BF9C28D7E_0_HS_5_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "yaw": 69.31,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -10.07
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "items": [
                {
                 "yaw": 69.31,
                 "hfov": 16.09,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 109,
                    "width": 226,
                    "url": "media/panorama_EE6590D3_E75A_A90F_41E3_006BF9C28D7E_0_HS_5_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "pitch": -10.07
                }
               ]
              }
             ]
            }
           ],
           "hfovMax": 120,
           "hfov": 360,
           "label": "CAM 07_WM",
           "thumbnailUrl": "media/panorama_EE6590D3_E75A_A90F_41E3_006BF9C28D7E_t.jpg",
           "cardboardMenu": "this.Menu_EA420B2C_E789_8D82_41DA_AA7EFCA7D157"
          },
          "backwardYaw": -126.8,
          "yaw": -176.17,
          "class": "AdjacentPanorama",
          "distance": 1
         }
        ],
        "vfov": 180,
        "partial": false,
        "class": "Panorama",
        "id": "panorama_EE64ABCF_E75B_5F17_41E2_4DF6DDFD49D2",
        "hfovMin": 60,
        "pitch": 0,
        "frames": [
         {
          "thumbnailUrl": "media/panorama_EE64ABCF_E75B_5F17_41E2_4DF6DDFD49D2_t.jpg",
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 2500,
             "width": 5000,
             "url": "media/panorama_EE64ABCF_E75B_5F17_41E2_4DF6DDFD49D2_hq.jpeg",
             "class": "ImageResourceLevel"
            },
            {
             "height": 1608,
             "width": 3217,
             "url": "media/panorama_EE64ABCF_E75B_5F17_41E2_4DF6DDFD49D2.jpeg",
             "class": "ImageResourceLevel"
            }
           ]
          },
          "class": "SphericPanoramaFrame",
          "overlays": [
           {
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_EE6590D3_E75A_A90F_41E3_006BF9C28D7E, this.camera_E907FBF3_E789_8C86_41E7_83026FD94941); this.mainPlayList.set('selectedIndex', 3)",
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "id": "overlay_EBFD582B_E759_B91F_41EB_3CB90461DCFB",
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "useHandCursor": true,
            "maps": [
             {
              "hfov": 13,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 73,
                 "width": 90,
                 "url": "media/panorama_EE64ABCF_E75B_5F17_41E2_4DF6DDFD49D2_0_HS_0_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "yaw": -176.17,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -2.08
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "items": [
             {
              "yaw": -176.17,
              "hfov": 13,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 147,
                 "width": 180,
                 "url": "media/panorama_EE64ABCF_E75B_5F17_41E2_4DF6DDFD49D2_0_HS_0_0.png",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "pitch": -2.08
             }
            ]
           },
           {
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "id": "overlay_EA4EDC36_E759_D909_41E6_0AE7EDCF19E7",
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "useHandCursor": true,
            "maps": [
             {
              "hfov": 14.02,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 16,
                 "width": 33,
                 "url": "media/panorama_EE64ABCF_E75B_5F17_41E2_4DF6DDFD49D2_0_HS_1_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "yaw": -174.41,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -8.39
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "items": [
             {
              "yaw": -174.41,
              "hfov": 14.02,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 94,
                 "width": 196,
                 "url": "media/panorama_EE64ABCF_E75B_5F17_41E2_4DF6DDFD49D2_0_HS_1_0.png",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "pitch": -8.39
             }
            ]
           },
           {
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_EE1A46AE_E75B_6918_41D4_342F069646E8, this.camera_E9F52BE5_E789_8C82_41E5_CA931C3EBCDE); this.mainPlayList.set('selectedIndex', 1)",
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "id": "overlay_EAB7A973_E766_BB0F_41AB_A811A6DBD27E",
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "useHandCursor": true,
            "maps": [
             {
              "hfov": 11.85,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 80,
                 "width": 82,
                 "url": "media/panorama_EE64ABCF_E75B_5F17_41E2_4DF6DDFD49D2_0_HS_2_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "yaw": -0.07,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -3.57
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "items": [
             {
              "yaw": -0.07,
              "hfov": 11.85,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 160,
                 "width": 164,
                 "url": "media/panorama_EE64ABCF_E75B_5F17_41E2_4DF6DDFD49D2_0_HS_2_0.png",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "pitch": -3.57
             }
            ]
           },
           {
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "id": "overlay_EAFEBC65_E769_D90B_41DD_E76210FB7A31",
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "useHandCursor": true,
            "maps": [
             {
              "hfov": 14.61,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 16,
                 "width": 32,
                 "url": "media/panorama_EE64ABCF_E75B_5F17_41E2_4DF6DDFD49D2_0_HS_3_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "yaw": 2.1,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -10.61
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "items": [
             {
              "yaw": 2.1,
              "hfov": 14.61,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 102,
                 "width": 206,
                 "url": "media/panorama_EE64ABCF_E75B_5F17_41E2_4DF6DDFD49D2_0_HS_3_0.png",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "pitch": -10.61
             }
            ]
           }
          ]
         }
        ],
        "hfovMax": 120,
        "hfov": 360,
        "label": "CAM 05_WM",
        "thumbnailUrl": "media/panorama_EE64ABCF_E75B_5F17_41E2_4DF6DDFD49D2_t.jpg",
        "cardboardMenu": "this.Menu_EA420B2C_E789_8D82_41DA_AA7EFCA7D157"
       },
       "backwardYaw": -0.07,
       "yaw": -176.89,
       "class": "AdjacentPanorama",
       "distance": 1
      },
      {
       "panorama": "this.panorama_EE157D2C_E75B_7B19_41E0_716EE9E23577",
       "backwardYaw": -176.62,
       "yaw": -1.33,
       "class": "AdjacentPanorama",
       "distance": 1
      }
     ],
     "vfov": 180,
     "partial": false,
     "class": "Panorama",
     "id": "panorama_EE1A46AE_E75B_6918_41D4_342F069646E8",
     "hfovMin": 60,
     "pitch": 0,
     "frames": [
      {
       "thumbnailUrl": "media/panorama_EE1A46AE_E75B_6918_41D4_342F069646E8_t.jpg",
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "height": 2500,
          "width": 5000,
          "url": "media/panorama_EE1A46AE_E75B_6918_41D4_342F069646E8_hq.jpeg",
          "class": "ImageResourceLevel"
         },
         {
          "height": 1608,
          "width": 3217,
          "url": "media/panorama_EE1A46AE_E75B_6918_41D4_342F069646E8.jpeg",
          "class": "ImageResourceLevel"
         }
        ]
       },
       "class": "SphericPanoramaFrame",
       "overlays": [
        {
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_EE64ABCF_E75B_5F17_41E2_4DF6DDFD49D2, this.camera_E9DD6BAA_E789_8C86_41E8_A50DE8E43FB2); this.mainPlayList.set('selectedIndex', 2)",
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "id": "overlay_EB486626_E75E_E908_41DF_F575AD6A1094",
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "useHandCursor": true,
         "maps": [
          {
           "hfov": 13.52,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 81,
              "width": 94,
              "url": "media/panorama_EE1A46AE_E75B_6918_41D4_342F069646E8_0_HS_0_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "yaw": -176.89,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -4.47
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "items": [
          {
           "yaw": -176.89,
           "hfov": 13.52,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 163,
              "width": 188,
              "url": "media/panorama_EE1A46AE_E75B_6918_41D4_342F069646E8_0_HS_0_0.png",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "pitch": -4.47
          }
         ]
        },
        {
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "id": "overlay_EBD65DF7_E759_5AF7_41D9_B5ED6447DF39",
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "useHandCursor": true,
         "maps": [
          {
           "hfov": 13.55,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 16,
              "width": 31,
              "url": "media/panorama_EE1A46AE_E75B_6918_41D4_342F069646E8_0_HS_1_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "yaw": -175.3,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -11.5
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "items": [
          {
           "yaw": -175.3,
           "hfov": 13.55,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 99,
              "width": 192,
              "url": "media/panorama_EE1A46AE_E75B_6918_41D4_342F069646E8_0_HS_1_0.png",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "pitch": -11.5
          }
         ]
        },
        {
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_EE157D2C_E75B_7B19_41E0_716EE9E23577, this.camera_E9D0CBBE_E789_8CFE_41E7_8506730B3C26); this.mainPlayList.set('selectedIndex', 0)",
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "id": "overlay_EA3E49BC_E75B_7B79_41E5_D7E7233B2671",
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "useHandCursor": true,
         "maps": [
          {
           "hfov": 12.7,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 76,
              "width": 88,
              "url": "media/panorama_EE1A46AE_E75B_6918_41D4_342F069646E8_0_HS_2_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "yaw": -1.33,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -2.26
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "items": [
          {
           "yaw": -1.33,
           "hfov": 12.7,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 152,
              "width": 176,
              "url": "media/panorama_EE1A46AE_E75B_6918_41D4_342F069646E8_0_HS_2_0.png",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "pitch": -2.26
          }
         ]
        },
        {
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "id": "overlay_EAF5710C_E75B_EB19_41EB_3C23E3DA47C1",
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "useHandCursor": true,
         "maps": [
          {
           "hfov": 13.21,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 16,
              "width": 30,
              "url": "media/panorama_EE1A46AE_E75B_6918_41D4_342F069646E8_0_HS_3_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "yaw": -0.27,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -8.43
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "items": [
          {
           "yaw": -0.27,
           "hfov": 13.21,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 97,
              "width": 185,
              "url": "media/panorama_EE1A46AE_E75B_6918_41D4_342F069646E8_0_HS_3_0.png",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "pitch": -8.43
          }
         ]
        }
       ]
      }
     ],
     "hfovMax": 120,
     "hfov": 360,
     "label": "CAM 03_WM",
     "thumbnailUrl": "media/panorama_EE1A46AE_E75B_6918_41D4_342F069646E8_t.jpg",
     "cardboardMenu": "this.Menu_EA420B2C_E789_8D82_41DA_AA7EFCA7D157"
    },
    "backwardYaw": -1.33,
    "yaw": -176.62,
    "class": "AdjacentPanorama",
    "distance": 1
   }
  ],
  "vfov": 180,
  "partial": false,
  "class": "Panorama",
  "id": "panorama_EE157D2C_E75B_7B19_41E0_716EE9E23577",
  "hfovMin": 60,
  "pitch": 0,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_EE157D2C_E75B_7B19_41E0_716EE9E23577_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2500,
       "width": 5000,
       "url": "media/panorama_EE157D2C_E75B_7B19_41E0_716EE9E23577_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_EE157D2C_E75B_7B19_41E0_716EE9E23577.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_EE1A46AE_E75B_6918_41D4_342F069646E8, this.camera_E99F2B60_E789_8D82_41E9_88CBE7079074); this.mainPlayList.set('selectedIndex', 1)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_EC6409D6_E759_7B09_41B1_AF91B4A63871",
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "useHandCursor": true,
      "maps": [
       {
        "hfov": 14.52,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 75,
           "width": 100,
           "url": "media/panorama_EE157D2C_E75B_7B19_41E0_716EE9E23577_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "yaw": -176.62,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -2.54
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "yaw": -176.62,
        "hfov": 14.52,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 150,
           "width": 201,
           "url": "media/panorama_EE157D2C_E75B_7B19_41E0_716EE9E23577_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -2.54
       }
      ]
     },
     {
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "id": "overlay_EB574FFA_E75E_D6F8_41B8_4B0B26163138",
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "useHandCursor": true,
      "maps": [
       {
        "hfov": 14.51,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 15,
           "width": 31,
           "url": "media/panorama_EE157D2C_E75B_7B19_41E0_716EE9E23577_0_HS_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "yaw": -175.04,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -9.47
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "yaw": -175.04,
        "hfov": 14.51,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 103,
           "width": 204,
           "url": "media/panorama_EE157D2C_E75B_7B19_41E0_716EE9E23577_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -9.47
       }
      ]
     }
    ]
   }
  ],
  "hfovMax": 120,
  "hfov": 360,
  "label": "CAM 01_WM",
  "thumbnailUrl": "media/panorama_EE157D2C_E75B_7B19_41E0_716EE9E23577_t.jpg",
  "cardboardMenu": "this.Menu_EA420B2C_E789_8D82_41DA_AA7EFCA7D157"
 },
 {
  "preloadEnabled": false,
  "buttonCardboardView": "this.IconButton_F6F606BB_E76B_A978_41E5_5914D63FC0B8",
  "mouseControlMode": "drag_acceleration",
  "gyroscopeVerticalDraggingEnabled": true,
  "id": "MainViewerPanoramaPlayer",
  "gyroscopeEnabled": true,
  "viewerArea": "this.MainViewer",
  "displayPlaybackBar": true,
  "class": "PanoramaPlayer",
  "touchControlMode": "drag_rotation"
 },
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_EE157D2C_E75B_7B19_41E0_716EE9E23577_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_EE1A46AE_E75B_6918_41D4_342F069646E8",
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_EE1A46AE_E75B_6918_41D4_342F069646E8_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_EE64ABCF_E75B_5F17_41E2_4DF6DDFD49D2",
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_EE64ABCF_E75B_5F17_41E2_4DF6DDFD49D2_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_EE6590D3_E75A_A90F_41E3_006BF9C28D7E",
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_EE6590D3_E75A_A90F_41E3_006BF9C28D7E_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_EE65A5D7_E75A_AB08_41E7_BC1428E7BBD1",
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_EE65A5D7_E75A_AB08_41E7_BC1428E7BBD1_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_EE65C8A1_E75A_B90B_41E2_9894B97F7344",
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_EE65C8A1_E75A_B90B_41E2_9894B97F7344_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_EE659B53_E75A_BF0E_41C1_A393D71C934F",
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_EE659B53_E75A_BF0E_41C1_A393D71C934F_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_EE65EE2A_E75A_B918_41B6_BE85642FAED1",
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_EE65EE2A_E75A_B918_41B6_BE85642FAED1_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "mainPlayList",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_EE157D2C_E75B_7B19_41E0_716EE9E23577",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_EE157D2C_E75B_7B19_41E0_716EE9E23577_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_EE1A46AE_E75B_6918_41D4_342F069646E8",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_EE1A46AE_E75B_6918_41D4_342F069646E8_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_EE64ABCF_E75B_5F17_41E2_4DF6DDFD49D2",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_EE64ABCF_E75B_5F17_41E2_4DF6DDFD49D2_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_EE6590D3_E75A_A90F_41E3_006BF9C28D7E",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_EE6590D3_E75A_A90F_41E3_006BF9C28D7E_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_EE65A5D7_E75A_AB08_41E7_BC1428E7BBD1",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_EE65A5D7_E75A_AB08_41E7_BC1428E7BBD1_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_EE65C8A1_E75A_B90B_41E2_9894B97F7344",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_EE65C8A1_E75A_B90B_41E2_9894B97F7344_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_EE659B53_E75A_BF0E_41C1_A393D71C934F",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_EE659B53_E75A_BF0E_41C1_A393D71C934F_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 0)",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_EE65EE2A_E75A_B918_41B6_BE85642FAED1",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_EE65EE2A_E75A_B918_41B6_BE85642FAED1_camera"
   }
  ]
 },
 {
  "maximumZoomFactor": 1.2,
  "class": "Map",
  "overlays": [
   {
    "areas": [
     {
      "click": "this.mainPlayList.set('selectedIndex', 0)",
      "mapColor": "#FF0000",
      "class": "HotspotMapOverlayArea"
     }
    ],
    "id": "overlay_E81ADB75_E77A_FF0B_41D6_226E3D868BA1",
    "rollOverDisplay": false,
    "image": {
     "x": 345.45,
     "y": 326.86,
     "class": "HotspotMapOverlayImage",
     "width": 82.99,
     "height": 66.25,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 66,
        "width": 82,
        "url": "media/map_E8A691C6_E77B_6B09_41D9_E7BBDC2E5417_HS_0.png",
        "class": "ImageResourceLevel"
       }
      ]
     }
    },
    "class": "AreaHotspotMapOverlay",
    "map": {
     "offsetY": 0,
     "x": 345.45,
     "width": 82.99,
     "y": 326.86,
     "height": 66.25,
     "offsetX": 0,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 33,
        "width": 41,
        "url": "media/map_E8A691C6_E77B_6B09_41D9_E7BBDC2E5417_HS_0_map.gif",
        "class": "ImageResourceLevel"
       }
      ]
     },
     "class": "HotspotMapOverlayMap"
    },
    "useHandCursor": true
   },
   {
    "areas": [
     {
      "click": "this.mainPlayList.set('selectedIndex', 1)",
      "mapColor": "#FF0000",
      "class": "HotspotMapOverlayArea"
     }
    ],
    "id": "overlay_F7C12FD9_E779_B73B_41D1_111DCB4F252E",
    "rollOverDisplay": false,
    "image": {
     "x": 437.28,
     "y": 361.49,
     "class": "HotspotMapOverlayImage",
     "width": 72.63,
     "height": 68.58,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 68,
        "width": 72,
        "url": "media/map_E8A691C6_E77B_6B09_41D9_E7BBDC2E5417_HS_1.png",
        "class": "ImageResourceLevel"
       }
      ]
     }
    },
    "class": "AreaHotspotMapOverlay",
    "map": {
     "offsetY": 0,
     "x": 437.28,
     "width": 72.63,
     "y": 361.49,
     "height": 68.58,
     "offsetX": 0,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 34,
        "width": 36,
        "url": "media/map_E8A691C6_E77B_6B09_41D9_E7BBDC2E5417_HS_1_map.gif",
        "class": "ImageResourceLevel"
       }
      ]
     },
     "class": "HotspotMapOverlayMap"
    },
    "useHandCursor": true
   },
   {
    "areas": [
     {
      "click": "this.mainPlayList.set('selectedIndex', 2)",
      "mapColor": "#FF0000",
      "class": "HotspotMapOverlayArea"
     }
    ],
    "id": "overlay_F7DA80CE_E766_A919_41C2_01985F006347",
    "rollOverDisplay": false,
    "image": {
     "x": 519.81,
     "y": 401.25,
     "class": "HotspotMapOverlayImage",
     "width": 75.55,
     "height": 67.65,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 67,
        "width": 75,
        "url": "media/map_E8A691C6_E77B_6B09_41D9_E7BBDC2E5417_HS_2.png",
        "class": "ImageResourceLevel"
       }
      ]
     }
    },
    "class": "AreaHotspotMapOverlay",
    "map": {
     "offsetY": 0,
     "x": 519.81,
     "width": 75.55,
     "y": 401.25,
     "height": 67.65,
     "offsetX": 0,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 33,
        "width": 37,
        "url": "media/map_E8A691C6_E77B_6B09_41D9_E7BBDC2E5417_HS_2_map.gif",
        "class": "ImageResourceLevel"
       }
      ]
     },
     "class": "HotspotMapOverlayMap"
    },
    "useHandCursor": true
   },
   {
    "areas": [
     {
      "click": "this.mainPlayList.set('selectedIndex', 3)",
      "mapColor": "#FF0000",
      "class": "HotspotMapOverlayArea"
     }
    ],
    "id": "overlay_F7D9B07A_E767_69F9_41C8_4E4256E3FE17",
    "rollOverDisplay": false,
    "image": {
     "x": 607.22,
     "y": 460.76,
     "class": "HotspotMapOverlayImage",
     "width": 70.42,
     "height": 68.58,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 68,
        "width": 70,
        "url": "media/map_E8A691C6_E77B_6B09_41D9_E7BBDC2E5417_HS_3.png",
        "class": "ImageResourceLevel"
       }
      ]
     }
    },
    "class": "AreaHotspotMapOverlay",
    "map": {
     "offsetY": 0,
     "x": 607.22,
     "width": 70.42,
     "y": 460.76,
     "height": 68.58,
     "offsetX": 0,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 34,
        "width": 35,
        "url": "media/map_E8A691C6_E77B_6B09_41D9_E7BBDC2E5417_HS_3_map.gif",
        "class": "ImageResourceLevel"
       }
      ]
     },
     "class": "HotspotMapOverlayMap"
    },
    "useHandCursor": true
   },
   {
    "areas": [
     {
      "click": "this.mainPlayList.set('selectedIndex', 4)",
      "mapColor": "#FF0000",
      "class": "HotspotMapOverlayArea"
     }
    ],
    "id": "overlay_F7B258A6_E767_D909_41DE_97234891BC35",
    "rollOverDisplay": false,
    "image": {
     "x": 729.03,
     "y": 376.84,
     "class": "HotspotMapOverlayImage",
     "width": 73.7,
     "height": 67.21,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 67,
        "width": 73,
        "url": "media/map_E8A691C6_E77B_6B09_41D9_E7BBDC2E5417_HS_4.png",
        "class": "ImageResourceLevel"
       }
      ]
     }
    },
    "class": "AreaHotspotMapOverlay",
    "map": {
     "offsetY": 0,
     "x": 729.03,
     "width": 73.7,
     "y": 376.84,
     "height": 67.21,
     "offsetX": 0,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 33,
        "width": 36,
        "url": "media/map_E8A691C6_E77B_6B09_41D9_E7BBDC2E5417_HS_4_map.gif",
        "class": "ImageResourceLevel"
       }
      ]
     },
     "class": "HotspotMapOverlayMap"
    },
    "useHandCursor": true
   },
   {
    "areas": [
     {
      "click": "this.mainPlayList.set('selectedIndex', 5)",
      "mapColor": "#FF0000",
      "class": "HotspotMapOverlayArea"
     }
    ],
    "id": "overlay_F7E1A8AA_E766_D918_41E0_0EA600481723",
    "rollOverDisplay": false,
    "image": {
     "x": 709.5,
     "y": 467.5,
     "class": "HotspotMapOverlayImage",
     "width": 83,
     "height": 67.6,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 67,
        "width": 82,
        "url": "media/map_E8A691C6_E77B_6B09_41D9_E7BBDC2E5417_HS_5.png",
        "class": "ImageResourceLevel"
       }
      ]
     }
    },
    "class": "AreaHotspotMapOverlay",
    "map": {
     "offsetY": 0,
     "x": 709.5,
     "width": 83,
     "y": 467.5,
     "height": 67.6,
     "offsetX": 0,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 33,
        "width": 41,
        "url": "media/map_E8A691C6_E77B_6B09_41D9_E7BBDC2E5417_HS_5_map.gif",
        "class": "ImageResourceLevel"
       }
      ]
     },
     "class": "HotspotMapOverlayMap"
    },
    "useHandCursor": true
   },
   {
    "areas": [
     {
      "click": "this.mainPlayList.set('selectedIndex', 6)",
      "mapColor": "#FF0000",
      "class": "HotspotMapOverlayArea"
     }
    ],
    "id": "overlay_F7BB8C5F_E769_D938_41E9_CF0083687785",
    "rollOverDisplay": false,
    "image": {
     "x": 845.73,
     "y": 474.71,
     "class": "HotspotMapOverlayImage",
     "width": 68.12,
     "height": 68.46,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 68,
        "width": 68,
        "url": "media/map_E8A691C6_E77B_6B09_41D9_E7BBDC2E5417_HS_6.png",
        "class": "ImageResourceLevel"
       }
      ]
     }
    },
    "class": "AreaHotspotMapOverlay",
    "map": {
     "offsetY": 0,
     "x": 845.73,
     "width": 68.12,
     "y": 474.71,
     "height": 68.46,
     "offsetX": 0,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 34,
        "width": 34,
        "url": "media/map_E8A691C6_E77B_6B09_41D9_E7BBDC2E5417_HS_6_map.gif",
        "class": "ImageResourceLevel"
       }
      ]
     },
     "class": "HotspotMapOverlayMap"
    },
    "useHandCursor": true
   },
   {
    "areas": [
     {
      "click": "this.mainPlayList.set('selectedIndex', 7)",
      "mapColor": "#FF0000",
      "class": "HotspotMapOverlayArea"
     }
    ],
    "id": "overlay_F704296C_E76A_BB19_41EC_DCACCCE4F17D",
    "rollOverDisplay": false,
    "image": {
     "x": 979.17,
     "y": 481.68,
     "class": "HotspotMapOverlayImage",
     "width": 59.75,
     "height": 66.69,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 66,
        "width": 59,
        "url": "media/map_E8A691C6_E77B_6B09_41D9_E7BBDC2E5417_HS_7.png",
        "class": "ImageResourceLevel"
       }
      ]
     }
    },
    "class": "AreaHotspotMapOverlay",
    "map": {
     "offsetY": 0,
     "x": 979.17,
     "width": 59.75,
     "y": 481.68,
     "height": 66.69,
     "offsetX": 0,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 33,
        "width": 29,
        "url": "media/map_E8A691C6_E77B_6B09_41D9_E7BBDC2E5417_HS_7_map.gif",
        "class": "ImageResourceLevel"
       }
      ]
     },
     "class": "HotspotMapOverlayMap"
    },
    "useHandCursor": true
   }
  ],
  "width": 1144,
  "id": "map_E8A691C6_E77B_6B09_41D9_E7BBDC2E5417",
  "fieldOfViewOverlayInsideColor": "#FFFFFF",
  "height": 1124,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "height": 1124,
     "width": 1144,
     "url": "media/map_E8A691C6_E77B_6B09_41D9_E7BBDC2E5417.png",
     "class": "ImageResourceLevel"
    },
    {
     "height": 562,
     "width": 572,
     "url": "media/map_E8A691C6_E77B_6B09_41D9_E7BBDC2E5417_lq.png",
     "class": "ImageResourceLevel",
     "grayscale": true
    }
   ]
  },
  "minimumZoomFactor": 0.5,
  "fieldOfViewOverlayInsideOpacity": 0.4,
  "fieldOfViewOverlayRadiusScale": 0.3,
  "thumbnailUrl": "media/map_E8A691C6_E77B_6B09_41D9_E7BBDC2E5417_t.png",
  "label": "FloorPlan",
  "scaleMode": "fit_inside",
  "fieldOfViewOverlayOutsideColor": "#000000",
  "initialZoomFactor": 1,
  "fieldOfViewOverlayOutsideOpacity": 0
 },
 {
  "viewerArea": "this.MapViewer",
  "id": "MapViewerMapPlayer",
  "class": "MapPlayer",
  "movementMode": "constrained"
 },
 {
  "id": "playList_EA4D4B23_E789_8D86_41BE_367022BA8DF8",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
    "player": "this.MapViewerMapPlayer",
    "class": "MapPlayListItem",
    "media": "this.map_E8A691C6_E77B_6B09_41D9_E7BBDC2E5417"
   }
  ]
 },
 "this.Menu_EA420B2C_E789_8D82_41DA_AA7EFCA7D157",
 {
  "automaticZoomSpeed": 10,
  "id": "camera_EA672B44_E789_8D82_41B5_A6307D2FB8CD",
  "initialPosition": {
   "yaw": -144.3,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_EA7BEB4E_E789_8D9E_41B7_13B7B17D1680",
  "initialPosition": {
   "yaw": 3.83,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_E98DFB57_E789_8D8E_41C4_9A7909509F88",
  "initialPosition": {
   "yaw": -72.98,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_E99F2B60_E789_8D82_41E9_88CBE7079074",
  "initialPosition": {
   "yaw": 178.67,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_E993DB6A_E789_8D86_41D1_1020CA2A0B8D",
  "initialPosition": {
   "yaw": 0.24,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_E9A50B73_E789_8D86_41E1_C6FEF8BFD645",
  "initialPosition": {
   "yaw": 179.41,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_E9B7BB83_E789_8C86_41D3_56683F511002",
  "initialPosition": {
   "yaw": -161.62,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_E9C93B97_E789_8C8E_41DE_BC659262C658",
  "initialPosition": {
   "yaw": 97.84,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_E9DD6BAA_E789_8C86_41E8_A50DE8E43FB2",
  "initialPosition": {
   "yaw": 179.93,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_E9D0CBBE_E789_8CFE_41E7_8506730B3C26",
  "initialPosition": {
   "yaw": 3.38,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_E9E2ABD1_E789_8C82_41EC_8450BD416922",
  "initialPosition": {
   "yaw": -178.23,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_E9F52BE5_E789_8C82_41E5_CA931C3EBCDE",
  "initialPosition": {
   "yaw": 3.11,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_E907FBF3_E789_8C86_41E7_83026FD94941",
  "initialPosition": {
   "yaw": 53.2,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_E91B9BFC_E789_8C82_41EA_EAD1CA4B0389",
  "initialPosition": {
   "yaw": -112.84,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_E92D9C08_E789_8B82_41CE_C0586CCD1042",
  "initialPosition": {
   "yaw": 1.35,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_E93F9C11_E789_8B82_41E5_22D61245B629",
  "initialPosition": {
   "yaw": -175.86,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 }
], "children": [
 {
  "toolTipPaddingTop": 4,
  "toolTipFontStyle": "normal",
  "paddingLeft": 0,
  "paddingRight": 0,
  "toolTipShadowOpacity": 1,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarHeight": 10,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeadWidth": 6,
  "playbackBarProgressBorderSize": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "progressBorderRadius": 0,
  "playbackBarHeadShadow": true,
  "playbackBarBorderColor": "#FFFFFF",
  "playbackBarOpacity": 1,
  "playbackBarRight": 0,
  "progressBarBorderRadius": 0,
  "toolTipShadowVerticalLength": 0,
  "toolTipPaddingBottom": 4,
  "progressBarBorderSize": 0,
  "playbackBarProgressBorderRadius": 0,
  "transitionMode": "blending",
  "paddingBottom": 0,
  "minHeight": 50,
  "toolTipShadowColor": "#333333",
  "toolTipShadowSpread": 0,
  "toolTipTextShadowOpacity": 0,
  "toolTipFontWeight": "normal",
  "toolTipFontSize": 12,
  "paddingTop": 0,
  "toolTipFontColor": "#606060",
  "playbackBarBorderRadius": 0,
  "toolTipShadowBlurRadius": 3,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarProgressBorderColor": "#000000",
  "toolTipPaddingRight": 6,
  "progressBarOpacity": 1,
  "minWidth": 100,
  "progressBottom": 0,
  "class": "ViewerArea",
  "toolTipBorderRadius": 3,
  "playbackBarHeadBorderRadius": 0,
  "borderSize": 0,
  "progressHeight": 10,
  "progressBackgroundColorRatios": [
   0
  ],
  "progressLeft": 0,
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarProgressOpacity": 1,
  "toolTipPaddingLeft": 6,
  "toolTipBorderColor": "#767676",
  "width": "100%",
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipBorderSize": 1,
  "playbackBarBorderSize": 0,
  "playbackBarLeft": 0,
  "playbackBarHeadHeight": 15,
  "playbackBarBackgroundOpacity": 1,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadShadowHorizontalLength": 0,
  "height": "100%",
  "toolTipOpacity": 1,
  "borderRadius": 0,
  "toolTipTextShadowBlurRadius": 3,
  "toolTipTextShadowColor": "#000000",
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarHeadShadowColor": "#000000",
  "progressRight": 0,
  "playbackBarHeadBorderSize": 0,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "toolTipBackgroundColor": "#F6F6F6",
  "progressBarBorderColor": "#000000",
  "playbackBarHeadOpacity": 1,
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "progressBackgroundColorDirection": "vertical",
  "id": "MainViewer",
  "progressOpacity": 1,
  "toolTipShadowHorizontalLength": 0,
  "progressBackgroundOpacity": 1,
  "progressBorderColor": "#000000",
  "toolTipFontFamily": "Arial",
  "playbackBarBottom": 5,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "progressBorderSize": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "shadow": false,
  "progressBackgroundColor": [
   "#FFFFFF"
  ]
 },
 {
  "toolTipPaddingTop": 4,
  "toolTipFontStyle": "normal",
  "paddingLeft": 0,
  "paddingRight": 0,
  "toolTipShadowOpacity": 1,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarHeight": 10,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeadWidth": 6,
  "playbackBarProgressBorderSize": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "progressBorderRadius": 0,
  "playbackBarHeadShadow": true,
  "playbackBarBorderColor": "#FFFFFF",
  "playbackBarOpacity": 1,
  "playbackBarRight": 0,
  "progressBarBorderRadius": 0,
  "toolTipShadowVerticalLength": 0,
  "toolTipPaddingBottom": 4,
  "progressBarBorderSize": 0,
  "paddingBottom": 0,
  "minHeight": 1,
  "toolTipShadowSpread": 0,
  "playbackBarProgressBorderRadius": 0,
  "toolTipShadowColor": "#333333",
  "transitionMode": "blending",
  "toolTipTextShadowOpacity": 0,
  "toolTipFontWeight": "normal",
  "toolTipFontSize": 12,
  "paddingTop": 0,
  "toolTipFontColor": "#606060",
  "toolTipShadowBlurRadius": 3,
  "playbackBarBorderRadius": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarProgressBorderColor": "#000000",
  "toolTipPaddingRight": 6,
  "progressBarOpacity": 1,
  "minWidth": 1,
  "progressBottom": 2,
  "class": "ViewerArea",
  "toolTipBorderRadius": 3,
  "playbackBarHeadBorderRadius": 0,
  "borderSize": 0,
  "progressHeight": 10,
  "progressBackgroundColorRatios": [
   0
  ],
  "progressLeft": 0,
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarProgressOpacity": 1,
  "toolTipPaddingLeft": 6,
  "toolTipBorderColor": "#767676",
  "width": "29.608%",
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipBorderSize": 1,
  "playbackBarBorderSize": 0,
  "playbackBarLeft": 0,
  "playbackBarHeadHeight": 15,
  "playbackBarBackgroundOpacity": 1,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadShadowHorizontalLength": 0,
  "height": "40.827%",
  "toolTipOpacity": 1,
  "borderRadius": 0,
  "toolTipTextShadowBlurRadius": 3,
  "toolTipTextShadowColor": "#000000",
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarHeadShadowColor": "#000000",
  "top": "0%",
  "playbackBarHeadBorderSize": 0,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "progressBarBorderColor": "#000000",
  "progressRight": 0,
  "playbackBarHeadOpacity": 1,
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "toolTipBackgroundColor": "#F6F6F6",
  "progressBackgroundColorDirection": "vertical",
  "id": "MapViewer",
  "progressOpacity": 1,
  "toolTipShadowHorizontalLength": 0,
  "progressBackgroundOpacity": 1,
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
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "shadow": false,
  "progressBorderSize": 0
 },
 {
  "verticalAlign": "middle",
  "shadow": false,
  "paddingLeft": 0,
  "class": "IconButton",
  "paddingRight": 0,
  "borderSize": 0,
  "width": 35,
  "height": 23,
  "maxWidth": 35,
  "transparencyActive": false,
  "iconURL": "skin/IconButton_F6F606BB_E76B_A978_41E5_5914D63FC0B8.png",
  "mode": "push",
  "horizontalAlign": "center",
  "borderRadius": 0,
  "cursor": "hand",
  "paddingBottom": 0,
  "minHeight": 1,
  "id": "IconButton_F6F606BB_E76B_A978_41E5_5914D63FC0B8",
  "bottom": "5.3%",
  "backgroundOpacity": 0,
  "maxHeight": 23,
  "paddingTop": 0,
  "right": "3.24%",
  "minWidth": 1
 },
 {
  "verticalAlign": "middle",
  "paddingLeft": 0,
  "class": "IconButton",
  "paddingRight": 0,
  "borderSize": 0,
  "width": 40,
  "shadow": false,
  "height": 40,
  "rollOverIconURL": "skin/IconButton_F6D757C4_E769_770A_41E3_2C2F0BDCB6DC_rollover.png",
  "transparencyActive": false,
  "iconURL": "skin/IconButton_F6D757C4_E769_770A_41E3_2C2F0BDCB6DC.png",
  "mode": "push",
  "horizontalAlign": "center",
  "borderRadius": 0,
  "click": "eval('var frame =+ location.search.replace(\"?\",\"\");if(!frame){frame = 0;}alert(\"Frame: \" + frame);if(typeof setMediaByIndex === \"function\"){setMediaByIndex(frame);}');",
  "top": "4.6%",
  "cursor": "hand",
  "paddingBottom": 0,
  "minHeight": 0,
  "id": "IconButton_F6D757C4_E769_770A_41E3_2C2F0BDCB6DC",
  "backgroundOpacity": 0,
  "paddingTop": 0,
  "pressedIconURL": "skin/IconButton_F6D757C4_E769_770A_41E3_2C2F0BDCB6DC_pressed.png",
  "right": "47.14%",
  "minWidth": 0
 }
], 
 "verticalAlign": "top",
 "shadow": false,
 "paddingLeft": 0,
 "class": "Player",
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "borderSize": 0,
 "width": "100%",
 "mouseWheelEnabled": true,
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "horizontalAlign": "left",
 "contentOpaque": false,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "overflow": "visible",
 "borderRadius": 0,
 "height": "100%",
 "vrPolyfillScale": 1,
 "scripts": {
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "registerKey": function(key, value){  window[key] = value; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio) delete audios[audio.get('id')]; } if(audio) audio.stop(); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "existsKey": function(key){  return key in window; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "unregisterKey": function(key){  delete window[key]; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getKey": function(key){  return window[key]; },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); }
 },
 "layout": "absolute",
 "minHeight": 20,
 "paddingBottom": 0,
 "backgroundPreloadEnabled": true,
 "id": "rootPlayer",
 "paddingTop": 0,
 "start": "this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_F6F606BB_E76B_A978_41E5_5914D63FC0B8], 'cardboardAvailable'); this.mainPlayList.set('selectedIndex', 0); this.playList_EA4D4B23_E789_8D86_41BE_367022BA8DF8.set('selectedIndex', 0)",
 "scrollBarColor": "#000000",
 "minWidth": 20
})