TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "frames": [
   {
    "thumbnailUrl": "media/panorama_0C5F0BFE_0673_59B7_4157_C15F289CED2D_t.jpg",
    "overlays": [
     {
      "useHandCursor": true,
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 21,
           "url": "media/panorama_0C5F0BFE_0673_59B7_4157_C15F289CED2D_0_HS_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 10.99,
        "yaw": 1.51,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -13.63
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "rollOverDisplay": false,
      "id": "overlay_1723D9CD_06F1_2FEE_4195_F17AB1536320",
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "yaw": 1.51,
        "hfov": 10.99,
        "image": {
         "levels": [
          {
           "height": 115,
           "width": 157,
           "url": "media/panorama_0C5F0BFE_0673_59B7_4157_C15F289CED2D_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -13.63
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
           "height": 100,
           "width": 81,
           "url": "media/panorama_0C5F0BFE_0673_59B7_4157_C15F289CED2D_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 11.67,
        "yaw": 1.46,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -4.9
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_0FD85D6E_0673_DED7_40FD_D23817113C40, this.camera_4AA56755_449C_2767_41B1_467EE6C780FD); this.mainPlayList.set('selectedIndex', 1); eval('localStorage.setItem(\"displayIndex\", 1);');"
       }
      ],
      "rollOverDisplay": false,
      "id": "overlay_305D80C4_3C32_C9AD_41CD_C92E2612E11E",
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "yaw": 1.46,
        "hfov": 11.67,
        "image": {
         "levels": [
          {
           "height": 200,
           "width": 162,
           "url": "media/panorama_0C5F0BFE_0673_59B7_4157_C15F289CED2D_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -4.9
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
       "url": "media/panorama_0C5F0BFE_0673_59B7_4157_C15F289CED2D_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_0C5F0BFE_0673_59B7_4157_C15F289CED2D.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "adjacentPanoramas": [
   {
    "panorama": {
     "frames": [
      {
       "thumbnailUrl": "media/panorama_0FD85D6E_0673_DED7_40FD_D23817113C40_t.jpg",
       "overlays": [
        {
         "useHandCursor": true,
         "maps": [
          {
           "image": {
            "levels": [
             {
              "height": 16,
              "width": 24,
              "url": "media/panorama_0FD85D6E_0673_DED7_40FD_D23817113C40_0_HS_1_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 10.94,
           "yaw": 1,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -14.51
          }
         ],
         "enabledInCardboard": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "rollOverDisplay": false,
         "id": "overlay_12BCBCD9_06FF_E5F6_4132_6BD2D8AC4E5A",
         "class": "HotspotPanoramaOverlay",
         "items": [
          {
           "yaw": 1,
           "hfov": 10.94,
           "image": {
            "levels": [
             {
              "height": 104,
              "width": 157,
              "url": "media/panorama_0FD85D6E_0673_DED7_40FD_D23817113C40_0_HS_1_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -14.51
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
              "height": 16,
              "width": 26,
              "url": "media/panorama_0FD85D6E_0673_DED7_40FD_D23817113C40_0_HS_3_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 11.44,
           "yaw": -177.99,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -7.98
          }
         ],
         "enabledInCardboard": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "rollOverDisplay": false,
         "id": "overlay_1690DD0C_06F1_246E_4197_6AD3CD66470D",
         "class": "HotspotPanoramaOverlay",
         "items": [
          {
           "yaw": -177.99,
           "hfov": 11.44,
           "image": {
            "levels": [
             {
              "height": 97,
              "width": 160,
              "url": "media/panorama_0FD85D6E_0673_DED7_40FD_D23817113C40_0_HS_3_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -7.98
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
              "height": 107,
              "width": 160,
              "url": "media/panorama_0FD85D6E_0673_DED7_40FD_D23817113C40_0_HS_4_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 23.04,
           "yaw": 0.64,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -5.15
          }
         ],
         "enabledInCardboard": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544, this.camera_4A06E7E5_449C_2727_4188_4B74D7EB2777); this.mainPlayList.set('selectedIndex', 2); eval('localStorage.setItem(\"displayIndex\", 2);');"
          }
         ],
         "rollOverDisplay": false,
         "id": "overlay_311D0F38_3C32_38E6_41B9_16CD7FB2884F",
         "class": "HotspotPanoramaOverlay",
         "items": [
          {
           "yaw": 0.64,
           "hfov": 23.04,
           "image": {
            "levels": [
             {
              "height": 214,
              "width": 321,
              "url": "media/panorama_0FD85D6E_0673_DED7_40FD_D23817113C40_0_HS_4_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -5.15
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
              "height": 82,
              "width": 109,
              "url": "media/panorama_0FD85D6E_0673_DED7_40FD_D23817113C40_0_HS_5_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 15.74,
           "yaw": -179.67,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -0.88
          }
         ],
         "enabledInCardboard": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_0C5F0BFE_0673_59B7_4157_C15F289CED2D, this.camera_4A1D97F4_449C_2725_41A2_345C906B89E8); this.mainPlayList.set('selectedIndex', 0); eval('localStorage.setItem(\"displayIndex\", 0);');"
          }
         ],
         "rollOverDisplay": false,
         "id": "overlay_3114B52C_3C32_48FE_41B5_406CC4DEDCA5",
         "class": "HotspotPanoramaOverlay",
         "items": [
          {
           "yaw": -179.67,
           "hfov": 15.74,
           "image": {
            "levels": [
             {
              "height": 165,
              "width": 218,
              "url": "media/panorama_0FD85D6E_0673_DED7_40FD_D23817113C40_0_HS_5_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -0.88
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
          "url": "media/panorama_0FD85D6E_0673_DED7_40FD_D23817113C40_hq.jpeg",
          "class": "ImageResourceLevel"
         },
         {
          "height": 1608,
          "width": 3217,
          "url": "media/panorama_0FD85D6E_0673_DED7_40FD_D23817113C40.jpeg",
          "class": "ImageResourceLevel"
         }
        ],
        "class": "ImageResource"
       }
      }
     ],
     "adjacentPanoramas": [
      {
       "panorama": {
        "frames": [
         {
          "thumbnailUrl": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_t.jpg",
          "overlays": [
           {
            "useHandCursor": true,
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "height": 16,
                 "width": 20,
                 "url": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_0_HS_1_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "hfov": 11.17,
              "yaw": 0.38,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -14.88
             }
            ],
            "enabledInCardboard": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "rollOverDisplay": false,
            "id": "overlay_15ADB079_06F3_1CB6_418B_9B6CDA887ED8",
            "class": "HotspotPanoramaOverlay",
            "items": [
             {
              "yaw": 0.38,
              "hfov": 11.17,
              "image": {
               "levels": [
                {
                 "height": 122,
                 "width": 160,
                 "url": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_0_HS_1_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -14.88
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
                 "height": 16,
                 "width": 19,
                 "url": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_0_HS_3_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "hfov": 10.19,
              "yaw": -177.74,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -15.01
             }
            ],
            "enabledInCardboard": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "rollOverDisplay": false,
            "id": "overlay_157DAC36_06F1_24BA_4180_B0CB15CF6B9B",
            "class": "HotspotPanoramaOverlay",
            "items": [
             {
              "yaw": -177.74,
              "hfov": 10.19,
              "image": {
               "levels": [
                {
                 "height": 118,
                 "width": 146,
                 "url": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_0_HS_3_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -15.01
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
                 "height": 93,
                 "width": 76,
                 "url": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_0_HS_4_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "hfov": 10.99,
              "yaw": -177.99,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -5.9
             }
            ],
            "enabledInCardboard": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24, this.camera_4A36E841_449C_295F_41C6_E5F4B507E139); this.mainPlayList.set('selectedIndex', 3)"
             }
            ],
            "rollOverDisplay": false,
            "id": "overlay_31745591_3C35_CBA6_41C4_8DB2A929AC58",
            "class": "HotspotPanoramaOverlay",
            "items": [
             {
              "yaw": -177.99,
              "hfov": 10.99,
              "image": {
               "levels": [
                {
                 "height": 186,
                 "width": 153,
                 "url": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_0_HS_4_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -5.9
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
                 "height": 100,
                 "width": 97,
                 "url": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_0_HS_5_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "hfov": 13.93,
              "yaw": 0.35,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -6.41
             }
            ],
            "enabledInCardboard": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_0FD85D6E_0673_DED7_40FD_D23817113C40, this.camera_4A4B2856_449C_2965_41C8_2118A8370481); this.mainPlayList.set('selectedIndex', 1)"
             }
            ],
            "rollOverDisplay": false,
            "id": "overlay_311F0A3C_3C35_F8DE_41B4_7AAC3D3CC66B",
            "class": "HotspotPanoramaOverlay",
            "items": [
             {
              "yaw": 0.35,
              "hfov": 13.93,
              "image": {
               "levels": [
                {
                 "height": 200,
                 "width": 194,
                 "url": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_0_HS_5_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -6.41
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
             "url": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_hq.jpeg",
             "class": "ImageResourceLevel"
            },
            {
             "height": 1608,
             "width": 3217,
             "url": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544.jpeg",
             "class": "ImageResourceLevel"
            }
           ],
           "class": "ImageResource"
          }
         }
        ],
        "adjacentPanoramas": [
         {
          "panorama": {
           "frames": [
            {
             "thumbnailUrl": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_t.jpg",
             "overlays": [
              {
               "useHandCursor": true,
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "height": 16,
                    "width": 21,
                    "url": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_0_HS_1_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "hfov": 10.72,
                 "yaw": -2.39,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -14.13
                }
               ],
               "enabledInCardboard": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000"
                }
               ],
               "rollOverDisplay": false,
               "id": "overlay_15F363E3_06F7_E3DA_4166_E1ADD25A8F16",
               "class": "HotspotPanoramaOverlay",
               "items": [
                {
                 "yaw": -2.39,
                 "hfov": 10.72,
                 "image": {
                  "levels": [
                   {
                    "height": 115,
                    "width": 153,
                    "url": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_0_HS_1_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -14.13
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
                    "height": 16,
                    "width": 23,
                    "url": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_0_HS_3_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "hfov": 10.42,
                 "yaw": -179.62,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -15.39
                }
               ],
               "enabledInCardboard": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000"
                }
               ],
               "rollOverDisplay": false,
               "id": "overlay_122DE14B_06F1_1CEA_4197_5318700943E8",
               "class": "HotspotPanoramaOverlay",
               "items": [
                {
                 "yaw": -179.62,
                 "hfov": 10.42,
                 "image": {
                  "levels": [
                   {
                    "height": 101,
                    "width": 150,
                    "url": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_0_HS_3_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -15.39
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
                    "height": 86,
                    "width": 58,
                    "url": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_0_HS_4_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "hfov": 8.42,
                 "yaw": -179.28,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -6.91
                }
               ],
               "enabledInCardboard": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544, this.camera_493B2665_449C_3924_41A9_9BF70CF49FF3); this.mainPlayList.set('selectedIndex', 2)"
                }
               ],
               "rollOverDisplay": false,
               "id": "overlay_31032CAC_3C36_39FD_41C9_8B987E7CD4B2",
               "class": "HotspotPanoramaOverlay",
               "items": [
                {
                 "yaw": -179.28,
                 "hfov": 8.42,
                 "image": {
                  "levels": [
                   {
                    "height": 172,
                    "width": 117,
                    "url": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_0_HS_4_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -6.91
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
                    "height": 79,
                    "width": 79,
                    "url": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_0_HS_5_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "hfov": 11.33,
                 "yaw": -2.21,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -6.66
                }
               ],
               "enabledInCardboard": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA, this.camera_49218655_449C_3964_41CF_B6463E0ECC06); this.mainPlayList.set('selectedIndex', 4)"
                }
               ],
               "rollOverDisplay": false,
               "id": "overlay_31610C45_3C36_78AF_41B2_40154727DEF2",
               "class": "HotspotPanoramaOverlay",
               "items": [
                {
                 "yaw": -2.21,
                 "hfov": 11.33,
                 "image": {
                  "levels": [
                   {
                    "height": 158,
                    "width": 158,
                    "url": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_0_HS_5_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -6.66
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
                "url": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_hq.jpeg",
                "class": "ImageResourceLevel"
               },
               {
                "height": 1608,
                "width": 3217,
                "url": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24.jpeg",
                "class": "ImageResourceLevel"
               }
              ],
              "class": "ImageResource"
             }
            }
           ],
           "adjacentPanoramas": [
            {
             "panorama": {
              "frames": [
               {
                "thumbnailUrl": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_t.jpg",
                "overlays": [
                 {
                  "useHandCursor": true,
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "height": 16,
                       "width": 23,
                       "url": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_0_HS_1_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "hfov": 11.08,
                    "yaw": -3.01,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -11.37
                   }
                  ],
                  "enabledInCardboard": true,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "rollOverDisplay": false,
                  "id": "overlay_1382DAC3_06F3_EDDA_4199_4640AB09737B",
                  "class": "HotspotPanoramaOverlay",
                  "items": [
                   {
                    "yaw": -3.01,
                    "hfov": 11.08,
                    "image": {
                     "levels": [
                      {
                       "height": 108,
                       "width": 156,
                       "url": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_0_HS_1_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -11.37
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
                       "height": 16,
                       "width": 24,
                       "url": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_0_HS_3_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "hfov": 10.89,
                    "yaw": -179.37,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -15.51
                   }
                  ],
                  "enabledInCardboard": true,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "rollOverDisplay": false,
                  "id": "overlay_121F44F8_06F1_25B6_416C_4F213A9D0F56",
                  "class": "HotspotPanoramaOverlay",
                  "items": [
                   {
                    "yaw": -179.37,
                    "hfov": 10.89,
                    "image": {
                     "levels": [
                      {
                       "height": 104,
                       "width": 157,
                       "url": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_0_HS_3_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -15.51
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
                       "height": 81,
                       "width": 82,
                       "url": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_0_HS_4_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "hfov": 11.73,
                    "yaw": -179.87,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -7.29
                   }
                  ],
                  "enabledInCardboard": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4, this.camera_4AD77791_449C_27FF_4175_FAF8F5CF79A0); this.mainPlayList.set('selectedIndex', 5)"
                   }
                  ],
                  "rollOverDisplay": false,
                  "id": "overlay_31600C5C_3C36_D95D_41BC_E9F7D4587C95",
                  "class": "HotspotPanoramaOverlay",
                  "items": [
                   {
                    "yaw": -179.87,
                    "hfov": 11.73,
                    "image": {
                     "levels": [
                      {
                       "height": 162,
                       "width": 164,
                       "url": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_0_HS_4_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -7.29
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
                       "height": 84,
                       "width": 69,
                       "url": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_0_HS_5_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "hfov": 9.92,
                    "yaw": -2.69,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -4.02
                   }
                  ],
                  "enabledInCardboard": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24, this.camera_4AEB67A0_449C_27DD_41D0_77A982BCE53B); this.mainPlayList.set('selectedIndex', 3)"
                   }
                  ],
                  "rollOverDisplay": false,
                  "id": "overlay_3177AF77_3C36_D76A_41B0_BA478D445CA5",
                  "class": "HotspotPanoramaOverlay",
                  "items": [
                   {
                    "yaw": -2.69,
                    "hfov": 9.92,
                    "image": {
                     "levels": [
                      {
                       "height": 169,
                       "width": 138,
                       "url": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_0_HS_5_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -4.02
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
                   "url": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_hq.jpeg",
                   "class": "ImageResourceLevel"
                  },
                  {
                   "height": 1608,
                   "width": 3217,
                   "url": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA.jpeg",
                   "class": "ImageResourceLevel"
                  }
                 ],
                 "class": "ImageResource"
                }
               }
              ],
              "adjacentPanoramas": [
               {
                "panorama": {
                 "frames": [
                  {
                   "thumbnailUrl": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_t.jpg",
                   "overlays": [
                    {
                     "useHandCursor": true,
                     "maps": [
                      {
                       "image": {
                        "levels": [
                         {
                          "height": 16,
                          "width": 22,
                          "url": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_0_HS_1_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "hfov": 10.12,
                       "yaw": 7.54,
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -10.87
                      }
                     ],
                     "enabledInCardboard": true,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "rollOverDisplay": false,
                     "id": "overlay_15D28AE0_068F_2DD6_4190_19CBC3F443F6",
                     "class": "HotspotPanoramaOverlay",
                     "items": [
                      {
                       "yaw": 7.54,
                       "hfov": 10.12,
                       "image": {
                        "levels": [
                         {
                          "height": 101,
                          "width": 143,
                          "url": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_0_HS_1_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": -10.87
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
                          "height": 16,
                          "width": 19,
                          "url": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_0_HS_3_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "hfov": 10.54,
                       "yaw": -178.74,
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -17.52
                      }
                     ],
                     "enabledInCardboard": true,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "rollOverDisplay": false,
                     "id": "overlay_1302EAF9_0691_2DB6_4188_E41C59F609C1",
                     "class": "HotspotPanoramaOverlay",
                     "items": [
                      {
                       "yaw": -178.74,
                       "hfov": 10.54,
                       "image": {
                        "levels": [
                         {
                          "height": 125,
                          "width": 153,
                          "url": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_0_HS_3_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": -17.52
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
                          "height": 98,
                          "width": 86,
                          "url": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_0_HS_4_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "hfov": 12.32,
                       "yaw": -178.55,
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -8.04
                      }
                     ],
                     "enabledInCardboard": true,
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA, this.camera_4A2E280F_449C_28E3_41C7_3715BB295899); this.mainPlayList.set('selectedIndex', 4)"
                      }
                     ],
                     "rollOverDisplay": false,
                     "id": "overlay_310FDBE1_3C36_5F66_41BB_BDA464171CC9",
                     "class": "HotspotPanoramaOverlay",
                     "items": [
                      {
                       "yaw": -178.55,
                       "hfov": 12.32,
                       "image": {
                        "levels": [
                         {
                          "height": 197,
                          "width": 172,
                          "url": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_0_HS_4_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": -8.04
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
                          "height": 89,
                          "width": 73,
                          "url": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_0_HS_5_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "hfov": 10.58,
                       "yaw": 7.93,
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -2.89
                      }
                     ],
                     "enabledInCardboard": true,
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA, this.camera_4A25C828_449C_292D_41B1_9408A3AC3D94); this.mainPlayList.set('selectedIndex', 6)"
                      }
                     ],
                     "rollOverDisplay": false,
                     "id": "overlay_310CF005_3C36_48AF_41C4_A7D692E40CF8",
                     "class": "HotspotPanoramaOverlay",
                     "items": [
                      {
                       "yaw": 7.93,
                       "hfov": 10.58,
                       "image": {
                        "levels": [
                         {
                          "height": 179,
                          "width": 147,
                          "url": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_0_HS_5_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": -2.89
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
                      "url": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_hq.jpeg",
                      "class": "ImageResourceLevel"
                     },
                     {
                      "height": 1608,
                      "width": 3217,
                      "url": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4.jpeg",
                      "class": "ImageResourceLevel"
                     }
                    ],
                    "class": "ImageResource"
                   }
                  }
                 ],
                 "adjacentPanoramas": [
                  {
                   "panorama": "this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA",
                   "yaw": -178.55,
                   "class": "AdjacentPanorama",
                   "distance": 1,
                   "backwardYaw": -179.87
                  },
                  {
                   "panorama": {
                    "frames": [
                     {
                      "thumbnailUrl": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_t.jpg",
                      "overlays": [
                       {
                        "useHandCursor": true,
                        "maps": [
                         {
                          "image": {
                           "levels": [
                            {
                             "height": 16,
                             "width": 25,
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_1_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "hfov": 6.67,
                          "yaw": 4.7,
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": -8.76
                         }
                        ],
                        "enabledInCardboard": true,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "rollOverDisplay": false,
                        "id": "overlay_1092C51A_0697_246A_4172_39E7152EFDF5",
                        "class": "HotspotPanoramaOverlay",
                        "items": [
                         {
                          "yaw": 4.7,
                          "hfov": 6.67,
                          "image": {
                           "levels": [
                            {
                             "height": 59,
                             "width": 93,
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_1_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "class": "HotspotPanoramaOverlayImage",
                          "pitch": -8.76
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
                             "height": 16,
                             "width": 26,
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_11_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "hfov": 7,
                          "yaw": 157.26,
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": -5.87
                         }
                        ],
                        "enabledInCardboard": true,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "rollOverDisplay": false,
                        "id": "overlay_11D3D443_0693_24DA_4192_5962A59207B3",
                        "class": "HotspotPanoramaOverlay",
                        "items": [
                         {
                          "yaw": 157.26,
                          "hfov": 7,
                          "image": {
                           "levels": [
                            {
                             "height": 59,
                             "width": 97,
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_11_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "class": "HotspotPanoramaOverlayImage",
                          "pitch": -5.87
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
                             "height": 16,
                             "width": 22,
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_17_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "hfov": 11.05,
                          "yaw": -96.47,
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": -12.25
                         }
                        ],
                        "enabledInCardboard": true,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "rollOverDisplay": false,
                        "id": "overlay_1CA3866A_06B3_24AA_418F_9F19B27231FA",
                        "class": "HotspotPanoramaOverlay",
                        "items": [
                         {
                          "yaw": -96.47,
                          "hfov": 11.05,
                          "image": {
                           "levels": [
                            {
                             "height": 111,
                             "width": 157,
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_17_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "class": "HotspotPanoramaOverlayImage",
                          "pitch": -12.25
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
                             "height": 98,
                             "width": 130,
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_18_0_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "hfov": 18.69,
                          "yaw": -96.27,
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": -4.02
                         }
                        ],
                        "enabledInCardboard": true,
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4, this.camera_495BC6B8_449C_392D_41CD_1B417E1802E3); this.mainPlayList.set('selectedIndex', 5)"
                         }
                        ],
                        "rollOverDisplay": false,
                        "id": "overlay_31577B6A_3C37_DF7A_41CA_69C6508E3410",
                        "class": "HotspotPanoramaOverlay",
                        "items": [
                         {
                          "yaw": -96.27,
                          "hfov": 18.69,
                          "image": {
                           "levels": [
                            {
                             "height": 197,
                             "width": 260,
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_18_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "class": "HotspotPanoramaOverlayImage",
                          "pitch": -4.02
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
                             "height": 73,
                             "width": 53,
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_19_0_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "hfov": 7.66,
                          "yaw": 4.74,
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": -2.68
                         }
                        ],
                        "enabledInCardboard": true,
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F, this.camera_494586A8_449C_392D_41C0_97411DBAF014); this.mainPlayList.set('selectedIndex', 7)"
                         }
                        ],
                        "rollOverDisplay": false,
                        "id": "overlay_31666916_3C37_D8AD_41BF_0E759A3A4B57",
                        "class": "HotspotPanoramaOverlay",
                        "items": [
                         {
                          "yaw": 4.74,
                          "hfov": 7.66,
                          "image": {
                           "levels": [
                            {
                             "height": 146,
                             "width": 106,
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_19_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "class": "HotspotPanoramaOverlayImage",
                          "pitch": -2.68
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
                             "width": 45,
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_20_0_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "hfov": 6.56,
                          "yaw": 156.92,
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": -1.22
                         }
                        ],
                        "enabledInCardboard": true,
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397, this.camera_495056CD_449C_3967_4186_03B80CA042A0); this.mainPlayList.set('selectedIndex', 15)"
                         }
                        ],
                        "rollOverDisplay": false,
                        "id": "overlay_324F6236_3C36_48ED_419C_6AA2CE6648A0",
                        "class": "HotspotPanoramaOverlay",
                        "items": [
                         {
                          "yaw": 156.92,
                          "hfov": 6.56,
                          "image": {
                           "levels": [
                            {
                             "height": 100,
                             "width": 91,
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_20_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "class": "HotspotPanoramaOverlayImage",
                          "pitch": -1.22
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
                         "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_hq.jpeg",
                         "class": "ImageResourceLevel"
                        },
                        {
                         "height": 1608,
                         "width": 3217,
                         "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA.jpeg",
                         "class": "ImageResourceLevel"
                        }
                       ],
                       "class": "ImageResource"
                      }
                     }
                    ],
                    "adjacentPanoramas": [
                     {
                      "panorama": {
                       "frames": [
                        {
                         "thumbnailUrl": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_t.jpg",
                         "overlays": [
                          {
                           "useHandCursor": true,
                           "maps": [
                            {
                             "image": {
                              "levels": [
                               {
                                "height": 16,
                                "width": 25,
                                "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_1_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "hfov": 7.28,
                             "yaw": -153.92,
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": -8.41
                            }
                           ],
                           "enabledInCardboard": true,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "rollOverDisplay": false,
                           "id": "overlay_1C9800E4_06BF_3DDE_4173_59F64E3E5D64",
                           "class": "HotspotPanoramaOverlay",
                           "items": [
                            {
                             "yaw": -153.92,
                             "hfov": 7.28,
                             "image": {
                              "levels": [
                               {
                                "height": 64,
                                "width": 100,
                                "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_1_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "class": "HotspotPanoramaOverlayImage",
                             "pitch": -8.41
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
                                "height": 16,
                                "width": 27,
                                "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_3_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "hfov": 8.76,
                             "yaw": -41.81,
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": -7.26
                            }
                           ],
                           "enabledInCardboard": true,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "rollOverDisplay": false,
                           "id": "overlay_112FAD06_06B0_E45A_4192_19B5F480919F",
                           "class": "HotspotPanoramaOverlay",
                           "items": [
                            {
                             "yaw": -41.81,
                             "hfov": 8.76,
                             "image": {
                              "levels": [
                               {
                                "height": 71,
                                "width": 120,
                                "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_3_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "class": "HotspotPanoramaOverlayImage",
                             "pitch": -7.26
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
                                "height": 16,
                                "width": 26,
                                "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_5_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "hfov": 6.76,
                             "yaw": 36.94,
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": -6.88
                            }
                           ],
                           "enabledInCardboard": true,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "rollOverDisplay": false,
                           "id": "overlay_1FA8ED9A_06B1_646A_4196_2926CB7FBF93",
                           "class": "HotspotPanoramaOverlay",
                           "items": [
                            {
                             "yaw": 36.94,
                             "hfov": 6.76,
                             "image": {
                              "levels": [
                               {
                                "height": 55,
                                "width": 92,
                                "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_5_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "class": "HotspotPanoramaOverlayImage",
                             "pitch": -6.88
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
                                "width": 52,
                                "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_12_0_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "hfov": 7.67,
                             "yaw": -154.28,
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": -3.38
                            }
                           ],
                           "enabledInCardboard": true,
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82, this.camera_4A718603_449C_38E3_41D0_99992843D0E3); this.mainPlayList.set('selectedIndex', 8)"
                            }
                           ],
                           "rollOverDisplay": false,
                           "id": "overlay_31B3B513_3C36_48AA_41C2_639E02762ACD",
                           "class": "HotspotPanoramaOverlay",
                           "items": [
                            {
                             "yaw": -154.28,
                             "hfov": 7.67,
                             "image": {
                              "levels": [
                               {
                                "height": 124,
                                "width": 104,
                                "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_12_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "class": "HotspotPanoramaOverlayImage",
                             "pitch": -3.38
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
                                "height": 75,
                                "width": 77,
                                "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_13_0_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "hfov": 11.33,
                             "yaw": -42.13,
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": -1.48
                            }
                           ],
                           "enabledInCardboard": true,
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53, this.camera_4A78F5E9_449C_3B2F_4197_FC21DFA2AF43); this.mainPlayList.set('selectedIndex', 9)"
                            }
                           ],
                           "rollOverDisplay": false,
                           "id": "overlay_314A48B2_3C36_D9E5_41C2_F12297588075",
                           "class": "HotspotPanoramaOverlay",
                           "items": [
                            {
                             "yaw": -42.13,
                             "hfov": 11.33,
                             "image": {
                              "levels": [
                               {
                                "height": 150,
                                "width": 154,
                                "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_13_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "class": "HotspotPanoramaOverlayImage",
                             "pitch": -1.48
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
                                "width": 42,
                                "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_14_0_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "hfov": 6.29,
                             "yaw": 36.85,
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": -2.58
                            }
                           ],
                           "enabledInCardboard": true,
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA, this.camera_4928C633_449C_393C_41B4_1B643A4D3EEE); this.mainPlayList.set('selectedIndex', 6)"
                            }
                           ],
                           "rollOverDisplay": false,
                           "id": "overlay_314A418A_3C36_CBA5_41C7_919875A1128F",
                           "class": "HotspotPanoramaOverlay",
                           "items": [
                            {
                             "yaw": 36.85,
                             "hfov": 6.29,
                             "image": {
                              "levels": [
                               {
                                "height": 142,
                                "width": 85,
                                "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_14_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "class": "HotspotPanoramaOverlayImage",
                             "pitch": -2.58
                            }
                           ]
                          }
                         ],
                         "class": "SphericPanoramaFrame",
                         "sphere": {
                          "levels": [
                           {
                            "height": 2450,
                            "width": 4900,
                            "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_hq.jpeg",
                            "class": "ImageResourceLevel"
                           },
                           {
                            "height": 1608,
                            "width": 3217,
                            "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F.jpeg",
                            "class": "ImageResourceLevel"
                           }
                          ],
                          "class": "ImageResource"
                         }
                        }
                       ],
                       "adjacentPanoramas": [
                        {
                         "panorama": {
                          "frames": [
                           {
                            "thumbnailUrl": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_t.jpg",
                            "overlays": [
                             {
                              "useHandCursor": true,
                              "maps": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "height": 16,
                                   "width": 23,
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_1_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "hfov": 11.22,
                                "yaw": -0.63,
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": -13.75
                               }
                              ],
                              "enabledInCardboard": true,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "rollOverDisplay": false,
                              "id": "overlay_1AA3E219_0690_FC76_4175_20A3657C4FB3",
                              "class": "HotspotPanoramaOverlay",
                              "items": [
                               {
                                "yaw": -0.63,
                                "hfov": 11.22,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 111,
                                   "width": 160,
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_1_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "class": "HotspotPanoramaOverlayImage",
                                "pitch": -13.75
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
                                   "height": 16,
                                   "width": 25,
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_5_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "hfov": 8.33,
                                "yaw": -143.14,
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": -10.7
                               }
                              ],
                              "enabledInCardboard": true,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "rollOverDisplay": false,
                              "id": "overlay_19A3F664_0691_64DE_4190_3B68066071FF",
                              "class": "HotspotPanoramaOverlay",
                              "items": [
                               {
                                "yaw": -143.14,
                                "hfov": 8.33,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 73,
                                   "width": 117,
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_5_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "class": "HotspotPanoramaOverlayImage",
                                "pitch": -10.7
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
                                   "height": 16,
                                   "width": 21,
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_9_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "hfov": 8.38,
                                "yaw": 81.59,
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": -7.4
                               }
                              ],
                              "enabledInCardboard": true,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "rollOverDisplay": false,
                              "id": "overlay_1B759D4A_0691_24EA_4156_A2B44DC73C69",
                              "class": "HotspotPanoramaOverlay",
                              "items": [
                               {
                                "yaw": 81.59,
                                "hfov": 8.38,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 88,
                                   "width": 117,
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_9_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "class": "HotspotPanoramaOverlayImage",
                                "pitch": -7.4
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
                                   "height": 85,
                                   "width": 98,
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_18_0_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "hfov": 14.11,
                                "yaw": -143.14,
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": -4.05
                               }
                              ],
                              "enabledInCardboard": true,
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F, this.camera_4A6E4888_449C_29ED_41BC_4D050DF3B752); this.mainPlayList.set('selectedIndex', 7)"
                               }
                              ],
                              "rollOverDisplay": false,
                              "id": "overlay_31A7661B_3C32_48DA_41BD_C27EC3BCDDC9",
                              "class": "HotspotPanoramaOverlay",
                              "items": [
                               {
                                "yaw": -143.14,
                                "hfov": 14.11,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 170,
                                   "width": 196,
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_18_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "class": "HotspotPanoramaOverlayImage",
                                "pitch": -4.05
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
                                   "height": 88,
                                   "width": 80,
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_19_0_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "hfov": 11.51,
                                "yaw": -0.88,
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": -5.02
                               }
                              ],
                              "enabledInCardboard": true,
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2, this.camera_4A62B89C_449C_29E5_41B1_DFA98873F611); this.mainPlayList.set('selectedIndex', 10)"
                               }
                              ],
                              "rollOverDisplay": false,
                              "id": "overlay_31B78775_3C32_776F_41C6_8E114C1EBBB9",
                              "class": "HotspotPanoramaOverlay",
                              "items": [
                               {
                                "yaw": -0.88,
                                "hfov": 11.51,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 176,
                                   "width": 160,
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_19_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "class": "HotspotPanoramaOverlayImage",
                                "pitch": -5.02
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
                                   "height": 78,
                                   "width": 64,
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_20_0_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "hfov": 9.34,
                                "yaw": 81.58,
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": -0.33
                               }
                              ],
                              "enabledInCardboard": true,
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2, this.camera_4A5FC86F_449C_2923_4181_44F2792D3C52); this.mainPlayList.set('selectedIndex', 16)"
                               }
                              ],
                              "rollOverDisplay": false,
                              "id": "overlay_31BE2ED2_3C32_59A5_41C5_8CE1DF322D9B",
                              "class": "HotspotPanoramaOverlay",
                              "items": [
                               {
                                "yaw": 81.58,
                                "hfov": 9.34,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 156,
                                   "width": 129,
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_20_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "class": "HotspotPanoramaOverlayImage",
                                "pitch": -0.33
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
                               "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_hq.jpeg",
                               "class": "ImageResourceLevel"
                              },
                              {
                               "height": 1608,
                               "width": 3217,
                               "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53.jpeg",
                               "class": "ImageResourceLevel"
                              }
                             ],
                             "class": "ImageResource"
                            }
                           }
                          ],
                          "adjacentPanoramas": [
                           {
                            "panorama": {
                             "frames": [
                              {
                               "thumbnailUrl": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_t.jpg",
                               "overlays": [
                                {
                                 "useHandCursor": true,
                                 "maps": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 16,
                                      "width": 24,
                                      "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_3_0_map.gif",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "hfov": 6.78,
                                   "yaw": 25.2,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": -7.06
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "rollOverDisplay": false,
                                 "id": "overlay_469A773A_0791_24AA_4191_D2BE6DDF9602",
                                 "class": "HotspotPanoramaOverlay",
                                 "items": [
                                  {
                                   "yaw": 25.2,
                                   "hfov": 6.78,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 62,
                                      "width": 94,
                                      "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_3_0.png",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "class": "HotspotPanoramaOverlayImage",
                                   "pitch": -7.06
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
                                      "height": 16,
                                      "width": 28,
                                      "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_5_0_map.gif",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "hfov": 7.37,
                                   "yaw": 153.29,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": -10.96
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "rollOverDisplay": false,
                                 "id": "overlay_41D6FB68_0797_6CD6_417A_18E907D050C5",
                                 "class": "HotspotPanoramaOverlay",
                                 "items": [
                                  {
                                   "yaw": 153.29,
                                   "hfov": 7.37,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 58,
                                      "width": 104,
                                      "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_5_0.png",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "class": "HotspotPanoramaOverlayImage",
                                   "pitch": -10.96
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
                                      "height": 16,
                                      "width": 28,
                                      "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_11_0_map.gif",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "hfov": 9.3,
                                   "yaw": -107.29,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": -8.27
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "rollOverDisplay": false,
                                 "id": "overlay_43AEE268_0791_1CD6_4190_956303B44CDE",
                                 "class": "HotspotPanoramaOverlay",
                                 "items": [
                                  {
                                   "yaw": -107.29,
                                   "hfov": 9.3,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 73,
                                      "width": 130,
                                      "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_11_0.png",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "class": "HotspotPanoramaOverlayImage",
                                   "pitch": -8.27
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
                                      "height": 80,
                                      "width": 61,
                                      "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_16_0_0_map.gif",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "hfov": 8.92,
                                   "yaw": -107.62,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": -2.5
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397, this.camera_4BD4395C_449C_2B65_41D1_1FF45DED96B0); this.mainPlayList.set('selectedIndex', 15)"
                                  }
                                 ],
                                 "rollOverDisplay": false,
                                 "id": "overlay_31813653_3C3D_C8AA_4193_CAA24AD6D388",
                                 "class": "HotspotPanoramaOverlay",
                                 "items": [
                                  {
                                   "yaw": -107.62,
                                   "hfov": 8.92,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 161,
                                      "width": 123,
                                      "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_16_0.png",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "class": "HotspotPanoramaOverlayImage",
                                   "pitch": -2.5
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
                                      "height": 110,
                                      "width": 80,
                                      "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_17_0_0_map.gif",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "hfov": 11.57,
                                   "yaw": 152.96,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": -3.67
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC, this.camera_4BC3194D_449C_2B67_41BC_0951B1BD5502); this.mainPlayList.set('selectedIndex', 17)"
                                  }
                                 ],
                                 "rollOverDisplay": false,
                                 "id": "overlay_318BEE4E_3C3D_F8BA_41C0_DB0A84F563D6",
                                 "class": "HotspotPanoramaOverlay",
                                 "items": [
                                  {
                                   "yaw": 152.96,
                                   "hfov": 11.57,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 221,
                                      "width": 160,
                                      "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_17_0.png",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "class": "HotspotPanoramaOverlayImage",
                                   "pitch": -3.67
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
                                      "height": 85,
                                      "width": 77,
                                      "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_18_0_0_map.gif",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "hfov": 11.11,
                                   "yaw": 25.67,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": -1.26
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53, this.camera_4BB14935_449C_2B27_41CD_2FB0B598A518); this.mainPlayList.set('selectedIndex', 9)"
                                  }
                                 ],
                                 "rollOverDisplay": false,
                                 "id": "overlay_326062D4_3C3D_C9AE_41C8_820B84085DB2",
                                 "class": "HotspotPanoramaOverlay",
                                 "items": [
                                  {
                                   "yaw": 25.67,
                                   "hfov": 11.11,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 170,
                                      "width": 154,
                                      "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_18_0.png",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "class": "HotspotPanoramaOverlayImage",
                                   "pitch": -1.26
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
                                  "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_hq.jpeg",
                                  "class": "ImageResourceLevel"
                                 },
                                 {
                                  "height": 1608,
                                  "width": 3217,
                                  "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2.jpeg",
                                  "class": "ImageResourceLevel"
                                 }
                                ],
                                "class": "ImageResource"
                               }
                              }
                             ],
                             "adjacentPanoramas": [
                              {
                               "panorama": "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
                               "yaw": 25.67,
                               "class": "AdjacentPanorama",
                               "distance": 1,
                               "backwardYaw": 81.58
                              },
                              {
                               "panorama": {
                                "frames": [
                                 {
                                  "thumbnailUrl": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_t.jpg",
                                  "overlays": [
                                   {
                                    "useHandCursor": true,
                                    "maps": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 16,
                                         "width": 25,
                                         "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_5_0_map.gif",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "hfov": 7.99,
                                      "yaw": -143.5,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "pitch": -6.13
                                     }
                                    ],
                                    "enabledInCardboard": true,
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000"
                                     }
                                    ],
                                    "rollOverDisplay": false,
                                    "id": "overlay_3F187E51_07F3_24F6_4184_039DFE14256A",
                                    "class": "HotspotPanoramaOverlay",
                                    "items": [
                                     {
                                      "yaw": -143.5,
                                      "hfov": 7.99,
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 69,
                                         "width": 111,
                                         "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_5_0.png",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "class": "HotspotPanoramaOverlayImage",
                                      "pitch": -6.13
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
                                         "height": 16,
                                         "width": 26,
                                         "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_7_0_map.gif",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "hfov": 7.72,
                                      "yaw": 7.47,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "pitch": -4.9
                                     }
                                    ],
                                    "enabledInCardboard": true,
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000"
                                     }
                                    ],
                                    "rollOverDisplay": false,
                                    "id": "overlay_3B75B8EC_07F7_6DAE_4194_C7A60FEE48CD",
                                    "class": "HotspotPanoramaOverlay",
                                    "items": [
                                     {
                                      "yaw": 7.47,
                                      "hfov": 7.72,
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 65,
                                         "width": 107,
                                         "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_7_0.png",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "class": "HotspotPanoramaOverlayImage",
                                      "pitch": -4.9
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
                                         "height": 76,
                                         "width": 73,
                                         "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_16_0_0_map.gif",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "hfov": 10.6,
                                      "yaw": 7.69,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "pitch": 0.41
                                     }
                                    ],
                                    "enabledInCardboard": true,
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "class": "HotspotPanoramaOverlayArea",
                                      "click": "this.startPanoramaWithCamera(this.panorama_0F84F19D_0671_6675_4191_5761B2287855, this.camera_4AF5A7BE_449C_2725_41B9_AF2B185DA039); this.mainPlayList.set('selectedIndex', 18)"
                                     }
                                    ],
                                    "rollOverDisplay": false,
                                    "id": "overlay_31FF256B_3C3E_4B7A_41C4_007A0322B0E3",
                                    "class": "HotspotPanoramaOverlay",
                                    "items": [
                                     {
                                      "yaw": 7.69,
                                      "hfov": 10.6,
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 152,
                                         "width": 147,
                                         "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_16_0.png",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "class": "HotspotPanoramaOverlayImage",
                                      "pitch": 0.41
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
                                         "height": 97,
                                         "width": 80,
                                         "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_17_0_0_map.gif",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "hfov": 11.58,
                                      "yaw": -143.45,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "pitch": 0.45
                                     }
                                    ],
                                    "enabledInCardboard": true,
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "class": "HotspotPanoramaOverlayArea",
                                      "click": "this.startPanoramaWithCamera(this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2, this.camera_4AFE17AF_449C_2723_41D0_2BFE5173C0C8); this.mainPlayList.set('selectedIndex', 16)"
                                     }
                                    ],
                                    "rollOverDisplay": false,
                                    "id": "overlay_31FA7D5A_3C3E_5B5A_41CB_09D056C34B23",
                                    "class": "HotspotPanoramaOverlay",
                                    "items": [
                                     {
                                      "yaw": -143.45,
                                      "hfov": 11.58,
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 195,
                                         "width": 160,
                                         "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_17_0.png",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "class": "HotspotPanoramaOverlayImage",
                                      "pitch": 0.45
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
                                     "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_hq.jpeg",
                                     "class": "ImageResourceLevel"
                                    },
                                    {
                                     "height": 1608,
                                     "width": 3217,
                                     "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC.jpeg",
                                     "class": "ImageResourceLevel"
                                    }
                                   ],
                                   "class": "ImageResource"
                                  }
                                 }
                                ],
                                "adjacentPanoramas": [
                                 {
                                  "panorama": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
                                  "yaw": -143.45,
                                  "class": "AdjacentPanorama",
                                  "distance": 1,
                                  "backwardYaw": 152.96
                                 },
                                 {
                                  "panorama": {
                                   "frames": [
                                    {
                                     "thumbnailUrl": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_t.jpg",
                                     "overlays": [
                                      {
                                       "useHandCursor": true,
                                       "maps": [
                                        {
                                         "image": {
                                          "levels": [
                                           {
                                            "height": 16,
                                            "width": 25,
                                            "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_3_0_map.gif",
                                            "class": "ImageResourceLevel"
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "hfov": 8.31,
                                         "yaw": 28.93,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "pitch": -13.39
                                        }
                                       ],
                                       "enabledInCardboard": true,
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000"
                                        }
                                       ],
                                       "rollOverDisplay": false,
                                       "id": "overlay_33D2C3E4_078F_23DE_417D_A6B689D41EEC",
                                       "class": "HotspotPanoramaOverlay",
                                       "items": [
                                        {
                                         "yaw": 28.93,
                                         "hfov": 8.31,
                                         "image": {
                                          "levels": [
                                           {
                                            "height": 73,
                                            "width": 118,
                                            "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_3_0.png",
                                            "class": "ImageResourceLevel"
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "class": "HotspotPanoramaOverlayImage",
                                         "pitch": -13.39
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
                                            "height": 16,
                                            "width": 24,
                                            "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_7_0_map.gif",
                                            "class": "ImageResourceLevel"
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "hfov": 7.97,
                                         "yaw": -54.01,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "pitch": -16.02
                                        }
                                       ],
                                       "enabledInCardboard": true,
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000"
                                        }
                                       ],
                                       "rollOverDisplay": false,
                                       "id": "overlay_32A61C12_07F3_647A_4188_FF9DAE655EAC",
                                       "class": "HotspotPanoramaOverlay",
                                       "items": [
                                        {
                                         "yaw": -54.01,
                                         "hfov": 7.97,
                                         "image": {
                                          "levels": [
                                           {
                                            "height": 76,
                                            "width": 115,
                                            "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_7_0.png",
                                            "class": "ImageResourceLevel"
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "class": "HotspotPanoramaOverlayImage",
                                         "pitch": -16.02
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
                                            "height": 16,
                                            "width": 26,
                                            "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_15_0_map.gif",
                                            "class": "ImageResourceLevel"
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "hfov": 9.38,
                                         "yaw": 168.89,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "pitch": -5.96
                                        }
                                       ],
                                       "enabledInCardboard": true,
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000"
                                        }
                                       ],
                                       "rollOverDisplay": false,
                                       "id": "overlay_0ADD07F7_12A8_C979_419E_40680DB583A7",
                                       "class": "HotspotPanoramaOverlay",
                                       "items": [
                                        {
                                         "yaw": 168.89,
                                         "hfov": 9.38,
                                         "image": {
                                          "levels": [
                                           {
                                            "height": 80,
                                            "width": 131,
                                            "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_15_0.png",
                                            "class": "ImageResourceLevel"
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "class": "HotspotPanoramaOverlayImage",
                                         "pitch": -5.96
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
                                            "height": 111,
                                            "width": 116,
                                            "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_16_0_0_map.gif",
                                            "class": "ImageResourceLevel"
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "hfov": 16.61,
                                         "yaw": -53.03,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "pitch": -8.19
                                        }
                                       ],
                                       "enabledInCardboard": true,
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "class": "HotspotPanoramaOverlayArea",
                                         "click": "this.startPanoramaWithCamera(this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894, this.camera_4ACF0772_449C_273D_41A1_F86CAF383E03); this.mainPlayList.set('selectedIndex', 22)"
                                        }
                                       ],
                                       "rollOverDisplay": false,
                                       "id": "overlay_318E48FC_3C3E_D95E_41C8_D67E6535535C",
                                       "class": "HotspotPanoramaOverlay",
                                       "items": [
                                        {
                                         "yaw": -53.03,
                                         "hfov": 16.61,
                                         "image": {
                                          "levels": [
                                           {
                                            "height": 222,
                                            "width": 233,
                                            "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_16_0.png",
                                            "class": "ImageResourceLevel"
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "class": "HotspotPanoramaOverlayImage",
                                         "pitch": -8.19
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
                                            "height": 115,
                                            "width": 93,
                                            "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_17_0_0_map.gif",
                                            "class": "ImageResourceLevel"
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "hfov": 13.33,
                                         "yaw": 24.89,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "pitch": -8.66
                                        }
                                       ],
                                       "enabledInCardboard": true,
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "class": "HotspotPanoramaOverlayArea",
                                         "click": "this.startPanoramaWithCamera(this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC, this.camera_4AC2F781_449C_27DE_41C1_7144097C53D5); this.mainPlayList.set('selectedIndex', 17)"
                                        }
                                       ],
                                       "rollOverDisplay": false,
                                       "id": "overlay_31EDADC4_3C3E_3BAD_41AB_C9F7B53B7D40",
                                       "class": "HotspotPanoramaOverlay",
                                       "items": [
                                        {
                                         "yaw": 24.89,
                                         "hfov": 13.33,
                                         "image": {
                                          "levels": [
                                           {
                                            "height": 230,
                                            "width": 187,
                                            "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_17_0.png",
                                            "class": "ImageResourceLevel"
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "class": "HotspotPanoramaOverlayImage",
                                         "pitch": -8.66
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
                                            "height": 107,
                                            "width": 88,
                                            "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_18_0_0_map.gif",
                                            "class": "ImageResourceLevel"
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "hfov": 12.81,
                                         "yaw": 165.15,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "pitch": 0.78
                                        }
                                       ],
                                       "enabledInCardboard": true,
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "class": "HotspotPanoramaOverlayArea",
                                         "click": "this.startPanoramaWithCamera(this.panorama_0FDE1F49_0671_7ADD_4191_EF61FA36243D, this.camera_4ABA8763_449C_2723_41C6_D048DC7CC2EA); this.mainPlayList.set('selectedIndex', 19)"
                                        }
                                       ],
                                       "rollOverDisplay": false,
                                       "id": "overlay_297A31D6_3CE7_18C9_41C7_8645573E8D7F",
                                       "class": "HotspotPanoramaOverlay",
                                       "items": [
                                        {
                                         "yaw": 165.15,
                                         "hfov": 12.81,
                                         "image": {
                                          "levels": [
                                           {
                                            "height": 214,
                                            "width": 177,
                                            "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_18_0.png",
                                            "class": "ImageResourceLevel"
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "class": "HotspotPanoramaOverlayImage",
                                         "pitch": 0.78
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
                                        "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_hq.jpeg",
                                        "class": "ImageResourceLevel"
                                       },
                                       {
                                        "height": 1608,
                                        "width": 3217,
                                        "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855.jpeg",
                                        "class": "ImageResourceLevel"
                                       }
                                      ],
                                      "class": "ImageResource"
                                     }
                                    }
                                   ],
                                   "adjacentPanoramas": [
                                    {
                                     "panorama": {
                                      "frames": [
                                       {
                                        "thumbnailUrl": "media/panorama_0FDE1F49_0671_7ADD_4191_EF61FA36243D_t.jpg",
                                        "overlays": [
                                         {
                                          "useHandCursor": true,
                                          "maps": [
                                           {
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 16,
                                               "width": 29,
                                               "url": "media/panorama_0FDE1F49_0671_7ADD_4191_EF61FA36243D_0_HS_1_0_map.gif",
                                               "class": "ImageResourceLevel"
                                              }
                                             ],
                                             "class": "ImageResource"
                                            },
                                            "hfov": 8.44,
                                            "yaw": -174.68,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "pitch": -6.59
                                           }
                                          ],
                                          "enabledInCardboard": true,
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000"
                                           }
                                          ],
                                          "rollOverDisplay": false,
                                          "id": "overlay_305C5588_0793_2456_418A_8A6507C5DC0F",
                                          "class": "HotspotPanoramaOverlay",
                                          "items": [
                                           {
                                            "yaw": -174.68,
                                            "hfov": 8.44,
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 64,
                                               "width": 117,
                                               "url": "media/panorama_0FDE1F49_0671_7ADD_4191_EF61FA36243D_0_HS_1_0.png",
                                               "class": "ImageResourceLevel"
                                              }
                                             ],
                                             "class": "ImageResource"
                                            },
                                            "class": "HotspotPanoramaOverlayImage",
                                            "pitch": -6.59
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
                                               "height": 88,
                                               "width": 78,
                                               "url": "media/panorama_0FDE1F49_0671_7ADD_4191_EF61FA36243D_0_HS_2_0_0_map.gif",
                                               "class": "ImageResourceLevel"
                                              }
                                             ],
                                             "class": "ImageResource"
                                            },
                                            "hfov": 11.3,
                                            "yaw": -174.74,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "pitch": -0.44
                                           }
                                          ],
                                          "enabledInCardboard": true,
                                          "areas": [
                                           {
                                            "mapColor": "#FF0000",
                                            "class": "HotspotPanoramaOverlayArea",
                                            "click": "this.startPanoramaWithCamera(this.panorama_0F84F19D_0671_6675_4191_5761B2287855, this.camera_4A77B8B5_449C_2927_41B0_2A28AA0863A0); this.mainPlayList.set('selectedIndex', 18)"
                                           }
                                          ],
                                          "rollOverDisplay": false,
                                          "id": "overlay_31FEF583_3C3F_CBAA_41CA_B71528649943",
                                          "class": "HotspotPanoramaOverlay",
                                          "items": [
                                           {
                                            "yaw": -174.74,
                                            "hfov": 11.3,
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 177,
                                               "width": 156,
                                               "url": "media/panorama_0FDE1F49_0671_7ADD_4191_EF61FA36243D_0_HS_2_0.png",
                                               "class": "ImageResourceLevel"
                                              }
                                             ],
                                             "class": "ImageResource"
                                            },
                                            "class": "HotspotPanoramaOverlayImage",
                                            "pitch": -0.44
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
                                           "url": "media/panorama_0FDE1F49_0671_7ADD_4191_EF61FA36243D_hq.jpeg",
                                           "class": "ImageResourceLevel"
                                          },
                                          {
                                           "height": 1608,
                                           "width": 3217,
                                           "url": "media/panorama_0FDE1F49_0671_7ADD_4191_EF61FA36243D.jpeg",
                                           "class": "ImageResourceLevel"
                                          }
                                         ],
                                         "class": "ImageResource"
                                        }
                                       }
                                      ],
                                      "adjacentPanoramas": [
                                       {
                                        "panorama": "this.panorama_0F84F19D_0671_6675_4191_5761B2287855",
                                        "yaw": -174.74,
                                        "class": "AdjacentPanorama",
                                        "distance": 1,
                                        "backwardYaw": 165.15
                                       }
                                      ],
                                      "cardboardMenu": {
                                       "selectedBackgroundColor": "#202020",
                                       "fontFamily": "Arial",
                                       "rollOverBackgroundColor": "#000000",
                                       "label": "Media",
                                       "backgroundColor": "#404040",
                                       "rollOverFontColor": "#FFFFFF",
                                       "opacity": 0.4,
                                       "id": "Menu_4A413582_449C_3BDD_4159_780D475F6104",
                                       "rollOverOpacity": 0.8,
                                       "selectedFontColor": "#FFFFFF",
                                       "children": [
                                        {
                                         "label": "C01",
                                         "class": "MenuItem",
                                         "click": "this.mainPlayList.set('selectedIndex', 0)"
                                        },
                                        {
                                         "label": "C02",
                                         "class": "MenuItem",
                                         "click": "this.mainPlayList.set('selectedIndex', 1)"
                                        },
                                        {
                                         "label": "C03",
                                         "class": "MenuItem",
                                         "click": "this.mainPlayList.set('selectedIndex', 2)"
                                        },
                                        {
                                         "label": "C04",
                                         "class": "MenuItem",
                                         "click": "this.mainPlayList.set('selectedIndex', 3)"
                                        },
                                        {
                                         "label": "C05",
                                         "class": "MenuItem",
                                         "click": "this.mainPlayList.set('selectedIndex', 4)"
                                        },
                                        {
                                         "label": "C06",
                                         "class": "MenuItem",
                                         "click": "this.mainPlayList.set('selectedIndex', 5)"
                                        },
                                        {
                                         "label": "C07",
                                         "class": "MenuItem",
                                         "click": "this.mainPlayList.set('selectedIndex', 6)"
                                        },
                                        {
                                         "label": "C08",
                                         "class": "MenuItem",
                                         "click": "this.mainPlayList.set('selectedIndex', 7)"
                                        },
                                        {
                                         "label": "C09",
                                         "class": "MenuItem",
                                         "click": "this.mainPlayList.set('selectedIndex', 8)"
                                        },
                                        {
                                         "label": "C10",
                                         "class": "MenuItem",
                                         "click": "this.mainPlayList.set('selectedIndex', 9)"
                                        },
                                        {
                                         "label": "C11",
                                         "class": "MenuItem",
                                         "click": "this.mainPlayList.set('selectedIndex', 10)"
                                        },
                                        {
                                         "label": "C12",
                                         "class": "MenuItem",
                                         "click": "this.mainPlayList.set('selectedIndex', 11)"
                                        },
                                        {
                                         "label": "C13",
                                         "class": "MenuItem",
                                         "click": "this.mainPlayList.set('selectedIndex', 12)"
                                        },
                                        {
                                         "label": "C14",
                                         "class": "MenuItem",
                                         "click": "this.mainPlayList.set('selectedIndex', 13)"
                                        },
                                        {
                                         "label": "C15",
                                         "class": "MenuItem",
                                         "click": "this.mainPlayList.set('selectedIndex', 14)"
                                        },
                                        {
                                         "label": "C16",
                                         "class": "MenuItem",
                                         "click": "this.mainPlayList.set('selectedIndex', 15)"
                                        },
                                        {
                                         "label": "C17",
                                         "class": "MenuItem",
                                         "click": "this.mainPlayList.set('selectedIndex', 16)"
                                        },
                                        {
                                         "label": "C18",
                                         "class": "MenuItem",
                                         "click": "this.mainPlayList.set('selectedIndex', 17)"
                                        },
                                        {
                                         "label": "C19",
                                         "class": "MenuItem",
                                         "click": "this.mainPlayList.set('selectedIndex', 18)"
                                        },
                                        {
                                         "label": "C20",
                                         "class": "MenuItem",
                                         "click": "this.mainPlayList.set('selectedIndex', 19)"
                                        },
                                        {
                                         "label": "C21",
                                         "class": "MenuItem",
                                         "click": "this.mainPlayList.set('selectedIndex', 20)"
                                        },
                                        {
                                         "label": "C22",
                                         "class": "MenuItem",
                                         "click": "this.mainPlayList.set('selectedIndex', 21)"
                                        },
                                        {
                                         "label": "C23",
                                         "class": "MenuItem",
                                         "click": "this.mainPlayList.set('selectedIndex', 22)"
                                        }
                                       ],
                                       "fontColor": "#FFFFFF",
                                       "class": "Menu"
                                      },
                                      "id": "panorama_0FDE1F49_0671_7ADD_4191_EF61FA36243D",
                                      "pitch": 0,
                                      "thumbnailUrl": "media/panorama_0FDE1F49_0671_7ADD_4191_EF61FA36243D_t.jpg",
                                      "mapLocations": [
                                       {
                                        "x": 684.79,
                                        "class": "PanoramaMapLocation",
                                        "y": 435.23,
                                        "angle": 181.22,
                                        "map": {
                                         "initialZoomFactor": 1,
                                         "fieldOfViewOverlayInsideColor": "#10A8B3",
                                         "fieldOfViewOverlayInsideOpacity": 0.6,
                                         "width": 1021,
                                         "id": "map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799",
                                         "height": 652,
                                         "minimumZoomFactor": 0.5,
                                         "image": {
                                          "levels": [
                                           {
                                            "height": 652,
                                            "width": 1021,
                                            "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799.png",
                                            "class": "ImageResourceLevel"
                                           },
                                           {
                                            "height": 326,
                                            "width": 510,
                                            "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_lq.png",
                                            "class": "ImageResourceLevel",
                                            "grayscale": true
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "fieldOfViewOverlayOutsideColor": "#00FF99",
                                         "thumbnailUrl": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_t.png",
                                         "fieldOfViewOverlayOutsideOpacity": 0,
                                         "label": "FloorPlan",
                                         "overlays": [
                                          {
                                           "id": "overlay_2F1D3B3B_3FEA_3F13_41C8_94B28D48FE56",
                                           "map": {
                                            "offsetY": 0,
                                            "x": 300.32,
                                            "width": 21.5,
                                            "y": 122.79,
                                            "height": 21.92,
                                            "offsetX": 0,
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 10,
                                               "width": 10,
                                               "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_46_map.gif",
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
                                            "x": 300.32,
                                            "class": "HotspotMapOverlayImage",
                                            "y": 122.79,
                                            "width": 21.5,
                                            "height": 21.92,
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 21,
                                               "width": 21,
                                               "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_46.png",
                                               "class": "ImageResourceLevel"
                                              }
                                             ],
                                             "class": "ImageResource"
                                            }
                                           },
                                           "class": "AreaHotspotMapOverlay",
                                           "useHandCursor": true
                                          },
                                          {
                                           "id": "overlay_2F1CCB3B_3FEA_3F13_41A5_F89560AB6BE4",
                                           "map": {
                                            "offsetY": 0,
                                            "x": 345.16,
                                            "width": 21,
                                            "y": 142.14,
                                            "height": 21,
                                            "offsetX": 0,
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 10,
                                               "width": 10,
                                               "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_47_map.gif",
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
                                             "click": "this.mainPlayList.set('selectedIndex', 1)"
                                            }
                                           ],
                                           "rollOverDisplay": false,
                                           "image": {
                                            "x": 345.16,
                                            "class": "HotspotMapOverlayImage",
                                            "y": 142.14,
                                            "width": 21,
                                            "height": 21,
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 20,
                                               "width": 21,
                                               "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_47.png",
                                               "class": "ImageResourceLevel"
                                              }
                                             ],
                                             "class": "ImageResource"
                                            }
                                           },
                                           "class": "AreaHotspotMapOverlay",
                                           "useHandCursor": true
                                          },
                                          {
                                           "id": "overlay_2F1CDB3B_3FEA_3F13_41C7_954F616FADFF",
                                           "map": {
                                            "offsetY": 0,
                                            "x": 392.22,
                                            "width": 21,
                                            "y": 161.35,
                                            "height": 21,
                                            "offsetX": 0,
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 10,
                                               "width": 10,
                                               "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_48_map.gif",
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
                                             "click": "this.mainPlayList.set('selectedIndex', 2)"
                                            }
                                           ],
                                           "rollOverDisplay": false,
                                           "image": {
                                            "x": 392.22,
                                            "class": "HotspotMapOverlayImage",
                                            "y": 161.35,
                                            "width": 21,
                                            "height": 21,
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 20,
                                               "width": 21,
                                               "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_48.png",
                                               "class": "ImageResourceLevel"
                                              }
                                             ],
                                             "class": "ImageResource"
                                            }
                                           },
                                           "class": "AreaHotspotMapOverlay",
                                           "useHandCursor": true
                                          },
                                          {
                                           "id": "overlay_2F1CEB3B_3FEA_3F13_41B9_540F108BAE8A",
                                           "map": {
                                            "offsetY": 0,
                                            "x": 443.05,
                                            "width": 21,
                                            "y": 184.18,
                                            "height": 21,
                                            "offsetX": 0,
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 10,
                                               "width": 10,
                                               "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_49_map.gif",
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
                                             "click": "this.mainPlayList.set('selectedIndex', 3)"
                                            }
                                           ],
                                           "rollOverDisplay": false,
                                           "image": {
                                            "x": 443.05,
                                            "class": "HotspotMapOverlayImage",
                                            "y": 184.18,
                                            "width": 21,
                                            "height": 21,
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 20,
                                               "width": 21,
                                               "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_49.png",
                                               "class": "ImageResourceLevel"
                                              }
                                             ],
                                             "class": "ImageResource"
                                            }
                                           },
                                           "class": "AreaHotspotMapOverlay",
                                           "useHandCursor": true
                                          },
                                          {
                                           "id": "overlay_2F1CFB3B_3FEA_3F13_41B9_A207A65471C8",
                                           "map": {
                                            "offsetY": 0,
                                            "x": 502.89,
                                            "width": 21,
                                            "y": 203.39,
                                            "height": 21,
                                            "offsetX": 0,
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 10,
                                               "width": 10,
                                               "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_50_map.gif",
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
                                             "click": "this.mainPlayList.set('selectedIndex', 4)"
                                            }
                                           ],
                                           "rollOverDisplay": false,
                                           "image": {
                                            "x": 502.89,
                                            "class": "HotspotMapOverlayImage",
                                            "y": 203.39,
                                            "width": 21,
                                            "height": 21,
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 20,
                                               "width": 21,
                                               "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_50.png",
                                               "class": "ImageResourceLevel"
                                              }
                                             ],
                                             "class": "ImageResource"
                                            }
                                           },
                                           "class": "AreaHotspotMapOverlay",
                                           "useHandCursor": true
                                          },
                                          {
                                           "id": "overlay_2F1C8B3B_3FEA_3F13_41CE_8DE5F5E5198B",
                                           "map": {
                                            "offsetY": 0,
                                            "x": 536.36,
                                            "width": 21,
                                            "y": 217.57,
                                            "height": 21,
                                            "offsetX": 0,
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 10,
                                               "width": 10,
                                               "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_51_map.gif",
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
                                             "click": "this.mainPlayList.set('selectedIndex', 5)"
                                            }
                                           ],
                                           "rollOverDisplay": false,
                                           "image": {
                                            "x": 536.36,
                                            "class": "HotspotMapOverlayImage",
                                            "y": 217.57,
                                            "width": 21,
                                            "height": 21,
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 20,
                                               "width": 21,
                                               "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_51.png",
                                               "class": "ImageResourceLevel"
                                              }
                                             ],
                                             "class": "ImageResource"
                                            }
                                           },
                                           "class": "AreaHotspotMapOverlay",
                                           "useHandCursor": true
                                          },
                                          {
                                           "id": "overlay_2F1C9B3C_3FEA_3F15_41A2_29A259D7E0E6",
                                           "map": {
                                            "offsetY": 0,
                                            "x": 574.85,
                                            "width": 21,
                                            "y": 245.35,
                                            "height": 21,
                                            "offsetX": 0,
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 10,
                                               "width": 10,
                                               "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_52_map.gif",
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
                                             "click": "this.mainPlayList.set('selectedIndex', 6)"
                                            }
                                           ],
                                           "rollOverDisplay": false,
                                           "image": {
                                            "x": 574.85,
                                            "class": "HotspotMapOverlayImage",
                                            "y": 245.35,
                                            "width": 21,
                                            "height": 21,
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 20,
                                               "width": 21,
                                               "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_52.png",
                                               "class": "ImageResourceLevel"
                                              }
                                             ],
                                             "class": "ImageResource"
                                            }
                                           },
                                           "class": "AreaHotspotMapOverlay",
                                           "useHandCursor": true
                                          },
                                          {
                                           "id": "overlay_2F1CAB3C_3FEA_3F15_41CA_198DAA8D1C71",
                                           "map": {
                                            "offsetY": 0,
                                            "x": 625.31,
                                            "width": 21,
                                            "y": 208.34,
                                            "height": 21,
                                            "offsetX": 0,
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 10,
                                               "width": 10,
                                               "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_53_map.gif",
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
                                             "click": "this.mainPlayList.set('selectedIndex', 7)"
                                            }
                                           ],
                                           "rollOverDisplay": false,
                                           "image": {
                                            "x": 625.31,
                                            "class": "HotspotMapOverlayImage",
                                            "y": 208.34,
                                            "width": 21,
                                            "height": 21,
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 20,
                                               "width": 21,
                                               "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_53.png",
                                               "class": "ImageResourceLevel"
                                              }
                                             ],
                                             "class": "ImageResource"
                                            }
                                           },
                                           "class": "AreaHotspotMapOverlay",
                                           "useHandCursor": true
                                          },
                                          {
                                           "id": "overlay_2F1C4B3C_3FEA_3F15_41C4_DB1A2E53C8A4",
                                           "map": {
                                            "offsetY": 0,
                                            "x": 624.13,
                                            "width": 21,
                                            "y": 147.76,
                                            "height": 21,
                                            "offsetX": 0,
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 10,
                                               "width": 10,
                                               "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_54_map.gif",
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
                                             "click": "this.mainPlayList.set('selectedIndex', 8)"
                                            }
                                           ],
                                           "rollOverDisplay": false,
                                           "image": {
                                            "x": 624.13,
                                            "class": "HotspotMapOverlayImage",
                                            "y": 147.76,
                                            "width": 21,
                                            "height": 21,
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 20,
                                               "width": 21,
                                               "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_54.png",
                                               "class": "ImageResourceLevel"
                                              }
                                             ],
                                             "class": "ImageResource"
                                            }
                                           },
                                           "class": "AreaHotspotMapOverlay",
                                           "useHandCursor": true
                                          },
                                          {
                                           "id": "overlay_2F1C5B3C_3FEA_3F15_41CF_4074A93C96C6",
                                           "map": {
                                            "offsetY": 0,
                                            "x": 675.4,
                                            "width": 21,
                                            "y": 239.74,
                                            "height": 21,
                                            "offsetX": 0,
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 10,
                                               "width": 10,
                                               "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_55_map.gif",
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
                                             "click": "this.mainPlayList.set('selectedIndex', 9)"
                                            }
                                           ],
                                           "rollOverDisplay": false,
                                           "image": {
                                            "x": 675.4,
                                            "class": "HotspotMapOverlayImage",
                                            "y": 239.74,
                                            "width": 21,
                                            "height": 21,
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 20,
                                               "width": 21,
                                               "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_55.png",
                                               "class": "ImageResourceLevel"
                                              }
                                             ],
                                             "class": "ImageResource"
                                            }
                                           },
                                           "class": "AreaHotspotMapOverlay",
                                           "useHandCursor": true
                                          },
                                          {
                                           "id": "overlay_2F1C6B3C_3FEA_3F15_41B9_19D38B52E075",
                                           "map": {
                                            "offsetY": 0,
                                            "x": 736.79,
                                            "width": 21,
                                            "y": 239,
                                            "height": 21,
                                            "offsetX": 0,
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 10,
                                               "width": 10,
                                               "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_56_map.gif",
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
                                             "click": "this.mainPlayList.set('selectedIndex', 10)"
                                            }
                                           ],
                                           "rollOverDisplay": false,
                                           "image": {
                                            "x": 736.79,
                                            "class": "HotspotMapOverlayImage",
                                            "y": 239,
                                            "width": 21,
                                            "height": 21,
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 20,
                                               "width": 21,
                                               "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_56.png",
                                               "class": "ImageResourceLevel"
                                              }
                                             ],
                                             "class": "ImageResource"
                                            }
                                           },
                                           "class": "AreaHotspotMapOverlay",
                                           "useHandCursor": true
                                          },
                                          {
                                           "id": "overlay_2F1C0B3C_3FEA_3F15_41C5_2F0BA3E5E3D1",
                                           "map": {
                                            "offsetY": 0,
                                            "x": 801.58,
                                            "width": 21,
                                            "y": 239.74,
                                            "height": 21,
                                            "offsetX": 0,
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 10,
                                               "width": 10,
                                               "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_57_map.gif",
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
                                             "click": "this.mainPlayList.set('selectedIndex', 11)"
                                            }
                                           ],
                                           "rollOverDisplay": false,
                                           "image": {
                                            "x": 801.58,
                                            "class": "HotspotMapOverlayImage",
                                            "y": 239.74,
                                            "width": 21,
                                            "height": 21,
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 20,
                                               "width": 21,
                                               "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_57.png",
                                               "class": "ImageResourceLevel"
                                              }
                                             ],
                                             "class": "ImageResource"
                                            }
                                           },
                                           "class": "AreaHotspotMapOverlay",
                                           "useHandCursor": true
                                          },
                                          {
                                           "id": "overlay_2F1C1B3C_3FEA_3F15_41C6_9B5397747DDE",
                                           "map": {
                                            "offsetY": 0,
                                            "x": 847.24,
                                            "width": 21,
                                            "y": 239.74,
                                            "height": 21,
                                            "offsetX": 0,
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 10,
                                               "width": 10,
                                               "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_58_map.gif",
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
                                             "click": "this.mainPlayList.set('selectedIndex', 12)"
                                            }
                                           ],
                                           "rollOverDisplay": false,
                                           "image": {
                                            "x": 847.24,
                                            "class": "HotspotMapOverlayImage",
                                            "y": 239.74,
                                            "width": 21,
                                            "height": 21,
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 20,
                                               "width": 21,
                                               "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_58.png",
                                               "class": "ImageResourceLevel"
                                              }
                                             ],
                                             "class": "ImageResource"
                                            }
                                           },
                                           "class": "AreaHotspotMapOverlay",
                                           "useHandCursor": true
                                          },
                                          {
                                           "id": "overlay_2F1C2B3C_3FEA_3F15_41C5_38FDC514C895",
                                           "map": {
                                            "offsetY": 0,
                                            "x": 887.94,
                                            "width": 21,
                                            "y": 242.54,
                                            "height": 21,
                                            "offsetX": 0,
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 10,
                                               "width": 10,
                                               "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_59_map.gif",
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
                                             "click": "this.mainPlayList.set('selectedIndex', 13)"
                                            }
                                           ],
                                           "rollOverDisplay": false,
                                           "image": {
                                            "x": 887.94,
                                            "class": "HotspotMapOverlayImage",
                                            "y": 242.54,
                                            "width": 21,
                                            "height": 21,
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 20,
                                               "width": 21,
                                               "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_59.png",
                                               "class": "ImageResourceLevel"
                                              }
                                             ],
                                             "class": "ImageResource"
                                            }
                                           },
                                           "class": "AreaHotspotMapOverlay",
                                           "useHandCursor": true
                                          },
                                          {
                                           "id": "overlay_2F1C3B3C_3FEA_3F15_41CA_E63E755E4528",
                                           "map": {
                                            "offsetY": 0,
                                            "x": 936.41,
                                            "width": 21,
                                            "y": 241.14,
                                            "height": 21,
                                            "offsetX": 0,
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 10,
                                               "width": 10,
                                               "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_60_map.gif",
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
                                             "click": "this.mainPlayList.set('selectedIndex', 14)"
                                            }
                                           ],
                                           "rollOverDisplay": false,
                                           "image": {
                                            "x": 936.41,
                                            "class": "HotspotMapOverlayImage",
                                            "y": 241.14,
                                            "width": 21,
                                            "height": 21,
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 20,
                                               "width": 21,
                                               "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_60.png",
                                               "class": "ImageResourceLevel"
                                              }
                                             ],
                                             "class": "ImageResource"
                                            }
                                           },
                                           "class": "AreaHotspotMapOverlay",
                                           "useHandCursor": true
                                          },
                                          {
                                           "id": "overlay_2EE3CB3C_3FEA_3F15_41CE_5FE33CB3A992",
                                           "map": {
                                            "offsetY": 0,
                                            "x": 617.77,
                                            "width": 21,
                                            "y": 299.8,
                                            "height": 21,
                                            "offsetX": 0,
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 10,
                                               "width": 10,
                                               "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_61_map.gif",
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
                                             "click": "this.mainPlayList.set('selectedIndex', 15)"
                                            }
                                           ],
                                           "rollOverDisplay": false,
                                           "image": {
                                            "x": 617.77,
                                            "class": "HotspotMapOverlayImage",
                                            "y": 299.8,
                                            "width": 21,
                                            "height": 21,
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 20,
                                               "width": 21,
                                               "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_61.png",
                                               "class": "ImageResourceLevel"
                                              }
                                             ],
                                             "class": "ImageResource"
                                            }
                                           },
                                           "class": "AreaHotspotMapOverlay",
                                           "useHandCursor": true
                                          },
                                          {
                                           "id": "overlay_2EE3DB3C_3FEA_3F15_41C7_0CF0266FD3E9",
                                           "map": {
                                            "offsetY": 0,
                                            "x": 665.42,
                                            "width": 21,
                                            "y": 305.93,
                                            "height": 21,
                                            "offsetX": 0,
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 10,
                                               "width": 10,
                                               "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_62_map.gif",
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
                                             "click": "this.mainPlayList.set('selectedIndex', 16)"
                                            }
                                           ],
                                           "rollOverDisplay": false,
                                           "image": {
                                            "x": 665.42,
                                            "class": "HotspotMapOverlayImage",
                                            "y": 305.93,
                                            "width": 21,
                                            "height": 21,
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 20,
                                               "width": 21,
                                               "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_62.png",
                                               "class": "ImageResourceLevel"
                                              }
                                             ],
                                             "class": "ImageResource"
                                            }
                                           },
                                           "class": "AreaHotspotMapOverlay",
                                           "useHandCursor": true
                                          },
                                          {
                                           "id": "overlay_2EE3EB3C_3FEA_3F15_41C0_F4A5B8FC5CA9",
                                           "map": {
                                            "offsetY": 0,
                                            "x": 664.02,
                                            "width": 21,
                                            "y": 333.19,
                                            "height": 21,
                                            "offsetX": 0,
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 10,
                                               "width": 10,
                                               "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_63_map.gif",
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
                                             "click": "this.mainPlayList.set('selectedIndex', 17)"
                                            }
                                           ],
                                           "rollOverDisplay": false,
                                           "image": {
                                            "x": 664.02,
                                            "class": "HotspotMapOverlayImage",
                                            "y": 333.19,
                                            "width": 21,
                                            "height": 21,
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 20,
                                               "width": 21,
                                               "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_63.png",
                                               "class": "ImageResourceLevel"
                                              }
                                             ],
                                             "class": "ImageResource"
                                            }
                                           },
                                           "class": "AreaHotspotMapOverlay",
                                           "useHandCursor": true
                                          },
                                          {
                                           "id": "overlay_2EE3FB3C_3FEA_3F15_41BA_DE40AF8987B4",
                                           "map": {
                                            "offsetY": 0,
                                            "x": 659.81,
                                            "width": 21,
                                            "y": 375.97,
                                            "height": 21,
                                            "offsetX": 0,
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 10,
                                               "width": 10,
                                               "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_64_map.gif",
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
                                             "click": "this.mainPlayList.set('selectedIndex', 18)"
                                            }
                                           ],
                                           "rollOverDisplay": false,
                                           "image": {
                                            "x": 659.81,
                                            "class": "HotspotMapOverlayImage",
                                            "y": 375.97,
                                            "width": 21,
                                            "height": 21,
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 20,
                                               "width": 21,
                                               "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_64.png",
                                               "class": "ImageResourceLevel"
                                              }
                                             ],
                                             "class": "ImageResource"
                                            }
                                           },
                                           "class": "AreaHotspotMapOverlay",
                                           "useHandCursor": true
                                          },
                                          {
                                           "id": "overlay_2EE39B3C_3FEA_3F15_41CF_AE5CE5A26D54",
                                           "map": {
                                            "offsetY": 0,
                                            "x": 673.99,
                                            "width": 21,
                                            "y": 424.36,
                                            "height": 21,
                                            "offsetX": 0,
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 10,
                                               "width": 10,
                                               "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_65_map.gif",
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
                                             "click": "this.mainPlayList.set('selectedIndex', 19)"
                                            }
                                           ],
                                           "rollOverDisplay": false,
                                           "image": {
                                            "x": 673.99,
                                            "class": "HotspotMapOverlayImage",
                                            "y": 424.36,
                                            "width": 21,
                                            "height": 21,
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 20,
                                               "width": 21,
                                               "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_65.png",
                                               "class": "ImageResourceLevel"
                                              }
                                             ],
                                             "class": "ImageResource"
                                            }
                                           },
                                           "class": "AreaHotspotMapOverlay",
                                           "useHandCursor": true
                                          },
                                          {
                                           "id": "overlay_2EE3BB3C_3FEA_3F15_41BA_E510AF188848",
                                           "map": {
                                            "offsetY": 0,
                                            "x": 626.12,
                                            "width": 21,
                                            "y": 331.79,
                                            "height": 21,
                                            "offsetX": 0,
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 10,
                                               "width": 10,
                                               "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_66_map.gif",
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
                                             "click": "this.mainPlayList.set('selectedIndex', 22)"
                                            }
                                           ],
                                           "rollOverDisplay": false,
                                           "image": {
                                            "x": 626.12,
                                            "class": "HotspotMapOverlayImage",
                                            "y": 331.79,
                                            "width": 21,
                                            "height": 21,
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 20,
                                               "width": 21,
                                               "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_66.png",
                                               "class": "ImageResourceLevel"
                                              }
                                             ],
                                             "class": "ImageResource"
                                            }
                                           },
                                           "class": "AreaHotspotMapOverlay",
                                           "useHandCursor": true
                                          },
                                          {
                                           "id": "overlay_2EE34B3C_3FEA_3F15_41C9_2C3CBE09C98E",
                                           "map": {
                                            "offsetY": 0,
                                            "x": 586.82,
                                            "width": 21,
                                            "y": 345.16,
                                            "height": 21,
                                            "offsetX": 0,
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 10,
                                               "width": 10,
                                               "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_67_map.gif",
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
                                             "click": "this.mainPlayList.set('selectedIndex', 21)"
                                            }
                                           ],
                                           "rollOverDisplay": false,
                                           "image": {
                                            "x": 586.82,
                                            "class": "HotspotMapOverlayImage",
                                            "y": 345.16,
                                            "width": 21,
                                            "height": 21,
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 20,
                                               "width": 21,
                                               "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_67.png",
                                               "class": "ImageResourceLevel"
                                              }
                                             ],
                                             "class": "ImageResource"
                                            }
                                           },
                                           "class": "AreaHotspotMapOverlay",
                                           "useHandCursor": true
                                          },
                                          {
                                           "id": "overlay_2F1CCB3D_3FEA_3F17_4199_9E79BDD719A8",
                                           "map": {
                                            "offsetY": 0,
                                            "x": 559.7,
                                            "width": 21,
                                            "y": 360.97,
                                            "height": 21,
                                            "offsetX": 0,
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 10,
                                               "width": 10,
                                               "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_68_map.gif",
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
                                             "click": "this.mainPlayList.set('selectedIndex', 20)"
                                            }
                                           ],
                                           "rollOverDisplay": false,
                                           "image": {
                                            "x": 559.7,
                                            "class": "HotspotMapOverlayImage",
                                            "y": 360.97,
                                            "width": 21,
                                            "height": 21,
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 20,
                                               "width": 21,
                                               "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_68.png",
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
                                         "fieldOfViewOverlayRadiusScale": 0.05,
                                         "scaleMode": "fit_inside",
                                         "maximumZoomFactor": 1.2,
                                         "class": "Map"
                                        }
                                       }
                                      ],
                                      "partial": false,
                                      "hfovMin": 60,
                                      "label": "C20",
                                      "hfovMax": 120,
                                      "hfov": 360,
                                      "class": "Panorama",
                                      "vfov": 180
                                     },
                                     "yaw": 165.15,
                                     "class": "AdjacentPanorama",
                                     "distance": 1,
                                     "backwardYaw": -174.74
                                    },
                                    {
                                     "panorama": {
                                      "frames": [
                                       {
                                        "thumbnailUrl": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_t.jpg",
                                        "overlays": [
                                         {
                                          "useHandCursor": true,
                                          "maps": [
                                           {
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 16,
                                               "width": 30,
                                               "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_1_0_map.gif",
                                               "class": "ImageResourceLevel"
                                              }
                                             ],
                                             "class": "ImageResource"
                                            },
                                            "hfov": 9.41,
                                            "yaw": 88.54,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "pitch": -11.24
                                           }
                                          ],
                                          "enabledInCardboard": true,
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000"
                                           }
                                          ],
                                          "rollOverDisplay": false,
                                          "id": "overlay_3348BEEF_07B7_25AA_4181_4163771F00E4",
                                          "class": "HotspotPanoramaOverlay",
                                          "items": [
                                           {
                                            "yaw": 88.54,
                                            "hfov": 9.41,
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 70,
                                               "width": 133,
                                               "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_1_0.png",
                                               "class": "ImageResourceLevel"
                                              }
                                             ],
                                             "class": "ImageResource"
                                            },
                                            "class": "HotspotPanoramaOverlayImage",
                                            "pitch": -11.24
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
                                               "height": 16,
                                               "width": 21,
                                               "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_3_0_map.gif",
                                               "class": "ImageResourceLevel"
                                              }
                                             ],
                                             "class": "ImageResource"
                                            },
                                            "hfov": 7.27,
                                            "yaw": -7.29,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "pitch": -4.21
                                           }
                                          ],
                                          "enabledInCardboard": true,
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000"
                                           }
                                          ],
                                          "rollOverDisplay": false,
                                          "id": "overlay_2AA8BEF2_07B1_25BA_417C_0F0A2C84C244",
                                          "class": "HotspotPanoramaOverlay",
                                          "items": [
                                           {
                                            "yaw": -7.29,
                                            "hfov": 7.27,
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 76,
                                               "width": 101,
                                               "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_3_0.png",
                                               "class": "ImageResourceLevel"
                                              }
                                             ],
                                             "class": "ImageResource"
                                            },
                                            "class": "HotspotPanoramaOverlayImage",
                                            "pitch": -4.21
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
                                               "height": 16,
                                               "width": 27,
                                               "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_19_0_map.gif",
                                               "class": "ImageResourceLevel"
                                              }
                                             ],
                                             "class": "ImageResource"
                                            },
                                            "hfov": 11.22,
                                            "yaw": -168.6,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "pitch": -10.52
                                           }
                                          ],
                                          "enabledInCardboard": true,
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000"
                                           }
                                          ],
                                          "rollOverDisplay": false,
                                          "id": "overlay_2C7EB04D_21FB_7ABB_4179_D08D1BA68999",
                                          "class": "HotspotPanoramaOverlay",
                                          "items": [
                                           {
                                            "yaw": -168.6,
                                            "hfov": 11.22,
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 93,
                                               "width": 158,
                                               "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_19_0.png",
                                               "class": "ImageResourceLevel"
                                              }
                                             ],
                                             "class": "ImageResource"
                                            },
                                            "class": "HotspotPanoramaOverlayImage",
                                            "pitch": -10.52
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
                                               "height": 79,
                                               "width": 84,
                                               "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_20_0_0_map.gif",
                                               "class": "ImageResourceLevel"
                                              }
                                             ],
                                             "class": "ImageResource"
                                            },
                                            "hfov": 12.09,
                                            "yaw": -172.27,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "pitch": -4.19
                                           }
                                          ],
                                          "enabledInCardboard": true,
                                          "areas": [
                                           {
                                            "mapColor": "#FF0000",
                                            "class": "HotspotPanoramaOverlayArea",
                                            "click": "this.startPanoramaWithCamera(this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397, this.camera_4974070B_449C_38E3_41A3_3012A3567FC3); this.mainPlayList.set('selectedIndex', 15)"
                                           }
                                          ],
                                          "rollOverDisplay": false,
                                          "id": "overlay_3184A9AF_3C3E_5BFA_4193_1D078062DEF6",
                                          "class": "HotspotPanoramaOverlay",
                                          "items": [
                                           {
                                            "yaw": -172.27,
                                            "hfov": 12.09,
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 159,
                                               "width": 168,
                                               "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_20_0.png",
                                               "class": "ImageResourceLevel"
                                              }
                                             ],
                                             "class": "ImageResource"
                                            },
                                            "class": "HotspotPanoramaOverlayImage",
                                            "pitch": -4.19
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
                                               "width": 83,
                                               "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_21_0_0_map.gif",
                                               "class": "ImageResourceLevel"
                                              }
                                             ],
                                             "class": "ImageResource"
                                            },
                                            "hfov": 12.01,
                                            "yaw": -6.68,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "pitch": 0.98
                                           }
                                          ],
                                          "enabledInCardboard": true,
                                          "areas": [
                                           {
                                            "mapColor": "#FF0000",
                                            "class": "HotspotPanoramaOverlayArea",
                                            "click": "this.startPanoramaWithCamera(this.panorama_0F84F19D_0671_6675_4191_5761B2287855, this.camera_4A803729_449C_272F_41C4_BB996F00070D); this.mainPlayList.set('selectedIndex', 18)"
                                           }
                                          ],
                                          "rollOverDisplay": false,
                                          "id": "overlay_318F2744_3C3E_48AD_41CD_20BCB5DBAA95",
                                          "class": "HotspotPanoramaOverlay",
                                          "items": [
                                           {
                                            "yaw": -6.68,
                                            "hfov": 12.01,
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 149,
                                               "width": 166,
                                               "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_21_0.png",
                                               "class": "ImageResourceLevel"
                                              }
                                             ],
                                             "class": "ImageResource"
                                            },
                                            "class": "HotspotPanoramaOverlayImage",
                                            "pitch": 0.98
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
                                               "height": 96,
                                               "width": 68,
                                               "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_22_0_0_map.gif",
                                               "class": "ImageResourceLevel"
                                              }
                                             ],
                                             "class": "ImageResource"
                                            },
                                            "hfov": 9.82,
                                            "yaw": 87.82,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "pitch": -4.77
                                           }
                                          ],
                                          "enabledInCardboard": true,
                                          "areas": [
                                           {
                                            "mapColor": "#FF0000",
                                            "class": "HotspotPanoramaOverlayArea",
                                            "click": "this.startPanoramaWithCamera(this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67, this.camera_4A8AC71A_449C_38ED_41D0_A18EEC1B0579); this.mainPlayList.set('selectedIndex', 21)"
                                           }
                                          ],
                                          "rollOverDisplay": false,
                                          "id": "overlay_31A91C84_3C3D_D9AD_41C5_CD5CBB0A6D17",
                                          "class": "HotspotPanoramaOverlay",
                                          "items": [
                                           {
                                            "yaw": 87.82,
                                            "hfov": 9.82,
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 192,
                                               "width": 136,
                                               "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_22_0.png",
                                               "class": "ImageResourceLevel"
                                              }
                                             ],
                                             "class": "ImageResource"
                                            },
                                            "class": "HotspotPanoramaOverlayImage",
                                            "pitch": -4.77
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
                                           "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_hq.jpeg",
                                           "class": "ImageResourceLevel"
                                          },
                                          {
                                           "height": 1608,
                                           "width": 3217,
                                           "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894.jpeg",
                                           "class": "ImageResourceLevel"
                                          }
                                         ],
                                         "class": "ImageResource"
                                        }
                                       }
                                      ],
                                      "adjacentPanoramas": [
                                       {
                                        "panorama": {
                                         "frames": [
                                          {
                                           "thumbnailUrl": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_t.jpg",
                                           "overlays": [
                                            {
                                             "useHandCursor": true,
                                             "maps": [
                                              {
                                               "image": {
                                                "levels": [
                                                 {
                                                  "height": 16,
                                                  "width": 22,
                                                  "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_1_0_map.gif",
                                                  "class": "ImageResourceLevel"
                                                 }
                                                ],
                                                "class": "ImageResource"
                                               },
                                               "hfov": 8.18,
                                               "yaw": -174.7,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "pitch": -8.9
                                              }
                                             ],
                                             "enabledInCardboard": true,
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000"
                                              }
                                             ],
                                             "rollOverDisplay": false,
                                             "id": "overlay_3619F023_078F_1C5A_419A_DDBC83BEE9D1",
                                             "class": "HotspotPanoramaOverlay",
                                             "items": [
                                              {
                                               "yaw": -174.7,
                                               "hfov": 8.18,
                                               "image": {
                                                "levels": [
                                                 {
                                                  "height": 80,
                                                  "width": 114,
                                                  "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_1_0.png",
                                                  "class": "ImageResourceLevel"
                                                 }
                                                ],
                                                "class": "ImageResource"
                                               },
                                               "class": "HotspotPanoramaOverlayImage",
                                               "pitch": -8.9
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
                                                  "height": 16,
                                                  "width": 26,
                                                  "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_3_0_map.gif",
                                                  "class": "ImageResourceLevel"
                                                 }
                                                ],
                                                "class": "ImageResource"
                                               },
                                               "hfov": 8.46,
                                               "yaw": -18.8,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "pitch": -6.24
                                              }
                                             ],
                                             "enabledInCardboard": true,
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000"
                                              }
                                             ],
                                             "rollOverDisplay": false,
                                             "id": "overlay_33FE544D_0791_24EE_4186_5CC6F6EE735D",
                                             "class": "HotspotPanoramaOverlay",
                                             "items": [
                                              {
                                               "yaw": -18.8,
                                               "hfov": 8.46,
                                               "image": {
                                                "levels": [
                                                 {
                                                  "height": 72,
                                                  "width": 118,
                                                  "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_3_0.png",
                                                  "class": "ImageResourceLevel"
                                                 }
                                                ],
                                                "class": "ImageResource"
                                               },
                                               "class": "HotspotPanoramaOverlayImage",
                                               "pitch": -6.24
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
                                                  "height": 16,
                                                  "width": 29,
                                                  "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_11_0_map.gif",
                                                  "class": "ImageResourceLevel"
                                                 }
                                                ],
                                                "class": "ImageResource"
                                               },
                                               "hfov": 6.94,
                                               "yaw": 114.19,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "pitch": -6.29
                                              }
                                             ],
                                             "enabledInCardboard": true,
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000"
                                              }
                                             ],
                                             "rollOverDisplay": false,
                                             "id": "overlay_35DB4DB5_0791_27BE_4183_7C63065DE16E",
                                             "class": "HotspotPanoramaOverlay",
                                             "items": [
                                              {
                                               "yaw": 114.19,
                                               "hfov": 6.94,
                                               "image": {
                                                "levels": [
                                                 {
                                                  "height": 52,
                                                  "width": 97,
                                                  "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_11_0.png",
                                                  "class": "ImageResourceLevel"
                                                 }
                                                ],
                                                "class": "ImageResource"
                                               },
                                               "class": "HotspotPanoramaOverlayImage",
                                               "pitch": -6.29
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
                                                  "height": 104,
                                                  "width": 76,
                                                  "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_16_0_0_map.gif",
                                                  "class": "ImageResourceLevel"
                                                 }
                                                ],
                                                "class": "ImageResource"
                                               },
                                               "hfov": 11.08,
                                               "yaw": -174.64,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "pitch": -1.2
                                              }
                                             ],
                                             "enabledInCardboard": true,
                                             "areas": [
                                              {
                                               "mapColor": "#FF0000",
                                               "class": "HotspotPanoramaOverlayArea",
                                               "click": "this.startPanoramaWithCamera(this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894, this.camera_49313687_449C_39E3_41CC_3F3FF50C566E); this.mainPlayList.set('selectedIndex', 22)"
                                              }
                                             ],
                                             "rollOverDisplay": false,
                                             "id": "overlay_3195499F_3C32_3BDA_41C9_4DAE277EAE88",
                                             "class": "HotspotPanoramaOverlay",
                                             "items": [
                                              {
                                               "yaw": -174.64,
                                               "hfov": 11.08,
                                               "image": {
                                                "levels": [
                                                 {
                                                  "height": 208,
                                                  "width": 153,
                                                  "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_16_0.png",
                                                  "class": "ImageResourceLevel"
                                                 }
                                                ],
                                                "class": "ImageResource"
                                               },
                                               "class": "HotspotPanoramaOverlayImage",
                                               "pitch": -1.2
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
                                                  "height": 64,
                                                  "width": 44,
                                                  "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_17_0_0_map.gif",
                                                  "class": "ImageResourceLevel"
                                                 }
                                                ],
                                                "class": "ImageResource"
                                               },
                                               "hfov": 6.46,
                                               "yaw": -18.92,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "pitch": -1.79
                                              }
                                             ],
                                             "enabledInCardboard": true,
                                             "areas": [
                                              {
                                               "mapColor": "#FF0000",
                                               "class": "HotspotPanoramaOverlayArea",
                                               "click": "this.startPanoramaWithCamera(this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA, this.camera_494B6697_449C_39E3_41D0_9F89A8614597); this.mainPlayList.set('selectedIndex', 6)"
                                              }
                                             ],
                                             "rollOverDisplay": false,
                                             "id": "overlay_31A28EB8_3C32_59E6_41CB_4E8D47D0B41B",
                                             "class": "HotspotPanoramaOverlay",
                                             "items": [
                                              {
                                               "yaw": -18.92,
                                               "hfov": 6.46,
                                               "image": {
                                                "levels": [
                                                 {
                                                  "height": 129,
                                                  "width": 89,
                                                  "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_17_0.png",
                                                  "class": "ImageResourceLevel"
                                                 }
                                                ],
                                                "class": "ImageResource"
                                               },
                                               "class": "HotspotPanoramaOverlayImage",
                                               "pitch": -1.79
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
                                                  "height": 67,
                                                  "width": 59,
                                                  "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_18_0_0_map.gif",
                                                  "class": "ImageResourceLevel"
                                                 }
                                                ],
                                                "class": "ImageResource"
                                               },
                                               "hfov": 8.52,
                                               "yaw": 113.51,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "pitch": -1.39
                                              }
                                             ],
                                             "enabledInCardboard": true,
                                             "areas": [
                                              {
                                               "mapColor": "#FF0000",
                                               "class": "HotspotPanoramaOverlayArea",
                                               "click": "this.startPanoramaWithCamera(this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2, this.camera_49355675_449C_3927_41B5_C7D7842B7012); this.mainPlayList.set('selectedIndex', 16)"
                                              }
                                             ],
                                             "rollOverDisplay": false,
                                             "id": "overlay_326C1794_3C32_57AE_41C8_76690F8BD429",
                                             "class": "HotspotPanoramaOverlay",
                                             "items": [
                                              {
                                               "yaw": 113.51,
                                               "hfov": 8.52,
                                               "image": {
                                                "levels": [
                                                 {
                                                  "height": 134,
                                                  "width": 118,
                                                  "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_18_0.png",
                                                  "class": "ImageResourceLevel"
                                                 }
                                                ],
                                                "class": "ImageResource"
                                               },
                                               "class": "HotspotPanoramaOverlayImage",
                                               "pitch": -1.39
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
                                              "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_hq.jpeg",
                                              "class": "ImageResourceLevel"
                                             },
                                             {
                                              "height": 1608,
                                              "width": 3217,
                                              "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397.jpeg",
                                              "class": "ImageResourceLevel"
                                             }
                                            ],
                                            "class": "ImageResource"
                                           }
                                          }
                                         ],
                                         "adjacentPanoramas": [
                                          {
                                           "panorama": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
                                           "yaw": 113.51,
                                           "class": "AdjacentPanorama",
                                           "distance": 1,
                                           "backwardYaw": -107.62
                                          },
                                          {
                                           "panorama": "this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894",
                                           "yaw": -174.64,
                                           "class": "AdjacentPanorama",
                                           "distance": 1,
                                           "backwardYaw": -172.27
                                          },
                                          {
                                           "panorama": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
                                           "yaw": -18.92,
                                           "class": "AdjacentPanorama",
                                           "distance": 1,
                                           "backwardYaw": 156.92
                                          }
                                         ],
                                         "cardboardMenu": "this.Menu_4A413582_449C_3BDD_4159_780D475F6104",
                                         "id": "panorama_0FD82345_0671_EAD5_4173_8B63686C1397",
                                         "pitch": 0,
                                         "thumbnailUrl": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_t.jpg",
                                         "mapLocations": [
                                          {
                                           "x": 628.49,
                                           "class": "PanoramaMapLocation",
                                           "y": 310.59,
                                           "angle": 0,
                                           "map": "this.map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799"
                                          }
                                         ],
                                         "partial": false,
                                         "hfovMin": 60,
                                         "label": "C16",
                                         "hfovMax": 120,
                                         "hfov": 360,
                                         "class": "Panorama",
                                         "vfov": 180
                                        },
                                        "yaw": -172.27,
                                        "class": "AdjacentPanorama",
                                        "distance": 1,
                                        "backwardYaw": -174.64
                                       },
                                       {
                                        "panorama": {
                                         "frames": [
                                          {
                                           "thumbnailUrl": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_t.jpg",
                                           "overlays": [
                                            {
                                             "useHandCursor": true,
                                             "maps": [
                                              {
                                               "image": {
                                                "levels": [
                                                 {
                                                  "height": 16,
                                                  "width": 24,
                                                  "url": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_0_HS_1_0_map.gif",
                                                  "class": "ImageResourceLevel"
                                                 }
                                                ],
                                                "class": "ImageResource"
                                               },
                                               "hfov": 8.33,
                                               "yaw": 4.65,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "pitch": -12.75
                                              }
                                             ],
                                             "enabledInCardboard": true,
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000"
                                              }
                                             ],
                                             "rollOverDisplay": false,
                                             "id": "overlay_282E1707_07B3_E45A_4184_0F5F576BAFA8",
                                             "class": "HotspotPanoramaOverlay",
                                             "items": [
                                              {
                                               "yaw": 4.65,
                                               "hfov": 8.33,
                                               "image": {
                                                "levels": [
                                                 {
                                                  "height": 76,
                                                  "width": 118,
                                                  "url": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_0_HS_1_0.png",
                                                  "class": "ImageResourceLevel"
                                                 }
                                                ],
                                                "class": "ImageResource"
                                               },
                                               "class": "HotspotPanoramaOverlayImage",
                                               "pitch": -12.75
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
                                                  "height": 16,
                                                  "width": 18,
                                                  "url": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_0_HS_3_0_map.gif",
                                                  "class": "ImageResourceLevel"
                                                 }
                                                ],
                                                "class": "ImageResource"
                                               },
                                               "hfov": 8.48,
                                               "yaw": -179.12,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "pitch": -15.39
                                              }
                                             ],
                                             "enabledInCardboard": true,
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000"
                                              }
                                             ],
                                             "rollOverDisplay": false,
                                             "id": "overlay_36A27374_07B1_1CBE_4183_F00116B379C1",
                                             "class": "HotspotPanoramaOverlay",
                                             "items": [
                                              {
                                               "yaw": -179.12,
                                               "hfov": 8.48,
                                               "image": {
                                                "levels": [
                                                 {
                                                  "height": 108,
                                                  "width": 122,
                                                  "url": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_0_HS_3_0.png",
                                                  "class": "ImageResourceLevel"
                                                 }
                                                ],
                                                "class": "ImageResource"
                                               },
                                               "class": "HotspotPanoramaOverlayImage",
                                               "pitch": -15.39
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
                                                  "height": 128,
                                                  "width": 142,
                                                  "url": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_0_HS_4_0_0_map.gif",
                                                  "class": "ImageResourceLevel"
                                                 }
                                                ],
                                                "class": "ImageResource"
                                               },
                                               "hfov": 20.49,
                                               "yaw": -179.27,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "pitch": -4.42
                                              }
                                             ],
                                             "enabledInCardboard": true,
                                             "areas": [
                                              {
                                               "mapColor": "#FF0000",
                                               "class": "HotspotPanoramaOverlayArea",
                                               "click": "this.startPanoramaWithCamera(this.panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754, this.camera_4BADE909_449C_28EC_41C3_46988D696FA0); this.mainPlayList.set('selectedIndex', 20)"
                                              }
                                             ],
                                             "rollOverDisplay": false,
                                             "id": "overlay_319C20C7_3C3E_C9AA_41CD_3CE2491B7454",
                                             "class": "HotspotPanoramaOverlay",
                                             "items": [
                                              {
                                               "yaw": -179.27,
                                               "hfov": 20.49,
                                               "image": {
                                                "levels": [
                                                 {
                                                  "height": 257,
                                                  "width": 285,
                                                  "url": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_0_HS_4_0.png",
                                                  "class": "ImageResourceLevel"
                                                 }
                                                ],
                                                "class": "ImageResource"
                                               },
                                               "class": "HotspotPanoramaOverlayImage",
                                               "pitch": -4.42
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
                                                  "height": 129,
                                                  "width": 78,
                                                  "url": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_0_HS_5_0_0_map.gif",
                                                  "class": "ImageResourceLevel"
                                                 }
                                                ],
                                                "class": "ImageResource"
                                               },
                                               "hfov": 11.26,
                                               "yaw": 4.77,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "pitch": -4.76
                                              }
                                             ],
                                             "enabledInCardboard": true,
                                             "areas": [
                                              {
                                               "mapColor": "#FF0000",
                                               "class": "HotspotPanoramaOverlayArea",
                                               "click": "this.startPanoramaWithCamera(this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894, this.camera_4B9B18EF_449C_2924_41CB_DD1209E1EB4B); this.mainPlayList.set('selectedIndex', 22)"
                                              }
                                             ],
                                             "rollOverDisplay": false,
                                             "id": "overlay_3194C5EC_3C3E_CB7D_41C9_0F6F04D6B4CA",
                                             "class": "HotspotPanoramaOverlay",
                                             "items": [
                                              {
                                               "yaw": 4.77,
                                               "hfov": 11.26,
                                               "image": {
                                                "levels": [
                                                 {
                                                  "height": 259,
                                                  "width": 156,
                                                  "url": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_0_HS_5_0.png",
                                                  "class": "ImageResourceLevel"
                                                 }
                                                ],
                                                "class": "ImageResource"
                                               },
                                               "class": "HotspotPanoramaOverlayImage",
                                               "pitch": -4.76
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
                                              "url": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_hq.jpeg",
                                              "class": "ImageResourceLevel"
                                             },
                                             {
                                              "height": 1608,
                                              "width": 3217,
                                              "url": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67.jpeg",
                                              "class": "ImageResourceLevel"
                                             }
                                            ],
                                            "class": "ImageResource"
                                           }
                                          }
                                         ],
                                         "adjacentPanoramas": [
                                          {
                                           "panorama": "this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894",
                                           "yaw": 4.77,
                                           "class": "AdjacentPanorama",
                                           "distance": 1,
                                           "backwardYaw": 87.82
                                          },
                                          {
                                           "panorama": {
                                            "frames": [
                                             {
                                              "thumbnailUrl": "media/panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_t.jpg",
                                              "overlays": [
                                               {
                                                "useHandCursor": true,
                                                "maps": [
                                                 {
                                                  "image": {
                                                   "levels": [
                                                    {
                                                     "height": 16,
                                                     "width": 22,
                                                     "url": "media/panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_0_HS_1_0_map.gif",
                                                     "class": "ImageResourceLevel"
                                                    }
                                                   ],
                                                   "class": "ImageResource"
                                                  },
                                                  "hfov": 9.76,
                                                  "yaw": -178.49,
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "pitch": -22.3
                                                 }
                                                ],
                                                "enabledInCardboard": true,
                                                "areas": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "mapColor": "#FF0000"
                                                 }
                                                ],
                                                "rollOverDisplay": false,
                                                "id": "overlay_36D89562_07B1_24DA_4181_B5F7392CD10A",
                                                "class": "HotspotPanoramaOverlay",
                                                "items": [
                                                 {
                                                  "yaw": -178.49,
                                                  "hfov": 9.76,
                                                  "image": {
                                                   "levels": [
                                                    {
                                                     "height": 104,
                                                     "width": 146,
                                                     "url": "media/panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_0_HS_1_0.png",
                                                     "class": "ImageResourceLevel"
                                                    }
                                                   ],
                                                   "class": "ImageResource"
                                                  },
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "pitch": -22.3
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
                                                     "height": 187,
                                                     "width": 151,
                                                     "url": "media/panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_0_HS_2_0_0_map.gif",
                                                     "class": "ImageResourceLevel"
                                                    }
                                                   ],
                                                   "class": "ImageResource"
                                                  },
                                                  "hfov": 21.31,
                                                  "yaw": -179.93,
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "pitch": -11.43
                                                 }
                                                ],
                                                "enabledInCardboard": true,
                                                "areas": [
                                                 {
                                                  "mapColor": "#FF0000",
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "click": "this.startPanoramaWithCamera(this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67, this.camera_49258644_449C_3964_41A5_C810430B5E60); this.mainPlayList.set('selectedIndex', 21)"
                                                 }
                                                ],
                                                "rollOverDisplay": false,
                                                "id": "overlay_3189D767_3C3E_576B_41B9_B7E24D9E032C",
                                                "class": "HotspotPanoramaOverlay",
                                                "items": [
                                                 {
                                                  "yaw": -179.93,
                                                  "hfov": 21.31,
                                                  "image": {
                                                   "levels": [
                                                    {
                                                     "height": 375,
                                                     "width": 302,
                                                     "url": "media/panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_0_HS_2_0.png",
                                                     "class": "ImageResourceLevel"
                                                    }
                                                   ],
                                                   "class": "ImageResource"
                                                  },
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "pitch": -11.43
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
                                                 "url": "media/panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_hq.jpeg",
                                                 "class": "ImageResourceLevel"
                                                },
                                                {
                                                 "height": 1608,
                                                 "width": 3217,
                                                 "url": "media/panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754.jpeg",
                                                 "class": "ImageResourceLevel"
                                                }
                                               ],
                                               "class": "ImageResource"
                                              }
                                             }
                                            ],
                                            "adjacentPanoramas": [
                                             {
                                              "panorama": "this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67",
                                              "yaw": -179.93,
                                              "class": "AdjacentPanorama",
                                              "distance": 1,
                                              "backwardYaw": -179.27
                                             }
                                            ],
                                            "cardboardMenu": "this.Menu_4A413582_449C_3BDD_4159_780D475F6104",
                                            "id": "panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754",
                                            "pitch": 0,
                                            "thumbnailUrl": "media/panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_t.jpg",
                                            "mapLocations": [
                                             {
                                              "x": 570.65,
                                              "class": "PanoramaMapLocation",
                                              "y": 371.77,
                                              "angle": 249.33,
                                              "map": "this.map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799"
                                             }
                                            ],
                                            "partial": false,
                                            "hfovMin": 60,
                                            "label": "C21",
                                            "hfovMax": 120,
                                            "hfov": 360,
                                            "class": "Panorama",
                                            "vfov": 180
                                           },
                                           "yaw": -179.27,
                                           "class": "AdjacentPanorama",
                                           "distance": 1,
                                           "backwardYaw": -179.93
                                          }
                                         ],
                                         "cardboardMenu": "this.Menu_4A413582_449C_3BDD_4159_780D475F6104",
                                         "id": "panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67",
                                         "pitch": 0,
                                         "thumbnailUrl": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_t.jpg",
                                         "mapLocations": [
                                          {
                                           "x": 597.76,
                                           "class": "PanoramaMapLocation",
                                           "y": 356.03,
                                           "angle": 71.57,
                                           "map": "this.map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799"
                                          }
                                         ],
                                         "partial": false,
                                         "hfovMin": 60,
                                         "label": "C22",
                                         "hfovMax": 120,
                                         "hfov": 360,
                                         "class": "Panorama",
                                         "vfov": 180
                                        },
                                        "yaw": 87.82,
                                        "class": "AdjacentPanorama",
                                        "distance": 1,
                                        "backwardYaw": 4.77
                                       },
                                       {
                                        "panorama": "this.panorama_0F84F19D_0671_6675_4191_5761B2287855",
                                        "yaw": -6.68,
                                        "class": "AdjacentPanorama",
                                        "distance": 1,
                                        "backwardYaw": -53.03
                                       }
                                      ],
                                      "cardboardMenu": "this.Menu_4A413582_449C_3BDD_4159_780D475F6104",
                                      "id": "panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894",
                                      "pitch": 0,
                                      "thumbnailUrl": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_t.jpg",
                                      "mapLocations": [
                                       {
                                        "x": 636.99,
                                        "class": "PanoramaMapLocation",
                                        "y": 342.51,
                                        "angle": 144.87,
                                        "map": "this.map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799"
                                       }
                                      ],
                                      "partial": false,
                                      "hfovMin": 60,
                                      "label": "C23",
                                      "hfovMax": 120,
                                      "hfov": 360,
                                      "class": "Panorama",
                                      "vfov": 180
                                     },
                                     "yaw": -53.03,
                                     "class": "AdjacentPanorama",
                                     "distance": 1,
                                     "backwardYaw": -6.68
                                    },
                                    {
                                     "panorama": "this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC",
                                     "yaw": 24.89,
                                     "class": "AdjacentPanorama",
                                     "distance": 1,
                                     "backwardYaw": 7.69
                                    }
                                   ],
                                   "cardboardMenu": "this.Menu_4A413582_449C_3BDD_4159_780D475F6104",
                                   "id": "panorama_0F84F19D_0671_6675_4191_5761B2287855",
                                   "pitch": 0,
                                   "thumbnailUrl": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_t.jpg",
                                   "mapLocations": [
                                    {
                                     "x": 670.6,
                                     "class": "PanoramaMapLocation",
                                     "y": 386.76,
                                     "angle": 0,
                                     "map": "this.map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799"
                                    }
                                   ],
                                   "partial": false,
                                   "hfovMin": 60,
                                   "label": "C19",
                                   "hfovMax": 120,
                                   "hfov": 360,
                                   "class": "Panorama",
                                   "vfov": 180
                                  },
                                  "yaw": 7.69,
                                  "class": "AdjacentPanorama",
                                  "distance": 1,
                                  "backwardYaw": 24.89
                                 }
                                ],
                                "cardboardMenu": "this.Menu_4A413582_449C_3BDD_4159_780D475F6104",
                                "id": "panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC",
                                "pitch": 0,
                                "thumbnailUrl": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_t.jpg",
                                "mapLocations": [
                                 {
                                  "x": 674.74,
                                  "class": "PanoramaMapLocation",
                                  "y": 343.99,
                                  "angle": 163.35,
                                  "map": "this.map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799"
                                 }
                                ],
                                "partial": false,
                                "hfovMin": 60,
                                "label": "C18",
                                "hfovMax": 120,
                                "hfov": 360,
                                "class": "Panorama",
                                "vfov": 180
                               },
                               "yaw": 152.96,
                               "class": "AdjacentPanorama",
                               "distance": 1,
                               "backwardYaw": -143.45
                              },
                              {
                               "panorama": "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397",
                               "yaw": -107.62,
                               "class": "AdjacentPanorama",
                               "distance": 1,
                               "backwardYaw": 113.51
                              }
                             ],
                             "cardboardMenu": "this.Menu_4A413582_449C_3BDD_4159_780D475F6104",
                             "id": "panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
                             "pitch": 0,
                             "thumbnailUrl": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_t.jpg",
                             "mapLocations": [
                              {
                               "x": 676.22,
                               "class": "PanoramaMapLocation",
                               "y": 316.87,
                               "angle": 0,
                               "map": "this.map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799"
                              }
                             ],
                             "partial": false,
                             "hfovMin": 60,
                             "label": "C17",
                             "hfovMax": 120,
                             "hfov": 360,
                             "class": "Panorama",
                             "vfov": 180
                            },
                            "yaw": 81.58,
                            "class": "AdjacentPanorama",
                            "distance": 1,
                            "backwardYaw": 25.67
                           },
                           {
                            "panorama": "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F",
                            "yaw": -143.14,
                            "class": "AdjacentPanorama",
                            "distance": 1,
                            "backwardYaw": -42.13
                           },
                           {
                            "panorama": {
                             "frames": [
                              {
                               "thumbnailUrl": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_t.jpg",
                               "overlays": [
                                {
                                 "useHandCursor": true,
                                 "maps": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 16,
                                      "width": 22,
                                      "url": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_0_HS_1_0_map.gif",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "hfov": 11.36,
                                   "yaw": -1.13,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": -10.61
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "rollOverDisplay": false,
                                 "id": "overlay_1B81FB3A_0691_6CAA_4185_C2AB290A08A0",
                                 "class": "HotspotPanoramaOverlay",
                                 "items": [
                                  {
                                   "yaw": -1.13,
                                   "hfov": 11.36,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 115,
                                      "width": 160,
                                      "url": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_0_HS_1_0.png",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "class": "HotspotPanoramaOverlayImage",
                                   "pitch": -10.61
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
                                      "height": 16,
                                      "width": 21,
                                      "url": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_0_HS_3_0_map.gif",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "hfov": 10.52,
                                   "yaw": 177.74,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": -17.9
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "rollOverDisplay": false,
                                 "id": "overlay_19EDC174_0671_3CBE_4196_DE5883AFB8CF",
                                 "class": "HotspotPanoramaOverlay",
                                 "items": [
                                  {
                                   "yaw": 177.74,
                                   "hfov": 10.52,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 115,
                                      "width": 153,
                                      "url": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_0_HS_3_0.png",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "class": "HotspotPanoramaOverlayImage",
                                   "pitch": -17.9
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
                                      "height": 112,
                                      "width": 79,
                                      "url": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_0_HS_4_0_0_map.gif",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "hfov": 11.41,
                                   "yaw": -0.95,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": -0.25
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53, this.camera_4BE6B96B_449C_2B23_41B1_94D54342F90B); this.mainPlayList.set('selectedIndex', 9)"
                                  }
                                 ],
                                 "rollOverDisplay": false,
                                 "id": "overlay_31B10D7A_3C32_DB5A_41A1_B6DFD3B7AB9B",
                                 "class": "HotspotPanoramaOverlay",
                                 "items": [
                                  {
                                   "yaw": -0.95,
                                   "hfov": 11.41,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 225,
                                      "width": 158,
                                      "url": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_0_HS_4_0.png",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "class": "HotspotPanoramaOverlayImage",
                                   "pitch": -0.25
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
                                      "height": 98,
                                      "width": 125,
                                      "url": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_0_HS_5_0_0_map.gif",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "hfov": 17.82,
                                   "yaw": 177.7,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": -8.29
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E, this.camera_4BFBB97A_449C_2B2D_418B_61798F28836C); this.mainPlayList.set('selectedIndex', 11)"
                                  }
                                 ],
                                 "rollOverDisplay": false,
                                 "id": "overlay_31A10589_3C32_CBA6_41B4_4595385EB844",
                                 "class": "HotspotPanoramaOverlay",
                                 "items": [
                                  {
                                   "yaw": 177.7,
                                   "hfov": 17.82,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 197,
                                      "width": 250,
                                      "url": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_0_HS_5_0.png",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "class": "HotspotPanoramaOverlayImage",
                                   "pitch": -8.29
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
                                  "url": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_hq.jpeg",
                                  "class": "ImageResourceLevel"
                                 },
                                 {
                                  "height": 1608,
                                  "width": 3217,
                                  "url": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2.jpeg",
                                  "class": "ImageResourceLevel"
                                 }
                                ],
                                "class": "ImageResource"
                               }
                              }
                             ],
                             "adjacentPanoramas": [
                              {
                               "panorama": "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
                               "yaw": -0.95,
                               "class": "AdjacentPanorama",
                               "distance": 1,
                               "backwardYaw": -0.88
                              },
                              {
                               "panorama": {
                                "frames": [
                                 {
                                  "thumbnailUrl": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_t.jpg",
                                  "overlays": [
                                   {
                                    "useHandCursor": true,
                                    "maps": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 16,
                                         "width": 23,
                                         "url": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_0_HS_1_0_map.gif",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "hfov": 10.83,
                                      "yaw": -0.12,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "pitch": -13.62
                                     }
                                    ],
                                    "enabledInCardboard": true,
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000"
                                     }
                                    ],
                                    "rollOverDisplay": false,
                                    "id": "overlay_1B0FFE2E_0673_24AA_4193_33375BC7C00A",
                                    "class": "HotspotPanoramaOverlay",
                                    "items": [
                                     {
                                      "yaw": -0.12,
                                      "hfov": 10.83,
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 104,
                                         "width": 154,
                                         "url": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_0_HS_1_0.png",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "class": "HotspotPanoramaOverlayImage",
                                      "pitch": -13.62
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
                                         "height": 16,
                                         "width": 21,
                                         "url": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_0_HS_3_0_map.gif",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "hfov": 10.33,
                                      "yaw": -177.02,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "pitch": -21.2
                                     }
                                    ],
                                    "enabledInCardboard": true,
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000"
                                     }
                                    ],
                                    "rollOverDisplay": false,
                                    "id": "overlay_27CC6293_0671_3C7B_419A_6F5AB828C77E",
                                    "class": "HotspotPanoramaOverlay",
                                    "items": [
                                     {
                                      "yaw": -177.02,
                                      "hfov": 10.33,
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 113,
                                         "width": 153,
                                         "url": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_0_HS_3_0.png",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "class": "HotspotPanoramaOverlayImage",
                                      "pitch": -21.2
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
                                         "height": 94,
                                         "width": 76,
                                         "url": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_0_HS_4_0_0_map.gif",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "hfov": 10.93,
                                      "yaw": 0.03,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "pitch": -5.02
                                     }
                                    ],
                                    "enabledInCardboard": true,
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "class": "HotspotPanoramaOverlayArea",
                                      "click": "this.startPanoramaWithCamera(this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2, this.camera_4AAC7746_449C_2765_41CB_F42959000EE1); this.mainPlayList.set('selectedIndex', 10)"
                                     }
                                    ],
                                    "rollOverDisplay": false,
                                    "id": "overlay_31BBE3A6_3C33_CFED_41C6_0527EAB56766",
                                    "class": "HotspotPanoramaOverlay",
                                    "items": [
                                     {
                                      "yaw": 0.03,
                                      "hfov": 10.93,
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 189,
                                         "width": 152,
                                         "url": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_0_HS_4_0.png",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "class": "HotspotPanoramaOverlayImage",
                                      "pitch": -5.02
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
                                         "height": 112,
                                         "width": 89,
                                         "url": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_0_HS_5_0_0_map.gif",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "hfov": 12.62,
                                      "yaw": -178.02,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "pitch": -10.03
                                     }
                                    ],
                                    "enabledInCardboard": true,
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "class": "HotspotPanoramaOverlayArea",
                                      "click": "this.startPanoramaWithCamera(this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778, this.camera_4A99D738_449C_272D_41B5_4866E75269BB); this.mainPlayList.set('selectedIndex', 12)"
                                     }
                                    ],
                                    "rollOverDisplay": false,
                                    "id": "overlay_31BBF526_3C33_C8ED_41CC_EDB14C8AC409",
                                    "class": "HotspotPanoramaOverlay",
                                    "items": [
                                     {
                                      "yaw": -178.02,
                                      "hfov": 12.62,
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 224,
                                         "width": 178,
                                         "url": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_0_HS_5_0.png",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "class": "HotspotPanoramaOverlayImage",
                                      "pitch": -10.03
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
                                     "url": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_hq.jpeg",
                                     "class": "ImageResourceLevel"
                                    },
                                    {
                                     "height": 1608,
                                     "width": 3217,
                                     "url": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E.jpeg",
                                     "class": "ImageResourceLevel"
                                    }
                                   ],
                                   "class": "ImageResource"
                                  }
                                 }
                                ],
                                "adjacentPanoramas": [
                                 {
                                  "panorama": {
                                   "frames": [
                                    {
                                     "thumbnailUrl": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_t.jpg",
                                     "overlays": [
                                      {
                                       "useHandCursor": true,
                                       "maps": [
                                        {
                                         "image": {
                                          "levels": [
                                           {
                                            "height": 16,
                                            "width": 22,
                                            "url": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_0_HS_1_0_map.gif",
                                            "class": "ImageResourceLevel"
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "hfov": 11.09,
                                         "yaw": -0.63,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "pitch": -16.39
                                        }
                                       ],
                                       "enabledInCardboard": true,
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000"
                                        }
                                       ],
                                       "rollOverDisplay": false,
                                       "id": "overlay_197E9710_0677_6476_4185_152F2BE62FC4",
                                       "class": "HotspotPanoramaOverlay",
                                       "items": [
                                        {
                                         "yaw": -0.63,
                                         "hfov": 11.09,
                                         "image": {
                                          "levels": [
                                           {
                                            "height": 115,
                                            "width": 160,
                                            "url": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_0_HS_1_0.png",
                                            "class": "ImageResourceLevel"
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "class": "HotspotPanoramaOverlayImage",
                                         "pitch": -16.39
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
                                            "height": 16,
                                            "width": 20,
                                            "url": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_0_HS_3_0_map.gif",
                                            "class": "ImageResourceLevel"
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "hfov": 10.5,
                                         "yaw": -179.25,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "pitch": -18.28
                                        }
                                       ],
                                       "enabledInCardboard": true,
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000"
                                        }
                                       ],
                                       "rollOverDisplay": false,
                                       "id": "overlay_27F0BA0A_0670_EC6A_4198_E6CE799B31CB",
                                       "class": "HotspotPanoramaOverlay",
                                       "items": [
                                        {
                                         "yaw": -179.25,
                                         "hfov": 10.5,
                                         "image": {
                                          "levels": [
                                           {
                                            "height": 118,
                                            "width": 153,
                                            "url": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_0_HS_3_0.png",
                                            "class": "ImageResourceLevel"
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "class": "HotspotPanoramaOverlayImage",
                                         "pitch": -18.28
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
                                            "height": 121,
                                            "width": 100,
                                            "url": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_0_HS_4_0_0_map.gif",
                                            "class": "ImageResourceLevel"
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "hfov": 14.38,
                                         "yaw": -0.18,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "pitch": -5.9
                                        }
                                       ],
                                       "enabledInCardboard": true,
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "class": "HotspotPanoramaOverlayArea",
                                         "click": "this.startPanoramaWithCamera(this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741, this.camera_497FB6FC_449C_3925_41CF_B110C04F36B1); this.mainPlayList.set('selectedIndex', 13)"
                                        }
                                       ],
                                       "rollOverDisplay": false,
                                       "id": "overlay_31BB30F3_3C33_C96A_4188_186FB6E0302F",
                                       "class": "HotspotPanoramaOverlay",
                                       "items": [
                                        {
                                         "yaw": -0.18,
                                         "hfov": 14.38,
                                         "image": {
                                          "levels": [
                                           {
                                            "height": 242,
                                            "width": 200,
                                            "url": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_0_HS_4_0.png",
                                            "class": "ImageResourceLevel"
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "class": "HotspotPanoramaOverlayImage",
                                         "pitch": -5.9
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
                                            "height": 114,
                                            "width": 132,
                                            "url": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_0_HS_5_0_0_map.gif",
                                            "class": "ImageResourceLevel"
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "hfov": 18.94,
                                         "yaw": -178.74,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "pitch": -7.41
                                        }
                                       ],
                                       "enabledInCardboard": true,
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "class": "HotspotPanoramaOverlayArea",
                                         "click": "this.startPanoramaWithCamera(this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E, this.camera_496996E9_449C_392C_41C4_01601607492F); this.mainPlayList.set('selectedIndex', 11)"
                                        }
                                       ],
                                       "rollOverDisplay": false,
                                       "id": "overlay_31BE4255_3C32_48AF_41BF_D5F61B49D926",
                                       "class": "HotspotPanoramaOverlay",
                                       "items": [
                                        {
                                         "yaw": -178.74,
                                         "hfov": 18.94,
                                         "image": {
                                          "levels": [
                                           {
                                            "height": 228,
                                            "width": 265,
                                            "url": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_0_HS_5_0.png",
                                            "class": "ImageResourceLevel"
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "class": "HotspotPanoramaOverlayImage",
                                         "pitch": -7.41
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
                                        "url": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_hq.jpeg",
                                        "class": "ImageResourceLevel"
                                       },
                                       {
                                        "height": 1608,
                                        "width": 3217,
                                        "url": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778.jpeg",
                                        "class": "ImageResourceLevel"
                                       }
                                      ],
                                      "class": "ImageResource"
                                     }
                                    }
                                   ],
                                   "adjacentPanoramas": [
                                    {
                                     "panorama": "this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E",
                                     "yaw": -178.74,
                                     "class": "AdjacentPanorama",
                                     "distance": 1,
                                     "backwardYaw": -178.02
                                    },
                                    {
                                     "panorama": {
                                      "frames": [
                                       {
                                        "thumbnailUrl": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741_t.jpg",
                                        "overlays": [
                                         {
                                          "useHandCursor": true,
                                          "maps": [
                                           {
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 16,
                                               "width": 25,
                                               "url": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741_0_HS_1_0_map.gif",
                                               "class": "ImageResourceLevel"
                                              }
                                             ],
                                             "class": "ImageResource"
                                            },
                                            "hfov": 10.69,
                                            "yaw": 0.63,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "pitch": -14.76
                                           }
                                          ],
                                          "enabledInCardboard": true,
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000"
                                           }
                                          ],
                                          "rollOverDisplay": false,
                                          "id": "overlay_257E93A3_067F_3C5A_4187_58F778D35045",
                                          "class": "HotspotPanoramaOverlay",
                                          "items": [
                                           {
                                            "yaw": 0.63,
                                            "hfov": 10.69,
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 97,
                                               "width": 153,
                                               "url": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741_0_HS_1_0.png",
                                               "class": "ImageResourceLevel"
                                              }
                                             ],
                                             "class": "ImageResource"
                                            },
                                            "class": "HotspotPanoramaOverlayImage",
                                            "pitch": -14.76
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
                                               "height": 16,
                                               "width": 25,
                                               "url": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741_0_HS_3_0_map.gif",
                                               "class": "ImageResourceLevel"
                                              }
                                             ],
                                             "class": "ImageResource"
                                            },
                                            "hfov": 10.61,
                                            "yaw": -177.99,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "pitch": -16.27
                                           }
                                          ],
                                          "enabledInCardboard": true,
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000"
                                           }
                                          ],
                                          "rollOverDisplay": false,
                                          "id": "overlay_26FD3107_0671_7C5A_4196_ED67E7BBC774",
                                          "class": "HotspotPanoramaOverlay",
                                          "items": [
                                           {
                                            "yaw": -177.99,
                                            "hfov": 10.61,
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 97,
                                               "width": 153,
                                               "url": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741_0_HS_3_0.png",
                                               "class": "ImageResourceLevel"
                                              }
                                             ],
                                             "class": "ImageResource"
                                            },
                                            "class": "HotspotPanoramaOverlayImage",
                                            "pitch": -16.27
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
                                               "height": 166,
                                               "width": 147,
                                               "url": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741_0_HS_4_0_0_map.gif",
                                               "class": "ImageResourceLevel"
                                              }
                                             ],
                                             "class": "ImageResource"
                                            },
                                            "hfov": 21.2,
                                            "yaw": -178.42,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "pitch": -3.64
                                           }
                                          ],
                                          "enabledInCardboard": true,
                                          "areas": [
                                           {
                                            "mapColor": "#FF0000",
                                            "class": "HotspotPanoramaOverlayArea",
                                            "click": "this.startPanoramaWithCamera(this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778, this.camera_4A6BB5BB_449C_3B23_4178_89A51E5C81FB); this.mainPlayList.set('selectedIndex', 12)"
                                           }
                                          ],
                                          "rollOverDisplay": false,
                                          "id": "overlay_31B80EA2_3C32_79EA_41CD_2CA7EF8ADC1D",
                                          "class": "HotspotPanoramaOverlay",
                                          "items": [
                                           {
                                            "yaw": -178.42,
                                            "hfov": 21.2,
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 333,
                                               "width": 295,
                                               "url": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741_0_HS_4_0.png",
                                               "class": "ImageResourceLevel"
                                              }
                                             ],
                                             "class": "ImageResource"
                                            },
                                            "class": "HotspotPanoramaOverlayImage",
                                            "pitch": -3.64
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
                                               "height": 171,
                                               "width": 116,
                                               "url": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741_0_HS_5_0_0_map.gif",
                                               "class": "ImageResourceLevel"
                                              }
                                             ],
                                             "class": "ImageResource"
                                            },
                                            "hfov": 16.77,
                                            "yaw": -0.27,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "pitch": -3.52
                                           }
                                          ],
                                          "enabledInCardboard": true,
                                          "areas": [
                                           {
                                            "mapColor": "#FF0000",
                                            "class": "HotspotPanoramaOverlayArea",
                                            "click": "this.startPanoramaWithCamera(this.panorama_0FC77285_0671_EA55_418C_E84406FDB1AC, this.camera_4A60F5CC_449C_3B65_41B0_31257C091004); this.mainPlayList.set('selectedIndex', 14)"
                                           }
                                          ],
                                          "rollOverDisplay": false,
                                          "id": "overlay_31BE0D81_3C32_5BA6_41B7_6DFB73181369",
                                          "class": "HotspotPanoramaOverlay",
                                          "items": [
                                           {
                                            "yaw": -0.27,
                                            "hfov": 16.77,
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 343,
                                               "width": 233,
                                               "url": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741_0_HS_5_0.png",
                                               "class": "ImageResourceLevel"
                                              }
                                             ],
                                             "class": "ImageResource"
                                            },
                                            "class": "HotspotPanoramaOverlayImage",
                                            "pitch": -3.52
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
                                           "url": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741_hq.jpeg",
                                           "class": "ImageResourceLevel"
                                          },
                                          {
                                           "height": 1608,
                                           "width": 3217,
                                           "url": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741.jpeg",
                                           "class": "ImageResourceLevel"
                                          }
                                         ],
                                         "class": "ImageResource"
                                        }
                                       }
                                      ],
                                      "adjacentPanoramas": [
                                       {
                                        "panorama": "this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778",
                                        "yaw": -178.42,
                                        "class": "AdjacentPanorama",
                                        "distance": 1,
                                        "backwardYaw": -0.18
                                       },
                                       {
                                        "panorama": {
                                         "frames": [
                                          {
                                           "thumbnailUrl": "media/panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_t.jpg",
                                           "overlays": [
                                            {
                                             "useHandCursor": true,
                                             "maps": [
                                              {
                                               "image": {
                                                "levels": [
                                                 {
                                                  "height": 16,
                                                  "width": 20,
                                                  "url": "media/panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_0_HS_1_0_map.gif",
                                                  "class": "ImageResourceLevel"
                                                 }
                                                ],
                                                "class": "ImageResource"
                                               },
                                               "hfov": 10.93,
                                               "yaw": 0.25,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "pitch": -14.76
                                              }
                                             ],
                                             "enabledInCardboard": true,
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000"
                                              }
                                             ],
                                             "rollOverDisplay": false,
                                             "id": "overlay_26A0F6B7_0673_E5BA_4197_F90E8A3A011E",
                                             "class": "HotspotPanoramaOverlay",
                                             "items": [
                                              {
                                               "yaw": 0.25,
                                               "hfov": 10.93,
                                               "image": {
                                                "levels": [
                                                 {
                                                  "height": 125,
                                                  "width": 157,
                                                  "url": "media/panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_0_HS_1_0.png",
                                                  "class": "ImageResourceLevel"
                                                 }
                                                ],
                                                "class": "ImageResource"
                                               },
                                               "class": "HotspotPanoramaOverlayImage",
                                               "pitch": -14.76
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
                                                  "height": 122,
                                                  "width": 123,
                                                  "url": "media/panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_0_HS_2_0_0_map.gif",
                                                  "class": "ImageResourceLevel"
                                                 }
                                                ],
                                                "class": "ImageResource"
                                               },
                                               "hfov": 17.81,
                                               "yaw": 0.25,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "pitch": -3.27
                                              }
                                             ],
                                             "enabledInCardboard": true,
                                             "areas": [
                                              {
                                               "mapColor": "#FF0000",
                                               "class": "HotspotPanoramaOverlayArea",
                                               "click": "this.startPanoramaWithCamera(this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741, this.camera_4B86F8D5_449C_2964_41BC_81ED8179F79E); this.mainPlayList.set('selectedIndex', 13)"
                                              }
                                             ],
                                             "rollOverDisplay": false,
                                             "id": "overlay_31A78791_3C32_D7A7_419E_CA932C83A3E7",
                                             "class": "HotspotPanoramaOverlay",
                                             "items": [
                                              {
                                               "yaw": 0.25,
                                               "hfov": 17.81,
                                               "image": {
                                                "levels": [
                                                 {
                                                  "height": 245,
                                                  "width": 247,
                                                  "url": "media/panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_0_HS_2_0.png",
                                                  "class": "ImageResourceLevel"
                                                 }
                                                ],
                                                "class": "ImageResource"
                                               },
                                               "class": "HotspotPanoramaOverlayImage",
                                               "pitch": -3.27
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
                                              "url": "media/panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_hq.jpeg",
                                              "class": "ImageResourceLevel"
                                             },
                                             {
                                              "height": 1608,
                                              "width": 3217,
                                              "url": "media/panorama_0FC77285_0671_EA55_418C_E84406FDB1AC.jpeg",
                                              "class": "ImageResourceLevel"
                                             }
                                            ],
                                            "class": "ImageResource"
                                           }
                                          }
                                         ],
                                         "adjacentPanoramas": [
                                          {
                                           "panorama": "this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741",
                                           "yaw": 0.25,
                                           "class": "AdjacentPanorama",
                                           "distance": 1,
                                           "backwardYaw": -0.27
                                          }
                                         ],
                                         "cardboardMenu": "this.Menu_4A413582_449C_3BDD_4159_780D475F6104",
                                         "id": "panorama_0FC77285_0671_EA55_418C_E84406FDB1AC",
                                         "pitch": 0,
                                         "thumbnailUrl": "media/panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_t.jpg",
                                         "mapLocations": [
                                          {
                                           "x": 947.2,
                                           "class": "PanoramaMapLocation",
                                           "y": 251.93,
                                           "angle": -86.35,
                                           "map": "this.map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799"
                                          }
                                         ],
                                         "partial": false,
                                         "hfovMin": 60,
                                         "label": "C15",
                                         "hfovMax": 120,
                                         "hfov": 360,
                                         "class": "Panorama",
                                         "vfov": 180
                                        },
                                        "yaw": -0.27,
                                        "class": "AdjacentPanorama",
                                        "distance": 1,
                                        "backwardYaw": 0.25
                                       }
                                      ],
                                      "cardboardMenu": "this.Menu_4A413582_449C_3BDD_4159_780D475F6104",
                                      "id": "panorama_0F98F446_0671_2ED7_4191_DEC01556F741",
                                      "pitch": 0,
                                      "thumbnailUrl": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741_t.jpg",
                                      "mapLocations": [
                                       {
                                        "x": 898.74,
                                        "class": "PanoramaMapLocation",
                                        "y": 253.41,
                                        "angle": 88.03,
                                        "map": "this.map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799"
                                       }
                                      ],
                                      "partial": false,
                                      "hfovMin": 60,
                                      "label": "C14",
                                      "hfovMax": 120,
                                      "hfov": 360,
                                      "class": "Panorama",
                                      "vfov": 180
                                     },
                                     "yaw": -0.18,
                                     "class": "AdjacentPanorama",
                                     "distance": 1,
                                     "backwardYaw": -178.42
                                    }
                                   ],
                                   "cardboardMenu": "this.Menu_4A413582_449C_3BDD_4159_780D475F6104",
                                   "id": "panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778",
                                   "pitch": 0,
                                   "thumbnailUrl": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_t.jpg",
                                   "mapLocations": [
                                    {
                                     "x": 858.03,
                                     "class": "PanoramaMapLocation",
                                     "y": 250.53,
                                     "angle": 86.73,
                                     "map": "this.map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799"
                                    }
                                   ],
                                   "partial": false,
                                   "hfovMin": 60,
                                   "label": "C13",
                                   "hfovMax": 120,
                                   "hfov": 360,
                                   "class": "Panorama",
                                   "vfov": 180
                                  },
                                  "yaw": -178.02,
                                  "class": "AdjacentPanorama",
                                  "distance": 1,
                                  "backwardYaw": -178.74
                                 },
                                 {
                                  "panorama": "this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2",
                                  "yaw": 0.03,
                                  "class": "AdjacentPanorama",
                                  "distance": 1,
                                  "backwardYaw": 177.7
                                 }
                                ],
                                "cardboardMenu": "this.Menu_4A413582_449C_3BDD_4159_780D475F6104",
                                "id": "panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E",
                                "pitch": 0,
                                "thumbnailUrl": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_t.jpg",
                                "mapLocations": [
                                 {
                                  "x": 812.45,
                                  "class": "PanoramaMapLocation",
                                  "y": 250.53,
                                  "angle": -88.57,
                                  "map": "this.map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799"
                                 }
                                ],
                                "partial": false,
                                "hfovMin": 60,
                                "label": "C12",
                                "hfovMax": 120,
                                "hfov": 360,
                                "class": "Panorama",
                                "vfov": 180
                               },
                               "yaw": 177.7,
                               "class": "AdjacentPanorama",
                               "distance": 1,
                               "backwardYaw": 0.03
                              }
                             ],
                             "cardboardMenu": "this.Menu_4A413582_449C_3BDD_4159_780D475F6104",
                             "id": "panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2",
                             "pitch": 0,
                             "thumbnailUrl": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_t.jpg",
                             "mapLocations": [
                              {
                               "x": 747.51,
                               "class": "PanoramaMapLocation",
                               "y": 249.79,
                               "angle": -86.82,
                               "map": "this.map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799"
                              }
                             ],
                             "partial": false,
                             "hfovMin": 60,
                             "label": "C11",
                             "hfovMax": 120,
                             "hfov": 360,
                             "class": "Panorama",
                             "vfov": 180
                            },
                            "yaw": -0.88,
                            "class": "AdjacentPanorama",
                            "distance": 1,
                            "backwardYaw": -0.95
                           }
                          ],
                          "cardboardMenu": "this.Menu_4A413582_449C_3BDD_4159_780D475F6104",
                          "id": "panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
                          "pitch": 0,
                          "thumbnailUrl": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_t.jpg",
                          "mapLocations": [
                           {
                            "x": 686.27,
                            "class": "PanoramaMapLocation",
                            "y": 250.53,
                            "angle": 91.91,
                            "map": "this.map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799"
                           }
                          ],
                          "partial": false,
                          "hfovMin": 60,
                          "label": "C10",
                          "hfovMax": 120,
                          "hfov": 360,
                          "class": "Panorama",
                          "vfov": 180
                         },
                         "yaw": -42.13,
                         "class": "AdjacentPanorama",
                         "distance": 1,
                         "backwardYaw": -143.14
                        },
                        {
                         "panorama": {
                          "frames": [
                           {
                            "thumbnailUrl": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_t.jpg",
                            "overlays": [
                             {
                              "useHandCursor": true,
                              "maps": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "height": 16,
                                   "width": 23,
                                   "url": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_0_HS_7_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "hfov": 4.75,
                                "yaw": 130.1,
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": -2.92
                               }
                              ],
                              "enabledInCardboard": true,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "rollOverDisplay": false,
                              "id": "overlay_1A54EB2C_0691_2CAE_414E_FD4A85E449B8",
                              "class": "HotspotPanoramaOverlay",
                              "items": [
                               {
                                "yaw": 130.1,
                                "hfov": 4.75,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 43,
                                   "width": 64,
                                   "url": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_0_HS_7_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "class": "HotspotPanoramaOverlayImage",
                                "pitch": -2.92
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
                                   "height": 35,
                                   "width": 36,
                                   "url": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_0_HS_8_0_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "hfov": 5.41,
                                "yaw": 129.09,
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": 0.09
                               }
                              ],
                              "enabledInCardboard": true,
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F, this.camera_4BBE991D_449C_28E4_419F_D8CA0B0558FA); this.mainPlayList.set('selectedIndex', 7)"
                               }
                              ],
                              "rollOverDisplay": false,
                              "id": "overlay_31A6E59F_3C36_4BDA_41B0_1CFF384201CA",
                              "class": "HotspotPanoramaOverlay",
                              "items": [
                               {
                                "yaw": 129.09,
                                "hfov": 5.41,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 70,
                                   "width": 73,
                                   "url": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_0_HS_8_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "class": "HotspotPanoramaOverlayImage",
                                "pitch": 0.09
                               }
                              ]
                             }
                            ],
                            "class": "SphericPanoramaFrame",
                            "sphere": {
                             "levels": [
                              {
                               "height": 2450,
                               "width": 4900,
                               "url": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_hq.jpeg",
                               "class": "ImageResourceLevel"
                              },
                              {
                               "height": 1608,
                               "width": 3217,
                               "url": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82.jpeg",
                               "class": "ImageResourceLevel"
                              }
                             ],
                             "class": "ImageResource"
                            }
                           }
                          ],
                          "adjacentPanoramas": [
                           {
                            "panorama": "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F",
                            "yaw": 129.09,
                            "class": "AdjacentPanorama",
                            "distance": 1,
                            "backwardYaw": -154.28
                           }
                          ],
                          "cardboardMenu": "this.Menu_4A413582_449C_3BDD_4159_780D475F6104",
                          "id": "panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82",
                          "pitch": 0,
                          "thumbnailUrl": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_t.jpg",
                          "mapLocations": [
                           {
                            "x": 634.92,
                            "class": "PanoramaMapLocation",
                            "y": 158.55,
                            "angle": 35.54,
                            "map": "this.map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799"
                           }
                          ],
                          "partial": false,
                          "hfovMin": 60,
                          "label": "C09",
                          "hfovMax": 120,
                          "hfov": 360,
                          "class": "Panorama",
                          "vfov": 180
                         },
                         "yaw": -154.28,
                         "class": "AdjacentPanorama",
                         "distance": 1,
                         "backwardYaw": 129.09
                        },
                        {
                         "panorama": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
                         "yaw": 36.85,
                         "class": "AdjacentPanorama",
                         "distance": 1,
                         "backwardYaw": 4.74
                        }
                       ],
                       "cardboardMenu": "this.Menu_4A413582_449C_3BDD_4159_780D475F6104",
                       "id": "panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F",
                       "pitch": 0,
                       "thumbnailUrl": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_t.jpg",
                       "mapLocations": [
                        {
                         "x": 636.25,
                         "class": "PanoramaMapLocation",
                         "y": 219.13,
                         "angle": 180.55,
                         "map": "this.map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799"
                        }
                       ],
                       "partial": false,
                       "hfovMin": 60,
                       "label": "C08",
                       "hfovMax": 120,
                       "hfov": 360,
                       "class": "Panorama",
                       "vfov": 180
                      },
                      "yaw": 4.74,
                      "class": "AdjacentPanorama",
                      "distance": 1,
                      "backwardYaw": 36.85
                     },
                     {
                      "panorama": "this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4",
                      "yaw": -96.27,
                      "class": "AdjacentPanorama",
                      "distance": 1,
                      "backwardYaw": 7.93
                     },
                     {
                      "panorama": "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397",
                      "yaw": 156.92,
                      "class": "AdjacentPanorama",
                      "distance": 1,
                      "backwardYaw": -18.92
                     }
                    ],
                    "cardboardMenu": "this.Menu_4A413582_449C_3BDD_4159_780D475F6104",
                    "id": "panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
                    "pitch": 0,
                    "thumbnailUrl": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_t.jpg",
                    "mapLocations": [
                     {
                      "x": 585.64,
                      "class": "PanoramaMapLocation",
                      "y": 256.29,
                      "angle": 41.19,
                      "map": "this.map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799"
                     }
                    ],
                    "partial": false,
                    "hfovMin": 60,
                    "label": "C07",
                    "hfovMax": 120,
                    "hfov": 360,
                    "class": "Panorama",
                    "vfov": 180
                   },
                   "yaw": 7.93,
                   "class": "AdjacentPanorama",
                   "distance": 1,
                   "backwardYaw": -96.27
                  }
                 ],
                 "cardboardMenu": "this.Menu_4A413582_449C_3BDD_4159_780D475F6104",
                 "id": "panorama_0FDA2779_0673_2ABD_418B_39A919E068D4",
                 "pitch": 0,
                 "thumbnailUrl": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_t.jpg",
                 "mapLocations": [
                  {
                   "x": 547.15,
                   "class": "PanoramaMapLocation",
                   "y": 228.44,
                   "angle": 109.18,
                   "map": "this.map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799"
                  }
                 ],
                 "partial": false,
                 "hfovMin": 60,
                 "label": "C06",
                 "hfovMax": 120,
                 "hfov": 360,
                 "class": "Panorama",
                 "vfov": 180
                },
                "yaw": -179.87,
                "class": "AdjacentPanorama",
                "distance": 1,
                "backwardYaw": -178.55
               },
               {
                "panorama": "this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24",
                "yaw": -2.69,
                "class": "AdjacentPanorama",
                "distance": 1,
                "backwardYaw": -2.21
               }
              ],
              "cardboardMenu": "this.Menu_4A413582_449C_3BDD_4159_780D475F6104",
              "id": "panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA",
              "pitch": 0,
              "thumbnailUrl": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_t.jpg",
              "mapLocations": [
               {
                "x": 513.69,
                "class": "PanoramaMapLocation",
                "y": 214.18,
                "angle": -68.2,
                "map": "this.map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799"
               }
              ],
              "partial": false,
              "hfovMin": 60,
              "label": "C05",
              "hfovMax": 120,
              "hfov": 360,
              "class": "Panorama",
              "vfov": 180
             },
             "yaw": -2.21,
             "class": "AdjacentPanorama",
             "distance": 1,
             "backwardYaw": -2.69
            },
            {
             "panorama": "this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544",
             "yaw": -179.28,
             "class": "AdjacentPanorama",
             "distance": 1,
             "backwardYaw": -177.99
            }
           ],
           "cardboardMenu": "this.Menu_4A413582_449C_3BDD_4159_780D475F6104",
           "id": "panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24",
           "pitch": 0,
           "thumbnailUrl": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_t.jpg",
           "mapLocations": [
            {
             "x": 453.77,
             "class": "PanoramaMapLocation",
             "y": 194.9,
             "angle": 107.74,
             "map": "this.map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799"
            }
           ],
           "partial": false,
           "hfovMin": 60,
           "label": "C04",
           "hfovMax": 120,
           "hfov": 360,
           "class": "Panorama",
           "vfov": 180
          },
          "yaw": -177.99,
          "class": "AdjacentPanorama",
          "distance": 1,
          "backwardYaw": -179.28
         },
         {
          "panorama": "this.panorama_0FD85D6E_0673_DED7_40FD_D23817113C40",
          "yaw": 0.35,
          "class": "AdjacentPanorama",
          "distance": 1,
          "backwardYaw": 0.64
         }
        ],
        "cardboardMenu": "this.Menu_4A413582_449C_3BDD_4159_780D475F6104",
        "id": "panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544",
        "pitch": 0,
        "thumbnailUrl": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_t.jpg",
        "mapLocations": [
         {
          "x": 403.09,
          "class": "PanoramaMapLocation",
          "y": 172.15,
          "angle": -70.14,
          "map": "this.map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799"
         }
        ],
        "partial": false,
        "hfovMin": 60,
        "label": "C03",
        "hfovMax": 120,
        "hfov": 360,
        "class": "Panorama",
        "vfov": 180
       },
       "yaw": 0.64,
       "class": "AdjacentPanorama",
       "distance": 1,
       "backwardYaw": 0.35
      },
      {
       "panorama": "this.panorama_0C5F0BFE_0673_59B7_4157_C15F289CED2D",
       "yaw": -179.67,
       "class": "AdjacentPanorama",
       "distance": 1,
       "backwardYaw": 1.46
      }
     ],
     "cardboardMenu": "this.Menu_4A413582_449C_3BDD_4159_780D475F6104",
     "id": "panorama_0FD85D6E_0673_DED7_40FD_D23817113C40",
     "pitch": 0,
     "thumbnailUrl": "media/panorama_0FD85D6E_0673_DED7_40FD_D23817113C40_t.jpg",
     "mapLocations": [
      {
       "x": 356.03,
       "class": "PanoramaMapLocation",
       "y": 152.86,
       "angle": 108.43,
       "map": "this.map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799"
      }
     ],
     "partial": false,
     "hfovMin": 60,
     "label": "C02",
     "hfovMax": 120,
     "hfov": 360,
     "class": "Panorama",
     "vfov": 180
    },
    "yaw": 1.46,
    "class": "AdjacentPanorama",
    "distance": 1,
    "backwardYaw": -179.67
   }
  ],
  "cardboardMenu": "this.Menu_4A413582_449C_3BDD_4159_780D475F6104",
  "id": "panorama_0C5F0BFE_0673_59B7_4157_C15F289CED2D",
  "pitch": 0,
  "thumbnailUrl": "media/panorama_0C5F0BFE_0673_59B7_4157_C15F289CED2D_t.jpg",
  "mapLocations": [
   {
    "x": 311.43,
    "class": "PanoramaMapLocation",
    "y": 133.97,
    "angle": 111.8,
    "map": "this.map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799"
   }
  ],
  "partial": false,
  "hfovMin": 60,
  "label": "C01",
  "hfovMax": 120,
  "hfov": 360,
  "class": "Panorama",
  "vfov": 180
 },
 {
  "gyroscopeEnabled": true,
  "id": "MainViewerPanoramaPlayer",
  "viewerArea": "this.MainViewer",
  "gyroscopeVerticalDraggingEnabled": true,
  "displayPlaybackBar": true,
  "preloadEnabled": false,
  "mouseControlMode": "drag_acceleration",
  "class": "PanoramaPlayer",
  "touchControlMode": "drag_rotation"
 },
 {
  "movementMode": "constrained",
  "id": "MapViewerMapPlayer",
  "class": "MapPlayer",
  "viewerArea": {
   "paddingRight": 0,
   "progressBarBackgroundColorDirection": "vertical",
   "paddingLeft": 0,
   "progressBackgroundColor": [
    "#FFFFFF"
   ],
   "progressBorderRadius": 0,
   "borderRadius": 10,
   "playbackBarOpacity": 1,
   "progressRight": 0,
   "toolTipBorderSize": 1,
   "playbackBarBackgroundColor": [
    "#FFFFFF"
   ],
   "playbackBarProgressBackgroundColorDirection": "vertical",
   "playbackBarHeight": 10,
   "toolTipShadowOpacity": 1,
   "toolTipOpacity": 1,
   "toolTipFontWeight": "normal",
   "progressBarOpacity": 1,
   "toolTipBackgroundColor": "#F6F6F6",
   "shadow": false,
   "playbackBarHeadWidth": 6,
   "playbackBarBorderColor": "#FFFFFF",
   "toolTipShadowVerticalLength": 0,
   "class": "ViewerArea",
   "toolTipFontStyle": "normal",
   "playbackBarBackgroundColorDirection": "vertical",
   "progressBackgroundOpacity": 1,
   "playbackBarProgressBorderSize": 0,
   "toolTipTextShadowColor": "#000000",
   "playbackBarRight": 0,
   "paddingBottom": 0,
   "progressBorderSize": 0,
   "progressBarBorderRadius": 0,
   "playbackBarHeadBackgroundColorDirection": "vertical",
   "progressBarBorderSize": 0,
   "progressHeight": 10,
   "playbackBarProgressBorderRadius": 0,
   "playbackBarHeadShadow": true,
   "paddingTop": 0,
   "transitionMode": "blending",
   "playbackBarHeadShadowVerticalLength": 0,
   "toolTipShadowSpread": 0,
   "toolTipShadowColor": "#333333",
   "toolTipShadowBlurRadius": 3,
   "minHeight": 224,
   "toolTipFontColor": "#606060",
   "playbackBarHeadBackgroundColor": [
    "#111111",
    "#666666"
   ],
   "playbackBarHeadShadowHorizontalLength": 0,
   "playbackBarBorderRadius": 0,
   "playbackBarProgressBorderColor": "#000000",
   "minWidth": 321,
   "toolTipPaddingRight": 6,
   "width": 348,
   "playbackBarHeadBorderRadius": 0,
   "height": 224,
   "toolTipTextShadowOpacity": 0,
   "progressBackgroundColorRatios": [
    0
   ],
   "playbackBarProgressOpacity": 1,
   "toolTipFontSize": 12,
   "progressLeft": 0,
   "borderSize": 0,
   "progressBottom": 2,
   "playbackBarLeft": 0,
   "playbackBarProgressBackgroundColorRatios": [
    0
   ],
   "playbackBarHeadBorderColor": "#000000",
   "toolTipPaddingLeft": 6,
   "toolTipBorderColor": "#767676",
   "playbackBarHeadHeight": 15,
   "playbackBarBackgroundOpacity": 1,
   "playbackBarHeadShadowBlurRadius": 3,
   "playbackBarBorderSize": 0,
   "playbackBarHeadBackgroundColorRatios": [
    0,
    1
   ],
   "top": 0,
   "playbackBarHeadShadowOpacity": 0.7,
   "toolTipPaddingBottom": 4,
   "playbackBarHeadBorderSize": 0,
   "toolTipBorderRadius": 3,
   "toolTipPaddingTop": 4,
   "progressBarBorderColor": "#000000",
   "id": "MapViewer",
   "toolTipTextShadowBlurRadius": 3,
   "playbackBarHeadShadowColor": "#000000",
   "playbackBarProgressBackgroundColor": [
    "#3399FF"
   ],
   "playbackBarHeadOpacity": 1,
   "progressBarBackgroundColorRatios": [
    0
   ],
   "progressBackgroundColorDirection": "vertical",
   "toolTipShadowHorizontalLength": 0,
   "left": 25,
   "playbackBarBottom": 0,
   "progressBarBackgroundColor": [
    "#3399FF"
   ],
   "toolTipFontFamily": "Arial",
   "progressBorderColor": "#000000",
   "progressOpacity": 1
  }
 },
 {
  "id": "panorama_0C5F0BFE_0673_59B7_4157_C15F289CED2D_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 "this.panorama_0FD85D6E_0673_DED7_40FD_D23817113C40",
 {
  "id": "panorama_0FD85D6E_0673_DED7_40FD_D23817113C40_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 "this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544",
 {
  "id": "panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_camera",
  "initialPosition": {
   "yaw": -175.84,
   "class": "PanoramaCameraPosition",
   "pitch": 3.87
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 "this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24",
 {
  "id": "panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 "this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA",
 {
  "id": "panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_camera",
  "initialPosition": {
   "yaw": -175.31,
   "class": "PanoramaCameraPosition",
   "pitch": -3.25
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 "this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4",
 {
  "id": "panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
 {
  "id": "panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F",
 {
  "id": "panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_camera",
  "initialPosition": {
   "yaw": -162.78,
   "class": "PanoramaCameraPosition",
   "pitch": 5.39
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 "this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82",
 {
  "id": "panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
 {
  "id": "panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 "this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2",
 {
  "id": "panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_camera",
  "initialPosition": {
   "yaw": 176.32,
   "class": "PanoramaCameraPosition",
   "pitch": -2.81
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 "this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E",
 {
  "id": "panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_camera",
  "initialPosition": {
   "yaw": -177.92,
   "class": "PanoramaCameraPosition",
   "pitch": -0.89
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 "this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778",
 {
  "id": "panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 "this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741",
 {
  "id": "panorama_0F98F446_0671_2ED7_4191_DEC01556F741_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 "this.panorama_0FC77285_0671_EA55_418C_E84406FDB1AC",
 {
  "id": "panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_camera",
  "initialPosition": {
   "yaw": -179.16,
   "class": "PanoramaCameraPosition",
   "pitch": -4.17
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397",
 {
  "id": "panorama_0FD82345_0671_EAD5_4173_8B63686C1397_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
 {
  "id": "panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 "this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC",
 {
  "id": "panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_camera",
  "initialPosition": {
   "yaw": 6.48,
   "class": "PanoramaCameraPosition",
   "pitch": 4.56
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 "this.panorama_0F84F19D_0671_6675_4191_5761B2287855",
 {
  "id": "panorama_0F84F19D_0671_6675_4191_5761B2287855_camera",
  "initialPosition": {
   "yaw": 161.16,
   "class": "PanoramaCameraPosition",
   "pitch": 2.07
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_0FDE1F49_0671_7ADD_4191_EF61FA36243D",
 {
  "id": "panorama_0FDE1F49_0671_7ADD_4191_EF61FA36243D_camera",
  "initialPosition": {
   "yaw": -10.35,
   "class": "PanoramaCameraPosition",
   "pitch": 5.96
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754",
 {
  "id": "panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_camera",
  "initialPosition": {
   "yaw": -175.58,
   "class": "PanoramaCameraPosition",
   "pitch": 2.88
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 "this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67",
 {
  "id": "panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 "this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894",
 {
  "id": "panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "mainPlayList",
  "class": "PlayList",
  "items": [
   {
    "id": "PanoramaPlayListItem_4A4B6569_449C_3B2F_41C5_439F737535E4",
    "media": "this.panorama_0C5F0BFE_0673_59B7_4157_C15F289CED2D",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_4A4B6569_449C_3B2F_41C5_439F737535E4, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0C5F0BFE_0673_59B7_4157_C15F289CED2D_camera"
   },
   {
    "id": "PanoramaPlayListItem_4A4BE56A_449C_3B2D_41BF_1C7811ADAD69",
    "media": "this.panorama_0FD85D6E_0673_DED7_40FD_D23817113C40",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_4A4BE56A_449C_3B2D_41BF_1C7811ADAD69, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FD85D6E_0673_DED7_40FD_D23817113C40_camera"
   },
   {
    "id": "PanoramaPlayListItem_4A48456A_449C_3B2D_41A1_18495B5BCADB",
    "media": "this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_4A48456A_449C_3B2D_41A1_18495B5BCADB, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_camera"
   },
   {
    "id": "PanoramaPlayListItem_4A48F56B_449C_3B23_41B6_E358FF83762E",
    "media": "this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_4A48F56B_449C_3B23_41B6_E358FF83762E, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_camera"
   },
   {
    "id": "PanoramaPlayListItem_4A49456B_449C_3B23_41C9_E38E999B521C",
    "media": "this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_4A49456B_449C_3B23_41C9_E38E999B521C, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_camera"
   },
   {
    "id": "PanoramaPlayListItem_4A49256C_449C_3B25_41CD_6502C37B90DD",
    "media": "this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_4A49256C_449C_3B25_41CD_6502C37B90DD, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_camera"
   },
   {
    "id": "PanoramaPlayListItem_4A49B572_449C_3B3D_41C1_6AACA35288B0",
    "media": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_4A49B572_449C_3B3D_41C1_6AACA35288B0, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_camera"
   },
   {
    "id": "PanoramaPlayListItem_4A460573_449C_3B23_41C3_6A26FCF53144",
    "media": "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_4A460573_449C_3B23_41C3_6A26FCF53144, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_camera"
   },
   {
    "id": "PanoramaPlayListItem_4A469573_449C_3B23_41CE_CA2354CF25D2",
    "media": "this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_4A469573_449C_3B23_41CE_CA2354CF25D2, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_camera"
   },
   {
    "id": "PanoramaPlayListItem_4A476574_449C_3B25_419B_579EB1FAB1D3",
    "media": "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_4A476574_449C_3B25_419B_579EB1FAB1D3, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_camera"
   },
   {
    "id": "PanoramaPlayListItem_4A47E575_449C_3B27_4189_629E5643A61E",
    "media": "this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_4A47E575_449C_3B27_4189_629E5643A61E, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_camera"
   },
   {
    "id": "PanoramaPlayListItem_4A447575_449C_3B27_41AA_970A68368604",
    "media": "this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_4A447575_449C_3B27_41AA_970A68368604, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_camera"
   },
   {
    "id": "PanoramaPlayListItem_4A44C576_449C_3B25_41C3_C2821F8B34C5",
    "media": "this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_4A44C576_449C_3B25_41C3_C2821F8B34C5, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_camera"
   },
   {
    "id": "PanoramaPlayListItem_4A455577_449C_3B23_41C4_FF08F6D792A3",
    "media": "this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_4A455577_449C_3B23_41C4_FF08F6D792A3, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741_camera"
   },
   {
    "id": "PanoramaPlayListItem_4A452577_449C_3B23_4198_9FA571A18CB3",
    "media": "this.panorama_0FC77285_0671_EA55_418C_E84406FDB1AC",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_4A452577_449C_3B23_4198_9FA571A18CB3, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_camera"
   },
   {
    "id": "PanoramaPlayListItem_4A45B578_449C_3B2D_41CA_F31FD21D51B9",
    "media": "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_4A45B578_449C_3B2D_41CA_F31FD21D51B9, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397_camera"
   },
   {
    "id": "PanoramaPlayListItem_4A42157E_449C_3B25_41C6_D18126C4DB39",
    "media": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_4A42157E_449C_3B25_41C6_D18126C4DB39, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_camera"
   },
   {
    "id": "PanoramaPlayListItem_4A42F57E_449C_3B25_41CD_CC1B8162CFFE",
    "media": "this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_4A42F57E_449C_3B25_41CD_CC1B8162CFFE, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_camera"
   },
   {
    "id": "PanoramaPlayListItem_4A43457F_449C_3B23_41B7_F706434F1F5B",
    "media": "this.panorama_0F84F19D_0671_6675_4191_5761B2287855",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_4A43457F_449C_3B23_41B7_F706434F1F5B, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0F84F19D_0671_6675_4191_5761B2287855_camera"
   },
   {
    "id": "PanoramaPlayListItem_4A43C57F_449C_3B23_41A9_1DFEDB881569",
    "media": "this.panorama_0FDE1F49_0671_7ADD_4191_EF61FA36243D",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_4A43C57F_449C_3B23_41A9_1DFEDB881569, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FDE1F49_0671_7ADD_4191_EF61FA36243D_camera"
   },
   {
    "id": "PanoramaPlayListItem_4A43A580_449C_3BDD_41C7_062C56D2395E",
    "media": "this.panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_4A43A580_449C_3BDD_41C7_062C56D2395E, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_camera"
   },
   {
    "id": "PanoramaPlayListItem_4A400581_449C_3BDF_41C7_1D8582B59AB9",
    "media": "this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_4A400581_449C_3BDF_41C7_1D8582B59AB9, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_camera"
   },
   {
    "id": "PanoramaPlayListItem_4A40B581_449C_3BDF_41D0_F6CE2DC5B15D",
    "media": "this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_4A40B581_449C_3BDF_41D0_F6CE2DC5B15D, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 0)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_camera"
   }
  ]
 },
 "this.map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799",
 {
  "id": "playList_4A4A3568_449C_3B2D_41CD_AF9412AB591A",
  "class": "PlayList",
  "items": [
   {
    "player": "this.MapViewerMapPlayer",
    "class": "MapPlayListItem",
    "media": "this.map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')"
   }
  ]
 },
 "this.Menu_4A413582_449C_3BDD_4159_780D475F6104",
 {
  "id": "camera_4A6BB5BB_449C_3B23_4178_89A51E5C81FB",
  "initialPosition": {
   "yaw": 179.82,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_4A60F5CC_449C_3B65_41B0_31257C091004",
  "initialPosition": {
   "yaw": -179.75,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_4A78F5E9_449C_3B2F_4197_FC21DFA2AF43",
  "initialPosition": {
   "yaw": 36.86,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_4A718603_449C_38E3_41D0_99992843D0E3",
  "initialPosition": {
   "yaw": -50.91,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_4928C633_449C_393C_41B4_1B643A4D3EEE",
  "initialPosition": {
   "yaw": -175.26,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_49258644_449C_3964_41A5_C810430B5E60",
  "initialPosition": {
   "yaw": 0.73,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_49218655_449C_3964_41CF_B6463E0ECC06",
  "initialPosition": {
   "yaw": 177.31,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_493B2665_449C_3924_41A9_9BF70CF49FF3",
  "initialPosition": {
   "yaw": 2.01,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_49355675_449C_3927_41B5_C7D7842B7012",
  "initialPosition": {
   "yaw": 72.38,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_49313687_449C_39E3_41CC_3F3FF50C566E",
  "initialPosition": {
   "yaw": 7.73,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_494B6697_449C_39E3_41D0_9F89A8614597",
  "initialPosition": {
   "yaw": -23.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_494586A8_449C_392D_41C0_97411DBAF014",
  "initialPosition": {
   "yaw": -143.15,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_495BC6B8_449C_392D_41CD_1B417E1802E3",
  "initialPosition": {
   "yaw": -172.07,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_495056CD_449C_3967_4186_03B80CA042A0",
  "initialPosition": {
   "yaw": 161.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_496996E9_449C_392C_41C4_01601607492F",
  "initialPosition": {
   "yaw": 1.98,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_497FB6FC_449C_3925_41CF_B110C04F36B1",
  "initialPosition": {
   "yaw": 1.58,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_4974070B_449C_38E3_41A3_3012A3567FC3",
  "initialPosition": {
   "yaw": 5.36,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_4A8AC71A_449C_38ED_41D0_A18EEC1B0579",
  "initialPosition": {
   "yaw": -175.23,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_4A803729_449C_272F_41C4_BB996F00070D",
  "initialPosition": {
   "yaw": 126.97,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_4A99D738_449C_272D_41B5_4866E75269BB",
  "initialPosition": {
   "yaw": 1.26,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_4AAC7746_449C_2765_41CB_F42959000EE1",
  "initialPosition": {
   "yaw": -2.3,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_4AA56755_449C_2767_41B1_467EE6C780FD",
  "initialPosition": {
   "yaw": 0.33,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_4ABA8763_449C_2723_41C6_D048DC7CC2EA",
  "initialPosition": {
   "yaw": 5.26,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_4ACF0772_449C_273D_41A1_F86CAF383E03",
  "initialPosition": {
   "yaw": 173.32,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_4AC2F781_449C_27DE_41C1_7144097C53D5",
  "initialPosition": {
   "yaw": -172.31,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_4AD77791_449C_27FF_4175_FAF8F5CF79A0",
  "initialPosition": {
   "yaw": 1.45,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_4AEB67A0_449C_27DD_41D0_77A982BCE53B",
  "initialPosition": {
   "yaw": 177.79,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_4AFE17AF_449C_2723_41D0_2BFE5173C0C8",
  "initialPosition": {
   "yaw": -27.04,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_4AF5A7BE_449C_2725_41B9_AF2B185DA039",
  "initialPosition": {
   "yaw": -155.11,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_4A06E7E5_449C_2727_4188_4B74D7EB2777",
  "initialPosition": {
   "yaw": -179.65,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_4A1D97F4_449C_2725_41A2_345C906B89E8",
  "initialPosition": {
   "yaw": -178.54,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_4A2E280F_449C_28E3_41C7_3715BB295899",
  "initialPosition": {
   "yaw": 0.13,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_4A25C828_449C_292D_41B1_9408A3AC3D94",
  "initialPosition": {
   "yaw": 83.73,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_4A36E841_449C_295F_41C6_E5F4B507E139",
  "initialPosition": {
   "yaw": 0.72,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_4A4B2856_449C_2965_41C8_2118A8370481",
  "initialPosition": {
   "yaw": -179.36,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_4A5FC86F_449C_2923_4181_44F2792D3C52",
  "initialPosition": {
   "yaw": -154.33,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_4A6E4888_449C_29ED_41BC_4D050DF3B752",
  "initialPosition": {
   "yaw": 137.87,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_4A62B89C_449C_29E5_41B1_DFA98873F611",
  "initialPosition": {
   "yaw": 179.05,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_4A77B8B5_449C_2927_41B0_2A28AA0863A0",
  "initialPosition": {
   "yaw": -14.85,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_4B86F8D5_449C_2964_41BC_81ED8179F79E",
  "initialPosition": {
   "yaw": 179.73,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_4B9B18EF_449C_2924_41CB_DD1209E1EB4B",
  "initialPosition": {
   "yaw": -92.18,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_4BADE909_449C_28EC_41C3_46988D696FA0",
  "initialPosition": {
   "yaw": 0.07,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_4BBE991D_449C_28E4_419F_D8CA0B0558FA",
  "initialPosition": {
   "yaw": 25.72,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_4BB14935_449C_2B27_41CD_2FB0B598A518",
  "initialPosition": {
   "yaw": -98.42,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_4BC3194D_449C_2B67_41BC_0951B1BD5502",
  "initialPosition": {
   "yaw": 36.55,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_4BD4395C_449C_2B65_41D1_1FF45DED96B0",
  "initialPosition": {
   "yaw": -66.49,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_4BE6B96B_449C_2B23_41B1_94D54342F90B",
  "initialPosition": {
   "yaw": 179.12,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_4BFBB97A_449C_2B2D_418B_61798F28836C",
  "initialPosition": {
   "yaw": -179.97,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
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
  "class": "PanoramaCamera"
 }
], "children": [
 {
  "paddingRight": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "paddingLeft": 0,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "progressBorderRadius": 0,
  "borderRadius": 0,
  "playbackBarOpacity": 1,
  "progressRight": 0,
  "toolTipBorderSize": 1,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarHeight": 10,
  "toolTipShadowOpacity": 1,
  "toolTipOpacity": 1,
  "toolTipFontWeight": "normal",
  "progressBarOpacity": 1,
  "toolTipBackgroundColor": "#F6F6F6",
  "shadow": false,
  "playbackBarHeadWidth": 6,
  "playbackBarBorderColor": "#FFFFFF",
  "toolTipShadowVerticalLength": 0,
  "class": "ViewerArea",
  "playbackBarProgressBorderSize": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "progressBackgroundOpacity": 1,
  "toolTipFontStyle": "normal",
  "toolTipTextShadowColor": "#000000",
  "playbackBarRight": 0,
  "paddingBottom": 0,
  "progressBorderSize": 0,
  "progressBarBorderRadius": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "progressBarBorderSize": 0,
  "progressHeight": 10,
  "playbackBarProgressBorderRadius": 0,
  "playbackBarHeadShadow": true,
  "paddingTop": 0,
  "transitionMode": "blending",
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipShadowSpread": 0,
  "toolTipShadowColor": "#333333",
  "toolTipShadowBlurRadius": 3,
  "minHeight": 50,
  "toolTipFontColor": "#606060",
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarBorderRadius": 0,
  "playbackBarProgressBorderColor": "#000000",
  "minWidth": 100,
  "toolTipPaddingRight": 6,
  "width": "100%",
  "playbackBarHeadBorderRadius": 0,
  "toolTipFontSize": 12,
  "toolTipTextShadowOpacity": 0,
  "progressBackgroundColorRatios": [
   0
  ],
  "playbackBarProgressOpacity": 1,
  "progressLeft": 0,
  "borderSize": 0,
  "progressBottom": 0,
  "playbackBarLeft": 0,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadBorderColor": "#000000",
  "toolTipPaddingLeft": 6,
  "toolTipBorderColor": "#767676",
  "playbackBarHeadHeight": 15,
  "playbackBarBackgroundOpacity": 1,
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarBorderSize": 0,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "top": 0,
  "playbackBarHeadShadowOpacity": 0.7,
  "toolTipPaddingBottom": 4,
  "playbackBarHeadBorderSize": 0,
  "toolTipBorderRadius": 3,
  "bottom": "0%",
  "progressBarBorderColor": "#000000",
  "id": "MainViewer",
  "toolTipTextShadowBlurRadius": 3,
  "toolTipPaddingTop": 4,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeadOpacity": 1,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "progressBackgroundColorDirection": "vertical",
  "playbackBarHeadShadowColor": "#000000",
  "left": 0,
  "toolTipShadowHorizontalLength": 0,
  "playbackBarBottom": 5,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "toolTipFontFamily": "Arial",
  "progressBorderColor": "#000000",
  "progressOpacity": 1
 },
 {
  "scrollBarColor": "#000000",
  "overflow": "scroll",
  "paddingRight": 0,
  "minWidth": 1,
  "scrollBarVisible": "rollOver",
  "scrollBarOpacity": 0.5,
  "width": "96.924%",
  "paddingLeft": 0,
  "height": 132.11,
  "borderRadius": 0,
  "borderSize": 0,
  "gap": 12,
  "contentOpaque": false,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "shadow": false,
  "horizontalAlign": "center",
  "class": "Container",
  "paddingBottom": 0,
  "bottom": "1.95%",
  "id": "Container_03BF4D6F_10EF_82D8_41A4_FC17EDB0E403",
  "layout": "vertical",
  "paddingTop": 0,
  "minHeight": 1,
  "backgroundOpacity": 0,
  "right": "1.51%",
  "children": [
   {
    "scrollBarColor": "#000000",
    "overflow": "scroll",
    "backgroundColorDirection": "vertical",
    "paddingRight": 0,
    "minWidth": 1,
    "scrollBarVisible": "always",
    "scrollBarOpacity": 0.5,
    "width": 314,
    "paddingLeft": 0,
    "height": 73,
    "borderRadius": 9,
    "backgroundColor": [
     "#000000",
     "#000000"
    ],
    "borderSize": 0,
    "backgroundColorRatios": [
     0,
     1
    ],
    "contentOpaque": false,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "shadow": false,
    "horizontalAlign": "center",
    "class": "Container",
    "paddingBottom": 0,
    "layout": "horizontal",
    "id": "Container_1F218FBB_3BC2_A700_4191_230DA2F5BB68",
    "gap": 12,
    "paddingTop": 0,
    "minHeight": 1,
    "backgroundOpacity": 0.59,
    "children": [
     {
      "paddingRight": 0,
      "minWidth": 1,
      "width": 42,
      "paddingLeft": 0,
      "height": 57,
      "mode": "push",
      "borderRadius": 0,
      "iconURL": "skin/IconButton_1F3C6B8A_3A42_AF00_41B0_DC4E356C5CB0.png",
      "transparencyActive": false,
      "borderSize": 0,
      "maxWidth": 42,
      "rollOverIconURL": "skin/IconButton_1F3C6B8A_3A42_AF00_41B0_DC4E356C5CB0_rollover.png",
      "shadow": false,
      "horizontalAlign": "center",
      "class": "IconButton",
      "cursor": "hand",
      "paddingBottom": 0,
      "id": "IconButton_1F3C6B8A_3A42_AF00_41B0_DC4E356C5CB0",
      "maxHeight": 57,
      "click": "this.mainPlayList.set('selectedIndex', 0)",
      "paddingTop": 0,
      "minHeight": 1,
      "backgroundOpacity": 0,
      "verticalAlign": "middle"
     },
     {
      "paddingRight": 0,
      "minWidth": 1,
      "width": 42,
      "paddingLeft": 0,
      "height": 57,
      "mode": "push",
      "borderRadius": 0,
      "iconURL": "skin/IconButton_1808CC36_3A41_E900_4183_CE565B25106A.png",
      "transparencyActive": false,
      "borderSize": 0,
      "maxWidth": 42,
      "rollOverIconURL": "skin/IconButton_1808CC36_3A41_E900_4183_CE565B25106A_rollover.png",
      "shadow": false,
      "horizontalAlign": "center",
      "class": "IconButton",
      "cursor": "hand",
      "paddingBottom": 0,
      "id": "IconButton_1808CC36_3A41_E900_4183_CE565B25106A",
      "maxHeight": 57,
      "click": "this.mainPlayList.set('selectedIndex', 2)",
      "paddingTop": 0,
      "minHeight": 1,
      "backgroundOpacity": 0,
      "verticalAlign": "middle"
     },
     {
      "paddingRight": 0,
      "minWidth": 1,
      "width": 42,
      "paddingLeft": 0,
      "height": 57,
      "mode": "push",
      "borderRadius": 0,
      "iconURL": "skin/IconButton_182B284E_3A4E_A903_41CC_2D8AB3BD11BE.png",
      "transparencyActive": false,
      "borderSize": 0,
      "maxWidth": 1047,
      "rollOverIconURL": "skin/IconButton_182B284E_3A4E_A903_41CC_2D8AB3BD11BE_rollover.png",
      "shadow": false,
      "horizontalAlign": "center",
      "class": "IconButton",
      "cursor": "hand",
      "paddingBottom": 0,
      "id": "IconButton_182B284E_3A4E_A903_41CC_2D8AB3BD11BE",
      "maxHeight": 1052,
      "click": "this.mainPlayList.set('selectedIndex', 4)",
      "paddingTop": 0,
      "minHeight": 1,
      "backgroundOpacity": 0,
      "verticalAlign": "middle"
     },
     {
      "paddingRight": 0,
      "minWidth": 1,
      "width": 42,
      "paddingLeft": 0,
      "height": 57,
      "mode": "push",
      "borderRadius": 0,
      "iconURL": "skin/IconButton_1FCDD1EC_3A41_BB00_41C5_40B934E107FD.png",
      "transparencyActive": false,
      "borderSize": 0,
      "maxWidth": 42,
      "rollOverIconURL": "skin/IconButton_1FCDD1EC_3A41_BB00_41C5_40B934E107FD_rollover.png",
      "shadow": false,
      "horizontalAlign": "center",
      "class": "IconButton",
      "cursor": "hand",
      "paddingBottom": 0,
      "id": "IconButton_1FCDD1EC_3A41_BB00_41C5_40B934E107FD",
      "maxHeight": 57,
      "click": "this.mainPlayList.set('selectedIndex', 6)",
      "paddingTop": 0,
      "minHeight": 1,
      "backgroundOpacity": 0,
      "verticalAlign": "middle"
     },
     {
      "paddingRight": 0,
      "minWidth": 1,
      "width": 42,
      "paddingLeft": 0,
      "height": 57,
      "mode": "push",
      "borderRadius": 0,
      "iconURL": "skin/IconButton_1F60FA0A_3A41_A900_41B0_37806583DDFA.png",
      "transparencyActive": false,
      "borderSize": 0,
      "maxWidth": 42,
      "rollOverIconURL": "skin/IconButton_1F60FA0A_3A41_A900_41B0_37806583DDFA_rollover.png",
      "shadow": false,
      "horizontalAlign": "center",
      "class": "IconButton",
      "cursor": "hand",
      "paddingBottom": 0,
      "id": "IconButton_1F60FA0A_3A41_A900_41B0_37806583DDFA",
      "maxHeight": 57,
      "click": "this.mainPlayList.set('selectedIndex', 8)",
      "paddingTop": 0,
      "minHeight": 1,
      "backgroundOpacity": 0,
      "verticalAlign": "middle"
     },
     {
      "paddingRight": 0,
      "minWidth": 1,
      "width": 42,
      "paddingLeft": 0,
      "height": 57,
      "mode": "push",
      "borderRadius": 0,
      "iconURL": "skin/IconButton_1F6F3FC2_3A42_6703_41B1_8F08A62DBDEF.png",
      "transparencyActive": false,
      "borderSize": 0,
      "maxWidth": 42,
      "rollOverIconURL": "skin/IconButton_1F6F3FC2_3A42_6703_41B1_8F08A62DBDEF_rollover.png",
      "shadow": false,
      "horizontalAlign": "center",
      "class": "IconButton",
      "cursor": "hand",
      "paddingBottom": 0,
      "id": "IconButton_1F6F3FC2_3A42_6703_41B1_8F08A62DBDEF",
      "maxHeight": 57,
      "click": "this.mainPlayList.set('selectedIndex', 9)",
      "paddingTop": 0,
      "minHeight": 1,
      "backgroundOpacity": 0,
      "verticalAlign": "middle"
     },
     {
      "paddingRight": 0,
      "minWidth": 1,
      "width": 42,
      "paddingLeft": 0,
      "height": 57,
      "mode": "push",
      "borderRadius": 0,
      "iconURL": "skin/IconButton_19D163A9_3C7E_F3DE_41A3_87FA2E93B35E.png",
      "transparencyActive": false,
      "borderSize": 0,
      "maxWidth": 42,
      "rollOverIconURL": "skin/IconButton_19D163A9_3C7E_F3DE_41A3_87FA2E93B35E_rollover.png",
      "shadow": false,
      "horizontalAlign": "center",
      "class": "IconButton",
      "cursor": "hand",
      "paddingBottom": 0,
      "id": "IconButton_19D163A9_3C7E_F3DE_41A3_87FA2E93B35E",
      "maxHeight": 57,
      "click": "this.mainPlayList.set('selectedIndex', 11)",
      "paddingTop": 0,
      "minHeight": 1,
      "backgroundOpacity": 0,
      "verticalAlign": "middle"
     },
     {
      "paddingRight": 0,
      "minWidth": 1,
      "width": 42,
      "paddingLeft": 0,
      "height": 57,
      "mode": "push",
      "borderRadius": 0,
      "iconURL": "skin/IconButton_1FB96738_3C7E_733E_41C6_983EE3914862.png",
      "transparencyActive": false,
      "borderSize": 0,
      "maxWidth": 42,
      "rollOverIconURL": "skin/IconButton_1FB96738_3C7E_733E_41C6_983EE3914862_rollover.png",
      "shadow": false,
      "horizontalAlign": "center",
      "class": "IconButton",
      "cursor": "hand",
      "paddingBottom": 0,
      "id": "IconButton_1FB96738_3C7E_733E_41C6_983EE3914862",
      "maxHeight": 57,
      "click": "this.mainPlayList.set('selectedIndex', 14)",
      "paddingTop": 0,
      "minHeight": 1,
      "backgroundOpacity": 0,
      "verticalAlign": "middle"
     },
     {
      "paddingRight": 0,
      "minWidth": 1,
      "width": 42,
      "paddingLeft": 0,
      "height": 57,
      "mode": "push",
      "borderRadius": 0,
      "iconURL": "skin/IconButton_1847A9CB_3C7E_DF51_419A_4CF09BBDE896.png",
      "transparencyActive": false,
      "borderSize": 0,
      "maxWidth": 42,
      "rollOverIconURL": "skin/IconButton_1847A9CB_3C7E_DF51_419A_4CF09BBDE896_rollover.png",
      "shadow": false,
      "horizontalAlign": "center",
      "class": "IconButton",
      "cursor": "hand",
      "paddingBottom": 0,
      "id": "IconButton_1847A9CB_3C7E_DF51_419A_4CF09BBDE896",
      "maxHeight": 57,
      "click": "this.mainPlayList.set('selectedIndex', 17)",
      "paddingTop": 0,
      "minHeight": 1,
      "backgroundOpacity": 0,
      "verticalAlign": "middle"
     },
     {
      "paddingRight": 0,
      "minWidth": 1,
      "width": 42,
      "paddingLeft": 0,
      "height": 57,
      "mode": "push",
      "borderRadius": 0,
      "iconURL": "skin/IconButton_1EBE6D84_3C7A_D7D6_41B3_9EAE2E7C9BD7.png",
      "transparencyActive": false,
      "borderSize": 0,
      "maxWidth": 42,
      "rollOverIconURL": "skin/IconButton_1EBE6D84_3C7A_D7D6_41B3_9EAE2E7C9BD7_rollover.png",
      "shadow": false,
      "horizontalAlign": "center",
      "class": "IconButton",
      "cursor": "hand",
      "paddingBottom": 0,
      "id": "IconButton_1EBE6D84_3C7A_D7D6_41B3_9EAE2E7C9BD7",
      "maxHeight": 57,
      "click": "this.mainPlayList.set('selectedIndex', 19)",
      "paddingTop": 0,
      "minHeight": 1,
      "backgroundOpacity": 0,
      "verticalAlign": "middle"
     },
     {
      "paddingRight": 0,
      "minWidth": 1,
      "width": 42,
      "paddingLeft": 0,
      "height": 57,
      "mode": "push",
      "borderRadius": 0,
      "iconURL": "skin/IconButton_1F48A18A_3C7B_EFD2_4197_7BC93E0D00E8.png",
      "transparencyActive": false,
      "borderSize": 0,
      "maxWidth": 42,
      "rollOverIconURL": "skin/IconButton_1F48A18A_3C7B_EFD2_4197_7BC93E0D00E8_rollover.png",
      "shadow": false,
      "horizontalAlign": "center",
      "class": "IconButton",
      "cursor": "hand",
      "paddingBottom": 0,
      "id": "IconButton_1F48A18A_3C7B_EFD2_4197_7BC93E0D00E8",
      "maxHeight": 57,
      "click": "this.mainPlayList.set('selectedIndex', 20)",
      "paddingTop": 0,
      "minHeight": 1,
      "backgroundOpacity": 0,
      "verticalAlign": "middle"
     },
     {
      "paddingRight": 0,
      "minWidth": 1,
      "width": 42,
      "paddingLeft": 0,
      "height": 57,
      "mode": "push",
      "borderRadius": 0,
      "iconURL": "skin/IconButton_1ED2DB23_3C7A_5CD2_41CC_37ABD2998C29.png",
      "transparencyActive": false,
      "borderSize": 0,
      "maxWidth": 42,
      "rollOverIconURL": "skin/IconButton_1ED2DB23_3C7A_5CD2_41CC_37ABD2998C29_rollover.png",
      "shadow": false,
      "horizontalAlign": "center",
      "class": "IconButton",
      "cursor": "hand",
      "paddingBottom": 0,
      "id": "IconButton_1ED2DB23_3C7A_5CD2_41CC_37ABD2998C29",
      "maxHeight": 57,
      "click": "this.mainPlayList.set('selectedIndex', 22)",
      "paddingTop": 0,
      "minHeight": 1,
      "backgroundOpacity": 0,
      "verticalAlign": "middle"
     }
    ],
    "verticalAlign": "middle"
   },
   {
    "scrollBarColor": "#000000",
    "overflow": "scroll",
    "scrollBarOpacity": 0.5,
    "paddingRight": 0,
    "minWidth": 1,
    "width": "100%",
    "paddingLeft": 0,
    "height": 42,
    "borderRadius": 0,
    "borderSize": 0,
    "gap": 10,
    "contentOpaque": false,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "shadow": false,
    "horizontalAlign": "left",
    "class": "Container",
    "paddingBottom": 0,
    "layout": "horizontal",
    "id": "Container_1E119C21_3A42_6900_41C0_3CA47D3C242A",
    "paddingTop": 0,
    "minHeight": 1,
    "backgroundOpacity": 0,
    "children": [
     {
      "paddingRight": 0,
      "minWidth": 1,
      "width": 35,
      "paddingLeft": 0,
      "height": 35,
      "mode": "push",
      "borderRadius": 0,
      "iconURL": "skin/IconButton_249849C4_3A42_EB07_41C4_34AFE0395A2F.png",
      "transparencyActive": false,
      "borderSize": 0,
      "maxWidth": 84,
      "shadow": false,
      "horizontalAlign": "center",
      "class": "IconButton",
      "cursor": "hand",
      "paddingBottom": 0,
      "id": "IconButton_249849C4_3A42_EB07_41C4_34AFE0395A2F",
      "maxHeight": 84,
      "click": "this.setComponentVisibility(this.IconButton_2803122B_3A42_5901_4195_B932A21E4536, true, 0, null, null, false); this.setComponentVisibility(this.Container_048CC2F3_11E9_4B79_4186_517CBA014E52, true, 0, null, null, false); this.setComponentVisibility(this.Container_1AB4455A_0BF1_936B_41A2_A51AA1B21943, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_2A917736_3BBA_3332_41BD_5ACFC04AF2D1, false, 0, null, null, false)",
      "paddingTop": 0,
      "minHeight": 1,
      "backgroundOpacity": 0,
      "verticalAlign": "middle"
     }
    ],
    "verticalAlign": "middle",
    "scrollBarVisible": "rollOver"
   }
  ],
  "verticalAlign": "middle"
 },
 {
  "scrollBarColor": "#000000",
  "overflow": "hidden",
  "paddingRight": 0,
  "minWidth": 1,
  "scrollBarVisible": "rollOver",
  "scrollBarOpacity": 0.5,
  "width": "99.337%",
  "paddingLeft": 0,
  "borderRadius": 0,
  "height": "48.804%",
  "borderSize": 0,
  "gap": 3,
  "contentOpaque": false,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "shadow": false,
  "horizontalAlign": "left",
  "class": "Container",
  "top": "2.92%",
  "paddingBottom": 0,
  "id": "Container_0A0F57B0_11E6_8E48_4165_04342D4A22BC",
  "layout": "absolute",
  "paddingTop": 0,
  "minHeight": 1,
  "backgroundOpacity": 0,
  "right": "0%",
  "children": [
   {
    "scrollBarColor": "#000000",
    "overflow": "visible",
    "paddingRight": 0,
    "minWidth": 1,
    "scrollBarVisible": "rollOver",
    "scrollBarOpacity": 0.5,
    "width": 38.1,
    "paddingLeft": 0,
    "borderRadius": 0,
    "height": "99.332%",
    "borderSize": 0,
    "gap": 10,
    "contentOpaque": false,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "shadow": false,
    "horizontalAlign": "left",
    "class": "Container",
    "top": 0,
    "paddingBottom": 0,
    "layout": "absolute",
    "id": "Container_03416CBF_1280_710E_4175_84AC659A193B",
    "paddingTop": 0,
    "left": 14,
    "minHeight": 1,
    "backgroundOpacity": 0,
    "children": [
     {
      "paddingRight": 0,
      "minWidth": 1,
      "width": 35,
      "paddingLeft": 0,
      "height": 35,
      "mode": "push",
      "borderRadius": 0,
      "iconURL": "skin/IconButton_29D9B918_3A5E_6B0F_41A2_1E183D537C65.png",
      "transparencyActive": false,
      "borderSize": 0,
      "maxWidth": 108,
      "shadow": false,
      "horizontalAlign": "center",
      "class": "IconButton",
      "top": "0%",
      "cursor": "hand",
      "visible": false,
      "paddingBottom": 0,
      "click": "this.setComponentVisibility(this.IconButton_29D9B918_3A5E_6B0F_41A2_1E183D537C65, false, 0, null, null, false); this.setComponentVisibility(this.MapViewer, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_2803122B_3A42_5901_4195_B932A21E4536, true, 0, null, null, false)",
      "id": "IconButton_29D9B918_3A5E_6B0F_41A2_1E183D537C65",
      "maxHeight": 108,
      "paddingTop": 0,
      "left": "0%",
      "minHeight": 1,
      "backgroundOpacity": 0,
      "verticalAlign": "middle"
     },
     {
      "paddingRight": 0,
      "minWidth": 1,
      "width": 35,
      "paddingLeft": 0,
      "height": 35,
      "mode": "push",
      "borderRadius": 0,
      "iconURL": "skin/IconButton_2803122B_3A42_5901_4195_B932A21E4536.png",
      "transparencyActive": false,
      "borderSize": 0,
      "maxWidth": 108,
      "shadow": false,
      "horizontalAlign": "center",
      "class": "IconButton",
      "top": "0%",
      "click": "this.setComponentVisibility(this.IconButton_2803122B_3A42_5901_4195_B932A21E4536, false, 0, null, null, false); this.setComponentVisibility(this.Container_1AB4455A_0BF1_936B_41A2_A51AA1B21943, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_2A917736_3BBA_3332_41BD_5ACFC04AF2D1, true, 0, null, null, false)",
      "cursor": "hand",
      "paddingBottom": 0,
      "id": "IconButton_2803122B_3A42_5901_4195_B932A21E4536",
      "maxHeight": 108,
      "paddingTop": 0,
      "minHeight": 1,
      "backgroundOpacity": 0,
      "right": "-2.13%",
      "verticalAlign": "middle"
     }
    ],
    "verticalAlign": "top"
   }
  ],
  "verticalAlign": "top"
 },
 {
  "scrollBarColor": "#000000",
  "overflow": "visible",
  "paddingRight": 0,
  "minWidth": 1,
  "scrollBarVisible": "rollOver",
  "scrollBarOpacity": 0.5,
  "width": 680,
  "paddingLeft": 0,
  "height": 265,
  "borderRadius": 9,
  "borderSize": 0,
  "gap": 4,
  "contentOpaque": false,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "shadow": false,
  "horizontalAlign": "left",
  "class": "Container",
  "top": "2.48%",
  "visible": false,
  "paddingBottom": 0,
  "layout": "absolute",
  "id": "Container_1AB4455A_0BF1_936B_41A2_A51AA1B21943",
  "paddingTop": 0,
  "left": "0.05%",
  "minHeight": 1,
  "backgroundOpacity": 0,
  "children": [
   "this.MapViewer",
   {
    "paddingRight": 0,
    "minWidth": 1,
    "width": 35,
    "paddingLeft": 0,
    "height": 35,
    "mode": "push",
    "borderRadius": 0,
    "iconURL": "skin/IconButton_2A917736_3BBA_3332_41BD_5ACFC04AF2D1.png",
    "transparencyActive": false,
    "borderSize": 0,
    "maxWidth": 108,
    "shadow": false,
    "horizontalAlign": "center",
    "class": "IconButton",
    "top": "0.85%",
    "cursor": "hand",
    "paddingBottom": 0,
    "click": "this.setComponentVisibility(this.Container_1AB4455A_0BF1_936B_41A2_A51AA1B21943, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_2A917736_3BBA_3332_41BD_5ACFC04AF2D1, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_2803122B_3A42_5901_4195_B932A21E4536, true, 0, null, null, false)",
    "id": "IconButton_2A917736_3BBA_3332_41BD_5ACFC04AF2D1",
    "maxHeight": 108,
    "paddingTop": 0,
    "left": "4.08%",
    "minHeight": 1,
    "backgroundOpacity": 0,
    "verticalAlign": "middle"
   }
  ],
  "verticalAlign": "top"
 },
 {
  "scrollBarColor": "#000000",
  "overflow": "scroll",
  "scrollBarOpacity": 0.5,
  "backgroundColorDirection": "vertical",
  "paddingRight": 0,
  "minWidth": 1,
  "scrollBarVisible": "rollOver",
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "paddingLeft": 0,
  "width": "100%",
  "borderRadius": 0,
  "height": "99.891%",
  "borderSize": 0,
  "backgroundColorRatios": [
   0,
   1
  ],
  "contentOpaque": false,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "shadow": false,
  "horizontalAlign": "left",
  "class": "Container",
  "top": "0%",
  "paddingBottom": 0,
  "layout": "absolute",
  "id": "Container_4971667B_447C_F923_41C6_8260D1387EBA",
  "gap": 10,
  "paddingTop": 0,
  "left": "0%",
  "minHeight": 1,
  "backgroundOpacity": 0.3,
  "children": [
   {
    "paddingRight": 0,
    "minWidth": 1,
    "width": "100%",
    "paddingLeft": 0,
    "borderRadius": 0,
    "height": "100%",
    "horizontalAlign": "center",
    "borderSize": 0,
    "url": "skin/Image_48296249_447C_396F_41C8_119A76A3ABA4.png",
    "scaleMode": "fit_outside",
    "shadow": false,
    "class": "Image",
    "top": "0%",
    "paddingBottom": 0,
    "id": "Image_48296249_447C_396F_41C8_119A76A3ABA4",
    "paddingTop": 0,
    "left": "0%",
    "minHeight": 1,
    "backgroundOpacity": 0,
    "verticalAlign": "middle"
   },
   {
    "scrollBarColor": "#000000",
    "overflow": "scroll",
    "scrollBarOpacity": 0.5,
    "backgroundColorDirection": "vertical",
    "paddingRight": 0,
    "minWidth": 1,
    "scrollBarVisible": "rollOver",
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "paddingLeft": 0,
    "width": "100%",
    "borderRadius": 0,
    "height": "100%",
    "borderSize": 0,
    "backgroundColorRatios": [
     0,
     1
    ],
    "contentOpaque": false,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "shadow": false,
    "horizontalAlign": "center",
    "class": "Container",
    "paddingBottom": 0,
    "layout": "absolute",
    "bottom": "-0.02%",
    "id": "Container_048CC2F3_11E9_4B79_4186_517CBA014E52",
    "gap": 10,
    "paddingTop": 0,
    "left": "0%",
    "minHeight": 1,
    "backgroundOpacity": 0.3,
    "children": [
     {
      "paddingRight": 0,
      "minWidth": 1,
      "width": "100%",
      "paddingLeft": 0,
      "borderRadius": 0,
      "height": "100%",
      "horizontalAlign": "center",
      "borderSize": 0,
      "url": "skin/Image_19B2F4BC_0BF1_B12F_419C_772DA37A7B15.png",
      "scaleMode": "fit_outside",
      "shadow": false,
      "class": "Image",
      "top": 0,
      "paddingBottom": 0,
      "id": "Image_19B2F4BC_0BF1_B12F_419C_772DA37A7B15",
      "click": "eval('var frame=+location.search.replace(\"?\", \"\");if (!frame) {frame = 0;}if (typeof setMediaByIndex === \"function\") {localStorage.setItem(\"displayIndex\", frame);setMediaByIndex(frame);}');",
      "paddingTop": 0,
      "left": -0.04,
      "minHeight": 1,
      "backgroundOpacity": 0,
      "verticalAlign": "middle"
     },
     {
      "scrollBarColor": "#000000",
      "overflow": "scroll",
      "paddingRight": 0,
      "minWidth": 1,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "width": "60.736%",
      "paddingLeft": 0,
      "borderRadius": 0,
      "height": "88.587%",
      "borderSize": 0,
      "gap": 4,
      "contentOpaque": false,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "shadow": false,
      "horizontalAlign": "center",
      "class": "Container",
      "top": "2.62%",
      "paddingBottom": 0,
      "layout": "vertical",
      "id": "Container_3533313B_3A04_0067_41CC_CF6BC934FA11",
      "paddingTop": 0,
      "left": "18.69%",
      "minHeight": 1,
      "backgroundOpacity": 0,
      "children": [
       {
        "scrollBarColor": "#000000",
        "overflow": "scroll",
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "minWidth": 1,
        "width": "92.083%",
        "paddingLeft": 0,
        "borderRadius": 0,
        "height": "10.152%",
        "borderSize": 0,
        "gap": 10,
        "contentOpaque": false,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "shadow": false,
        "horizontalAlign": "center",
        "class": "Container",
        "paddingBottom": 0,
        "layout": "horizontal",
        "id": "Container_3764A1B8_3A04_0061_41BF_1DB9D8261A18",
        "paddingTop": 0,
        "minHeight": 1,
        "backgroundOpacity": 0,
        "children": [
         {
          "paddingRight": 0,
          "minWidth": 1,
          "width": "79.193%",
          "paddingLeft": 0,
          "borderRadius": 0,
          "height": "73.333%",
          "horizontalAlign": "center",
          "borderSize": 0,
          "url": "skin/Image_374B2C06_3A0C_0020_41B2_5F6D50FC5E5F.png",
          "scaleMode": "fit_inside",
          "maxWidth": 500,
          "shadow": false,
          "class": "Image",
          "paddingBottom": 0,
          "id": "Image_374B2C06_3A0C_0020_41B2_5F6D50FC5E5F",
          "maxHeight": 61,
          "paddingTop": 0,
          "minHeight": 1,
          "backgroundOpacity": 0,
          "verticalAlign": "middle"
         }
        ],
        "verticalAlign": "bottom"
       },
       {
        "scrollBarColor": "#000000",
        "overflow": "scroll",
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "minWidth": 1,
        "width": "100%",
        "paddingLeft": 0,
        "borderRadius": 0,
        "height": "1.764%",
        "borderSize": 0,
        "gap": 10,
        "contentOpaque": false,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "shadow": false,
        "horizontalAlign": "left",
        "class": "Container",
        "paddingBottom": 0,
        "layout": "absolute",
        "id": "Container_37A327EA_3A3C_0FE1_4199_D3E659A2D12F",
        "paddingTop": 0,
        "minHeight": 1,
        "backgroundOpacity": 0,
        "verticalAlign": "top"
       },
       {
        "scrollBarColor": "#000000",
        "overflow": "visible",
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "minWidth": 1,
        "width": "99.94%",
        "paddingLeft": 0,
        "borderRadius": 0,
        "height": "7.327%",
        "borderSize": 0,
        "gap": 10,
        "contentOpaque": false,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "shadow": false,
        "horizontalAlign": "center",
        "class": "Container",
        "paddingBottom": 0,
        "layout": "horizontal",
        "id": "Container_37118E52_3A43_A900_41B3_99441E93A49B",
        "paddingTop": 0,
        "minHeight": 1,
        "backgroundOpacity": 0,
        "children": [
         {
          "scrollBarColor": "#000000",
          "overflow": "visible",
          "scrollBarVisible": "rollOver",
          "scrollBarOpacity": 0.5,
          "paddingRight": 0,
          "minWidth": 1,
          "width": "99.901%",
          "paddingLeft": 0,
          "borderRadius": 0,
          "height": "86.667%",
          "borderSize": 0,
          "gap": 6,
          "contentOpaque": false,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "shadow": false,
          "horizontalAlign": "center",
          "class": "Container",
          "paddingBottom": 0,
          "layout": "horizontal",
          "id": "Container_3783528D_3A0C_0023_417F_D3D15240B4C7",
          "paddingTop": 0,
          "minHeight": 1,
          "backgroundOpacity": 0,
          "children": [
           {
            "scrollBarColor": "#000000",
            "overflow": "scroll",
            "paddingRight": 0,
            "minWidth": 1,
            "scrollBarVisible": "rollOver",
            "scrollBarOpacity": 0.5,
            "width": "10.55%",
            "paddingLeft": 0,
            "borderRadius": 0,
            "height": "97.297%",
            "borderSize": 0,
            "gap": 10,
            "contentOpaque": false,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "maxWidth": 300,
            "shadow": false,
            "horizontalAlign": "center",
            "class": "Container",
            "paddingBottom": 0,
            "layout": "horizontal",
            "id": "Container_3716DC42_3A42_6903_41C0_A36003727C4F",
            "maxHeight": 300,
            "paddingTop": 0,
            "minHeight": 1,
            "backgroundOpacity": 0,
            "children": [
             {
              "paddingRight": 0,
              "minWidth": 1,
              "width": "95.833%",
              "paddingLeft": 0,
              "borderRadius": 0,
              "height": "96%",
              "horizontalAlign": "center",
              "borderSize": 0,
              "url": "skin/Image_3540BF2F_3A0C_007F_41C4_9B80703F60DF.png",
              "scaleMode": "fit_inside",
              "maxWidth": 108,
              "shadow": false,
              "class": "Image",
              "paddingBottom": 0,
              "id": "Image_3540BF2F_3A0C_007F_41C4_9B80703F60DF",
              "maxHeight": 108,
              "paddingTop": 0,
              "minHeight": 1,
              "backgroundOpacity": 0,
              "verticalAlign": "middle"
             }
            ],
            "verticalAlign": "middle"
           },
           {
            "scrollBarColor": "#000000",
            "overflow": "scroll",
            "paddingRight": 0,
            "minWidth": 1,
            "scrollBarVisible": "rollOver",
            "scrollBarOpacity": 0.5,
            "width": "10.549%",
            "paddingLeft": 0,
            "borderRadius": 0,
            "height": "97.297%",
            "borderSize": 0,
            "gap": 10,
            "contentOpaque": false,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "maxWidth": 300,
            "shadow": false,
            "horizontalAlign": "center",
            "class": "Container",
            "paddingBottom": 0,
            "layout": "horizontal",
            "id": "Container_3695443E_3A42_B900_41BB_420473422841",
            "maxHeight": 300,
            "paddingTop": 0,
            "minHeight": 1,
            "backgroundOpacity": 0,
            "children": [
             {
              "paddingRight": 0,
              "minWidth": 1,
              "width": "95.83%",
              "paddingLeft": 0,
              "borderRadius": 0,
              "height": "96%",
              "horizontalAlign": "center",
              "borderSize": 0,
              "url": "skin/Image_37E178D8_3A0C_0021_41C9_1ABD150FD584.png",
              "scaleMode": "fit_inside",
              "maxWidth": 108,
              "shadow": false,
              "class": "Image",
              "paddingBottom": 0,
              "id": "Image_37E178D8_3A0C_0021_41C9_1ABD150FD584",
              "maxHeight": 108,
              "paddingTop": 0,
              "minHeight": 1,
              "backgroundOpacity": 0,
              "verticalAlign": "middle"
             }
            ],
            "verticalAlign": "middle"
           },
           {
            "scrollBarColor": "#000000",
            "overflow": "scroll",
            "scrollBarOpacity": 0.5,
            "paddingRight": 0,
            "minWidth": 1,
            "scrollBarVisible": "rollOver",
            "width": "46.753%",
            "paddingLeft": 0,
            "borderRadius": 0,
            "height": "97.297%",
            "borderSize": 0,
            "gap": 10,
            "contentOpaque": false,
            "maxWidth": 1000,
            "scrollBarWidth": 10,
            "scrollBarMargin": 2,
            "shadow": false,
            "horizontalAlign": "center",
            "class": "Container",
            "paddingBottom": 0,
            "layout": "horizontal",
            "id": "Container_377230ED_3A43_B900_4161_0C9E912D04EC",
            "paddingTop": 0,
            "minHeight": 1,
            "backgroundOpacity": 0,
            "children": [
             {
              "paddingRight": 0,
              "minWidth": 1,
              "width": "99.138%",
              "paddingLeft": 0,
              "borderRadius": 0,
              "height": "70.59%",
              "horizontalAlign": "center",
              "borderSize": 0,
              "url": "skin/Image_37D83EB6_3A0C_0061_41C6_D666B149EE07.png",
              "scaleMode": "fit_inside",
              "maxWidth": 275,
              "shadow": false,
              "class": "Image",
              "paddingBottom": 0,
              "id": "Image_37D83EB6_3A0C_0061_41C6_D666B149EE07",
              "maxHeight": 40,
              "paddingTop": 0,
              "minHeight": 1,
              "backgroundOpacity": 0,
              "verticalAlign": "middle"
             }
            ],
            "verticalAlign": "middle"
           }
          ],
          "verticalAlign": "middle"
         }
        ],
        "verticalAlign": "middle"
       },
       {
        "scrollBarColor": "#000000",
        "overflow": "hidden",
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "minWidth": 1,
        "width": "99.858%",
        "paddingLeft": 0,
        "borderRadius": 0,
        "height": "1.227%",
        "borderSize": 0,
        "gap": 10,
        "contentOpaque": false,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "shadow": false,
        "horizontalAlign": "center",
        "class": "Container",
        "paddingBottom": 0,
        "layout": "horizontal",
        "id": "Container_290A2AD9_3BF6_5D7E_41C3_1E444A5BBC71",
        "paddingTop": 0,
        "minHeight": 1,
        "backgroundOpacity": 0,
        "children": [
         {
          "paddingRight": 0,
          "minWidth": 1,
          "width": 726,
          "paddingLeft": 0,
          "height": 2,
          "borderRadius": 0,
          "horizontalAlign": "center",
          "borderSize": 0,
          "url": "skin/Image_285CB42E_3BF6_D4D3_41A3_9A8D7F05B2C3.png",
          "maxWidth": 726,
          "scaleMode": "fit_inside",
          "shadow": false,
          "class": "Image",
          "paddingBottom": 0,
          "id": "Image_285CB42E_3BF6_D4D3_41A3_9A8D7F05B2C3",
          "maxHeight": 2,
          "paddingTop": 0,
          "minHeight": 1,
          "backgroundOpacity": 0,
          "verticalAlign": "middle"
         }
        ],
        "verticalAlign": "middle"
       },
       {
        "scrollBarColor": "#000000",
        "overflow": "scroll",
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "minWidth": 1,
        "width": "100%",
        "paddingLeft": 0,
        "borderRadius": 0,
        "height": "4.417%",
        "borderSize": 0,
        "gap": 5,
        "contentOpaque": false,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "shadow": false,
        "horizontalAlign": "center",
        "class": "Container",
        "paddingBottom": 0,
        "layout": "horizontal",
        "id": "Container_34FB5B25_3A3C_0063_41C8_57AAEAD2087C",
        "paddingTop": 0,
        "minHeight": 1,
        "backgroundOpacity": 0,
        "children": [
         {
          "scrollBarColor": "#000000",
          "overflow": "scroll",
          "scrollBarVisible": "rollOver",
          "scrollBarOpacity": 0.5,
          "paddingRight": 0,
          "minWidth": 1,
          "width": "13.477%",
          "paddingLeft": 0,
          "borderRadius": 0,
          "height": "100%",
          "borderSize": 0,
          "gap": 10,
          "contentOpaque": false,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "shadow": false,
          "horizontalAlign": "center",
          "class": "Container",
          "paddingBottom": 0,
          "layout": "horizontal",
          "id": "Container_357D9BEA_3AC2_AF00_41CB_19180254F021",
          "paddingTop": 0,
          "minHeight": 1,
          "backgroundOpacity": 0,
          "children": [
           {
            "paddingRight": 0,
            "minWidth": 1,
            "width": "86.03%",
            "paddingLeft": 0,
            "borderRadius": 0,
            "height": "97.14%",
            "horizontalAlign": "center",
            "borderSize": 0,
            "url": "skin/Image_37917A60_3A0C_00E1_41C5_991EF69487EC.png",
            "scaleMode": "fit_inside",
            "maxWidth": 117,
            "shadow": false,
            "class": "Image",
            "paddingBottom": 0,
            "id": "Image_37917A60_3A0C_00E1_41C5_991EF69487EC",
            "maxHeight": 45,
            "paddingTop": 0,
            "minHeight": 1,
            "backgroundOpacity": 0,
            "verticalAlign": "middle"
           }
          ],
          "verticalAlign": "middle"
         },
         {
          "scrollBarColor": "#000000",
          "overflow": "scroll",
          "scrollBarVisible": "rollOver",
          "scrollBarOpacity": 0.5,
          "paddingRight": 0,
          "minWidth": 1,
          "width": "14.091%",
          "paddingLeft": 0,
          "borderRadius": 0,
          "height": "100%",
          "borderSize": 0,
          "gap": 10,
          "contentOpaque": false,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "shadow": false,
          "horizontalAlign": "center",
          "class": "Container",
          "paddingBottom": 0,
          "layout": "horizontal",
          "id": "Container_3571F98A_3AC6_AB00_41C5_660EE04AD975",
          "paddingTop": 0,
          "minHeight": 1,
          "backgroundOpacity": 0,
          "children": [
           {
            "paddingRight": 0,
            "minWidth": 1,
            "width": "97.183%",
            "paddingLeft": 0,
            "borderRadius": 0,
            "height": "100%",
            "horizontalAlign": "center",
            "borderSize": 0,
            "url": "skin/Image_34518027_3A04_006F_41BB_EE3C665B25DF.png",
            "scaleMode": "fit_inside",
            "maxWidth": 258,
            "shadow": false,
            "class": "Image",
            "paddingBottom": 0,
            "id": "Image_34518027_3A04_006F_41BB_EE3C665B25DF",
            "maxHeight": 243,
            "paddingTop": 0,
            "minHeight": 1,
            "backgroundOpacity": 0,
            "verticalAlign": "middle"
           }
          ],
          "verticalAlign": "middle"
         },
         {
          "scrollBarColor": "#000000",
          "overflow": "scroll",
          "scrollBarVisible": "rollOver",
          "scrollBarOpacity": 0.5,
          "paddingRight": 0,
          "minWidth": 1,
          "width": "39.063%",
          "paddingLeft": 0,
          "borderRadius": 0,
          "height": "100%",
          "borderSize": 0,
          "gap": 10,
          "contentOpaque": false,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "shadow": false,
          "horizontalAlign": "center",
          "class": "Container",
          "paddingBottom": 0,
          "layout": "horizontal",
          "id": "Container_2A91CA77_3AC7_A900_41B9_43489B29B672",
          "paddingTop": 0,
          "minHeight": 1,
          "backgroundOpacity": 0,
          "children": [
           {
            "paddingRight": 0,
            "minWidth": 1,
            "width": "99.491%",
            "paddingLeft": 0,
            "borderRadius": 0,
            "height": "97.14%",
            "horizontalAlign": "center",
            "borderSize": 0,
            "url": "skin/Image_3427C160_3A0C_00E0_41C0_462626DB2AAE.png",
            "scaleMode": "fit_inside",
            "maxWidth": 408,
            "shadow": false,
            "class": "Image",
            "paddingBottom": 0,
            "id": "Image_3427C160_3A0C_00E0_41C0_462626DB2AAE",
            "maxHeight": 45,
            "paddingTop": 0,
            "minHeight": 1,
            "backgroundOpacity": 0,
            "verticalAlign": "middle"
           }
          ],
          "verticalAlign": "middle"
         },
         {
          "scrollBarColor": "#000000",
          "overflow": "visible",
          "scrollBarVisible": "rollOver",
          "scrollBarOpacity": 0.5,
          "paddingRight": 0,
          "minWidth": 1,
          "width": "15.139%",
          "paddingLeft": 0,
          "borderRadius": 0,
          "height": "100%",
          "borderSize": 0,
          "gap": 10,
          "contentOpaque": false,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "shadow": false,
          "horizontalAlign": "center",
          "class": "Container",
          "paddingBottom": 0,
          "layout": "horizontal",
          "id": "Container_35A8B233_3AC6_B900_41A6_1E7D94E0E689",
          "paddingTop": 0,
          "minHeight": 1,
          "backgroundOpacity": 0,
          "children": [
           {
            "paddingRight": 0,
            "minWidth": 1,
            "width": 30,
            "paddingLeft": 0,
            "borderRadius": 0,
            "height": "100%",
            "horizontalAlign": "center",
            "borderSize": 0,
            "url": "skin/Image_34309FE8_3A0C_7FE1_41C0_E4200753053D.png",
            "scaleMode": "fit_inside",
            "maxWidth": 300,
            "shadow": false,
            "class": "Image",
            "paddingBottom": 0,
            "id": "Image_34309FE8_3A0C_7FE1_41C0_E4200753053D",
            "maxHeight": 300,
            "paddingTop": 0,
            "minHeight": 1,
            "backgroundOpacity": 0,
            "verticalAlign": "middle"
           }
          ],
          "verticalAlign": "middle"
         }
        ],
        "verticalAlign": "middle"
       },
       {
        "scrollBarColor": "#000000",
        "overflow": "visible",
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "minWidth": 1,
        "width": "100%",
        "paddingLeft": 0,
        "borderRadius": 0,
        "height": "7.276%",
        "borderSize": 0,
        "gap": 10,
        "contentOpaque": false,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "shadow": false,
        "horizontalAlign": "center",
        "class": "Container",
        "paddingBottom": 0,
        "layout": "horizontal",
        "id": "Container_36B2B434_3A4E_B907_41BF_2EF267CB899D",
        "paddingTop": 0,
        "minHeight": 1,
        "backgroundOpacity": 0,
        "children": [
         {
          "scrollBarColor": "#000000",
          "overflow": "scroll",
          "scrollBarVisible": "rollOver",
          "scrollBarOpacity": 0.5,
          "paddingRight": 0,
          "minWidth": 1,
          "width": "83.008%",
          "paddingLeft": 0,
          "borderRadius": 0,
          "height": "97.67%",
          "borderSize": 0,
          "gap": 10,
          "contentOpaque": false,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "shadow": false,
          "horizontalAlign": "center",
          "class": "Container",
          "paddingBottom": 0,
          "layout": "horizontal",
          "id": "Container_2A9982D6_3AC2_B903_4196_183817BA9826",
          "paddingTop": 0,
          "minHeight": 1,
          "backgroundOpacity": 0,
          "children": [
           {
            "paddingRight": 0,
            "minWidth": 1,
            "width": "87.799%",
            "paddingLeft": 0,
            "borderRadius": 0,
            "height": "64.407%",
            "horizontalAlign": "center",
            "borderSize": 0,
            "url": "skin/Image_34A3C85B_3A0C_0027_41B6_C09A77E73AB1.png",
            "scaleMode": "fit_inside",
            "maxWidth": 734,
            "shadow": false,
            "class": "Image",
            "paddingBottom": 0,
            "id": "Image_34A3C85B_3A0C_0027_41B6_C09A77E73AB1",
            "maxHeight": 49,
            "paddingTop": 0,
            "minHeight": 1,
            "backgroundOpacity": 0,
            "verticalAlign": "middle"
           }
          ],
          "verticalAlign": "middle"
         }
        ],
        "verticalAlign": "middle"
       },
       {
        "scrollBarColor": "#000000",
        "overflow": "hidden",
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "minWidth": 1,
        "width": "100%",
        "paddingLeft": 0,
        "borderRadius": 0,
        "height": "2.454%",
        "borderSize": 0,
        "gap": 10,
        "contentOpaque": false,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "shadow": false,
        "horizontalAlign": "center",
        "class": "Container",
        "paddingBottom": 0,
        "layout": "horizontal",
        "id": "Container_29B9E995_3BFA_DFF1_41C5_B692E7663F76",
        "paddingTop": 0,
        "minHeight": 1,
        "backgroundOpacity": 0,
        "children": [
         {
          "paddingRight": 0,
          "minWidth": 1,
          "width": 726,
          "paddingLeft": 0,
          "height": 2,
          "borderRadius": 0,
          "horizontalAlign": "center",
          "borderSize": 0,
          "url": "skin/Image_2A70BEF1_3BFA_754E_41A1_D377ED2E5E7C.png",
          "maxWidth": 726,
          "scaleMode": "fit_inside",
          "shadow": false,
          "class": "Image",
          "paddingBottom": 0,
          "id": "Image_2A70BEF1_3BFA_754E_41A1_D377ED2E5E7C",
          "maxHeight": 2,
          "paddingTop": 0,
          "minHeight": 1,
          "backgroundOpacity": 0,
          "verticalAlign": "middle"
         }
        ],
        "verticalAlign": "middle"
       },
       {
        "scrollBarColor": "#000000",
        "overflow": "scroll",
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "minWidth": 1,
        "width": "100%",
        "paddingLeft": 0,
        "borderRadius": 0,
        "height": "6.937%",
        "borderSize": 0,
        "gap": 4,
        "contentOpaque": false,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "shadow": false,
        "horizontalAlign": "center",
        "class": "Container",
        "paddingBottom": 0,
        "layout": "horizontal",
        "id": "Container_34AD67FD_3A04_0FE3_41CA_6C2C56155F84",
        "paddingTop": 0,
        "minHeight": 1,
        "backgroundOpacity": 0,
        "children": [
         {
          "scrollBarColor": "#000000",
          "overflow": "scroll",
          "scrollBarVisible": "rollOver",
          "scrollBarOpacity": 0.5,
          "paddingRight": 0,
          "minWidth": 1,
          "width": "13.505%",
          "paddingLeft": 0,
          "borderRadius": 0,
          "height": "62.5%",
          "borderSize": 0,
          "gap": 10,
          "contentOpaque": false,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "shadow": false,
          "horizontalAlign": "center",
          "class": "Container",
          "paddingBottom": 0,
          "layout": "horizontal",
          "id": "Container_2ABC116A_3AC3_DB00_4194_EFC4CB10B92F",
          "paddingTop": 0,
          "minHeight": 1,
          "backgroundOpacity": 0,
          "children": [
           {
            "paddingRight": 0,
            "minWidth": 1,
            "width": "86.03%",
            "paddingLeft": 0,
            "borderRadius": 0,
            "height": "97.14%",
            "horizontalAlign": "center",
            "borderSize": 0,
            "url": "skin/Image_346BFEE5_3A04_01E0_41C6_7BF64C950C0A.png",
            "scaleMode": "fit_inside",
            "maxWidth": 117,
            "shadow": false,
            "class": "Image",
            "paddingBottom": 0,
            "id": "Image_346BFEE5_3A04_01E0_41C6_7BF64C950C0A",
            "maxHeight": 45,
            "paddingTop": 0,
            "minHeight": 1,
            "backgroundOpacity": 0,
            "verticalAlign": "middle"
           }
          ],
          "verticalAlign": "middle"
         },
         {
          "scrollBarColor": "#000000",
          "overflow": "scroll",
          "scrollBarVisible": "rollOver",
          "scrollBarOpacity": 0.5,
          "paddingRight": 0,
          "minWidth": 1,
          "width": "12.891%",
          "paddingLeft": 0,
          "borderRadius": 0,
          "height": "100%",
          "borderSize": 0,
          "gap": 10,
          "contentOpaque": false,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "shadow": false,
          "horizontalAlign": "center",
          "class": "Container",
          "paddingBottom": 0,
          "layout": "horizontal",
          "id": "Container_2AD5AA08_3AC6_A90F_41C9_220344DA9D3F",
          "paddingTop": 0,
          "minHeight": 1,
          "backgroundOpacity": 0,
          "children": [
           {
            "paddingRight": 0,
            "minWidth": 1,
            "width": "85.42%",
            "paddingLeft": 0,
            "borderRadius": 0,
            "height": "83.33%",
            "horizontalAlign": "center",
            "borderSize": 0,
            "url": "skin/Image_2A4B2A14_3A04_0021_41BB_15D62AD6CC93.png",
            "scaleMode": "fit_inside",
            "maxWidth": 222,
            "shadow": false,
            "class": "Image",
            "paddingBottom": 0,
            "id": "Image_2A4B2A14_3A04_0021_41BB_15D62AD6CC93",
            "maxHeight": 222,
            "paddingTop": 0,
            "minHeight": 1,
            "backgroundOpacity": 0,
            "verticalAlign": "middle"
           }
          ],
          "verticalAlign": "middle"
         },
         {
          "scrollBarColor": "#000000",
          "overflow": "scroll",
          "scrollBarVisible": "rollOver",
          "scrollBarOpacity": 0.5,
          "paddingRight": 0,
          "minWidth": 1,
          "width": "54.618%",
          "paddingLeft": 0,
          "borderRadius": 0,
          "height": "67.857%",
          "borderSize": 0,
          "gap": 10,
          "contentOpaque": false,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "shadow": false,
          "horizontalAlign": "center",
          "class": "Container",
          "paddingBottom": 0,
          "layout": "horizontal",
          "id": "Container_2A20B5B4_3AC6_5B00_41C3_40F3BE7BE1C5",
          "paddingTop": 0,
          "minHeight": 1,
          "backgroundOpacity": 0,
          "children": [
           {
            "paddingRight": 0,
            "minWidth": 1,
            "width": "83.455%",
            "paddingLeft": 0,
            "borderRadius": 0,
            "height": "84.211%",
            "horizontalAlign": "center",
            "borderSize": 0,
            "url": "skin/Image_37EAE4A5_3A04_0062_41C3_451CBF5B96AA.png",
            "scaleMode": "fit_inside",
            "maxWidth": 459,
            "shadow": false,
            "class": "Image",
            "paddingBottom": 0,
            "id": "Image_37EAE4A5_3A04_0062_41C3_451CBF5B96AA",
            "maxHeight": 41,
            "paddingTop": 0,
            "minHeight": 1,
            "backgroundOpacity": 0,
            "verticalAlign": "middle"
           }
          ],
          "verticalAlign": "middle"
         }
        ],
        "verticalAlign": "middle"
       },
       {
        "scrollBarColor": "#000000",
        "overflow": "scroll",
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "minWidth": 1,
        "width": "100%",
        "paddingLeft": 0,
        "borderRadius": 0,
        "height": "5.834%",
        "borderSize": 0,
        "gap": 10,
        "contentOpaque": false,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "shadow": false,
        "horizontalAlign": "center",
        "class": "Container",
        "paddingBottom": 0,
        "layout": "horizontal",
        "id": "Container_37E2874E_3A1C_0021_41C0_98E65FDF63B2",
        "paddingTop": 0,
        "minHeight": 1,
        "backgroundOpacity": 0,
        "children": [
         {
          "scrollBarColor": "#000000",
          "overflow": "scroll",
          "scrollBarVisible": "rollOver",
          "scrollBarOpacity": 0.5,
          "paddingRight": 0,
          "minWidth": 1,
          "width": "33.984%",
          "paddingLeft": 0,
          "borderRadius": 0,
          "height": "100%",
          "borderSize": 0,
          "gap": 10,
          "contentOpaque": false,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "shadow": false,
          "horizontalAlign": "center",
          "class": "Container",
          "paddingBottom": 0,
          "layout": "horizontal",
          "id": "Container_2ADC0983_3AC2_6B01_41CA_4E98B5357DFD",
          "paddingTop": 0,
          "minHeight": 1,
          "backgroundOpacity": 0,
          "children": [
           {
            "paddingRight": 0,
            "minWidth": 1,
            "width": "86.842%",
            "paddingLeft": 0,
            "borderRadius": 0,
            "height": "70.833%",
            "horizontalAlign": "center",
            "borderSize": 0,
            "url": "skin/Image_348B3F6A_3A1C_00E1_41C6_ECDDCEC7AD0A.png",
            "scaleMode": "fit_inside",
            "maxWidth": 297,
            "shadow": false,
            "class": "Image",
            "paddingBottom": 0,
            "id": "Image_348B3F6A_3A1C_00E1_41C6_ECDDCEC7AD0A",
            "maxHeight": 44,
            "paddingTop": 0,
            "minHeight": 1,
            "backgroundOpacity": 0,
            "verticalAlign": "middle"
           }
          ],
          "verticalAlign": "middle"
         }
        ],
        "verticalAlign": "middle"
       }
      ],
      "verticalAlign": "middle"
     },
     {
      "scrollBarColor": "#000000",
      "overflow": "scroll",
      "paddingRight": 0,
      "minWidth": 1,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "width": "100%",
      "paddingLeft": 0,
      "borderRadius": 0,
      "height": "12.935%",
      "borderSize": 0,
      "gap": 10,
      "contentOpaque": false,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "shadow": false,
      "horizontalAlign": "left",
      "class": "Container",
      "top": "0%",
      "paddingBottom": 0,
      "layout": "absolute",
      "id": "Container_3038C9F6_3C5B_0ECF_41CA_CAE8FB6F0CE1",
      "paddingTop": 0,
      "left": "0%",
      "minHeight": 1,
      "backgroundOpacity": 0,
      "children": [
       {
        "paddingRight": 0,
        "minWidth": 1,
        "width": 43,
        "paddingLeft": 0,
        "height": 44,
        "mode": "push",
        "borderRadius": 0,
        "iconURL": "skin/IconButton_2F7858C6_3CDB_08C9_41C0_F9AC14933CBC.png",
        "transparencyActive": false,
        "borderSize": 0,
        "maxWidth": 72,
        "shadow": false,
        "horizontalAlign": "center",
        "class": "IconButton",
        "top": "21.85%",
        "cursor": "hand",
        "paddingBottom": 0,
        "click": "this.setComponentVisibility(this.Container_048CC2F3_11E9_4B79_4186_517CBA014E52, false, 0, null, null, false)",
        "id": "IconButton_2F7858C6_3CDB_08C9_41C0_F9AC14933CBC",
        "maxHeight": 72,
        "paddingTop": 0,
        "left": "4.31%",
        "minHeight": 1,
        "backgroundOpacity": 0,
        "verticalAlign": "middle"
       }
      ],
      "verticalAlign": "top"
     }
    ],
    "verticalAlign": "middle"
   }
  ],
  "verticalAlign": "top"
 }
], 
 "scrollBarColor": "#000000",
 "overflow": "visible",
 "paddingRight": 0,
 "mouseWheelEnabled": true,
 "minWidth": 20,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0,
 "width": "100%",
 "borderRadius": 0,
 "height": "100%",
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "shadow": false,
 "horizontalAlign": "left",
 "class": "Player",
 "vrPolyfillScale": 1,
 "scripts": {
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio) delete audios[audio.get('id')]; } if(audio) audio.stop(); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "unregisterKey": function(key){  delete window[key]; },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "registerKey": function(key, value){  window[key] = value; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "getKey": function(key){  return window[key]; },
  "existsKey": function(key){  return key in window; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } }
 },
 "paddingBottom": 0,
 "layout": "absolute",
 "id": "rootPlayer",
 "gap": 10,
 "backgroundPreloadEnabled": true,
 "paddingTop": 0,
 "minHeight": 20,
 "start": "this.mainPlayList.set('selectedIndex', 0); this.playList_4A4A3568_449C_3B2D_41CD_AF9412AB591A.set('selectedIndex', 0)",
 "verticalAlign": "top"
})